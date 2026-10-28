# Curación de quemaduras

<div class="ficha" markdown>

**Procedimiento**
Primeros auxilios y curación de las quemaduras menores, y reconocimiento de las que deben derivarse

**Fuentes principales**
ISBI 2016: guías de práctica para el cuidado de quemaduras · MINSAL 2007: guía clínica GES gran quemado

**Otras fuentes**
Ver [quemaduras, secuelas y cicatrices](../cirugia/piel-partes-blandas-y-quemaduras/quemaduras-secuelas-y-cicatrices.md), [heridas menores y profilaxis antitetánica](../cirugia/piel-partes-blandas-y-quemaduras/heridas-menores-mordeduras-y-onicocriptosis.md) y [lavado ocular](lavado-ocular.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Primero**: detener la quemadura (ropa, anillos), **enfriar con agua corriente fresca ~ 20 minutos** (no hielo) si es **pequeña**; en las **extensas** (> 10 %), **no** enfriar (hipotermia).
    - **Químicas**: retirar la ropa e **irrigar con abundante agua ≥ 30 minutos**, sin neutralizar.
    - **Extensión**: regla de los 9 o **palma del paciente = 1 %**; no se cuenta el eritema.
    - **Derivar** (GES 55): Garcés > 70 o AB/B > 20 %, > 65 años con ≥ 10 %, **inhalatoria**, **eléctrica** de alta tensión, **cara, manos, pies, periné**, **circulares**, sospecha de **maltrato**.
    - **Quemadura menor**: **analgesia**, **aseo**, desbridar las flictenas **rotas o grandes**, **apósito** que mantenga humedad, **antitetánica** y **control a las 48–72 horas**.
    - **Sin antibiótico profiláctico** sistémico.

!!! guia "¿Qué respalda esta página?"
    El manejo inicial, el enfriamiento y los criterios de derivación vienen de las **guías ISBI 2016** y de la **guía clínica GES gran quemado (MINSAL 2007)**, y coinciden con el resumen de [quemaduras](../cirugia/piel-partes-blandas-y-quemaduras/quemaduras-secuelas-y-cicatrices.md). La elección del apósito tiene **evidencia limitada**: se elige según la profundidad, el exudado y la disponibilidad. **Manda el protocolo de tu servicio.**

## Profundidad

| Profundidad (clasificación de Benaim, usada en Chile) | Aspecto | Dolor | Evolución |
|---|---|---|---|
| **A** (superficial, epidérmica) | Eritema, sin flictenas | Doloroso | Cura en ~ 1 semana, sin cicatriz |
| **AB** (intermedia, dérmica) | **Flictenas**, rosada o blanquecina, húmeda | Muy dolorosa o hipoestésica | Superficial: cura en 2–3 semanas; profunda: puede requerir injerto |
| **B** (total) | Blanca, acartonada, seca, sin llene capilar | **Indolora** | Requiere **injerto** |

## Paso a paso (quemadura menor)

1. **Detener** la quemadura y **enfriar** (si es pequeña, ~ 20 minutos con agua corriente).
2. **Analgesia** antes de la curación.
3. **Evaluar** extensión, profundidad, localización y **criterios de derivación**.
4. **Aseo** con suero fisiológico o agua y jabón suave.
5. **Flictenas**: desbridar las **rotas** o grandes; las pequeñas e intactas pueden mantenerse.
6. **Apósito** según el caso (gasa vaselinada, hidrocoloide, espuma); la **cara** puede dejarse expuesta con emoliente.
7. **Antitetánica** según el esquema.
8. **Control** a las **48–72 horas** (las intermedias evolucionan).

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="quemaduras">
<span class="gen-titulo">La quemadura</span>
<label class="calc-campo">Descripción <input type="text" name="descripcion" data-marca="descripción" placeholder="ej.: quemadura por agua caliente en antebrazo derecho, tipo AB (intermedia), de 2 % de superficie corporal, con flictenas"></label>
<label class="calc-campo">Criterios de derivación <input type="text" name="criterios" list="dl-criterios" data-marca="criterios" data-recordar placeholder="ej.: sin criterios de derivación a unidad de quemados"></label><datalist id="dl-criterios"><option value="sin criterios de derivación a unidad de quemados"></datalist>
<span class="gen-titulo">La curación</span>
<label class="calc-campo">Analgesia <input type="text" name="analgesia" data-marca="analgesia" placeholder="ej.: paracetamol 1 g y ketoprofeno 100 mg EV"></label>
<label class="calc-campo">Aseo <input type="text" name="aseo" list="dl-aseo" data-marca="aseo" placeholder="ej.: aseo con suero fisiológico y desbridamiento de flictenas rotas"></label><datalist id="dl-aseo"><option value="aseo con suero fisiológico y desbridamiento de flictenas rotas"><option value="aseo con agua y jabón suave"></datalist>
<label class="calc-campo">Apósito <input type="text" name="aposito" list="dl-aposito" data-marca="apósito" placeholder="ej.: gasa vaselinada y apósito absorbente"></label><datalist id="dl-aposito"><option value="gasa vaselinada y apósito absorbente"><option value="apósito de hidrocoloide"><option value="apósito de espuma"><option value="sulfadiazina de plata"></datalist>
<label class="calc-campo">Profilaxis antitetánica <input type="text" name="tetanos" list="dl-tetanos" placeholder="ej.: vacuna dT"></label><datalist id="dl-tetanos"><option value="vacuna dT"><option value="al día, no requiere"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {descripcion}; {criterios}.", "Previa analgesia con {analgesia}, se realiza {aseo} y se cubre con {aposito}.", "?Profilaxis antitetánica: {tetanos}."], "indicaciones": [{"id": "control", "texto": "Control en 48–72 horas para reevaluar la profundidad y la curación."}, {"id": "analgesia", "texto": "Analgesia oral (paracetamol, AINE) según dolor."}, {"id": "elevar", "texto": "Elevar la extremidad quemada."}, {"id": "aviso", "texto": "Consultar si hay fiebre, enrojecimiento que se extiende, mal olor o aumento del dolor."}, {"id": "sol", "texto": "Fotoprotección de la zona por varios meses."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con quemadura por agua caliente en antebrazo derecho, tipo AB (intermedia), de 2 % de superficie corporal, con flictenas; sin criterios de derivación a unidad de quemados. Previa analgesia con paracetamol 1 g y ketoprofeno 100 mg EV, se realiza aseo con suero fisiológico y desbridamiento de flictenas rotas y se cubre con gasa vaselinada y apósito absorbente. Profilaxis antitetánica: vacuna dT.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Infección** (celulitis, mal olor, fiebre) | Cultivo, antibiótico sistémico, reevaluar profundidad |
| **Profundización** | Control a las 48–72 h; derivar si pasa a B |
| **Cicatriz hipertrófica**, retracción | Presoterapia, silicona; derivar en zonas especiales |
| **Hipotermia** por enfriar quemaduras extensas | No enfriar > 10 %; abrigar |

!!! alarma "Errores frecuentes"
    - Aplicar **hielo**, pasta de dientes u otros "remedios caseros".
    - **Enfriar** una quemadura extensa.
    - Subestimar quemaduras de **manos, cara, periné** o **circulares**.
    - Dar **antibiótico profiláctico**.
    - No pensar en **maltrato** en un niño con quemaduras en guante o calcetín.

!!! perla "Para el internado"
    Usa la **palma del paciente** (con los dedos) como 1 % para calcular rápido. Y revisa siempre si la quemadura es **circular**: puede necesitar una escarotomía.

## Preguntas de repaso

??? repaso "1. ¿Cuánto tiempo y con qué se enfría una quemadura pequeña?"
    Con **agua corriente fresca** por **~ 20 minutos**, sin hielo.

??? repaso "2. Quemadura química en el antebrazo. ¿Qué haces primero?"
    **Retirar la ropa** e **irrigar con abundante agua al menos 30 minutos**, sin intentar neutralizar.

??? repaso "3. Quemadura AB de la palma de la mano en un adulto. ¿La manejas ambulatoria?"
    **No**: las quemaduras profundas de **manos** son criterio de **derivación** a una unidad de quemados.

??? repaso "4. ¿Qué haces con las flictenas?"
    **Desbridar** las **rotas** o grandes; las **pequeñas e intactas** pueden mantenerse.

??? repaso "5. ¿Se indica antibiótico profiláctico en las quemaduras?"
    **No** (MINSAL, ISBI): se tratan solo las infecciones demostradas.

## Referencias

1. ISBI Practice Guidelines Committee. ISBI Practice Guidelines for Burn Care. *Burns.* 2016;42(5):953–1021. doi:[10.1016/j.burns.2016.05.013](https://doi.org/10.1016/j.burns.2016.05.013)
2. Ministerio de Salud de Chile. Guía Clínica Gran Quemado. Serie Guías Clínicas MINSAL N.° 55. Santiago: MINSAL; 2007. [supersalud.gob.cl](https://www.supersalud.gob.cl/difusion/572/articles-3812_recurso_1.pdf)
