# Bloqueos regionales simples

<div class="ficha" markdown>

**Procedimiento**
Anestesia de un territorio nervioso con anestésico local: bloqueo digital, bloqueos de la muñeca y bloqueo del hematoma de fractura

**Fuentes principales**
Ilicki 2015 (*J Emerg Med*): seguridad de la epinefrina en los bloqueos digitales · Cochrane 2002 (Handoll): anestesia para la fractura de radio distal

**Otras fuentes**
Ver [sutura de heridas](sutura.md), [anestesia y anestésicos locales](../cirugia/anestesia-y-perioperatorio/anestesia-y-anestesicos-locales.md), [uña encarnada](una-encarnada.md) y [fractura de muñeca](../traumatologia/fractura-de-muneca-heridas-de-la-mano-y-lesiones-de-nervios.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Dosis máxima de lidocaína**: **4,5 mg/kg sin epinefrina** y **7 mg/kg con epinefrina**; la lidocaína al **1 %** tiene **10 mg/mL** y al **2 %**, **20 mg/mL**. Calcular **antes**.
    - **Aspirar antes de inyectar** (evitar la inyección intravascular).
    - **Bloqueo digital**: en anillo en la base del dedo o transtecal. La **epinefrina en los dedos es segura** si no hay compromiso vascular (Ilicki 2015).
    - **Bloqueo del hematoma**: inyectar lidocaína en el foco de una **fractura de radio distal** para reducirla. Es **rápido y fácil**, aunque la anestesia regional EV (Bier) dio mejor analgesia en los ensayos (Cochrane 2002).
    - **Bloqueos de la muñeca** (mediano, cubital, radial): para procedimientos de la mano.
    - **Toxicidad sistémica**: parestesias periorales, tinnitus, convulsiones, arritmias → suspender, soporte, **emulsión lipídica**.

!!! guia "¿Qué respalda esta página?"
    La seguridad de la epinefrina en los dedos se apoya en una **revisión de la literatura** (Ilicki 2015). Para la fractura de radio distal hay una **revisión Cochrane** (2002, 18 estudios de baja calidad). La técnica de cada bloqueo es **práctica habitual**. Las dosis máximas coinciden con la página de [sutura](sutura.md) y la [ficha de lidocaína](../farmacos.md). **Manda el protocolo de tu servicio.**

## Qué bloqueo para qué

| Bloqueo | Para qué | Volumen habitual (adulto) |
|---|---|---|
| **Digital en anillo** | Heridas, uña, paroniquia, luxación de dedo | 1–2 mL a cada lado de la base del dedo (sin pasar de la dosis máxima) |
| **Digital transtecal** | Lo mismo, con una sola punción | 2–3 mL en la vaina flexora, a nivel del pliegue palmar distal |
| **Hematoma de fractura** | Reducción de fractura de **radio distal** | ~ 10 mL de lidocaína al 1–2 % en el foco, tras aspirar sangre |
| **Nervio mediano** (muñeca) | Palma y dedos 1.º a 3.º | 3–5 mL entre el palmar largo y el flexor radial del carpo |
| **Nervio cubital** (muñeca) | Borde cubital de la mano y dedo 5.º | 3–5 mL junto al flexor cubital del carpo |

*Volúmenes orientativos de práctica habitual; nunca superar la dosis máxima por kilo.*

## Paso a paso

### Bloqueo digital en anillo

1. **Antisepsia** de la base del dedo.
2. Aguja fina (25–27 G) en la **cara dorsolateral** de la base del dedo.
3. **Aspirar** e inyectar ~ 1 mL dorsal, avanzar hacia palmar e inyectar ~ 1 mL más (nervios digitales palmares).
4. Repetir en el **otro lado**.
5. Esperar **5–10 minutos** y comprobar la anestesia.

### Bloqueo del hematoma (radio distal)

1. **Antisepsia** dorsal sobre el foco de fractura (palpable o según la radiografía).
2. Puncionar hasta el foco y **aspirar sangre** (confirma la posición en el hematoma).
3. **Inyectar** la lidocaína lentamente.
4. Esperar **5–10 minutos** y reducir.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="bloqueos">
<span class="gen-titulo">La indicación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: sutura de herida en dedo índice derecho"></label><datalist id="dl-indicacion"><option value="sutura de herida en un dedo"><option value="drenaje de paroniquia"><option value="reducción de fractura de radio distal (bloqueo del hematoma)"><option value="procedimiento en la palma"></datalist>
<span class="gen-titulo">El bloqueo</span>
<label class="calc-campo">Bloqueo <input type="text" name="tipo" list="dl-tipo" data-marca="tipo de bloqueo" placeholder="ej.: bloqueo digital en anillo en la base del dedo"></label><datalist id="dl-tipo"><option value="bloqueo digital en anillo en la base del dedo"><option value="bloqueo digital transtecal"><option value="bloqueo del hematoma de fractura"><option value="bloqueo del nervio mediano en la muñeca"><option value="bloqueo del nervio cubital en la muñeca"></datalist>
<label class="calc-campo">Fármaco <input type="text" name="farmaco" list="dl-farmaco" data-marca="fármaco" placeholder="ej.: lidocaína al 1 %, 4 mL"></label><datalist id="dl-farmaco"><option value="lidocaína al 1 % con epinefrina"><option value="lidocaína al 2 %, 10 mL (hematoma)"></datalist>
<label class="calc-campo">Efecto <input type="text" name="efecto" list="dl-efecto" data-marca="efecto" placeholder="ej.: anestesia completa a los 5 minutos"></label><datalist id="dl-efecto"><option value="anestesia completa a los 5 minutos"></datalist>
<label class="calc-campo">Al término <input type="text" name="final" list="dl-final" data-recordar placeholder="ej.: sin complicaciones; perfusión distal conservada"></label><datalist id="dl-final"><option value="sin complicaciones; perfusión distal conservada"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza {tipo} para {indicacion}, previa antisepsia, con {farmaco}, aspirando antes de inyectar.", "{efecto}.", "?Procedimiento {final}."], "indicaciones": [{"id": "proteger", "texto": "Proteger la zona anestesiada (no exponer al calor ni a golpes) hasta que pase el efecto."}, {"id": "aviso", "texto": "Consultar si el adormecimiento dura más de 24 horas o el dedo se pone pálido o frío."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza bloqueo digital en anillo en la base del dedo para sutura de herida en dedo índice derecho, previa antisepsia, con lidocaína al 1 %, 4 mL, aspirando antes de inyectar. Anestesia completa a los 5 minutos. Procedimiento sin complicaciones; perfusión distal conservada.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Toxicidad sistémica** (parestesias periorales, tinnitus, convulsiones, arritmias) | Suspender, ABC, benzodiazepina para las convulsiones, **emulsión lipídica al 20 %** |
| **Inyección intravascular** | Aspirar antes de inyectar |
| **Lesión nerviosa** (parestesia al inyectar) | Retirar unos milímetros |
| **Isquemia digital** (rara) | Revisar la perfusión; fentolamina según el especialista si se usó epinefrina |
| Infección | Antisepsia |

!!! alarma "Errores frecuentes"
    - No **calcular la dosis máxima** antes (sobre todo en niños y adultos pequeños).
    - **No aspirar** antes de inyectar.
    - Inyectar **volúmenes grandes** en la base del dedo (efecto torniquete).
    - Hacer un bloqueo sin **examen neurológico** previo documentado.

!!! perla "Para el internado"
    Antes de cualquier bloqueo, haz la cuenta: **mg/kg × peso = mg máximos**, y divide por los mg/mL de tu ampolla. Escríbelo en la descripción.

## Preguntas de repaso

??? repaso "1. Adulto de 60 kg. ¿Cuántos mL de lidocaína al 1 % sin epinefrina puedes usar como máximo?"
    **4,5 mg/kg × 60 = 270 mg**; la lidocaína al 1 % tiene 10 mg/mL → **27 mL**.

??? repaso "2. ¿Se puede usar lidocaína con epinefrina en un bloqueo digital?"
    **Sí**, si no hay compromiso vascular: la evidencia muestra que es **segura** (Ilicki 2015).

??? repaso "3. ¿Qué ventaja y qué desventaja tiene el bloqueo del hematoma en la fractura de radio distal?"
    Es **rápido y fácil**; la anestesia regional EV (Bier) dio **mejor analgesia** y reducciones más fáciles en los ensayos (Cochrane 2002).

??? repaso "4. Durante un bloqueo, el paciente refiere sabor metálico, hormigueo peribucal y luego convulsiona. ¿Qué pasó y qué haces?"
    **Toxicidad sistémica por anestésico local**: suspender, ABC, **benzodiazepina**, y **emulsión lipídica al 20 %**.

??? repaso "5. ¿Dónde inyectas para bloquear el nervio mediano en la muñeca?"
    **Entre los tendones del palmar largo y del flexor radial del carpo**, a nivel del pliegue proximal de la muñeca.

## Referencias

1. Ilicki J. Safety of Epinephrine in Digital Nerve Blocks: A Literature Review. *J Emerg Med.* 2015;49(5):799–809. doi:[10.1016/j.jemermed.2015.05.038](https://doi.org/10.1016/j.jemermed.2015.05.038)
2. Handoll HH, Madhok R, Dodds C. Anaesthesia for treating distal radial fracture in adults. *Cochrane Database Syst Rev.* 2002;(3):CD003320. doi:[10.1002/14651858.CD003320](https://doi.org/10.1002/14651858.CD003320)
