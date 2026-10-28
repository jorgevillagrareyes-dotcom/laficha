# Taponamiento nasal anterior

<div class="ficha" markdown>

**Procedimiento**
Manejo escalonado de la epistaxis anterior: compresión, vasoconstrictor, cauterización y taponamiento

**Fuentes principales**
AAO-HNS 2020: guía de epistaxis (*Otolaryngol Head Neck Surg*)

**Otras fuentes**
Ensayo NoPAC (*Ann Emerg Med* 2021): ácido tranexámico tópico · Ver [epistaxis](../especialidades/otorrinolaringologia/epistaxis.md), [coagulopatías y reversión de anticoagulantes](../hematologia/coagulopatias-cid-y-reversion-de-anticoagulantes.md) y [crisis hipertensiva](../cardiologia/crisis-hipertensiva.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Primero**: compresión **firme y sostenida** del **tercio inferior de la nariz** por **5 minutos o más** (AAO-HNS 2020), sentado e inclinado **hacia adelante**.
    - **Retirar los coágulos** y hacer **rinoscopía anterior** para ubicar el punto (casi siempre el **área de Kiesselbach**).
    - **Vasoconstrictor** tópico (oximetazolina) con anestésico.
    - **Punto visible**: **cauterización con nitrato de plata** solo de ese punto y de **un lado del septum**.
    - **No cede o no se ve el punto**: **taponamiento anterior**; **reabsorbible** si el paciente usa **anticoagulantes o antiagregantes** o tiene una coagulopatía.
    - **Educar** sobre el taponamiento y su retiro; **sin antibiótico** profiláctico de rutina.
    - **Sangrado a la faringe** que no cede con el taponamiento anterior: pensar en sangrado **posterior** → ORL.

!!! guia "¿Qué respalda esta página?"
    La **guía AAO-HNS 2020** (basada en evidencia y consenso) define la compresión, el uso de material reabsorbible en anticoagulados, la educación y la cauterización. El ácido tranexámico tópico tiene un **ensayo aleatorizado** que no mostró beneficio en la urgencia (NoPAC). La técnica coincide con el resumen de [epistaxis](../especialidades/otorrinolaringologia/epistaxis.md). **Manda el protocolo de tu servicio.**

## Cuándo cauterizar, taponar o derivar

| Situación | Conducta |
|---|---|
| Sangrado anterior que cede con compresión | Observar; lubricación y educación |
| **Punto visible** que sangra | **Cauterización** con nitrato de plata (un lado del septum) |
| No cede o no se ve el punto | **Taponamiento anterior** |
| **Anticoagulado**, antiagregado o con coagulopatía | Taponamiento **reabsorbible**; no suspender el anticoagulante de rutina si no hay riesgo vital |
| Sangra a la **faringe** pese al taponamiento anterior | **Taponamiento posterior** (balón, sonda Foley) y **ORL** |
| Epistaxis **masiva**, inestabilidad | ABC, dos vías venosas, hemograma y coagulación, ORL urgente |

## Antes de empezar

- **Protección**: guantes, mascarilla, **protección ocular**, delantal.
- **Luz frontal**, espéculo nasal, aspiración con cánula.
- **Oximetazolina** y **lidocaína** tópica, algodones o torundas.
- **Nitrato de plata** en varilla.
- **Taponamiento**: esponja expansible, gasa vaselinada, balón o material reabsorbible.

## Paso a paso

1. **Sentar** al paciente inclinado **hacia adelante**; **compresión** del tercio inferior de la nariz **≥ 5 minutos** (idealmente 10–15).
2. **Signos vitales**; preguntar por anticoagulantes, antiagregantes y trastornos de la coagulación.
3. Pedir que **se suene** suavemente para retirar coágulos (o aspirar).
4. **Algodón** con oximetazolina y lidocaína en la fosa por **5–10 minutos**.
5. **Rinoscopía anterior**: buscar el punto.
6. **Cauterizar** con nitrato de plata desde la periferia hacia el punto, unos segundos, **solo un lado del septum**.
7. Si no cede: **taponamiento anterior**: introducir la esponja lubricada **paralela al piso de la nariz** (no hacia arriba) e hidratarla con suero para que se expanda.
8. **Revisar la faringe**: sin escurrimiento posterior.
9. **Educar** y programar el retiro.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="taponamiento-nasal">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Cuadro <input type="text" name="indicacion" data-marca="cuadro" placeholder="ej.: epistaxis anterior izquierda de 40 minutos que no cede con compresión por 15 minutos"></label>
<label class="calc-campo">Factores de riesgo <input type="text" name="factores" placeholder="ej.: usuario de aspirina, presión 150/90"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Rinoscopía <input type="text" name="rinoscopia" data-marca="rinoscopía" placeholder="ej.: sangrado activo en área de Kiesselbach izquierda"></label>
<label class="calc-campo">Vasoconstrictor y anestesia <input type="text" name="vasocon" list="dl-vasocon" data-marca="vasoconstrictor" data-recordar placeholder="ej.: algodón con oximetazolina y lidocaína al 2 % por 10 minutos"></label><datalist id="dl-vasocon"><option value="algodón con oximetazolina y lidocaína al 2 % por 10 minutos"></datalist>
<label class="calc-campo">Tratamiento <input type="text" name="tratamiento" list="dl-tratamiento" data-marca="tratamiento" placeholder="ej.: taponamiento anterior con esponja expansible de 8 cm"></label><datalist id="dl-tratamiento"><option value="cauterización con nitrato de plata del punto sangrante"><option value="taponamiento anterior con esponja expansible de 8 cm"><option value="taponamiento anterior con gasa vaselinada"><option value="taponamiento anterior con material reabsorbible"></datalist>
<label class="calc-campo">Resultado <input type="text" name="resultado" data-marca="resultado" placeholder="ej.: cese del sangrado, sin escurrimiento a la faringe"></label>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}.", "?Factores de riesgo: {factores}.", "Rinoscopía anterior: {rinoscopia}. Se aplica {vasocon}.", "Se realiza {tratamiento}. Resultado: {resultado}."], "indicaciones": [{"id": "retiro", "texto": "Retiro del taponamiento en 48–72 horas (si no es reabsorbible)."}, {"id": "cuidados", "texto": "Cabeza elevada, evitar sonarse, esfuerzos y alimentos calientes; estornudar con la boca abierta."}, {"id": "lubricar", "texto": "Tras el retiro: lubricación nasal (vaselina o suero) por 1–2 semanas."}, {"id": "aviso", "texto": "Consultar si vuelve a sangrar, siente sangre en la garganta, fiebre o el taponamiento se desplaza."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con epistaxis anterior izquierda de 40 minutos que no cede con compresión por 15 minutos. Factores de riesgo: usuario de aspirina, presión 150/90. Rinoscopía anterior: sangrado activo en área de Kiesselbach izquierda. Se aplica algodón con oximetazolina y lidocaína al 2 % por 10 minutos. Se realiza taponamiento anterior con esponja expansible de 8 cm. Resultado: cese del sangrado, sin escurrimiento a la faringe.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Resangrado** al retirar | Nueva compresión; cauterización; taponamiento reabsorbible |
| **Perforación septal** (cauterizar ambos lados) | Cauterizar un lado por sesión |
| **Sinusitis**, otitis por el taponamiento | Retirar a tiempo |
| **Síndrome de shock tóxico** (raro) | Fiebre, exantema, hipotensión: retirar y tratar |
| **Desplazamiento** a la faringe (aspiración) | Fijar; revisar |

!!! alarma "Errores frecuentes"
    - Indicar al paciente que **eche la cabeza hacia atrás** (traga sangre, vómitos).
    - Comprimir sobre los **huesos nasales** en vez del ala de la nariz.
    - Introducir el taponamiento **hacia arriba** en vez de paralelo al piso.
    - **Cauterizar ambos lados** del septum en la misma sesión.
    - **Bajar bruscamente** la presión arterial por la epistaxis.

!!! perla "Para el internado"
    La mayoría de las epistaxis se resuelven con **10–15 minutos de compresión bien hecha** (ala nasal contra el septum, inclinado hacia adelante, con reloj). Antes de taponar, **comprime de verdad**.

## Preguntas de repaso

??? repaso "1. ¿Cómo se hace la compresión en la epistaxis?"
    **Firme y sostenida** sobre el **tercio inferior** (blando) de la nariz, **≥ 5 minutos**, sentado e **inclinado hacia adelante** (AAO-HNS 2020).

??? repaso "2. Paciente con anticoagulante oral y epistaxis que no cede. ¿Qué taponamiento usas?"
    **Material reabsorbible** (AAO-HNS 2020).

??? repaso "3. ¿Por qué cauterizas solo un lado del septum?"
    Por el riesgo de **perforación septal** si se cauterizan ambos lados en la misma sesión.

??? repaso "4. Con el taponamiento anterior bien puesto, el paciente sigue escupiendo sangre. ¿Qué piensas?"
    Sangrado **posterior**: taponamiento posterior (balón o sonda Foley) y **ORL**.

??? repaso "5. ¿Se indican antibióticos profilácticos con el taponamiento?"
    **No de rutina** (AAO-HNS 2020).

## Referencias

1. Tunkel DE, Anne S, Payne SC, et al. Clinical practice guideline: nosebleed (epistaxis). *Otolaryngol Head Neck Surg.* 2020;162(1 Suppl):S1–S38. doi:[10.1177/0194599819890327](https://doi.org/10.1177/0194599819890327)
2. Reuben A, Appelboam A, Stevens KN, et al. The use of tranexamic acid to reduce the need for nasal packing in epistaxis (NoPAC): randomized controlled trial. *Ann Emerg Med.* 2021;77(6):631–640. doi:[10.1016/j.annemergmed.2020.12.013](https://doi.org/10.1016/j.annemergmed.2020.12.013)
