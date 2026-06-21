export function Lightbox() {
  return `
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightboxClose" aria-label="Close lightbox">✕</button>
      <img src="" alt="" id="lightboxImg"/>
      <div class="lightbox-caption" id="lightboxCaption"></div>
    </div>
  `;
}
