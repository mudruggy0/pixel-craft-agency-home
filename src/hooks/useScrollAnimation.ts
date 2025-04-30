
import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const animElements = document.querySelectorAll('.fade-in');
    animElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      if (animElements) {
        animElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);
}
