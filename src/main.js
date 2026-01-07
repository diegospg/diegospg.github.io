import './style.css'
import { marked } from 'marked'
import mermaid from 'mermaid'
import { TagCloud } from './tagCloud.js'

// Initialize Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

// Profile Data
const skills = [
  "Product Strategy", "Discovery", "Backlog Mgmt",
  "Scrum / Kanban", "OKRs & KPIs", "SQL", "Node.js",
  "ERP (Totvs/NetSuite)", "AWS", "Jira / Confluence",
  "Data Analysis", "AI Integration",
  "Software Development", "Golang",
  "Databases", "Leadership"
];

function renderSkills() {
  const container = document.getElementById('skills-list');
  if (container) {
    // Initialize interactive tag cloud
    new TagCloud(container, skills, {
      radius: 140,
      radius: 140,
      maxSpeed: 0.2
    });
  }
}

// --- Project Loading ---
const projects = import.meta.glob('./projects/*.md', { query: '?raw', import: 'default' });

async function loadProjects() {
  const projectsContainer = document.getElementById('projects-grid');
  const projectData = [];

  for (const path in projects) {
    const rawContent = await projects[path]();
    // Parse Frontmatter manually (simple version)
    const frontmatterRegex = /---\n([\s\S]*?)\n---/;
    const match = rawContent.match(frontmatterRegex);

    if (match) {
      const frontmatter = match[1];
      const content = rawContent.replace(frontmatterRegex, '');

      const metadata = {};
      frontmatter.split('\n').forEach(line => {
        const [key, ...value] = line.split(':');
        if (key && value) {
          metadata[key.trim()] = value.join(':').trim();
        }
      });

      projectData.push({
        ...metadata,
        content: content.trim(),
        path
      });
    }
  }

  // Render Projects
  projectData.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">
        ${project.tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('')}
      </div>
    `;

    card.addEventListener('click', () => openModal(project));
    projectsContainer.appendChild(card);
  });
}

// --- Modal Logic ---
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-modal');

async function openModal(project) {
  modalTitle.textContent = project.title;
  modalBody.innerHTML = marked.parse(project.content);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Render Mermaid diagrams if any
  try {
    const mermaidBlocks = modalBody.querySelectorAll('.language-mermaid');
    // marked renders ```mermaid as <pre><code class="language-mermaid">
    // We need to transform this for mermaid.run

    if (mermaidBlocks.length > 0) {
      // Convert to simplified div structure for mermaid
      mermaidBlocks.forEach((block, index) => {
        const pre = block.parentElement; // <pre>
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = block.textContent;
        div.id = `mermaid-${index}`;
        pre.replaceWith(div);
      });

      await mermaid.run({
        nodes: document.querySelectorAll('.mermaid')
      });
    }
  } catch (err) {
    console.error('Mermaid render error:', err);
  }
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
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
loadProjects();
