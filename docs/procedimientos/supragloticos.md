# Dispositivos supraglóticos

<div class="ficha" markdown>

**Procedimiento**
Instalación de un dispositivo que se aloja sobre la glotis (máscara laríngea, i-gel, tubo laríngeo) para ventilar sin intubar

**Fuentes principales**
DAS 2025: manejo de la intubación difícil no anticipada (plan B) · AHA 2025: soporte vital avanzado · Benger 2018 (AIRWAYS-2) y Wang 2018 (PART), *JAMA*

**Otras fuentes**
DAS 2015 · Ver [ventilación con bolsa-mascarilla](bolsa-mascarilla.md), [intubación orotraqueal](intubacion-orotraqueal.md) y [cricotiroidotomía](cricotiroidotomia.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Dos usos**: **vía aérea avanzada en el paro** (alternativa a la intubación) y **rescate** cuando la intubación falla (**plan B** de DAS).
    - **En el paro**: el supraglótico **no fue peor** que la intubación. En AIRWAYS-2 (9.296 pacientes) el buen resultado neurológico fue igual (6,4 % frente a 6,8 %); en PART (3.000 pacientes), el tubo laríngeo dio **más sobrevida a 72 horas** (18,3 % frente a 15,4 %) que la intubación por paramédicos.
    - **Preferir los de segunda generación** (con canal gástrico, como el i-gel): sellan mejor y permiten descomprimir el estómago (DAS).
    - **Tamaño** según el fabricante (en el i-gel, por peso; en la máscara laríngea, 4 en la mayoría de los adultos).
    - **No protege** del todo contra la aspiración y **no sirve** si la obstrucción está en la glotis o bajo ella.
    - Si **no se logra ventilar** tras el supraglótico y la mascarilla: **cricotiroidotomía** (plan D).

!!! guia "¿Qué respalda esta página?"
    El lugar del supraglótico en el rescate de la vía aérea lo define la **guía DAS 2025** (plan B), que recomienda los dispositivos de **segunda generación** y un número limitado de intentos. En el paro hay **ensayos aleatorizados grandes** (AIRWAYS-2 y PART) y las **guías AHA 2025**. Los tamaños y la técnica de inserción siguen las **instrucciones del fabricante**. **Manda el protocolo de tu servicio.**

## Cuándo usarlo y cuándo no

| Situación | Conducta | Por qué |
|---|---|---|
| **Paro** cardiorrespiratorio | Supraglótico o intubación, según la experiencia del equipo | Igual resultado; el supraglótico se instala más rápido y con menos pausas |
| **Intubación fallida** | **Plan B**: supraglótico de 2.ª generación | Oxigenar mientras se decide el paso siguiente |
| Ventilación con mascarilla difícil | Supraglótico | Mejor sello que la mascarilla |
| **Obstrucción** glótica o subglótica (cuerpo extraño, tumor, edema laríngeo) | **No** | El aire no pasa la obstrucción |
| Apertura bucal **menor de 2 cm** | No | No entra |
| Paciente **con reflejos** de vía aérea | No | Náuseas, vómito y laringoespasmo |

## Antes de empezar

### Qué preparar

- **Dispositivo** del tamaño correcto y uno más chico y uno más grande; **lubricante** en la cara posterior.
- Bolsa con reservorio y oxígeno, **capnografía**, aspiración.
- **Sonda gástrica** que pase por el canal de drenaje.
- Jeringa si el modelo tiene balón (la máscara laríngea clásica; el i-gel no lo tiene).

## Paso a paso

1. **Preoxigenar** o ventilar con mascarilla mientras se prepara.
2. **Posición** neutra o "de olfateo"; abrir la boca con tracción del mentón.
3. Introducir el dispositivo **pegado al paladar duro**, con la cara de la abertura hacia la lengua, deslizándolo hacia abajo y atrás **hasta sentir resistencia**.
4. **Inflar el balón** si tiene (según el fabricante).
5. **Conectar** la bolsa y **confirmar**: **curva de capnografía**, expansión torácica, sin fuga importante.
6. **Fijar** y pasar una **sonda gástrica** por el canal de drenaje.
7. En el paro: compresiones **continuas** con 1 ventilación cada 6 segundos si el sello es bueno (AHA 2025); si hay mucha fuga, volver al 30:2.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="supraglotico">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: paro cardiorrespiratorio, como vía aérea avanzada"></label><datalist id="dl-indicacion"><option value="paro cardiorrespiratorio, como vía aérea avanzada"><option value="rescate tras intubación fallida"><option value="ventilación con mascarilla difícil"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Dispositivo <input type="text" name="dispositivo" list="dl-dispositivo" data-marca="dispositivo" placeholder="ej.: supraglótico de segunda generación (i-gel) número 4"></label><datalist id="dl-dispositivo"><option value="supraglótico de segunda generación (i-gel) número 3"><option value="supraglótico de segunda generación (i-gel) número 4"><option value="supraglótico de segunda generación (i-gel) número 5"><option value="máscara laríngea número 4"><option value="tubo laríngeo"></datalist>
<label class="calc-campo">Intentos <input type="text" name="intentos" list="dl-intentos" data-marca="n.° de intento" placeholder="ej.: primer intento"></label><datalist id="dl-intentos"><option value="primer intento"><option value="segundo intento"></datalist>
<label class="calc-campo">Confirmación <input type="text" name="confirmacion" list="dl-confirmacion" data-marca="confirmación" data-recordar placeholder="ej.: curva de capnografía, expansión torácica simétrica y sin fuga audible"></label><datalist id="dl-confirmacion"><option value="curva de capnografía, expansión torácica simétrica y sin fuga audible"></datalist>
<label class="calc-campo">Canal gástrico <input type="text" name="sng" list="dl-sng" data-marca="canal gástrico" placeholder="ej.: sonda gástrica por el canal de drenaje"></label><datalist id="dl-sng"><option value="sonda gástrica por el canal de drenaje"><option value="no se instala sonda"></datalist>
<label class="calc-campo">Al término <input type="text" name="final" list="dl-final" placeholder="ej.: sin regurgitación"></label><datalist id="dl-final"><option value="sin regurgitación"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se instala dispositivo supraglótico por {indicacion}.", "Se inserta {dispositivo}, en {intentos}, y se confirma con {confirmacion}.", "?Se instala {sng}.", "?Procedimiento {final}."], "indicaciones": [{"id": "capno", "texto": "Capnografía continua; avisar si cambia la curva o aparece fuga."}, {"id": "fijar", "texto": "Fijar el dispositivo y reevaluar su posición al mover al paciente."}, {"id": "plan", "texto": "Definir el plan de vía aérea definitiva (intubación por el supraglótico o con videolaringoscopio por un operador experto)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se instala dispositivo supraglótico por paro cardiorrespiratorio, como vía aérea avanzada. Se inserta supraglótico de segunda generación (i-gel) número 4, en primer intento, y se confirma con curva de capnografía, expansión torácica simétrica y sin fuga audible. Se instala sonda gástrica por el canal de drenaje. Procedimiento sin regurgitación.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Fuga** de aire, ventilación insuficiente | Reposicionar, cambiar de tamaño; bajar las presiones de ventilación |
| **Regurgitación** y aspiración | Aspirar por el canal gástrico; plan de intubación |
| **Laringoespasmo** (paciente superficial) | Profundizar la sedación; ventilar con presión positiva |
| **Desplazamiento** al mover al paciente | Revisar la curva de capnografía; fijar |
| Lesión de faringe, lengua o úvula | Técnica suave, lubricar; no forzar |

!!! alarma "Errores frecuentes"
    - **Insistir en intubar** en vez de poner el supraglótico mientras el paciente desatura.
    - Usar el supraglótico en una **obstrucción glótica** (cuerpo extraño, angioedema laríngeo).
    - **No confirmar** con capnografía.
    - Hacer **más intentos** de los que indica el algoritmo antes de pasar al plan siguiente.

!!! perla "Para el internado"
    El supraglótico es la vía aérea avanzada más fácil de aprender. En un paro donde nadie logra intubar, **un supraglótico bien puesto oxigena igual** y deja al equipo concentrado en el masaje.

## Preguntas de repaso

??? repaso "1. Paro extrahospitalario. ¿Es peor usar un supraglótico que intubar?"
    No. En **AIRWAYS-2** el resultado neurológico fue igual (6,4 % frente a 6,8 %) y en **PART** el tubo laríngeo tuvo **más sobrevida a 72 horas** (18,3 % frente a 15,4 %) que la intubación por paramédicos.

??? repaso "2. Fallaron los intentos de intubación, pero el paciente se ventila con dificultad con la mascarilla. ¿Qué haces?"
    **Plan B** (DAS 2025): **supraglótico de segunda generación**, confirmar con capnografía y decidir con calma el paso siguiente (despertar, intubar por el supraglótico o con un operador experto).

??? repaso "3. Niño de 6 años con aspiración de cuerpo extraño, sin ventilar. ¿Sirve el supraglótico?"
    **No**: si la obstrucción está en la glotis o bajo ella, el aire no la supera. Seguir el algoritmo de **obstrucción por cuerpo extraño** y extraerlo bajo visión directa.

??? repaso "4. ¿Por qué se prefieren los supraglóticos de segunda generación?"
    Tienen **canal gástrico** (descomprimir el estómago, menos aspiración) y **mejor sello**, lo que permite ventilar con presiones más altas (DAS).

??? repaso "5. Instalaste un i-gel en un paro; hay una fuga ruidosa en cada ventilación. ¿Qué haces?"
    **Reposicionar** o cambiar de **tamaño**, revisar la capnografía. Si persiste, ventilar en **30:2** en vez de compresiones continuas.

## Referencias

1. Ahmad I, El-Boghdadly K, Iliff H, et al. Difficult Airway Society 2025 guidelines for management of unanticipated difficult tracheal intubation in adults. *Br J Anaesth.* 2026;136(1):283–307. doi:[10.1016/j.bja.2025.10.006](https://doi.org/10.1016/j.bja.2025.10.006)
2. Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. *Br J Anaesth.* 2015;115(6):827–848. doi:[10.1093/bja/aev371](https://doi.org/10.1093/bja/aev371)
3. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
4. Benger JR, Kirby K, Black S, et al. Effect of a Strategy of a Supraglottic Airway Device vs Tracheal Intubation During Out-of-Hospital Cardiac Arrest on Functional Outcome: The AIRWAYS-2 Randomized Clinical Trial. *JAMA.* 2018;320(8):779–791. doi:[10.1001/jama.2018.11597](https://doi.org/10.1001/jama.2018.11597)
5. Wang HE, Schmicker RH, Daya MR, et al. Effect of a Strategy of Initial Laryngeal Tube Insertion vs Endotracheal Intubation on 72-Hour Survival in Adults With Out-of-Hospital Cardiac Arrest: A Randomized Clinical Trial. *JAMA.* 2018;320(8):769–778. doi:[10.1001/jama.2018.7044](https://doi.org/10.1001/jama.2018.7044)
