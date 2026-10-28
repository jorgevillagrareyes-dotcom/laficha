"""Prepara el sitio compilado para publicarlo como vista previa (artifact) de La Ficha.

Uso: python3 -I preparar_vista.py <carpeta_destino>

Copia site/ al destino, quita los *.map y sitemap.xml.gz, incrusta las figuras de
assets/figuras/ como data URI (y borra esa carpeta), deja de lunr solo es, multi y
stemmer.support, y escribe lote0.json, lote1.json... en el destino: mapas {ruta: ruta}
de menos de 44 MB cada uno para el campo `files` del Artifact (index.html va aparte,
como file_path). Así el sitio cabe en el límite de 511 archivos y 64 MB por publicación.
"""
import base64
import json
import os
import re
import shutil
import sys

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", ".."))
LIMITE = 44e6
TIPOS = {".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml"}


def main(dest):
    sitio = os.path.join(RAIZ, "site")
    if not os.path.isdir(sitio):
        sys.exit("No existe site/: corre antes `mkdocs build --strict`.")
    shutil.rmtree(dest, ignore_errors=True)
    shutil.copytree(sitio, dest)
    for d, _, fs in os.walk(dest):
        for f in fs:
            if f.endswith(".map") or f == "sitemap.xml.gz":
                os.remove(os.path.join(d, f))

    # Figuras incrustadas en los HTML.
    patron = re.compile(r'((?:src|href)=")([^"]*assets/figuras/[^"#?]+)(")')
    cache = {}
    for d, _, fs in os.walk(dest):
        for f in fs:
            if not f.endswith(".html"):
                continue
            p = os.path.join(d, f)
            t = open(p, encoding="utf-8").read()

            def reemplazar(m):
                ruta = os.path.normpath(os.path.join(d, m.group(2)))
                if ruta not in cache:
                    ext = os.path.splitext(ruta)[1].lower()
                    cache[ruta] = "data:%s;base64,%s" % (TIPOS[ext], base64.b64encode(open(ruta, "rb").read()).decode())
                return m.group(1) + cache[ruta] + m.group(3)

            t2 = patron.sub(reemplazar, t)
            if t2 != t:
                open(p, "w", encoding="utf-8").write(t2)
    shutil.rmtree(os.path.join(dest, "assets", "figuras"), ignore_errors=True)

    # Lunr: solo los idiomas que usa el sitio.
    lunr = os.path.join(dest, "assets", "javascripts", "lunr")
    for f in ("tinyseg.js", "wordcut.js"):
        if os.path.exists(os.path.join(lunr, f)):
            os.remove(os.path.join(lunr, f))
    minimo = os.path.join(lunr, "min")
    if os.path.isdir(minimo):
        for f in os.listdir(minimo):
            if f not in ("lunr.es.min.js", "lunr.multi.min.js", "lunr.stemmer.support.min.js"):
                os.remove(os.path.join(minimo, f))

    # Lotes para publicar.
    archivos = []
    for d, _, fs in os.walk(dest):
        for f in fs:
            rel = os.path.relpath(os.path.join(d, f), dest)
            if rel != "index.html" and not rel.startswith("lote"):
                archivos.append((rel, os.path.getsize(os.path.join(d, f))))
    archivos.sort()
    lotes, tam = [[]], 0
    for rel, s in archivos:
        if tam + s > LIMITE:
            lotes.append([])
            tam = 0
        lotes[-1].append(rel)
        tam += s
    for i, lote in enumerate(lotes):
        json.dump({r: r for r in lote}, open(os.path.join(dest, f"lote{i}.json"), "w"))
    print(f"{len(archivos) + 1} archivos, {len(cache)} figuras incrustadas, lotes: {[len(l) for l in lotes]}")
    if len(archivos) + 1 > 511:
        print("AVISO: más de 511 archivos; el artifact no los acepta en una sola versión.")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(os.path.abspath(sys.argv[1]))
