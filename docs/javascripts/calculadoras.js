/* La Ficha: calculadoras clínicas (página calculadoras.md). Sin dependencias. */
(function () {
  "use strict";

  function fmt(x, dec) {
    return Number(x).toLocaleString("es-CL", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  }
  function res(valor, texto) {
    return "<strong>" + valor + "</strong>" + (texto ? "<span>" + texto + "</span>" : "");
  }
  function lector(caja) {
    return {
      si: function (n) { var e = caja.querySelector("[name='" + n + "']"); return !!(e && e.checked); },
      num: function (n) {
        var e = caja.querySelector("[name='" + n + "']");
        if (!e || e.value === "") return NaN;
        return parseFloat(String(e.value).replace(",", "."));
      },
      val: function (n) {
        var r = caja.querySelector("[name='" + n + "']:checked");
        if (r) return r.value;
        var e = caja.querySelector("[name='" + n + "']");
        return e ? e.value : "";
      },
      sel: function (n) { var e = caja.querySelector("select[name='" + n + "']"); return e ? parseFloat(e.value) || 0 : 0; },
      marcados: function (filtro) { return caja.querySelectorAll("input[type=checkbox]" + (filtro || "") + ":checked").length; },
      suma: function () {
        var t = 0;
        caja.querySelectorAll("input[type=checkbox]:checked").forEach(function (e) { t += parseFloat(e.value) || 1; });
        return t;
      }
    };
  }
  var falta = "<span class='calc-falta'>Completa los datos para ver el resultado.</span>";

  var CALC = {
    cha2ds2va: function (d) {
      var p = (d.si("c") ? 1 : 0) + (d.si("h") ? 1 : 0) + parseInt(d.val("edad"), 10) + (d.si("d") ? 1 : 0) + (d.si("s") ? 2 : 0) + (d.si("v") ? 1 : 0);
      var t = p >= 2 ? "Anticoagulación oral recomendada" : p === 1 ? "Considerar anticoagulación (decisión compartida)" : "No anticoagular";
      return res(p + " puntos", t);
    },
    hasbled: function (d) {
      var p = d.suma();
      return res(p + " puntos", p >= 3 ? "Riesgo de sangrado alto: corregir factores modificables y controlar más seguido" : "Riesgo de sangrado bajo o intermedio");
    },
    heart: function (d) {
      var p = ["h", "e", "a", "r", "t"].reduce(function (a, n) { return a + d.sel(n); }, 0);
      var t = p <= 3 ? "Riesgo bajo: eventos 2,5 % en la cohorte original; considerar el alta con control"
        : p <= 6 ? "Riesgo intermedio: eventos 20,3 %; observación y estudio"
        : "Riesgo alto: eventos 72,7 %; manejo como SCA y estrategia invasiva precoz";
      return res(p + " / 10", t);
    },
    wellstvp: function (d) {
      var p = d.suma();
      return res(p + (Math.abs(p) === 1 ? " punto" : " puntos"), p >= 2 ? "TVP probable: ecografía proximal de la pierna" : "TVP improbable: dímero D (si es negativo, se descarta)");
    },
    padua: function (d) {
      var p = d.suma();
      return res(p + " puntos", p >= 4 ? "Alto riesgo de TEV: tromboprofilaxis si el riesgo de sangrado lo permite" : "Bajo riesgo de TEV: sin profilaxis farmacológica; movilizar y reevaluar");
    },
    improve: function (d) {
      var p = d.suma() + d.sel("edad") + d.sel("renal");
      return res(fmt(p, 1) + " puntos", p >= 7 ? "Alto riesgo de sangrado: preferir la profilaxis mecánica" : "Riesgo de sangrado aceptable");
    },
    cuatrot: function (d) {
      var p = d.sel("t1") + d.sel("t2") + d.sel("t3") + d.sel("t4");
      var t = p <= 3 ? "Probabilidad baja: no pedir anticuerpos; continuar la heparina y buscar otra causa"
        : (p <= 5 ? "Probabilidad intermedia" : "Probabilidad alta") + ": suspender toda heparina, anticoagulante no heparínico y anticuerpos anti-PF4";
      return res(p + " / 8", t);
    },
    sofa2: function (d) {
      var cer = d.sel("gcs");
      if (cer === 0 && d.si("delirio")) cer = 1;
      var r = d.num("ratio"), sf = d.val("tipo") === "sf", c = sf ? [300, 250, 200, 120] : [300, 225, 150, 75], sop = d.si("soporte");
      var resp = d.si("ecmo") ? 4 : isNaN(r) ? 0 : r <= c[3] && sop ? 4 : r <= c[2] && sop ? 3 : r <= c[1] ? 2 : r <= c[0] ? 1 : 0;
      var pam = d.num("pam"), na = d.num("na") || 0, otro = d.si("otro");
      var cv = d.si("mec") || na > 0.4 || (na > 0.2 && otro) ? 4 : na > 0.2 || (na > 0 && otro) ? 3 : na > 0 || otro ? 2 : !isNaN(pam) && pam < 70 ? 1 : 0;
      var b = d.num("bili");
      var hig = isNaN(b) ? 0 : b > 12 ? 4 : b > 6 ? 3 : b > 3 ? 2 : b > 1.2 ? 1 : 0;
      var cr = d.num("cr"), diu = d.sel("diu");
      var ren = d.si("trr") ? 4 : Math.max(diu, isNaN(cr) ? 0 : cr > 3.5 ? 3 : cr > 2 ? 2 : cr > 1.2 ? 1 : 0);
      var pl = d.num("plaq");
      var hem = isNaN(pl) ? 0 : pl <= 50 ? 4 : pl <= 80 ? 3 : pl <= 100 ? 2 : pl <= 150 ? 1 : 0;
      var p = cer + resp + cv + hig + ren + hem;
      return res(p + " / 24", "Cerebro " + cer + " · respiratorio " + resp + " · cardiovascular " + cv + " · hígado " + hig + " · riñón " + ren + " · hemostasia " + hem +
        " · un aumento agudo ≥ 2 puntos sobre el basal por una infección define la sepsis");
    },
    qsofa: function (d) {
      var p = d.suma();
      return res(p + " / 3", p >= 2 ? "Mayor riesgo de muerte: evaluar disfunción orgánica (SOFA) y manejo de sepsis" : "No descarta la sepsis: el qSOFA es poco sensible");
    },
    centor: function (d) {
      var p = d.suma() + d.sel("edad");
      return res(p + (Math.abs(p) === 1 ? " punto" : " puntos"), p >= 2 ? "Test rápido de S. pyogenes (o cultivo); antibiótico solo si es positivo" : "No testear ni dar antibiótico");
    },
    nihss: function (d) {
      var p = ["n1a", "n1b", "n1c", "n2", "n3", "n4", "n5a", "n5b", "n6a", "n6b", "n7", "n8", "n9", "n10", "n11"].reduce(function (a, n) { return a + d.sel(n); }, 0);
      var t = p === 0 ? "Sin déficit medible (no descarta un ACV de circulación posterior)" : p <= 3 ? "ACV menor (NIHSS ≤ 3)" : p >= 6 ? "≥ 6: sospechar oclusión de gran vaso" : "Déficit leve a moderado";
      return res(p + " / 42", t);
    },
    abcd2: function (d) {
      var p = d.suma() + d.sel("cl") + d.sel("dur");
      var t = p <= 3 ? "Riesgo bajo: ACV a 2 días 1,0 %" : p <= 5 ? "Riesgo moderado: ACV a 2 días 4,1 %" : "Riesgo alto: ACV a 2 días 8,1 %";
      return res(p + " / 7", t + (p >= 4 ? " · estudio inmediato y doble antiagregación si no es cardioembólico" : " · estudiar igual en forma urgente"));
    },
    ciwa: function (d) {
      var p = ["nau", "tem", "sud", "ans", "agi", "tac", "aud", "vis", "cef", "ori"].reduce(function (a, n) { return a + d.sel(n); }, 0);
      var t = p < 10 ? "Abstinencia leve: no suele requerir fármacos" : p <= 18 ? "Abstinencia moderada: benzodiacepina según el esquema guiado por síntomas" : "Abstinencia grave: benzodiacepina y vigilancia estrecha (riesgo de convulsiones y delirium tremens)";
      return res(p + " / 67", t);
    },
    bisap: function (d) {
      var p = d.suma();
      return res(p + " / 5", p >= 3 ? "Mayor riesgo de mortalidad: considerar UCI o intermedio" : "Menor riesgo de mortalidad: reevaluar en las primeras 48 h");
    },
    fib4: function (d) {
      var edad = d.num("edad"), ast = d.num("ast"), alt = d.num("alt"), pl = d.num("plaq");
      if (isNaN(edad) || isNaN(ast) || isNaN(alt) || isNaN(pl) || alt <= 0 || pl <= 0) return falta;
      var f = edad * ast / (pl * Math.sqrt(alt)), bajo = edad > 65 ? 2.0 : 1.3;
      var t = f < bajo ? "Bajo riesgo de fibrosis avanzada" + (edad > 65 ? " (corte 2,0 por tener > 65 años)" : "") + ": reevaluar cada 1–3 años"
        : f > 2.67 ? "Alto riesgo de fibrosis avanzada: derivar a hepatología" : "Indeterminado: elastografía";
      return res("FIB-4 " + fmt(f, 2), t);
    },
    wells: function (d) {
      var p = d.suma(), edad = d.num("edad");
      var corte = !isNaN(edad) && edad > 50 ? edad * 10 : 500;
      var dd = " · Corte del dímero D" + (!isNaN(edad) && edad > 50 ? " ajustado por edad" : "") + ": " + fmt(corte) + " µg/L FEU";
      return res(fmt(p, 1) + " puntos", p > 4 ? "TEP probable: angioTC de tórax" : "TEP improbable: dímero D (bajo el corte, se descarta)" + dd);
    },
    perc: function (d) {
      var n = d.marcados();
      return n === 0 ? res("PERC negativo", "Con probabilidad clínica baja, se descarta el TEP sin dímero D ni imagen")
        : res(n + (n === 1 ? " criterio presente" : " criterios presentes"), "PERC positivo: no descarta; seguir con dímero D");
    },
    years: function (d) {
      var n = d.marcados(), dd = d.num("dd");
      var corte = n === 0 ? 1000 : 500;
      var t = n + (n === 1 ? " ítem" : " ítems") + " · corte del dímero D: " + fmt(corte) + " ng/mL";
      if (isNaN(dd)) return res(t, "Ingresa el dímero D");
      return res(dd < corte ? "TEP descartado" : "AngioTC de tórax", t);
    },
    spesi: function (d) {
      var p = d.marcados();
      return res(p + (p === 1 ? " punto" : " puntos"), p === 0 ? "Riesgo bajo: mortalidad a 30 días ~ 1 %; candidato a manejo ambulatorio o alta precoz" : "No es de bajo riesgo: hospitalizar y evaluar VD y troponina");
    },
    news2: function (d) {
      var sat = d.val("escala") === "2" ? d.sel("sat2") : d.sel("sat1");
      var partes = [d.sel("fr"), sat, d.sel("o2"), d.sel("pas"), d.sel("fc"), d.sel("conc"), d.sel("t")];
      var p = partes.reduce(function (a, b) { return a + b; }, 0);
      var rojo = partes.some(function (x) { return x === 3; });
      var t = p >= 7 ? "Riesgo alto: respuesta de emergencia (equipo con competencias de intensivo)"
        : p >= 5 ? "Riesgo medio: evaluación urgente; buscar sepsis"
        : rojo ? "Un parámetro con 3 puntos: evaluación urgente por el médico de sala"
        : "Riesgo bajo: monitoreo según protocolo";
      return res(p + " puntos", t);
    },
    psi: function (d) {
      var edad = d.num("edad");
      if (isNaN(edad)) return falta;
      var mujer = d.val("sexo") === "m";
      var com = d.marcados("[data-com]"), ex = d.marcados("[data-ex]");
      if (edad <= 50 && com === 0 && ex === 0 && !d.si("ela")) return res("Clase I", "Mortalidad a 30 días ~ 0,1 %: manejo ambulatorio");
      var p = (mujer ? edad - 10 : edad) + d.suma();
      var c = p <= 70 ? ["II", "~ 0,6 %", "manejo ambulatorio"] : p <= 90 ? ["III", "0,9–2,8 %", "ambulatorio u observación breve"] : p <= 130 ? ["IV", "8–9 %", "hospitalizar"] : ["V", "27–31 %", "hospitalizar y evaluar UCI"];
      return res("Clase " + c[0] + " (" + p + " puntos)", "Mortalidad a 30 días " + c[1] + ": " + c[2]);
    },
    nacgrave: function (d) {
      var M = d.marcados("[data-mayor]"), m = d.marcados(":not([data-mayor])");
      var grave = M >= 1 || m >= 3;
      return res(grave ? "Neumonía grave" : "No cumple criterios de gravedad", M + " mayor(es) · " + m + " menor(es)" + (grave ? " · UCI o intermedio" : ""));
    },
    curb65: function (d) {
      var p = d.suma();
      var t = p <= 1 ? "Riesgo bajo: manejo ambulatorio" : p === 2 ? "Riesgo intermedio: considerar hospitalización" : "Neumonía grave: hospitalizar y evaluar UCI (sobre todo con 4–5)";
      return res(p + " puntos", t);
    },
    glasgow: function (d) {
      var p = parseInt(d.val("o"), 10) + parseInt(d.val("v"), 10) + parseInt(d.val("m"), 10);
      var t = p >= 13 ? "Compromiso leve (TEC leve 13–15)" : p >= 9 ? "Compromiso moderado (TEC moderado 9–12)" : "Compromiso grave (≤ 8): proteger la vía aérea";
      return res(p + " / 15", "O" + d.val("o") + " V" + d.val("v") + " M" + d.val("m") + " · " + t);
    },
    blatchford: function (d) {
      var bun = d.num("bun"), hb = d.num("hb"), pas = d.num("pas");
      if (isNaN(bun) || isNaN(hb) || isNaN(pas)) return falta;
      var p = 0;
      p += bun >= 70 ? 6 : bun >= 28 ? 4 : bun >= 22.4 ? 3 : bun >= 18.2 ? 2 : 0;
      if (d.val("sexo") === "h") p += hb < 10 ? 6 : hb < 12 ? 3 : hb < 13 ? 1 : 0;
      else p += hb < 10 ? 6 : hb < 12 ? 1 : 0;
      p += pas < 90 ? 3 : pas < 100 ? 2 : pas < 110 ? 1 : 0;
      p += (d.si("fc") ? 1 : 0) + (d.si("melena") ? 1 : 0) + (d.si("sincope") ? 2 : 0) + (d.si("hep") ? 2 : 0) + (d.si("ic") ? 2 : 0);
      return res(p + " puntos", p <= 1 ? "Riesgo muy bajo: posible alta con endoscopía ambulatoria" : "Requiere hospitalización y endoscopía");
    },
    childpugh: function (d) {
      var p = ["bili", "alb", "inr", "asc", "enc"].reduce(function (a, n) { return a + parseInt(d.val(n), 10); }, 0);
      var c = p <= 6 ? "A" : p <= 9 ? "B" : "C";
      return res("Clase " + c + " (" + p + " puntos)", c === "A" ? "Enfermedad compensada" : c === "B" ? "Compromiso funcional significativo" : "Enfermedad descompensada");
    },
    meld: function (d) {
      var bili = d.num("bili"), inr = d.num("inr"), cr = d.num("cr"), na = d.num("na"), alb = d.num("alb");
      if (isNaN(bili) || isNaN(inr) || isNaN(cr) || isNaN(na)) return falta;
      var ln = Math.log, lim = function (x, a, b) { return Math.min(b, Math.max(a, x)); };
      var b1 = Math.max(1, bili), i1 = Math.max(1, inr), n1 = lim(na, 125, 137);
      // MELD-Na (OPTN): creatinina entre 1 y 4
      var c4 = d.si("dial") ? 4 : lim(cr, 1, 4);
      var meld = Math.round(10 * (0.957 * ln(c4) + 0.378 * ln(b1) + 1.120 * ln(i1) + 0.643));
      var meldna = meld > 11 ? Math.round(meld + 1.32 * (137 - n1) - 0.033 * meld * (137 - n1)) : meld;
      var txt = "MELD-Na " + meldna;
      if (!isNaN(alb)) {
        var c3 = d.si("dial") ? 3 : lim(cr, 1, 3), a1 = lim(alb, 1.5, 3.5);
        var m3 = (d.val("sexo") === "m" ? 1.33 : 0) + 4.56 * ln(b1) + 0.82 * (137 - n1) - 0.24 * (137 - n1) * ln(b1) +
          9.09 * ln(i1) + 11.14 * ln(c3) + 1.85 * (3.5 - a1) - 1.83 * (3.5 - a1) * ln(c3) + 6;
        return res("MELD 3.0: " + Math.round(m3), txt + (Math.round(m3) >= 15 ? " · ≥ 15: derivar a evaluación de trasplante" : ""));
      }
      return res(txt, "Agrega la albúmina para calcular el MELD 3.0" + (meldna >= 15 ? " · ≥ 15: derivar a evaluación de trasplante" : ""));
    },
    air: function (d) {
      var p = d.suma() + d.sel("reb") + d.sel("neu") + d.sel("leu") + d.sel("pcr");
      var t = p <= 4 ? "Riesgo bajo: apendicitis poco probable; alta con control o reevaluar" : p <= 8 ? "Riesgo intermedio: imagen (ecografía; TC si no es concluyente)" : "Riesgo alto: evaluación por cirugía";
      return res(p + " / 12", t);
    },
    alvarado: function (d) {
      var p = d.suma();
      var t = p <= 4 ? "Apendicitis poco probable" : p <= 6 ? "Apendicitis posible: imagen" : p <= 8 ? "Apendicitis probable" : "Apendicitis muy probable";
      return res(p + " / 10", t);
    },
    renal: function (d) {
      var cr = d.num("cr"), edad = d.num("edad"), peso = d.num("peso"), mujer = d.val("sexo") === "m";
      if (isNaN(cr) || isNaN(edad) || cr <= 0) return falta;
      var k = mujer ? 0.7 : 0.9, a = mujer ? -0.241 : -0.302;
      var tfg = 142 * Math.pow(Math.min(cr / k, 1), a) * Math.pow(Math.max(cr / k, 1), -1.2) * Math.pow(0.9938, edad) * (mujer ? 1.012 : 1);
      var cys = d.num("cys"), txt = "CKD-EPI 2021 con creatinina";
      if (!isNaN(cys) && cys > 0) {
        tfg = 135 * Math.pow(Math.min(cr / k, 1), mujer ? -0.219 : -0.144) * Math.pow(Math.max(cr / k, 1), -0.544) *
          Math.pow(Math.min(cys / 0.8, 1), -0.323) * Math.pow(Math.max(cys / 0.8, 1), -0.778) * Math.pow(0.9961, edad) * (mujer ? 0.963 : 1);
        txt = "CKD-EPI 2021 con creatinina y cistatina C";
      }
      var g = tfg >= 90 ? "G1" : tfg >= 60 ? "G2" : tfg >= 45 ? "G3a" : tfg >= 30 ? "G3b" : tfg >= 15 ? "G4" : "G5";
      var cg = !isNaN(peso) ? " · Cockcroft-Gault: " + fmt((140 - edad) * peso / (72 * cr) * (mujer ? 0.85 : 1)) + " mL/min" : "";
      return res(fmt(tfg) + " mL/min/1,73 m²", txt + " · categoría KDIGO " + g + cg);
    },
    electrolitos: function (d) {
      var na = d.num("na"), cl = d.num("cl"), hco3 = d.num("hco3"), alb = d.num("alb"), glu = d.num("glu"), bun = d.num("bun"), ca = d.num("ca");
      var out = [];
      if (!isNaN(na) && !isNaN(cl) && !isNaN(hco3)) {
        var ag = na - (cl + hco3);
        out.push("Anión gap: <strong>" + fmt(ag, 1) + "</strong>" + (!isNaN(alb) ? " (corregido por albúmina: <strong>" + fmt(ag + 2.5 * (4 - alb), 1) + "</strong>)" : ""));
      }
      if (!isNaN(na) && !isNaN(glu) && glu > 100) {
        var ex = (glu - 100) / 100;
        out.push("Na corregido por glicemia: <strong>" + fmt(na + 1.6 * ex, 1) + "–" + fmt(na + 2.4 * ex, 1) + "</strong> mEq/L");
      }
      if (!isNaN(ca) && !isNaN(alb)) out.push("Calcio corregido: <strong>" + fmt(ca + 0.8 * (4 - alb), 1) + "</strong> mg/dL");
      if (!isNaN(na) && !isNaN(glu) && !isNaN(bun)) out.push("Osmolalidad calculada: <strong>" + fmt(2 * na + glu / 18 + bun / 2.8) + "</strong> mOsm/kg (efectiva: " + fmt(2 * na + glu / 18) + ")");
      return out.length ? out.join("<br>") : falta;
    },
    sodio: function (d) {
      var na = d.num("na"), peso = d.num("peso"), f = parseFloat(d.val("act")), sol = parseFloat(d.val("sol"));
      if (isNaN(na) || isNaN(peso)) return falta;
      var act = peso * f, cambio = (sol - na) / (act + 1);
      var out = "Agua corporal total: <strong>" + fmt(act, 1) + " L</strong>";
      if (na > 145) out += "<br>Déficit de agua libre: <strong>" + fmt(act * (na / 140 - 1), 1) + " L</strong>";
      out += "<br>Cada litro de la solución elegida cambia el sodio en <strong>" + (cambio > 0 ? "+" : "") + fmt(cambio, 1) + " mEq/L</strong>";
      return out;
    },
    parkland: function (d) {
      var peso = d.num("peso"), scq = d.num("scq"), h = d.num("h") || 0;
      if (isNaN(peso) || isNaN(scq)) return falta;
      var total = 4 * peso * scq, prim = total / 2, restante8 = Math.max(0, 8 - h);
      var out = "Total 24 h: <strong>" + fmt(total) + " mL</strong> de Ringer lactato<br>Primeras 8 h desde la quemadura: <strong>" + fmt(prim) + " mL</strong>";
      if (h > 0 && h < 8) out += " → quedan " + fmt(restante8, 1) + " h: <strong>" + fmt(prim / restante8) + " mL/h</strong>";
      else if (h === 0) out += " (<strong>" + fmt(prim / 8) + " mL/h</strong>)";
      out += "<br>16 h siguientes: <strong>" + fmt(prim) + " mL</strong> (" + fmt(prim / 16) + " mL/h)";
      if (d.si("nino")) out += "<br>Más basales (Holliday-Segar): <strong>" + fmt(holliday(peso)) + " mL/día</strong>";
      return out;
    },
    holliday: function (d) {
      var peso = d.num("peso");
      if (isNaN(peso)) return falta;
      var dia = holliday(peso);
      return res(fmt(dia) + " mL/día", "≈ " + fmt(dia / 24, 1) + " mL/h (regla 4-2-1)");
    },
    dosis: function (d) {
      var peso = d.num("peso"), mgkg = d.num("mgkg"), max = d.num("max"), conc = d.num("conc"), div = d.num("div");
      if (isNaN(peso) || isNaN(mgkg)) return falta;
      var mg = peso * mgkg, tope = !isNaN(max) && mg > max;
      if (tope) mg = max;
      var out = "Dosis: <strong>" + fmt(mg, 1) + " mg</strong>" + (tope ? " (limitada por la dosis máxima)" : "");
      if (!isNaN(div) && div > 1) out += "<br>Dividida en " + div + ": <strong>" + fmt(mg / div, 1) + " mg</strong> por dosis";
      if (!isNaN(conc) && conc > 0) out += "<br>Volumen: <strong>" + fmt((!isNaN(div) && div > 1 ? mg / div : mg) / conc, 2) + " mL</strong>" + (!isNaN(div) && div > 1 ? " por dosis" : "");
      return out;
    },
    imc: function (d) {
      var peso = d.num("peso"), talla = d.num("talla") / 100;
      if (isNaN(peso) || isNaN(talla) || talla <= 0) return falta;
      var imc = peso / (talla * talla);
      var c = imc < 18.5 ? "Bajo peso" : imc < 25 ? "Normal" : imc < 30 ? "Sobrepeso" : imc < 35 ? "Obesidad grado I" : imc < 40 ? "Obesidad grado II" : "Obesidad grado III";
      return res(fmt(imc, 1) + " kg/m²", c);
    },
    fpp: function (d) {
      var furTxt = d.val("fur");
      if (!furTxt) return falta;
      var fur = new Date(furTxt + "T12:00:00"), hoyTxt = d.val("hoy");
      var ref = hoyTxt ? new Date(hoyTxt + "T12:00:00") : new Date();
      var fpp = new Date(fur.getTime() + 280 * 86400000);
      var dias = Math.floor((ref - fur) / 86400000);
      var out = "Fecha probable de parto: <strong>" + fpp.toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" }) + "</strong>";
      if (dias >= 0) out += "<br>Edad gestacional: <strong>" + Math.floor(dias / 7) + " semanas y " + (dias % 7) + " días</strong>";
      return out;
    }
  };
  function holliday(peso) {
    return peso <= 10 ? 100 * peso : peso <= 20 ? 1000 + 50 * (peso - 10) : 1500 + 20 * (peso - 20);
  }

  // Lista de calculadoras plegables: una abierta a la vez y enlace directo por #nombre
  function slug(s) {
    return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function normal(s) { return s.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function escapar(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // Página de calculadoras: tarjetas por área, buscador y filtros. Una calculadora abierta a la vez; enlace directo por #nombre.
  function plegables() {
    var lista = Array.prototype.slice.call(document.querySelectorAll("details.calculadora"));
    if (!lista.length || lista[0].getAttribute("data-lf") === "1") return;
    var areas = [];
    document.querySelectorAll(".md-content h2").forEach(function (h) {
      var propias = [], el = h.nextElementSibling;
      while (el && el.tagName !== "H2") { if (el.matches("details.calculadora")) propias.push(el); el = el.nextElementSibling; }
      if (!propias.length) return;
      var grilla = document.createElement("div"); grilla.className = "calc-grilla";
      h.parentNode.insertBefore(grilla, h.nextSibling);
      propias.forEach(function (d) { grilla.appendChild(d); });
      h.classList.add("calc-area");
      areas.push({ h: h, grilla: grilla, lista: propias, nombre: h.textContent.replace(/¶/g, "").trim() });
    });
    lista.forEach(function (d) {
      d.setAttribute("data-lf", "1");
      var s = d.querySelector("summary"), texto = s.textContent.trim();
      d.id = slug(texto);
      var m = texto.match(/^(.*?)\s*\((.*)\)\s*$/);
      s.innerHTML = "<span class='calc-nombre'>" + escapar(m ? m[1] : texto) + "</span>" + (m ? "<span class='calc-desc'>" + escapar(m[2].charAt(0).toUpperCase() + m[2].slice(1)) + "</span>" : "");
      var fuente = d.querySelector(".calc-fuente");
      if (fuente) {
        var mas = document.createElement("details"); mas.className = "calc-mas";
        mas.innerHTML = "<summary>Fuente e interpretación</summary>";
        fuente.parentNode.insertBefore(mas, fuente); mas.appendChild(fuente);
      }
      d.setAttribute("data-buscar", normal(texto + " " + (fuente ? fuente.textContent : "")));
      d.addEventListener("toggle", function () {
        if (!d.open) return;
        lista.forEach(function (o) { if (o !== d) o.open = false; });
        try { history.replaceState(null, "", "#" + d.id); } catch (e) { /* sin historial */ }
        setTimeout(function () { d.scrollIntoView({ block: "nearest", behavior: "smooth" }); }, 30);
      });
    });

    // Barra: buscador y filtros por área
    var barra = document.querySelector(".calc-barra");
    if (barra) {
      barra.innerHTML = "<label class='calc-buscar'><span class='calc-oculto'>Buscar calculadora</span><input type='search' placeholder='Buscar: CURB, sepsis, sodio, TEP…' autocomplete='off'></label><div class='calc-filtros' role='group' aria-label='Filtrar por área'></div><p class='calc-vacio' hidden>No hay calculadoras con ese nombre.</p>";
      var entrada = barra.querySelector("input"), filtros = barra.querySelector(".calc-filtros"), vacio = barra.querySelector(".calc-vacio"), area = null;
      [{ nombre: "Todas", lista: lista }].concat(areas).forEach(function (a, i) {
        var b = document.createElement("button"); b.type = "button"; b.innerHTML = escapar(a.nombre) + "<span>" + a.lista.length + "</span>";
        b.setAttribute("aria-pressed", i === 0); filtros.appendChild(b);
        b.addEventListener("click", function () {
          area = i === 0 ? null : a;
          filtros.querySelectorAll("button").forEach(function (o) { o.setAttribute("aria-pressed", o === b); });
          filtrar();
        });
      });
      var filtrar = function () {
        var q = normal(entrada.value).split(/\s+/).filter(Boolean), total = 0;
        areas.forEach(function (a) {
          var n = 0;
          a.lista.forEach(function (d) {
            var si = (!area || area === a) && q.every(function (w) { return d.getAttribute("data-buscar").indexOf(w) >= 0; });
            d.hidden = !si; if (si) n++;
          });
          a.h.hidden = a.grilla.hidden = n === 0; total += n;
        });
        vacio.hidden = total > 0;
      };
      entrada.addEventListener("input", filtrar);
    }

    var h = decodeURIComponent(location.hash.slice(1));
    var objetivo = h && document.getElementById(h);
    if (objetivo && objetivo.matches("details.calculadora")) { objetivo.open = true; objetivo.scrollIntoView(); }
  }

  function iniciar() {
    plegables();
    document.querySelectorAll(".calc[data-calc]").forEach(function (caja) {
      if (caja.getAttribute("data-lf") === "1") return;
      caja.setAttribute("data-lf", "1");
      var f = CALC[caja.getAttribute("data-calc")], salida = caja.querySelector(".calc-res");
      if (!f || !salida) return;
      var calcular = function () {
        try { salida.innerHTML = f(lector(caja)); } catch (e) { salida.innerHTML = falta; }
      };
      caja.addEventListener("input", calcular);
      caja.addEventListener("change", calcular);
      calcular();
    });
  }
  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(iniciar);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
