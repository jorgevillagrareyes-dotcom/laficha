# Férulas y yesos

<div class="ficha" markdown>

**Procedimiento**
Inmovilización provisoria con férulas de yeso o fibra de vidrio en la urgencia, y cuidado del paciente enyesado

**Fuentes principales**
Boyd 2009 (*Am Fam Physician*): férulas y yesos, indicaciones y métodos

**Otras fuentes**
Ver [complicaciones de los traumatismos y del yeso](../traumatologia/complicaciones-de-los-traumatismos-y-del-yeso.md), [fractura de muñeca](../traumatologia/fractura-de-muneca-heridas-de-la-mano-y-lesiones-de-nervios.md), [esguinces](../traumatologia/esguinces-luxaciones-y-lesiones-de-partes-blandas.md) y [fracturas del niño](../traumatologia/fracturas-y-disyunciones-del-nino.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **En la urgencia, férula, no yeso circular**: la férula (abierta) permite el **edema** de las primeras 48–72 horas; el yeso circular se reserva para después.
    - **Inmovilizar la articulación de arriba y la de abajo** de la fractura.
    - **Acolchar** las prominencias óseas; **mojar** el yeso en agua **fría o tibia** (no caliente: quemaduras).
    - **Posición funcional** (por ejemplo, tobillo en 90°, muñeca en leve extensión, mano en posición intrínseca plus).
    - **Examen neurovascular antes y después**, y radiografía de control si se manipuló la fractura.
    - **Síndrome compartimental**: **dolor desproporcionado** que aumenta con el estiramiento pasivo → **abrir el yeso hasta la piel** y llamar a traumatología.

!!! guia "¿Qué respalda esta página?"
    La técnica de las férulas se basa en **revisiones prácticas** (Boyd 2009) y en la práctica de traumatología; no hay ensayos que comparen técnicas de colocación. Las complicaciones y su manejo coinciden con el resumen de [complicaciones del yeso](../traumatologia/complicaciones-de-los-traumatismos-y-del-yeso.md). **Manda el protocolo de tu servicio.**

## Qué férula para qué lesión

| Lesión | Férula | Posición |
|---|---|---|
| Fractura de **radio distal**, muñeca | **Antebraquiopalmar** (dorsal o en "pinza de azúcar") | Muñeca en leve extensión; metacarpofalángicas libres |
| Fractura de **antebrazo** o codo | **Braquiopalmar** | Codo en 90°, antebrazo neutro |
| Fractura del **escafoides** (o sospecha) | Antebraquiopalmar con **pulgar incluido** | |
| Fractura de **metacarpianos** | Férula **cubital** o dorsal | **Posición intrínseca plus** (metacarpofalángicas en 70–90°, interfalángicas extendidas) |
| Fractura de **tobillo**, esguince grave | **Suropédica posterior** ± férula en U | Tobillo en **90°** |
| Fractura de **tibia** | **Inguinopédica** | Rodilla en leve flexión |
| Lesión de **dedo** | Férula digital o sindactilia | |

## Antes de empezar

- **Examen neurovascular** y de la piel (heridas: fractura expuesta).
- **Radiografía** y reducción si corresponde (con analgesia o [bloqueo](bloqueos-regionales.md)).
- **Material**: venda de yeso o fibra de vidrio, **algodón** laminado, venda elástica o de gasa, **agua fría o tibia**, guantes.
- **Medir** la férula sobre la extremidad sana (unas 8–10 capas de yeso en el adulto).

## Paso a paso

1. **Posicionar** la extremidad (un ayudante la mantiene).
2. **Acolchar** con algodón, más en las prominencias óseas, sin arrugas.
3. **Mojar** la férula en agua fría o tibia, escurrir y alisar.
4. **Aplicar** la férula sobre el algodón y **modelarla** con las palmas (no con los dedos: puntos de presión).
5. **Fijar** con venda (de distal a proximal), **sin apretar**.
6. **Mantener la posición** hasta que fragüe (unos minutos); el yeso se calienta al fraguar.
7. **Examen neurovascular** de nuevo y **educar** sobre los signos de alarma.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="ferulas">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Diagnóstico <input type="text" name="indicacion" data-marca="diagnóstico" placeholder="ej.: fractura de radio distal izquierdo no desplazada"></label>
<label class="calc-campo">Examen neurovascular previo <input type="text" name="neuro" data-marca="examen previo" placeholder="ej.: llene capilar &lt; 2 s, sensibilidad y motilidad de dedos conservadas"></label>
<span class="gen-titulo">La inmovilización</span>
<label class="calc-campo">Tipo <input type="text" name="tipo" list="dl-tipo" data-marca="tipo" placeholder="ej.: férula antebraquiopalmar dorsal de yeso"></label><datalist id="dl-tipo"><option value="férula antebraquiopalmar dorsal de yeso"><option value="férula braquiopalmar"><option value="férula de yeso posterior de pierna (suropédica)"><option value="férula en U de tobillo"><option value="férula de dedo"></datalist>
<label class="calc-campo">Posición <input type="text" name="posicion" data-marca="posición" placeholder="ej.: muñeca en leve extensión, metacarpofalángicas libres"></label>
<label class="calc-campo">Acolchado <input type="text" name="acolchado" list="dl-acolchado" data-marca="acolchado" data-recordar placeholder="ej.: algodón laminado en 2 capas sobre prominencias óseas"></label><datalist id="dl-acolchado"><option value="algodón laminado en 2 capas sobre prominencias óseas"></datalist>
<label class="calc-campo">Examen posterior <input type="text" name="neuro2" list="dl-neuro2" data-marca="examen posterior" data-recordar placeholder="ej.: llene capilar &lt; 2 s, sensibilidad conservada"></label><datalist id="dl-neuro2"><option value="llene capilar &lt; 2 s, sensibilidad conservada"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}. Examen neurovascular previo: {neuro}.", "Se instala {tipo}, con {acolchado}, en posición de {posicion}.", "Examen neurovascular posterior: {neuro2}."], "indicaciones": [{"id": "elevar", "texto": "Mantener la extremidad elevada sobre el nivel del corazón las primeras 48–72 horas."}, {"id": "mover", "texto": "Mover los dedos (o el pie) varias veces al día."}, {"id": "seco", "texto": "Mantener la férula seca; no introducir objetos bajo el yeso."}, {"id": "alarma", "texto": "Consultar de inmediato si hay dolor que aumenta, adormecimiento, dedos fríos, pálidos o morados, o no puede moverlos."}, {"id": "control", "texto": "Control por traumatología según indicación."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con fractura de radio distal izquierdo no desplazada. Examen neurovascular previo: llene capilar < 2 s, sensibilidad y motilidad de dedos conservadas. Se instala férula antebraquiopalmar dorsal de yeso, con algodón laminado en 2 capas sobre prominencias óseas, en posición de muñeca en leve extensión, metacarpofalángicas libres. Examen neurovascular posterior: llene capilar < 2 s, sensibilidad conservada.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Síndrome compartimental** (dolor desproporcionado, al estiramiento pasivo) | **Abrir el yeso y el vendaje hasta la piel**, elevar a la altura del corazón; fasciotomía si persiste |
| **Úlceras por presión** bajo el yeso | Acolchado adecuado; consultar si hay dolor localizado o mal olor |
| **Lesión del nervio peroneo** (yeso apretado en la cabeza del peroné) | Acolchar; pie caído = revisar |
| **Quemadura** por el fraguado | Agua fría o tibia; no envolver el yeso fresco en almohadas |
| **TEV** en la inmovilización de la extremidad inferior | Evaluar tromboprofilaxis según el riesgo |
| **Rigidez** articular | Movilizar lo que no está inmovilizado |

!!! alarma "Errores frecuentes"
    - Poner un **yeso circular** en una lesión aguda con edema.
    - **Apretar** la venda.
    - Modelar con la **punta de los dedos**.
    - **No educar** sobre los signos de alarma.
    - Atribuir a "dolor de la fractura" un **dolor que aumenta** bajo el yeso.

!!! perla "Para el internado"
    Bajo un yeso, **el dolor que aumenta es una alarma**, no un síntoma esperable. Ante la duda, **abre el yeso hasta la piel**.

## Preguntas de repaso

??? repaso "1. ¿Por qué en la urgencia se usa férula y no yeso circular?"
    Porque la férula permite el **edema** de las primeras 48–72 horas; un yeso circular puede producir un **síndrome compartimental**.

??? repaso "2. Paciente con férula por fractura de antebrazo que consulta por dolor creciente y dolor al extender los dedos. ¿Qué haces?"
    Sospecha de **síndrome compartimental**: **abrir el yeso y el vendaje hasta la piel**, elevar a la altura del corazón y llamar a traumatología (fasciotomía si persiste).

??? repaso "3. ¿En qué posición se inmoviliza una fractura de metacarpiano?"
    **Posición intrínseca plus**: metacarpofalángicas en **70–90°** de flexión e interfalángicas **extendidas**.

??? repaso "4. ¿Con qué agua mojas el yeso y por qué?"
    **Fría o tibia**: el yeso libera calor al fraguar y el agua caliente puede producir **quemaduras**.

??? repaso "5. Paciente con yeso inguinopédico que presenta pie caído. ¿Qué piensas?"
    **Compresión del nervio peroneo** en la cabeza del peroné: revisar y acolchar o abrir el yeso.

## Referencias

1. Boyd AS, Benjamin HJ, Asplund C. Splints and casts: indications and methods. *Am Fam Physician.* 2009;80(5):491–499. [aafp.org](https://www.aafp.org/pubs/afp/issues/2009/0901/p491.html)
