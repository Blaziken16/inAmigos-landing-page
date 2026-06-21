export function GalleryItem({ category, src, alt, width, height, title, desc }) {
  return `
    <div class="gallery-item reveal" data-category="${category}">
      <img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy"/>
      <div class="gallery-item-info">
        <div class="gallery-item-title">${title}</div>
        <div class="gallery-item-desc">${desc}</div>
      </div>
    </div>
  `;
}
