/**
 * Dark/light mode: click handling + toggle button state.
 *
 * The *initial* theme class on <html> is set separately, by a tiny
 * inline script in <head> (before first paint) — see the anti-flash
 * snippet at the top of every page's <head>. This file only has to
 * run after that: it wires up the toggle button and keeps its icon,
 * label, and aria state in sync with the current theme.
 */
(function () {
  var KEY = 'bmb-theme';
  var root = document.documentElement;

  function isDark() {
    return root.classList.contains('dark');
  }

  function syncButtons() {
    var dark = isDark();
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-label', dark ? 'Gunakan mode terang' : 'Gunakan mode gelap');
      button.setAttribute('title', dark ? 'Mode terang' : 'Mode gelap');
      button.setAttribute('aria-pressed', dark ? 'true' : 'false');

      var icon = button.querySelector('[data-theme-icon]');
      if (icon) icon.textContent = dark ? 'light_mode' : 'dark_mode';
    });
  }

  function setTheme(dark) {
    root.classList.toggle('dark', dark);
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) — theme still
         works for this page load, it just won't persist. */
    }
    syncButtons();
  }

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-theme-toggle]');
    if (!button) return;
    setTheme(!isDark());
  });

  // If the visitor has never made an explicit choice on this device,
  // follow the OS-level theme live (e.g. system switches to dark at
  // sunset). Once they use the toggle, their explicit choice wins.
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (event) {
    var saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch (e) {}
    if (saved === 'dark' || saved === 'light') return; // explicit choice wins
    setTheme(event.matches);
  };
  if (media.addEventListener) media.addEventListener('change', onSystemChange);
  else if (media.addListener) media.addListener(onSystemChange); // older Safari

  document.addEventListener('DOMContentLoaded', syncButtons);
})();
