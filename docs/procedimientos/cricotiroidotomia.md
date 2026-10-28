# Cricotiroidotomía de emergencia

<div class="ficha" markdown>

**Procedimiento**
Acceso de emergencia a la vía aérea a través de la membrana cricotiroidea cuando no se puede intubar ni oxigenar (plan D)

**Fuentes principales**
DAS 2025 y DAS 2015: manejo de la intubación difícil no anticipada (plan D: acceso de emergencia por el cuello)

**Otras fuentes**
Ver [intubación orotraqueal](intubacion-orotraqueal.md), [dispositivos supraglóticos](supragloticos.md) y [trauma y politraumatizado](../cirugia/trauma-y-shock/trauma-y-politraumatizado.md)

**Revisado**
Octubre 2026

</div>

!!! alarma "Procedimiento supervisado"
    Este procedimiento lo realiza habitualmente el residente o el especialista. El interno lo hace **solo con supervisión directa** y después de haberlo practicado en simulación.

!!! abstract "Resumen en 60 segundos"
    - **Cuándo**: situación de **"no intubar, no oxigenar"** (NINO, en inglés CICO): fallaron la intubación, el supraglótico y la mascarilla, y la saturación cae.
    - **Declararla en voz alta**: el mayor error es **demorarla**. La hipoxia mata antes que la cricotiroidotomía.
    - **Técnica recomendada**: **bisturí-bougie-tubo** (DAS): bisturí n.° 10, bougie y **tubo 6,0 con balón**.
    - **Membrana palpable**: incisión **transversal** directa en la membrana.
    - **Membrana no palpable** (obesidad, edema): incisión **vertical** de la piel de **8–10 cm**, disección roma con los dedos y luego incisión transversal de la membrana.
    - **Reconocer la membrana antes**: en la vía aérea difícil prevista, palparla (o marcarla con ecografía) antes de empezar.
    - **Después**: confirmar con **capnografía** y pedir una vía aérea definitiva.

!!! guia "¿Qué respalda esta página?"
    La **guía DAS 2015** introdujo la cricotiroidotomía con **bisturí** como técnica de rescate preferida y la **guía DAS 2025** mantiene el plan D (acceso de emergencia por el cuello) al final del algoritmo. La evidencia viene de **series de casos, auditorías y estudios en simulación**; no hay ensayos clínicos (sería imposible hacerlos). **Manda el protocolo de tu servicio.**

## Cuándo hacerla

| Situación | Conducta |
|---|---|
| Fallaron intubación, supraglótico y mascarilla, con **desaturación progresiva** | **Cricotiroidotomía inmediata** (con el paciente relajado) |
| Se puede oxigenar con supraglótico o mascarilla | **No**: oxigenar y decidir con calma (despertar, intubación por un experto) |
| **Trauma facial** grave u obstrucción supraglótica sin otra vía | Considerarla precozmente |
| **Niños menores de ~ 10–12 años** | En general **no** con bisturí (membrana muy pequeña); la decide un especialista |

## Antes de empezar

### Anatomía

- **Cartílago tiroides** ("manzana de Adán") arriba; **cartílago cricoides** (anillo completo) abajo.
- La **membrana cricotiroidea** queda entre ambos, en la línea media, a la altura de una depresión blanda.
- **Maniobra de la laringe** ("laryngeal handshake"): con la mano no dominante, fijar la laringe entre el pulgar y el dedo medio y ubicar la membrana con el índice.

### Qué preparar (set de vía aérea difícil)

- **Bisturí n.° 10**.
- **Bougie**.
- **Tubo 6,0 con balón** (y jeringa).
- Clorhexidina si hay unos segundos; la antisepsia **no debe demorar** el procedimiento.

## Paso a paso

1. **Declarar** "no intubar, no oxigenar" y pedir el set. Mantener intentos de oxigenación por arriba (mascarilla o supraglótico) mientras se prepara.
2. **Posición**: cuello en **extensión** (almohada bajo los hombros), operador del lado de su mano dominante.
3. **Ubicar** la membrana con la maniobra de la laringe.
4. **Membrana palpable**: incisión **transversal** con el bisturí a través de la piel y la membrana, con el filo hacia el operador.
5. **Rotar** el bisturí **90°** (filo hacia los pies) y traccionarlo hacia el operador para abrir el orificio.
6. **Pasar el bougie** por el lado del bisturí hacia la tráquea, en dirección caudal (10–15 cm).
7. **Retirar** el bisturí y **deslizar el tubo 6,0** sobre el bougie hasta que el balón quede dentro; retirar el bougie.
8. **Inflar el balón**, ventilar y **confirmar con capnografía**.
9. **Fijar** con firmeza.
10. **Membrana no palpable**: incisión **vertical** de la piel de 8–10 cm en la línea media, **disección roma** con los dedos hasta palpar la laringe, y seguir desde el paso 4.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="cricotiroidotomia">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: situación de no intubar, no oxigenar tras intubación y supraglótico fallidos"></label><datalist id="dl-indicacion"><option value="situación de no intubar, no oxigenar"><option value="obstrucción de la vía aérea superior por trauma facial"></datalist>
<label class="calc-campo">SatO₂ al decidir <input type="text" name="satO2" data-marca="SatO₂" placeholder="ej.: 70 %"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Técnica <input type="text" name="tecnica" list="dl-tecnica" data-marca="técnica" placeholder="ej.: bisturí-bougie-tubo"></label><datalist id="dl-tecnica"><option value="bisturí-bougie-tubo"><option value="bisturí-bougie-tubo con incisión vertical de piel por membrana no palpable"></datalist>
<label class="calc-campo">Tubo <input type="text" name="tubo" list="dl-tubo" data-marca="tubo" data-recordar placeholder="ej.: tubo 6,0 con balón"></label><datalist id="dl-tubo"><option value="tubo 6,0 con balón"></datalist>
<label class="calc-campo">Confirmación <input type="text" name="confirmacion" list="dl-confirmacion" data-marca="confirmación" data-recordar placeholder="ej.: curva de capnografía y expansión torácica"></label><datalist id="dl-confirmacion"><option value="curva de capnografía y expansión torácica"></datalist>
<label class="calc-campo">Evolución <input type="text" name="final" placeholder="ej.: SatO₂ sube a 95 %"></label>
<script type="application/json" class="gen-def">{"frases": ["Se realiza cricotiroidotomía de emergencia por {indicacion}.", "?SatO₂ al decidirla: {satO2}.", "Técnica {tecnica}; se instala {tubo} a través de la membrana cricotiroidea, se infla el balón y se confirma con {confirmacion}.", "?Evolución: {final}."], "indicaciones": [{"id": "fijar", "texto": "Fijar el tubo con firmeza; no movilizar el cuello."}, {"id": "capno", "texto": "Capnografía continua."}, {"id": "orl", "texto": "Evaluación urgente por cirugía u otorrinolaringología para traqueostomía o vía aérea definitiva."}, {"id": "registro", "texto": "Registro y comunicación del evento de vía aérea difícil al paciente y su equipo tratante."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza cricotiroidotomía de emergencia por situación de no intubar, no oxigenar tras intubación y supraglótico fallidos. SatO₂ al decidirla: 70 %. Técnica bisturí-bougie-tubo; se instala tubo 6,0 con balón a través de la membrana cricotiroidea, se infla el balón y se confirma con curva de capnografía y expansión torácica. Evolución: SatO₂ sube a 95 %.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Sangrado** (venas superficiales) | Compresión; el tubo con balón suele taponarlo. No es motivo para detenerse |
| **Falsa vía** (tubo fuera de la tráquea, sin capnografía) | Retirar y repetir con el bougie |
| **Lesión** del cartílago cricoides o tiroides, de la pared posterior de la tráquea o del esófago | Técnica controlada; evaluación por cirugía |
| **Enfisema** subcutáneo | Revisar la posición |
| Estenosis subglótica (tardía) | Convertir a traqueostomía según el especialista |

!!! alarma "Errores frecuentes"
    - **Demorar la decisión** mientras se repiten intentos de intubación.
    - Detenerse por el **sangrado**.
    - Puncionar **sobre el cartílago tiroides** o bajo el cricoides en vez de la membrana.
    - No confirmar con **capnografía**.
    - No haber practicado nunca la técnica en **simulación**.

!!! perla "Para el internado"
    Aprende a **ubicar la membrana cricotiroidea** en tus propios pacientes y compañeros (maniobra de la laringe) y conoce dónde está el **set de vía aérea difícil** de tu servicio. En una situación "no intubar, no oxigenar", alguien tiene que decir la frase en voz alta.

## Preguntas de repaso

??? repaso "1. Fallan la intubación (varios intentos), el supraglótico y la mascarilla; SatO₂ 72 % y cayendo. ¿Qué haces?"
    Declarar **"no intubar, no oxigenar"** y hacer una **cricotiroidotomía con bisturí-bougie-tubo** (plan D, DAS).

??? repaso "2. ¿Qué materiales necesitas para la técnica de bisturí-bougie-tubo?"
    **Bisturí n.° 10**, **bougie** y **tubo 6,0 con balón**.

??? repaso "3. Paciente obeso con la membrana cricotiroidea no palpable en una situación "no intubar, no oxigenar". ¿Cómo cambia la técnica?"
    Incisión **vertical** de piel de **8–10 cm** en la línea media, **disección roma** con los dedos hasta identificar la laringe y luego incisión **transversal** de la membrana.

??? repaso "4. Paciente que desatura tras fallar la intubación, pero se ventila bien con un supraglótico. ¿Cricotiroidotomía?"
    **No**: si se puede oxigenar, no hay "no intubar, no oxigenar". Mantener la oxigenación y decidir con calma (despertar o intubación por un experto).

??? repaso "5. Durante la cricotiroidotomía hay sangrado abundante de la piel. ¿Te detienes?"
    **No**: continuar hasta tener el tubo con balón en la tráquea; luego comprimir. La hipoxia es la amenaza mayor.

## Referencias

1. Ahmad I, El-Boghdadly K, Iliff H, et al. Difficult Airway Society 2025 guidelines for management of unanticipated difficult tracheal intubation in adults. *Br J Anaesth.* 2026;136(1):283–307. doi:[10.1016/j.bja.2025.10.006](https://doi.org/10.1016/j.bja.2025.10.006)
2. Frerk C, Mitchell VS, McNarry AF, et al. Difficult Airway Society 2015 guidelines for management of unanticipated difficult intubation in adults. *Br J Anaesth.* 2015;115(6):827–848. doi:[10.1093/bja/aev371](https://doi.org/10.1093/bja/aev371)
