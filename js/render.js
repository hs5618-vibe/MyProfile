// ─────────────────────────────────────────
// render.js — builds HTML from data.js
// ─────────────────────────────────────────

function renderTags(tags) {
  return `<div class="tags">${tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
}

function renderWorkCards() {
  const grid = document.getElementById('work-grid');
  grid.innerHTML = WORK.map(w => `
    <div class="work-card fade-in">
      <div class="work-card-left">
        <div class="year-badge">📅 ${w.year}</div>
        <h3 class="work-card-title">${w.title}</h3>
        <p class="work-card-company">${w.company}</p>
        <p class="work-card-desc">${w.description}</p>
        ${renderTags(w.tags)}
        <button class="detail-btn" onclick="openModal('work', '${w.id}')">View full case study →</button>
      </div>
      <div class="work-card-right">
        ${w.stats ? `
          <div class="impact-block">
            ${w.stats.map(s => `
              <div>
                <div class="impact-num">${s.num}</div>
                <div class="impact-label">${s.label}</div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="project-visual">${w.emoji || '🚀'}</div>
        `}
      </div>
    </div>
  `).join('');
}

function renderConsultingCards() {
  const grid = document.getElementById('consulting-grid');
  grid.innerHTML = CONSULTING.map(c => `
    <div class="consulting-card fade-in" onclick="openModal('consulting', '${c.id}')">
      <div class="consulting-label">${c.label}</div>
      <div class="consulting-title">${c.title}</div>
      <div class="consulting-desc">${c.description}</div>
      ${renderTags(c.tags)}
      <button class="expand-btn">Read more →</button>
    </div>
  `).join('');
}

function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-card fade-in">
      <div class="skill-card-title">${s.title}</div>
      <div class="tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderJourney() {
  const grid = document.getElementById('journey-grid');
  grid.innerHTML = JOURNEY.map(j => `
    <div class="journey-card fade-in" onclick="openModal('journey', '${j.role.replace(/[^a-z0-9]/gi, '-').toLowerCase()}')">
      <div class="journey-logo">${j.logo}</div>
      <div>
        <div class="journey-role">${j.role}</div>
        <div class="journey-org">${j.org}</div>
        <div class="journey-desc">${j.description}</div>
        ${renderTags(j.tags)}
      </div>
      <div class="journey-year">📅 ${j.year}</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────
// MODAL
// ─────────────────────────────────────────
function openModal(type, id) {
  let item;
  if (type === 'work') item = WORK.find(w => w.id === id);
  if (type === 'consulting') item = CONSULTING.find(c => c.id === id);
  if (type === 'journey') item = JOURNEY.find(j => j.role.replace(/[^a-z0-9]/gi, '-').toLowerCase() === id);

  if (!item) return;

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="year-badge" style="margin-bottom:1rem">📅 ${item.year || item.label || ''}</div>
    <h2 class="modal-title">${item.title || item.role}</h2>
    <p class="modal-company">${item.company || item.org || ''}</p>
    ${renderTags(item.tags)}

    ${item.stats ? `
      <div class="modal-stats">
        ${item.stats.map(s => `
          <div class="modal-stat">
            <div class="modal-stat-num">${s.num}</div>
            <div class="modal-stat-label">${s.label}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    <p class="modal-section-title">Overview</p>
    <div class="modal-body"><p>${item.detail.overview}</p></div>

    <p class="modal-section-title">Key Contributions</p>
    <div class="modal-body">
      <ul>${item.detail.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>
  `;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
