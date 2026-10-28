# Desfibrilación

<div class="ficha" markdown>

**Procedimiento**
Descarga eléctrica **no sincronizada** para terminar una fibrilación ventricular o una taquicardia ventricular sin pulso

**Fuentes principales**
AHA 2025: soporte vital básico y avanzado del adulto

**Otras fuentes**
Cheskes 2022 (DOSE-VF, *N Engl J Med*): fibrilación ventricular refractaria · Ver [paro cardiorrespiratorio y arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md) y [cardioversión eléctrica](cardioversion.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Ritmos desfibrilables**: **fibrilación ventricular** y **TV sin pulso** (y la TV polimorfa inestable).
    - **Lo antes posible**: cada minuto sin descarga baja la sobrevida. Mientras se trae el desfibrilador: **RCP**.
    - **Una descarga** bifásica de **120–200 J** (según el fabricante; si no se sabe, la **máxima**) y **reanudar de inmediato 2 minutos de RCP** sin revisar el pulso (AHA 2025).
    - **Pausas mínimas**: cargar **durante** las compresiones; la pausa para descargar debe durar segundos.
    - **Adrenalina** 1 mg tras la **2.ª descarga**; **amiodarona 300 mg** (o lidocaína) tras la **3.ª**.
    - **FV refractaria**: la doble descarga secuencial y el cambio de vector mejoraron la sobrevida en DOSE-VF, pero la AHA 2025 **no los recomienda de rutina**.

!!! guia "¿Qué respalda esta página?"
    El algoritmo, la energía y los tiempos vienen de las **guías AHA 2025** (con la ERC 2025 en la misma línea). La FV refractaria tiene un **ensayo aleatorizado por conglomerados** (DOSE-VF), que la AHA 2025 considera insuficiente para recomendar esas técnicas de rutina. **Manda el protocolo de tu servicio.**

## Cuándo desfibrilar y cuándo no

| Ritmo | Conducta |
|---|---|
| **Fibrilación ventricular** | **Desfibrilar** |
| **TV sin pulso** | **Desfibrilar** |
| TV **polimorfa** con pulso e inestable | Desfibrilar (no sincronizada) |
| **Asistolia**, **AESP** | **No**: RCP y adrenalina lo antes posible |
| TV monomorfa **con pulso** | **Cardioversión sincronizada** |

## Antes de empezar

- **Desfibrilador** manual o **DEA**, **parches** adhesivos (mejor que las paletas).
- Secar el tórax; **retirar parches de medicamentos** (nitroglicerina) y separarse **≥ 8 cm** de un marcapaso o DAI.
- **Oxígeno** alejado del tórax durante la descarga.

## Paso a paso

1. **Confirmar el paro** (no responde, no respira o respira anormal, sin pulso) y **llamar a ayuda**; iniciar **RCP**.
2. **Parches**: **anterolaterales** (bajo la clavícula derecha y en el ápex) o anteroposteriores, **sin interrumpir** las compresiones.
3. **Analizar el ritmo** (pausa breve).
4. Si es **FV o TV sin pulso**: **reanudar compresiones** mientras se **carga**.
5. **"Todos fuera, oxígeno fuera"**; **descargar**.
6. **Reanudar RCP de inmediato** por **2 minutos**; no buscar pulso tras la descarga.
7. Cada 2 minutos: revisar el ritmo, **cambiar al que comprime** y repetir.
8. Fármacos: **adrenalina 1 mg** cada 3–5 minutos tras la 2.ª descarga; **amiodarona 300 mg** tras la 3.ª (150 mg tras la 5.ª).
9. **Buscar las causas reversibles** (4H y 4T).

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="desfibrilacion">
<span class="gen-titulo">La situación</span>
<label class="calc-campo">Ritmo <input type="text" name="ritmo" list="dl-ritmo" data-marca="ritmo" placeholder="ej.: fibrilación ventricular"></label><datalist id="dl-ritmo"><option value="fibrilación ventricular"><option value="TV sin pulso"><option value="TV polimorfa con pulso inestable"></datalist>
<label class="calc-campo">Contexto <input type="text" name="contexto" data-marca="contexto" placeholder="ej.: paro presenciado en sala, RCP iniciada de inmediato"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Descargas <input type="text" name="descargas" list="dl-descargas" data-marca="descargas" placeholder="ej.: 3 descargas bifásicas de 200 J"></label><datalist id="dl-descargas"><option value="1 descarga bifásica de 200 J"><option value="2 descargas bifásicas de 200 J"><option value="3 descargas bifásicas de 200 J"></datalist>
<label class="calc-campo">Fármacos <input type="text" name="farmacos" data-marca="fármacos" placeholder="ej.: adrenalina 1 mg tras la 2.ª descarga y amiodarona 300 mg tras la 3.ª"></label>
<label class="calc-campo">Resultado <input type="text" name="resultado" data-marca="resultado" placeholder="ej.: recuperación de la circulación espontánea a los 8 minutos"></label>
<script type="application/json" class="gen-def">{"frases": ["{contexto}. Ritmo: {ritmo}.", "Se aplican {descargas}, con RCP de alta calidad entre cada una; {farmacos}.", "Resultado: {resultado}."], "indicaciones": [{"id": "posparo", "texto": "Cuidados posparo: SpO₂ 92–98 %, PaCO₂ 35–45 mmHg, PAM ≥ 65 mmHg, ECG de 12 derivaciones, control de temperatura."}, {"id": "causa", "texto": "Buscar y tratar la causa del paro (SCA, potasio, hipoxia, fármacos)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paro presenciado en sala, RCP iniciada de inmediato. Ritmo: fibrilación ventricular. Se aplican 3 descargas bifásicas de 200 J, con RCP de alta calidad entre cada una; adrenalina 1 mg tras la 2.ª descarga y amiodarona 300 mg tras la 3.ª. Resultado: recuperación de la circulación espontánea a los 8 minutos.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **Quemaduras** de piel | Parches bien adheridos, sin gel derramado |
| **Descarga a un miembro del equipo** | "Todos fuera" en voz alta y mirar antes de descargar |
| **Incendio** (oxígeno cerca) | Alejar el oxígeno libre durante la descarga |
| Daño de un **marcapaso o DAI** | Parches a ≥ 8 cm del dispositivo; control posterior |

!!! alarma "Errores frecuentes"
    - **Pausas largas** antes y después de la descarga.
    - Revisar el pulso **inmediatamente después** de descargar en vez de reanudar la RCP.
    - **Desfibrilar una asistolia** o una AESP.
    - Olvidar **retirar el parche de nitroglicerina** o secar el tórax.

!!! perla "Para el internado"
    Tu trabajo en el paro suele ser **comprimir bien** y **cronometrar**. Avisa en voz alta cada 2 minutos y cuándo toca la adrenalina: el equipo lo agradece.

## Preguntas de repaso

??? repaso "1. Paro con FV en el monitor. ¿Qué haces tras la primera descarga?"
    **Reanudar inmediatamente 2 minutos de RCP**, sin revisar el pulso; luego reevaluar el ritmo (AHA 2025).

??? repaso "2. ¿Cuándo das la adrenalina y la amiodarona en la FV?"
    **Adrenalina 1 mg** tras la **2.ª descarga** fallida y luego cada 3–5 minutos; **amiodarona 300 mg** tras la **3.ª** (150 mg tras la 5.ª).

??? repaso "3. Paro en asistolia. ¿Desfibrilas?"
    **No**: RCP y **adrenalina lo antes posible**; buscar causas reversibles.

??? repaso "4. FV que persiste tras 3 descargas, adrenalina y amiodarona. ¿Qué mostró el ensayo DOSE-VF?"
    La **doble descarga secuencial** (30,4 %) y el **cambio de vector** (21,7 %) tuvieron más sobrevida al alta que la desfibrilación estándar (13,3 %), pero la **AHA 2025 no los recomienda de rutina**.

??? repaso "5. ¿Qué energía usas si no sabes cuál recomienda el fabricante del desfibrilador bifásico?"
    La **máxima** disponible.

## Referencias

1. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
2. Kleinman ME, Buick JE, Huber N, et al. Part 7: Adult Basic Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S448–S478. doi:[10.1161/CIR.0000000000001369](https://doi.org/10.1161/CIR.0000000000001369)
3. Cheskes S, Verbeek PR, Drennan IR, et al. Defibrillation Strategies for Refractory Ventricular Fibrillation. *N Engl J Med.* 2022;387(21):1947–1956. doi:[10.1056/NEJMoa2207304](https://doi.org/10.1056/NEJMoa2207304)
