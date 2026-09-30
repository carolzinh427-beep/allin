/* ==========================================================================
   ALL IN 305 — INTERACTIVE LOGIC & CONTROLLER (LANDING PAGE)
   ========================================================================== */

import { initAmbientesCarousel } from './src/ambientesCarousel.jsx';
import { initGallerySlider } from './src/gallerySlider.jsx';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initAmbientesCarousel();
  initGallerySlider();
  initReservationHelper();
  initLightbox();
  initFlipbook();
  initScrollReveal();
  initCategoryShortcuts();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.getElementById('mainHeader');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Open/Close Mobile Drawer
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    }

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Active Nav Link Spy on Scroll
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   CATEGORY SHORTCUTS FROM "BAR COMPLETO" -> JUMP TO CARDAPIO.HTML
   ========================================================================== */
function initCategoryShortcuts() {
  const barCatCards = document.querySelectorAll('.bar-cat-card[data-category]');
  barCatCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      if (cat) {
        window.location.href = `/cardapio.html?cat=${encodeURIComponent(cat)}`;
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE RESERVATION FORM HELPER (WHATSAPP GENERATOR)
   ========================================================================== */
function initReservationHelper() {
  const resType = document.getElementById('resType');
  const resGuests = document.getElementById('resGuests');
  const resDay = document.getElementById('resDay');
  const dynamicReserveBtn = document.getElementById('dynamicReserveBtn');

  function updateWhatsappLink() {
    if (!dynamicReserveBtn || !resType || !resGuests || !resDay) return;

    const type = resType.value;
    const guests = resGuests.value;
    const day = resDay.value;

    const message = `Olá! Gostaria de fazer uma reserva no All In 305:\n- Motivo: ${type}\n- Grupo: ${guests}\n- Preferência: ${day}\n\nPoderiam verificar a disponibilidade?`;
    const encoded = encodeURIComponent(message);
    dynamicReserveBtn.href = `https://wa.me/5561996792002?text=${encoded}`;
  }

  if (resType) resType.addEventListener('change', updateWhatsappLink);
  if (resGuests) resGuests.addEventListener('change', updateWhatsappLink);
  if (resDay) resDay.addEventListener('change', updateWhatsappLink);

  updateWhatsappLink();
}

/* ==========================================================================
   LIGHTBOX FOR GALLERY
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');
  const items = document.querySelectorAll('[data-lightbox]');

  if (!modal || !imgEl) return;

  function openLightbox(src, caption) {
    imgEl.src = src;
    imgEl.alt = caption || 'Imagem All In 305';
    captionEl.textContent = caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.lightbox;
      const caption = item.dataset.caption;
      openLightbox(src, caption);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   PDF FLIPBOOK MODAL (13 PAGES OF THE OFFICIAL MENU)
   ========================================================================== */
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

/* ==========================================================================
   SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
}
