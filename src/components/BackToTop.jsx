"use client";
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      //  পজিশন আগের জায়গায় (bottom-6) নিয়ে আসা হয়েছে
      className={`fixed bottom-6 md:bottom-8 right-6 md:right-8 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-[80] ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        } bg-slate-900 text-white hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-600 dark:hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(79,70,229,0.3)] dark:hover:shadow-[0_8px_20px_rgba(79,70,229,0.4)] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0F1C]`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={22} strokeWidth={2.5} />
    </button>
  );
}