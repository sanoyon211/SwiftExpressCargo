"use client";
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <>


{/*  Preloader  */}
<div id="preloader">
  <div className="flex flex-col items-center gap-4">
    <div className="spinner"></div>
    <p className="text-[#6DA015] font-semibold text-sm">Loading...</p>
  </div>
</div>

{/*  Progress Bar  */}
<div id="progress-bar"></div>

{/*  Back to Top  */}
<button id="backToTop" title="Back to top"><i className="fas fa-arrow-up text-sm"></i></button>

{/*  Toast  */}
<div className="toast"></div>

{/*  ===== HERO HEADER =====  */}
<header id="heroHeader"
  style={{ 'backgroundImage': 'url("/assets/boat.png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'transition': 'background-image 0.8s ease' }}
  className="relative h-auto w-full min-h-[600px] md:min-h-[750px]">

  {/*  Mobile Nav  */}
  <div className="md:hidden py-4 px-6 bg-transparent-black backdrop-blur-lg flex flex-row justify-between items-center">
    <img src="/assets/logo.png" alt="Swift Express Cargo" className="cursor-pointer w-[101px] h-[53px] object-cover" />
    <button id="menubtn" className="text-white text-2xl w-10 h-10 flex items-center justify-center transition-transform duration-300">
      <i className="fa-solid fa-bars"></i>
    </button>
  </div>

  {/*  Desktop Nav  */}
  <div className="bg-transparent-black backdrop-blur-lg hidden md:flex justify-center sticky top-0 z-50">
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
                className="text-[#46C0A2] font-medium"
                >Home</a
              >
            </li>
            <li>
              <a href="/services" className="text-white font-medium hover:text-[#6DA015] transition-colors"
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

  {/*  Mobile Menu  */}
  <nav className="hidden absolute z-50 right-0 top-[72px] w-full md:hidden" id="mobileMenu">
    <div className="mx-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
      <ul className="flex flex-col gap-4 mb-6">
        <li><a href="/" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-home w-5 text-[#6DA015]"></i>Home</a></li>
        <li><a href="/services" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i>Services</a></li>
        <li><a href="/about" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-info-circle w-5 text-[#6DA015]"></i>About Us</a></li>
        <li><a href="/rates" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-tags w-5 text-[#6DA015]"></i>Rates</a></li>
        <li><a href="/cost-calculator" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-calculator w-5 text-[#6DA015]"></i>Cost Calculator</a></li>
        <li><a href="/tracking" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2 border-b border-gray-100"><i className="fas fa-search-location w-5 text-[#6DA015]"></i>Track Shipment</a></li>
        <li><a href="/contact" className="flex items-center gap-3 text-[#333] font-medium hover:text-[#6DA015] transition-colors py-2"><i className="fas fa-envelope w-5 text-[#6DA015]"></i>Contact</a></li>
      </ul>
      <div className="flex gap-3">
        <a href="./signin_up/login.html" className="flex-1">
          <button className="btn-primary w-full" style={{ 'fontSize': '14px', 'padding': '10px 16px' }}>Sign In</button>
        </a>
        <a href="./signin_up/sign_up.html" className="flex-1">
          <button className="btn-outline w-full" style={{ 'fontSize': '14px', 'padding': '10px 16px' }}>Sign Up</button>
        </a>
      </div>
    </div>
  </nav>

  {/*  Hero Content  */}
  <div className="flex justify-center h-auto">
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto pt-20 md:pt-32 px-6 pb-16">
      <div className="hero-text">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/30">
          🚀 Fast & Reliable Shipping Worldwide
        </span>
      </div>
      <h1 className="hero-text font-bold text-[40px] md:text-[68px] leading-[110%] text-white text-center mb-6">
        Welcome to <span className="text-[#46C0A2]">Swift Express</span> Cargo
      </h1>
      <p className="hero-text-delay text-[18px] md:text-[20px] font-light text-white/90 text-center mb-8 max-w-lg">
        Your trusted partner for USA to Bangladesh shipping. Fast, secure, and affordable cargo solutions.
      </p>

      {/*  Tracking Bar  */}
      <div className="hero-text-delay2 w-full max-w-md">
        <div className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-full p-2 flex items-center gap-2 shadow-2xl">
          <div className="flex-1 flex items-center gap-3 pl-3">
            <i className="fas fa-search text-white/70 text-sm"></i>
            <input type="text" id="trackingInput"
              className="bg-transparent text-white placeholder-white/60 focus:outline-none text-sm w-full font-light"
              placeholder="Enter tracking number..." />
          </div>
          <a href="/tracking">
            <button className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap">
              Track Now
            </button>
          </a>
        </div>
        <p className="text-white/60 text-xs text-center mt-3">e.g. SEC-2025-001234</p>
      </div>

      {/*  Slider Dots  */}
      <div className="flex gap-2 mt-16">
        <div className="slider-dot h-[10px] w-[40px] bg-[#6DA015] rounded-full cursor-pointer transition-all duration-300"></div>
        <div className="slider-dot h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full cursor-pointer hover:bg-[#6DA015]/70 transition-all duration-300"></div>
        <div className="slider-dot h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full cursor-pointer hover:bg-[#6DA015]/70 transition-all duration-300"></div>
      </div>
    </div>
  </div>

  {/*  Slider Arrows (Desktop)  */}
  <div className="hidden md:block">
    <button id="leftbtn1" className="absolute left-[40px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
      <i className="fas fa-chevron-left text-white text-sm group-hover:scale-110 transition-transform"></i>
    </button>
    <button id="rightbtn1" className="absolute right-[40px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
      <i className="fas fa-chevron-right text-white text-sm group-hover:scale-110 transition-transform"></i>
    </button>
  </div>

  {/*  Mobile Arrows  */}
  <div className="md:hidden">
    <button id="leftArrow" className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
      <i className="fas fa-chevron-left text-white text-xs"></i>
    </button>
    <button id="rightArrow" className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
      <i className="fas fa-chevron-right text-white text-xs"></i>
    </button>
  </div>

  {/*  WhatsApp  */}
  <a href="https://wa.me/8801715825331" target="_blank" rel="noopener noreferrer"
    className="absolute right-5 bottom-5 md:right-[40px] md:bottom-[40px] whatsapp-btn">
    <div className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] h-[52px] w-[52px] md:h-[60px] md:w-[60px] rounded-full flex justify-center items-center shadow-lg pulse-green">
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </div>
  </a>
</header>

{/*  ===== STATS SECTION =====  */}
<section className="bg-white py-10 border-b border-gray-100">
  <div className="container">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center stagger reveal">
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-full flex items-center justify-center mb-2">
          <i className="fas fa-box text-[#6DA015] text-xl"></i>
        </div>
        <div className="text-3xl font-bold gradient-text" data-target="50000" data-suffix="+">0</div>
        <div className="text-[#606060] text-sm">Packages Delivered</div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-full flex items-center justify-center mb-2">
          <i className="fas fa-users text-[#6DA015] text-xl"></i>
        </div>
        <div className="text-3xl font-bold gradient-text" data-target="15000" data-suffix="+">0</div>
        <div className="text-[#606060] text-sm">Happy Customers</div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-full flex items-center justify-center mb-2">
          <i className="fas fa-globe text-[#6DA015] text-xl"></i>
        </div>
        <div className="text-3xl font-bold gradient-text" data-target="25" data-suffix="+">0</div>
        <div className="text-[#606060] text-sm">Countries Served</div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <div className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-full flex items-center justify-center mb-2">
          <i className="fas fa-star text-[#6DA015] text-xl"></i>
        </div>
        <div className="text-3xl font-bold gradient-text" data-target="98" data-suffix="%">0</div>
        <div className="text-[#606060] text-sm">Satisfaction Rate</div>
      </div>
    </div>
  </div>
</section>

{/*  ===== POPULAR BRANDS =====  */}
<section className="py-16 bg-white">
  <div className="container">
    <div className="flex justify-between items-center mb-10 reveal">
      <div>
        <div className="section-divider mb-3" style={{ 'margin': '0 0 12px 0' }}></div>
        <h2 className="font-bold text-2xl md:text-[36px] text-[#333333]">Popular Brands</h2>
        <p className="text-[#606060] mt-2">Shop from top US brands and we'll ship it to you</p>
      </div>
      <a href="/shop">
        <button className="btn-primary text-sm px-5 py-2.5">All Brands</button>
      </a>
    </div>

    <div className="grid grid-cols-3 md:grid-cols-7 gap-4 stagger reveal">
      {/*  Fila  */}
      <a href="https://www.fila.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/Fila_logo.svg" alt="Fila" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Fila</span>
      </a>
      {/*  Puma  */}
      <a href="https://us.puma.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/puma-logo.svg" alt="Puma" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Puma</span>
      </a>
      {/*  Chanel  */}
      <a href="https://www.chanel.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/chanel-2.svg" alt="Chanel" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Chanel</span>
      </a>
      {/*  Honda  */}
      <a href="https://www.honda.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/honda-11.svg" alt="Honda" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Honda</span>
      </a>
      {/*  Apple  */}
      <a href="https://www.apple.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/apple-11.svg" alt="Apple" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Apple</span>
      </a>
      {/*  Amazon  */}
      <a href="https://www.amazon.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/logo-amazon.svg" alt="Amazon" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Amazon</span>
      </a>
      {/*  Adidas  */}
      <a href="https://www.adidas.com/" target="_blank" className="card-hover border border-[#EAEAEA] rounded-xl p-4 flex flex-col items-center gap-2 shadow-sm hover:border-[#6DA015] hover:shadow-lg">
        <img src="/assets/adidas.svg" alt="Adidas" className="h-14 object-contain" />
        <span className="text-[#606060] text-sm font-medium">Adidas</span>
      </a>
    </div>
  </div>
</section>

{/*  ===== WHY CHOOSE US =====  */}
<section className="py-16 bg-[#F9FAFC]">
  <div className="container">
    <div className="text-center mb-12 reveal">
      <div className="section-divider"></div>
      <h3 className="font-bold text-2xl md:text-[36px] text-[#333333] mt-4">Why Choose Us</h3>
      <p className="text-[#606060] text-lg mt-3 max-w-lg mx-auto">We provide the best shipping experience with top-notch service and reliability</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger reveal">
      <div className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center">
          <i className="fas fa-box-open text-[#6DA015] text-2xl"></i>
        </div>
        <h4 className="font-semibold text-lg text-[#333]">Package Consolidation</h4>
        <p className="text-[#606060] text-sm leading-relaxed">Combine multiple packages into one shipment to save on shipping costs.</p>
      </div>
      <div className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center">
          <i className="fas fa-shield-alt text-[#6DA015] text-2xl"></i>
        </div>
        <h4 className="font-semibold text-lg text-[#333]">Security & Reliability</h4>
        <p className="text-[#606060] text-sm leading-relaxed">Your packages are insured and handled with utmost care and security.</p>
      </div>
      <div className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center">
          <i className="fas fa-map-marker-alt text-[#6DA015] text-2xl"></i>
        </div>
        <h4 className="font-semibold text-lg text-[#333]">Real-time Tracking</h4>
        <p className="text-[#606060] text-sm leading-relaxed">Track your shipment at every step from pickup to final delivery.</p>
      </div>
      <div className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm">
        <div className="w-16 h-16 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center">
          <i className="fas fa-headset text-[#6DA015] text-2xl"></i>
        </div>
        <h4 className="font-semibold text-lg text-[#333]">24/7 Support</h4>
        <p className="text-[#606060] text-sm leading-relaxed">Our dedicated team is always available to help you around the clock.</p>
      </div>
    </div>
  </div>
</section>

{/*  ===== HOW IT WORKS =====  */}
<section className="py-16 bg-white">
  <div className="container">
    <div className="text-center mb-12 reveal">
      <div className="section-divider"></div>
      <h3 className="font-bold text-2xl md:text-[36px] text-[#333333] mt-4">How It Works</h3>
      <p className="text-[#606060] text-lg mt-3">Simple steps to get your packages delivered</p>
    </div>
    <div className="relative">
      {/*  Connection line (desktop)  */}
      <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] z-0"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger reveal relative z-10">
        {/*  Step 1  */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">1</span>
          </div>
          <h4 className="font-bold text-lg text-[#333]">Free Sign Up</h4>
          <p className="text-[#606060] text-sm">Create your free account and get a unique US address instantly.</p>
        </div>
        {/*  Step 2  */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">2</span>
          </div>
          <h4 className="font-bold text-lg text-[#333]">Shop Online</h4>
          <p className="text-[#606060] text-sm">Shop from any US store using your Swift Express US address.</p>
        </div>
        {/*  Step 3  */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">3</span>
          </div>
          <h4 className="font-bold text-lg text-[#333]">We Ship It</h4>
          <p className="text-[#606060] text-sm">We receive, process and ship your package to Bangladesh.</p>
        </div>
        {/*  Step 4  */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">4</span>
          </div>
          <h4 className="font-bold text-lg text-[#333]">Receive Package</h4>
          <p className="text-[#606060] text-sm">Get your package delivered right to your doorstep.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ===== QUICK TRACK SECTION =====  */}
<section className="py-16 bg-[#F9FAFC]">
  <div className="container">
    <div className="bg-gradient-to-r from-[#0B2A77] to-[#1a3d8c] rounded-3xl p-8 md:p-16 reveal">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <div className="section-divider mb-4" style={{ 'margin': '0 0 16px 0', 'background': 'linear-gradient(135deg,#6DA015,#46C0A2)' }}></div>
          <h3 className="font-bold text-2xl md:text-4xl mb-4">Track Your Shipment</h3>
          <p className="text-white/80 text-lg mb-2">Get real-time updates on your package location and estimated delivery date.</p>
          <ul className="mt-6 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-white/90"><i className="fas fa-check-circle text-[#46C0A2]"></i> Live location tracking</li>
            <li className="flex items-center gap-3 text-white/90"><i className="fas fa-check-circle text-[#46C0A2]"></i> SMS & email notifications</li>
            <li className="flex items-center gap-3 text-white/90"><i className="fas fa-check-circle text-[#46C0A2]"></i> Delivery history</li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="mb-4">
            <label className="text-white font-medium block mb-2">Enter Tracking Number</label>
            <div className="flex gap-3">
              <input type="text" id="trackInput2" placeholder="e.g. SEC-2025-001234"
                className="flex-1 bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl px-4 py-3 focus:outline-none focus:border-[#46C0A2] text-sm" />
              <a href="/tracking">
                <button className="btn-primary px-5 py-3 whitespace-nowrap">
                  <i className="fas fa-search mr-2"></i>Track
                </button>
              </a>
            </div>
          </div>
          <a href="/tracking" className="text-[#46C0A2] hover:text-white text-sm transition-colors flex items-center gap-2">
            <i className="fas fa-arrow-right"></i> View full tracking page
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ===== FAQ =====  */}
<section className="py-16 bg-white">
  <div className="container">
    <div className="text-center mb-12 reveal">
      <div className="section-divider"></div>
      <h3 className="font-bold text-2xl md:text-[36px] text-[#333333] mt-4">Frequently Asked Questions</h3>
      <p className="text-[#606060] text-lg mt-3">Find answers to common questions about our services</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto stagger reveal">
      {/*  FAQ 1  */}
      <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
        <input type="checkbox" id="faq1" className="hidden" />
        <label htmlFor="faq1" className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#F9FAFC] transition-colors">
          <span className="font-semibold text-[#333] pr-4">How long does shipping take?</span>
          <span className="button w-9 h-9 min-w-9 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative">
            <span className="plus absolute"><i className="fas fa-plus text-[#6DA015] text-xs"></i></span>
            <span className="minus hidden absolute"><i className="fas fa-minus text-white text-xs"></i></span>
          </span>
        </label>
        <div className="content max-h-0 overflow-hidden transition-all duration-400">
          <p className="px-6 pb-6 text-[#606060] text-sm leading-relaxed">Standard shipping from USA to Bangladesh takes 7-14 business days. Express shipping takes 3-5 business days. We also offer economy shipping which takes 14-21 business days at reduced rates.</p>
        </div>
      </div>
      {/*  FAQ 2  */}
      <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
        <input type="checkbox" id="faq2" className="hidden" />
        <label htmlFor="faq2" className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#F9FAFC] transition-colors">
          <span className="font-semibold text-[#333] pr-4">What items are restricted?</span>
          <span className="button w-9 h-9 min-w-9 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative">
            <span className="plus absolute"><i className="fas fa-plus text-[#6DA015] text-xs"></i></span>
            <span className="minus hidden absolute"><i className="fas fa-minus text-white text-xs"></i></span>
          </span>
        </label>
        <div className="content max-h-0 overflow-hidden transition-all duration-400">
          <p className="px-6 pb-6 text-[#606060] text-sm leading-relaxed">Restricted items include hazardous materials, flammable liquids, batteries over a certain size, firearms, and perishable goods. Please check our full restricted items list before placing your order.</p>
        </div>
      </div>
      {/*  FAQ 3  */}
      <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
        <input type="checkbox" id="faq3" className="hidden" />
        <label htmlFor="faq3" className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#F9FAFC] transition-colors">
          <span className="font-semibold text-[#333] pr-4">How is the shipping cost calculated?</span>
          <span className="button w-9 h-9 min-w-9 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative">
            <span className="plus absolute"><i className="fas fa-plus text-[#6DA015] text-xs"></i></span>
            <span className="minus hidden absolute"><i className="fas fa-minus text-white text-xs"></i></span>
          </span>
        </label>
        <div className="content max-h-0 overflow-hidden transition-all duration-400">
          <p className="px-6 pb-6 text-[#606060] text-sm leading-relaxed">Shipping cost is based on the weight and dimensions of your package. Use our cost calculator to get an instant estimate. Consolidating multiple packages can save you up to 40% on shipping costs.</p>
        </div>
      </div>
      {/*  FAQ 4  */}
      <div className="border border-[#DCE8C6] rounded-2xl overflow-hidden">
        <input type="checkbox" id="faq4" className="hidden" />
        <label htmlFor="faq4" className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#F9FAFC] transition-colors">
          <span className="font-semibold text-[#333] pr-4">Is there a weight limit per package?</span>
          <span className="button w-9 h-9 min-w-9 rounded-lg flex items-center justify-center bg-[#E1F0E7] transition-all duration-300 relative">
            <span className="plus absolute"><i className="fas fa-plus text-[#6DA015] text-xs"></i></span>
            <span className="minus hidden absolute"><i className="fas fa-minus text-white text-xs"></i></span>
          </span>
        </label>
        <div className="content max-h-0 overflow-hidden transition-all duration-400">
          <p className="px-6 pb-6 text-[#606060] text-sm leading-relaxed">Individual packages can weigh up to 70 lbs (32 kg). For heavier items, we offer freight shipping services. Contact us for special arrangements for oversized or heavy cargo.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ===== BLOG =====  */}
<section className="py-16 bg-[#F9FAFC]">
  <div className="container">
    <div className="flex justify-between items-start mb-10 reveal">
      <div>
        <div className="section-divider mb-3" style={{ 'margin': '0 0 12px 0' }}></div>
        <h2 className="font-bold text-2xl md:text-[36px] text-[#333333]">Our Blog</h2>
        <p className="text-[#606060] mt-2">Tips, guides and shipping news</p>
      </div>
      <a href="/blog"><button className="btn-primary text-sm px-5 py-2.5">View All</button></a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
      <article className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2041.png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Shipping Tips</span>
          <h3 className="font-bold text-lg text-[#333] mb-2">How to Package Your Items for International Shipping</h3>
          <p className="text-[#606060] text-sm leading-relaxed mb-4">Learn the best practices for packaging your items to ensure they arrive safely.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
      <article className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2042 (2).png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Savings Guide</span>
          <h3 className="font-bold text-lg text-[#333] mb-2">Top 5 Ways to Save on Shipping Costs from USA</h3>
          <p className="text-[#606060] text-sm leading-relaxed mb-4">Discover smart strategies to reduce your international shipping expenses significantly.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
      <article className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2042 (3).png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Guide</span>
          <h3 className="font-bold text-lg text-[#333] mb-2">Understanding Customs & Duties for Bangladesh</h3>
          <p className="text-[#606060] text-sm leading-relaxed mb-4">A complete guide to navigating customs procedures for your international shipments.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
    </div>
  </div>
</section>

{/*  ===== CUSTOMER FEEDBACK =====  */}
<section className="py-16 bg-white">
  <div className="container">
    <div className="text-center mb-12 reveal">
      <div className="section-divider"></div>
      <h2 className="font-bold text-2xl md:text-[36px] text-[#333333] mt-4">Customer Reviews</h2>
      <p className="text-[#606060] text-lg mt-3">What our customers say about us</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
      <div className="card-hover bg-white border border-[#DCE8C6] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <img src="/assets/ronald.png" alt="Ronald" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-[#333]">Ronald Richards</h4>
            <div className="flex gap-1 mt-1">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
            </div>
          </div>
        </div>
        <p className="text-[#606060] text-sm leading-relaxed">"Excellent service! My package arrived in perfect condition and right on time. The tracking system is very accurate. Highly recommended!"</p>
      </div>
      <div className="card-hover bg-white border border-[#DCE8C6] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <img src="/assets/lady.png" alt="Floyd" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-[#333]">Floyd Miles</h4>
            <div className="flex gap-1 mt-1">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
            </div>
          </div>
        </div>
        <p className="text-[#606060] text-sm leading-relaxed">"I've been using Swift Express for 2 years now. The customer service is amazing and the prices are very competitive. Won't use anyone else!"</p>
      </div>
      <div className="card-hover bg-white border border-[#DCE8C6] rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <img src="/assets/savanna.png" alt="Savannah" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h4 className="font-semibold text-[#333]">Savannah Nguyen</h4>
            <div className="flex gap-1 mt-1">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
            </div>
          </div>
        </div>
        <p className="text-[#606060] text-sm leading-relaxed">"Package consolidation saved me so much money! The interface is easy to use and their team is always helpful. Great experience overall!"</p>
      </div>
    </div>
  </div>
</section>

{/*  ===== CTA BANNER =====  */}
<section className="py-16 px-4">
  <div className="container">
    <div className="relative bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-[40px] md:rounded-[60px] px-8 md:px-16 py-14 md:py-20 overflow-hidden text-center reveal">
      {/*  Decorative circles  */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-white/10 rounded-full"></div>
      <div className="relative z-10">
        <h2 className="font-bold text-white text-3xl md:text-5xl mb-6">Hassle-Free Shipping, Every Time</h2>
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers shipping from USA to Bangladesh with Swift Express Cargo. Sign up for free today!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="./signin_up/sign_up.html">
            <button className="bg-[#0B2A77] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#0d337a] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Sign Up For Free
            </button>
          </a>
          <a href="/contact">
            <button className="bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-full border border-white/40 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ===== FOOTER =====  */}
<footer className="w-full bg-[#0B2A77] py-16">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
      {/*  Logo + About  */}
      <div className="md:col-span-1">
        <img src="/assets/logo.png" alt="Swift Express Cargo" className="w-[120px] mb-4" />
        <p className="text-white/70 text-sm leading-relaxed mb-6">Your trusted partner for USA to Bangladesh shipping. Fast, secure, and affordable cargo solutions since 2020.</p>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/" target="_blank" className="w-10 h-10 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-facebook-f text-white text-sm"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="w-10 h-10 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-instagram text-white text-sm"></i>
          </a>
          <a href="https://x.com/" target="_blank" className="w-10 h-10 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-x-twitter text-white text-sm"></i>
          </a>
          <a href="https://wa.me/8801715825331" target="_blank" className="w-10 h-10 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <i className="fab fa-whatsapp text-white text-sm"></i>
          </a>
        </div>
      </div>
      {/*  Quick Links  */}
      <div>
        <h6 className="font-bold text-[#6DA015] text-base mb-5">Quick Links</h6>
        <ul className="flex flex-col gap-3">
          <li><a href="/" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Home</a></li>
          <li><a href="/services" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Services</a></li>
          <li><a href="/about" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>About Us</a></li>
          <li><a href="/rates" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Rates</a></li>
          <li><a href="/tracking" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Track Shipment</a></li>
        </ul>
      </div>
      {/*  Support  */}
      <div>
        <h6 className="font-bold text-[#6DA015] text-base mb-5">Support</h6>
        <ul className="flex flex-col gap-3">
          <li><a href="/contact" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Contact Us</a></li>
          <li><a href="#" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>FAQ</a></li>
          <li><a href="#" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Restricted Items</a></li>
          <li><a href="#" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Privacy Policy</a></li>
          <li><a href="#" className="text-white/70 hover:text-[#46C0A2] transition-colors text-sm flex items-center gap-2"><i className="fas fa-chevron-right text-xs text-[#6DA015]"></i>Terms & Conditions</a></li>
        </ul>
      </div>
      {/*  Newsletter  */}
      <div>
        <h6 className="font-bold text-[#6DA015] text-base mb-5">Newsletter</h6>
        <p className="text-white/70 text-sm mb-4">Get the latest updates and offers directly in your inbox.</p>
        <div className="bg-white rounded-full flex items-center justify-between px-3 py-1 mb-4">
          <input type="email" placeholder="Your email address" className="flex-1 bg-transparent text-gray-600 focus:outline-none pl-2 text-sm py-2" />
          <button className="subscribe-btn bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white text-sm font-medium px-4 py-2 rounded-full hover:shadow-md transition-all">
            Subscribe
          </button>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-xs">
          <i className="fas fa-lock text-[#46C0A2]"></i>
          <span>No spam. Unsubscribe anytime.</span>
        </div>
      </div>
    </div>
    {/*  Footer Bottom  */}
    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-white/60 text-sm">© Swift Express Cargo 2025. All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">Privacy Policy</a>
        <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">Terms of Service</a>
        <a href="#" className="text-white/60 hover:text-white text-xs transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>




    </>
  );
}
