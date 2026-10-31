"""Hook de MkDocs: aliviana las páginas y el índice de búsqueda.

1. Diagramas: cada <pre class="mermaid"> se cambia por su SVG ya dibujado
   (datos/mermaid/<hash>.svg, lo genera scripts/mermaid-svg.js), dentro de un
   shadow DOM declarativo como el que arma Material, así los colores siguen el
   modo claro u oscuro. Mermaid (3,6 MB) solo se carga si queda algún diagrama
   sin SVG; el tema solo lo usa si encuentra un <pre class="mermaid">.
2. Índice de búsqueda: saca lo que no sirve buscar y solo suma peso
   (las referencias bibliográficas, la página de etiquetas, que repite los
   títulos, y el formato en línea como negritas y enlaces), y cambia la
   página de Fármacos, que entraba entera como un solo resultado, por un
   resultado por fármaco que abre directo su ficha.
"""
import hashlib
import html as html_mod
import json
import re
from pathlib import Path

SCRIPT_MERMAID = re.compile(r'<script src="[^"]*javascripts/mermaid\.min\.js"></script>')
EN_LINEA = re.compile(r"</?(?:strong|b|em|i|code|a|span|sup|sub|mark|abbr|small|kbd|u|s|del|ins)\b[^>]*>")
FICHA = re.compile(
    r'<details class="farmaco" id="([^"]+)"><summary><span class="farm-n">(.*?)</span>'
    r'<span class="farm-c">(.*?)</span>.*?<p class="farm-et">Para qué se usa</p><ul>(.*?)</ul>', re.S)


DIAGRAMA = re.compile(r'<pre class="mermaid"><code>(.*?)</code></pre>', re.S)
SVG_DIR = Path(__file__).resolve().parent.parent / "datos" / "mermaid"
_faltan = []


def _svg(m):
    codigo = html_mod.unescape(m.group(1))
    ruta = SVG_DIR / (hashlib.sha1(codigo.encode("utf-8")).hexdigest()[:16] + ".svg")
    if not ruta.exists():
        _faltan.append(codigo[:40])
        return m.group(0)
    return ('<div class="mermaid"><template shadowrootmode="open">'
            + ruta.read_text(encoding="utf-8") + "</template></div>")


def on_pre_build(config, **kwargs):
    _faltan.clear()


def on_post_page(output, page, config, **kwargs):
    output = DIAGRAMA.sub(_svg, output)
    if '<pre class="mermaid">' not in output:
        output = SCRIPT_MERMAID.sub("", output)
    return output


def _texto(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def on_post_build(config, **kwargs):
    if _faltan:
        print(f"optimizar.py: {len(_faltan)} diagramas sin SVG (se dibujan en el navegador); "
              "corre node scripts/mermaid-svg.js después de compilar")
    raiz = Path(config["site_dir"])
    error404 = raiz / "404.html"  # no pasa por on_post_page y no tiene diagramas
    if error404.exists():
        error404.write_text(SCRIPT_MERMAID.sub("", error404.read_text(encoding="utf-8")), encoding="utf-8")
    ruta = raiz / "search" / "search_index.json"
    if not ruta.exists():
        return
    indice = json.loads(ruta.read_text(encoding="utf-8"))
    antes = ruta.stat().st_size
    docs = []
    for doc in indice["docs"]:
        loc = doc["location"]
        pagina, _, ancla = loc.partition("#")
        if ancla.startswith("referencias") or pagina == "acerca/etiquetas.html":
            continue
        if pagina == "farmacos.html" and ancla == "farmacos":
            continue  # se reemplaza abajo por un resultado por fármaco
        doc["text"] = EN_LINEA.sub("", doc["text"])
        docs.append(doc)

    farmacos = raiz / "farmacos.html"
    if farmacos.exists():
        for ident, nombre, clase, usos in FICHA.findall(farmacos.read_text(encoding="utf-8")):
            items = [_texto(u) for u in re.findall(r"<li>(.*?)</li>", usos, re.S)]
            texto = f"<p>{html_mod.escape(_texto(clase))}. " + " ".join(html_mod.escape(i) for i in items) + "</p>"
            docs.append({"location": f"farmacos.html#{ident}", "title": f"{_texto(nombre)} (ficha del fármaco)",
                         "text": texto, "tags": []})

    indice["docs"] = docs
    ruta.write_text(json.dumps(indice, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"optimizar.py: índice de búsqueda {antes / 1e6:.1f} MB -> {ruta.stat().st_size / 1e6:.1f} MB")
