# Maniobra de Epley

<div class="ficha" markdown>

**Procedimiento**
Diagnóstico del vértigo posicional paroxístico benigno (VPPB) del canal posterior con la prueba de Dix-Hallpike y tratamiento con la maniobra de reposición de Epley

**Fuentes principales**
AAO-HNS 2017: vértigo posicional paroxístico benigno (actualización) · GRACE-3 2023 (SAEM): mareo y vértigo agudo en urgencias

**Otras fuentes**
Ver [vértigo periférico y central](../neurologia/vertigo.md), [caídas](../geriatria/caidas-hipotension-ortostatica-y-fractura-de-cadera.md) y [examen neurológico y NIHSS](nihss.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **VPPB**: vértigo de **segundos** (< 1 minuto) gatillado por **cambios de posición** de la cabeza (acostarse, girar en la cama, mirar hacia arriba); examen neurológico **normal**.
    - **Diagnóstico** (canal posterior, el más frecuente): **Dix-Hallpike** positivo con nistagmo **torsional** hacia el oído de abajo y **vertical hacia arriba**, con **latencia**, de **< 1 minuto** y **fatigable**.
    - **Tratamiento**: **maniobra de Epley** (recomendación fuerte AAO-HNS 2017); se puede hacer en APS o en la urgencia.
    - **No** se recomiendan: **restricciones posturales** después, **antivertiginosos** de rutina ni **imágenes** en el VPPB típico (AAO-HNS 2017).
    - **Signos de alarma** (nistagmo vertical puro hacia abajo, sin latencia, que no fatiga, otros signos neurológicos): **VPPB atípico o central** → neuroimagen.

!!! guia "¿Qué respalda esta página?"
    La **guía AAO-HNS 2017** (basada en ensayos aleatorizados) recomienda el Dix-Hallpike para el diagnóstico y la maniobra de reposición para el tratamiento, y desaconseja las restricciones posturales, los fármacos de rutina y las imágenes. **GRACE-3 2023** ubica el VPPB dentro del enfoque del mareo en urgencias. Coincide con el resumen de [vértigo](../neurologia/vertigo.md). **Manda el protocolo de tu servicio.**

## Cuándo hacerla y cuándo no

| Situación | Conducta |
|---|---|
| Vértigo posicional de segundos con **Dix-Hallpike típico** | **Epley** del lado positivo |
| Nistagmo **horizontal** al girar en decúbito (canal lateral) | Otras maniobras (Lempert o Gufoni); ORL |
| Vértigo **continuo** por días, nistagmo espontáneo | **No es VPPB**: síndrome vestibular agudo → HINTS (ver [vértigo](../neurologia/vertigo.md)) |
| Hallazgos atípicos o **déficit neurológico** | Neuroimagen; no atribuir a VPPB |
| **Cervicopatía** grave, inestabilidad cervical, estenosis carotídea grave | Precaución; mesa basculante o alternativas |

## Paso a paso

### Dix-Hallpike (derecho)

1. Paciente **sentado** en la camilla; explicar que puede marearse.
2. **Girar la cabeza 45°** hacia la **derecha**.
3. **Acostarlo** rápido con la cabeza **colgando 20–30°** bajo el borde de la camilla.
4. Observar los ojos **30–60 segundos**: nistagmo **torsional** (polo superior hacia el oído derecho) y **vertical hacia arriba**, con latencia de segundos y que se agota en < 1 minuto.
5. Sentarlo y repetir hacia la izquierda.

### Epley (derecho)

1. Desde la posición de **Dix-Hallpike derecho**, esperar **30 segundos** (o hasta que cese el nistagmo).
2. **Girar la cabeza 90°** hacia la **izquierda** (queda 45° a la izquierda), manteniendo la extensión, **30 segundos**.
3. **Rotar el cuerpo** sobre el lado **izquierdo** y girar la cabeza otros **90°**, mirando hacia el **suelo**, **30 segundos**.
4. **Sentarlo** con la cabeza levemente flexionada.
5. **Repetir** si es necesario y controlar con un nuevo Dix-Hallpike.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="epley">
<span class="gen-titulo">El diagnóstico</span>
<label class="calc-campo">Cuadro <input type="text" name="cuadro" data-marca="cuadro" placeholder="ej.: vértigo de segundos al girar en la cama hacia la derecha, de 3 días"></label>
<label class="calc-campo">Dix-Hallpike <input type="text" name="dixhallpike" list="dl-dixhallpike" data-marca="Dix-Hallpike" placeholder="ej.: positivo a derecha: nistagmo torsional geotrópico y vertical hacia arriba, con latencia de 5 segundos, duración de 20 segundos y fatigable"></label><datalist id="dl-dixhallpike"><option value="positivo a derecha"><option value="positivo a izquierda"><option value="negativo bilateral"></datalist>
<label class="calc-campo">Examen neurológico <input type="text" name="neuro" list="dl-neuro" data-marca="examen neurológico" data-recordar placeholder="ej.: sin otros hallazgos"></label><datalist id="dl-neuro"><option value="sin otros hallazgos"></datalist>
<span class="gen-titulo">La maniobra</span>
<label class="calc-campo">Maniobra <input type="text" name="maniobra" list="dl-maniobra" data-marca="maniobra" placeholder="ej.: maniobra de Epley derecha"></label><datalist id="dl-maniobra"><option value="maniobra de Epley derecha"><option value="maniobra de Epley izquierda"></datalist>
<label class="calc-campo">Ciclos <input type="text" name="ciclos" list="dl-ciclos" data-marca="n.° de ciclos" placeholder="ej.: 2 ciclos"></label><datalist id="dl-ciclos"><option value="1 ciclo"><option value="2 ciclos"></datalist>
<label class="calc-campo">Resultado <input type="text" name="resultado" list="dl-resultado" placeholder="ej.: Dix-Hallpike de control negativo"></label><datalist id="dl-resultado"><option value="Dix-Hallpike de control negativo"><option value="persisten síntomas leves"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {cuadro}. Dix-Hallpike: {dixhallpike}. Examen neurológico {neuro}.", "Diagnóstico: vértigo posicional paroxístico benigno del canal posterior.", "Se realiza {maniobra}, {ciclos}.", "?Resultado: {resultado}."], "indicaciones": [{"id": "restricciones", "texto": "No requiere restricciones posturales después de la maniobra."}, {"id": "farmacos", "texto": "Evitar antivertiginosos de rutina (solo por poco tiempo si hay náuseas intensas)."}, {"id": "caidas", "texto": "Precaución con las caídas (adulto mayor) los primeros días."}, {"id": "control", "texto": "Control en 1 mes; consultar antes si aparecen síntomas neurológicos o el vértigo se vuelve continuo."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con vértigo de segundos al girar en la cama hacia la derecha, de 3 días. Dix-Hallpike: positivo a derecha: nistagmo torsional geotrópico y vertical hacia arriba, con latencia de 5 segundos, duración de 20 segundos y fatigable. Examen neurológico sin otros hallazgos. Diagnóstico: vértigo posicional paroxístico benigno del canal posterior. Se realiza maniobra de Epley derecha, 2 ciclos. Resultado: Dix-Hallpike de control negativo.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Náuseas**, vómitos | Explicar; antiemético si es necesario |
| **Conversión** a VPPB de otro canal | Reevaluar; ORL |
| **Caídas** al levantarse | Sentarlo con calma, acompañar |
| Recurrencia | Repetir la maniobra; enseñar ejercicios |

!!! alarma "Errores frecuentes"
    - Diagnosticar VPPB con un vértigo **continuo**.
    - Pedir **TC** en un VPPB típico.
    - Indicar **betahistina** o antivertiginosos por semanas.
    - Dar **restricciones posturales** (dormir sentado, collarín) después de la maniobra.
    - Pasar por alto un **nistagmo central** (vertical hacia abajo, sin latencia, que no fatiga).

!!! perla "Para el internado"
    El VPPB es una de las pocas causas de vértigo que **puedes resolver en la consulta en 5 minutos**. Practica la maniobra con un compañero.

## Preguntas de repaso

??? repaso "1. Vértigo de 20 segundos al acostarse, examen neurológico normal. ¿Qué prueba haces?"
    **Dix-Hallpike**: busca un **VPPB del canal posterior**.

??? repaso "2. ¿Cómo es el nistagmo del VPPB del canal posterior derecho?"
    **Torsional** (polo superior hacia el oído derecho, el de abajo) y **vertical hacia arriba**, con **latencia**, de **< 1 minuto** y **fatigable**.

??? repaso "3. ¿Indicas restricciones posturales tras la maniobra de Epley?"
    **No** (AAO-HNS 2017).

??? repaso "4. Dix-Hallpike con nistagmo vertical hacia abajo, sin latencia y que no se agota. ¿Qué haces?"
    Sospechar **causa central**: neuroimagen (RM) y evaluación neurológica.

??? repaso "5. ¿Pides imagen en un VPPB típico?"
    **No** (AAO-HNS 2017).

## Referencias

1. Bhattacharyya N, Gubbels SP, Schwartz SR, et al. Clinical practice guideline: benign paroxysmal positional vertigo (update). *Otolaryngol Head Neck Surg.* 2017;156(3 Suppl):S1–S47. doi:[10.1177/0194599816689667](https://doi.org/10.1177/0194599816689667)
2. Edlow JA, Carpenter C, Akhter M, et al. Guidelines for reasonable and appropriate care in the emergency department 3 (GRACE-3): acute dizziness and vertigo in the emergency department. *Acad Emerg Med.* 2023;30(5):442–486. doi:[10.1111/acem.14728](https://doi.org/10.1111/acem.14728)
