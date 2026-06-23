import { HeroFloatCard } from '../components/HeroFloatCard.js';
import { ProjectCard } from '../components/ProjectCard.js';
import { ImpactCounter } from '../components/ImpactCounter.js';

export function HomePage() {
  return `
    <div class="page-section active" id="page-home">
      <section class="hero" id="hero">
        <div class="container hero-content">
          <div class="hero-badge load-fade">
            <div class="hero-badge-dot"></div>
            Since 2020 · Chhattisgarh, India
          </div>
          <h1 class="hero-headline load-fade load-delay-1">
            Together<br/>
            We <span class="serif-word">Rise,</span><br/>
            Together We<br/>Care.
          </h1>
          <p class="hero-body load-fade load-delay-2">
            InAmigos Foundation is a Section 8 non-profit dedicated to creating lasting social impact through education, women's empowerment, animal welfare, environmental conservation, and skill development across India.
          </p>
          <div class="hero-actions load-fade load-delay-2">
            <a href="#" class="btn btn-primary" data-route="volunteers">Join Our Mission →</a>
            <a href="#projects" class="btn btn-glass">Learn More</a>
          </div>
          
          <div class="hero-stats load-fade load-delay-3">
            <div><div class="hero-stat-value">50K+</div><div class="hero-stat-label">Meals Distributed</div></div>
            <div><div class="hero-stat-value">30K+</div><div class="hero-stat-label">Interns Trained</div></div>
            <div><div class="hero-stat-value">900+</div><div class="hero-stat-label">Women Empowered</div></div>
            <div><div class="hero-stat-value">20K+</div><div class="hero-stat-label">Trees Planted</div></div>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="hero-cards-float">
            <div class="float-item float-item-1" data-parallax="0.08">
              ${HeroFloatCard({ bg: 'rgba(255,127,162,0.15)', icon: '🍽️', label: 'Project Seva', value: '50,000+ Meals' })}
            </div>
            <div class="float-item float-item-2" data-parallax="0.15">
              ${HeroFloatCard({ bg: 'rgba(162,210,255,0.15)', icon: '🌱', label: 'Project Prakriti', value: '20,000+ Trees' })}
            </div>
            <div class="float-item float-item-3" data-parallax="0.05">
              ${HeroFloatCard({ bg: 'rgba(203,170,203,0.15)', icon: '👩‍💼', label: 'Project Udaan', value: '900+ Women' })}
            </div>
          </div>
        </div>
      </section>

      <section class="projects-strip section">
        <div class="container">
          <div style="margin-bottom:var(--space-10);">
            <div class="section-label reveal">Our Ongoing Projects</div>
            <h2 class="section-title reveal">Six Pillars of <span style="color:var(--color-primary)">Impact</span></h2>
            <p class="section-subtitle reveal">Every initiative targets a root cause — together they form a holistic vision for a compassionate, empowered India.</p>
          </div>
          <div class="projects-grid">
            ${ProjectCard({ color: 'rose', emoji: '🍽️', name: 'Project SEVA', desc: 'Distributing meals, clothing, and essential supplies to underprivileged communities, ensuring no one sleeps hungry or cold.', stat: '🏅 50,000+ Meals Served' })}
            ${ProjectCard({ color: 'sky', emoji: '📚', name: 'Project BACHPANSHALA', desc: 'Child-friendly learning centers providing quality education, digital literacy, life skills, nutrition, and emotional support for underprivileged children.', stat: '📖 Active Learning Centers' })}
            ${ProjectCard({ color: 'mint', emoji: '🐾', name: 'Project JEEV', desc: 'Compassionate care for stray animals through daily feeding programs, shelters, medical aid, and a dedicated volunteer network.', stat: '🐕 50+ Animals Fed Daily' })}
            ${ProjectCard({ color: 'lavender', emoji: '👩‍💼', name: 'Project UDAAN', desc: 'Empowering women through skill development, self-help groups, financial independence, and menstrual hygiene awareness in rural India.', stat: '🌟 900+ Women Empowered' })}
            ${ProjectCard({ color: 'gold', emoji: '🌳', name: 'Project PRAKRITI', desc: 'Environmental conservation through tree plantation drives, eco-friendly agriculture promotion, and sustainable living awareness campaigns.', stat: '🌿 20,000+ Saplings Planted' })}
            ${ProjectCard({ color: 'peach', emoji: '💼', name: 'Project VIKAS', desc: 'Building India\'s future workforce with internships in data, finance, research, content, digital marketing, and social work fields.', stat: '🎓 30,000+ Interns Trained' })}
          </div>
        </div>
      </section>

      <section class="impact-section">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="container">
          <div style="text-align:center;margin-bottom:var(--space-10);">
            <p class="section-label" style="color:rgba(255,255,255,0.5);">Our Impact in Numbers</p>
            <h2 style="font-family:var(--font-display);font-weight:900;font-size:var(--text-xl);color:#fff;">Every Number is a <span style="color:var(--brand-rose);">Life Changed</span></h2>
          </div>
          <div class="impact-grid">
            ${ImpactCounter({ target: 50000, unit: '+', label: 'Meals & Clothing Distributed' })}
            ${ImpactCounter({ target: 30000, unit: '+', label: 'Interns Trained via Project Vikas', delayClass: 'reveal-delay-1' })}
            ${ImpactCounter({ target: 900, unit: '+', label: 'Women Empowered', delayClass: 'reveal-delay-2' })}
            ${ImpactCounter({ target: 20000, unit: '+', label: 'Trees Planted', delayClass: 'reveal-delay-3' })}
            ${ImpactCounter({ target: 50, unit: '+', label: 'Animals Fed Daily' })}
            ${ImpactCounter({ target: 6, unit: '', label: 'Active Projects Nationwide', delayClass: 'reveal-delay-1' })}
          </div>
        </div>
      </section>

      <section class="cta-section section cinematic-cta">
        <div class="container">
          <div class="cta-inner reveal-scale">
            <!-- Glass background elements for CTA -->
            <div class="glass-sphere" style="width: 250px; height: 250px; top: -50px; right: -50px; background: rgba(255,127,162,0.2); z-index: 0; filter: blur(4px);"></div>
            <div class="glass-sphere" style="width: 150px; height: 150px; bottom: -30px; left: -30px; background: rgba(162,210,255,0.2); z-index: 0; filter: blur(2px);"></div>
            
            <div style="position: relative; z-index: 1;">
              <div class="section-label">Be the Change</div>
              <h2 class="cta-title">Leave a Legacy of <span class="serif-word" style="color:var(--brand-rose);">Compassion.</span></h2>
              <p class="cta-body" style="color: var(--color-text-muted); font-size: var(--text-lg); max-width: 50ch; margin-inline: auto;">Whether you donate, volunteer your time, or simply spread the word — every action matters. Together, we build a more compassionate India.</p>
              
              <div class="cta-cards">
                <div class="cta-card glass-card reveal-fade reveal-delay-1">
                  <div class="cta-card-icon">💛</div>
                  <div class="cta-card-title">Donate</div>
                  <p class="cta-card-desc">Your contribution directly funds meals, education, and animal care. Tax exemption under 80G.</p>
                  <a href="https://inamigosfoundation.org.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width:100%;justify-content:center;">Donate Now →</a>
                </div>
                <div class="cta-card glass-card reveal-fade reveal-delay-2">
                  <div class="cta-card-icon">🙌</div>
                  <div class="cta-card-title">Volunteer</div>
                  <p class="cta-card-desc">Join thousands of dedicated volunteers and contribute your skills where they matter most.</p>
                  <a href="#" class="btn btn-ghost" data-route="volunteers" style="width:100%;justify-content:center;">Apply Now →</a>
                </div>
                <div class="cta-card glass-card reveal-fade reveal-delay-3">
                  <div class="cta-card-icon">🤝</div>
                  <div class="cta-card-title">Partner With Us</div>
                  <p class="cta-card-desc">Corporate partnerships and CSR initiatives to scale our impact nationwide.</p>
                  <a href="mailto:contact@inamigos.org" class="btn btn-ghost" style="width:100%;justify-content:center;">Contact Us →</a>
                </div>
              </div>
              <p style="font-size:var(--text-sm);color:var(--color-text-faint);margin-top:var(--space-8);">80G & 12A Certified · CSR-1 Registered · NITI Aayog Registered · ISO 9001:2015 Certified</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
