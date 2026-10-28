# Pericardiocentesis

<div class="ficha" markdown>

**Procedimiento**
Punción del pericardio, guiada por ecografía, para drenar un derrame que produce taponamiento o para su estudio

**Fuentes principales**
ESC 2025: miocarditis y pericarditis · Tsang 2002 (*Mayo Clin Proc*): 1.127 pericardiocentesis guiadas por ecocardiografía

**Otras fuentes**
Ver [pericarditis y taponamiento](../cardiologia/pericarditis-y-taponamiento.md), [urgencias oncológicas](../hematologia/urgencias-oncologicas.md), [síndrome aórtico agudo](../cardiologia/sindrome-aortico-agudo.md) y [ecografía en el punto de atención](pocus.md)

**Revisado**
Octubre 2026

</div>

!!! alarma "Procedimiento supervisado"
    Este procedimiento lo realiza habitualmente el residente o el especialista. El interno lo hace **solo con supervisión directa** y después de haberlo practicado en simulación.

!!! abstract "Resumen en 60 segundos"
    - **Indicaciones**: **taponamiento** con compromiso hemodinámico (urgente), derrame con **puntaje de triage ESC ≥ 6** (en horas) y derrame de causa no aclarada (diagnóstica).
    - **Excepciones** (van a **cirugía**, no a la punción): **disección aórtica tipo A**, **rotura de la pared libre** post-IAM y **hemopericardio traumático**.
    - **Guiada por ecografía**: éxito del **97 %**, complicaciones mayores en **1,2 %** (Tsang 2002, 1.127 procedimientos).
    - **Vía** según dónde el derrame esté más cerca de la piel: **subxifoidea** (dirigida al hombro izquierdo), apical o paraesternal.
    - **Mientras se prepara**: volumen EV, **sin diuréticos** ni vasodilatadores, **evitar la ventilación con presión positiva**.
    - **Dejar un catéter** y drenar de a poco (**< 500 mL** al inicio); retirarlo con **< 30 mL/día**.

!!! guia "¿Qué respalda esta página?"
    Las indicaciones, el puntaje de triage y las excepciones vienen de la **guía ESC 2025**. La seguridad de la punción guiada por ecocardiografía se apoya en **grandes series** (Tsang 2002); no hay ensayos aleatorizados. Los detalles de técnica coinciden con el resumen de [pericarditis y taponamiento](../cardiologia/pericarditis-y-taponamiento.md). **Manda el protocolo de tu servicio.**

## Cuándo hacerla

| Situación | Conducta |
|---|---|
| **Taponamiento** con shock o AESP | **Inmediata** (guiada por ecografía; a ciegas por vía subxifoidea en el paro) |
| Derrame con **puntaje ESC ≥ 6** | **Urgente**, en horas |
| Derrame con puntaje **< 6** | Diferir; tratar la causa y vigilar |
| **Disección tipo A**, rotura de pared libre, hemopericardio traumático | **Cirugía**; la punción solo como puente si el paro es inminente |
| Derrame **purulento**, **tabicado**, recurrente | **Drenaje quirúrgico** (ventana pericárdica) |

## Antes de empezar

- **Ecocardiograma**: tamaño y ubicación del derrame, distancia a la piel, sitio sin estructuras interpuestas.
- **Coagulación** y plaquetas (corregir si se puede, sin retrasar en la urgencia).
- **Monitoreo** ECG y de presión, vía venosa, carro de paro.
- **Set** de pericardiocentesis (aguja de 16–20 G, guía, dilatador, catéter pigtail), anestesia local, antiséptico, campo estéril.

## Paso a paso

1. **Posición**: semisentado a 30–45°.
2. **Ecografía**: elegir el sitio donde el derrame es más profundo y cercano a la piel (subxifoideo, apical o paraesternal).
3. **Antisepsia**, campo, **anestesia local**.
4. **Subxifoidea**: entrar entre el apéndice xifoides y el reborde costal izquierdo, a 30–45° de la piel, **dirigido al hombro izquierdo**, aspirando.
5. Al obtener líquido, **confirmar** la posición (suero agitado visible en el pericardio en la ecografía).
6. **Seldinger**: guía, dilatador, **catéter pigtail**.
7. **Drenar** de forma controlada (< 500 mL al inicio) y tomar **muestras**.
8. **Fijar** el catéter y conectarlo a un sistema cerrado.
9. **Ecocardiograma** de control.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="pericardiocentesis">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: taponamiento cardíaco por derrame neoplásico, con hipotensión y pulso paradójico"></label><datalist id="dl-indicacion"><option value="taponamiento cardíaco"><option value="derrame pericárdico grande con puntaje de triage ≥ 6"><option value="derrame pericárdico de causa no aclarada (diagnóstico)"></datalist>
<label class="calc-campo">Consentimiento <input type="text" name="consentimiento" list="dl-consentimiento" data-marca="consentimiento" data-recordar placeholder="ej.: consentimiento informado firmado"></label><datalist id="dl-consentimiento"><option value="consentimiento informado firmado"><option value="verbal, por urgencia vital"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Vía <input type="text" name="via" list="dl-via" data-marca="vía" placeholder="ej.: subxifoidea guiada por ecocardiografía"></label><datalist id="dl-via"><option value="subxifoidea guiada por ecocardiografía"><option value="apical guiada por ecocardiografía"><option value="paraesternal guiada por ecocardiografía"></datalist>
<label class="calc-campo">Anestesia <input type="text" name="anestesia" list="dl-anestesia" data-marca="anestesia" data-recordar placeholder="ej.: lidocaína al 1 %"></label><datalist id="dl-anestesia"><option value="lidocaína al 1 %"><option value="lidocaína al 2 %"></datalist>
<label class="calc-campo">Catéter <input type="text" name="cateter" list="dl-cateter" data-marca="catéter" placeholder="ej.: catéter pigtail 8 F por técnica de Seldinger"></label><datalist id="dl-cateter"><option value="catéter pigtail por técnica de Seldinger"></datalist>
<label class="calc-campo">Volumen y aspecto <input type="text" name="volumen" data-marca="volumen y aspecto" placeholder="ej.: 500 mL de líquido serohemático"></label>
<label class="calc-campo">Respuesta <input type="text" name="respuesta" data-marca="respuesta" placeholder="ej.: presión sube de 80/60 a 120/75, desaparece el pulso paradójico"></label>
<label class="calc-campo">Muestras <input type="text" name="muestras" list="dl-muestras" data-recordar placeholder="ej.: citología, citoquímico, Gram, cultivo, ADA y Xpert MTB/RIF"></label><datalist id="dl-muestras"><option value="citología, citoquímico, Gram, cultivo, ADA y Xpert MTB/RIF"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza pericardiocentesis por {indicacion}.", "?{consentimiento}.", "Vía {via}, previa antisepsia y anestesia local con {anestesia}; se instala {cateter}.", "Se drenan {volumen}.", "Respuesta: {respuesta}.", "?Se envía líquido a {muestras}."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo ECG y de presión continuo por 24 horas."}, {"id": "drenaje", "texto": "Drenaje del catéter cada 4–6 horas o a bolsa según indicación; registrar débito; retirar cuando drene < 30 mL/día."}, {"id": "eco", "texto": "Ecocardiograma de control en 24 horas."}, {"id": "aviso", "texto": "Avisar si hay hipotensión, dolor torácico, disnea o débito hemático."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza pericardiocentesis por taponamiento cardíaco por derrame neoplásico, con hipotensión y pulso paradójico. Consentimiento informado firmado. Vía subxifoidea guiada por ecocardiografía, previa antisepsia y anestesia local con lidocaína al 1 %; se instala catéter pigtail 8 F por técnica de Seldinger. Se drenan 500 mL de líquido serohemático. Respuesta: presión sube de 80/60 a 120/75, desaparece el pulso paradójico. Se envía líquido a citología, citoquímico, Gram, cultivo, ADA y Xpert MTB/RIF.

## Complicaciones

Ocurren en el **4–10 %**; las **mayores** en ~ **1 %** con guía ecográfica.

| Complicación | Qué hacer |
|---|---|
| **Punción del ventrículo** o de una coronaria | Retirar; ecocardiograma; cirugía si hay hemopericardio progresivo |
| **Arritmias** (por contacto con el miocardio) | Retirar unos milímetros |
| **Neumotórax**, hemotórax | Drenaje pleural |
| **Lesión hepática** o de vísceras (subxifoidea) | Ecografía para elegir el trayecto |
| **Síndrome de descompresión pericárdica** (edema pulmonar o disfunción ventricular tras el drenaje) | Drenar de a poco |
| **Reacumulación** | Catéter por unos días; ventana pericárdica si recurre |

!!! alarma "Errores frecuentes"
    - Puncionar un derrame por **disección aórtica**.
    - **Intubar** a un paciente con taponamiento antes de drenarlo (colapso).
    - Dar **diuréticos** a un paciente con taponamiento "congestivo".
    - Vaciar **todo el derrame de una vez**.

!!! perla "Para el internado"
    **Hipotensión + ingurgitación yugular + pulmones limpios** en un paciente con cáncer, diálisis o cirugía cardíaca reciente: pide una **ecografía al lado de la cama** y avisa. Mientras tanto: suero, sin diuréticos y sin intubar.

## Preguntas de repaso

??? repaso "1. Paciente con cáncer pulmonar, presión 80/60, yugulares ingurgitadas, pulso paradójico y derrame pericárdico circunferencial con colapso de la aurícula derecha. ¿Qué haces?"
    **Taponamiento**: volumen EV, **sin diuréticos ni presión positiva**, y **pericardiocentesis urgente guiada por ecografía**.

??? repaso "2. Dolor torácico desgarrador, hipotensión y derrame pericárdico con aorta ascendente dilatada. ¿Pericardiocentesis?"
    **No**: sospecha de **disección tipo A** con hemopericardio. Va a **cirugía de urgencia** (la punción puede aumentar el sangrado).

??? repaso "3. ¿Qué tan segura es la pericardiocentesis guiada por ecografía?"
    En la serie de la Clínica Mayo (1.127 procedimientos): éxito **97 %**, complicaciones mayores **1,2 %** y menores **3,5 %**.

??? repaso "4. ¿Cuándo retiras el catéter pericárdico?"
    Cuando drena **< 30 mL/día**.

??? repaso "5. ¿Qué estudios pides al líquido pericárdico?"
    **Citología**, citoquímico, recuento celular, **Gram y cultivo**, **ADA** y **Xpert MTB/RIF** (tuberculosis).

## Referencias

1. Schulz-Menger J, Collini V, Gröschel J, et al. 2025 ESC Guidelines for the management of myocarditis and pericarditis. *Eur Heart J.* 2025;46:3952–4041. doi:[10.1093/eurheartj/ehaf192](https://doi.org/10.1093/eurheartj/ehaf192)
2. Tsang TS, Enriquez-Sarano M, Freeman WK, et al. Consecutive 1127 therapeutic echocardiographically guided pericardiocenteses: clinical profile, practice patterns, and outcomes spanning 21 years. *Mayo Clin Proc.* 2002;77(5):429–436. doi:[10.4065/77.5.429](https://doi.org/10.4065/77.5.429)
