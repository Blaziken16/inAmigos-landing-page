export function HeroFloatCard({ bg, icon, label, value }) {
  return `
    <div class="hero-float-card glass">
      <div class="float-card-icon" style="background:${bg};">${icon}</div>
      <div class="float-card-text">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
      </div>
    </div>
  `;
}
