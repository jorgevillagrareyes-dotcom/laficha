/* La Ficha: mejoras de lectura y de estudio. Sin dependencias. */
(function () {
  "use strict";

  // Barra fina de progreso de lectura bajo el encabezado
  function barraProgreso() {
    if (!document.querySelector(".md-content h1")) return;
    var barra = document.querySelector(".lf-progreso");
    if (!barra) {
      barra = document.createElement("div");
      barra.className = "lf-progreso";
      document.body.appendChild(barra);
    }
    function actualizar() {
      var h = document.documentElement;
      var total = h.scrollHeight - h.clientHeight;
      barra.style.transform = "scaleX(" + (total > 0 ? Math.min(1, h.scrollTop / total) : 0) + ")";
    }
    window.addEventListener("scroll", actualizar, { passive: true });
    actualizar();
  }

  // Botón para abrir o cerrar todas las respuestas de repaso
  function botonRepaso() {
    var preguntas = document.querySelectorAll("details.repaso");
    if (preguntas.length < 2) return;
    var primero = preguntas[0];
    if (primero.previousElementSibling && primero.previousElementSibling.classList.contains("lf-repaso-todas")) return;
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "lf-repaso-todas md-button";
    boton.textContent = "Mostrar todas las respuestas";
    boton.addEventListener("click", function () {
      var abrir = boton.getAttribute("data-abiertas") !== "1";
      preguntas.forEach(function (d) { d.open = abrir; });
      boton.setAttribute("data-abiertas", abrir ? "1" : "0");
      boton.textContent = abrir ? "Ocultar todas las respuestas" : "Mostrar todas las respuestas";
    });
    primero.parentNode.insertBefore(boton, primero);
  }

  // Al imprimir, abrir las preguntas de repaso para que salgan las respuestas
  function impresion() {
    var abiertas = [];
    window.addEventListener("beforeprint", function () {
      abiertas = [];
      document.querySelectorAll("details").forEach(function (d) {
        if (!d.open) { abiertas.push(d); d.open = true; }
      });
    });
    window.addEventListener("afterprint", function () {
      abiertas.forEach(function (d) { d.open = false; });
    });
  }


  // Búsqueda sin tildes ni variantes: completa la consulta antes de que la lea el buscador
  var SINONIMOS = {
    hipercalemia: "hiperkalemia", hipocalemia: "hipokalemia", hiperpotasemia: "hiperkalemia",
    hipopotasemia: "hipokalemia", glucemia: "glicemia", hiperglucemia: "hiperglicemia",
    hipoglucemia: "hipoglicemia"
  };
  var acentos = null;
  function cargarAcentos() {
    if (acentos !== null) return;
    acentos = {};
    var base = document.querySelector("script[src*='javascripts/laficha.js']");
    var url = base ? base.src.replace(/javascripts\/laficha\.js.*$/, "search/acentos.json") : "search/acentos.json";
    try {
      fetch(url).then(function (r) { return r.ok ? r.json() : {}; })
        .then(function (m) { acentos = m || {}; })
        .catch(function () {});
    } catch (e) { /* sin fetch: se busca tal cual */ }
  }
  function normalizarConsulta(valor) {
    return valor.replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g, function (palabra) {
      var minus = palabra.toLowerCase();
      if (SINONIMOS[minus]) return SINONIMOS[minus];
      return (acentos && acentos[minus]) || palabra;
    });
  }
  function busquedaSinTildes() {
    var campo = document.querySelector(".md-search__input");
    if (!campo || campo.getAttribute("data-lf") === "1") return;
    campo.setAttribute("data-lf", "1");
    campo.addEventListener("focus", cargarAcentos);
    // Captura en window: corre antes que los manejadores del buscador
    window.addEventListener("input", function (ev) {
      if (ev.target !== campo) return;
      var nuevo = normalizarConsulta(campo.value);
      if (nuevo !== campo.value) {
        var alFinal = campo.selectionStart === campo.value.length;
        campo.value = nuevo;
        if (alFinal) campo.setSelectionRange(nuevo.length, nuevo.length);
      }
    }, true);
  }

  // Modo estudio: estudiados, guardados y tamaño de letra (se guardan en este navegador)
  var BASE = (function () {
    var sc = document.querySelector("script[src*='javascripts/laficha.js']");
    return sc ? sc.src.replace(/javascripts\/laficha\.js.*$/, "") : location.href.replace(/[^/]*$/, "");
  })();
  function leer(clave, def) {
    try { var v = localStorage.getItem("laficha:" + clave); return v ? JSON.parse(v) : def; } catch (e) { return def; }
  }
  function guardar(clave, valor) {
    try { localStorage.setItem("laficha:" + clave, JSON.stringify(valor)); } catch (e) { /* almacenamiento bloqueado */ }
  }
  function claveDe(url) {
    var u = new URL(url, location.href).href.split("#")[0].split("?")[0];
    return u.indexOf(BASE) === 0 ? u.slice(BASE.length) : null;
  }
  function aplicarEscala() {
    document.documentElement.style.setProperty("--lf-escala", leer("escala", 1));
  }
  function barraEstudio() {
    var h1 = document.querySelector(".md-content .md-typeset h1");
    var ficha = document.querySelector(".md-typeset .ficha");
    if (!h1 || !ficha || document.querySelector(".lf-estudio")) return;
    var clave = claveDe(location.href);
    var titulo = h1.textContent.replace(/¶$/, "").trim();
    var barra = document.createElement("div");
    barra.className = "lf-estudio";
    barra.innerHTML =
      '<button type="button" class="lf-btn" data-lista="estudiados"><span class="lf-ico"></span>Estudiado</button>' +
      '<button type="button" class="lf-btn" data-lista="guardados"><span class="lf-ico"></span>Guardar</button>' +
      '<span class="lf-sep"></span>' +
      '<button type="button" class="lf-btn lf-letra" data-paso="-0.1" title="Letra más pequeña">A−</button>' +
      '<button type="button" class="lf-btn lf-letra" data-paso="0.1" title="Letra más grande">A+</button>';
    h1.parentNode.insertBefore(barra, h1.nextSibling);
    function pintar() {
      barra.querySelectorAll("[data-lista]").forEach(function (b) {
        var lista = leer(b.getAttribute("data-lista"), {});
        var activo = !!lista[clave];
        b.classList.toggle("lf-activo", activo);
        b.setAttribute("aria-pressed", activo ? "true" : "false");
        if (b.getAttribute("data-lista") === "guardados") b.lastChild.textContent = activo ? "Guardado" : "Guardar";
      });
    }
    barra.addEventListener("click", function (ev) {
      var b = ev.target.closest("button");
      if (!b) return;
      if (b.hasAttribute("data-lista")) {
        var nombre = b.getAttribute("data-lista");
        var lista = leer(nombre, {});
        if (lista[clave]) delete lista[clave]; else lista[clave] = { titulo: titulo, fecha: Date.now() };
        guardar(nombre, lista);
        pintar();
      } else if (b.hasAttribute("data-paso")) {
        var escala = Math.round(Math.min(1.4, Math.max(0.8, leer("escala", 1) + parseFloat(b.getAttribute("data-paso")))) * 10) / 10;
        guardar("escala", escala);
        aplicarEscala();
      }
    });
    pintar();
  }
  // En índices y listas: marca los temas estudiados y guardados
  function marcarEnlaces() {
    var est = leer("estudiados", {}), fav = leer("guardados", {});
    if (!Object.keys(est).length && !Object.keys(fav).length) return;
    document.querySelectorAll(".md-content .md-typeset a[href$='.html'], .md-nav__link[href$='.html']").forEach(function (a) {
      var k = claveDe(a.getAttribute("href"));
      if (!k) return;
      a.classList.toggle("lf-estudiado", !!est[k]);
      a.classList.toggle("lf-guardado", !!fav[k]);
    });
  }
  // Página "Mis temas"
  function misTemas() {
    var caja = document.getElementById("lf-mis-temas");
    if (!caja) return;
    function lista(nombre, vacio) {
      var datos = leer(nombre, {});
      var claves = Object.keys(datos).sort(function (a, b) { return datos[b].fecha - datos[a].fecha; });
      if (!claves.length) return "<p class='lf-vacio'>" + vacio + "</p>";
      return "<ul>" + claves.map(function (k) {
        return "<li><a href='" + BASE + k + "'>" + datos[k].titulo.replace(/</g, "&lt;") + "</a> " +
          "<button type='button' class='lf-quitar' data-lista='" + nombre + "' data-clave='" + k + "' title='Quitar'>×</button></li>";
      }).join("") + "</ul>";
    }
    function pintar() {
      var total = parseInt(caja.getAttribute("data-total"), 10) || 0;
      var n = Object.keys(leer("estudiados", {})).length;
      caja.innerHTML =
        "<p class='lf-avance'><strong>" + n + "</strong> de " + total + " resúmenes marcados como estudiados</p>" +
        "<div class='lf-avance-barra'><span style='width:" + (total ? Math.min(100, 100 * n / total) : 0) + "%'></span></div>" +
        "<h2>Guardados</h2>" + lista("guardados", "Aún no guardas temas. Usa el botón «Guardar» al inicio de cada resumen.") +
        "<h2>Estudiados</h2>" + lista("estudiados", "Aún no marcas temas como estudiados.");
    }
    caja.addEventListener("click", function (ev) {
      var b = ev.target.closest(".lf-quitar");
      if (!b) return;
      var datos = leer(b.getAttribute("data-lista"), {});
      delete datos[b.getAttribute("data-clave")];
      guardar(b.getAttribute("data-lista"), datos);
      pintar();
    });
    pintar();
  }

  // Sin conexión: registra el service worker y permite descargar todo el sitio
  var swListo = null;
  function registrarSW() {
    if (swListo !== null) return;
    swListo = false;
    if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) return;
    try {
      navigator.serviceWorker.register(BASE + "sw.js", { scope: BASE }).then(function () { swListo = true; }).catch(function () {});
    } catch (e) { /* el navegador no lo permite (por ejemplo, en una vista incrustada) */ }
  }
  function botonSinConexion() {
    var caja = document.getElementById("lf-sin-conexion");
    if (!caja || caja.getAttribute("data-lf") === "1") return;
    caja.setAttribute("data-lf", "1");
    if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) {
      caja.innerHTML = "<p class='lf-vacio'>Este navegador no permite guardar el sitio. Usa la versión descargable (zip) indicada abajo.</p>";
      return;
    }
    fetch(BASE + "offline.json").then(function (r) { return r.json(); }).then(function (info) {
      var mb = Math.round(info.bytes / 1048576);
      caja.innerHTML = "<button type='button' class='lf-btn lf-descargar'>Descargar todo el sitio (" + mb + " MB)</button>" +
        "<p class='lf-estado'></p>";
      var boton = caja.querySelector("button"), estado = caja.querySelector(".lf-estado");
      boton.addEventListener("click", function () {
        boton.disabled = true;
        estado.textContent = "Preparando…";
        navigator.serviceWorker.ready.then(function (reg) {
          navigator.serviceWorker.addEventListener("message", function (ev) {
            if (ev.data.tipo === "avance") estado.textContent = "Guardando " + ev.data.hechos + " de " + ev.data.total + " archivos…";
            if (ev.data.tipo === "listo") { estado.textContent = "Listo: el sitio completo quedó guardado en este dispositivo."; guardar("offline", Date.now()); }
          });
          reg.active.postMessage({ tipo: "descargar", base: BASE, archivos: info.archivos });
        });
      });
      var previo = leer("offline", 0);
      if (previo) estado.textContent = "Última descarga: " + new Date(previo).toLocaleDateString("es-CL") + ". Vuelve a descargar para actualizar.";
    }).catch(function () { caja.innerHTML = ""; });
  }

  // Preguntas del día: 5 casos clínicos de especialidades distintas, fijos por fecha
  function azar(semilla) {
    // Generador pseudoaleatorio reproducible (mulberry32)
    return function () {
      semilla |= 0; semilla = (semilla + 0x6D2B79F5) | 0;
      var t = Math.imul(semilla ^ (semilla >>> 15), 1 | semilla);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hoy() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function elegir(preguntas, aleatorio) {
    var porEsp = {};
    preguntas.forEach(function (q, i) { (porEsp[q.e] = porEsp[q.e] || []).push(i); });
    var esps = Object.keys(porEsp).sort();
    for (var i = esps.length - 1; i > 0; i--) {
      var j = Math.floor(aleatorio() * (i + 1)), t = esps[i]; esps[i] = esps[j]; esps[j] = t;
    }
    return esps.slice(0, 5).map(function (e) {
      var lista = porEsp[e];
      return lista[Math.floor(aleatorio() * lista.length)];
    });
  }
  function preguntasDelDia() {
    var caja = document.getElementById("lf-preguntas");
    if (!caja || caja.getAttribute("data-lf") === "1") return;
    caja.setAttribute("data-lf", "1");
    var historial = document.getElementById("lf-historial");
    fetch(BASE + "preguntas.json").then(function (r) { return r.json(); }).then(function (preguntas) {
      var fecha = hoy();
      var semilla = parseInt(fecha.replace(/-/g, ""), 10);
      function mostrar(indices, etiqueta) {
        var reg = leer("respuestas", {});
        var html = "<p class='lf-fecha'>" + etiqueta + "</p><ol class='lf-pdia'>";
        indices.forEach(function (i, n) {
          var q = preguntas[i], clave = fecha + ":" + i, r = reg[clave];
          html += "<li class='lf-pq' data-i='" + i + "' data-clave='" + clave + "'>" +
            "<p class='lf-pq-esp'>Caso " + (n + 1) + " · " + q.e + " · <a href='" + BASE + q.u + "'>" + q.t + "</a></p>" +
            "<p class='lf-pq-texto'>" + q.p + "</p>" +
            "<button type='button' class='lf-btn lf-ver'>Ver respuesta</button>" +
            "<div class='lf-pq-resp' hidden>" + q.r.replace(/(href|src)="(?!https?:|#|\/)/g, '$1="' + BASE) +
            "<p class='lf-pq-marcar'>¿Acertaste? " +
            "<button type='button' class='lf-btn" + (r === 1 ? " lf-activo" : "") + "' data-ok='1'>Sí</button> " +
            "<button type='button' class='lf-btn" + (r === 0 ? " lf-activo" : "") + "' data-ok='0'>No</button></p></div></li>";
        });
        html += "</ol><p class='lf-vacio'>Mañana aparecen 5 casos nuevos.</p>";
        caja.innerHTML = html;
      }
      caja.addEventListener("click", function (ev) {
        var b = ev.target.closest("button");
        if (!b) return;
        var li = b.closest(".lf-pq");
        if (b.classList.contains("lf-ver")) {
          li.querySelector(".lf-pq-resp").hidden = false; b.hidden = true;
        } else if (b.hasAttribute("data-ok") && li) {
          var reg = leer("respuestas", {}), clave = li.getAttribute("data-clave");
          reg[clave] = parseInt(b.getAttribute("data-ok"), 10);
          var esp = preguntas[parseInt(li.getAttribute("data-i"), 10)].e;
          var stats = leer("estadisticas", {});
          var previo = li.getAttribute("data-marcada");
          stats[esp] = stats[esp] || { ok: 0, total: 0 };
          if (previo === null) stats[esp].total++; else if (previo === "1") stats[esp].ok--;
          if (reg[clave] === 1) stats[esp].ok++;
          li.setAttribute("data-marcada", String(reg[clave]));
          guardar("respuestas", reg); guardar("estadisticas", stats);
          li.querySelectorAll("[data-ok]").forEach(function (x) { x.classList.toggle("lf-activo", x === b); });
          pintarHistorial();
        }
      });
      function pintarHistorial() {
        if (!historial) return;
        var stats = leer("estadisticas", {}), esps = Object.keys(stats).sort();
        if (!esps.length) { historial.innerHTML = "<p class='lf-vacio'>Aún no marcas respuestas.</p>"; return; }
        var tot = 0, ok = 0;
        var filas = esps.map(function (e) {
          tot += stats[e].total; ok += stats[e].ok;
          var pct = stats[e].total ? Math.round(100 * stats[e].ok / stats[e].total) : 0;
          return "<tr><td>" + e + "</td><td>" + stats[e].ok + " / " + stats[e].total + "</td><td>" + pct + " %</td></tr>";
        }).join("");
        historial.innerHTML = "<table><thead><tr><th>Especialidad</th><th>Aciertos</th><th>%</th></tr></thead><tbody>" + filas +
          "<tr><td><strong>Total</strong></td><td><strong>" + ok + " / " + tot + "</strong></td><td><strong>" +
          (tot ? Math.round(100 * ok / tot) : 0) + " %</strong></td></tr></tbody></table>";
      }
      var fechaLarga = new Date().toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
      mostrar(elegir(preguntas, azar(semilla)), "Casos del " + fechaLarga);
      // Marca las preguntas de hoy ya respondidas para no duplicar el historial
      var reg = leer("respuestas", {});
      caja.querySelectorAll(".lf-pq").forEach(function (li) {
        var r = reg[li.getAttribute("data-clave")];
        if (r === 0 || r === 1) li.setAttribute("data-marcada", String(r));
      });
      pintarHistorial();
    }).catch(function () {
      caja.innerHTML = "<p class='lf-vacio'>No se pudieron cargar las preguntas. Revisa tu conexión o descarga el sitio en «Mis temas».</p>";
    });
  }

  // Fármacos: filtro por nombre, clase, familia o uso (sin distinguir tildes); oculta familias y grupos vacíos
  function filtroFarmacos() {
    var campo = document.querySelector(".farm-filtro");
    if (!campo || campo.getAttribute("data-lf") === "1") return;
    campo.setAttribute("data-lf", "1");
    var plano = function (t) { return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); };
    var items = Array.prototype.slice.call(document.querySelectorAll("details.farmaco"));
    var familias = Array.prototype.slice.call(document.querySelectorAll(".farm-familia"));
    var secciones = Array.prototype.slice.call(document.querySelectorAll(".farm-seccion"));
    var total = document.querySelector(".farm-total");
    // Se busca en el nombre, la clase, la familia y los usos (no en interacciones, para no mostrar de más)
    var textos = items.map(function (d) {
      var fam = d.closest(".farm-familia").querySelector(".farm-h3"), grupo = d.querySelector(".farm-grupo"), usos = d.querySelector(".farm-usos");
      return plano(d.querySelector("summary").textContent + " " + (grupo ? grupo.textContent : "") + " " +
        (fam ? fam.textContent : "") + " " + (usos ? usos.textContent : ""));
    });
    var vacio = document.createElement("p"); vacio.className = "farm-vacio"; vacio.hidden = true;
    vacio.textContent = "No hay fármacos que coincidan. Prueba con otro nombre o con el grupo (por ejemplo, «IECA» o «anticoagulante»).";
    if (secciones.length) secciones[0].parentNode.insertBefore(vacio, secciones[0]);
    function contar(n) { if (total) total.textContent = n === items.length ? items.length + " fármacos" : n + " de " + items.length + " fármacos"; }
    contar(items.length);
    campo.addEventListener("input", function () {
      var q = plano(campo.value.trim()), n = 0;
      items.forEach(function (d, i) { var ok = !q || textos[i].indexOf(q) !== -1; d.hidden = !ok; if (ok) n++; });
      familias.forEach(function (f) { f.hidden = !f.querySelector("details.farmaco:not([hidden])"); });
      secciones.forEach(function (s) { s.hidden = !s.querySelector(".farm-familia:not([hidden])"); });
      vacio.hidden = n > 0; contar(n);
      if (q && n <= 2) items.forEach(function (d) { if (!d.hidden) d.open = true; });
    });
    // Abrir la ficha si el enlace apunta a un fármaco (#farmaco-nombre)
    var m = location.hash.match(/^#farmaco-/);
    if (m) { var d = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (d) { d.open = true; setTimeout(function () { d.scrollIntoView({ block: "start" }); }, 50); } }
  }

  function accesibilidad() {
    var busqueda = document.querySelector(".md-search[role='dialog']");
    if (busqueda && !busqueda.hasAttribute("aria-label")) busqueda.setAttribute("aria-label", "Búsqueda");
  }

  function iniciar() {
    accesibilidad();
    barraProgreso();
    botonRepaso();
    busquedaSinTildes();
    aplicarEscala();
    barraEstudio();
    marcarEnlaces();
    misTemas();
    preguntasDelDia();
    filtroFarmacos();
    registrarSW();
    botonSinConexion();
  }

  impresion();
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(iniciar);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();

// Pestañas con submenú: al tocar una pestaña con secciones se abre su submenú en vez de ir a la primera página
(function () {
  function cerrar(excepto) {
    document.querySelectorAll(".lf-tab-menu.lf-abierto").forEach(function (li) {
      if (li !== excepto) {
        li.classList.remove("lf-abierto");
        li.querySelector(".md-tabs__link").setAttribute("aria-expanded", "false");
      }
    });
  }
  document.addEventListener("click", function (ev) {
    var enlace = ev.target.closest(".lf-tab-menu > .md-tabs__link");
    if (enlace) {
      ev.preventDefault();
      var li = enlace.parentNode;
      cerrar(li);
      var abierto = li.classList.toggle("lf-abierto");
      enlace.setAttribute("aria-expanded", abierto ? "true" : "false");
      return;
    }
    if (!ev.target.closest(".lf-submenu")) cerrar(null);
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape") cerrar(null);
  });
})();
