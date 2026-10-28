# Constatación de lesiones y alcoholemia

<div class="ficha" markdown>

**Procedimiento**
Examen y registro de las lesiones de una persona con fines médico-legales, y toma de muestra para alcoholemia en la urgencia

**Fuentes principales**
Código Penal (lesiones: arts. 397, 399 y 494) y Código Procesal Penal (art. 175: denuncia obligatoria) · Ley 20.580 (2012): alcohol y conducción

**Otras fuentes**
Ver [documentos médico-legales y ejercicio profesional](../salud-publica/documentos-medico-legales-y-ejercicio-profesional.md), [maltrato y violencia intrafamiliar](../psiquiatria/maltrato-violencia-intrafamiliar-y-psiquiatria-forense.md), [intoxicación por sustancias](../psiquiatria/intoxicacion-por-sustancias-psicoactivas.md) y [punción venosa](puncion-venosa.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Primero la atención médica**: la constatación nunca retrasa el tratamiento de una lesión grave.
    - **Describir, no juzgar**: anotar el **relato** entre comillas o como "refiere", y las lesiones con **tipo, tamaño (cm), forma, color y ubicación anatómica** precisa.
    - **Pronóstico médico-legal**: se estima por el **tiempo de curación o incapacidad**. Para el Código Penal, son **graves** las que producen enfermedad o incapacidad **por más de 30 días**; la calificación final la hace el **tribunal**. Agregar "**salvo complicaciones**".
    - **Denuncia**: obligatoria para los **funcionarios de salud** que conozcan un **delito** en el ejercicio de su función (Código Procesal Penal, art. 175); siempre en **menores de edad**, agresión sexual y violencia intrafamiliar según la norma.
    - **Alcoholemia** (Ley 20.580): **bajo la influencia** del alcohol entre **0,3 y 0,8 g/L**; **estado de ebriedad** desde **0,8 g/L**.
    - **Muestra de alcoholemia**: sangre venosa con antiséptico **sin alcohol**, en el envase del protocolo, con **hora** y **cadena de custodia**.

!!! guia "¿Qué respalda esta página?"
    El marco viene de la **ley chilena**: Código Penal (clasificación de las lesiones), Código Procesal Penal (denuncia obligatoria) y Ley 20.580 (umbrales de alcohol). Los formularios, el envase de la muestra de alcoholemia y la cadena de custodia dependen del **protocolo del establecimiento y del Servicio Médico Legal**. La técnica de descripción es **práctica médico-legal habitual**. **Manda el protocolo de tu servicio.**

## Cómo describir las lesiones

| Lesión | Cómo se describe |
|---|---|
| **Equimosis** (moretón) | Color (rojo-violáceo reciente; verde-amarillo más antiguo), tamaño en cm, ubicación |
| **Hematoma** | Aumento de volumen, tamaño, ubicación |
| **Erosión**, excoriación | Superficial, tamaño, dirección |
| **Herida contusa** | Bordes irregulares, puentes de tejido, tamaño |
| **Herida cortante** | Bordes netos, longitud, profundidad aproximada |
| **Herida punzante** | Orificio, trayecto probable; no explorar más allá de lo necesario |
| **Mordedura** | Arcada, número de marcas |
| **Quemadura** | Profundidad, extensión, forma (cigarrillo, inmersión) |

- Usar **referencias anatómicas** (por ejemplo, "a 3 cm por debajo del ángulo externo del ojo izquierdo").
- **Fotografía** solo según el protocolo y con consentimiento.
- **No usar** términos que impliquen causa o culpa ("golpe de puño de su pareja"): escribir "**refiere**...".

## Paso a paso

1. **Atender** lo urgente.
2. **Identificar** al paciente y registrar **fecha, hora** y quién lo acompaña.
3. **Relato**: lo que **refiere** el paciente (o el acompañante), con sus palabras.
4. **Examen** completo, con el paciente descubierto por zonas, con **acompañante del equipo** y privacidad; estado de conciencia y **signos de intoxicación** (aliento, lenguaje, marcha).
5. **Describir** cada lesión.
6. **Exámenes** si corresponden (radiografías, TC).
7. **Pronóstico médico-legal** (leve, menos grave, grave; o "reservado" si falta estudio), "**salvo complicaciones**".
8. **Alcoholemia** si la solicita la autoridad o el protocolo: **antiséptico sin alcohol**, **hora** exacta, sellado y **cadena de custodia**.
9. **Denuncia** cuando corresponda; firmar y entregar copia según el protocolo.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="constatacion">
<span class="gen-titulo">La atención</span>
<label class="calc-campo">Fecha y hora <input type="text" name="fecha" data-marca="fecha y hora" placeholder="ej.: 28/10/2026, 02:15"></label>
<label class="calc-campo">Relato (lo que refiere el paciente) <input type="text" name="relato" data-marca="relato" placeholder="ej.: refiere haber sido golpeado con puño en la cara por un tercero hace 1 hora"></label>
<label class="calc-campo">Acompañado por <input type="text" name="acompanante" list="dl-acompanante" placeholder="ej.: Carabineros"></label><datalist id="dl-acompanante"><option value="Carabineros"><option value="familiar"><option value="solo"></datalist>
<span class="gen-titulo">El examen</span>
<label class="calc-campo">Estado general y conciencia <input type="text" name="conciencia" list="dl-conciencia" data-marca="estado general" placeholder="ej.: vigil, orientado, Glasgow 15, sin signos de intoxicación"></label><datalist id="dl-conciencia"><option value="vigil, orientado, Glasgow 15, sin signos de intoxicación"><option value="vigil, con aliento etílico, lenguaje traposo y marcha inestable"></datalist>
<label class="calc-campo">Lesiones <input type="text" name="lesiones" data-marca="lesiones" placeholder="ej.: equimosis violácea de 3 × 2 cm en región periorbitaria izquierda; herida contusa de 1,5 cm en labio superior"></label>
<label class="calc-campo">Exámenes <input type="text" name="examenes" placeholder="ej.: radiografía de huesos propios de la nariz sin fractura"></label>
<label class="calc-campo">Pronóstico médico-legal <input type="text" name="pronostico" list="dl-pronostico" data-marca="pronóstico" placeholder="ej.: lesiones de carácter leve"></label><datalist id="dl-pronostico"><option value="lesiones de carácter leve"><option value="lesiones de carácter menos grave"><option value="lesiones de carácter grave"><option value="pronóstico reservado, pendiente de estudio"></datalist>
<label class="calc-campo">Alcoholemia <input type="text" name="alcoholemia" list="dl-alcoholemia" placeholder="ej.: "></label><datalist id="dl-alcoholemia"><option value="se toma muestra de sangre para alcoholemia a las 02:30, con cadena de custodia"><option value="no se solicita"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Atención el {fecha}.", "Relato: {relato}.", "?Acompañado por: {acompanante}.", "Examen: {conciencia}. Lesiones: {lesiones}.", "?Exámenes: {examenes}.", "Pronóstico médico-legal: {pronostico}, salvo complicaciones.", "?Alcoholemia: {alcoholemia}."], "indicaciones": [{"id": "denuncia", "texto": "Denuncia según corresponda (obligatoria para el funcionario de salud que conozca un delito; siempre en menores de edad)."}, {"id": "curacion", "texto": "Curación y control de las lesiones según su tipo."}, {"id": "copia", "texto": "Entregar copia del documento según el protocolo del establecimiento."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Atención el 28/10/2026, 02:15. Relato: refiere haber sido golpeado con puño en la cara por un tercero hace 1 hora. Acompañado por: Carabineros. Examen: vigil, orientado, Glasgow 15, sin signos de intoxicación. Lesiones: equimosis violácea de 3 × 2 cm en región periorbitaria izquierda; herida contusa de 1,5 cm en labio superior. Exámenes: radiografía de huesos propios de la nariz sin fractura. Pronóstico médico-legal: lesiones de carácter leve, salvo complicaciones.

## Errores que invalidan o debilitan el documento

| Error | Consecuencia |
|---|---|
| Descripción **vaga** ("contusiones varias") | No sirve como prueba |
| Atribuir causa o culpable | Pierde objetividad |
| No anotar la **hora** de la muestra de alcoholemia | La muestra pierde valor |
| Limpiar la piel con **alcohol** antes de la muestra | Falso positivo |
| Romper la **cadena de custodia** | La muestra puede ser impugnada |
| No **denunciar** cuando es obligatorio | Responsabilidad del funcionario |

!!! alarma "Errores frecuentes"
    - Retrasar el **tratamiento** por la constatación.
    - Escribir conclusiones en vez de **hechos**.
    - Usar **alcohol** para la antisepsia de la alcoholemia.
    - Olvidar "**salvo complicaciones**".
    - No ofrecer **apoyo** y derivación en la violencia intrafamiliar o sexual.

!!! perla "Para el internado"
    Escribe la constatación pensando que la leerá un **juez** que no te conoce: **tamaños, colores, ubicaciones y horas**. Lo que no está escrito, no existe.

## Preguntas de repaso

??? repaso "1. ¿Cómo registras lo que cuenta el paciente?"
    Como **relato**: "**refiere**..." o entre comillas, sin atribuir causas ni culpables.

??? repaso "2. ¿Qué lesiones son graves para el Código Penal?"
    Las que producen **enfermedad o incapacidad para el trabajo por más de 30 días** (y las gravísimas del art. 397). La calificación final la hace el **tribunal**.

??? repaso "3. ¿Qué umbrales de alcoholemia fija la Ley 20.580?"
    **Bajo la influencia** del alcohol: **0,3–0,8 g/L**; **estado de ebriedad**: desde **0,8 g/L**.

??? repaso "4. ¿Con qué desinfectas la piel para la muestra de alcoholemia?"
    Con un antiséptico **sin alcohol** (por ejemplo, clorhexidina acuosa o povidona), según el protocolo.

??? repaso "5. Atiendes a una niña de 12 años con lesiones que sugieren maltrato. ¿Qué obligación tienes?"
    **Denunciar** (Código Procesal Penal, art. 175) y activar la red de protección, además de atenderla.

## Referencias

1. Biblioteca del Congreso Nacional de Chile. Ley Fácil: ¿Cómo se sancionan las lesiones en Chile? [bcn.cl](https://www.bcn.cl/portal/leyfacil/recurso/delitos-de-lesiones)
2. Biblioteca del Congreso Nacional de Chile. Ley 20.580 (2012), que modifica la Ley de Tránsito (Ley 18.290) en la conducción bajo la influencia del alcohol y en estado de ebriedad. [bcn.cl](https://www.bcn.cl/leychile/navegar?idLey=20580)
3. Biblioteca del Congreso Nacional de Chile. Código Procesal Penal (Ley 19.696), art. 175. [bcn.cl](https://www.bcn.cl/leychile/navegar?idNorma=176595)
