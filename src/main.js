import './style.css'
import { marked } from 'marked'
import mermaid from 'mermaid'

// Initialize Mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

// Profile Data
const skills = [
  "Product Strategy", "Discovery", "Backlog Management",
  "Scrum / Kanban", "OKRs & KPIs", "SQL", "Node.js",
  "ERP (Totvs/NetSuite)", "AWS", "Jira / Confluence",
  "Data Analysis", "AI Integration",
  "Software Development", "Golang",
  "Databases", "Leadership",
  "Advanced English"
];

function renderSkills() {
  const container = document.getElementById('skills-list');
  if (container) {
    // Render static list for CSS marquee
    const marqueeContent = document.createElement('div');
    marqueeContent.className = 'skills-marquee-content';

    // Duplicate list for seamless infinite scroll
    const allSkills = [...skills, ...skills];

    allSkills.forEach(skill => {
      const tag = document.createElement('div');
      tag.className = 'skill-item';
      tag.textContent = skill;
      marqueeContent.appendChild(tag);
    });

    container.innerHTML = '';
    container.appendChild(marqueeContent);
  }
}

const skillsCategories = [
  { category: "Product Management", items: "Scrum, Kanban, Discovery, Prototipação, RICE, MoSCoW, Roadmap" },
  { category: "Arquitetura & Backend", items: "Go (Golang), C# (.NET), Node.js, Microservices, Event-Driven" },
  { category: "APIs & Documentação", items: "REST APIs, Swagger, Redocly, Insomnia" },
  { category: "Cloud & Infra", items: "AWS (Lambda, SQS, ECS, RDS), Docker, mTLS, Serverless" },
  { category: "E-commerce & ERP", items: "VTEX, Totvs Protheus, SAP, NetSuite, Integrações Bancárias" },
  { category: "Dados & IA", items: "Google Antigravity, SQL Server, ETL, Generative AI (Claude API)" },
  { category: "Design & Tools", items: "Jira, Miro, Draw.io" },
  { category: "Idiomas", items: "Advanced English" }
];

function renderMainSkills() {
  const container = document.getElementById('skills-grid');
  if (container) {
    container.innerHTML = `
      <table class="skills-table">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Tecnologias e Metodologias</th>
          </tr>
        </thead>
        <tbody>
          ${skillsCategories.map(cat => `
            <tr>
              <td class="skill-category">${cat.category}</td>
              <td class="skill-items">${cat.items}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

function renderCoreSkills() {
  const container = document.getElementById('skills-grid');
  if (container) {
    const coreSkillsHTML = `
      <div class="core-skills-section">
        <h2 class="core-skills-title">Mentalidade e Competências de Produto (Core PM Skills)</h2>
        <p class="core-skills-intro">
          Enquanto a stack tecnológica resume meu ecossistema de ferramentas, abaixo detalho como aplico esses fundamentos para orquestrar produtos de alta complexidade:
        </p>

        <div class="core-skill-block">
          <h3 class="core-skill-subtitle"># Product Discovery & Strategy</h3>
          <ul class="core-skill-list">
            <li class="core-skill-item"><strong>Discovery Contínuo:</strong> Mapeamento de oportunidades e dores via entrevistas e análise de dados, garantindo um fluxo constante de aprendizado sobre o usuário.</li>
            <li class="core-skill-item"><strong>Validação de Hipóteses:</strong> Uso de Prototipação Funcional para validar fluxos lógicos e regras de negócio antes do desenvolvimento, mitigando riscos e desperdício de recursos.</li>
            <li class="core-skill-item"><strong>Frameworks:</strong> Aplicação estratégica de Jobs to be Done (JTBD), Benchmarking e Análise SWOT para posicionamento de produto.</li>
          </ul>
        </div>

        <div class="core-skill-block">
          <h3 class="core-skill-subtitle"># Priorização & Roadmap</h3>
          <ul class="core-skill-list">
            <li class="core-skill-item"><strong>Tomada de Decisão:</strong> Aplicação rigorosa de RICE e MoSCoW para garantir que o backlog reflita o maior ROI possível para o negócio.</li>
            <li class="core-skill-item"><strong>Roadmapping:</strong> Tradução da visão estratégica em planos de entrega definidos por janelas temporais claras e executáveis.</li>
            <li class="core-skill-item"><strong>Stakeholder Management:</strong> Atuação como "Technical Bridge", alinhando expectativas entre as áreas técnica e comercial em ambientes de alta complexidade.</li>
          </ul>
        </div>

        <div class="core-skill-block">
          <h3 class="core-skill-subtitle"># Métricas e Resultados (OKRs e KPIs)</h3>
          <ul class="core-skill-list">
            <li class="core-skill-item"><strong>Alinhamento Estratégico:</strong> Definição e acompanhamento de OKRs para garantir que o esforço do time esteja conectado aos objetivos macro da companhia.</li>
            <li class="core-skill-item"><strong>Performance Tracking:</strong> Gestão de KPIs financeiros (Take Rate, MDR, LTV) e de produto (Churn, Conversão) através de dashboards em Looker Studio e Power BI.</li>
            <li class="core-skill-item"><strong>Data-Driven:</strong> Tomada de decisão baseada em evidências, utilizando dados para identificar gargalos e oportunidades de crescimento.</li>
          </ul>
        </div>

        <div class="core-skill-block">
          <h3 class="core-skill-subtitle"># Agilidade & Delivery (Scrum e Kanban)</h3>
          <ul class="core-skill-list">
            <li class="core-skill-item"><strong>Métricas de Fluxo:</strong> Otimização da entrega baseada em Lead Time, Cycle Time e Throughput, focando em previsibilidade e cadência.</li>
            <li class="core-skill-item"><strong>Processos de Entrega:</strong> Refinamento contínuo de backlog e facilitação de rituais ágeis com foco em entrega contínua de valor.</li>
            <li class="core-skill-item"><strong>Arquitetura & Negócio:</strong> Tradução de requisitos de infraestrutura, segurança e arquitetura em termos de valor de negócio para stakeholders não técnicos.</li>
          </ul>
        </div>

        <div class="core-skill-block">
          <h3 class="core-skill-subtitle"># Expertise de Domínio</h3>
          <ul class="core-skill-list">
            <li class="core-skill-item"><strong>Fintech & ERP:</strong> Profundo conhecimento em ecossistemas bancários, Open Finance e integração com grandes ERPs (SAP, Totvs Protheus e NetSuite).</li>
            <li class="core-skill-item"><strong>Processos de negócios:</strong> experiência com vertentes financeiras, contábeis, que envolvem gestão de vendas, compras e estoque.</li>
            <li class="core-skill-item"><strong>Omnichannel:</strong> Experiência em integrações críticas entre E-commerce (VTEX), Gateways de pagamento (Pagar.me, Braspag) e sistemas logísticos (WMS).</li>
            <li class="core-skill-item"><strong>IA Operacional:</strong> Implementação estratégica de LLMs para ganhos reais de produtividade operacional e prototipação avançada de soluções.</li>
          </ul>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', coreSkillsHTML);
  }
}

// --- Tab Logic ---
const tabs = document.querySelectorAll('.tab-btn');
const projectsView = document.getElementById('projects-view');
const skillsView = document.getElementById('skills-view');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active to clicked
    tab.classList.add('active');

    const tabName = tab.getAttribute('data-tab');
    if (tabName === 'projects') {
      projectsView.classList.remove('hidden');
      skillsView.classList.add('hidden');
    } else {
      projectsView.classList.add('hidden');
      skillsView.classList.remove('hidden');
    }
  });
});

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
      <h3 class="project-title">${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
      <div class="project-tags">
        ${project.tags.split(',').map(tag => `<span class="tag">${tag.trim()}</span>`).join('')}
      </div>
      <span class="read-more">Ver Detalhes →</span>
    `;

    card.addEventListener('click', () => openModal(project));
    projectsContainer.appendChild(card);
  });
}

// --- Popups ---
function showWelcomePopup() {
  const popupHTML = `
    <div class="popup-overlay active" id="welcome-popup">
      <div class="popup-container">
        <h2 class="popup-title">Olá!</h2>
        <p class="popup-text">
          Aqui você pode visualizar um pouco mais da minha jornada.<br>
          Se ficar alguma dúvida, entre em contato comigo.<br><br>
          E, se puder, deixa o seu feedback para me ajudar a melhorar o portfólio.
        </p>
        <div class="popup-actions">
          <button class="btn-primary" onclick="document.getElementById('welcome-popup').classList.remove('active')">Acessar Portfólio</button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function setupExitIntent() {
  let exitIntentShown = false;

  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0 && !exitIntentShown) {
      exitIntentShown = true;
      const popupHTML = `
        <div class="popup-overlay active" id="exit-popup">
          <div class="popup-container">
            <h2 class="popup-title">Você se importa em deixar um feedback?</h2>
            <p class="popup-text">São apenas quatro perguntinhas que vão me ajudar muito.</p>
            <div class="popup-actions">
              <a href="https://docs.google.com/forms/d/1nK78qcNMCaZryqXvATI9n8HrsMpVdU8gJaO8xp9rLr4/viewform?edit_requested=true" target="_blank" class="btn-primary" onclick="document.getElementById('exit-popup').classList.remove('active')">Sim, vou responder</a>
              <button class="btn-secondary" onclick="document.getElementById('exit-popup').classList.remove('active')">Fica para a próxima</button>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', popupHTML);
    }
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
renderMainSkills();
renderCoreSkills();
loadProjects();
showWelcomePopup();
setupExitIntent();
