import './style.css'
import { marked } from 'marked'

// --- Skills Data ---
const skills = [
  "Product Strategy", "Discovery", "Backlog Mgmt",
  "Scrum / Kanban", "OKRs & KPIs", "SQL", "Node.js",
  "ERP (Totvs/NetSuite)", "AWS", "Jira / Confluence",
  "Data Analysis", "AI Integration"
];

function renderSkills() {
  const container = document.querySelector('.skills-container');
  container.innerHTML = skills.map(skill =>
    `<span class="skill-tag">${skill}</span>`
  ).join('');
}

// --- Project Loading ---
const modules = import.meta.glob('./projects/*.md', { query: '?raw', import: 'default', eager: true });

function parseProject(filename, content) {
  // Simple frontmatter parser
  // Expects format:
  // ---
  // title: My Project
  // summary: Short description
  // tags: Tag1, Tag2
  // ---
  // Markdown content...

  const parts = content.split('---');
  let meta = {};
  let body = content;

  if (parts.length >= 3) {
    const metaRaw = parts[1];
    body = parts.slice(2).join('---');

    metaRaw.split('\n').forEach(line => {
      const splitIndex = line.indexOf(':');
      if (splitIndex > 0) {
        const key = line.slice(0, splitIndex).trim();
        const value = line.slice(splitIndex + 1).trim();
        if (key === 'tags') {
          meta[key] = value.split(',').map(t => t.trim());
        } else {
          meta[key] = value;
        }
      }
    });
  }

  // Fallback if no meta
  if (!meta.title) meta.title = filename.split('/').pop().replace('.md', '').replace(/-/g, ' ');

  return { meta, body: marked.parse(body) };
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  const projects = [];

  for (const path in modules) {
    const content = modules[path];
    projects.push(parseProject(path, content));
  }

  container.innerHTML = projects.map((p, index) => `
    <article class="project-card" onclick="window.openModal(${index})">
      <h3 class="project-title">${p.meta.title}</h3>
      <p class="project-summary">${p.meta.summary || 'Clique para ver mais detalhes.'}</p>
      <div class="project-tags">
        ${p.meta.tags ? p.meta.tags.map(t => `<span class="project-tag">${t}</span>`).join('') : ''}
      </div>
      <a href="#" class="read-more">Ver Detalhes →</a>
    </article>
  `).join('');

  // Store projects globally for modal access
  window.projectsData = projects;
}

// --- Modal Logic ---
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.getElementById('close-modal');

window.openModal = (index) => {
  const p = window.projectsData[index];
  modalTitle.textContent = p.meta.title;
  modalBody.innerHTML = p.body;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // prevent background scrolling
};

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// --- Mobile Menu ---
const menuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target) && sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
    }
  }
});

// --- Init ---
renderSkills();
renderProjects();
