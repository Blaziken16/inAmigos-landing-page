export function MobileMenu() {
  return `
    <div class="mobile-menu" id="mobileMenu">
      <a href="#" data-route="home" class="mobile-link">Home</a>
      <a href="#" data-route="about" class="mobile-link">About Us</a>
      <a href="#" data-route="gallery" class="mobile-link">Gallery</a>
      <a href="#" data-route="volunteers" class="mobile-link">Volunteers</a>
      <button class="mobile-cta" data-route="volunteers">Join the Movement ✦</button>
    </div>
  `;
}
