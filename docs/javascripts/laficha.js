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
