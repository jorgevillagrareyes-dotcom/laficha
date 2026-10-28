/* La Ficha: atlas de ECG (página atlas-ecg.md).
   Corazón 3D (modelo propio en atlas-ecg-modelo.js, generado con scripts/modelo-corazon.py y dibujado con Three.js
   de javascripts/vendor) con la conducción animada y un ECG de 12 derivaciones sincronizado. El trazado se calcula con
   un modelo de dipolo: en cada instante el corazón genera un vector eléctrico y cada derivación registra su proyección
   sobre su eje. Los tiempos de cada onda (ONDAS) son los mismos que usa la animación del corazón, así que lo que se ve
   en el trazado y en el corazón coincide en cada instante. Es un esquema docente, no una simulación fisiológica exacta. */
(function () {
  "use strict";

  /* ---------- Vectores y derivaciones (x = izquierda del paciente, y = arriba, z = adelante) ---------- */
  function v3(x, y, z) { return { x: x, y: y, z: z }; }
  function unit(a) { var n = Math.hypot(a.x, a.y, a.z) || 1; return v3(a.x / n, a.y / n, a.z / n); }
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

  // Componentes del vector cardíaco: centro (ms desde el inicio de la activación), ancho (ms), dirección y amplitud (mV)
  var ONDA_P = [{ c: 45, s: 20, d: unit(v3(0.5, -0.85, 0.1)), a: 0.17 }];
  var ONDA_QRS = [
    { c: 12, s: 7, d: unit(v3(-0.45, -0.15, 0.85)), a: 0.25 },  // septo: de izquierda a derecha
    { c: 40, s: 11, d: unit(v3(0.63, -0.63, -0.46)), a: 1.6 },  // masa del ventrículo izquierdo
    { c: 66, s: 9, d: unit(v3(-0.35, 0.55, -0.6)), a: 0.42 }    // bases: activación terminal
  ];
  var ONDA_T = [{ c: 250, s: 48, d: unit(v3(0.55, -0.65, 0.25)), a: 0.34 }, { c: 300, s: 28, d: unit(v3(0.55, -0.65, 0.25)), a: 0.1 }];
  var LESION_INF = unit(frontal(105)); // corriente de lesión hacia la cara inferior
  var EJE_FA = unit(v3(-0.25, -0.55, 0.8)); // ondas f: se ven mejor en V1 y DII

  // Límites de cada onda en ms (los mismos que usa el corazón 3D). kT acorta o alarga la repolarización con la frecuencia.
  var P_FIN = 90, QRS_INI = -5, QRS_FIN = 88, T_INI = 160, T_FIN = 380;

  function gauss(t, c, s) { var u = (t - c) / s; return Math.exp(-0.5 * u * u); }
  function sumar(acc, comps, t) {
    for (var i = 0; i < comps.length; i++) {
      var c = comps[i], g = c.a * gauss(t, c.c, c.s);
      acc.x += g * c.d.x; acc.y += g * c.d.y; acc.z += g * c.d.z;
    }
  }
  function meseta(t, a, b, r) { return t < a - r || t > b + r ? 0 : t < a ? 0.5 - 0.5 * Math.cos(Math.PI * (t - a + r) / r) : t > b ? 0.5 + 0.5 * Math.cos(Math.PI * (t - b) / r) : 1; }
  function azar(i) { var x = Math.sin(i * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); } // fija: el trazado no cambia al recargar

  /* ---------- Ritmos ---------- */
  // latidos(t): latidos cercanos a t, con el inicio de la P (p) y del QRS (q) en ms; null si no hay.
  function sinusal(ciclo, pr) {
    return function (t) {
      var k = Math.floor(t / ciclo), out = [];
      for (var i = k - 4; i <= k + 1; i++) out.push({ p: i * ciclo, q: i * ciclo + pr });
      return out;
    };
  }
  var FA_RR = [];
  (function () { var acc = 0; for (var i = 0; i < 400; i++) { FA_RR.push(acc); acc += 430 + Math.round(azar(i) * 520); } })();
  var FA_TOTAL = FA_RR[FA_RR.length - 1] + 600;

  var RITMOS = {
    sinusal: { nombre: "Ritmo sinusal normal", grupo: "normal", latidos: sinusal(800, 160), pr: 160, rr: 800, kT: 1 },
    bradicardia: { nombre: "Bradicardia sinusal", grupo: "normal", latidos: sinusal(1200, 170), pr: 170, rr: 1200, kT: 0.9 },
    taquicardia: { nombre: "Taquicardia sinusal", grupo: "normal", latidos: sinusal(500, 140), pr: 140, rr: 500, kT: 1.3 },
    fa: {
      nombre: "Fibrilación auricular", grupo: "patologico", auriculas: "fa", tira: "V1", kT: 1,
      latidos: function (t) {
        var base = Math.floor(t / FA_TOTAL) * FA_TOTAL, x = t - base, out = [], i = 0;
        while (i < FA_RR.length - 1 && FA_RR[i + 1] + 300 <= x) i++;
        for (var j = Math.max(0, i - 4); j <= Math.min(FA_RR.length - 1, i + 1); j++) out.push({ p: null, q: base + FA_RR[j] + 300 });
        return out;
      }
    },
    bav3: {
      nombre: "Bloqueo AV completo (de tercer grado)", grupo: "patologico", bloqueo: true, rr: 1430, kT: 1,
      latidos: function (t) {
        var out = [], kp = Math.floor(t / 800), kq = Math.floor((t - 300) / 1430);
        for (var i = kp - 4; i <= kp + 1; i++) out.push({ p: i * 800, q: null });
        for (var j = kq - 3; j <= kq + 1; j++) out.push({ p: null, q: j * 1430 + 300 });
        return out;
      }
    },
    iam_inf: { nombre: "IAM inferior con supradesnivel del ST", grupo: "patologico", latidos: sinusal(800, 160), pr: 160, rr: 800, kT: 1, lesion: LESION_INF, tira: "III" }
  };

  function vector(r, t) {
    var acc = v3(0, 0, 0), ls = r.latidos(t);
    for (var i = 0; i < ls.length; i++) {
      var b = ls[i];
      if (b.p !== null && t >= b.p - 100 && t < b.p + 200) sumar(acc, ONDA_P, t - b.p);
      if (b.q !== null && t >= b.q - 100 && t < b.q + 800) {
        var dq = t - b.q;
        sumar(acc, ONDA_QRS, dq);
        sumar(acc, ONDA_T, dq < 100 ? dq : 100 + (dq - 100) * r.kT);
        if (r.lesion) { var m = 0.28 * meseta(dq, 90, 200, 130); acc.x += m * r.lesion.x; acc.y += m * r.lesion.y; acc.z += m * r.lesion.z; }
      }
    }
    if (r.auriculas === "fa") {
      var f = (0.03 * Math.sin(t * 0.0377) + 0.022 * Math.sin(t * 0.0291 + 1.3) + 0.018 * Math.sin(t * 0.0453 + 0.4)) * (0.7 + 0.3 * Math.sin(t * 0.0021));
      acc.x += f * EJE_FA.x; acc.y += f * EJE_FA.y; acc.z += f * EJE_FA.z;
    }
    return acc;
  }
  function senal(r, deriv, t) { var d = DERIV[deriv]; return dot(vector(r, t), d.eje) * d.ganancia; }
  function ultimoP(r, t) { var b = null; r.latidos(t).forEach(function (x) { if (x.p !== null && x.p <= t && (b === null || x.p > b)) b = x.p; }); return b; }
  function ultimoQ(r, t) { var b = null; r.latidos(t).forEach(function (x) { if (x.q !== null && x.q + QRS_INI - 40 <= t && (b === null || x.q > b)) b = x.q; }); return b; }
  function tFin(r) { return 100 + (T_FIN - 100) / r.kT; }
  function tIni(r) { return 100 + (T_INI - 100) / r.kT; }

  // Intervalos de cada onda en los latidos que rodean t: [[inicio, fin], ...]
  function intervalos(r, onda, t) {
    var out = [], ls = r.latidos(t), qs = [];
    ls.forEach(function (b) { if (b.q !== null) qs.push(b.q); });
    qs.sort(function (a, b) { return a - b; });
    ls.forEach(function (b) {
      if (onda === "P" && b.p !== null) out.push([b.p, b.p + P_FIN]);
      if (onda === "PR" && b.p !== null && b.q !== null) out.push([b.p, b.q + QRS_INI]);
      if (b.q === null) return;
      if (onda === "QRS") out.push([b.q + QRS_INI, b.q + QRS_FIN]);
      if (onda === "ST") out.push([b.q + QRS_FIN, b.q + tIni(r)]);
      if (onda === "T") out.push([b.q + tIni(r), b.q + tFin(r)]);
      if (onda === "QT") out.push([b.q + QRS_INI, b.q + tFin(r)]);
    });
    if (onda === "RR") for (var i = 0; i < qs.length - 1; i++) if (qs[i + 1] + 40 <= t + 1) out = [[qs[i] + 40, qs[i + 1] + 40]];
    return out;
  }

  function fase(r, t) {
    var p = ultimoP(r, t), q = ultimoQ(r, t), dp = p === null ? null : t - p, dq = q === null ? null : t - q;
    if (dq !== null && dq >= -40 && dq < QRS_INI) return "<strong>Haz de His y ramas</strong>: el impulso baja hacia la red de Purkinje (todavía no se ve en el trazado).";
    if (dq !== null && dq >= QRS_INI && dq < QRS_FIN) return "<strong>Complejo QRS</strong>: despolarización de los ventrículos; primero el septo, luego la punta y al final las bases.";
    if (r.lesion && dq !== null && dq >= QRS_FIN && dq < 330) return "<strong>Segmento ST elevado</strong>: la pared inferior isquémica (morado) genera una corriente de lesión que apunta hacia DII, DIII y aVF; aVL la ve alejarse (infradesnivel especular).";
    if (r.auriculas === "fa") return "<strong>Fibrilación auricular</strong>: no hay onda P. Frentes desordenados recorren las aurículas y el nódulo AV deja pasar algunos al azar: los QRS son <strong>irregularmente irregulares</strong>.";
    if (r.bloqueo && dp !== null && dp < P_FIN) return "<strong>Onda P</strong>: las aurículas se activan con normalidad, pero el impulso <strong>se detiene en el nódulo AV</strong> (rojo): ninguna P conduce.";
    if (r.bloqueo) return "<strong>Disociación AV</strong>: las P (75 lpm) y los QRS (unos 42 lpm, escape desde el haz de His) van cada uno a su ritmo.";
    if (dp !== null && dp < P_FIN) return "<strong>Onda P</strong>: el nódulo sinusal descarga y la despolarización recorre las aurículas.";
    if (dp !== null && r.pr && dp < r.pr + QRS_INI - 40) return "<strong>Segmento PR</strong>: el impulso se retrasa en el nódulo AV mientras las aurículas terminan de contraerse.";
    if (dq !== null && dq >= QRS_FIN && dq < tIni(r)) return "<strong>Segmento ST</strong>: los ventrículos están despolarizados por completo (línea isoeléctrica).";
    if (dq !== null && dq >= tIni(r) && dq < tFin(r)) return "<strong>Onda T</strong>: repolarización de los ventrículos (se van apagando).";
    return "<strong>Diástole</strong>: línea de base hasta la próxima descarga.";
  }

  /* ---------- Qué es cada onda: lo normal y lo de cada ECG patológico ---------- */
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
  var HALLAZGO = {
    bradicardia: { RR: "FC de <strong>50 lpm</strong>: bradicardia sinusal (cada QRS tiene su P normal). Puede ser normal en deportistas y durante el sueño; si hay síntomas, buscar fármacos (betabloqueadores, calcioantagonistas no dihidropiridínicos), hipotiroidismo o enfermedad del nódulo sinusal." },
    taquicardia: { RR: "FC de <strong>120 lpm</strong>: taquicardia sinusal (cada QRS tiene su P normal, con eje normal). Casi siempre es una respuesta: fiebre, dolor, hipovolemia, anemia, hipoxemia, TEP, hipertiroidismo o fármacos. Se trata la causa." },
    fa: {
      P: "<strong>No hay ondas P.</strong> La línea de base muestra <strong>ondas f</strong>: oscilaciones finas, irregulares y desordenadas, que se ven mejor en V1 y DII. En el corazón, las aurículas se activan en parches sin orden.",
      PR: "<strong>No existe</strong>: sin onda P no hay intervalo PR.",
      QRS: "<strong>Angosto</strong> (menos de 120 ms): los impulsos que cruzan el nódulo AV bajan por el His y las ramas normales. Un QRS ancho en FA obliga a pensar en bloqueo de rama o preexcitación.",
      ST: "Sin alteración propia de la FA.",
      T: "Sin alteración propia; su forma puede variar un poco por las ondas f superpuestas.",
      QT: "Difícil de medir con RR irregular: promediar varios latidos.",
      RR: "<strong>Irregularmente irregular</strong>: no hay dos RR iguales ni un patrón que se repita. El diagnóstico requiere un registro con RR irregular y sin P claras de ≥ 30 s en una derivación, o un ECG de 12 derivaciones (ESC 2024)."
    },
    bav3: {
      P: "<strong>Normales y regulares</strong> (75 lpm), pero ninguna conduce: van a su propio ritmo y a veces quedan escondidas dentro del QRS o la T.",
      PR: "<strong>Cambia en cada latido</strong>: no hay relación entre P y QRS (disociación AV). Es la clave del diagnóstico.",
      QRS: "Ritmo de <strong>escape</strong>, más lento que las P. Angosto si nace en la unión o el haz de His (como aquí); ancho si nace en el ventrículo, que es más lento e inestable.",
      ST: "Sin alteración propia.",
      T: "Sin alteración propia; una P puede deformarla cuando coincide con ella.",
      QT: "Puede alargarse por la bradicardia.",
      RR: "<strong>Regular y lento</strong> (unos 42 lpm), independiente de las P (75 lpm). Descartadas las causas reversibles, el bloqueo AV completo es indicación de <strong>marcapaso</strong> (ESC 2021)."
    },
    iam_inf: {
      P: "Normal (ritmo sinusal).",
      PR: "Normal.",
      QRS: "Todavía <strong>sin ondas Q</strong>: en las primeras horas no se han formado. Las Q patológicas en DII, DIII y aVF aparecen con la necrosis.",
      ST: "<strong>Supradesnivel en DII, DIII y aVF</strong> (cara inferior) con <strong>infradesnivel especular en aVL</strong> y DI. Criterio: supradesnivel nuevo en el punto J ≥ 1 mm en 2 derivaciones contiguas (definición universal 2018). En el IAM inferior, registrar <strong>V3R–V4R</strong> para buscar infarto del ventrículo derecho. Es una emergencia de reperfusión.",
      T: "Positiva; en la fase precoz puede ser alta y ancha (hiperaguda).",
      QT: "Sin alteración propia.",
      RR: "Regular (ritmo sinusal)."
    }
  };
  function medida(r, onda) {
    if (!r.rr) return "";
    var fc = Math.round(60000 / r.rr);
    if (onda === "PR" && r.pr) return "Aquí: <strong>" + r.pr + " ms</strong>.";
    if (onda === "QRS") return "Aquí: <strong>" + (QRS_FIN - QRS_INI) + " ms</strong>.";
    if (onda === "QT" && !r.bloqueo) { var qt = Math.round(tFin(r) - QRS_INI); return "Aquí: QT <strong>" + qt + " ms</strong>, QTc <strong>" + Math.round(qt / Math.sqrt(r.rr / 1000)) + " ms</strong>."; }
    if (onda === "RR") return "Aquí: RR <strong>" + r.rr + " ms</strong> = <strong>" + fc + " lpm</strong>.";
    return "";
  }
  function detalle(clave, r, onda) {
    var h = HALLAZGO[clave] && HALLAZGO[clave][onda], m = medida(r, onda);
    var out = "<h4>" + NOMBRE[onda] + "</h4><p class='ecg-rep'><strong>Qué representa.</strong> " + REPRESENTA[onda] + "</p>";
    if (r.grupo === "patologico") {
      out += "<p class='ecg-pato'><strong>En este ECG.</strong> " + (h || "Sin alteración propia.") + (m ? " " + m : "") + "</p>";
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
    cont.appendChild(renderer.domElement);
    var escena = new THREE.Scene(), camara = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camara.position.set(0, 0, 26);
    escena.add(new THREE.HemisphereLight(0xfff4ee, 0x6b4a40, 0.6));
    var luz = new THREE.DirectionalLight(0xffffff, 0.95); luz.position.set(-5, 7, 10); escena.add(luz);
    var contra = new THREE.DirectionalLight(0xffe2d6, 0.45); contra.position.set(6, -2, -8); escena.add(contra);
    var grupo = new THREE.Group(); escena.add(grupo); grupo.position.set(-0.2, -0.9, 0);

    var q = decodificar(M.pos, Int16Array), n = q.length / 3, pos = new Float32Array(q.length), i;
    for (i = 0; i < q.length; i++) pos[i] = q[i] / M.escala;
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setIndex(new THREE.BufferAttribute(decodificar(M.idx, M.idx32 ? Uint32Array : Uint16Array), 1));
    geo.computeVertexNormals();
    var colores = new Float32Array(n * 3); geo.setAttribute("color", new THREE.BufferAttribute(colores, 3));
    var region = decodificar(M.region, Uint8Array), grasa = decodificar(M.grasa, Uint8Array);
    var mat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.5, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.35, transparent: true, opacity: 1 });
    grupo.add(new THREE.Mesh(geo, mat));

    var C = function (r, g, b) { return new THREE.Color(r, g, b).convertSRGBToLinear(); };
    var MIO = C(0.62, 0.2, 0.17), MIO_A = C(0.7, 0.3, 0.26), GRASA = C(0.92, 0.79, 0.48), ARTERIA = C(0.86, 0.68, 0.6), VENA = C(0.42, 0.46, 0.66);
    var FRENTE = C(1, 0.93, 0.42), DESP = C(0.98, 0.52, 0.3), CARA = C(0.32, 0.62, 0.8), ISQ = C(0.42, 0.2, 0.42);
    var base = new Float32Array(n * 3), tmp = new THREE.Color();
    for (i = 0; i < n; i++) {
      var rg = region[i], g = grasa[i] / 255;
      tmp.copy(rg <= 1 ? MIO : rg <= 3 ? MIO_A : rg === 4 ? ARTERIA : VENA);
      if (rg <= 3) tmp.lerp(GRASA, 0.85 * g);
      base[i * 3] = tmp.r; base[i * 3 + 1] = tmp.g; base[i * 3 + 2] = tmp.b;
    }

    var coronarias = {};
    Object.keys(M.coronarias).forEach(function (k) {
      var curva = new THREE.CatmullRomCurve3(M.coronarias[k].map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 80, k === "cx" ? 0.11 : 0.13, 10, false), new THREE.MeshPhysicalMaterial({ color: 0xb8342a, roughness: 0.4, clearcoat: 0.6 }));
      grupo.add(m); coronarias[k] = { malla: m, curva: curva };
    });
    var oclusion = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), new THREE.MeshBasicMaterial({ color: 0x1b1b1b }));
    oclusion.position.copy(coronarias.cd.curva.getPointAt(0.3)); oclusion.visible = false; grupo.add(oclusion);

    // Sistema de conducción, dibujado siempre encima (como en una radiografía). Tiempos: auricular desde la P; el resto desde el QRS.
    var SA = new THREE.Vector3(-2.25, 2.55, 0.45), NAV = new THREE.Vector3(-1.0, 0.25, -0.15), HIS = new THREE.Vector3(-0.5, -0.35, 0.15);
    var AZUL = 0x7fd3e0, ACT = 0xffd23a, ROJO = 0xff3b30, vias = [];
    function via(puntos, t0, t1, tipo, r) {
      var curva = new THREE.CatmullRomCurve3(puntos.map(function (p) { return p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 40, r || 0.07, 8, false), new THREE.MeshBasicMaterial({ color: AZUL, depthTest: false, transparent: true, opacity: 0.9 }));
      m.renderOrder = 10; grupo.add(m); vias.push({ malla: m, curva: curva, t0: t0, t1: t1, tipo: tipo });
    }
    via([SA, [-1.9, 1.6, 0.35], [-1.4, 0.9, 0.1], NAV], 0, 35, "auricular");
    via([SA, [-1.1, 2.6, -0.4], [0.2, 2.45, -1.1], [1.0, 2.2, -1.5]], 0, 45, "auricular", 0.05);
    via([NAV, HIS], -40, -28, "his", 0.09);
    via([HIS, [0.25, -1.35, 0.2], [1.3, -2.5, 0.6], [2.35, -3.25, 0.8]], -28, -5, "rama");
    via([HIS, [-0.5, -1.35, 0.85], [0.2, -2.4, 1.4], [1.1, -3.05, 1.7]], -28, -3, "rama");
    [[[2.35, -3.25, 0.8], [2.8, -1.8, 1.5], [2.4, 0.0, 1.4]], [[2.35, -3.25, 0.8], [3.0, -2.0, 0.0], [2.7, -0.3, -0.9]],
      [[2.35, -3.25, 0.8], [1.4, -2.3, -0.8], [0.8, -0.6, -1.3]], [[1.1, -3.05, 1.7], [0.4, -1.8, 2.1], [-0.5, -0.4, 1.9]],
      [[1.1, -3.05, 1.7], [-0.6, -2.1, 1.5], [-1.6, -0.7, 1.0]]].forEach(function (p) { via(p, -5, 18, "purkinje", 0.04); });
    function nodo(p, r) { var m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), new THREE.MeshBasicMaterial({ color: AZUL, depthTest: false, transparent: true })); m.renderOrder = 11; m.position.copy(p); grupo.add(m); return m; }
    var nodoSA = nodo(SA, 0.22), nodoAV = nodo(NAV, 0.2);
    var pulso = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false })); pulso.renderOrder = 12; grupo.add(pulso);

    // Tiempo de activación de cada vértice: aurículas en 0–90 ms (onda P), ventrículos en 0–85 ms desde el inicio del QRS
    var act = new Float32Array(n), inferior = new Float32Array(n), cara = new Float32Array(n), p = new THREE.Vector3(), nor = geo.attributes.normal;
    var FV = [[new THREE.Vector3(0.1, -1.0, 0.3), 0], [new THREE.Vector3(2.0, -2.8, 0.7), 8], [new THREE.Vector3(0.8, -2.6, 1.6), 10]];
    var maxA = 0, maxV = 0;
    for (i = 0; i < n; i++) {
      p.set(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
      if (region[i] <= 1) {
        var m = 1e9; for (var k = 0; k < FV.length; k++) m = Math.min(m, FV[k][1] + p.distanceTo(FV[k][0]));
        act[i] = m; maxV = Math.max(maxV, m);
        inferior[i] = Math.max(0, Math.min(1, (-nor.getY(i) - 0.35) / 0.35)) * (p.y < -0.2 ? 1 : 0);
      } else if (region[i] <= 3) { act[i] = p.distanceTo(SA); maxA = Math.max(maxA, act[i]); }
      else act[i] = -1;
    }
    for (i = 0; i < n; i++) { if (region[i] <= 1) act[i] = act[i] / maxV * (QRS_FIN - 8); else if (region[i] <= 3) act[i] = act[i] / maxA * (P_FIN - 8); }

    var centro = new THREE.Vector3(0.4, -0.8, 0.3), flecha = null, ojo = null;
    function marcarDerivacion(nombre) {
      var e = DERIV[nombre].eje, dir = new THREE.Vector3(e.x, e.y, e.z).normalize();
      if (flecha) grupo.remove(flecha); if (ojo) grupo.remove(ojo);
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
    function nivelFA(i, t) { // frentes desordenados en las aurículas
      var x = pos[i * 3], y = pos[i * 3 + 1], z = pos[i * 3 + 2];
      var s = Math.sin(x * 2.1 + y * 1.3 - t * 0.034) + Math.sin(-x * 1.4 + z * 2.3 - t * 0.029 + 1.7) + Math.sin(y * 2.6 - z * 1.1 - t * 0.041 + 0.6);
      return Math.max(0, (s - 1.2) / 1.8);
    }

    function actualizar(r, t) {
      var p0 = ultimoP(r, t), q0 = ultimoQ(r, t), dp = p0 === null ? null : t - p0, dq = q0 === null ? null : t - q0;
      var vDesp = tIni(r) + 30, vFin = tFin(r); // ventrículos despolarizados hasta la T; se apagan durante la T
      for (var i = 0; i < n; i++) {
        var j = i * 3; tmp.setRGB(base[j], base[j + 1], base[j + 2]);
        if (cara[i] > 0) tmp.lerp(CARA, 0.7 * cara[i]);
        var rg = region[i], d = null, dur = 0, fin = 0;
        if (rg <= 1 && dq !== null && dq >= 0) { d = dq - act[i]; dur = vDesp - act[i]; fin = vFin - act[i]; }
        else if (rg <= 3) {
          if (r.auriculas === "fa") { var f = nivelFA(i, t); if (f > 0) tmp.lerp(FRENTE, 0.8 * f); }
          else if (dp !== null) { d = dp - act[i]; dur = 110; fin = 240; }
        }
        if (d !== null && d >= 0 && d < fin) {
          if (d < 20) tmp.lerp(FRENTE, 1 - d / 40);
          else if (d < dur) tmp.lerp(DESP, 0.55);
          else tmp.lerp(DESP, 0.55 * (1 - (d - dur) / (fin - dur)));
        }
        if (r.lesion && inferior[i] > 0) tmp.lerp(ISQ, 0.7 * inferior[i]); // la isquemia se ve en todo el ciclo
        colores[j] = tmp.r; colores[j + 1] = tmp.g; colores[j + 2] = tmp.b;
      }
      geo.attributes.color.needsUpdate = true;

      var activo = null;
      vias.forEach(function (v) {
        var ref = v.tipo === "auricular" ? dp : dq, on = false;
        if (r.auriculas === "fa" && v.tipo === "auricular") on = Math.sin(t * 0.05 + v.t1) > 0.3;
        else if (ref !== null && ref >= v.t0 && ref <= v.t1 + 25) on = true;
        v.malla.material.color.setHex(on ? ACT : AZUL);
        if (ref !== null && ref >= v.t0 && ref <= v.t1 && v.tipo !== "purkinje" && !(r.auriculas === "fa" && v.tipo === "auricular")) activo = { v: v, ref: ref };
      });
      nodoSA.material.color.setHex(r.auriculas !== "fa" && dp !== null && dp < 30 ? ACT : AZUL);
      var avOn = r.auriculas === "fa" ? Math.sin(t * 0.07) > 0.2 : dp !== null && dp >= 30 && (r.bloqueo ? dp < 260 : dp < r.pr - 40);
      nodoAV.material.color.setHex(r.bloqueo && avOn ? ROJO : avOn ? ACT : AZUL);
      nodoAV.scale.setScalar(r.bloqueo && avOn ? 1.5 : 1);
      if (activo) { pulso.visible = true; pulso.position.copy(activo.v.curva.getPointAt(Math.min(1, (activo.ref - activo.v.t0) / (activo.v.t1 - activo.v.t0)))); }
      else if (!r.bloqueo && r.auriculas !== "fa" && dp !== null && dp >= 35 && dp < r.pr - 40) { pulso.visible = true; pulso.position.copy(NAV); }
      else pulso.visible = false;
      oclusion.visible = !!r.lesion;
      coronarias.cd.malla.material.color.setHex(r.lesion ? 0x6a1d6e : 0xb8342a);
    }

    var ETIQ = [["Nódulo sinusal", SA], ["Nódulo AV", NAV], ["Haz de His", HIS], ["Aurícula derecha", new THREE.Vector3(-3.9, 1.0, 0.6)],
      ["Aurícula izquierda", new THREE.Vector3(2.7, 2.2, -0.9)], ["Ventrículo derecho", new THREE.Vector3(-2.6, -1.3, 2.0)],
      ["Ventrículo izquierdo", new THREE.Vector3(3.3, -1.4, 0.4)], ["Aorta", new THREE.Vector3(-0.7, 6.2, 0.3)], ["Arteria pulmonar", new THREE.Vector3(1.3, 3.9, 1.2)],
      ["Vena cava superior", new THREE.Vector3(-4.6, 4.3, -0.2)], ["Coronaria derecha", null, "cd"], ["Descendente anterior", null, "tci_da"]];
    var capa = document.createElement("div"); capa.className = "ecg-etiquetas"; cont.appendChild(capa);
    var etiquetas = ETIQ.map(function (e) { var d = document.createElement("span"); d.textContent = e[0]; capa.appendChild(d); return { el: d, p: e[1] || coronarias[e[2]].curva.getPointAt(e[2] === "cd" ? 0.45 : 0.75) }; });

    var ancho = 0, alto = 0;
    function render() {
      var w = cont.clientWidth, h = cont.clientHeight;
      if (w !== ancho || h !== alto) { ancho = w; alto = h; renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix(); camara.position.z = w < h ? 33 : 26; }
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
    renderer.domElement.addEventListener("pointerdown", function (ev) { arrastre = { x: ev.clientX, y: ev.clientY, ry: grupo.rotation.y, rx: grupo.rotation.x, tipo: ev.pointerType }; });
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
      transparente: function (si) { mat.opacity = si ? 0.45 : 1; mat.depthWrite = !si; mat.needsUpdate = true; },
      vista: function (rx, ry) { grupo.rotation.set(rx || 0, ry || 0, 0); }
    };
  }

  /* ---------- Página ---------- */
  function iniciar() {
    var raiz = document.getElementById("atlas-ecg");
    if (!raiz || raiz.getAttribute("data-lf") === "1") return;
    raiz.setAttribute("data-lf", "1");
    var clave = "sinusal", ritmo = RITMOS[clave], deriv = "II", onda = null, t = 0;
    var vista = raiz.querySelector(".ecg-3d"), tira = raiz.querySelector(".ecg-tira canvas"), rotulo = raiz.querySelector(".ecg-tira-rotulo");
    var textoFase = raiz.querySelector(".ecg-fase"), textoCara = raiz.querySelector(".ecg-cara"), titulo = raiz.querySelector(".ecg-ritmo");
    var boton = raiz.querySelector("[data-accion=reproducir]"), velocidad = raiz.querySelector("select[name=velocidad]");
    var grilla = raiz.querySelector(".ecg-12"), enlace = raiz.querySelector(".ecg-ficha"), cajaOndas = raiz.querySelector(".ecg-ondas"), cajaDetalle = raiz.querySelector(".ecg-detalle");

    var heart = window.THREE && window.LF_CORAZON ? corazon(window.THREE, vista, window.LF_CORAZON) : null;
    if (!heart) { vista.classList.add("ecg-sin-3d"); vista.innerHTML = "<p>Este navegador no puede mostrar el corazón en 3D. El trazado funciona igual.</p>"; }

    // Pestañas: ECG normal / ECG patológicos
    var pestanas = raiz.querySelectorAll(".ecg-pestanas button"), listas = raiz.querySelectorAll(".ecg-elegir");
    function mostrarGrupo(g) {
      pestanas.forEach(function (b) { var s = b.getAttribute("data-grupo") === g; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-selected", s); });
      listas.forEach(function (l) { l.hidden = l.getAttribute("data-grupo") !== g; });
    }
    pestanas.forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.getAttribute("data-grupo"); mostrarGrupo(g);
        var primero = raiz.querySelector(".ecg-elegir[data-grupo='" + g + "'] button"); if (primero) elegirRitmo(primero.getAttribute("data-ritmo"));
      });
    });

    // 12 derivaciones (2,5 s cada una); tocar una la elige
    var minis = ORDEN.map(function (nm) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-mini"; b.setAttribute("data-deriv", nm);
      b.innerHTML = "<span>" + nm + "</span><canvas></canvas>"; grilla.appendChild(b);
      b.addEventListener("click", function () { elegirDeriv(nm); });
      return b;
    });
    function dibujarMinis() {
      minis.forEach(function (b) {
        var nm = b.getAttribute("data-deriv"), c = ajustar(b.querySelector("canvas")), mm = c.w / 62.5;
        papel(c.ctx, c.w, c.h, mm);
        c.ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); c.ctx.lineWidth = 1.2; c.ctx.beginPath();
        var amp = Math.min(10 * mm, c.h / 3.2);
        for (var x = 0; x <= c.w; x++) {
          var tt = 4000 + (x / mm) * 40, y = c.h * 0.55 - senal(ritmo, nm, tt) * amp;
          if (x) c.ctx.lineTo(x, y); else c.ctx.moveTo(x, y);
        }
        c.ctx.stroke();
      });
    }
    function elegirDeriv(nm) {
      deriv = nm;
      minis.forEach(function (b) { var s = b.getAttribute("data-deriv") === nm; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-pressed", s); });
      rotulo.textContent = nm;
      var c = DERIV[nm].cara;
      textoCara.innerHTML = c ? "<strong>" + nm + "</strong> mira la cara <strong>" + c + "</strong> (en azul). La flecha marca su polo positivo: lo que se acerca se dibuja hacia arriba; lo que se aleja, hacia abajo."
        : "<strong>aVR</strong> mira el corazón desde el hombro derecho, hacia su cavidad. En el ritmo sinusal casi todo se aleja de ella: P, QRS y T son <strong>negativos</strong>.";
      if (heart) heart.marcarDerivacion(nm);
    }

    // Ondas y segmentos: al tocar uno, se marca en el trazado, el corazón se detiene en ese momento y se abre la explicación
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
      cajaDetalle.innerHTML = detalle(clave, ritmo, o); cajaDetalle.hidden = false;
      var iv = intervalos(ritmo, o, t).filter(function (x) { return x[1] <= t + 1; });
      if (!iv.length) iv = intervalos(ritmo, o, t + 3000);
      if (iv.length) {
        var x = iv[iv.length - 1];
        corriendo = false; rotularBoton();
        t = o === "PR" || o === "QT" || o === "RR" ? x[1] - 1 : (x[0] + x[1]) / 2; // en los intervalos, mostrar el final
        if (o === "QT") t = x[0] + 40; // QT: el corazón en plena activación ventricular
      }
    }
    function elegirRitmo(k, desplazar) {
      if (!RITMOS[k]) return;
      clave = k; ritmo = RITMOS[k]; t = 3200;
      titulo.textContent = ritmo.nombre;
      raiz.querySelectorAll(".ecg-elegir button").forEach(function (b) { var s = b.getAttribute("data-ritmo") === k; b.classList.toggle("ecg-activa", s); b.setAttribute("aria-pressed", s); });
      mostrarGrupo(ritmo.grupo);
      var ficha = raiz.querySelector(".ecg-elegir [data-ritmo='" + k + "']").getAttribute("data-ficha");
      enlace.href = "#" + ficha;
      elegirDeriv(ritmo.tira || "II");
      var sv = raiz.querySelector("select[name=vista]"); sv.value = ritmo.lesion ? "inferior" : "frontal"; sv.dispatchEvent(new Event("change"));
      if (onda) elegirOnda(onda);
      dibujarMinis();
      if (desplazar) raiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    raiz.querySelectorAll(".ecg-elegir button").forEach(function (b) { b.addEventListener("click", function () { elegirRitmo(b.getAttribute("data-ritmo")); }); });
    document.querySelectorAll("button.ecg-ver[data-ritmo]").forEach(function (b) { b.addEventListener("click", function () { elegirRitmo(b.getAttribute("data-ritmo"), true); }); });

    var ultimoReloj = null, corriendo = !window.matchMedia("(prefers-reduced-motion: reduce)").matches, visible = true;
    function rotularBoton() { boton.textContent = corriendo ? "Pausa" : "Reproducir"; boton.setAttribute("aria-pressed", corriendo); }
    boton.addEventListener("click", function () { corriendo = !corriendo; rotularBoton(); });
    var vistas = { frontal: [0, 0], izquierda: [0, -1.2], inferior: [-0.8, 0], posterior: [0, Math.PI] };
    raiz.querySelector("select[name=vista]").addEventListener("change", function (e) { var v = vistas[e.target.value]; if (heart) heart.vista(v[0], v[1]); });
    var nombres = raiz.querySelector("input[name=nombres]"), transp = raiz.querySelector("input[name=transparente]");
    nombres.addEventListener("change", function () { if (heart) heart.nombres(nombres.checked); });
    transp.addEventListener("change", function () { if (heart) heart.transparente(transp.checked); });
    rotularBoton();

    function dibujarTira() {
      var c = ajustar(tira), mm = c.w / 75, ventana = 3000;
      papel(c.ctx, c.w, c.h, mm);
      var cursor = (t % ventana) / ventana * c.w, inicio = t - (t % ventana), hueco = 14, abierto = false, base = c.h * 0.58;
      if (onda) { // marcar la onda elegida en todos los latidos visibles
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
    if ("IntersectionObserver" in window) new IntersectionObserver(function (e) { visible = e[0].isIntersecting; }).observe(raiz);
    window.addEventListener("resize", dibujarMinis);
    new MutationObserver(dibujarMinis).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    raiz.ecgTiempo = function (ms) { t = ms; }; // para revisar un instante (pruebas)
    var inicial = (location.hash.match(/^#ver-(.+)$/) || [])[1];
    elegirRitmo(RITMOS[inicial] ? inicial : "sinusal");
    requestAnimationFrame(cuadro);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(iniciar);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
