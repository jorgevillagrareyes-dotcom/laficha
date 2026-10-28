# Lavado gástrico y carbón activado

<div class="ficha" markdown>

**Procedimiento**
Descontaminación digestiva en las intoxicaciones por ingesta: cuándo dar carbón activado y por qué casi nunca hacer un lavado gástrico

**Fuentes principales**
AACT/EAPCCT 2005: carbón activado en dosis única · AACT/EAPCCT 2013: lavado gástrico

**Otras fuentes**
Ver [intoxicación por sustancias psicoactivas](../psiquiatria/intoxicacion-por-sustancias-psicoactivas.md), [intoxicaciones en el niño](../pediatria/intoxicaciones-brue-muerte-subita-del-lactante-y-prevencion-de-accidentes.md), [esofagitis cáustica](../cirugia/esofago-y-estomago/esofagitis-caustica.md) y la ficha del [carbón activado](../farmacos.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Lo primero es el ABC**, la glicemia, los antídotos y llamar al **centro toxicológico**; la descontaminación es secundaria.
    - **Carbón activado**: **no de rutina**. Considerarlo si la ingesta es **potencialmente tóxica**, de un tóxico que **se adsorbe**, **hace menos de 1 hora**, y la **vía aérea está protegida** (AACT/EAPCCT 2005).
    - **Dosis**: **1 g/kg** (máximo **50 g**) por boca o por sonda.
    - **No sirve** para alcoholes, **litio**, **hierro**, metales, **cáusticos** e hidrocarburos.
    - **Lavado gástrico**: **no se recomienda de rutina, si es que alguna vez** (AACT/EAPCCT 2013); tiene complicaciones graves (aspiración, perforación, laringoespasmo).
    - **Nunca** inducir el vómito.

!!! guia "¿Qué respalda esta página?"
    Las **declaraciones de posición de la AACT y la EAPCCT** (carbón activado 2005, lavado gástrico 2013) son la referencia. Se basan en **estudios en voluntarios** y series: **no hay ensayos** que muestren que el carbón activado mejore los resultados clínicos. En Chile, el **CITUC** orienta cada caso. **Manda el protocolo de tu servicio.**

## Cuándo dar carbón activado

| Situación | Conducta | Por qué |
|---|---|---|
| Ingesta tóxica **< 1 hora**, tóxico adsorbible, vía aérea protegida | **Considerar** carbón activado | La reducción de la absorción cae con el tiempo |
| Ingesta **> 1 hora** | En general **no** (salvo liberación prolongada o vaciamiento lento, según el CITUC) | Beneficio incierto |
| **Compromiso de conciencia** sin intubación | **No** | Aspiración |
| **Cáusticos**, hidrocarburos | **No** | No adsorbe y dificulta la endoscopía; neumonitis |
| **Alcohol**, litio, hierro, metales | **No** | No se adsorben |
| Obstrucción o perforación intestinal | **No** | |

### Cuánto disminuye la absorción (estudios en voluntarios, ≥ 50 g)

| Tiempo tras la ingesta | Reducción media |
|---|---|
| 30 minutos | **47 %** |
| 60 minutos | **40 %** |
| 120 minutos | **17 %** |
| 180 minutos | **21 %** |

*Datos de AACT/EAPCCT 2005.*

## El lavado gástrico

- **No se recomienda de rutina** en ningún envenenamiento (AACT/EAPCCT 2013).
- La evidencia de beneficio incluso en casos especiales es **débil**.
- Si un toxicólogo lo indicara en un caso excepcional: solo con **vía aérea protegida** y por personal entrenado.

## Paso a paso (carbón activado)

1. **ABC**, glicemia, ECG, antídotos; llamar al **CITUC** (en Chile, +56 2 2635 3800).
2. **Confirmar** la hora de la ingesta, el tóxico y la dosis.
3. **Comprobar** que el paciente **protege la vía aérea** (o está intubado).
4. **Preparar** el carbón (1 g/kg, máximo 50 g) en agua; dar **por boca** o por **sonda nasogástrica** con la posición confirmada.
5. **Cabecera elevada**; vigilar vómitos.
6. Observar y tratar según el tóxico.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="carbon">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Ingesta <input type="text" name="indicacion" data-marca="ingesta" placeholder="ej.: ingesta de 20 comprimidos de carbamazepina 200 mg hace 40 minutos"></label>
<label class="calc-campo">Vía aérea <input type="text" name="via" list="dl-via" data-marca="vía aérea" placeholder="ej.: paciente vigil, Glasgow 15, protege la vía aérea"></label><datalist id="dl-via"><option value="paciente vigil, Glasgow 15, protege la vía aérea"><option value="intubado, vía aérea protegida"></datalist>
<span class="gen-titulo">La descontaminación</span>
<label class="calc-campo">Carbón activado <input type="text" name="dosis" list="dl-dosis" data-marca="dosis" placeholder="ej.: 50 g en 250 mL de agua por vía oral"></label><datalist id="dl-dosis"><option value="1 g/kg (máximo 50 g) por vía oral"><option value="50 g en 250 mL de agua por vía oral"><option value="50 g por sonda nasogástrica"></datalist>
<label class="calc-campo">Tolerancia <input type="text" name="tolerancia" list="dl-tolerancia" placeholder="ej.: sin vómitos"></label><datalist id="dl-tolerancia"><option value="sin vómitos"><option value="vómito una vez"></datalist>
<label class="calc-campo">Plan <input type="text" name="plan" placeholder="ej.: observación con monitoreo y control de niveles plasmáticos"></label>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}; {via}.", "Se administra carbón activado {dosis}.", "?Tolerancia: {tolerancia}.", "?Plan: {plan}."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo de signos vitales y nivel de conciencia; avisar si baja el Glasgow (riesgo de aspiración)."}, {"id": "cito", "texto": "Contactar al Centro de Información Toxicológica (CITUC) para orientación."}, {"id": "psiq", "texto": "Evaluación por psiquiatría antes del alta si la ingesta fue intencional."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con ingesta de 20 comprimidos de carbamazepina 200 mg hace 40 minutos; paciente vigil, Glasgow 15, protege la vía aérea. Se administra carbón activado 50 g en 250 mL de agua por vía oral. Tolerancia: sin vómitos. Plan: observación con monitoreo y control de niveles plasmáticos.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Aspiración** de carbón (neumonitis) | Prevenir: vía aérea protegida, cabecera elevada |
| **Vómitos** | Antiemético; no repetir a la fuerza |
| **Constipación**, obstrucción (dosis múltiples) | Vigilar |
| Lavado gástrico: **aspiración**, laringoespasmo, perforación esofágica, hipoxia | Evitar el lavado |

!!! alarma "Errores frecuentes"
    - Dar carbón a un paciente **somnoliento** sin vía aérea protegida.
    - Hacer un **lavado gástrico** "por si acaso".
    - Dar carbón en una ingesta de **cáusticos**, **litio** o **alcohol**.
    - Demorar el **ABC** o el antídoto por la descontaminación.

!!! perla "Para el internado"
    La pregunta clave no es "¿doy carbón?", sino "**¿cuánto, de qué, hace cuánto y protege la vía aérea?**". Y llama al CITUC: orientan gratis y en minutos.

## Preguntas de repaso

??? repaso "1. Ingesta de 30 comprimidos de paracetamol hace 45 minutos, paciente vigil. ¿Carbón activado?"
    **Considerarlo** (< 1 hora, adsorbible, vía aérea protegida): **1 g/kg, máximo 50 g**. Además, nivel de paracetamol a las 4 horas y N-acetilcisteína según el nomograma.

??? repaso "2. Paciente con Glasgow 9 tras ingesta de benzodiazepinas y antidepresivos hace 30 minutos. ¿Carbón por boca?"
    **No** sin proteger la vía aérea (riesgo de **aspiración**). Prioridad: vía aérea, ECG (tricíclicos) y soporte.

??? repaso "3. ¿Se recomienda el lavado gástrico?"
    **No de rutina, si es que alguna vez** (AACT/EAPCCT 2013): no hay evidencia de beneficio y tiene complicaciones graves.

??? repaso "4. Ingesta de litio de liberación prolongada. ¿Sirve el carbón activado?"
    **No**: el litio no se adsorbe. Se usa la **irrigación intestinal** o la **hemodiálisis** según el caso y el CITUC.

??? repaso "5. ¿Cuánto reduce el carbón activado la absorción si se da a los 60 minutos?"
    En voluntarios, **~ 40 %** (47 % a los 30 minutos, 17 % a las 2 horas).

## Referencias

1. Chyka PA, Seger D, Krenzelok EP, Vale JA. Position paper: Single-dose activated charcoal. *Clin Toxicol (Phila).* 2005;43(2):61–87. doi:[10.1081/clt-200051867](https://doi.org/10.1081/clt-200051867)
2. Benson BE, Hoppu K, Troutman WG, et al. Position paper update: gastric lavage for gastrointestinal decontamination. *Clin Toxicol (Phila).* 2013;51(3):140–146. doi:[10.3109/15563650.2013.770154](https://doi.org/10.3109/15563650.2013.770154)
