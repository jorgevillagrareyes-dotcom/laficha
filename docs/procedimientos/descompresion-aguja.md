# Descompresión con aguja

<div class="ficha" markdown>

**Procedimiento**
Punción del espacio pleural con una aguja o cánula larga para descomprimir un neumotórax a tensión, como puente al drenaje pleural

**Fuentes principales**
ATLS 10.ª (2018) y 11.ª ed. (2025) · Ahmad 2025 (*World J Emerg Surg*): metaanálisis del largo de la aguja y del sitio de descompresión

**Otras fuentes**
Ver [neumotórax y trauma torácico](../respiratorio/neumotorax-y-trauma-toracico.md), [drenaje pleural](drenaje-pleural.md) y [paro cardiorrespiratorio](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Diagnóstico clínico**: disnea, **hipotensión**, murmullo **ausente** de un lado, hiperresonancia, ingurgitación yugular, desviación traqueal (tardía). **No esperar la radiografía.**
    - **Sitio** (ATLS 10.ª): **4.º–5.º espacio intercostal, justo por delante de la línea axilar media**. Alternativa: **2.º espacio, línea medioclavicular**.
    - **Aguja larga**: **≥ 7–8 cm** en el adulto. Con agujas cortas, cerca de **1 de cada 3** no alcanza la pleura (Ahmad 2025).
    - **Al lado izquierdo**, el metaanálisis sugiere el **2.º espacio** para alejarse del corazón.
    - **Siempre** después: **drenaje pleural**. La aguja falla, se tapa o se sale.
    - En el paciente **ventilado** o en el trauma, la **toracostomía digital** es la alternativa si la aguja falla.

!!! guia "¿Qué respalda esta página?"
    El sitio y la técnica vienen del manual **ATLS** (10.ª y 11.ª edición). El largo de la aguja y la comparación de sitios se apoyan en un **metaanálisis de estudios de grosor de la pared torácica** (Ahmad 2025). No hay ensayos clínicos que comparen sitios en pacientes reales. **Manda el protocolo de tu servicio.**

## Cuándo hacerla

| Situación | Conducta |
|---|---|
| Sospecha **clínica** de neumotórax a tensión con **compromiso hemodinámico** | **Descomprimir de inmediato**, sin imagen |
| **Paro** en trauma o paciente ventilado con sospecha de tensión | Descompresión bilateral (aguja o toracostomía digital) según el protocolo |
| Neumotórax **sin** compromiso hemodinámico | **No**: drenaje pleural o manejo según la [guía](../respiratorio/neumotorax-y-trauma-toracico.md) |

## Antes de empezar

### Qué preparar

- **Cánula** de 14 G de **al menos 7–8 cm** o un dispositivo de descompresión.
- Antiséptico (sin demorar el procedimiento).
- **Set de drenaje pleural** listo para después.

## Paso a paso

1. **Reconocer** el cuadro y avisar al equipo.
2. **Ubicar** el **4.º–5.º espacio intercostal** por delante de la **línea axilar media** (aproximadamente a la altura del pezón en el hombre) o el **2.º espacio** en la línea medioclavicular.
3. **Antisepsia** rápida.
4. **Insertar** la cánula **perpendicular** a la pared, **sobre el borde superior** de la costilla, hasta sentir la pérdida de resistencia y la **salida de aire**.
5. **Retirar la aguja** y dejar la cánula; fijarla.
6. **Reevaluar** presión, saturación y murmullo.
7. **Instalar un drenaje pleural** a continuación.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="descompresion">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: sospecha clínica de neumotórax a tensión izquierdo (hipotensión, ausencia de murmullo, desviación traqueal)"></label><datalist id="dl-indicacion"><option value="sospecha clínica de neumotórax a tensión derecho"><option value="sospecha clínica de neumotórax a tensión izquierdo"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Sitio <input type="text" name="sitio" list="dl-sitio" data-marca="sitio" placeholder="ej.: 4.º–5.º espacio intercostal, por delante de la línea axilar media, izquierdo"></label><datalist id="dl-sitio"><option value="4.º–5.º espacio intercostal, por delante de la línea axilar media, derecho"><option value="4.º–5.º espacio intercostal, por delante de la línea axilar media, izquierdo"><option value="2.º espacio intercostal, línea medioclavicular, derecho"><option value="2.º espacio intercostal, línea medioclavicular, izquierdo"></datalist>
<label class="calc-campo">Aguja <input type="text" name="aguja" list="dl-aguja" data-marca="aguja" placeholder="ej.: cánula 14 G de 8 cm"></label><datalist id="dl-aguja"><option value="cánula 14 G de 8 cm"><option value="cánula 14 G de 7 cm"><option value="dispositivo de descompresión"></datalist>
<label class="calc-campo">Respuesta <input type="text" name="respuesta" list="dl-respuesta" data-marca="respuesta" placeholder="ej.: salida de aire a presión, presión que sube de 70/40 a 110/70"></label><datalist id="dl-respuesta"><option value="salida de aire a presión y mejoría hemodinámica"></datalist>
<label class="calc-campo">A continuación <input type="text" name="final" list="dl-final" data-recordar placeholder="ej.: se instala drenaje pleural"></label><datalist id="dl-final"><option value="se instala drenaje pleural"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza descompresión con aguja por {indicacion}.", "Previa antisepsia, se inserta {aguja} en {sitio}, sobre el borde superior de la costilla.", "Se obtiene {respuesta}.", "?A continuación {final}."], "indicaciones": [{"id": "drenaje", "texto": "Instalar drenaje pleural a continuación."}, {"id": "vigilar", "texto": "Vigilar la cánula: puede acodarse, taparse o salirse y la tensión reaparecer."}, {"id": "rx", "texto": "Radiografía de tórax una vez instalado el drenaje."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza descompresión con aguja por sospecha clínica de neumotórax a tensión izquierdo (hipotensión, ausencia de murmullo, desviación traqueal). Previa antisepsia, se inserta cánula 14 G de 8 cm en 4.º–5.º espacio intercostal, por delante de la línea axilar media, izquierdo, sobre el borde superior de la costilla. Se obtiene salida de aire a presión, presión que sube de 70/40 a 110/70. A continuación se instala drenaje pleural.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **No alcanza la pleura** (pared gruesa) | Aguja más larga, otro sitio o **toracostomía digital** |
| Cánula **acodada**, tapada o desplazada (reaparece la tensión) | Nueva punción o toracostomía; drenaje pleural |
| **Neumotórax iatrogénico** si no había neumotórax | Drenaje pleural |
| Lesión de **vasos** (mamaria interna si se puncionó muy medial, intercostales) | Puncionar en el sitio correcto, sobre el borde superior de la costilla |
| Lesión de **corazón** o **pulmón** | Evitar sitios muy mediales a izquierda |

!!! alarma "Errores frecuentes"
    - **Esperar la radiografía** con un paciente hipotenso.
    - Usar una **cánula corta** (de vía venosa) en un adulto.
    - Puncionar **muy medial** en el 2.º espacio (arteria mamaria interna).
    - Creer que la aguja resuelve el problema y **no instalar el drenaje**.

!!! perla "Para el internado"
    El neumotórax a tensión es un **diagnóstico clínico**. Piénsalo en todo paciente **ventilado** o **traumatizado** que de repente se pone hipotenso y difícil de ventilar.

## Preguntas de repaso

??? repaso "1. Paciente ventilado que se desatura bruscamente, con presión 70/40, murmullo ausente a derecha y presiones de vía aérea altas. ¿Qué haces?"
    Sospecha de **neumotórax a tensión**: **descompresión inmediata** (aguja larga o toracostomía digital) sin esperar la radiografía, y luego **drenaje pleural**.

??? repaso "2. ¿Dónde puncionas según el ATLS 10.ª edición?"
    En el **4.º–5.º espacio intercostal**, justo **por delante de la línea axilar media**. La alternativa es el **2.º espacio** en la línea **medioclavicular**.

??? repaso "3. Descomprimiste con una cánula de vía venosa de 4 cm y no salió aire. ¿Qué pasó?"
    Probablemente **no alcanzó la pleura**: con agujas cortas cerca de 1 de cada 3 falla (Ahmad 2025). Usar una aguja de **≥ 7–8 cm**, cambiar de sitio o hacer **toracostomía digital**.

??? repaso "4. Después de la descompresión el paciente mejora. ¿Terminaste?"
    No: **siempre drenaje pleural** después, porque la cánula puede taparse o salirse.

??? repaso "5. ¿Qué sitio sugiere el metaanálisis de Ahmad para el lado izquierdo?"
    El **2.º espacio intercostal** en la línea medioclavicular, por el riesgo de lesión **cardíaca** en el sitio lateral.

## Referencias

1. American College of Surgeons, Committee on Trauma. *Advanced Trauma Life Support (ATLS): student course manual.* 10.ª ed. Chicago: ACS; 2018.
2. American College of Surgeons, Committee on Trauma. *Advanced Trauma Life Support (ATLS).* 11.ª ed. Chicago: ACS; 2025. [facs.org](https://www.facs.org/for-medical-professionals/news-publications/news-and-articles/acs-brief/september-16-2025-issue/trauma-care-gets-major-upgrade-with-launch-of-atls-11/)
3. Ahmad SJS, Degiannis JR, Head M, et al. Meta-analysis of the optimal needle length and decompression site for tension pneumothorax and consensus recommendations on current ATLS and ETC guidelines. *World J Emerg Surg.* 2025;20:39. doi:[10.1186/s13017-025-00613-7](https://doi.org/10.1186/s13017-025-00613-7)
