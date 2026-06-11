"use client";
import React from 'react';
import Link from 'next/link';

export default function Rates() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image (6).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
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
              <a href="/rates" className="text-[#46C0A2] font-medium"
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
                className="text-[#6DA015] font-semibold py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-tags w-5 text-[#6DA015]"></i>Rates</a
              >
            </li>
            <li>
              <a
                href="/cost-calculator"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-calculator w-5 text-[#6DA015]"></i>Cost
                Calculator</a
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

      {/*  Hero  */}
      <div
        className="flex justify-center py-20 md:py-32 px-4 text-center hero-text"
      >
        <div>
          <span
            className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
            >💰 Transparent Pricing</span
          >
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Shipping Rates
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Clear, competitive pricing with no hidden fees
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

    {/*  PROMO BANNER  */}
    <section className="py-8 px-4">
      <div className="container reveal">
        <div
          className="relative bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-3xl px-8 md:px-12 py-8 overflow-hidden"
        >
          <img
            src="/assets/Frame 2147225186.png"
            alt=""
            className="absolute right-0 top-0 h-full opacity-20 hidden md:block"
          />
          <img
            src="/assets/Frame 2147225185.png"
            alt=""
            className="absolute left-0 top-0 h-full opacity-20 hidden md:block"
          />
          <div
            className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="font-bold text-2xl md:text-3xl text-white mb-2">
                Save big with smart shopping!
              </h2>
              <p className="text-white/80 text-sm md:text-base max-w-lg">
                Consolidate multiple packages and save up to 40% on your total
                shipping cost. Shop from any US store today.
              </p>
            </div>
            <a href="/shop" className="flex-shrink-0">
              <button
                className="bg-white text-[#6DA015] font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all hover:-translate-y-1 whitespace-nowrap"
              >
                Shop Now →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*  RATES TABS  */}
    <section className="py-12 px-4">
      <div className="container">
        {/*  Tab Navigation  */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 reveal">
          <button
            className="tab-btn active px-5 py-2.5 rounded-full font-medium border-2 border-[#DCE8C6] text-sm"
            data-tab="package"
          >
            Package Rates
          </button>
          <button
            className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-[#DCE8C6] text-sm text-[#606060]"
            data-tab="brokerage"
          >
            Brokerage Fees
          </button>
          <button
            className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-[#DCE8C6] text-sm text-[#606060]"
            data-tab="warranty"
          >
            Warranty & Returns
          </button>
          <button
            className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-[#DCE8C6] text-sm text-[#606060]"
            data-tab="pickup"
          >
            Pickup at Warehouse
          </button>
          <button
            className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-[#DCE8C6] text-sm text-[#606060]"
            data-tab="additional"
          >
            Additional Charges
          </button>
        </div>

        {/*  Package Rates  */}
        <div className="tab-content active" id="tab-package">
          <div className="max-w-3xl mx-auto reveal">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
              >
                <i className="fas fa-box text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#333]">Package Rates</h3>
                <p className="text-[#606060] text-sm">
                  Based on actual weight per shipment
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] px-6 py-4 flex justify-between"
              >
                <span className="text-white font-bold">Package Weight</span>
                <span className="text-white font-bold">Rate (USD)</span>
              </div>
              <div className="divide-y divide-[#DCE8C6]">
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">0.5 lb</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$10.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">1 lb</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$15.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">2 lbs</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$20.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">3 lbs</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$25.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium">Additional lb</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$5.00 / lb</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center bg-[#FFF8E7]"
                >
                  <div className="flex items-center gap-3">
                    <i className="fas fa-star text-yellow-500 text-xs"></i
                    ><span className="text-[#555] font-medium"
                      >Packages over 25 lbs</span
                    >
                  </div>
                  <span
                    className="font-bold text-[#333] bg-yellow-100 px-4 py-1.5 rounded-full text-sm"
                    >$50.00 flat</span
                  >
                </div>
              </div>
            </div>
            <div
              className="mt-4 bg-[#F1F6F2] rounded-2xl p-4 flex items-start gap-3"
            >
              <i className="fas fa-info-circle text-[#6DA015] mt-0.5"></i>
              <p className="text-[#606060] text-sm">
                Rates are for standard shipping. Express and economy options
                available at checkout. Volumetric weight may apply for oversized
                packages.
              </p>
            </div>
          </div>
        </div>

        {/*  Brokerage Fees  */}
        <div className="tab-content" id="tab-brokerage">
          <div className="max-w-3xl mx-auto reveal">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
              >
                <i className="fas fa-passport text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#333]">Brokerage Fees</h3>
                <p className="text-[#606060] text-sm">
                  Customs clearance fee based on declared value (CIF)
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] px-6 py-4 flex justify-between"
              >
                <span className="text-white font-bold"
                  >Package CIF Value (USD)</span
                >
                <span className="text-white font-bold">Fee (USD)</span>
              </div>
              <div className="divide-y divide-[#DCE8C6]">
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">$0 – $500.00</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >FREE</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium"
                      >$501 – $1,000.00</span
                    >
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$10.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium"
                      >$1,001 – $2,000.00</span
                    >
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$15.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium"
                      >$2,001 – $3,000.00</span
                    >
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$20.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium">Over $3,000.00</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >0.5% of CIF</span
                  >
                </div>
              </div>
            </div>
            <div
              className="mt-4 bg-[#F1F6F2] rounded-2xl p-4 flex items-start gap-3"
            >
              <i className="fas fa-info-circle text-[#6DA015] mt-0.5"></i>
              <p className="text-[#606060] text-sm">
                CIF = Cost + Insurance + Freight. This fee covers customs
                documentation and clearance services. Import duties and VAT are
                separate and collected by customs.
              </p>
            </div>
          </div>
        </div>

        {/*  Warranty & Returns  */}
        <div className="tab-content" id="tab-warranty">
          <div className="max-w-3xl mx-auto reveal">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
              >
                <i className="fas fa-undo text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#333]">
                  Warranty Program & Returns
                </h3>
                <p className="text-[#606060] text-sm">
                  Return shipping fees based on declared value
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] px-6 py-4 flex justify-between"
              >
                <span className="text-white font-bold">Declared Value (USD)</span>
                <span className="text-white font-bold">Service Fee (USD)</span>
              </div>
              <div className="divide-y divide-[#DCE8C6]">
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">Up to $500</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$10.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">$501 – $1,000</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$15.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium"
                      >$1,001 – $2,000</span
                    >
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$20.00</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium">Over $2,000</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >1% of value</span
                  >
                </div>
              </div>
            </div>
            <div
              className="mt-4 bg-[#F1F6F2] rounded-2xl p-4 flex items-start gap-3"
            >
              <i className="fas fa-info-circle text-[#6DA015] mt-0.5"></i>
              <p className="text-[#606060] text-sm">
                Returns must be initiated within 30 days of delivery. Items must
                be unused and in original packaging. We handle the entire return
                process with US retailers.
              </p>
            </div>
          </div>
        </div>

        {/*  Pickup at Warehouse  */}
        <div className="tab-content" id="tab-pickup">
          <div className="max-w-3xl mx-auto reveal">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
              >
                <i className="fas fa-warehouse text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#333]">
                  Pickup at USA Warehouse
                </h3>
                <p className="text-[#606060] text-sm">
                  Self-pickup rates from our US warehouse
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-3xl shadow-sm border border-[#DCE8C6] overflow-hidden"
            >
              <div
                className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] px-6 py-4 flex justify-between"
              >
                <span className="text-white font-bold">Weight</span>
                <span className="text-white font-bold">Rate (USD)</span>
              </div>
              <div className="divide-y divide-[#DCE8C6]">
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">1 Kg</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$10.00 / Kg</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#6DA015] rounded-full"></span
                    ><span className="text-[#555] font-medium">2 Kg</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$18.00 / Kg</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium">3 Kg</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$25.00 / Kg</span
                  >
                </div>
                <div
                  className="rate-row flex justify-between px-6 py-4 items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#46C0A2] rounded-full"></span
                    ><span className="text-[#555] font-medium">5+ Kg</span>
                  </div>
                  <span
                    className="font-bold text-[#333] bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm"
                    >$7.00 / Kg</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Additional Charges  */}
        <div className="tab-content" id="tab-additional">
          <div className="max-w-3xl mx-auto reveal">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
              >
                <i className="fas fa-plus-circle text-white text-lg"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-[#333]">
                  Additional Charges
                </h3>
                <p className="text-[#606060] text-sm">
                  Optional and applicable service fees
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-truck text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Local Delivery</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                <p className="text-[#606060] text-xs">
                  Within Dhaka city (some exceptions apply)
                </p>
              </div>
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-plane text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Express Shipping</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">+$100</p>
                <p className="text-[#606060] text-xs">
                  Per shipment, delivered in 3-5 days
                </p>
              </div>
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-shield-alt text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Package Insurance</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">1.5%</p>
                <p className="text-[#606060] text-xs">
                  Of declared value (min. $5 per shipment)
                </p>
              </div>
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-user-check text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Membership Fee</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                <p className="text-[#606060] text-xs">
                  No monthly or annual fees ever
                </p>
              </div>
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-camera text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Package Photography</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">$2.00</p>
                <p className="text-[#606060] text-xs">
                  Per package, photos sent before shipping
                </p>
              </div>
              <div
                className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-[#6DA015]/15 to-[#46C0A2]/15 rounded-xl flex items-center justify-center"
                  >
                    <i className="fas fa-boxes text-[#6DA015]"></i>
                  </div>
                  <h4 className="font-bold text-[#333]">Consolidation</h4>
                </div>
                <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                <p className="text-[#606060] text-xs">
                  Combine packages at no extra charge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  CALCULATOR CTA  */}
    <section className="py-12 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div
          className="bg-gradient-to-r from-[#0B2A77] to-[#1a3d8c] rounded-3xl p-8 md:p-12 text-center reveal"
        >
          <i className="fas fa-calculator text-[#46C0A2] text-4xl mb-4"></i>
          <h3 className="font-bold text-2xl md:text-3xl text-white mb-3">
            Calculate Your Shipping Cost
          </h3>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Get an instant estimate for your shipment using our free cost
            calculator
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/cost-calculator">
              <button className="btn-primary px-10 py-3.5 font-semibold text-base">
                <i className="fas fa-calculator mr-2"></i>Use Cost Calculator
              </button>
            </a>
            <a href="/contact">
              <button
                className="border-2 border-white text-white px-10 py-3.5 rounded-full font-semibold hover:bg-white/10 transition"
              >
                <i className="fas fa-headset mr-2"></i>Ask a Question
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
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Transparent pricing, no hidden fees. Your trusted cargo partner.
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
            <div className="bg-white rounded-full flex items-center px-3 py-1 mb-3">
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
            <p className="text-white/50 text-xs">No spam. Unsubscribe anytime.</p>
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
