"use client";
import React from 'react';
import Link from 'next/link';

export default function Tracking() {
  return (
    <>

    <div id="preloader">
      <div className="flex flex-col items-center gap-3">
        <div className="spinner"></div>
      </div>
    </div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  NAV  */}
    <header
      style={{ 'backgroundImage': 'url("./assets/boat.png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
      <div
        className="md:hidden py-4 px-6 bg-black/30 backdrop-blur-lg flex flex-row justify-between items-center"
      >
        <img
          src="./assets/logo.png"
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
            src="./assets/logo.png"
            alt="Logo"
            className="w-[101px] h-[53px] object-cover"
          />
          <ul className="flex gap-8">
            <li>
              <a
                href="../index.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="../services.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Services</a
              >
            </li>
            <li>
              <a
                href="../About.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="../rates.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Rates</a
              >
            </li>
            <li>
              <a
                href="../cost-calculator copy.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Cost Calculator</a
              >
            </li>
            <li>
              <a
                href="../tracking.html"
                className="text-[#46C0A2] font-medium nav-active"
                >Track</a
              >
            </li>
            <li>
              <a
                href="../contact.html"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Contact</a
              >
            </li>
          </ul>
          <div className="flex gap-3">
            <a href="../signin_up/login.html"
              ><button className="btn-primary text-sm px-5 py-2.5">
                Sign In
              </button></a
            >
            <a href="../signin_up/sign_up.html"
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
          <ul className="flex flex-col gap-4 mb-6">
            <li>
              <a
                href="../index.html"
                className="text-[#333] font-medium hover:text-[#6DA015] flex items-center gap-3 py-2 border-b border-gray-100"
                ><i className="fas fa-home w-5 text-[#6DA015]"></i>Home</a
              >
            </li>
            <li>
              <a
                href="../services.html"
                className="text-[#333] font-medium hover:text-[#6DA015] flex items-center gap-3 py-2 border-b border-gray-100"
                ><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i
                >Services</a
              >
            </li>
            <li>
              <a
                href="../tracking.html"
                className="text-[#6DA015] font-semibold flex items-center gap-3 py-2 border-b border-gray-100"
                ><i className="fas fa-search-location w-5 text-[#6DA015]"></i>Track
                Shipment</a
              >
            </li>
            <li>
              <a
                href="../contact.html"
                className="text-[#333] font-medium hover:text-[#6DA015] flex items-center gap-3 py-2"
                ><i className="fas fa-envelope w-5 text-[#6DA015]"></i>Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>

      {/*  Hero  */}
      <div className="flex justify-center py-20 md:py-32 px-4 text-center">
        <div className="hero-text">
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Track Shipment
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            Enter your tracking number to get real-time updates on your package
          </p>
          <div className="flex gap-2 justify-center mt-8">
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

    {/*  ===== TRACKING SECTION =====  */}
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/*  Search Box  */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 reveal">
          <h2 className="font-bold text-2xl text-[#333] mb-2">
            Enter Tracking Number
          </h2>
          <p className="text-[#606060] text-sm mb-6">
            Track your package status in real-time using your order tracking ID
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <i
                className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#6DA015]"
              ></i>
              <input
                type="text"
                id="trackingInput"
                placeholder="e.g. SEC-2025-001234"
                className="w-full pl-11 pr-4 py-4 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors"
              />
            </div>
            <button
              id="trackBtn"
              className="btn-primary px-8 py-4 text-base font-semibold"
            >
              <i className="fas fa-search-location mr-2"></i>Track Now
            </button>
          </div>

          {/*  Sample Tracking Numbers  */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[#606060] text-xs">Try demo:</span>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-[#6DA015] px-3 py-1 rounded-full hover:bg-[#6DA015] hover:text-white transition-colors"
              data-id="SEC-2025-001234"
            >
              SEC-2025-001234
            </button>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-[#6DA015] px-3 py-1 rounded-full hover:bg-[#6DA015] hover:text-white transition-colors"
              data-id="SEC-2025-005678"
            >
              SEC-2025-005678
            </button>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-[#6DA015] px-3 py-1 rounded-full hover:bg-[#6DA015] hover:text-white transition-colors"
              data-id="SEC-2025-009012"
            >
              SEC-2025-009012
            </button>
          </div>
        </div>

        {/*  Tracking Result  */}
        <div className="tracking-result" id="trackingResult">
          {/*  Package Info  */}
          <div
            className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6 reveal"
          >
            <div
              className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] p-6 text-white"
            >
              <div
                className="flex flex-col sm:flex-row justify-between items-start gap-4"
              >
                <div>
                  <p className="text-white/80 text-sm mb-1">Tracking Number</p>
                  <h3 className="font-bold text-xl" id="displayTrackId">
                    SEC-2025-001234
                  </h3>
                </div>
                <div className="text-right">
                  <span
                    className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30"
                    id="statusBadge"
                  >
                    In Transit
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-[#606060] text-xs mb-1">From</p>
                  <p className="font-semibold text-[#333] text-sm">New York, USA</p>
                </div>
                <div>
                  <p className="text-[#606060] text-xs mb-1">To</p>
                  <p className="font-semibold text-[#333] text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-[#606060] text-xs mb-1">Est. Delivery</p>
                  <p className="font-semibold text-[#333] text-sm" id="estDelivery">
                    Mar 30, 2025
                  </p>
                </div>
                <div>
                  <p className="text-[#606060] text-xs mb-1">Weight</p>
                  <p className="font-semibold text-[#333] text-sm">2.5 kg</p>
                </div>
              </div>
            </div>
          </div>

          {/*  Progress Tracker  */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 reveal">
            <h3 className="font-bold text-xl text-[#333] mb-8">
              Shipment Progress
            </h3>

            {/*  Progress Steps  */}
            <div className="relative" id="progressSteps">
              {/*  Will be filled by JS  */}
            </div>
          </div>

          {/*  Timeline / History  */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-6 reveal">
            <h3 className="font-bold text-xl text-[#333] mb-6">Tracking History</h3>
            <div id="trackingHistory" className="flex flex-col gap-0">
              {/*  Will be filled by JS  */}
            </div>
          </div>

          {/*  Map Placeholder  */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 reveal">
            <h3 className="font-bold text-xl text-[#333] mb-4">Current Location</h3>
            <div
              className="map-placeholder rounded-2xl h-52 flex items-center justify-center"
            >
              <div className="text-center z-10 relative">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center mx-auto mb-3 float-anim shadow-lg"
                >
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <p className="font-semibold text-[#333]">Frankfurt, Germany</p>
                <p className="text-[#606060] text-sm">In Transit Hub</p>
              </div>
            </div>
            <p className="text-[#606060] text-xs text-center mt-3">
              <i className="fas fa-info-circle text-[#46C0A2] mr-1"></i>
              Live map integration available in the mobile app
            </p>
          </div>
        </div>

        {/*  Not Found State (initially hidden)  */}
        <div id="notFoundState" className="hidden">
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center reveal">
            <div
              className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="fas fa-search text-red-400 text-3xl"></i>
            </div>
            <h3 className="font-bold text-2xl text-[#333] mb-3">
              Tracking Number Not Found
            </h3>
            <p className="text-[#606060] mb-6">
              We couldn't find any shipment with the provided tracking number.
              Please check and try again.
            </p>
            <button
              className="btn-primary px-8 py-3"
              onclick="
                document.getElementById('notFoundState').classList.add('hidden')
              "
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </section>

    {/*  ===== HELP SECTION =====  */}
    <section className="py-16 bg-white px-4">
      <div className="max-w-3xl mx-auto text-center reveal">
        <h3 className="font-bold text-2xl text-[#333] mb-3">Need Help?</h3>
        <p className="text-[#606060] mb-8">
          Can't find your package or have questions? Our support team is here
          24/7.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://wa.me/8801715825331"
            target="_blank"
            className="card-hover bg-[#F9FAFC] border border-[#DCE8C6] rounded-2xl p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fab fa-whatsapp text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">WhatsApp</h4>
            <p className="text-[#606060] text-sm">+880 1715-825331</p>
          </a>
          <a
            href="mailto:support@swiftexpress.com"
            className="card-hover bg-[#F9FAFC] border border-[#DCE8C6] rounded-2xl p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fas fa-envelope text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">Email Support</h4>
            <p className="text-[#606060] text-sm">support@swiftexpress.com</p>
          </a>
          <a
            href="/contact"
            className="card-hover bg-[#F9FAFC] border border-[#DCE8C6] rounded-2xl p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fas fa-comments text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">Live Chat</h4>
            <p className="text-[#606060] text-sm">Available 24/7</p>
          </a>
        </div>
      </div>
    </section>

    {/*  FOOTER  */}
    <footer className="bg-[#0B2A77] py-10 text-center">
      <div className="container">
        <p className="text-white/60 text-sm">
          © Swift Express Cargo 2025. All Rights Reserved.
        </p>
      </div>
    </footer>

    
    
  
    </>
  );
}
