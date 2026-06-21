export function RoleCard({ icon, name, desc, skills, delayClass = '' }) {
  const skillTags = skills.map(s => `<span class="role-skill">${s}</span>`).join('');
  return `
    <div class="role-card reveal ${delayClass}">
      <div class="role-icon">${icon}</div>
      <div class="role-name">${name}</div>
      <p class="role-desc">${desc}</p>
      <div class="role-skills">
        ${skillTags}
      </div>
    </div>
  `;
}
