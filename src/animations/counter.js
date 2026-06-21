export function initCounters() {
  function animateCounters() {
    document.querySelectorAll('.counter').forEach(el => {
      const target = +el.dataset.target;
      const duration = 1800;
      const step = target / duration * 16;
      let cur = 0;
      function tick() {
        cur = Math.min(cur + step, target);
        el.textContent = cur >= 1000 ? Math.floor(cur).toLocaleString('en-IN') : Math.floor(cur);
        if(cur < target) requestAnimationFrame(tick);
      }
      tick();
    });
  }

  const impactSection = document.querySelector('.impact-section');
  if (impactSection) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) {
          animateCounters();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(impactSection);
  }
}
