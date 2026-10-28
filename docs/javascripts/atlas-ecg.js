/* La Ficha: atlas de ECG (página atlas-ecg.md).
   Corazón esquemático en 3D (Three.js, incluido en javascripts/vendor) con la conducción animada y un ECG de
   12 derivaciones sincronizado. El trazado se calcula con un modelo de dipolo cardíaco: en cada instante el corazón
   genera un vector eléctrico y cada derivación registra su proyección sobre su eje. Es un esquema docente, no una
   simulación fisiológica exacta. */
(function () {
  "use strict";

  /* ---------- Vectores y derivaciones (coordenadas de la escena: x = izquierda del paciente, y = arriba, z = adelante) ---------- */
  function v3(x, y, z) { return { x: x, y: y, z: z }; }
  function unit(a) { var n = Math.hypot(a.x, a.y, a.z) || 1; return v3(a.x / n, a.y / n, a.z / n); }
  function dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }
  function rad(g) { return g * Math.PI / 180; }
  function frontal(g) { return v3(Math.cos(rad(g)), -Math.sin(rad(g)), 0); } // ángulo hexaxial: +90° = inferior
  function horizontal(g) { return v3(Math.cos(rad(g)), 0, Math.sin(rad(g))); } // 0° = izquierda, 90° = anterior

  var DERIV = {
    "I": { eje: frontal(0), cara: "lateral alta", ganancia: 1 },
    "II": { eje: frontal(60), cara: "inferior", ganancia: 1 },
    "III": { eje: frontal(120), cara: "inferior", ganancia: 1 },
    "aVR": { eje: frontal(-150), cara: "la cavidad del corazón desde el hombro derecho (no mira una pared)", ganancia: 1 },
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

  // Componentes del vector cardíaco: tiempo desde el inicio de la activación (ms), ancho (ms), dirección y amplitud (mV)
  var ONDA_P = [{ c: 45, s: 20, d: unit(v3(0.5, -0.85, 0.1)), a: 0.17 }];
  var ONDA_QRS = [
    { c: 12, s: 7, d: unit(v3(-0.45, -0.15, 0.85)), a: 0.25 },   // septo: de izquierda a derecha
    { c: 40, s: 11, d: unit(v3(0.63, -0.63, -0.46)), a: 1.6 },   // ventrículo izquierdo: masa principal
    { c: 66, s: 9, d: unit(v3(-0.35, 0.55, -0.6)), a: 0.42 }    // bases: activación terminal
  ];
  var ONDA_T = [{ c: 250, s: 48, d: unit(v3(0.55, -0.65, 0.25)), a: 0.34 }, { c: 300, s: 28, d: unit(v3(0.55, -0.65, 0.25)), a: 0.1 }];

  function gauss(t, c, s) { var u = (t - c) / s; return Math.exp(-0.5 * u * u); }
  function sumar(acc, comps, t) {
    for (var i = 0; i < comps.length; i++) {
      var k = comps[i], g = k.a * gauss(t, k.c, k.s);
      acc.x += g * k.d.x; acc.y += g * k.d.y; acc.z += g * k.d.z;
    }
  }

  /* ---------- Ritmos ---------- */
  // Cada ritmo entrega los latidos que rodean un instante: inicio de la onda P (p) y del QRS (q), en ms.
  var RITMOS = {
    sinusal: {
      nombre: "Ritmo sinusal normal",
      ciclo: 800, pr: 160,
      latidos: function (t) {
        var k = Math.floor(t / this.ciclo), out = [];
        for (var i = k - 1; i <= k + 1; i++) out.push({ p: i * this.ciclo, q: i * this.ciclo + this.pr });
        return out;
      }
    }
  };

  function vector(ritmo, t) {
    var acc = v3(0, 0, 0), ls = ritmo.latidos(t);
    for (var i = 0; i < ls.length; i++) {
      var b = ls[i];
      if (b.p !== null && t >= b.p - 100) sumar(acc, ONDA_P, t - b.p);
      if (b.q !== null && t >= b.q - 100) { sumar(acc, ONDA_QRS, t - b.q); sumar(acc, ONDA_T, t - b.q); }
    }
    return acc;
  }
  function senal(ritmo, deriv, t) { var d = DERIV[deriv]; return dot(vector(ritmo, t), d.eje) * d.ganancia; }
  function ultimo(ritmo, t) {
    var ls = ritmo.latidos(t), b = null;
    for (var i = 0; i < ls.length; i++) if (ls[i].p <= t) b = ls[i];
    return b;
  }
  function fase(ritmo, t) {
    var b = ultimo(ritmo, t);
    if (!b) return "";
    var dt = t - b.p;
    if (dt < 90) return "<strong>Onda P</strong>: el nódulo sinusal descarga y la despolarización recorre las aurículas.";
    if (dt < ritmo.pr) return "<strong>Segmento PR</strong>: el impulso se retrasa en el nódulo AV (las aurículas terminan de contraerse).";
    if (dt < ritmo.pr + 90) return "<strong>Complejo QRS</strong>: el haz de His, sus ramas y la red de Purkinje despolarizan los ventrículos; primero el septo, luego la punta y al final las bases.";
    if (dt < ritmo.pr + 190) return "<strong>Segmento ST</strong>: los ventrículos están despolarizados por completo (línea isoeléctrica).";
    if (dt < ritmo.pr + 360) return "<strong>Onda T</strong>: repolarización de los ventrículos.";
    return "<strong>Diástole</strong>: línea de base hasta la próxima descarga del nódulo sinusal.";
  }

  /* ---------- Colores ---------- */
  function css(nombre, defecto) {
    var v = getComputedStyle(document.body).getPropertyValue(nombre).trim();
    return v || defecto;
  }
  function oscuro() { return document.body.getAttribute("data-md-color-scheme") === "slate"; }

  /* ---------- Trazado del ECG en un canvas (papel milimetrado, 25 mm/s y 10 mm/mV) ---------- */
  function papel(ctx, w, h, mm) {
    var fino = oscuro() ? "rgba(232,140,140,0.14)" : "rgba(214,80,80,0.16)";
    var grueso = oscuro() ? "rgba(232,140,140,0.32)" : "rgba(214,80,80,0.36)";
    ctx.clearRect(0, 0, w, h);
    for (var i = 0, x = 0; x <= w; i++, x = i * mm) {
      ctx.strokeStyle = i % 5 ? fino : grueso; ctx.lineWidth = i % 5 ? 0.5 : 1;
      ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, 0); ctx.lineTo(Math.round(x) + 0.5, h); ctx.stroke();
    }
    for (var j = 0, y = 0; y <= h; j++, y = j * mm) {
      ctx.strokeStyle = j % 5 ? fino : grueso; ctx.lineWidth = j % 5 ? 0.5 : 1;
      ctx.beginPath(); ctx.moveTo(0, Math.round(y) + 0.5); ctx.lineTo(w, Math.round(y) + 0.5); ctx.stroke();
    }
  }
  function ajustar(canvas) {
    var r = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = Math.max(10, Math.round(r.width)), h = Math.max(10, Math.round(r.height));
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) { canvas.width = w * dpr; canvas.height = h * dpr; }
    var ctx = canvas.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }

  /* ---------- Corazón 3D ---------- */
  function corazon(THREE, cont) {
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return null; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    cont.appendChild(renderer.domElement);
    var escena = new THREE.Scene(), camara = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camara.position.set(0, 0, 21);
    escena.add(new THREE.AmbientLight(0xffffff, 0.75));
    var luz = new THREE.DirectionalLight(0xffffff, 0.65); luz.position.set(4, 6, 10); escena.add(luz);
    var grupo = new THREE.Group(); escena.add(grupo);
    grupo.position.set(-0.3, 0.6, 0);

    var BASE = new THREE.Color(0.86, 0.66, 0.62), BASE_A = new THREE.Color(0.9, 0.76, 0.7), FRENTE = new THREE.Color(0.86, 0.14, 0.1), DESP = new THREE.Color(0.97, 0.5, 0.36);
    var CARA = new THREE.Color(0.55, 0.74, 0.8);

    function material(op) {
      return new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: op, roughness: 0.65, metalness: 0, side: THREE.DoubleSide, depthWrite: false });
    }
    // Ventrículo: sólido de revolución con forma de bala, orientado de la base a la punta
    function ventriculo(R, L, base, punta, aplanar) {
      var pts = [];
      for (var i = 0; i <= 28; i++) { var s = i / 28; pts.push(new THREE.Vector2(R * Math.pow(Math.max(0, 1 - Math.pow(s, 2.3)), 0.5) + 0.001, -L * s)); }
      var g = new THREE.LatheGeometry(pts, 44);
      if (aplanar) g.scale(1, 1, aplanar);
      var eje = new THREE.Vector3(punta.x - base.x, punta.y - base.y, punta.z - base.z).normalize();
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, -1, 0), eje));
      g.translate(base.x, base.y, base.z);
      return g;
    }
    function esfera(c, r, sx, sy, sz) {
      var g = new THREE.SphereGeometry(r, 32, 22); g.scale(sx || 1, sy || 1, sz || 1); g.translate(c.x, c.y, c.z); return g;
    }
    function camaraCardiaca(geo, op, tipo) {
      var n = geo.attributes.position.count;
      geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3), 3));
      var m = new THREE.Mesh(geo, material(op)); m.userData.tipo = tipo; grupo.add(m); return m;
    }

    var VI = camaraCardiaca(ventriculo(2.0, 4.6, v3(-0.1, 1.0, -0.7), v3(2.6, -3.3, 1.3)), 0.62, "v");
    var VD = camaraCardiaca(ventriculo(1.85, 3.9, v3(-1.4, 0.7, 0.7), v3(1.2, -3.1, 2.1), 0.72), 0.5, "v");
    var AD = camaraCardiaca(esfera(v3(-2.3, 1.5, 0.2), 1.45, 1, 1.05, 0.95), 0.5, "a");
    var AI = camaraCardiaca(esfera(v3(0.7, 1.95, -1.5), 1.35, 1.15, 0.9, 0.9), 0.5, "a");

    // Grandes vasos (solo referencia anatómica)
    var vaso = new THREE.MeshStandardMaterial({ color: 0xd9a99c, transparent: true, opacity: 0.28, roughness: 0.7, depthWrite: false });
    var venoso = new THREE.MeshStandardMaterial({ color: 0x8fa6c4, transparent: true, opacity: 0.25, roughness: 0.7, depthWrite: false });
    function tubo(puntos, r, mat) {
      var curva = new THREE.CatmullRomCurve3(puntos.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 48, r, 14, false), mat); m.renderOrder = -1; grupo.add(m); return m;
    }
    tubo([[0.0, 1.1, -0.2], [-0.2, 3.0, 0.1], [0.4, 4.4, -0.6], [1.5, 4.1, -1.8], [1.9, 2.0, -2.4], [1.9, -1.0, -2.4]], 0.55, vaso); // aorta
    tubo([[-0.6, 1.0, 1.4], [-0.1, 2.6, 1.3], [0.6, 3.3, 0.6]], 0.5, vaso); // tronco pulmonar
    tubo([[-2.6, 4.6, -0.5], [-2.5, 3.4, -0.4], [-2.4, 2.7, -0.3]], 0.42, venoso); // vena cava superior
    tubo([[-2.3, 0.3, -0.5], [-2.2, -0.8, -0.7], [-2.1, -1.9, -0.9]], 0.45, venoso); // vena cava inferior

    // Sistema de conducción. Tiempos en ms desde la descarga sinusal (PR = 160 ms).
    var SA = new THREE.Vector3(-2.05, 2.55, 0.65), NAV = new THREE.Vector3(-0.85, 0.35, 0.25), HIS = new THREE.Vector3(-0.45, -0.25, 0.35);
    var conduccion = [];
    var MAT_C = new THREE.MeshBasicMaterial({ color: 0x1d5a66 });
    function via(puntos, t0, t1, nombre, r) {
      var curva = new THREE.CatmullRomCurve3(puntos.map(function (p) { return p.isVector3 ? p : new THREE.Vector3(p[0], p[1], p[2]); }));
      var m = new THREE.Mesh(new THREE.TubeGeometry(curva, 40, r || 0.07, 8, false), MAT_C.clone());
      grupo.add(m); conduccion.push({ malla: m, curva: curva, t0: t0, t1: t1, nombre: nombre });
    }
    via([SA, [-1.7, 1.6, 0.6], [-1.2, 0.9, 0.45], NAV], 0, 35, "internodal");
    via([SA, [-1.0, 2.6, 0.0], [0.2, 2.4, -0.9], [0.9, 2.2, -1.3]], 0, 45, "Bachmann", 0.05);
    via([NAV, HIS], 115, 125, "His", 0.09);
    via([HIS, [0.05, -1.2, 0.15], [0.9, -2.2, 0.55], [1.9, -2.9, 1.0]], 125, 150, "rama izquierda");
    via([HIS, [-0.6, -1.2, 0.95], [-0.1, -2.2, 1.45], [0.8, -2.8, 1.85]], 125, 152, "rama derecha");
    [[[1.9, -2.9, 1.0], [2.3, -1.5, 1.7], [2.0, 0.0, 1.6]], [[1.9, -2.9, 1.0], [2.6, -1.8, 0.2], [2.4, -0.2, -0.6]],
      [[1.9, -2.9, 1.0], [1.0, -2.0, -0.6], [0.6, -0.5, -1.0]], [[0.8, -2.8, 1.85], [0.2, -1.6, 2.3], [-0.6, -0.2, 2.0]],
      [[0.8, -2.8, 1.85], [-0.6, -2.0, 1.7], [-1.5, -0.6, 1.2]]].forEach(function (p) { via(p, 150, 172, "Purkinje", 0.04); });
    function nodo(p, r) { var m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), MAT_C.clone()); m.position.copy(p); grupo.add(m); return m; }
    var nodoSA = nodo(SA, 0.2), nodoAV = nodo(NAV, 0.18);
    var pulso = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), new THREE.MeshBasicMaterial({ color: 0xffb21e }));
    grupo.add(pulso); pulso.visible = false;

    // Tiempo de activación de cada vértice
    function tiempos(m) {
      var pos = m.geometry.attributes.position, n = pos.count, t = new Float32Array(n), p = new THREE.Vector3();
      var fuentes = m.userData.tipo === "a" ? [[SA, 0, 26]] : [[new THREE.Vector3(0.0, -0.9, 0.2), 0, 17], [new THREE.Vector3(1.9, -2.6, 0.9), 8, 17], [new THREE.Vector3(0.7, -2.6, 1.8), 10, 17]];
      for (var i = 0; i < n; i++) {
        p.fromBufferAttribute(pos, i); var mejor = 1e9;
        for (var k = 0; k < fuentes.length; k++) mejor = Math.min(mejor, fuentes[k][1] + p.distanceTo(fuentes[k][0]) * fuentes[k][2]);
        t[i] = mejor;
      }
      m.userData.act = t; m.userData.cara = new Float32Array(n);
    }
    [VI, VD, AD, AI].forEach(tiempos);

    var centro = new THREE.Vector3(0.3, -0.7, 0.3), flecha = null, ojo = null;
    function marcarDerivacion(nombre) {
      var e = DERIV[nombre].eje, dir = new THREE.Vector3(e.x, e.y, e.z).normalize();
      if (flecha) grupo.remove(flecha);
      if (ojo) grupo.remove(ojo);
      flecha = new THREE.ArrowHelper(dir, centro, 6.2, 0x1d5a66, 0.7, 0.4); grupo.add(flecha);
      ojo = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 14), new THREE.MeshBasicMaterial({ color: 0x1d5a66 }));
      ojo.position.copy(centro).addScaledVector(dir, 6.6); grupo.add(ojo);
      [VI, VD].forEach(function (m) {
        var pos = m.geometry.attributes.position, p = new THREE.Vector3(), c = m.userData.cara;
        for (var i = 0; i < pos.count; i++) {
          p.fromBufferAttribute(pos, i).sub(centro);
          var f = p.normalize().dot(dir);
          c[i] = nombre === "aVR" ? 0 : Math.max(0, (f - 0.45) / 0.55);
        }
      });
      [AD, AI].forEach(function (m) { m.userData.cara.fill(0); });
    }

    var tmp = new THREE.Color();
    function pintar(m, tAct, despol) {
      var act = m.userData.act, cara = m.userData.cara, col = m.geometry.attributes.color, arr = col.array;
      for (var i = 0; i < act.length; i++) {
        var dt = tAct === null ? -1 : tAct - act[i];
        tmp.copy(m.userData.tipo === "a" ? BASE_A : BASE);
        if (cara[i] > 0) tmp.lerp(CARA, 0.75 * cara[i]);
        if (dt >= 0) {
          if (dt < 22) tmp.lerp(FRENTE, 1 - dt / 44);
          else if (dt < despol) tmp.lerp(DESP, 0.75);
          else if (dt < despol + 140) tmp.lerp(DESP, 0.75 * (1 - (dt - despol) / 140));
        }
        arr[i * 3] = tmp.r; arr[i * 3 + 1] = tmp.g; arr[i * 3 + 2] = tmp.b;
      }
      col.needsUpdate = true;
    }

    function actualizar(ritmo, t) {
      var b = ultimo(ritmo, t);
      var dtP = b && b.p !== null ? t - b.p : null, dtQ = b && b.q !== null ? t - b.q : null;
      pintar(AD, dtP, 110); pintar(AI, dtP, 110);
      pintar(VI, dtQ, 230); pintar(VD, dtQ, 230);
      var activo = null;
      conduccion.forEach(function (c) {
        var on = dtP !== null && dtP >= c.t0 && dtP <= c.t1 + 25;
        c.malla.material.color.setHex(on ? 0xffb21e : 0x1d5a66);
        if (dtP !== null && dtP >= c.t0 && dtP <= c.t1 && (!activo || c.nombre !== "Purkinje")) activo = c;
      });
      nodoSA.material.color.setHex(dtP !== null && dtP < 30 ? 0xffb21e : 0x1d5a66);
      nodoAV.material.color.setHex(dtP !== null && dtP >= 30 && dtP < 125 ? 0xffb21e : 0x1d5a66);
      if (activo) { pulso.visible = true; pulso.position.copy(activo.curva.getPointAt(Math.min(1, (dtP - activo.t0) / (activo.t1 - activo.t0)))); }
      else if (dtP !== null && dtP >= 35 && dtP < 115) { pulso.visible = true; pulso.position.copy(NAV); }
      else pulso.visible = false;
    }

    var ETIQ = [["Nódulo sinusal", SA], ["Nódulo AV", NAV], ["Haz de His", HIS], ["Aurícula derecha", new THREE.Vector3(-3.6, 1.2, 0.6)],
      ["Aurícula izquierda", new THREE.Vector3(1.6, 2.9, -1.2)], ["Ventrículo derecho", new THREE.Vector3(-2.3, -0.9, 1.9)],
      ["Ventrículo izquierdo", new THREE.Vector3(2.9, -0.8, 0.3)], ["Rama izquierda", new THREE.Vector3(1.5, -2.6, 0.8)], ["Rama derecha", new THREE.Vector3(-1.1, -2.0, 1.4)]];
    var capa = document.createElement("div"); capa.className = "ecg-etiquetas"; cont.appendChild(capa);
    var etiquetas = ETIQ.map(function (e) { var d = document.createElement("span"); d.textContent = e[0]; capa.appendChild(d); return { el: d, p: e[1] }; });

    var ancho = 0, alto = 0;
    function render() {
      var w = cont.clientWidth, h = cont.clientHeight;
      if (w !== ancho || h !== alto) { ancho = w; alto = h; renderer.setSize(w, h, false); camara.aspect = w / h; camara.updateProjectionMatrix(); camara.position.z = w < h ? 24 : 21; }
      renderer.render(escena, camara);
      if (!capa.hidden) {
        var p = new THREE.Vector3();
        etiquetas.forEach(function (e) {
          p.copy(e.p); grupo.localToWorld(p); p.project(camara);
          var x = Math.min(Math.round((p.x + 1) / 2 * w), w - e.el.offsetWidth - 8);
          e.el.style.transform = "translate(" + x + "px," + Math.round((1 - p.y) / 2 * h) + "px)";
        });
      }
    }
    // Girar con el dedo (horizontal) o con el mouse (en ambos ejes); el desplazamiento vertical en el celular mueve la página
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
      reiniciar: function () { grupo.rotation.set(0, 0, 0); }
    };
  }

  /* ---------- Página ---------- */
  function iniciar() {
    var raiz = document.getElementById("atlas-ecg");
    if (!raiz || raiz.getAttribute("data-lf") === "1") return;
    raiz.setAttribute("data-lf", "1");
    var ritmo = RITMOS[raiz.getAttribute("data-ritmo") || "sinusal"], deriv = "II";
    var vista = raiz.querySelector(".ecg-3d"), tira = raiz.querySelector(".ecg-tira canvas"), rotulo = raiz.querySelector(".ecg-tira-rotulo");
    var textoFase = raiz.querySelector(".ecg-fase"), textoCara = raiz.querySelector(".ecg-cara");
    var boton = raiz.querySelector("[data-accion=reproducir]"), velocidad = raiz.querySelector("select[name=velocidad]");
    var grilla = raiz.querySelector(".ecg-12");

    var heart = window.THREE ? corazon(window.THREE, vista) : null;
    if (!heart) { vista.classList.add("ecg-sin-3d"); vista.innerHTML = "<p>Este navegador no puede mostrar el corazón en 3D. El trazado funciona igual.</p>"; }

    // 12 derivaciones (un latido cada una); tocar una la selecciona
    var minis = ORDEN.map(function (n) {
      var b = document.createElement("button"); b.type = "button"; b.className = "ecg-mini"; b.setAttribute("data-deriv", n);
      b.innerHTML = "<span>" + n + "</span><canvas></canvas>"; grilla.appendChild(b);
      b.addEventListener("click", function () { elegir(n); });
      return b;
    });
    function dibujarMinis() {
      minis.forEach(function (b) {
        var n = b.getAttribute("data-deriv"), c = ajustar(b.querySelector("canvas")), mm = c.w / 26;
        papel(c.ctx, c.w, c.h, mm);
        c.ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); c.ctx.lineWidth = 1.3; c.ctx.beginPath();
        for (var x = 0; x <= c.w; x++) {
          var t = 700 + (x / mm) * 40 - 60, y = c.h / 2 - senal(ritmo, n, t) * 10 * mm * 0.6;
          if (x) c.ctx.lineTo(x, y); else c.ctx.moveTo(x, y);
        }
        c.ctx.stroke();
      });
    }
    function elegir(n) {
      deriv = n;
      minis.forEach(function (b) { b.classList.toggle("ecg-activa", b.getAttribute("data-deriv") === n); b.setAttribute("aria-pressed", b.getAttribute("data-deriv") === n); });
      rotulo.textContent = n;
      textoCara.innerHTML = "<strong>" + n + "</strong> mira la cara <strong>" + DERIV[n].cara + "</strong>. La flecha muestra hacia dónde apunta su polo positivo: lo que se acerca a él se dibuja hacia arriba; lo que se aleja, hacia abajo.";
      if (n === "aVR") textoCara.innerHTML = "<strong>aVR</strong> mira " + DERIV[n].cara + ". En el ritmo sinusal casi todo se aleja de ella: P, QRS y T son <strong>negativos</strong>.";
      if (heart) heart.marcarDerivacion(n);
    }

    var t = 0, ultimoReloj = null, corriendo = !window.matchMedia("(prefers-reduced-motion: reduce)").matches, visible = true;
    function rotularBoton() { boton.textContent = corriendo ? "Pausa" : "Reproducir"; boton.setAttribute("aria-pressed", corriendo); }
    boton.addEventListener("click", function () { corriendo = !corriendo; rotularBoton(); });
    raiz.querySelector("[data-accion=girar]").addEventListener("click", function () { if (heart) heart.reiniciar(); });
    var nombres = raiz.querySelector("input[name=nombres]");
    nombres.addEventListener("change", function () { if (heart) heart.nombres(nombres.checked); });
    rotularBoton();

    function dibujarTira() {
      var c = ajustar(tira), mm = c.w / 75, ventana = 3000; // 3 segundos a 25 mm/s
      papel(c.ctx, c.w, c.h, mm);
      var cursor = (t % ventana) / ventana * c.w, inicio = t - (t % ventana), hueco = 14;
      c.ctx.strokeStyle = css("--md-default-fg-color", "#1b1b1b"); c.ctx.lineWidth = 1.6; c.ctx.beginPath();
      var abierto = false;
      for (var x = 0; x <= c.w; x++) {
        if (x > cursor && x < cursor + hueco) { abierto = false; continue; }
        var tt = (x <= cursor ? inicio : inicio - ventana) + x / c.w * ventana;
        if (tt < 0) { abierto = false; continue; }
        var y = c.h * 0.6 - senal(ritmo, deriv, tt) * 10 * mm;
        if (abierto) c.ctx.lineTo(x, y); else { c.ctx.moveTo(x, y); abierto = true; }
      }
      c.ctx.stroke();
      c.ctx.fillStyle = "#d9481f"; c.ctx.beginPath(); c.ctx.arc(cursor, c.h * 0.6 - senal(ritmo, deriv, t) * 10 * mm, 3.2, 0, 2 * Math.PI); c.ctx.fill();
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
    raiz.querySelector(".ecg-ritmo").textContent = ritmo.nombre;
    raiz.ecgTiempo = function (ms) { t = ms; }; // para revisar un instante (pruebas)
    elegir("II");
    dibujarMinis();
    requestAnimationFrame(cuadro);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(iniciar);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
