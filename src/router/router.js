export function initRouter() {
  const links = document.querySelectorAll('[data-route]');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');

  function showPage(name) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    const pageEl = document.getElementById('page-' + name);
    if(pageEl) pageEl.classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navEl = document.getElementById('nav-' + name);
    if(navEl) navEl.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // close mobile menu if open
    if(hamburger && mobileMenu) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.dataset.route;
      showPage(route);
    });
  });

  // Mobile menu toggle
  if(hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
  }
}
