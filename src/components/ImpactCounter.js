export function ImpactCounter({ target, unit, label, delayClass = '' }) {
  return `
    <div class="impact-item reveal ${delayClass}">
      <div class="impact-number"><span class="counter" data-target="${target}">0</span><span class="impact-unit">${unit}</span></div>
      <div class="impact-label">${label}</div>
    </div>
  `;
}
