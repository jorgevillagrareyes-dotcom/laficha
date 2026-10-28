---
hide:
  - toc
---

# Atlas de ECG

Un corazón en 3D con la conducción eléctrica animada **en el mismo instante** que el ECG. Elige un trazado del apartado **ECG normal** o **ECG patológicos**. Toca una **onda o segmento** (P, PR, QRS, ST, T, QT, RR) para marcarlo en el trazado, detener el corazón en el momento que lo genera y ver sus valores normales o lo que está alterado. Gira el corazón con el dedo o el mouse, y toca una de las 12 derivaciones para ver hacia dónde mira.

<div id="atlas-ecg" class="ecg-atlas" markdown>
<div class="ecg-pestanas" role="tablist"><button type="button" role="tab" data-grupo="normal">ECG normal</button><button type="button" role="tab" data-grupo="patologico">ECG patológicos</button></div>
<div class="ecg-elegir" data-grupo="normal"><button type="button" data-ritmo="sinusal" data-ficha="ritmo-sinusal-normal">Ritmo sinusal</button><button type="button" data-ritmo="bradicardia" data-ficha="bradicardia-sinusal">Bradicardia sinusal</button><button type="button" data-ritmo="taquicardia" data-ficha="taquicardia-sinusal">Taquicardia sinusal</button></div>
<div class="ecg-elegir" data-grupo="patologico" hidden><button type="button" data-ritmo="fa" data-ficha="fibrilacion-auricular">Fibrilación auricular</button><button type="button" data-ritmo="bav3" data-ficha="bloqueo-av-completo">Bloqueo AV completo</button><button type="button" data-ritmo="iam_inf" data-ficha="iam-inferior-con-supradesnivel-del-st">IAM inferior con SDST</button></div>
<div class="ecg-cabecera"><span class="ecg-ritmo"></span><a class="ecg-ficha" href="#ritmo-sinusal-normal">Ver la ficha</a></div>
<div class="ecg-controles"><button type="button" class="ecg-boton ecg-boton-prim" data-accion="reproducir">Pausa</button><label>Velocidad <select name="velocidad"><option value="1">1×</option><option value="0.5">½×</option><option value="0.25" selected>¼× (cámara lenta)</option></select></label><label>Vista <select name="vista"><option value="frontal">Frontal</option><option value="izquierda">Lateral izquierda</option><option value="inferior">Inferior</option><option value="posterior">Posterior</option></select></label><label><input type="checkbox" name="nombres" checked> Nombres</label><label><input type="checkbox" name="transparente"> Transparente</label></div>
<div class="ecg-cuerpo"><div class="ecg-3d" role="img" aria-label="Corazón en 3D con aurículas, ventrículos, grandes vasos, arterias coronarias y sistema de conducción, que se iluminan en el orden de la activación eléctrica"></div><div class="ecg-panel"><p class="ecg-fase"></p><p class="ecg-cara"></p></div></div>
<div class="ecg-tira"><span class="ecg-tira-rotulo">II</span><canvas aria-label="Trazado del ECG de la derivación elegida, a 25 mm/s y 10 mm/mV"></canvas></div>
<div class="ecg-ondas" role="group" aria-label="Ondas y segmentos"><span>Ondas y segmentos:</span></div>
<div class="ecg-detalle" aria-live="polite" hidden></div>
<div class="ecg-12" role="group" aria-label="Las 12 derivaciones (2,5 s cada una)"></div>
<p class="ecg-nota">Trazado esquemático calculado con un modelo de dipolo, a 25 mm/s y 10 mm/mV (cada cuadro grande = 0,2 s y 0,5 mV). El corazón y el trazado usan los mismos tiempos: lo que se enciende en el corazón es lo que dibuja el ECG en ese momento. Modelo 3D propio, simplificado; no reemplaza un ECG real.</p>
</div>

## ECG normal

### Ritmo sinusal normal

<button type="button" class="ecg-ver" data-ritmo="sinusal">Ver en el corazón</button>

!!! guia "Cómo reconocerlo"
    - **Onda P** antes de cada QRS, **positiva en DI, DII y aVF** y **negativa en aVR**: el impulso nace en el nódulo sinusal, arriba y a la derecha, y baja hacia la izquierda.
    - **Cada P va seguida de un QRS**, con un **PR constante de 120–200 ms**.
    - **QRS angosto**: menos de **120 ms**.
    - **Frecuencia** de 60 a 100 lpm y ritmo regular.

!!! perla "Por qué V1 es negativa y V6 positiva"
    El ventrículo izquierdo tiene mucha más masa, así que el vector principal del QRS apunta **a la izquierda, abajo y atrás**. V1 queda del lado del que el vector se aleja (QRS con una **r** pequeña del septo y una **S** profunda) y V6 del lado al que se acerca (**R** alta). Entre V3 y V4 el QRS pasa de negativo a positivo: es la **zona de transición**.

### Bradicardia sinusal

<button type="button" class="ecg-ver" data-ritmo="bradicardia">Ver en el corazón</button>

- Ritmo sinusal (P normal antes de cada QRS) con **FC menor de 60 lpm**.
- Puede ser **normal** en deportistas y durante el sueño.
- Si hay síntomas, buscar **fármacos** (betabloqueadores, calcioantagonistas no dihidropiridínicos), **hipotiroidismo** o enfermedad del nódulo sinusal. Ver [paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md).

### Taquicardia sinusal

<button type="button" class="ecg-ver" data-ritmo="taquicardia">Ver en el corazón</button>

- Ritmo sinusal con **FC mayor de 100 lpm**; el PR y el QT se acortan con la frecuencia.
- Casi siempre es una **respuesta**: fiebre, dolor, hipovolemia, anemia, hipoxemia, TEP, hipertiroidismo o fármacos. Se trata la causa, no la taquicardia.

## ECG patológicos

### Fibrilación auricular

<button type="button" class="ecg-ver" data-ritmo="fa">Ver en el corazón</button>

!!! alarma "Claves"
    - **Sin ondas P**: en su lugar, **ondas f** finas e irregulares (mejor en V1 y DII).
    - **RR irregularmente irregular**.
    - **QRS angosto** si la conducción por las ramas es normal.
    - Diagnóstico: un registro de **≥ 30 s** en una derivación, o un ECG de 12 derivaciones, con este patrón (ESC 2024).

En el corazón: las aurículas se activan en parches desordenados y el nódulo AV deja pasar impulsos al azar. Ver [fibrilación auricular](cardiologia/fibrilacion-auricular.md).

### Bloqueo AV completo

<button type="button" class="ecg-ver" data-ritmo="bav3">Ver en el corazón</button>

!!! alarma "Claves"
    - **Disociación AV**: las P son regulares y los QRS también, pero **no hay relación entre ellos** (el PR cambia en cada latido).
    - Hay **más P que QRS**; el ritmo ventricular es un **escape** lento.
    - **QRS angosto** si el escape nace en la unión o el haz de His; **ancho** si nace en el ventrículo (más lento e inestable).
    - Descartadas las causas reversibles, es indicación de **marcapaso** (ESC 2021).

En el corazón: las aurículas se activan con normalidad, pero el impulso se detiene en el nódulo AV (rojo); los ventrículos se activan desde el haz de His a su propio ritmo. Ver [paro cardiorrespiratorio y arritmias](cardiologia/paro-cardiorrespiratorio-y-arritmias.md).

### IAM inferior con supradesnivel del ST

<button type="button" class="ecg-ver" data-ritmo="iam_inf">Ver en el corazón</button>

!!! alarma "Claves"
    - **Supradesnivel del ST en DII, DIII y aVF** (cara inferior).
    - **Infradesnivel especular en aVL** (y DI).
    - Criterio: supradesnivel nuevo en el punto J **≥ 1 mm en 2 derivaciones contiguas** (en V2–V3, ≥ 2 mm en hombres ≥ 40 años, ≥ 2,5 mm en hombres < 40 años y ≥ 1,5 mm en mujeres).
    - En el IAM inferior, registrar **V3R–V4R** para buscar infarto del ventrículo derecho.

En el corazón: la pared inferior isquémica (morado) y la coronaria derecha ocluida (punto negro); la corriente de lesión apunta hacia las derivaciones inferiores durante el segmento ST. Ver [síndrome coronario agudo](cardiologia/sindrome-coronario-agudo.md).

## Referencias

1. Kligfield P, Gettes LS, Bailey JJ, et al. Recommendations for the standardization and interpretation of the electrocardiogram: part I: the electrocardiogram and its technology. A scientific statement from the AHA, ACCF and HRS. *Circulation.* 2007;115(10):1306–1324. doi:[10.1161/CIRCULATIONAHA.106.180200](https://doi.org/10.1161/CIRCULATIONAHA.106.180200)
2. Mason JW, Hancock EW, Gettes LS. Recommendations for the standardization and interpretation of the electrocardiogram: part II: electrocardiography diagnostic statement list. *J Am Coll Cardiol.* 2007;49(10):1128–1135. doi:[10.1016/j.jacc.2007.01.025](https://doi.org/10.1016/j.jacc.2007.01.025)
3. Surawicz B, Childers R, Deal BJ, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part III: intraventricular conduction disturbances. *Circulation.* 2009;119(10):e235–e240. doi:[10.1161/CIRCULATIONAHA.108.191095](https://doi.org/10.1161/CIRCULATIONAHA.108.191095)
4. Rautaharju PM, Surawicz B, Gettes LS, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part IV: the ST segment, T and U waves, and the QT interval. *Circulation.* 2009;119(10):e241–e250. doi:[10.1161/CIRCULATIONAHA.108.191096](https://doi.org/10.1161/CIRCULATIONAHA.108.191096)
5. Hancock EW, Deal BJ, Mirvis DM, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part V: electrocardiogram changes associated with cardiac chamber hypertrophy. *Circulation.* 2009;119(10):e251–e261. doi:[10.1161/CIRCULATIONAHA.108.191097](https://doi.org/10.1161/CIRCULATIONAHA.108.191097)
6. Van Gelder IC, Rienstra M, Bunting KV, Casado-Arroyo R, et al. 2024 ESC Guidelines for the management of atrial fibrillation. *Eur Heart J.* 2024;45(36):3314–3414. doi:[10.1093/eurheartj/ehae176](https://doi.org/10.1093/eurheartj/ehae176)
7. Glikson M, Nielsen JC, Kronborg MB, et al. 2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy. *Eur Heart J.* 2021;42(35):3427–3520. doi:[10.1093/eurheartj/ehab364](https://doi.org/10.1093/eurheartj/ehab364)
8. Thygesen K, Alpert JS, Jaffe AS, et al. Fourth Universal Definition of Myocardial Infarction (2018). *Circulation.* 2018;138(20):e618–e651. doi:[10.1161/CIR.0000000000000617](https://doi.org/10.1161/CIR.0000000000000617)

<script src="javascripts/vendor/three.min.js"></script>
<script src="javascripts/atlas-ecg-modelo.js"></script>
<script src="javascripts/atlas-ecg.js"></script>
