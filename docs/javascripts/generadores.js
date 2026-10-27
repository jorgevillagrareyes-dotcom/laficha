/* La Ficha: generadores de texto para la ficha clínica (procedimientos y documentos).
   Todo se arma en el navegador: no se envía ni se guarda nada. Sin dependencias. */
(function () {
  "use strict";

  function lector(caja) {
    return {
      si: function (n) { var e = caja.querySelector("[name='" + n + "']"); return !!(e && e.checked); },
      val: function (n) {
        var r = caja.querySelector("[name='" + n + "']:checked");
        if (r) return r.value;
        var e = caja.querySelector("[name='" + n + "']");
        return e && e.type !== "radio" && e.type !== "checkbox" ? String(e.value).trim() : "";
      }
    };
  }
  // Une una lista en español: "a, b y c".
  function unir(l) {
    l = l.filter(Boolean);
    if (l.length < 2) return l.join("");
    return l.slice(0, -1).join(", ") + " y " + l[l.length - 1];
  }
  function o(x, alt) { return x ? x : "[" + alt + "]"; }

  var RETIRO = {
    cara: "3 a 5 días", cuero: "7 a 10 días", brazo: "7 a 10 días", tronco: "10 a 14 días",
    pierna: "10 a 14 días", mano: "10 a 14 días", palma: "14 a 21 días"
  };

  var GEN = {
    sutura: function (d) {
      var cm = d.val("cm"), lugar = d.val("lugar"), tipo = d.val("tipo"), zona = d.val("zona");
      var anest = d.val("anest"), ml = d.val("ml"), punto = d.val("punto"), n = d.val("n"), hilo = d.val("hilo");
      var profundo = d.si("profundo"), mordedura = d.val("mordedura"), tet = d.val("tet");
      var t = [];
      var herida = "herida " + tipo + " de " + o(cm, "x") + " cm en " + o(lugar, "ubicación");
      t.push("Se realiza aseo y sutura de " + herida + ", bajo técnica aséptica y anestesia local con " + anest +
        (ml ? " (" + ml + " mL)" : "") + ".");
      var hallazgos = [];
      if (d.si("lavado")) hallazgos.push("Se irriga con abundante suero fisiológico");
      if (d.si("explora")) hallazgos.push("se explora la herida sin evidencia de cuerpo extraño ni compromiso de tendones, vasos o nervios");
      if (hallazgos.length) t.push(unir(hallazgos) + ".");
      if (d.si("desbrida")) t.push("Se debrida tejido desvitalizado.");
      if (profundo) t.push("Se afronta plano subcutáneo con " + d.val("hiloprof") + " (puntos invertidos).");
      t.push("Se afronta piel con " + o(n, "n") + " puntos " + punto + " de " + hilo + ".");
      t.push("Procedimiento sin complicaciones, sin sangrado activo al término. Se cubre con apósito" +
        (d.si("ungüento") ? " y vaselina" : "") + ".");
      if (tet !== "no") t.push(tet === "vac" ? "Se indica vacuna antitetánica (dT)." : "Se indica vacuna antitetánica (dT) e inmunoglobulina antitetánica 250 UI IM.");
      t.push("Se entregan indicaciones.");

      var ind = [];
      ind.push("Mantener la herida limpia y seca; puede ducharse desde mañana, secando sin frotar.");
      ind.push("Cambio de apósito si se moja, se ensucia o se despega" + (d.si("ungüento") ? "; aplicar vaselina en cada cambio" : "") + ".");
      if (mordedura === "si") ind.push("Amoxicilina-ácido clavulánico 875/125 mg VO cada 12 h por 5 días.");
      ind.push("Paracetamol 1 g VO cada 8 h si hay dolor.");
      ind.push("Retiro de puntos en " + (RETIRO[zona] || "[días]") + " en su CESFAM o servicio de urgencia.");
      ind.push("Consultar antes si presenta fiebre, enrojecimiento que se extiende, aumento del dolor, secreción de pus o apertura de la herida.");
      if (mordedura === "si") ind.push("Control de la herida en 48 horas.");
      return { texto: t.join(" "), indicaciones: ind };
    }
  };

  function pintar(caja, r) {
    var salida = caja.querySelector(".gen-res");
    var lista = r.indicaciones && r.indicaciones.length
      ? "\n\nIndicaciones:\n" + r.indicaciones.map(function (x) { return "- " + x; }).join("\n") : "";
    // Espacio duro antes de "%" y entre número y unidad, para que no se corten al final de la línea.
    salida.querySelector(".gen-texto").textContent = (r.texto + lista).replace(/ (%|cm|mL|mg|UI)\b/g, "\u00a0$1").replace(/ %/g, "\u00a0%");
  }

  function copiar(texto, boton) {
    var listo = function () {
      var antes = boton.textContent;
      boton.textContent = "Copiado";
      boton.classList.add("gen-ok");
      setTimeout(function () { boton.textContent = antes; boton.classList.remove("gen-ok"); }, 1600);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(listo, function () { respaldo(texto); listo(); });
    } else { respaldo(texto); listo(); }
  }
  function respaldo(texto) {
    var a = document.createElement("textarea");
    a.value = texto; a.setAttribute("readonly", ""); a.style.position = "fixed"; a.style.opacity = "0";
    document.body.appendChild(a); a.select();
    try { document.execCommand("copy"); } catch (e) { /* sin portapapeles */ }
    document.body.removeChild(a);
  }

  function iniciar() {
    document.querySelectorAll(".calc[data-gen]").forEach(function (caja) {
      if (caja.getAttribute("data-lf") === "1") return;
      caja.setAttribute("data-lf", "1");
      var f = GEN[caja.getAttribute("data-gen")], salida = caja.querySelector(".gen-res");
      if (!f || !salida) return;
      salida.innerHTML = "<div class='gen-barra'><span>Texto para la ficha</span><button type='button' class='gen-copiar'>Copiar</button></div><div class='gen-texto'></div>";
      var actualizar = function () { pintar(caja, f(lector(caja))); };
      caja.addEventListener("input", actualizar);
      caja.addEventListener("change", actualizar);
      salida.querySelector(".gen-copiar").addEventListener("click", function () {
        copiar(salida.querySelector(".gen-texto").textContent.replace(/\u00a0/g, " "), this);
      });
      actualizar();
    });
    // Botón "Copiar" en los recuadros de plantilla escritos en la página.
    document.querySelectorAll(".md-typeset .admonition.plantilla").forEach(function (caja) {
      if (caja.getAttribute("data-lf") === "1") return;
      caja.setAttribute("data-lf", "1");
      var titulo = caja.querySelector(".admonition-title");
      if (!titulo) return;
      var b = document.createElement("button");
      b.type = "button"; b.className = "gen-copiar"; b.textContent = "Copiar";
      b.addEventListener("click", function () {
        var partes = [];
        caja.querySelectorAll(":scope > :not(.admonition-title)").forEach(function (e) {
          if (e.tagName === "UL" || e.tagName === "OL") {
            e.querySelectorAll(":scope > li").forEach(function (li) { partes.push("- " + li.textContent.trim()); });
          } else partes.push(e.textContent.trim());
        });
        copiar(partes.join("\n"), b);
      });
      titulo.appendChild(b);
    });
  }
  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(iniciar);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
