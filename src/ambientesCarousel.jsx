import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import CircularCarousel from './components/CircularCarousel.jsx';

const AMBIENTES_ITEMS = [
  {
    src: '/images/atmosfera-sala-karaoke.png',
    alt: 'Ambiente 01 All In 305',
    title: 'Ambiente 01',
    subtitle: 'Telão & Isolamento'
  },
  {
    src: '/images/karaoke-stage.jpg',
    alt: 'Ambiente 02 All In 305',
    title: 'Ambiente 02',
    subtitle: 'Palco & Microfones Sem Fio'
  },
  {
    src: '/images/atmosfera-amigas-brinde.png',
    alt: 'Ambiente 03 All In 305',
    title: 'Ambiente 03',
    subtitle: 'Lounge VIP & Conforto'
  },
  {
    src: '/images/atmosfera-danca-festa.png',
    alt: 'Ambiente 04 All In 305',
    title: 'Ambiente 04',
    subtitle: 'Climatizado & Pista'
  },
  {
    src: '/images/atmosfera-aniversario-29.png',
    alt: 'Ambiente 05 All In 305',
    title: 'Ambiente 05',
    subtitle: 'Aniversários & Turma'
  },
  {
    src: '/images/atmosfera-aniversario-chapeu.png',
    alt: 'Ambiente 06 All In 305',
    title: 'Ambiente 06',
    subtitle: 'Grupos & Comemorações'
  },
  {
    src: '/images/nightlife-friends.jpg',
    alt: 'Ambiente 07 All In 305',
    title: 'Ambiente 07',
    subtitle: 'Som Digital Pro'
  }
];

function AmbientesCarouselContainer() {
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 1200));

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallMobile = windowWidth <= 480;
  const isMobile = windowWidth <= 768;
  const cardW = isSmallMobile ? 140 : isMobile ? 160 : 210;
  const gap = isSmallMobile ? 14 : isMobile ? 18 : 24;

  return (
    <div className="ambientes-carousel-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <CircularCarousel
        items={AMBIENTES_ITEMS}
        preset="cylinder"
        intro="rise"
        cardWidth={cardW}
        aspectRatio={1}
        speed={12}
        gap={gap}
        fadeColor="#121215"
        captions
        onItemClick={(item) => {
          const msg = encodeURIComponent(`Olá! Gostaria de consultar disponibilidade para o ${item.title} no All In 305.`);
          window.open(`https://wa.me/5561996792002?text=${msg}`, '_blank');
        }}
      />
    </div>
  );
}

export function initAmbientesCarousel() {
  const rootEl = document.getElementById('ambientesCarouselRoot');
  if (!rootEl) return;

  const root = createRoot(rootEl);
  root.render(<AmbientesCarouselContainer />);
}
