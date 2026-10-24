---
hide:
  - toc
---

# Calculadoras clínicas

Puntajes y fórmulas de uso diario, con la misma definición que usan los resúmenes de La Ficha. Escribe los datos y el resultado aparece de inmediato. Funcionan sin conexión.

!!! warning "Apoyo, no reemplazo"
    Las calculadoras ayudan a ordenar la información; la decisión clínica es tuya. Verifica las unidades (mg/dL, mmol/L) y revisa el resumen correspondiente antes de indicar un tratamiento.

[Cardiología y respiratorio](#cardiologia-y-respiratorio) · [Neurología](#neurologia) · [Gastroenterología y cirugía](#gastroenterologia-y-cirugia) · [Riñón y electrolitos](#rinon-y-electrolitos) · [Fluidos, dosis y otros](#fluidos-dosis-y-otros)
{ .calc-indice }

## Cardiología y respiratorio

### CHA₂DS₂-VA (riesgo embólico en la fibrilación auricular)

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

### HAS-BLED (riesgo de sangrado con anticoagulación)

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

Pisters et al., *Chest* 2010. Un puntaje alto (≥ 3) obliga a corregir los factores modificables; no es motivo por sí solo para no anticoagular.
{ .calc-fuente }

### Wells para TEP

<div class="calc" data-calc="wells">
<label><input type="checkbox" name="tvp" value="3"> Signos clínicos de TVP <span>+3</span></label>
<label><input type="checkbox" name="dx" value="3"> TEP es el diagnóstico más probable <span>+3</span></label>
<label><input type="checkbox" name="fc" value="1.5"> FC &gt; 100 lpm <span>+1,5</span></label>
<label><input type="checkbox" name="inm" value="1.5"> Inmovilización ≥ 3 días o cirugía en las últimas 4 semanas <span>+1,5</span></label>
<label><input type="checkbox" name="prev" value="1.5"> TVP o TEP previo <span>+1,5</span></label>
<label><input type="checkbox" name="hemo" value="1"> Hemoptisis <span>+1</span></label>
<label><input type="checkbox" name="ca" value="1"> Cáncer activo <span>+1</span></label>
<output class="calc-res"></output>
</div>

Wells et al., *Thromb Haemost* 2000. Dos niveles: ≤ 4 TEP improbable (dímero D); &gt; 4 TEP probable (angioTC). Ver [TEP](respiratorio/tromboembolismo-pulmonar.md).
{ .calc-fuente }

### CURB-65 (gravedad de la neumonía)

<div class="calc" data-calc="curb65">
<label><input type="checkbox" name="c"> Confusión de reciente aparición <span>+1</span></label>
<label><input type="checkbox" name="u"> BUN &gt; 19 mg/dL (urea &gt; 7 mmol/L) <span>+1</span></label>
<label><input type="checkbox" name="r"> Frecuencia respiratoria ≥ 30/min <span>+1</span></label>
<label><input type="checkbox" name="b"> PAS &lt; 90 o PAD ≤ 60 mmHg <span>+1</span></label>
<label><input type="checkbox" name="e"> Edad ≥ 65 años <span>+1</span></label>
<output class="calc-res"></output>
</div>

Lim et al., *Thorax* 2003. Sin BUN se usa el CRB-65 (los mismos criterios sin la urea). Ver [neumonía adquirida en la comunidad](respiratorio/neumonia-adquirida-en-la-comunidad.md).
{ .calc-fuente }

## Neurología

### Escala de coma de Glasgow

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

### Glasgow-Blatchford (hemorragia digestiva alta)

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

Blatchford et al., *Lancet* 2000. 0–1 punto: riesgo muy bajo, se puede dar de alta con endoscopía ambulatoria (ACG y ESGE 2021). Ver [HDA](gastroenterologia/hemorragia-digestiva-alta.md).
{ .calc-fuente }

### Child-Pugh

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

### MELD-Na y MELD 3.0

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

### Alvarado (apendicitis aguda)

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

Alvarado, *Ann Emerg Med* 1986. Un puntaje no basta para indicar la cirugía: combinar con la imagen. Ver [apendicitis aguda](cirugia/intestino-colon-y-proctologia/apendicitis-aguda.md).
{ .calc-fuente }

## Riñón y electrolitos

### Filtración glomerular (CKD-EPI 2021) y depuración de creatinina (Cockcroft-Gault)

<div class="calc" data-calc="renal">
<label class="calc-campo">Creatinina (mg/dL) <input type="number" name="cr" step="0.01" min="0"></label>
<label class="calc-campo">Edad (años) <input type="number" name="edad" min="18"></label>
<label class="calc-campo">Sexo <select name="sexo"><option value="h">Hombre</option><option value="m">Mujer</option></select></label>
<label class="calc-campo">Peso (kg, para Cockcroft-Gault) <input type="number" name="peso" step="0.1" min="0"></label>
<output class="calc-res"></output>
</div>

CKD-EPI 2021 sin raza: Inker et al., *N Engl J Med* 2021 (mL/min/1,73 m²). Cockcroft y Gault, *Nephron* 1976 (mL/min; se usa para ajustar algunos fármacos, como los anticoagulantes directos). Ver [ERC](nefrologia/enfermedad-renal-cronica.md).
{ .calc-fuente }

### Anión gap, sodio y calcio corregidos, osmolalidad

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

### Déficit de agua libre y cambio de sodio por litro (Adrogué-Madias)

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

### Quemados: fórmula de Parkland

<div class="calc" data-calc="parkland">
<label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
<label class="calc-campo">Superficie corporal quemada (% SCQ, 2.º y 3.er grado) <input type="number" name="scq" step="1" min="0" max="100"></label>
<label class="calc-campo">Horas desde la quemadura <input type="number" name="h" step="0.5" min="0" value="0"></label>
<label><input type="checkbox" name="nino"> Niño (sumar requerimientos basales)</label>
<output class="calc-res"></output>
</div>

4 mL × kg × % SCQ de Ringer lactato en 24 h desde la hora de la quemadura: 50 % en las primeras 8 h. Ajustar por la diuresis (adulto 0,5 mL/kg/h; niño ~ 1 mL/kg/h). Ver [quemaduras](cirugia/piel-partes-blandas-y-quemaduras/quemaduras-secuelas-y-cicatrices.md).
{ .calc-fuente }

### Requerimientos basales de agua (Holliday-Segar)

<div class="calc" data-calc="holliday">
<label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
<output class="calc-res"></output>
</div>

100 mL/kg los primeros 10 kg, 50 mL/kg los siguientes 10 kg y 20 mL/kg por cada kg sobre 20 (Holliday y Segar, *Pediatrics* 1957). Ver [fluidoterapia en pediatría](pediatria/fluidoterapia-trastornos-hidroelectroliticos-y-acido-base.md).
{ .calc-fuente }

### Dosis por peso

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

### Índice de masa corporal

<div class="calc" data-calc="imc">
<label class="calc-campo">Peso (kg) <input type="number" name="peso" step="0.1" min="0"></label>
<label class="calc-campo">Talla (cm) <input type="number" name="talla" step="0.1" min="0"></label>
<output class="calc-res"></output>
</div>

IMC = peso/talla² (kg/m²), clasificación de la OMS en adultos. En niños y adolescentes se usa el IMC para la edad (puntaje z). Ver [obesidad](endocrinologia/obesidad-y-sindrome-metabolico.md).
{ .calc-fuente }

### Fecha probable de parto y edad gestacional

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
