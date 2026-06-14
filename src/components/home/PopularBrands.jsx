"use client";

import React from 'react';
import Link from 'next/link';

export default function PopularBrands() {
  const brands = [
    { id: 1, name: 'Fila', url: 'https://www.fila.com/', logo: '/assets/Fila_logo.svg' },
    { id: 2, name: 'Puma', url: 'https://us.puma.com/', logo: '/assets/puma-logo.svg' },
    { id: 3, name: 'Chanel', url: 'https://www.chanel.com/', logo: '/assets/chanel-2.svg' },
    { id: 4, name: 'Honda', url: 'https://www.honda.com/', logo: '/assets/honda-11.svg' },
    { id: 5, name: 'Apple', url: 'https://www.apple.com/', logo: '/assets/apple-11.svg' },
    { id: 6, name: 'Amazon', url: 'https://www.amazon.com/', logo: '/assets/logo-amazon.svg' },
    { id: 7, name: 'Adidas', url: 'https://www.adidas.com/', logo: '/assets/adidas.svg' },
  ];

  // Double the array to ensure seamless infinite looping animation
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 dark:bg-slate-900/40 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
            Top Retailers
          </span>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
            Supported US Brands & Stores
          </h2>
        </div>

        <Link href="/shop" className="shrink-0 w-full md:w-auto">
          <button className="w-full md:w-auto h-10 px-5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none">
            Explore All Brands
          </button>
        </Link>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden py-4">

        {/* Left & Right Gradients for Soft Edge Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="flex gap-16 animate-marquee whitespace-nowrap hover:[animation-play-state:paused] items-center">
          {duplicatedBrands.map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center min-w-[100px] sm:min-w-[130px] transition-transform duration-300 focus:outline-none hover:scale-110 dark:invert"
              aria-label={`Shop at ${brand.name}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 sm:max-h-12 object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Custom Keyframe Animation Injector */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}