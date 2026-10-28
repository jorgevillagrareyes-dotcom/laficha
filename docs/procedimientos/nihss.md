# Examen neurológico y NIHSS

<div class="ficha" markdown>

**Procedimiento**
Evaluación rápida del paciente con sospecha de ACV y aplicación de la escala NIHSS

**Fuentes principales**
AHA/ASA 2026: manejo precoz del ACV isquémico agudo · Brott 1989 (*Stroke*): escala original del NIH

**Otras fuentes**
Ver [accidente cerebrovascular](../neurologia/accidente-cerebrovascular.md), [vértigo](../neurologia/vertigo.md), [hipoglicemia](../endocrinologia/hipoglicemia.md) y [crisis epiléptica](../neurologia/crisis-epileptica-y-estado-epileptico.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Hora clave**: el **último momento visto sano** (no la hora en que lo encontraron).
    - **Antes del NIHSS**: ABC, **glicemia capilar** (la hipoglicemia imita un ACV) y activar el **código ACV**.
    - **NIHSS**: 11 ítems (15 elementos), de **0 a 42**. Cuantifica la gravedad, ayuda a decidir la reperfusión y sigue la evolución.
    - **NIHSS ≥ 6** sugiere **oclusión de gran vaso** → angio-TC (candidato a trombectomía).
    - **Puntuar lo que el paciente hace**, no lo que crees que podría hacer; **no corregir** las respuestas ni dar pistas.
    - **Repetirlo** tras la reperfusión y ante cualquier cambio.

!!! guia "¿Qué respalda esta página?"
    El uso de una **escala estandarizada** (NIHSS) en la evaluación inicial lo recomienda la **guía AHA/ASA 2026**. La escala fue validada originalmente por **Brott (1989)**; su aplicación correcta requiere **entrenamiento y certificación** (cursos en línea gratuitos). Los umbrales de decisión coinciden con el resumen de [ACV](../neurologia/accidente-cerebrovascular.md). **Manda el protocolo de tu servicio.**

## La escala NIHSS

| Ítem | Qué evalúa | Puntaje |
|---|---|---|
| **1a** Nivel de conciencia | Alerta → no responde | 0–3 |
| **1b** Preguntas (mes y edad) | Ambas bien → ninguna | 0–2 |
| **1c** Órdenes (abrir y cerrar los ojos, apretar y soltar la mano) | Ambas → ninguna | 0–2 |
| **2** Mirada | Normal → desviación forzada | 0–2 |
| **3** Campos visuales | Normales → ceguera bilateral | 0–3 |
| **4** Parálisis facial | Normal → completa | 0–3 |
| **5** Motor del brazo (cada uno; 10 segundos a 90° o 45°) | No cae → sin movimiento | 0–4 |
| **6** Motor de la pierna (cada una; 5 segundos a 30°) | No cae → sin movimiento | 0–4 |
| **7** Ataxia de extremidades | Ausente → en dos extremidades | 0–2 |
| **8** Sensibilidad | Normal → pérdida grave | 0–2 |
| **9** Lenguaje (describir una lámina, nombrar, leer) | Normal → afasia global o mutismo | 0–3 |
| **10** Disartria | Normal → grave | 0–2 |
| **11** Extinción e inatención | Normal → grave | 0–2 |

*La ataxia se puntúa solo si es desproporcionada a la debilidad. Total: 0–42.*

## Paso a paso

1. **ABC**, signos vitales, **glicemia capilar**.
2. **Último momento visto sano** (preguntar a testigos; si despertó con el déficit, la hora en que se acostó bien).
3. **Activar el código ACV**: TC de cerebro urgente (y angio-TC si NIHSS ≥ 6 o sospecha de gran vaso).
4. **Aplicar el NIHSS** en orden, registrando la **primera respuesta**.
5. **Contraindicaciones** de la trombólisis: revisar en paralelo (anticoagulantes, cirugías, sangrados).
6. **Registrar** el puntaje total, el detalle y la **hora**.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="nihss">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Contexto <input type="text" name="contexto" data-marca="contexto" placeholder="ej.: déficit motor derecho y afasia de inicio a las 09:10 (último momento visto sano)"></label>
<span class="gen-titulo">El puntaje</span>
<label class="calc-campo">NIHSS total <input type="text" name="total" data-marca="NIHSS" placeholder="ej.: 14"></label>
<label class="calc-campo">Detalle <input type="text" name="detalle" data-marca="detalle" placeholder="ej.: 1a 0, 1b 2, 1c 1, mirada 1, campos 2, facial 2, brazo derecho 3, pierna derecha 2, ataxia 0, sensibilidad 1, lenguaje 2, disartria 1, extinción 0"></label>
<label class="calc-campo">Hora del examen <input type="text" name="hora" data-marca="hora" placeholder="ej.: 10:05"></label>
<label class="calc-campo">Glicemia capilar <input type="text" name="glicemia" data-marca="glicemia" placeholder="ej.: 112 mg/dL"></label>
<label class="calc-campo">Plan <input type="text" name="plan" list="dl-plan" data-recordar placeholder="ej.: activación del código ACV, TC y angio-TC urgentes"></label><datalist id="dl-plan"><option value="activación del código ACV, TC y angio-TC urgentes"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {contexto}.", "Glicemia capilar {glicemia}. NIHSS {total} a las {hora} ({detalle}).", "?Plan: {plan}."], "indicaciones": [{"id": "repetir", "texto": "Repetir el NIHSS tras la trombólisis o la trombectomía, a las 24 horas y si hay cambios."}, {"id": "presion", "texto": "Presión arterial según el protocolo de reperfusión (≤ 185/110 antes y < 180/105 después de la trombólisis)."}, {"id": "deglucion", "texto": "Régimen cero hasta evaluar la deglución."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con déficit motor derecho y afasia de inicio a las 09:10 (último momento visto sano). Glicemia capilar 112 mg/dL. NIHSS 14 a las 10:05 (1a 0, 1b 2, 1c 1, mirada 1, campos 2, facial 2, brazo derecho 3, pierna derecha 2, ataxia 0, sensibilidad 1, lenguaje 2, disartria 1, extinción 0). Plan: activación del código ACV, TC y angio-TC urgentes.

## Limitaciones

| Limitación | Consecuencia |
|---|---|
| Subestima los ACV de **circulación posterior** (vértigo, ataxia de la marcha, disfagia) | Un NIHSS bajo **no descarta** un ACV grave del tronco o el cerebelo |
| Puntúa más los hemisferios **izquierdos** (lenguaje) | |
| Requiere entrenamiento | Variabilidad entre examinadores |

!!! alarma "Errores frecuentes"
    - Olvidar la **glicemia capilar**.
    - Tomar como hora de inicio la hora en que **lo encontraron**.
    - **Dar pistas** o puntuar lo que el paciente "podría" hacer.
    - Descartar un ACV de **fosa posterior** por un NIHSS bajo.
    - **Retrasar** la TC por completar un examen neurológico extenso.

!!! perla "Para el internado"
    Hazte el **curso de certificación del NIHSS** (gratuito, en línea): es la herramienta que te piden en todo código ACV y se aprende en pocas horas.

## Preguntas de repaso

??? repaso "1. ¿Qué haces antes de aplicar el NIHSS a un paciente con hemiparesia aguda?"
    **ABC** y **glicemia capilar** (la hipoglicemia imita un ACV), y averiguar el **último momento visto sano**.

??? repaso "2. ¿Qué rango tiene el NIHSS y qué sugiere un puntaje ≥ 6?"
    **0 a 42**. Un NIHSS **≥ 6** sugiere **oclusión de gran vaso**: angio-TC para evaluar trombectomía.

??? repaso "3. Paciente que despertó con una afasia; se acostó bien a las 23:00. ¿Cuál es la hora de inicio?"
    Las **23:00** (último momento visto sano).

??? repaso "4. Vértigo, ataxia de la marcha y vómitos con NIHSS 1. ¿Descartas un ACV?"
    **No**: el NIHSS **subestima** los ACV de **circulación posterior**; evaluar con HINTS y neuroimagen.

??? repaso "5. ¿Cuándo repites el NIHSS?"
    Tras la **trombólisis o trombectomía**, a las **24 horas** y ante **cualquier cambio** neurológico.

## Referencias

1. Prabhakaran S, Gonzalez NR, Zachrison KS, et al. 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke: A Guideline From the American Heart Association/American Stroke Association. *Stroke.* 2026;57(8):e316–e436.
2. Brott T, Adams HP Jr, Olinger CP, et al. Measurements of acute cerebral infarction: a clinical examination scale. *Stroke.* 1989;20(7):864–870. doi:[10.1161/01.str.20.7.864](https://doi.org/10.1161/01.str.20.7.864)
