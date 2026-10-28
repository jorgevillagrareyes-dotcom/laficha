"""Genera el modelo 3D del corazón (malla) para el atlas de ECG de La Ficha.
Superficie implícita: unión suave de formas simples (ventrículos, aurículas, orejuelas, grandes vasos),
extraída con marching cubes y suavizada. Salida: docs/javascripts/atlas-ecg-modelo.js (datos en base64).
Coordenadas: x = izquierda del paciente, y = arriba, z = adelante (cm).
Requiere numpy y scikit-image (solo para regenerar el modelo; el sitio no los usa al compilar):
python3 scripts/modelo-corazon.py docs/javascripts/atlas-ecg-modelo.js"""
import base64, json, sys
import numpy as np
from skimage import measure

def rcone(p, a, b, ra, rb):
    """Distancia a un cono redondeado entre a (radio ra) y b (radio rb)."""
    a = np.asarray(a, float); b = np.asarray(b, float)
    ba = b - a; L = np.linalg.norm(ba); u = ba / L
    pa = p - a
    t = pa @ u
    q = np.linalg.norm(pa - t[..., None] * u, axis=-1)
    # aproximación: interpolar el radio a lo largo del eje
    s = np.clip(t / L, 0, 1)
    r = ra + (rb - ra) * s
    ts = np.clip(t, 0, L)
    d = np.sqrt(q ** 2 + (t - ts) ** 2) - r
    return d

def ellip(p, c, r):
    c = np.asarray(c, float); r = np.asarray(r, float)
    k0 = np.linalg.norm((p - c) / r, axis=-1)
    k1 = np.linalg.norm((p - c) / (r * r), axis=-1)
    return k0 * (k0 - 1.0) / np.maximum(k1, 1e-6)

def caps(p, a, b, r):
    return rcone(p, a, b, r, r)

def smin(a, b, k):
    h = np.clip(0.5 + 0.5 * (b - a) / k, 0, 1)
    return b * (1 - h) + a * h - k * h * (1 - h)

def cadena(p, pts, r):
    d = None
    for i in range(len(pts) - 1):
        di = caps(p, pts[i], pts[i + 1], r if np.isscalar(r) else r[i])
        d = di if d is None else np.minimum(d, di)
    return d

def grupos(p):
    G = {}
    lv = rcone(p, (0.2, 0.9, -0.9), (2.9, -3.7, 0.9), 2.45, 0.55)
    rv = rcone(p, (-1.5, 0.5, 0.9), (1.4, -3.2, 2.0), 2.0, 0.45)
    rvot = rcone(p, (-0.9, 0.0, 1.7), (-0.1, 2.3, 1.5), 1.25, 0.95)
    G["ventriculos"] = smin(smin(lv, rv, 0.9), rvot, 0.6)
    G["vi"] = lv; G["vd"] = smin(rv, rvot, 0.6)
    ra = ellip(p, (-2.55, 1.35, -0.1), (1.45, 1.75, 1.4))
    rau = ellip(p, (-1.55, 2.55, 1.15), (0.95, 0.55, 0.55))
    la = ellip(p, (0.55, 1.85, -1.85), (1.75, 1.15, 1.2))
    lau = ellip(p, (2.05, 1.85, 0.05), (0.85, 0.48, 0.62))
    G["ad"] = smin(ra, rau, 0.35); G["ai"] = smin(la, lau, 0.35)
    G["auriculas"] = smin(G["ad"], G["ai"], 0.5)
    G["aorta"] = np.minimum(cadena(p, [(-0.15, 0.9, 0.15), (-0.55, 3.2, 0.25), (-0.45, 4.6, 0.0), (0.5, 5.35, -0.9), (1.55, 4.7, -2.2), (1.85, 2.5, -2.75), (1.9, -2.0, -2.9)], 1.0),
                  np.minimum(np.minimum(caps(p, (-0.3, 5.0, -0.25), (-1.0, 7.0, 0.0), 0.5), caps(p, (0.45, 5.4, -0.85), (0.5, 7.2, -0.6), 0.34)), caps(p, (1.1, 5.2, -1.45), (1.9, 7.0, -1.5), 0.38)))
    G["pulmonar"] = np.minimum(cadena(p, [(-0.1, 2.2, 1.5), (0.55, 3.6, 0.95), (0.9, 4.1, 0.2)], 0.92),
                     np.minimum(cadena(p, [(0.9, 4.1, 0.2), (2.0, 4.15, -0.7), (3.0, 4.0, -1.3)], 0.62), cadena(p, [(0.9, 4.1, 0.2), (-0.4, 4.15, -1.2), (-1.8, 4.0, -1.6)], 0.6)))
    G["cavas"] = np.minimum(caps(p, (-2.65, 5.3, -0.45), (-2.55, 2.4, -0.25), 0.78), caps(p, (-2.4, 0.3, -0.5), (-2.3, -2.0, -0.7), 0.82))
    G["venas_pulm"] = np.minimum.reduce([caps(p, (1.5, 2.3, -2.4), (3.0, 2.7, -2.8), 0.42), caps(p, (1.5, 1.4, -2.4), (3.0, 1.2, -2.8), 0.42),
                                         caps(p, (-0.4, 2.3, -2.5), (-1.7, 2.7, -3.0), 0.42), caps(p, (-0.4, 1.4, -2.5), (-1.7, 1.2, -3.0), 0.42)])
    return G

def sdf(p):
    G = grupos(p)
    d = smin(G["ventriculos"], G["auriculas"], 0.55)
    d = smin(d, G["cavas"], 0.3)
    d = smin(d, G["venas_pulm"], 0.25)
    d = smin(d, G["aorta"], 0.22)
    d = smin(d, G["pulmonar"], 0.22)
    return d

def main(salida):
    paso = 0.15
    xs = np.arange(-5.2, 5.4, paso); ys = np.arange(-5.0, 7.8, paso); zs = np.arange(-4.3, 3.9, paso)
    X, Y, Z = np.meshgrid(xs, ys, zs, indexing="ij")
    P = np.stack([X, Y, Z], -1)
    vol = np.empty(X.shape, np.float32)
    for i in range(X.shape[0]):
        vol[i] = sdf(P[i])
    verts, faces, normals, _ = measure.marching_cubes(vol, 0.0, spacing=(paso, paso, paso), step_size=1)
    verts += np.array([xs[0], ys[0], zs[0]])
    # suavizado de Taubin (conserva el volumen)
    n = len(verts)
    vec = [[] for _ in range(n)]
    for a, b, c in faces:
        vec[a] += [b, c]; vec[b] += [a, c]; vec[c] += [a, b]
    filas = np.repeat(np.arange(n), [len(v) for v in vec]); cols = np.concatenate([np.array(v, int) for v in vec])
    grado = np.bincount(filas, minlength=n).astype(float)
    def lap(V):
        S = np.zeros_like(V); np.add.at(S, filas, V[cols]); return S / grado[:, None] - V
    for _ in range(12):
        verts = verts + 0.55 * lap(verts); verts = verts - 0.58 * lap(verts)
    G = grupos(verts)
    # región: 0 ventrículo izquierdo, 1 ventrículo derecho, 2 aurícula derecha, 3 aurícula izquierda, 4 arterias, 5 venas
    dist = np.stack([G["vi"], G["vd"], G["ad"], G["ai"], np.minimum(G["aorta"], G["pulmonar"]), np.minimum(G["cavas"], G["venas_pulm"])], -1)
    region = np.argmin(dist, -1).astype(np.uint8)
    # grasa epicárdica en los surcos (auriculoventricular e interventricular)
    surco_av = np.exp(-np.abs(G["ventriculos"] - G["auriculas"]) / 0.35)
    surco_iv = np.exp(-np.abs(G["vi"] - G["vd"]) / 0.28) * (region <= 1)
    grasa = np.clip(np.maximum(surco_av * (region <= 3), surco_iv) * 255, 0, 255).astype(np.uint8)
    # Arterias coronarias: puntos guía proyectados sobre la superficie (y levemente hacia afuera)
    def proyectar(pts):
        P = np.array(pts, float)
        for _ in range(40):
            d = sdf(P); e = 0.02
            g = np.stack([(sdf(P + np.array(v) * e) - d) / e for v in ((1, 0, 0), (0, 1, 0), (0, 0, 1))], -1)
            g /= np.linalg.norm(g, axis=-1, keepdims=True)
            P = P - d[:, None] * g
        return np.round(P + g * 0.12, 3).tolist()
    coronarias = {
        "cd": proyectar([(-0.75, 1.05, 1.05), (-1.6, 0.55, 1.55), (-2.35, -0.2, 1.25), (-2.5, -1.1, 0.3), (-1.7, -1.5, -0.7), (-0.4, -2.0, -0.9), (0.9, -2.9, -0.4)]),
        "tci_da": proyectar([(0.55, 1.05, 0.7), (0.75, 0.75, 1.75), (1.05, -0.4, 2.3), (1.6, -1.7, 2.2), (2.3, -2.9, 1.7), (2.85, -3.75, 1.0)]),
        "cx": proyectar([(0.75, 0.8, 1.2), (1.8, 0.7, 0.6), (2.6, 0.3, -0.5), (2.5, -0.1, -1.6), (1.9, -0.4, -2.4)]),
    }
    esc = 1000.0
    q = np.round(verts * esc).astype(np.int16)
    datos = {
        "escala": esc,
        "pos": base64.b64encode(q.tobytes()).decode(),
        "idx": base64.b64encode(faces.astype(np.uint16 if n < 65536 else np.uint32).tobytes()).decode(),
        "idx32": bool(n >= 65536),
        "region": base64.b64encode(region.tobytes()).decode(),
        "grasa": base64.b64encode(grasa.tobytes()).decode(),
        "coronarias": coronarias,
    }
    js = ("/* Modelo 3D del corazón para el atlas de ECG de La Ficha (modelo propio, generado con\n"
          "   scripts/modelo-corazon.py: unión suave de formas anatómicas simples). */\n"
          "window.LF_CORAZON = " + json.dumps(datos, separators=(",", ":")) + ";\n")
    open(salida, "w").write(js)
    print(n, "vértices,", len(faces), "triángulos,", round(len(js) / 1024), "KB")

if __name__ == "__main__":
    main(sys.argv[1])
