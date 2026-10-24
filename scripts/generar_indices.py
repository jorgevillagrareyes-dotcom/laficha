"""Genera los índices del sitio a partir de datos/temario.yml y datos/temario-otras.yml.

Escribe:
  - docs/<carpeta>/index.md para cada subespecialidad de medicina interna (tabla EUNACOM con enlaces)
  - docs/urgencias/index.md (todas las situaciones de urgencia de medicina interna)
  - docs/<carpeta>/index.md para cada otra especialidad (cirugia, traumatologia, ...)
  - el bloque de avance de docs/medicina-interna/index.md
  - el bloque de especialidades de docs/index.md (portada)
  - la sección nav de mkdocs.yml

Uso:  python3 scripts/generar_indices.py
"""

from collections import OrderedDict
from pathlib import Path
import os
import re
import unicodedata

import yaml

RAIZ = Path(__file__).resolve().parent.parent
DOCS = RAIZ / "docs"

CARPETAS = OrderedDict(
    [
        ("cardiologia", "Cardiología"),
        ("endocrinologia", "Endocrinología, diabetes y nutrición"),
        ("infectologia", "Enfermedades infecciosas"),
        ("respiratorio", "Enfermedades respiratorias"),
        ("gastroenterologia", "Gastroenterología"),
        ("geriatria", "Geriatría"),
        ("hematologia", "Hemato-oncología"),
        ("nefrologia", "Nefrología"),
        ("neurologia", "Neurología"),
        ("reumatologia", "Reumatología"),
    ]
)

# Otras especialidades: carpeta -> (ícono, descripción corta). El temario está en datos/temario-otras.yml.
ICONOS = {
    "cirugia": ("medical-bag", "Digestiva, tórax, vascular, cabeza y cuello, trauma, anestesia y urología"),
    "traumatologia": ("bone", "Fracturas, luxaciones, columna y ortopedia"),
    "ginecologia-obstetricia": ("human-pregnant", "Embarazo, parto, puerperio y ginecología"),
    "pediatria": ("baby-face-outline", "Recién nacido, niño y adolescente"),
    "psiquiatria": ("brain", "Trastornos del ánimo, ansiedad, psicosis y adicciones"),
    "especialidades": ("eye-outline", "Dermatología, oftalmología y otorrinolaringología"),
    "salud-publica": ("account-group", "Epidemiología, sistema de salud y gestión"),
}

OK = ':material-check-circle:{ .ok title="Resumen disponible" }'
PEND = ':material-clock-outline:{ .pend title="Pendiente" }'

LEYENDA = """## Cómo leer los niveles EUNACOM

| Columna | Valor | Qué se espera del examinado |
|---|---|---|
| **Diagnóstico** | **Específico** | Llegar de forma autónoma al diagnóstico específico, incluido el diagnóstico diferencial y el uso de exámenes |
| | **Sospecha** | Sospechar el diagnóstico, conocer los criterios de derivación y los estudios que hará el especialista |
| **Tratamiento** | **Completo** | Tratar hasta la resolución, derivando solo los casos complejos |
| | **Inicial** | Hacer el tratamiento inicial y derivar en condiciones adecuadas y oportunas |
| **Seguimiento** | **Completo** | Controlar al paciente, derivando solo los casos complejos |
| | **Derivar** | Derivar el seguimiento al especialista, conociendo sus aspectos generales |
| | **No requiere** | La situación no requiere seguimiento |

Fuente: [Perfil de Conocimientos EUNACOM, versión 3 (junio 2026)](https://www.eunacom.cl/contenidos/Perfil2026.pdf), vigente desde el examen de diciembre de 2026.
"""


def titulo_pagina(ruta_doc):
    """Devuelve el H1 de una página de docs/."""
    for linea in (DOCS / ruta_doc).read_text(encoding="utf-8").splitlines():
        if linea.startswith("# "):
            return linea[2:].strip()
    return Path(ruta_doc).stem.replace("-", " ").capitalize()


def enlace(desde_carpeta, ruta_doc):
    return os.path.relpath(DOCS / ruta_doc, DOCS / desde_carpeta).replace(os.sep, "/")


def celda_resumen(carpeta, fila):
    rutas = fila.get("resumen") or []
    if not rutas:
        return PEND
    partes = [f"[{titulo_pagina(r)}]({enlace(carpeta, r)})" for r in rutas]
    return OK + " " + " · ".join(partes)


def tabla(carpeta, filas):
    lineas = [
        "| Código | Situación | Diagnóstico | Tratamiento | Seguimiento | Resumen |",
        "|---|---|---|---|---|---|",
    ]
    for f in filas:
        lineas.append(
            f"| {f['codigo']} | {f['nombre']} | {f['dx']} | {f['tto']} | {f['seg']} | {celda_resumen(carpeta, f)} |"
        )
    return "\n".join(lineas)


def paginas_de(carpeta):
    return sorted(
        (p for p in (DOCS / carpeta).glob("*.md") if p.name != "index.md"),
        key=lambda p: titulo_pagina(f"{carpeta}/{p.name}"),
    )


def tabla_generales(carpeta, filas):
    lineas = ["| Código | Tema | Resumen |", "|---|---|---|"]
    for f in filas:
        lineas.append(f"| {f['codigo']} | {f['nombre']} | {celda_resumen(carpeta, f)} |")
    return "\n".join(lineas)


def contar(filas):
    return sum(1 for f in filas if f.get("resumen")), len(filas)


def main():
    datos = yaml.safe_load((RAIZ / "datos" / "temario.yml").read_text(encoding="utf-8"))
    grupos = datos["grupos"]

    total_hechas = total = 0

    for carpeta, titulo in CARPETAS.items():
        propios = [g for g in grupos if g["carpeta"] == carpeta]
        filas = [f for g in propios for f in g["situaciones"] + g["urgencias"]]
        hechas, n = contar(filas)
        total_hechas += hechas
        total += n

        partes = [
            "---\nhide:\n  - toc\n---\n",
            f"# {titulo}\n",
            f"Temario según el perfil EUNACOM v3 (2026). Cada situación indica el nivel exigido y el enlace al resumen cuando ya está escrito.\n",
            f'!!! info "Avance"\n    **{hechas} de {n}** situaciones clínicas de esta subespecialidad tienen resumen.\n',
        ]
        paginas = paginas_de(carpeta)
        if paginas:
            partes.append("## Resúmenes disponibles\n")
            partes.append(
                "\n".join(f"- {OK} [{titulo_pagina(f'{carpeta}/{p.name}')}]({p.name})" for p in paginas) + "\n"
            )
        varios = len(propios) > 1
        for g in propios:
            nivel = "###" if varios else "##"
            if varios:
                partes.append(f"## {g['titulo']} ({g['codigo']})\n")
            partes.append(f"{nivel} Situaciones clínicas\n")
            partes.append(tabla(carpeta, g["situaciones"]) + "\n")
            if g["urgencias"]:
                partes.append(f"{nivel} Situaciones clínicas de urgencia\n")
                partes.append(tabla(carpeta, g["urgencias"]) + "\n")
        partes.append(LEYENDA)
        (DOCS / carpeta / "index.md").write_text("\n".join(partes), encoding="utf-8")

    # Urgencias de todas las subespecialidades
    partes = [
        "---\nhide:\n  - toc\n---\n",
        "# Urgencias y paciente crítico\n",
        "Todas las **situaciones clínicas de urgencia** del perfil EUNACOM v3 de medicina interna, agrupadas por subespecialidad. Útil para preparar los turnos.\n",
    ]
    for g in grupos:
        if not g["urgencias"]:
            continue
        hechas, n = contar(g["urgencias"])
        partes.append(f"## {g['titulo']} ({hechas}/{n})\n")
        partes.append(tabla("urgencias", g["urgencias"]) + "\n")
    partes.append(LEYENDA)
    (DOCS / "urgencias").mkdir(exist_ok=True)
    (DOCS / "urgencias" / "index.md").write_text("\n".join(partes), encoding="utf-8")

    # Otras especialidades (datos/temario-otras.yml): cada una tiene una o más secciones
    otras = yaml.safe_load((RAIZ / "datos" / "temario-otras.yml").read_text(encoding="utf-8"))["especialidades"]
    resumen_otras = []
    for esp in otras:
        e_hechas = e_n = e_pag = 0
        secciones = []
        for sec in esp["secciones"]:
            carpeta = sec["carpeta"]
            filas = sec["situaciones"] + sec["urgencias"] + sec["generales"]
            hechas, n = contar(filas)
            paginas = paginas_de(carpeta) if (DOCS / carpeta).exists() else []
            e_hechas, e_n, e_pag = e_hechas + hechas, e_n + n, e_pag + len(paginas)
            secciones.append((sec, hechas, n, paginas))
            partes = [
                "---\nhide:\n  - toc\n---\n",
                f"# {sec['titulo']}\n",
                f'!!! info "Avance"\n    **{hechas} de {n}** temas tienen resumen. '
                + (
                    "Todos los temas del perfil EUNACOM v3 (2026) están cubiertos.\n"
                    if hechas == n
                    else "Los temas pendientes, marcados con :material-clock-outline:, son los que se van a escribir, "
                    "según el perfil EUNACOM v3 (2026).\n"
                ),
            ]
            if paginas:
                partes.append("## Resúmenes disponibles\n")
                partes.append(
                    "\n".join(f"- {OK} [{titulo_pagina(f'{carpeta}/{p.name}')}]({p.name})" for p in paginas) + "\n"
                )
            if sec["situaciones"]:
                partes.append("## Situaciones clínicas\n")
                partes.append(tabla(carpeta, sec["situaciones"]) + "\n")
            if sec["urgencias"]:
                partes.append("## Situaciones clínicas de urgencia\n")
                partes.append(tabla(carpeta, sec["urgencias"]) + "\n")
            if sec["generales"]:
                partes.append("## Conocimientos generales\n")
                partes.append(tabla_generales(carpeta, sec["generales"]) + "\n")
            if esp["carpeta"] == "cirugia":
                partes.append(
                    "La división de cirugía en subespecialidades es propia del sitio; los códigos y niveles son los del perfil EUNACOM.\n"
                )
            partes.append(LEYENDA)
            (DOCS / carpeta).mkdir(parents=True, exist_ok=True)
            (DOCS / carpeta / "index.md").write_text("\n".join(partes), encoding="utf-8")

        if len(esp["secciones"]) > 1:
            # Página de entrada con una tarjeta por subespecialidad
            partes = [
                "---\nhide:\n  - toc\n---\n",
                f"# {esp['titulo']}\n",
                f'!!! info "Avance"\n    **{e_hechas} de {e_n}** temas de {esp["titulo"].lower()} del perfil EUNACOM v3 (2026) '
                f"tienen resumen ({e_pag} páginas propias de la especialidad; el resto, en páginas de medicina interna "
                "que también cubren el tema).\n",
                "## Subespecialidades\n",
                '<div class="grid cards" markdown>\n',
            ]
            for sec, hechas, n, paginas in secciones:
                rel = os.path.relpath(DOCS / sec["carpeta"] / "index.md", DOCS / esp["carpeta"]).replace(os.sep, "/")
                partes.append(
                    f"-   **[{sec['titulo']}]({rel})**\n\n    ---\n\n    {hechas} de {n} temas con resumen\n"
                )
            partes.append("</div>\n")
            (DOCS / esp["carpeta"]).mkdir(exist_ok=True)
            (DOCS / esp["carpeta"] / "index.md").write_text("\n".join(partes), encoding="utf-8")
        resumen_otras.append((esp, e_hechas, e_n, e_pag, secciones))

    # Bloque de avance en la página de medicina interna
    portada = DOCS / "medicina-interna" / "index.md"
    texto = portada.read_text(encoding="utf-8")
    n_paginas = sum(len(paginas_de(c)) for c in CARPETAS)
    bloque = (
        "<!-- avance:inicio -->\n"
        f'!!! info "Avance del temario"\n'
        f"    **{n_paginas} resúmenes** escritos, que cubren **{total_hechas} de {total}** situaciones clínicas "
        f"de medicina interna del perfil EUNACOM v3 (2026).\n"
        "<!-- avance:fin -->"
    )
    texto = re.sub(r"<!-- avance:inicio -->.*?<!-- avance:fin -->", bloque, texto, flags=re.S)
    portada.write_text(texto, encoding="utf-8")

    # Índice de especialidades en la portada (estilo índice de libro)
    def item(nombre, ruta, desc, cifras):
        return (
            f'1.  <span class="indice-titulo">[{nombre}]({ruta})</span>'
            f'<span class="indice-relleno"></span><span class="indice-cifras">{cifras}</span>\n'
            f'    <span class="indice-desc">{desc}</span>\n'
        )

    tarjetas = [
        '<div class="indice" markdown>\n',
        item("Medicina interna", "medicina-interna/index.md",
             "Diez subespecialidades y urgencias",
             f"{n_paginas} resúmenes · {total_hechas}/{total} temas"),
    ]
    total_pag, total_temas, total_cub = n_paginas, total, total_hechas
    for esp, hechas, n, n_pag, _ in resumen_otras:
        _, desc = ICONOS.get(esp["carpeta"], ("book-open-variant", ""))
        total_pag, total_temas, total_cub = total_pag + n_pag, total_temas + n, total_cub + hechas
        tarjetas.append(item(esp["titulo"], f"{esp['carpeta']}/index.md", desc,
                             f"{n_pag} resúmenes · {hechas}/{n} temas"))
    tarjetas.append(item("Patologías GES", "ges/index.md",
                         "Los 90 problemas de salud GES con su guía clínica y los resúmenes que los tratan",
                         "90 problemas"))
    tarjetas.append("</div>")
    inicio = DOCS / "index.md"
    texto = inicio.read_text(encoding="utf-8")
    bloque = "<!-- especialidades:inicio -->\n" + "\n".join(tarjetas) + "\n<!-- especialidades:fin -->"
    texto = re.sub(r"<!-- especialidades:inicio -->.*?<!-- especialidades:fin -->", bloque, texto, flags=re.S)
    cifras = (
        f'<!-- cifras:inicio --><span class="portada-cifras">**{total_pag}** resúmenes · '
        f"**{total_cub}** de {total_temas} temas del perfil EUNACOM v3 cubiertos</span><!-- cifras:fin -->"
    )
    texto = re.sub(r"<!-- cifras:inicio -->.*?<!-- cifras:fin -->", cifras, texto, flags=re.S)
    inicio.write_text(texto, encoding="utf-8")

    # Índice alfabético de todos los resúmenes
    nombres = dict(CARPETAS)
    for esp, _, _, _, secciones in resumen_otras:
        for sec, _, _, _ in secciones:
            nombres[sec["carpeta"]] = sec["titulo"] if len(secciones) > 1 else esp["titulo"]
    entradas = []
    for carpeta, nombre in nombres.items():
        if not (DOCS / carpeta).exists():
            continue
        for pag in paginas_de(carpeta):
            entradas.append((titulo_pagina(f"{carpeta}/{pag.name}"), f"{carpeta}/{pag.name}", nombre))

    def clave(t):
        return unicodedata.normalize("NFKD", t).encode("ascii", "ignore").decode().lower()

    entradas.sort(key=lambda e: clave(e[0]))
    grupos = OrderedDict()
    for t, ruta, nombre in entradas:
        letra = clave(t)[:1].upper()
        letra = letra if letra.isalpha() else "#"
        grupos.setdefault(letra, []).append((t, ruta, nombre))
    partes = [
        "---\nhide:\n  - toc\n---\n",
        "# Índice alfabético\n",
        f"Los **{len(entradas)} resúmenes** de La Ficha ordenados de la A a la Z, con su especialidad.\n",
        '<p class="az-letras">' + " ".join(f'<a href="#{l.lower()}">{l}</a>' for l in grupos) + "</p>\n",
    ]
    for letra, items in grupos.items():
        partes.append(f"## {letra} {{ #{letra.lower()} }}\n")
        partes.append('<div class="az-lista" markdown>\n')
        partes.append("\n".join(f'- [{t}]({ruta}) <span class="az-esp">{nombre}</span>' for t, ruta, nombre in items) + "\n")
        partes.append("</div>\n")
    (DOCS / "indice-alfabetico.md").write_text("\n".join(partes), encoding="utf-8")

    # Página "Mis temas" (la llena javascripts/laficha.js con lo guardado en el navegador)
    (DOCS / "mis-temas.md").write_text(
        "---\nhide:\n  - toc\n---\n\n"
        "# Mis temas\n\n"
        "Tus temas **guardados** y **estudiados**. Se guardan solo en este navegador y dispositivo; "
        "no se envían a ningún servidor. Márcalos con los botones que aparecen bajo el título de cada resumen.\n\n"
        f'<div id="lf-mis-temas" data-total="{len(entradas)}"></div>\n\n'
        "## Usar sin conexión\n\n"
        "Guarda el sitio completo en este dispositivo para estudiar sin internet (por ejemplo, en el turno). "
        "Después, cada vez que entres con conexión, las páginas se actualizan solas.\n\n"
        '<div id="lf-sin-conexion"></div>\n',
        encoding="utf-8",
    )

    # Navegación de mkdocs.yml (una pestaña por especialidad)
    nav = ["nav:", "  - Inicio: index.md", "  - Medicina interna:", "      - medicina-interna/index.md"]
    for carpeta, titulo in CARPETAS.items():
        nav.append(f"      - {titulo}:")
        nav.append(f"          - {carpeta}/index.md")
        for p in paginas_de(carpeta):
            nav.append(f'          - "{titulo_pagina(f"{carpeta}/{p.name}")}": {carpeta}/{p.name}')
    nav.append("      - Urgencias: urgencias/index.md")
    for esp, _, _, _, secciones in resumen_otras:
        nav.append(f"  - {esp['titulo']}:")
        if len(secciones) == 1:
            carpeta = secciones[0][0]["carpeta"]
            nav.append(f"      - {carpeta}/index.md")
            for p in secciones[0][3]:
                nav.append(f'      - "{titulo_pagina(f"{carpeta}/{p.name}")}": {carpeta}/{p.name}')
            continue
        nav.append(f"      - {esp['carpeta']}/index.md")
        for sec, _, _, paginas in secciones:
            carpeta = sec["carpeta"]
            nav.append(f"      - \"{sec['titulo']}\":")
            nav.append(f"          - {carpeta}/index.md")
            for p in paginas:
                nav.append(f'          - "{titulo_pagina(f"{carpeta}/{p.name}")}": {carpeta}/{p.name}')
    nav += [
        "  - Patologías GES: ges/index.md",
        "  - Estudio:",
        "      - Índice A–Z: indice-alfabetico.md",
        "      - Mis temas: mis-temas.md",
        "  - Acerca de:",
        "      - Cómo se hacen los resúmenes: acerca/metodologia.md",
        "      - Temas GES y etiquetas: acerca/etiquetas.md",
    ]
    config = RAIZ / "mkdocs.yml"
    cfg = config.read_text(encoding="utf-8")
    cfg = cfg[: cfg.index("\nnav:\n") + 1] + "\n".join(nav) + "\n"
    config.write_text(cfg, encoding="utf-8")

    print(f"{n_paginas} resúmenes; {total_hechas}/{total} situaciones cubiertas")


if __name__ == "__main__":
    main()
