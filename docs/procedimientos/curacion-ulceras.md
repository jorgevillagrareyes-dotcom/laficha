# Curación de úlceras por presión y pie diabético

<div class="ficha" markdown>

**Procedimiento**
Evaluación y curación de heridas crónicas: lesiones por presión y úlceras del pie diabético

**Fuentes principales**
EPUAP/NPIAP/PPPIA 2025: guía internacional de lesiones por presión · IWGDF 2023: enfermedad del pie relacionada con la diabetes

**Otras fuentes**
Ver [inmovilidad y úlceras por presión](../geriatria/inmovilidad-y-ulceras-por-presion.md), [complicaciones crónicas de la diabetes](../endocrinologia/complicaciones-cronicas-de-la-diabetes.md), [osteomielitis](../infectologia/osteomielitis.md) y [desnutrición](../endocrinologia/desnutricion-y-sindromes-carenciales.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Primero la causa**: en la lesión por presión, **redistribuir la presión** (cambios de posición, colchón); en el pie diabético, **descarga** (la clave de la cicatrización neuropática).
    - **Evaluar** en cada curación: tamaño, lecho (granulación, esfacelo, necrosis), exudado, bordes, piel perilesional, **infección** y **perfusión**.
    - **Limpiar** con suero o agua potable; **desbridar** el tejido desvitalizado (salvo la **escara seca del talón isquémico**).
    - **Cura húmeda**: el apósito se elige según el exudado (hidrogel si está seco; espuma o alginato si exuda).
    - **Pie diabético**: clasificar (IWGDF), descartar **isquemia** e **infección** (osteomielitis si se toca hueso con sonda), y derivar a curación avanzada (GES).
    - **Nutrición**, control glicémico y manejo del dolor.

!!! guia "¿Qué respalda esta página?"
    Las **guías internacionales EPUAP/NPIAP/PPPIA 2025** (lesiones por presión) e **IWGDF 2023** (pie diabético) se basan en revisiones sistemáticas; la evidencia para elegir un **apósito** sobre otro es **débil**. Las metas nutricionales y la clasificación coinciden con los resúmenes de [úlceras por presión](../geriatria/inmovilidad-y-ulceras-por-presion.md) y [pie diabético](../endocrinologia/complicaciones-cronicas-de-la-diabetes.md). **Manda el protocolo de tu servicio.**

## Qué mirar en la herida

| Aspecto | Qué significa | Qué hacer |
|---|---|---|
| **Granulación** (roja, granular) | Herida que cicatriza | Mantener húmeda, proteger |
| **Esfacelo** (amarillo, adherido) | Tejido desvitalizado | **Desbridar** (cortante, autolítico, enzimático) |
| **Necrosis** (negra) | Tejido muerto | Desbridar, **salvo** la escara seca y estable del **talón isquémico** |
| Exudado **abundante** | Inflamación, infección, edema | Alginato, espuma; buscar la causa |
| Eritema > 2 cm, calor, pus, mal olor | **Infección** | Cultivo de tejido, antibiótico, cirugía si es grave |
| **Se toca hueso** con la sonda | Probable **osteomielitis** | Radiografía o RM; biopsia ósea |
| Pulsos ausentes, índice tobillo-brazo bajo | **Isquemia** | Evaluación vascular antes de desbridar |

## Paso a paso

1. **Analgesia** antes de la curación.
2. **Retirar** el apósito y **evaluar** (medir largo × ancho × profundidad; tunelizaciones).
3. **Limpiar** el lecho, los bordes y la piel perilesional con **suero fisiológico** o agua potable (antisépticos si se sospecha infección o biopelícula).
4. **Desbridar** el tejido desvitalizado (cortante por personal entrenado; o hidrogel, colagenasa).
5. **Proteger** la piel perilesional.
6. **Apósito** según el exudado (cura húmeda).
7. **Descarga**: cambios de posición y superficie especial (presión); **calzado o bota de descarga** (pie diabético).
8. **Registrar** y programar la próxima curación.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="ulceras">
<span class="gen-titulo">La herida</span>
<label class="calc-campo">Tipo <input type="text" name="tipo" list="dl-tipo" data-marca="tipo" placeholder="ej.: lesión por presión categoría 3 en región sacra"></label><datalist id="dl-tipo"><option value="lesión por presión categoría 2"><option value="lesión por presión categoría 3"><option value="lesión por presión categoría 4"><option value="úlcera de pie diabético neuropática"><option value="úlcera de pie diabético neuroisquémica"></datalist>
<label class="calc-campo">Tamaño <input type="text" name="tamano" data-marca="tamaño" placeholder="ej.: 4 × 3 cm, 0,5 cm de profundidad"></label>
<label class="calc-campo">Lecho <input type="text" name="lecho" data-marca="lecho" placeholder="ej.: 50 % granulación y 50 % esfacelo, exudado moderado seroso, sin mal olor"></label>
<label class="calc-campo">Bordes y piel perilesional <input type="text" name="bordes" data-marca="bordes" placeholder="ej.: bordes regulares, piel perilesional sin eritema"></label>
<label class="calc-campo">Signos de infección <input type="text" name="infeccion" list="dl-infeccion" data-marca="signos de infección" placeholder="ej.: sin signos de infección"></label><datalist id="dl-infeccion"><option value="sin signos de infección"><option value="con eritema &gt; 2 cm alrededor (infección moderada)"></datalist>
<span class="gen-titulo">La curación</span>
<label class="calc-campo">Limpieza <input type="text" name="limpieza" list="dl-limpieza" data-marca="limpieza" data-recordar placeholder="ej.: suero fisiológico tibio a presión"></label><datalist id="dl-limpieza"><option value="suero fisiológico tibio a presión"></datalist>
<label class="calc-campo">Desbridamiento <input type="text" name="desbridamiento" list="dl-desbridamiento" data-marca="desbridamiento" placeholder="ej.: desbridamiento cortante del esfacelo"></label><datalist id="dl-desbridamiento"><option value="desbridamiento cortante del esfacelo"><option value="hidrogel (autolítico)"><option value="no requiere"></datalist>
<label class="calc-campo">Apósito <input type="text" name="aposito" list="dl-aposito" data-marca="apósito" placeholder="ej.: espuma hidrocelular"></label><datalist id="dl-aposito"><option value="espuma hidrocelular"><option value="alginato"><option value="hidrocoloide"><option value="apósito con plata"></datalist>
<label class="calc-campo">Descarga de presión <input type="text" name="descarga" list="dl-descarga" data-marca="descarga" placeholder="ej.: cambios de posición cada 2 horas y colchón antiescaras"></label><datalist id="dl-descarga"><option value="cambios de posición cada 2 horas y colchón antiescaras"><option value="calzado de descarga"><option value="bota de descarga"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza curación de {tipo}, de {tamano}.", "Lecho: {lecho}. {bordes}; {infeccion}.", "Se limpia con {limpieza}; {desbridamiento}; se cubre con {aposito}.", "Descarga: {descarga}."], "indicaciones": [{"id": "frecuencia", "texto": "Curación cada 2–3 días o según el apósito y el exudado."}, {"id": "posicion", "texto": "Cambios de posición programados y superficie de redistribución de presión."}, {"id": "nutricion", "texto": "Evaluación nutricional: 30–35 kcal/kg/día y 1,2–1,5 g/kg/día de proteínas si no hay contraindicación."}, {"id": "glicemia", "texto": "Control glicémico y evaluación vascular (pie diabético)."}, {"id": "registro", "texto": "Registrar el tamaño y el aspecto de la herida semanalmente (foto si el protocolo lo permite)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza curación de lesión por presión categoría 3 en región sacra, de 4 × 3 cm, 0,5 cm de profundidad. Lecho: 50 % granulación y 50 % esfacelo, exudado moderado seroso, sin mal olor. Bordes regulares, piel perilesional sin eritema; sin signos de infección. Se limpia con suero fisiológico tibio a presión; desbridamiento cortante del esfacelo; se cubre con espuma hidrocelular. Descarga: cambios de posición cada 2 horas y colchón antiescaras.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Infección** de partes blandas | Antibiótico según gravedad; drenaje y desbridamiento quirúrgico |
| **Osteomielitis** | Imagen, biopsia ósea, tratamiento prolongado (ver [osteomielitis](../infectologia/osteomielitis.md)) |
| **Sangrado** al desbridar | Compresión; hemostasia |
| **Isquemia** no reconocida | Evaluar perfusión antes de desbridar en el pie |
| **Sepsis** | Hospitalizar |

!!! alarma "Errores frecuentes"
    - Curar la herida sin **quitar la presión**.
    - **Desbridar** la escara seca de un **talón isquémico**.
    - Tomar cultivos con **tórula superficial** (contaminantes): cultivo de **tejido**.
    - Usar el mismo apósito para cualquier herida.
    - No evaluar la **perfusión** en el pie diabético.

!!! perla "Para el internado"
    En el pie diabético, **pasa una sonda estéril** por la úlcera: si **toca hueso**, la probabilidad de osteomielitis es alta.

## Preguntas de repaso

??? repaso "1. ¿Qué es lo más importante para que cicatrice una úlcera neuropática del pie diabético?"
    La **descarga** de la presión (bota o yeso de contacto total, calzado de descarga).

??? repaso "2. Lesión por presión en el talón con escara negra seca y pulsos pedios ausentes. ¿Desbridas?"
    **No**: la escara seca y estable del **talón isquémico** se mantiene; evaluar la **perfusión**.

??? repaso "3. Úlcera con esfacelo amarillo adherido. ¿Qué haces?"
    **Desbridar** (cortante, autolítico con hidrogel o enzimático con colagenasa).

??? repaso "4. Úlcera plantar en la que la sonda toca hueso. ¿Qué sospechas?"
    **Osteomielitis**: radiografía o RM y biopsia ósea para cultivo.

??? repaso "5. ¿Qué aporte proteico se recomienda en un paciente con lesiones por presión y desnutrición?"
    **1,2–1,5 g/kg/día** de proteínas y **30–35 kcal/kg/día**, si no hay contraindicación.

## Referencias

1. European Pressure Ulcer Advisory Panel, National Pressure Injury Advisory Panel, Pan Pacific Pressure Injury Alliance. Prevention and treatment of pressure ulcers/injuries: clinical practice guideline. The International Guideline. 4th ed. 2025 (guía en línea). [internationalguideline.com](https://internationalguideline.com/)
2. Schaper NC, van Netten JJ, Apelqvist J, et al. Practical guidelines on the prevention and management of diabetes-related foot disease (IWGDF 2023 update). *Diabetes Metab Res Rev.* 2024;40:e3657. doi:[10.1002/dmrr.3657](https://doi.org/10.1002/dmrr.3657)
