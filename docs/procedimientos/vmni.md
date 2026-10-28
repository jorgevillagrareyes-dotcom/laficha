# Ventilación mecánica no invasiva

<div class="ficha" markdown>

**Procedimiento**
Inicio y ajuste de la ventilación con presión positiva por mascarilla (BiPAP o CPAP) sin intubar

**Fuentes principales**
ERS/ATS 2017: ventilación no invasiva en la insuficiencia respiratoria aguda · BTS/ICS 2016: manejo ventilatorio de la insuficiencia respiratoria hipercápnica aguda · ATS 2026: soporte respiratorio no invasivo

**Otras fuentes**
Ver [insuficiencia respiratoria aguda](../respiratorio/insuficiencia-respiratoria-aguda.md), [EPOC](../respiratorio/epoc.md), [insuficiencia cardíaca](../cardiologia/insuficiencia-cardiaca.md), [oxigenoterapia](../indicaciones/oxigeno.md) e [intubación orotraqueal](intubacion-orotraqueal.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Indicaciones fuertes**: **EPOC** con **acidosis respiratoria** (pH < 7,35 con PaCO₂ alta) y **edema pulmonar cardiogénico** (CPAP o BiPAP). En la EPOC **reduce la intubación y la mortalidad** (ERS/ATS 2017).
    - **Hipoxémica sin hipercapnia** (neumonía): la **cánula nasal de alto flujo** es la primera opción; la VMNI es una alternativa condicional (ATS 2026).
    - **Programación inicial en la EPOC**: **IPAP 10–12**, subir de a 2–5 cmH₂O hasta **~ 20** según tolerancia; **EPAP 4–5**; oxígeno para **SatO₂ 88–92 %**.
    - **Edema pulmonar**: **CPAP 5–10 cmH₂O**.
    - **Reevaluar a la 1–2 horas** con gases: si el pH no mejora o el paciente empeora, **intubar** (o techo terapéutico definido).
    - **Contraindicaciones**: paro, compromiso de conciencia que impide proteger la vía aérea (salvo la narcosis por CO₂), vómitos, inestabilidad grave, trauma facial, obstrucción de la vía aérea alta.

!!! guia "¿Qué respalda esta página?"
    Las indicaciones vienen de guías basadas en **ensayos aleatorizados y metaanálisis**: **ERS/ATS 2017**, **BTS/ICS 2016** y **ATS 2026**. Los parámetros iniciales y la forma de subirlos son los mismos del resumen de [insuficiencia respiratoria aguda](../respiratorio/insuficiencia-respiratoria-aguda.md); el ajuste fino depende del ventilador y es **práctica habitual**. **Manda el protocolo de tu servicio.**

## Cuándo iniciarla y cuándo no

| Situación | Conducta | Por qué |
|---|---|---|
| **EPOC** con **pH < 7,35** y PaCO₂ alta pese al tratamiento médico | **BiPAP** (recomendación fuerte) | Menos intubación y muerte |
| **Edema pulmonar cardiogénico** | **CPAP** o BiPAP | Mejora la oxigenación y reduce la intubación |
| Insuficiencia respiratoria **hipoxémica** (neumonía) | **CNAF** primero; VMNI como alternativa | Con monitoreo estrecho y sin retrasar la intubación |
| **Preoxigenación** para intubar | VMNI | Menos hipoxemia durante la intubación (PREOXI) |
| Posextubación de **alto riesgo** | VMNI preventiva | Menos reintubación |
| **Asma** grave | No de rutina | Evidencia insuficiente; no retrasar la intubación |
| Paro, **vómitos**, no protege la vía aérea, inestabilidad grave, **neumotórax no drenado**, trauma facial | **No** | |

## Antes de empezar

### Qué preparar

- **Ventilador** (de VMNI o de UCI en modo no invasivo) con oxígeno.
- **Mascarilla oronasal** del tamaño correcto (la nasal tiene más fugas en la urgencia).
- **Apósito** para el puente nasal.
- **Monitor**, oxímetro, **gases** basales.
- **Plan escrito** si falla: ¿intubación o techo terapéutico?

## Paso a paso

1. **Explicar** al paciente qué va a sentir; cabecera a **30–45°**.
2. **Programar** antes de poner la mascarilla: BiPAP con IPAP 10–12 y EPAP 4–5 (EPOC) o CPAP 5–10 (edema).
3. **Poner la mascarilla con la mano** primero, sin fijar, para que se acostumbre; luego **ajustar el arnés** (que pasen dos dedos bajo las correas).
4. **Subir la IPAP** de a 2–5 cmH₂O cada pocos minutos hasta lograr un buen volumen corriente, menos uso de músculos accesorios y frecuencia respiratoria en descenso (meta ~ 20 cmH₂O en la EPOC).
5. **Titular el oxígeno**: 88–92 % en la EPOC; 92–96 % en los demás.
6. **Revisar las fugas** y la **sincronía** con el ventilador.
7. **Reevaluar a la 1–2 horas** con clínica y **gases**.
8. Si **mejora**: mantener (en la EPOC, habitualmente la mayor parte del día al inicio) y retirar de forma progresiva. Si **no mejora**: intubar o aplicar el techo terapéutico.

### Signos de falla

| A la 1–2 horas | Qué significa |
|---|---|
| pH igual o peor, PaCO₂ que sube | La VMNI no está funcionando |
| Frecuencia respiratoria que no baja, uso de músculos accesorios | Fatiga |
| Compromiso de conciencia progresivo | Riesgo de aspiración |
| Mala tolerancia, fugas incontrolables | Cambiar interfaz o pensar en intubar |

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="vmni">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: EPOC exacerbado con acidosis respiratoria (pH 7,28, PaCO₂ 68 mmHg) pese a tratamiento médico"></label><datalist id="dl-indicacion"><option value="EPOC exacerbado con acidosis respiratoria"><option value="edema pulmonar agudo cardiogénico"><option value="preoxigenación para intubación"></datalist>
<span class="gen-titulo">La programación</span>
<label class="calc-campo">Modo <input type="text" name="modo" list="dl-modo" data-marca="modo" placeholder="ej.: BiPAP (S/T)"></label><datalist id="dl-modo"><option value="BiPAP (S/T)"><option value="CPAP"></datalist>
<label class="calc-campo">Interfaz <input type="text" name="interfaz" list="dl-interfaz" data-marca="interfaz" placeholder="ej.: mascarilla oronasal"></label><datalist id="dl-interfaz"><option value="mascarilla oronasal"><option value="mascarilla facial total"><option value="casco"></datalist>
<label class="calc-campo">IPAP <input type="text" name="ipap" list="dl-ipap" data-marca="IPAP" placeholder="ej.: 12 cmH₂O, con meta de subir a 18–20 según tolerancia"></label><datalist id="dl-ipap"><option value="12 cmH₂O"><option value="15 cmH₂O"></datalist>
<label class="calc-campo">EPAP o CPAP <input type="text" name="epap" list="dl-epap" data-marca="EPAP" placeholder="ej.: 5 cmH₂O"></label><datalist id="dl-epap"><option value="5 cmH₂O"><option value="8 cmH₂O"><option value="10 cmH₂O"></datalist>
<label class="calc-campo">FiO₂ / oxígeno <input type="text" name="fio2" list="dl-fio2" data-marca="FiO₂" placeholder="ej.: FiO₂ para SatO₂ 88–92 %"></label><datalist id="dl-fio2"><option value="FiO₂ para SatO₂ 88–92 %"><option value="FiO₂ para SatO₂ 92–96 %"></datalist>
<label class="calc-campo">Control <input type="text" name="control" list="dl-control" data-marca="control" data-recordar placeholder="ej.: gases arteriales en 1 hora"></label><datalist id="dl-control"><option value="gases arteriales en 1 hora"><option value="gases arteriales en 1–2 horas"></datalist>
<label class="calc-campo">Tolerancia <input type="text" name="tolerancia" placeholder="ej.: buena tolerancia, sin fugas importantes"></label>
<script type="application/json" class="gen-def">{"frases": ["Se inicia ventilación mecánica no invasiva por {indicacion}.", "Modo {modo} con {interfaz}: IPAP {ipap}, EPAP {epap}, {fio2}.", "?Paciente con {tolerancia}.", "Se solicitan {control} y reevaluación clínica."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo continuo de SatO₂, frecuencia respiratoria, frecuencia cardíaca y nivel de conciencia."}, {"id": "gases", "texto": "Gases arteriales a la hora o las 2 horas de iniciada; avisar si el pH no mejora."}, {"id": "cabecera", "texto": "Cabecera a 30–45°; régimen cero mientras requiera VMNI continua."}, {"id": "piel", "texto": "Proteger el puente nasal (apósito) y revisar la piel bajo la mascarilla."}, {"id": "aviso", "texto": "Avisar si aumenta la disnea, baja la conciencia, vomita o no tolera la mascarilla."}, {"id": "plan", "texto": "Definido el plan si falla la VMNI: intubación o techo terapéutico."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se inicia ventilación mecánica no invasiva por EPOC exacerbado con acidosis respiratoria (pH 7,28, PaCO₂ 68 mmHg) pese a tratamiento médico. Modo BiPAP (S/T) con mascarilla oronasal: IPAP 12 cmH₂O, con meta de subir a 18–20 según tolerancia, EPAP 5 cmH₂O, FiO₂ para SatO₂ 88–92 %. Paciente con buena tolerancia, sin fugas importantes. Se solicitan gases arteriales en 1 hora y reevaluación clínica.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Úlcera** del puente nasal | Apósito protector, otra interfaz, pausas |
| **Distensión gástrica**, vómito | Bajar la IPAP; sonda nasogástrica si es necesario |
| **Aspiración** | No usarla si el paciente no protege la vía aérea o vomita |
| **Hipotensión** (menos retorno venoso) | Bajar presiones; volemia |
| **Neumotórax** | Drenaje; reconsiderar |
| **Sequedad**, conjuntivitis por fuga | Humidificación; ajustar la mascarilla |
| **Retrasar la intubación** necesaria | Reevaluar a la 1–2 horas y tener un plan |

!!! alarma "Errores frecuentes"
    - **Dejar la IPAP baja** (8–10) por horas en un paciente con PaCO₂ alta.
    - Dar oxígeno para saturar **100 %** en la EPOC.
    - **No controlar gases** a la 1–2 horas.
    - Usar VMNI en un paciente que **vomita** o que no protege la vía aérea.
    - No dejar escrito qué hacer **si falla**.

!!! perla "Para el internado"
    La VMNI funciona mejor cuando el paciente **confía** en ella: explicar, poner la mascarilla con la mano antes de ajustarla y quedarse unos minutos al lado. La diferencia entre fracaso y éxito muchas veces está en los primeros 15 minutos.

## Preguntas de repaso

??? repaso "1. EPOC exacerbado con pH 7,29 y PaCO₂ 70 mmHg tras broncodilatadores, corticoide y oxígeno titulado. ¿Qué indicas?"
    **VMNI (BiPAP)**: IPAP 10–12 subiendo hasta ~ 20, EPAP 4–5, oxígeno para **SatO₂ 88–92 %**, y **gases a la 1–2 horas**.

??? repaso "2. Edema pulmonar agudo con SatO₂ 85 % pese a oxígeno con mascarilla. ¿Qué modo usas?"
    **CPAP 5–10 cmH₂O** (o BiPAP), junto con nitratos y diurético.

??? repaso "3. A las 2 horas de VMNI el pH bajó de 7,29 a 7,24 y el paciente está más somnoliento. ¿Qué haces?"
    **Falla de la VMNI**: **intubar** (salvo que exista un techo terapéutico acordado).

??? repaso "4. Neumonía grave con insuficiencia respiratoria hipoxémica sin hipercapnia. ¿VMNI o alto flujo?"
    **Cánula nasal de alto flujo** primero (recomendación fuerte, ATS 2026); la VMNI es una alternativa condicional, con monitoreo estrecho para no retrasar la intubación.

??? repaso "5. Nombra cuatro contraindicaciones de la VMNI."
    **Paro** cardiorrespiratorio, **vómitos** o incapacidad de proteger la vía aérea, **inestabilidad** hemodinámica grave, **trauma facial** u obstrucción de la vía aérea alta (y neumotórax no drenado).

## Referencias

1. Rochwerg B, Brochard L, Elliott MW, et al. Official ERS/ATS clinical practice guidelines: noninvasive ventilation for acute respiratory failure. *Eur Respir J.* 2017;50:1602426. doi:[10.1183/13993003.02426-2016](https://doi.org/10.1183/13993003.02426-2016)
2. Davidson AC, Banham S, Elliott M, et al. BTS/ICS guideline for the ventilatory management of acute hypercapnic respiratory failure in adults. *Thorax.* 2016;71(Suppl 2):ii1–ii35. doi:[10.1136/thoraxjnl-2015-208209](https://doi.org/10.1136/thoraxjnl-2015-208209)
3. Goel NN, Ferreyro BL, Pitre T, et al. Noninvasive respiratory support for adult patients with acute respiratory failure: an official American Thoracic Society Clinical Practice Guideline. *Am J Respir Crit Care Med.* 2026;212(9):2135–2158. doi:[10.1093/ajrccm/aamag302](https://doi.org/10.1093/ajrccm/aamag302)
4. Gibbs KW, Semler MW, Driver BE, et al. Noninvasive Ventilation for Preoxygenation during Emergency Intubation. *N Engl J Med.* 2024;390(23):2165–2177. doi:[10.1056/NEJMoa2313680](https://doi.org/10.1056/NEJMoa2313680)
