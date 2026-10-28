# Maniobras vagales

<div class="ficha" markdown>

**Procedimiento**
Maniobras que aumentan el tono vagal para revertir una taquicardia supraventricular por reentrada (Valsalva modificada y masaje del seno carotídeo)

**Fuentes principales**
Appelboam 2015 (REVERT, *Lancet*): Valsalva modificada · ESC 2019: taquicardia supraventricular · AHA 2025: taquicardia con pulso

**Otras fuentes**
Ver [arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md), [electrocardiograma](electrocardiograma.md) y [cardioversión eléctrica](cardioversion.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Para qué**: **taquicardia regular de QRS estrecho estable** (reentrada nodal o por vía accesoria). Primer paso antes de la adenosina.
    - **Valsalva modificada**: soplar contra resistencia (una **jeringa de 10 mL**, ~ 40 mmHg) por **15 segundos** semisentado, y en seguida **acostar** con las **piernas elevadas a 45°** por 15 segundos.
    - **Funciona más que el Valsalva clásico**: **43 % frente a 17 %** de reversión (REVERT).
    - **Masaje carotídeo**: alternativa, **solo** sin soplo carotídeo ni ACV o AIT previo; uno a la vez, **5–10 segundos**.
    - **Nunca** presionar los ojos.
    - **Si falla**: **adenosina 6 mg** en bolo rápido, luego **12 mg**.
    - **Inestable**: **cardioversión** sincronizada, no maniobras.

!!! guia "¿Qué respalda esta página?"
    La Valsalva modificada se apoya en un **ensayo aleatorizado** (REVERT, 2015) y la recomiendan la **ESC 2019** y la **AHA 2025** como primera medida en la taquicardia supraventricular estable. Las precauciones del masaje carotídeo son de **consenso**. **Manda el protocolo de tu servicio.**

## Cuándo usarlas

| Situación | Conducta |
|---|---|
| Taquicardia **regular** de QRS **estrecho**, **estable** | **Valsalva modificada** |
| No responde | **Adenosina 6 mg → 12 mg** |
| **Inestable** | **Cardioversión sincronizada** |
| FA o flutter (irregular o con ondas F) | No revierten; pueden **enlentecer** y mostrar el flutter |
| **Soplo carotídeo**, ACV o AIT reciente | **No** masaje carotídeo |

## Paso a paso

### Valsalva modificada

1. **Monitor ECG** continuo (idealmente registrar el trazado durante la maniobra) y **vía venosa**.
2. Paciente **semisentado** (45°).
3. Pedirle que **sople** por una **jeringa de 10 mL** intentando mover el émbolo (o en un manómetro a 40 mmHg) durante **15 segundos**.
4. Al terminar, **acostarlo** de inmediato y **elevar las piernas** a 45° por **15 segundos**.
5. Volver a semisentado y revisar el ritmo; **repetir** una vez si no revirtió.

### Masaje del seno carotídeo

1. **Auscultar** ambas carótidas (no hacerlo si hay soplo).
2. Cuello extendido y girado al lado opuesto.
3. **Masaje firme** con dos dedos en el ángulo de la mandíbula, sobre el pulso carotídeo, **5–10 segundos**, **un lado a la vez**.
4. Con monitoreo y atropina disponible.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="vagales">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Ritmo <input type="text" name="indicacion" list="dl-indicacion" data-marca="ritmo" placeholder="ej.: taquicardia regular de QRS estrecho a 190 lpm, hemodinámicamente estable"></label><datalist id="dl-indicacion"><option value="taquicardia regular de QRS estrecho, estable"></datalist>
<span class="gen-titulo">La maniobra</span>
<label class="calc-campo">Maniobra <input type="text" name="maniobra" list="dl-maniobra" data-marca="maniobra" placeholder="ej.: Valsalva modificada (soplar una jeringa de 10 mL por 15 segundos en semisentado, luego decúbito con elevación de piernas)"></label><datalist id="dl-maniobra"><option value="Valsalva modificada"><option value="Valsalva estándar"><option value="masaje del seno carotídeo derecho por 5 segundos"></datalist>
<label class="calc-campo">Intentos <input type="text" name="intentos" list="dl-intentos" data-marca="n.° de intentos" placeholder="ej.: dos intentos"></label><datalist id="dl-intentos"><option value="un intento"><option value="dos intentos"></datalist>
<label class="calc-campo">Resultado <input type="text" name="resultado" list="dl-resultado" data-marca="resultado" placeholder="ej.: paso a ritmo sinusal 85 lpm"></label><datalist id="dl-resultado"><option value="paso a ritmo sinusal"><option value="sin respuesta; se indica adenosina 6 mg EV"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}, con monitoreo ECG continuo.", "Se realiza {maniobra}, {intentos}.", "Resultado: {resultado}."], "indicaciones": [{"id": "ecg", "texto": "ECG de 12 derivaciones en ritmo sinusal (buscar preexcitación)."}, {"id": "adenosina", "texto": "Si no revierte: adenosina 6 mg EV en bolo rápido con 20 mL de suero; si no responde, 12 mg."}, {"id": "educar", "texto": "Enseñar al paciente la maniobra de Valsalva modificada para futuros episodios."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con taquicardia regular de QRS estrecho a 190 lpm, hemodinámicamente estable, con monitoreo ECG continuo. Se realiza Valsalva modificada (soplar una jeringa de 10 mL por 15 segundos en semisentado, luego decúbito con elevación de piernas), dos intentos. Resultado: paso a ritmo sinusal 85 lpm.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Bradicardia** o pausa sinusal | Habitualmente breve; atropina si persiste |
| **ACV** por masaje carotídeo (raro) | Evitarlo con soplo, ACV o AIT previo, y en adultos mayores con riesgo |
| Mareo, síncope | Acostar |

!!! alarma "Errores frecuentes"
    - Hacer maniobras en un paciente **inestable** en vez de cardiovertir.
    - Presionar **ambas carótidas** a la vez.
    - Hacer la **compresión ocular**.
    - No registrar el ECG durante la maniobra (se pierde información diagnóstica).

!!! perla "Para el internado"
    Enseña la **Valsalva modificada** al paciente con TSV recurrente: con una jeringa en la casa y alguien que le levante las piernas, muchos episodios se resuelven sin llegar a urgencias.

## Preguntas de repaso

??? repaso "1. Mujer de 30 años con taquicardia regular de QRS estrecho a 200 lpm, presión normal. ¿Primer paso?"
    **Valsalva modificada** (REVERT: 43 % de reversión frente a 17 % con el Valsalva estándar).

??? repaso "2. Describe la Valsalva modificada."
    Soplar por una **jeringa de 10 mL** (~ 40 mmHg) **15 segundos** en semisentado y luego **acostar con las piernas elevadas** a 45° por 15 segundos.

??? repaso "3. Fallaron dos Valsalva modificadas. ¿Qué haces?"
    **Adenosina 6 mg** EV en bolo rápido en una vena proximal con 20 mL de suero; si no responde, **12 mg**.

??? repaso "4. Hombre de 78 años con soplo carotídeo y TSV estable. ¿Masaje carotídeo?"
    **No**: riesgo de embolia. Usar **Valsalva modificada** o adenosina.

??? repaso "5. Con la maniobra la frecuencia baja transitoriamente y aparecen ondas en serrucho a 300 lpm. ¿Qué es?"
    Un **flutter auricular** con conducción 2:1 que la maniobra **desenmascaró**. Manejo de flutter: control de frecuencia, anticoagulación y cardioversión según el caso.

## Referencias

1. Appelboam A, Reuben A, Mann C, et al. Postural modification to the standard Valsalva manoeuvre for emergency treatment of supraventricular tachycardias (REVERT): a randomised controlled trial. *Lancet.* 2015;386(10005):1747–1753. doi:[10.1016/S0140-6736(15)61485-4](https://doi.org/10.1016/S0140-6736(15)61485-4)
2. Brugada J, Katritsis DG, Arbelo E, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. *Eur Heart J.* 2020;41:655–720. doi:[10.1093/eurheartj/ehz467](https://doi.org/10.1093/eurheartj/ehz467)
3. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
