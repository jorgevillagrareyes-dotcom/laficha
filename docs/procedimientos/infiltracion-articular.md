# Infiltración articular

<div class="ficha" markdown>

**Procedimiento**
Inyección de corticoide (con o sin anestésico local) en la rodilla o en el espacio subacromial del hombro

**Fuentes principales**
EULAR 2021: terapias intraarticulares · ACR/AF 2019: artrosis de mano, cadera y rodilla

**Otras fuentes**
Courtney y Doherty 2013 · Ver [artrosis y reumatismos de partes blandas](../reumatologia/artrosis-y-reumatismos-de-partes-blandas.md) y [artrocentesis de rodilla](artrocentesis.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Rodilla con artrosis**: el corticoide intraarticular está **recomendado** en las crisis de dolor (ACR/AF 2019, recomendación fuerte); alivia por **semanas**.
    - **Hombro doloroso** (tendinopatía del manguito): la **infiltración subacromial** da alivio de corto plazo para poder hacer el ejercicio.
    - **Fármacos**: **triamcinolona 40 mg** o **metilprednisolona 40–80 mg**, habitualmente con **lidocaína**.
    - **Asepsia** e **informar** al paciente (EULAR 2021); la **ecografía** mejora la precisión cuando el sitio es difícil.
    - **No más de 3–4 al año** en la misma articulación.
    - **Contraindicaciones**: **infección** articular o de la piel, **prótesis**, bacteriemia; precaución en la diabetes (hiperglicemia transitoria).

!!! guia "¿Qué respalda esta página?"
    La indicación en la artrosis de rodilla viene de la **guía ACR/AF 2019**; los principios de la técnica (información, asepsia, guía ecográfica, intervalo entre inyecciones) de las **recomendaciones EULAR 2021**. El número máximo de infiltraciones al año es **opinión de expertos**. **Manda el protocolo de tu servicio.**

## Cuándo infiltrar y cuándo no

| Situación | Conducta |
|---|---|
| **Crisis de dolor** de **artrosis de rodilla** | Corticoide intraarticular |
| **Tendinopatía del manguito** rotador con dolor que impide el ejercicio | Infiltración **subacromial** |
| **Epicondilalgia** | Alivia a corto plazo, pero **aumenta las recaídas** al año: evitar como primera opción |
| Sospecha de **artritis séptica** | **No**: primero artrocentesis diagnóstica |
| **Prótesis** articular | **No** (traumatología) |
| Infección de la piel sobre el sitio | **No** |

## Antes de empezar

- **Explicar** beneficios y riesgos (infección, dolor transitorio, atrofia de la piel, hiperglicemia).
- **Material**: clorhexidina alcohólica, guantes, aguja de 21–23 G, jeringa con el corticoide y la lidocaína.

## Paso a paso

### Rodilla (suprapatelar lateral)

1. Rodilla **extendida** y relajada.
2. Punto **1 cm lateral y 1 cm superior** al borde superolateral de la rótula.
3. **Antisepsia**; puncionar bajo la rótula; **aspirar** primero (si hay derrame, evacuarlo).
4. **Inyectar** sin resistencia; retirar y comprimir.

### Hombro (subacromial posterior)

1. Paciente **sentado**, brazo relajado al lado del cuerpo.
2. Palpar el **ángulo posterolateral del acromion**; el punto está **2–3 cm por debajo** y medial.
3. Dirigir la aguja hacia **adelante**, en dirección a la **apófisis coracoides**, bajo el acromion.
4. **Inyectar** sin resistencia (si hay resistencia, retirar un poco: puede estar en el tendón).

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="infiltracion">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: crisis de dolor por artrosis de rodilla izquierda, refractaria a AINE tópico y ejercicio"></label><datalist id="dl-indicacion"><option value="crisis de dolor por artrosis de rodilla"><option value="tendinopatía del manguito rotador (infiltración subacromial)"><option value="capsulitis adhesiva"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Abordaje <input type="text" name="abordaje" list="dl-abordaje" data-marca="abordaje" placeholder="ej.: suprapatelar lateral"></label><datalist id="dl-abordaje"><option value="suprapatelar lateral"><option value="subacromial posterior"><option value="guiado por ecografía"></datalist>
<label class="calc-campo">Antisepsia <input type="text" name="antisepsia" list="dl-antisepsia" data-marca="antisepsia" data-recordar placeholder="ej.: clorhexidina alcohólica, técnica sin contacto"></label><datalist id="dl-antisepsia"><option value="clorhexidina alcohólica, técnica sin contacto"></datalist>
<label class="calc-campo">Fármaco <input type="text" name="farmaco" list="dl-farmaco" data-marca="fármaco" placeholder="ej.: triamcinolona 40 mg con 4 mL de lidocaína al 1 %"></label><datalist id="dl-farmaco"><option value="triamcinolona 40 mg con lidocaína al 1 %"><option value="metilprednisolona 40 mg con lidocaína al 1 %"><option value="metilprednisolona 80 mg con lidocaína al 1 %"></datalist>
<label class="calc-campo">Al término <input type="text" name="final" list="dl-final" placeholder="ej.: sin complicaciones; alivio inmediato del dolor"></label><datalist id="dl-final"><option value="sin complicaciones"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza infiltración por {indicacion}.", "Abordaje {abordaje}, previa {antisepsia}; se inyecta {farmaco}.", "?Procedimiento {final}."], "indicaciones": [{"id": "reposo", "texto": "Reposo relativo de la articulación por 24–48 horas; luego retomar el ejercicio."}, {"id": "glicemia", "texto": "Si es diabético: controlar la glicemia en los días siguientes (sube de forma transitoria)."}, {"id": "aviso", "texto": "Consultar si aparece fiebre, enrojecimiento o dolor que aumenta después de 48 horas (infección)."}, {"id": "frecuencia", "texto": "No repetir antes de 3 meses en la misma articulación."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza infiltración por crisis de dolor por artrosis de rodilla izquierda, refractaria a AINE tópico y ejercicio. Abordaje suprapatelar lateral, previa clorhexidina alcohólica, técnica sin contacto; se inyecta triamcinolona 40 mg con 4 mL de lidocaína al 1 %. Procedimiento sin complicaciones; alivio inmediato del dolor.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Artritis séptica** (rara) | Fiebre, dolor creciente tras 48 h: artrocentesis y antibiótico |
| **Dolor posinfiltración** (sinovitis por cristales del corticoide) | Hielo, analgesia; cede en 24–48 h |
| **Hiperglicemia** transitoria | Control en el diabético |
| **Atrofia** o despigmentación de la piel | Evitar inyectar en el subcutáneo |
| **Rotura tendinosa** | No inyectar dentro del tendón |

!!! alarma "Errores frecuentes"
    - Infiltrar una **monoartritis** sin descartar infección.
    - Inyectar **contra resistencia** (dentro del tendón).
    - Repetir las infiltraciones **cada pocas semanas**.
    - No advertir al **diabético** sobre la hiperglicemia.

!!! perla "Para el internado"
    La infiltración **no reemplaza el ejercicio**: es una ventana de alivio para que el paciente pueda hacer la kinesioterapia.

## Preguntas de repaso

??? repaso "1. Mujer de 68 años con artrosis de rodilla y crisis de dolor pese a AINE tópico. ¿Qué ofreces?"
    **Infiltración intraarticular** con corticoide (ACR/AF 2019, recomendación fuerte), además de ejercicio y baja de peso.

??? repaso "2. Rodilla roja y caliente con fiebre. ¿Infiltras?"
    **No**: es una sospecha de **artritis séptica**; primero **artrocentesis** diagnóstica.

??? repaso "3. ¿Qué efecto tiene la infiltración en la epicondilalgia?"
    Alivio a corto plazo, pero **más recaídas** al año que la observación.

??? repaso "4. Paciente diabético que se infiltró la rodilla y tiene glicemias de 280 mg/dL al día siguiente. ¿Qué pasó?"
    **Hiperglicemia transitoria** por el corticoide; ajustar el tratamiento por unos días.

??? repaso "5. ¿Cada cuánto se puede repetir una infiltración en la misma articulación?"
    En general, **no más de 3–4 al año** (intervalo de ~ 3 meses).

## Referencias

1. Uson J, Rodriguez-García SC, Castellanos-Moreira R, et al. EULAR recommendations for intra-articular therapies. *Ann Rheum Dis.* 2021;80(10):1299–1305. doi:[10.1136/annrheumdis-2021-220266](https://doi.org/10.1136/annrheumdis-2021-220266)
2. Kolasinski SL, Neogi T, Hochberg MC, et al. 2019 American College of Rheumatology/Arthritis Foundation Guideline for the Management of Osteoarthritis of the Hand, Hip, and Knee. *Arthritis Care Res (Hoboken).* 2020;72(2):149–162. doi:[10.1002/acr.24131](https://doi.org/10.1002/acr.24131)
3. Courtney P, Doherty M. Joint aspiration and injection and synovial fluid analysis. *Best Pract Res Clin Rheumatol.* 2013;27(2):137–169. doi:[10.1016/j.berh.2013.02.005](https://doi.org/10.1016/j.berh.2013.02.005)
