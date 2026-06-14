"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll Reveal Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      revealObserver.observe(el);
    });

    // Counter Animation
    function animateCounter(el, target, duration = 2000) {
      let start = 0;
      const step = target / (duration / 16);

      const timer = setInterval(() => {
        start += step;

        if (start >= target) {
          el.textContent = target.toLocaleString() + (el.dataset.suffix || '');
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(start).toLocaleString() + (el.dataset.suffix || '');
        }
      }, 16);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-target]').forEach((el) => {
      counterObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, [pathname]); // Re-run on route changes

  return null; // This component doesn't render anything
}
