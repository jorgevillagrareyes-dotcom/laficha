# La Ficha

Resúmenes de medicina interna para el internado y el EUNACOM, elaborados por **Jorge Villagra Reyes**, estudiante de medicina de la Universidad de Valparaíso. Cubre todas las especialidades del perfil EUNACOM v3 de 2026 (medicina interna, cirugía, traumatología, ginecología y obstetricia, pediatría, psiquiatría, especialidades y salud pública), además de herramientas para el internado: indicaciones al hospitalizado, procedimientos, valores de referencia, fármacos, calculadoras y atlas de ECG.

**Leer en línea:** https://jorgevillagrareyes-dotcom.github.io/laficha/

**Sin internet:** descarga el artefacto `la-ficha-offline` de la última ejecución de [Publicar sitio](https://github.com/jorgevillagrareyes-dotcom/laficha/actions/workflows/pages.yml) (requiere iniciar sesión en GitHub), descomprímelo y abre `index.html` (el buscador solo funciona en la versión en línea).

Los resúmenes se redactaron con apoyo de IA: verificar siempre las dosis y los criterios en la guía original.

## Licencia

- **Contenido** (`docs/` y `datos/`): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es). Se puede compartir y adaptar citando al autor, sin fines comerciales y con la misma licencia. Texto completo en [`LICENSE-CONTENIDO.txt`](LICENSE-CONTENIDO.txt).
- **Código**: [MIT](LICENSE).
- Las figuras de artículos, los ECG de PTB-XL (CC BY 4.0), las fuentes (SIL OFL) y las bibliotecas de terceros mantienen su propia licencia.

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
