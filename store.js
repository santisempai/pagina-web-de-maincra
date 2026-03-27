/* ============================================================
   KikaiCraft Store — JavaScript principal
   Funcionalidad: filtros, búsqueda, modal, copiar IP, menú móvil
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Referencias DOM ── */
  const inputBusqueda    = document.getElementById('busqueda');
  const pillsFiltro      = document.querySelectorAll('.filtro-pill');
  const tarjetas         = document.querySelectorAll('.producto-card');
  const sinResultados    = document.getElementById('sin-resultados');
  const modalOverlay     = document.getElementById('modal');
  const modalProducto    = document.getElementById('modal-producto');
  const modalCerrarBtn   = document.getElementById('modal-cerrar');
  const modalX           = document.getElementById('modal-x');
  const hamburguesa      = document.getElementById('hamburguesa');
  const menuMovil        = document.getElementById('menu-movil');
  const toast            = document.getElementById('toast');
  const btnsCopiarIP     = document.querySelectorAll('.btn-copiar-ip, .btn-ip');

  /* Estado actual del filtro */
  let filtroActual = 'todos';
  let textoBusqueda = '';

  /* ── Utilidades ── */

  /**
   * Muestra el toast de notificación durante 2.5 s
   * @param {string} mensaje
   */
  function mostrarToast(mensaje) {
    toast.textContent = '✓  ' + mensaje;
    toast.classList.add('visible');
    setTimeout(() => toast.classList.remove('visible'), 2500);
  }

  /**
   * Filtra y aplica visibilidad a las tarjetas de productos
   */
  function aplicarFiltros() {
    let visibles = 0;

    tarjetas.forEach(tarjeta => {
      const cat   = tarjeta.dataset.categoria || '';
      const texto = tarjeta.dataset.busqueda || '';

      const pasaCategoria = filtroActual === 'todos' || cat === filtroActual;
      const pasaBusqueda  = texto.includes(textoBusqueda.toLowerCase().trim());

      if (pasaCategoria && pasaBusqueda) {
        tarjeta.classList.remove('oculto');
        visibles++;
      } else {
        tarjeta.classList.add('oculto');
      }
    });

    /* Mostrar mensaje si no hay resultados */
    if (sinResultados) {
      sinResultados.style.display = visibles === 0 ? 'block' : 'none';
    }
  }

  /* ── Filtros por categoría (pills) ── */
  pillsFiltro.forEach(pill => {
    pill.addEventListener('click', () => {
      /* Actualizar activo */
      pillsFiltro.forEach(p => p.classList.remove('activo'));
      pill.classList.add('activo');
      filtroActual = pill.dataset.filtro;
      aplicarFiltros();
    });
  });

  /* ── Búsqueda en tiempo real ── */
  if (inputBusqueda) {
    inputBusqueda.addEventListener('input', (e) => {
      textoBusqueda = e.target.value;
      aplicarFiltros();
    });
  }

  /* ── Filtros rápidos desde las tarjetas de categoría (header categorías) ── */
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.categoria;
      if (!cat) return;

      /* Actualizar pill activo */
      pillsFiltro.forEach(pill => {
        pill.classList.toggle('activo', pill.dataset.filtro === cat);
      });
      filtroActual = cat;
      aplicarFiltros();

      /* Hacer scroll suave a la sección de productos */
      const secProductos = document.getElementById('productos');
      if (secProductos) {
        secProductos.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Modal de compra ── */
function abrirModal(producto) {
  if (!modalOverlay) return;

  document.getElementById('modal-producto').textContent = producto.nombre;
  document.getElementById('modal-desc').textContent = producto.descripcion;
  document.getElementById('modal-contenido').textContent = producto.contenido;
  document.getElementById('modal-comandos').textContent = producto.comandos;

  modalOverlay.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    if (!modalOverlay) return;
    // Redirect to PayPal
    window.open('https://www.paypal.com/paypalme/3214234', '_blank');
    modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  /* Botones "Comprar" */
document.querySelectorAll('.btn-comprar').forEach(btn => {
  btn.addEventListener('click', () => {

    const producto = {
      nombre: btn.dataset.producto || 'Artículo',
      descripcion: btn.dataset.desc || 'Sin descripción',
      contenido: btn.dataset.contenido || 'No especificado',
      comandos: btn.dataset.comandos || 'No disponibles'
    };

    abrirModal(producto);
  });
});
  /* Cerrar modal */
  if (modalCerrarBtn) modalCerrarBtn.addEventListener('click', cerrarModal);
  if (modalX)         modalX.addEventListener('click', cerrarModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) cerrarModal();
    });
  }

  /* Tecla Escape cierra modal */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
  });

  /* ── Copiar IP ── */
  const IP_SERVIDOR = 'KikaiCraft.clanky.net';

  function copiarIP(boton) {
    navigator.clipboard.writeText(IP_SERVIDOR)
      .then(() => {
        mostrarToast('✓ IP copiada: ' + IP_SERVIDOR);
        if (boton && boton.classList.contains('btn-copiar-ip')) {
          boton.textContent = '¡Copiado!';
          boton.classList.add('copiado');
          setTimeout(() => {
            boton.textContent = 'Copiar IP';
            boton.classList.remove('copiado');
          }, 2000);
        }
      })
      .catch(() => {
        /* Fallback para navegadores sin permiso de clipboard */
        const area = document.createElement('textarea');
        area.value = IP_SERVIDOR;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        mostrarToast('✓ IP copiada: ' + IP_SERVIDOR);
      });
  }

  btnsCopiarIP.forEach(btn => {
    btn.addEventListener('click', () => copiarIP(btn));
  });

  /* ── Menú móvil (hamburguesa) ── */
  if (hamburguesa && menuMovil) {
    hamburguesa.addEventListener('click', () => {
      const abierto = menuMovil.classList.toggle('abierto');
      hamburguesa.setAttribute('aria-expanded', abierto);
      /* Animar líneas */
      const lineas = hamburguesa.querySelectorAll('span');
      if (abierto) {
        lineas[0].style.transform = 'translateY(7px) rotate(45deg)';
        lineas[1].style.opacity   = '0';
        lineas[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        lineas.forEach(l => { l.style.transform = ''; l.style.opacity = ''; });
      }
    });

    /* Cerrar menú al hacer click en un enlace */
    menuMovil.querySelectorAll('a').forEach(enlace => {
      enlace.addEventListener('click', () => {
        menuMovil.classList.remove('abierto');
        hamburguesa.setAttribute('aria-expanded', 'false');
        hamburguesa.querySelectorAll('span').forEach(l => {
          l.style.transform = ''; l.style.opacity = '';
        });
      });
    });
  }

  /* ── Animación de aparición por scroll (IntersectionObserver) ── */
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.style.animationPlayState = 'running';
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.producto-card, .cat-card, .cosmetico-card, .particula-card').forEach(el => {
    el.style.animationPlayState = 'paused';
    observador.observe(el);
  });

  /* ── Inicializar ── */
  aplicarFiltros();

  console.log('%c KikaiCraft Store cargado ✔', 'color: #e83030; font-weight: bold; font-size: 14px;');
});
