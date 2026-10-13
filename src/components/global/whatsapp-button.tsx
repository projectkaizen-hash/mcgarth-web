'use client';

import { useEffect, useState } from 'react';
import { Lottie } from 'lottie-react';
import whatsappAnimation from '@/assets/whatsapp-animation.json';

type ScrollDirection = 'down' | 'up';

export default function WhatsAppButton() {
  const [direction, setDirection] = useState<ScrollDirection>('down');

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 4) return;
      setDirection(y > lastY ? 'down' : 'up');
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // const scrollToBottom = () =>
  //   window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  // const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const isDown = direction === 'down';

  return (
    <div className="c-floating-actions">
      <span className="c-scroll-spacer" aria-hidden="true" />

      <a
        href="https://wa.me/8801976247284"
        target="_blank"
        rel="noopener noreferrer"
        className="c-whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <Lottie
          src={whatsappAnimation}
          loop
          autoplay
          className="c-whatsapp-button_icon"
          aria-hidden="true"
        />
      </a>

      {/* <button
        type="button"
        onClick={isDown ? scrollToBottom : scrollToTop}
        className={`c-scroll-button ${isDown ? 'is-down' : 'is-up'}`}
        aria-label={isDown ? 'Go to bottom' : 'Go to top'}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button> */}
    </div>
  );
}
