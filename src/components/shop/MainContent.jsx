"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, UserPlus, ShoppingBag, Home, MessageSquare, ShoppingCart, SearchX } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

// Updated semantic colors for SaaS dark/light mode compatibility
const BRANDS = [
  { name: 'Fila', cat: 'fashion', label: 'Fashion', url: 'https://www.fila.com/', img: '/assets/Fila_logo.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: false },
  { name: 'Puma', cat: 'fashion', label: 'Fashion', url: 'https://us.puma.com/', img: '/assets/puma-logo.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: true },
  { name: 'Chanel', cat: 'fashion', label: 'Fashion', url: 'https://www.chanel.com/', img: '/assets/chanel-2.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: true },
  { name: 'Adidas', cat: 'fashion', label: 'Fashion', url: 'https://www.adidas.com/', img: '/assets/adidas.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: true },
  { name: 'Apple', cat: 'tech', label: 'Tech', url: 'https://www.apple.com/', img: '/assets/apple-11.svg', color: 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400', invert: true },
  { name: 'Amazon', cat: 'retail', label: 'Retail', url: 'https://www.amazon.com/', img: '/assets/logo-amazon.svg', color: 'text-orange-600 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400', invert: true },
  { name: 'Honda', cat: 'auto', label: 'Auto', url: 'https://www.honda.com/', img: '/assets/honda-11.svg', color: 'text-slate-700 bg-slate-100 dark:bg-slate-800 dark:text-slate-300', invert: true },
  // Duplicates for grid filling
  { name: 'Fila Originals', cat: 'fashion', label: 'Fashion', url: 'https://www.fila.com/', img: '/assets/Fila_logo.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: false },
  { name: 'Puma Sports', cat: 'fashion', label: 'Fashion', url: 'https://us.puma.com/', img: '/assets/puma-logo.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: true },
  { name: 'Apple Store', cat: 'tech', label: 'Tech', url: 'https://www.apple.com/', img: '/assets/apple-11.svg', color: 'text-blue-600 bg-blue-50 dark:bg-blue-500/10 dark:text-blue-400', invert: true },
  { name: 'Amazon Prime', cat: 'retail', label: 'Retail', url: 'https://www.amazon.com/', img: '/assets/logo-amazon.svg', color: 'text-orange-600 bg-orange-50 dark:bg-orange-500/10 dark:text-orange-400', invert: true },
  { name: 'Adidas Originals', cat: 'fashion', label: 'Fashion', url: 'https://www.adidas.com/', img: '/assets/adidas.svg', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-500/10 dark:text-indigo-400', invert: true },
];

const CATEGORIES = [
  { id: 'all', label: 'All Brands' },
  { id: 'fashion', label: 'Fashion' },
  { id: 'tech', label: 'Tech' },
  { id: 'auto', label: 'Auto' },
  { id: 'retail', label: 'Retail' },
];

export default function MainContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBrands = BRANDS.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || brand.cat === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* 1. HEADER SECTION (Immersive Dark Hero) */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
          <img
            src="/assets/image (7).png"
            alt="Popular US Brands"
            className="w-full h-full object-cover scale-105"
            suppressHydrationWarning
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
            <ShoppingCart size={16} /> 1000+ US Brands Available
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
            Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Brands</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Shop from top US brands — we'll ship it straight to your door in Bangladesh safely and affordably.
          </p>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/8801715825331"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 group focus:outline-none"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative bg-[#25D366] hover:bg-[#20bd5a] h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
            <FaWhatsapp className="text-white text-3xl md:text-4xl" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3 md:h-4 md:w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500 border-2 border-[#25D366]"></span>
            </span>
          </div>
        </a>
      </header>

      {/* 2. HOW TO SHOP SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
              How it Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 bg-white dark:bg-slate-800/80 rounded-2xl p-8 text-center border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/20 text-white transform -rotate-3">
                <UserPlus size={28} strokeWidth={2} />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3">1. Sign Up Free</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Create your account and get a free, dedicated US mailing address instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white dark:bg-slate-800/80 rounded-2xl p-8 text-center border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/20 text-white transform rotate-3">
                <ShoppingBag size={28} strokeWidth={2} />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3">2. Shop Any Brand</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Use your new US address at checkout on any US website or store.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white dark:bg-slate-800/80 rounded-2xl p-8 text-center border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/20 text-white transform -rotate-3">
                <Home size={28} strokeWidth={2} />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-3">3. Receive at Home</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                We handle the international shipping and deliver straight to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRANDS GRID SECTION */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">

            {/* Search Bar */}
            <div className="relative w-full md:max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-11 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${activeCategory === cat.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {filteredBrands.map((brand, index) => (
                <a
                  key={index}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-between gap-4 bg-white dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
                >
                  {/* Brand Image */}
                  <div className="h-12 sm:h-14 w-full flex items-center justify-center">
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className={`max-h-full max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-110 ${brand.invert ? "dark:invert opacity-80 dark:opacity-70 group-hover:opacity-100" : "opacity-90 group-hover:opacity-100"}`}
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Brand Info */}
                  <div className="flex flex-col items-center gap-2 mt-2 w-full">
                    <span className="font-semibold text-slate-900 dark:text-white text-sm text-center truncate w-full">
                      {brand.name}
                    </span>
                    <span className={`text-[10px] sm:text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider ${brand.color}`}>
                      {brand.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 sm:py-24">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <SearchX size={32} className="text-slate-400" />
              </div>
              <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2 tracking-tight">
                No Brands Found
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Try searching with a different keyword or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. CALL TO ACTION (Dark Banner) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-slate-900 rounded-[2rem] px-6 py-12 sm:p-16 overflow-hidden text-center shadow-2xl border border-slate-800">

            {/* Subtle Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare size={32} className="text-white" strokeWidth={1.5} />
              </div>

              <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4 tracking-tight">
                Don't see your favorite brand?
              </h2>

              <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto font-normal leading-relaxed">
                We can ship from almost any US website! Contact our support team and we'll guide you through the process.
              </p>

              <Link href="/contact" className="focus:outline-none">
                <button className="h-14 px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
                  Contact Support
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}