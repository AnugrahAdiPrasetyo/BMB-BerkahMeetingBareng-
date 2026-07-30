/**
 * Global site behavior: smooth-scrolls to same-page anchor targets
 * (e.g. nav links to #services, #pricing, #faq, #contact).
 *
 * Bare "#" links (back-to-top FAB, placeholder social icons) are
 * intentionally left alone so the browser's native anchor behavior
 * runs instead — document.querySelector('#') is an invalid selector
 * and would otherwise throw.
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');

      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
