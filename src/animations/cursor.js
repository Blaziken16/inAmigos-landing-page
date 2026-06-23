export function initCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0; // Mouse coords
  let dx = 0, dy = 0; // Dot coords (fast follower)
  let rx = 0, ry = 0; // Ring coords (slow follower)
  
  let isMagnetic = false;
  let magneticX = 0, magneticY = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function animCursor() {
    if (isMagnetic) {
      // Pull dot and ring towards the magnetic center
      dx += (magneticX - dx) * 0.2;
      dy += (magneticY - dy) * 0.2;
      rx += (magneticX - rx) * 0.15;
      ry += (magneticY - ry) * 0.15;
    } else {
      // Normal smooth follow
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
    }

    dot.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px)`;
    ring.style.transform = `translate(-50%, -50%) translate(${rx}px, ${ry}px)`;

    requestAnimationFrame(animCursor);
  }
  animCursor();

  // Hover states
  document.querySelectorAll('a, button, [role="button"], .project-card, .cta-card, .gallery-item, .role-card, .vol-stat-card, .value-card, .about-visual-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // Magnetic Buttons (Primary CTA, etc.)
  document.querySelectorAll('.nav-cta, .btn-primary').forEach(el => {
    el.addEventListener('mouseenter', (e) => {
      isMagnetic = true;
      document.body.classList.add('cursor-magnetic');
      // Calculate magnetic center
      const rect = el.getBoundingClientRect();
      magneticX = rect.left + rect.width / 2;
      magneticY = rect.top + rect.height / 2;
    });
    
    el.addEventListener('mousemove', (e) => {
      if(!isMagnetic) return;
      const rect = el.getBoundingClientRect();
      magneticX = rect.left + rect.width / 2 + (e.clientX - (rect.left + rect.width / 2)) * 0.3;
      magneticY = rect.top + rect.height / 2 + (e.clientY - (rect.top + rect.height / 2)) * 0.3;
      
      // Pull the button slightly
      el.style.transform = `translate(${(e.clientX - (rect.left + rect.width / 2)) * 0.2}px, ${(e.clientY - (rect.top + rect.height / 2)) * 0.2}px)`;
    });

    el.addEventListener('mouseleave', () => {
      isMagnetic = false;
      document.body.classList.remove('cursor-magnetic');
      el.style.transform = ''; // Reset button position
    });
  });
}
