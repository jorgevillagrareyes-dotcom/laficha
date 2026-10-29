/* ECG reales del atlas: registros de PTB-XL (PhysioNet, CC BY 4.0) en formato de 12 derivaciones,
   con derivación ampliada, compás para medir y enlace a la simulación del corazón 3D.
   Los trazados se cargan bajo demanda desde assets/ecg-reales/<id>.json (250 Hz, µV en Int16). */
(function () {
  "use strict";

  var BASE = (function () {
    var s = document.currentScript && document.currentScript.getAttribute("src");
    return s ? s.replace(/javascripts\/atlas-ecg-reales\.js.*$/, "") : "";
  })();

  // edad: la base registra como 300 a los mayores de 89 años
  var CASOS = [
    { k: "sinusal", id: 317, g: "Normal", t: "Ritmo sinusal normal", edad: 62,
      inf: "Ritmo sinusal. ECG normal.",
      b: ["P positiva en DI, DII y aVF antes de cada QRS, con PR constante.", "QRS angosto y transición de R en V3–V4.", "Mide un RR con el compás: FC = 300 / cuadros grandes."] },
    { k: "bradicardia", id: 5697, g: "Normal", t: "Bradicardia sinusal", edad: 78,
      inf: "Bradicardia sinusal; ECG normal, sin cambios respecto a uno previo.",
      b: ["Cada QRS tiene su P sinusal.", "RR de más de 5 cuadros grandes: menos de 60 lpm."] },
    { k: "taquicardia", id: 1214, g: "Normal", t: "Taquicardia sinusal", edad: 64,
      inf: "Taquicardia sinusal; resto del ECG normal.",
      b: ["P sinusal (positiva en DII) antes de cada QRS a más de 100 lpm.", "Con FC alta la P se acerca a la T del latido anterior."] },
    { k: "fa", id: 4117, g: "Taquiarritmias", t: "Fibrilación auricular", edad: 39,
      inf: "Fibrilación auricular con respuesta ventricular algo rápida; T alta en V2–V4; ECG patológico.",
      b: ["RR irregularmente irregular: mide varios RR con el compás.", "Sin ondas P; línea de base ondulada (ondas f), mejor vista en V1.", "QRS angosto: conducción normal por el haz de His."] },
    { k: "flutter", id: 1773, g: "Taquiarritmias", t: "Flutter auricular con conducción variable", edad: 65,
      inf: "Flutter auricular con conducción AV variable; eje a la izquierda; T a ratos picuda en V2–V4.",
      b: ["Ondas F en dientes de sierra en DII, DIII y aVF, sin línea isoeléctrica entre ellas.", "Conducción variable: los RR cambian según cuántas ondas F pasan al ventrículo.", "Mide la distancia entre dos F: cerca de 200 ms (unas 300 por minuto)."] },
    { k: "tsv", id: 7889, g: "Taquiarritmias", t: "Taquicardia supraventricular", edad: 74,
      inf: "Taquicardia de la unión AV (diferencial: otra taquicardia supraventricular); eje a la izquierda; infradesnivel del ST en DI, DII y V3–V4.",
      b: ["Taquicardia regular de QRS angosto, sin P visible antes del QRS.", "El infradesnivel del ST puede verse durante la taquicardia y por sí solo no diagnostica isquemia."] },
    { k: "ea", id: 2551, g: "Taquiarritmias", t: "Extrasístoles auriculares", edad: 71,
      inf: "Extrasístoles auriculares; ritmo sinusal; resto normal.",
      b: ["Latido adelantado con QRS angosto, igual a los demás.", "La P del latido prematuro es distinta o queda escondida en la T anterior.", "Compara los RR: el prematuro es más corto."] },
    { k: "wpw", id: 5303, g: "Taquiarritmias", t: "Preexcitación (Wolff-Parkinson-White)", edad: 34,
      inf: "Ritmo sinusal; eje a la izquierda; imagen de bloqueo de rama derecha; WPW tipo A.",
      b: ["PR corto (menos de 120 ms = 3 cuadros chicos).", "Empastamiento inicial del QRS: onda delta.", "R dominante en V1 (tipo A): vía accesoria izquierda."] },
    { k: "bav1", id: 191, g: "Bloqueos AV", t: "BAV de primer grado", edad: 41,
      inf: "Bradicardia sinusal; criterios de voltaje de hipertrofia ventricular izquierda; QRS-T alterado; no se descarta daño lateral.",
      b: ["PR largo (más de 200 ms = más de 1 cuadro grande), igual en todos los latidos.", "Toda P conduce: no hay P sin QRS.", "Además hay QRS de gran voltaje en las precordiales."] },
    { k: "mobitz1", id: 14009, g: "Bloqueos AV", t: "BAV de segundo grado tipo I", edad: 300,
      inf: "Bloqueo AV de 2.º grado tipo I; eje a la izquierda; trastorno de la conducción intraventricular; ECG patológico.",
      b: ["PR que se alarga latido a latido hasta una P que no conduce.", "Después de la P bloqueada el ciclo vuelve a empezar con un PR más corto.", "Mide el PR de varios latidos seguidos con el compás."] },
    { k: "bav3", id: 959, g: "Bloqueos AV", t: "BAV completo", edad: 88,
      inf: "Ritmo sinusal a 98 lpm con bloqueo AV completo y escape ventricular a 40 lpm; bloqueo incompleto de rama derecha. Con síncope, considerar marcapaso definitivo.",
      b: ["Ondas P regulares que no guardan relación con los QRS.", "QRS regulares y lentos (unos 40 lpm): ritmo de escape.", "El PR cambia en cada latido: disociación AV."] },
    { k: "brd", id: 621, g: "Bloqueos de rama", t: "Bloqueo de rama derecha", edad: 70,
      inf: "Ritmo sinusal; bloqueo de rama derecha.",
      b: ["QRS de 120 ms o más.", "rSR' (“orejas de conejo”) en V1–V2.", "S ancha y empastada en DI y V6."] },
    { k: "bri", id: 2741, g: "Bloqueos de rama", t: "Bloqueo de rama izquierda", edad: 300,
      inf: "Bloqueo completo de rama izquierda (informe del cardiólogo revisor).",
      b: ["QRS de 120 ms o más, con QS o rS ancho en V1–V3.", "R ancha y mellada en DI, aVL y V6, sin q septal.", "ST-T opuesto al QRS (discordante): es lo esperable en el BRI."] },
    { k: "hai", id: 1357, g: "Bloqueos de rama", t: "Hemibloqueo anterior izquierdo", edad: 73,
      inf: "Ritmo sinusal; eje desviado a la izquierda; hemibloqueo anterior izquierdo; sin otra patología.",
      b: ["Eje entre −45° y −90°: DI positivo, DII y aVF negativos.", "qR en DI y aVL; rS en DII, DIII y aVF.", "QRS menor de 120 ms."] },
    { k: "ev", id: 4079, g: "Ventriculares", t: "Extrasístoles ventriculares en bigeminia", edad: 69,
      inf: "Extrasístoles ventriculares en bigeminia; ritmo sinusal; artefacto en V2.",
      b: ["Cada latido sinusal va seguido de uno adelantado, ancho y distinto (bigeminia).", "La extrasístole no tiene P propia y su T va en sentido opuesto al QRS.", "Mide la pausa que sigue a la extrasístole."] },
    { k: "iam_inf", id: 827, g: "Isquemia", t: "Infarto inferolateral reciente", edad: 59,
      inf: "Ritmo sinusal; ondas Q en DII, DIII y aVF; supradesnivel del ST en DII, DIII, aVF, V5 y V6 con T invertidas en esas derivaciones: compatible con infarto inferolateral reciente.",
      b: ["Supradesnivel del ST en DII, DIII y aVF (cara inferior) y en V5–V6 (lateral).", "Ondas Q y T invertidas en la misma cara: infarto en evolución.", "Compara con DI y aVL, donde suele verse el cambio recíproco."] },
    { k: "iam_ant", id: 1063, g: "Isquemia", t: "IAM con supradesnivel anterior e inferior", edad: 69,
      inf: "Ritmo sinusal; supradesnivel marcado del ST en DII, DIII, aVF y V1–V5: probable infarto reciente anterior e inferior.",
      b: ["Supradesnivel del ST muy marcado de V1 a V5: cara anterior extensa.", "También hay supradesnivel en DII, DIII y aVF: compromiso inferior.", "IAM con supradesnivel del ST: activar la reperfusión de inmediato."] },
    { k: "iam_post", id: 2993, g: "Isquemia", t: "Infarto inferolateral con compromiso posterior", edad: 85,
      inf: "Ritmo sinusal; infarto agudo inferolateral con compromiso posterior verdadero.",
      b: ["Infradesnivel del ST en V1–V3: en un infarto, es la imagen en espejo de la pared posterior.", "Busca los cambios inferiores (DII, DIII, aVF) y laterales (V5–V6).", "Ante esta imagen, toma V7–V9."] },
    { k: "isq_sub", id: 1194, g: "Isquemia", t: "Infradesnivel del ST", edad: 75,
      inf: "Ritmo sinusal; infradesnivel del ST en DII, DIII, aVF y V4–V6: inespecífico, pero compatible con isquemia.",
      b: ["Infradesnivel del ST en derivaciones inferiores y laterales.", "El infradesnivel no localiza la arteria culpable.", "Interprétalo con la clínica, ECG seriados y troponina."] },
    { k: "q_inf", id: 13054, g: "Isquemia", t: "Infartos antiguos (inferior y anteroseptal)", edad: 89,
      inf: "Ritmo sinusal; eje muy desviado a la izquierda; QRS-T anormal; probable infarto anteroseptal antiguo y probable infarto inferior antiguo.",
      b: ["Ondas Q en DIII y aVF, sin supradesnivel del ST: necrosis antigua.", "Pérdida de la onda R en V1–V3: compatible con infarto anteroseptal antiguo.", "Siempre compara con un ECG previo."] },
    { k: "qtlargo", id: 320, g: "Otros", t: "QT prolongado", edad: 79,
      inf: "Ritmo sinusal, sin cambios importantes respecto a un ECG previo. La base lo clasifica como QT prolongado.",
      b: ["Mide el QT desde el inicio del QRS hasta el final de la T (en DII o V5).", "Corrígelo por la frecuencia: QTc = QT / √RR (Bazett, en segundos).", "QTc de 450 ms o más en hombres, o de 460 ms o más en mujeres = prolongado."] },
    { k: "hvi", id: 7759, g: "Otros", t: "Hipertrofia ventricular izquierda", edad: 32,
      inf: "Hipertrofia ventricular izquierda (Sokolow-Lyon 4,5 mV) con alteraciones del ST-T (cardiólogo revisor).",
      b: ["Sokolow-Lyon: S en V1 + R en V5 o V6 > 35 mm.", "Infradesnivel del ST y T negativa asimétrica en V5–V6 (patrón de sobrecarga).", "Mide los voltajes con el compás (10 mm = 1 mV)."] },
    { k: "marcapaso", id: 144, g: "Otros", t: "Ritmo de marcapaso", edad: 81,
      inf: "ECG de marcapaso.",
      b: ["Espiga vertical fina justo antes del QRS.", "QRS ancho: el ventrículo se activa desde la punta del electrodo, no por el sistema de conducción.", "Revisa que después de cada espiga ventricular venga un QRS (captura)."] }
  ];
  var DERIV = ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"];
  var NOMBRE = { I: "DI", II: "DII", III: "DIII" };
  var cache = {};

  function oscuro() { return document.body.getAttribute("data-md-color-scheme") === "slate"; }
  function css(n, d) { var v = getComputedStyle(document.body).getPropertyValue(n).trim(); return v || d; }
  function ajustar(cv) {
    var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(10, Math.round(r.width)), h = Math.max(10, Math.round(r.height));
    if (cv.width !== w * dpr || cv.height !== h * dpr) { cv.width = w * dpr; cv.height = h * dpr; }
    var ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }
  function papel(ctx, w, h, mm) {
    var fino = oscuro() ? "rgba(232,140,140,0.14)" : "rgba(214,80,80,0.16)", grueso = oscuro() ? "rgba(232,140,140,0.32)" : "rgba(214,80,80,0.36)";
    ctx.clearRect(0, 0, w, h);
    var paso = mm < 2.2 ? 5 : 1; // en pantallas chicas solo los cuadros grandes
    for (var i = 0, x = 0; x <= w; i += paso, x = i * mm) { ctx.strokeStyle = i % 5 ? fino : grueso; ctx.lineWidth = i % 5 ? 0.5 : 1; ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, h); ctx.stroke(); }
    for (var j = 0, y = 0; y <= h; j += paso, y = j * mm) { ctx.strokeStyle = j % 5 ? fino : grueso; ctx.lineWidth = j % 5 ? 0.5 : 1; ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(w, Math.round(y) + 0.5); ctx.stroke(); }
  }
  function decodificar(b64) {
    var s = atob(b64), u = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i);
    return new Int16Array(u.buffer);
  }
  function cargar(id) {
    if (!cache[id]) cache[id] = fetch(BASE + "assets/ecg-reales/" + id + ".json").then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (j) { return { fs: j.fs, d: j.d.map(decodificar) }; });
    return cache[id];
  }
  // dibuja una derivación: x0 en px, t0 y seg en segundos, y0 = línea de base en px, mmV = mm por mV
  function linea(ctx, sen, fs, x0, y0, mm, t0, seg, mmV) {
    var i0 = Math.round(t0 * fs), n = Math.round(seg * fs), k = mm * mmV / 1000, dx = mm * 25 / fs;
    var base = mediana(sen, i0, n);
    ctx.beginPath();
    for (var i = 0; i < n && i0 + i < sen.length; i++) {
      var x = x0 + i * dx, y = y0 - (sen[i0 + i] - base) * k;
      if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
  function mediana(s, i0, n) {
    var a = Array.prototype.slice.call(s, i0, i0 + n).sort(function (p, q) { return p - q; });
    return a.length ? a[a.length >> 1] : 0;
  }

  function iniciar() {
    var raiz = document.getElementById("visor-reales");
    if (!raiz || raiz.dataset.listo) return;
    raiz.dataset.listo = "1";
    var lista = raiz.querySelector(".ecgr-lista"), titulo = raiz.querySelector(".ecgr-titulo"), meta = raiz.querySelector(".ecgr-meta");
    var cv12 = raiz.querySelector(".ecgr-12"), cvT = raiz.querySelector(".ecgr-tira canvas"), rotulo = raiz.querySelector(".ecgr-tira-rotulo");
    var selD = raiz.querySelector("select[name=ampliada]"), selG = raiz.querySelector("select[name=ganancia]");
    var medida = raiz.querySelector(".ecgr-medida"), buscar = raiz.querySelector(".ecgr-buscar"), informe = raiz.querySelector(".ecgr-informe");
    var verSim = raiz.querySelector(".ecgr-sim"), estado = raiz.querySelector(".ecgr-estado");
    var actual = null, datos = null, deriv = 1, marcas = [];

    DERIV.forEach(function (d, i) { var o = document.createElement("option"); o.value = i; o.textContent = NOMBRE[d] || d; selD.appendChild(o); });
    selD.value = "1";

    var grupos = {}, optg = {};
    var elige = document.createElement("label"); elige.className = "ecgr-elegir"; elige.textContent = "ECG real ";
    var selC = document.createElement("select"); elige.appendChild(selC); lista.parentNode.insertBefore(elige, lista);
    selC.addEventListener("change", function () { elegir(selC.value); });
    CASOS.forEach(function (c) {
      if (!optg[c.g]) { optg[c.g] = document.createElement("optgroup"); optg[c.g].label = c.g; selC.appendChild(optg[c.g]); }
      var o = document.createElement("option"); o.value = c.k; o.textContent = c.t; optg[c.g].appendChild(o);
      if (!grupos[c.g]) {
        var bloque = document.createElement("div"); bloque.className = "ecgr-grupo";
        var h = document.createElement("span"); h.className = "ecgr-grupo-nombre"; h.textContent = c.g; bloque.appendChild(h);
        var ops = document.createElement("div"); ops.className = "ecgr-opciones"; bloque.appendChild(ops);
        lista.appendChild(bloque); grupos[c.g] = ops;
      }
      var b = document.createElement("button"); b.type = "button"; b.textContent = c.t; b.dataset.k = c.k;
      b.addEventListener("click", function () { elegir(c.k); });
      grupos[c.g].appendChild(b);
    });

    function caso(k) { for (var i = 0; i < CASOS.length; i++) if (CASOS[i].k === k) return CASOS[i]; return null; }
    function elegir(k, desplazar) {
      var c = caso(k); if (!c) return;
      actual = c; datos = null; marcas = []; medida.textContent = "Toca dos puntos de la tira ampliada para medir.";
      lista.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.k === k ? "true" : "false"); });
      selC.value = k;
      titulo.textContent = c.t;
      meta.textContent = "PTB-XL, registro " + c.id + " · " + (c.edad >= 300 ? "más de 89 años" : c.edad + " años") + " · 10 s, 25 mm/s";
      buscar.innerHTML = ""; c.b.forEach(function (x) { var li = document.createElement("li"); li.textContent = x; buscar.appendChild(li); });
      informe.textContent = "Informe en la base (traducido): " + c.inf;
      var tarjeta = document.querySelector('.ecg-tarjeta[data-ritmo="' + c.k + '"] .ecg-ver');
      verSim.hidden = !tarjeta;
      estado.textContent = "Cargando el trazado…"; estado.hidden = false;
      dibujar();
      cargar(c.id).then(function (d) { if (actual !== c) return; datos = d; estado.hidden = true; dibujar(); })
        .catch(function () { if (actual === c) estado.textContent = "No se pudo cargar el trazado. Revisa la conexión y vuelve a intentarlo."; });
      if (desplazar) raiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    var GEO = { filas: 4, alto: 30 }; // 3 filas de 4 derivaciones (2,5 s) + DII de ritmo; 30 mm por fila
    function dibujar() {
      var c = ajustar(cv12), mm = c.w / 250, ctx = c.ctx, mmV = +selG.value;
      cv12.style.height = Math.round(mm * GEO.alto * GEO.filas + 4) + "px";
      c = ajustar(cv12); ctx = c.ctx;
      papel(ctx, c.w, c.h, mm);
      var fg = css("--md-default-fg-color", "#1b1b1b"), rot = oscuro() ? "#f2a0a0" : "#b3261e";
      ctx.font = "600 " + Math.max(10, Math.round(mm * 3)) + "px system-ui, sans-serif";
      for (var j = 0; j < 12; j++) {
        var col = Math.floor(j / 3), fila = j % 3, x0 = col * 62.5 * mm, y0 = (fila + 0.55) * GEO.alto * mm;
        ctx.fillStyle = rot; ctx.fillText(NOMBRE[DERIV[j]] || DERIV[j], x0 + 3, fila * GEO.alto * mm + Math.max(11, mm * 4));
        if (j === deriv) { ctx.strokeStyle = rot; ctx.lineWidth = 1; ctx.strokeRect(x0 + 1, fila * GEO.alto * mm + 1, 62.5 * mm - 2, GEO.alto * mm - 2); }
        if (!datos) continue;
        ctx.strokeStyle = fg; ctx.lineWidth = 1; ctx.lineJoin = "round";
        linea(ctx, datos.d[j], datos.fs, x0, y0, mm, col * 2.5, 2.5, mmV);
        if (col) { ctx.beginPath(); ctx.moveTo(x0, y0 - 4 * mm); ctx.lineTo(x0, y0 + 4 * mm); ctx.stroke(); }
      }
      ctx.fillStyle = rot; ctx.fillText("DII", 3, 3 * GEO.alto * mm + Math.max(11, mm * 4));
      if (datos) { ctx.strokeStyle = fg; linea(ctx, datos.d[1], datos.fs, 0, 3.55 * GEO.alto * mm, mm, 0, 10, mmV); }
      tira();
    }
    function tira() {
      cvT.style.height = Math.round(cvT.getBoundingClientRect().width / 250 * 40) + "px"; // 40 mm de alto
      var c = ajustar(cvT), mm = c.w / 250, ctx = c.ctx, mmV = +selG.value;
      rotulo.textContent = NOMBRE[DERIV[deriv]] || DERIV[deriv];
      papel(ctx, c.w, c.h, mm);
      if (!datos) return;
      ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); ctx.lineWidth = 1.3; ctx.lineJoin = "round";
      linea(ctx, datos.d[deriv], datos.fs, 0, c.h * 0.55, mm, 0, 10, mmV);
      var col = oscuro() ? "#8ab4f8" : "#1a5fb4";
      marcas.forEach(function (m) {
        ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(m.x * c.w, 0); ctx.lineTo(m.x * c.w, c.h); ctx.stroke(); ctx.setLineDash([]);
        ctx.beginPath(); ctx.moveTo(m.x * c.w - 5, m.y * c.h); ctx.lineTo(m.x * c.w + 5, m.y * c.h); ctx.stroke();
      });
      if (marcas.length === 2) {
        ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(marcas[0].x * c.w, 8); ctx.lineTo(marcas[1].x * c.w, 8); ctx.stroke();
      }
    }

    cv12.addEventListener("click", function (e) {
      var r = cv12.getBoundingClientRect(), mm = r.width / 250;
      var col = Math.min(3, Math.floor((e.clientX - r.left) / (62.5 * mm))), fila = Math.floor((e.clientY - r.top) / (GEO.alto * mm));
      deriv = fila >= 3 ? 1 : col * 3 + Math.min(2, fila);
      selD.value = String(deriv); marcas = []; medida.textContent = "Toca dos puntos de la tira ampliada para medir."; dibujar();
    });
    selD.addEventListener("change", function () { deriv = +selD.value; marcas = []; dibujar(); });
    selG.addEventListener("change", dibujar);
    cvT.addEventListener("click", function (e) {
      var r = cvT.getBoundingClientRect(), p = { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
      if (marcas.length >= 2) marcas = [];
      marcas.push(p);
      if (marcas.length === 2) {
        var mm = r.width / 250, ms = Math.abs(marcas[1].x - marcas[0].x) * r.width / mm * 40;
        var mv = Math.abs(marcas[1].y - marcas[0].y) * r.height / mm / (+selG.value);
        medida.textContent = "Intervalo: " + Math.round(ms) + " ms" + (ms > 250 ? " · si es un RR, " + Math.round(60000 / ms) + " lpm" : "") +
          " · diferencia de altura: " + mv.toFixed(2).replace(".", ",") + " mV. Toca de nuevo para otra medida.";
      } else medida.textContent = "Ahora toca el segundo punto.";
      tira();
    });
    verSim.addEventListener("click", function () {
      var b = actual && document.querySelector('.ecg-tarjeta[data-ritmo="' + actual.k + '"] .ecg-ver');
      if (b) { b.click(); var a = document.getElementById("atlas-ecg"); if (a) a.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });

    // Botón "Ver ECG real" en cada tarjeta de la simulación que tiene un ejemplo real
    CASOS.forEach(function (c) {
      var t = document.querySelector('.ecg-tarjeta[data-ritmo="' + c.k + '"]');
      if (!t || t.querySelector(".ecg-real")) return;
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-real"; b.textContent = "Ver ECG real";
      b.addEventListener("click", function () { elegir(c.k, true); });
      var ver = t.querySelector(".ecg-ver");
      var caja = document.createElement("div"); caja.className = "ecg-botones";
      if (ver) { t.insertBefore(caja, ver); caja.appendChild(ver); } else t.appendChild(caja);
      caja.appendChild(b);
    });

    var pendiente = null;
    window.addEventListener("resize", function () { clearTimeout(pendiente); pendiente = setTimeout(dibujar, 120); });
    new MutationObserver(dibujar).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });
    var h = (location.hash.match(/^#real-(.+)$/) || [])[1];
    elegir(caso(h) ? h : "sinusal", !!caso(h));
  }

  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(function () { setTimeout(iniciar, 0); });
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
