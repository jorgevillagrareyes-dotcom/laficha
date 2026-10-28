# Extracción de cuerpos extraños de la piel

<div class="ficha" markdown>

**Procedimiento**
Localización y extracción de cuerpos extraños de los tejidos blandos (astillas, vidrio, metal, anzuelos)

**Fuentes principales**
Halaas 2007 (*Am Fam Physician*): manejo de los cuerpos extraños en la piel · Gammons 2001 (*Am Fam Physician*): extracción de anzuelos

**Otras fuentes**
Ver [heridas menores y profilaxis antitetánica](../cirugia/piel-partes-blandas-y-quemaduras/heridas-menores-mordeduras-y-onicocriptosis.md), [sutura](sutura.md), [bloqueos regionales simples](bloqueos-regionales.md) y [POCUS](pocus.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Imagen** según el material: el **vidrio y el metal** se ven en la **radiografía**; la **madera** y los plásticos no, pero sí en la **ecografía**.
    - **No todo se extrae**: los cuerpos extraños **pequeños, profundos e inertes** que no molestan pueden dejarse; los **orgánicos** (madera, espinas) siempre, por el riesgo de infección.
    - **Anestesia** local o bloqueo; buen **campo exangüe** y luz.
    - **Incisión** sobre el trayecto (siguiendo las líneas de la piel), no "pescar" a ciegas.
    - **Anzuelos**: técnica del **hilo**, de **avance y corte** o retroceso según el tipo de anzuelo.
    - **Profilaxis antitetánica** según el esquema.
    - **Derivar**: cerca de **tendones, nervios o vasos**, en la palma profunda, o si no se logra en un tiempo razonable.

!!! guia "¿Qué respalda esta página?"
    No hay guías ni ensayos: la evidencia son **revisiones prácticas** (Halaas 2007, Gammons 2001) y práctica habitual. La profilaxis antitetánica sigue el resumen de [heridas menores](../cirugia/piel-partes-blandas-y-quemaduras/heridas-menores-mordeduras-y-onicocriptosis.md). **Manda el protocolo de tu servicio.**

## Cuándo extraer y cuándo derivar

| Situación | Conducta |
|---|---|
| Cuerpo extraño **superficial**, visible o palpable | Extraer en la urgencia |
| **Madera**, espinas, material orgánico | **Siempre** extraer (infección) |
| Vidrio o metal **pequeño, profundo**, sin síntomas | Puede dejarse; explicar al paciente |
| Cerca de **tendón, nervio, vaso** o articulación; palma profunda | **Derivar** (cirugía o traumatología) |
| Herida con **infección** o cuerpo extraño retenido semanas | Extraer y tratar la infección |

## Paso a paso

1. **Examen** neurovascular y tendinoso distal.
2. **Imagen** si no es visible: radiografía (vidrio, metal) o **ecografía** (madera, plástico).
3. **Antisepsia** y **anestesia** (local o bloqueo).
4. **Astilla superficial**: tomarla con pinza y traccionar en la dirección de entrada; si se fragmenta, **incidir** sobre el trayecto y extraer completa.
5. **Cuerpo extraño más profundo**: incisión **longitudinal** sobre él (siguiendo las líneas de la piel), disección roma con pinza mosquito, extracción.
6. **Lavar** con suero y **revisar** que no queden fragmentos.
7. **Cierre**: muchas veces por **segunda intención** (más si la herida es sucia).
8. **Antitetánica** según el esquema.

### Anzuelos

| Técnica | Cuándo | Cómo |
|---|---|---|
| **Del hilo** (*string-yank*) | Anzuelo pequeño o mediano, sin barbas múltiples | Pasar un hilo grueso por la curva, presionar el ojo del anzuelo contra la piel y traccionar el hilo en forma rápida, paralela a la piel |
| **Avance y corte** | Punta cerca de la superficie; barbas múltiples | Anestesiar, avanzar la punta hasta que salga por la piel, **cortar la barba** y retroceder el anzuelo |
| **Retroceso simple** | Anzuelo sin barba o muy superficial | Retroceder por el trayecto de entrada |

*Técnicas descritas por Gammons 2001; no usar el hilo cerca del ojo ni de estructuras delicadas.*

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="cuerpo-extrano">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Cuerpo extraño <input type="text" name="indicacion" data-marca="cuerpo extraño" placeholder="ej.: astilla de madera en la región palmar del dedo medio derecho"></label>
<label class="calc-campo">Imagen <input type="text" name="imagen" list="dl-imagen" placeholder="ej.: ecografía que muestra cuerpo extraño de 1 cm a 3 mm de profundidad"></label><datalist id="dl-imagen"><option value="radiografía sin cuerpo extraño radiopaco"><option value="ecografía que localiza el cuerpo extraño"><option value="radiografía con cuerpo extraño radiopaco (vidrio/metal)"><option value="no se solicita (superficial y visible)"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Anestesia <input type="text" name="anestesia" list="dl-anestesia" data-marca="anestesia" placeholder="ej.: bloqueo digital con lidocaína al 1 %"></label><datalist id="dl-anestesia"><option value="infiltración local con lidocaína al 1 %"><option value="bloqueo digital con lidocaína al 1 %"></datalist>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: incisión longitudinal sobre el trayecto y extracción completa con pinza"></label><datalist id="dl-tecnica"><option value="incisión longitudinal sobre el trayecto y extracción completa con pinza"><option value="extracción de anzuelo por técnica de avance y corte"><option value="extracción de anzuelo por técnica del hilo"></datalist>
<label class="calc-campo">Revisión <input type="text" name="revision" list="dl-revision" data-marca="revisión" data-recordar placeholder="ej.: se comprueba extracción completa; lavado con suero"></label><datalist id="dl-revision"><option value="se comprueba extracción completa; lavado con suero"></datalist>
<label class="calc-campo">Cierre <input type="text" name="cierre" list="dl-cierre" placeholder="ej.: cierre por segunda intención"></label><datalist id="dl-cierre"><option value="cierre por segunda intención"><option value="un punto de nylon 5-0"><option value="sin cierre"></datalist>
<label class="calc-campo">Profilaxis antitetánica <input type="text" name="tetanos" list="dl-tetanos" placeholder="ej.: vacuna dT"></label><datalist id="dl-tetanos"><option value="vacuna dT"><option value="vacuna dT e inmunoglobulina antitetánica"><option value="al día, no requiere"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {indicacion}.", "?Imagen: {imagen}.", "Previa antisepsia y {anestesia}, se realiza {tecnica}; {revision}.", "?Cierre: {cierre}.", "?Profilaxis antitetánica: {tetanos}."], "indicaciones": [{"id": "curacion", "texto": "Curación y control en 48 horas."}, {"id": "aviso", "texto": "Consultar si aparece enrojecimiento, pus, fiebre o dolor que aumenta (cuerpo extraño retenido o infección)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con astilla de madera en la región palmar del dedo medio derecho. Imagen: ecografía que muestra cuerpo extraño de 1 cm a 3 mm de profundidad. Previa antisepsia y bloqueo digital con lidocaína al 1 %, se realiza incisión longitudinal sobre el trayecto y extracción completa con pinza; se comprueba extracción completa; lavado con suero. Cierre: cierre por segunda intención. Profilaxis antitetánica: vacuna dT.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Cuerpo extraño retenido** (dolor, infección persistente) | Imagen y nueva extracción |
| **Infección** | Curación; antibiótico si hay celulitis |
| **Lesión** de tendón, nervio o vaso | Prevenir con examen e imagen; derivar |
| **Granuloma** | Extracción |

!!! alarma "Errores frecuentes"
    - Buscar **a ciegas** sin imagen ni incisión.
    - Pedir **radiografía** para buscar una astilla de madera (no se ve): **ecografía**.
    - Dejar fragmentos de **material orgánico**.
    - Olvidar la **profilaxis antitetánica**.

!!! perla "Para el internado"
    Ponte un **límite de tiempo** (por ejemplo, 20–30 minutos). Si no lo encuentras, detente, pide imagen o deriva: seguir buscando aumenta el daño.

## Preguntas de repaso

??? repaso "1. Astilla de madera en la mano que no se ve en la radiografía. ¿Qué imagen pides?"
    **Ecografía**: la madera **no es radiopaca**.

??? repaso "2. Pequeño fragmento de vidrio profundo en el muslo, sin síntomas. ¿Lo extraes?"
    Puede **dejarse** si es pequeño, profundo e inerte y no molesta; explicar al paciente y controlar.

??? repaso "3. Anzuelo con barba con la punta cerca de la superficie. ¿Qué técnica usas?"
    **Avance y corte**: avanzar la punta hasta que salga, **cortar la barba** y retroceder el anzuelo.

??? repaso "4. Paciente con astilla extraída hace una semana que consulta por enrojecimiento y pus en el sitio. ¿Qué piensas?"
    **Cuerpo extraño retenido** con infección: ecografía, nueva exploración y tratamiento de la infección.

??? repaso "5. ¿Cuándo derivas en vez de extraer tú?"
    Si está cerca de **tendones, nervios, vasos** o articulaciones, en la **palma profunda**, o si no lo logras en un tiempo razonable.

## Referencias

1. Halaas GW. Management of foreign bodies in the skin. *Am Fam Physician.* 2007;76(5):683–688. [aafp.org](https://www.aafp.org/pubs/afp/issues/2007/0901/p683.html)
2. Gammons MG, Jackson E. Fishhook removal. *Am Fam Physician.* 2001;63(11):2231–2236. [aafp.org](https://www.aafp.org/pubs/afp/issues/2001/0601/p2231.html)
