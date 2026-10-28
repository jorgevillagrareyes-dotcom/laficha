# Especuloscopía y PAP

<div class="ficha" markdown>

**Procedimiento**
Examen del cuello uterino con espéculo y toma de muestra para citología (PAP) o test de VPH

**Fuentes principales**
MINSAL: guía GES de cáncer cervicouterino · OMS 2021: tamizaje y tratamiento de las lesiones precancerosas

**Otras fuentes**
Ver [cáncer cervicouterino y tamizaje](../ginecologia-obstetricia/cancer-cervicouterino-lesiones-preinvasoras-y-tamizaje.md), [ITS y sífilis](../infectologia/infecciones-de-transmision-sexual-y-sifilis.md) y [tacto vaginal](tacto-vaginal.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Tamizaje en Chile**: **PAP cada 3 años** entre los **25 y 64 años** (estrategia histórica); el **test de VPH** desde los **30 años cada 5 años** es la recomendación vigente de la guía GES y la OMS, en implementación.
    - **Siempre**: explicar, **consentimiento**, **acompañante** del equipo, privacidad.
    - **Espéculo** del tamaño adecuado, lubricado con **agua** o poca cantidad de lubricante a base de agua (mucho lubricante puede alterar la muestra).
    - **PAP**: **espátula de Ayre** (exocérvix, girar 360°) y **cepillo** endocervical (girar ¼ a ½ vuelta); extender y **fijar de inmediato**.
    - **No es un examen diagnóstico**: **toda lesión visible** del cuello se **biopsia** (colposcopía), aunque el PAP sea normal.
    - **Evitar** tomar el PAP durante la menstruación abundante; tratar antes una infección evidente si el protocolo lo indica.

!!! guia "¿Qué respalda esta página?"
    La edad y la frecuencia del tamizaje vienen de la **guía GES de cáncer cervicouterino del MINSAL** y la **guía de la OMS 2021**, y coinciden con el resumen de [cáncer cervicouterino](../ginecologia-obstetricia/cancer-cervicouterino-lesiones-preinvasoras-y-tamizaje.md). La técnica de la especuloscopía y la toma de la muestra son **práctica habitual** y normas del programa. **Manda el protocolo de tu servicio.**

## Cuándo hacerlo

| Situación | Conducta |
|---|---|
| Mujer de **25–64 años** sin PAP en 3 años | **PAP** (o test de VPH desde los 30 según el programa) |
| **Lesión visible** del cuello, **sinusorragia** | **Colposcopía y biopsia** (no basta el PAP) |
| Flujo vaginal anormal | Especuloscopía; muestras para flujo (pH, KOH, frotis, cultivo) |
| Embarazo | El PAP se puede tomar si corresponde (sin cepillo endocervical según el protocolo) |
| Histerectomía total por causa benigna | No requiere PAP |

## Paso a paso

1. **Explicar**, consentimiento, acompañante, **vaciar la vejiga**.
2. **Posición ginecológica** con buena luz.
3. **Rotular** la lámina (o el frasco) antes de empezar.
4. **Separar los labios** e introducir el espéculo **cerrado**, inclinado hacia **abajo y atrás**, rotándolo a horizontal al avanzar.
5. **Abrir** lentamente hasta ver el cuello completo; fijar.
6. **Inspeccionar**: cuello, orificio externo, zona de transformación, flujo, lesiones.
7. **PAP**: espátula de Ayre en el exocérvix girando **360°**; cepillo en el endocérvix, **¼ a ½ vuelta**; extender ambas muestras en la lámina y **fijar de inmediato** (spray o alcohol). En **base líquida** o **VPH**: introducir el cepillo en el frasco según el fabricante.
8. **Retirar** el espéculo cerrándolo parcialmente, inspeccionando las paredes vaginales.
9. **Registrar** y explicar cuándo y cómo se informará el resultado.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="pap">
<span class="gen-titulo">La paciente</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" list="dl-motivo" data-marca="motivo" placeholder="ej.: tamizaje de cáncer cervicouterino; último PAP hace 3 años, normal"></label><datalist id="dl-motivo"><option value="tamizaje de cáncer cervicouterino"><option value="flujo vaginal"><option value="sangrado poscoital"></datalist>
<label class="calc-campo">Consentimiento y acompañante <input type="text" name="consentimiento" list="dl-consentimiento" data-marca="consentimiento" data-recordar placeholder="ej.: con consentimiento verbal y en presencia de matrona"></label><datalist id="dl-consentimiento"><option value="con consentimiento verbal y en presencia de matrona"><option value="con consentimiento verbal y en presencia de técnico paramédico"></datalist>
<span class="gen-titulo">El examen</span>
<label class="calc-campo">Espéculo <input type="text" name="especulo" list="dl-especulo" data-marca="espéculo" placeholder="ej.: espéculo mediano lubricado con agua"></label><datalist id="dl-especulo"><option value="espéculo mediano lubricado con agua"><option value="espéculo pequeño"></datalist>
<label class="calc-campo">Cuello <input type="text" name="cuello" data-marca="cuello" placeholder="ej.: cuello sano, orificio externo puntiforme, sin lesiones visibles"></label>
<label class="calc-campo">Flujo <input type="text" name="flujo" data-marca="flujo" placeholder="ej.: flujo blanquecino escaso, sin mal olor"></label>
<label class="calc-campo">Muestra <input type="text" name="muestra" list="dl-muestra" data-marca="muestra" placeholder="ej.: PAP con espátula de Ayre (exocérvix) y cepillo (endocérvix), extendido y fijado de inmediato"></label><datalist id="dl-muestra"><option value="PAP con espátula de Ayre (exocérvix) y cepillo (endocérvix), extendido y fijado de inmediato"><option value="test de VPH con cepillo en medio líquido"><option value="citología en base líquida"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza especuloscopía por {motivo}, {consentimiento}.", "Con {especulo}: {cuello}; {flujo}.", "Se toma {muestra}."], "indicaciones": [{"id": "resultado", "texto": "Informar el resultado a la paciente y registrar la fecha del próximo tamizaje."}, {"id": "lesion", "texto": "Toda lesión visible del cuello se deriva para colposcopía y biopsia, aunque el PAP sea normal."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza especuloscopía por tamizaje de cáncer cervicouterino; último PAP hace 3 años, normal, con consentimiento verbal y en presencia de matrona. Con espéculo mediano lubricado con agua: cuello sano, orificio externo puntiforme, sin lesiones visibles; flujo blanquecino escaso, sin mal olor. Se toma PAP con espátula de Ayre (exocérvix) y cepillo (endocérvix), extendido y fijado de inmediato.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Dolor** | Espéculo más pequeño, técnica suave, explicar |
| **Sangrado** leve por el cepillo | Habitual; tranquilizar |
| Muestra **insatisfactoria** | Repetir (fijación tardía, mucho lubricante, sangre) |

!!! alarma "Errores frecuentes"
    - Hacer el examen **sin acompañante** ni consentimiento.
    - Tomar solo un PAP ante una **lesión visible**.
    - **No fijar** de inmediato la muestra (se seca).
    - Usar **mucho lubricante**.
    - No informar a la paciente **cómo y cuándo** sabrá el resultado.

!!! perla "Para el internado"
    Explica cada paso **antes** de hacerlo ("ahora vas a sentir el espéculo, frío y una presión"): reduce el dolor y la ansiedad, y mejora la calidad del examen.

## Preguntas de repaso

??? repaso "1. ¿Cuál es el esquema de PAP del programa chileno?"
    **Cada 3 años** entre los **25 y 64 años**. El **test de VPH** desde los **30 años cada 5 años** es la recomendación vigente (guía GES, OMS), en implementación.

??? repaso "2. Mujer con sinusorragia y una lesión friable del cuello con PAP normal hace 6 meses. ¿Qué haces?"
    **Colposcopía y biopsia**: **toda lesión visible** se biopsia; el PAP es un examen de tamizaje.

??? repaso "3. ¿Cómo se toma el PAP?"
    **Espátula de Ayre** en el exocérvix (360°) y **cepillo** en el endocérvix (¼ a ½ vuelta); extender y **fijar de inmediato**.

??? repaso "4. ¿Qué requisitos éticos tiene el examen ginecológico?"
    **Explicación**, **consentimiento**, **acompañante** del equipo y **privacidad**.

??? repaso "5. Mujer de 50 años con histerectomía total por miomas y PAP siempre normales. ¿Necesita PAP?"
    **No**, si la histerectomía fue total y por causa **benigna**.

## Referencias

1. Ministerio de Salud de Chile. Guía de práctica clínica GES: cáncer cervicouterino. Recomendaciones GRADE (consultado en octubre de 2026). [diprece.minsal.cl](https://diprece.minsal.cl/garantias-explicitas-en-salud-auge-o-ges/cancer-cervico-uterino/recomendaciones-grade/)
2. World Health Organization. WHO guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention. 2.ª ed. Ginebra: OMS; 2021. [who.int](https://www.who.int/publications/i/item/9789240030824)
