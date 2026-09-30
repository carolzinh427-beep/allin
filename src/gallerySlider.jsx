import React from 'react';
import { createRoot } from 'react-dom/client';
import MorphSlider from './components/MorphSlider.jsx';

const GALLERY_ITEMS = [
  {
    image: '/images/atmosfera-amigas-brinde.png',
    caption: 'Brindes & Comemorações'
  },
  {
    image: '/images/atmosfera-danca-festa.png',
    caption: 'Música & Pista'
  },
  {
    image: '/images/atmosfera-sala-karaoke.png',
    caption: 'Salas com Telão & Neon'
  },
  {
    image: '/images/atmosfera-aniversario-29.png',
    caption: 'Aniversários no All In'
  },
  {
    image: '/images/atmosfera-aniversario-chapeu.png',
    caption: 'Festas Temáticas'
  },
  {
    image: '/images/nightlife-friends.jpg',
    caption: 'Noite Inesquecível em Brasília'
  }
];

export function initGallerySlider() {
  const rootEl = document.getElementById('gallerySliderRoot');
  if (!rootEl) return;

  const root = createRoot(rootEl);
  root.render(
    <div className="gallery-morph-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <MorphSlider
        items={GALLERY_ITEMS}
        transition="melt"
        intensity={0.55}
        aberration={0.35}
        drift={0.4}
        autoplay
        autoplayDelay={4}
        radius={16}
        overlayColor="#121215"
      />
    </div>
  );
}
