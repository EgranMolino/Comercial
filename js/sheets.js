/* =========================================================================
   EGRAN · Herramienta Comercial — Datos vivos (Google Sheets)
   ---------------------------------------------------------------------
   CÓMO CONECTAR TU PLANILLA (hacelo vos, no hace falta tocar más código):
   1. Armá la planilla en Google Sheets con las columnas indicadas abajo.
   2. Archivo → Compartir → Publicar en la web → elegí la hoja → formato CSV.
   3. Copiá el link que te da Google y pegalo en CONFIG.matrizCSV /
      CONFIG.objecionesCSV, reemplazando el texto "PEGAR_ACA...".
   4. Guardá este archivo. No hace falta tocar nada más: la app va a leer
      la planilla en vivo cada vez que alguien la abra.

   Mientras no conectes la planilla, la app funciona igual con los datos
   de respaldo que ya están cargados abajo (los mismos del manual v1.1).
   ========================================================================= */

const CONFIG = {
  // Columnas esperadas: Situacion | DescuentoMaximo | Logistica | FormaDePago | VolumenMinimo
  // Planilla: "Egran - Matriz de Situación" (creada en tu Drive)
  matrizCSV: "https://docs.google.com/spreadsheets/d/1Rz0V6osEI7EOWZb1QmSLGiPJdw-I5PEm4bbaWxXgpwk/export?format=csv",
  // Columnas esperadas: Objecion | QueHayDetras | ComoResponder | Ejemplo | TestimonioTexto | TestimonioAutor
  // Planilla: "Egran - Objeciones" (creada en tu Drive)
  objecionesCSV: "https://docs.google.com/spreadsheets/d/1F6yH9ohvHJWaL39Q56ef2AdGTADiW0_fGPPtKC0e64c/export?format=csv",
  // Número de WhatsApp del equipo comercial (con código de país, sin +, sin espacios) o vacío para elegir contacto al enviar
  whatsappNumero: "",
};

// ---------- Datos de respaldo (se usan si la planilla no está conectada o falla la carga) ----------

const MATRIZ_FALLBACK = [
  { situacion: "Cliente nuevo", descuento: "19%", logistica: "Según criterio general (máx. 5% del valor solicitado)", pago: "Contado o 15 días, según carpeta de referencias comerciales", volumen: "Equivalente a 1 pallet de lentejas (2.340 paquetes)" },
  { situacion: "Excliente a recuperar", descuento: "Ver proceso especial: mismo descuento que tenía + producto de alta rotación con extra", logistica: "Según criterio general", pago: "30 días, con referencias", volumen: "Según el surtido acordado" },
  { situacion: "Cliente recurrente", descuento: "Descuento acordado con el cliente + 2 productos de alta rotación con descuento extra", logistica: "Según criterio general", pago: "30 días", volumen: "Equivalente a 1 pallet de lentejas (2.340 paquetes)" },
];

const OBJECIONES_FALLBACK = [
  { objecion: "Es caro / la competencia me lo da más barato", detras: "Casi siempre hay una comparación incompleta: el cliente compara el precio, pero no toda la propuesta de valor.", responder: "En vez de discutir el precio, preguntar primero con qué lo está comparando, y después explicar con calma qué incluye el precio de Egran que otros no ofrecen.", ejemplo: "Cliente: \u201CSytari me lo da más barato.\u201D Vendedor: \u201CEntiendo, y tiene sentido que lo compares. Contame, ¿tuviste algún problema de calidad o de entrega con ellos hasta ahora? Porque lo que nosotros garantizamos, además del producto, es que si algo falla, hay 88 años de historia familiar respondiendo por eso.\u201D", testimonioTexto: "Me paré en la góndola en Tucumán, vi que la gente compraba productos caros igual, y usé eso para mostrarle al comprador que su clientela ya estaba dispuesta a pagar por calidad.", testimonioAutor: "Eduardo Blanco" },
  { objecion: "Ya tengo proveedor", detras: "El cliente no necesariamente está cerrado a cambiar, simplemente no ve todavía un motivo suficiente.", responder: "Preguntar cómo le está yendo con ese proveedor actual, en vez de intentar reemplazarlo de entrada.", ejemplo: "Cliente: \u201CYa tengo quien me provee esto.\u201D Vendedor: \u201C¡Buenísimo que ya tengas resuelto eso! Contame cómo te viene funcionando, así veo si hay algo puntual en lo que Egran te puede sumar, aunque sea a futuro.\u201D", testimonioTexto: "", testimonioAutor: "" },
  { objecion: "No tenemos espacio en góndola", detras: "Puede ser una limitación real, o una forma amable de decir que no ve todavía suficiente valor.", responder: "Preguntar qué productos rotan menos hoy, para identificar si hay una oportunidad de reemplazo.", ejemplo: "Vendedor: \u201CEntiendo, el espacio siempre es limitado. ¿Hay algún producto que hoy rote más lento de lo que te gustaría?\u201D", testimonioTexto: "", testimonioAutor: "" },
  { objecion: "Dame tiempo para pensarlo", detras: "Es una respuesta legítima casi siempre, y conviene tratarla como tal, sin presionar.", responder: "Respetar el pedido, y proponer una fecha concreta para retomar el contacto.", ejemplo: "Vendedor: \u201CPor supuesto, tiene sentido pensarlo bien. ¿Te parece si te llamo el jueves a esta hora para ver qué decidiste?\u201D", testimonioTexto: "", testimonioAutor: "" },
  { objecion: "No sé si mi jefe va a aprobar esto", detras: "El interlocutor puede necesitar herramientas para defender la propuesta frente a otra persona.", responder: "Ofrecer un resumen simple y concreto que el cliente pueda compartir fácilmente.", ejemplo: "Vendedor: \u201CTe dejo un resumen de una página con lo que hablamos, así te resulta más fácil compartirlo con tu jefe.\u201D", testimonioTexto: "", testimonioAutor: "" },
  { objecion: "Tuvimos un problema antes con Egran", detras: "Significa que hay una experiencia negativa concreta que hay que reconocer, no minimizar.", responder: "Preguntar qué pasó exactamente, reconocerlo con honestidad, y explicar qué cambió desde entonces.", ejemplo: "Vendedor: \u201CQuiero entender bien qué pasó, porque me importa que no se repita.\u201D", testimonioTexto: "", testimonioAutor: "" },
  { objecion: "No conozco la marca", detras: "Es una oportunidad, no un obstáculo: el cliente todavía no tiene ninguna idea preconcebida.", responder: "Contar la historia corta de Egran con entusiasmo genuino, y ofrecer una muestra concreta.", ejemplo: "Vendedor: \u201CEs una empresa familiar cordobesa con casi 90 años en el rubro. Fabricamos marca propia para las cadenas más grandes del país.\u201D", testimonioTexto: "", testimonioAutor: "" },
];

// ---------- Utilidades ----------

function parseCSV(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i], next = text[i + 1];
    if (inQuotes) {
      if (c === '"' && next === '"') { field += '"'; i++; }
      else if (c === '"') { inQuotes = false; }
      else { field += c; }
    } else {
      if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ""; }
      else if (c === '\n' || c === '\r') {
        if (field !== "" || row.length) { row.push(field); rows.push(row); row = []; field = ""; }
        if (c === '\r' && next === '\n') i++;
      } else field += c;
    }
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  if (!rows.length) return [];
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).filter(r => r.some(v => v && v.trim())).map(r => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = (r[i] || "").trim());
    return obj;
  });
}

async function fetchCSVSafe(url) {
  if (!url || url.startsWith("PEGAR_ACA")) return null;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const text = await res.text();
    return parseCSV(text);
  } catch (e) {
    console.warn("No se pudo leer la planilla, uso datos de respaldo.", e);
    return null;
  }
}

async function getMatriz() {
  const rows = await fetchCSVSafe(CONFIG.matrizCSV);
  if (!rows || !rows.length) return MATRIZ_FALLBACK;
  return rows.map(r => ({
    situacion: r.Situacion || r.situacion || "",
    descuento: r.DescuentoMaximo || r.descuento || "",
    logistica: r.Logistica || r.logistica || "",
    pago: r.FormaDePago || r.pago || "",
    volumen: r.VolumenMinimo || r.volumen || "",
  }));
}

async function getObjeciones() {
  const rows = await fetchCSVSafe(CONFIG.objecionesCSV);
  if (!rows || !rows.length) return OBJECIONES_FALLBACK;
  return rows.map(r => ({
    objecion: r.Objecion || r.objecion || "",
    detras: r.QueHayDetras || r.detras || "",
    responder: r.ComoResponder || r.responder || "",
    ejemplo: r.Ejemplo || r.ejemplo || "",
    testimonioTexto: r.TestimonioTexto || "",
    testimonioAutor: r.TestimonioAutor || "",
  }));
}

if (typeof module !== "undefined") module.exports = { CONFIG, getMatriz, getObjeciones, parseCSV };
