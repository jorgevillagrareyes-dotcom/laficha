---
hide:
  - toc
---

# Atlas de ECG

Un corazón esquemático en 3D, con la conducción eléctrica animada al mismo tiempo que el ECG. Gíralo con el dedo o el mouse. Toca una de las 12 derivaciones para ver hacia dónde mira y cómo se dibuja el mismo latido desde ese ángulo.

<div id="atlas-ecg" class="ecg-atlas" data-ritmo="sinusal" markdown>
<div class="ecg-cabecera"><span class="ecg-ritmo"></span><span class="ecg-controles"><button type="button" class="ecg-boton ecg-boton-prim" data-accion="reproducir">Pausa</button><label>Velocidad <select name="velocidad"><option value="1">1×</option><option value="0.5">½×</option><option value="0.25" selected>¼× (cámara lenta)</option></select></label><label><input type="checkbox" name="nombres" checked> Nombres</label><button type="button" class="ecg-boton" data-accion="girar">Vista frontal</button></span></div>
<div class="ecg-cuerpo"><div class="ecg-3d" role="img" aria-label="Corazón esquemático en 3D: aurículas, ventrículos y sistema de conducción, que se iluminan en el orden de la activación eléctrica"></div><div class="ecg-panel"><p class="ecg-fase" aria-live="off"></p><p class="ecg-cara"></p></div></div>
<div class="ecg-tira"><span class="ecg-tira-rotulo">II</span><canvas aria-label="Trazado del ECG de la derivación elegida, a 25 mm/s y 10 mm/mV"></canvas></div>
<div class="ecg-12" role="group" aria-label="Las 12 derivaciones"></div>
<p class="ecg-nota">Trazado esquemático calculado con un modelo de dipolo, a 25 mm/s y 10 mm/mV (cada cuadro grande = 0,2 s y 0,5 mV). Sirve para entender de dónde sale cada onda; no reemplaza un ECG real.</p>
</div>

!!! guia "Ritmo sinusal normal: cómo reconocerlo"
    - **Onda P** antes de cada QRS, **positiva en DI y DII** y **negativa en aVR**: el impulso nace en el nódulo sinusal, arriba y a la derecha, y baja hacia la izquierda.
    - **Cada P va seguida de un QRS**, con un **PR constante**. Un PR mayor de **200 ms** (1 cuadro grande) es un bloqueo AV de primer grado.
    - **QRS angosto**: menos de **120 ms** (3 cuadros chicos). Con 120 ms o más, pensar en un bloqueo completo de rama o un origen ventricular.
    - **Frecuencia** de 60 a 100 lpm: 300 dividido por el número de cuadros grandes entre dos R.

!!! perla "Por qué V1 es negativa y V6 positiva"
    El ventrículo izquierdo tiene mucha más masa, así que el vector principal del QRS apunta **a la izquierda, abajo y atrás**. V1 queda en el lado del que el vector se aleja (QRS con una **r** pequeña del septo y una **S** profunda) y V6 en el lado al que se acerca (**R** alta). Entre V3 y V4 el QRS pasa de negativo a positivo: es la **zona de transición**. Prueba tocando V1 y luego V6.

## Referencias

1. Kligfield P, Gettes LS, Bailey JJ, et al. Recommendations for the standardization and interpretation of the electrocardiogram: part I: the electrocardiogram and its technology. A scientific statement from the AHA, ACCF and HRS. *Circulation.* 2007;115(10):1306–1324. doi:[10.1161/CIRCULATIONAHA.106.180200](https://doi.org/10.1161/CIRCULATIONAHA.106.180200)
2. Mason JW, Hancock EW, Gettes LS. Recommendations for the standardization and interpretation of the electrocardiogram: part II: electrocardiography diagnostic statement list. *J Am Coll Cardiol.* 2007;49(10):1128–1135. doi:[10.1016/j.jacc.2007.01.025](https://doi.org/10.1016/j.jacc.2007.01.025)
3. Surawicz B, Childers R, Deal BJ, et al. AHA/ACCF/HRS recommendations for the standardization and interpretation of the electrocardiogram: part III: intraventricular conduction disturbances. *Circulation.* 2009;119(10):e235–e240. doi:[10.1161/CIRCULATIONAHA.108.191095](https://doi.org/10.1161/CIRCULATIONAHA.108.191095)

<script src="javascripts/vendor/three.min.js"></script>
<script src="javascripts/atlas-ecg.js"></script>
