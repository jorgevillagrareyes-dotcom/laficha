# Constatación de fallecimiento y certificado de defunción

<div class="ficha" markdown>

**Procedimiento**
Constatar la muerte en la sala, comunicarla a la familia y llenar el certificado médico de defunción (o reconocer cuándo no se debe certificar)

**Fuentes principales**
Código Sanitario (DFL N.° 725 de 1967) · OMS: reglas de certificación de la causa de muerte (CIE-10)

**Otras fuentes**
Ver [documentos médico-legales y certificado de defunción](../salud-publica/documentos-medico-legales-y-ejercicio-profesional.md), [paro cardiorrespiratorio](../cardiologia/paro-cardiorrespiratorio-y-arritmias.md) y [constatación de lesiones](constatacion-lesiones.md)

**Revisado**
Octubre 2026

</div>

!!! abstract "Resumen en 60 segundos"
    - **Constatar**: ausencia de respuesta, de **pulso central**, de **ruidos cardíacos y respiratorios** (auscultar al menos 1 minuto) y de **reflejo fotomotor**; anotar la **hora**.
    - **Comunicar** a la familia en un lugar tranquilo, con palabras claras ("falleció"), y dar tiempo.
    - **Certificado** (Código Sanitario): sin él **no se inscribe** la defunción ni se **sepulta**; lo extiende el **médico que atendió la última enfermedad**.
    - **Causa básica** (OMS): la que **inició** la cadena; va en la **última línea** de la parte I. Nunca "paro cardiorrespiratorio" como causa.
    - **Muerte violenta, sospechosa o de causa desconocida** (incluye la que sigue a una **caída** o un accidente): **no certificar**; informar a **Carabineros, PDI o Fiscalía** → **Servicio Médico Legal**.

!!! guia "¿Qué respalda esta página?"
    La obligación del certificado y quién lo extiende vienen del **Código Sanitario**; la forma de registrar la causa básica, de las **reglas de la OMS (CIE-10)**. Coincide con el resumen de [documentos médico-legales](../salud-publica/documentos-medico-legales-y-ejercicio-profesional.md). Los signos de la constatación son **práctica clínica habitual** (la muerte encefálica tiene un protocolo legal propio, aparte). **Manda el protocolo de tu servicio.**

## Cuándo certificar y cuándo no

| Situación | Conducta |
|---|---|
| Muerte por **enfermedad conocida** que el médico atendió | **Certificar** |
| **Muerte violenta**: accidente (incluida una **caída** con fractura que lleva a la muerte días después), suicidio, homicidio | **No certificar**: Fiscalía/Carabineros → SML |
| **Sospecha** de criminalidad, maltrato o negligencia | No certificar; informar |
| Muerte de **causa desconocida** sin antecedentes | No certificar; informar |
| Muerte **en las primeras horas** de ingreso sin diagnóstico | Según el protocolo (con frecuencia SML) |

## Paso a paso

1. **Confirmar** la identidad y revisar si había **indicación de no reanimar**.
2. **Constatar**: estímulo verbal y doloroso, **pulso carotídeo**, **auscultación** cardíaca y pulmonar ≥ 1 minuto, **pupilas** y reflejo fotomotor.
3. **Anotar la hora** y registrar en la ficha.
4. **Comunicar** a la familia: presentarse, lugar privado, decirlo con claridad, acompañar el silencio, ofrecer apoyo y explicar los pasos siguientes.
5. **Decidir** si corresponde certificar o informar a la Fiscalía.
6. **Certificado**: parte I con la **cadena causal** (causa directa → intermedias → **causa básica** en la última línea) y los **intervalos**; parte II con otras condiciones que contribuyeron.
7. **Letra clara**, sin abreviaturas, y firma.

### Ejemplo de cadena causal

| Línea | Causa | Intervalo |
|---|---|---|
| a) Causa directa | Insuficiencia respiratoria | Horas |
| b) Debida a | Metástasis pulmonares | Meses |
| c) Debida a | **Cáncer pulmonar** (causa básica) | 2 años |
| Parte II | EPOC | 10 años |

## Cómo se escribe

Escribe los datos **como tú los registras**: los campos son de texto libre, con sugerencias opcionales. Las **indicaciones** se pueden desmarcar, cambiar, **quitar** (×) o **agregar**, y con **Guardar como mi plantilla** quedan en este dispositivo. **No escribas el nombre ni el RUT del paciente.**

<div class="calc" data-gen="defuncion">
<span class="gen-titulo">La constatación</span>
<label class="calc-campo">Contexto <input type="text" name="contexto" data-marca="contexto" placeholder="ej.: paciente de 82 años con cáncer pulmonar metastásico, en cuidados de fin de vida, sin indicación de reanimación"></label>
<label class="calc-campo">Hora <input type="text" name="hora" data-marca="hora" placeholder="ej.: 04:20"></label>
<label class="calc-campo">Examen <input type="text" name="examen" list="dl-examen" data-marca="examen" data-recordar placeholder="ej.: sin respuesta a estímulos, sin pulso carotídeo, sin ruidos cardíacos ni respiratorios a la auscultación por 1 minuto, pupilas midriáticas sin reflejo fotomotor"></label><datalist id="dl-examen"><option value="sin respuesta a estímulos, sin pulso carotídeo, sin ruidos cardíacos ni respiratorios a la auscultación por 1 minuto, pupilas midriáticas sin reflejo fotomotor"></datalist>
<label class="calc-campo">Comunicación <input type="text" name="familia" placeholder="ej.: se informa a la hija presente, quien se encuentra acompañada"></label>
<label class="calc-campo">Certificado <input type="text" name="certificado" placeholder="ej.: se extiende certificado médico de defunción: causa directa insuficiencia respiratoria; debida a metástasis pulmonares; debida a cáncer pulmonar (causa básica)"></label>
<script type="application/json" class="gen-def">{"frases": ["{contexto}.", "Se constata fallecimiento a las {hora}: {examen}.", "?{familia}.", "?{certificado}."], "indicaciones": [{"id": "familia", "texto": "Facilitar el acompañamiento de la familia y sus ritos."}, {"id": "tramites", "texto": "Orientar a la familia sobre los trámites (certificado, Registro Civil, servicio funerario)."}, {"id": "violenta", "texto": "Si la muerte es violenta, sospechosa o de causa desconocida: no certificar; avisar a Carabineros, PDI o Fiscalía (Servicio Médico Legal)."}]}</script>
<div class="gen-res"></div>
</div>

!!! plantilla "Ejemplo de descripción"
    Paciente de 82 años con cáncer pulmonar metastásico, en cuidados de fin de vida, sin indicación de reanimación. Se constata fallecimiento a las 04:20: sin respuesta a estímulos, sin pulso carotídeo, sin ruidos cardíacos ni respiratorios a la auscultación por 1 minuto, pupilas midriáticas sin reflejo fotomotor. Se informa a la hija presente, quien se encuentra acompañada. Se extiende certificado médico de defunción: causa directa insuficiencia respiratoria; debida a metástasis pulmonares; debida a cáncer pulmonar (causa básica).

## Errores frecuentes en el certificado

| Error | Corrección |
|---|---|
| "**Paro cardiorrespiratorio**" como causa | Es el modo de morir, no una causa |
| Invertir la **cadena** | La causa básica va **abajo** |
| Poner la causa básica en la **parte II** | La parte II es para condiciones contribuyentes |
| Certificar una muerte tras una **caída** o accidente | Es una **causa externa**: Fiscalía y SML |
| Abreviaturas, letra ilegible | Escribir completo |

!!! alarma "Errores frecuentes"
    - Constatar sin **auscultar** el tiempo suficiente.
    - Comunicar la muerte en el **pasillo** o por teléfono sin preparación.
    - Certificar una muerte **violenta** como natural.
    - Escribir "**paro cardiorrespiratorio**" como causa básica.

!!! perla "Para el internado"
    Antes de entrar a hablar con la familia, **respira, revisa la ficha y averigua sus nombres**. La forma en que se comunica una muerte se recuerda toda la vida.

## Preguntas de repaso

??? repaso "1. ¿Qué examinas para constatar un fallecimiento?"
    Respuesta a estímulos, **pulso central**, **ruidos cardíacos y respiratorios** (≥ 1 minuto) y **reflejo fotomotor**; anotar la **hora**.

??? repaso "2. Mujer de 88 años que muere por neumonía 10 días después de operarse una fractura de cadera por una caída. ¿Firmas el certificado?"
    **No** como muerte natural: la causa básica es la **caída** (causa externa). Informar a **Fiscalía o Carabineros** (Servicio Médico Legal).

??? repaso "3. ¿Dónde va la causa básica en el certificado?"
    En la **última línea usada de la parte I**.

??? repaso "4. ¿Por qué no se escribe "paro cardiorrespiratorio" como causa?"
    Porque es el **modo** de morir de todos; no explica la **causa** ni sirve para la estadística ni la prevención.

??? repaso "5. ¿Quién debe extender el certificado médico de defunción?"
    El **médico que atendió la última enfermedad** (Código Sanitario); en las muertes violentas o sospechosas, el **Servicio Médico Legal**.

## Referencias

1. Biblioteca del Congreso Nacional de Chile. Código Sanitario (DFL N.° 725 de 1967). [bcn.cl](https://www.bcn.cl/leychile/navegar?idNorma=5595)
2. World Health Organization. *International Statistical Classification of Diseases and Related Health Problems, 10th Revision (ICD-10).* Volume 2: Instruction manual. Ginebra: OMS. [who.int](https://icd.who.int/browse10/2019/en)
