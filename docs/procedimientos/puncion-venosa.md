# Punción venosa para exámenes

<div class="ficha" markdown>

**Procedimiento**
Toma de sangre venosa para exámenes de laboratorio, con el orden correcto de llenado de los tubos

**Fuentes principales**
OMS 2010: guía para la extracción de sangre (buenas prácticas en flebotomía)

**Otras fuentes**
Don 1990 (*N Engl J Med*): pseudohiperkalemia por apretar el puño · Ver [hemocultivos](hemocultivos.md), [gases arteriales](gases-arteriales.md) y [trastornos del potasio](../nefrologia/trastornos-del-potasio.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Vena**: de preferencia la **mediana cubital** (en el pliegue del codo); la **basílica** tiene cerca una arteria y un nervio (OMS 2010).
    - **Ligadura** a **4–5 traveses de dedo** sobre el sitio; soltarla **apenas fluya la sangre** y siempre **antes de 2 minutos** y **antes de retirar la aguja**.
    - **Antisepsia** con **alcohol al 70 %** por 30 segundos y **dejar secar** (otros 30 segundos). La **povidona yodada** puede subir falsamente el potasio, el fósforo y el ácido úrico.
    - **No** sacar sangre de una **vía periférica ya instalada** ni del brazo con suero.
    - **Orden de llenado** (OMS 2010): **hemocultivos → tubo sin aditivo → citrato (coagulación) → suero (rojo o dorado) → heparina (verde) → EDTA (lila) → fluoruro (gris)**.
    - **Apretar el puño** repetidamente y la **hemólisis** dan **pseudohiperkalemia**.
    - **Rotular junto al paciente.** Nunca reencapsular la aguja.

!!! guia "¿Qué respalda esta página?"
    La **guía de la OMS (2010)** sobre extracción de sangre ordena los pasos, la antisepsia, la ligadura y el orden de llenado de los tubos (basado en el consenso del CLSI). Los colores de los tubos varían según el fabricante: **manda el protocolo de tu laboratorio.**

## Antes de empezar

### Qué revisar

- **Orden de exámenes** y paciente correctos (dos identificadores).
- **Ayuno** si el examen lo requiere (glicemia, perfil lipídico según el laboratorio).
- **Brazo**: sin **fístula de diálisis**, sin vaciamiento axilar, **sin suero** pasando; si hay suero en ambos brazos, puncionar **bajo** la vía o pedir que se detenga la infusión según el protocolo.

### Qué preparar

- Guantes, **ligadura limpia**, alcohol al 70 %, gasa o algodón.
- **Aguja** con **portatubo** (tubos al vacío) o **mariposa**; jeringa si las venas son frágiles.
- **Tubos** según los exámenes, **etiquetas**, contenedor de cortopunzantes al alcance.

## Paso a paso

1. **Higiene de manos**, identificar al paciente, explicar.
2. **Ubicar la vena** antes de ligar; poner la **ligadura a 4–5 traveses** de dedo sobre el sitio.
3. **Antisepsia** con alcohol al 70 % desde el centro hacia afuera; **dejar secar**. No volver a tocar.
4. **Fijar la vena** traccionando la piel con el pulgar **bajo** el sitio de punción.
5. **Puncionar** con el bisel hacia arriba a **30° o menos**.
6. **Soltar la ligadura** apenas fluya la sangre (antes de 2 minutos).
7. **Llenar los tubos en orden** (tabla) y **por completo** los que lo exigen (citrato, EDTA); **invertirlos** suavemente según el laboratorio. No agitar.
8. **Retirar la aguja**, activar el **dispositivo de seguridad** y desecharla **sin reencapsular**.
9. **Comprimir** con el brazo **extendido** (doblarlo favorece el hematoma).
10. **Rotular junto al paciente** y enviar.

### Orden de llenado

| Orden | Tubo (color habitual) | Para qué | Por qué en ese lugar |
|---|---|---|---|
| 1 | **Hemocultivos** | Microbiología | Evitar contaminarlos |
| 2 | Tubo **sin aditivo** | | |
| 3 | **Citrato** (celeste) | **Coagulación** (TP, TTPA); llenado completo | El activador de coágulo de otros tubos altera las pruebas |
| 4 | **Suero**, con activador (rojo) o gel (dorado) | Bioquímica, serología, banco de sangre | |
| 5 | **Heparina** (verde) | Bioquímica en plasma, amonio | |
| 6 | **EDTA** (lila) | **Hemograma**, banco de sangre; llenado completo | El EDTA (con potasio) arrastrado a otros tubos da **hiperkalemia** e **hipocalcemia** falsas |
| 7 | **Fluoruro** (gris) | Glicemia; llenado completo | |

*Orden basado en la tabla 2.3 de la guía de la OMS (2010); los colores pueden variar según el fabricante.*

## Cómo se escribe

La punción venosa de rutina **no suele registrarse** en la ficha; esta descripción sirve cuando la toma fue difícil, se hizo en un lugar distinto del habitual o el protocolo lo pide.

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="puncion-venosa">
<span class="gen-titulo">La muestra</span>
<label class="calc-campo">Exámenes <input type="text" name="examenes" list="dl-examenes" data-marca="exámenes" placeholder="ej.: hemograma, perfil bioquímico, electrolitos plasmáticos y pruebas de coagulación"></label><datalist id="dl-examenes"><option value="hemograma"><option value="perfil bioquímico"><option value="electrolitos plasmáticos"><option value="pruebas de coagulación"><option value="creatinina y nitrógeno ureico"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Vena <input type="text" name="vena" list="dl-vena" data-marca="vena" placeholder="ej.: vena mediana cubital del brazo izquierdo"></label><datalist id="dl-vena"><option value="vena mediana cubital del brazo izquierdo"><option value="vena mediana cubital del brazo derecho"><option value="vena del dorso de la mano"></datalist>
<label class="calc-campo">Antisepsia con <input type="text" name="antisepsia" list="dl-antisepsia" data-marca="antiséptico" data-recordar placeholder="ej.: alcohol al 70 %"></label><datalist id="dl-antisepsia"><option value="alcohol al 70 %"><option value="clorhexidina alcohólica al 2 %"></datalist>
<label class="calc-campo">Sistema <input type="text" name="sistema" list="dl-sistema" data-marca="sistema" data-recordar placeholder="ej.: tubos al vacío"></label><datalist id="dl-sistema"><option value="tubos al vacío"><option value="mariposa con tubos al vacío"><option value="jeringa"></datalist>
<label class="calc-campo">Al término <input type="text" name="final" list="dl-final" data-recordar placeholder="ej.: sin incidentes; compresión hasta cesar el sangrado, tubos rotulados junto al paciente"></label><datalist id="dl-final"><option value="sin incidentes; compresión hasta cesar el sangrado, tubos rotulados junto al paciente"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Previa antisepsia con {antisepsia}, se punciona la {vena} con {sistema} y se toman muestras para {examenes}, respetando el orden de llenado.", "?Procedimiento {final}."], "indicaciones": [{"id": "compresion", "texto": "Comprimir el sitio con el brazo extendido hasta que deje de sangrar."}, {"id": "resultado", "texto": "Revisar los resultados y avisar si hay valores críticos."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Previa antisepsia con alcohol al 70 %, se punciona la vena mediana cubital del brazo izquierdo con tubos al vacío y se toman muestras para hemograma, perfil bioquímico, electrolitos plasmáticos y pruebas de coagulación, respetando el orden de llenado. Procedimiento sin incidentes; compresión hasta cesar el sangrado, tubos rotulados junto al paciente.

## Errores que alteran el resultado

| Error | Qué altera |
|---|---|
| **Hemólisis** (aguja muy fina, aspirar con fuerza, agitar los tubos, empujar la sangre con la jeringa) | **Potasio**, LDH y transaminasas falsamente altos |
| **Ligadura prolongada**, **apretar el puño** repetidamente | **Potasio** falsamente alto (Don 1990), hemoconcentración |
| Sacar sangre del **brazo con suero** | Dilución; glicemia o electrolitos del suero |
| **Orden incorrecto** (EDTA antes que el suero) | **Hiperkalemia** e **hipocalcemia** falsas |
| Tubo de **citrato mal llenado** | Pruebas de coagulación alargadas falsamente |
| Antisepsia con **povidona yodada** | Potasio, fósforo y ácido úrico falsamente altos (OMS 2010) |
| **Demora** en enviar la muestra | Glicemia falsamente baja; potasio alterado |

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Hematoma** | Comprimir con el brazo extendido |
| **Síncope vasovagal** | Retirar la aguja, acostar y elevar las piernas; puncionar acostado la próxima vez |
| **Punción arterial** (sangre roja y pulsátil) | Retirar y comprimir **5 minutos** |
| **Lesión nerviosa** (dolor eléctrico) | Retirar de inmediato; no insistir en ese sitio |

!!! alarma "Errores frecuentes"
    - Pedir al paciente que **abra y cierre el puño** varias veces mientras se toma el potasio.
    - Sacar sangre de la **vía periférica** que ya tiene el paciente.
    - **Rotular los tubos** lejos del paciente (errores de identificación).
    - **Reencapsular** la aguja.

!!! perla "Para el internado"
    Ante un **potasio alto inesperado** en un paciente sin falla renal ni fármacos que lo suban y con un ECG normal, piensa primero en la **muestra**: hemólisis, puño, ligadura larga u orden de llenado. **Repite la muestra** bien tomada antes de tratar.

## Preguntas de repaso

??? repaso "1. Debes tomar hemocultivos, hemograma, perfil bioquímico y pruebas de coagulación de una sola punción. ¿En qué orden llenas los tubos?"
    **Hemocultivos → citrato (coagulación) → suero (bioquímica) → EDTA (hemograma)**, según la guía de la OMS 2010.

??? repaso "2. Potasio de 6,8 mEq/L en un paciente con creatinina normal, sin fármacos que lo suban y con ECG normal. La muestra se informó levemente hemolizada. ¿Qué haces?"
    Probable **pseudohiperkalemia**: **repetir la muestra** sin ligadura prolongada, sin apretar el puño y sin hemólisis. El ECG normal y la ausencia de causa apoyan el artefacto.

??? repaso "3. ¿Por qué no se debe llenar el tubo lila (EDTA) antes que el del perfil bioquímico?"
    El **EDTA** de potasio arrastrado al tubo siguiente da **hiperkalemia** e **hipocalcemia** falsas.

??? repaso "4. Paciente con suero glucosado pasando por el antebrazo derecho. ¿Dónde tomas la glicemia?"
    En el **otro brazo**. Si no es posible, puncionar **bajo** la vía o detener la infusión según el protocolo; nunca sobre la vía ni por ella.

??? repaso "5. ¿Por qué se prefiere el alcohol al 70 % y no la povidona yodada para los exámenes de rutina?"
    La **povidona yodada** puede elevar falsamente el **potasio**, el **fósforo** y el **ácido úrico** (OMS 2010). Para **hemocultivos**, en cambio, se usa **clorhexidina alcohólica**.

## Referencias

1. World Health Organization. WHO guidelines on drawing blood: best practices in phlebotomy. Ginebra: OMS; 2010. [iris.who.int](https://iris.who.int/handle/10665/44294)
2. Don BR, Sebastian A, Cheitlin M, Christiansen M, Schambelan M. Pseudohyperkalemia caused by fist clenching during phlebotomy. *N Engl J Med.* 1990;322(18):1290–1292. doi:[10.1056/NEJM199005033221806](https://doi.org/10.1056/NEJM199005033221806)
