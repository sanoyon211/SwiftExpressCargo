"use client";
import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image (1).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
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
              <a href="/services" className="text-[#46C0A2] font-medium"
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
                className="text-[#6DA015] font-semibold py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i
                >Services</a
              >
            </li>
            <li>
              <a
                href="/about"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-info-circle w-5 text-[#6DA015]"></i>About
                Us</a
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
          <div className="flex gap-3">
            <a href="./signin_up/login.html" className="flex-1"
              ><button className="btn-primary w-full text-sm py-2.5">
                Sign In
              </button></a
            >
            <a href="./signin_up/sign_up.html" className="flex-1"
              ><button className="btn-outline w-full text-sm py-2.5">
                Sign Up
              </button></a
            >
          </div>
        </div>
      </nav>

      <div
        className="flex justify-center py-20 md:py-32 px-4 text-center hero-text"
      >
        <div>
          <span
            className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
            >🚀 Fast & Reliable Shipping</span
          >
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Our Services
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Comprehensive shipping solutions for all your needs
          </p>
          <div className="max-w-md mx-auto">
            <div
              className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-full p-2 flex items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-3 pl-3">
                <i className="fas fa-search text-white/70 text-sm"></i>
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="bg-transparent text-white placeholder-white/60 focus:outline-none text-sm w-full"
                />
              </div>
              <a href="/tracking"
                ><button className="btn-primary text-sm px-5 py-2.5">
                  Track Now
                </button></a
              >
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-10">
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

    {/*  SHIPPING SERVICES  */}
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Our Shipping Services
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            Choose the shipping option that best fits your needs and budget
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
          {/*  US Shipping  */}
          <div
            className="card-hover bg-white rounded-3xl border-2 border-[#6DA015]/30 p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:border-[#6DA015]"
          >
            <div
              className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i className="fas fa-flag-usa text-white text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#333] mb-2">USA Shipping</h3>
              <p className="text-[#6DA015] font-medium mb-3">From $10/lb</p>
              <p className="text-[#606060] text-sm leading-relaxed">
                Ship directly from any US store to Bangladesh. Get a free US
                address and use it to shop from Amazon, Walmart, and 1000s more.
              </p>
            </div>
            <ul className="text-left w-full flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>Free US
                mailing address
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>Package
                consolidation
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>7-14 day
                delivery
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>Full package
                insurance
              </li>
            </ul>
            <a href="./signin_up/sign_up.html" className="w-full"
              ><button className="btn-primary w-full py-3">
                Get Started Free
              </button></a
            >
          </div>
          {/*  Local Shipping  */}
          <div
            className="card-hover bg-gradient-to-b from-[#6DA015] to-[#46C0A2] rounded-3xl p-8 flex flex-col items-center text-center gap-5 shadow-xl scale-105 relative"
          >
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#6DA015] font-bold text-xs px-5 py-2 rounded-full shadow"
            >
              Most Popular
            </div>
            <div
              className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i className="fas fa-truck text-white text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-white mb-2">Local Delivery</h3>
              <p className="text-white/80 font-medium mb-3">Free in Dhaka</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Door-to-door delivery throughout Bangladesh. Once your package
                clears customs, we deliver it right to your home or office.
              </p>
            </div>
            <ul className="text-left w-full flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-white/90">
                <i className="fas fa-check text-white text-xs"></i>Free delivery in
                Dhaka
              </li>
              <li className="flex items-center gap-2 text-sm text-white/90">
                <i className="fas fa-check text-white text-xs"></i>All 64 districts
                covered
              </li>
              <li className="flex items-center gap-2 text-sm text-white/90">
                <i className="fas fa-check text-white text-xs"></i>Same-day dispatch
              </li>
              <li className="flex items-center gap-2 text-sm text-white/90">
                <i className="fas fa-check text-white text-xs"></i>SMS delivery
                alerts
              </li>
            </ul>
            <a href="./signin_up/sign_up.html" className="w-full"
              ><button
                className="bg-white text-[#6DA015] font-bold w-full py-3 rounded-full hover:bg-white/90 transition"
              >
                Get Started Free
              </button></a
            >
          </div>
          {/*  Regional Shipping  */}
          <div
            className="card-hover bg-white rounded-3xl border-2 border-[#6DA015]/30 p-8 flex flex-col items-center text-center gap-5 shadow-sm hover:border-[#6DA015]"
          >
            <div
              className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg"
            >
              <i className="fas fa-globe text-white text-3xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-2xl text-[#333] mb-2">
                Regional Shipping
              </h3>
              <p className="text-[#6DA015] font-medium mb-3">From $8/kg</p>
              <p className="text-[#606060] text-sm leading-relaxed">
                Ship to other South Asian countries including India, Pakistan,
                Nepal, and Sri Lanka. Competitive rates for regional
                destinations.
              </p>
            </div>
            <ul className="text-left w-full flex flex-col gap-2">
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>10+ countries
                covered
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>Customs
                assistance
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>5-10 day
                delivery
              </li>
              <li className="flex items-center gap-2 text-sm text-[#606060]">
                <i className="fas fa-check text-[#6DA015] text-xs"></i>Live tracking
                included
              </li>
            </ul>
            <a href="./signin_up/sign_up.html" className="w-full"
              ><button className="btn-primary w-full py-3">
                Get Started Free
              </button></a
            >
          </div>
        </div>
      </div>
    </section>

    {/*  ADDITIONAL SERVICES  */}
    <section className="py-16 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Additional Services
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            Extra services to enhance your shipping experience
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger reveal"
        >
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-boxes text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Package Consolidation</h4>
              <p className="text-[#606060] text-sm">
                Combine multiple packages into one and save significantly on
                shipping.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-shield-alt text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Package Insurance</h4>
              <p className="text-[#606060] text-sm">
                Protect your valuable items with our comprehensive insurance
                coverage.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-camera text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Package Photography</h4>
              <p className="text-[#606060] text-sm">
                Get photos of your package taken before it ships for
                verification.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-undo text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Return Service</h4>
              <p className="text-[#606060] text-sm">
                Need to return an item? We handle returns back to US retailers
                easily.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-search-dollar text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Personal Shopper</h4>
              <p className="text-[#606060] text-sm">
                Can't buy from a US store? We'll shop and ship on your behalf.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl p-6 border border-[#DCE8C6] flex gap-4 items-start"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015]/20 to-[#46C0A2]/20 rounded-xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-passport text-[#6DA015] text-lg"></i>
            </div>
            <div>
              <h4 className="font-bold text-[#333] mb-1">Customs Clearance</h4>
              <p className="text-[#606060] text-sm">
                We handle all customs documentation and duties for a smooth
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  HOW IT WORKS  */}
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            How It Works
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            Simple steps to start shipping today
          </p>
        </div>
        <div className="flex flex-col gap-6 max-w-3xl mx-auto stagger reveal">
          <div
            className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-[#DCE8C6]"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#333] mb-1">Free Sign Up</h3>
              <p className="text-[#606060]">
                Create your account in minutes and get a unique US mailing
                address instantly at no charge.
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-[#DCE8C6]"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#333] mb-1">Shop Online</h3>
              <p className="text-[#606060]">
                Use your Swift Express US address when checking out from any US
                online store — Amazon, Walmart, eBay, and thousands more.
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-[#DCE8C6]"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#333] mb-1">
                We Process & Ship
              </h3>
              <p className="text-[#606060]">
                We receive your packages, photograph them, consolidate if
                needed, and ship them via the fastest route to Bangladesh.
              </p>
            </div>
          </div>
          <div
            className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-[#DCE8C6]"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            >
              <span className="text-white font-bold text-xl">4</span>
            </div>
            <div>
              <h3 className="font-bold text-xl text-[#333] mb-1">
                Receive at Your Door
              </h3>
              <p className="text-[#606060]">
                Track your package in real-time and receive it delivered right
                to your home or office anywhere in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  FAQ  */}
    <section className="py-16 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto stagger reveal"
        >
          <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
            <input type="checkbox" id="faq1" className="hidden" />
            <label
              htmlFor="faq1"
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#F9FAFC] transition-colors"
            >
              <span className="font-semibold text-[#333] pr-4 text-sm"
                >How long does USA to Bangladesh shipping take?</span
              >
              <span
                className="button w-8 h-8 min-w-8 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative"
              >
                <span className="plus absolute"
                  ><i className="fas fa-plus text-[#6DA015] text-xs"></i
                ></span>
                <span className="minus hidden absolute"
                  ><i className="fas fa-minus text-white text-xs"></i
                ></span>
              </span>
            </label>
            <div className="content max-h-0 overflow-hidden">
              <p className="px-5 pb-5 text-[#606060] text-sm leading-relaxed">
                Standard shipping takes 7-14 business days. Express takes 3-5
                days. Economy takes 14-21 days at reduced rates.
              </p>
            </div>
          </div>
          <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
            <input type="checkbox" id="faq2" className="hidden" />
            <label
              htmlFor="faq2"
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#F9FAFC] transition-colors"
            >
              <span className="font-semibold text-[#333] pr-4 text-sm"
                >Is there a minimum weight or order requirement?</span
              >
              <span
                className="button w-8 h-8 min-w-8 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative"
              >
                <span className="plus absolute"
                  ><i className="fas fa-plus text-[#6DA015] text-xs"></i
                ></span>
                <span className="minus hidden absolute"
                  ><i className="fas fa-minus text-white text-xs"></i
                ></span>
              </span>
            </label>
            <div className="content max-h-0 overflow-hidden">
              <p className="px-5 pb-5 text-[#606060] text-sm leading-relaxed">
                No minimum! We ship packages of any size. Minimum billable
                weight is 0.5 lbs at $10. Consolidating helps reduce cost per
                lb.
              </p>
            </div>
          </div>
          <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
            <input type="checkbox" id="faq3" className="hidden" />
            <label
              htmlFor="faq3"
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#F9FAFC] transition-colors"
            >
              <span className="font-semibold text-[#333] pr-4 text-sm"
                >Do you handle customs and import duties?</span
              >
              <span
                className="button w-8 h-8 min-w-8 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative"
              >
                <span className="plus absolute"
                  ><i className="fas fa-plus text-[#6DA015] text-xs"></i
                ></span>
                <span className="minus hidden absolute"
                  ><i className="fas fa-minus text-white text-xs"></i
                ></span>
              </span>
            </label>
            <div className="content max-h-0 overflow-hidden">
              <p className="px-5 pb-5 text-[#606060] text-sm leading-relaxed">
                Yes! We handle all customs documentation. Import duties and
                taxes are the customer's responsibility per Bangladesh customs
                regulations.
              </p>
            </div>
          </div>
          <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
            <input type="checkbox" id="faq4" className="hidden" />
            <label
              htmlFor="faq4"
              className="flex justify-between items-center p-5 cursor-pointer hover:bg-[#F9FAFC] transition-colors"
            >
              <span className="font-semibold text-[#333] pr-4 text-sm"
                >Can I track my package in real-time?</span
              >
              <span
                className="button w-8 h-8 min-w-8 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative"
              >
                <span className="plus absolute"
                  ><i className="fas fa-plus text-[#6DA015] text-xs"></i
                ></span>
                <span className="minus hidden absolute"
                  ><i className="fas fa-minus text-white text-xs"></i
                ></span>
              </span>
            </label>
            <div className="content max-h-0 overflow-hidden">
              <p className="px-5 pb-5 text-[#606060] text-sm leading-relaxed">
                Absolutely! Every shipment gets a unique tracking ID. Use our
                tracking page for real-time updates, or get SMS/email
                notifications automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  CTA  */}
    <section className="py-16 px-4">
      <div className="container">
        <div
          className="relative bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-[40px] px-8 md:px-16 py-14 overflow-hidden text-center reveal"
        >
          <div
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
          ></div>
          <div
            className="absolute -bottom-10 -left-10 w-52 h-52 bg-white/10 rounded-full"
          ></div>
          <div className="relative z-10">
            <h2 className="font-bold text-white text-3xl md:text-4xl mb-4">
              Ready to Start Shipping?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Sign up for free and get your US address today. No monthly fees,
              no hidden charges.
            </p>
            <a href="./signin_up/sign_up.html">
              <button
                className="bg-[#0B2A77] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#0d337a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Sign Up For Free
              </button>
            </a>
          </div>
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
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted shipping partner from USA to Bangladesh.
            </p>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Services</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >USA Shipping</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Local Delivery</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Package Consolidation</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Return Service</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Company</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/about"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  href="/tracking"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Track Shipment</a
                >
              </li>
              <li>
                <a
                  href="/rates"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Rates</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Newsletter</h6>
            <div className="bg-white rounded-full flex items-center px-3 py-1 mb-4">
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
