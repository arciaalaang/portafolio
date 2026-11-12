// Marca en el menú la sección que estás viendo
const links = document.querySelectorAll('.top nav a');
const sections = [...links].map((a) => document.querySelector(a.getAttribute('href')));

const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    links.forEach((a) => {
      const active = a.getAttribute('href') === '#' + entry.target.id;
      a.style.color = active ? 'var(--ink)' : '';
      a.style.fontWeight = active ? '500' : '';
    });
  });
}, { rootMargin: '-45% 0px -50% 0px' });

sections.forEach((s) => s && spy.observe(s));
