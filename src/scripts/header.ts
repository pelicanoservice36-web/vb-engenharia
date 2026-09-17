const header = document.querySelector<HTMLElement>('[data-header]');
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const mobileNav = document.querySelector<HTMLElement>('[data-mobile-nav]');

const SCROLL_THRESHOLD = 24;

function updateHeaderState() {
  if (!header) return;
  if (window.scrollY > SCROLL_THRESHOLD) {
    header.setAttribute('data-scrolled', '');
  } else {
    header.removeAttribute('data-scrolled');
  }
}

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

function closeMobileNav() {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
  document.body.classList.remove('has-mobile-nav-open');
}

function openMobileNav() {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', 'true');
  mobileNav.hidden = false;
  // Esconde a barra fixa (MobileActionBar) enquanto o menu está aberto —
  // sem isso, WhatsApp/Orçamento apareciam duplicados na tela ao mesmo
  // tempo (uma vez no drawer, outra vez na barra fixa por baixo dele).
  document.body.classList.add('has-mobile-nav-open');
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
});

mobileNav?.querySelectorAll('[data-mobile-link]').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileNav();
  }
});
