# Fondo de ojo

<div class="ficha" markdown>

**Procedimiento**
Oftalmoscopía directa para examinar la papila, los vasos y la retina

**Fuentes principales**
Bruce 2011 (FOTO-ED, *N Engl J Med*): fondo de ojo en la urgencia · Patel 1995 (*Am J Ophthalmol*): glaucoma agudo tras la midriasis farmacológica

**Otras fuentes**
Ver [retina, nervio óptico y baja de visión](../especialidades/oftalmologia/retina-nervio-optico-y-baja-de-vision.md), [cefalea](../neurologia/cefalea.md), [crisis hipertensiva](../cardiologia/crisis-hipertensiva.md), [complicaciones crónicas de la diabetes](../endocrinologia/complicaciones-cronicas-de-la-diabetes.md) y [TEC e hipertensión endocraneana](../neurologia/tec-e-hipertension-endocraneana.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Para qué en la urgencia**: buscar **papiledema** (hipertensión endocraneana), **retinopatía hipertensiva** grave (hemorragias, exudados, edema de papila), **oclusiones** vasculares y **desprendimiento** de retina.
    - **Se hace poco**: en el estudio FOTO-ED, los médicos de urgencia rara vez examinaron el fondo de ojo y no detectaron hallazgos relevantes que sí se vieron con fotografía (Bruce 2011).
    - **Técnica**: habitación **oscura**, mismo ojo del examinador que el del paciente, acercarse desde **15° temporal** siguiendo el reflejo rojo hasta la papila.
    - **Midriasis** (tropicamida) facilita mucho el examen; el riesgo de **glaucoma agudo** es muy bajo (< 1 en 333 si la cámara anterior no es estrecha; Patel 1995).
    - **No dilatar** en el paciente **neurológico** al que se sigue con las pupilas, ni sin conversar con el equipo.
    - **Ver** la papila (bordes, color, excavación), los vasos (relación arteria-vena, cruces), la mácula y la periferia.

!!! guia "¿Qué respalda esta página?"
    No hay guías sobre la técnica de la oftalmoscopía: es **práctica habitual**. La importancia del fondo de ojo en la urgencia se apoya en el **estudio FOTO-ED** (Bruce 2011); la seguridad de la midriasis, en un **estudio poblacional** (Patel 1995). La interpretación coincide con el resumen de [retina y nervio óptico](../especialidades/oftalmologia/retina-nervio-optico-y-baja-de-vision.md). **Manda el protocolo de tu servicio.**

## Qué buscar

| Hallazgo | Qué significa |
|---|---|
| Papila con **bordes borrosos**, elevada, sin pulso venoso, hemorragias peripapilares, **bilateral** | **Papiledema** (hipertensión endocraneana): imagen cerebral urgente |
| Papila **pálida** | Atrofia óptica |
| **Excavación** grande (> 0,6) o asimétrica | Sospecha de **glaucoma** |
| **Hemorragias en llama**, exudados algodonosos, edema de papila con presión muy alta | **Retinopatía hipertensiva grave**: emergencia hipertensiva |
| **Microaneurismas**, hemorragias en punto, exudados duros | **Retinopatía diabética** |
| Retina **pálida** con **mancha rojo cereza** | **Oclusión de la arteria central** de la retina: urgencia |
| Hemorragias "en tormenta" en los 4 cuadrantes | **Oclusión de la vena central** |
| Retina elevada, gris, con pliegues | **Desprendimiento** de retina |

## Paso a paso

1. **Habitación oscura**; el paciente mira un punto **lejano** fijo.
2. Regular el oftalmoscopio en **0** (o según la refracción de ambos).
3. **Ojo derecho del paciente con tu ojo derecho** y mano derecha (y al revés).
4. Desde ~ 30 cm, buscar el **reflejo rojo** (opacidades, leucocoria).
5. Acercarse desde **15° temporal** a la línea de mirada, siguiendo un vaso hasta la **papila**.
6. Examinar la **papila**, luego seguir los **vasos** en los 4 cuadrantes y al final la **mácula** (pedir que mire la luz).
7. Si no se logra ver: **midriasis** con tropicamida (si no hay contraindicación) o fotografía.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="fondo-ojo">
<span class="gen-titulo">El examen</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" list="dl-motivo" data-marca="motivo" placeholder="ej.: cefalea de 2 semanas con vómitos matinales"></label><datalist id="dl-motivo"><option value="cefalea con signos de alarma"><option value="crisis hipertensiva"><option value="control de retinopatía diabética"><option value="baja de visión"></datalist>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: oftalmoscopía directa sin midriasis"></label><datalist id="dl-tecnica"><option value="oftalmoscopía directa sin midriasis"><option value="oftalmoscopía directa con midriasis (tropicamida)"><option value="fotografía de fondo de ojo"></datalist>
<label class="calc-campo">Ojo derecho <input type="text" name="od" data-marca="ojo derecho" placeholder="ej.: papila de bordes netos, excavación 0,3, sin hemorragias ni exudados"></label>
<label class="calc-campo">Ojo izquierdo <input type="text" name="oi" data-marca="ojo izquierdo" placeholder="ej.: papila de bordes netos, excavación 0,3, sin hemorragias ni exudados"></label>
<label class="calc-campo">Pulso venoso espontáneo <input type="text" name="pulso" list="dl-pulso" placeholder="ej.: presente"></label><datalist id="dl-pulso"><option value="presente"><option value="ausente"><option value="no evaluable"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Fondo de ojo por {motivo}, con {tecnica}.", "OD: {od}. OI: {oi}.", "?Pulso venoso espontáneo: {pulso}."], "indicaciones": [{"id": "derivar", "texto": "Si hay papiledema, hemorragias o exudados: derivar o pedir evaluación oftalmológica según la urgencia."}, {"id": "midriasis", "texto": "Tras la midriasis: no conducir hasta que pase el efecto (4–6 horas)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Fondo de ojo por cefalea de 2 semanas con vómitos matinales, con oftalmoscopía directa sin midriasis. OD: papila de bordes netos, excavación 0,3, sin hemorragias ni exudados. OI: papila de bordes netos, excavación 0,3, sin hemorragias ni exudados. Pulso venoso espontáneo: presente.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Glaucoma agudo** tras la midriasis (raro) | Dolor ocular, ojo rojo, visión borrosa, náuseas: oftalmología urgente |
| Encandilamiento, visión borrosa por la midriasis | Advertir; no conducir por unas horas |

!!! alarma "Errores frecuentes"
    - **No mirar** el fondo de ojo en la cefalea con signos de alarma o en la crisis hipertensiva.
    - **Dilatar** a un paciente neurológico al que se sigue con las pupilas sin avisar.
    - Confiar en un fondo de ojo "normal" **sin haber visto** bien la papila.
    - Usar la ausencia del **pulso venoso** como único signo de papiledema (puede faltar en personas sanas).

!!! perla "Para el internado"
    Practica con pacientes **dilatados** en oftalmología o diabetes: ver bien una papila normal muchas veces es lo que permite reconocer una anormal.

## Preguntas de repaso

??? repaso "1. Cefalea progresiva con vómitos y papilas de bordes borrosos bilaterales. ¿Qué haces?"
    **Papiledema**: **imagen cerebral urgente** (TC o RM) antes de cualquier punción lumbar.

??? repaso "2. ¿Con qué ojo examinas el ojo derecho del paciente?"
    Con tu **ojo derecho** (y la mano derecha).

??? repaso "3. ¿Es peligroso dilatar las pupilas para ver el fondo de ojo?"
    El riesgo de **glaucoma agudo** es muy bajo (< 1 en 333 con cámara anterior normal; Patel 1995). Evitarlo en el paciente neurológico al que se sigue con las pupilas.

??? repaso "4. Pérdida brusca e indolora de la visión de un ojo con retina pálida y mancha rojo cereza. ¿Diagnóstico?"
    **Oclusión de la arteria central de la retina**: urgencia oftalmológica y estudio como un **ACV**.

??? repaso "5. Presión 220/130 con hemorragias en llama, exudados algodonosos y edema de papila. ¿Qué significa?"
    **Retinopatía hipertensiva grave**: **emergencia hipertensiva** (daño de órgano blanco).

## Referencias

1. Bruce BB, Lamirel C, Wright DW, et al. Nonmydriatic ocular fundus photography in the emergency department. *N Engl J Med.* 2011;364(4):387–389. doi:[10.1056/NEJMc1009733](https://doi.org/10.1056/NEJMc1009733)
2. Patel KH, Javitt JC, Tielsch JM, et al. Incidence of acute angle-closure glaucoma after pharmacologic mydriasis. *Am J Ophthalmol.* 1995;120(6):709–717. doi:[10.1016/s0002-9394(14)72724-2](https://doi.org/10.1016/s0002-9394(14)72724-2)
