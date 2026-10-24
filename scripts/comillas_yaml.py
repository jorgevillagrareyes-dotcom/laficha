"""Pone entre comillas los textos de datos/farmacos/*.yml que contienen ": " (rompen el YAML)."""
import re
import sys

for ruta in sys.argv[1:]:
    salida = []
    for linea in open(ruta, encoding="utf-8").read().splitlines():
        m = re.match(r"^(\s*(?:- )?[a-z]{1,2}: |\s*- )(.+)$", linea)
        if m and not m.group(2).startswith('"') and (": " in m.group(2) or m.group(2).rstrip().endswith(":")):
            texto = m.group(2).replace("\\", "\\\\").replace('"', '\\"')
            linea = f'{m.group(1)}"{texto}"'
        salida.append(linea)
    open(ruta, "w", encoding="utf-8").write("\n".join(salida) + "\n")
