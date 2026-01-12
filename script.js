// Small script: toggle nav and set current year
document.addEventListener('DOMContentLoaded',()=>{
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  toggle && toggle.addEventListener('click', ()=>{
    if(!nav) return;
    const shown = nav.style.display === 'flex';
    nav.style.display = shown ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
  });
});
