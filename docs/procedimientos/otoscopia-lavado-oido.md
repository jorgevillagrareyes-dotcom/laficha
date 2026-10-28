# Otoscopía y lavado de oído

<div class="ficha" markdown>

**Procedimiento**
Examen del conducto auditivo y del tímpano, y extracción del tapón de cerumen o de cuerpos extraños inertes

**Fuentes principales**
AAO-HNS 2017: actualización de la guía de cerumen impactado (*Otolaryngol Head Neck Surg*)

**Otras fuentes**
Ver [otitis media crónica y urgencias óticas](../especialidades/otorrinolaringologia/oido-otitis-media-cronica-y-urgencias-oticas.md), [infecciones de vías aéreas superiores](../respiratorio/infecciones-de-vias-aereas-superiores.md) e [hipoacusias](../especialidades/otorrinolaringologia/hipoacusias-sordera-subita-y-tinnitus.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Otoscopía**: traccionar el pabellón **hacia arriba y atrás** en el adulto (hacia abajo y atrás en el lactante) y usar el espéculo más grande que entre.
    - **Tímpano normal**: gris perlado, translúcido, con el **triángulo luminoso** anteroinferior y el mango del martillo visible.
    - **Tratar el cerumen** solo si da **síntomas** o impide ver el tímpano (AAO-HNS 2017).
    - **Opciones**: gotas **cerumenolíticas**, **lavado** con agua tibia o **extracción manual** bajo visión.
    - **No lavar** si hay **perforación** o sospecha, **tubos** de ventilación, cirugía de oído, otitis externa aguda o **pila de botón**.
    - **No usar** cotonitos ni velas de oído.
    - Agua a **temperatura corporal** (~ 37 °C): el agua fría o caliente provoca **vértigo**.

!!! guia "¿Qué respalda esta página?"
    La **guía AAO-HNS 2017** sobre cerumen (basada en evidencia y consenso) define cuándo tratar, las opciones (cerumenolíticos, lavado, extracción manual) y las contraindicaciones. La técnica de otoscopía es **práctica habitual**. **Manda el protocolo de tu servicio.**

## Cuándo lavar y cuándo no

| Situación | Conducta |
|---|---|
| Tapón de cerumen **con síntomas** (hipoacusia, plenitud, dolor) | Tratar: gotas, lavado o extracción manual |
| Cerumen sin síntomas, tímpano visible | **No** tratar |
| **Perforación** timpánica o sospecha, **tubos**, cirugía de oído | **No lavar**: extracción manual por ORL |
| **Otitis externa** aguda | No lavar; tratar la otitis |
| **Pila de botón** | **Extracción urgente** por ORL; ni gotas ni lavado |
| **Insecto** vivo | Inmovilizarlo con aceite o lidocaína, luego extraer |
| Semillas o legumbres | No lavar (se hinchan); extracción manual |

## Paso a paso

### Otoscopía

1. Elegir el espéculo más grande que entre cómodo.
2. **Traccionar** el pabellón hacia **arriba y atrás** (adulto).
3. Introducir el otoscopio con la mano **apoyada** en la cara del paciente (si se mueve, la mano se mueve con él).
4. Revisar el **conducto** y el **tímpano** (color, transparencia, posición, triángulo luminoso, perforaciones).

### Lavado

1. Si el tapón es duro: **ablandar** con gotas (agua, suero, aceite o cerumenolítico) por varios días o 15–30 minutos antes.
2. Proteger con una toalla y un recipiente bajo la oreja.
3. **Agua tibia (~ 37 °C)** en jeringa de 20–50 mL o irrigador.
4. Traccionar el pabellón y dirigir el chorro hacia la **pared posterosuperior** del conducto (no directo al tímpano), con presión suave.
5. **Revisar** con el otoscopio; repetir hasta extraerlo.
6. **Secar** y examinar el tímpano al final.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="oido">
<span class="gen-titulo">El examen</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" data-marca="motivo" placeholder="ej.: hipoacusia y sensación de oído tapado derecho de 1 semana"></label>
<label class="calc-campo">Otoscopía inicial <input type="text" name="otoscopia" data-marca="otoscopía" placeholder="ej.: conducto auditivo derecho ocluido por tapón de cerumen; izquierdo normal, tímpano íntegro"></label>
<label class="calc-campo">Antecedentes <input type="text" name="antecedentes" list="dl-antecedentes" data-marca="antecedentes" data-recordar placeholder="ej.: sin perforación timpánica, cirugía de oído ni tubos de ventilación conocidos"></label><datalist id="dl-antecedentes"><option value="sin perforación timpánica, cirugía de oído ni tubos de ventilación conocidos"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: lavado con agua tibia a 37 °C con jeringa, dirigido a la pared posterosuperior"></label><datalist id="dl-tecnica"><option value="lavado con agua tibia a 37 °C con jeringa, dirigido a la pared posterosuperior"><option value="extracción manual con cureta bajo visión directa"><option value="ablandamiento con gotas y lavado"></datalist>
<label class="calc-campo">Resultado <input type="text" name="resultado" data-marca="resultado" placeholder="ej.: extracción completa del tapón; tímpano íntegro, conducto sin lesiones"></label>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {motivo}; {antecedentes}.", "Otoscopía: {otoscopia}.", "Se realiza {tecnica}.", "Resultado: {resultado}."], "indicaciones": [{"id": "cotonitos", "texto": "No usar cotonitos ni introducir objetos en el oído."}, {"id": "seco", "texto": "Mantener el oído seco por 24 horas."}, {"id": "aviso", "texto": "Consultar si hay dolor, secreción, vértigo o empeora la audición."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con hipoacusia y sensación de oído tapado derecho de 1 semana; sin perforación timpánica, cirugía de oído ni tubos de ventilación conocidos. Otoscopía: conducto auditivo derecho ocluido por tapón de cerumen; izquierdo normal, tímpano íntegro. Se realiza lavado con agua tibia a 37 °C con jeringa, dirigido a la pared posterosuperior. Resultado: extracción completa del tapón; tímpano íntegro, conducto sin lesiones.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Vértigo**, náuseas | Agua a 37 °C; detener |
| **Perforación** timpánica | Detener; ORL; mantener seco |
| **Otitis externa** | Secar; tratar |
| **Lesión** del conducto, sangrado | Técnica suave |

!!! alarma "Errores frecuentes"
    - **Lavar** un oído con perforación o tubos.
    - Usar agua **fría** (vértigo).
    - Dirigir el chorro **directo al tímpano**.
    - **Lavar una pila de botón** o semillas.
    - Recomendar **cotonitos** para la limpieza.

!!! perla "Para el internado"
    Antes de lavar, **pregunta siempre** por perforaciones, cirugías y tubos, y **mira el otro oído**: si el tímpano contralateral es normal, sabes cómo debería verse.

## Preguntas de repaso

??? repaso "1. ¿Cuándo se trata un tapón de cerumen?"
    Cuando da **síntomas** o impide ver el tímpano (AAO-HNS 2017).

??? repaso "2. ¿Hacia dónde traccionas el pabellón en el adulto para la otoscopía?"
    Hacia **arriba y atrás** (en el lactante, hacia abajo y atrás).

??? repaso "3. Niño con pila de botón en el oído. ¿Lavado?"
    **No**: **extracción urgente** por ORL, sin gotas ni lavado.

??? repaso "4. ¿Por qué el agua del lavado debe estar a temperatura corporal?"
    Porque el agua fría o caliente estimula el laberinto y produce **vértigo** (prueba calórica).

??? repaso "5. Paciente con antecedente de perforación timpánica y tapón de cerumen. ¿Qué haces?"
    **No lavar**: extracción **manual** bajo visión (ORL).

## Referencias

1. Schwartz SR, Magit AE, Rosenfeld RM, et al. Clinical Practice Guideline (Update): Earwax (Cerumen Impaction). *Otolaryngol Head Neck Surg.* 2017;156(1 Suppl):S1–S29. doi:[10.1177/0194599816671491](https://doi.org/10.1177/0194599816671491)
