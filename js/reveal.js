/**
 * Fades cards in as they scroll into view. If IntersectionObserver
 * isn't supported, this is skipped and cards simply remain visible
 * with whatever classes are already on them.
 */
document.addEventListener('DOMContentLoaded', () => {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.card-shadow');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
    observer.observe(card);
  });
});
