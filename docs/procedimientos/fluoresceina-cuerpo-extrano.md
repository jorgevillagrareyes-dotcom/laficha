# Fluoresceína y cuerpo extraño corneal

<div class="ficha" markdown>

**Procedimiento**
Tinción de la córnea con fluoresceína para detectar erosiones, cuerpos extraños y perforaciones, y retiro del cuerpo extraño superficial

**Fuentes principales**
Ahmed 2015 (*Prim Care*): abrasiones y cuerpos extraños corneales · Cochrane 2016 (Lim): oclusión en la abrasión corneal

**Otras fuentes**
MINSAL: Guía GES N.° 50, trauma ocular grave · Ver [trauma ocular](../especialidades/oftalmologia/trauma-ocular.md), [ojo rojo](../especialidades/oftalmologia/ojo-rojo-queratitis-uveitis-y-glaucoma-agudo.md) y [lavado ocular](lavado-ocular.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Siempre primero la agudeza visual** de ambos ojos (pronóstico y valor médico-legal).
    - **Anestesia tópica** (proparacaína) para examinar; **nunca recetarla** (retrasa la cicatrización y causa úlceras).
    - **Evertir el párpado superior**: un cuerpo extraño **subtarsal** produce erosiones lineales verticales.
    - **Fluoresceína + luz azul**: la erosión se ve **verde**. **Signo de Seidel** (la fluoresceína se diluye por salida de humor acuoso) = **globo abierto**: no presionar, protector rígido y oftalmología urgente.
    - **Cuerpo extraño superficial**: hisopo húmedo o **aguja 25–27 G** tangencial, con el bisel hacia arriba; el **anillo de óxido** y los cuerpos extraños **centrales o profundos**, a oftalmología.
    - **Después**: ungüento antibiótico; **no ocluir** (no mejora la cicatrización ni el dolor; Cochrane 2016); usuarios de **lentes de contacto**: quinolona.

!!! guia "¿Qué respalda esta página?"
    La técnica se basa en **revisiones prácticas** (Ahmed 2015) y en la práctica de oftalmología; la recomendación de **no ocluir** viene de una **revisión Cochrane** (2016, 12 ensayos). Las conductas ante el globo abierto coinciden con la **guía GES de trauma ocular grave** y el resumen de [trauma ocular](../especialidades/oftalmologia/trauma-ocular.md). **Manda el protocolo de tu servicio.**

## Cuándo extraer y cuándo derivar

| Situación | Conducta |
|---|---|
| Erosión corneal simple | Ungüento antibiótico, analgesia, control |
| Cuerpo extraño **superficial**, periférico | Retiro con hisopo o aguja |
| **Anillo de óxido**, cuerpo extraño **central** (eje visual) o profundo | **Oftalmología** |
| **Seidel positivo**, pupila irregular, cámara plana, mecanismo de **alta velocidad** (martillar metal sobre metal) | **Globo abierto**: protector rígido, no presionar, ayuno, oftalmología urgente; pensar en cuerpo extraño **intraocular** (TC de órbita) |
| **Química** | **Irrigar** primero (ver [lavado ocular](lavado-ocular.md)) |
| Usuario de **lentes de contacto** con erosión | Quinolona tópica, **no ocluir**, control precoz (riesgo de *Pseudomonas*) |

## Paso a paso

1. **Agudeza visual** de cada ojo (con su corrección).
2. **Inspección**: pupila (forma), cámara anterior, hiperemia; si hay sospecha de globo abierto, **detenerse** y proteger.
3. **Anestesia tópica**: 1 gota.
4. **Evertir el párpado superior** (con un hisopo sobre el borde superior del tarso).
5. **Fluoresceína**: tocar el fondo de saco inferior con la tira humedecida; pedir que parpadee.
6. **Luz azul** (cobalto) con lámpara de hendidura u oftalmoscopio: ubicar la erosión o el cuerpo extraño; buscar el **signo de Seidel**.
7. **Retiro** del cuerpo extraño superficial: primero **hisopo húmedo**; si no sale, **aguja 25–27 G** con el bisel hacia arriba, **tangencial** a la córnea, con la mano apoyada en la cara del paciente.
8. **Ungüento antibiótico**; analgesia oral; **no ocluir**.
9. **Control** en 24–48 horas.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="fluoresceina">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" data-marca="motivo" placeholder="ej.: sensación de cuerpo extraño en ojo derecho tras esmerilar sin protección"></label>
<label class="calc-campo">Agudeza visual <input type="text" name="av" data-marca="agudeza visual" placeholder="ej.: OD 0,8, OI 1,0"></label>
<span class="gen-titulo">El examen</span>
<label class="calc-campo">Anestesia tópica <input type="text" name="anestesia" list="dl-anestesia" data-marca="anestesia tópica" data-recordar placeholder="ej.: proparacaína 0,5 %, 1 gota"></label><datalist id="dl-anestesia"><option value="proparacaína 0,5 %, 1 gota"><option value="tetracaína 0,5 %, 1 gota"></datalist>
<label class="calc-campo">Eversión palpebral <input type="text" name="eversion" list="dl-eversion" data-marca="eversión" placeholder="ej.: sin cuerpo extraño subtarsal"></label><datalist id="dl-eversion"><option value="sin cuerpo extraño subtarsal"><option value="cuerpo extraño subtarsal retirado con hisopo"></datalist>
<label class="calc-campo">Hallazgo con fluoresceína <input type="text" name="hallazgo" data-marca="hallazgo" placeholder="ej.: cuerpo extraño metálico corneal paracentral con pequeño anillo de óxido; Seidel negativo"></label>
<label class="calc-campo">Extracción <input type="text" name="extraccion" list="dl-extraccion" placeholder="ej.: retiro con aguja 25 G con bisel hacia arriba, tangencial a la córnea"></label><datalist id="dl-extraccion"><option value="retiro con hisopo húmedo"><option value="retiro con aguja 25 G con bisel hacia arriba, tangencial a la córnea"><option value="no se extrae; se deriva a oftalmología"></datalist>
<label class="calc-campo">Tratamiento <input type="text" name="tratamiento" list="dl-tratamiento" data-marca="tratamiento" placeholder="ej.: ungüento de cloranfenicol"></label><datalist id="dl-tratamiento"><option value="ungüento de cloranfenicol"><option value="ungüento de eritromicina"><option value="colirio de quinolona (usuario de lentes de contacto)"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Paciente con {motivo}. Agudeza visual: {av}.", "Previa anestesia tópica con {anestesia}; eversión del párpado superior: {eversion}.", "Tinción con fluoresceína y luz azul: {hallazgo}.", "?Extracción: {extraccion}.", "Se indica {tratamiento}."], "indicaciones": [{"id": "ungüento", "texto": "Ungüento antibiótico 3–4 veces al día por 3–5 días."}, {"id": "noanest", "texto": "No usar anestésico tópico en la casa."}, {"id": "control", "texto": "Control en 24–48 horas (o derivar a oftalmología si queda anillo de óxido o el defecto es central o grande)."}, {"id": "aviso", "texto": "Consultar de inmediato si baja la visión, aumenta el dolor o aparece secreción."}, {"id": "proteccion", "texto": "Usar protección ocular en el trabajo."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente con sensación de cuerpo extraño en ojo derecho tras esmerilar sin protección. Agudeza visual: OD 0,8, OI 1,0. Previa anestesia tópica con proparacaína 0,5 %, 1 gota; eversión del párpado superior: sin cuerpo extraño subtarsal. Tinción con fluoresceína y luz azul: cuerpo extraño metálico corneal paracentral con pequeño anillo de óxido; Seidel negativo. Extracción: retiro con aguja 25 G con bisel hacia arriba, tangencial a la córnea. Se indica ungüento de cloranfenicol.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Úlcera corneal** infecciosa | Secreción, infiltrado blanco, dolor creciente: oftalmología |
| **Perforación** iatrogénica | Aguja tangencial, mano apoyada; derivar los profundos |
| **Erosión recurrente** | Lubricantes; oftalmología |
| **Queratopatía** por abuso de anestésicos | Nunca recetarlos |

!!! alarma "Errores frecuentes"
    - No medir la **agudeza visual**.
    - **Recetar** anestésico tópico.
    - No **evertir** el párpado.
    - Pasar por alto un **globo abierto** o un cuerpo extraño **intraocular** tras martillar metal.
    - **Ocluir** el ojo de un usuario de lentes de contacto.

!!! perla "Para el internado"
    "Martillaba metal sobre metal" es una frase de **alarma**: aunque el ojo se vea poco afectado, piensa en un **cuerpo extraño intraocular** y pide **TC de órbita** (no RM: puede ser metálico).

## Preguntas de repaso

??? repaso "1. ¿Por qué no se receta anestésico tópico al paciente con una erosión corneal?"
    Retrasa la **cicatrización** y puede producir **úlceras** y queratopatía.

??? repaso "2. ¿Qué es el signo de Seidel?"
    La **dilución de la fluoresceína** por salida de **humor acuoso** a través de una herida: indica **globo abierto**.

??? repaso "3. Erosiones lineales verticales en la córnea superior. ¿Qué buscas?"
    Un **cuerpo extraño subtarsal**: evertir el párpado superior.

??? repaso "4. ¿Se debe ocluir el ojo con una erosión corneal?"
    **No**: la oclusión no mejora la cicatrización ni el dolor (Cochrane 2016), y en los usuarios de lentes de contacto está contraindicada.

??? repaso "5. Quedó un anillo de óxido tras retirar un cuerpo extraño metálico. ¿Qué haces?"
    Derivar a **oftalmología** para retirarlo con fresa.

## Referencias

1. Ahmed F, House RJ, Feldman BH. Corneal Abrasions and Corneal Foreign Bodies. *Prim Care.* 2015;42(3):363–375. doi:[10.1016/j.pop.2015.05.004](https://doi.org/10.1016/j.pop.2015.05.004)
2. Lim CH, Turner A, Lim BX. Patching for corneal abrasion. *Cochrane Database Syst Rev.* 2016;7(7):CD004764. doi:[10.1002/14651858.CD004764.pub3](https://doi.org/10.1002/14651858.CD004764.pub3)
3. Ministerio de Salud de Chile. Guía de Práctica Clínica GES N.° 50: Trauma ocular grave. Recomendaciones (2017). [diprece.minsal.cl](https://diprece.minsal.cl/le-informamos/auge/acceso-guias-clinicas/guias-clinicas-desarrolladas-utilizando-manual-metodologico/trauma-ocular-grave/recomendaciones/)
