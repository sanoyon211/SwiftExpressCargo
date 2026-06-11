"use client";
import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image.png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
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
            >📝 Shipping Tips & News</span
          >
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Our Blog
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Expert guides, shipping tips and industry news
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

    {/*  FEATURED POST  */}
    <section className="py-12 px-4 bg-white">
      <div className="container reveal">
        <a href="/read-more" className="group block">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-lg border border-[#DCE8C6] hover:shadow-2xl transition-all duration-500"
          >
            <div className="overflow-hidden h-64 md:h-auto">
              <img
                src="/assets/Rectangle 2041.png"
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span
                className="inline-block bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit"
                >Featured Post</span
              >
              <h2
                className="font-bold text-2xl md:text-3xl text-[#333] mb-4 group-hover:text-[#6DA015] transition-colors"
              >
                How to Package Your Items for International Shipping
              </h2>
              <p className="text-[#606060] leading-relaxed mb-6">
                Learn the best practices for packaging your valuable items to
                ensure they arrive safely through international shipping routes.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-[#333] text-sm">Swift Team</p>
                    <p className="text-[#606060] text-xs">March 20, 2025</p>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm group-hover:gap-3 transition-all"
                  >Read More <i className="fas fa-arrow-right text-xs"></i
                ></span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>

    {/*  ALL POSTS  */}
    <section className="py-12 px-4 pb-24">
      <div className="container">
        {/*  Filter + Search  */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 reveal"
        >
          <div className="relative w-full sm:w-72">
            <i
              className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-[#606060] text-sm"
            ></i>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-sm bg-white text-[#333]"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="filter-btn active text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium"
            >
              All
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
            >
              Tips
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
            >
              Guides
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
            >
              Customs
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-[#DCE8C6] font-medium text-[#606060]"
            >
              Savings
            </button>
          </div>
        </div>

        {/*  Blog Grid  */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 stagger reveal"
        >
          {/*  Article 1  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2041.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Tips</span>
                <span className="text-[#606060] text-xs">March 20, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                How to Package Items for International Shipping
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                Learn the best practices for packaging fragile and valuable
                items for safe international delivery.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 2  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2042 (2).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Savings</span>
                <span className="text-[#606060] text-xs">March 15, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                Top 5 Ways to Save on Shipping Costs from USA
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                Smart strategies to reduce your international shipping expenses
                significantly.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 3  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2042 (3).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Customs</span>
                <span className="text-[#606060] text-xs">March 10, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                Understanding Customs & Duties for Bangladesh
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                A complete guide to navigating Bangladesh customs procedures for
                your packages.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 4  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2041.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Guides</span>
                <span className="text-[#606060] text-xs">March 5, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                Beginner's Guide to Package Consolidation
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                Everything you need to know about combining multiple packages
                for maximum savings.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 5  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2042 (2).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Tips</span>
                <span className="text-[#606060] text-xs">Feb 28, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                What Items Are Restricted in International Shipping?
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                Know what you can and cannot ship to avoid delays and additional
                charges at customs.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 6  */}
          <article
            className="blog-card bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="overflow-hidden h-52">
              <img
                src="/assets/Rectangle 2042 (3).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="badge text-xs">Guides</span>
                <span className="text-[#606060] text-xs">Feb 22, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-[#333] mb-2 hover:text-[#6DA015] transition-colors"
              >
                How Real-Time Tracking Works for Your Shipment
              </h3>
              <p className="text-[#606060] text-sm leading-relaxed mb-4">
                An inside look at how our tracking system keeps you updated at
                every step of delivery.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-[#DCE8C6]"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-[#606060] text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-[#6DA015] font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>
        </div>

        {/*  Pagination  */}
        <div className="flex justify-center gap-2 mt-12 reveal">
          <button
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white font-semibold text-sm flex items-center justify-center"
          >
            1
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-[#DCE8C6] text-[#606060] font-semibold text-sm flex items-center justify-center hover:border-[#6DA015] hover:text-[#6DA015] transition-colors"
          >
            2
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-[#DCE8C6] text-[#606060] font-semibold text-sm flex items-center justify-center hover:border-[#6DA015] hover:text-[#6DA015] transition-colors"
          >
            3
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-[#DCE8C6] text-[#606060] font-semibold text-sm flex items-center justify-center hover:border-[#6DA015] hover:text-[#6DA015] transition-colors"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    {/*  NEWSLETTER  */}
    <section className="py-12 px-4 bg-white">
      <div className="container">
        <div
          className="bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] rounded-3xl p-8 md:p-12 text-center border border-[#DCE8C6] reveal"
        >
          <i className="fas fa-envelope-open-text text-[#6DA015] text-4xl mb-4"></i>
          <h3 className="font-bold text-2xl md:text-3xl text-[#333] mb-3">
            Subscribe for Shipping Tips
          </h3>
          <p className="text-[#606060] mb-8 max-w-lg mx-auto">
            Get weekly guides, cost-saving tips and shipping news delivered to
            your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-sm"
            />
            <button
              className="subscribe-btn btn-primary px-6 py-3.5 whitespace-nowrap"
            >
              Subscribe
            </button>
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
              Your trusted cargo partner from USA to Bangladesh.
            </p>
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
            <h6 className="font-bold text-[#6DA015] mb-4">Categories</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Shipping Tips</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Savings Guide</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Customs Info</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >How-To Guides</a
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
