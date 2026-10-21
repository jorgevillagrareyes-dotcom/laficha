---
tags:
  - Salud pública
---

# Demografía, indicadores de nivel de salud y fuentes de información

<div class="ficha" markdown>

**Área**
Salud pública · Demografía · Bioestadística · Epidemiología

**Fuentes principales**
INE: Censo de Población y Vivienda 2024 (primeros resultados, 2025) · INE: Estadísticas Vitales, cifras provisionales 2025 (2026) · INE: Estimaciones y Proyecciones de Población base 2024 · DEIS-MINSAL: estadísticas de defunciones y egresos

**Otras fuentes**
OPS: *Indicadores de salud: aspectos conceptuales y operativos* (2018) · Murray: años de vida ajustados por discapacidad (carga de enfermedad) · Ver [conceptos y prevención en salud pública](conceptos-prevencion-y-determinantes-de-la-salud.md) y [diagnóstico de situación de salud](diagnostico-de-situacion-de-salud-y-priorizacion.md)

**EUNACOM**
7.01.3.007 Demografía y salud pública · 7.01.3.009 Indicadores de nivel de salud: cálculo e interpretación · 7.01.3.011 Fuentes de información para el diagnóstico (conocimientos generales)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Demografía**: estudia el **tamaño**, la **estructura** (edad, sexo) y la **dinámica** (natalidad, mortalidad, migración) de la población. Es el **denominador** de casi todos los indicadores.
    - **Chile envejece**: Censo 2024, **18,48 millones**; **14 %** tiene **65 años o más** y **17,7 %** menos de 15; **índice de envejecimiento 79**. La **tasa global de fecundidad** cayó a **0,99** hijos por mujer en 2025 (cifra provisional), muy bajo el **reemplazo (2,1)**.
    - **Transición demográfica** (baja la mortalidad y luego la natalidad) y **transición epidemiológica** (de infecciosas a **crónicas no transmisibles**): Chile está en etapa **avanzada**.
    - **Tasa** = casos / población en riesgo × constante, en un **tiempo y lugar**. Para comparar poblaciones con distinta estructura de edad se usan **tasas ajustadas** (método directo o indirecto).
    - **Mortalidad infantil** (< 1 año / nacidos vivos × 1000): el indicador más sensible del **nivel de desarrollo**. Chile: **5,8 por 1000** (2025). La **mortalidad materna** se expresa por **100 000 nacidos vivos**.
    - **Letalidad** (muertes / casos) mide **gravedad**; **mortalidad** (muertes / población) mide **riesgo de morir** en la población.
    - **AVPP** (años de vida potencialmente perdidos) pesan las muertes **prematuras**; **AVISA** (AVAD, DALY) suman los años perdidos por **muerte prematura** y por **discapacidad**.
    - **Fuentes**: **censo**, **estadísticas vitales** (Registro Civil, INE, DEIS), **notificación obligatoria**, **egresos hospitalarios**, registros de programas (REM), **encuestas** (ENS, CASEN) y registros especiales (cáncer, GES).

## Demografía y salud pública

- **Demografía**: ciencia que estudia las **poblaciones humanas**: su **tamaño**, **composición** (edad, sexo, distribución geográfica) y **cambios** (nacimientos, defunciones, migraciones).
- **Demografía estática**: la población en **un momento** (censo, pirámide de población).
- **Demografía dinámica**: los **cambios** de la población en el tiempo (natalidad, mortalidad, migración).
- **Ecuación compensadora**: población final = población inicial + **nacimientos** − **defunciones** + **inmigrantes** − **emigrantes**.
- **Crecimiento natural** (vegetativo) = nacimientos − defunciones. **Crecimiento total** = crecimiento natural + saldo migratorio.

### Pirámide de población

| Forma | Estructura | Ejemplo |
|---|---|---|
| **Progresiva** (triangular, base ancha) | Natalidad y mortalidad **altas**; población **joven** | Países de bajo desarrollo; Chile en 1960 |
| **Estacionaria** (campana) | Natalidad y mortalidad **bajas** y estables | Transición avanzada |
| **Regresiva** (bulbo, base angosta) | Natalidad **muy baja**, población **envejecida** | Europa, Japón; Chile se acerca a este perfil |

### Transición demográfica y epidemiológica

``` mermaid
flowchart LR
    A["Etapa 1<br/>Natalidad y mortalidad altas<br/>Crecimiento lento"] --> B["Etapa 2<br/>Baja la mortalidad<br/>Natalidad alta<br/>Crecimiento explosivo"]
    B --> C["Etapa 3<br/>Baja la natalidad<br/>Crecimiento se frena"]
    C --> D["Etapa 4<br/>Natalidad y mortalidad bajas<br/>Envejecimiento"]
    D --> E["Etapa 5 (propuesta)<br/>Natalidad bajo el reemplazo<br/>Población decrece"]
    B -. "Transición epidemiológica" .-> F["De infecciosas,<br/>desnutrición y causas<br/>maternoinfantiles..."]
    F --> G["...a enfermedades crónicas<br/>no transmisibles, cáncer,<br/>lesiones y salud mental"]
```

*Figura 1. Transición demográfica y su relación con la transición epidemiológica. Esquema propio.*

- **Transición demográfica**: paso de una población con **alta natalidad y alta mortalidad** a otra con **baja natalidad y baja mortalidad**. Primero baja la **mortalidad** (saneamiento, vacunas, nutrición, atención maternoinfantil) y después la **natalidad** (urbanización, educación de la mujer, anticoncepción).
- **Transición epidemiológica** (Omran, 1971): cambio en el **perfil de enfermedad y muerte** desde las **infecciosas**, la desnutrición y las causas **maternoinfantiles** hacia las **enfermedades crónicas no transmisibles** (cardiovasculares, cáncer, diabetes), las **lesiones** y la **salud mental**.
- **Polarización epidemiológica** (Latinoamérica): coexisten las enfermedades **crónicas** con problemas **infecciosos** o carenciales en los grupos más pobres; además, las enfermedades emergentes y reemergentes (VIH, TBC, sífilis, dengue).

!!! chile "Demografía de Chile"
    - **Censo 2024** (INE, primeros resultados de marzo de 2025): **18 480 432** personas censadas, **5 %** más que en 2017.
    - **65 años o más**: **14 %** (6,6 % en 1992 y 11,4 % en 2017). **Menores de 15 años**: **17,7 %** (29,4 % en 1992).
    - **Índice de envejecimiento**: **79** personas de 65 años o más por cada 100 menores de 15 (22,3 en 1992 y 56,9 en 2017). Más alto en **Valparaíso (98,6)** y más bajo en Tarapacá (43,9).
    - **Estadísticas vitales 2025** (cifras provisionales del INE): **146 446 nacimientos** (46,9 % menos que en 1993), **126 428 defunciones**, **tasa global de fecundidad 0,99** (por primera vez bajo 1 hijo por mujer), **mortalidad infantil 5,8 por 1000** nacidos vivos y **edad media de la fecundidad 30 años**. **19,7 %** de los nacidos vivos tuvo **madre extranjera**.
    - **Esperanza de vida al nacer**: **~ 82 años** (proyección del INE base 2024 para 2026: **81,8**; hombres **79,5** y mujeres **84,3**).
    - **Principales causas de muerte**: enfermedades del **sistema circulatorio** y **tumores malignos**, cada uno con alrededor de **un cuarto** de las defunciones (DEIS).
    - Chile está en una etapa **avanzada** de las transiciones demográfica y epidemiológica: **envejecimiento rápido**, **fecundidad muy baja** y predominio de las **enfermedades crónicas**.

## Indicadores de nivel de salud

- **Indicador de salud**: variable **medible** que refleja el estado de salud de una población, sus determinantes o el desempeño del sistema. Debe ser **válido**, **confiable**, **sensible**, **específico**, **disponible** y **comparable**.
- **Tipos de medidas**:
    - **Número absoluto**: útil para planificar recursos ("¿cuántas camas?"), no para comparar.
    - **Razón**: cociente entre dos magnitudes **independientes** (el numerador **no** está incluido en el denominador). Ejemplo: razón hombre/mujer, razón de mortalidad materna.
    - **Proporción**: el numerador **está incluido** en el denominador; va de 0 a 1 (o de 0 a 100 %). Ejemplo: mortalidad proporcional, letalidad, prevalencia.
    - **Tasa**: mide la **velocidad** con que ocurre un evento en una población **en riesgo**, en un **tiempo** definido. Numerador: eventos; denominador: población en riesgo (habitualmente a **mitad del período**, el **30 de junio**); multiplicada por una **constante** (100, 1000, 100 000).

### Tasas crudas, específicas y ajustadas

| Tipo | Qué mide | Uso |
|---|---|---|
| **Cruda** (general) | Eventos en **toda** la población | Describe la carga real; **no sirve para comparar** poblaciones con distinta estructura de edad |
| **Específica** | Eventos en un **subgrupo** (edad, sexo, causa) | Compara grupos homogéneos |
| **Ajustada** (estandarizada) | Tasa que tendría la población si tuviera la **misma estructura** que una **población estándar** | **Comparar** poblaciones o períodos con distinta estructura de edad |

- **Ajuste por método directo**: se aplican las **tasas específicas** de cada población a una **población estándar** común. Requiere conocer las tasas específicas por edad.
- **Ajuste por método indirecto**: se aplican las tasas específicas de una **población estándar** a la estructura de la población en estudio para obtener los **casos esperados**. Se usa cuando las tasas específicas son **inestables** (poblaciones pequeñas). Resultado: **razón de mortalidad estandarizada** (RME, SMR) = **observados / esperados**. RME > 1: más muertes que las esperadas.
- **Ejemplo clásico**: una comuna con mucha población **envejecida** tiene una tasa **cruda** de mortalidad más alta que una comuna joven, aunque su tasa **ajustada** sea igual o menor.

### Indicadores de mortalidad

| Indicador | Fórmula | Constante | Comentario |
|---|---|---|---|
| **Tasa de mortalidad general** | Defunciones totales / población a mitad de año | × 1000 | Depende de la estructura de edad |
| **Tasa específica por causa** | Defunciones por la causa / población | × 100 000 | |
| **Mortalidad proporcional** | Defunciones por una causa (o edad) / defunciones totales | × 100 | **No** mide riesgo; mide **importancia relativa** |
| **Índice de Swaroop** | Defunciones de **≥ 50 años** / defunciones totales | × 100 | Alto en países **desarrollados** |
| **Letalidad** | Defunciones por la enfermedad / **casos** de la enfermedad | × 100 | Mide **gravedad**; en un período definido |
| **Tasa de mortalidad infantil** | Defunciones de **< 1 año** / **nacidos vivos** del año | × 1000 | El indicador más sensible del **nivel de vida** |
| **Mortalidad neonatal** | Defunciones de **< 28 días** / nacidos vivos | × 1000 | Refleja la atención **perinatal** y las causas **congénitas** |
| **Mortalidad neonatal precoz** | Defunciones de **< 7 días** / nacidos vivos | × 1000 | |
| **Mortalidad postneonatal** | Defunciones de **28 días a < 1 año** / nacidos vivos | × 1000 | Refleja causas **ambientales** (infecciones, desnutrición) |
| **Mortalidad fetal tardía** | Mortinatos de **≥ 28 semanas** (o según la norma, ≥ 22 semanas o ≥ 500 g) / (nacidos vivos + mortinatos) | × 1000 | |
| **Mortalidad perinatal** | Mortinatos (fetales tardías) + defunciones neonatales **precoces** / (nacidos vivos + mortinatos) | × 1000 | Mide la calidad de la atención del **embarazo y el parto** |
| **Mortalidad materna** (razón) | Defunciones maternas (embarazo, parto o hasta **42 días** posparto, por causas relacionadas) / **nacidos vivos** | × **100 000** | Técnicamente es una **razón** |
| **Mortalidad de 1 a 4 años** | Defunciones de 1 a 4 años / población de 1 a 4 años | × 1000 | Sensible a causas ambientales |

!!! alarma "Errores frecuentes en el EUNACOM"
    - El denominador de la **mortalidad infantil**, neonatal y materna son los **nacidos vivos**, **no** la población menor de 1 año ni las mujeres en edad fértil.
    - La **mortalidad proporcional** no es una tasa: que el cáncer explique el 25 % de las muertes no indica cuál es el **riesgo** de morir por cáncer.
    - **Letalidad ≠ mortalidad**: el ébola tiene **alta letalidad** y baja mortalidad poblacional; la cardiopatía coronaria tiene letalidad moderada pero **alta mortalidad**.
    - Comparar tasas **crudas** de poblaciones con estructura de edad distinta lleva a conclusiones **falsas**: hay que **ajustar**.
    - En la **mortalidad infantil** de un país desarrollado predomina el componente **neonatal** (prematurez, malformaciones); el componente **postneonatal** baja primero con el desarrollo.

### Indicadores de natalidad, fecundidad y estructura

| Indicador | Fórmula |
|---|---|
| **Tasa de natalidad** | Nacidos vivos / población total × 1000 |
| **Tasa de fecundidad general** | Nacidos vivos / mujeres de **15 a 49 años** × 1000 |
| **Tasa específica de fecundidad por edad** | Nacidos vivos de madres de una edad / mujeres de esa edad × 1000 |
| **Tasa global de fecundidad (TGF)** | **Suma** de las tasas específicas por edad (por 1 mujer). Número **promedio de hijos** que tendría una mujer al final de su vida fértil. **Reemplazo: 2,1** |
| **Tasa bruta de reproducción** | Como la TGF, pero solo con hijas **mujeres** |
| **Tasa neta de reproducción** | Como la bruta, corregida por la **mortalidad** de las mujeres; **1** = reemplazo |
| **Índice de envejecimiento** | Población de **≥ 65 años** (o ≥ 60) / población de **< 15 años** × 100 |
| **Índice de dependencia** (demográfica) | (Población de < 15 + población de ≥ 65) / población de 15 a 64 × 100 |
| **Índice de masculinidad** | Hombres / mujeres × 100 |
| **Esperanza de vida al nacer** | Años que **en promedio** viviría un recién nacido si se mantuvieran las **tasas de mortalidad por edad** actuales (se obtiene de una **tabla de vida**). **No** depende de la estructura de edad |

### Indicadores de morbilidad y de carga de enfermedad

- **Incidencia**, **prevalencia** y sus relaciones: ver [epidemiología descriptiva](epidemiologia-descriptiva-vigilancia-y-control-de-enfermedades.md).
- **Años de vida potencialmente perdidos (AVPP)**: suma, para cada muerte, de la diferencia entre una **edad límite** (por ejemplo, 80 años o la esperanza de vida) y la **edad de la muerte**. Da más peso a las muertes de **jóvenes**: las **lesiones** (accidentes, homicidios, suicidios) suben en el ranking.
- **Años de vida ajustados por discapacidad (AVISA**, AVAD o **DALY)**: **AVISA = AVP (años perdidos por muerte prematura) + AVD (años vividos con discapacidad)**. Un AVISA es **un año de vida sana perdido**. Permite comparar enfermedades que **matan** con otras que **discapacitan** (por ejemplo, la **depresión** y los trastornos musculoesqueléticos suben mucho en el ranking).
- **Esperanza de vida libre de discapacidad** o **ajustada por salud**: años que se esperaría vivir en **buena salud**.
- **Indicadores de recursos y de uso de servicios**: médicos por habitante, camas por habitante, egresos hospitalarios, **índice ocupacional**, **promedio de días de estada**, **índice de rotación** de camas, cobertura de vacunas y de programas.

### Ejemplo resuelto

Una comuna de **200 000** habitantes (al 30 de junio) registra en el año **1400 defunciones** totales, **2000 nacidos vivos**, **14 defunciones de menores de 1 año**, de las cuales **9** fueron de **menores de 28 días**, y **350 defunciones por enfermedades cardiovasculares**. Hubo **500 casos** de neumonía, con **25** muertes.

- **Mortalidad general**: 1400 / 200 000 × 1000 = **7 por 1000** habitantes.
- **Mortalidad infantil**: 14 / 2000 × 1000 = **7 por 1000 nacidos vivos**.
- **Mortalidad neonatal**: 9 / 2000 × 1000 = **4,5 por 1000** nacidos vivos; **postneonatal**: 5 / 2000 × 1000 = **2,5 por 1000**.
- **Mortalidad cardiovascular**: 350 / 200 000 × 100 000 = **175 por 100 000** habitantes.
- **Mortalidad proporcional cardiovascular**: 350 / 1400 × 100 = **25 %** de las defunciones.
- **Letalidad de la neumonía**: 25 / 500 × 100 = **5 %**.
- **Tasa de natalidad**: 2000 / 200 000 × 1000 = **10 por 1000** habitantes.

## Fuentes de información

| Fuente | Qué aporta | Responsable en Chile |
|---|---|---|
| **Censo de población y vivienda** | Tamaño y estructura de la población (**denominadores**), vivienda, educación, migración | **INE** (último: **2024**) |
| **Estimaciones y proyecciones de población** | Denominadores de los años intercensales | INE |
| **Estadísticas vitales** | Nacimientos, defunciones (con **causa básica** según la **CIE-10**), matrimonios | **Registro Civil** (inscribe), **INE** y **DEIS-MINSAL** (procesan) |
| **Notificación obligatoria (ENO)** | Casos de enfermedades transmisibles y otros eventos | Médico tratante → establecimiento → **SEREMI de Salud** → MINSAL (Departamento de Epidemiología) |
| **Egresos hospitalarios** | Morbilidad **hospitalaria** (diagnóstico de egreso), días de estada | DEIS |
| **Registros estadísticos mensuales (REM)** | Actividades y prestaciones de la red pública (consultas, controles, vacunas, programas) | DEIS |
| **Encuestas poblacionales** | Prevalencia de enfermedades y **factores de riesgo** (**ENS**), condiciones **socioeconómicas** (**CASEN**), calidad de vida, consumo de drogas (SENDA) | MINSAL, Ministerio de Desarrollo Social, SENDA |
| **Registros especiales** | Cáncer (registros poblacionales), garantías GES (**SIGGES**), vacunas (**RNI**), licencias médicas, accidentes del trabajo | MINSAL, FONASA, Superintendencia de Salud, SUSESO |
| **Sistemas de vigilancia centinela** | Influenza y virus respiratorios (IRAG), diarreas | MINSAL, ISP |

- **Fuentes primarias**: los datos se recogen **directamente** para el estudio (encuesta propia).
- **Fuentes secundarias**: datos ya registrados con otro fin (estadísticas vitales, egresos). Son baratas y disponibles, pero pueden tener **subregistro** y errores de **codificación**.
- **Calidad de la información**: **cobertura** (¿se registran todos los eventos?), **oportunidad**, **exactitud** (por ejemplo, la causa de muerte mal certificada) y **comparabilidad**. Un buen indicador de calidad de las estadísticas de mortalidad es el porcentaje de defunciones con **causa mal definida** (códigos R de la CIE-10) y el porcentaje con **certificación médica**.
- **Rol del médico**: la calidad de las estadísticas depende de que el médico **certifique bien la causa de muerte** y **notifique** las enfermedades (ver [documentos médico-legales](documentos-medico-legales-y-ejercicio-profesional.md)).

## Perlas para el EUNACOM

!!! perla "Para recordar"
    - **Tasa** = eventos / población **en riesgo** × constante, con **tiempo y lugar**. **Proporción**: el numerador está en el denominador. **Razón**: no lo está.
    - **Mortalidad infantil, neonatal y materna**: denominador = **nacidos vivos**. Materna × **100 000**; infantil × **1000**.
    - **Neonatal** (< 28 días) refleja la atención **perinatal** y las causas congénitas; **postneonatal** refleja el **ambiente**.
    - **Letalidad** = gravedad (muertes / **casos**). **Mortalidad** = riesgo poblacional (muertes / **población**).
    - Comparar poblaciones con distinta edad: **tasas ajustadas**. Método **directo** (población estándar) o **indirecto** (**RME** = observados / esperados).
    - **AVPP**: pesan la muerte **joven**. **AVISA** = muerte prematura + **discapacidad**.
    - **TGF** de reemplazo = **2,1**. Chile: **0,99** (2025). **Índice de envejecimiento**: 79 (Censo 2024).
    - **Esperanza de vida** no depende de la estructura de edad (sale de una tabla de vida).

## Preguntas de repaso

??? repaso "1. La comuna A tiene una tasa cruda de mortalidad de 9 por 1000 y la comuna B de 5 por 1000. A tiene el doble de población mayor de 65 años. ¿Puede concluir que en A el riesgo de morir es mayor?"
    **No.** La tasa **cruda** está influida por la **estructura de edad**: la comuna A tiene más adultos mayores, que mueren más. Para comparar hay que calcular **tasas ajustadas por edad** (método **directo** con una población estándar) o comparar **tasas específicas** por grupo de edad. Si las tasas específicas de A son inestables (población pequeña), se usa el método **indirecto** y la **RME**.

??? repaso "2. En un año nacen 10 000 niños vivos y mueren 60 menores de 1 año, 40 de ellos en los primeros 28 días. Calcule la mortalidad infantil, neonatal y postneonatal e interprete."
    **Infantil**: 60 / 10 000 × 1000 = **6 por 1000** nacidos vivos. **Neonatal**: 40 / 10 000 × 1000 = **4 por 1000**. **Postneonatal**: 20 / 10 000 × 1000 = **2 por 1000**. Predomina el componente **neonatal** (dos tercios), típico de un país con **mortalidad infantil baja**, donde las causas son la **prematurez** y las **malformaciones congénitas** más que las infecciones o la desnutrición.

??? repaso "3. Hubo 200 casos de hantavirus en una región y 60 fallecieron. La región tiene 1 000 000 de habitantes. ¿Cuál es la letalidad y cuál la mortalidad?"
    **Letalidad**: 60 / 200 × 100 = **30 %** (gravedad de la enfermedad). **Mortalidad**: 60 / 1 000 000 × 100 000 = **6 por 100 000** habitantes (riesgo de morir por hantavirus en la población). La enfermedad es muy **grave** pero poco **frecuente**.

??? repaso "4. ¿Por qué en un ranking por AVPP los accidentes de tránsito y los suicidios suben respecto del ranking por número de muertes? ¿Y por qué la depresión sube en el ranking por AVISA?"
    Los **AVPP** suman los años que faltaban hasta una edad límite: las muertes de **jóvenes** pesan mucho más que las de adultos mayores, y los accidentes y suicidios matan a gente joven. Los **AVISA** suman los años perdidos por **muerte prematura** y por **discapacidad**: la **depresión** casi no mata directamente, pero causa mucha **discapacidad** durante años.

??? repaso "5. Describa la situación demográfica actual de Chile y sus implicancias para el sistema de salud."
    Chile está en una etapa **avanzada** de la transición demográfica: **fecundidad muy bajo el reemplazo** (TGF **0,99** en 2025), **esperanza de vida ~ 82 años**, **14 %** de la población con **65 años o más** e **índice de envejecimiento 79** (Censo 2024), con un aporte creciente de la **migración**. Implicancias: predominio de **enfermedades crónicas**, **multimorbilidad**, **dependencia** y **demencia**; mayor demanda de **cuidados de largo plazo**, geriatría y rehabilitación; y presión sobre el **financiamiento** y la seguridad social.

??? repaso "6. Usted es médico de un CESFAM y quiere conocer la prevalencia de hipertensión de su comuna y la proporción de hipertensos compensados bajo control. ¿Qué fuentes usaría?"
    La **prevalencia poblacional** se estima con la **Encuesta Nacional de Salud (ENS)** (representativa nacional y regional). La población **bajo control** y su **compensación** salen de los **registros del programa** (Programa de Salud Cardiovascular, **REM** de la serie P) del propio establecimiento. Los **denominadores** comunales, de las **proyecciones del INE** o de la **población inscrita** validada por FONASA (per cápita).

## Referencias

1. Instituto Nacional de Estadísticas. Censo de Población y Vivienda 2024: primeros resultados. Santiago: INE; 2025. [ine.gob.cl](https://www.ine.gob.cl/estadisticas-por-tema/demografia-y-poblacion/demografia)
2. Instituto Nacional de Estadísticas. Estadísticas vitales: cifras provisionales 2025 confirman que los nacimientos en Chile disminuyeron un 46,9 % en 32 años. Santiago: INE; 27 de mayo de 2026. [ine.gob.cl](https://www.ine.gob.cl/sala-de-prensa/prensa/general/noticia/2026/05/27/estadísticas-vitales-cifras-provisionales-2025-confirman-que-los-nacimientos-en-chile-disminuyeron-un-46-9-en-32-años)
3. Instituto Nacional de Estadísticas. Estadísticas vitales. [ine.gob.cl](https://www.ine.gob.cl/estadisticas-por-tema/demografia-y-poblacion/estadisticas-vitales)
4. Departamento de Estadísticas e Información de Salud (DEIS), Ministerio de Salud de Chile. Estadísticas de defunciones y egresos hospitalarios. [deis.minsal.cl](https://deis.minsal.cl/)
5. Organización Panamericana de la Salud. *Indicadores de salud: aspectos conceptuales y operativos.* Washington, D.C.: OPS; 2018. [paho.org](https://www.paho.org/es/documentos/indicadores-salud-aspectos-conceptuales-operativos)
6. Omran AR. The epidemiologic transition: a theory of the epidemiology of population change. *Milbank Mem Fund Q.* 1971;49(4):509–538. doi:[10.2307/3349375](https://doi.org/10.2307/3349375)
7. Murray CJL. Quantifying the burden of disease: the technical basis for disability-adjusted life years. *Bull World Health Organ.* 1994;72(3):429–445. [PMC2486718](https://pmc.ncbi.nlm.nih.gov/articles/PMC2486718/)
