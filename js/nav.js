/**
 * Mobile navigation: toggles the off-canvas menu, keeps the
 * hamburger icon and aria-expanded state in sync, and closes the
 * menu after a link is used or the viewport reaches desktop width.
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const toggleIcon = document.getElementById('nav-toggle-icon');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu || !toggleIcon) return;

  const openMenu = () => {
    menu.classList.remove('hidden');
    menu.classList.add('flex');
    toggle.setAttribute('aria-expanded', 'true');
    toggleIcon.textContent = 'close';
  };

  const closeMenu = () => {
    menu.classList.add('hidden');
    menu.classList.remove('flex');
    toggle.setAttribute('aria-expanded', 'false');
    toggleIcon.textContent = 'menu';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  const desktopQuery = window.matchMedia('(min-width: 768px)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
});
