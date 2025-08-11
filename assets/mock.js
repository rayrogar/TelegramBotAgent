// Simulación de API (reemplaza luego con fetch a tu backend)
const MOCK_ITEMS = [
  { id: 1, nombre: "Caja tornillos 3mm", sku: "TOR-3", categoria: "Ferretería", unidad: "caja",
    stock_minimo: 10, inventario_real: 120, reservado: 30, disponible: 90, compromisos: 25,
    ultima_actualizacion: "2025-08-10T22:15:00Z" },
  { id: 2, nombre: "Cable UTP Cat6", sku: "CAB-C6", categoria: "Networking", unidad: "rollo",
    stock_minimo: 5, inventario_real: 8, reservado: 4, disponible: 4, compromisos: 6,
    ultima_actualizacion: "2025-08-10T20:03:00Z" },
  { id: 3, nombre: "Guantes nitrilo M", sku: "GUA-NM", categoria: "EPP", unidad: "par",
    stock_minimo: 50, inventario_real: 40, reservado: 5, disponible: 35, compromisos: 0,
    ultima_actualizacion: "2025-08-10T18:40:00Z" },
];

const MOCK_MOVEMENTS = {
  1: [
    { id: 101, tipo: "pedido", cantidad: -10, fecha_iso: "2025-08-09T10:00:00Z", referencia: "PED-001", notas: "Cliente A" },
    { id: 102, tipo: "recepcion", cantidad: +50, fecha_iso: "2025-08-09T15:00:00Z", referencia: "REC-019", notas: "Proveedor X" },
    { id: 103, tipo: "despacho", cantidad: -10, fecha_iso: "2025-08-10T09:30:00Z", referencia: "DES-778", notas: "PED-001" },
    { id: 104, tipo: "merma", cantidad: -2, fecha_iso: "2025-08-10T11:00:00Z", referencia: "MER-003", notas: "Daño" },
  ],
  2: [
    { id: 201, tipo: "pedido", cantidad: -6, fecha_iso: "2025-08-10T08:00:00Z", referencia: "PED-099", notas: "Cliente B" },
  ],
  3: [
    { id: 301, tipo: "ajuste", cantidad: -5, fecha_iso: "2025-08-08T08:00:00Z", referencia: "AJU-010", notas: "Conteo" },
  ],
};

async function fetchItems({ query = "", from = "", to = "", category = "" } = {}) {
  // Simulación de filtros básicos
  let out = [...MOCK_ITEMS];
  if (query) {
    const q = query.toLowerCase();
    out = out.filter(it => it.nombre.toLowerCase().includes(q) || it.sku.toLowerCase().includes(q));
  }
  if (category) {
    out = out.filter(it => it.categoria === category);
  }
  return Promise.resolve(out);
}
async function fetchMovements(itemId, { from = "", to = "", type = "" } = {}) {
  let list = [...(MOCK_MOVEMENTS[itemId] || [])];
  if (type) list = list.filter(m => m.tipo === type);
  if (from) list = list.filter(m => m.fecha_iso >= new Date(from).toISOString());
  if (to) list = list.filter(m => m.fecha_iso <= new Date(to).toISOString());
  return Promise.resolve(list.sort((a,b) => new Date(b.fecha_iso)-new Date(a.fecha_iso)));
}