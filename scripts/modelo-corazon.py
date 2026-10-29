"""Genera el modelo 3D del corazón (malla) para el atlas de ECG de La Ficha.
Superficie implícita: unión suave de formas anatómicas simples (ventrículos, aurículas, orejuelas, grandes vasos),
con los surcos auriculoventricular e interventriculares tallados, extraída con marching cubes, suavizada y con un
relieve fino. También calcula la oclusión ambiental (sombra de los pliegues), la grasa epicárdica y el trazado de
las coronarias y venas cardíacas sobre la superficie. Salida: docs/javascripts/atlas-ecg-modelo.js (base64).
Coordenadas: x = izquierda del paciente, y = arriba, z = adelante (cm).
Requiere numpy y scikit-image (solo para regenerar el modelo; el sitio no los usa al compilar):
python3 scripts/modelo-corazon.py docs/javascripts/atlas-ecg-modelo.js"""
import base64
import json
import sys

import numpy as np
from skimage import measure


def rcone(p, a, b, ra, rb):
    a = np.asarray(a, float); b = np.asarray(b, float)
    ba = b - a; L = np.linalg.norm(ba); u = ba / L
    pa = p - a
    t = pa @ u
    q = np.linalg.norm(pa - t[..., None] * u, axis=-1)
    s = np.clip(t / L, 0, 1)
    r = ra + (rb - ra) * s
    ts = np.clip(t, 0, L)
    return np.sqrt(q ** 2 + (t - ts) ** 2) - r


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


def smax(a, b, k):
    return -smin(-a, -b, k)


def cadena(p, pts, r):
    d = None
    for i in range(len(pts) - 1):
        ri = r if np.isscalar(r) else (r[i], r[i + 1])
        di = caps(p, pts[i], pts[i + 1], ri) if np.isscalar(r) else rcone(p, pts[i], pts[i + 1], ri[0], ri[1])
        d = di if d is None else np.minimum(d, di)
    return d


def ruido(p, escala, semilla):
    """Ruido suave (suma de senos con direcciones fijas), entre -1 y 1."""
    rng = np.random.default_rng(semilla)
    s = np.zeros(p.shape[:-1])
    for _ in range(7):
        d = rng.normal(size=3); d /= np.linalg.norm(d)
        f = escala * rng.uniform(0.7, 1.4)
        s += np.sin((p @ d) * f + rng.uniform(0, 6.28))
    return s / 7


def grupos(p, surcos=None):
    G = {}
    lv = smin(ellip(p, (1.25, -1.25, 0.05), (2.35, 3.0, 2.25)), rcone(p, (0.6, 0.2, -0.3), (2.95, -3.75, 0.95), 2.0, 0.42), 0.8)
    rv0 = smin(ellip(p, (-0.55, -0.9, 1.55), (2.15, 2.35, 1.45)), rcone(p, (-1.4, 0.4, 1.0), (1.4, -3.2, 2.0), 1.6, 0.35), 0.6)
    rv = smax(rv0, -(lv - 0.12), 0.35)  # media luna que envuelve al ventrículo izquierdo
    rvot = rcone(p, (-0.8, 0.0, 1.75), (-0.1, 2.3, 1.5), 1.2, 0.95)
    G["vi"] = lv
    G["vd"] = smin(rv, rvot, 0.55)
    G["ventriculos"] = smin(lv, G["vd"], 0.35)
    ra = ellip(p, (-2.55, 1.35, -0.1), (1.45, 1.75, 1.4))
    rau = smin(ellip(p, (-1.5, 2.55, 1.15), (1.05, 0.6, 0.55)), ellip(p, (-0.9, 2.25, 1.6), (0.6, 0.45, 0.4)), 0.3)
    la = ellip(p, (0.55, 1.85, -1.85), (1.75, 1.15, 1.2))
    lau = cadena(p, [(1.5, 1.95, -0.9), (2.15, 2.05, -0.15), (2.05, 2.25, 0.55), (1.6, 2.4, 0.85)], [0.55, 0.5, 0.4, 0.25])
    G["ad"] = smin(ra, rau, 0.35); G["ai"] = smin(la, lau, 0.3)
    G["auriculas"] = smin(G["ad"], G["ai"], 0.5)
    G["aorta"] = np.minimum(cadena(p, [(-0.15, 0.9, 0.15), (-0.55, 3.2, 0.25), (-0.45, 4.6, 0.0), (0.5, 5.35, -0.9), (1.55, 4.7, -2.2), (1.85, 2.5, -2.75), (1.9, -2.0, -2.9)], 1.0),
                            np.minimum(np.minimum(caps(p, (-0.3, 5.0, -0.25), (-1.0, 7.0, 0.0), 0.5), caps(p, (0.45, 5.4, -0.85), (0.5, 7.2, -0.6), 0.34)), caps(p, (1.1, 5.2, -1.45), (1.9, 7.0, -1.5), 0.38)))
    G["pulmonar"] = np.minimum(cadena(p, [(-0.1, 2.2, 1.5), (0.55, 3.6, 0.95), (0.9, 4.1, 0.2)], 0.92),
                               np.minimum(cadena(p, [(0.9, 4.1, 0.2), (2.0, 4.15, -0.7), (3.0, 4.0, -1.3)], 0.62), cadena(p, [(0.9, 4.1, 0.2), (-0.4, 4.15, -1.2), (-1.8, 4.0, -1.6)], 0.6)))
    G["cavas"] = np.minimum(caps(p, (-2.65, 5.3, -0.45), (-2.55, 2.4, -0.25), 0.78), caps(p, (-2.4, 0.3, -0.5), (-2.3, -2.0, -0.7), 0.82))
    G["venas_pulm"] = np.minimum.reduce([caps(p, (1.5, 2.3, -2.4), (3.0, 2.7, -2.8), 0.42), caps(p, (1.5, 1.4, -2.4), (3.0, 1.2, -2.8), 0.42),
                                         caps(p, (-0.4, 2.3, -2.5), (-1.7, 2.7, -3.0), 0.42), caps(p, (-0.4, 1.4, -2.5), (-1.7, 1.2, -3.0), 0.42)])
    return G


def sdf_base(p):
    G = grupos(p)
    d = smin(G["ventriculos"], G["auriculas"], 0.5)
    d = smin(d, G["cavas"], 0.3)
    d = smin(d, G["venas_pulm"], 0.25)
    d = smin(d, G["aorta"], 0.22)
    d = smin(d, G["pulmonar"], 0.22)
    return d


def proyectar(sdf, pts, afuera=0.0, pasos=40):
    P = np.array(pts, float)
    g = None
    for _ in range(pasos):
        d = sdf(P); e = 0.02
        g = np.stack([(sdf(P + np.array(v) * e) - d) / e for v in ((1, 0, 0), (0, 1, 0), (0, 0, 1))], -1)
        g /= np.linalg.norm(g, axis=-1, keepdims=True)
        P = P - d[:, None] * g
    return P + g * afuera


def densificar(pts, n=60):
    P = np.array(pts, float)
    L = np.r_[0, np.cumsum(np.linalg.norm(np.diff(P, axis=0), axis=1))]
    s = np.linspace(0, L[-1], n)
    return np.stack([np.interp(s, L, P[:, k]) for k in range(3)], -1)


# Recorridos guía (se proyectan a la superficie)
GUIAS = {
    "cd": [(-0.75, 1.05, 1.05), (-1.6, 0.55, 1.55), (-2.35, -0.2, 1.25), (-2.5, -1.1, 0.3), (-1.7, -1.5, -0.7), (-0.6, -1.8, -1.0)],
    "dp": [(-0.6, -1.8, -1.0), (0.3, -2.4, -0.9), (1.2, -3.1, -0.4)],
    "mg_ag": [(-2.35, -0.2, 1.25), (-1.6, -1.4, 1.9), (-0.6, -2.4, 2.0)],
    "tci_da": [(0.55, 1.05, 0.7), (0.75, 0.75, 1.75), (1.0, -0.3, 2.35), (1.55, -1.6, 2.3), (2.2, -2.8, 1.8), (2.9, -3.75, 1.0)],
    "dg1": [(1.0, -0.3, 2.35), (2.0, -0.6, 1.9), (2.9, -1.3, 1.2)],
    "dg2": [(1.55, -1.6, 2.3), (2.4, -1.9, 1.6), (3.1, -2.4, 0.9)],
    "cx": [(0.75, 0.8, 1.2), (1.8, 0.7, 0.6), (2.6, 0.3, -0.5), (2.5, -0.1, -1.6), (1.9, -0.4, -2.4)],
    "om": [(2.6, 0.3, -0.5), (3.2, -1.0, -0.4), (3.3, -2.2, 0.0)],
    "vcm": [(1.25, -0.25, 2.25), (0.95, 0.6, 1.6), (1.7, 0.95, 0.8), (2.5, 0.55, -0.3), (2.3, 0.15, -1.6), (0.6, -0.1, -1.9), (-1.0, 0.1, -1.4)],
    "vi_post": [(0.6, -0.1, -1.9), (0.9, -1.6, -1.6), (1.5, -2.8, -0.8)],
}
SURCOS = ["cd", "dp", "tci_da", "cx", "vcm"]
ARTERIAS = ["cd", "dp", "mg_ag", "tci_da", "dg1", "dg2", "cx", "om"]
VENAS = ["vcm", "vi_post"]


def main(salida):
    # 1. Surcos: tubos a lo largo de los recorridos coronarios principales, restados con suavidad
    lineas = {k: densificar(proyectar(sdf_base, v), 80) for k, v in GUIAS.items()}
    def sdf(p):
        d = sdf_base(p)
        for k in SURCOS:
            L = lineas[k]
            g = np.min([caps(p, L[i], L[i + 1], 0.22) for i in range(0, len(L) - 1, 2)], axis=0)
            d = smax(d, -g, 0.18)
        return d

    paso = 0.13
    xs = np.arange(-5.2, 5.4, paso); ys = np.arange(-5.0, 7.8, paso); zs = np.arange(-4.3, 3.9, paso)
    X, Y, Z = np.meshgrid(xs, ys, zs, indexing="ij")
    P = np.stack([X, Y, Z], -1)
    vol = np.empty(X.shape, np.float32)
    for i in range(X.shape[0]):
        vol[i] = sdf(P[i])
    verts, faces, normales, _ = measure.marching_cubes(vol, 0.0, spacing=(paso, paso, paso), step_size=1)
    verts += np.array([xs[0], ys[0], zs[0]])

    # 2. Suavizado de Taubin
    n = len(verts)
    vec = [[] for _ in range(n)]
    for a, b, c in faces:
        vec[a] += [b, c]; vec[b] += [a, c]; vec[c] += [a, b]
    filas = np.repeat(np.arange(n), [len(v) for v in vec]); cols = np.concatenate([np.array(v, int) for v in vec])
    grado = np.bincount(filas, minlength=n).astype(float)
    def lap(V):
        S = np.zeros_like(V); np.add.at(S, filas, V[cols]); return S / grado[:, None] - V
    for _ in range(10):
        verts = verts + 0.55 * lap(verts); verts = verts - 0.58 * lap(verts)

    def normales_de(V):
        N = np.zeros_like(V)
        fn = np.cross(V[faces[:, 1]] - V[faces[:, 0]], V[faces[:, 2]] - V[faces[:, 0]])
        for k in range(3): np.add.at(N, faces[:, k], fn)
        return N / np.maximum(np.linalg.norm(N, axis=1, keepdims=True), 1e-9)

    # 3. Regiones, grasa (lobulada) y relieve fino
    G = grupos(verts)
    dist = np.stack([G["vi"], G["vd"], G["ad"], G["ai"], np.minimum(G["aorta"], G["pulmonar"]), np.minimum(G["cavas"], G["venas_pulm"])], -1)
    region = np.argmin(dist, -1).astype(np.uint8)
    dsurco = np.min([np.min(np.linalg.norm(verts[:, None, :] - lineas[k][None, ::2, :], axis=-1), axis=1) for k in SURCOS], axis=0)
    grasa = np.exp(-(dsurco / 0.75) ** 2) * (region <= 3)
    grasa = np.clip(grasa * (0.75 + 0.45 * ruido(verts, 5.0, 3)), 0, 1)
    grasa *= np.clip((verts[:, 1] + 3.0) / 1.4, 0, 1)  # casi sin grasa en la punta
    N = normales_de(verts)
    relieve = 0.025 * ruido(verts, 9.0, 7) + 0.06 * grasa * (0.5 + 0.5 * ruido(verts, 7.0, 11))
    verts = verts + N * relieve[:, None] * (region <= 3)[:, None]
    N = normales_de(verts)

    # 4. Oclusión ambiental aproximada con el campo de distancia (los pliegues quedan más oscuros)
    ao = np.zeros(n)
    for k, h in enumerate((0.15, 0.3, 0.5, 0.8, 1.2)):
        ao += (h - np.minimum(sdf_base(verts + N * h), h)) / h * (0.5 ** k)
    ao = np.clip(1 - 0.55 * ao, 0.25, 1)

    # 5. Vasos sobre la superficie final (dentro de su surco)
    vasos = {}
    for k in ARTERIAS + VENAS:
        L = proyectar(sdf, GUIAS[k], 0.1)
        vasos[k] = np.round(L, 3).tolist()

    esc = 1000.0
    q = np.round(verts * esc).astype(np.int16)
    datos = {
        "escala": esc,
        "pos": base64.b64encode(q.tobytes()).decode(),
        "idx": base64.b64encode(faces.astype(np.uint16 if n < 65536 else np.uint32).tobytes()).decode(),
        "idx32": bool(n >= 65536),
        "region": base64.b64encode(region.tobytes()).decode(),
        "grasa": base64.b64encode(np.round(grasa * 255).astype(np.uint8).tobytes()).decode(),
        "ao": base64.b64encode(np.round(ao * 255).astype(np.uint8).tobytes()).decode(),
        "arterias": {k: vasos[k] for k in ARTERIAS},
        "venas": {k: vasos[k] for k in VENAS},
    }
    js = ("/* Modelo 3D del corazón para el atlas de ECG de La Ficha (modelo propio, generado con\n"
          "   scripts/modelo-corazon.py: unión suave de formas anatómicas simples). */\n"
          "window.LF_CORAZON = " + json.dumps(datos, separators=(",", ":")) + ";\n")
    open(salida, "w").write(js)
    print(n, "vértices,", len(faces), "triángulos,", round(len(js) / 1024), "KB")


if __name__ == "__main__":
    main(sys.argv[1])
