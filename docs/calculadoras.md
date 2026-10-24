---
hide:
  - toc
---

# Calculadoras clínicas

Puntajes y fórmulas de uso diario, con la misma definición que usan los resúmenes de La Ficha. Toca el nombre de una calculadora para abrirla; escribe los datos y el resultado aparece de inmediato. Funcionan sin conexión.

!!! warning "Apoyo, no reemplazo"
    Las calculadoras ayudan a ordenar la información; la decisión clínica es tuya. Verifica las unidades (mg/dL, mmol/L) y revisa el resumen correspondiente antes de indicar un tratamiento.

??? info "Cómo se eligieron los puntajes"
    Para cada problema se dejó el puntaje que recomienda la guía vigente y, cuando hay varios, el que mejor rinde en los estudios de validación. La sensibilidad (Se) importa para **descartar**; la especificidad (Sp), para **confirmar**.

    | Problema | Puntaje | Guía que lo recomienda | Rendimiento |
    |---|---|---|---|
    | Riesgo embólico en la FA | **CHA₂DS₂-VA** | ESC 2024 | Reemplaza al CHA₂DS₂-VASc (el sexo femenino no suma) |
    | Riesgo de sangrado con anticoagulantes | HAS-BLED | ESC 2024 no recomienda un puntaje específico | Útil solo para encontrar y corregir factores modificables |
    | Sospecha de TEP | **Wells** + **dímero D ajustado por edad** | ESC 2019, AHA/ACC 2026 | Corte por edad: en ≥ 75 años, descarta TEP en 29,7 % frente a 6,4 % con el corte fijo, sin más falsos negativos |
    | TEP con probabilidad baja | **PERC** | ESC 2019 | **Se 97 %**, Sp 22 % (metaanálisis): solo para descartar |
    | Sospecha de TEP (alternativa) | **YEARS** | ESC 2019 | TEV a 3 meses 0,61 % en los descartados; 14 % menos angioTC que con Wells |
    | Gravedad del TEP confirmado | **sPESI** | ESC 2019, AHA/ACC 2026 | sPESI 0: mortalidad a 30 días ~ 1 % |
    | Deterioro y sepsis en sala | **NEWS2** | SSC 2021 y 2026 (no usar qSOFA solo) | El qSOFA es poco sensible para tamizar |
    | Dónde tratar la neumonía | **PSI** (o CURB-65) | ATS/IDSA 2019 prefiere el PSI; la BTS y NICE usan CURB-65 o CRB-65 | PSI: la mayor sensibilidad para mortalidad; CRB-65: la mayor especificidad |
    | Neumonía grave (UCI) | **Criterios ATS/IDSA** | ATS/IDSA 2019 | 1 mayor o ≥ 3 menores |
    | Hemorragia digestiva alta | **Glasgow-Blatchford** | ACG 2021, ESGE 2021 | Puntaje ≤ 1: **Se 98,6 %**, Sp 34,6 %; el mejor de 5 puntajes (AUROC 0,86) |
    | Apendicitis | **AIR** (o Alvarado) | WSES 2020 | AIR > 4: **Se 91 %**, Sp 63 %; AIR > 8: Sp 98 %. AUC 0,86 frente a 0,79 del Alvarado |
    | Función renal | **CKD-EPI 2021** (con cistatina C si se dispone) | KDIGO 2024 | La ecuación con creatinina y cistatina C es la más exacta |

[Cardiología y TEP](#cardiologia-y-tep) · [Infecciones y deterioro clínico](#infecciones-y-deterioro-clinico) · [Neurología](#neurologia) · [Gastroenterología y cirugía](#gastroenterologia-y-cirugia) · [Riñón y electrolitos](#rinon-y-electrolitos) · [Fluidos, dosis y otros](#fluidos-dosis-y-otros)
{ .calc-indice }

## Cardiología y TEP

??? calculadora "CHA₂DS₂-VA (riesgo embólico en la fibrilación auricular)"
    <div class="calc" data-calc="cha2ds2va">
    <label><input type="checkbox" name="c"> Insuficiencia cardíaca o FEVI reducida <span>+1</span></label>
    <label><input type="checkbox" name="h"> Hipertensión arterial <span>+1</span></label>
    <label><input type="radio" name="edad" value="0" checked> Edad &lt; 65 años <span>0</span></label>
    <label><input type="radio" name="edad" value="1"> Edad 65–74 años <span>+1</span></label>
    <label><input type="radio" name="edad" value="2"> Edad ≥ 75 años <span>+2</span></label>
    <label><input type="checkbox" name="d"> Diabetes <span>+1</span></label>
    <label><input type="checkbox" name="s"> ACV, AIT o embolía previa <span>+2</span></label>
    <label><input type="checkbox" name="v"> Enfermedad vascular (IAM, EAP, placa aórtica) <span>+1</span></label>
    <output class="calc-res"></output>
    </div>

    ESC 2024 (Van Gelder, *Eur Heart J*): ≥ 2 anticoagulación recomendada; 1 considerar; 0 no anticoagular. Ver [fibrilación auricular](cardiologia/fibrilacion-auricular.md).
    { .calc-fuente }

??? calculadora "HAS-BLED (riesgo de sangrado con anticoagulación)"
    <div class="calc" data-calc="hasbled">
    <label><input type="checkbox" name="h"> Hipertensión no controlada (PAS &gt; 160 mmHg) <span>+1</span></label>
    <label><input type="checkbox" name="ar"> Función renal alterada (diálisis, trasplante o creatinina ≥ 2,26 mg/dL) <span>+1</span></label>
    <label><input type="checkbox" name="ah"> Función hepática alterada (cirrosis o bilirrubina &gt; 2× y transaminasas &gt; 3× lo normal) <span>+1</span></label>
    <label><input type="checkbox" name="s"> ACV previo <span>+1</span></label>
    <label><input type="checkbox" name="b"> Sangrado previo o predisposición (anemia) <span>+1</span></label>
    <label><input type="checkbox" name="l"> INR lábil (tiempo en rango &lt; 60 %) <span>+1</span></label>
    <label><input type="checkbox" name="e"> Edad &gt; 65 años <span>+1</span></label>
    <label><input type="checkbox" name="df"> Fármacos: antiagregantes o AINE <span>+1</span></label>
    <label><input type="checkbox" name="da"> Alcohol (≥ 8 tragos por semana) <span>+1</span></label>
    <output class="calc-res"></output>
    </div>

    Pisters et al., *Chest* 2010. La ESC 2024 **no recomienda un puntaje de sangrado específico** y desaconseja usarlos para decidir si anticoagular: sirve para encontrar y corregir los factores modificables (HTA, AINE, antiagregantes, alcohol, INR lábil).
    { .calc-fuente }

??? calculadora "Wells para TEP y dímero D ajustado por edad"
    <div class="calc" data-calc="wells">
    <label><input type="checkbox" name="tvp" value="3"> Signos clínicos de TVP <span>+3</span></label>
    <label><input type="checkbox" name="dx" value="3"> TEP es el diagnóstico más probable <span>+3</span></label>
    <label><input type="checkbox" name="fc" value="1.5"> FC &gt; 100 lpm <span>+1,5</span></label>
    <label><input type="checkbox" name="inm" value="1.5"> Inmovilización ≥ 3 días o cirugía en las últimas 4 semanas <span>+1,5</span></label>
    <label><input type="checkbox" name="prev" value="1.5"> TVP o TEP previo <span>+1,5</span></label>
    <label><input type="checkbox" name="hemo" value="1"> Hemoptisis <span>+1</span></label>
    <label><input type="checkbox" name="ca" value="1"> Cáncer activo <span>+1</span></label>
    <label class="calc-campo">Edad (años, para el corte del dímero D) <input type="number" name="edad" min="18"></label>
    <output class="calc-res"></output>
    </div>

    Wells et al., *Thromb Haemost* 2000. Dos niveles: ≤ 4 TEP improbable (dímero D); &gt; 4 TEP probable (angioTC). **Dímero D ajustado por edad** en &gt; 50 años: edad × 10 µg/L FEU (ESC 2019, IIa); en el estudio ADJUST-PE, en ≥ 75 años descartó TEP en 29,7 % frente a 6,4 % con el corte de 500, sin más falsos negativos. Ver [TEP](respiratorio/tromboembolismo-pulmonar.md).
    { .calc-fuente }

??? calculadora "PERC (descartar TEP sin exámenes)"
    Usar **solo** si la probabilidad clínica ya es **baja**. Marca los criterios **presentes**:

    <div class="calc" data-calc="perc">
    <label><input type="checkbox" name="e"> Edad ≥ 50 años</label>
    <label><input type="checkbox" name="fc"> FC ≥ 100 lpm</label>
    <label><input type="checkbox" name="sat"> SatO₂ &lt; 95 % con aire ambiental</label>
    <label><input type="checkbox" name="hem"> Hemoptisis</label>
    <label><input type="checkbox" name="est"> Uso de estrógenos (anticonceptivos, terapia hormonal)</label>
    <label><input type="checkbox" name="prev"> TVP o TEP previo</label>
    <label><input type="checkbox" name="ed"> Edema unilateral de pierna</label>
    <label><input type="checkbox" name="cir"> Cirugía o trauma con hospitalización en las últimas 4 semanas</label>
    <output class="calc-res"></output>
    </div>

    Kline et al., *J Thromb Haemost* 2004. Metaanálisis (Singh, *Ann Emerg Med* 2012; 12 estudios, 14.844 pacientes): **Se 97 %**, Sp 22 %. Muy sensible y poco específico: sirve para descartar, nunca para confirmar.
    { .calc-fuente }

??? calculadora "YEARS (TEP)"
    <div class="calc" data-calc="years">
    <label><input type="checkbox" name="tvp"> Signos clínicos de TVP</label>
    <label><input type="checkbox" name="hem"> Hemoptisis</label>
    <label><input type="checkbox" name="dx"> TEP es el diagnóstico más probable</label>
    <label class="calc-campo">Dímero D (ng/mL FEU = µg/L) <input type="number" name="dd" min="0"></label>
    <output class="calc-res"></output>
    </div>

    van der Hulle et al., *Lancet* 2017 (3.616 pacientes): en los descartados sin angioTC, TEV a 3 meses **0,61 %**; evitó la angioTC en 14 % más pacientes que el algoritmo de Wells. ESC 2019: corte de dímero D adaptado a la probabilidad clínica (IIa).
    { .calc-fuente }

??? calculadora "sPESI (gravedad del TEP confirmado)"
    <div class="calc" data-calc="spesi">
    <label><input type="checkbox" name="e"> Edad &gt; 80 años <span>+1</span></label>
    <label><input type="checkbox" name="ca"> Cáncer <span>+1</span></label>
    <label><input type="checkbox" name="cp"> Enfermedad cardiopulmonar crónica (IC o enfermedad pulmonar) <span>+1</span></label>
    <label><input type="checkbox" name="fc"> FC ≥ 110 lpm <span>+1</span></label>
    <label><input type="checkbox" name="pas"> PAS &lt; 100 mmHg <span>+1</span></label>
    <label><input type="checkbox" name="sat"> SatO₂ &lt; 90 % <span>+1</span></label>
    <output class="calc-res"></output>
    </div>

    Jiménez et al., *Arch Intern Med* 2010: sPESI 0 = mortalidad a 30 días **1,0 %** (validación externa 1,1 %), igual de exacto que el PESI original y más simple. ESC 2019 y AHA/ACC 2026 lo usan para seleccionar el manejo ambulatorio o el alta precoz. Ver [TEP](respiratorio/tromboembolismo-pulmonar.md).
    { .calc-fuente }

## Infecciones y deterioro clínico

??? calculadora "NEWS2 (deterioro clínico y tamizaje de sepsis)"
    <div class="calc" data-calc="news2">
    <label class="calc-campo">Frecuencia respiratoria <select name="fr"><option value="3">≤ 8</option><option value="1">9–11</option><option value="0" selected>12–20</option><option value="2">21–24</option><option value="3">≥ 25</option></select></label>
    <label class="calc-campo">Escala de SatO₂ <select name="escala"><option value="1">Escala 1 (habitual)</option><option value="2">Escala 2 (meta 88–92 %, hipercapnia)</option></select></label>
    <label class="calc-campo">SatO₂ escala 1 (%) <select name="sat1"><option value="3">≤ 91</option><option value="2">92–93</option><option value="1">94–95</option><option value="0" selected>≥ 96</option></select></label>
    <label class="calc-campo">SatO₂ escala 2 (%) <select name="sat2"><option value="3">≤ 83</option><option value="2">84–85</option><option value="1">86–87</option><option value="0" selected>88–92, o ≥ 93 con aire</option><option value="1">93–94 con oxígeno</option><option value="2">95–96 con oxígeno</option><option value="3">≥ 97 con oxígeno</option></select></label>
    <label class="calc-campo">Aire u oxígeno <select name="o2"><option value="0" selected>Aire ambiental</option><option value="2">Oxígeno</option></select></label>
    <label class="calc-campo">PAS (mmHg) <select name="pas"><option value="3">≤ 90</option><option value="2">91–100</option><option value="1">101–110</option><option value="0" selected>111–219</option><option value="3">≥ 220</option></select></label>
    <label class="calc-campo">Pulso (lpm) <select name="fc"><option value="3">≤ 40</option><option value="1">41–50</option><option value="0" selected>51–90</option><option value="1">91–110</option><option value="2">111–130</option><option value="3">≥ 131</option></select></label>
    <label class="calc-campo">Conciencia <select name="conc"><option value="0" selected>Alerta</option><option value="3">Confusión nueva, responde a la voz, al dolor o no responde</option></select></label>
    <label class="calc-campo">Temperatura (°C) <select name="t"><option value="3">≤ 35,0</option><option value="1">35,1–36,0</option><option value="0" selected>36,1–38,0</option><option value="1">38,1–39,0</option><option value="2">≥ 39,1</option></select></label>
    <output class="calc-res"></output>
    </div>

    Royal College of Physicians 2017. La SSC (2021 y 2026) recomienda tamizar la sepsis con **NEWS/NEWS2, MEWS o SIRS** y **no usar el qSOFA solo**, porque es poco sensible. La escala 2 de SatO₂ se usa solo por indicación médica (insuficiencia respiratoria hipercápnica). Ver [sepsis](infectologia/sepsis-y-shock-septico.md).
    { .calc-fuente }

??? calculadora "PSI (índice de gravedad de la neumonía, Fine)"
    <div class="calc" data-calc="psi">
    <label class="calc-campo">Edad (años) <input type="number" name="edad" min="18"></label>
    <label class="calc-campo">Sexo <select name="sexo"><option value="h">Hombre</option><option value="m">Mujer (edad − 10)</option></select></label>
    <label><input type="checkbox" name="ela" value="10"> Vive en un establecimiento de larga estadía <span>+10</span></label>
    <label><input type="checkbox" name="neo" value="30" data-com> Cáncer activo <span>+30</span></label>
    <label><input type="checkbox" name="hep" value="20" data-com> Enfermedad hepática <span>+20</span></label>
    <label><input type="checkbox" name="ic" value="10" data-com> Insuficiencia cardíaca <span>+10</span></label>
    <label><input type="checkbox" name="acv" value="10" data-com> Enfermedad cerebrovascular <span>+10</span></label>
    <label><input type="checkbox" name="ren" value="10" data-com> Enfermedad renal <span>+10</span></label>
    <label><input type="checkbox" name="conf" value="20" data-ex> Compromiso de conciencia <span>+20</span></label>
    <label><input type="checkbox" name="fr" value="20" data-ex> Frecuencia respiratoria ≥ 30/min <span>+20</span></label>
    <label><input type="checkbox" name="pas" value="20" data-ex> PAS &lt; 90 mmHg <span>+20</span></label>
    <label><input type="checkbox" name="temp" value="15" data-ex> Temperatura &lt; 35 o ≥ 40 °C <span>+15</span></label>
    <label><input type="checkbox" name="fc" value="10" data-ex> Pulso ≥ 125 lpm <span>+10</span></label>
    <label><input type="checkbox" name="ph" value="30"> pH arterial &lt; 7,35 <span>+30</span></label>
    <label><input type="checkbox" name="bun" value="20"> BUN ≥ 30 mg/dL <span>+20</span></label>
    <label><input type="checkbox" name="na" value="20"> Sodio &lt; 130 mEq/L <span>+20</span></label>
    <label><input type="checkbox" name="glu" value="10"> Glicemia ≥ 250 mg/dL <span>+10</span></label>
    <label><input type="checkbox" name="hto" value="10"> Hematocrito &lt; 30 % <span>+10</span></label>
    <label><input type="checkbox" name="o2" value="10"> PaO₂ &lt; 60 mmHg o SatO₂ &lt; 90 % <span>+10</span></label>
    <label><input type="checkbox" name="der" value="10"> Derrame pleural <span>+10</span></label>
    <output class="calc-res"></output>
    </div>

    Fine et al., *N Engl J Med* 1997. La ATS/IDSA 2019 **prefiere el PSI sobre el CURB-65** para decidir la hospitalización (clasifica mejor a los de bajo riesgo). Metaanálisis (Loke, *Thorax* 2010; 23 estudios): el PSI tiene la **mayor sensibilidad** para mortalidad y la menor especificidad; el CRB-65, la mayor especificidad. Ninguno sirve para decidir UCI: para eso, los criterios ATS/IDSA.
    { .calc-fuente }

??? calculadora "CURB-65 (gravedad de la neumonía)"
    <div class="calc" data-calc="curb65">
    <label><input type="checkbox" name="c"> Confusión de reciente aparición <span>+1</span></label>
    <label><input type="checkbox" name="u"> BUN &gt; 19 mg/dL (urea &gt; 7 mmol/L) <span>+1</span></label>
    <label><input type="checkbox" name="r"> Frecuencia respiratoria ≥ 30/min <span>+1</span></label>
    <label><input type="checkbox" name="b"> PAS &lt; 90 o PAD ≤ 60 mmHg <span>+1</span></label>
    <label><input type="checkbox" name="e"> Edad ≥ 65 años <span>+1</span></label>
    <output class="calc-res"></output>
    </div>

    Lim et al., *Thorax* 2003. Más simple que el PSI y el que usan la BTS y NICE; sin BUN se usa el CRB-65 (los mismos criterios sin la urea). Ver [neumonía adquirida en la comunidad](respiratorio/neumonia-adquirida-en-la-comunidad.md).
    { .calc-fuente }

??? calculadora "Neumonía grave: criterios ATS/IDSA"
    <div class="calc" data-calc="nacgrave">
    <label><input type="checkbox" name="M1" data-mayor> Mayor: shock séptico que requiere vasopresores</label>
    <label><input type="checkbox" name="M2" data-mayor> Mayor: insuficiencia respiratoria con ventilación mecánica invasiva</label>
    <label><input type="checkbox" name="m1"> Menor: frecuencia respiratoria ≥ 30/min</label>
    <label><input type="checkbox" name="m2"> Menor: PaO₂/FiO₂ ≤ 250</label>
    <label><input type="checkbox" name="m3"> Menor: infiltrados multilobares</label>
    <label><input type="checkbox" name="m4"> Menor: confusión o desorientación</label>
    <label><input type="checkbox" name="m5"> Menor: BUN ≥ 20 mg/dL</label>
    <label><input type="checkbox" name="m6"> Menor: leucocitos &lt; 4.000/µL (por la infección)</label>
    <label><input type="checkbox" name="m7"> Menor: plaquetas &lt; 100.000/µL</label>
    <label><input type="checkbox" name="m8"> Menor: temperatura central &lt; 36 °C</label>
    <label><input type="checkbox" name="m9"> Menor: hipotensión que requiere reanimación agresiva con fluidos</label>
    <output class="calc-res"></output>
    </div>

    Metlay et al., ATS/IDSA 2019 (*Am J Respir Crit Care Med*): neumonía grave = **1 criterio mayor o ≥ 3 menores**; indica UCI o intermedio y biterapia empírica.
    { .calc-fuente }

## Neurología

??? calculadora "Escala de coma de Glasgow"
    <div class="calc" data-calc="glasgow">
    <label class="calc-campo">Apertura ocular
    <select name="o"><option value="4">4 · Espontánea</option><option value="3">3 · Al estímulo verbal</option><option value="2">2 · Al dolor</option><option value="1">1 · Ninguna</option></select></label>
    <label class="calc-campo">Respuesta verbal
    <select name="v"><option value="5">5 · Orientada</option><option value="4">4 · Confusa</option><option value="3">3 · Palabras inapropiadas</option><option value="2">2 · Sonidos incomprensibles</option><option value="1">1 · Ninguna</option></select></label>
    <label class="calc-campo">Respuesta motora
    <select name="m"><option value="6">6 · Obedece órdenes</option><option value="5">5 · Localiza el dolor</option><option value="4">4 · Retira al dolor</option><option value="3">3 · Flexión anormal (decorticación)</option><option value="2">2 · Extensión (descerebración)</option><option value="1">1 · Ninguna</option></select></label>
    <output class="calc-res"></output>
    </div>

    Teasdale y Jennett, *Lancet* 1974. TEC leve 13–15, moderado 9–12, grave ≤ 8 (proteger la vía aérea). Ver [TEC](neurologia/tec-e-hipertension-endocraneana.md).
    { .calc-fuente }

## Gastroenterología y cirugía

??? calculadora "Glasgow-Blatchford (hemorragia digestiva alta)"
    <div class="calc" data-calc="blatchford">
    <label class="calc-campo">BUN (mg/dL) <input type="number" name="bun" step="0.1" min="0"></label>
    <label class="calc-campo">Hemoglobina (g/dL) <input type="number" name="hb" step="0.1" min="0"></label>
    <label class="calc-campo">Sexo <select name="sexo"><option value="h">Hombre</option><option value="m">Mujer</option></select></label>
    <label class="calc-campo">PA sistólica (mmHg) <input type="number" name="pas" min="0"></label>
    <label><input type="checkbox" name="fc"> FC ≥ 100/min <span>+1</span></label>
    <label><input type="checkbox" name="melena"> Melena <span>+1</span></label>
    <label><input type="checkbox" name="sincope"> Síncope <span>+2</span></label>
    <label><input type="checkbox" name="hep"> Enfermedad hepática <span>+2</span></label>
    <label><input type="checkbox" name="ic"> Insuficiencia cardíaca <span>+2</span></label>
    <output class="calc-res"></output>
    </div>

    Blatchford et al., *Lancet* 2000. 0–1 punto: riesgo muy bajo, se puede dar de alta con endoscopía ambulatoria (ACG y ESGE 2021). En un estudio internacional de 3.012 pacientes (Stanley, *BMJ* 2017) fue el mejor de cinco puntajes para predecir intervención o muerte (AUROC 0,86; Rockall 0,70; AIMS65 0,68); un puntaje ≤ 1 tuvo **Se 98,6 %** y Sp 34,6 %. Ver [HDA](gastroenterologia/hemorragia-digestiva-alta.md).
    { .calc-fuente }

??? calculadora "Child-Pugh"
    <div class="calc" data-calc="childpugh">
    <label class="calc-campo">Bilirrubina (mg/dL) <select name="bili"><option value="1">&lt; 2</option><option value="2">2–3</option><option value="3">&gt; 3</option></select></label>
    <label class="calc-campo">Albúmina (g/dL) <select name="alb"><option value="1">&gt; 3,5</option><option value="2">2,8–3,5</option><option value="3">&lt; 2,8</option></select></label>
    <label class="calc-campo">INR <select name="inr"><option value="1">&lt; 1,7</option><option value="2">1,7–2,3</option><option value="3">&gt; 2,3</option></select></label>
    <label class="calc-campo">Ascitis <select name="asc"><option value="1">Ausente</option><option value="2">Leve (controlada)</option><option value="3">Moderada o a tensión</option></select></label>
    <label class="calc-campo">Encefalopatía <select name="enc"><option value="1">Ausente</option><option value="2">Grado I–II</option><option value="3">Grado III–IV</option></select></label>
    <output class="calc-res"></output>
    </div>

    Pugh et al., *Br J Surg* 1973. Clase A 5–6, B 7–9, C 10–15. Ver [cirrosis](gastroenterologia/cirrosis-y-complicaciones.md).
    { .calc-fuente }

??? calculadora "MELD-Na y MELD 3.0"
    <div class="calc" data-calc="meld">
    <label class="calc-campo">Bilirrubina (mg/dL) <input type="number" name="bili" step="0.1" min="0"></label>
    <label class="calc-campo">INR <input type="number" name="inr" step="0.01" min="0"></label>
    <label class="calc-campo">Creatinina (mg/dL) <input type="number" name="cr" step="0.01" min="0"></label>
    <label class="calc-campo">Sodio (mEq/L) <input type="number" name="na" step="1" min="0"></label>
    <label class="calc-campo">Albúmina (g/dL) <input type="number" name="alb" step="0.1" min="0"></label>
    <label class="calc-campo">Sexo <select name="sexo"><option value="h">Hombre</option><option value="m">Mujer</option></select></label>
    <label><input type="checkbox" name="dial"> Diálisis ≥ 2 veces en la última semana</label>
    <output class="calc-res"></output>
    </div>

    MELD 3.0: Kim et al., *Gastroenterology* 2021, con los límites de la OPTN (bilirrubina, INR y creatinina mínimos 1,0; creatinina máxima 3,0; sodio 125–137; albúmina 1,5–3,5). MELD-Na: fórmula de la OPTN (creatinina máxima 4,0). MELD ≥ 15: derivar a evaluación de trasplante.
    { .calc-fuente }

??? calculadora "AIR (respuesta inflamatoria en la apendicitis)"
    <div class="calc" data-calc="air">
    <label><input type="checkbox" name="v" value="1"> Vómitos <span>+1</span></label>
    <label><input type="checkbox" name="d" value="1"> Dolor en la fosa ilíaca derecha <span>+1</span></label>
    <label class="calc-campo">Rebote o defensa <select name="reb"><option value="0">Ausente</option><option value="1">Leve</option><option value="2">Moderado</option><option value="3">Intenso</option></select></label>
    <label><input type="checkbox" name="t" value="1"> Temperatura ≥ 38,5 °C <span>+1</span></label>
    <label class="calc-campo">Neutrófilos <select name="neu"><option value="0">&lt; 70 %</option><option value="1">70–84 %</option><option value="2">≥ 85 %</option></select></label>
    <label class="calc-campo">Leucocitos <select name="leu"><option value="0">&lt; 10.000/µL</option><option value="1">10.000–14.900/µL</option><option value="2">≥ 15.000/µL</option></select></label>
    <label class="calc-campo">PCR <select name="pcr"><option value="0">&lt; 10 mg/L</option><option value="1">10–49 mg/L</option><option value="2">≥ 50 mg/L</option></select></label>
    <output class="calc-res"></output>
    </div>

    Andersson y Andersson, *World J Surg* 2008. Metaanálisis (Andersson y Stark, *World J Emerg Surg* 2025; 26 estudios, 15.699 pacientes): AIR &gt; 4 **Se 91 %**, Sp 63 %; AIR &gt; 8 Se 30 %, **Sp 98 %**; AUC **0,86** frente a 0,79 del Alvarado (0,93 frente a 0,88 en la apendicitis avanzada). La WSES 2020 acepta AIR, Alvarado y AAS para descartar la apendicitis y definir quién necesita imagen.
    { .calc-fuente }

??? calculadora "Alvarado (apendicitis aguda)"
    <div class="calc" data-calc="alvarado">
    <label><input type="checkbox" name="m" value="1"> Migración del dolor a la fosa ilíaca derecha <span>+1</span></label>
    <label><input type="checkbox" name="a" value="1"> Anorexia <span>+1</span></label>
    <label><input type="checkbox" name="n" value="1"> Náuseas o vómitos <span>+1</span></label>
    <label><input type="checkbox" name="t" value="2"> Dolor a la palpación de la fosa ilíaca derecha <span>+2</span></label>
    <label><input type="checkbox" name="r" value="1"> Signo de rebote <span>+1</span></label>
    <label><input type="checkbox" name="e" value="1"> Temperatura ≥ 37,3 °C <span>+1</span></label>
    <label><input type="checkbox" name="l" value="2"> Leucocitosis &gt; 10 000/mm³ <span>+2</span></label>
    <label><input type="checkbox" name="s" value="1"> Desviación a izquierda (neutrófilos &gt; 75 %) <span>+1</span></label>
    <output class="calc-res"></output>
    </div>

    Alvarado, *Ann Emerg Med* 1986. Más conocido, pero discrimina peor que el AIR (AUC 0,79 frente a 0,86). Un puntaje no basta para indicar la cirugía: combinar con la imagen. Ver [apendicitis aguda](cirugia/intestino-colon-y-proctologia/apendicitis-aguda.md).
    { .calc-fuente }

## Riñón y electrolitos

??? calculadora "Filtración glomerular (CKD-EPI 2021, con o sin cistatina C) y depuración de creatinina (Cockcroft-Gault)"
    <div class="calc" data-calc="renal">
    <label class="calc-campo">Creatinina (mg/dL) <input type="number" name="cr" step="0.01" min="0"></label>
    <label class="calc-campo">Edad (años) <input type="number" name="edad" min="18"></label>
    <label class="calc-campo">Sexo <select name="sexo"><option value="h">Hombre</option><option value="m">Mujer</option></select></label>
    <label class="calc-campo">Peso (kg, para Cockcroft-Gault) <input type="number" name="peso" step="0.1" min="0"></label>
    <label class="calc-campo">Cistatina C (mg/L, opcional) <input type="number" name="cys" step="0.01" min="0"></label>
    <output class="calc-res"></output>
    </div>

    CKD-EPI 2021 sin raza: Inker et al., *N Engl J Med* 2021 (mL/min/1,73 m²). La KDIGO 2024 recomienda la ecuación con **creatinina y cistatina C** cuando se necesita más exactitud (por ejemplo, para confirmar una ERC G3a o en personas con masa muscular muy baja o muy alta). Cockcroft y Gault, *Nephron* 1976 (mL/min; se usa para ajustar algunos fármacos, como los anticoagulantes directos). Ver [ERC](nefrologia/enfermedad-renal-cronica.md).
    { .calc-fuente }

??? calculadora "Anión gap, sodio y calcio corregidos, osmolalidad"
    <div class="calc" data-calc="electrolitos">
    <label class="calc-campo">Sodio (mEq/L) <input type="number" name="na" step="0.1"></label>
    <label class="calc-campo">Cloro (mEq/L) <input type="number" name="cl" step="0.1"></label>
    <label class="calc-campo">Bicarbonato (mEq/L) <input type="number" name="hco3" step="0.1"></label>
    <label class="calc-campo">Albúmina (g/dL) <input type="number" name="alb" step="0.1"></label>
    <label class="calc-campo">Glicemia (mg/dL) <input type="number" name="glu" step="1"></label>
    <label class="calc-campo">BUN (mg/dL) <input type="number" name="bun" step="0.1"></label>
    <label class="calc-campo">Calcio total (mg/dL) <input type="number" name="ca" step="0.1"></label>
    <output class="calc-res"></output>
    </div>

    Anión gap = Na − (Cl + HCO₃); corregido por albúmina: + 2,5 × (4 − albúmina) (Figge, *Crit Care Med* 1998). Na corregido por glicemia: + 1,6 (Katz) a 2,4 (Hillier, *Am J Med* 1999) por cada 100 mg/dL sobre 100. Calcio corregido = Ca + 0,8 × (4 − albúmina) (Payne, *BMJ* 1973). Osmolalidad = 2 × Na + glicemia/18 + BUN/2,8.
    { .calc-fuente }

??? calculadora "Déficit de agua libre y cambio de sodio por litro (Adrogué-Madias)"
    <div class="calc" data-calc="sodio">
    <label class="calc-campo">Sodio actual (mEq/L) <input type="number" name="na" step="0.1"></label>
    <label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1"></label>
    <label class="calc-campo">Paciente <select name="act"><option value="0.6">Hombre &lt; 65 años (60 %)</option><option value="0.5">Mujer &lt; 65 años o hombre ≥ 65 (50 %)</option><option value="0.45">Mujer ≥ 65 años (45 %)</option><option value="0.6">Niño (60 %)</option></select></label>
    <label class="calc-campo">Solución a infundir <select name="sol"><option value="513">NaCl 3 % (513 mEq/L)</option><option value="154" selected>NaCl 0,9 % (154 mEq/L)</option><option value="134">Ringer lactato (130 Na + 4 K)</option><option value="77">NaCl 0,45 % (77 mEq/L)</option><option value="0">Suero glucosado 5 % (0 mEq/L)</option></select></label>
    <output class="calc-res"></output>
    </div>

    Agua corporal total = peso × fracción. Déficit de agua = ACT × (Na/140 − 1). Cambio del Na por 1 L = (Na + K de la solución − Na sérico)/(ACT + 1) (Adrogué y Madias, *N Engl J Med* 2000). Límite de corrección: no más de 8–10 mEq/L en 24 h en la hiponatremia crónica. Ver [trastornos del sodio](nefrologia/trastornos-del-sodio.md).
    { .calc-fuente }

## Fluidos, dosis y otros

??? calculadora "Quemados: fórmula de Parkland"
    <div class="calc" data-calc="parkland">
    <label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
    <label class="calc-campo">Superficie corporal quemada (% SCQ, 2.º y 3.er grado) <input type="number" name="scq" step="1" min="0" max="100"></label>
    <label class="calc-campo">Horas desde la quemadura <input type="number" name="h" step="0.5" min="0" value="0"></label>
    <label><input type="checkbox" name="nino"> Niño (sumar requerimientos basales)</label>
    <output class="calc-res"></output>
    </div>

    4 mL × kg × % SCQ de Ringer lactato en 24 h desde la hora de la quemadura: 50 % en las primeras 8 h. Ajustar por la diuresis (adulto 0,5 mL/kg/h; niño ~ 1 mL/kg/h). Ver [quemaduras](cirugia/piel-partes-blandas-y-quemaduras/quemaduras-secuelas-y-cicatrices.md).
    { .calc-fuente }

??? calculadora "Requerimientos basales de agua (Holliday-Segar)"
    <div class="calc" data-calc="holliday">
    <label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
    <output class="calc-res"></output>
    </div>

    100 mL/kg los primeros 10 kg, 50 mL/kg los siguientes 10 kg y 20 mL/kg por cada kg sobre 20 (Holliday y Segar, *Pediatrics* 1957). Ver [fluidoterapia en pediatría](pediatria/fluidoterapia-trastornos-hidroelectroliticos-y-acido-base.md).
    { .calc-fuente }

??? calculadora "Dosis por peso"
    <div class="calc" data-calc="dosis">
    <label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
    <label class="calc-campo">Dosis (mg/kg por vez o por día) <input type="number" name="mgkg" step="0.01" min="0"></label>
    <label class="calc-campo">Dosis máxima (mg, opcional) <input type="number" name="max" step="0.1" min="0"></label>
    <label class="calc-campo">Concentración (mg/mL, opcional) <input type="number" name="conc" step="0.01" min="0"></label>
    <label class="calc-campo">Dividir en (dosis al día, opcional) <input type="number" name="div" step="1" min="1"></label>
    <output class="calc-res"></output>
    </div>

    Calculadora aritmética: la dosis por kilo y la máxima deben venir del resumen del fármaco o de la guía. Ver el [índice de fármacos](farmacos.md).
    { .calc-fuente }

??? calculadora "Índice de masa corporal"
    <div class="calc" data-calc="imc">
    <label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
    <label class="calc-campo">Talla (cm) <input type="number" name="talla" step="0.1" min="0"></label>
    <output class="calc-res"></output>
    </div>

    IMC = peso/talla² (kg/m²), clasificación de la OMS en adultos. En niños y adolescentes se usa el IMC para la edad (puntaje z). Ver [obesidad](endocrinologia/obesidad-y-sindrome-metabolico.md).
    { .calc-fuente }

??? calculadora "Fecha probable de parto y edad gestacional"
    <div class="calc" data-calc="fpp">
    <label class="calc-campo">Fecha de última regla (FUR) <input type="date" name="fur"></label>
    <label class="calc-campo">Fecha de evaluación <input type="date" name="hoy"></label>
    <output class="calc-res"></output>
    </div>

    Regla de Naegele: FPP = FUR + 280 días. Si la FUR es dudosa o difiere de la ecografía del primer trimestre, se usa la ecografía. Ver [control prenatal](ginecologia-obstetricia/control-prenatal-edad-gestacional-e-isoinmunizacion-rh.md).
    { .calc-fuente }

## Referencias

1. Van Gelder IC, Rienstra M, Bunting KV, Casado-Arroyo R, et al. 2024 ESC Guidelines for the management of atrial fibrillation. *Eur Heart J.* 2024;45(36):3314–3414. doi:[10.1093/eurheartj/ehae176](https://doi.org/10.1093/eurheartj/ehae176)
2. Pisters R, Lane DA, Nieuwlaat R, de Vos CB, et al. A novel user-friendly score (HAS-BLED) to assess 1-year risk of major bleeding in patients with atrial fibrillation. *Chest.* 2010;138(5):1093–1100. doi:[10.1378/chest.10-0134](https://doi.org/10.1378/chest.10-0134)
3. Wells PS, Anderson DR, Rodger M, et al. Derivation of a simple clinical model to categorize patients probability of pulmonary embolism. *Thromb Haemost.* 2000;83(3):416–420. [PubMed](https://pubmed.ncbi.nlm.nih.gov/10744147/)
4. Lim WS, van der Eerden MM, Laing R, et al. Defining community acquired pneumonia severity on presentation to hospital: an international derivation and validation study. *Thorax.* 2003;58(5):377–382. doi:[10.1136/thorax.58.5.377](https://doi.org/10.1136/thorax.58.5.377)
5. Teasdale G, Jennett B. Assessment of coma and impaired consciousness. *Lancet.* 1974;2(7872):81–84. doi:[10.1016/S0140-6736(74)91639-0](https://doi.org/10.1016/S0140-6736(74)91639-0)
6. Blatchford O, Murray WR, Blatchford M. A risk score to predict need for treatment for upper-gastrointestinal haemorrhage. *Lancet.* 2000;356(9238):1318–1321. doi:[10.1016/S0140-6736(00)02816-6](https://doi.org/10.1016/S0140-6736(00)02816-6)
7. Pugh RN, Murray-Lyon IM, Dawson JL, Pietroni MC, et al. Transection of the oesophagus for bleeding oesophageal varices. *Br J Surg.* 1973;60(8):646–649. doi:[10.1002/bjs.1800600817](https://doi.org/10.1002/bjs.1800600817)
8. Kim WR, Mannalithara A, Heimbach JK, Kamath PS, et al. MELD 3.0: the Model for End-Stage Liver Disease updated for the modern era. *Gastroenterology.* 2021;161(6):1887–1895.e4. doi:[10.1053/j.gastro.2021.08.050](https://doi.org/10.1053/j.gastro.2021.08.050)
9. Organ Procurement and Transplantation Network. MELD/PELD calculator user guide. [optn.transplant.hrsa.gov](https://optn.transplant.hrsa.gov/media/qmsdjqst/meld-peld-calculator-user-guide.pdf)
10. Alvarado A. A practical score for the early diagnosis of acute appendicitis. *Ann Emerg Med.* 1986;15(5):557–564. doi:[10.1016/S0196-0644(86)80993-3](https://doi.org/10.1016/S0196-0644(86)80993-3)
11. Inker LA, Eneanya ND, Coresh J, Tighiouart H, et al. New creatinine- and cystatin C–based equations to estimate GFR without race. *N Engl J Med.* 2021;385(19):1737–1749. doi:[10.1056/NEJMoa2102953](https://doi.org/10.1056/NEJMoa2102953)
12. Cockcroft DW, Gault MH. Prediction of creatinine clearance from serum creatinine. *Nephron.* 1976;16(1):31–41. doi:[10.1159/000180580](https://doi.org/10.1159/000180580)
13. Figge J, Jabor A, Kazda A, Fencl V. Anion gap and hypoalbuminemia. *Crit Care Med.* 1998;26(11):1807–1810. doi:[10.1097/00003246-199811000-00019](https://doi.org/10.1097/00003246-199811000-00019)
14. Hillier TA, Abbott RD, Barrett EJ. Hyponatremia: evaluating the correction factor for hyperglycemia. *Am J Med.* 1999;106(4):399–403. doi:[10.1016/S0002-9343(99)00055-8](https://doi.org/10.1016/S0002-9343(99)00055-8)
15. Payne RB, Little AJ, Williams RB, Milner JR. Interpretation of serum calcium in patients with abnormal serum proteins. *BMJ.* 1973;4(5893):643–646. doi:[10.1136/bmj.4.5893.643](https://doi.org/10.1136/bmj.4.5893.643)
16. Adrogué HJ, Madias NE. Hyponatremia. *N Engl J Med.* 2000;342(21):1581–1589. doi:[10.1056/NEJM200005253422107](https://doi.org/10.1056/NEJM200005253422107)
17. Holliday MA, Segar WE. The maintenance need for water in parenteral fluid therapy. *Pediatrics.* 1957;19(5):823–832. [PubMed](https://pubmed.ncbi.nlm.nih.gov/13431307/)
18. Kline JA, Mitchell AM, Kabrhel C, Richman PB, et al. Clinical criteria to prevent unnecessary diagnostic testing in emergency department patients with suspected pulmonary embolism. *J Thromb Haemost.* 2004;2(8):1247–1255. doi:[10.1111/j.1538-7836.2004.00790.x](https://doi.org/10.1111/j.1538-7836.2004.00790.x)
19. Singh B, Parsaik AK, Agarwal D, Surana A, et al. Diagnostic accuracy of pulmonary embolism rule-out criteria: a systematic review and meta-analysis. *Ann Emerg Med.* 2012;59(6):517–520.e4. doi:[10.1016/j.annemergmed.2011.10.022](https://doi.org/10.1016/j.annemergmed.2011.10.022)
20. van der Hulle T, Cheung WY, Kooij S, Beenen LFM, et al. Simplified diagnostic management of suspected pulmonary embolism (the YEARS study): a prospective, multicentre, cohort study. *Lancet.* 2017;390(10091):289–297. doi:[10.1016/S0140-6736(17)30885-1](https://doi.org/10.1016/S0140-6736(17)30885-1)
21. Righini M, Van Es J, Den Exter PL, Roy PM, et al. Age-adjusted D-dimer cutoff levels to rule out pulmonary embolism: the ADJUST-PE study. *JAMA.* 2014;311(11):1117–1124. doi:[10.1001/jama.2014.2135](https://doi.org/10.1001/jama.2014.2135)
22. Jiménez D, Aujesky D, Moores L, et al. Simplification of the Pulmonary Embolism Severity Index for prognostication in patients with acute symptomatic pulmonary embolism. *Arch Intern Med.* 2010;170(15):1383–1389. doi:[10.1001/archinternmed.2010.199](https://doi.org/10.1001/archinternmed.2010.199)
23. Konstantinides SV, Meyer G, Becattini C, Bueno H, et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism developed in collaboration with the European Respiratory Society (ERS). *Eur Heart J.* 2020;41(4):543–603. doi:[10.1093/eurheartj/ehz405](https://doi.org/10.1093/eurheartj/ehz405)
24. Royal College of Physicians. National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS. Londres: RCP; 2017. [rcp.ac.uk](https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf)
25. Evans L, Rhodes A, Alhazzani W, et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. *Intensive Care Med.* 2021;47:1181–1247. doi:[10.1007/s00134-021-06506-y](https://doi.org/10.1007/s00134-021-06506-y)
26. Fine MJ, Auble TE, Yealy DM, Hanusa BH, et al. A prediction rule to identify low-risk patients with community-acquired pneumonia. *N Engl J Med.* 1997;336(4):243–250. doi:[10.1056/NEJM199701233360402](https://doi.org/10.1056/NEJM199701233360402)
27. Metlay JP, Waterer GW, Long AC, Anzueto A, et al. Diagnosis and treatment of adults with community-acquired pneumonia. An official clinical practice guideline of the American Thoracic Society and Infectious Diseases Society of America. *Am J Respir Crit Care Med.* 2019;200(7):e45–e67. doi:[10.1164/rccm.201908-1581ST](https://doi.org/10.1164/rccm.201908-1581ST)
28. Loke YK, Kwok CS, Niruban A, Myint PK. Value of severity scales in predicting mortality from community-acquired pneumonia: systematic review and meta-analysis. *Thorax.* 2010;65(10):884–890. doi:[10.1136/thx.2009.134072](https://doi.org/10.1136/thx.2009.134072)
29. Stanley AJ, Laine L, Dalton HR, Ngu JH, et al. Comparison of risk scoring systems for patients presenting with upper gastrointestinal bleeding: international multicentre prospective study. *BMJ.* 2017;356:i6432. doi:[10.1136/bmj.i6432](https://doi.org/10.1136/bmj.i6432)
30. Andersson M, Andersson RE. The appendicitis inflammatory response score: a tool for the diagnosis of acute appendicitis that outperforms the Alvarado score. *World J Surg.* 2008;32(8):1843–1849. doi:[10.1007/s00268-008-9649-y](https://doi.org/10.1007/s00268-008-9649-y)
31. Andersson RE, Stark J. Diagnostic value of the appendicitis inflammatory response (AIR) score. A systematic review and meta-analysis. *World J Emerg Surg.* 2025;20(1):12. doi:[10.1186/s13017-025-00582-x](https://doi.org/10.1186/s13017-025-00582-x)
32. Di Saverio S, Podda M, De Simone B, Ceresoli M, et al. Diagnosis and treatment of acute appendicitis: 2020 update of the WSES Jerusalem guidelines. *World J Emerg Surg.* 2020;15(1):27. doi:[10.1186/s13017-020-00306-3](https://doi.org/10.1186/s13017-020-00306-3)
33. Kidney Disease: Improving Global Outcomes (KDIGO) CKD Work Group. KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease. *Kidney Int.* 2024;105(4S):S117–S314. doi:[10.1016/j.kint.2023.10.018](https://doi.org/10.1016/j.kint.2023.10.018)
