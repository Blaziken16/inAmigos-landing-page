import { GalleryItem } from '../components/GalleryItem.js';
import { Lightbox } from '../components/Lightbox.js';

export function GalleryPage() {
  return `
    <div class="page-section" id="page-gallery">
      <section class="gallery-hero section-sm">
        <div class="gradient-orb orb-1" style="opacity:0.2;"></div>
        <div class="container-narrow">
          <div class="section-label">Visual Stories</div>
          <h1 class="section-title">Our Work, <span style="color:var(--color-primary);font-family:var(--font-serif);font-style:italic;">in Pictures</span></h1>
          <p class="section-subtitle" style="margin-inline:auto;text-align:center;">Every photograph tells the story of a life touched, a smile brought, and a community uplifted by InAmigos Foundation.</p>
        </div>
      </section>

      <section class="section-sm">
        <div class="container">
          <div class="gallery-tabs">
            <button class="gallery-tab active" data-filter="all">All Projects</button>
            <button class="gallery-tab" data-filter="seva">Seva</button>
            <button class="gallery-tab" data-filter="bachpan">Bachpanshala</button>
            <button class="gallery-tab" data-filter="udaan">Udaan</button>
            <button class="gallery-tab" data-filter="prakriti">Prakriti</button>
            <button class="gallery-tab" data-filter="jeev">Jeev</button>
            <button class="gallery-tab" data-filter="vikas">Vikas</button>
          </div>

          <div class="gallery-grid" id="galleryGrid">
            ${GalleryItem({ category: 'seva', src: 'https://picsum.photos/seed/food-distribution/600/400', alt: 'Volunteers distributing meals', width: 600, height: 400, title: 'Project Seva — Meal Distribution', desc: 'Volunteers serve warm meals to underprivileged families in Bilaspur' })}
            ${GalleryItem({ category: 'bachpan', src: 'https://picsum.photos/seed/children-learning/600/700', alt: 'Children learning', width: 600, height: 700, title: 'BachpanShala — Learning Centre', desc: 'Kids discover the joy of reading and digital skills' })}
            ${GalleryItem({ category: 'jeev', src: 'https://picsum.photos/seed/animal-care/600/450', alt: 'Volunteers caring for stray animals', width: 600, height: 450, title: 'Project Jeev — Animal Care', desc: 'Daily feeding and medical care for street animals' })}
            ${GalleryItem({ category: 'udaan', src: 'https://picsum.photos/seed/women-empowerment/600/500', alt: 'Women skill training session', width: 600, height: 500, title: 'Project Udaan — Women\'s Workshop', desc: 'Rural women learning financial literacy and vocational skills' })}
            ${GalleryItem({ category: 'prakriti', src: 'https://picsum.photos/seed/tree-plantation/600/400', alt: 'Tree plantation drive', width: 600, height: 400, title: 'Project Prakriti — Tree Plantation', desc: '20,000+ saplings planted across Chhattisgarh' })}
            ${GalleryItem({ category: 'vikas', src: 'https://picsum.photos/seed/skill-training/600/600', alt: 'Interns training session', width: 600, height: 600, title: 'Project Vikas — Intern Training', desc: 'Building future-ready professionals through structured internships' })}
            ${GalleryItem({ category: 'seva', src: 'https://picsum.photos/seed/clothing-distribution/600/420', alt: 'Clothing distribution drive', width: 600, height: 420, title: 'Project Seva — Clothing Drive', desc: 'Warm clothing distributed to families in need during winter' })}
            ${GalleryItem({ category: 'bachpan', src: 'https://picsum.photos/seed/digital-literacy/600/500', alt: 'Digital literacy class', width: 600, height: 500, title: 'BachpanShala — Digital Class', desc: 'First-time computer access for underprivileged children' })}
            ${GalleryItem({ category: 'udaan', src: 'https://picsum.photos/seed/women-community/600/480', alt: 'Women\'s self-help group', width: 600, height: 480, title: 'Project Udaan — Self-Help Groups', desc: 'Rural women collaborating for financial independence' })}
          </div>
        </div>
      </section>
      ${Lightbox()}
    </div>
  `;
}
