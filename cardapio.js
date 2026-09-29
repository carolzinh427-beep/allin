/* ==========================================================================
   ALL IN 305 — CARDÁPIO DIGITAL LOGIC & CONTROLLER
   ========================================================================== */

import { MENU_CATEGORIES, MENU_ITEMS } from './src/data/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initCardapioPage();
  initFlipbook();
});

function initCardapioPage() {
  const categoriesBar = document.getElementById('menuCategoriesBar');
  const itemsGrid = document.getElementById('menuItemsGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const resultsCount = document.getElementById('menuResultsCount');

  // Check URL query param for category (e.g. ?cat=happy-hour)
  const urlParams = new URLSearchParams(window.location.search);
  const initialCat = urlParams.get('cat');
  let activeCategory = (initialCat && MENU_CATEGORIES.some(c => c.id === initialCat)) ? initialCat : 'todos';
  let searchTerm = '';

  // Render Category Tabs
  function renderCategories() {
    if (!categoriesBar) return;
    categoriesBar.innerHTML = MENU_CATEGORIES.map(cat => `
      <button class="category-tab-btn ${cat.id === activeCategory ? 'active' : ''}" 
              data-cat-id="${cat.id}"
              role="tab"
              aria-selected="${cat.id === activeCategory}">
        <span>${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join('');

    // Attach click handlers
    const catButtons = categoriesBar.querySelectorAll('.category-tab-btn');
    catButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        catButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeCategory = btn.dataset.catId;

        // Update URL query string without page reload
        const newUrl = new URL(window.location);
        if (activeCategory === 'todos') {
          newUrl.searchParams.delete('cat');
        } else {
          newUrl.searchParams.set('cat', activeCategory);
        }
        window.history.replaceState({}, '', newUrl);

        filterAndRenderItems();
      });
    });

    // Auto-scroll active category into view
    const activeBtn = categoriesBar.querySelector('.category-tab-btn.active');
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  // Render Filtered Products
  function filterAndRenderItems() {
    if (!itemsGrid) return;

    const filtered = MENU_ITEMS.filter(item => {
      const matchesCategory = (activeCategory === 'todos') || (item.category === activeCategory);

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = !term || 
        item.name.toLowerCase().includes(term) ||
        (item.description && item.description.toLowerCase().includes(term)) ||
        (item.tag && item.tag.toLowerCase().includes(term));

      return matchesCategory && matchesSearch;
    });

    // Update count indicator
    if (resultsCount) {
      if (searchTerm) {
        resultsCount.textContent = `Encontrado(s) ${filtered.length} item(ns) para "${searchTerm}"`;
      } else if (activeCategory !== 'todos') {
        const catObj = MENU_CATEGORIES.find(c => c.id === activeCategory);
        resultsCount.textContent = `${filtered.length} item(ns) em ${catObj ? catObj.label : ''}`;
      } else {
        resultsCount.textContent = `Mostrando todos os ${filtered.length} produtos oficiais`;
      }
    }

    if (filtered.length === 0) {
      itemsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--text-white); margin-bottom: 8px;">NENHUM ITEM ENCONTRADO</h3>
          <p>Tente buscar por outro termo ou selecione outra categoria.</p>
        </div>
      `;
      return;
    }

    itemsGrid.innerHTML = filtered.map(item => {
      const waMsg = encodeURIComponent(`Olá! Gostaria de consultar/pedir o item "${item.name}" (${item.priceFormatted}) no All In 305.`);
      return `
        <article class="menu-product-card" data-category="${item.category}">
          <div class="prod-card-top">
            <h3 class="prod-card-title">${item.name}</h3>
            <span class="prod-card-price">${item.priceFormatted}</span>
          </div>
          ${item.description ? `<p class="prod-card-desc">${item.description}</p>` : ''}
          <div class="prod-card-footer">
            ${item.tag ? `<span class="prod-card-tag">${item.tag}</span>` : '<span></span>'}
            <a href="https://wa.me/5561996792002?text=${waMsg}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-order-wa" 
               title="Pedir este item no WhatsApp">
              <span>Pedir no WhatsApp</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.8 14.12c-.24.67-1.39 1.29-1.92 1.37-.5.08-1.14.12-3.69-.93-2.18-.89-3.58-3.13-3.69-3.28-.11-.15-.89-1.19-.89-2.27s.57-1.61.77-1.83c.2-.22.44-.28.59-.28.15 0 .29.01.42.01.14 0 .32-.05.5.38.19.46.65 1.58.71 1.7.06.12.1.26.02.41-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.18 1.25z"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
      }
      filterAndRenderItems();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
        clearSearchBtn.style.display = 'none';
        filterAndRenderItems();
        searchInput.focus();
      }
    });
  }

  renderCategories();
  filterAndRenderItems();
}

/* Flipbook Modal */
function initFlipbook() {
  const modal = document.getElementById('flipbookModal');
  const openBtn = document.getElementById('openFlipbookBtn');
  const closeBtn = document.getElementById('flipbookClose');
  const pageImg = document.getElementById('flipbookPageImg');
  const pageIndicator = document.getElementById('flipbookPageIndicator');
  const prevBtn = document.getElementById('flipPrevBtn');
  const nextBtn = document.getElementById('flipNextBtn');
  const thumbsContainer = document.getElementById('flipbookThumbnails');

  if (!modal || !pageImg) return;

  const totalPages = 13;
  let currentPage = 1;

  function loadPage(page) {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    pageImg.src = `/cardapio/page_${currentPage}.jpg`;
    pageImg.alt = `Cardápio All In 305 - Página ${currentPage}`;
    if (pageIndicator) {
      pageIndicator.textContent = `Página ${currentPage} de ${totalPages}`;
    }

    if (thumbsContainer) {
      const thumbs = thumbsContainer.querySelectorAll('.flip-thumb');
      thumbs.forEach((thumb, idx) => {
        if (idx + 1 === currentPage) {
          thumb.classList.add('active');
          thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
          thumb.classList.remove('active');
        }
      });
    }
  }

  function renderThumbnails() {
    if (!thumbsContainer) return;
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
      html += `
        <div class="flip-thumb ${i === 1 ? 'active' : ''}" data-page="${i}" title="Página ${i}">
          <img src="/cardapio/page_${i}.jpg" alt="Página ${i}" loading="lazy">
        </div>
      `;
    }
    thumbsContainer.innerHTML = html;

    thumbsContainer.querySelectorAll('.flip-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        loadPage(parseInt(thumb.dataset.page, 10));
      });
    });
  }

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    loadPage(currentPage);
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) loadPage(currentPage - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) loadPage(currentPage + 1);
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft' && currentPage > 1) loadPage(currentPage - 1);
    if (e.key === 'ArrowRight' && currentPage < totalPages) loadPage(currentPage + 1);
  });

  renderThumbnails();
}
