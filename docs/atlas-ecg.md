---
hide:
  - toc
---

# Atlas de ECG

Un corazón en 3D con la conducción eléctrica animada **en el mismo instante** que el ECG. El corazón **se contrae** al ritmo del trazado. Elige un trazado, toca una **onda o segmento** para ver qué la genera y sus valores, y gira el corazón con el dedo o el mouse.

<div id="atlas-ecg" class="ecg-atlas">
<div class="ecg-barra"><div class="ecg-pestanas" role="tablist"><button type="button" role="tab" data-grupo="normal">ECG normal</button><button type="button" role="tab" data-grupo="patologico">ECG patológicos</button></div><label class="ecg-elegir-movil">Trazado <select name="ritmo"></select></label></div>
<div class="ecg-menu"></div>
<div class="ecg-cuerpo"><div class="ecg-escena"><div class="ecg-3d" role="img" aria-label="Corazón en 3D con aurículas, ventrículos, grandes vasos, arterias coronarias, venas cardíacas y sistema de conducción, que se iluminan en el orden de la activación eléctrica"></div><div class="ecg-controles"><button type="button" class="ecg-boton ecg-boton-prim" data-accion="reproducir">Pausa</button><label>Velocidad <select name="velocidad"><option value="1">1×</option><option value="0.5">½×</option><option value="0.25" selected>¼×</option></select></label><label>Vista <select name="vista"><option value="frontal">Frontal</option><option value="izquierda">Lateral izq.</option><option value="inferior">Inferior</option><option value="posterior">Posterior</option></select></label><label><input type="checkbox" name="contraccion" checked> Contracción</label><label><input type="checkbox" name="nombres" checked> Nombres</label><label><input type="checkbox" name="transparente"> Transparente</label></div></div><div class="ecg-panel"><p class="ecg-ritmo"></p><div class="ecg-claves"></div><p class="ecg-resumen"></p><p class="ecg-fase" aria-live="off"></p><p class="ecg-cara"></p></div></div>
<div class="ecg-tira-caja"><div class="ecg-tira-cabecera"><label>Derivación <select name="derivacion"></select></label><div class="ecg-ondas" role="group" aria-label="Ondas y segmentos"></div></div><div class="ecg-tira"><span class="ecg-tira-rotulo">II</span><canvas aria-label="Trazado del ECG de la derivación elegida, a 25 mm/s y 10 mm/mV"></canvas></div><div class="ecg-detalle" aria-live="polite" hidden></div></div>
<details class="ecg-doce" open><summary>Las 12 derivaciones</summary><div class="ecg-12" role="group" aria-label="Las 12 derivaciones"></div></details>
<p class="ecg-nota">Trazados esquemáticos calculados con un modelo de dipolo, a 25 mm/s y 10 mm/mV (cuadro grande = 0,2 s y 0,5 mV). El corazón y el trazado usan los mismos tiempos: lo que se enciende en el corazón es lo que dibuja el ECG en ese momento. Modelo 3D propio y simplificado; no reemplaza un ECG real.</p>
</div>

## Cómo leer un ECG en 7 pasos

<div class="ecg-pasos" markdown>

1. **Datos y calidad**: nombre, fecha y hora; velocidad **25 mm/s** y calibración **10 mm/mV**; sin artefactos; electrodos bien puestos (P y QRS positivos en DI).
2. **Ritmo**: ¿hay una **P antes de cada QRS** y un QRS después de cada P? ¿Es regular?
3. **Frecuencia**: **300 / cuadros grandes** entre dos R, o 1500 / cuadros chicos. Si es irregular, contar los QRS en 10 s × 6.
4. **Eje**: positivo en DI y aVF = normal (−30° a +90°). Negativo en aVF con DII negativo: desviado a la izquierda.
5. **Intervalos**: **PR 120–200 ms**, **QRS < 120 ms** y **QTc** (prolongado si es ≥ 450 ms en hombres o ≥ 460 ms en mujeres).
6. **Morfología**: P (crecimiento auricular), QRS (ondas Q, bloqueos de rama, hipertrofia), transición en V3–V4.
7. **ST y T**: supradesnivel o infradesnivel del ST en derivaciones contiguas; T invertidas o picudas. **Comparar con un ECG previo.**

</div>

## ECG normal

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="sinusal" markdown>

#### Ritmo sinusal normal

- **P positiva en DI, DII y aVF** y negativa en aVR, antes de cada QRS.
- **PR 120–200 ms** constante; **QRS < 120 ms**.
- **FC 60–100 lpm**, regular.
- V1 negativa y V6 positiva: el vector del QRS apunta a la izquierda, abajo y atrás.

[Cómo tomar un ECG](procedimientos/electrocardiograma.md)

</div>

<div class="ecg-tarjeta" data-ritmo="bradicardia" markdown>

#### Bradicardia sinusal

- Ritmo sinusal con **FC < 60 lpm**.
- Puede ser **normal** en deportistas y durante el sueño.
- Con síntomas: buscar **fármacos**, **hipotiroidismo** o enfermedad del nódulo sinusal.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="taquicardia" markdown>

#### Taquicardia sinusal

- Ritmo sinusal con **FC > 100 lpm**; el PR y el QT se acortan.
- Casi siempre es una **respuesta**: fiebre, dolor, hipovolemia, anemia, hipoxemia, TEP, hipertiroidismo.
- Se trata **la causa**.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

</div>

## ECG patológicos

### Taquiarritmias supraventriculares

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="fa" markdown>

#### Fibrilación auricular

- **Sin ondas P**: ondas **f** finas e irregulares (mejor en V1).
- **RR irregularmente irregular**; QRS angosto.
- Diagnóstico: **≥ 30 s** en una derivación o un ECG de 12 derivaciones (ESC 2024).

[Fibrilación auricular](cardiologia/fibrilacion-auricular.md)

</div>

<div class="ecg-tarjeta" data-ritmo="flutter" markdown>

#### Flutter auricular típico

- Ondas **F en dientes de sierra** (~ 300/min), **negativas en DII, DIII y aVF**, sin línea isoeléctrica.
- Conducción **2:1**: taquicardia **regular a ~ 150 lpm**.
- Macrorreentrada alrededor de la tricúspide: **ablación del istmo cavotricuspídeo**.

[Fibrilación y flutter auricular](cardiologia/fibrilacion-auricular.md)

</div>

<div class="ecg-tarjeta" data-ritmo="tsv" markdown>

#### Taquicardia por reentrada nodal

- Taquicardia **regular de QRS angosto**, de inicio y fin bruscos.
- **P retrógrada** escondida en el QRS o justo después (**pseudo r' en V1**).
- Estable: **maniobras vagales** y luego **adenosina** (ESC 2019).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="ea" markdown>

#### Extrasístole auricular

- **P' prematura** y de forma distinta, con **QRS angosto**.
- **Pausa no compensadora**: la P' reinicia el nódulo sinusal.
- Frecuentes y benignas en la mayoría.

[Extrasistolía](cardiologia/extrasistolia.md)

</div>

<div class="ecg-tarjeta" data-ritmo="wpw" markdown>

#### Preexcitación (WPW)

- **PR corto** (< 120 ms) y **onda delta**.
- QRS ensanchado, con ST-T secundario.
- FA preexcitada: **evitar bloqueadores del nódulo AV**; cardioversión o procainamida.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

</div>

### Bloqueos AV

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="bav1" markdown>

#### Bloqueo AV de primer grado

- **PR > 200 ms** y constante.
- **Toda P conduce**.
- Riesgo **bajo**: revisar fármacos que enlentecen el nódulo AV.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="mobitz1" markdown>

#### Mobitz I (Wenckebach)

- El **PR se alarga** latido a latido hasta que **una P no conduce**.
- Latidos agrupados; bloqueo **nodal**, QRS angosto.
- Riesgo **bajo** (puede verse en el IAM inferior).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="mobitz2" markdown>

#### Mobitz II

- **PR constante** y, de pronto, **una P que no conduce**.
- QRS **a menudo ancho**: bloqueo bajo el nódulo (His–Purkinje).
- Riesgo **alto** de bloqueo completo: **marcapaso** (ESC 2021).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="bav3" markdown>

#### Bloqueo AV completo

- **Disociación AV**: P y QRS regulares, sin relación entre sí.
- **Más P que QRS**; escape lento (angosto si es de la unión, ancho si es ventricular).
- Descartadas causas reversibles: **marcapaso** (ESC 2021).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="pausa" markdown>

#### Pausa sinusal

- **Falta la P** (y el QRS) durante la pausa.
- La pausa no es múltiplo del ciclo sinusal.
- Pausas con síntomas: **marcapaso** (ESC 2021).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

</div>

### Bloqueos de rama

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="brd" markdown>

#### Bloqueo de rama derecha

- **QRS ≥ 120 ms** con **rsR' en V1–V2**.
- **S ancha en DI y V6**.
- T negativa en V1–V2 (secundaria). Si es nuevo: pensar en TEP o cardiopatía (y en Chagas).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="bri" markdown>

#### Bloqueo de rama izquierda

- **QRS ≥ 120 ms**; **R ancha con muesca** en DI, aVL, V5 y V6, **sin q septal**.
- **QS o rS en V1**.
- ST y T **opuestos al QRS**: dificulta el diagnóstico de IAM. Suele indicar cardiopatía.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="hai" markdown>

#### Hemibloqueo anterior izquierdo

- **Eje a la izquierda** (−45° a −90°).
- **qR en aVL** y rS en DII, DIII y aVF; QRS < 120 ms.
- Con BRD, en Chile: pensar en **Chagas**.

[Extrasistolía y Chagas](cardiologia/extrasistolia.md)

</div>

</div>

### Arritmias ventriculares

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="ev" markdown>

#### Extrasístole ventricular

- **QRS prematuro, ancho y raro**, sin P antes; T opuesta.
- **Pausa compensadora completa**.
- Imagen de BRI con eje inferior: tracto de salida del VD (la más frecuente de las benignas).

[Extrasistolía](cardiologia/extrasistolia.md)

</div>

<div class="ecg-tarjeta" data-ritmo="tv" markdown>

#### Taquicardia ventricular monomorfa

- **QRS ancho, regular y monomorfo**, a más de 100 lpm.
- **Disociación AV**, latidos de captura o de fusión.
- Taquicardia de QRS ancho: **tratar como TV** ante la duda.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="fv" markdown>

#### Fibrilación ventricular

- **Ondas caóticas** sin QRS identificables.
- **Sin pulso: paro cardíaco**.
- **Desfibrilar** de inmediato y 2 minutos de RCP.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="tdp" markdown>

#### Torsades de pointes

- **TV polimorfa** que gira alrededor de la línea de base.
- Sobre un **QT largo** (fármacos, hipokalemia, hipomagnesemia).
- **Sulfato de magnesio 1–2 g EV**; sin pulso: desfibrilar.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="asistolia" markdown>

#### Asistolia

- **Línea plana**: sin actividad ventricular.
- Ritmo **no desfibrilable**.
- RCP, **adrenalina 1 mg** lo antes posible y causas reversibles (5H y 5T).

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

</div>

### Isquemia

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="iam_inf" markdown>

#### IAM inferior con supradesnivel del ST

- **Supradesnivel en DII, DIII y aVF**; **infradesnivel especular en aVL**.
- Criterio: **≥ 1 mm** en el punto J en 2 derivaciones contiguas.
- Coronaria derecha (o circunfleja): registrar **V3R–V4R**.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="iam_ant" markdown>

#### IAM anterior con supradesnivel del ST

- **Supradesnivel en V1–V4**: **descendente anterior**.
- En V2–V3: **≥ 2 mm** (hombres ≥ 40 años), **≥ 2,5 mm** (hombres < 40) o **≥ 1,5 mm** (mujeres).
- Emergencia de **reperfusión**.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="iam_lat" markdown>

#### IAM lateral con supradesnivel del ST

- **Supradesnivel en DI, aVL, V5 y V6**.
- Infradesnivel especular en DIII y aVF.
- **Circunfleja** o diagonal.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="iam_post" markdown>

#### IAM posterior

- **Infradesnivel del ST en V1–V3** (espejo del posterior).
- Con la evolución, **R alta en V1–V2**.
- Registrar **V7–V9**: supradesnivel ≥ 0,5 mm.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="isq_sub" markdown>

#### Infradesnivel del ST

- **Infradesnivel horizontal o descendente** ≥ 0,5 mm en 2 derivaciones contiguas.
- Isquemia subendocárdica: no localiza la arteria.
- Con supradesnivel en aVR e infradesnivel en ≥ 6 derivaciones: **tronco o tres vasos**.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="q_inf" markdown>

#### Ondas Q (IAM inferior antiguo)

- **Q patológicas** (≥ 30 ms y ≥ 1 mm) en DII, DIII y aVF.
- ST isoeléctrico; **T negativas** en las inferiores.
- Cicatriz de un infarto previo.

[Síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md)

</div>

</div>

### Electrolitos

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="hk" markdown>

#### Hiperkalemia

- **T altas, picudas, simétricas** y de base estrecha.
- Luego **P aplanada, PR largo y QRS ancho**; al final, patrón sinusoidal, FV o asistolia.
- Con cambios en el ECG: **gluconato de calcio** EV. Un ECG normal no la descarta.

[Trastornos del potasio](nefrologia/trastornos-del-potasio.md)

</div>

<div class="ecg-tarjeta" data-ritmo="hipok" markdown>

#### Hipokalemia

- **T aplanada** y **onda U** prominente.
- **ST descendido**; el QT parece largo (es un QU).
- Predispone a arritmias y torsades.

[Trastornos del potasio](nefrologia/trastornos-del-potasio.md)

</div>

<div class="ecg-tarjeta" data-ritmo="hipercal" markdown>

#### Hipercalcemia

- **ST muy corto**: la T empieza casi al terminar el QRS.
- **QT corto**.
- Grave si el calcio es > 14 mg/dL.

[Calcio, fósforo y magnesio](endocrinologia/trastornos-del-calcio-fosforo-y-magnesio.md)

</div>

<div class="ecg-tarjeta" data-ritmo="hipocal" markdown>

#### Hipocalcemia

- **ST largo y plano**, con T normal.
- **QT largo**: riesgo de torsades.
- Buscar tetania, Chvostek y Trousseau.

[Calcio, fósforo y magnesio](endocrinologia/trastornos-del-calcio-fosforo-y-magnesio.md)

</div>

</div>

### Otros patrones

<div class="ecg-tarjetas" markdown>

<div class="ecg-tarjeta" data-ritmo="qtlargo" markdown>

#### QT largo

- **QTc ≥ 450 ms** (hombres) o **≥ 460 ms** (mujeres).
- **> 500 ms**: alto riesgo de torsades.
- Revisar fármacos, potasio y magnesio.

[Paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

</div>

<div class="ecg-tarjeta" data-ritmo="pericarditis" markdown>

#### Pericarditis aguda

- **Supradesnivel del ST difuso y cóncavo**.
- **Infradesnivel del PR** (y espejo en aVR).
- Sin territorio coronario ni ondas Q.

[Pericarditis y taponamiento](cardiologia/pericarditis-y-taponamiento.md)

</div>

<div class="ecg-tarjeta" data-ritmo="hvi" markdown>

#### Hipertrofia ventricular izquierda

- **Voltaje alto**: S V1 + R V5/V6 > 35 mm (Sokolow-Lyon).
- **Sobrecarga**: ST descendido y T negativa asimétrica en V5–V6, DI y aVL.
- Causa más frecuente: HTA.

[Hipertensión arterial](cardiologia/hipertension-arterial.md)

</div>

<div class="ecg-tarjeta" data-ritmo="tep" markdown>

#### Tromboembolismo pulmonar

- Lo más frecuente: **taquicardia sinusal**.
- **S1Q3T3**, BRD y **T negativas en V1–V4** (sobrecarga del VD).
- Poco sensible: un ECG normal no descarta TEP.

[Tromboembolismo pulmonar](respiratorio/tromboembolismo-pulmonar.md)

</div>

<div class="ecg-tarjeta" data-ritmo="marcapaso" markdown>

#### Ritmo de marcapaso

- **Espiga** seguida de **QRS ancho** (imagen de BRI: electrodo en el VD).
- Espiga sin QRS: **falla de captura**.
- ST-T opuesto al QRS (secundario).

[Marcapaso transcutáneo](procedimientos/marcapaso-transcutaneo.md)

</div>

<div class="ecg-tarjeta" data-ritmo="derrame" markdown>

#### Derrame pericárdico

- **Bajo voltaje** y **alternancia eléctrica**.
- **Taquicardia sinusal**.
- Sugiere derrame grande o taponamiento: **ecocardiograma urgente**.

[Pericarditis y taponamiento](cardiologia/pericarditis-y-taponamiento.md)

</div>

</div>

## Referencias

1. Kligfield P, Gettes LS, Bailey JJ, et al. Recommendations for the standardization and interpretation of the electrocardiogram: part I: the electrocardiogram and its technology. A scientific statement from the AHA, ACCF and HRS. *Circulation.* 2007;115(10):1306–1324. doi:[10.1161/CIRCULATIONAHA.106.180200](https://doi.org/10.1161/CIRCULATIONAHA.106.180200)
2. Mason JW, Hancock EW, Gettes LS. Recommendations for the standardization and interpretation of the electrocardiogram: part II: electrocardiography diagnostic statement list. *J Am Coll Cardiol.* 2007;49(10):1128–1135. doi:[10.1016/j.jacc.2007.01.025](https://doi.org/10.1016/j.jacc.2007.01.025)
3. Surawicz B, Childers R, Deal BJ, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part III: intraventricular conduction disturbances. *Circulation.* 2009;119(10):e235–e240. doi:[10.1161/CIRCULATIONAHA.108.191095](https://doi.org/10.1161/CIRCULATIONAHA.108.191095)
4. Rautaharju PM, Surawicz B, Gettes LS, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part IV: the ST segment, T and U waves, and the QT interval. *Circulation.* 2009;119(10):e241–e250. doi:[10.1161/CIRCULATIONAHA.108.191096](https://doi.org/10.1161/CIRCULATIONAHA.108.191096)
5. Hancock EW, Deal BJ, Mirvis DM, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part V: electrocardiogram changes associated with cardiac chamber hypertrophy. *Circulation.* 2009;119(10):e251–e261. doi:[10.1161/CIRCULATIONAHA.108.191097](https://doi.org/10.1161/CIRCULATIONAHA.108.191097)
6. Van Gelder IC, Rienstra M, Bunting KV, Casado-Arroyo R, et al. 2024 ESC Guidelines for the management of atrial fibrillation. *Eur Heart J.* 2024;45(36):3314–3414. doi:[10.1093/eurheartj/ehae176](https://doi.org/10.1093/eurheartj/ehae176)
7. Brugada J, Katritsis DG, Arbelo E, et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. *Eur Heart J.* 2020;41(5):655–720. doi:[10.1093/eurheartj/ehz467](https://doi.org/10.1093/eurheartj/ehz467)
8. Glikson M, Nielsen JC, Kronborg MB, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. *Eur Heart J.* 2021;42(35):3427–3520. doi:[10.1093/eurheartj/ehab364](https://doi.org/10.1093/eurheartj/ehab364)
9. Zeppenfeld K, Tfelt-Hansen J, de Riva M, et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. *Eur Heart J.* 2022;43(40):3997–4126. doi:[10.1093/eurheartj/ehac262](https://doi.org/10.1093/eurheartj/ehac262)
10. Thygesen K, Alpert JS, Jaffe AS, et al. Fourth Universal Definition of Myocardial Infarction (2018). *Circulation.* 2018;138(20):e618–e651. doi:[10.1161/CIR.0000000000000617](https://doi.org/10.1161/CIR.0000000000000617)

<script src="javascripts/vendor/three.min.js"></script>
<script src="javascripts/atlas-ecg-modelo.js"></script>
<script src="javascripts/atlas-ecg.js"></script>
