export function Footer() {
  return `
    <footer id="siteFooter">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#" class="nav-logo" data-route="home" style="margin-bottom:var(--space-3);">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="rgba(240,96,138,0.15)"/>
                <path d="M18 9 C14 9 10 13 10 17 C10 21 18 27 18 27 C18 27 26 21 26 17 C26 13 22 9 18 9Z" fill="none" stroke="#f2608a" stroke-width="1.8" stroke-linejoin="round"/>
                <path d="M14 17L18 13L22 17L18 23L14 17Z" fill="#f2608a" opacity="0.6"/>
              </svg>
              <span class="nav-logo-text" style="color:#fff;font-size:var(--text-sm);">In<span>Amigos</span> Foundation</span>
            </a>
            <p class="footer-tagline">Empowering India through education, compassion, and collective action since 2020.</p>
            <div class="footer-socials">
              <a href="https://www.instagram.com/inamigos" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/InAmigos/" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Facebook">FB</a>
              <a href="https://x.com/InamigosF" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Twitter / X">𝕏</a>
              <a href="https://www.youtube.com/@InAmigosFoundation" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Navigate</div>
            <a href="#" data-route="home">Home</a>
            <a href="#" data-route="about">About Us</a>
            <a href="#" data-route="gallery">Gallery</a>
            <a href="#" data-route="volunteers">Volunteers</a>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Our Projects</div>
            <a href="#" data-route="home">Project Seva</a>
            <a href="#" data-route="home">Project Bachpanshala</a>
            <a href="#" data-route="home">Project Jeev</a>
            <a href="#" data-route="home">Project Udaan</a>
            <a href="#" data-route="home">Project Prakriti</a>
            <a href="#" data-route="home">Project Vikas</a>
          </div>

          <div class="footer-col">
            <div class="footer-col-title">Contact</div>
            <a href="mailto:inamigosfoundation@gmail.com">inamigosfoundation@gmail.com</a>
            <a href="https://inamigosfoundation.org.in" target="_blank" rel="noopener noreferrer">inamigosfoundation.org.in</a>
            <a href="#">Ward No. 5, Gram Post,<br/>Bilaspur, Chhattisgarh, India</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">© 2024 InAmigos Foundation. All rights reserved. Made with 💛 for a better India.</p>
          <div class="footer-certs">
            <span class="footer-cert">Section 8</span>
            <span class="footer-cert">80G</span>
            <span class="footer-cert">CSR-1</span>
            <span class="footer-cert">ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
