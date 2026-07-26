/* =========================================================================
   EGRAN · Herramienta Comercial — Escenarios de Modo Campo
   Cada escenario junta secciones ya existentes en content.js.
   No duplica texto: solo arma un recorrido corto para esa situación puntual.
   ========================================================================= */

const ESCENARIOS = [
  {
    id: "primera_visita",
    icono: "🚪",
    titulo: "Voy a una primera visita",
    bajada: "Un cliente que todavía no nos conoce",
    secciones: ["2.2", "2.4", "2.5", "4.1", "5.1", "5.2"],
    extras: { objeciones: ["No conozco la marca"], herramienta: null },
  },
  {
    id: "primera_repeticion",
    icono: "🔁",
    titulo: "Voy a ver cómo fue la primera compra",
    bajada: "Después del primer pedido de un cliente nuevo",
    secciones: ["4.2", "7.2"],
    extras: { objeciones: [], herramienta: null },
  },
  {
    id: "negociacion_temporada",
    icono: "📅",
    titulo: "Voy a una negociación de temporada",
    bajada: "La visita que define el año con un cliente",
    secciones: ["4.3", "3.2", "3.6", "4.7"],
    extras: { objeciones: ["Es caro / la competencia me lo da más barato", "Tuvimos un problema antes con Egran"], herramienta: "matriz" },
  },
  {
    id: "ampliacion_mix",
    icono: "📈",
    titulo: "Quiero ampliar el mix de un cliente",
    bajada: "Un cliente que ya compra, para que compre más",
    secciones: ["4.4", "2.3"],
    extras: { objeciones: [], herramienta: null },
  },
  {
    id: "seguimiento",
    icono: "🤝",
    titulo: "Voy a hacer una visita de seguimiento",
    bajada: "Estar presente sin ser pesado",
    secciones: ["4.5", "4.8"],
    extras: { objeciones: [], herramienta: null },
  },
  {
    id: "objecion",
    icono: "💬",
    titulo: "Un cliente me puso una objeción",
    bajada: "Elegí cuál para ver cómo responderla",
    secciones: ["6.1"],
    extras: { objeciones: "todas", herramienta: null },
  },
  {
    id: "negociar_descuento",
    icono: "💰",
    titulo: "Tengo que negociar un descuento",
    bajada: "Saber hasta dónde puedo llegar sin consultar",
    secciones: ["4.7", "3.6"],
    extras: { objeciones: [], herramienta: "matriz" },
  },
  {
    id: "cambio_interlocutor",
    icono: "🔄",
    titulo: "Cambió mi contacto en una cuenta",
    bajada: "La cuenta sigue, la persona no",
    secciones: ["8.4"],
    extras: { objeciones: [], herramienta: null },
  },
  {
    id: "cliente_no_compra",
    icono: "🚦",
    titulo: "Un cliente hace tiempo que no compra",
    bajada: "Saber qué acción corresponde según hace cuánto",
    secciones: ["4.6", "8.3"],
    extras: { objeciones: [], herramienta: "semaforo" },
  },
  {
    id: "recuperar_excliente",
    icono: "🔙",
    titulo: "Quiero recuperar un excliente",
    bajada: "Diagnóstico primero, oferta después",
    secciones: ["8.3", "4.7"],
    extras: { objeciones: [], herramienta: "matriz" },
  },
];

if (typeof module !== "undefined") module.exports = { ESCENARIOS };
