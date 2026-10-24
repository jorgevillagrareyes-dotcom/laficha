"""Hook de MkDocs: genera search/acentos.json para buscar sin tildes.

El buscador de Material no ignora las tildes ("sindrome" no encuentra "síndrome").
Este hook lee el índice de búsqueda ya generado y arma un diccionario
palabra-sin-tilde -> palabra-con-tilde, solo cuando la forma con tilde es mucho
más frecuente que la forma sin tilde. javascripts/laficha.js lo usa para completar las tildes de la consulta.
"""
import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path

PALABRA = re.compile(r"[a-záéíóúüñ]+", re.I)


def _sin_tildes(texto):
    return "".join(c for c in unicodedata.normalize("NFD", texto) if unicodedata.category(c) != "Mn")


def on_post_build(config, **kwargs):
    ruta = Path(config["site_dir"]) / "search" / "search_index.json"
    if not ruta.exists():
        return
    docs = json.loads(ruta.read_text(encoding="utf-8")).get("docs", [])
    conteo = Counter()
    for doc in docs:
        texto = re.sub(r"<[^>]+>", " ", (doc.get("title") or "") + " " + (doc.get("text") or ""))
        conteo.update(p.lower() for p in PALABRA.findall(texto))
    formas = defaultdict(Counter)
    for palabra, n in conteo.items():
        plana = _sin_tildes(palabra)
        if plana != palabra and len(plana) > 2:
            formas[plana][palabra] += n
    # Se completa la tilde solo si la forma con tilde es mucho más frecuente (evita "está"/"esta")
    mapa = {}
    for plana, c in formas.items():
        palabra, n = c.most_common(1)[0]
        if n >= 5 * conteo.get(plana, 0):
            mapa[plana] = palabra
    (ruta.parent / "acentos.json").write_text(json.dumps(mapa, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
