export function ValueCard({ icon, title, text, delayClass = '' }) {
  return `
    <div class="value-card reveal ${delayClass}">
      <div class="value-icon">${icon}</div>
      <div class="value-title">${title}</div>
      <p class="value-text">${text}</p>
    </div>
  `;
}
