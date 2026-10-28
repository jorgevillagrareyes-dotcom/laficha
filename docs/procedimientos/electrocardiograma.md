# Electrocardiograma

<div class="ficha" markdown>

**Procedimiento**
Toma correcta del electrocardiograma de 12 derivaciones y de las derivaciones adicionales (derechas y posteriores)

**Fuentes principales**
AHA/ACCF/HRS 2007 (Kligfield, *Circulation*): estandarización del electrocardiograma · ESC 2023: síndrome coronario agudo

**Otras fuentes**
Ver [síndrome coronario agudo](../cardiologia/sindrome-coronario-agudo.md), [arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md) y [trastornos del potasio](../nefrologia/trastornos-del-potasio.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **En el dolor torácico**: ECG **en los primeros 10 minutos** de la llegada (ESC 2023), y repetirlo si persiste el dolor.
    - **Precordiales**: **V1** 4.º espacio intercostal a la **derecha** del esternón; **V2** 4.º espacio a la **izquierda**; **V4** 5.º espacio en la **línea medioclavicular**; **V3** entre V2 y V4; **V5** línea axilar **anterior** y **V6** línea axilar **media**, a la altura de V4 (AHA 2007).
    - **Extremidades**: en los brazos y las piernas; ponerlos en el tronco cambia el trazado.
    - **Calibración**: **25 mm/s** y **10 mm/mV**; anotar si se cambió.
    - **Derivaciones extra**: **V3R–V4R** en el infarto inferior (ventrículo derecho) y **V7–V9** si hay infradesnivel del ST en V1–V3 (infarto posterior).
    - **Error típico**: **invertir los electrodos de los brazos** (onda P y QRS negativos en DI).

!!! guia "¿Qué respalda esta página?"
    La posición de los electrodos y la calibración vienen de la **declaración científica AHA/ACCF/HRS (2007)** sobre estandarización del ECG. El momento de la toma y las derivaciones adicionales en el síndrome coronario agudo siguen la **guía ESC 2023**. **Manda el protocolo de tu servicio.**

## Cuándo tomarlo

| Situación | Por qué |
|---|---|
| **Dolor torácico**, equivalentes anginosos (disnea, diaforesis, epigastralgia en el adulto mayor o diabético) | Descartar un **SDST** en 10 minutos |
| Palpitaciones, **síncope**, mareo | Arritmias, bloqueos, QT largo, preexcitación |
| **Hiperkalemia** o hipokalemia, hipocalcemia | Ondas T, QRS, QT |
| Fármacos que alargan el **QT** | Control antes y después |
| **Preoperatorio** según la guía y el riesgo | |
| Paro, posparo, shock | Causa y pronóstico |

## Antes de empezar

### Qué preparar

- **Electrocardiógrafo** con papel, **electrodos** nuevos.
- Rasuradora o gasa con alcohol si hay vello o piel grasa.
- **Privacidad**: biombo, explicar el examen.

## Paso a paso

1. **Identificar** al paciente y explicar; **decúbito supino**, relajado, brazos al lado del cuerpo.
2. **Limpiar** la piel (rasurar si es necesario).
3. **Extremidades**: brazo derecho (rojo), brazo izquierdo (amarillo), pierna izquierda (verde), pierna derecha (negro, tierra), según el código de colores del equipo.
4. **Precordiales**: palpar el **ángulo de Louis** (unión del manubrio y el cuerpo del esternón) → 2.º espacio intercostal; bajar hasta el **4.º espacio** para V1 y V2, y ubicar V4 en el 5.º espacio en la línea medioclavicular. Luego V3, V5 y V6.
5. En la **mujer**, poner V4–V6 **bajo la mama**, no sobre ella.
6. **Registrar** a 25 mm/s y 10 mm/mV; pedir que no hable ni se mueva.
7. **Revisar** la calidad (línea de base estable, sin artefactos) y la **onda P en DI y DII** (positiva) antes de retirar los electrodos.
8. **Rotular** con nombre, fecha, hora y síntomas en el momento de la toma.
9. **Mostrarlo** de inmediato si hay dolor torácico.

### Derivaciones adicionales

| Derivaciones | Dónde | Cuándo |
|---|---|---|
| **V3R–V4R** | Espejo de V3–V4 en el hemitórax **derecho** | **Infarto inferior**: buscar compromiso del ventrículo derecho |
| **V7–V9** | 5.º espacio: V7 línea axilar posterior, V8 punta de la escápula, V9 paravertebral izquierda | **Infradesnivel del ST en V1–V3**: infarto **posterior** (supradesnivel ≥ 0,5 mm) |

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="ecg">
<span class="gen-titulo">La toma</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" list="dl-motivo" data-marca="motivo" placeholder="ej.: dolor torácico de 30 minutos de evolución"></label><datalist id="dl-motivo"><option value="dolor torácico"><option value="palpitaciones"><option value="síncope"><option value="control de potasio"><option value="control de QT"></datalist>
<label class="calc-campo">Derivaciones <input type="text" name="derivaciones" list="dl-derivaciones" data-marca="derivaciones" placeholder="ej.: 12 derivaciones estándar"></label><datalist id="dl-derivaciones"><option value="12 derivaciones estándar"><option value="12 derivaciones más V3R–V4R"><option value="12 derivaciones más V7–V9"></datalist>
<label class="calc-campo">Calibración <input type="text" name="tecnica" list="dl-tecnica" data-marca="calibración" data-recordar placeholder="ej.: 25 mm/s y 10 mm/mV"></label><datalist id="dl-tecnica"><option value="25 mm/s y 10 mm/mV"></datalist>
<label class="calc-campo">Calidad <input type="text" name="calidad" list="dl-calidad" data-marca="calidad" placeholder="ej.: trazado sin artefactos"></label><datalist id="dl-calidad"><option value="trazado sin artefactos"><option value="artefacto por temblor en derivaciones de extremidades"></datalist>
<label class="calc-campo">Hallazgo principal <input type="text" name="hallazgo" data-marca="hallazgo" placeholder="ej.: ritmo sinusal 88 lpm, sin alteraciones del ST"></label>
<label class="calc-campo">Comunicación <input type="text" name="aviso" placeholder="ej.: mostrado al médico tratante a los 5 minutos de la llegada"></label>
<script type="application/json" class="gen-def">{"frases": ["Se toma electrocardiograma por {motivo}: {derivaciones}, a {tecnica}; {calidad}.", "Hallazgo: {hallazgo}.", "?ECG {aviso}."], "indicaciones": [{"id": "repetir", "texto": "Repetir el ECG a los 15–30 minutos si persiste el dolor o cambian los síntomas."}, {"id": "comparar", "texto": "Comparar con ECG previos."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se toma electrocardiograma por dolor torácico de 30 minutos de evolución: 12 derivaciones estándar, a 25 mm/s y 10 mm/mV; trazado sin artefactos. Hallazgo: ritmo sinusal 88 lpm, sin alteraciones del ST. ECG mostrado al médico tratante a los 5 minutos de la llegada.

## Errores que alteran el trazado

| Error | Cómo se ve | Qué hacer |
|---|---|---|
| **Brazos invertidos** | **P, QRS y T negativos en DI**; aVR positivo | Revisar los cables y repetir |
| **V1–V2 muy altos** (2.º o 3.º espacio) | Patrón de bloqueo de rama derecha incompleto, ondas T negativas, falso patrón tipo Brugada | Ubicar el 4.º espacio con el ángulo de Louis |
| Precordiales **corridos** | Progresión anómala de la onda R; falsa "necrosis" anterior | Reposicionar |
| Electrodos de extremidades **en el tronco** | Cambia el eje y las amplitudes | Documentarlo si es necesario (ej.: monitor) |
| **Temblor**, movimiento, frío | Línea de base irregular que simula FA o flutter | Abrigar, relajar, repetir |
| **Calibración** distinta (50 mm/s, 5 mm/mV) | Frecuencias y voltajes erróneos | Revisar la señal de calibración |

!!! alarma "Errores frecuentes"
    - **Demorar el ECG** del dolor torácico por hacer la anamnesis completa.
    - **No repetirlo** si persiste el dolor: el primer ECG puede ser normal.
    - Olvidar **V3R–V4R** en el infarto inferior y **V7–V9** con infradesnivel en V1–V3.
    - Retirar los electrodos antes de ver si el trazado es de buena calidad.

!!! perla "Para el internado"
    Antes de interpretar un ECG raro, mira **DI**: si la P, el QRS y la T son negativos con un ritmo sinusal, casi siempre son los **electrodos de los brazos invertidos**.

## Preguntas de repaso

??? repaso "1. ¿Dónde van V1, V2 y V4?"
    **V1**: 4.º espacio intercostal, borde esternal **derecho**. **V2**: 4.º espacio, borde esternal **izquierdo**. **V4**: 5.º espacio, línea **medioclavicular** izquierda.

??? repaso "2. Paciente con supradesnivel del ST en DII, DIII y aVF e hipotensión. ¿Qué derivaciones agregas y por qué?"
    **V3R–V4R**: un supradesnivel en V4R indica **infarto del ventrículo derecho** (evitar nitratos y dar volumen).

??? repaso "3. Infradesnivel del ST de V1 a V3 con ondas R altas, en un paciente con dolor torácico. ¿Qué haces?"
    Registrar **V7–V9**: un supradesnivel ≥ 0,5 mm indica un **infarto posterior** (equivalente de SDST).

??? repaso "4. ECG con ondas P, QRS y T negativas en DI y positivas en aVR, en un paciente sin cardiopatía. ¿Qué piensas?"
    **Electrodos de los brazos invertidos** (lo más probable; la dextrocardia es mucho más rara y también altera las precordiales). Revisar y repetir.

??? repaso "5. ¿En cuánto tiempo debe tomarse el ECG a un paciente con dolor torácico?"
    En los **primeros 10 minutos** desde la llegada (ESC 2023).

## Referencias

1. Kligfield P, Gettes LS, Bailey JJ, et al. Recommendations for the standardization and interpretation of the electrocardiogram: part I: the electrocardiogram and its technology. A scientific statement from the AHA, ACCF and HRS. *Circulation.* 2007;115(10):1306–1324. doi:[10.1161/CIRCULATIONAHA.106.180200](https://doi.org/10.1161/CIRCULATIONAHA.106.180200)
2. Byrne RA, et al. 2023 ESC Guidelines for the management of acute coronary syndromes. *Eur Heart J.* 2023;44:3720–3826.
