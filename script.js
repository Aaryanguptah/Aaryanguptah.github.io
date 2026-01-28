// Small script: toggle nav and set current year
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
});
