# Ecografía en el punto de atención (POCUS)

<div class="ficha" markdown>

**Procedimiento**
Ecografía dirigida, hecha por el médico tratante al lado de la cama, para responder preguntas clínicas concretas: eFAST, pulmón, corazón y vena cava

**Fuentes principales**
Volpicelli 2012 y actualización 2025 (*Intensive Care Med*): recomendaciones internacionales de ecografía pulmonar · Lichtenstein 2008 (*Chest*): protocolo BLUE

**Otras fuentes**
ATLS 11.ª ed. (2025): eFAST · ESC 2025: pericarditis · Ver [insuficiencia respiratoria aguda](../respiratorio/insuficiencia-respiratoria-aguda.md), [trauma y politraumatizado](../cirugia/trauma-y-shock/trauma-y-politraumatizado.md), [pericardiocentesis](pericardiocentesis.md) y [vía periférica guiada por ecografía](via-periferica-ecografia.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **POCUS responde preguntas de sí o no**: ¿hay neumotórax?, ¿hay derrame pericárdico?, ¿hay líquido libre?, ¿el pulmón tiene líneas B?
    - **eFAST** en el trauma: espacio **hepatorrenal**, **esplenorrenal**, **pelvis**, **pericardio** y ambos **pulmones** (neumotórax).
    - **Protocolo BLUE** en la insuficiencia respiratoria: **perfil A** con deslizamiento → asma o EPOC (sensibilidad 89 %, especificidad 97 %); **perfil B** difuso → **edema pulmonar** (97 % y 95 %); sin deslizamiento con **punto pulmón** → **neumotórax** (especificidad 100 %). En total, diagnóstico correcto en el **90,5 %**.
    - **Corazón** (cualitativo): derrame pericárdico y taponamiento, contractilidad global del VI, **VD dilatado** (TEP).
    - **Vena cava inferior**: orienta sobre la presión de la aurícula derecha, pero predice **mal** la respuesta a fluidos por sí sola.
    - **Es un complemento**: no reemplaza al ecocardiograma ni a la TC; depende del entrenamiento.

!!! guia "¿Qué respalda esta página?"
    La ecografía pulmonar tiene **recomendaciones internacionales basadas en evidencia** (2012, actualizadas en 2025). El protocolo **BLUE** es un **estudio observacional** de diagnóstico en UCI. El eFAST forma parte del **ATLS**. La calidad del examen depende del **entrenamiento del operador**: aprende con supervisión y **manda el protocolo de tu servicio.**

## Qué mirar y qué significa

### Pulmón

| Hallazgo | Qué significa |
|---|---|
| **Deslizamiento pleural** presente | Descarta neumotórax en ese punto |
| **Líneas A** (horizontales, repetidas) | Patrón normal (o EPOC, asma, TEP si hay disnea) |
| **Líneas B** (verticales, desde la pleura hasta el fondo, se mueven) | Síndrome intersticial; **≥ 3 por campo, bilaterales y difusas** → edema pulmonar |
| **Ausencia de deslizamiento** + **punto pulmón** | **Neumotórax** |
| **Consolidación** con broncograma aéreo | Neumonía o atelectasia |
| Espacio **anecoico** sobre el diafragma | **Derrame pleural** |

### Corazón (vistas subxifoidea, paraesternal y apical)

| Hallazgo | Qué significa |
|---|---|
| **Derrame pericárdico** con colapso diastólico de la aurícula o el **ventrículo derecho** | **Taponamiento** (con la clínica) |
| VI con contractilidad **muy disminuida** | Shock cardiogénico, miocardiopatía |
| **VD dilatado** (más grande que el VI) | **TEP** masivo, hipertensión pulmonar |
| VI **hiperdinámico** y pequeño | Hipovolemia, sepsis |

### Abdomen (FAST)

- **Hepatorrenal** (Morrison), **esplenorrenal** y **pelvis**: líquido anecoico = **hemoperitoneo** en el trauma.

## Antes de empezar

- Ecógrafo con **transductor** sectorial o convexo (corazón, abdomen, pulmón) y **lineal** (pleura, vasos).
- **Pregunta clínica** clara antes de poner el transductor.
- Limpiar el transductor entre pacientes.

## Paso a paso (enfoque básico)

1. **Definir la pregunta** (¿por qué está en shock?, ¿por qué tiene disnea?).
2. **Pulmón**: transductor en la cara **anterior** del tórax (2.º espacio medioclavicular) para el neumotórax; puntos **laterales y posteriores** para el derrame y la consolidación.
3. **Corazón**: vista **subxifoidea** (la más útil en la urgencia), luego paraesternal y apical.
4. **VCI**: desde la subxifoidea, a 2 cm de la aurícula derecha.
5. **FAST** si hay trauma o sospecha de hemoperitoneo.
6. **Integrar** con la clínica; **repetir** tras las intervenciones.
7. **Registrar** lo que se vio y lo que no se pudo ver.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="pocus">
<span class="gen-titulo">La pregunta</span>
<label class="calc-campo">Pregunta clínica <input type="text" name="pregunta" list="dl-pregunta" data-marca="pregunta" placeholder="ej.: causa de la disnea aguda"></label><datalist id="dl-pregunta"><option value="causa de la disnea aguda"><option value="causa del shock"><option value="líquido libre en trauma (eFAST)"><option value="derrame pericárdico"><option value="neumotórax"></datalist>
<span class="gen-titulo">Los hallazgos</span>
<label class="calc-campo">Pulmón <input type="text" name="pulmon" list="dl-pulmon" data-marca="pulmón" placeholder="ej.: líneas B difusas bilaterales con deslizamiento pleural presente"></label><datalist id="dl-pulmon"><option value="líneas A con deslizamiento pleural (perfil A)"><option value="líneas B difusas bilaterales (perfil B)"><option value="ausencia de deslizamiento con punto pulmón"><option value="consolidación con broncograma aéreo"></datalist>
<label class="calc-campo">Corazón <input type="text" name="corazon" list="dl-corazon" data-marca="corazón" placeholder="ej.: VI con contractilidad visualmente disminuida, sin derrame pericárdico"></label><datalist id="dl-corazon"><option value="contractilidad del VI visualmente normal, sin derrame pericárdico"><option value="derrame pericárdico con colapso de la aurícula derecha"><option value="VD dilatado"></datalist>
<label class="calc-campo">Vena cava inferior <input type="text" name="vci" data-marca="VCI" placeholder="ej.: VCI de 2,3 cm con colapso menor de 50 %"></label>
<label class="calc-campo">Abdomen (FAST) <input type="text" name="abdomen" list="dl-abdomen" data-marca="abdomen" placeholder="ej.: sin líquido libre"></label><datalist id="dl-abdomen"><option value="sin líquido libre"><option value="líquido libre en el espacio hepatorrenal"></datalist>
<label class="calc-campo">Conclusión <input type="text" name="conclusion" data-marca="conclusión" placeholder="ej.: hallazgos compatibles con edema pulmonar cardiogénico"></label>
<script type="application/json" class="gen-def">{"frases": ["Ecografía en el punto de atención para responder: {pregunta}.", "?Pulmón: {pulmon}.", "?Corazón: {corazon}.", "?VCI: {vci}.", "?Abdomen: {abdomen}.", "Conclusión: {conclusion}. Examen dirigido, no reemplaza el estudio formal."], "indicaciones": [{"id": "formal", "texto": "Solicitar estudio formal (ecocardiograma, ecografía o TC) según los hallazgos."}, {"id": "repetir", "texto": "Repetir la evaluación tras las intervenciones (fluidos, diuréticos)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Ecografía en el punto de atención para responder: causa de la disnea aguda. Pulmón: líneas B difusas bilaterales con deslizamiento pleural presente. Corazón: VI con contractilidad visualmente disminuida, sin derrame pericárdico. VCI: VCI de 2,3 cm con colapso menor de 50 %. Abdomen: sin líquido libre. Conclusión: hallazgos compatibles con edema pulmonar cardiogénico. Examen dirigido, no reemplaza el estudio formal.

## Limitaciones

| Limitación | Consecuencia |
|---|---|
| **Operador** con poco entrenamiento | Falsos positivos y negativos |
| **Enfisema subcutáneo**, obesidad | Mala ventana |
| **Bulas** o adherencias pleurales | Falta de deslizamiento sin neumotórax |
| **VCI** en ventilación mecánica o con presión abdominal alta | No interpretable |
| FAST **negativo** en el trauma | No descarta lesiones (retroperitoneo, víscera hueca) |

!!! alarma "Errores frecuentes"
    - Usar la **VCI** como único criterio para dar fluidos.
    - Confiar en un **FAST negativo** en un paciente inestable con trauma de alta energía.
    - Informar como "normal" un órgano que **no se pudo ver bien**.
    - Retrasar un tratamiento obvio por hacer la ecografía.

!!! perla "Para el internado"
    Practica con pacientes **estables**: la vista subxifoidea, el deslizamiento pleural y el espacio de Morrison. Cuando llegue el paciente grave, ya sabrás qué es normal.

## Preguntas de repaso

??? repaso "1. Disnea aguda con líneas B difusas bilaterales y deslizamiento presente. ¿Qué sugiere?"
    **Edema pulmonar** (perfil B del protocolo BLUE: sensibilidad 97 %, especificidad 95 %).

??? repaso "2. Paciente ventilado que se desatura; en la ecografía no hay deslizamiento a la derecha y aparece un punto pulmón. ¿Diagnóstico?"
    **Neumotórax** (el punto pulmón tiene especificidad del **100 %** en el BLUE). Si está inestable: descompresión y drenaje.

??? repaso "3. Shock con derrame pericárdico y colapso diastólico del VD. ¿Qué haces?"
    **Taponamiento**: volumen, sin diuréticos ni presión positiva, y **pericardiocentesis** urgente (salvo disección o rotura: cirugía).

??? repaso "4. ¿Qué zonas revisa el eFAST?"
    **Hepatorrenal**, **esplenorrenal**, **pelvis**, **pericardio** y ambos **pulmones** (neumotórax).

??? repaso "5. VCI de 0,8 cm que colapsa por completo en un paciente en shock séptico. ¿Basta para seguir dando fluidos?"
    Sugiere presiones de llenado bajas, pero la VCI **predice mal** la respuesta a fluidos por sí sola: integrar con la clínica, pruebas dinámicas (elevación pasiva de piernas) y **reevaluar**.

## Referencias

1. Volpicelli G, Elbarbary M, Blaivas M, et al. International evidence-based recommendations for point-of-care lung ultrasound. *Intensive Care Med.* 2012;38(4):577–591. doi:[10.1007/s00134-012-2513-4](https://doi.org/10.1007/s00134-012-2513-4)
2. Volpicelli G, Gargani L, Zieleskiewicz L, et al. International evidence-based recommendations for point-of-care lung ultrasound: 2025 focused update of the 2012 recommendations. *Intensive Care Med.* 2026;52(7):1415–1446. doi:[10.1007/s00134-026-08487-2](https://doi.org/10.1007/s00134-026-08487-2)
3. Lichtenstein DA, Mezière GA. Relevance of lung ultrasound in the diagnosis of acute respiratory failure: the BLUE protocol. *Chest.* 2008;134(1):117–125. doi:[10.1378/chest.07-2800](https://doi.org/10.1378/chest.07-2800)
4. American College of Surgeons, Committee on Trauma. *Advanced Trauma Life Support (ATLS).* 11.ª ed. Chicago: ACS; 2025. [facs.org](https://www.facs.org/for-medical-professionals/news-publications/news-and-articles/acs-brief/september-16-2025-issue/trauma-care-gets-major-upgrade-with-launch-of-atls-11/)
5. Schulz-Menger J, Collini V, Gröschel J, et al. 2025 ESC Guidelines for the management of myocarditis and pericarditis. *Eur Heart J.* 2025;46:3952–4041. doi:[10.1093/eurheartj/ehaf192](https://doi.org/10.1093/eurheartj/ehaf192)
