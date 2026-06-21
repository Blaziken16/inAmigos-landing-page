import { ValueCard } from '../components/ValueCard.js';

export function AboutPage() {
  return `
    <div class="page-section" id="page-about">
      <section class="about-hero section-sm">
        <div class="gradient-orb orb-1" style="opacity:0.25;"></div>
        <div class="container">
          <div class="about-hero-grid">
            <div>
              <div class="about-hero-badge">About InAmigos Foundation</div>
              <h1 class="about-big-title">
                We believe in the<br/>
                power of <span style="color:var(--color-primary);font-family:var(--font-serif);font-style:italic;">collective action.</span>
              </h1>
              <p class="about-body">InAmigos Foundation was founded on <strong>September 23, 2020</strong>, by Mr. Govind Shukla (Founder &amp; CEO). A Section 8 registered non-profit organization based in Chhattisgarh, we operate across India addressing critical societal issues through a growing network of dedicated professionals and volunteers.</p>
              <p class="about-body">Our mission is rooted in compassion — from feeding the hungry and educating children, to empowering women and protecting the environment. We believe every individual has the power to make a difference, and together, we multiply that impact.</p>
              <div class="about-certs">
                <span class="cert-badge">Section 8 Registered</span>
                <span class="cert-badge">80G Certified</span>
                <span class="cert-badge">12A Certified</span>
                <span class="cert-badge">CSR-1 Registered</span>
                <span class="cert-badge">NITI Aayog</span>
                <span class="cert-badge">ISO 9001:2015</span>
              </div>
            </div>
            <div>
              <div class="about-visual-card glass">
                <img src="https://picsum.photos/seed/inamigos-community/560/700" alt="InAmigos Foundation volunteers in action" width="560" height="700" loading="lazy" style="opacity:0.85;" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-sm" style="background:var(--color-surface-2);">
        <div class="container">
          <div style="text-align:center;margin-bottom:var(--space-10);">
            <div class="section-label">Our Values</div>
            <h2 class="section-title">What Guides <span style="color:var(--color-primary)">Everything We Do</span></h2>
          </div>
          <div class="values-grid">
            ${ValueCard({ icon: '🤝', title: 'Compassion', text: 'Every decision is guided by empathy for those we serve — whether human, animal, or the planet itself.' })}
            ${ValueCard({ icon: '🔍', title: 'Transparency', text: 'We maintain complete accountability. Our certifications and open reporting ensure every rupee is used with integrity.', delayClass: 'reveal-delay-1' })}
            ${ValueCard({ icon: '🌍', title: 'Sustainability', text: 'We design interventions that outlast our presence — building skills, planting trees, and changing mindsets permanently.', delayClass: 'reveal-delay-2' })}
            ${ValueCard({ icon: '✊', title: 'Empowerment', text: 'We don\'t just give aid — we build capacity. From interns to rural women, we unlock the potential within every individual.', delayClass: 'reveal-delay-3' })}
          </div>

          <div class="founder-card reveal">
            <div class="founder-avatar">🌟</div>
            <div>
              <div class="founder-name">Mr. Govind Shukla</div>
              <div class="founder-title">Founder &amp; CEO, InAmigos Foundation</div>
              <p class="founder-bio">A visionary social entrepreneur who established InAmigos Foundation in 2020 with the belief that compassion, when organized, can transform societies. Under his leadership, InAmigos has grown into a nationally recognized NGO with certified compliance, six flagship projects, and a community of 30,000+ trained volunteers and interns across India.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div style="text-align:center;margin-bottom:var(--space-10);">
            <div class="section-label">Social Impact</div>
            <h2 class="section-title">Why Our Work <span style="color:var(--color-primary)">Matters</span></h2>
            <p class="section-subtitle" style="margin-inline:auto;">India's challenges require localized, people-first solutions. InAmigos bridges the gap between need and action.</p>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-6);">
            <div class="glass-sm reveal" style="padding:var(--space-6);">
              <div style="font-size:1.6rem;margin-bottom:var(--space-3);">🍽️ Food Security</div>
              <p style="font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.7;">With 50,000+ meals distributed, Project SEVA directly combats hunger and provides clothing to families below the poverty line — restoring dignity one meal at a time.</p>
            </div>
            <div class="glass-sm reveal reveal-delay-1" style="padding:var(--space-6);">
              <div style="font-size:1.6rem;margin-bottom:var(--space-3);">📚 Digital Literacy</div>
              <p style="font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.7;">BachpanShala opens digital doors for children who never had access — equipping them with skills that bridge the technology divide and create pathways out of poverty.</p>
            </div>
            <div class="glass-sm reveal" style="padding:var(--space-6);">
              <div style="font-size:1.6rem;margin-bottom:var(--space-3);">💚 Animal Welfare</div>
              <p style="font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.7;">Project JEEV extends compassion to 50+ stray animals daily. A society's kindness is measured by how it treats the most vulnerable — including its animals.</p>
            </div>
            <div class="glass-sm reveal reveal-delay-1" style="padding:var(--space-6);">
              <div style="font-size:1.6rem;margin-bottom:var(--space-3);">🌍 Climate Action</div>
              <p style="font-size:var(--text-sm);color:var(--color-text-muted);line-height:1.7;">With 20,000+ saplings planted and LIFE initiative campaigns, Project PRAKRITI fights deforestation while inspiring sustainable living choices in communities across India.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}
