export function Navbar() {
  return `
    <nav class="navbar" id="navbar">
      <a href="#" class="nav-logo" data-route="home">
        <svg class="nav-logo-icon" viewBox="0 0 36 36" fill="none" aria-label="InAmigos Foundation logo">
          <circle cx="18" cy="18" r="18" fill="rgba(240,96,138,0.12)"/>
          <path d="M18 9 C14 9 10 13 10 17 C10 21 18 27 18 27 C18 27 26 21 26 17 C26 13 22 9 18 9Z" fill="none" stroke="#f2608a" stroke-width="1.8" stroke-linejoin="round"/>
          <path d="M14 17L18 13L22 17L18 23L14 17Z" fill="#f2608a" opacity="0.6"/>
        </svg>
        <span class="nav-logo-text">In<span>Amigos</span> Foundation</span>
      </a>

      <div class="nav-links" id="navLinks">
        <a href="#" data-route="home" class="active" id="nav-home">Home</a>
        <a href="#" data-route="about" id="nav-about">About Us</a>
        <a href="#" data-route="gallery" id="nav-gallery">Gallery</a>
        <a href="#" data-route="volunteers" id="nav-volunteers">Volunteers</a>
      </div>

      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a href="#" class="nav-cta" data-route="volunteers">Join Us ✦</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}
