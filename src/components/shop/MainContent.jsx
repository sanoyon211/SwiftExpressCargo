"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const BRANDS = [
  { name: 'Fila', cat: 'fashion', label: 'Fashion', url: 'https://www.fila.com/', img: '/assets/Fila_logo.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: false },
  { name: 'Puma', cat: 'fashion', label: 'Fashion', url: 'https://us.puma.com/', img: '/assets/puma-logo.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: true },
  { name: 'Chanel', cat: 'fashion', label: 'Fashion', url: 'https://www.chanel.com/', img: '/assets/chanel-2.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: true },
  { name: 'Adidas', cat: 'fashion', label: 'Fashion', url: 'https://www.adidas.com/', img: '/assets/adidas.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: true },
  { name: 'Apple', cat: 'tech', label: 'Tech', url: 'https://www.apple.com/', img: '/assets/apple-11.svg', color: 'text-teal-600 bg-[#E8F8F5] dark:bg-teal-900/30 dark:text-teal-400', invert: true },
  { name: 'Amazon', cat: 'retail', label: 'Retail', url: 'https://www.amazon.com/', img: '/assets/logo-amazon.svg', color: 'text-slate-900 bg-blue-50 dark:bg-blue-900/30 dark:text-slate-300', invert: true },
  { name: 'Honda', cat: 'auto', label: 'Auto', url: 'https://www.honda.com/', img: '/assets/honda-11.svg', color: 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400', invert: true },
  // Adding some duplicates to keep the grid looking full as in the original design
  { name: 'Fila Originals', cat: 'fashion', label: 'Fashion', url: 'https://www.fila.com/', img: '/assets/Fila_logo.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: false },
  { name: 'Puma Sports', cat: 'fashion', label: 'Fashion', url: 'https://us.puma.com/', img: '/assets/puma-logo.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: true },
  { name: 'Apple Store', cat: 'tech', label: 'Tech', url: 'https://www.apple.com/', img: '/assets/apple-11.svg', color: 'text-teal-600 bg-[#E8F8F5] dark:bg-teal-900/30 dark:text-teal-400', invert: true },
  { name: 'Amazon Prime', cat: 'retail', label: 'Retail', url: 'https://www.amazon.com/', img: '/assets/logo-amazon.svg', color: 'text-slate-900 bg-blue-50 dark:bg-blue-900/30 dark:text-slate-300', invert: true },
  { name: 'Adidas Originals', cat: 'fashion', label: 'Fashion', url: 'https://www.adidas.com/', img: '/assets/adidas.svg', color: 'text-teal-500 bg-[#F1F6F2] dark:bg-slate-700 dark:text-teal-400', invert: true },
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
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
      {/*  HEADER  */}
    <header
      style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/assets/image (7).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center dark:border-b dark:border-slate-800"
    >
      <div className="flex justify-center pt-32 pb-20 px-4 text-center hero-text">
        <div>
          <span className="inline-block bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30">
            🛍️ 1000+ US Brands Available
          </span>
          <h1 className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4">
            Popular Brands
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Shop from top US brands — we'll ship it straight to your door in
            Bangladesh
          </p>
        </div>
      </div>
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green">
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/*  HOW TO SHOP  */}
    <section className="py-12 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-user-plus text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">1. Sign Up Free</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Create your account and get a free US mailing address instantly
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-shopping-bag text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">2. Shop Any Brand</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Use your US address at checkout on any US website below
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg">
              <i className="fas fa-home text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2">3. Receive at Home</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              We ship to your door anywhere in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>

    {/*  BRANDS GRID  */}
    <section className="py-12 px-4 pb-24">
      <div className="container mx-auto">
        {/*  Search + Filter  */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 reveal">
          <div className="relative w-full sm:w-80">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-sm px-4 py-2 rounded-full border-2 font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'border-teal-500 bg-teal-500 text-white shadow-md'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-teal-500 hover:text-teal-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/*  Brands  */}
        {filteredBrands.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 stagger reveal">
            {filteredBrands.map((brand, index) => (
              <a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card group bg-white dark:bg-slate-800 border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:border-teal-500 hover:-translate-y-1 transition-all duration-300 dark:border dark:border-slate-700"
              >
                <div className="h-14 flex items-center justify-center w-full">
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className={`max-h-full max-w-full object-contain transition-all duration-300 group-hover:opacity-100 ${brand.invert ? "dark:invert dark:opacity-70" : "dark:opacity-90"}`}
                  />
                </div>
                <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm text-center line-clamp-1">{brand.name}</span>
                <span className={`text-xs px-3 py-1 rounded-full ${brand.color}`}>
                  {brand.label}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-in fade-in zoom-in duration-300">
            {/*  Empty state  */}
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-search text-slate-400 text-3xl"></i>
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-2">No Brands Found</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Try a different search or category filter.
            </p>
          </div>
        )}
      </div>
    </section>

    {/*  CTA  */}
    <section className="py-12 px-4 bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[32px] p-8 md:p-12 text-center reveal shadow-lg">
          <h3 className="font-bold text-white text-2xl md:text-3xl mb-3">
            Don't see your brand?
          </h3>
          <p className="text-white/90 mb-6">
            We can ship from any US website! Contact us and we'll help you shop.
          </p>
          <Link href="/contact">
            <button className="bg-white dark:bg-slate-800 text-teal-600 font-bold px-10 py-3.5 rounded-full hover:shadow-xl hover:bg-slate-50 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 dark:border dark:border-slate-700">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
