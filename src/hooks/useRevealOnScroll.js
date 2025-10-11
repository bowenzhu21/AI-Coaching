import { useEffect } from 'react';

/**
 * Adds an `is-visible` class to any element matching the selector
 * once it scrolls into view. Intended for lightweight reveal animations.
 */
const useRevealOnScroll = (selector) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !selector) {
      return;
    }

    const elements = Array.from(document.querySelectorAll(selector));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.15,
      }
    );

    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [selector]);
};

export default useRevealOnScroll;
