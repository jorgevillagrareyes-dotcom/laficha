# Ventilación con bolsa-mascarilla

<div class="ficha" markdown>

**Procedimiento**
Ventilación manual con bolsa autoinflable, mascarilla facial y oxígeno, con o sin cánulas oro- o nasofaríngeas

**Fuentes principales**
AHA 2025: soporte vital básico y avanzado del adulto · DAS 2025: manejo de la intubación difícil no anticipada (plan C: ventilación con mascarilla)

**Otras fuentes**
Ver [paro cardiorrespiratorio y arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md), [intubación orotraqueal](intubacion-orotraqueal.md) y [dispositivos supraglóticos](supragloticos.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **La destreza más importante de la vía aérea**: un paciente bien ventilado con mascarilla no muere de hipoxia mientras se prepara lo demás.
    - **Paro sin vía aérea avanzada**: **30 compresiones : 2 ventilaciones**. Con **vía aérea avanzada**: **1 ventilación cada 6 segundos** (10 por minuto) sin pausar el masaje (AHA 2025).
    - **Cada ventilación** dura **1 segundo** y basta con que **el tórax se eleve**: más volumen o más frecuencia **distienden el estómago** y bajan el retorno venoso.
    - **Abrir la vía aérea**: inclinación de la cabeza y elevación del mentón, o **tracción mandibular** si se sospecha lesión cervical.
    - **Si cuesta**: **dos personas** (una sella con ambas manos, la otra aprieta la bolsa), **cánula orofaríngea** o nasofaríngea, y reposicionar.
    - **Oxígeno a 15 L/min** con **reservorio** inflado.

!!! guia "¿Qué respalda esta página?"
    La frecuencia y la relación compresiones-ventilaciones vienen de las **guías AHA 2025**. La ventilación con mascarilla como plan de rescate y el uso de la técnica a dos personas están en la **guía DAS 2025**. Los predictores de ventilación difícil y la técnica fina son **práctica habitual y opinión de expertos**. **Manda el protocolo de tu servicio.**

## Cuándo ventilar con bolsa-mascarilla

| Situación | Conducta | Por qué |
|---|---|---|
| **Paro** cardiorrespiratorio | **30:2** hasta tener vía aérea avanzada | Oxigenar sin interrumpir mucho el masaje |
| **Apnea** o hipoventilación (opioides, benzodiazepinas, posictal) | **Ventilar** mientras se trata la causa | Muchas veces basta con esto y naloxona |
| **Preoxigenación** antes de intubar | Mascarilla bien sellada, oxígeno alto | Aumenta la reserva de oxígeno (ver [intubación](intubacion-orotraqueal.md)) |
| **Falla de intubación** | **Plan C** de DAS 2025 si el supraglótico también falla | Oxigenar es la prioridad, no intubar |

### Predictores de ventilación difícil

| Predictor | Qué hacer |
|---|---|
| **Barba**, sin dientes | Dejar las prótesis dentales puestas para ventilar; gel o apósito sobre la barba |
| **Obesidad**, apnea del sueño | Rampa (oreja a la altura del esternón), dos personas |
| **Edad avanzada**, rigidez cervical | Cánula oro- o nasofaríngea |
| **Trauma facial** | Pensar temprano en supraglótico o vía quirúrgica |

## Antes de empezar

### Qué preparar

- **Bolsa autoinflable** con **reservorio** y válvula; conectada a **oxígeno a 15 L/min**.
- **Mascarilla** del tamaño correcto (cubre desde el puente nasal hasta bajo el labio inferior, sin tapar los ojos).
- **Cánulas**: orofaríngea (medir desde la comisura labial al ángulo de la mandíbula) y nasofaríngea (desde la nariz al trago; no usar si hay sospecha de fractura de base de cráneo).
- **Aspiración** funcionando.
- **Válvula de PEEP** si está disponible.

## Paso a paso

1. **Posición**: alinear oreja y esternón (almohada bajo la cabeza; rampa en el obeso). Sin sospecha cervical: inclinar la cabeza y elevar el mentón.
2. **Aspirar** secreciones y retirar cuerpos extraños visibles.
3. **Cánula orofaríngea** si el paciente está inconsciente y sin reflejo nauseoso; si no, nasofaríngea.
4. **Sellar** la mascarilla con la técnica **C-E** (pulgar e índice en "C" sobre la mascarilla, los otros tres dedos en "E" levantando la mandíbula hacia la mascarilla). Mejor: **dos manos** y un segundo operador para la bolsa.
5. **Ventilar** en **1 segundo**, lo justo para ver **subir el tórax**.
6. **Frecuencia** según la situación: 30:2 en el paro sin vía aérea avanzada; 1 cada 6 segundos con vía aérea avanzada o en paro respiratorio con pulso.
7. **Comprobar**: expansión torácica, saturación y, si hay, **capnografía**.
8. Si no entra aire: **reposicionar**, revisar el sello, cánula, dos personas. Si sigue sin ventilar: **supraglótico**.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="bolsa-mascarilla">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: apnea por intoxicación con opioides"></label><datalist id="dl-indicacion"><option value="paro cardiorrespiratorio"><option value="apnea"><option value="hipoventilación con compromiso de conciencia"><option value="preoxigenación previa a la intubación"></datalist>
<span class="gen-titulo">La ventilación</span>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: técnica a dos personas con cánula orofaríngea"></label><datalist id="dl-tecnica"><option value="técnica a dos personas con cánula orofaríngea"><option value="técnica a una persona (C-E)"><option value="técnica a dos personas con cánula nasofaríngea"></datalist>
<label class="calc-campo">Oxígeno <input type="text" name="oxigeno" list="dl-oxigeno" data-marca="oxígeno" data-recordar placeholder="ej.: bolsa con reservorio a 15 L/min"></label><datalist id="dl-oxigeno"><option value="bolsa con reservorio a 15 L/min"></datalist>
<label class="calc-campo">Frecuencia <input type="text" name="frecuencia" list="dl-frecuencia" data-marca="frecuencia" placeholder="ej.: 1 ventilación cada 6 segundos"></label><datalist id="dl-frecuencia"><option value="30 compresiones : 2 ventilaciones"><option value="1 ventilación cada 6 segundos"></datalist>
<label class="calc-campo">Respuesta <input type="text" name="respuesta" list="dl-respuesta" data-marca="respuesta" placeholder="ej.: expansión torácica visible y SatO₂ que sube a 94 %"></label><datalist id="dl-respuesta"><option value="expansión torácica visible"><option value="expansión torácica visible y SatO₂ en aumento"></datalist>
<label class="calc-campo">Evolución <input type="text" name="final" placeholder="ej.: recupera ventilación espontánea tras naloxona"></label>
<script type="application/json" class="gen-def">{"frases": ["Se inicia ventilación con bolsa-mascarilla por {indicacion}.", "Se ventila con {tecnica} y {oxigeno}, a {frecuencia}, con {respuesta}.", "?Evolución: {final}."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo continuo de SatO₂, frecuencia cardíaca y, si está disponible, capnografía."}, {"id": "vaciado", "texto": "Si hay distensión gástrica, instalar sonda nasogástrica una vez asegurada la vía aérea."}, {"id": "plan", "texto": "Reevaluar la necesidad de una vía aérea definitiva."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se inicia ventilación con bolsa-mascarilla por apnea por intoxicación con opioides. Se ventila con técnica a dos personas con cánula orofaríngea y bolsa con reservorio a 15 L/min, a 1 ventilación cada 6 segundos, con expansión torácica visible y SatO₂ que sube a 94 %. Evolución: recupera ventilación espontánea tras naloxona.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Distensión gástrica**, vómito y aspiración | Ventilar con menos volumen y más lento; aspirar; vía aérea avanzada y sonda nasogástrica |
| **Hiperventilación** | Contar: 1 cada 6 segundos; menos retorno venoso y peor perfusión en el paro |
| **Mal sello** (fuga) | Dos manos, otra mascarilla, prótesis dentales puestas |
| **Laringoespasmo** o náuseas con la cánula orofaríngea | Retirar y usar una nasofaríngea |
| **Epistaxis** con la cánula nasofaríngea | Lubricar, ir por el piso nasal, sin forzar |

!!! alarma "Errores frecuentes"
    - **Ventilar rápido y con mucho volumen** por la adrenalina del momento.
    - Olvidar **conectar el oxígeno** o inflar el reservorio.
    - Insistir en intubar a un paciente que **se puede ventilar bien** con mascarilla, mientras desatura.
    - No usar cánulas ni pedir ayuda cuando la ventilación es difícil.

!!! perla "Para el internado"
    Practica la **técnica a dos manos** en cada oportunidad (pabellón, simulación). En una urgencia real, ofrecer "yo sello la mascarilla, tú aprietas la bolsa" es una de las ayudas más útiles que puede dar un interno.

## Preguntas de repaso

??? repaso "1. Paro cardiorrespiratorio sin vía aérea avanzada. ¿Cuál es la relación compresiones-ventilaciones?"
    **30:2**. Con vía aérea avanzada: **1 ventilación cada 6 segundos** sin pausar las compresiones (AHA 2025).

??? repaso "2. Ventilas con bolsa-mascarilla y el abdomen se distiende cada vez más. ¿Qué estás haciendo mal y qué haces?"
    Volumen o frecuencia excesivos (o vía aérea parcialmente obstruida). Ventilar **solo hasta ver subir el tórax**, en **1 segundo**, reposicionar y usar cánula; luego vía aérea avanzada y sonda nasogástrica.

??? repaso "3. Paciente obeso, edéntulo y con barba en apnea. No logras ventilarlo solo. ¿Qué haces?"
    **Técnica a dos personas**, **rampa**, **cánula orofaríngea** y, si se pueden, poner las **prótesis dentales**. Si aun así no se ventila: **supraglótico**.

??? repaso "4. ¿Cómo eliges el tamaño de la cánula orofaríngea y cuándo no la usas?"
    Desde la **comisura labial** al **ángulo de la mandíbula**. No usarla en el paciente con **reflejo nauseoso** (provoca vómito y laringoespasmo): usar una **nasofaríngea**.

??? repaso "5. Paciente con TEC y sospecha de lesión cervical en apnea. ¿Cómo abres la vía aérea?"
    **Tracción mandibular** sin extender el cuello, con restricción del movimiento de la columna.

## Referencias

1. Kleinman ME, Buick JE, Huber N, et al. Part 7: Adult Basic Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S448–S478. doi:[10.1161/CIR.0000000000001369](https://doi.org/10.1161/CIR.0000000000001369)
2. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
3. Ahmad I, El-Boghdadly K, Iliff H, et al. Difficult Airway Society 2025 guidelines for management of unanticipated difficult tracheal intubation in adults. *Br J Anaesth.* 2026;136(1):283–307. doi:[10.1016/j.bja.2025.10.006](https://doi.org/10.1016/j.bja.2025.10.006)
