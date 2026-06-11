"use client";
import React from 'react';
import Link from 'next/link';

export default function Shop() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image (7).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
      <div
        className="md:hidden py-4 px-6 bg-black/30 backdrop-blur-lg flex justify-between items-center"
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-[101px] h-[53px] object-cover"
        />
        <button id="menubtn" className="text-white text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="bg-black/30 backdrop-blur-lg hidden md:flex justify-center">
        <nav className="container flex items-center justify-between py-4 px-4">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-[101px] h-[53px] object-cover"
          />
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Services</a
              >
            </li>
            <li>
              <a
                href="/about"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/rates"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Rates</a
              >
            </li>
            <li>
              <a
                href="/cost-calculator"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Cost Calculator</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Contact</a
              >
            </li>
          </ul>
          <div className="flex gap-3">
            <a href="./signin_up/login.html"
              ><button className="btn-primary text-sm px-5 py-2.5">
                Sign In
              </button></a
            >
            <a href="./signin_up/sign_up.html"
              ><button
                className="border border-white text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/20 transition"
              >
                Sign Up
              </button></a
            >
          </div>
        </nav>
      </div>
      <nav
        className="hidden absolute z-50 right-0 top-[72px] w-full md:hidden"
        id="mobileMenu"
      >
        <div className="mx-4 bg-white/95 rounded-2xl shadow-2xl p-6">
          <ul className="flex flex-col gap-3 mb-5">
            <li>
              <a
                href="/"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-home w-5 text-[#6DA015]"></i>Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i
                >Services</a
              >
            </li>
            <li>
              <a
                href="/rates"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-tags w-5 text-[#6DA015]"></i>Rates</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-search-location w-5 text-[#6DA015]"></i
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-[#333] font-medium py-2 flex items-center gap-3"
                ><i className="fas fa-envelope w-5 text-[#6DA015]"></i>Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="flex justify-center py-20 md:py-32 px-4 text-center hero-text"
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
          <div className="flex gap-2 justify-center">
            <div className="h-[10px] w-[40px] bg-[#6DA015] rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green"
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
              className="w-16 h-16 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-user-plus text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-[#333] mb-2">1. Sign Up Free</h4>
            <p className="text-[#606060] text-sm">
              Create your account and get a free US mailing address instantly
            </p>
          </div>
          <div className="text-center p-6">
            <div
              className="w-16 h-16 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-shopping-bag text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-[#333] mb-2">2. Shop Any Brand</h4>
            <p className="text-[#606060] text-sm">
              Use your US address at checkout on any US website below
            </p>
          </div>
          <div className="text-center p-6">
            <div
              className="w-16 h-16 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <i className="fas fa-home text-white text-xl"></i>
            </div>
            <h4 className="font-bold text-[#333] mb-2">3. Receive at Home</h4>
            <p className="text-[#606060] text-sm">
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
              className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] text-sm"
            ></i>
            <input
              type="text"
              id="brandSearch"
              placeholder="Search brands..."
              className="w-full pl-11 pr-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-sm bg-white text-[#333]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="filter-btn active text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium"
              data-cat="all"
            >
              All
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
              data-cat="fashion"
            >
              Fashion
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
              data-cat="tech"
            >
              Tech
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
              data-cat="auto"
            >
              Auto
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
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
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="fila"
          >
            <img
              src="/assets/Fila_logo.svg"
              alt="Fila"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Fila</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Puma</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.chanel.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="chanel"
          >
            <img
              src="/assets/chanel-2.svg"
              alt="Chanel"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Chanel</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Adidas</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          {/*  Tech  */}
          <a
            href="https://www.apple.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="tech"
            data-name="apple"
          >
            <img
              src="/assets/apple-11.svg"
              alt="Apple"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Apple</span>
            <span
              className="text-xs text-[#46C0A2] bg-[#E8F8F5] px-3 py-1 rounded-full"
              >Tech</span
            >
          </a>
          {/*  Retail  */}
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Amazon</span>
            <span
              className="text-xs text-[#0B2A77] bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          {/*  Auto  */}
          <a
            href="https://www.honda.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="auto"
            data-name="honda"
          >
            <img
              src="/assets/honda-11.svg"
              alt="Honda"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Honda</span>
            <span
              className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
              >Auto</span
            >
          </a>
          {/*  More brands repeating pattern  */}
          <a
            href="https://www.fila.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="fila"
          >
            <img
              src="/assets/Fila_logo.svg"
              alt="Fila"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Fila</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Puma</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.apple.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="tech"
            data-name="apple"
          >
            <img
              src="/assets/apple-11.svg"
              alt="Apple"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Apple</span>
            <span
              className="text-xs text-[#46C0A2] bg-[#E8F8F5] px-3 py-1 rounded-full"
              >Tech</span
            >
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Amazon</span>
            <span
              className="text-xs text-[#0B2A77] bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Adidas</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.chanel.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="chanel"
          >
            <img
              src="/assets/chanel-2.svg"
              alt="Chanel"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Chanel</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.honda.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="auto"
            data-name="honda"
          >
            <img
              src="/assets/honda-11.svg"
              alt="Honda"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Honda</span>
            <span
              className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
              >Auto</span
            >
          </a>
          <a
            href="https://www.fila.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="fila"
          >
            <img
              src="/assets/Fila_logo.svg"
              alt="Fila"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Fila</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Puma</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Amazon</span>
            <span
              className="text-xs text-[#0B2A77] bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Adidas</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.apple.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="tech"
            data-name="apple"
          >
            <img
              src="/assets/apple-11.svg"
              alt="Apple"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Apple</span>
            <span
              className="text-xs text-[#46C0A2] bg-[#E8F8F5] px-3 py-1 rounded-full"
              >Tech</span
            >
          </a>
          <a
            href="https://www.chanel.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="chanel"
          >
            <img
              src="/assets/chanel-2.svg"
              alt="Chanel"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Chanel</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.honda.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="auto"
            data-name="honda"
          >
            <img
              src="/assets/honda-11.svg"
              alt="Honda"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Honda</span>
            <span
              className="text-xs text-orange-600 bg-orange-50 px-3 py-1 rounded-full"
              >Auto</span
            >
          </a>
          <a
            href="https://us.puma.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="puma"
          >
            <img
              src="/assets/puma-logo.svg"
              alt="Puma"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Puma</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
          <a
            href="https://www.amazon.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="retail"
            data-name="amazon"
          >
            <img
              src="/assets/logo-amazon.svg"
              alt="Amazon"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Amazon</span>
            <span
              className="text-xs text-[#0B2A77] bg-blue-50 px-3 py-1 rounded-full"
              >Retail</span
            >
          </a>
          <a
            href="https://www.adidas.com/"
            target="_blank"
            className="brand-card bg-white border-2 border-[#EAEAEA] rounded-2xl p-5 flex flex-col items-center gap-3 shadow-sm"
            data-cat="fashion"
            data-name="adidas"
          >
            <img
              src="/assets/adidas.svg"
              alt="Adidas"
              className="h-14 object-contain"
            />
            <span className="font-semibold text-[#333] text-sm">Adidas</span>
            <span
              className="text-xs text-[#6DA015] bg-[#F1F6F2] px-3 py-1 rounded-full"
              >Fashion</span
            >
          </a>
        </div>

        {/*  Empty state  */}
        <div id="noResults" className="hidden text-center py-16">
          <div
            className="w-20 h-20 bg-[#F1F6F2] rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <i className="fas fa-search text-[#6DA015] text-3xl"></i>
          </div>
          <h3 className="font-bold text-xl text-[#333] mb-2">No Brands Found</h3>
          <p className="text-[#606060]">
            Try a different search or category filter.
          </p>
        </div>
      </div>
    </section>

    {/*  CTA  */}
    <section className="py-12 px-4 bg-white">
      <div className="container">
        <div
          className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-3xl p-8 md:p-12 text-center reveal"
        >
          <h3 className="font-bold text-white text-2xl md:text-3xl mb-3">
            Don't see your brand?
          </h3>
          <p className="text-white/90 mb-6">
            We can ship from any US website! Contact us and we'll help you shop.
          </p>
          <a href="/contact"
            ><button
              className="bg-white text-[#6DA015] font-bold px-10 py-3.5 rounded-full hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Contact Us
            </button></a
          >
        </div>
      </div>
    </section>

    {/*  FOOTER  */}
    <footer className="bg-[#0B2A77] py-16">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10"
        >
          <div>
            <img src="/assets/logo.png" alt="Logo" className="w-[120px] mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Shop from USA, receive in Bangladesh.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-facebook-f text-white text-xs"></i
              ></a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-instagram text-white text-xs"></i
              ></a>
              <a
                href="https://wa.me/8801715825331"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-whatsapp text-white text-xs"></i
              ></a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Quick Links</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="/rates"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Rates</a
                >
              </li>
              <li>
                <a
                  href="/tracking"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Track Shipment</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Support</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/contact"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Contact Us</a
                >
              </li>
              <li>
                <a
                  href="/cost-calculator"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Cost Calculator</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >FAQ</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Newsletter</h6>
            <div className="bg-white rounded-full flex items-center px-3 py-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-gray-600 focus:outline-none pl-2 text-sm py-2"
              />
              <button
                className="subscribe-btn bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white text-sm px-4 py-2 rounded-full"
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-white/60 text-sm">
            © Swift Express Cargo 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

    
    
  
    </>
  );
}
