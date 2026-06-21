export function ProjectCard({ color, emoji, name, desc, stat }) {
  return `
    <div class="project-card reveal" data-color="${color}">
      <div class="project-emoji">${emoji}</div>
      <div class="project-name">${name}</div>
      <p class="project-desc">${desc}</p>
      <span class="project-stat">${stat}</span>
    </div>
  `;
}
