# Marcapaso transcutáneo

<div class="ficha" markdown>

**Procedimiento**
Estimulación cardíaca con parches sobre el tórax, como puente en la bradicardia inestable

**Fuentes principales**
AHA 2025: soporte vital avanzado (bradicardia) · ACC/AHA/HRS 2018: bradicardia y trastornos de la conducción

**Otras fuentes**
Ver [paro cardiorrespiratorio y arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md), [trastornos del potasio](../nefrologia/trastornos-del-potasio.md) y [cardioversión](cardioversion.md)

**Revisado**
Octubre 2026

</div>

!!! alarma "Procedimiento supervisado"
    Este procedimiento lo realiza habitualmente el residente o el especialista. El interno lo hace **solo con supervisión directa** y después de haberlo practicado en simulación.

!!! abstract "Resumen en 60 segundos"
    - **Indicación**: **bradicardia con inestabilidad** (hipotensión, compromiso de conciencia, isquemia, insuficiencia cardíaca) que **no responde a atropina** (1 mg cada 3–5 minutos, hasta 3 mg), o en la que no se espera respuesta (**Mobitz II**, **bloqueo completo** con QRS ancho, corazón trasplantado).
    - **Alternativa**: infusión de **dopamina 5–20 µg/kg/min** o **adrenalina 2–10 µg/min** (AHA 2025).
    - **Programar**: modo **demanda**, frecuencia **60–80 lpm**, subir los **mA** hasta lograr **captura eléctrica** y dejar un margen por encima del umbral.
    - **Confirmar la captura mecánica** con el **pulso femoral** (el carotídeo se confunde con las contracciones musculares).
    - **Duele**: sedoanalgesia.
    - **Es un puente**: marcapaso **transvenoso** y evaluación por cardiología. Corregir **potasio** y **fármacos**.

!!! guia "¿Qué respalda esta página?"
    El lugar del marcapaso transcutáneo en el algoritmo viene de las **guías AHA 2025** y **ACC/AHA/HRS 2018**. La técnica (parches, modo, umbral) es **práctica habitual** y depende del equipo. **Manda el protocolo de tu servicio.**

## Cuándo usarlo

| Situación | Conducta |
|---|---|
| Bradicardia **inestable** sin respuesta a **atropina** | **Marcapaso transcutáneo** o infusión de dopamina/adrenalina |
| **Bloqueo AV de alto grado** infranodal (Mobitz II, completo con QRS ancho) inestable | Marcapaso transcutáneo **precoz** (la atropina suele fallar) |
| **Asistolia** | **No de rutina** (sin beneficio en el paro) |
| Bradicardia por **betabloqueador o bloqueador del calcio** | Además: glucagón, calcio, insulina en dosis altas |
| Bradicardia **estable** | Observar, buscar la causa |

## Antes de empezar

- **Desfibrilador con función de marcapaso**, parches, **cables de monitoreo ECG** del equipo (la mayoría los necesita para el modo demanda).
- **Sedoanalgesia** (opioide ± benzodiazepina).
- **Atropina**, **dopamina** o **adrenalina** preparadas.

## Paso a paso

1. **Monitor** con los electrodos del equipo; buscar y tratar la causa.
2. **Parches**: anteroposteriores (anterior en el precordio, posterior bajo la escápula izquierda) o anterolaterales.
3. **Sedoanalgesia**.
4. **Modo demanda**, frecuencia **60–80 lpm**.
5. **Subir los mA** de a poco hasta ver **captura eléctrica**: cada espiga seguida de un **QRS ancho** y una onda **T**.
6. Dejar la corriente **algo por encima** del umbral de captura.
7. **Captura mecánica**: pulso **femoral** a la frecuencia programada y mejoría de la presión.
8. **Reevaluar** cada hora y pedir el **marcapaso transvenoso**.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="marcapaso">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: bloqueo AV completo con FC 32 lpm e hipotensión, sin respuesta a atropina 3 mg"></label><datalist id="dl-indicacion"><option value="bradicardia sintomática sin respuesta a atropina"><option value="bloqueo AV completo con inestabilidad"><option value="bloqueo AV Mobitz II con inestabilidad"></datalist>
<label class="calc-campo">Sedoanalgesia <input type="text" name="sedacion" data-marca="sedoanalgesia" placeholder="ej.: fentanilo 50 µg y midazolam 1 mg EV"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Parches <input type="text" name="parches" list="dl-parches" data-marca="parches" placeholder="ej.: anteroposteriores"></label><datalist id="dl-parches"><option value="anteroposteriores"><option value="anterolaterales"></datalist>
<label class="calc-campo">Modo y frecuencia <input type="text" name="modo" list="dl-modo" data-marca="modo y frecuencia" placeholder="ej.: modo demanda a 70 lpm"></label><datalist id="dl-modo"><option value="modo demanda a 60 lpm"><option value="modo demanda a 70 lpm"><option value="modo demanda a 80 lpm"></datalist>
<label class="calc-campo">Corriente <input type="text" name="corriente" data-marca="corriente" placeholder="ej.: captura eléctrica a 70 mA; se deja en 80 mA"></label>
<label class="calc-campo">Captura mecánica <input type="text" name="captura" data-marca="captura mecánica" placeholder="ej.: pulso femoral palpable a 70 lpm, presión 105/60"></label>
<label class="calc-campo">Plan <input type="text" name="plan" list="dl-plan" data-recordar placeholder="ej.: evaluación por cardiología para marcapaso transvenoso"></label><datalist id="dl-plan"><option value="evaluación por cardiología para marcapaso transvenoso"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se instala marcapaso transcutáneo por {indicacion}.", "Previa sedoanalgesia con {sedacion}, parches {parches}, {modo}; {corriente}.", "Se comprueba captura mecánica: {captura}.", "?Plan: {plan}."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo continuo; revisar captura eléctrica y mecánica cada hora."}, {"id": "analgesia", "texto": "Analgesia y sedación según necesidad (el marcapaso transcutáneo es doloroso)."}, {"id": "causas", "texto": "Buscar y corregir causas reversibles: potasio, fármacos bradicardizantes, isquemia."}, {"id": "cardio", "texto": "Evaluación urgente por cardiología: marcapaso transvenoso transitorio."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se instala marcapaso transcutáneo por bloqueo AV completo con FC 32 lpm e hipotensión, sin respuesta a atropina 3 mg. Previa sedoanalgesia con fentanilo 50 µg y midazolam 1 mg EV, parches anteroposteriores, modo demanda a 70 lpm; captura eléctrica a 70 mA; se deja en 80 mA. Se comprueba captura mecánica: pulso femoral palpable a 70 lpm, presión 105/60. Plan: evaluación por cardiología para marcapaso transvenoso.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Falta de captura** (obesidad, enfisema, derrame, parches mal puestos) | Reposicionar los parches, subir los mA; marcapaso transvenoso |
| **Falsa captura** (artefacto en el monitor, contracción muscular que simula pulso) | Confirmar con el **pulso femoral** o la ecografía |
| **Dolor** y contracciones musculares | Sedoanalgesia |
| **Quemaduras** de piel | Revisar la piel; cambiar los parches |
| Pérdida de captura con el tiempo | Revisar cada hora |

!!! alarma "Errores frecuentes"
    - Confiar en las **espigas del monitor** sin comprobar el **pulso**.
    - Palpar el pulso **carotídeo** (se confunde con las contracciones musculares).
    - No dar **analgesia**.
    - Olvidar la **hiperkalemia** o los **fármacos** como causa.

!!! perla "Para el internado"
    Ante una bradicardia inestable, pide **K⁺** y revisa la lista de **fármacos** mientras se instala el marcapaso: la hiperkalemia y los bradicardizantes son causas frecuentes y tratables.

## Preguntas de repaso

??? repaso "1. Bloqueo AV completo con QRS ancho, FC 30 lpm y presión 70/40. ¿Qué haces?"
    **Atropina** puede intentarse, pero suele fallar en el bloqueo infranodal: **marcapaso transcutáneo** precoz (o dopamina/adrenalina), y luego marcapaso **transvenoso**.

??? repaso "2. El monitor muestra espigas seguidas de QRS, pero no palpas pulso femoral. ¿Qué pasa?"
    No hay **captura mecánica** (o es falsa captura eléctrica). Subir los mA, reposicionar los parches y, si no hay pulso, tratar como **paro** (AESP).

??? repaso "3. ¿Por qué se palpa el pulso femoral y no el carotídeo?"
    Las **contracciones musculares** del cuello y el tórax por el marcapaso se confunden con el pulso carotídeo.

??? repaso "4. ¿Se usa el marcapaso transcutáneo en la asistolia?"
    **No de rutina**: no mejora el pronóstico del paro.

??? repaso "5. ¿Cuál es la dosis de atropina en la bradicardia?"
    **1 mg EV** cada 3–5 minutos, hasta **3 mg** (AHA 2025).

## Referencias

1. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
2. Kusumoto FM, Schoenfeld MH, Barrett C, et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. *Circulation.* 2019;140:e382–e482. doi:[10.1161/CIR.0000000000000628](https://doi.org/10.1161/CIR.0000000000000628)
