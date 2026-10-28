# Manejo de la gastrostomía

<div class="ficha" markdown>

**Procedimiento**
Cuidado diario de la gastrostomía, recambio de la sonda con balón y conducta ante la salida accidental

**Fuentes principales**
ESGE 2021: manejo endoscópico de las sondas enterales en el adulto (partes 1 y 2)

**Otras fuentes**
Ver [desnutrición y realimentación](../endocrinologia/desnutricion-y-sindromes-carenciales.md), [régimen](../indicaciones/regimen.md), [sonda nasogástrica](sonda-nasogastrica.md) y [disfagia](../gastroenterologia/disfagia-y-afagia-aguda.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Indicación**: nutrición enteral prevista por **más de 4–6 semanas** cuando la vía oral no alcanza; en la **demencia avanzada** no mejora la sobrevida.
    - **Cuidado diario**: **lavar** con agua antes y después de cada uso, **movilizar** la sonda (empujar y girar) y dejar el **tope externo a 1–2 cm** de la piel: previene el **síndrome del tope enterrado** (ESGE 2021).
    - **Salida accidental**: el **trayecto se cierra en horas**. Si el trayecto está **maduro**, poner pronto una sonda de recambio (o una Foley transitoria) para mantenerlo abierto.
    - **Trayecto inmaduro** (primeras semanas tras la instalación): **no reinsertar a ciegas** (riesgo de quedar en el peritoneo): avisar al equipo que la instaló.
    - **Comprobar** la posición tras el recambio (aspirado gástrico, lavado sin dolor ni fuga; contraste si hay duda).
    - Tras una PEG sin complicaciones, la **alimentación** puede iniciarse a las **3–4 horas** (ESGE 2021).

!!! guia "¿Qué respalda esta página?"
    La **guía ESGE 2021** (dos partes) define las indicaciones, la profilaxis antibiótica, el inicio de la alimentación y el cuidado para evitar el tope enterrado. El recambio de la sonda con balón y la conducta ante la salida accidental son **práctica habitual** y recomendaciones de los fabricantes. **Manda el protocolo de tu servicio.**

## Cuándo intervenir

| Situación | Conducta |
|---|---|
| **Salida accidental**, trayecto maduro | **Reinsertar pronto** una sonda de recambio (o Foley transitoria) |
| Salida accidental en las **primeras semanas** | **No reinsertar a ciegas**: avisar a quien la instaló (endoscopía, cirugía, radiología) |
| Sonda **obstruida** | Lavar con agua tibia con jeringa de 50–60 mL; no usar objetos para destaparla |
| **Fuga** peristomal | Revisar el balón y el tope; cuidado de la piel |
| **Tope enterrado** (no se puede movilizar, dolor, fuga) | Endoscopía |
| **Dolor** al alimentar, fiebre, peritonismo tras un recambio | **Suspender** la alimentación: sospecha de mala posición; imágenes |

## Paso a paso (recambio de sonda con balón)

1. **Explicar**; verificar el tipo y el calibre de la sonda.
2. **Desinflar** el balón de la sonda antigua (aspirar el agua) y retirarla con tracción suave.
3. **Comprobar** el balón de la nueva sonda (inflar y desinflar).
4. **Lubricar** e introducir por el trayecto **sin forzar**.
5. **Inflar** el balón con **agua destilada** según el fabricante.
6. **Traccionar** suavemente hasta sentir el balón contra la pared gástrica y **bajar el tope** a 1–2 cm de la piel.
7. **Comprobar**: aspirar contenido gástrico y lavar con agua sin dolor ni fuga.
8. Si hay **dudas** o el recambio fue difícil: **contraste** por la sonda antes de alimentar.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="gastrostomia">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" list="dl-motivo" data-marca="motivo" placeholder="ej.: salida accidental de sonda de gastrostomía instalada hace 8 meses"></label><datalist id="dl-motivo"><option value="salida accidental de la sonda"><option value="recambio programado"><option value="sonda obstruida"><option value="fuga peristomal"></datalist>
<label class="calc-campo">Tiempo desde la salida <input type="text" name="tiempo" data-marca="tiempo" placeholder="ej.: 1 hora"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Sonda <input type="text" name="sonda" list="dl-sonda" data-marca="sonda" placeholder="ej.: sonda de recambio con balón 20 F"></label><datalist id="dl-sonda"><option value="sonda de recambio con balón 20 F"><option value="sonda Foley 18 F (transitoria, para mantener el trayecto)"></datalist>
<label class="calc-campo">Balón <input type="text" name="balon" list="dl-balon" data-marca="balón" placeholder="ej.: inflado con 5 mL de agua destilada"></label><datalist id="dl-balon"><option value="inflado con 5 mL de agua destilada"><option value="inflado según el fabricante"></datalist>
<label class="calc-campo">Comprobación <input type="text" name="comprobacion" list="dl-comprobacion" data-marca="comprobación" data-recordar placeholder="ej.: aspiración de contenido gástrico y lavado con 30 mL de agua sin dolor ni fuga"></label><datalist id="dl-comprobacion"><option value="aspiración de contenido gástrico y lavado con 30 mL de agua sin dolor ni fuga"></datalist>
<label class="calc-campo">Tope externo <input type="text" name="tope" list="dl-tope" data-recordar placeholder="ej.: a 1–2 cm de la piel"></label><datalist id="dl-tope"><option value="a 1–2 cm de la piel"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza recambio de sonda de gastrostomía por {motivo}.", "?Tiempo desde la salida: {tiempo}.", "Se instala {sonda} por el trayecto, con el balón {balon}.", "Se comprueba posición con {comprobacion}.", "?Tope externo {tope}."], "indicaciones": [{"id": "lavado", "texto": "Lavar la sonda con 30 mL de agua antes y después de cada alimentación y medicamento."}, {"id": "movilizar", "texto": "Movilizar la sonda (empujar hacia dentro y girar) a diario; tope externo a 1–2 cm de la piel."}, {"id": "piel", "texto": "Aseo del estoma con agua y jabón y secado diario."}, {"id": "balon", "texto": "Revisar el volumen del balón semanalmente según el fabricante."}, {"id": "aviso", "texto": "Avisar si la sonda sale, hay dolor al alimentar, fiebre o fuga importante."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza recambio de sonda de gastrostomía por salida accidental de sonda de gastrostomía instalada hace 8 meses. Tiempo desde la salida: 1 hora. Se instala sonda de recambio con balón 20 F por el trayecto, con el balón inflado con 5 mL de agua destilada. Se comprueba posición con aspiración de contenido gástrico y lavado con 30 mL de agua sin dolor ni fuga. Tope externo a 1–2 cm de la piel.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Sonda en el peritoneo** tras un recambio (dolor, fiebre, peritonitis al alimentar) | Suspender; imágenes; cirugía |
| **Síndrome del tope enterrado** | Prevenir con movilización diaria; endoscopía |
| **Infección** del estoma | Curación; antibiótico si hay celulitis |
| **Fuga** y dermatitis | Revisar balón y tope; protección de la piel |
| **Granuloma** | Curación; nitrato de plata según el especialista |
| **Obstrucción** | Lavados regulares; medicamentos líquidos o bien molidos |

!!! alarma "Errores frecuentes"
    - **Esperar al día siguiente** para reinstalar una sonda que se salió (el trayecto se cierra).
    - **Reinsertar a ciegas** una gastrostomía reciente.
    - Dejar el **tope apretado** contra la piel.
    - Inflar el balón con **suero** o aire (según el fabricante, agua destilada).
    - Alimentar tras un recambio difícil **sin comprobar** la posición.

!!! perla "Para el internado"
    Si una gastrostomía madura se sale en la noche y no tienes sonda de recambio, una **sonda Foley** del calibre similar, solo para **mantener el trayecto**, evita un nuevo procedimiento. No se alimenta por ella hasta confirmar la posición.

## Preguntas de repaso

??? repaso "1. Gastrostomía de 1 año que se salió hace 1 hora. ¿Qué haces?"
    **Reinsertar pronto** una sonda de recambio (o una Foley transitoria) por el trayecto maduro, inflar el balón, **comprobar** la posición y luego alimentar.

??? repaso "2. PEG instalada hace 5 días que se salió. ¿La reinsertas tú?"
    **No a ciegas**: el trayecto aún no está maduro y la sonda podría quedar en el peritoneo. Avisar al equipo que la instaló.

??? repaso "3. ¿Cómo se previene el síndrome del tope enterrado?"
    **Movilizando** la sonda a diario (empujar hacia dentro y girar) y dejando el **tope externo a 1–2 cm** de la piel (ESGE 2021).

??? repaso "4. Tras un recambio, el paciente presenta dolor abdominal y fiebre al iniciar la alimentación. ¿Qué piensas?"
    **Sonda fuera del estómago** (peritoneo): suspender la alimentación, imágenes con contraste y evaluación quirúrgica.

??? repaso "5. ¿Cuándo se puede empezar a alimentar tras una PEG sin complicaciones?"
    A las **3–4 horas** (ESGE 2021).

## Referencias

1. Arvanitakis M, Gkolfakis P, Despott EJ, et al. Endoscopic management of enteral tubes in adult patients – Part 1: Definitions and indications. European Society of Gastrointestinal Endoscopy (ESGE) Guideline. *Endoscopy.* 2021;53(1):81–92. doi:[10.1055/a-1303-7449](https://doi.org/10.1055/a-1303-7449)
2. Gkolfakis P, Arvanitakis M, Despott EJ, et al. Endoscopic management of enteral tubes in adult patients – Part 2: Peri- and post-procedural management. European Society of Gastrointestinal Endoscopy (ESGE) Guideline. *Endoscopy.* 2021;53(2):178–195. doi:[10.1055/a-1331-8080](https://doi.org/10.1055/a-1331-8080)
