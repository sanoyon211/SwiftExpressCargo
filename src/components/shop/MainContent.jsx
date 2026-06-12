import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image (7).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center"
    >
      <div
        className="flex justify-center pt-32 pb-20 px-4 text-center hero-text"
      >
        <div>
          <span
            className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
            >🛍️ 1000+ US Brands Available</span
          >
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
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
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/*  HOW TO SHOP  */}
    <section className="py-12 px-4 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
          <div className="text-center p-6">
            <div
              className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-user-plus text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">1. Sign Up Free</h4>
            <p className="text-slate-500 text-sm">
              Create your account and get a free US mailing address instantly
            </p>
          </div>
          <div className="text-center p-6">
            <div
              className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-shopping-bag text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">2. Shop Any Brand</h4>
            <p className="text-slate-500 text-sm">
              Use your US address at checkout on any US website below
            </p>
          </div>
          <div className="text-center p-6">
            <div
              className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-home text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-slate-900 mb-2">3. Receive at Home</h4>
            <p className="text-slate-500 text-sm">
              We ship to your door anywhere in Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>

    {/*  BRANDS GRID  */}
    <section className="py-12 px-4 pb-24">
      <div className="container">
        {/*  Search + Filter  */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8 reveal"
        >
          <div className="relative w-full sm:w-80">
            <i
              className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"
            ></i>
            <input
              type="text"
              id="brandSearch"
              placeholder="Search brands..."
              className="w-full pl-11 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm bg-white text-slate-900"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="filter-btn active text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium"
              data-cat="all"
            >
              All
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
              data-cat="fashion"
            >
              Fashion
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
              data-cat="tech"
            >
              Tech
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
              data-cat="auto"
            >
              Auto
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
              data-cat="retail"
            >
              Retail
            </button>
          </div>
        </div>

        {/*  Brands  */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 stagger reveal"
          id="brandsGrid"
        >
          {/*  Fashion  */}
          <a
            href="https://www.fila.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="fila"
          >
            <img
              src="/assets/Fila_logo.svg"
              alt="Fila"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Fila</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Puma</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.chanel.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="chanel"
          >
            <img
              src="/assets/chanel-2.svg"
              alt="Chanel"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Chanel</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Adidas</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          {/*  Tech  */}
          <a
            href="https://www.apple.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="tech"
            data-name="apple"
          >
            <img
              src="/assets/apple-11.svg"
              alt="Apple"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Apple</span>
            <span
              className="text-xs text-teal-400 bg-[#E8F8F5] px-3 py-1 rounded-full"
              >Tech</span
            >
          </a>
          {/*  Retail  */}
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Amazon</span>
            <span
              className="text-xs text-slate-900 bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          {/*  Auto  */}
          <a
            href="https://www.honda.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="auto"
            data-name="honda"
          >
            <img
              src="/assets/honda-11.svg"
              alt="Honda"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Honda</span>
            <span
              className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
              >Auto</span
            >
          </a>
          {/*  More brands repeating pattern  */}
          <a
            href="https://www.fila.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="fila"
          >
            <img
              src="/assets/Fila_logo.svg"
              alt="Fila"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Fila</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Puma</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.apple.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="tech"
            data-name="apple"
          >
            <img
              src="/assets/apple-11.svg"
              alt="Apple"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Apple</span>
            <span
              className="text-xs text-teal-400 bg-[#E8F8F5] px-3 py-1 rounded-full"
              >Tech</span
            >
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Amazon</span>
            <span
              className="text-xs text-slate-900 bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Adidas</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.chanel.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="chanel"
          >
            <img
              src="/assets/chanel-2.svg"
              alt="Chanel"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Chanel</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.honda.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="auto"
            data-name="honda"
          >
            <img
              src="/assets/honda-11.svg"
              alt="Honda"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Honda</span>
            <span
              className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
              >Auto</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Puma</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Amazon</span>
            <span
              className="text-xs text-slate-900 bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-[24px] p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-slate-900 text-sm">Adidas</span>
            <span
              className="text-xs text-teal-500 bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
        </div>

        {/*  Empty state  */}
        <div id="noResults" className="hidden text-center py-16">
          <div
            className="w-20 h-20 bg-[#F1F6F2] rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i className="fas fa-search text-teal-500 text-3xl"></i>
          </div>
          <h3 className="font-bold text-xl text-slate-900 mb-2">No Brands Found</h3>
          <p className="text-slate-500">
            Try a different search or category filter.
          </p>
        </div>
      </div>
    </section>

    {/*  CTA  */}
    <section className="py-12 px-4 bg-white">
      <div className="container">
        <div
          className="bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[32px] p-8 md:p-12 text-center reveal"
        >
          <h3 className="font-bold text-white text-2xl md:text-3xl mb-3">
            Don't see your brand?
          </h3>
          <p className="text-white/90 mb-6">
            We can ship from any US website! Contact us and we'll help you shop.
          </p>
          <a href="/contact"
            ><button
              className="bg-white text-teal-500 font-bold px-10 py-3.5 rounded-full hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Contact Us
            </button></a
          >
        </div>
      </div>
    </section>
    </>
  );
}
