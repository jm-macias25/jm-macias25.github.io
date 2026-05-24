/* ─── MOBILE NAV ────────────────────────────────────────────────── */
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when any nav link is clicked
links?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});


/* ─── PROJECT RENDERER ──────────────────────────────────────────── */
/**
 * Reads PROJECTS_REGISTRY (defined in projects-registry.js) and
 * injects project cards into #projects-grid.
 *
 * To add a project: edit projects-registry.js only.
 * This file never needs to change for new projects.
 */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // Guard: registry missing or empty
  if (typeof PROJECTS_REGISTRY === 'undefined' || PROJECTS_REGISTRY.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted)">No projects in the registry yet.</p>';
    return;
  }

  grid.innerHTML = PROJECTS_REGISTRY.map(project => {
    const { title, subtitle, description, tags, accent, reportUrl, githubUrl } = project;

    // Build action buttons — show "Coming Soon" badge when no URLs are set
    const reportBtn = reportUrl
      ? `<a href="${reportUrl}" class="btn btn--primary" target="_blank" rel="noopener">View Analysis →</a>`
      : '';

    const githubBtn = githubUrl
      ? `<a href="${githubUrl}" class="btn btn--ghost" target="_blank" rel="noopener">GitHub</a>`
      : '';

    const linksHtml = (reportBtn || githubBtn)
      ? `<div class="project-card__links">${reportBtn}${githubBtn}</div>`
      : `<div class="project-card__links"><span class="badge badge--soon">Coming Soon</span></div>`;

    // Tag pills
    const tagsHtml = tags
      .map(t => `<span class="tag">${t}</span>`)
      .join('');

    // Card border-top colour is driven by the project's accent colour
    return `
      <article class="project-card" style="border-top-color:${accent || 'var(--accent)'}">
        <div>
          <span class="project-card__subtitle">${subtitle}</span>
          <h3 class="project-card__title">${title}</h3>
        </div>
        <p class="project-card__description">${description}</p>
        <div class="project-card__tags">${tagsHtml}</div>
        ${linksHtml}
      </article>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', renderProjects);
