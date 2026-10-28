# Balón de Sengstaken-Blakemore

<div class="ficha" markdown>

**Procedimiento**
Taponamiento con balón de las várices esofágicas o gástricas que siguen sangrando pese al tratamiento farmacológico y endoscópico

**Fuentes principales**
Baveno VII (2022): consenso de hipertensión portal

**Otras fuentes**
Ver [hemorragia digestiva alta](../gastroenterologia/hemorragia-digestiva-alta.md), [cirrosis y complicaciones](../gastroenterologia/cirrosis-y-complicaciones.md) e [intubación orotraqueal](intubacion-orotraqueal.md)

**Revisado**
Octubre 2026

</div>

!!! alarma "Procedimiento supervisado"
    Este procedimiento lo realiza habitualmente el residente o el especialista. El interno lo hace **solo con supervisión directa** y después de haberlo practicado en simulación.

!!! abstract "Resumen en 60 segundos"
    - **Indicación**: hemorragia variceal **refractaria** (no cede con vasoactivos, antibiótico y ligadura) o sin endoscopía disponible, como **puente** a un **TIPS de rescate** o a otra endoscopía.
    - **Máximo 24 horas** (Baveno VII). La **prótesis esofágica autoexpandible** es una alternativa para las várices esofágicas.
    - **Intubar antes**: riesgo alto de **aspiración**.
    - **Primero el balón gástrico**: confirmar con **radiografía** que está en el estómago **antes** de inflarlo del todo (inflarlo en el esófago lo rompe).
    - **Tracción suave**; inflar el **balón esofágico** solo si sigue sangrando, a **~ 30–45 mmHg**.
    - **Tijera junto a la cama**: si el balón migra a la vía aérea, cortar y retirar.

!!! guia "¿Qué respalda esta página?"
    **Baveno VII (2022)** sitúa el taponamiento con balón como **puente** de no más de 24 horas en la hemorragia variceal refractaria. La técnica de instalación es **práctica habitual** y sigue las instrucciones del fabricante; los volúmenes exactos dependen del modelo (Sengstaken-Blakemore o Minnesota). **Manda el protocolo de tu servicio.**

## Cuándo usarlo

| Situación | Conducta |
|---|---|
| Hemorragia variceal **refractaria** a terlipresina/octreotide y ligadura | **Balón** o **prótesis esofágica** como puente a TIPS |
| **Sin endoscopía** disponible y sangrado masivo | Balón como puente al traslado o la endoscopía |
| Hemorragia **no variceal** | **No** |
| Cirugía esofágica reciente, estenosis esofágica | Contraindicación relativa |

## Antes de empezar

- **Intubar** (vía aérea protegida).
- **Sonda** de Sengstaken-Blakemore o Minnesota; **comprobar los balones** inflándolos bajo agua antes de usar.
- **Manómetro**, jeringas grandes, pinzas, lubricante, sistema de tracción, **tijera**.
- Mantener **vasoactivo**, **ceftriaxona** y transfusión según la [guía](../gastroenterologia/hemorragia-digestiva-alta.md).

## Paso a paso

1. **Intubado**, cabecera a 30–45°; aspirar el estómago.
2. **Lubricar** e introducir la sonda por la boca (o nariz) hasta **~ 50 cm** (marca del fabricante).
3. **Inflar el balón gástrico** con un volumen pequeño de aire y **confirmar con radiografía** que está bajo el diafragma.
4. **Completar** el inflado del balón gástrico según el fabricante (habitualmente 250–300 mL de aire en el Sengstaken) y **pinzar**.
5. **Traccionar** con suavidad hasta sentir el tope en la unión gastroesofágica y **fijar** la tracción.
6. **Lavar** el estómago por el lumen gástrico: si sigue sangrando, **inflar el balón esofágico** a **~ 30–45 mmHg** con manómetro.
7. **Anotar la hora**; aspirar las secreciones sobre el balón esofágico.
8. **Planificar** el tratamiento definitivo **antes de 24 horas**.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="sengstaken">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" data-marca="indicación" placeholder="ej.: hemorragia variceal esofágica refractaria a terlipresina y ligadura endoscópica"></label>
<label class="calc-campo">Vía aérea <input type="text" name="via" list="dl-via" data-marca="vía aérea" data-recordar placeholder="ej.: paciente intubado"></label><datalist id="dl-via"><option value="paciente intubado"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Sonda <input type="text" name="sonda" data-marca="sonda" placeholder="ej.: sonda de Sengstaken-Blakemore por vía oral, a 50 cm"></label>
<label class="calc-campo">Balón gástrico <input type="text" name="gastrico" data-marca="balón gástrico" placeholder="ej.: inflado con 250 mL de aire tras confirmar su posición en el estómago con radiografía"></label>
<label class="calc-campo">Tracción <input type="text" name="traccion" list="dl-traccion" data-marca="tracción" data-recordar placeholder="ej.: tracción suave fijada"></label><datalist id="dl-traccion"><option value="tracción suave fijada"></datalist>
<label class="calc-campo">Balón esofágico <input type="text" name="esofagico" list="dl-esofagico" placeholder="ej.: inflado a 35 mmHg por persistencia del sangrado"></label><datalist id="dl-esofagico"><option value="no inflado (cede el sangrado con el balón gástrico)"><option value="inflado a 35 mmHg por persistencia del sangrado"></datalist>
<label class="calc-campo">Hora de instalación <input type="text" name="hora" data-marca="hora" placeholder="ej.: 03:40"></label>
<script type="application/json" class="gen-def">{"frases": ["Se instala balón de taponamiento por {indicacion}; {via}.", "{sonda}. Balón gástrico {gastrico}, con {traccion}.", "?Balón esofágico: {esofagico}.", "Hora de instalación: {hora}; retirar o reemplazar antes de 24 horas."], "indicaciones": [{"id": "tiempo", "texto": "Mantener el balón como máximo 24 horas; plan definitivo (TIPS de rescate o nueva endoscopía) en ese plazo."}, {"id": "presion", "texto": "Controlar la presión del balón esofágico cada hora; tijera junto a la cama."}, {"id": "aspirar", "texto": "Aspiración de secreciones sobre el balón esofágico y por el lumen gástrico."}, {"id": "rx", "texto": "Radiografía de tórax y abdomen para confirmar la posición."}, {"id": "farmacos", "texto": "Mantener terlipresina u octreotide, ceftriaxona y transfusión restrictiva (Hb 7 g/dL)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se instala balón de taponamiento por hemorragia variceal esofágica refractaria a terlipresina y ligadura endoscópica; paciente intubado. Sonda de Sengstaken-Blakemore por vía oral, a 50 cm. Balón gástrico inflado con 250 mL de aire tras confirmar su posición en el estómago con radiografía, con tracción suave fijada. Balón esofágico: inflado a 35 mmHg por persistencia del sangrado. Hora de instalación: 03:40; retirar o reemplazar antes de 24 horas.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Aspiración** | Intubar antes; aspirar sobre el balón |
| **Rotura o perforación esofágica** (balón gástrico inflado en el esófago) | Confirmar posición con radiografía antes de inflar |
| **Migración** del balón con **obstrucción de la vía aérea** | **Cortar** la sonda con la tijera y retirarla |
| **Necrosis** de mucosa esofágica | Presión mínima eficaz; máximo 24 horas |
| **Resangrado** al desinflar | Tener listo el tratamiento definitivo (TIPS) |

!!! alarma "Errores frecuentes"
    - Instalarlo **sin intubar**.
    - Inflar el balón gástrico **sin confirmar** que está en el estómago.
    - Dejarlo **más de 24 horas** sin plan.
    - No tener **tijera** junto a la cama.

!!! perla "Para el internado"
    El balón no es el tratamiento: es **tiempo** para llegar al TIPS o a una nueva endoscopía. Mientras está puesto, **anota la hora** en un lugar visible.

## Preguntas de repaso

??? repaso "1. Cirrótico con hemorragia variceal que sigue sangrando pese a terlipresina y ligadura. ¿Qué opciones de puente hay?"
    **Balón de taponamiento** (máximo 24 horas) o **prótesis esofágica autoexpandible**, como puente a un **TIPS de rescate** (Baveno VII).

??? repaso "2. ¿Qué haces antes de instalar el balón?"
    **Intubar** para proteger la vía aérea y **probar los balones**.

??? repaso "3. ¿Por qué confirmas con radiografía antes de inflar por completo el balón gástrico?"
    Si queda en el **esófago**, al inflarlo puede **romperlo**.

??? repaso "4. El paciente con balón se desatura bruscamente y la sonda parece haber salido unos centímetros. ¿Qué haces?"
    Posible **migración** del balón con obstrucción de la vía aérea: **cortar** la sonda (desinflar los balones) y retirarla.

??? repaso "5. ¿Cuánto tiempo puede quedar el balón?"
    **Máximo 24 horas** (Baveno VII).

## Referencias

1. de Franchis R, Bosch J, Garcia-Tsao G, et al. Baveno VII – Renewing consensus in portal hypertension. *J Hepatol.* 2022;76(4):959–974. doi:[10.1016/j.jhep.2021.12.022](https://doi.org/10.1016/j.jhep.2021.12.022)
