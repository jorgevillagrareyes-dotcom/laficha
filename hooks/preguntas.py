"""Hook de MkDocs: reúne las preguntas de repaso de todas las páginas en preguntas.json.

La página "Preguntas del día" (javascripts/laficha.js) elige cada día 5 preguntas de
especialidades distintas a partir de este archivo. Los enlaces de las respuestas se
reescriben relativos a la raíz del sitio para que funcionen fuera de su página.
"""
import json
import posixpath
import re
from pathlib import Path

MEDICINA_INTERNA = {
    "cardiologia", "endocrinologia", "infectologia", "respiratorio", "gastroenterologia",
    "geriatria", "hematologia", "nefrologia", "neurologia", "reumatologia",
}
ESPECIALIDADES = {
    "cirugia": "Cirugía",
    "traumatologia": "Traumatología",
    "ginecologia-obstetricia": "Ginecología y obstetricia",
    "pediatria": "Pediatría",
    "psiquiatria": "Psiquiatría",
    "especialidades": "Dermatología, oftalmología y ORL",
    "salud-publica": "Salud pública",
}
BLOQUE = re.compile(r'<details class="repaso">\s*<summary>(.*?)</summary>(.*?)</details>', re.S)
ENLACE = re.compile(r'(href|src)="([^"#:]+?)(#[^"]*)?"')

_preguntas = []


def on_pre_build(config, **kwargs):
    _preguntas.clear()


def on_page_content(html, page, config, files, **kwargs):
    partes = page.file.src_uri.split("/")
    if len(partes) < 2 or partes[-1] == "index.md":
        return html
    carpeta = partes[0]
    if carpeta in MEDICINA_INTERNA:
        especialidad = "Medicina interna"
    elif carpeta in ESPECIALIDADES:
        especialidad = ESPECIALIDADES[carpeta]
    else:
        return html
    base = posixpath.dirname(page.url)

    def absoluta(m):
        ruta = posixpath.normpath(posixpath.join(base, m.group(2)))
        return f'{m.group(1)}="{ruta}{m.group(3) or ""}"'

    for pregunta, respuesta in BLOQUE.findall(html):
        texto = re.sub(r"^\s*\d+\.\s*", "", pregunta.strip())
        _preguntas.append({
            "e": especialidad,
            "t": page.title,
            "u": page.url,
            "p": texto,
            "r": ENLACE.sub(absoluta, respuesta.strip()),
        })
    return html


def on_post_build(config, **kwargs):
    destino = Path(config["site_dir"]) / "preguntas.json"
    destino.write_text(json.dumps(_preguntas, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
