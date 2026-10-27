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
      if (d.si("antisepsia")) t.push("Se realiza antisepsia de la piel perilesional con " + d.val("antiseptico") + ".");
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

      // Cada indicación tiene un id estable: así se conservan las que el usuario editó o guardó.
      var mord = mordedura === "si";
      var ind = [
        { id: "limpia", on: true, texto: "Mantener la herida limpia y seca; puede ducharse desde mañana, secando sin frotar." },
        { id: "aposito", on: true, texto: "Cambio de apósito si se moja, se ensucia o se despega" + (d.si("ungüento") ? "; aplicar vaselina en cada cambio" : "") + "." },
        { id: "atb", on: mord, texto: "Amoxicilina-ácido clavulánico 875/125 mg VO cada 12 h por 5 días." },
        { id: "analgesia", on: true, texto: "Paracetamol 1 g VO cada 8 h si hay dolor." },
        { id: "retiro", on: true, texto: "Retiro de puntos en " + (RETIRO[zona] || "[días]") + " en su CESFAM o servicio de urgencia." },
        { id: "alarma", on: true, texto: "Consultar antes si presenta fiebre, enrojecimiento que se extiende, aumento del dolor, secreción de pus o apertura de la herida." },
        { id: "control", on: mord, texto: "Control de la herida en 48 horas." }
      ];
      return { texto: t.join(" "), indicaciones: ind };
    }
  };

  // Espacio duro antes de "%" y entre número y unidad, para que no se corten al final de la línea.
  function duro(s) { return s.replace(/ (%|cm|mL|mg|UI)\b/g, "\u00a0$1").replace(/ %/g, "\u00a0%"); }

  // Indicaciones guardadas por el usuario en este dispositivo (texto, marcadas y propias).
  function leerPref(clave) {
    try { return JSON.parse(localStorage.getItem("lf-gen-" + clave) || "null"); } catch (e) { return null; }
  }
  function guardarPref(clave, v) {
    try { if (v) localStorage.setItem("lf-gen-" + clave, JSON.stringify(v)); else localStorage.removeItem("lf-gen-" + clave); return true; } catch (e) { return false; }
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

  // Lista de indicaciones editable: el texto sugerido se actualiza con el formulario hasta que el
  // usuario lo cambia; desde ahí se respeta lo que escribió. Se puede guardar como predeterminado.
  function montarIndicaciones(caja, clave, salida) {
    var cont = document.createElement("div");
    cont.className = "gen-ind";
    cont.innerHTML = "<span class='gen-titulo'>Indicaciones · edítalas a tu gusto</span><div class='gen-filas'></div>" +
      "<div class='gen-acciones'><button type='button' class='gen-boton' data-a='agregar'>+ Agregar indicación</button>" +
      "<button type='button' class='gen-boton' data-a='guardar'>Guardar como mis indicaciones</button>" +
      "<button type='button' class='gen-boton gen-sutil' data-a='restablecer'>Restablecer</button>" +
      "<span class='gen-estado' aria-live='polite'></span></div>";
    caja.insertBefore(cont, salida);
    var filas = cont.querySelector(".gen-filas"), aviso = cont.querySelector(".gen-estado");
    var estado = {}, orden = [], nuevas = 0;

    function cargar() {
      estado = {}; orden = []; nuevas = 0;
      var pref = leerPref(clave);
      if (pref && pref.filas) pref.filas.forEach(function (x) {
        estado[x.id] = { texto: x.texto, on: x.on, manual: true, propia: !!x.propia };
        if (x.propia) nuevas++;
      });
    }
    function fila(id) {
      var e = estado[id];
      var el = document.createElement("div");
      el.className = "gen-fila"; el.setAttribute("data-id", id);
      el.innerHTML = "<input type='checkbox' aria-label='Incluir'><textarea class='gen-ind-txt' rows='1' aria-label='Indicación'></textarea>" +
        (e.propia ? "<button type='button' class='gen-quitar' aria-label='Quitar'>×</button>" : "");
      el.querySelector("input[type=checkbox]").checked = e.on;
      el.querySelector(".gen-ind-txt").value = e.texto;
      return el;
    }
    // Cada campo crece con su texto, para que se lea completo también en el celular.
    function ajustar() {
      filas.querySelectorAll(".gen-ind-txt").forEach(function (a) { a.style.height = "auto"; a.style.height = a.scrollHeight + "px"; });
    }
    // Funde lo sugerido por el formulario con lo que el usuario cambió.
    function sincronizar(base) {
      var ids = base.map(function (x) { return x.id; });
      base.forEach(function (x) {
        var e = estado[x.id];
        if (!e || !e.manual) estado[x.id] = { texto: x.texto, on: x.on, manual: false };
      });
      var propias = Object.keys(estado).filter(function (id) { return estado[id].propia; });
      var nuevoOrden = ids.concat(propias);
      if (nuevoOrden.join() !== orden.join()) {
        orden = nuevoOrden; filas.innerHTML = "";
        orden.forEach(function (id) { filas.appendChild(fila(id)); });
      } else {
        orden.forEach(function (id) {
          var el = filas.querySelector("[data-id='" + id + "']"), e = estado[id];
          if (!el || e.manual) return;
          el.querySelector("input[type=checkbox]").checked = e.on;
          var txt = el.querySelector(".gen-ind-txt");
          if (document.activeElement !== txt) txt.value = e.texto;
        });
      }
      ajustar();
    }
    function marcarManual(ev) {
      var el = ev.target.closest(".gen-fila");
      if (!el) return;
      var e = estado[el.getAttribute("data-id")];
      e.manual = true;
      e.on = el.querySelector("input[type=checkbox]").checked;
      e.texto = el.querySelector(".gen-ind-txt").value;
    }
    filas.addEventListener("input", marcarManual);
    filas.addEventListener("change", marcarManual);
    filas.addEventListener("click", function (ev) {
      if (!ev.target.classList.contains("gen-quitar")) return;
      var el = ev.target.closest(".gen-fila");
      delete estado[el.getAttribute("data-id")];
      caja.dispatchEvent(new Event("change"));
    });
    cont.querySelector(".gen-acciones").addEventListener("click", function (ev) {
      var a = ev.target.getAttribute("data-a");
      if (!a) return;
      if (a === "agregar") {
        var id = "propia" + (++nuevas) + "-" + Date.now();
        estado[id] = { texto: "", on: true, manual: true, propia: true };
        caja.dispatchEvent(new Event("change"));
        var txt = filas.querySelector("[data-id='" + id + "'] .gen-ind-txt");
        if (txt) txt.focus();
        aviso.textContent = "";
      } else if (a === "guardar") {
        var lista = orden.filter(function (id) { return estado[id].manual; }).map(function (id) {
          var e = estado[id];
          return { id: id, texto: e.texto, on: e.on, propia: !!e.propia };
        });
        aviso.textContent = guardarPref(clave, { filas: lista }) ? "Guardadas en este dispositivo" : "No se pudo guardar";
      } else if (a === "restablecer") {
        guardarPref(clave, null); cargar(); orden = [];
        caja.dispatchEvent(new Event("change"));
        aviso.textContent = "Se volvió a las sugeridas";
      }
    });
    cargar();
    return {
      sincronizar: sincronizar,
      elegidas: function () {
        return orden.filter(function (id) { return estado[id] && estado[id].on && estado[id].texto.trim(); })
          .map(function (id) { return estado[id].texto.trim(); });
      }
    };
  }

  function iniciar() {
    document.querySelectorAll(".calc[data-gen]").forEach(function (caja) {
      if (caja.getAttribute("data-lf") === "1") return;
      caja.setAttribute("data-lf", "1");
      var clave = caja.getAttribute("data-gen"), f = GEN[clave], salida = caja.querySelector(".gen-res");
      if (!f || !salida) return;
      salida.innerHTML = "<div class='gen-barra'><span>Texto para la ficha</span><button type='button' class='gen-copiar'>Copiar</button></div>" +
        "<div class='gen-texto' contenteditable='true' spellcheck='false'></div>" +
        "<div class='gen-nota'>Puedes corregir el texto aquí antes de copiarlo. Si cambias un dato arriba, se vuelve a armar.</div>";
      var texto = salida.querySelector(".gen-texto");
      var ind = montarIndicaciones(caja, clave, salida);
      var actualizar = function (ev) {
        if (ev && texto.contains(ev.target)) return;
        var r = f(lector(caja));
        ind.sincronizar(r.indicaciones || []);
        var lista = ind.elegidas();
        texto.textContent = duro(r.texto + (lista.length ? "\n\nIndicaciones:\n" + lista.map(function (x) { return "- " + x; }).join("\n") : ""));
      };
      caja.addEventListener("input", actualizar);
      caja.addEventListener("change", actualizar);
      salida.querySelector(".gen-copiar").addEventListener("click", function () {
        copiar((texto.innerText || texto.textContent).replace(/\u00a0/g, " "), this);
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
