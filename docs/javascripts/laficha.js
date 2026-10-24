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

  function iniciar() {
    barraProgreso();
    botonRepaso();
    busquedaSinTildes();
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
