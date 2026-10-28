# Cambio de cistostomía

<div class="ficha" markdown>

**Procedimiento**
Recambio de la sonda suprapúbica (cistostomía) por su trayecto ya formado

**Fuentes principales**
Práctica clínica habitual · IDSA 2009: infección urinaria asociada a catéter

**Otras fuentes**
Ver [sonda Foley](foley.md), [cateterismo vesical intermitente](cateterismo-intermitente.md), [trauma urológico](../cirugia/urologia/trauma-urologico.md) e [hiperplasia prostática y retención urinaria](../cirugia/urologia/hiperplasia-prostatica-retencion-urinaria-y-prostatitis.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Cistostomía**: sonda que entra a la vejiga por la pared abdominal, sobre el pubis; se usa cuando la vía uretral no sirve (estenosis, trauma uretral, retención crónica, vejiga neurogénica).
    - **El primer recambio** lo hace **urología** (el trayecto tarda semanas en madurar).
    - **Trayecto maduro**: el recambio es sencillo, en la cama, con técnica aséptica.
    - **Si se sale**: el trayecto se **cierra en horas** (minutos en algunos casos); reinstalar pronto una sonda (aunque sea más delgada) para mantenerlo.
    - **Balón** con **agua destilada**; comprobar la salida de orina antes de fijar.
    - **Bacteriuria esperable**: tratar solo la infección sintomática; cambiar la sonda antes de tomar el urocultivo si lleva semanas (IDSA 2009).

!!! guia "¿Qué respalda esta página?"
    **No hay guías ni ensayos** sobre la técnica del recambio: es **práctica habitual** de urología. El manejo de la bacteriuria y la ITU asociada a catéter sigue la **guía IDSA 2009**. **Manda el protocolo de tu servicio.**

## Cuándo hacerlo

| Situación | Conducta |
|---|---|
| **Recambio programado** con trayecto maduro | En la cama, técnica aséptica |
| **Salida accidental** con trayecto maduro | **Reinstalar pronto** (en horas) |
| Salida en las **primeras semanas** tras la cistostomía | **Urología** (trayecto inmaduro) |
| **Obstrucción** | Lavado con suero; si no drena, recambio |
| **ITU** sintomática con sonda de más de 2 semanas | **Cambiar la sonda** y tomar el urocultivo de la nueva (IDSA 2009) |

## Paso a paso

1. **Explicar**; revisar el calibre de la sonda actual.
2. **Técnica aséptica**: guantes estériles, campo, antisepsia de la piel periestoma.
3. **Desinflar** el balón (aspirar todo el contenido) y **retirar** la sonda con tracción suave, observando el **ángulo** y la **profundidad** del trayecto.
4. **Introducir** de inmediato la sonda nueva lubricada siguiendo el mismo ángulo, **unos centímetros más** de lo que estaba la antigua.
5. **Esperar la salida de orina** antes de inflar el balón (si no sale, lavar con suero).
6. **Inflar** el balón con **agua destilada** según el fabricante y traccionar suavemente.
7. **Conectar** a la bolsa, **fijar** a la piel y registrar.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="cistostomia">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Motivo <input type="text" name="motivo" list="dl-motivo" data-marca="motivo" placeholder="ej.: recambio programado de cistostomía (última hace 6 semanas)"></label><datalist id="dl-motivo"><option value="recambio programado"><option value="salida accidental"><option value="sonda obstruida"></datalist>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Antisepsia <input type="text" name="antisepsia" list="dl-antisepsia" data-marca="antisepsia" data-recordar placeholder="ej.: povidona yodada en la piel periestoma"></label><datalist id="dl-antisepsia"><option value="clorhexidina en la piel periestoma"><option value="povidona yodada en la piel periestoma"></datalist>
<label class="calc-campo">Sonda <input type="text" name="sonda" list="dl-sonda" data-marca="sonda" placeholder="ej.: sonda Foley 16 F"></label><datalist id="dl-sonda"><option value="sonda Foley 14 F"><option value="sonda Foley 16 F"><option value="sonda Foley 18 F"></datalist>
<label class="calc-campo">Balón <input type="text" name="balon" list="dl-balon" data-marca="balón" data-recordar placeholder="ej.: inflado con 10 mL de agua destilada"></label><datalist id="dl-balon"><option value="inflado con 10 mL de agua destilada"></datalist>
<label class="calc-campo">Comprobación <input type="text" name="comprobacion" list="dl-comprobacion" data-marca="comprobación" placeholder="ej.: salida de orina clara"></label><datalist id="dl-comprobacion"><option value="salida de orina clara"><option value="salida de orina tras lavado con 50 mL de suero"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza cambio de cistostomía por {motivo}.", "Previa antisepsia con {antisepsia}, se retira la sonda anterior y se instala {sonda} por el trayecto, con el balón {balon}.", "Se comprueba {comprobacion}. Se conecta a bolsa recolectora."], "indicaciones": [{"id": "fijar", "texto": "Fijar la sonda a la piel del abdomen; bolsa bajo el nivel de la vejiga."}, {"id": "aseo", "texto": "Aseo del estoma con agua y jabón y secado diario."}, {"id": "cambio", "texto": "Próximo recambio según el protocolo (habitualmente cada 4–12 semanas) o antes si se obstruye."}, {"id": "aviso", "texto": "Avisar si no drena orina, hay dolor, fiebre o la sonda sale."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza cambio de cistostomía por recambio programado de cistostomía (última hace 6 semanas). Previa antisepsia con povidona yodada en la piel periestoma, se retira la sonda anterior y se instala sonda Foley 16 F por el trayecto, con el balón inflado con 10 mL de agua destilada. Se comprueba salida de orina clara. Se conecta a bolsa recolectora.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **No se logra pasar** la sonda | Probar una más delgada; **urología** pronto |
| **Falsa vía** (no sale orina, dolor) | No inflar el balón; urología |
| **Sangrado** leve | Habitual; vigilar |
| **Infección** del estoma | Curación; antibiótico si hay celulitis |
| **Inflar el balón en el trayecto** (dolor intenso) | Desinflar y avanzar más |

!!! alarma "Errores frecuentes"
    - **Inflar el balón** antes de ver salir orina.
    - **Demorar** la reinstalación de una cistostomía que se salió.
    - Recambiar a ciegas una cistostomía **reciente**.
    - Tratar la **bacteriuria asintomática**.

!!! perla "Para el internado"
    Antes de retirar la sonda antigua, ten la nueva **abierta y lubricada** al lado: el trayecto puede cerrarse muy rápido.

## Preguntas de repaso

??? repaso "1. Paciente con cistostomía de 1 año que se salió hace 2 horas. ¿Qué haces?"
    **Reinstalar pronto** una sonda por el trayecto (aunque sea de menor calibre) para que no se cierre, y comprobar la salida de orina.

??? repaso "2. ¿Cuándo inflas el balón de la nueva sonda?"
    **Después de ver salir orina**, para no inflarlo en el trayecto.

??? repaso "3. Cistostomía instalada hace 10 días que se salió. ¿La reinstalas tú?"
    **No**: el trayecto es **inmaduro**; avisar a **urología**.

??? repaso "4. Paciente con cistostomía de 2 meses con fiebre y dolor suprapúbico. ¿Cómo tomas el urocultivo?"
    **Cambiar la sonda** y tomar el urocultivo de la **nueva** (IDSA 2009), luego antibiótico.

??? repaso "5. ¿Con qué inflas el balón?"
    Con **agua destilada**, según el volumen indicado por el fabricante.

## Referencias

1. Hooton TM, Bradley SF, Cardenas DD, et al. Diagnosis, prevention, and treatment of catheter-associated urinary tract infection in adults: 2009 International Clinical Practice Guidelines from the Infectious Diseases Society of America. *Clin Infect Dis.* 2010;50(5):625–663. doi:[10.1086/650482](https://doi.org/10.1086/650482)
