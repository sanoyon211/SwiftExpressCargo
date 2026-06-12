import React from 'react';
import Link from 'next/link';

export default function PopularBrands() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal gap-6">
          <div>
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Top Retailers</span>
            <h2 className="font-bold text-3xl md:text-4xl text-slate-900 dark:text-slate-50">Popular Brands</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-3 text-lg">Shop your favorite US brands and we'll deliver them safely.</p>
          </div>
          <Link href="/shop">
            <button className="btn-outline">View All Brands</button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 stagger reveal">
          {/* Fila */}
          <a href="https://www.fila.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/Fila_logo.svg" alt="Fila" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Fila</span>
          </a>
          {/* Puma */}
          <a href="https://us.puma.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/puma-logo.svg" alt="Puma" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Puma</span>
          </a>
          {/* Chanel */}
          <a href="https://www.chanel.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/chanel-2.svg" alt="Chanel" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Chanel</span>
          </a>
          {/* Honda */}
          <a href="https://www.honda.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/honda-11.svg" alt="Honda" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Honda</span>
          </a>
          {/* Apple */}
          <a href="https://www.apple.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/apple-11.svg" alt="Apple" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Apple</span>
          </a>
          {/* Amazon */}
          <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/logo-amazon.svg" alt="Amazon" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Amazon</span>
          </a>
          {/* Adidas */}
          <a href="https://www.adidas.com/" target="_blank" rel="noopener noreferrer" className="card-hover bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group dark:border dark:border-slate-700">
            <img src="/assets/adidas.svg" alt="Adidas" className="h-10 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 dark:invert" />
            <span className="text-slate-600 dark:text-slate-300 text-sm font-medium group-hover:text-teal-600 transition-colors">Adidas</span>
          </a>
        </div>
      </div>
    </section>
  );
}
