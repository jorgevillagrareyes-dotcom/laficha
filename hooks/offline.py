"""Hook de MkDocs: lista los archivos del sitio para descargarlo y usarlo sin conexión.

Escribe offline.json (rutas relativas y tamaño total), que usa la página "Mis temas"
para pedirle al service worker (sw.js) que guarde todo el sitio en el teléfono.
"""
import json
from pathlib import Path

EXCLUIR = (".map", ".gz", "offline.json")


def on_post_build(config, **kwargs):
    raiz = Path(config["site_dir"])
    archivos, total = [], 0
    # Mermaid solo hace falta si algún diagrama quedó sin SVG (ver hooks/optimizar.py)
    usa_mermaid = any("mermaid.min.js" in h.read_text(encoding="utf-8") for h in raiz.rglob("*.html"))
    for p in sorted(raiz.rglob("*")):
        if not p.is_file() or p.name.endswith(EXCLUIR) or p.name == "sw.js":
            continue
        rel = p.relative_to(raiz).as_posix()
        if rel == "javascripts/mermaid.min.js" and not usa_mermaid:
            continue
        if "/lunr/" in rel and not rel.endswith(("lunr.es.min.js", "lunr.multi.min.js", "lunr.stemmer.support.min.js")):
            continue
        archivos.append(rel)
        total += p.stat().st_size
    (raiz / "offline.json").write_text(json.dumps({"archivos": archivos, "bytes": total}), encoding="utf-8")
