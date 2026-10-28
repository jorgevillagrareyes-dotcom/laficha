# Biopsia de piel con punch

<div class="ficha" markdown>

**Procedimiento**
Toma de un cilindro de piel de espesor completo con un sacabocados (punch) para estudio histológico

**Fuentes principales**
Zuber 2002 (*Am Fam Physician*): biopsia de piel con punch

**Otras fuentes**
Ver [tumores cutáneos: melanoma y carcinomas](../especialidades/dermatologia/tumores-cutaneos-melanoma-carcinomas-y-lesiones-benignas.md), [psoriasis](../especialidades/dermatologia/psoriasis-liquen-plano-pitiriasis-rosada-y-eritrodermia.md), [sutura](sutura.md) y [bloqueos regionales simples](bloqueos-regionales.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Para qué**: diagnóstico de **dermatosis inflamatorias** y de **tumores** pequeños; toma **epidermis, dermis y algo de hipodermis**.
    - **Tamaño**: habitualmente **3–4 mm**.
    - **Dónde**: en lesiones inflamatorias, la zona **más representativa** o el **borde activo**; en ampollas, el borde (y piel perilesional para inmunofluorescencia).
    - **Sospecha de melanoma**: preferir la **biopsia escisional** con márgenes estrechos; el punch puede no representar la lesión.
    - **Técnica**: estirar la piel **perpendicular a las líneas de tensión**, rotar el punch hasta la hipodermis, levantar con pinza sin aplastar y cortar la base.
    - **Muestra en formalina**, rotulada y con los **datos clínicos** y la sospecha.

!!! guia "¿Qué respalda esta página?"
    No hay guías formales sobre la técnica: se basa en **revisiones prácticas** (Zuber 2002) y práctica de dermatología. La conducta ante la sospecha de melanoma coincide con el resumen de [tumores cutáneos](../especialidades/dermatologia/tumores-cutaneos-melanoma-carcinomas-y-lesiones-benignas.md). **Manda el protocolo de tu servicio.**

## Cuándo hacerla y cuándo no

| Situación | Conducta |
|---|---|
| **Dermatosis** de diagnóstico incierto | Punch de 4 mm en la zona representativa |
| **Tumor** pequeño (< 4–6 mm) | Punch que incluya toda la lesión (escisional) |
| **Sospecha de melanoma** | **Biopsia escisional** con margen estrecho (no punch parcial) |
| Lesión en **cara**, párpados, genitales, cerca de estructuras nobles | Considerar derivar |
| Infección local, coagulopatía grave | Postergar |

## Paso a paso

1. **Consentimiento**; elegir y **marcar** el sitio.
2. **Antisepsia** y **anestesia** local (lidocaína con epinefrina, salvo contraindicación).
3. **Estirar la piel** en dirección **perpendicular** a las líneas de tensión (al soltarla, el orificio queda ovalado y se cierra mejor).
4. **Rotar** el punch con presión firme hasta llegar a la **hipodermis** (se siente que "cede").
5. **Levantar** el cilindro con una pinza fina o una aguja **sin aplastar**, y **cortar la base** con tijera.
6. **Hemostasia** por compresión; **cierre** con 1 punto (o segunda intención si es pequeño).
7. **Muestra** en **formalina**, rotulada, con los datos clínicos.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="punch">
<span class="gen-titulo">La lesión</span>
<label class="calc-campo">Lesión <input type="text" name="lesion" data-marca="lesión" placeholder="ej.: placa eritematodescamativa de 2 cm en el antebrazo izquierdo, de 3 meses de evolución"></label>
<label class="calc-campo">Sospecha <input type="text" name="diagnostico" data-marca="sospecha" placeholder="ej.: psoriasis frente a dermatitis"></label>
<span class="gen-titulo">La biopsia</span>
<label class="calc-campo">Anestesia <input type="text" name="anestesia" list="dl-anestesia" data-marca="anestesia" data-recordar placeholder="ej.: lidocaína al 1 % con epinefrina"></label><datalist id="dl-anestesia"><option value="lidocaína al 1 % con epinefrina"><option value="lidocaína al 1 %"></datalist>
<label class="calc-campo">Punch <input type="text" name="punch" list="dl-punch" data-marca="punch" placeholder="ej.: punch de 4 mm en el borde activo de la lesión"></label><datalist id="dl-punch"><option value="punch de 3 mm"><option value="punch de 4 mm en el borde activo de la lesión"><option value="punch de 4 mm en la zona más representativa"></datalist>
<label class="calc-campo">Cierre <input type="text" name="cierre" list="dl-cierre" data-marca="cierre" placeholder="ej.: un punto simple de nylon 4-0"></label><datalist id="dl-cierre"><option value="un punto simple de nylon 4-0"><option value="un punto simple de nylon 5-0"><option value="cierre por segunda intención"></datalist>
<label class="calc-campo">Muestra <input type="text" name="muestra" list="dl-muestra" data-marca="muestra" data-recordar placeholder="ej.: en formalina, rotulada y enviada a anatomía patológica con los datos clínicos"></label><datalist id="dl-muestra"><option value="en formalina, rotulada y enviada a anatomía patológica con los datos clínicos"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza biopsia de piel por punch de {lesion}; sospecha clínica: {diagnostico}.", "Previa antisepsia y anestesia local con {anestesia}, se toma {punch}. Cierre con {cierre}.", "Muestra {muestra}."], "indicaciones": [{"id": "curacion", "texto": "Mantener el apósito 24–48 horas; luego lavar con agua y jabón."}, {"id": "puntos", "texto": "Retiro de puntos en 7–14 días según la zona (cara 5–7 días)."}, {"id": "resultado", "texto": "Control con el resultado de la biopsia."}, {"id": "aviso", "texto": "Consultar si hay sangrado que no cede con compresión, pus o fiebre."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza biopsia de piel por punch de placa eritematodescamativa de 2 cm en el antebrazo izquierdo, de 3 meses de evolución; sospecha clínica: psoriasis frente a dermatitis. Previa antisepsia y anestesia local con lidocaína al 1 % con epinefrina, se toma punch de 4 mm en el borde activo de la lesión. Cierre con un punto simple de nylon 4-0. Muestra en formalina, rotulada y enviada a anatomía patológica con los datos clínicos.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Sangrado** | Compresión; punto |
| **Infección** | Curación; antibiótico si hay celulitis |
| **Cicatriz** | Elegir el sitio; cerrar siguiendo las líneas de tensión |
| **Muestra no diagnóstica** (aplastada, superficial, sitio no representativo) | Nueva biopsia en mejor sitio |

!!! alarma "Errores frecuentes"
    - **Aplastar** la muestra con la pinza.
    - Tomar la biopsia de una zona **excoriada** o con sobreinfección.
    - Hacer un **punch parcial** de una lesión sospechosa de **melanoma**.
    - Enviar la muestra **sin datos clínicos** ni sospecha.

!!! perla "Para el internado"
    El patólogo ve **un cilindro de 4 mm**: escribir en la solicitud **qué lesión es, cuánto tiempo lleva y qué sospechas** cambia mucho el informe.

## Preguntas de repaso

??? repaso "1. ¿Qué tamaño de punch se usa habitualmente para una dermatosis?"
    **4 mm** (3–4 mm).

??? repaso "2. Lesión pigmentada asimétrica que creció en meses. ¿Punch parcial?"
    **No**: sospecha de **melanoma** → **biopsia escisional** con margen estrecho.

??? repaso "3. ¿Por qué se estira la piel perpendicular a las líneas de tensión antes de usar el punch?"
    Para que el orificio quede **ovalado** en el sentido de las líneas y **cierre mejor**.

??? repaso "4. ¿Dónde tomas la biopsia de una dermatosis inflamatoria?"
    En la zona **más representativa** o el **borde activo**, evitando las zonas excoriadas.

??? repaso "5. ¿En qué medio envías la muestra para histología?"
    En **formalina**, rotulada y con los **datos clínicos**.

## Referencias

1. Zuber TJ. Punch biopsy of the skin. *Am Fam Physician.* 2002;65(6):1155–1158. [aafp.org](https://www.aafp.org/pubs/afp/issues/2002/0315/p1155.html)
