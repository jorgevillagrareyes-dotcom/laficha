# Reducción de luxación de hombro

<div class="ficha" markdown>

**Procedimiento**
Reducción cerrada de la luxación anterior del hombro en la urgencia

**Fuentes principales**
Gonai 2023 (*Ann Emerg Med*): metaanálisis en red de los métodos de reducción · Cochrane 2011 (Wakai): lidocaína intraarticular frente a sedación

**Otras fuentes**
Ver [esguinces y luxaciones](../traumatologia/esguinces-luxaciones-y-lesiones-de-partes-blandas.md) y [bloqueos regionales simples](bloqueos-regionales.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Luxación anterior** en **> 90 %**: hombro en **charretera**, brazo en abducción y rotación externa.
    - **Antes de reducir**: examinar el **nervio axilar** (sensibilidad del deltoides) y el pulso, y tomar **radiografía** (fractura asociada).
    - **Analgesia**: la **lidocaína intraarticular** tiene el **mismo éxito** que la sedación EV, con **menos efectos adversos** y menos tiempo en urgencia (Cochrane 2011).
    - **Técnicas suaves** (sin tracción violenta): **FARES**, **rotación externa**, Cunningham, Stimson, Davos. En el metaanálisis en red, **FARES** fue la **menos dolorosa** y, junto a Davos, la de mejor éxito (Gonai 2023).
    - **Evitar Kocher** con fuerza (fracturas) y la tracción con el pie en la axila.
    - **Después**: repetir el **examen neurovascular**, radiografía de control, **cabestrillo** y derivar a traumatología.

!!! guia "¿Qué respalda esta página?"
    Hay **ensayos aleatorizados** y **metaanálisis** sobre las técnicas de reducción (Gonai 2023: 14 ensayos, 1.189 pacientes) y sobre la analgesia (Cochrane 2011: 5 ensayos). La evaluación previa y el seguimiento son **práctica habitual** y coinciden con el resumen de [traumatología](../traumatologia/esguinces-luxaciones-y-lesiones-de-partes-blandas.md). **Manda el protocolo de tu servicio.**

## Cuándo reducir en urgencia y cuándo no

| Situación | Conducta |
|---|---|
| Luxación anterior **sin fractura** (o con fractura del troquíter) | **Reducción cerrada** |
| Fractura del **cuello humeral** asociada | **No**: traumatología (riesgo de desplazar la fractura) |
| **Luxación posterior** (convulsión, electrocución) | Traumatología |
| Luxación **de días** (inveterada) | Traumatología |
| **Déficit** neurovascular | Reducir pronto y reevaluar; traumatología |

## Antes de empezar

- **Radiografía** (AP y axial o escapular en Y).
- **Examen neurovascular** documentado.
- **Analgesia**: lidocaína intraarticular (20 mL al 1 % por vía lateral, en el surco bajo el acromion) o sedoanalgesia EV con monitoreo.

## Paso a paso

### Rotación externa

1. Paciente **acostado** o sentado, codo en **90°** pegado al cuerpo.
2. **Rotar externamente** el antebrazo **muy lento**, deteniéndose si hay espasmo, hasta ~ 90°.
3. Con frecuencia reduce sola; si no, **aducir** levemente y elevar.

### FARES

1. Paciente **acostado**, brazo extendido al lado del cuerpo, antebrazo en posición neutra.
2. **Tracción suave** del brazo con **oscilaciones verticales** pequeñas y rápidas (2–3 por segundo).
3. Mientras oscila, **abducir** lentamente; a ~ 90° agregar **rotación externa**.
4. Suele reducir entre los **120°** de abducción.

### Cunningham (sentado, sin sedación)

1. Paciente **sentado**, codo flexionado, mano del paciente en el hombro del operador.
2. **Masajear** el bíceps, el deltoides y el trapecio, pidiendo que **relaje** los hombros y se enderece.

### Al terminar

1. **Examen neurovascular** de nuevo.
2. **Radiografía** de control.
3. **Cabestrillo** y derivación.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="luxacion-hombro">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Diagnóstico <input type="text" name="indicacion" data-marca="diagnóstico" placeholder="ej.: luxación anterior de hombro derecho, primer episodio, confirmada con radiografía sin fractura"></label>
<label class="calc-campo">Examen neurovascular previo <input type="text" name="neuro" data-marca="examen previo" placeholder="ej.: sensibilidad del deltoides conservada, pulso radial presente"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Analgesia <input type="text" name="analgesia" list="dl-analgesia" data-marca="analgesia" placeholder="ej.: lidocaína intraarticular 20 mL al 1 %"></label><datalist id="dl-analgesia"><option value="lidocaína intraarticular 20 mL al 1 %"><option value="sedoanalgesia con fentanilo y midazolam"><option value="sin analgesia (FARES)"></datalist>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: maniobra de rotación externa"></label><datalist id="dl-tecnica"><option value="maniobra de rotación externa"><option value="maniobra FARES"><option value="maniobra de Cunningham"><option value="maniobra de Stimson"><option value="tracción-contratracción"></datalist>
<label class="calc-campo">Examen posterior <input type="text" name="neuro2" list="dl-neuro2" data-marca="examen posterior" data-recordar placeholder="ej.: sensibilidad del deltoides y pulso radial conservados"></label><datalist id="dl-neuro2"><option value="sensibilidad del deltoides y pulso radial conservados"></datalist>
<label class="calc-campo">Radiografía de control <input type="text" name="rx" list="dl-rx" data-recordar placeholder="ej.: reducción concéntrica sin fractura"></label><datalist id="dl-rx"><option value="reducción concéntrica sin fractura"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}.", "Examen neurovascular previo: {neuro}.", "Con {analgesia}, se reduce con {tecnica}, con éxito.", "Examen posterior: {neuro2}.", "?Radiografía de control: {rx}. Se inmoviliza con cabestrillo."], "indicaciones": [{"id": "cabestrillo", "texto": "Cabestrillo por 1–3 semanas según la edad; luego kinesioterapia."}, {"id": "analgesia", "texto": "Analgesia (paracetamol, AINE) y hielo local."}, {"id": "control", "texto": "Control por traumatología (recurrencia alta en jóvenes)."}, {"id": "aviso", "texto": "Consultar si hay adormecimiento del hombro o el brazo, debilidad o nuevo dolor intenso."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con luxación anterior de hombro derecho, primer episodio, confirmada con radiografía sin fractura. Examen neurovascular previo: sensibilidad del deltoides conservada, pulso radial presente. Con lidocaína intraarticular 20 mL al 1 %, se reduce con maniobra de rotación externa, con éxito. Examen posterior: sensibilidad del deltoides y pulso radial conservados. Radiografía de control: reducción concéntrica sin fractura. Se inmoviliza con cabestrillo.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Lesión del nervio axilar** (anestesia del deltoides) | Documentar antes y después; control por traumatología |
| **Fractura** (troquíter, cuello) por maniobras bruscas | Técnicas suaves; radiografía previa |
| **Lesión vascular** (adulto mayor) | Pulso; ecografía o angio-TC si hay duda |
| **Recurrencia** (muy alta en jóvenes) | Derivar a traumatología |
| Sedación: depresión respiratoria | Monitoreo; bolsa-mascarilla |

!!! alarma "Errores frecuentes"
    - Reducir **sin radiografía** ni examen neurovascular previos.
    - Usar **fuerza** o maniobras violentas (Kocher brusco, pie en la axila).
    - **No repetir** el examen neurovascular después.
    - Pasar por alto una **luxación posterior** tras una convulsión.

!!! perla "Para el internado"
    La mejor maniobra es la que se hace **lento y con el paciente relajado**. Hablarle, explicarle y no apurar el músculo vale más que la fuerza.

## Preguntas de repaso

??? repaso "1. ¿Qué examinas antes de reducir un hombro luxado?"
    El **nervio axilar** (sensibilidad del deltoides) y el **pulso**, y pides una **radiografía** para descartar una fractura.

??? repaso "2. ¿Lidocaína intraarticular o sedación EV?"
    Igual éxito; la **lidocaína intraarticular** tiene **menos efectos adversos** y menos tiempo en urgencia (Cochrane 2011).

??? repaso "3. ¿Qué técnica fue la menos dolorosa en el metaanálisis en red de 2023?"
    **FARES**, que junto a **Davos** tuvo los mejores índices de éxito (Gonai 2023).

??? repaso "4. Paciente epiléptico con dolor de hombro tras una crisis, brazo en rotación interna y no puede rotar hacia afuera. ¿Qué sospechas?"
    **Luxación posterior** del hombro: radiografía con proyección axial y traumatología.

??? repaso "5. Tras reducir, el paciente tiene anestesia en la cara lateral del hombro. ¿Qué pasó?"
    **Lesión del nervio axilar**: documentar y derivar a traumatología (la mayoría se recupera).

## Referencias

1. Gonai S, Yoneoka D, Miyoshi T, et al. A Systematic Review With Pairwise and Network Meta-analysis of Closed Reduction Methods for Anterior Shoulder Dislocation. *Ann Emerg Med.* 2023;81(4):453–465. doi:[10.1016/j.annemergmed.2022.10.020](https://doi.org/10.1016/j.annemergmed.2022.10.020)
2. Wakai A, O'Sullivan R, McCabe A. Intra-articular lignocaine versus intravenous analgesia with or without sedation for manual reduction of acute anterior shoulder dislocation in adults. *Cochrane Database Syst Rev.* 2011;(4):CD004919. doi:[10.1002/14651858.CD004919.pub2](https://doi.org/10.1002/14651858.CD004919.pub2)
