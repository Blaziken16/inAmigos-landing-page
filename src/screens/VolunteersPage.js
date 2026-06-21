import { RoleCard } from '../components/RoleCard.js';
import { VolunteerForm } from '../components/VolunteerForm.js';

export function VolunteersPage() {
  return `
    <div class="page-section" id="page-volunteers">
      <section class="vol-hero section-sm">
        <div class="gradient-orb orb-1" style="opacity:0.25;"></div>
        <div class="gradient-orb orb-2" style="opacity:0.15;"></div>
        <div class="container-narrow" style="position:relative;z-index:2;">
          <div class="section-label">Join the Family</div>
          <h1 class="section-title">Be a <span style="color:var(--color-primary);font-family:var(--font-serif);font-style:italic;">Changemaker</span></h1>
          <p class="section-subtitle" style="margin-inline:auto;text-align:center;">Our volunteers are the lifeblood of InAmigos Foundation. Their dedication fuels every meal served, every tree planted, and every life changed.</p>
        </div>
      </section>

      <section class="section-sm" style="background:var(--color-surface-2);">
        <div class="container">
          <div class="vol-stats-row">
            <div class="vol-stat-card reveal"><div class="vol-stat-num">30,000+</div><div class="vol-stat-lbl">Interns Trained</div></div>
            <div class="vol-stat-card reveal reveal-delay-1"><div class="vol-stat-num">6</div><div class="vol-stat-lbl">Active Projects</div></div>
            <div class="vol-stat-card reveal reveal-delay-2"><div class="vol-stat-num">Pan India</div><div class="vol-stat-lbl">Volunteer Network</div></div>
            <div class="vol-stat-card reveal reveal-delay-3"><div class="vol-stat-num">4+</div><div class="vol-stat-lbl">Years of Impact</div></div>
          </div>

          <div style="text-align:center;margin-bottom:var(--space-8);">
            <div class="section-label">Open Roles</div>
            <h2 class="section-title">Find Your <span style="color:var(--color-primary)">Role</span></h2>
            <p class="section-subtitle" style="margin-inline:auto;">We welcome every skill set — whether you are a student, professional, or retiree. There is a place for you here.</p>
          </div>

          <div class="roles-grid">
            ${RoleCard({ icon: '✍️', name: 'Content Writer', desc: 'Craft compelling stories, blog posts, and social media content that spread awareness about our projects and campaigns.', skills: ['Writing', 'Research', 'Social Media'] })}
            ${RoleCard({ icon: '📊', name: 'Data & Research', desc: 'Analyze impact data, prepare reports, and help us make evidence-based decisions to optimize our social programs.', skills: ['Excel', 'Data Analysis', 'Reporting'], delayClass: 'reveal-delay-1' })}
            ${RoleCard({ icon: '📱', name: 'Digital Marketing', desc: 'Manage campaigns, grow our social media presence, and use digital tools to amplify our mission and reach more people.', skills: ['Instagram', 'Canva', 'SEO'], delayClass: 'reveal-delay-2' })}
            ${RoleCard({ icon: '🎓', name: 'Field Educator', desc: 'Teach at BachpanShala learning centres, conduct workshops, and mentor children and women in our community programs.', skills: ['Teaching', 'Mentoring', 'Community'] })}
            ${RoleCard({ icon: '🌱', name: 'Environment Volunteer', desc: 'Participate in tree plantation drives, cleanliness campaigns, and sustainable agriculture initiatives under Project Prakriti.', skills: ['Fieldwork', 'Environment', 'Community'], delayClass: 'reveal-delay-1' })}
            ${RoleCard({ icon: '💼', name: 'Finance & Operations', desc: 'Support our finance team, manage donor records, assist with CSR partnerships, and ensure transparent fund utilization.', skills: ['Finance', 'Accounting', 'Operations'], delayClass: 'reveal-delay-2' })}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div style="text-align:center;margin-bottom:var(--space-10);">
            <div class="section-label">Apply Now</div>
            <h2 class="section-title">Ready to <span style="color:var(--color-primary)">Make an Impact?</span></h2>
            <p class="section-subtitle" style="margin-inline:auto;">Fill in the form below and we'll be in touch within 48 hours to welcome you into the InAmigos family.</p>
          </div>
          ${VolunteerForm()}
        </div>
      </section>
    </div>
  `;
}
