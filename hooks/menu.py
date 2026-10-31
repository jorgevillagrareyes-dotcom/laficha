"""Hook de MkDocs: saca el menú lateral de cada página a un archivo compartido.

Material escribe el menú completo (~420 entradas, ~200 KB) dentro de cada página,
y solo cambian la página activa, sus secciones abiertas y su tabla de contenidos.
Este hook guarda el menú una sola vez en assets/menu.js y deja en cada página
una lista corta de reemplazos (texto original -> texto de esta página) que
assets/menu.js aplica antes de insertar el menú, mientras la página se carga.

Seguridad: al compilar se comprueba, página por página, que aplicar los
reemplazos reproduzca exactamente el menú original (con los espacios
colapsados, que el navegador muestra igual). Si no calza, la página queda como
estaba. Sin JavaScript, la página se ve completa salvo el menú lateral (las
pestañas superiores siguen funcionando).
"""
import difflib
import hashlib
import json
import posixpath
import re
from pathlib import Path

INICIO = '<nav class="md-nav md-nav--primary'
MARCA = "@/"

_paginas = {}  # dest_uri -> menú normalizado
_base = None  # menú de referencia (el de la portada)


def _bloque(html):
    """Posición del <nav> principal completo (con sus <nav> internos)."""
    i = html.find(INICIO)
    if i < 0:
        return None
    nivel = 0
    for m in re.finditer(r"<nav\b|</nav>", html[i:]):
        nivel += 1 if m.group(0) == "<nav" else -1
        if nivel == 0:
            return i, i + m.end()
    return None


def _normalizar(menu, dest):
    """Colapsa espacios y pasa los enlaces relativos a rutas desde la raíz con MARCA."""
    menu = re.sub(r"\s+", " ", menu)
    carpeta = posixpath.dirname(dest)

    def absoluto(m):
        url = m.group(2)
        if url.startswith(("http:", "https:", "#", "mailto:", "/", "data:")) or not url:
            return m.group(0)
        return f'{m.group(1)}="{MARCA}{posixpath.normpath(posixpath.join(carpeta, url))}"'

    return re.sub(r'\b(href|src)="([^"]*)"', absoluto, menu)


def _tokens(s):
    return re.split(r"(?=<)", s)


def _aplicar(base, cambios):
    """Lo mismo que hace assets/menu.js: reemplazar la primera aparición, en orden."""
    s = base
    for viejo, nuevo in cambios:
        if s.count(viejo) != 1:
            return None
        s = s.replace(viejo, nuevo, 1)
    return s


def _cambios(base, menu):
    a, b = _tokens(base), _tokens(menu)
    ops = [o for o in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes() if o[0] != "equal"]
    cambios = []
    # De atrás hacia adelante: así cada reemplazo encuentra su texto intacto
    for _tag, i1, i2, j1, j2 in reversed(ops):
        for ctx in range(0, 12):
            antes, despues = max(0, i1 - ctx), min(len(a), i2 + ctx)
            viejo = "".join(a[antes:despues])
            if viejo and base.count(viejo) == 1:
                nuevo = "".join(a[antes:i1]) + "".join(b[j1:j2]) + "".join(a[i2:despues])
                cambios.append([viejo, nuevo])
                break
        else:
            return None
    return cambios


def on_config(config, **kwargs):
    global _base
    _paginas.clear()
    _base = None


def on_post_page(output, page, config, **kwargs):
    global _base
    pos = _bloque(output)
    if not pos:
        return output
    dest = page.file.dest_uri
    menu = _normalizar(output[pos[0]:pos[1]], dest)
    if dest == "index.html":
        _base = menu
    _paginas[dest] = menu
    return output


def on_post_build(config, **kwargs):
    raiz = Path(config["site_dir"])
    if _base is None:
        return
    version = hashlib.md5(_base.encode("utf-8")).hexdigest()[:10]
    js = (
        "/* La Ficha: menú lateral compartido (lo genera hooks/menu.py; no editar). */\n"
        "window.lfMenu=function(p,c){var s=" + json.dumps(_base, ensure_ascii=False) + ";"
        "for(var i=0;i<c.length;i++){(function(v,n){s=s.replace(v,function(){return n;});})(c[i][0],c[i][1]);}"
        "s=s.split('=\"" + MARCA + "').join('=\"'+p);"
        "document.currentScript.insertAdjacentHTML('beforebegin',s);};\n"
    )
    (raiz / "assets" / "menu.js").write_text(js, encoding="utf-8")

    hechas, fallidas = 0, []
    for dest, menu in _paginas.items():
        ruta = raiz / dest
        html = ruta.read_text(encoding="utf-8")
        pos = _bloque(html)
        cambios = _cambios(_base, menu) if pos else None
        if cambios is None or _aplicar(_base, cambios) != menu:
            fallidas.append(dest)
            continue
        prefijo = "../" * dest.count("/")
        datos = json.dumps(cambios, ensure_ascii=False, separators=(",", ":"))
        datos = datos.replace("</", "<\\/").replace("<!--", "<\\!--")
        trozo = (f'<script src="{prefijo}assets/menu.js?v={version}"></script>'
                 f'<script>lfMenu("{prefijo}",{datos})</script>')
        ruta.write_text(html[:pos[0]] + trozo + html[pos[1]:], encoding="utf-8")
        hechas += 1
    print(f"menu.py: menú compartido en {hechas} páginas; sin cambios en {len(fallidas)}"
          + (f" ({', '.join(fallidas[:5])})" if fallidas else ""))
