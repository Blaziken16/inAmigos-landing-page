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
              <a href="https://www.instagram.com/inamigos" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/InAmigos/" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://x.com/InamigosF" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="Twitter / X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@InAmigosFoundation" target="_blank" rel="noopener noreferrer" class="footer-social" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
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
