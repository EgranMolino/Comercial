/* =========================================================================
   EGRAN · Herramienta Comercial — Guardado local (sin login)
   Todo vive en el dispositivo de la persona (localStorage).
   ========================================================================= */

const STORE_KEY = "egran_v1";

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultStore();
    return { ...defaultStore(), ...JSON.parse(raw) };
  } catch (e) {
    return defaultStore();
  }
}

function defaultStore() {
  return {
    seccionesLeidas: {},      // { "1.1": true, ... }
    checklists: {},           // { "checklistId": { "itemIdx": true } }
    semanaSemanaActual: null, // fecha ISO del lunes de la semana en curso
    semanaContadores: { visitasCartera: 0, contactosNuevos: 0, primerasVisitas: 0 },
  };
}

function saveStore(store) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* noop */ }
}

function marcarSeccionLeida(seccionId) {
  const s = loadStore();
  s.seccionesLeidas[seccionId] = true;
  saveStore(s);
}

function seccionEstaLeida(seccionId) {
  return !!loadStore().seccionesLeidas[seccionId];
}

function progresoParte(parte) {
  const s = loadStore();
  const total = parte.secciones.length;
  const leidas = parte.secciones.filter(sec => s.seccionesLeidas[sec.id]).length;
  return { leidas, total, pct: total ? Math.round((leidas / total) * 100) : 0 };
}

function toggleChecklistItem(checklistId, itemIdx) {
  const s = loadStore();
  if (!s.checklists[checklistId]) s.checklists[checklistId] = {};
  s.checklists[checklistId][itemIdx] = !s.checklists[checklistId][itemIdx];
  saveStore(s);
  return s.checklists[checklistId][itemIdx];
}

function getChecklistState(checklistId) {
  return loadStore().checklists[checklistId] || {};
}

if (typeof module !== "undefined") {
  module.exports = { loadStore, saveStore, marcarSeccionLeida, seccionEstaLeida, progresoParte, toggleChecklistItem, getChecklistState };
}
