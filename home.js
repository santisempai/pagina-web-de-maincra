// ============================================
//   KikaiCraft - JavaScript interacciones
//   Servidor Minecraft
// ============================================

const SERVER_IP = 'play.kikaicraft.net';

// --- Utilidad: mostrar toast ---
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

// --- Copiar IP al portapapeles ---
function copyIP() {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(SERVER_IP)
      .then(function() { showToast('✓ IP copiada: ' + SERVER_IP); })
      .catch(function() { fallbackCopy(SERVER_IP); });
  } else {
    fallbackCopy(SERVER_IP);
  }
}

function fallbackCopy(text) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast('✓ IP copiada: ' + text);
  } catch (e) {
  showToast('IP: ' + text);
  }
  document.body.removeChild(ta);
}

// --- Modal compra kits ---
function openBuyModal(kitName) {
  var modal = document.getElementById('modal-overlay');
  var modalKitName = document.getElementById('modal-kit-name');
  if (modal) {
    if (modalKitName) {
      modalKitName.textContent = kitName;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  var modal = document.getElementById('modal-overlay');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Cerrar modal haciendo click fuera del cuadro
document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('modal-overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  // Cerrar modal con Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

// Enlazar TODOS botones IP (.btn-copiar-ip, .btn-ip, [data-copy-ip])
  const allCopyBtns = document.querySelectorAll('.btn-copiar-ip, .btn-ip, [data-copy-ip]');
  allCopyBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      copyIP();
    });
  });

  // Enlazar botones comprar
  var buyBtns = document.querySelectorAll('[data-buy-kit]');
  buyBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var kitName = btn.getAttribute('data-buy-kit') || 'Kit';
      openBuyModal(kitName);
    });
  });

  // Botones "Start Your Journey" y "View Live Map" -> scroll suave a kits
  var btnJourney = document.getElementById('btn-journey');
  if (btnJourney) {
    btnJourney.addEventListener('click', function(e) {
      e.preventDefault();
      var kitsSection = document.getElementById('kits-section');
      if (kitsSection) {
        kitsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  var btnMap = document.getElementById('btn-map');
  if (btnMap) {
    btnMap.addEventListener('click', function(e) {
      e.preventDefault();
      showToast('Mapa en vivo proximamente...');
    });
  }

  // Animacion de entrada para cards de kits
  var cards = document.querySelectorAll('.kit-card');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cards.forEach(function(card, i) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(32px)';
      card.style.transition = 'opacity 0.5s ease ' + (i * 0.1) + 's, transform 0.5s ease ' + (i * 0.1) + 's, box-shadow 0.25s, transform 0.25s';
      observer.observe(card);
    });
  }
});

