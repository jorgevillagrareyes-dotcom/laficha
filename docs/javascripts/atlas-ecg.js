/* La Ficha: atlas de ECG (página atlas-ecg.md).
   Corazón 3D (modelo propio en atlas-ecg-modelo.js, generado con scripts/modelo-corazon.py y dibujado con Three.js
   de javascripts/vendor) con la conducción animada y un ECG de 12 derivaciones sincronizado. El trazado se calcula con
   un modelo de dipolo: en cada instante el corazón genera un vector eléctrico y cada derivación registra su proyección
   sobre su eje. El corazón y el trazado usan los mismos tiempos de activación, así que coinciden en cada instante.
   Es un esquema docente, no una simulación fisiológica exacta. */
(function () {
  "use strict";

  /* ---------- Vectores y derivaciones (x = izquierda del paciente, y = arriba, z = adelante) ---------- */
  function v3(x, y, z) { return { x: x, y: y, z: z }; }
  function unit(x, y, z) { var n = Math.hypot(x, y, z) || 1; return v3(x / n, y / n, z / n); }
  function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
  function rad(g) { return g * Math.PI / 180; }
  function frontal(g) { return v3(Math.cos(rad(g)), -Math.sin(rad(g)), 0); } // eje hexaxial: +90° = inferior
  function horizontal(g) { return v3(Math.cos(rad(g)), 0, Math.sin(rad(g))); } // 0° = izquierda, 90° = adelante

  var DERIV = {
    "I": { eje: frontal(0), cara: "lateral alta", ganancia: 1 },
    "II": { eje: frontal(60), cara: "inferior", ganancia: 1 },
    "III": { eje: frontal(120), cara: "inferior", ganancia: 1 },
    "aVR": { eje: frontal(-150), cara: null, ganancia: 1 },
    "aVL": { eje: frontal(-30), cara: "lateral alta", ganancia: 1 },
    "aVF": { eje: frontal(90), cara: "inferior", ganancia: 1 },
    "V1": { eje: horizontal(115), cara: "septal", ganancia: 1.5 },
    "V2": { eje: horizontal(95), cara: "septal", ganancia: 1.5 },
    "V3": { eje: horizontal(75), cara: "anterior", ganancia: 1.5 },
    "V4": { eje: horizontal(60), cara: "anterior", ganancia: 1.5 },
    "V5": { eje: horizontal(30), cara: "lateral baja", ganancia: 1.3 },
    "V6": { eje: horizontal(0), cara: "lateral baja", ganancia: 1.2 }
  };
  var ORDEN = ["I", "aVR", "V1", "V4", "II", "aVL", "V2", "V5", "III", "aVF", "V3", "V6"];

  /* ---------- Formas de onda: centro (ms desde el inicio), ancho (ms), dirección y amplitud (mV) ---------- */
  function C(c, s, d, a) { return { c: c, s: s, d: d, a: a }; }
  var T_NORMAL = [C(250, 48, unit(0.55, -0.65, 0.25), 0.34), C(300, 28, unit(0.55, -0.65, 0.25), 0.1)];
  var QRS = {
    normal: { fin: 88, comps: [C(12, 7, unit(-0.45, -0.15, 0.85), 0.25), C(40, 11, unit(0.63, -0.63, -0.46), 1.6), C(66, 9, unit(-0.35, 0.55, -0.6), 0.42)], t: T_NORMAL },
    brd: { fin: 140, comps: [C(12, 7, unit(-0.45, -0.15, 0.85), 0.25), C(40, 11, unit(0.63, -0.63, -0.46), 1.45), C(100, 17, unit(-0.6, 0.05, 0.8), 0.8)],
      t: [C(290, 50, unit(0.65, -0.6, -0.3), 0.3)] },
    bri: { fin: 150, comps: [C(28, 14, unit(0.55, -0.25, -0.8), 0.9), C(78, 22, unit(0.75, -0.35, -0.55), 1.55), C(125, 14, unit(0.6, -0.2, -0.5), 0.45)],
      t: [C(300, 52, unit(-0.6, 0.25, 0.75), 0.38)] },
    ev: { fin: 150, comps: [C(40, 24, unit(0.25, -0.85, -0.45), 1.6), C(100, 24, unit(0.4, -0.7, -0.6), 0.85)], t: [C(300, 50, unit(-0.3, 0.8, 0.5), 0.45)] },
    tv: { fin: 160, comps: [C(45, 27, unit(-0.35, 0.7, 0.6), 1.7), C(110, 24, unit(-0.5, 0.5, 0.7), 0.8)], t: [C(245, 40, unit(0.4, -0.6, -0.6), 0.4)] },
    hk: { fin: 118, comps: [C(16, 9, unit(-0.45, -0.15, 0.85), 0.22), C(52, 15, unit(0.63, -0.63, -0.46), 1.4), C(88, 13, unit(-0.35, 0.55, -0.6), 0.4)],
      t: [C(235, 30, unit(0.5, -0.6, 0.45), 0.95)] }
  };
  var P_NORMAL = [C(45, 20, unit(0.5, -0.85, 0.1), 0.17)];
  var P_HK = [C(50, 26, unit(0.5, -0.85, 0.1), 0.07)];
  var P_RETRO = [C(25, 13, unit(-0.25, 0.9, 0.35), 0.09)];
  var EJE_FA = unit(-0.25, -0.55, 0.8), EJE_FLUTTER = unit(0.05, 0.9, 0.35);
  var P_FIN = 90, QRS_INI = -5, CONDUCIDOS = { normal: 1, brd: 1, bri: 1, hk: 1 };

  function gauss(t, c, s) { var u = (t - c) / s; return Math.exp(-0.5 * u * u); }
  function sumar(acc, comps, t) {
    for (var i = 0; i < comps.length; i++) {
      var c = comps[i], g = c.a * gauss(t, c.c, c.s);
      acc.x += g * c.d.x; acc.y += g * c.d.y; acc.z += g * c.d.z;
    }
  }
  function meseta(t, a, b, r) { return t < a - r || t > b + r ? 0 : t < a ? 0.5 - 0.5 * Math.cos(Math.PI * (t - a + r) / r) : t > b ? 0.5 + 0.5 * Math.cos(Math.PI * (t - b) / r) : 1; }
  function azar(i) { var x = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); } // fija: no cambia al recargar

  /* ---------- Ritmos ---------- */
  // latidos(t) devuelve los latidos cercanos a t: p = inicio de la P (o null), q = inicio del QRS (o null) y tipo de QRS.
  function periodico(periodo, plantilla) { // plantilla: latidos de un período, con tiempos relativos
    return function (t) {
      var k = Math.floor(t / periodo), out = [];
      for (var i = k - 2; i <= k + 1; i++) plantilla.forEach(function (b) {
        out.push({ p: b.p === null ? null : i * periodo + b.p, q: b.q === null ? null : i * periodo + b.q, tipo: b.tipo || "normal", retro: b.retro, bloq: b.bloq, oculta: b.oculta });
      });
      return out;
    };
  }
  function sinusal(ciclo, pr, tipo) { return periodico(ciclo, [{ p: 0, q: pr, tipo: tipo }]); }
  function independientes(pp, qq, q0, tipo) { // P y QRS sin relación (disociación AV)
    return function (t) {
      var out = [], kp = Math.floor(t / pp), kq = Math.floor((t - q0) / qq), i;
      for (i = kp - 4; i <= kp + 1; i++) out.push({ p: i * pp, q: null, tipo: tipo });
      for (i = kq - 4; i <= kq + 1; i++) out.push({ p: null, q: i * qq + q0, tipo: tipo });
      return out;
    };
  }
  var FA_RR = [];
  (function () { var acc = 0; for (var i = 0; i < 400; i++) { FA_RR.push(acc); acc += 430 + Math.round(azar(i) * 520); } })();
  var FA_TOTAL = FA_RR[FA_RR.length - 1] + 600;
  function latidosFA(t) {
    var base = Math.floor(t / FA_TOTAL) * FA_TOTAL, x = t - base, out = [], i = 0;
    while (i < FA_RR.length - 1 && FA_RR[i + 1] + 300 <= x) i++;
    for (var j = Math.max(0, i - 4); j <= Math.min(FA_RR.length - 1, i + 1); j++) out.push({ p: null, q: base + FA_RR[j] + 300, tipo: "normal" });
    return out;
  }

  var RITMOS = {
    sinusal: { nombre: "Ritmo sinusal normal", corto: "Ritmo sinusal", grupo: "normal", latidos: sinusal(800, 160), pr: 160, rr: 800, kT: 1 },
    bradicardia: { nombre: "Bradicardia sinusal", grupo: "normal", latidos: sinusal(1200, 170), pr: 170, rr: 1200, kT: 0.9 },
    taquicardia: { nombre: "Taquicardia sinusal", grupo: "normal", latidos: sinusal(500, 140), pr: 140, rr: 500, kT: 1.3 },

    fa: { nombre: "Fibrilación auricular", corto: "FA", grupo: "supra", auriculas: "fa", tira: "V1", kT: 1, latidos: latidosFA },
    flutter: { nombre: "Flutter auricular típico (2:1)", corto: "Flutter", grupo: "supra", auriculas: "flutter", tira: "II", rr: 400, kT: 1.15,
      latidos: periodico(400, [{ p: null, q: 230 }]) },
    tsv: { nombre: "Taquicardia por reentrada nodal", corto: "TSV (reentrada nodal)", grupo: "supra", auriculas: "retro", tira: "V1", rr: 340, kT: 1.35,
      latidos: periodico(340, [{ p: 40, q: 0, retro: true }]) },

    bav1: { nombre: "Bloqueo AV de primer grado", corto: "BAV 1.er grado", grupo: "bloqueo", latidos: sinusal(800, 300), pr: 300, rr: 800, kT: 1 },
    mobitz1: { nombre: "Bloqueo AV de 2.º grado Mobitz I (Wenckebach)", corto: "Mobitz I", grupo: "bloqueo", kT: 1, bloqueoEn: "nodo",
      latidos: periodico(3200, [{ p: 0, q: 180 }, { p: 800, q: 1060 }, { p: 1600, q: 1910 }, { p: 2400, q: null, bloq: true }]) },
    mobitz2: { nombre: "Bloqueo AV de 2.º grado Mobitz II", corto: "Mobitz II", grupo: "bloqueo", kT: 1, bloqueoEn: "his", rama: "derecha", tipoQRS: "brd",
      latidos: periodico(2400, [{ p: 0, q: 180, tipo: "brd" }, { p: 800, q: 980, tipo: "brd" }, { p: 1600, q: null, bloq: true }]) },
    bav3: { nombre: "Bloqueo AV completo (de tercer grado)", corto: "BAV completo", grupo: "bloqueo", completo: true, rr: 1430, kT: 1,
      latidos: independientes(800, 1430, 300, "normal") },

    brd: { nombre: "Bloqueo de rama derecha", corto: "BRD", grupo: "rama", rama: "derecha", tipoQRS: "brd", tira: "V1", latidos: sinusal(800, 160, "brd"), pr: 160, rr: 800, kT: 1 },
    bri: { nombre: "Bloqueo de rama izquierda", corto: "BRI", grupo: "rama", rama: "izquierda", tipoQRS: "bri", tira: "V1", latidos: sinusal(800, 160, "bri"), pr: 160, rr: 800, kT: 1 },

    ev: { nombre: "Extrasístole ventricular", grupo: "vent", tira: "II", kT: 1,
      latidos: periodico(3200, [{ p: 0, q: 160 }, { p: 800, q: 960 }, { p: null, q: 1350, tipo: "ev" }, { p: 1600, q: null, oculta: true }, { p: 2400, q: 2560 }]) },
    tv: { nombre: "Taquicardia ventricular monomorfa", corto: "TV monomorfa", grupo: "vent", tipoQRS: "tv", tira: "II", rr: 350, kT: 1.4, disociada: true, latidos: independientes(800, 350, 120, "tv") },
    fv: { nombre: "Fibrilación ventricular", corto: "FV", grupo: "vent", ventriculos: "fv", tira: "II", kT: 1, latidos: function () { return []; } },

    iam_inf: { nombre: "IAM inferior con supradesnivel del ST", corto: "IAM inferior", grupo: "isq", latidos: sinusal(800, 160), pr: 160, rr: 800, kT: 1, tira: "III",
      lesion: { dir: unit(frontal(105).x, frontal(105).y, 0), zona: "inferior", arteria: "cd", punto: 0.3 }, vista: "inferior" },
    iam_ant: { nombre: "IAM anterior con supradesnivel del ST", corto: "IAM anterior", grupo: "isq", latidos: sinusal(800, 160), pr: 160, rr: 800, kT: 1, tira: "V2",
      lesion: { dir: unit(0.2, 0.3, 0.93), zona: "anterior", arteria: "tci_da", punto: 0.12 } },

    hk: { nombre: "Hiperkalemia", grupo: "elec", tipoQRS: "hk", hk: true, tira: "V3", latidos: sinusal(800, 220, "hk"), pr: 220, rr: 800, kT: 1 }
  };
  var GRUPOS = [["normal", "ECG normal"], ["supra", "Taquiarritmias supraventriculares"], ["bloqueo", "Bloqueos AV"], ["rama", "Bloqueos de rama"],
    ["vent", "Arritmias ventriculares"], ["isq", "Isquemia"], ["elec", "Electrolitos"]];

  function vector(r, t) {
    var acc = v3(0, 0, 0), ls = r.latidos(t);
    for (var i = 0; i < ls.length; i++) {
      var b = ls[i];
      if (b.p !== null && !b.oculta && t >= b.p - 100 && t < b.p + 200) sumar(acc, b.retro ? P_RETRO : r.hk ? P_HK : P_NORMAL, t - b.p);
      if (b.q !== null && t >= b.q - 100 && t < b.q + 800) {
        var dq = t - b.q, Q = QRS[b.tipo || "normal"];
        sumar(acc, Q.comps, dq);
        sumar(acc, Q.t, dq < 100 ? dq : 100 + (dq - 100) * r.kT);
        if (r.lesion) { var m = 0.28 * meseta(dq, 90, 200, 130); acc.x += m * r.lesion.dir.x; acc.y += m * r.lesion.dir.y; acc.z += m * r.lesion.dir.z; }
      }
    }
    if (r.auriculas === "fa") {
      var f = (0.03 * Math.sin(t * 0.0377) + 0.022 * Math.sin(t * 0.0291 + 1.3) + 0.018 * Math.sin(t * 0.0453 + 0.4)) * (0.7 + 0.3 * Math.sin(t * 0.0021));
      acc.x += f * EJE_FA.x; acc.y += f * EJE_FA.y; acc.z += f * EJE_FA.z;
    }
    if (r.auriculas === "flutter") { // dientes de sierra a 300/min: bajada lenta y subida rápida (vector hacia arriba: negativas en DII, DIII y aVF)
      var ph = ((t % 200) + 200) % 200 / 200, s = ph < 0.72 ? ph / 0.72 : 1 - (ph - 0.72) / 0.28, a = 0.2 * (s - 0.5);
      acc.x += a * EJE_FLUTTER.x; acc.y += a * EJE_FLUTTER.y; acc.z += a * EJE_FLUTTER.z;
    }
    if (r.ventriculos === "fv") {
      var amp = 0.55 + 0.35 * Math.sin(t * 0.0013), g1 = Math.sin(t * 0.034) + 0.6 * Math.sin(t * 0.047 + 1.1) + 0.4 * Math.sin(t * 0.027 + 2.3);
      var d = unit(Math.sin(t * 0.0021), -Math.cos(t * 0.0017), Math.sin(t * 0.0013 + 1));
      acc.x += amp * 0.5 * g1 * d.x; acc.y += amp * 0.5 * g1 * d.y; acc.z += amp * 0.5 * g1 * d.z;
    }
    return acc;
  }
  function senal(r, deriv, t) { var d = DERIV[deriv]; return dot(vector(r, t), d.eje) * d.ganancia; }
  function ultimo(r, t, campo, adelanto) { // último latido cuyo inicio de P o de QRS ya llegó (o llega dentro de "adelanto" ms)
    var b = null; r.latidos(t).forEach(function (x) { if (x[campo] !== null && x[campo] - (adelanto || 0) <= t && (!b || x[campo] > b[campo])) b = x; }); return b;
  }
  function finQRS(tipo) { return QRS[tipo || "normal"].fin; }
  function tIni(r, tipo) { return 100 + (finQRS(tipo) + 72 - 100) / r.kT; }
  function tFin(r, tipo) { return 100 + (finQRS(tipo) + 292 - 100) / r.kT; }

  // Intervalos de cada onda en los latidos que rodean t
  function intervalos(r, onda, t) {
    var out = [], ls = r.latidos(t), qs = [];
    ls.forEach(function (b) { if (b.q !== null) qs.push(b.q); });
    qs.sort(function (a, b) { return a - b; });
    ls.forEach(function (b) {
      if (onda === "P" && b.p !== null && !b.oculta) out.push([b.p, b.p + P_FIN]);
      if (onda === "PR" && b.p !== null && b.q !== null && !b.retro) out.push([b.p, b.q + QRS_INI]);
      if (b.q === null) return;
      var f = finQRS(b.tipo);
      if (onda === "QRS") out.push([b.q + QRS_INI, b.q + f]);
      if (onda === "ST") out.push([b.q + f, b.q + tIni(r, b.tipo)]);
      if (onda === "T") out.push([b.q + tIni(r, b.tipo), b.q + tFin(r, b.tipo)]);
      if (onda === "QT") out.push([b.q + QRS_INI, b.q + tFin(r, b.tipo)]);
    });
    if (onda === "RR") for (var i = 0; i < qs.length - 1; i++) if (qs[i + 1] + 40 <= t + 1) out = [[qs[i] + 40, qs[i + 1] + 40]];
    return out;
  }

  /* ---------- Qué pasa en cada instante ---------- */
  function fase(r, t) {
    if (r.ventriculos === "fv") return "<strong>Fibrilación ventricular</strong>: los ventrículos se activan en parches caóticos y no se contraen. No hay QRS ni pulso: es un <strong>paro cardíaco</strong>.";
    var bp = ultimo(r, t, "p"), bq = ultimo(r, t, "q", 45);
    var dp = bp ? t - bp.p : null, dq = bq ? t - bq.q : null, tq = bq ? bq.tipo : "normal";
    if (dq !== null && dq >= -40 && dq < QRS_INI && CONDUCIDOS[tq]) return "<strong>Haz de His y ramas</strong>: el impulso baja hacia la red de Purkinje (todavía no se ve en el trazado).";
    if (dq !== null && dq >= QRS_INI && dq < finQRS(tq)) {
      if (tq === "ev" || tq === "tv") return "<strong>QRS ancho y raro</strong>: descarga un foco del ventrículo. El impulso no usa el sistema de conducción y avanza lento, de célula a célula.";
      if (tq === "brd") return "<strong>QRS ancho</strong>: la rama derecha no conduce (roja). El ventrículo izquierdo se activa normal, pero el derecho se activa tarde y lento a través del septo: eso es la R' de V1.";
      if (tq === "bri") return "<strong>QRS ancho</strong>: la rama izquierda no conduce (roja). El septo se activa de derecha a izquierda (sin q en V6) y el ventrículo izquierdo se activa tarde y lento.";
      if (tq === "hk") return "<strong>QRS ensanchado</strong>: el potasio alto enlentece la conducción en todo el miocardio.";
      return "<strong>Complejo QRS</strong>: despolarización de los ventrículos; primero el septo, luego la punta y al final las bases.";
    }
    if (r.lesion && dq !== null && dq >= finQRS(tq) && dq < 330) return "<strong>Segmento ST elevado</strong>: la pared isquémica (morado) genera una corriente de lesión que apunta hacia las derivaciones que la miran" + (r.lesion.zona === "inferior" ? " (DII, DIII y aVF); aVL la ve alejarse (infradesnivel especular)." : " (V1–V4).");
    if (r.auriculas === "fa") return "<strong>Fibrilación auricular</strong>: no hay onda P. Frentes desordenados recorren las aurículas y el nódulo AV deja pasar algunos al azar: los QRS son <strong>irregularmente irregulares</strong>.";
    if (r.auriculas === "flutter") return "<strong>Flutter auricular</strong>: un circuito de macrorreentrada gira alrededor de la válvula tricúspide (300 vueltas por minuto). Cada vuelta es una onda F; el nódulo AV deja pasar una de cada dos.";
    if (r.auriculas === "retro") return "<strong>Reentrada nodal</strong>: el impulso gira dentro del nódulo AV. En cada vuelta baja a los ventrículos (QRS angosto) y sube a las aurículas casi al mismo tiempo (P retrógrada escondida al final del QRS).";
    if (bp && bp.bloq && dp < 400) return "<strong>Esta P no conduce</strong>: el impulso se bloquea " + (r.bloqueoEn === "his" ? "<strong>bajo el nódulo AV</strong>, en el sistema His–Purkinje (rojo), sin aviso previo." : "en el <strong>nódulo AV</strong> (rojo), después de que el PR se fue alargando.") + " No hay QRS.";
    if (bp && bp.oculta && dp < 300) return "<strong>Pausa compensadora</strong>: el nódulo sinusal descarga a su hora, pero los ventrículos todavía están refractarios por la extrasístole: esa P queda escondida y no conduce.";
    if (r.disociada) return "<strong>Taquicardia ventricular</strong>: un foco ventricular descarga a 170 lpm. Las aurículas siguen a su ritmo sinusal, sin relación con los QRS (<strong>disociación AV</strong>).";
    if (r.completo && dp !== null && dp < P_FIN) return "<strong>Onda P</strong>: las aurículas se activan con normalidad, pero el impulso <strong>se detiene en el nódulo AV</strong> (rojo): ninguna P conduce.";
    if (r.completo) return "<strong>Disociación AV</strong>: las P (75 lpm) y los QRS (unos 42 lpm, escape desde el haz de His) van cada uno a su ritmo.";
    if (dp !== null && dp < P_FIN) return r.hk ? "<strong>Onda P aplanada</strong>: con el potasio alto, la P se achica y se ensancha." : "<strong>Onda P</strong>: el nódulo sinusal descarga y la despolarización recorre las aurículas.";
    if (bp && bp.q !== null && t < bp.q - 40) return "<strong>Segmento PR</strong>: el impulso se retrasa en el nódulo AV" + (bp.q - bp.p >= 250 ? ", más de lo normal (PR largo)." : ".");
    if (dq !== null && dq >= finQRS(tq) && dq < tIni(r, tq)) return "<strong>Segmento ST</strong>: los ventrículos están despolarizados por completo.";
    if (dq !== null && dq >= tIni(r, tq) && dq < tFin(r, tq)) return r.hk ? "<strong>Onda T picuda</strong>: la repolarización se acelera con el potasio alto; T alta, simétrica y de base estrecha." : "<strong>Onda T</strong>: repolarización de los ventrículos (se van apagando).";
    return "<strong>Diástole</strong>: línea de base hasta la próxima descarga.";
  }

  /* ---------- Cada onda: qué representa, lo normal y lo de cada ECG patológico ---------- */
  var ONDAS = ["P", "PR", "QRS", "ST", "T", "QT", "RR"];
  var NOMBRE = { P: "Onda P", PR: "Intervalo PR", QRS: "Complejo QRS", ST: "Segmento ST", T: "Onda T", QT: "Intervalo QT", RR: "Intervalo RR y frecuencia" };
  var REPRESENTA = {
    P: "La despolarización de las <strong>aurículas</strong>, desde el nódulo sinusal (arriba y a la derecha) hacia abajo y a la izquierda.",
    PR: "Desde el inicio de la P hasta el inicio del QRS: lo que tarda el impulso en ir de las aurículas a los ventrículos. Casi todo es el <strong>retraso en el nódulo AV</strong>.",
    QRS: "La despolarización de los <strong>ventrículos</strong> a través del haz de His, sus ramas y la red de Purkinje: septo, punta y bases.",
    ST: "Los ventrículos <strong>completamente despolarizados</strong>: no hay diferencias de potencial y el trazado queda en la línea de base.",
    T: "La <strong>repolarización</strong> de los ventrículos.",
    QT: "Desde el inicio del QRS hasta el final de la T: toda la <strong>sístole eléctrica</strong> de los ventrículos.",
    RR: "La distancia entre dos QRS: define la <strong>frecuencia ventricular</strong>."
  };
  var NORMAL = {
    P: "Positiva en DI, DII y aVF; negativa en aVR; puede ser bifásica en V1. Dura menos de 120 ms (3 cuadros chicos) y mide menos de 2,5 mm en DII. Una P antes de cada QRS.",
    PR: "<strong>120–200 ms</strong> (3 a 5 cuadros chicos) y constante. Más de 200 ms: bloqueo AV de primer grado. Menos de 120 ms: pensar en preexcitación o ritmo de la unión.",
    QRS: "<strong>Menos de 120 ms</strong> (3 cuadros chicos); con 120 ms o más, bloqueo completo de rama o QRS de origen ventricular. Eje entre −30° y +90°. En V1 predomina la S y en V6 la R; la transición está en V3–V4.",
    ST: "<strong>Isoeléctrico</strong>, a la altura del segmento PR. Un supradesnivel nuevo en el punto J de ≥ 1 mm en 2 derivaciones contiguas (en V2–V3, ≥ 1,5 a 2,5 mm según edad y sexo) es criterio de IAM con supradesnivel.",
    T: "Positiva en DI, DII y V3–V6; negativa en aVR; puede ser negativa en V1 y DIII. Asimétrica: sube lento y baja rápido.",
    QT: "Se corrige por la frecuencia: QTc = QT / √RR (Bazett, RR en segundos). <strong>Prolongado: QTc ≥ 450 ms en hombres y ≥ 460 ms en mujeres</strong>.",
    RR: "Regular. <strong>FC 60–100 lpm</strong> = 300 / cuadros grandes entre dos R (o 1500 / cuadros chicos). Menos de 60: bradicardia; más de 100: taquicardia."
  };
  var SIN = "Sin alteración propia.";
  var HALLAZGO = {
    bradicardia: { RR: "FC de <strong>50 lpm</strong>: bradicardia sinusal (cada QRS tiene su P normal). Puede ser normal en deportistas y durante el sueño; si hay síntomas, buscar fármacos (betabloqueadores, calcioantagonistas no dihidropiridínicos), hipotiroidismo o enfermedad del nódulo sinusal." },
    taquicardia: { RR: "FC de <strong>120 lpm</strong>: taquicardia sinusal (cada QRS tiene su P normal). Casi siempre es una respuesta: fiebre, dolor, hipovolemia, anemia, hipoxemia, TEP, hipertiroidismo o fármacos. Se trata la causa." },
    fa: {
      P: "<strong>No hay ondas P.</strong> La línea de base muestra <strong>ondas f</strong>: oscilaciones finas, irregulares y desordenadas, que se ven mejor en V1 y DII.",
      PR: "<strong>No existe</strong>: sin onda P no hay intervalo PR.",
      QRS: "<strong>Angosto</strong>: los impulsos que cruzan el nódulo AV bajan por el His y las ramas normales. Un QRS ancho en FA obliga a pensar en bloqueo de rama o preexcitación.",
      ST: SIN, T: "Sin alteración propia; puede variar un poco por las ondas f superpuestas.", QT: "Difícil de medir con RR irregular: promediar varios latidos.",
      RR: "<strong>Irregularmente irregular</strong>: no hay dos RR iguales ni un patrón que se repita. El diagnóstico requiere un registro con RR irregular y sin P claras de ≥ 30 s en una derivación, o un ECG de 12 derivaciones (ESC 2024)."
    },
    flutter: {
      P: "<strong>No hay P sino ondas F</strong> en dientes de sierra, a unos 300 por minuto y sin línea isoeléctrica entre ellas: <strong>negativas en DII, DIII y aVF</strong> y positivas en V1 (flutter típico).",
      PR: "No se mide: hay dos ondas F por cada QRS (conducción 2:1).",
      QRS: "<strong>Angosto</strong>: la conducción por debajo del nódulo AV es normal.",
      ST: "Puede quedar deformado por las ondas F.", T: "Una onda F puede quedar escondida dentro de la T: buscarla en DII y V1.", QT: "Difícil de medir por las ondas F.",
      RR: "<strong>Regular a ~150 lpm</strong> con conducción 2:1. Sospechar flutter ante toda taquicardia regular a 150 lpm; las maniobras vagales o la adenosina pueden desenmascarar las ondas F."
    },
    tsv: {
      P: "<strong>No se ve una P antes del QRS.</strong> La P es retrógrada (de abajo hacia arriba) y queda escondida dentro del QRS o justo al final: <strong>pseudo r' en V1</strong> y pseudo S en DII, DIII y aVF.",
      PR: "No se mide: aurículas y ventrículos se activan casi al mismo tiempo desde el nódulo AV.",
      QRS: "<strong>Angosto</strong> (menos de 120 ms), salvo que haya bloqueo de rama o aberrancia.",
      ST: "Puede haber infradesnivel del ST durante la taquicardia, sin que signifique isquemia.", T: SIN, QT: "Corto por la frecuencia alta.",
      RR: "<strong>Regular y rápido</strong> (aquí 176 lpm), de inicio y fin bruscos. En el paciente estable: maniobras vagales y, si no responde, adenosina (ESC 2019)."
    },
    bav1: {
      P: "Normal (ritmo sinusal).", PR: "<strong>Largo (más de 200 ms) y constante</strong>, y <strong>toda P conduce</strong>. El retraso está casi siempre en el nódulo AV.",
      QRS: "Angosto.", ST: SIN, T: SIN, QT: SIN, RR: "Regular. Es un hallazgo de <strong>bajo riesgo</strong>: revisar los fármacos que enlentecen el nódulo AV."
    },
    mobitz1: {
      P: "Normales y regulares; <strong>una de cada cuatro no conduce</strong> (no tiene QRS).",
      PR: "<strong>Se alarga latido a latido</strong> (180 → 260 → 310 ms) hasta que una P no conduce; después de la pausa el PR vuelve a ser corto y el ciclo se repite.",
      QRS: "Angosto: el bloqueo es <strong>nodal</strong>.", ST: SIN, T: SIN, QT: SIN,
      RR: "<strong>Irregular de forma agrupada</strong>: latidos en grupos separados por una pausa. Riesgo <strong>bajo</strong>; puede verse en el IAM inferior."
    },
    mobitz2: {
      P: "Normales y regulares; <strong>una de cada tres no conduce</strong>, sin aviso.",
      PR: "<strong>Constante</strong> en los latidos que conducen (180 ms): no se alarga antes de la P bloqueada. Es lo que lo distingue del Mobitz I.",
      QRS: "<strong>A menudo ancho</strong> (aquí con bloqueo de rama derecha): el bloqueo está bajo el nódulo AV, en el sistema His–Purkinje.", ST: SIN, T: "Opuesta al QRS en V1 por el bloqueo de rama.", QT: SIN,
      RR: "Pausas bruscas. Riesgo <strong>alto</strong>: puede progresar a bloqueo AV completo; tiene indicación de <strong>marcapaso</strong> (ESC 2021). La atropina suele ser ineficaz."
    },
    bav3: {
      P: "<strong>Normales y regulares</strong> (75 lpm), pero ninguna conduce: van a su propio ritmo y a veces quedan escondidas dentro del QRS o la T.",
      PR: "<strong>Cambia en cada latido</strong>: no hay relación entre P y QRS (disociación AV). Es la clave del diagnóstico.",
      QRS: "Ritmo de <strong>escape</strong>, más lento que las P. Angosto si nace en la unión o el haz de His (como aquí); ancho si nace en el ventrículo, que es más lento e inestable.",
      ST: SIN, T: "Sin alteración propia; una P puede deformarla cuando coincide con ella.", QT: "Puede alargarse por la bradicardia.",
      RR: "<strong>Regular y lento</strong> (unos 42 lpm), independiente de las P (75 lpm). Descartadas las causas reversibles, es indicación de <strong>marcapaso</strong> (ESC 2021)."
    },
    brd: {
      P: "Normal (ritmo sinusal).", PR: "Normal.",
      QRS: "<strong>Ancho (120 ms o más)</strong>, con <strong>rsR' en V1–V2</strong> (la R' es mayor que la r) y <strong>S ancha en DI y V6</strong>: la R' es el ventrículo derecho, que se activa tarde y lento.",
      ST: "Puede haber un leve infradesnivel en V1–V3 (secundario).", T: "<strong>Negativa en V1–V2</strong>: es secundaria al bloqueo, no indica isquemia.", QT: "Se alarga por el QRS ancho.",
      RR: "Regular. Un BRD aislado puede verse en personas sanas; si es nuevo, pensar en TEP o cardiopatía, y en Chile también en enfermedad de Chagas."
    },
    bri: {
      P: "Normal (ritmo sinusal).", PR: "Normal.",
      QRS: "<strong>Ancho (120 ms o más)</strong>, con <strong>R ancha con muesca o meseta en DI, aVL, V5 y V6</strong>, <strong>sin q septal</strong> en DI, V5 y V6, y <strong>QS o rS en V1</strong>.",
      ST: "<strong>Opuesto al QRS</strong> (secundario): infradesnivel en V5–V6 y supradesnivel en V1–V3. Por eso el BRI dificulta el diagnóstico de un IAM.", T: "<strong>Opuesta al QRS</strong> en casi todas las derivaciones.", QT: "Se alarga por el QRS ancho.",
      RR: "Regular. Un BRI suele indicar cardiopatía de base: pedir ecocardiograma."
    },
    ev: {
      P: "Las P sinusales siguen a su hora; la que coincide con la extrasístole <strong>queda escondida</strong> en su ST-T y no conduce.",
      PR: "La extrasístole <strong>no tiene P antes</strong>: no hay PR.",
      QRS: "<strong>Prematuro, ancho (120 ms o más) y raro</strong>. Aquí con imagen de bloqueo de rama izquierda y eje inferior: la forma típica de las que nacen en el tracto de salida del ventrículo derecho.",
      ST: "Opuesto al QRS de la extrasístole.", T: "<strong>Opuesta al QRS</strong> de la extrasístole.", QT: "Se mide en los latidos sinusales.",
      RR: "Irregular por el latido prematuro, seguido de una <strong>pausa compensadora completa</strong>: el RR que rodea a la extrasístole mide el doble del RR sinusal."
    },
    tv: {
      P: "Las P sinusales siguen a su ritmo (75 lpm), <strong>sin relación con los QRS</strong> (disociación AV); a veces se ven entre los complejos.",
      PR: "No existe: disociación AV.",
      QRS: "<strong>Ancho (120 ms o más), regular y monomorfo</strong> (todos iguales). Disociación AV, latidos de captura o de fusión confirman que es TV.",
      ST: "Deformado por el QRS ancho.", T: "Opuesta al QRS.", QT: "No se mide en la TV.",
      RR: "<strong>Regular y rápido</strong> (aquí 171 lpm). Ante una taquicardia de QRS ancho y regular, <strong>tratar como TV</strong> salvo prueba en contrario, sobre todo con cardiopatía o infarto previo."
    },
    fv: {
      P: "No se identifican ondas P.", PR: "No existe.", QRS: "<strong>No hay QRS</strong>: solo ondas caóticas, de forma, amplitud y frecuencia variables.", ST: "No existe.", T: "No existe.", QT: "No existe.",
      RR: "<strong>No hay ritmo organizado ni pulso: paro cardíaco.</strong> Desfibrilar de inmediato y seguir con 2 minutos de RCP."
    },
    iam_inf: {
      P: "Normal (ritmo sinusal).", PR: "Normal.", QRS: "Todavía <strong>sin ondas Q</strong>: en las primeras horas no se han formado. Las Q patológicas en DII, DIII y aVF aparecen con la necrosis.",
      ST: "<strong>Supradesnivel en DII, DIII y aVF</strong> (cara inferior) con <strong>infradesnivel especular en aVL</strong> y DI. Criterio: supradesnivel nuevo en el punto J ≥ 1 mm en 2 derivaciones contiguas (definición universal 2018). Registrar <strong>V3R–V4R</strong> para buscar infarto del ventrículo derecho. Es una emergencia de reperfusión.",
      T: "Positiva; en la fase precoz puede ser alta y ancha (hiperaguda).", QT: SIN, RR: "Regular (ritmo sinusal)."
    },
    iam_ant: {
      P: "Normal (ritmo sinusal).", PR: "Normal.", QRS: "Todavía <strong>sin ondas Q</strong>; aparecen en V1–V4 con la necrosis.",
      ST: "<strong>Supradesnivel en V1–V4</strong> (cara anterior y septal): oclusión de la <strong>descendente anterior</strong>. En V2–V3 el criterio es ≥ 2 mm en hombres ≥ 40 años, ≥ 2,5 mm en hombres menores de 40 y ≥ 1,5 mm en mujeres; en las demás derivaciones, ≥ 1 mm. Puede haber infradesnivel especular en las inferiores. Emergencia de reperfusión.",
      T: "Positiva; en la fase precoz puede ser alta y ancha (hiperaguda).", QT: SIN, RR: "Regular (ritmo sinusal)."
    },
    hk: {
      P: "<strong>Aplanada y ancha</strong>: con potasio más alto puede desaparecer.", PR: "<strong>Largo</strong> (aquí 220 ms).",
      QRS: "<strong>Ensanchado</strong>. El QRS ancho es uno de los hallazgos que se asocian a arritmias y paro: emergencia.",
      ST: "Puede acortarse y fundirse con la T.",
      T: "<strong>Alta, picuda, simétrica y de base estrecha</strong>, mejor vista en V2–V4. Solo ~ 30–35 % de los pacientes con K > 6,0 la tienen: un ECG normal no descarta una hiperkalemia grave.",
      QT: "Puede acortarse.",
      RR: "Regular aquí; la bradicardia, los bloqueos y los ritmos de escape indican gravedad. Si hay cambios en el ECG: <strong>gluconato de calcio</strong> EV de inmediato. La secuencia puede seguir hacia un patrón sinusoidal, FV o asistolia."
    }
  };
  function medida(r, onda) {
    var tipo = r.tipoQRS || "normal";
    if (onda === "PR" && r.pr && !r.completo) return "Aquí: <strong>" + r.pr + " ms</strong>.";
    if (onda === "QRS" && r.ventriculos !== "fv") return "Aquí: <strong>" + (finQRS(tipo) - QRS_INI) + " ms</strong>.";
    if (onda === "QT" && r.rr && !r.completo && !r.auriculas && !r.disociada) { var qt = Math.round(tFin(r, tipo) - QRS_INI); return "Aquí: QT <strong>" + qt + " ms</strong>, QTc <strong>" + Math.round(qt / Math.sqrt(r.rr / 1000)) + " ms</strong>."; }
    if (onda === "RR" && r.rr) return "Aquí: RR <strong>" + r.rr + " ms</strong> = <strong>" + Math.round(60000 / r.rr) + " lpm</strong>.";
    return "";
  }
  function detalle(clave, r, onda) {
    var h = HALLAZGO[clave] && HALLAZGO[clave][onda], m = medida(r, onda);
    var out = "<h4>" + NOMBRE[onda] + "</h4><p class='ecg-rep'><strong>Qué representa.</strong> " + REPRESENTA[onda] + "</p>";
    if (r.grupo !== "normal") {
      out += "<p class='ecg-pato'><strong>En este ECG.</strong> " + (h || SIN) + (m ? " " + m : "") + "</p>";
      out += "<p class='ecg-normal-breve'><strong>Lo normal.</strong> " + NORMAL[onda] + "</p>";
    } else {
      out += "<p class='ecg-norm'><strong>Valores normales.</strong> " + NORMAL[onda] + (m ? " " + m : "") + "</p>";
      if (h) out += "<p class='ecg-pato'><strong>En este ECG.</strong> " + h + "</p>";
    }
    return out;
  }

  /* ---------- Papel del ECG (25 mm/s, 10 mm/mV) ---------- */
  function css(n, d) { var v = getComputedStyle(document.body).getPropertyValue(n).trim(); return v || d; }
  function oscuro() { return document.body.getAttribute("data-md-color-scheme") === "slate"; }
  function papel(ctx, w, h, mm) {
    var fino = oscuro() ? "rgba(232,140,140,0.14)" : "rgba(214,80,80,0.16)", grueso = oscuro() ? "rgba(232,140,140,0.32)" : "rgba(214,80,80,0.36)";
    ctx.clearRect(0, 0, w, h);
    for (var i = 0, x = 0; x <= w; i++, x = i * mm) { ctx.strokeStyle = i % 5 ? fino : grueso; ctx.lineWidth = i % 5 ? 0.5 : 1; ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, h); ctx.stroke(); }
    for (var j = 0, y = 0; y <= h; j++, y = j * mm) { ctx.strokeStyle = j % 5 ? fino : grueso; ctx.lineWidth = j % 5 ? 0.5 : 1; ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(w, Math.round(y) + 0.5); ctx.stroke(); }
  }
  function ajustar(canvas) {
    var r = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(10, Math.round(r.width)), h = Math.max(10, Math.round(r.height));
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
    var ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }
  function trazo(canvas, r, deriv, t0, segundos, grosor) { // tira estática (miniaturas y 12 derivaciones)
    var c = ajustar(canvas), mm = c.w / (segundos * 25);
    papel(c.ctx, c.w, c.h, mm);
    c.ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); c.ctx.lineWidth = grosor || 1.2; c.ctx.beginPath();
    var amp = Math.min(10 * mm, c.h / 3.4);
    for (var x = 0; x <= c.w; x++) {
      var y = c.h * 0.56 - senal(r, deriv, t0 + (x / mm) * 40) * amp;
      if (x) c.ctx.lineTo(x, y); else c.ctx.moveTo(x, y);
    }
    c.ctx.stroke();
  }

  /* ---------- Corazón 3D ---------- */
  function decodificar(b64, Tipo) {
    var s = atob(b64), u = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return new Tipo(u.buffer);
  }

  function corazon(THREE, cont, M) {
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return null; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    cont.appendChild(renderer.domElement);
    var escena = new THREE.Scene(), camara = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camara.position.set(0, 0, 27);

    // Entorno para los reflejos del tejido húmedo: una "sala" con paneles de luz, convertida en mapa de entorno
    var sala = new THREE.Scene();
    sala.add(new THREE.Mesh(new THREE.SphereGeometry(30, 24, 16), new THREE.MeshBasicMaterial({ color: 0x8a7a76, side: THREE.BackSide })));
    [[0, 14, 8, 16, 0xffffff], [-14, 4, 6, 8, 0xfff0e6], [12, -2, -6, 7, 0xe6eeff]].forEach(function (l) {
      var m = new THREE.Mesh(new THREE.PlaneGeometry(l[3], l[3] * 0.6), new THREE.MeshBasicMaterial({ color: l[4], side: THREE.DoubleSide }));
      m.position.set(l[0], l[1], l[2]); m.lookAt(0, 0, 0); sala.add(m);
    });
    escena.environment = new THREE.PMREMGenerator(renderer).fromScene(sala, 0.04).texture;
    escena.add(new THREE.HemisphereLight(0xfff4ee, 0x5a3a32, 0.35));
    var luz = new THREE.DirectionalLight(0xffffff, 1.1); luz.position.set(-5, 7, 10); escena.add(luz);
    var contra = new THREE.DirectionalLight(0xffd9cc, 0.55); contra.position.set(6, -2, -8); escena.add(contra);
    var grupo = new THREE.Group(); escena.add(grupo); grupo.position.set(-0.3, -1.0, 0);

    var q = decodificar(M.pos, Int16Array), n = q.length / 3, pos = new Float32Array(q.length), i;
    for (i = 0; i < q.length; i++) pos[i] = q[i] / M.escala;
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setIndex(new THREE.BufferAttribute(decodificar(M.idx, M.idx32 ? Uint32Array : Uint16Array), 1));
    geo.computeVertexNormals();
    var colores = new Float32Array(n * 3); geo.setAttribute("color", new THREE.BufferAttribute(colores, 3));
    var region = decodificar(M.region, Uint8Array), grasa = decodificar(M.grasa, Uint8Array), ao = decodificar(M.ao, Uint8Array);
    var mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.42, metalness: 0, clearcoat: 0.75, clearcoatRoughness: 0.22,
      sheen: 0.5, sheenColor: new THREE.Color(0xff9a88), sheenRoughness: 0.55, envMapIntensity: 0.55, transparent: true, opacity: 1 });
    grupo.add(new THREE.Mesh(geo, mat));

    var Col = function (r, g, b) { return new THREE.Color(r, g, b).convertSRGBToLinear(); };
    var MIO = Col(0.56, 0.16, 0.14), MIO_A = Col(0.64, 0.24, 0.21), GRASA = Col(0.93, 0.8, 0.5), ARTERIA = Col(0.88, 0.72, 0.66), VENA = Col(0.36, 0.4, 0.62);
    var FRENTE = Col(1, 0.93, 0.42), DESP = Col(0.98, 0.52, 0.3), CARA = Col(0.32, 0.62, 0.8), ISQ = Col(0.4, 0.18, 0.42);
    var base = new Float32Array(n * 3), tmp = new THREE.Color();
    for (i = 0; i < n; i++) {
      var rg = region[i], g = grasa[i] / 255, o = 0.35 + 0.65 * ao[i] / 255;
      tmp.copy(rg <= 1 ? MIO : rg <= 3 ? MIO_A : rg === 4 ? ARTERIA : VENA);
      if (rg <= 3) tmp.lerp(GRASA, 0.9 * g);
      base[i * 3] = tmp.r * o; base[i * 3 + 1] = tmp.g * o; base[i * 3 + 2] = tmp.b * o;
    }

    // Arterias coronarias y venas cardíacas
    var vasos = {};
    function tubo(k, puntos, radio, color) {
      var curva = new THREE.CatmullRomCurve3(puntos.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 90, radio, 10, false), new THREE.MeshPhysicalMaterial({ color: color, roughness: 0.35, clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 0.6 }));
      grupo.add(m); vasos[k] = { malla: m, curva: curva, color: color };
    }
    Object.keys(M.arterias).forEach(function (k) { tubo(k, M.arterias[k], k === "cd" || k === "tci_da" || k === "cx" ? 0.13 : 0.085, 0xb3302a); });
    Object.keys(M.venas).forEach(function (k) { tubo(k, M.venas[k], k === "vcm" ? 0.12 : 0.08, 0x3f4f86); });
    var oclusion = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), new THREE.MeshBasicMaterial({ color: 0x111111 })); oclusion.visible = false; grupo.add(oclusion);

    // Sistema de conducción, dibujado siempre encima (como en una radiografía). Auricular: ms desde la P; resto: ms desde el QRS.
    var SA = new THREE.Vector3(-2.25, 2.55, 0.45), NAV = new THREE.Vector3(-1.0, 0.25, -0.15), HIS = new THREE.Vector3(-0.5, -0.35, 0.15);
    var AZUL = 0x7fd3e0, ACT = 0xffd23a, ROJO = 0xff3b30, vias = [];
    function via(puntos, t0, t1, tipo, r, lado) {
      var curva = new THREE.CatmullRomCurve3(puntos.map(function (p) { return p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 40, r || 0.07, 8, false), new THREE.MeshBasicMaterial({ color: AZUL, depthTest: false, transparent: true, opacity: 0.9 }));
      m.renderOrder = 10; grupo.add(m); vias.push({ malla: m, curva: curva, t0: t0, t1: t1, tipo: tipo, lado: lado });
    }
    via([SA, [-1.9, 1.6, 0.35], [-1.4, 0.9, 0.1], NAV], 0, 35, "auricular");
    via([SA, [-1.1, 2.6, -0.4], [0.2, 2.45, -1.1], [1.0, 2.2, -1.5]], 0, 45, "auricular", 0.05);
    via([NAV, HIS], -40, -28, "his", 0.09);
    via([HIS, [0.25, -1.35, 0.2], [1.3, -2.5, 0.6], [2.35, -3.25, 0.8]], -28, -5, "rama", 0.07, "izquierda");
    via([HIS, [-0.5, -1.35, 0.85], [0.2, -2.4, 1.4], [1.1, -3.05, 1.7]], -28, -3, "rama", 0.07, "derecha");
    [[[2.35, -3.25, 0.8], [2.8, -1.8, 1.5], [2.4, 0.0, 1.4], "izquierda"], [[2.35, -3.25, 0.8], [3.0, -2.0, 0.0], [2.7, -0.3, -0.9], "izquierda"],
      [[2.35, -3.25, 0.8], [1.4, -2.3, -0.8], [0.8, -0.6, -1.3], "izquierda"], [[1.1, -3.05, 1.7], [0.4, -1.8, 2.1], [-0.5, -0.4, 1.9], "derecha"],
      [[1.1, -3.05, 1.7], [-0.6, -2.1, 1.5], [-1.6, -0.7, 1.0], "derecha"]].forEach(function (p) { via(p.slice(0, 3), -5, 18, "purkinje", 0.04, p[3]); });
    function nodo(p, r) { var m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), new THREE.MeshBasicMaterial({ color: AZUL, depthTest: false, transparent: true })); m.renderOrder = 11; m.position.copy(p); grupo.add(m); return m; }
    var nodoSA = nodo(SA, 0.22), nodoAV = nodo(NAV, 0.2);
    var pulso = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false })); pulso.renderOrder = 12; grupo.add(pulso);

    // Mapas de activación de cada vértice (ms desde el inicio del QRS) según de dónde parte el impulso
    var nor = geo.attributes.normal, p = new THREE.Vector3();
    var P_SEPTO_I = new THREE.Vector3(0.1, -1.0, 0.3), P_APEX_I = new THREE.Vector3(2.0, -2.8, 0.7), P_APEX_D = new THREE.Vector3(0.8, -2.6, 1.6), P_SEPTO_D = new THREE.Vector3(-0.3, -1.0, 0.8);
    var P_TSVD = new THREE.Vector3(-0.5, 0.9, 1.7), P_INFLAT = new THREE.Vector3(2.4, -2.2, -0.9);
    function mapa(fuentes, finMs, lento) { // fuentes: [punto, retraso en cm]; lento: [región, factor de lentitud]
      var a = new Float32Array(n), max = 0;
      for (var i = 0; i < n; i++) {
        if (region[i] > 1) { a[i] = -1; continue; }
        p.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
        var m = 1e9, vel = lento && lento[0] === region[i] ? lento[1] : 1;
        for (var k = 0; k < fuentes.length; k++) m = Math.min(m, fuentes[k][1] + p.distanceTo(fuentes[k][0]) * vel);
        a[i] = m; max = Math.max(max, m);
      }
      for (i = 0; i < n; i++) if (a[i] >= 0) a[i] = a[i] / max * (finMs - 8);
      return a;
    }
    var MAPAS = {
      normal: mapa([[P_SEPTO_I, 0], [P_APEX_I, 0.5], [P_APEX_D, 0.6]], 88),
      hk: mapa([[P_SEPTO_I, 0], [P_APEX_I, 0.5], [P_APEX_D, 0.6]], 118),
      brd: mapa([[P_SEPTO_I, 0], [P_APEX_I, 0.5], [P_SEPTO_D, 2.2]], 140, [1, 2.4]),
      bri: mapa([[P_APEX_D, 0], [P_SEPTO_D, 0.3], [P_SEPTO_I, 1.6]], 150, [0, 2.4]),
      ev: mapa([[P_TSVD, 0]], 150), tv: mapa([[P_INFLAT, 0]], 160)
    };
    var actA = new Float32Array(n), actRetro = new Float32Array(n), angulo = new Float32Array(n), maxA = 0, maxR = 0;
    var CENTRO_TRI = new THREE.Vector3(-1.6, 0.4, 0.6); // centro aproximado del anillo tricuspídeo
    for (i = 0; i < n; i++) {
      if (region[i] !== 2 && region[i] !== 3) continue;
      p.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      actA[i] = p.distanceTo(SA); maxA = Math.max(maxA, actA[i]);
      actRetro[i] = p.distanceTo(NAV); maxR = Math.max(maxR, actRetro[i]);
      angulo[i] = region[i] === 2 ? (Math.atan2(p.y - CENTRO_TRI.y, p.z - CENTRO_TRI.z) + Math.PI) / (2 * Math.PI) : -1;
    }
    for (i = 0; i < n; i++) if (region[i] === 2 || region[i] === 3) { actA[i] = actA[i] / maxA * (P_FIN - 8); actRetro[i] = actRetro[i] / maxR * 70; }
    var zona = { inferior: new Float32Array(n), anterior: new Float32Array(n) };
    for (i = 0; i < n; i++) {
      if (region[i] > 1) continue;
      var y = pos[i * 3 + 1];
      zona.inferior[i] = Math.max(0, Math.min(1, (-nor.getY(i) - 0.2) / 0.3)) * (y < -0.2 ? 1 : 0);
      zona.anterior[i] = Math.max(0, Math.min(1, (nor.getZ(i) - 0.35) / 0.35)) * (y < 0.8 ? 1 : 0) * (pos[i * 3] > -0.6 ? 1 : 0);
    }

    var centro = new THREE.Vector3(0.4, -0.8, 0.3), flecha = null, ojo = null, cara = new Float32Array(n);
    function marcarDerivacion(nombre) {
      var e = DERIV[nombre].eje, dir = new THREE.Vector3(e.x, e.y, e.z).normalize();
      if (flecha) grupo.remove(flecha);
      if (ojo) grupo.remove(ojo);
      flecha = new THREE.ArrowHelper(dir, centro, 6.4, 0x1d5a66, 0.7, 0.4); grupo.add(flecha);
      flecha.line.material.depthTest = false; flecha.cone.material.depthTest = false; flecha.renderOrder = 13;
      ojo = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 14), new THREE.MeshBasicMaterial({ color: 0x1d5a66 }));
      ojo.position.copy(centro).addScaledVector(dir, 6.8); grupo.add(ojo);
      for (var i = 0; i < n; i++) {
        if (region[i] > 1 || nombre === "aVR") { cara[i] = 0; continue; }
        p.set(pos[i * 3] - centro.x, pos[i * 3 + 1] - centro.y, pos[i * 3 + 2] - centro.z).normalize();
        cara[i] = Math.max(0, (p.dot(dir) - 0.45) / 0.55);
      }
    }
    function caos(i, t, k) { // frentes desordenados (FA en las aurículas, FV en los ventrículos)
      var x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
      var s = Math.sin(x * 2.1 + y * 1.3 - t * 0.034 * k) + Math.sin(-x * 1.4 + z * 2.3 - t * 0.029 * k + 1.7) + Math.sin(y * 2.6 - z * 1.1 - t * 0.041 * k + 0.6);
      return Math.max(0, (s - 1.2) / 1.8);
    }
    function brillo(d, dur, fin) { // [mezcla con el frente de activación, mezcla con el color despolarizado], o null en reposo
      if (d < 0 || d >= fin) return null;
      if (d < 20) return [1 - d / 40, 0];
      if (d < dur) return [0, 0.55];
      return [0, 0.55 * (1 - (d - dur) / (fin - dur))];
    }

    function actualizar(r, t) {
      var bp = ultimo(r, t, "p"), bq = ultimo(r, t, "q", 45), dp = bp ? t - bp.p : null, dq = bq ? t - bq.q : null, tipo = bq ? bq.tipo : "normal";
      var actV = MAPAS[tipo] || MAPAS.normal, vDesp = tIni(r, tipo) + 30, vFin = tFin(r, tipo), lesion = r.lesion ? zona[r.lesion.zona] : null;
      var aMapa = bp && bp.retro ? actRetro : actA;
      for (var i = 0; i < n; i++) {
        var j = i * 3, rg = region[i], b = null;
        tmp.setRGB(base[j], base[j + 1], base[j + 2]);
        if (cara[i] > 0) tmp.lerp(CARA, 0.7 * cara[i]);
        if (rg <= 1) {
          if (r.ventriculos === "fv") { var f = caos(i, t, 2.2); if (f > 0) tmp.lerp(FRENTE, 0.85 * f); }
          else if (dq !== null) b = brillo(dq - actV[i], vDesp - actV[i], vFin - actV[i]);
        } else if (rg <= 3) {
          if (r.auriculas === "fa") { var fa = caos(i, t, 1); if (fa > 0) tmp.lerp(FRENTE, 0.8 * fa); }
          else if (r.auriculas === "flutter") {
            var ph = rg === 2 ? ((t / 200 - angulo[i]) % 1 + 1) % 1 : ((t - 60 - actA[i]) % 200 + 200) % 200 / 200;
            if (ph < 0.18) tmp.lerp(FRENTE, 1 - ph / 0.18); else if (ph < 0.55) tmp.lerp(DESP, 0.4);
          } else if (dp !== null) b = brillo(dp - aMapa[i], 110, 240);
        }
        if (b) { if (b[0]) tmp.lerp(FRENTE, b[0]); else if (b[1]) tmp.lerp(DESP, b[1]); }
        if (lesion && lesion[i] > 0) tmp.lerp(ISQ, 0.85 * lesion[i]);
        colores[j] = tmp.r; colores[j + 1] = tmp.g; colores[j + 2] = tmp.b;
      }
      geo.attributes.color.needsUpdate = true;

      // Conducción: lo que se enciende es lo que está conduciendo en ese instante
      var conducido = bq && CONDUCIDOS[tipo] && r.ventriculos !== "fv", activo = null, sinusalP = !r.auriculas && bp && !bp.retro;
      vias.forEach(function (v) {
        var on = false, ref = v.tipo === "auricular" ? dp : dq, bloqueada = r.rama && v.lado === r.rama;
        if (v.tipo === "auricular") {
          if (r.auriculas === "fa" || r.auriculas === "flutter") on = Math.sin(t * 0.05 + v.t1) > 0.3;
          else on = sinusalP && ref >= v.t0 && ref <= v.t1 + 25;
        } else on = conducido && !bloqueada && ref !== null && ref >= v.t0 && ref <= v.t1 + 25;
        var rojo = bloqueada || (v.tipo === "his" && r.bloqueoEn === "his" && bp && bp.bloq && dp < 400);
        v.malla.material.color.setHex(rojo ? ROJO : on ? ACT : AZUL);
        if (on && ref >= v.t0 && ref <= v.t1 && v.tipo !== "purkinje" && !(v.tipo === "auricular" && r.auriculas)) activo = activo && activo.v.tipo !== "auricular" ? activo : { v: v, ref: ref };
      });
      nodoSA.material.color.setHex(sinusalP && dp < 30 ? ACT : AZUL);
      var enPR = sinusalP && !bp.bloq && bp.q !== null && dp >= 30 && t < bp.q - 40;
      var avBloq = (r.completo && dp !== null && dp >= 30 && dp < 260) || (r.bloqueoEn === "nodo" && bp && bp.bloq && dp >= 30 && dp < 400);
      var avOn = r.auriculas === "fa" || r.auriculas === "flutter" ? Math.sin(t * 0.07) > 0.2 : r.auriculas === "retro" || enPR;
      nodoAV.material.color.setHex(avBloq ? ROJO : avOn ? ACT : AZUL);
      nodoAV.scale.setScalar(avBloq ? 1.5 : r.auriculas === "retro" ? 1.25 + 0.2 * Math.sin(t * 0.0185) : 1);
      if (activo) { pulso.visible = true; pulso.position.copy(activo.v.curva.getPointAt(Math.max(0, Math.min(1, (activo.ref - activo.v.t0) / (activo.v.t1 - activo.v.t0))))); }
      else if (r.auriculas === "retro") { var an = t * 0.0185; pulso.visible = true; pulso.position.set(NAV.x + 0.35 * Math.cos(an), NAV.y + 0.35 * Math.sin(an), NAV.z); }
      else if (enPR && dp >= 35) { pulso.visible = true; pulso.position.copy(NAV); }
      else pulso.visible = false;
      // Isquemia: arteria ocluida en morado y punto negro en la oclusión
      Object.keys(vasos).forEach(function (k) { vasos[k].malla.material.color.setHex(r.lesion && k === r.lesion.arteria ? 0x6a1d6e : vasos[k].color); });
      oclusion.visible = !!r.lesion;
      if (r.lesion) oclusion.position.copy(vasos[r.lesion.arteria].curva.getPointAt(r.lesion.punto));
    }

    var ETIQ = [["Nódulo sinusal", SA], ["Nódulo AV", NAV], ["Haz de His", HIS], ["Aurícula derecha", new THREE.Vector3(-3.9, 1.0, 0.6)],
      ["Aurícula izquierda", new THREE.Vector3(2.7, 2.2, -0.9)], ["Ventrículo derecho", new THREE.Vector3(-2.6, -1.3, 2.0)],
      ["Ventrículo izquierdo", new THREE.Vector3(3.4, -1.5, 0.3)], ["Aorta", new THREE.Vector3(-0.7, 6.2, 0.3)], ["Arteria pulmonar", new THREE.Vector3(1.3, 3.9, 1.2)],
      ["Vena cava superior", new THREE.Vector3(-4.6, 4.3, -0.2)], ["Coronaria derecha", null, "cd", 0.45], ["Descendente anterior", null, "tci_da", 0.75], ["Circunfleja", null, "cx", 0.6]];
    var capa = document.createElement("div"); capa.className = "ecg-etiquetas"; cont.appendChild(capa);
    var etiquetas = ETIQ.map(function (e) { var d = document.createElement("span"); d.textContent = e[0]; capa.appendChild(d); return { el: d, p: e[1] || vasos[e[2]].curva.getPointAt(e[3]) }; });

    var ancho = 0, alto = 0, giroObjetivo = null;
    function render() {
      var w = cont.clientWidth, h = cont.clientHeight;
      if (w !== ancho || h !== alto) { ancho = w; alto = h; renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix(); camara.position.z = w < h ? 34 : 27; }
      if (giroObjetivo) { // transición suave entre vistas
        grupo.rotation.x += (giroObjetivo[0] - grupo.rotation.x) * 0.12; grupo.rotation.y += (giroObjetivo[1] - grupo.rotation.y) * 0.12;
        if (Math.abs(giroObjetivo[0] - grupo.rotation.x) + Math.abs(giroObjetivo[1] - grupo.rotation.y) < 0.002) giroObjetivo = null;
      }
      renderer.render(escena, camara);
      if (!capa.hidden) {
        var v = new THREE.Vector3();
        etiquetas.forEach(function (e) {
          v.copy(e.p); grupo.localToWorld(v); v.project(camara);
          var x = Math.max(0, Math.min(Math.round((v.x + 1) / 2 * w), w - e.el.offsetWidth - 8));
          e.el.style.transform = "translate(" + x + "px," + Math.round((1 - v.y) / 2 * h) + "px)";
        });
      }
    }
    var arrastre = null;
    renderer.domElement.addEventListener("pointerdown", function (ev) { giroObjetivo = null; arrastre = { x: ev.clientX, y: ev.clientY, ry: grupo.rotation.y, rx: grupo.rotation.x, tipo: ev.pointerType }; });
    window.addEventListener("pointermove", function (ev) {
      if (!arrastre) return;
      grupo.rotation.y = arrastre.ry + (ev.clientX - arrastre.x) * 0.012;
      if (arrastre.tipo === "mouse") grupo.rotation.x = Math.max(-1.2, Math.min(1.2, arrastre.rx + (ev.clientY - arrastre.y) * 0.012));
    });
    window.addEventListener("pointerup", function () { arrastre = null; });
    window.addEventListener("pointercancel", function () { arrastre = null; });

    return {
      actualizar: actualizar, render: render, marcarDerivacion: marcarDerivacion,
      nombres: function (si) { capa.hidden = !si; },
      transparente: function (si) { mat.opacity = si ? 0.42 : 1; mat.depthWrite = !si; mat.needsUpdate = true; },
      vista: function (rx, ry, inmediato) { if (inmediato) { grupo.rotation.set(rx, ry, 0); giroObjetivo = null; } else giroObjetivo = [rx || 0, ry || 0]; }
    };
  }

  /* ---------- Página ---------- */
  function iniciar() {
    var raiz = document.getElementById("atlas-ecg");
    if (!raiz || raiz.getAttribute("data-lf") === "1") return;
    raiz.setAttribute("data-lf", "1");
    var clave = "sinusal", ritmo = RITMOS[clave], deriv = "II", onda = null, t = 0;
    var $ = function (s) { return raiz.querySelector(s); };
    var vista = $(".ecg-3d"), tira = $(".ecg-tira canvas"), rotulo = $(".ecg-tira-rotulo"), textoFase = $(".ecg-fase"), textoCara = $(".ecg-cara");
    var titulo = $(".ecg-ritmo"), claves = $(".ecg-claves"), boton = $("[data-accion=reproducir]"), velocidad = $("select[name=velocidad]");
    var grilla = $(".ecg-12"), cajaOndas = $(".ecg-ondas"), cajaDetalle = $(".ecg-detalle"), selDeriv = $("select[name=derivacion]"), selVista = $("select[name=vista]");
    var selRitmo = $("select[name=ritmo]"), menu = $(".ecg-menu"), resumen = $(".ecg-resumen");
    var VISTAS = { frontal: [0, 0], izquierda: [0, -1.2], inferior: [-0.8, 0], posterior: [0, Math.PI] };
    var ultimoReloj = null, corriendo = !window.matchMedia("(prefers-reduced-motion: reduce)").matches, visible = true;

    var heart = window.THREE && window.LF_CORAZON ? corazon(window.THREE, vista, window.LF_CORAZON) : null;
    if (!heart) { vista.classList.add("ecg-sin-3d"); vista.innerHTML = "<p>Este navegador no puede mostrar el corazón en 3D. El trazado funciona igual.</p>"; }

    // Menú de ritmos: pestañas Normal / Patológicos, con los patológicos agrupados por tipo. En el celular, una lista desplegable.
    var pestanas = raiz.querySelectorAll(".ecg-pestanas button");
    GRUPOS.forEach(function (g) {
      var caja = document.createElement("div"); caja.className = "ecg-grupo"; caja.setAttribute("data-grupo", g[0] === "normal" ? "normal" : "patologico");
      caja.innerHTML = g[0] === "normal" ? "" : "<span>" + g[1] + "</span>";
      var og = document.createElement("optgroup"); og.label = g[1];
      Object.keys(RITMOS).forEach(function (k) {
        if (RITMOS[k].grupo !== g[0]) return;
        var b = document.createElement("button"); b.type = "button"; b.setAttribute("data-ritmo", k); b.textContent = RITMOS[k].corto || RITMOS[k].nombre;
        b.addEventListener("click", function () { elegirRitmo(k); }); caja.appendChild(b);
        var o = document.createElement("option"); o.value = k; o.textContent = RITMOS[k].nombre; og.appendChild(o);
      });
      menu.appendChild(caja); selRitmo.appendChild(og);
    });
    selRitmo.addEventListener("change", function () { elegirRitmo(selRitmo.value); });
    function mostrarGrupo(g) {
      pestanas.forEach(function (b) { var s = b.getAttribute("data-grupo") === g; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-selected", s); });
      menu.querySelectorAll(".ecg-grupo").forEach(function (c) { c.hidden = c.getAttribute("data-grupo") !== g; });
    }
    pestanas.forEach(function (b) { b.addEventListener("click", function () { var g = b.getAttribute("data-grupo"); mostrarGrupo(g); elegirRitmo(g === "normal" ? "sinusal" : "fa"); }); });

    // 12 derivaciones y lista de derivaciones de la tira
    var minis = ORDEN.map(function (nm) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-mini"; b.setAttribute("data-deriv", nm);
      b.innerHTML = "<span>" + nm + "</span><canvas></canvas>"; grilla.appendChild(b);
      b.addEventListener("click", function () { elegirDeriv(nm); });
      return b;
    });
    Object.keys(DERIV).forEach(function (nm) { var o = document.createElement("option"); o.value = nm; o.textContent = nm; selDeriv.appendChild(o); });
    selDeriv.addEventListener("change", function () { elegirDeriv(selDeriv.value); });
    function dibujarMinis() { if (grilla.offsetParent) minis.forEach(function (b) { trazo(b.querySelector("canvas"), ritmo, b.getAttribute("data-deriv"), 4000, 2.5); }); }
    $(".ecg-doce").addEventListener("toggle", dibujarMinis);
    function elegirDeriv(nm) {
      deriv = nm; selDeriv.value = nm;
      minis.forEach(function (b) { var s = b.getAttribute("data-deriv") === nm; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-pressed", s); });
      rotulo.textContent = nm;
      var c = DERIV[nm].cara;
      textoCara.innerHTML = c ? "<strong>" + nm + "</strong> mira la cara <strong>" + c + "</strong> (en azul). La flecha marca su polo positivo: lo que se acerca se dibuja hacia arriba; lo que se aleja, hacia abajo."
        : "<strong>aVR</strong> mira el corazón desde el hombro derecho, hacia su cavidad. En el ritmo sinusal casi todo se aleja de ella: P, QRS y T son <strong>negativos</strong>.";
      if (heart) heart.marcarDerivacion(nm);
    }

    // Ondas y segmentos: se marcan en el trazado, el corazón se detiene en ese momento y se abre la explicación
    var botonesOnda = ONDAS.map(function (o) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-onda"; b.textContent = o; b.setAttribute("data-onda", o);
      b.setAttribute("aria-pressed", "false"); cajaOndas.appendChild(b);
      b.addEventListener("click", function () { elegirOnda(onda === o ? null : o); });
      return b;
    });
    function elegirOnda(o) {
      onda = o;
      botonesOnda.forEach(function (b) { var s = b.getAttribute("data-onda") === o; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-pressed", s); });
      if (!o) { cajaDetalle.hidden = true; return; }
      cajaDetalle.innerHTML = detalle(clave, ritmo, o) + "<button type='button' class='ecg-cerrar' aria-label='Cerrar'>×</button>"; cajaDetalle.hidden = false;
      cajaDetalle.querySelector(".ecg-cerrar").addEventListener("click", function () { elegirOnda(null); });
      var iv = intervalos(ritmo, o, t).filter(function (x) { return x[1] <= t + 1; });
      if (!iv.length) iv = intervalos(ritmo, o, t + 3000);
      if (iv.length) {
        var x = iv[iv.length - 1];
        corriendo = false; rotularBoton();
        t = o === "PR" || o === "RR" ? x[1] - 1 : o === "QT" ? x[0] + 40 : (x[0] + x[1]) / 2;
      }
    }

    function elegirRitmo(k, desplazar) {
      if (!RITMOS[k]) return;
      clave = k; ritmo = RITMOS[k]; t = 3200;
      titulo.textContent = ritmo.nombre; selRitmo.value = k;
      menu.querySelectorAll("button[data-ritmo]").forEach(function (b) { var s = b.getAttribute("data-ritmo") === k; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-pressed", s); });
      mostrarGrupo(ritmo.grupo === "normal" ? "normal" : "patologico");
      var tarjeta = document.getElementById("ecg-" + k), lista = tarjeta && tarjeta.querySelector("ul"), enlace = tarjeta && tarjeta.querySelector("p a[href]");
      claves.innerHTML = lista ? lista.outerHTML : "";
      resumen.innerHTML = enlace ? "Resumen del tema: " + enlace.outerHTML : "";
      elegirDeriv(ritmo.tira || "II");
      selVista.value = ritmo.vista || "frontal"; if (heart) heart.vista(VISTAS[selVista.value][0], VISTAS[selVista.value][1]);
      if (onda) elegirOnda(onda);
      dibujarMinis();
      if (desplazar) raiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function rotularBoton() { boton.textContent = corriendo ? "Pausa" : "Reproducir"; boton.setAttribute("aria-pressed", corriendo); }
    boton.addEventListener("click", function () { corriendo = !corriendo; rotularBoton(); });
    selVista.addEventListener("change", function () { if (heart) heart.vista(VISTAS[selVista.value][0], VISTAS[selVista.value][1]); });
    var nombres = $("input[name=nombres]"), transp = $("input[name=transparente]");
    nombres.addEventListener("change", function () { if (heart) heart.nombres(nombres.checked); });
    transp.addEventListener("change", function () { if (heart) heart.transparente(transp.checked); });
    rotularBoton();

    function dibujarTira() {
      var c = ajustar(tira), mm = c.w / 75, ventana = 3000;
      papel(c.ctx, c.w, c.h, mm);
      var cursor = (t % ventana) / ventana * c.w, inicio = t - (t % ventana), hueco = 14, abierto = false, base = c.h * 0.56;
      if (onda) {
        var ivs = intervalos(ritmo, onda, t).concat(intervalos(ritmo, onda, t - 1600));
        c.ctx.fillStyle = oscuro() ? "rgba(143,194,203,0.24)" : "rgba(29,90,102,0.17)";
        for (var xb = 0; xb <= c.w; xb++) {
          if (xb > cursor && xb < cursor + hueco) continue;
          var tb = (xb <= cursor ? inicio : inicio - ventana) + xb / c.w * ventana;
          for (var k = 0; k < ivs.length; k++) if (tb >= ivs[k][0] && tb <= ivs[k][1]) { c.ctx.fillRect(xb, 0, 1, c.h); break; }
        }
      }
      c.ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); c.ctx.lineWidth = 1.6; c.ctx.beginPath();
      for (var x = 0; x <= c.w; x++) {
        if (x > cursor && x < cursor + hueco) { abierto = false; continue; }
        var tt = (x <= cursor ? inicio : inicio - ventana) + x / c.w * ventana;
        if (tt < 0) { abierto = false; continue; }
        var y = base - senal(ritmo, deriv, tt) * 10 * mm;
        if (abierto) c.ctx.lineTo(x, y); else { c.ctx.moveTo(x, y); abierto = true; }
      }
      c.ctx.stroke();
      c.ctx.fillStyle = "#d9481f"; c.ctx.beginPath(); c.ctx.arc(cursor, base - senal(ritmo, deriv, t) * 10 * mm, 3.4, 0, 2 * Math.PI); c.ctx.fill();
    }
    function cuadro(reloj) {
      if (ultimoReloj !== null && corriendo && visible) t += Math.min(64, reloj - ultimoReloj) * parseFloat(velocidad.value);
      ultimoReloj = reloj;
      if (visible) {
        dibujarTira();
        textoFase.innerHTML = fase(ritmo, t);
        if (heart) { heart.actualizar(ritmo, t); heart.render(); }
      }
      requestAnimationFrame(cuadro);
    }

    // Tarjetas de la página: miniatura del trazado y botón para verlo en el corazón
    var tarjetas = document.querySelectorAll(".ecg-tarjeta[data-ritmo]");
    tarjetas.forEach(function (c) {
      var k = c.getAttribute("data-ritmo"); if (!RITMOS[k]) return;
      c.id = "ecg-" + k;
      var cv = document.createElement("canvas"); cv.className = "ecg-miniatura"; cv.setAttribute("aria-hidden", "true"); c.insertBefore(cv, c.firstChild);
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-ver"; b.textContent = "Ver en el corazón";
      b.addEventListener("click", function () { elegirRitmo(k, true); }); c.appendChild(b);
    });
    function dibujarTarjetas() { tarjetas.forEach(function (c) { var r = RITMOS[c.getAttribute("data-ritmo")]; if (r) trazo(c.querySelector(".ecg-miniatura"), r, r.tira || "II", 3200, 3, 1.1); }); }

    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(raiz);
    window.addEventListener("resize", function () { dibujarMinis(); dibujarTarjetas(); });
    new MutationObserver(function () { dibujarMinis(); dibujarTarjetas(); }).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    raiz.ecgTiempo = function (ms) { t = ms; }; // para revisar un instante (pruebas)
    var inicial = (location.hash.match(/^#ecg-(.+)$/) || [])[1];
    elegirRitmo(RITMOS[inicial] ? inicial : "sinusal", !!RITMOS[inicial]);
    dibujarTarjetas();
    requestAnimationFrame(cuadro);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(iniciar);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
