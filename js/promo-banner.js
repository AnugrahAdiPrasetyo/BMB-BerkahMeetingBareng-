/**
 * Promotional banner slider (above the navbar).
 * - Auto-slides every 5s, pauses on hover/focus.
 * - Prev/Next buttons and dot indicators.
 * - Swipe support on touch devices.
 * - Respects prefers-reduced-motion (no auto-slide).
 */
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('promo-banner');
  const track = document.getElementById('promo-track');
  const prevBtn = document.getElementById('promo-prev');
  const nextBtn = document.getElementById('promo-next');

  if (!banner || !track || !prevBtn || !nextBtn) return;

  const dots = Array.from(banner.querySelectorAll('[data-slide-dot]'));
  const slideCount = track.children.length;
  if (slideCount === 0) return;

  const AUTO_SLIDE_DELAY = 5000;
  const SWIPE_THRESHOLD = 40;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let currentIndex = 0;
  let autoSlideId = null;

  const goToSlide = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      dot.classList.toggle('bg-white', isActive);
      dot.classList.toggle('bg-white/40', !isActive);
    });
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const stopAutoSlide = () => {
    if (autoSlideId) {
      window.clearInterval(autoSlideId);
      autoSlideId = null;
    }
  };

  const startAutoSlide = () => {
    if (prefersReducedMotion) return;
    stopAutoSlide();
    autoSlideId = window.setInterval(nextSlide, AUTO_SLIDE_DELAY);
  };

  nextBtn.addEventListener('click', () => {
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    startAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoSlide();
    });
  });

  // Pause on hover (mouse) and focus (keyboard), resume on leave/blur.
  banner.addEventListener('mouseenter', stopAutoSlide);
  banner.addEventListener('mouseleave', startAutoSlide);
  banner.addEventListener('focusin', stopAutoSlide);
  banner.addEventListener('focusout', startAutoSlide);

  // Swipe support (touch devices).
  let touchStartX = 0;

  track.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
    stopAutoSlide();
  }, { passive: true });

  track.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX;

    if (delta > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (delta < -SWIPE_THRESHOLD) {
      nextSlide();
    }
    startAutoSlide();
  }, { passive: true });

  goToSlide(0);
  startAutoSlide();
});