---
name: la-ficha-pagina
description: Flujo completo para crear o actualizar una página de La Ficha (sitio MkDocs de estudio de medicina para internos chilenos): resúmenes de patologías de cualquier especialidad del EUNACOM, páginas de Procedimientos, Indicaciones o Valores de referencia, y la actualización de una página cuando cambia una guía. Úsala siempre que el usuario pida un resumen o tema nuevo ("haz la página de...", "agrega...", "sigue con..."), pida revisar o actualizar una página por una guía nueva, o pida corregir datos clínicos, dosis o referencias del sitio, aunque no nombre la skill.
---

# Crear o actualizar una página de La Ficha

La Ficha es el sitio de estudio de Jorge Villagra Reyes (Universidad de Valparaíso) para internos de medicina en Chile. Se publica solo con cada push a la rama de despliegue, así que **un push es una publicación**. Lo que pide el usuario, en orden de importancia:

1. **Exactitud verificada.** Es material médico que otros estudiantes usarán en la sala. Un DOI inventado, una dosis distinta entre dos páginas o un umbral mal citado es peor que una página que falta.
2. **Nada se publica sin que lo vea antes.** Trabaja en una rama local, muéstrale una vista previa y sube solo con su aprobación explícita ("sí, súbelo"). La única excepción es una corrección que él mismo pidió con precisión en una página existente; aun así, cuéntale qué cambiaste.
3. **El formato aprobado.** Los resúmenes piloto ya fueron aprobados: replica su estructura y su profundidad, no inventes otra.

Lee `CLAUDE.md` en la raíz del repositorio antes de empezar: tiene la estructura de carpetas, el estilo, las reglas del menú y la lista de lo que ya está hecho. Esta skill no la repite; explica cómo trabajar.

## 0. Antes de escribir

- **Rama**: `git checkout -b <tema>` desde la rama de despliegue (la indicada en CLAUDE.md). No trabajes directo en ella.
- **¿Ya existe?** Busca el tema con `grep -ril "<término>" docs/` y en `datos/temario.yml` o `datos/temario-otras.yml`. Muchos temas viven dentro de una página más amplia. Si ya existe, actualiza esa página en vez de duplicarla.
- **Página modelo**: abre una página parecida ya publicada (por ejemplo `docs/cardiologia/insuficiencia-cardiaca.md` para patologías, `docs/procedimientos/` o `docs/valores/hemograma.md` para las secciones de Herramientas) y copia su estructura.
- **Coherencia**: las cifras (dosis, umbrales, cortes) que ya están en otras páginas del sitio deben coincidir. Antes de escribir un número, búscalo con `grep -rn` en `docs/`. Si encuentras una contradicción, verifica cuál es la correcta con la fuente y corrige ambas.

## 1. Investigar

- **Versión vigente** de cada guía (ESC, ACC/AHA, ADA, KDIGO, GOLD, GINA, IDSA/ATS, ACG, EASL/AASLD, OMS, NICE, etc.) con su **año**. Si hay una guía de 2025–2026, úsala.
- **Datos chilenos**: MINSAL y GES (guía clínica del problema GES, si corresponde), ENS, DEIS, ISP, consensos de sociedades chilenas, series de hospitales chilenos.
- **Verifica cada referencia** con `scripts/pubmed.py`:

  ```bash
  python3 .claude/skills/la-ficha-pagina/scripts/pubmed.py "autor título palabras clave"
  python3 .claude/skills/la-ficha-pagina/scripts/pubmed.py -a "consulta"   # con el resumen del primero
  ```

  Entrega autores, revista, año, volumen, páginas y DOI tal como están en PubMed. Para el texto completo abierto sirve Europe PMC (`https://www.ebi.ac.uk/europepmc/webservices/rest/PMC<id>/fullTextXML`), y para leyes chilenas, iura.cl o bcn.cl. Para los rangos de laboratorio, MedlinePlus (`medlineplus.gov/ency/article/<id>.htm`, sección *Normal Results*).
- **Si no pudiste verificar un dato, no lo escribas.** Si la referencia existe pero no viste el número dentro del texto, cítala sin ese número o dile al usuario cuál quedó sin verificar. Nunca completes un DOI, un volumen o páginas de memoria.

## 2. Escribir la página

**Resúmenes de patología** (cualquier especialidad): sigue exactamente `plantillas/resumen-patologia.md`:

> ficha · resumen en 60 segundos · definición · epidemiología mundial y Chile · etiología · fisiopatología (con diagrama Mermaid) · clasificación · clínica · diagnóstico · laboratorio · imágenes · diagnóstico diferencial · tratamiento con dosis · complicaciones · pronóstico y seguimiento · perlas para el internado · 5–6 preguntas de repaso · referencias

Las páginas de **salud pública** y de conocimientos generales de pediatría tienen un formato adaptado (ver CLAUDE.md). Las de **Herramientas** (Procedimientos, Indicaciones, Valores) siguen la estructura de sus páginas hermanas.

Reglas que el usuario ya fijó:

- **Español de Chile**: IECA, ARA-II, iSGLT2, arGLP-1, glicemia, hospitalizar, APS, GES, EUNACOM, CESFAM.
- **Frases cortas**, números clave en **negrita**, tablas para clasificaciones, dosis y diferenciales. Sin emojis.
- **Ficha**: cada campo es un párrafo que empieza con la etiqueta en negrita. Sin listas dentro de la ficha (rompen la grilla).
- **Recuadros**: `guia`, `chile`, `alarma`, `dosis`, `perla` y `repaso` (este último plegable: `??? repaso "..."`). Las preguntas de repaso con formato de caso clínico alimentan las "Preguntas del día".
- **Recuadro "¿Qué respalda esta página?"** en las páginas de Herramientas: di con honestidad si hay guías formales, solo estudios, o práctica habitual.
- **Etiquetas** (`tags`) disponibles: la subespecialidad, `GES`, `Frecuente en sala`, `Urgencia`.
- **Enlaces relativos** entre páginas (`../carpeta/pagina.md`, o `../../` desde `docs/cirugia/<sub>/` y `docs/especialidades/<sub>/`).
- **Sin generadores de texto ni formularios interactivos** salvo que el usuario los pida: rechazó una sección de documentos con generador. Las calculadoras sí existen, en `docs/calculadoras.md`.

**Figuras**:

- **Esquemas propios**: Mermaid o SVG en `docs/assets/figuras/<tema>/`, con texto alternativo descriptivo y un pie "Esquema propio basado en…".
- **Figuras de artículos**: solo con licencia **CC BY, CC BY-SA o CC BY-NC**, verificada en la página del artículo, descargada al repositorio y con autores, revista, año y licencia en el pie.
- **Nunca copies figuras con derechos reservados** (NEJM, JAMA, Lancet, UpToDate): enlázalas.

## 3. Conectar la página con el sitio

- **Temario**: marca los códigos que cubre la página.
  - Medicina interna: agrega la ruta en el campo `resumen` de cada ítem de `datos/temario.yml` (o usa `python3 scripts/marcar_resumen.py`).
  - Otras especialidades: `python3 scripts/marcar_resumen_otras.py <ruta> <códigos>`.
  - Una página de medicina interna que cubre un tema de otra especialidad se marca también allí.
- **Fármacos**: si la página trae dosis nuevas, revisa que coincidan con `datos/farmacos/*.yml`. Si un fármaco no tiene ficha, avísale al usuario.
- **Menú de Herramientas**: las secciones fuera del temario tienen su `nav` escrito a mano en `scripts/generar_indices.py`; agrega ahí la página nueva y súmala a la tabla de la portada de su sección.
- **No edites a mano** los archivos que genera el script: los `index.md` de especialidad, el índice A–Z, `mis-temas.md`, `farmacos.md`, la sección `nav` de `mkdocs.yml` y las cifras de la portada.

## 4. Compilar y revisar

```bash
python3 scripts/generar_indices.py && mkdocs build --strict
```

Debe terminar **sin ninguna advertencia** (el aviso de "MkDocs 2.0" del tema no cuenta). Si la compilación avisa "diagramas sin SVG" (un diagrama Mermaid nuevo o modificado), dibújalos y vuelve a compilar; los SVG de `datos/mermaid/` van en el commit:

```bash
node scripts/mermaid-svg.js && mkdocs build --strict
```

Luego revisa la página en un celular simulado:

```bash
(cd site && python3 -m http.server 8765 >/dev/null 2>&1 &)
node .claude/skills/la-ficha-pagina/scripts/revisar_movil.js <carpeta>/<pagina>
```

Mira la captura que deja en `/tmp/` (con la herramienta Read). Las tablas anchas se desplazan solas; lo que no puede haber es desborde de toda la página. Para detener el servidor, usa `pgrep -f "http.server 8765" | xargs -r kill` como comando aparte: termina con código 144, y eso es normal.

Antes del commit, **relee la página como revisor escéptico**: ¿cada número tiene fuente?, ¿coincide con las otras páginas?, ¿algo de lo escrito suena a memoria y no a verificación? Corrige lo que encuentres y anótalo para contárselo al usuario.

## 5. Commit, vista previa y aprobación

- **Commit en la rama local**, con el mensaje en español y las líneas de atribución que indique la sesión.
- **Vista previa**: prepara el sitio con

  ```bash
  python3 -I .claude/skills/la-ficha-pagina/scripts/preparar_vista.py <carpeta-temporal>
  ```

  y publícalo en el artifact de vista previa (la URL está en CLAUDE.md o en la conversación). En cada llamada va `file_path` = `<carpeta>/index.html`, `root` = la carpeta y `files` = el contenido de un `loteN.json`; publica cada lote en una llamada distinta, en orden. Si una página se eliminó, agrégala con valor `null` en el primer lote para borrarla del artifact.
- **Cuéntale al usuario**, en lenguaje simple: qué páginas hiciste, qué fuentes usaste, qué no pudiste verificar y qué corregiste por el camino. Luego pregunta si lo apruebas para subirlo.
- **Con su aprobación**: `git checkout <rama de despliegue> && git merge --ff-only <tema> && git push -u origin <rama de despliegue>`. Después actualiza también la vista privada principal (otra URL en CLAUDE.md), con los mismos lotes.
- **Si lo rechaza**: vuelve a la rama de despliegue sin fusionar, deja la rama como respaldo y devuelve la vista previa al estado publicado.
- **Si el trabajo es largo** (varias páginas), haz un commit después de cada una, para no perder nada si se corta la sesión. Muestra un **piloto** antes de hacer todo el lote cuando el formato sea nuevo.

## 6. Actualizar una página por una guía nueva

1. Lee la guía nueva (resumen y tablas de recomendaciones) y anota qué cambió de verdad: dosis, umbrales, clasificaciones, algoritmos.
2. Busca cada cifra afectada en **todo** `docs/` y en `datos/farmacos/` (`grep -rn`), no solo en la página principal.
3. Cambia lo necesario, actualiza la ficha (guía principal, año, "Revisado: mes año") y las referencias.
4. Sigue los pasos 4 y 5. En el mensaje al usuario, lista **antes y después** de cada cambio.
