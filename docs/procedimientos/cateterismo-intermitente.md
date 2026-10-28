# Cateterismo vesical intermitente

<div class="ficha" markdown>

**Procedimiento**
Vaciamiento de la vejiga con una sonda que se introduce y se retira en cada ocasión, como alternativa a la sonda permanente

**Fuentes principales**
Cochrane 2021 (Prieto): técnicas y sondas para el cateterismo intermitente · IDSA 2009: infección urinaria asociada a catéter

**Otras fuentes**
Ver [sonda Foley](foley.md), [hiperplasia prostática y retención urinaria](../cirugia/urologia/hiperplasia-prostatica-retencion-urinaria-y-prostatitis.md), [infección urinaria](../nefrologia/infeccion-urinaria.md), [incontinencia urinaria](../geriatria/incontinencia-urinaria.md) y [trauma raquimedular](../neurologia/debilidad-aguda-guillain-barre-y-mielopatias.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Para qué**: **retención crónica** o vaciamiento incompleto (vejiga neurogénica, lesión medular, diabetes, posoperatorio) y para medir el **residuo**.
    - **Mejor que la sonda permanente** cuando es posible: la IDSA 2009 lo prefiere en la lesión medular y la retención para reducir la **infección asociada a catéter**.
    - **Frecuencia**: habitualmente **4–6 veces al día**, para que cada volumen no supere **~ 400–500 mL**.
    - **En la casa**: **técnica limpia** (lavado de manos, sonda limpia); en el hospital, aséptica según el protocolo.
    - **Tipo de sonda** (hidrofílica o no, de un uso o reutilizable): la Cochrane 2021 **no encontró diferencias claras** en las infecciones.
    - **La bacteriuria es esperable**: tratar solo la infección **sintomática**.

!!! guia "¿Qué respalda esta página?"
    La **IDSA 2009** recomienda el cateterismo intermitente sobre la sonda permanente en la lesión medular y la retención crónica. La **revisión Cochrane 2021** (23 ensayos) no logró mostrar que una técnica (limpia o estéril) o un tipo de sonda reduzca las infecciones. La frecuencia y los volúmenes objetivo son **práctica habitual** de urología y neurourología. **Manda el protocolo de tu servicio.**

## Cuándo usarlo

| Situación | Conducta |
|---|---|
| **Vejiga neurogénica**, lesión medular | Cateterismo intermitente (autocateterismo si es posible) |
| **Retención crónica** con residuo alto | Cateterismo intermitente o sonda, según la causa y el paciente |
| **Retención aguda** | Sonda Foley y alfabloqueador; luego intento de retiro (ver [HPB](../cirugia/urologia/hiperplasia-prostatica-retencion-urinaria-y-prostatitis.md)) |
| Medir el **residuo posmiccional** | Cateterismo único (o ecografía vesical) |
| **Estenosis uretral**, falsa vía, trauma uretral | **Urología** antes de sondear |

## Paso a paso

1. **Lavado de manos**; reunir el material (sonda, lubricante, recipiente graduado).
2. **Aseo** genital con agua y jabón (en el hospital, antiséptico según el protocolo).
3. **Hombre**: sostener el pene hacia arriba y adelante; introducir la sonda lubricada hasta que salga orina y avanzar 2 cm más. **Mujer**: separar los labios, ubicar el meato y introducir hasta que fluya la orina.
4. **Vaciar** por completo; al terminar, retirar **lentamente** para drenar el resto.
5. **Medir** y registrar el volumen.
6. **Educar** al paciente o al cuidador y revisar la técnica.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="cateterismo">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: vejiga neurogénica por lesión medular con residuo posmiccional de 450 mL"></label><datalist id="dl-indicacion"><option value="retención urinaria crónica"><option value="vejiga neurogénica"><option value="residuo posmiccional elevado"><option value="medición de residuo posmiccional"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" data-recordar placeholder="ej.: técnica limpia"></label><datalist id="dl-tecnica"><option value="técnica limpia"><option value="técnica aséptica (hospitalizado)"></datalist>
<label class="calc-campo">Sonda <input type="text" name="sonda" list="dl-sonda" data-marca="sonda" placeholder="ej.: sonda Nelaton 12 F"></label><datalist id="dl-sonda"><option value="sonda Nelaton 12 F"><option value="sonda Nelaton 14 F"><option value="sonda hidrofílica 12 F"></datalist>
<label class="calc-campo">Volumen <input type="text" name="volumen" data-marca="volumen" placeholder="ej.: 420 mL de orina clara"></label>
<label class="calc-campo">Educación <input type="text" name="educacion" list="dl-educacion" placeholder="ej.: se enseña autocateterismo al paciente, que lo realiza correctamente"></label><datalist id="dl-educacion"><option value="se enseña autocateterismo al paciente, que lo realiza correctamente"><option value="se enseña cateterismo al cuidador"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza cateterismo vesical intermitente por {indicacion}.", "Con {tecnica} y {sonda}, se obtienen {volumen}; se retira la sonda.", "?Educación: {educacion}."], "indicaciones": [{"id": "frecuencia", "texto": "Cateterismo intermitente 4–6 veces al día, para que cada volumen sea menor de 400–500 mL."}, {"id": "registro", "texto": "Registro de volúmenes en cada cateterismo y de la ingesta de líquidos."}, {"id": "itu", "texto": "No tratar la bacteriuria asintomática; consultar si hay fiebre, dolor o hematuria."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza cateterismo vesical intermitente por vejiga neurogénica por lesión medular con residuo posmiccional de 450 mL. Con técnica limpia y sonda Nelaton 12 F, se obtienen 420 mL de orina clara; se retira la sonda. Educación: se enseña autocateterismo al paciente, que lo realiza correctamente.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **ITU** sintomática | Urocultivo y antibiótico; revisar la técnica y la frecuencia |
| **Trauma uretral**, sangrado, falsa vía | Lubricación, no forzar; urología |
| **Estenosis uretral** (largo plazo) | Urología |
| **Sobredistensión** vesical (cateterismos muy espaciados) | Aumentar la frecuencia |

!!! alarma "Errores frecuentes"
    - Dejar una **sonda permanente** "por comodidad" cuando el paciente podría hacer cateterismo intermitente.
    - **Tratar la bacteriuria asintomática**.
    - Espaciar tanto los cateterismos que la vejiga se **sobredistiende**.
    - **Forzar** la sonda ante resistencia.

!!! perla "Para el internado"
    Pregunta siempre "**¿por qué tiene sonda este paciente?**". Muchas sondas Foley pueden cambiarse por cateterismo intermitente o retirarse, con menos infecciones y menos delirium.

## Preguntas de repaso

??? repaso "1. Paciente con lesión medular y retención crónica. ¿Sonda permanente o cateterismo intermitente?"
    **Cateterismo intermitente** cuando es posible (IDSA 2009): menos infección asociada a catéter.

??? repaso "2. ¿Cada cuánto se hace el cateterismo intermitente?"
    Habitualmente **4–6 veces al día**, para que cada volumen sea menor de **~ 400–500 mL**.

??? repaso "3. ¿Las sondas hidrofílicas reducen las ITU frente a las convencionales?"
    La **Cochrane 2021** no encontró evidencia clara de diferencias entre técnicas ni tipos de sonda.

??? repaso "4. Paciente en autocateterismo con urocultivo positivo, sin fiebre ni síntomas. ¿Tratas?"
    **No**: es **bacteriuria asintomática**, esperable en el cateterismo intermitente.

??? repaso "5. ¿Cuándo no debes sondear y llamar a urología?"
    Si hay **sangre en el meato** tras un trauma (lesión uretral), **estenosis** conocida, falsa vía o resistencia que no cede.

## Referencias

1. Prieto JA, Murphy CL, Stewart F, Fader M. Intermittent catheter techniques, strategies and designs for managing long-term bladder conditions. *Cochrane Database Syst Rev.* 2021;10(10):CD006008. doi:[10.1002/14651858.CD006008.pub5](https://doi.org/10.1002/14651858.CD006008.pub5)
2. Hooton TM, Bradley SF, Cardenas DD, et al. Diagnosis, prevention, and treatment of catheter-associated urinary tract infection in adults: 2009 International Clinical Practice Guidelines from the Infectious Diseases Society of America. *Clin Infect Dis.* 2010;50(5):625–663. doi:[10.1086/650482](https://doi.org/10.1086/650482)
