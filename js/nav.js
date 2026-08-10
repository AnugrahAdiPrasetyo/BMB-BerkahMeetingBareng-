/**
 * Navbar behavior:
 * 1. Mobile navigation: toggles the off-canvas menu, keeps the
 *    hamburger icon and aria-expanded state in sync, and closes the
 *    menu after a link is used or the viewport reaches desktop width.
 * 2. Scroll state: the navbar starts transparent over the hero and
 *    switches to a solid glass/blur panel once the page is scrolled,
 *    for contrast and readability.
 */
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const scrollThreshold = 24;
  let ticking = false;

  const updateNavScrollState = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
    ticking = false;
  };

  if (nav) {
    updateNavScrollState();
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateNavScrollState);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

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

  const desktopQuery = window.matchMedia('(min-width: 1024px)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) closeMenu();
  });
});
