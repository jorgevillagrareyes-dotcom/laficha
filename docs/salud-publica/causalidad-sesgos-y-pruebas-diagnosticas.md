---
tags:
  - Salud pública
---

# Causalidad, sesgos y pruebas de tamizaje y diagnósticas

<div class="ficha" markdown>

**Área**
Salud pública · Epidemiología · Medicina basada en evidencia · Medicina preventiva

**Fuentes principales**
Hill (*Proc R Soc Med* 1965): criterios de causalidad · Rothman (*Am J Epidemiol* 1976): modelo de causas suficientes y componentes · Delgado-Rodríguez y Llorca (*J Epidemiol Community Health* 2004): glosario de sesgos · Wilson y Jungner (OMS, 1968): principios del tamizaje

**Otras fuentes**
Hall (*Int J Neonatal Screen* 2020): los principios de Wilson y Jungner · Ver [diseños de investigación y medidas de asociación](disenos-de-investigacion-y-medidas-de-asociacion.md), [conceptos y niveles de prevención](conceptos-prevencion-y-determinantes-de-la-salud.md) y [cáncer cervicouterino y tamizaje](../ginecologia-obstetricia/cancer-cervicouterino-lesiones-preinvasoras-y-tamizaje.md)

**EUNACOM**
7.01.3.026 Causalidad y sesgos · 7.01.3.028 Pruebas de screening (tamizaje) y diagnósticas (conocimientos generales)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Asociación no es causalidad**. Ante una asociación hay que descartar **azar** (estadística), **sesgos** (error sistemático) y **confusión**, y luego juzgar la **causalidad** con los criterios de **Bradford Hill**: **temporalidad** (el único **indispensable**), fuerza, consistencia, gradiente dosis-respuesta, plausibilidad, coherencia, experimento, especificidad y analogía.
    - **Sesgo de selección**: los grupos comparados **difieren** por la forma de elegirlos (sesgo de Berkson, del voluntario sano, pérdidas de seguimiento). **Sesgo de información** (medición): la exposición o el efecto se miden **mal o distinto** (sesgo de **recuerdo**, del entrevistador, mala clasificación).
    - **Confusión**: un tercer factor asociado a la **exposición** y al **efecto** (y que no está en la vía causal) distorsiona la asociación. Se controla con **aleatorización**, **restricción**, **pareamiento**, **estratificación** y **análisis multivariado**.
    - **Sensibilidad** = verdaderos positivos / enfermos (detecta a los enfermos; **un test muy sensible negativo descarta**: *SnNout*). **Especificidad** = verdaderos negativos / sanos (**un test muy específico positivo confirma**: *SpPin*).
    - **Valores predictivos**: dependen de la **prevalencia**. Si la prevalencia **baja**, el **VPP baja** y el **VPN sube**. Las **razones de verosimilitud** (LR) no dependen de la prevalencia.
    - **Tamizaje**: aplicar una prueba a personas **asintomáticas** para detectar la enfermedad en etapa **preclínica** (prevención **secundaria**). Para el tamizaje se prefiere una prueba **sensible**; para confirmar, una **específica**.
    - **Sesgos del tamizaje**: **tiempo de adelanto** (*lead time*), **duración** (*length time*) y **sobrediagnóstico**: hacen que el tamizaje **parezca** mejorar la sobrevida aunque no reduzca la **mortalidad**.

## Causalidad

- **Causa**: un factor cuya presencia (o cambio) **aumenta la probabilidad** de que ocurra un efecto. En las enfermedades crónicas la causalidad es **multicausal**.
- **Modelo de Rothman** (causas suficientes y componentes, o "**pasteles causales**"):
    - **Causa suficiente**: conjunto mínimo de condiciones que, juntas, **producen** la enfermedad.
    - **Causa componente**: cada factor que forma parte de una causa suficiente.
    - **Causa necesaria**: componente presente en **todas** las causas suficientes (sin ella no hay enfermedad: *M. tuberculosis* para la tuberculosis). Una causa necesaria **no es siempre suficiente** (muchos infectados no enferman).
- **Proceso de evaluación de una asociación**:
    1. ¿Es real o se debe al **azar**? → valor p, intervalo de confianza, tamaño de muestra.
    2. ¿Se debe a un **sesgo**? → revisar el diseño, la selección y la medición.
    3. ¿Se debe a **confusión**? → estratificar, ajustar.
    4. Si persiste, ¿es **causal**? → criterios de Hill.

### Criterios de Bradford Hill (1965)

| Criterio | Pregunta | Comentario |
|---|---|---|
| **Temporalidad** | ¿La exposición **precede** al efecto? | El **único indispensable**. Mejor demostrada en **cohortes** y ECA |
| **Fuerza de la asociación** | ¿El RR u OR es **grande**? | Una asociación fuerte es menos probable que se explique por confusión o sesgo |
| **Consistencia** | ¿Se repite en **distintos estudios**, poblaciones y diseños? | |
| **Gradiente biológico** (dosis-respuesta) | ¿A **más exposición**, más efecto? | Tabaco: más cigarrillos al día, más cáncer pulmonar |
| **Plausibilidad biológica** | ¿Hay un **mecanismo** que lo explique? | Depende del conocimiento de la época |
| **Coherencia** | ¿Es coherente con la **historia natural** y lo que se sabe de la enfermedad? | |
| **Evidencia experimental** | ¿Al **eliminar** la exposición disminuye el efecto? | Por ejemplo, dejar de fumar reduce el riesgo |
| **Especificidad** | ¿Una exposición causa **un** efecto? | El criterio **más débil**: el tabaco causa muchas enfermedades |
| **Analogía** | ¿Hay causas **similares** con efectos conocidos? | Talidomida y otros teratógenos |

## Error aleatorio y error sistemático

- **Error aleatorio** (azar): variación debida al **muestreo**; afecta la **precisión**. **Disminuye al aumentar el tamaño de muestra**. Se evalúa con el **valor p** y el **intervalo de confianza**.
- **Error sistemático** (sesgo): desviación **en una dirección** de los resultados respecto de la verdad; afecta la **validez**. **No disminuye** al aumentar la muestra. Se evita en el **diseño**.
- **Validez interna**: los resultados son correctos **para la población estudiada** (sin sesgos ni confusión). **Validez externa** (generalización): los resultados se pueden **aplicar a otras poblaciones**.

## Sesgos

### Sesgo de selección

Ocurre cuando los grupos que se comparan **difieren sistemáticamente** por la forma en que se eligen o se pierden los participantes.

| Sesgo | Descripción | Ejemplo |
|---|---|---|
| **De Berkson** (hospitalario) | Casos y controles hospitalarios tienen **distinta probabilidad de hospitalización** según la exposición | Controles hospitalizados por enfermedades relacionadas con el tabaco subestiman la asociación del tabaco |
| **Del voluntario sano** (autoselección) | Quienes aceptan participar son **más sanos** o más motivados | Los que acuden a un tamizaje voluntario tienen menos mortalidad aunque el tamizaje no sirva |
| **Del trabajador sano** | Los trabajadores son más sanos que la población general (los enfermos no trabajan) | Una cohorte laboral muestra menos mortalidad que la población general |
| **De pérdidas de seguimiento** (atrición) | Los que abandonan **difieren** de los que siguen | En una cohorte, se pierden los que enfermaron |
| **De prevalencia o de Neyman** (supervivencia) | Se estudian casos **prevalentes** (sobrevivientes), no incidentes | Un factor que mata rápido parece protector |
| **De no respuesta** | Los que no responden una encuesta difieren de los que sí | |

### Sesgo de información (de medición o de clasificación)

Ocurre cuando la **exposición** o el **efecto** se **miden mal** o **distinto** entre los grupos.

| Sesgo | Descripción | Ejemplo |
|---|---|---|
| **De recuerdo** (memoria) | Los **casos** recuerdan sus exposiciones **más** que los controles | Madres de niños con malformaciones recuerdan más los fármacos del embarazo |
| **Del entrevistador** (observador) | El investigador pregunta o mide **distinto** según el grupo | Indaga más la exposición en los casos que conoce |
| **Del instrumento** | Instrumento **mal calibrado** o no validado | Esfigmomanómetro descalibrado |
| **Mala clasificación no diferencial** | El error es **igual** en ambos grupos | Tiende a **diluir** la asociación hacia el **nulo** (RR hacia 1) |
| **Mala clasificación diferencial** | El error es **distinto** entre grupos | Puede **sobrestimar o subestimar** la asociación |
| **Efecto Hawthorne** | Los participantes **cambian su conducta** al saberse observados | |
| **Sesgo de detección** (vigilancia) | Un grupo se examina **más** y por eso se diagnostica más | Las usuarias de anticonceptivos van más al médico y se les diagnostican más enfermedades |

- **Otros sesgos**: de **publicación** (se publican más los estudios positivos), de **financiamiento**, de **confirmación**.

### Confusión

- **Variable de confusión**: un factor que (1) está asociado a la **exposición**, (2) es un **factor de riesgo** del efecto **independientemente** de la exposición y (3) **no es un eslabón intermedio** en la vía causal.
- **Ejemplo**: se observa que el **consumo de café** se asocia a **cáncer pulmonar**. El **tabaco** es el confusor: los bebedores de café fuman más, y el tabaco causa cáncer pulmonar.
- **Control de la confusión**:
    - En el **diseño**: **aleatorización** (controla los confusores **conocidos y desconocidos**), **restricción** (estudiar solo un nivel del confusor, por ejemplo, solo no fumadores) y **pareamiento**.
    - En el **análisis**: **estratificación** (análisis por estratos del confusor; método de Mantel-Haenszel), **ajuste** por **análisis multivariado** (regresión).
- **Modificación del efecto** (interacción): el efecto de la exposición **cambia** según los niveles de un tercer factor (por ejemplo, asbesto y tabaco multiplican el riesgo de cáncer pulmonar). **No es un sesgo**: es un hallazgo **real** que hay que **describir**, no controlar.

``` mermaid
flowchart LR
    A["Exposición<br/>(café)"] -. "Asociación<br/>observada" .-> B["Efecto<br/>(cáncer pulmonar)"]
    C["Confusor<br/>(tabaco)"] --> A
    C --> B
```

*Figura 1. La variable de confusión se asocia con la exposición y con el efecto, y crea una asociación aparente. Esquema propio.*

## Pruebas diagnósticas y de tamizaje

### Tabla de 2 × 2 y propiedades

| | Enfermos (estándar de oro +) | Sanos (estándar de oro −) |
|---|---|---|
| **Prueba +** | **VP** (a) | **FP** (b) |
| **Prueba −** | **FN** (c) | **VN** (d) |

| Propiedad | Fórmula | Interpretación |
|---|---|---|
| **Sensibilidad** | VP / (VP + FN) = a / (a + c) | Probabilidad de que la prueba sea **positiva en un enfermo**. Alta: pocos **falsos negativos** |
| **Especificidad** | VN / (VN + FP) = d / (b + d) | Probabilidad de que la prueba sea **negativa en un sano**. Alta: pocos **falsos positivos** |
| **Valor predictivo positivo (VPP)** | VP / (VP + FP) = a / (a + b) | Probabilidad de estar **enfermo si la prueba es positiva** |
| **Valor predictivo negativo (VPN)** | VN / (VN + FN) = d / (c + d) | Probabilidad de estar **sano si la prueba es negativa** |
| **Razón de verosimilitud positiva (LR+)** | Sensibilidad / (1 − especificidad) | Cuánto **aumenta** la probabilidad de enfermedad un resultado positivo (> 10: muy útil) |
| **Razón de verosimilitud negativa (LR−)** | (1 − sensibilidad) / especificidad | Cuánto **disminuye** la probabilidad con un resultado negativo (< 0,1: muy útil) |
| **Exactitud** | (VP + VN) / total | Proporción de resultados **correctos** |

- **Sensibilidad y especificidad** son propiedades **de la prueba**: **no dependen de la prevalencia** (aunque pueden variar según el **espectro** de la enfermedad).
- **Valores predictivos**: dependen de la **prevalencia** (probabilidad pretest). Con la **misma prueba**:
    - Si la **prevalencia baja** (población general, tamizaje): el **VPP baja** (muchos falsos positivos) y el **VPN sube**.
    - Si la **prevalencia sube** (pacientes sintomáticos, alto riesgo): el **VPP sube** y el **VPN baja**.
- **Probabilidad postest**: odds pretest × LR = odds postest (teorema de **Bayes**; nomograma de **Fagan**).
- **Punto de corte**: si se **baja** el punto de corte de una prueba continua (por ejemplo, la glicemia), **aumenta la sensibilidad** y **disminuye la especificidad**, y viceversa. La **curva ROC** grafica sensibilidad frente a 1 − especificidad para cada punto de corte; el **área bajo la curva** mide la capacidad discriminativa (1 = perfecta, 0,5 = azar).
- **Reglas mnemotécnicas**:
    - **SnNout**: una prueba muy **sensible** con resultado **negativo** **descarta** (*rules out*).
    - **SpPin**: una prueba muy **específica** con resultado **positivo** **confirma** (*rules in*).

### Pruebas en serie y en paralelo

- **En serie** (secuenciales): se hace la segunda prueba solo si la primera es **positiva**; se considera positivo si **ambas** lo son. **Aumenta la especificidad** y el VPP, y baja la sensibilidad. Es la estrategia del **tamizaje → confirmación** (por ejemplo, test de VIH reactivo → confirmación en el ISP).
- **En paralelo** (simultáneas): se considera positivo si **cualquiera** es positiva. **Aumenta la sensibilidad** y el VPN. Útil en la **urgencia**, cuando no se puede perder un diagnóstico.

### Confiabilidad (reproducibilidad)

- **Validez**: la prueba mide **lo que dice medir** (sensibilidad y especificidad frente al estándar de oro).
- **Confiabilidad** (precisión, reproducibilidad): la prueba da **el mismo resultado** al repetirla. **Concordancia** entre observadores: índice **kappa** (concordancia más allá del azar; > 0,8 muy buena).

### Tamizaje (*screening*)

- **Definición**: aplicación de una prueba a personas **asintomáticas** para identificar a quienes **probablemente** tienen una enfermedad en fase **preclínica**. **No es diagnóstico**: los positivos deben **confirmarse**. Es **prevención secundaria**.
- **Tipos**: **masivo** (poblacional) o **selectivo** (grupos de alto riesgo); **organizado** (programa con invitación, registro y seguimiento) u **oportunista** (cuando la persona consulta por otro motivo).
- **Requisitos para tamizar** (Wilson y Jungner, OMS 1968; resumidos):
    - La enfermedad es un **problema de salud importante**.
    - Su **historia natural** es conocida y tiene una **fase preclínica detectable**.
    - Existe un **tratamiento eficaz** y aceptado, que es **mejor si se aplica precozmente**.
    - Hay una **prueba adecuada** (sensible, específica, segura, barata, **aceptable** para la población).
    - Hay **recursos** para el diagnóstico y el tratamiento de los positivos.
    - Hay **acuerdo** sobre a quién tratar como enfermo.
    - El **costo** es razonable en relación con el gasto total en salud.
    - El tamizaje es un proceso **continuo**, no una acción aislada.
- **Prueba de tamizaje ideal**: **alta sensibilidad** (no perder enfermos), aceptable especificidad, segura, simple, barata y aceptable. La **confirmación** se hace con una prueba más **específica**.
- **Evaluación de un programa de tamizaje**: el indicador válido es la **reducción de la mortalidad** (o de la incidencia de enfermedad avanzada) en un **ensayo aleatorizado**, no la mayor **sobrevida** de los casos detectados.

!!! alarma "Sesgos propios del tamizaje"
    - **Sesgo de tiempo de adelanto** (*lead time*): el tamizaje **adelanta el diagnóstico** sin cambiar la fecha de muerte; la **sobrevida desde el diagnóstico** parece mayor, pero el paciente muere a la misma edad.
    - **Sesgo de duración** (*length time*): el tamizaje detecta con más frecuencia los tumores de **crecimiento lento** (que pasan más tiempo en fase preclínica), de mejor pronóstico.
    - **Sobrediagnóstico**: se detectan lesiones que **nunca habrían dado síntomas** ni causado la muerte (por ejemplo, algunos cánceres de próstata y de tiroides). Lleva a **sobretratamiento** (ver prevención **cuaternaria**).
    - **Sesgo del voluntario sano**: los que acuden al tamizaje son más sanos.
    - Por estos sesgos, la evidencia de un tamizaje debe venir de **ensayos aleatorizados** con desenlace **mortalidad**.

!!! chile "Tamizajes en Chile (ejemplos)"
    - **Neonatal**: fenilcetonuria e **hipotiroidismo congénito** (TSH), y tamizaje auditivo.
    - **Adulto**: **Examen de Medicina Preventiva (EMPA)**: presión arterial, glicemia, colesterol, IMC, tabaco, alcohol, VDRL y VIH en grupos definidos, entre otros.
    - **Cáncer**: **cervicouterino** (Papanicolaou y test de VPH, programa organizado), **mama** (mamografía) y **colorrectal** (test de hemorragia oculta inmunológico, en programas piloto y regionales).
    - **Embarazo**: VIH, sífilis, hepatitis B, Chagas en zonas endémicas, glicemia y curva de tolerancia.

### Ejemplo resuelto

Una prueba con **sensibilidad 90 %** y **especificidad 90 %** se aplica a **1000** personas.

- **Prevalencia 50 %** (500 enfermos): VP = 450, FN = 50, VN = 450, FP = 50. **VPP** = 450 / 500 = **90 %**. **VPN** = 450 / 500 = **90 %**.
- **Prevalencia 1 %** (10 enfermos): VP = 9, FN = 1, VN = 891, FP = 99. **VPP** = 9 / 108 = **8,3 %**. **VPN** = 891 / 892 = **99,9 %**.
- **Conclusión**: con la **misma** prueba, al bajar la prevalencia el **VPP se desploma**: en el tamizaje poblacional, la mayoría de los positivos son **falsos positivos** y hay que **confirmar**.
- **LR+** = 0,9 / 0,1 = **9**; **LR−** = 0,1 / 0,9 = **0,11** (no cambian con la prevalencia).

## Perlas para el EUNACOM

!!! perla "Para recordar"
    - **Temporalidad**: el único criterio de Hill **indispensable**. **Especificidad**: el más débil.
    - **Azar** → precisión → se corrige con **más muestra**. **Sesgo** → validez → se evita en el **diseño**.
    - **Selección** (quién entra o sale del estudio) vs. **información** (cómo se mide). **Recuerdo**: típico de **casos y controles**.
    - **Confusor**: asociado a exposición y efecto, **fuera** de la vía causal. **Aleatorización** controla los confusores **desconocidos**.
    - **Modificación del efecto** no es un sesgo: se **describe**.
    - **Sensibilidad** → descarta (**SnNout**); **especificidad** → confirma (**SpPin**).
    - **Prevalencia baja** → **VPP bajo**, VPN alto. Sensibilidad, especificidad y **LR** no dependen de la prevalencia.
    - **En serie** sube la especificidad; **en paralelo** sube la sensibilidad.
    - Tamizaje: prueba **sensible**; confirmación: prueba **específica**. Se evalúa por **mortalidad**, no por sobrevida (**lead time**, **length time**, **sobrediagnóstico**).

## Preguntas de repaso

??? repaso "1. Un estudio de casos y controles encuentra que los pacientes con cáncer de páncreas tomaban más café que los controles, elegidos entre pacientes hospitalizados por enfermedades gastrointestinales a quienes se les había indicado reducir el café. ¿Qué sesgo puede explicar el resultado?"
    **Sesgo de selección** de tipo **Berkson** (hospitalario): los controles fueron elegidos entre pacientes con enfermedades que los llevaron a **disminuir** el café, por lo que su exposición es menor que la de la población de la que provienen los casos. La asociación queda **sobrestimada**. (Fue lo que ocurrió en un estudio clásico de los años 80.)

??? repaso "2. Se observa que las personas con los dedos amarillos tienen más cáncer pulmonar. ¿Cómo explicaría esta asociación?"
    Por **confusión**: el **tabaco** se asocia a los dedos amarillos (la exposición) y causa cáncer pulmonar (el efecto), sin que los dedos amarillos estén en la vía causal. Al **estratificar** por tabaquismo, la asociación desaparece.

??? repaso "3. Una prueba de tamizaje con sensibilidad 95 % y especificidad 95 % se aplica a una población con prevalencia de 0,5 %. ¿Qué proporción de los positivos estará realmente enferma?"
    En 10 000 personas: 50 enfermos (VP = 47,5; FN = 2,5) y 9950 sanos (FP = 497,5; VN = 9452,5). **VPP** = 47,5 / (47,5 + 497,5) ≈ **8,7 %**. Más del **90 %** de los positivos son **falsos positivos**: con una prevalencia baja el VPP es bajo, y todo positivo del tamizaje debe **confirmarse** con una prueba más específica.

??? repaso "4. Un programa de tamizaje de cáncer muestra que los pacientes detectados por tamizaje viven en promedio 3 años más desde el diagnóstico que los detectados por síntomas. ¿Demuestra esto que el tamizaje es eficaz?"
    **No.** La mayor **sobrevida desde el diagnóstico** puede deberse al sesgo de **tiempo de adelanto** (se diagnostica antes sin retrasar la muerte), al sesgo de **duración** (se detectan más los tumores lentos) y al **sobrediagnóstico**, además del sesgo del **voluntario sano**. La eficacia se demuestra con un **ensayo aleatorizado** que muestre **menor mortalidad por la enfermedad** en el grupo tamizado.

??? repaso "5. En la urgencia se sospecha un TEP de baja probabilidad clínica. ¿Por qué un dímero D negativo permite descartarlo y por qué uno positivo no lo confirma?"
    El dímero D es muy **sensible** pero poco **específico**. Con **alta sensibilidad**, un resultado **negativo** tiene muy pocos falsos negativos y, en baja probabilidad pretest, **descarta** el TEP (**SnNout**). Como es poco **específico** (sube en infección, cáncer, cirugía, embarazo, edad), un resultado **positivo** tiene muchos falsos positivos y **no confirma**: hay que hacer una angio-TC.

??? repaso "6. ¿Qué requisitos debe cumplir una enfermedad para justificar un programa de tamizaje? Aplíquelos al cáncer cervicouterino."
    (Wilson y Jungner) Problema de salud **importante**; **historia natural conocida** con una **fase preclínica** detectable larga; **tratamiento eficaz** mejor si es precoz; **prueba aceptable**, segura y barata; **recursos** para confirmar y tratar; y costo razonable. El **cáncer cervicouterino** los cumple: es una causa importante de muerte en mujeres, tiene **lesiones precursoras** (NIE) que tardan años en progresar, se detectan con el **Papanicolaou** o el **test de VPH**, y su tratamiento (conización, LEEP) es eficaz y evita el cáncer invasor.

## Referencias

1. Hill AB. The environment and disease: association or causation? *Proc R Soc Med.* 1965;58(5):295–300. doi:[10.1177/003591576505800503](https://doi.org/10.1177/003591576505800503)
2. Rothman KJ. Causes. *Am J Epidemiol.* 1976;104(6):587–592. doi:[10.1093/oxfordjournals.aje.a112335](https://doi.org/10.1093/oxfordjournals.aje.a112335)
3. Delgado-Rodríguez M, Llorca J. Bias. *J Epidemiol Community Health.* 2004;58(8):635–641. doi:[10.1136/jech.2003.008466](https://doi.org/10.1136/jech.2003.008466)
4. Wilson JMG, Jungner G. *Principles and practice of screening for disease.* Public Health Papers N.° 34. Ginebra: Organización Mundial de la Salud; 1968.
5. Hall K. Max Wilson and the principles and practice of screening for disease. *Int J Neonatal Screen.* 2020;6(1):15. doi:[10.3390/ijns6010015](https://doi.org/10.3390/ijns6010015)
6. Grimes DA, Schulz KF. An overview of clinical research: the lay of the land. *Lancet.* 2002;359(9300):57–61. doi:[10.1016/S0140-6736(02)07283-5](https://doi.org/10.1016/S0140-6736(02)07283-5)
