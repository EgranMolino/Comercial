/* =========================================================================
   EGRAN · Herramienta Comercial — App principal
   Sin frameworks, sin build. Routing por hash. Todo corre en el navegador.
   ========================================================================= */

const app = document.getElementById("app");
const WA_BASE = "https://wa.me/" + (CONFIG.whatsappNumero || "");

// ---------------------------------------------------------------- RENDER DE BLOQUES

function esc(s) { return (s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function renderBloque(b, ctxId, liveData) {
  switch (b.t) {
    case "p": return `<p class="blk-p">${esc(b.x)}</p>`;
    case "label": return `<div class="blk-label">${esc(b.x)}</div>`;
    case "bullets": return `<ul class="blk-bullets">${b.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;
    case "quote": return `<blockquote class="blk-quote">“${esc(b.x)}”${b.by ? `<cite>— ${esc(b.by)}</cite>` : ""}</blockquote>`;
    case "callout": return `<div class="blk-callout ${b.kind === "warning" ? "warn" : "tip"}">
        <span class="blk-callout-ic">${b.kind === "warning" ? "⚠" : "🧠"}</span>
        <div><strong>${esc(b.title)}</strong> — ${esc(b.x)}</div>
      </div>`;
    case "table": return `<div class="blk-table-wrap"><table class="blk-table">
        <thead><tr>${b.headers.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>`;
    case "objecion": return renderObjecionAcordeon(b.nombre, b.detras, b.responder, b.dialogo, b.testimonio, ctxId + "_" + b.nombre.slice(0, 10));
    case "objeciones-dinamicas": return (liveData && liveData.objeciones ? liveData.objeciones : [])
      .map(o => renderObjecionAcordeon(o.objecion, o.detras, o.responder, o.ejemplo, { texto: o.testimonioTexto, autor: o.testimonioAutor }, ctxId))
      .join("");
    case "matriz-dinamica": return renderMatrizTabla(liveData && liveData.matriz ? liveData.matriz : []);
    default: return "";
  }
}

function renderMatrizTabla(filas) {
  return `<div class="blk-table-wrap"><table class="blk-table">
      <thead><tr><th>Situación</th><th>% desc. máximo</th><th>Logística</th><th>Forma de pago</th><th>Volumen mínimo</th></tr></thead>
      <tbody>${filas.map(f => `<tr><td>${esc(f.situacion)}</td><td>${esc(f.descuento)}</td><td>${esc(f.logistica)}</td><td>${esc(f.pago)}</td><td>${esc(f.volumen)}</td></tr>`).join("")}</tbody>
    </table></div>`;
}

function renderSeccionCompleta(sec, liveData) {
  const leida = seccionEstaLeida(sec.id);
  return `
    <div class="seccion-card" id="sec-${sec.id}">
      <div class="seccion-head">
        <span class="seccion-num">${sec.id.match(/^\d/) ? sec.id : ""}</span>
        <h3>${esc(sec.titulo)}</h3>
        <button class="leida-btn ${leida ? "on" : ""}" data-marcar="${sec.id}" title="Marcar como leída">${leida ? "✓ Leída" : "Marcar leída"}</button>
      </div>
      <div class="seccion-body">${sec.contenido.map(b => renderBloque(b, sec.id, liveData)).join("")}</div>
    </div>`;
}

let objAccCounter = 0;
function renderObjecionAcordeon(nombre, detras, responder, dialogo, testimonio, key) {
  objAccCounter++;
  const domId = "obj-" + objAccCounter;
  return `
    <div class="acc-item" data-acc="${domId}">
      <button class="acc-head" data-toggle="${domId}">
        <span>“${esc(nombre)}”</span><span class="acc-arrow">▾</span>
      </button>
      <div class="acc-body" id="${domId}">
        <p class="acc-label">Qué hay detrás</p><p>${esc(detras)}</p>
        <p class="acc-label">Cómo responder</p><p>${esc(responder)}</p>
        <div class="acc-dialogo">${esc(dialogo)}</div>
        ${testimonio && testimonio.texto ? `<div class="acc-testimonio">🎙️ “${esc(testimonio.texto)}” <cite>— ${esc(testimonio.autor)}</cite></div>` : ""}
      </div>
    </div>`;
}

// ---------------------------------------------------------------- SHELL / NAV

function shell(contenido, activeTab) {
  return `
    <div class="screen">${contenido}</div>
    <nav class="tabbar">
      <button class="tab ${activeTab === "home" ? "on" : ""}" data-nav="home"><span class="ic">🏠</span><span>Inicio</span></button>
      <button class="tab ${activeTab === "aprendizaje" ? "on" : ""}" data-nav="aprendizaje"><span class="ic">📖</span><span>Aprender</span></button>
      <button class="tab ${activeTab === "campo" ? "on" : ""}" data-nav="campo"><span class="ic">🎯</span><span>Campo</span></button>
      <button class="tab ${activeTab === "semana" ? "on" : ""}" data-nav="semana"><span class="ic">🗓️</span><span>Mi semana</span></button>
      <button class="tab ${activeTab === "buscador" ? "on" : ""}" data-nav="buscador"><span class="ic">🔎</span><span>Buscar</span></button>
    </nav>`;
}

function header(titulo, subtitulo, back) {
  return `<header class="topbar">
      ${back ? `<button class="back-btn" data-nav="${back}">←</button>` : ""}
      <div><h1>${esc(titulo)}</h1>${subtitulo ? `<p>${esc(subtitulo)}</p>` : ""}</div>
    </header>`;
}

// ---------------------------------------------------------------- HOME

function screenHome() {
  const totalSecciones = PARTES.reduce((a, p) => a + p.secciones.length, 0);
  const leidas = Object.keys(loadStore().seccionesLeidas).length;
  const pct = Math.round((leidas / totalSecciones) * 100);
  const html = `
    ${header("Hola 👋", "Tu herramienta comercial Egran, siempre a mano")}
    <div class="home-hero">
      <p class="home-frase">“Vendemos con la confianza de 80 años de historia, pero la ganamos de nuevo en cada reunión, escuchando primero y proponiendo después.”</p>
    </div>
    <div class="home-progress">
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <span>${pct}% del manual leído</span>
    </div>
    <div class="home-grid">
      <button class="home-tile" data-nav="aprendizaje"><span class="ic">📖</span><b>Aprender</b><small>Leer el manual completo, parte por parte</small></button>
      <button class="home-tile" data-nav="campo"><span class="ic">🎯</span><b>Modo Campo</b><small>¿Qué estás por hacer ahora?</small></button>
      <button class="home-tile" data-nav="semana"><span class="ic">🗓️</span><b>Mi semana</b><small>Rutina, semáforo y objeciones</small></button>
      <button class="home-tile" data-nav="buscador"><span class="ic">🔎</span><b>Buscar</b><small>Encontrá cualquier tema al toque</small></button>
    </div>`;
  app.innerHTML = shell(html, "home");
}

// ---------------------------------------------------------------- MODO APRENDIZAJE

function screenAprendizaje() {
  const html = `
    ${header("Modo Aprendizaje", "El manual completo, parte por parte")}
    <div class="parte-lista">
      ${PARTES.map(p => {
        const prog = progresoParte(p);
        return `<button class="parte-tile" data-nav="parte:${p.id}">
          <div class="parte-tile-top">
            <span class="parte-badge">${p.numero !== null ? "Parte " + p.numero : "Prólogo"}</span>
            <span class="parte-pct">${prog.pct}%</span>
          </div>
          <b>${esc(p.titulo)}</b>
          <div class="progress-bar sm"><div class="progress-fill" style="width:${prog.pct}%"></div></div>
        </button>`;
      }).join("")}
    </div>`;
  app.innerHTML = shell(html, "aprendizaje");
}

async function screenParte(parteId) {
  const parte = PARTES.find(p => p.id === parteId);
  if (!parte) return screenAprendizaje();

  const tieneBloque = (tipo) => parte.secciones.some(s => s.contenido.some(b => b.t === tipo));
  const liveData = {};
  if (tieneBloque("objeciones-dinamicas")) liveData.objeciones = await getObjeciones();
  if (tieneBloque("matriz-dinamica")) liveData.matriz = await getMatriz();

  const html = `
    ${header(parte.numero !== null ? "Parte " + parte.numero : "Prólogo", parte.titulo, "aprendizaje")}
    <div class="parte-detalle">
      ${parte.secciones.map(s => renderSeccionCompleta(s, liveData)).join("")}
    </div>`;
  app.innerHTML = shell(html, "aprendizaje");
  attachMarcarLeidaHandlers(() => screenParte(parteId));
  attachAcordeonHandlers();
}

// ---------------------------------------------------------------- MODO CAMPO

function screenCampo() {
  const html = `
    ${header("Modo Campo", "¿Qué estás por hacer ahora?")}
    <div class="campo-lista">
      ${ESCENARIOS.map(e => `
        <button class="campo-tile" data-nav="escenario:${e.id}">
          <span class="campo-ic">${e.icono}</span>
          <div><b>${esc(e.titulo)}</b><small>${esc(e.bajada)}</small></div>
        </button>`).join("")}
    </div>`;
  app.innerHTML = shell(html, "campo");
}

async function screenEscenario(escId) {
  const esc_ = ESCENARIOS.find(e => e.id === escId);
  if (!esc_) return screenCampo();
  app.innerHTML = shell(header(esc_.titulo, "Armando tu resumen…", "campo"), "campo");

  const bloques = esc_.secciones.map(id => SECCIONES_POR_ID[id]).filter(Boolean);
  let objecionesHtml = "";
  if (esc_.extras.objeciones && esc_.extras.objeciones.length) {
    const todas = await getObjeciones();
    const lista = esc_.extras.objeciones === "todas" ? todas : todas.filter(o => esc_.extras.objeciones.includes(o.objecion));
    objecionesHtml = `<div class="seccion-card"><div class="seccion-head"><h3>Objeciones relacionadas</h3></div><div class="seccion-body">
        ${lista.map(o => renderObjecionAcordeon(o.objecion, o.detras, o.responder, o.ejemplo, { texto: o.testimonioTexto, autor: o.testimonioAutor }, escId)).join("")}
      </div></div>`;
  }

  let herramientaHtml = "";
  if (esc_.extras.herramienta === "matriz") herramientaHtml = await renderMatrizTool();
  if (esc_.extras.herramienta === "semaforo") herramientaHtml = renderSemaforoTool();

  const html = `
    ${header(esc_.titulo, esc_.bajada, "campo")}
    ${herramientaHtml}
    ${bloques.map(renderSeccionCompleta).join("")}
    ${objecionesHtml}
    ${whatsappCTA()}`;
  app.innerHTML = shell(html, "campo");
  attachAcordeonHandlers();
  attachMarcarLeidaHandlers(() => screenEscenario(escId));
  attachMatrizHandlers();
  attachSemaforoHandlers();
}

// ---------------------------------------------------------------- HERRAMIENTA: MATRIZ

async function renderMatrizTool() {
  const filas = await getMatriz();
  return `
    <div class="tool-card">
      <div class="tool-head"><span class="tool-ic">📊</span><b>Matriz de Situación</b></div>
      <p class="tool-hint">Elegí la situación del cliente:</p>
      <div class="matriz-selector">
        ${filas.map((f, i) => `<button class="matriz-btn" data-matriz="${i}">${esc(f.situacion)}</button>`).join("")}
      </div>
      <div class="matriz-resultado" id="matriz-resultado" data-filas='${esc(JSON.stringify(filas)).replace(/'/g, "&#39;")}'></div>
    </div>`;
}

function attachMatrizHandlers() {
  document.querySelectorAll("[data-matriz]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-matriz"), 10);
      const cont = document.getElementById("matriz-resultado");
      const filas = JSON.parse(cont.getAttribute("data-filas").replace(/&#39;/g, "'"));
      const f = filas[idx];
      document.querySelectorAll(".matriz-btn").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      cont.innerHTML = `
        <div class="matriz-card">
          <div class="mrow"><span class="k">% descuento máximo</span><span class="v">${esc(f.descuento)}</span></div>
          <div class="mrow"><span class="k">Logística</span><span class="v">${esc(f.logistica)}</span></div>
          <div class="mrow"><span class="k">Forma de pago</span><span class="v">${esc(f.pago)}</span></div>
          <div class="mrow"><span class="k">Volumen mínimo</span><span class="v">${esc(f.volumen)}</span></div>
        </div>`;
    });
  });
}

// ---------------------------------------------------------------- HERRAMIENTA: SEMÁFORO

function renderSemaforoTool() {
  return `
    <div class="tool-card">
      <div class="tool-head"><span class="tool-ic">🚦</span><b>Semáforo de inactividad</b></div>
      <p class="tool-hint">¿Hace cuántos días que este cliente no compra?</p>
      <div class="semaforo-input">
        <input type="number" id="semaforo-dias" min="0" placeholder="Ej: 45" />
        <button id="semaforo-btn" class="semaforo-check">Ver acción</button>
      </div>
      <div id="semaforo-resultado"></div>
    </div>`;
}

function attachSemaforoHandlers() {
  const btn = document.getElementById("semaforo-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const dias = parseInt(document.getElementById("semaforo-dias").value, 10);
    const out = document.getElementById("semaforo-resultado");
    if (isNaN(dias)) { out.innerHTML = `<p class="blk-p">Ingresá un número de días.</p>`; return; }
    let color, accion;
    if (dias >= 365) { color = "morado"; accion = "Pasa a excliente a recuperar. Primero diagnosticá por qué dejó de comprar (8.3), después ofrecé recuperación según la Matriz de Situación (4.7)."; }
    else if (dias >= 90) { color = "rojo"; accion = "Se activa el protocolo de cuenta en riesgo: identificá la causa concreta y escalá internamente si hace falta."; }
    else if (dias >= 60) { color = "naranja"; accion = "Visita presencial puntual, con el objetivo de entender qué pasó, más que de vender en el momento."; }
    else if (dias >= 30) { color = "amarillo"; accion = "Contacto simple, con tono de chequeo y no de reclamo. Por ejemplo: “¿cómo venís, necesitás algo?”."; }
    else { color = "verde"; accion = "Todavía está dentro de un ciclo normal. No hace falta ninguna acción especial todavía."; }
    out.innerHTML = `<div class="semaforo-result semaforo-${color}"><b>${dias} días sin comprar</b><p>${accion}</p></div>`;
  });
}

// ---------------------------------------------------------------- MI SEMANA

function screenSemana() {
  const rutinaChecklist = [
    "Repasé el semáforo de inactividad de mi cartera",
    "Tengo agendadas las visitas de cartera según frecuencia (ESTRELLA/VACA cada 2 semanas, DEFENDER mensual, OPORTUNIDAD/NICHO cada 6-8 semanas)",
    "Aparté un bloque fijo para búsqueda de clientes nuevos",
    "Definí mis 5 contactos nuevos de la semana",
    "Definí mis 2 primeras visitas de la semana",
    "Dejé un día flexible para clientes en riesgo y registro",
  ];
  const state = getChecklistState("rutina_semanal");
  const html = `
    ${header("Mi semana", "Rutina, objeciones de referencia y semáforo")}
    <div class="seccion-card">
      <div class="seccion-head"><h3>Checklist de la semana</h3></div>
      <div class="seccion-body">
        <ul class="checklist">
          ${rutinaChecklist.map((txt, i) => `
            <li class="${state[i] ? "done" : ""}" data-check="${i}">
              <span class="box"></span><span class="txt">${esc(txt)}</span>
            </li>`).join("")}
        </ul>
      </div>
    </div>
    ${renderSemaforoTool()}
    <div class="seccion-card">
      <div class="seccion-head"><h3>Objeciones más comunes (referencia rápida)</h3></div>
      <div class="seccion-body" id="objeciones-referencia">Cargando…</div>
    </div>
    ${whatsappCTA()}`;
  app.innerHTML = shell(html, "semana");
  attachSemaforoHandlers();

  document.querySelectorAll("[data-check]").forEach(li => {
    li.addEventListener("click", () => {
      const idx = li.getAttribute("data-check");
      toggleChecklistItem("rutina_semanal", idx);
      li.classList.toggle("done");
    });
  });

  getObjeciones().then(lista => {
    const cont = document.getElementById("objeciones-referencia");
    if (!cont) return;
    cont.innerHTML = lista.map(o => renderObjecionAcordeon(o.objecion, o.detras, o.responder, o.ejemplo, { texto: o.testimonioTexto, autor: o.testimonioAutor }, "semana")).join("");
    attachAcordeonHandlers();
  });
}

// ---------------------------------------------------------------- WHATSAPP CTA

function whatsappCTA() {
  const msg = encodeURIComponent("Objeción nueva para el manual:\n\nCliente / rubro: \nQué me dijo: \nCómo respondí: \n\n(completá y enviá)");
  return `
    <a class="wa-cta" href="${WA_BASE}?text=${msg}" target="_blank" rel="noopener">
      <span class="wa-ic">💬</span>
      <div><b>¿Tu cliente te dijo algo que no está acá?</b><small>Compartilo por WhatsApp con el equipo</small></div>
    </a>`;
}

// ---------------------------------------------------------------- BUSCADOR

function screenBuscador(query) {
  query = query || "";
  const html = `
    ${header("Buscar", "Encontrá cualquier tema del manual")}
    <div class="buscador-box">
      <input type="text" id="buscador-input" placeholder="Ej: góndola, precio, vestimenta…" value="${esc(query)}" />
    </div>
    <div id="buscador-resultados">${query ? renderResultadosBusqueda(query) : `<p class="buscador-hint">Escribí una palabra para empezar.</p>`}</div>`;
  app.innerHTML = shell(html, "buscador");

  const input = document.getElementById("buscador-input");
  input.focus();
  input.addEventListener("input", () => {
    document.getElementById("buscador-resultados").innerHTML = renderResultadosBusqueda(input.value);
    attachMarcarLeidaHandlers(() => screenBuscador(input.value));
  });
}

function renderResultadosBusqueda(q) {
  q = q.trim().toLowerCase();
  if (!q) return `<p class="buscador-hint">Escribí una palabra para empezar.</p>`;
  const resultados = [];
  PARTES.forEach(parte => {
    parte.secciones.forEach(sec => {
      const textoPlano = JSON.stringify(sec.contenido).toLowerCase() + " " + sec.titulo.toLowerCase();
      if (textoPlano.includes(q)) resultados.push({ parte, sec });
    });
  });
  if (!resultados.length) return `<p class="buscador-hint">Sin resultados para “${esc(q)}”.</p>`;
  return resultados.map(({ parte, sec }) => `
    <div class="resultado-item" data-nav="parte:${parte.id}">
      <span class="resultado-parte">${parte.numero !== null ? "Parte " + parte.numero : "Prólogo"} · ${sec.id.match(/^\d/) ? sec.id : ""}</span>
      <b>${esc(sec.titulo)}</b>
    </div>`).join("");
}

// ---------------------------------------------------------------- HANDLERS COMUNES

function attachAcordeonHandlers() {
  document.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle");
      const body = document.getElementById(id);
      const item = btn.closest(".acc-item");
      const open = item.classList.contains("open");
      document.querySelectorAll(".acc-item.open").forEach(i => { i.classList.remove("open"); i.querySelector(".acc-body").style.maxHeight = null; });
      if (!open) { item.classList.add("open"); body.style.maxHeight = body.scrollHeight + 20 + "px"; }
    });
  });
}

function attachMarcarLeidaHandlers(rerender) {
  document.querySelectorAll("[data-marcar]").forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.stopPropagation();
      marcarSeccionLeida(btn.getAttribute("data-marcar"));
      if (rerender) rerender();
    });
  });
}

// ---------------------------------------------------------------- ROUTER

function router() {
  const hash = location.hash.slice(1) || "home";
  const [screen, param] = hash.split(":");
  window.scrollTo(0, 0);
  if (screen === "home") return screenHome();
  if (screen === "aprendizaje") return screenAprendizaje();
  if (screen === "parte") return screenParte(param);
  if (screen === "campo") return screenCampo();
  if (screen === "escenario") return screenEscenario(param);
  if (screen === "semana") return screenSemana();
  if (screen === "buscador") return screenBuscador(param ? decodeURIComponent(param) : "");
  return screenHome();
}

document.addEventListener("click", (ev) => {
  const navEl = ev.target.closest("[data-nav]");
  if (navEl) { location.hash = navEl.getAttribute("data-nav"); }
});

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
