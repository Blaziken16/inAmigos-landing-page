export function initMisc() {
  // Theme Toggle
  const btn = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', d);
  
  function updateIcon() {
    if(!btn) return;
    btn.innerHTML = d === 'dark' 
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>' 
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  updateIcon();
  if(btn) {
    btn.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', d);
      updateIcon();
    });
  }

  // Navbar scroll
  const nav = document.getElementById('navbar');
  if(nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Parallax JS Logic
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length > 0) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          parallaxEls.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax') || 0);
            el.style.transform = `translateY(${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Form submit
  const form = document.getElementById('volunteerForm');
  const success = document.getElementById('formSuccess');
  if(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.style.display = 'none';
      if(success) success.style.display = 'block';
    });
  }
}
