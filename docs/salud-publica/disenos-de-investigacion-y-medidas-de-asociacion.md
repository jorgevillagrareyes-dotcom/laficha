---
tags:
  - Salud pública
---

# Epidemiología analítica: diseños de investigación y medidas de asociación e impacto

<div class="ficha" markdown>

**Área**
Salud pública · Epidemiología analítica · Medicina basada en evidencia · Investigación clínica

**Fuentes principales**
Grimes y Schulz: serie de epidemiología (*Lancet* 2002) · STROBE (2007): estudios observacionales · CONSORT 2025: ensayos clínicos aleatorizados · Declaración de Helsinki de la Asociación Médica Mundial (revisión 2024)

**Otras fuentes**
Ley 20.120 sobre investigación científica en el ser humano (Chile, 2006) · CDC: *Principles of Epidemiology in Public Health Practice* · Ver [epidemiología descriptiva y vigilancia](epidemiologia-descriptiva-vigilancia-y-control-de-enfermedades.md) y [demografía e indicadores](demografia-e-indicadores-de-salud.md)

**EUNACOM**
7.01.3.018 Epidemiología analítica · 7.01.3.019 Medidas de asociación e impacto · 7.01.3.020 Diseños de investigación epidemiológica · 7.01.3.021 Estudios de prevalencia · 7.01.3.022 Estudios de casos y controles · 7.01.3.023 Estudios de cohortes · 7.01.3.024 Estudios experimentales y cuasiexperimentales · 7.01.3.025 Concepto de estudios ecológicos · 7.01.3.027 Investigación epidemiológica (conocimientos generales)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Epidemiología analítica**: busca **asociaciones** entre una **exposición** (factor de riesgo, tratamiento) y un **efecto** (enfermedad) para **probar hipótesis** causales.
    - **Clave para clasificar un diseño**: ¿el investigador **asigna** la exposición? Sí → **experimental** (si es **al azar**: ensayo **aleatorizado**). No → **observacional**. ¿Hay **grupo de comparación**? No → **descriptivo**. ¿Desde dónde parte? De la **exposición** → **cohorte**; del **efecto** → **casos y controles**; ambas a la vez → **transversal**.
    - **Transversal** (prevalencia): **foto** en un momento; mide **prevalencia**; no establece **temporalidad**.
    - **Casos y controles**: parte de **enfermos y sanos** y mira la **exposición pasada**. Ideal para enfermedades **raras** y de **latencia larga**. Medida: **odds ratio (OR)**. Sesgo típico: de **recuerdo**.
    - **Cohorte**: parte de **expuestos y no expuestos** y los sigue hasta ver quién enferma. Mide **incidencia** y **riesgo relativo (RR)**. Ideal para **exposiciones raras** y varios desenlaces. Puede ser **prospectiva** o **retrospectiva** (histórica).
    - **Ensayo clínico aleatorizado**: el **mejor diseño** para evaluar **intervenciones**; controla la **confusión** conocida y desconocida.
    - **Ecológico**: la unidad de análisis es el **grupo**, no el individuo. Riesgo: **falacia ecológica**.
    - **Medidas**: **RR** y **OR** (fuerza de la asociación; 1 = sin asociación), **riesgo atribuible** o **reducción absoluta del riesgo**, **NNT = 1 / RAR**, **fracción atribuible** en expuestos y **poblacional**.

## Epidemiología analítica

- **Objetivo**: evaluar si una **exposición** (variable independiente) se **asocia** a un **efecto** (variable dependiente) y si esa asociación es **causal**.
- **Pasos**: formular una **hipótesis** (desde la epidemiología descriptiva), elegir un **diseño**, medir la **asociación** (RR, OR), evaluar el **azar** (valor p, intervalo de confianza), los **sesgos** y la **confusión**, y juzgar la **causalidad** (ver [causalidad, sesgos y pruebas diagnósticas](causalidad-sesgos-y-pruebas-diagnosticas.md)).
- **Hipótesis nula (H₀)**: no hay asociación. **Hipótesis alternativa (H₁)**: sí la hay.
- **Error tipo I (α)**: rechazar H₀ siendo verdadera (**falso positivo**); se fija en **5 %**. **Error tipo II (β)**: no rechazar H₀ siendo falsa (**falso negativo**). **Poder** = 1 − β (habitualmente **80–90 %**); aumenta con el **tamaño de muestra**.
- **Valor p**: probabilidad de observar un resultado igual o más extremo **si H₀ fuera cierta**. p < 0,05: **estadísticamente significativo**. No mide la **magnitud** ni la **importancia clínica**.
- **Intervalo de confianza del 95 %**: rango de valores compatibles con los datos. Para RR u OR, si el intervalo **incluye el 1**, la asociación **no es significativa**; para una diferencia de medias o de riesgos, si **incluye el 0**.

## Clasificación de los diseños

``` mermaid
flowchart TD
    A{"¿El investigador<br/>asigna la exposición?"} -->|Sí| B{"¿Asignación<br/>aleatoria?"}
    A -->|No: observacional| C{"¿Hay grupo de<br/>comparación?"}
    B -->|Sí| D["Ensayo clínico<br/>aleatorizado"]
    B -->|No| E["Estudio<br/>cuasiexperimental"]
    C -->|No| F["Descriptivo:<br/>reporte o serie de casos,<br/>transversal descriptivo"]
    C -->|Sí: analítico| G{"¿Desde dónde<br/>parte el estudio?"}
    G -->|"Exposición → efecto"| H["Cohorte"]
    G -->|"Efecto → exposición"| I["Casos y controles"]
    G -->|"Ambos al mismo tiempo"| J["Transversal analítico"]
    K["Unidad de análisis:<br/>grupos o poblaciones"] --> L["Ecológico"]
```

*Figura 1. Algoritmo para clasificar los diseños de investigación epidemiológica. Esquema propio basado en Grimes y Schulz (2002).*

| Diseño | Tipo | Unidad | Dirección | Mide | Ventajas | Desventajas |
|---|---|---|---|---|---|---|
| **Reporte o serie de casos** | Descriptivo | Individuo | — | Descripción | Rápido; detecta enfermedades **nuevas** o efectos adversos raros | **Sin grupo control**; no prueba asociación |
| **Ecológico** | Observacional | **Grupo** | Variable | Correlación | Barato; usa datos existentes; genera hipótesis | **Falacia ecológica**; confusión no controlable |
| **Transversal** (prevalencia) | Observacional | Individuo | **Simultánea** | **Prevalencia**, OR de prevalencia | Rápido, barato; útil para **planificar** | **No hay temporalidad**; sesgo de **prevalencia** (sobrevivientes) |
| **Casos y controles** | Observacional analítico | Individuo | **Efecto → exposición** | **OR** | Enfermedades **raras** y de latencia **larga**; rápido; varias exposiciones | Sesgo de **recuerdo** y de **selección** de controles; no mide incidencia |
| **Cohorte** | Observacional analítico | Individuo | **Exposición → efecto** | **Incidencia**, **RR**, riesgo atribuible | **Temporalidad** clara; exposiciones **raras**; varios desenlaces | Cara y lenta (prospectiva); **pérdidas** de seguimiento; no sirve para enfermedades raras |
| **Ensayo clínico aleatorizado** | Experimental | Individuo | Exposición asignada → efecto | RR, RAR, **NNT** | **Máximo control** de la confusión; mejor evidencia causal de **intervenciones** | Caro; **ético** solo si hay equipoise; validez externa limitada |
| **Cuasiexperimental** | Experimental sin azar | Individuo o grupo | Exposición asignada → efecto | Diferencias antes-después | Factible cuando no se puede aleatorizar (programas, políticas) | **Confusión** y sesgo de selección |

## Estudios transversales o de prevalencia

- **Diseño**: se mide **en un solo momento** y a la vez la **exposición** y el **efecto** en una muestra de la población ("**foto**").
- **Mide**: **prevalencia** (de enfermedades y de factores de riesgo); en su versión analítica, la **razón de prevalencias** o el **OR de prevalencia**.
- **Usos**: **diagnóstico de situación**, **planificación** de servicios, generar hipótesis. Ejemplo: la **Encuesta Nacional de Salud** (ENS) y la encuesta CASEN.
- **Limitación principal**: **no establece temporalidad** (¿la exposición fue antes que el efecto?). Además, sobrerrepresenta los casos de **larga duración** (sesgo de prevalencia o de **Neyman**).
- **Muestreo**: para que sea **representativo**, la muestra debe ser **probabilística** (aleatoria simple, sistemática, **estratificada** o por **conglomerados**).

## Estudios de casos y controles

- **Diseño**: se seleccionan **casos** (personas **con** la enfermedad) y **controles** (personas **sin** la enfermedad, de la **misma población** de la que salieron los casos) y se compara la **frecuencia de exposición pasada**.
- **Medida**: **odds ratio (OR)** = (a × d) / (b × c). Cuando la enfermedad es **rara** (< 10 %), el OR **se aproxima al RR**.
- **Ventajas**: eficiente para enfermedades **raras** y de **latencia larga** (cáncer), rápido y barato; permite estudiar **varias exposiciones**; útil en **brotes** comunitarios.
- **Limitaciones**: **no** mide incidencia ni riesgo; **sesgo de recuerdo** (los casos recuerdan más sus exposiciones); **sesgo de selección** de los controles; temporalidad a veces dudosa.
- **Pareamiento** (*matching*): elegir controles **similares** a los casos en variables **confusoras** (edad, sexo). Controla la confusión por esas variables, pero ya **no se puede estudiar su efecto**.
- **Casos y controles anidado en una cohorte**: los casos y controles salen de una cohorte ya seguida (menor sesgo de recuerdo).
- **Ejemplo clásico**: Doll y Hill (1950), tabaco y cáncer pulmonar.

## Estudios de cohortes

- **Diseño**: se identifica un grupo **expuesto** y uno **no expuesto**, **libres de la enfermedad** al inicio, y se **siguen en el tiempo** para comparar la **incidencia** del efecto.
- **Prospectiva** (concurrente): el seguimiento ocurre **hacia el futuro**, desde el inicio del estudio.
- **Retrospectiva** (histórica): la exposición y el efecto ya ocurrieron y se reconstruyen con **registros** (fichas clínicas, registros laborales). Sigue siendo de **exposición → efecto**.
- **Medidas**: **incidencia** en expuestos y no expuestos, **riesgo relativo (RR)**, **riesgo atribuible** y fracción atribuible.
- **Ventajas**: establece la **temporalidad** (la mejor evidencia causal entre los observacionales); permite estudiar **exposiciones raras** (por ejemplo, ocupacionales) y **varios desenlaces** de una exposición.
- **Limitaciones**: **cara y larga** (prospectiva); **pérdidas de seguimiento** (sesgo de **atrición**); no sirve para enfermedades raras o de latencia muy larga.
- **Ejemplos**: el estudio de **Framingham** (factores de riesgo cardiovascular, desde 1948) y la cohorte de médicos británicos de Doll y Hill.

## Estudios experimentales y cuasiexperimentales

- **Ensayo clínico aleatorizado (ECA)**: el investigador **asigna al azar** la intervención. Es el estándar para evaluar **tratamientos**, **vacunas** y **programas**.
    - **Aleatorización**: distribuye de forma **equilibrada** los factores **conocidos y desconocidos** entre los grupos; es lo que **controla la confusión**.
    - **Ocultamiento de la secuencia de asignación**: quien recluta **no sabe** a qué grupo irá el siguiente paciente (evita el sesgo de selección).
    - **Enmascaramiento** (ciego): **simple** (el paciente no sabe qué recibe), **doble** (paciente e investigador) o **triple** (también quien analiza). Evita el sesgo de **medición** y el **efecto placebo**.
    - **Análisis por intención de tratar**: se analiza a cada paciente en el grupo al que fue **asignado**, aunque no haya cumplido el tratamiento. Conserva los beneficios de la aleatorización. El análisis **por protocolo** solo incluye a quienes cumplieron.
    - **Tipos**: paralelo, **cruzado** (*cross-over*), factorial, **por conglomerados** (se aleatorizan grupos: escuelas, CESFAM), de **no inferioridad**.
    - **Fases de los ensayos de fármacos**: **I** (seguridad y dosis, pocos voluntarios), **II** (eficacia preliminar y dosis), **III** (eficacia comparada en muchos pacientes; base del registro sanitario), **IV** (**farmacovigilancia** después de la comercialización).
    - **Ensayos de campo** (en personas **sanas**, como las vacunas) y **ensayos comunitarios** (se interviene una comunidad entera, como la fluoración del agua).
- **Cuasiexperimento**: hay intervención del investigador pero **sin asignación aleatoria** (por ejemplo, un programa en una comuna comparado con otra comuna, o un estudio **antes-después**). Útil para **políticas** y programas; mayor riesgo de **confusión**. Variante robusta: la **serie de tiempo interrumpida**.

## Estudios ecológicos

- **Unidad de análisis**: **grupos** (países, regiones, comunas, años), no individuos. Se correlacionan **promedios** o **tasas** (por ejemplo, consumo de sal per cápita y mortalidad por ACV entre países).
- **Ventajas**: **baratos** y rápidos, usan **datos existentes**, útiles para generar **hipótesis** y evaluar **políticas** que afectan a poblaciones enteras.
- **Falacia ecológica**: atribuir a los **individuos** una asociación observada en los **grupos**. Que los países con más consumo de grasa tengan más cáncer de colon no prueba que las **personas** que comen más grasa enfermen más.

## Medidas de asociación e impacto

### Tabla de 2 × 2

| | Enfermos | Sanos | Total |
|---|---|---|---|
| **Expuestos** | a | b | a + b |
| **No expuestos** | c | d | c + d |
| **Total** | a + c | b + d | N |

### Medidas de asociación (fuerza)

| Medida | Fórmula | Diseño | Interpretación |
|---|---|---|---|
| **Riesgo relativo (RR)** | [a / (a + b)] ÷ [c / (c + d)] = incidencia en expuestos / incidencia en no expuestos | **Cohorte**, ECA | RR = 2: los expuestos tienen **el doble de riesgo** |
| **Odds ratio (OR)** | (a × d) / (b × c) | **Casos y controles** (también transversal y regresión logística) | Se aproxima al RR si la enfermedad es **rara** |
| **Razón de prevalencias** | Prevalencia en expuestos / en no expuestos | **Transversal** | |
| **Razón de tasas** (*hazard ratio*) | Tasa (densidad de incidencia) en expuestos / en no expuestos | Cohorte con persona-tiempo, análisis de sobrevida | |

- **Interpretación**: **= 1**, no hay asociación; **> 1**, factor de **riesgo**; **< 1**, factor **protector**. Debe acompañarse del **IC 95 %**: si incluye el 1, no es significativa.

### Medidas de impacto

| Medida | Fórmula | Pregunta que responde |
|---|---|---|
| **Riesgo atribuible** (diferencia de riesgos) | Incidencia en expuestos − incidencia en no expuestos | ¿Cuánto riesgo **en exceso** se debe a la exposición? |
| **Fracción atribuible en expuestos** | (RR − 1) / RR | ¿Qué proporción de los casos **entre los expuestos** se evitaría eliminando la exposición? |
| **Riesgo atribuible poblacional** | Incidencia en la población total − incidencia en no expuestos | |
| **Fracción atribuible poblacional** | (Incidencia total − incidencia en no expuestos) / incidencia total; o Pe (RR − 1) / [1 + Pe (RR − 1)], donde Pe es la prevalencia de la exposición | ¿Qué proporción de **todos los casos de la población** se evitaría? Depende de la **fuerza** de la asociación **y** de la **prevalencia** de la exposición |
| **Reducción absoluta del riesgo (RAR)** | Riesgo en el grupo control − riesgo en el grupo intervenido | Beneficio absoluto del tratamiento |
| **Reducción relativa del riesgo (RRR)** | RAR / riesgo en el control = 1 − RR | Beneficio **proporcional** (siempre luce más grande) |
| **Número necesario a tratar (NNT)** | **1 / RAR** | ¿A cuántos hay que tratar para **evitar un evento**? |
| **Número necesario para dañar (NND)** | 1 / aumento absoluto del riesgo de un efecto adverso | ¿A cuántos hay que tratar para **causar un evento adverso**? |

### Ejemplo resuelto

**Cohorte**: 1000 fumadores y 1000 no fumadores seguidos 10 años. Presentan infarto **60 fumadores** y **20 no fumadores**.

- Incidencia en expuestos = 60 / 1000 = **6 %**; en no expuestos = 20 / 1000 = **2 %**.
- **RR** = 6 / 2 = **3**: los fumadores tienen **3 veces** más riesgo de infarto.
- **Riesgo atribuible** = 6 % − 2 % = **4 %** (40 infartos por 1000 fumadores en 10 años se deben al tabaco).
- **Fracción atribuible en expuestos** = (3 − 1) / 3 = **67 %** de los infartos de los fumadores se debe a fumar.

**Ensayo clínico**: un fármaco reduce la mortalidad de **10 %** (placebo) a **8 %** (fármaco).

- **RAR** = 10 % − 8 % = **2 %**. **RRR** = 2 / 10 = **20 %**. **NNT** = 1 / 0,02 = **50**: hay que tratar a 50 pacientes para evitar 1 muerte.

!!! alarma "Errores frecuentes en el EUNACOM"
    - El **OR** es la medida del estudio de **casos y controles**: allí **no se puede** calcular la incidencia ni el RR (el investigador fija cuántos casos y controles incluye).
    - Una **cohorte retrospectiva** sigue siendo una cohorte: va de la **exposición** al **efecto**, aunque ambos ya hayan ocurrido.
    - El estudio **transversal** **no** permite saber si la exposición precedió al efecto.
    - La **RRR** exagera el beneficio cuando el riesgo basal es bajo: siempre mirar la **RAR** y el **NNT**.
    - La **fracción atribuible poblacional** puede ser **baja** aunque el RR sea alto, si la exposición es **rara**.
    - **Estadísticamente significativo** no es lo mismo que **clínicamente importante**.

## Investigación epidemiológica

- **Etapas de una investigación**: pregunta de investigación (formato **PICO**: paciente, intervención o exposición, comparación, desenlace) → **revisión** de la literatura → **hipótesis** y objetivos → **diseño** → población y **muestra** (cálculo del tamaño) → definición y medición de **variables** → recolección de datos → **análisis** → interpretación → **publicación**.
- **Pirámide de la evidencia** (para intervenciones): **revisiones sistemáticas y metaanálisis** de ECA → **ECA** → cohortes → casos y controles → series de casos → opinión de expertos. Para **pronóstico** es mejor la **cohorte**; para **etiología** de enfermedades raras, **casos y controles**.
- **Guías para reportar**: **CONSORT** (ensayos clínicos, actualizada en **2025**), **STROBE** (observacionales), **PRISMA** (revisiones sistemáticas), **STARD** (pruebas diagnósticas).
- **Ética de la investigación**:
    - **Declaración de Helsinki** (Asociación Médica Mundial; última revisión en **2024**), Informe **Belmont** (respeto a las personas, beneficencia y justicia) y pautas **CIOMS**.
    - **Consentimiento informado**, evaluación por un **comité ético-científico**, balance riesgo-beneficio favorable, protección de grupos vulnerables, **confidencialidad**.
    - Uso de **placebo** solo si no existe un tratamiento probado o hay razones metodológicas convincentes sin riesgo de daño grave.

!!! chile "Investigación en seres humanos en Chile"
    - **Ley 20.120** (2006): regula la **investigación científica en el ser humano**, su genoma y prohíbe la **clonación humana**. Exige el **consentimiento informado** previo, expreso, libre e informado, por escrito, y la aprobación de un **comité ético-científico**.
    - **Ley 20.584** (derechos y deberes de los pacientes): el paciente puede **negarse** a participar en investigaciones, sin que ello afecte su atención.
    - Los **comités ético-científicos** son **acreditados** por la autoridad sanitaria. Los ensayos con fármacos requieren autorización del **Instituto de Salud Pública (ISP)**.

## Perlas para el EUNACOM

!!! perla "Para recordar"
    - ¿Asigna el investigador? **Experimental**. ¿Al azar? **ECA**. ¿No asigna? **Observacional**.
    - **Cohorte**: exposición → efecto; **RR**; exposiciones **raras**. **Casos y controles**: efecto → exposición; **OR**; enfermedades **raras**.
    - **Transversal**: **prevalencia**, foto, **sin temporalidad**. **Ecológico**: grupos, **falacia ecológica**.
    - La **aleatorización** controla la **confusión** (conocida y desconocida); el **ciego** controla el sesgo de **medición**; el **ocultamiento** de la asignación, el sesgo de **selección**.
    - **Intención de tratar**: analizar según lo **asignado**.
    - **RR/OR = 1**: sin asociación. IC 95 % que **incluye el 1**: no significativo.
    - **NNT = 1 / RAR**. **RRR = 1 − RR**.
    - **Fracción atribuible poblacional**: depende del RR **y** de la **prevalencia** de la exposición.

## Preguntas de repaso

??? repaso "1. Para estudiar si el uso de anticonceptivos orales se asocia a trombosis de senos venosos cerebrales (enfermedad muy rara), ¿qué diseño elegiría y qué medida calcularía?"
    **Casos y controles**: se seleccionan mujeres **con** trombosis de senos venosos (casos) y mujeres **sin** la enfermedad de la misma población (controles), y se compara la proporción que **usaba anticonceptivos** antes del evento. Medida: **odds ratio**, que se aproxima al RR por ser una enfermedad **rara**. Una cohorte necesitaría seguir a millones de mujeres.

??? repaso "2. Un estudio revisa las fichas de trabajadores de una fundición de 1980 a 2000, clasificándolos según la exposición a arsénico, y busca en el registro de defunciones quiénes murieron de cáncer pulmonar hasta 2020. ¿Qué diseño es?"
    **Cohorte retrospectiva** (histórica): parte de la **exposición** (arsénico sí o no) y sigue hacia el **efecto** (cáncer pulmonar), aunque ambos ya ocurrieron y se reconstruyan con registros. Medida: **RR** (o la **razón de mortalidad estandarizada** si se compara con la población general). Es el diseño ideal para una **exposición rara** de tipo ocupacional.

??? repaso "3. En un ensayo, la mortalidad fue de 4 % con el fármaco y 5 % con placebo. Calcule RR, RRR, RAR y NNT."
    **RR** = 4 / 5 = **0,8**. **RRR** = 1 − 0,8 = **20 %**. **RAR** = 5 % − 4 % = **1 %**. **NNT** = 1 / 0,01 = **100**: hay que tratar a 100 pacientes para evitar una muerte. Aunque la RRR "suena" importante, el beneficio absoluto es pequeño.

??? repaso "4. En un estudio de casos y controles de cáncer gástrico, 60 de 100 casos y 30 de 100 controles tenían infección por H. pylori. Calcule e interprete el OR."
    Tabla: a = 60 (casos expuestos), b = 30 (controles expuestos), c = 40 (casos no expuestos), d = 70 (controles no expuestos). **OR** = (60 × 70) / (30 × 40) = 4200 / 1200 = **3,5**. La odds de haber tenido infección por *H. pylori* es **3,5 veces mayor** en los casos que en los controles: la infección es un **factor de riesgo**. Si el IC 95 % no incluye el 1, es significativo.

??? repaso "5. Se observa que las comunas con mayor consumo de alcohol per cápita tienen mayor tasa de cirrosis. ¿Qué diseño es y qué precaución tomaría al interpretarlo?"
    Es un estudio **ecológico** (la unidad de análisis es la **comuna**). La precaución es la **falacia ecológica**: no se puede concluir que **las personas** que más beben son las que se enferman, porque no se conocen la exposición y el efecto de cada **individuo**; además puede haber **confusión** (por ejemplo, hepatitis virales o nivel socioeconómico). Sirve para **generar hipótesis**.

??? repaso "6. ¿Por qué el ensayo clínico aleatorizado es el mejor diseño para evaluar un tratamiento y qué es el análisis por intención de tratar?"
    Porque la **aleatorización** reparte de manera equilibrada entre los grupos los factores pronósticos **conocidos y desconocidos**, de modo que la única diferencia sistemática sea el tratamiento: controla la **confusión**. Con el **ciego** y el **ocultamiento** de la asignación se reducen los sesgos de medición y de selección. El análisis por **intención de tratar** incluye a cada paciente en el grupo al que fue **asignado**, aunque haya abandonado o cambiado de tratamiento; **mantiene la comparabilidad** lograda por la aleatorización y refleja la efectividad en condiciones reales.

## Referencias

1. Grimes DA, Schulz KF. An overview of clinical research: the lay of the land. *Lancet.* 2002;359(9300):57–61. doi:[10.1016/S0140-6736(02)07283-5](https://doi.org/10.1016/S0140-6736(02)07283-5)
2. von Elm E, Altman DG, Egger M, et al. The Strengthening the Reporting of Observational Studies in Epidemiology (STROBE) statement: guidelines for reporting observational studies. *Lancet.* 2007;370(9596):1453–1457. doi:[10.1016/S0140-6736(07)61602-X](https://doi.org/10.1016/S0140-6736(07)61602-X)
3. Hopewell S, Chan AW, Collins GS, et al. CONSORT 2025 statement: updated guideline for reporting randomised trials. *BMJ.* 2025;389:e081123. doi:[10.1136/bmj-2024-081123](https://doi.org/10.1136/bmj-2024-081123)
4. World Medical Association. World Medical Association Declaration of Helsinki: ethical principles for medical research involving human participants. *JAMA.* 2025;333(1). doi:[10.1001/jama.2024.21972](https://doi.org/10.1001/jama.2024.21972)
5. Centers for Disease Control and Prevention. *Principles of epidemiology in public health practice.* 3.ª ed. Atlanta: CDC; 2012. [cdc.gov](https://archive.cdc.gov/www_cdc_gov/csels/dsepd/ss1978/index.html)
6. Biblioteca del Congreso Nacional de Chile. Ley 20.120, sobre la investigación científica en el ser humano, su genoma, y prohíbe la clonación humana. [bcn.cl](https://www.bcn.cl/leychile/navegar?idNorma=253478)
