export function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if(!dot || !ring) return;
  
  let mx = 0, my = 0, rx = 0, ry = 0;
  
  document.addEventListener('mousemove', e => {
    mx = e.clientX; 
    my = e.clientY; 
    dot.style.left = mx + 'px'; 
    dot.style.top = my + 'px';
  });
  
  function animRing() {
    rx += (mx - rx) * 0.12; 
    ry += (my - ry) * 0.12; 
    ring.style.left = rx + 'px'; 
    ring.style.top = ry + 'px'; 
    requestAnimationFrame(animRing);
  }
  animRing();
  
  document.querySelectorAll('a, button, [role="button"], .project-card, .cta-card, .gallery-item, .role-card, .vol-stat-card, .value-card, .about-visual-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
