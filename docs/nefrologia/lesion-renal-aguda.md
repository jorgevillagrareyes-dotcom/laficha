---
tags:
  - Nefrología
  - Frecuente en sala
  - Urgencia
---

# Lesión renal aguda

<div class="ficha" markdown>

**Subespecialidad**
Nefrología · Paciente hospitalizado

**Guías principales**
KDIGO 2012 (lesión renal aguda, vigente) · Borrador KDIGO 2026 de LRA y enfermedad renal aguda (revisión pública, marzo 2026)

**Otras fuentes**
ADQI · Estudios SMART, AKIKI, STARRT-AKI · ACR-NKF 2020 (contraste yodado)

**EUNACOM**
1.09.2.010 IRA prerrenal · 1.09.2.009 IRA obstructiva · 1.09.2.004 Enfermedad tubular aguda · 1.09.2.008 Hipovolemia · 1.09.1.013 Nefritis intersticial

**Revisado**
Septiembre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **LRA**: caída brusca de la función renal: **creatinina ↑ ≥ 0,3 mg/dL en 48 h**, **≥ 1,5 veces el basal en 7 días**, o **diuresis < 0,5 mL/kg/h por ≥ 6 h**. El borrador KDIGO 2026 agrega la **cistatina C** (≥ 1,5 veces) y los **biomarcadores de daño**.
    - Tres grandes causas: **prerrenal** (hipoperfusión; la más frecuente), **renal o intrínseca** (necrosis tubular aguda, nefritis intersticial, glomerulonefritis, vascular) y **posrenal** (obstrucción).
    - En todo paciente con LRA: **volemia**, **fármacos** (suspender nefrotóxicos), **orina completa con sedimento** y **ecografía renal** (descartar obstrucción).
    - Tratamiento: corregir la causa, **cristaloides balanceados** si hay hipovolemia, **evitar sobrecarga de volumen**, ajustar dosis y **evitar nefrotóxicos**.
    - **Diálisis de urgencia (AEIOU)**: acidosis grave, hiperkalemia refractaria, intoxicaciones dializables, sobrecarga de volumen refractaria y uremia sintomática. Iniciarla antes sin indicación urgente **no** mejora la sobrevida.
    - La LRA **aumenta el riesgo de ERC y de muerte**: controlar la función renal después del alta.

## Definición

!!! guia "Criterios de LRA (KDIGO 2012, vigentes)"
    Cualquiera de los siguientes:

    - Aumento de la **creatinina ≥ 0,3 mg/dL** en **48 horas**.
    - Aumento de la **creatinina ≥ 1,5 veces el valor basal**, que se sabe o presume ocurrió en los **7 días** previos.
    - **Diuresis < 0,5 mL/kg/h por ≥ 6 horas**.

**Novedades del borrador KDIGO 2026** (aún no es la versión definitiva):

- Agrega como criterio funcional el aumento de la **cistatina C sérica ≥ 1,5 veces** el basal en 7 días (útil cuando la creatinina no es confiable: sarcopenia, amputados, cirrosis).
- Agrega **criterios estructurales**: elevación de un **biomarcador de daño renal** validado (por ejemplo TIMP-2 × IGFBP7, NGAL) en su contexto aprobado.
- Separa la **LRA transitoria** (≤ 48 horas) de la **persistente** (> 48 horas y hasta 7 días).
- Consolida el concepto de **enfermedad renal aguda (ERA / AKD)**: alteración de la función o estructura renal de **≤ 3 meses** (LRA, TFG < 60, caída de TFG ≥ 35 mL/min o creatinina > 50 %, o marcadores de daño), que es el puente entre la LRA y la ERC.

## Epidemiología

### Mundial

- Afecta a **~ 10–20 % de los pacientes hospitalizados** y a **> 50 % de los pacientes en UCI**.
- **Mortalidad**: aumenta con la gravedad; **~ 50 %** en pacientes críticos que requieren diálisis.
- Un episodio de LRA aumenta el riesgo de **ERC**, **ERC terminal**, **eventos cardiovasculares** y **muerte** a largo plazo, incluso si la creatinina vuelve al basal.
- Causas más frecuentes en el hospital: **sepsis**, **cirugía mayor** (sobre todo cardíaca), **hipovolemia**, **nefrotóxicos** e **IC**.
- La iniciativa "0by25" de la Sociedad Internacional de Nefrología busca eliminar las muertes prevenibles por LRA, sobre todo en países de ingresos bajos y medios (diarrea, infecciones, toxinas).

### Chile

!!! chile "Datos nacionales"
    - No hay registros nacionales de incidencia de LRA; en hospitales chilenos se reportan frecuencias similares a las internacionales en pacientes hospitalizados y críticos.
    - La **ERC** (principal factor de riesgo de LRA) afecta a ~ 3 % de los adultos (ENS 2016–2017) y a ~ 12 % de los pacientes del Programa de Salud Cardiovascular.
    - Causas locales a considerar: **hantavirus** (síndrome cardiopulmonar con LRA), **leptospirosis** en zonas rurales del sur, **[loxoscelismo cutáneo-visceral](../especialidades/dermatologia/loxoscelismo-e-higiene-de-la-vivienda.md)** (mordedura de la araña del rincón: hemólisis y LRA).

## Etiología y factores de riesgo

``` mermaid
flowchart TD
    A["Lesión renal aguda"] --> B["PRERRENAL (~ 40–60 %)<br/>↓ perfusión renal, riñón estructuralmente sano"]
    A --> C["RENAL / INTRÍNSECA"]
    A --> D["POSRENAL (~ 5–10 %)<br/>obstrucción de la vía urinaria"]
    B --> B1["Hipovolemia: vómitos, diarrea, hemorragia,<br/>diuréticos, quemaduras, tercer espacio"]
    B --> B2["↓ Gasto cardíaco: IC, shock cardiogénico"]
    B --> B3["Vasodilatación: sepsis, cirrosis (SHR)"]
    B --> B4["Hemodinamia glomerular: AINE, IECA/ARA-II,<br/>inhibidores de calcineurina"]
    C --> C1["Necrosis tubular aguda (la más frecuente):<br/>isquemia prolongada, sepsis,<br/>nefrotóxicos, rabdomiólisis, hemólisis"]
    C --> C2["Nefritis intersticial aguda:<br/>fármacos (β-lactámicos, IBP, AINE),<br/>infecciones, autoinmunes"]
    C --> C3["Glomerulonefritis rápidamente progresiva,<br/>vasculitis, lupus"]
    C --> C4["Vascular: microangiopatía trombótica,<br/>ateroembolia, trombosis de arteria o vena renal"]
    D --> D1["Hiperplasia prostática, globo vesical,<br/>litiasis bilateral o en riñón único,<br/>tumores pélvicos, fibrosis retroperitoneal,<br/>sonda obstruida"]
```

*Figura 1. Causas de lesión renal aguda. Esquema propio.*

**Factores de susceptibilidad**: edad avanzada, **ERC** (el más importante), **albuminuria**, diabetes, IC, cirrosis, EPOC, cáncer, anemia, sexo femenino, sepsis, cirugía mayor, hipovolemia.

**Nefrotóxicos frecuentes**

| Grupo | Ejemplos |
|---|---|
| **Fármacos hemodinámicos** | **AINE**, IECA/ARA-II, diuréticos (sobre todo combinados: la "triple amenaza" AINE + IECA/ARA-II + diurético), inhibidores de calcineurina |
| **Tóxicos tubulares** | **Aminoglucósidos**, **vancomicina** (sobre todo con piperacilina-tazobactam), anfotericina B, **contraste yodado**, cisplatino, foscarnet, tenofovir, colistina |
| **Nefritis intersticial** | **β-lactámicos**, **IBP**, **AINE**, sulfas, rifampicina, alopurinol, inhibidores de checkpoint |
| **Cristales** | Aciclovir EV, metotrexato, sulfadiazina, indinavir, **lisis tumoral** (ácido úrico), etilenglicol (oxalato) |
| **Pigmentos** | **Mioglobina** (rabdomiólisis), hemoglobina (hemólisis) |
| **Otros** | Cadenas livianas (mieloma: riñón de mieloma), fosfato oral (preparación de colonoscopía) |

## Fisiopatología

- **Prerrenal**: la hipoperfusión activa mecanismos de **autorregulación** (vasodilatación aferente por prostaglandinas y vasoconstricción eferente por angiotensina II). Los **AINE** bloquean la primera y los **IECA/ARA-II** la segunda: por eso precipitan LRA en pacientes con volumen efectivo bajo. Los túbulos están sanos, así que **reabsorben ávidamente sodio y agua** (sodio urinario bajo, orina concentrada).
- **Necrosis tubular aguda (NTA)**: la isquemia prolongada o los tóxicos dañan las células tubulares (sobre todo el túbulo proximal y el asa ascendente gruesa en la médula externa, zonas de alto consumo de O₂ y baja pO₂). Las células se desprenden, forman **cilindros** que obstruyen la luz y hay **retrorretrodifusión** del filtrado. Los túbulos dañados pierden la capacidad de reabsorber sodio (sodio urinario alto).
- **Posrenal**: la obstrucción aumenta la presión intratubular y reduce la filtración. Para producir LRA debe ser **bilateral** (o en un riñón único funcionante).
- **Sepsis**: mecanismo mixto (hemodinámico, inflamatorio, microcirculatorio), no siempre con NTA.

## Clasificación

### Estadios KDIGO 2012

| Estadio | Creatinina | Diuresis |
|---|---|---|
| **1** | **1,5–1,9 veces el basal** o ↑ **≥ 0,3 mg/dL** | < 0,5 mL/kg/h por **6–12 h** |
| **2** | **2,0–2,9 veces** el basal | < 0,5 mL/kg/h por **≥ 12 h** |
| **3** | **≥ 3 veces** el basal, o creatinina **≥ 4,0 mg/dL**, o **inicio de diálisis** | < 0,3 mL/kg/h por **≥ 24 h** o **anuria ≥ 12 h** |

Se clasifica según el criterio **más grave** (creatinina o diuresis).

**Borrador KDIGO 2026**: estadifica en tres ejes independientes: **C** (creatinina: C1–C3, mismos cortes), **U** (diuresis: U1–U3) y **B** (biomarcador de daño: B0 negativo o B1 positivo). Ejemplo: "LRA C2 U1 B1".

### Según la diuresis

- **Oligúrica**: < 400 mL/día (peor pronóstico).
- **Anúrica**: < 100 mL/día. Sugiere **obstrucción completa**, **necrosis cortical**, **oclusión vascular bilateral** o **glomerulonefritis rápidamente progresiva**.
- **No oligúrica**: diuresis conservada (por ejemplo, aminoglucósidos o contraste).

## Clínica

- Con frecuencia es **asintomática** y se detecta por el alza de la creatinina en los exámenes.
- **Oliguria** o anuria (aunque la diuresis puede ser normal).
- **Sobrecarga de volumen**: edema, congestión pulmonar, HTA.
- **Síntomas urémicos** (en LRA grave): náuseas, vómitos, anorexia, compromiso de conciencia, asterixis, **frote pericárdico**, sangrado.
- **Pistas de la causa**:
    - **Prerrenal**: sed, ortostatismo, mucosas secas, taquicardia, hipotensión, baja de peso; o signos de IC o cirrosis.
    - **Posrenal**: **globo vesical**, dolor lumbar o suprapúbico, síntomas prostáticos, anuria o diuresis fluctuante.
    - **Nefritis intersticial**: fiebre, **rash** y **eosinofilia** (la tríada completa en < 10–30 %), fármaco nuevo.
    - **Glomerulonefritis**: HTA, edema, **hematuria**, síntomas de vasculitis o lupus (hemoptisis, púrpura, artralgias, sinusitis).
    - **Ateroembolia**: posterior a cateterismo o anticoagulación; **livedo reticularis**, dedos azules, eosinofilia, complemento bajo.
    - **Rabdomiólisis**: trauma, inmovilización prolongada, ejercicio extremo, estatinas, convulsiones; **orina oscura**.

## Diagnóstico

``` mermaid
flowchart TD
    A["Alza de creatinina u oliguria"] --> B["¿Es aguda? Revisar creatininas previas"]
    B --> C["1. Evaluar volemia y hemodinamia<br/>(PA, ortostatismo, yugulares, edema, balance)"]
    B --> D["2. Revisar fármacos y nefrotóxicos<br/>(AINE, IECA/ARA-II, diuréticos, contraste,<br/>aminoglucósidos, vancomicina)"]
    B --> E["3. Descartar obstrucción:<br/>globo vesical (sondeo o ecografía vesical)<br/>ECOGRAFÍA RENAL"]
    B --> F["4. Orina completa con SEDIMENTO<br/>+ índices urinarios (FENa, FEUrea)"]
    F --> G{"Sedimento"}
    G -->|"Inactivo (cilindros hialinos)"| H["Prerrenal (si responde a volumen)"]
    G -->|"Cilindros granulosos 'café barroso',<br/>células tubulares"| I["Necrosis tubular aguda"]
    G -->|"Leucocitos, cilindros leucocitarios"| J["Nefritis intersticial o pielonefritis"]
    G -->|"Hematíes dismórficos,<br/>cilindros eritrocitarios, proteinuria"| K["Glomerulonefritis:<br/>serologías y evaluación urgente por nefrología"]
```

*Figura 2. Enfoque diagnóstico de la LRA. Esquema propio basado en KDIGO.*

### Índices urinarios: prerrenal versus necrosis tubular aguda

| Parámetro | **Prerrenal** | **NTA** |
|---|---|---|
| **Sodio urinario** | **< 20 mEq/L** | **> 40 mEq/L** |
| **Fracción excretada de sodio (FENa)** | **< 1 %** | **> 2 %** |
| **Fracción excretada de urea (FEUrea)** (útil si usa diuréticos) | **< 35 %** | **> 50 %** |
| **Osmolalidad urinaria** | **> 500 mOsm/kg** | **< 350 mOsm/kg** (isostenuria) |
| **Razón BUN/creatinina** | **> 20** | < 15 |
| **Sedimento** | Inactivo, cilindros hialinos | **Cilindros granulosos "café barroso"**, células epiteliales tubulares |
| **Respuesta a volumen** | Mejora en 24–72 h | No mejora |

- **FENa** = (Na orina × Cr plasma) / (Na plasma × Cr orina) × 100.
- **FEUrea** = (urea orina × Cr plasma) / (urea plasma × Cr orina) × 100.
- **Cuidado**: la FENa puede ser **< 1 % en NTA** por contraste, rabdomiólisis, sepsis o sobre ERC; y **> 1 % en prerrenal** si usa **diuréticos** o tiene ERC.

## Laboratorio

- **Creatinina y BUN** seriados; **cistatina C** si se dispone.
- **Electrolitos**: **K⁺** (hiperkalemia), Na⁺, Cl⁻, **bicarbonato** (acidosis), calcio, **fósforo**, magnesio, ácido úrico.
- **Gases venosos** o arteriales si hay acidosis.
- **Hemograma**: anemia, **eosinofilia** (nefritis intersticial, ateroembolia), **esquistocitos y trombocitopenia** (microangiopatía trombótica).
- **Orina completa con sedimento** (examinado por un médico si es posible), **sodio, urea y creatinina urinarios**, **razón proteína o albúmina/creatinina**.
- **CK** (rabdomiólisis: > 5.000–10.000 U/L con riesgo de LRA), **LDH y haptoglobina** (hemólisis).
- **Estudio de glomerulonefritis** si hay hematuria dismórfica o proteinuria: **complemento C3 y C4**, **ANA, anti-DNA**, **ANCA**, **anti-membrana basal glomerular**, serologías de VHB, VHC y VIH, ASO.
- **Electroforesis de proteínas y cadenas livianas libres** (mieloma) en > 50 años sin causa clara.
- **Prueba de estrés con furosemida** (1–1,5 mg/kg EV): una diuresis < 200 mL en 2 horas predice progresión de la LRA (uso en centros seleccionados).

## Imágenes

- **Ecografía renal y vesical**: a **todo paciente con LRA sin causa evidente**. Busca **hidronefrosis** (obstrucción), tamaño renal (riñones pequeños sugieren ERC previa), asimetría, residuo vesical.
- **Eco-Doppler renal**: trombosis de arteria o vena renal, índice de resistencia.
- **TC sin contraste**: litiasis obstructiva, causas de obstrucción.
- **Radiografía de tórax**: congestión pulmonar, hemorragia alveolar (síndrome pulmón-riñón).
- **Biopsia renal**: LRA sin causa clara, sospecha de glomerulonefritis, nefritis intersticial o vasculitis, o falta de recuperación.

## Diagnóstico diferencial

- **ERC** no conocida o **ERC agudizada** (revisar creatininas previas y tamaño renal).
- **Alza de creatinina sin caída real de la TFG** ("pseudo-LRA"): **trimetoprim**, cimetidina, dolutegravir, cobicistat (bloquean la secreción tubular); ingesta de carne o suplementos de creatina; interferencia de laboratorio.
- **Alza "permisiva" de la creatinina** al iniciar IECA, ARA-II o iSGLT2 (hemodinámica, < 30 %) o durante la descongestión en la IC.
- **BUN elevado sin LRA**: hemorragia digestiva alta, corticoides, dieta hiperproteica, catabolismo.

## Tratamiento

### Principios (manejo de soporte)

- **Tratar la causa**: reponer volumen, tratar la sepsis, desobstruir, suspender el fármaco culpable.
- **Optimizar la perfusión**: PAM **≥ 65 mmHg** (más alta en hipertensos crónicos según la respuesta).
- **Volumen**:
    - Si hay **hipovolemia**: **cristaloides balanceados** (Ringer lactato, soluciones tipo Plasma-Lyte) en bolos de 250–500 mL con reevaluación. Son preferibles al suero fisiológico en volúmenes grandes (menos acidosis hiperclorémica y eventos renales, estudio SMART).
    - **Evitar almidones** (hidroxietilalmidón: más LRA y diálisis).
    - **Evitar la sobrecarga de volumen**: aumenta la mortalidad. Reevaluar la volemia varias veces al día.
- **Vasopresores**: **noradrenalina** en el shock vasopléjico. **No usar dopamina** en "dosis renales" (no protege el riñón).
- **Diuréticos**: **no** sirven para prevenir ni tratar la LRA. Úsalos solo para manejar la **sobrecarga de volumen** (furosemida EV).
- **Suspender o ajustar fármacos**: **AINE**, IECA/ARA-II, diuréticos, metformina, iSGLT2 (temporalmente), **ajustar dosis** de antibióticos, anticoagulantes, insulina y otros según la TFG estimada (que es inexacta mientras la creatinina no está estable). **Monitorizar niveles** de vancomicina y aminoglucósidos.
- **Evitar contraste** innecesario y otros nefrotóxicos.
- **Monitorizar**: balance hídrico estricto, **diuresis horaria** (sonda Foley si es necesario), peso diario, creatinina y electrolitos diarios.
- **Nutrición**: aporte proteico de **0,8–1,0 g/kg/día** sin diálisis, 1,0–1,5 g/kg/día con diálisis y hasta 1,7 g/kg/día con terapia continua; no restringir proteínas para retrasar la diálisis.

### Tratamiento específico según la causa

| Causa | Tratamiento |
|---|---|
| **Prerrenal por hipovolemia** | Cristaloides; suspender diuréticos, AINE, IECA/ARA-II |
| **Síndrome cardiorrenal** (IC) | **Descongestión** con diuréticos (no suspenderlos) |
| **Síndrome hepatorrenal** | **Albúmina + terlipresina** (o noradrenalina); suspender diuréticos y nefrotóxicos |
| **Obstrucción** | **Sonda vesical** (globo), **nefrostomía** o catéter ureteral (obstrucción alta). Vigilar la **poliuria posobstructiva** |
| **Nefritis intersticial aguda** | **Suspender el fármaco**; considerar **corticoides** (prednisona 0,5–1 mg/kg/día) si no mejora en pocos días |
| **Glomerulonefritis rápidamente progresiva / vasculitis** | **Urgencia nefrológica**: corticoides en pulsos, inmunosupresión (ciclofosfamida o rituximab), plasmaféresis (anti-MBG) |
| **Rabdomiólisis** | **Hidratación agresiva** con cristaloides (meta de diuresis ~ 200–300 mL/h), corregir electrolitos |
| **Síndrome de lisis tumoral** | Hidratación, **rasburicasa** o alopurinol |
| **Mieloma** | Hidratación, quimioterapia urgente, evitar AINE y contraste |
| **Microangiopatía trombótica** | Según causa (PTT: plasmaféresis; SHU atípico: eculizumab) |

### Manejo de las complicaciones

- **Hiperkalemia**: ver "Alteraciones del potasio". Con cambios en el ECG: **gluconato de calcio**, **insulina + glucosa**, salbutamol; luego eliminar potasio (diuréticos, quelantes, diálisis).
- **Acidosis metabólica**: bicarbonato de sodio si pH < 7,1–7,2 o bicarbonato muy bajo en pacientes seleccionados (sobre todo con LRA estadio 2–3, estudio BICAR-ICU).
- **Sobrecarga de volumen**: furosemida EV (en bolos o infusión); si no responde, diálisis o ultrafiltración.
- **Hiperfosfatemia** e hipocalcemia.

### Terapia de reemplazo renal (diálisis)

!!! alarma "Indicaciones de diálisis urgente (AEIOU)"
    - **A**cidosis metabólica grave (pH < 7,1–7,15) refractaria.
    - **E**lectrolitos: **hiperkalemia** (> 6,5 mEq/L o con cambios en el ECG) refractaria al tratamiento médico.
    - **I**ntoxicaciones dializables: litio, metanol, etilenglicol, salicilatos, metformina con acidosis láctica, valproato.
    - **O**verload: **sobrecarga de volumen** refractaria a diuréticos (edema pulmonar).
    - **U**remia sintomática: **pericarditis**, **encefalopatía**, sangrado urémico (BUN habitualmente > 100 mg/dL).

- **Momento**: iniciar la diálisis **de forma precoz sin una indicación urgente no mejora la sobrevida** (estudios AKIKI y STARRT-AKI) y expone a complicaciones. Se usa una **estrategia diferida**: dializar ante indicaciones urgentes o si la LRA grave persiste sin recuperación (esperar demasiado tampoco es seguro, estudio AKIKI 2).
- **Modalidad**: **hemodiálisis intermitente** en pacientes estables; **terapias continuas** (hemodiafiltración venovenosa continua) en pacientes **hemodinámicamente inestables** o con edema cerebral.
- **Acceso**: catéter venoso central de diálisis (yugular interna derecha de preferencia; evitar la subclavia en pacientes que podrían necesitar fístula).

### Prevención

- **Identificar a los pacientes en riesgo** (ERC, edad, diabetes, IC, sepsis, cirugía mayor) y usar alertas electrónicas.
- **Evitar nefrotóxicos** y las combinaciones de riesgo; monitorizar niveles de fármacos.
- **"Días de enfermedad"**: suspender temporalmente IECA/ARA-II, diuréticos, iSGLT2, metformina y AINE ante vómitos, diarrea o ingesta reducida.
- **Contraste yodado** (ACR-NKF 2020): el riesgo real es bajo con TFGe ≥ 30; en pacientes con **TFGe < 30** (o LRA), usar la **mínima dosis** y **hidratación EV con suero isotónico** si no hay contraindicación. La N-acetilcisteína y el bicarbonato **no** han demostrado beneficio. No negar un examen necesario por temor al contraste.
- **Rabdomiólisis**: hidratación precoz.

## Complicaciones

- **Hiperkalemia**, **acidosis metabólica**, **sobrecarga de volumen** y edema pulmonar.
- **Uremia**: encefalopatía, pericarditis, sangrado por disfunción plaquetaria.
- **Hiperfosfatemia**, hipocalcemia, hipermagnesemia, hiperuricemia.
- **Toxicidad por fármacos** no ajustados.
- **Infecciones** (catéteres, alteración inmune).
- **Poliuria** en la fase de recuperación de la NTA o tras desobstruir (riesgo de hipovolemia, hipokalemia e hiponatremia o hipernatremia).
- A largo plazo: **ERC**, ERC terminal, **eventos cardiovasculares** y mayor **mortalidad**.

## Pronóstico y seguimiento

- La mayoría de las LRA prerrenales se recupera en 24–72 horas; la NTA suele recuperarse en **1–3 semanas**.
- **Recuperación completa** (borrador KDIGO 2026): creatinina o cistatina C < 1,2 veces el basal dentro de 7 días (LRA) o TFGe > 80 % del basal a los 3 meses (ERA).
- Hasta un tercio de los pacientes que requieren diálisis por LRA queda **dependiente de diálisis** o con ERC.
- **Seguimiento después del alta**: control de **creatinina y albuminuria a los ~ 3 meses** (antes si fue grave), presión arterial, revisión de fármacos nefrotóxicos y reintroducción cuidadosa de IECA/ARA-II o iSGLT2 cuando esté indicada.

## Perlas para el internado

!!! perla "Para la sala y el turno"
    - Ante una creatinina que sube, haz siempre las **4 preguntas**: ¿cómo está la volemia?, ¿qué fármacos recibe?, ¿hay obstrucción (globo vesical, sonda tapada)?, ¿qué muestra el sedimento?
    - **Sondea o haz una ecografía vesical** a todo paciente con LRA y diuresis baja, sobre todo a hombres mayores y pacientes con opioides o anticolinérgicos.
    - La **"triple amenaza"** (AINE + IECA/ARA-II + diurético) es una causa clásica y evitable de LRA.
    - **Vancomicina + piperacilina-tazobactam** tiene más nefrotoxicidad: monitoriza niveles y creatinina.
    - La **FENa** no sirve si el paciente recibió **diuréticos**: usa la **FEUrea**.
    - **No indiques furosemida para "hacer orinar"** a un paciente hipovolémico: primero corrige el volumen.
    - Ajusta las dosis con la función renal **real**: con creatinina en ascenso, la TFGe **sobrestima** la función.
    - **Hematuria dismórfica + LRA rápidamente progresiva** (con o sin hemoptisis): llama a nefrología el mismo día.
    - Tras desobstruir una vía urinaria, vigila la **poliuria posobstructiva** y los electrolitos.

## Preguntas de repaso

??? repaso "1. Hombre de 78 años con diarrea por 4 días, en tratamiento con enalapril, hidroclorotiazida e ibuprofeno. Creatinina 2,6 mg/dL (basal 1,0), sodio urinario 12 mEq/L. ¿Diagnóstico y manejo?"
    **LRA prerrenal** (hipovolemia + "triple amenaza"; sodio urinario < 20). Estadio KDIGO **2** (2,6 veces el basal). Manejo: **suspender enalapril, hidroclorotiazida e ibuprofeno**, hidratación con **cristaloides balanceados**, control de diuresis, creatinina y potasio.

??? repaso "2. Paciente con sepsis e hipotensión prolongada; al día 3 creatinina 3,8 mg/dL (basal 0,9), FENa 3 %, sedimento con cilindros granulosos café barroso. ¿Qué tiene?"
    **Necrosis tubular aguda** isquémica (y séptica): FENa > 2 %, cilindros granulosos "café barroso". Estadio KDIGO **3** (> 3 veces el basal). Manejo de soporte: perfusión adecuada, evitar sobrecarga y nefrotóxicos, ajustar dosis y diálisis si aparecen indicaciones urgentes.

??? repaso "3. Hombre de 72 años con anuria, dolor suprapúbico y globo vesical palpable. ¿Qué haces primero?"
    **LRA posrenal** por retención urinaria (probable hiperplasia prostática): **sonda vesical** de inmediato, ecografía renal (hidronefrosis) y vigilar la **poliuria posobstructiva** y los electrolitos.

??? repaso "4. Mujer con LRA 10 días después de iniciar amoxicilina, con rash, fiebre y eosinofilia; sedimento con leucocitos y cilindros leucocitarios. ¿Diagnóstico y tratamiento?"
    **Nefritis intersticial aguda** por β-lactámico. **Suspender el fármaco**; si no mejora en pocos días, considerar **corticoides** (y biopsia renal si hay dudas).

??? repaso "5. ¿Cuándo indicas diálisis de urgencia en un paciente con LRA?"
    Ante **AEIOU**: **acidosis** grave refractaria, **hiperkalemia** refractaria o con cambios en el ECG, **intoxicación** dializable, **sobrecarga de volumen** refractaria (edema pulmonar) y **uremia** sintomática (pericarditis, encefalopatía, sangrado). Iniciarla antes, sin estas indicaciones, no mejora la sobrevida.

## Referencias

1. Kidney Disease: Improving Global Outcomes (KDIGO) Acute Kidney Injury Work Group. KDIGO Clinical Practice Guideline for Acute Kidney Injury. *Kidney Int Suppl.* 2012;2:1–138.
2. KDIGO. *KDIGO 2026 Clinical Practice Guideline for Acute Kidney Injury and Acute Kidney Disease. Public Review Draft.* Marzo 2026. [kdigo.org](https://kdigo.org/kdigo-2026-aki-akd-guideline-draft-available-for-public-review/)
3. Semler MW, et al. Balanced Crystalloids versus Saline in Critically Ill Adults (SMART). *N Engl J Med.* 2018;378:829–839.
4. Gaudry S, et al. Initiation Strategies for Renal-Replacement Therapy in the Intensive Care Unit (AKIKI). *N Engl J Med.* 2016;375:122–133.
5. STARRT-AKI Investigators. Timing of Initiation of Renal-Replacement Therapy in Acute Kidney Injury. *N Engl J Med.* 2020;383:240–251.
6. Gaudry S, et al. Comparison of two delayed strategies for renal replacement therapy initiation for severe acute kidney injury (AKIKI 2). *Lancet.* 2021;397:1293–1300.
7. Davenport MS, et al. Use of Intravenous Iodinated Contrast Media in Patients with Kidney Disease: Consensus Statements from the American College of Radiology and the National Kidney Foundation. *Radiology.* 2020;294:660–668.
8. Jaber S, et al. Sodium bicarbonate therapy for patients with severe metabolic acidaemia in the intensive care unit (BICAR-ICU). *Lancet.* 2018;392:31–40.
