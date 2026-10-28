# Cardioversión eléctrica

<div class="ficha" markdown>

**Procedimiento**
Descarga eléctrica **sincronizada** con el QRS para revertir una taquiarritmia con pulso

**Fuentes principales**
AHA 2025: soporte vital avanzado (taquicardia con pulso) · ESC 2024: fibrilación auricular (anticoagulación y cardioversión)

**Otras fuentes**
Schmidt 2021 (*Circulation*): posición de los parches · Ver [fibrilación auricular](../cardiologia/fibrilacion-auricular.md), [arritmias](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md) y [desfibrilación](desfibrilacion.md)

**Revisado**
Octubre 2026

</div>

!!! alarma "Procedimiento supervisado"
    Este procedimiento lo realiza habitualmente el residente o el especialista. El interno lo hace **solo con supervisión directa** y después de haberlo practicado en simulación.

!!! abstract "Resumen en 60 segundos"
    - **Indicación urgente**: taquiarritmia con pulso e **inestabilidad** (hipotensión, compromiso de conciencia, dolor torácico isquémico, insuficiencia cardíaca aguda).
    - **Sincronizada** siempre que haya pulso; la **TV polimorfa** y la FV se **desfibrilan** (no sincronizada).
    - **Energía inicial bifásica** (AHA 2025): **QRS estrecho regular 50–100 J**; **FA 120–200 J**; **TV monomorfa 100 J**; subir si no responde.
    - **Sedoanalgesia** si está consciente, sin demorar la descarga en el paciente muy inestable.
    - **FA o flutter ≥ 24 horas** (o tiempo incierto) en la cardioversión **programada**: **3 semanas de anticoagulación** o **ETE** sin trombo; **anticoagular ≥ 4 semanas después** (ESC 2024).
    - **Parches anterolaterales**: más éxito con la primera descarga en la FA (**54 % frente a 33 %**; Schmidt 2021).
    - **Volver a sincronizar** antes de cada nueva descarga: muchos equipos vuelven al modo no sincronizado.

!!! guia "¿Qué respalda esta página?"
    Las energías y las indicaciones vienen de las **guías AHA 2025**; la anticoagulación antes y después, de la **guía ESC 2024** de fibrilación auricular. La posición de los parches se apoya en un **ensayo aleatorizado** (Schmidt 2021). La sedoanalgesia sigue el protocolo local. **Manda el protocolo de tu servicio.**

## Cuándo hacerla

| Situación | Conducta |
|---|---|
| Taquiarritmia **inestable** con pulso | **Cardioversión sincronizada inmediata** (con heparina en la FA) |
| **FA o flutter estable** de **< 24 h**, bajo riesgo | Cardioversión eléctrica o farmacológica; la ESC 2024 acepta "esperar y ver" (muchas revierten solas) |
| **FA o flutter estable ≥ 24 h** o de inicio incierto | Anticoagular **3 semanas** o **ETE**; luego cardioversión programada |
| **TV monomorfa** con pulso inestable | Sincronizada 100 J |
| **TV polimorfa**, FV | **Desfibrilación** (no sincronizada) |
| Taquicardia **sinusal** o por **intoxicación digitálica** | **No** |

## Antes de empezar

### Qué preparar

- **Desfibrilador** con monitor, **parches** adhesivos.
- **Vía venosa**, monitoreo de presión y SatO₂, **oxígeno**, aspiración, **bolsa-mascarilla**.
- **Sedoanalgesia** de acción corta (según el protocolo; por ejemplo, midazolam con fentanilo, o propofol si lo administra un anestesista).
- **Carro de paro** cerca.
- **Anticoagulación** según el caso.

## Paso a paso

1. **Explicar** y obtener consentimiento si el paciente puede darlo.
2. **Parches**: **anterolaterales** (bajo la clavícula derecha y en el ápex, línea axilar media) o anteroposteriores.
3. **Monitor** con una derivación que muestre bien el QRS.
4. **Sedoanalgesia**.
5. Activar el modo **SINCRONIZADO**: comprobar que aparezcan **marcas sobre cada QRS** (no sobre la T).
6. **Cargar** la energía; avisar **"todos fuera"** y verificar que nadie toque al paciente ni la cama; oxígeno alejado del tórax.
7. **Mantener presionado** el botón de descarga (la descarga se produce en sincronía con el siguiente QRS).
8. **Revisar el ritmo** y el pulso.
9. Si no revirtió: **volver a sincronizar**, **subir la energía** y repetir.
10. **Monitorizar** hasta que recupere la conciencia; **ECG** de 12 derivaciones.

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="cardioversion">
<span class="gen-titulo">El paciente</span>
<label class="calc-campo">Indicación <input type="text" name="indicacion" list="dl-indicacion" data-marca="indicación" placeholder="ej.: FA con respuesta ventricular rápida e hipotensión (80/50)"></label><datalist id="dl-indicacion"><option value="taquiarritmia inestable"><option value="FA con inestabilidad hemodinámica"><option value="flutter auricular programado"><option value="TV monomorfa con pulso inestable"></datalist>
<label class="calc-campo">Anticoagulación <input type="text" name="anticoag" list="dl-anticoag" data-marca="anticoagulación" placeholder="ej.: heparina no fraccionada EV antes del procedimiento"></label><datalist id="dl-anticoag"><option value="anticoagulación efectiva ≥ 3 semanas"><option value="ETE sin trombo en la orejuela"><option value="heparina no fraccionada EV antes del procedimiento"><option value="FA de menos de 24 horas en paciente de bajo riesgo"></datalist>
<label class="calc-campo">Sedoanalgesia <input type="text" name="sedacion" data-marca="sedoanalgesia" placeholder="ej.: midazolam 2 mg y fentanilo 50 µg EV"></label>
<span class="gen-titulo">El procedimiento</span>
<label class="calc-campo">Parches <input type="text" name="parches" list="dl-parches" data-marca="posición de los parches" placeholder="ej.: anterolaterales"></label><datalist id="dl-parches"><option value="anterolaterales"><option value="anteroposteriores"></datalist>
<label class="calc-campo">Energía <input type="text" name="energia" list="dl-energia" data-marca="energía" placeholder="ej.: descarga sincronizada de 200 J bifásica"></label><datalist id="dl-energia"><option value="descarga sincronizada de 50–100 J bifásica"><option value="descarga sincronizada de 100 J bifásica"><option value="descarga sincronizada de 120–200 J bifásica"><option value="descarga sincronizada de 200 J bifásica"></datalist>
<label class="calc-campo">Número de descargas <input type="text" name="descargas" list="dl-descargas" data-marca="n.° de descargas" placeholder="ej.: una descarga"></label><datalist id="dl-descargas"><option value="una descarga"><option value="dos descargas (200 J y 200 J)"></datalist>
<label class="calc-campo">Resultado <input type="text" name="resultado" data-marca="resultado" placeholder="ej.: paso a ritmo sinusal 78 lpm, presión 115/70"></label>
<label class="calc-campo">Al término <input type="text" name="final" list="dl-final" placeholder="ej.: sin complicaciones; recupera la conciencia sin incidentes"></label><datalist id="dl-final"><option value="sin complicaciones"></datalist>
<script type="application/json" class="gen-def">{"frases": ["Se realiza cardioversión eléctrica sincronizada por {indicacion}.", "Anticoagulación: {anticoag}.", "Previa sedoanalgesia con {sedacion}, con parches {parches}, se aplica {energia}, {descargas}.", "Resultado: {resultado}.", "?Procedimiento {final}."], "indicaciones": [{"id": "monitor", "texto": "Monitoreo ECG continuo y de SatO₂ hasta recuperar la conciencia completa."}, {"id": "ecg", "texto": "ECG de 12 derivaciones tras la cardioversión."}, {"id": "anticoag", "texto": "Anticoagulación al menos 4 semanas tras la cardioversión de una FA o flutter (y luego según CHA₂DS₂-VA)."}, {"id": "piel", "texto": "Revisar la piel bajo los parches (quemaduras)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Se realiza cardioversión eléctrica sincronizada por FA con respuesta ventricular rápida e hipotensión (80/50). Anticoagulación: heparina no fraccionada EV antes del procedimiento. Previa sedoanalgesia con midazolam 2 mg y fentanilo 50 µg EV, con parches anterolaterales, se aplica descarga sincronizada de 200 J bifásica, una descarga. Resultado: paso a ritmo sinusal 78 lpm, presión 115/70. Procedimiento sin complicaciones; recupera la conciencia sin incidentes.

## Complicaciones

| Complicación | Qué hacer |
|---|---|
| **FV** por descarga no sincronizada (sobre la onda T) | **Desfibrilar** de inmediato |
| **Embolia** (ACV) tras cardiovertir una FA sin anticoagulación adecuada | Prevenir: anticoagulación antes y **4 semanas después** |
| **Bradicardia** o asistolia transitoria (sobre todo con disfunción sinusal) | Atropina, marcapaso transcutáneo |
| **Depresión respiratoria** por la sedación | Ventilar con bolsa-mascarilla; antagonistas |
| **Quemaduras** de piel | Parches bien adheridos; curación |

!!! alarma "Errores frecuentes"
    - **Olvidar sincronizar** (o volver a sincronizar tras la primera descarga).
    - Cardiovertir una FA **de más de 24 horas** sin anticoagulación ni ETE en un paciente **estable**.
    - Retrasar la cardioversión de un paciente **muy inestable** esperando la sedación ideal.
    - Sincronizar una **TV polimorfa** o una FV (el equipo no encuentra QRS y no descarga).

!!! perla "Para el internado"
    Antes de cada descarga, di en voz alta: **"sincronizado, X joules, todos fuera, oxígeno fuera"**. Y mira que las marcas de sincronía caigan **sobre el QRS**.

## Preguntas de repaso

??? repaso "1. FA con respuesta ventricular de 170 lpm, presión 75/40 y confusión. ¿Qué haces?"
    **Cardioversión eléctrica sincronizada inmediata** (120–200 J bifásica), con sedoanalgesia si se puede y **heparina**; luego anticoagulación según la guía.

??? repaso "2. Paciente estable con FA de inicio hace 3 días. Quiere ritmo sinusal. ¿Puedes cardiovertir hoy?"
    No sin preparación: con **≥ 24 horas** se necesitan **3 semanas de anticoagulación** o un **ETE** sin trombo, y **anticoagular 4 semanas después** (ESC 2024).

??? repaso "3. Primera descarga sincronizada de 100 J sin efecto en una TV monomorfa con pulso. ¿Qué haces?"
    **Volver a sincronizar** y **subir la energía** (por ejemplo 150–200 J).

??? repaso "4. TV polimorfa con pulso débil e inestable. ¿Cardioversión sincronizada?"
    **No**: la TV polimorfa se trata con **desfibrilación** (no sincronizada), porque el equipo no logra sincronizar con QRS cambiantes.

??? repaso "5. ¿Anterolaterales o anteroposteriores para cardiovertir una FA?"
    En el ensayo de Schmidt (2021), la posición **anterolateral** logró ritmo sinusal con la primera descarga en el **54 %** frente al **33 %** de la anteroposterior.

## Referencias

1. Wigginton JG, Agarwal S, Bartos JA, et al. Part 9: Adult Advanced Life Support: 2025 American Heart Association Guidelines for Cardiopulmonary Resuscitation and Emergency Cardiovascular Care. *Circulation.* 2025;152(16 Suppl 2):S538–S577. doi:[10.1161/CIR.0000000000001376](https://doi.org/10.1161/CIR.0000000000001376)
2. Van Gelder IC, et al. 2024 ESC Guidelines for the management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS). *Eur Heart J.* 2024;45:3314–3414. [Texto en la revista](https://academic.oup.com/eurheartj/article/45/36/3314/7738779)
3. Schmidt AS, Lauridsen KG, Møller DS, et al. Anterior-Lateral Versus Anterior-Posterior Electrode Position for Cardioverting Atrial Fibrillation. *Circulation.* 2021;144(25):1995–2003. doi:[10.1161/CIRCULATIONAHA.121.056301](https://doi.org/10.1161/CIRCULATIONAHA.121.056301)
