// Estado UI
const state = {
  items: [],
  filtered: [],
  sort: { key: "nombre", dir: "asc" },
  page: 1,
  pageSize: 10,
  filters: { q: "", from: "", to: "", category: "", onlyAlerts: false },
  categories: new Set(),
  theme: localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"),
  primary: localStorage.getItem("primary") || "#2B6CB0",
  accent: localStorage.getItem("accent") || "#D69E2E",
};

// Init
document.addEventListener("DOMContentLoaded", async () => {
  applyTheme();
  applyPalette();

  bindControls();
  await loadItems();
  renderCategories();
  applyFilters();
  render();
});

// Controles
function bindControls() {
  const q = document.getElementById("q");
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const category = document.getElementById("category");
  const onlyAlerts = document.getElementById("onlyAlerts");
  const datePresetMobile = document.getElementById("datePresetMobile");

  q.addEventListener("input", debounce(() => { state.filters.q = q.value; applyFilters(); render(); }, 200));
  from.addEventListener("change", () => { state.filters.from = from.value; applyFilters(); render(); });
  to.addEventListener("change", () => { state.filters.to = to.value; applyFilters(); render(); });
  category.addEventListener("change", () => { state.filters.category = category.value; applyFilters(); render(); });
  onlyAlerts.addEventListener("change", () => { state.filters.onlyAlerts = onlyAlerts.checked; applyFilters(); render(); });

  document.querySelectorAll(".presets button").forEach(btn => {
    btn.addEventListener("click", () => {
      const now = new Date();
      const setDate = (d) => d.toISOString().slice(0,10);
      let start = new Date();
      if (btn.dataset.preset === "hoy") start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      if (btn.dataset.preset === "semana") {
        const day = (now.getDay() + 6) % 7;
        start = new Date(now); start.setDate(now.getDate() - day);
      }
      if (btn.dataset.preset === "mes") start = new Date(now.getFullYear(), now.getMonth(), 1);
      if (btn.dataset.preset === "trimestre") start = new Date(now.getFullYear(), Math.floor(now.getMonth()/3)*3, 1);
      from.value = setDate(start);
      to.value = setDate(now);
      state.filters.from = from.value; state.filters.to = to.value;
      applyFilters(); render();
    });
  });

  // Select de rangos para móvil
  if (datePresetMobile) {
    const now = new Date();
    const setDate = (d) => d.toISOString().slice(0,10);
    function setRange(preset) {
      let start = new Date();
      if (preset === "hoy") start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      if (preset === "semana") {
        const day = (now.getDay() + 6) % 7;
        start = new Date(now); start.setDate(now.getDate() - day);
      }
      if (preset === "mes") start = new Date(now.getFullYear(), now.getMonth(), 1);
      if (preset === "trimestre") start = new Date(now.getFullYear(), Math.floor(now.getMonth()/3)*3, 1);
      from.value = setDate(start);
      to.value = setDate(now);
      state.filters.from = from.value; state.filters.to = to.value;
      applyFilters(); render();
    }
    // Estado inicial: Hoy
    setRange("hoy");
    datePresetMobile.value = "hoy";
    datePresetMobile.addEventListener("change", () => {
      setRange(datePresetMobile.value);
    });
  }

  // Sort
  document.querySelectorAll(".items-table th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.sort.key === key) state.sort.dir = (state.sort.dir === "asc" ? "desc" : "asc");
      else { state.sort.key = key; state.sort.dir = "asc"; }
      render();
    });
  });

  document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
  document.getElementById("primaryColor").addEventListener("input", (e) => setPrimary(e.target.value));
  document.getElementById("accentColor").addEventListener("input", (e) => setAccent(e.target.value));
}

// Carga
async function loadItems() {
  const { q, from, to, category } = state.filters;
  state.items = await fetchItems({ query: q, from, to, category });
  state.categories = new Set(state.items.map(i => i.categoria).filter(Boolean));
}

// Filtros
function applyFilters() {
  const { q, category, onlyAlerts } = state.filters;
  let list = [...state.items];

  if (q) {
    const needle = q.toLowerCase();
    list = list.filter(i => i.nombre.toLowerCase().includes(needle) || i.sku.toLowerCase().includes(needle));
  }
  if (category) list = list.filter(i => i.categoria === category);
  if (onlyAlerts) list = list.filter(i => getStatus(i).status !== "ok");

  state.filtered = list;
  state.page = 1;
}

// Render
function render() {
  const tbody = document.getElementById("itemsBody");
  tbody.innerHTML = "";

  const sorted = [...state.filtered].sort(sorter(state.sort.key, state.sort.dir));
  const paged = paginate(sorted, state.page, state.pageSize);

  for (const item of paged.items) {
    const st = getStatus(item);
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div style="font-weight:600">${item.nombre}</div>
        <div class="meta">${item.sku} · ${item.categoria || ""}</div>
      </td>
      <td>${item.disponible}</td>
      <td>${item.reservado}</td>
      <td>${item.inventario_real}</td>
      <td>${item.compromisos ?? 0}</td>
      <td><span class="badge ${st.status}">${st.label}</span></td>
      <td>${formatDate(item.ultima_actualizacion)}</td>
      <td><button class="action-btn" data-history="${item.id}">Historial</button></td>
    `;
    tbody.appendChild(tr);
  }

  tbody.querySelectorAll("button[data-history]").forEach(btn => {
    btn.addEventListener("click", openHistory);
  });

  renderPagination(paged.totalPages);
  renderKPIs(sorted);
  renderCategories(); // ensure select is populated
}

function renderPagination(totalPages) {
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";
  const prev = document.createElement("button");
  prev.textContent = "‹";
  prev.disabled = state.page <= 1;
  prev.addEventListener("click", () => { state.page--; render(); });
  const next = document.createElement("button");
  next.textContent = "›";
  next.disabled = state.page >= totalPages;
  next.addEventListener("click", () => { state.page++; render(); });

  const info = document.createElement("span");
  info.style.alignSelf = "center";
  info.textContent = ` Página ${state.page} de ${totalPages || 1} `;

  pag.append(prev, info, next);
}

function renderKPIs(list) {
  const criticos = list.filter(i => getStatus(i).status === "crit").length;
  const riesgo = list.filter(i => getStatus(i).status === "warn").length;
  const variacion = list.reduce((acc,i) => acc + 0, 0); // placeholder si quieres calcular contra periodo anterior
  const compromisos = list.reduce((acc,i) => acc + (i.compromisos ?? 0), 0);

  document.querySelector("#kpiCriticos .kpi-value").textContent = criticos;
  document.querySelector("#kpiRiesgo .kpi-value").textContent = riesgo;
  document.querySelector("#kpiVariacion .kpi-value").textContent = variacion;
  document.querySelector("#kpiCompromisos .kpi-value").textContent = compromisos;
}

function renderCategories() {
  const sel = document.getElementById("category");
  const existing = new Set([...sel.options].map(o => o.value));
  for (const c of state.categories) {
    if (!existing.has(c)) {
      const opt = document.createElement("option");
      opt.value = c; opt.textContent = c;
      sel.appendChild(opt);
    }
  }
}

// Historial
async function openHistory(e) {
  const id = Number(e.currentTarget.dataset.history);
  const dialog = document.getElementById("historyDialog");
  const title = document.getElementById("historyTitle");
  const list = document.getElementById("historyList");

  const item = state.items.find(i => i.id === id);
  title.textContent = `Historial · ${item?.nombre || id}`;

  const filters = { type: document.getElementById("historyType").value,
                    from: document.getElementById("historyFrom").value,
                    to: document.getElementById("historyTo").value };
  const movements = await fetchMovements(id, filters);
  list.innerHTML = "";

  for (const m of movements) {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${labelTipo(m.tipo)}</strong> · ${m.cantidad > 0 ? "+" : ""}${m.cantidad}
        <div class="meta">${m.referencia || ""} · ${m.notas || ""}</div>
      </div>
      <div class="meta">${formatDate(m.fecha_iso)}</div>
    `;
    list.appendChild(li);
  }

  // Bind history filter changes
  ["historyType","historyFrom","historyTo"].forEach(id => {
    document.getElementById(id).onchange = () => openHistory(e);
  });

  dialog.showModal();
}

// Utilidades
function getStatus(item) {
  const compromisos = item.compromisos ?? 0;
  const min = item.stock_minimo ?? 0;
  if (item.disponible < 0 || item.disponible < compromisos) return { status: "crit", label: "Crítico" };
  if (item.disponible <= min) return { status: "warn", label: "Riesgo" };
  return { status: "ok", label: "Sano" };
}

function sorter(key, dir) {
  const mult = dir === "asc" ? 1 : -1;
  return (a,b) => {
    const va = a[key] ?? ""; const vb = b[key] ?? "";
    if (typeof va === "number" && typeof vb === "number") return (va - vb) * mult;
    return String(va).localeCompare(String(vb), "es") * mult;
  };
}

function paginate(arr, page, size) {
  const total = arr.length;
  const totalPages = Math.max(1, Math.ceil(total / size));
  const start = (page - 1) * size;
  return { items: arr.slice(start, start + size), totalPages };
}

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleString();
}

function debounce(fn, ms) {
  let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function labelTipo(t) {
  const map = {
    pedido: "Pedido (reserva)",
    recepcion: "Recepción",
    despacho: "Despacho",
    consumo: "Consumo interno",
    merma: "Merma",
    traslado_entrante: "Traslado entrante",
    traslado_saliente: "Traslado saliente",
    ajuste: "Ajuste",
  };
  return map[t] || t;
}

// Tema y paleta
function applyTheme() {
  const root = document.documentElement;
  root.classList.toggle("dark", state.theme === "dark");
  localStorage.setItem("theme", state.theme);
  document.getElementById("toggleTheme").setAttribute("aria-pressed", state.theme === "dark");
}
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  applyTheme();
}
function setPrimary(hex) {
  state.primary = hex;
  localStorage.setItem("primary", hex);
  applyPalette();
}
function setAccent(hex) {
  state.accent = hex;
  localStorage.setItem("accent", hex);
  applyPalette();
}
function applyPalette() {
  const root = document.documentElement;
  root.style.setProperty("--primary", state.primary);
  root.style.setProperty("--accent", state.accent);
}