// Menu no telemóvel
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (nav && toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Botões sem link ainda (ex.: Uber Eats Cascais com href="#uber-cascais").
// Mostram o texto de data-soon e não fazem nada até o link real ser colado no HTML.
document.querySelectorAll('a[data-soon]').forEach((btn) => {
  const href = btn.getAttribute('href');
  if (href.startsWith('#uber-') || href.startsWith('#soon-')) {
    btn.textContent = btn.dataset.soon;
    btn.setAttribute('aria-disabled', 'true');
    btn.removeAttribute('target');
    btn.addEventListener('click', (e) => e.preventDefault());
  }
});
