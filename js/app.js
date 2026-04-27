// ============================================================
// Copilot Prompt Hub — App Logic
// Search, filter, render, modal, copy-to-clipboard
// ============================================================

(function () {
  'use strict';

  // ---------- State ----------
  let activeCategory = 'all';
  let searchQuery = '';
  let viewMode = 'grid'; // 'grid' | 'list'
  let filteredPrompts = [];

  // ---------- DOM Refs ----------
  const promptsGrid = document.getElementById('promptsGrid');
  const agentsGrid = document.getElementById('agentsGrid');
  const categoryPills = document.getElementById('categoryPills');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const searchCount = document.getElementById('searchCount');
  const noResults = document.getElementById('noResults');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  const backToTop = document.getElementById('backToTop');
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  // ---------- Init ----------
  function init() {
    renderCategoryPills();
    renderPrompts(PROMPTS);
    renderAgents(AGENTS);
    attachEventListeners();
  }

  // ---------- Category Pills ----------
  function renderCategoryPills() {
    CATEGORIES.forEach(cat => {
      const count = PROMPTS.filter(p => p.category === cat.id).length;
      const btn = document.createElement('button');
      btn.className = 'pill';
      btn.dataset.cat = cat.id;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', 'false');
      btn.innerHTML = `
        <span style="font-size:1em;line-height:1">${cat.icon}</span>
        ${cat.label}
        <span class="pill-count">${count}</span>
      `;
      btn.addEventListener('click', () => filterByCategory(cat.id));
      categoryPills.appendChild(btn);
    });
  }

  // ---------- Render Prompts ----------
  function renderPrompts(prompts) {
    promptsGrid.innerHTML = '';
    filteredPrompts = prompts;

    if (prompts.length === 0) {
      noResults.hidden = false;
      promptsGrid.hidden = true;
      searchCount.textContent = '';
      return;
    }

    noResults.hidden = true;
    promptsGrid.hidden = false;

    // Update count display
    if (searchQuery || activeCategory !== 'all') {
      searchCount.textContent = `พบ ${prompts.length} Prompt`;
    } else {
      searchCount.textContent = '';
    }

    prompts.forEach((p, idx) => {
      const cat = CATEGORIES.find(c => c.id === p.category) || {};
      const card = createPromptCard(p, cat, idx);
      promptsGrid.appendChild(card);
    });
  }

  function createPromptCard(p, cat, idx) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${idx * 0.04}s`;
    card.style.animation = 'fadeUp 0.4s ease both';

    card.innerHTML = `
      <div class="card-top">
        <div class="card-icon" style="background:${cat.bg || 'rgba(0,120,212,0.12)'}">
          <span style="font-size:1.4rem;line-height:1">${cat.icon || '📄'}</span>
        </div>
        <div class="card-meta">
          <div class="card-category" style="background:${cat.bg};color:${cat.color}">
            ${cat.label || p.category}
          </div>
          <h3 class="card-title">${escapeHtml(p.title)}</h3>
        </div>
      </div>
      <p class="card-desc">${escapeHtml(p.desc)}</p>
      <div class="card-prompt-preview">${escapeHtml(p.prompt)}</div>
      <div class="card-footer">
        <div class="card-tags">
          ${(p.tags || []).slice(0, 3).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card-actions">
          <button class="btn-icon copy" title="คัดลอก Prompt" aria-label="คัดลอก Prompt"
            data-prompt="${encodeURIComponent(p.prompt)}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
          <button class="btn-icon expand" title="ดูรายละเอียด" aria-label="ดูรายละเอียด"
            data-id="${p.id}">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
              <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Click card → open modal
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-icon.copy')) return;
      openModal(p);
    });

    // Copy button
    card.querySelector('.btn-icon.copy').addEventListener('click', (e) => {
      e.stopPropagation();
      const prompt = decodeURIComponent(e.currentTarget.dataset.prompt);
      copyToClipboard(prompt, 'คัดลอก Prompt แล้ว!');
    });

    return card;
  }

  // ---------- Render Agents ----------
  function renderAgents(agents) {
    agentsGrid.innerHTML = '';
    agents.forEach((a, idx) => {
      const card = createAgentCard(a, idx);
      agentsGrid.appendChild(card);
    });
  }

  function createAgentCard(a, idx) {
    const card = document.createElement('div');
    card.className = 'agent-card';
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${idx * 0.06}s`;
    card.style.animation = 'fadeUp 0.4s ease both';

    card.innerHTML = `
      <div class="agent-card-header">
        <div class="agent-icon" style="background:${a.bg}">
          <span style="font-size:1.5rem;line-height:1">${a.icon}</span>
        </div>
        <div>
          <div class="agent-name">${escapeHtml(a.name)}</div>
          <div class="agent-role" style="color:${a.color}">${escapeHtml(a.role)}</div>
        </div>
      </div>
      <div class="agent-card-body">
        <p class="agent-desc">${escapeHtml(a.desc)}</p>
        <div class="agent-instruction-preview">${escapeHtml(a.instruction)}</div>
      </div>
      <div class="agent-card-footer">
        <div class="agent-capabilities">
          ${(a.capabilities || []).map(c => `<span class="capability-tag">${escapeHtml(c)}</span>`).join('')}
        </div>
        <button class="btn-icon copy" title="คัดลอก Instruction" aria-label="คัดลอก Instruction"
          data-prompt="${encodeURIComponent(a.instruction)}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-icon.copy')) return;
      openAgentModal(a);
    });

    card.querySelector('.btn-icon.copy').addEventListener('click', (e) => {
      e.stopPropagation();
      const instruction = decodeURIComponent(e.currentTarget.dataset.prompt);
      copyToClipboard(instruction, 'คัดลอก Agent Instruction แล้ว!');
    });

    return card;
  }

  // ---------- Filter / Search ----------
  function filterByCategory(catId) {
    activeCategory = catId;

    // Update pills UI
    document.querySelectorAll('.pill').forEach(pill => {
      const isActive = pill.dataset.cat === catId;
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    applyFilters();
  }

  function applyFilters() {
    let results = PROMPTS;

    // Category filter
    if (activeCategory !== 'all') {
      results = results.filter(p => p.category === activeCategory);
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        (p.tags || []).some(t => t.toLowerCase().includes(q)) ||
        (p.useCase || '').toLowerCase().includes(q)
      );
    }

    renderPrompts(results);
  }

  // ---------- Modal ----------
  function openModal(p) {
    const cat = CATEGORIES.find(c => c.id === p.category) || {};
    const diffLevel = p.difficulty || 1;

    modalContent.innerHTML = `
      <div class="modal-category-badge" style="background:${cat.bg};color:${cat.color}">
        ${cat.icon || ''} ${cat.label || p.category}
      </div>
      <h2 class="modal-title" id="modalTitle">${escapeHtml(p.title)}</h2>
      <p class="modal-desc">${escapeHtml(p.desc)}</p>

      ${p.useCase ? `
      <div class="modal-section">
        <div class="modal-section-label">Use Case</div>
        <p style="font-size:0.875rem;color:var(--text-secondary)">${escapeHtml(p.useCase)}</p>
      </div>` : ''}

      <div class="modal-section">
        <div class="modal-section-label">Prompt พร้อมใช้งาน</div>
        <div class="modal-prompt-box" id="modalPromptText">${escapeHtml(p.prompt)}</div>
        <button class="modal-copy-btn" id="modalCopyBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          คัดลอก Prompt
        </button>
      </div>

      ${p.output ? `
      <div class="modal-section">
        <div class="modal-section-label">ตัวอย่างผลลัพธ์ที่คาดหวัง</div>
        <div class="modal-output-box">${escapeHtml(p.output)}</div>
      </div>` : ''}

      <div class="modal-section" style="display:flex;gap:24px;flex-wrap:wrap;align-items:center">
        <div>
          <div class="modal-section-label">ความยาก</div>
          <div class="modal-difficulty">
            <div class="difficulty-bar">
              ${[1,2,3].map(i => `<div class="difficulty-seg ${i <= diffLevel ? 'filled' : ''}"></div>`).join('')}
            </div>
            <span>${diffLevel === 1 ? 'ง่าย' : diffLevel === 2 ? 'ปานกลาง' : 'ยาก'}</span>
          </div>
        </div>
        ${p.tags ? `
        <div>
          <div class="modal-section-label">แท็ก</div>
          <div class="modal-tags">
            ${p.tags.map(t => `<span class="modal-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>` : ''}
      </div>

      <div class="modal-section">
        <div class="modal-section-label">เคล็ดลับการใช้งาน</div>
        <p style="font-size:0.875rem;color:var(--text-secondary);line-height:1.7">
          แทนที่ข้อความในวงเล็บเหลี่ยม <code style="background:rgba(0,0,0,0.3);padding:1px 6px;border-radius:4px;font-size:0.82em">[...]</code>
          ด้วยข้อมูลจริงของคุณก่อนส่งให้ Copilot จะได้ผลลัพธ์ที่ตรงกับความต้องการมากที่สุด
        </p>
      </div>
    `;

    // Copy button in modal
    document.getElementById('modalCopyBtn').addEventListener('click', () => {
      copyToClipboard(p.prompt, 'คัดลอก Prompt แล้ว!');
      const btn = document.getElementById('modalCopyBtn');
      btn.classList.add('copied');
      btn.innerHTML = `
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        คัดลอกแล้ว!
      `;
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          คัดลอก Prompt
        `;
      }, 2500);
    });

    openModalOverlay();
  }

  function openAgentModal(a) {
    modalContent.innerHTML = `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
        <div class="agent-icon" style="background:${a.bg};width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.75rem;flex-shrink:0">${a.icon}</div>
        <div>
          <h2 class="modal-title" id="modalTitle" style="font-size:1.3rem">${escapeHtml(a.name)}</h2>
          <p style="color:${a.color};font-size:0.875rem;font-weight:600">${escapeHtml(a.role)}</p>
        </div>
      </div>
      <p class="modal-desc">${escapeHtml(a.desc)}</p>

      <div class="modal-section">
        <div class="modal-section-label">ความสามารถ</div>
        <div class="modal-tags">
          ${(a.capabilities || []).map(c => `<span class="modal-tag" style="background:${a.bg};color:${a.color};border-color:${a.color}40">${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>

      <div class="modal-section">
        <div class="modal-section-label">System Instruction (คัดลอกไปใช้ใน Copilot Studio)</div>
        <div class="modal-prompt-box" style="font-family:var(--font-en);font-size:0.82rem;max-height:300px;overflow-y:auto">${escapeHtml(a.instruction)}</div>
        <button class="modal-copy-btn" id="modalCopyBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          คัดลอก Agent Instruction
        </button>
      </div>

      <div class="modal-section" style="background:rgba(0,120,212,0.06);border:1px solid rgba(0,120,212,0.15);border-radius:10px;padding:16px">
        <div class="modal-section-label" style="color:var(--ms-blue-light)">วิธีใช้งาน</div>
        <ol style="font-size:0.875rem;color:var(--text-secondary);padding-left:20px;line-height:1.9">
          <li>คัดลอก System Instruction ด้านบน</li>
          <li>เปิด <strong style="color:var(--text-primary)">Microsoft Copilot Studio</strong></li>
          <li>สร้าง Agent ใหม่ → ไปที่ "Instructions"</li>
          <li>วาง Instruction แล้วปรับแต่งให้เหมาะกับองค์กร</li>
          <li>ทดสอบและ Publish</li>
        </ol>
      </div>
    `;

    document.getElementById('modalCopyBtn').addEventListener('click', () => {
      copyToClipboard(a.instruction, 'คัดลอก Agent Instruction แล้ว!');
      const btn = document.getElementById('modalCopyBtn');
      btn.classList.add('copied');
      btn.textContent = 'คัดลอกแล้ว!';
    });

    openModalOverlay();
  }

  function openModalOverlay() {
    modalOverlay.removeAttribute('aria-hidden');
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalOverlay.querySelector('.modal-box').scrollTop = 0;
    setTimeout(() => modalClose.focus(), 50);
  }

  function closeModal() {
    modalOverlay.setAttribute('aria-hidden', 'true');
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ---------- Copy to Clipboard ----------
  function copyToClipboard(text, message = 'คัดลอกแล้ว!') {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => showToast(message));
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        document.execCommand('copy');
        showToast(message);
      } catch (e) {
        showToast('เปิดรายละเอียดและคัดลอกเอง');
      }
      document.body.removeChild(ta);
    }
  }

  // ---------- Toast ----------
  let toastTimer;
  function showToast(message) {
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  // ---------- View Toggle ----------
  function setViewMode(mode) {
    viewMode = mode;
    if (mode === 'grid') {
      promptsGrid.classList.remove('list-view');
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
    } else {
      promptsGrid.classList.add('list-view');
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
    }
  }

  // ---------- Utility ----------
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Expose for HTML onclick (reset button)
  window.resetFilters = function () {
    searchInput.value = '';
    searchQuery = '';
    searchClear.hidden = true;
    filterByCategory('all');
  };

  // ---------- Event Listeners ----------
  function attachEventListeners() {
    // Search input
    let searchDebounce;
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      searchClear.hidden = !searchQuery;
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(applyFilters, 220);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        searchQuery = '';
        searchClear.hidden = true;
        applyFilters();
        searchInput.blur();
      }
    });

    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.hidden = true;
      applyFilters();
      searchInput.focus();
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
    });

    // View toggle
    gridViewBtn.addEventListener('click', () => setViewMode('grid'));
    listViewBtn.addEventListener('click', () => setViewMode('list'));

    // Back to top
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Mobile menu
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Footer category links
    document.querySelectorAll('[data-filter]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const catId = e.currentTarget.dataset.filter;
        filterByCategory(catId);
        document.getElementById('prompts').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Keyboard navigation for cards
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.classList.contains('prompt-card')) {
        const id = e.target.dataset.id;
        const p = PROMPTS.find(p => p.id === id);
        if (p) openModal(p);
      }
    });
  }

  // ---------- CSS Animation (inject keyframes) ----------
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // ---------- Run ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
