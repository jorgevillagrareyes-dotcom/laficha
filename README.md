# La Ficha

Resúmenes de medicina interna para el internado y el EUNACOM, elaborados por **Jorge Villagra Reyes**, estudiante de medicina de la Universidad de Valparaíso. Medicina interna está completa (las 385 situaciones clínicas del perfil EUNACOM v3 de 2026). Cirugía, traumatología, ginecología y obstetricia y pediatría están en preparación, con su temario ya publicado como lista de temas pendientes.

**Leer en línea:** https://jorgevillagrareyes-dotcom.github.io/laficha/

**Sin internet:** descarga el artefacto `la-ficha-offline` de la última ejecución de [Publicar sitio](https://github.com/jorgevillagrareyes-dotcom/laficha/actions/workflows/pages.yml) (requiere iniciar sesión en GitHub), descomprímelo y abre `index.html` (el buscador solo funciona en la versión en línea).

Material de estudio de uso libre y sin fines comerciales. Los resúmenes se redactaron con apoyo de IA: verificar siempre las dosis y los criterios en la guía original.

## Ver el sitio en tu computador

```bash
pip install -r requirements.txt
mkdocs serve
```

Luego abre http://127.0.0.1:8000 en el navegador.

## Estructura

- `docs/<subespecialidad>/<patologia>.md`: resumen de cada patología.
- `datos/temario.yml`: temario de medicina interna del perfil EUNACOM v3 (2026) y qué resumen cubre cada situación clínica.
- `scripts/generar_indices.py`: genera los índices por subespecialidad, la página de urgencias y el menú (`python3 scripts/generar_indices.py`).
- `plantillas/resumen-patologia.md`: plantilla con las secciones que usa cada resumen.
- `mkdocs.yml`: configuración del sitio.
