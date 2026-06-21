export function initGallery() {
  // Tabs
  document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const filter = this.dataset.filter;
      document.querySelectorAll('.gallery-item').forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? 'block' : 'none';
      });
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCap = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');
  
  if(!lb) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const info = item.querySelector('.gallery-item-info');
      lbImg.src = img.src; 
      lbImg.alt = img.alt;
      lbCap.textContent = info ? info.querySelector('.gallery-item-title').textContent : '';
      lb.classList.add('open'); 
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLb() {
    lb.classList.remove('open'); 
    document.body.style.overflow = '';
  }

  if(lbClose) lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', e => { if(e.target === lb) closeLb(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLb(); });
}
