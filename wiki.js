/* ============================================================
   KikaiCraft Wiki - JavaScript Principal
   Funcionalidades: búsqueda, filtrado, copiar IP, menú móvil
   ============================================================ */

/* ── Datos de artículos ── */
const articulos = [

/* ============================================================
   🧩 MODS (contenido)
   ============================================================ */

{ id: 1, titulo: "Alex's Mobs", descripcion: "Añade gran variedad de criaturas únicas al mundo.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Mobs"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "🐾" },

{ id: 2, titulo: "Artifacts", descripcion: "Objetos especiales con habilidades únicas.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Items"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "🎒" },

{ id: 3, titulo: "Aquamirae", descripcion: "Exploración submarina con estructuras y mobs.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Aventura"], autor: "Sistema", fecha: "2026", tiempoLectura: "6 min", emoji: "🌊" },

{ id: 4, titulo: "Cataclysm", descripcion: "Jefes extremadamente difíciles y dungeons.", categoria: "jefes", etiquetaCategoria: "Jefes", tags: ["#Boss","#PVE"], autor: "Sistema", fecha: "2026", tiempoLectura: "10 min", emoji: "🔥" },

{ id: 5, titulo: "Bosses of Mass Destruction", descripcion: "Nuevos bosses con mecánicas únicas.", categoria: "jefes", etiquetaCategoria: "Jefes", tags: ["#Boss","#Combate"], autor: "Sistema", fecha: "2026", tiempoLectura: "10 min", emoji: "💀" },

{ id: 6, titulo: "Mowzie's Mobs", descripcion: "Criaturas avanzadas con animaciones complejas.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Mobs"], autor: "Sistema", fecha: "2026", tiempoLectura: "7 min", emoji: "👹" },

{ id: 7, titulo: "Born in Chaos", descripcion: "Añade enemigos oscuros y desafíos.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Hardcore"], autor: "Sistema", fecha: "2026", tiempoLectura: "6 min", emoji: "☠️" },

{ id: 8, titulo: "Enemy Expansion", descripcion: "Más enemigos para el mundo.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Mobs"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "⚔️" },

{ id: 9, titulo: "Enderman Overhaul", descripcion: "Variedades de Enderman con habilidades.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#End"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "🟣" },

{ id: 10, titulo: "Deeper and Darker", descripcion: "Dimensión oscura con nuevos peligros.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#Dimensiones"], autor: "Sistema", fecha: "2026", tiempoLectura: "8 min", emoji: "🌑" },

{ id: 11, titulo: "Twilight Forest", descripcion: "Nueva dimensión llena de bosses y loot.", categoria: "jefes", etiquetaCategoria: "Jefes", tags: ["#Boss","#Dimensión"], autor: "Sistema", fecha: "2026", tiempoLectura: "12 min", emoji: "🌲" },

{ id: 12, titulo: "Vampirism", descripcion: "Sistema de vampiros con progresión.", categoria: "mods", etiquetaCategoria: "Guía de Mods", tags: ["#Mods","#RPG"], autor: "Sistema", fecha: "2026", tiempoLectura: "10 min", emoji: "🩸" },

/* ============================================================
   ⚔ ITEMS Y EQUIPO
   ============================================================ */

{ id: 50, titulo: "Simply Swords", descripcion: "Gran variedad de armas nuevas.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Armas"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "🗡️" },

{ id: 51, titulo: "Spartan Weaponry", descripcion: "Armas medievales avanzadas.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Combate"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "⚔️" },

{ id: 52, titulo: "Relics", descripcion: "Reliquias con poderes especiales.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Raros"], autor: "Sistema", fecha: "2026", tiempoLectura: "6 min", emoji: "💎" },

{ id: 53, titulo: "Gobber", descripcion: "Materiales y equipo OP.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Endgame"], autor: "Sistema", fecha: "2026", tiempoLectura: "6 min", emoji: "🔷" },

{ id: 54, titulo: "Silent Gear", descripcion: "Sistema avanzado de herramientas.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Craft"], autor: "Sistema", fecha: "2026", tiempoLectura: "8 min", emoji: "⚒️" },

{ id: 55, titulo: "Sophisticated Backpacks", descripcion: "Mochilas mejorables.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Storage"], autor: "Sistema", fecha: "2026", tiempoLectura: "4 min", emoji: "🎒" },

{ id: 56, titulo: "Sophisticated Storage", descripcion: "Almacenamiento avanzado.", categoria: "items", etiquetaCategoria: "Ítems y Equipo", tags: ["#Items","#Storage"], autor: "Sistema", fecha: "2026", tiempoLectura: "5 min", emoji: "📦" },

/* ============================================================
   💰 ECONOMÍA
   ============================================================ */

{ id: 80, titulo: "Sistema de Monedas", descripcion: "Uso de monedas del servidor.", categoria: "economia", etiquetaCategoria: "Economía", tags: ["#Economía","#Oro"], autor: "Sistema", fecha: "2026", tiempoLectura: "3 min", emoji: "💰" },

{ id: 81, titulo: "Tiendas de Jugadores", descripcion: "Compra y venta entre jugadores.", categoria: "economia", etiquetaCategoria: "Economía", tags: ["#Economía","#Trade"], autor: "Sistema", fecha: "2026", tiempoLectura: "4 min", emoji: "🏪" },

/* ============================================================
   📜 COMANDOS (LOS TUYOS)
   ============================================================ */

{ id: 100, titulo: "/register", descripcion: "Registra tu cuenta.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Login"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🔐" },

{ id: 101, titulo: "/login", descripcion: "Inicia sesión.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Login"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🔑" },

{ id: 102, titulo: "/warp lobby", descripcion: "Ir al lobby.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Warp"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🏠" },

{ id: 103, titulo: "/sethome", descripcion: "Guardar casa.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Home"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "📍" },

{ id: 104, titulo: "/home", descripcion: "Ir a casa.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Home"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🏡" },

{ id: 105, titulo: "/tpa", descripcion: "Teleport a jugador.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#TP"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "✨" },

{ id: 106, titulo: "/kit inicio", descripcion: "Reclamar kit.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Kit"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🎁" },

{ id: 107, titulo: "/clan create", descripcion: "Crear clan.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Clan"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "⚔️" },

{ id: 108, titulo: "/skills", descripcion: "Ver habilidades.", categoria: "comandos", etiquetaCategoria: "Comandos", tags: ["#Skills"], autor: "Sistema", fecha: "2026", tiempoLectura: "1 min", emoji: "🧬" }

];

/* ── Estado global de la app ── */
const estado = {
  textoBusqueda: "",
  categoriaActiva: "todos",
};

/* ── Referencias al DOM ── */
const inputBusqueda      = document.getElementById("inputBusqueda");
const contenedorArticulos = document.getElementById("contenedorArticulos");
const pestanasBtns       = document.querySelectorAll(".pestana");
const categoriasTarjetas = document.querySelectorAll(".tarjeta-categoria");
const btnHamburguesa     = document.getElementById("btnHamburguesa");
const menuMovil          = document.getElementById("menuMovil");
const notificacion       = document.getElementById("notificacionCopiado");

/* ============================================================
   RENDERIZAR ARTÍCULOS
   ============================================================ */
function obtenerArticulosFiltrados() {
  return articulos.filter((art) => {
    const coincideCategoria =
      estado.categoriaActiva === "todos" || art.categoria === estado.categoriaActiva;

    const texto = estado.textoBusqueda.toLowerCase().trim();
    const coincideTexto =
      texto === "" ||
      art.titulo.toLowerCase().includes(texto) ||
      art.descripcion.toLowerCase().includes(texto) ||
      art.tags.some((t) => t.toLowerCase().includes(texto)) ||
      art.autor.toLowerCase().includes(texto);

    return coincideCategoria && coincideTexto;
  });
}

function construirTarjetaArticulo(art) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-articulo";
  tarjeta.setAttribute("role", "article");

  const tagsHtml = art.tags
    .map((t) => `<span class="etiqueta-hash">${t}</span>`)
    .join("");

  tarjeta.innerHTML = `
    <div class="tarjeta-articulo__imagen-placeholder" aria-hidden="true">
      <span>${art.emoji}</span>
    </div>
    <div class="tarjeta-articulo__cuerpo">
      <div class="tarjeta-articulo__meta">
        <span class="etiqueta etiqueta--${art.categoria}">${art.etiquetaCategoria}</span>
        ${tagsHtml}
      </div>
      <h3 class="tarjeta-articulo__titulo">${art.titulo}</h3>
      <p class="tarjeta-articulo__descripcion">${art.descripcion}</p>
      <div class="tarjeta-articulo__pie">
        <span class="tarjeta-articulo__autor">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M5.5 20a6.5 6.5 0 0113 0"/></svg>
          ${art.autor}
        </span>
        <span class="tarjeta-articulo__fecha">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          ${art.fecha}
        </span>
        <span class="tarjeta-articulo__tiempo">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          ${art.tiempoLectura}
        </span>
        <span class="tarjeta-articulo__accion">
          Leer
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </span>
      </div>
    </div>
  `;

  return tarjeta;
}

function renderizarArticulos() {
  const filtrados = obtenerArticulosFiltrados();

  contenedorArticulos.innerHTML = "";

  if (filtrados.length === 0) {
    contenedorArticulos.innerHTML = `
      <div class="sin-resultados" role="status" aria-live="polite">
        <div class="sin-resultados__icono">🔍</div>
        <h3 class="sin-resultados__titulo">Sin resultados</h3>
        <p>No se encontraron artículos para "<strong>${estado.textoBusqueda}</strong>".</p>
      </div>
    `;
    return;
  }

  const fragmento = document.createDocumentFragment();
  filtrados.forEach((art) => {
    fragmento.appendChild(construirTarjetaArticulo(art));
  });
  contenedorArticulos.appendChild(fragmento);
}

/* ============================================================
   BÚSQUEDA EN TIEMPO REAL
   ============================================================ */
if (inputBusqueda) {
  let timerBusqueda;
  inputBusqueda.addEventListener("input", () => {
    clearTimeout(timerBusqueda);
    timerBusqueda = setTimeout(() => {
      estado.textoBusqueda = inputBusqueda.value;
      renderizarArticulos();
    }, 180);
  });

  /* Atajo de teclado "/" para enfocarse en la búsqueda */
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "/" &&
      document.activeElement !== inputBusqueda &&
      document.activeElement.tagName !== "INPUT"
    ) {
      e.preventDefault();
      inputBusqueda.focus();
    }
    if (e.key === "Escape" && document.activeElement === inputBusqueda) {
      inputBusqueda.blur();
    }
  });
}

/* ============================================================
   FILTRO POR PESTAÑAS
   ============================================================ */
pestanasBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-categoria");
    estado.categoriaActiva = cat;

    /* Actualizar estado visual de pestañas */
    pestanasBtns.forEach((b) => b.classList.remove("pestana--activa"));
    btn.classList.add("pestana--activa");

    /* Actualizar estado visual de tarjetas de categoría */
    categoriasTarjetas.forEach((tc) => {
      tc.classList.remove("tarjeta-categoria--activa");
      if (tc.getAttribute("data-categoria") === cat && cat !== "todos") {
        tc.classList.add("tarjeta-categoria--activa");
      }
    });

    renderizarArticulos();
  });
});

/* ============================================================
   FILTRO POR TARJETAS DE CATEGORÍA
   ============================================================ */
categoriasTarjetas.forEach((tarjeta) => {
  tarjeta.addEventListener("click", () => {
    const cat = tarjeta.getAttribute("data-categoria");

    /* Si se hace clic en la categoría activa, deseleccionarla */
    if (estado.categoriaActiva === cat) {
      estado.categoriaActiva = "todos";

      categoriasTarjetas.forEach((tc) => tc.classList.remove("tarjeta-categoria--activa"));

      pestanasBtns.forEach((b) => {
        b.classList.remove("pestana--activa");
        if (b.getAttribute("data-categoria") === "todos") {
          b.classList.add("pestana--activa");
        }
      });
    } else {
      estado.categoriaActiva = cat;

      categoriasTarjetas.forEach((tc) => tc.classList.remove("tarjeta-categoria--activa"));
      tarjeta.classList.add("tarjeta-categoria--activa");

      pestanasBtns.forEach((b) => {
        b.classList.remove("pestana--activa");
        if (b.getAttribute("data-categoria") === cat) {
          b.classList.add("pestana--activa");
        }
      });
    }

    renderizarArticulos();
  });
});

/* ============================================================
   COPIAR IP DEL SERVIDOR
   ============================================================ */
const IP_SERVIDOR = "KikaiCraft.clanky.net";

function mostrarNotificacion(mensaje) {
  if (!notificacion) return;
  notificacion.textContent = '✓ ' + mensaje;
  notificacion.classList.add("visible");
  setTimeout(() => notificacion.classList.remove("visible"), 2200);
}

function copiarIP() {
  navigator.clipboard
    .writeText(IP_SERVIDOR)
    .then(() => mostrarNotificacion("✓ IP copiada: KikaiCraft.clanky.net"))
    .catch(() => {
      /* Fallback para navegadores más antiguos */
      const el = document.createElement("textarea");
      el.value = IP_SERVIDOR;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      mostrarNotificacion("✓ IP copiada: KikaiCraft.clanky.net");
    });
}

document.querySelectorAll(".copiar-ip").forEach((btn) => {
  btn.addEventListener("click", copiarIP);
});

/* ============================================================
   MENÚ HAMBURGUESA (MÓVIL)
   ============================================================ */
if (btnHamburguesa && menuMovil) {
  btnHamburguesa.addEventListener("click", () => {
    const abierto = menuMovil.classList.toggle("abierto");
    btnHamburguesa.setAttribute("aria-expanded", abierto.toString());
    btnHamburguesa.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  /* Cerrar al hacer clic fuera */
  document.addEventListener("click", (e) => {
    if (
      menuMovil.classList.contains("abierto") &&
      !menuMovil.contains(e.target) &&
      !btnHamburguesa.contains(e.target)
    ) {
      menuMovil.classList.remove("abierto");
      btnHamburguesa.setAttribute("aria-expanded", "false");
    }
  });
}

/* ============================================================
   INICIALIZACIÓN
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderizarArticulos();
});
