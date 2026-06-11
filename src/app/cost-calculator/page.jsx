"use client";
import React from 'react';
import Link from 'next/link';

export default function CostCalculator() {
  return (
    <>

    {/*  Preloader  */}
    <div id="preloader"><div className="spinner"></div></div>
    {/*  Progress bar  */}
    <div id="progress-bar"></div>
    {/*  Back to top  */}
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    {/*  Toast  */}
    <div className="toast"></div>

    {/*  ===== HEADER =====  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image (8).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
      {/*  Mobile nav bar  */}
      <div
        className="md:hidden py-4 px-6 bg-black/30 backdrop-blur-lg flex justify-between items-center"
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-[101px] h-[53px] object-cover cursor-pointer"
        />
        <button
          id="menubtn"
          className="text-white text-2xl w-10 h-10 flex items-center justify-center"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/*  Desktop navbar  */}
      <div className="bg-black/30 backdrop-blur-lg hidden md:flex justify-center">
        <nav className="container flex items-center justify-between py-4 px-4">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="cursor-pointer w-[101px] h-[53px] object-cover"
          />
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
                >Services</a
              >
            </li>
            <li>
              <a
                href="/about"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/rates"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
                >Rates</a
              >
            </li>
            <li>
              <a
                href="/cost-calculator"
                className="text-[#46C0A2] font-semibold text-sm"
                >Cost Calculator</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-white font-medium text-sm hover:text-[#6DA015] transition-colors"
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
      <nav
        className="hidden absolute z-50 right-0 top-[72px] w-full md:hidden"
        id="mobileMenu"
      >
        <div className="mx-4 bg-white/95 rounded-2xl shadow-2xl p-6">
          <ul className="flex flex-col gap-3 mb-5">
            <li>
              <a
                href="/"
                className="flex items-center gap-3 text-[#333] font-medium py-2 border-b border-gray-100"
                ><i className="fas fa-home w-5 text-[#6DA015]"></i>Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="flex items-center gap-3 text-[#333] font-medium py-2 border-b border-gray-100"
                ><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i
                >Services</a
              >
            </li>
            <li>
              <a
                href="/about"
                className="flex items-center gap-3 text-[#333] font-medium py-2 border-b border-gray-100"
                ><i className="fas fa-info-circle w-5 text-[#6DA015]"></i>About
                Us</a
              >
            </li>
            <li>
              <a
                href="/rates"
                className="flex items-center gap-3 text-[#333] font-medium py-2 border-b border-gray-100"
                ><i className="fas fa-tags w-5 text-[#6DA015]"></i>Rates</a
              >
            </li>
            <li>
              <a
                href="/cost-calculator"
                className="flex items-center gap-3 text-[#6DA015] font-semibold py-2 border-b border-gray-100"
                ><i className="fas fa-calculator w-5 text-[#6DA015]"></i>Cost
                Calculator</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="flex items-center gap-3 text-[#333] font-medium py-2 border-b border-gray-100"
                ><i className="fas fa-search-location w-5 text-[#6DA015]"></i
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="flex items-center gap-3 text-[#333] font-medium py-2"
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

      {/*  Hero Text  */}
      <div className="flex justify-center px-4 py-20 md:py-32 text-center">
        <div className="hero-text">
          <span
            className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
          >
            🧮 Instant Price Estimate
          </span>
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Cost Calculator
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Get an accurate shipping estimate in seconds — no sign-up required
          </p>
          <div className="flex gap-2 justify-center">
            <div className="h-[10px] w-[40px] bg-[#6DA015] rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/*  WhatsApp  */}
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center shadow-lg pulse-green"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/*  ===== QUICK INFO STRIP =====  */}
    <div className="bg-white border-b border-[#DCE8C6] py-4 px-4">
      <div className="container">
        <div
          className="flex flex-wrap justify-center md:justify-between gap-4 text-sm text-[#606060]"
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-bolt text-[#6DA015]"></i
            ><span>Instant estimate — no sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-[#6DA015]"></i
            ><span>All packages fully insured</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-boxes text-[#6DA015]"></i
            ><span>Save up to 40% with consolidation</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-headset text-[#6DA015]"></i
            ><span>24/7 customer support</span>
          </div>
        </div>
      </div>
    </div>

    {/*  ===== MAIN CALCULATOR SECTION =====  */}
    <section className="py-14 px-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/*  ===== CALCULATOR FORM (col 7) =====  */}
          <div className="lg:col-span-7 reveal-left">
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] p-6 md:p-8"
            >
              {/*  Header  */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <i className="fas fa-calculator text-white text-lg"></i>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-[#333]">
                    Check Your Shipping Price
                  </h2>
                  <p className="text-[#606060] text-sm">
                    Fill in the details below for an instant estimate
                  </p>
                </div>
              </div>

              {/*  Product Type  */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#606060] mb-2"
                  >Product Type</label
                >
                <div className="relative">
                  <i
                    className="fas fa-tag absolute left-4 top-1/2 -translate-y-1/2 text-[#6DA015] text-sm z-10"
                  ></i>
                  <select
                    id="productType"
                    className="calc-select"
                    onchange="liveCalc()"
                  >
                    <option value="">Select product type...</option>
                    <option value="electronics">Electronics & Gadgets</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="accessories">Accessories & Jewelry</option>
                    <option value="books">Books & Media</option>
                    <option value="toys">Toys & Games</option>
                    <option value="cosmetics">Cosmetics & Beauty</option>
                    <option value="supplements">Health & Supplements</option>
                    <option value="auto">Auto Parts</option>
                    <option value="other">Other</option>
                  </select>
                  <i
                    className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] text-xs pointer-events-none"
                  ></i>
                </div>
              </div>

              {/*  Weight + Unit  */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-[#606060] mb-2"
                    >Total Weight</label
                  >
                  <div className="relative">
                    <i
                      className="fas fa-weight absolute left-4 top-1/2 -translate-y-1/2 text-[#6DA015] text-sm"
                    ></i>
                    <input
                      type="number"
                      id="weight"
                      className="calc-input"
                      placeholder="0.00"
                      min="0.1"
                      step="0.1"
                      oninput="liveCalc()"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#606060] mb-2"
                    >Unit</label
                  >
                  <div className="relative">
                    <i
                      className="fas fa-balance-scale absolute left-4 top-1/2 -translate-y-1/2 text-[#6DA015] text-sm z-10"
                    ></i>
                    <select id="unit" className="calc-select" onchange="liveCalc()">
                      <option value="lb">Pounds (lb)</option>
                      <option value="kg">Kilograms (kg)</option>
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] text-xs pointer-events-none"
                    ></i>
                  </div>
                </div>
              </div>

              {/*  Product Value  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#606060] mb-2">
                  Total Product Value in USD
                  <span className="font-normal text-[#999]"
                    >(incl. US shipping & tax)</span
                  >
                </label>
                <div className="relative">
                  <i
                    className="fas fa-dollar-sign absolute left-4 top-1/2 -translate-y-1/2 text-[#6DA015] text-sm"
                  ></i>
                  <input
                    type="number"
                    id="productValue"
                    className="calc-input"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    oninput="liveCalc()"
                  />
                </div>
                <p className="text-xs text-[#999] mt-1.5 flex items-center gap-1">
                  <i className="fas fa-info-circle text-[#46C0A2]"></i>
                  Declare the exact value — used to calculate brokerage &
                  insurance fees
                </p>
              </div>

              {/*  Shipping Speed  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#606060] mb-3"
                  >Shipping Speed</label
                >
                <div className="flex flex-col gap-3">
                  <div
                    className="speed-card active"
                    data-speed="standard"
                    data-mult="1"
                    onclick="selectSpeed(this)"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-[#333] text-sm">
                          Standard Shipping
                        </p>
                        <p className="text-[#999] text-xs">7–14 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-[#F1F6F2] text-[#6DA015] px-3 py-1 rounded-full"
                      >Base Rate</span
                    >
                  </div>
                  <div
                    className="speed-card"
                    data-speed="express"
                    data-mult="1.8"
                    onclick="selectSpeed(this)"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-[#333] text-sm">
                          Express Shipping
                        </p>
                        <p className="text-[#999] text-xs">3–5 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-orange-50 text-orange-600 px-3 py-1 rounded-full"
                      >+80% faster</span
                    >
                  </div>
                  <div
                    className="speed-card"
                    data-speed="economy"
                    data-mult="0.7"
                    onclick="selectSpeed(this)"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-[#333] text-sm">
                          Economy Shipping
                        </p>
                        <p className="text-[#999] text-xs">14–21 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full"
                      >Save 30%</span
                    >
                  </div>
                </div>
              </div>

              {/*  Extra Options  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#606060] mb-3"
                  >Add-ons
                  <span className="font-normal text-[#999]">(optional)</span></label
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className="flex items-center gap-3 p-3 border-2 border-[#E8F0DC] rounded-xl cursor-pointer hover:border-[#6DA015] transition-colors"
                  >
                    <input
                      type="checkbox"
                      id="addInsurance"
                      className="w-4 h-4 accent-[#6DA015]"
                      onchange="liveCalc()"
                    />
                    <div>
                      <p className="font-medium text-[#333] text-sm">
                        Package Insurance
                      </p>
                      <p className="text-[#999] text-xs">1.5% of declared value</p>
                    </div>
                  </label>
                  <label
                    className="flex items-center gap-3 p-3 border-2 border-[#E8F0DC] rounded-xl cursor-pointer hover:border-[#6DA015] transition-colors"
                  >
                    <input
                      type="checkbox"
                      id="addPhoto"
                      className="w-4 h-4 accent-[#6DA015]"
                      onchange="liveCalc()"
                    />
                    <div>
                      <p className="font-medium text-[#333] text-sm">
                        Package Photography
                      </p>
                      <p className="text-[#999] text-xs">+$2.00 per package</p>
                    </div>
                  </label>
                </div>
              </div>

              {/*  Calculate Button  */}
              <button
                id="calcBtn"
                onclick="calculate()"
                className="w-full bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white py-3.5 rounded-full font-bold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10"
                  ><i className="fas fa-calculator mr-2"></i>Calculate Shipping
                  Cost</span
                >
                <div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                ></div>
              </button>

              {/*  Disclaimer  */}
              <p
                className="text-xs text-[#999] text-center mt-4 flex items-center justify-center gap-1"
              >
                <i className="fas fa-info-circle text-[#46C0A2]"></i>
                Estimate only. Actual rates may vary. Import duties & VAT not
                included.
              </p>
            </div>
          </div>

          {/*  ===== RESULT PANEL (col 5) =====  */}
          <div className="lg:col-span-5 sticky-result reveal-right">
            {/*  Result Card  */}
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden mb-6"
            >
              {/*  Header gradient  */}
              <div className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-xs font-medium mb-1">
                      SHIPPING ESTIMATE
                    </p>
                    <div
                      id="totalDisplay"
                      className="text-white font-bold text-4xl price-pop"
                    >
                      $0.00
                    </div>
                    <p className="text-white/80 text-xs mt-1" id="speedLabel">
                      Standard · 7–14 days
                    </p>
                  </div>
                  <div
                    id="resultBadge"
                    className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30"
                  >
                    Estimate
                  </div>
                </div>
              </div>

              {/*  Breakdown Table  */}
              <div className="p-6">
                <h4 className="font-semibold text-[#333] text-sm mb-4">
                  Rate Breakdown
                </h4>
                <div className="divide-y divide-[#F1F6F2]">
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-[#606060] text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-box text-[#6DA015] text-xs w-4"></i>Base
                      Shipping Rate
                    </span>
                    <span className="font-semibold text-[#333] text-sm" id="r-base"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-[#606060] text-sm flex items-center gap-2"
                    >
                      <i
                        className="fas fa-tachometer-alt text-[#6DA015] text-xs w-4"
                      ></i
                      >Speed Adjustment
                    </span>
                    <span className="font-semibold text-[#333] text-sm" id="r-speed"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-[#606060] text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-passport text-[#6DA015] text-xs w-4"></i
                      >Brokerage Fee
                    </span>
                    <span
                      className="font-semibold text-[#333] text-sm"
                      id="r-brokerage"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                    id="r-ins-row"
                  >
                    <span
                      className="text-[#606060] text-sm flex items-center gap-2"
                    >
                      <i
                        className="fas fa-shield-alt text-[#6DA015] text-xs w-4"
                      ></i
                      >Insurance
                    </span>
                    <span
                      className="font-semibold text-[#333] text-sm"
                      id="r-insurance"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                    id="r-photo-row"
                  >
                    <span
                      className="text-[#606060] text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-camera text-[#6DA015] text-xs w-4"></i
                      >Photography
                    </span>
                    <span className="font-semibold text-[#333] text-sm" id="r-photo"
                      >—</span
                    >
                  </div>
                </div>

                {/*  Total  */}
                <div
                  className="flex justify-between items-center mt-4 p-4 bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] rounded-2xl"
                >
                  <span className="font-bold text-[#333]">Total Estimate</span>
                  <span className="font-bold text-2xl grad-text" id="r-total"
                    >$0.00</span
                  >
                </div>

                {/*  Delivery Info  */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div
                    className="bg-[#F9FAFC] rounded-xl p-3 text-center border border-[#DCE8C6]"
                  >
                    <i
                      className="fas fa-clock text-[#6DA015] mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Delivery</p>
                    <p className="font-bold text-[#333] text-xs mt-0.5" id="r-time">
                      7–14 days
                    </p>
                  </div>
                  <div
                    className="bg-[#F9FAFC] rounded-xl p-3 text-center border border-[#DCE8C6]"
                  >
                    <i
                      className="fas fa-weight text-[#6DA015] mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Weight</p>
                    <p
                      className="font-bold text-[#333] text-xs mt-0.5"
                      id="r-weight"
                    >
                      — lb
                    </p>
                  </div>
                  <div
                    className="bg-[#F9FAFC] rounded-xl p-3 text-center border border-[#DCE8C6]"
                  >
                    <i
                      className="fas fa-dollar-sign text-[#6DA015] mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Per Lb</p>
                    <p
                      className="font-bold text-[#333] text-xs mt-0.5"
                      id="r-perlb"
                    >
                      —
                    </p>
                  </div>
                </div>

                {/*  CTA Buttons  */}
                <div className="flex flex-col gap-2 mt-5">
                  <a href="./signin_up/sign_up.html">
                    <button
                      className="w-full bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <i className="fas fa-user-plus mr-2"></i>Sign Up & Ship Now
                    </button>
                  </a>
                  <a href="/rates">
                    <button
                      className="w-full border-2 border-[#6DA015] text-[#6DA015] py-3 rounded-full font-semibold text-sm hover:bg-[#6DA015] hover:text-white transition-all duration-300"
                    >
                      <i className="fas fa-tags mr-2"></i>View Full Rate Chart
                    </button>
                  </a>
                </div>

                {/*  Disclaimer  */}
                <div
                  className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex gap-2"
                >
                  <i
                    className="fas fa-exclamation-triangle text-yellow-500 text-xs mt-0.5 flex-shrink-0"
                  ></i>
                  <p className="text-xs text-yellow-800 leading-relaxed">
                    Estimate only. Import duties, VAT & local delivery charges
                    are not included. Actual rate depends on final dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/*  Rate Quick Reference  */}
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden reveal"
            >
              <div
                className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] px-5 py-3.5 flex justify-between items-center"
              >
                <span className="text-white font-bold text-sm"
                  >Package Rate Reference</span
                >
                <span className="text-white font-bold text-sm">Rate (USD)</span>
              </div>
              <div className="divide-y divide-[#F1F6F2]">
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-[#606060] text-sm">0.5 lb</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-[#F1F6F2] px-3 py-0.5 rounded-full"
                    >$10.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-[#606060] text-sm">1 lb</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-[#F1F6F2] px-3 py-0.5 rounded-full"
                    >$15.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-[#606060] text-sm">2 lbs</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-[#F1F6F2] px-3 py-0.5 rounded-full"
                    >$20.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-[#606060] text-sm">3 lbs</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-[#F1F6F2] px-3 py-0.5 rounded-full"
                    >$25.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-[#606060] text-sm">Additional lb</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-[#F1F6F2] px-3 py-0.5 rounded-full"
                    >$5.00/lb</span
                  >
                </div>
                <div
                  className="result-row flex justify-between px-5 py-3 bg-[#FFFBEB]"
                >
                  <span className="text-[#606060] text-sm">Over 25 lbs</span>
                  <span
                    className="font-semibold text-[#333] text-sm bg-yellow-100 px-3 py-0.5 rounded-full"
                    >$50 flat</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ===== CONSOLIDATION TIP =====  */}
    <section className="py-10 px-4 bg-white">
      <div className="container reveal">
        <div
          className="bg-gradient-to-r from-[#0B2A77] to-[#1a3d8c] rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div
                className="inline-block bg-white/20 text-white text-xs px-3 py-1.5 rounded-full mb-4 font-semibold"
              >
                💡 PRO TIP
              </div>
              <h3 className="font-bold text-2xl md:text-3xl mb-3">
                Save up to 40% with Package Consolidation
              </h3>
              <p className="text-white/80 leading-relaxed">
                Order from multiple US stores and combine everything into one
                shipment. Instead of paying shipping for 5 separate orders, pay
                once for all of them together.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/80 text-sm"
                    >Without Consolidation</span
                  >
                  <span className="text-red-300 font-bold">5 × $15 = $75</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400 rounded-full"
                    style={{ 'width': '100%' }}
                  ></div>
                </div>
              </div>
              <div
                className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/80 text-sm">With Consolidation</span>
                  <span className="text-[#46C0A2] font-bold">1 × $45 = $45</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#46C0A2] rounded-full"
                    style={{ 'width': '60%' }}
                  ></div>
                </div>
              </div>
              <p className="text-white/70 text-xs text-right">
                Save <strong className="text-[#46C0A2]">$30 (40%)</strong> on 5
                packages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  ===== BENEFITS SECTION =====  */}
    <section className="py-14 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="text-center mb-10 reveal">
          <div
            style={{ 'width': '60px', 'height': '4px', 'background': 'linear-gradient(135deg, #6da015, #46c0a2)', 'borderRadius': '2px', 'margin': '0 auto 14px' }}
          ></div>
          <h2 className="font-bold text-2xl md:text-3xl text-[#333]">
            Your Benefits with Swift Express
          </h2>
          <p className="text-[#606060] mt-2">
            Everything included in every shipment
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger reveal"
        >
          <div
            className="ben-card bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center"
            >
              <i className="fas fa-box-open text-[#6DA015] text-2xl"></i>
            </div>
            <h4 className="font-semibold text-[#333]">Package Consolidation</h4>
            <p className="text-[#606060] text-sm leading-relaxed">
              Combine multiple packages and save up to 40% on your total
              shipping cost.
            </p>
          </div>
          <div
            className="ben-card bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center"
            >
              <i className="fas fa-shield-alt text-[#6DA015] text-2xl"></i>
            </div>
            <h4 className="font-semibold text-[#333]">Security & Reliability</h4>
            <p className="text-[#606060] text-sm leading-relaxed">
              Every package is fully insured and handled with care throughout
              transit.
            </p>
          </div>
          <div
            className="ben-card bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center"
            >
              <i className="fas fa-map-marker-alt text-[#6DA015] text-2xl"></i>
            </div>
            <h4 className="font-semibold text-[#333]">Real-Time Tracking</h4>
            <p className="text-[#606060] text-sm leading-relaxed">
              Track your shipment at every step from US warehouse to your door.
            </p>
          </div>
          <div
            className="ben-card bg-white rounded-2xl border border-[#DCE8C6] p-6 flex flex-col items-center text-center gap-4 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center"
            >
              <i className="fas fa-headset text-[#6DA015] text-2xl"></i>
            </div>
            <h4 className="font-semibold text-[#333]">24/7 Support</h4>
            <p className="text-[#606060] text-sm leading-relaxed">
              Our dedicated support team is available round the clock via phone,
              email & WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/*  ===== FOOTER =====  */}
    <footer className="w-full bg-[#0B2A77] py-16">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10"
        >
          <div>
            <img src="/assets/logo.png" alt="Logo" className="w-[120px] mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Your trusted shipping partner from USA to Bangladesh since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-facebook-f text-white text-xs"></i
              ></a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-instagram text-white text-xs"></i
              ></a>
              <a
                href="https://x.com/"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-x-twitter text-white text-xs"></i
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
                  >Full Rate Chart</a
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
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Restricted Items</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Newsletter</h6>
            <p className="text-white/70 text-sm mb-3">
              Get shipping tips & offers in your inbox.
            </p>
            <div className="bg-white rounded-full flex items-center px-3 py-1 mb-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent text-gray-600 focus:outline-none pl-2 text-sm py-2"
              />
              <button
                className="subscribe-btn bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-xs">No spam. Unsubscribe anytime.</p>
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
