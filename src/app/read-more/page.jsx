"use client";
import React from 'react';
import Link from 'next/link';

export default function ReadMore() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  NAV  */}
    <nav className="bg-white border-b border-[#DCE8C6] sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4 px-4">
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-[101px] h-[53px] object-cover hidden md:block"
        />
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-[80px] object-cover md:hidden"
        />
        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="/"
              className="text-[#333] font-medium hover:text-[#6DA015] transition-colors text-sm"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/services"
              className="text-[#333] font-medium hover:text-[#6DA015] transition-colors text-sm"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/about"
              className="text-[#333] font-medium hover:text-[#6DA015] transition-colors text-sm"
              >About</a
            >
          </li>
          <li>
            <a href="/blog" className="text-[#6DA015] font-medium text-sm"
              >Blog</a
            >
          </li>
          <li>
            <a
              href="/tracking"
              className="text-[#333] font-medium hover:text-[#6DA015] transition-colors text-sm"
              >Track</a
            >
          </li>
          <li>
            <a
              href="/contact"
              className="text-[#333] font-medium hover:text-[#6DA015] transition-colors text-sm"
              >Contact</a
            >
          </li>
        </ul>
        <div className="hidden md:flex gap-3">
          <a href="./signin_up/login.html"
            ><button className="btn-primary text-xs px-4 py-2">Sign In</button></a
          >
          <a href="./signin_up/sign_up.html"
            ><button className="btn-outline text-xs px-4 py-2">Sign Up</button></a
          >
        </div>
        {/*  Mobile menu btn  */}
        <button id="menubtn" className="md:hidden text-[#333] text-xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      {/*  Mobile menu  */}
      <div id="mobileMenu" className="hidden md:hidden border-t border-[#DCE8C6]">
        <div className="px-6 py-4 flex flex-col gap-3">
          <a
            href="/"
            className="text-[#333] py-2 border-b border-gray-100"
            >Home</a
          >
          <a
            href="/services"
            className="text-[#333] py-2 border-b border-gray-100"
            >Services</a
          >
          <a
            href="/blog"
            className="text-[#6DA015] font-semibold py-2 border-b border-gray-100"
            >Blog</a
          >
          <a
            href="/tracking"
            className="text-[#333] py-2 border-b border-gray-100"
            >Track</a
          >
          <a href="/contact" className="text-[#333] py-2">Contact</a>
        </div>
      </div>
    </nav>

    {/*  HERO BANNER  */}
    <div
      className="bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 py-10 md:py-16 px-4"
    >
      <div className="container max-w-4xl mx-auto">
        {/*  Breadcrumb  */}
        <nav className="flex items-center gap-2 text-sm text-[#606060] mb-6 reveal">
          <a href="/" className="hover:text-[#6DA015] transition-colors"
            >Home</a
          >
          <i className="fas fa-chevron-right text-xs"></i>
          <a
            href="/blog"
            className="hover:text-[#6DA015] transition-colors"
            >Blog</a
          >
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-[#333]">Blog Details</span>
        </nav>
        <div className="flex flex-wrap gap-2 mb-4 reveal">
          <span className="badge text-xs">Shipping Tips</span>
          <span className="text-[#606060] text-sm flex items-center gap-1"
            ><i className="fas fa-clock text-[#6DA015] text-xs"></i>5 min read</span
          >
          <span className="text-[#606060] text-sm flex items-center gap-1"
            ><i className="fas fa-eye text-[#6DA015] text-xs"></i>1,234 views</span
          >
        </div>
        <h1
          className="font-bold text-3xl md:text-[48px] text-[#333] leading-tight mb-6 reveal"
        >
          How to Package Your Items for International Shipping
        </h1>
        <div className="flex items-center justify-between flex-wrap gap-4 reveal">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
            >
              <i className="fas fa-user text-white"></i>
            </div>
            <div>
              <p className="font-semibold text-[#333]">Swift Express Team</p>
              <p className="text-[#606060] text-sm">March 20, 2025</p>
            </div>
          </div>
          {/*  Share buttons  */}
          <div className="flex items-center gap-3">
            <span className="text-[#606060] text-sm">Share:</span>
            <a
              href="https://facebook.com"
              target="_blank"
              className="share-btn w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg"
              ><i className="fab fa-facebook-f text-white text-xs"></i
            ></a>
            <a
              href="https://x.com"
              target="_blank"
              className="share-btn w-9 h-9 bg-[#333] rounded-full flex items-center justify-center hover:shadow-lg"
              ><i className="fab fa-x-twitter text-white text-xs"></i
            ></a>
            <a
              href="https://wa.me/"
              target="_blank"
              className="share-btn w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:shadow-lg"
              ><i className="fab fa-whatsapp text-white text-xs"></i
            ></a>
            <button
              className="share-btn w-9 h-9 bg-[#606060] rounded-full flex items-center justify-center hover:shadow-lg"
              data-copy="https://swiftexpress.com/blog/packaging-tips"
              title="Copy link"
            >
              <i className="fas fa-link text-white text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/*  ARTICLE CONTENT  */}
    <section className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/*  Main Content  */}
          <div className="lg:col-span-3">
            {/*  Hero Image  */}
            <div className="rounded-3xl overflow-hidden shadow-xl mb-10 reveal">
              <img
                src="/assets/blog image 1.jpg"
                alt="Packaging Tips"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            {/*  Article  */}
            <div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-[#DCE8C6] prose reveal"
            >
              <h2>Why Proper Packaging Matters for International Shipping</h2>
              <p>
                When shipping internationally from the USA to Bangladesh, proper
                packaging is not just a recommendation — it is essential. Your
                items will travel thousands of miles across multiple handling
                points, and the right packaging ensures they arrive in perfect
                condition.
              </p>

              <blockquote>
                "Properly packaged items have a 97% success rate of arriving
                undamaged, compared to just 68% for poorly packaged ones." —
                International Shipping Industry Report 2024
              </blockquote>

              <h2>Step-by-Step Packaging Guide</h2>

              <h3>1. Choose the Right Box</h3>
              <p>
                Select a sturdy corrugated cardboard box that is slightly larger
                than your item. The extra space will be filled with cushioning
                materials. Never reuse old boxes with existing damage or
                previous shipping labels.
              </p>
              <ul>
                <li>Use double-walled boxes for heavy or fragile items</li>
                <li>
                  Box should be no more than 2 inches larger than the item on
                  each side
                </li>
                <li>Test box strength by pressing on all sides before use</li>
                <li>
                  Remove all previous labels and markings from reused boxes
                </li>
              </ul>

              <h3>2. Wrap Items Individually</h3>
              <p>
                Each item in your package should be wrapped separately,
                especially if shipping multiple items together. This prevents
                items from scratching or breaking against each other during
                transit.
              </p>

              <div className="rounded-2xl overflow-hidden my-6">
                <img
                  src="/assets/blog 3.jpg"
                  alt="Packaging materials"
                  className="w-full h-72 object-cover"
                />
              </div>

              <h3>3. Use Adequate Cushioning</h3>
              <p>
                Fill all empty spaces in the box with appropriate cushioning
                materials. At least 2 inches of cushioning material should
                surround your item on all sides.
              </p>
              <ul>
                <li>
                  Bubble wrap — ideal for fragile electronics and glassware
                </li>
                <li>Foam peanuts — great for filling irregular spaces</li>
                <li>
                  Air pillows — eco-friendly and effective for light items
                </li>
                <li>
                  Crumpled packing paper — budget-friendly for non-fragile items
                </li>
              </ul>

              <h3>4. Seal Properly</h3>
              <p>
                Use high-quality packing tape (at least 2 inches wide) to seal
                all seams and edges. The H-taping method — taping all edges and
                seams — provides maximum protection.
              </p>

              <h2>Special Considerations for Electronics</h2>
              <p>
                Electronics require extra care when shipping internationally.
                Remove batteries where possible, wrap in anti-static bubble
                wrap, and place inside a static-free bag before boxing. Include
                silica gel packets to absorb moisture during transit.
              </p>

              <h2>Documentation Requirements</h2>
              <p>
                For international shipments to Bangladesh, you will need to
                include an accurate commercial invoice with the declared value
                of your items. Undervaluing items to reduce customs duties is
                illegal and can result in package seizure and fines.
              </p>
              <ul>
                <li>Commercial invoice with item description and value</li>
                <li>Packing list for multiple items</li>
                <li>Recipient's full name, address, and phone number</li>
                <li>Sender's complete contact information</li>
              </ul>

              <h2>Final Tips</h2>
              <p>
                Take photos of your items and packaging before sealing the box.
                This documentation can be invaluable if you ever need to file an
                insurance claim. At Swift Express Cargo, all our shipments are
                tracked and insured for your peace of mind.
              </p>
            </div>

            {/*  Tags  */}
            <div className="flex flex-wrap gap-2 mt-6 reveal">
              <span className="text-[#606060] text-sm font-medium">Tags:</span>
              <span
                className="bg-[#F1F6F2] text-[#6DA015] text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#6DA015] hover:text-white transition-colors"
                >Packaging</span
              >
              <span
                className="bg-[#F1F6F2] text-[#6DA015] text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#6DA015] hover:text-white transition-colors"
                >International Shipping</span
              >
              <span
                className="bg-[#F1F6F2] text-[#6DA015] text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#6DA015] hover:text-white transition-colors"
                >Tips</span
              >
              <span
                className="bg-[#F1F6F2] text-[#6DA015] text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-[#6DA015] hover:text-white transition-colors"
                >Bangladesh</span
              >
            </div>

            {/*  Author Box  */}
            <div
              className="bg-white rounded-3xl p-6 mt-8 border border-[#DCE8C6] flex gap-5 items-start reveal"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0"
              >
                <i className="fas fa-user text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-[#333] mb-1">Swift Express Team</h4>
                <p className="text-[#6DA015] text-sm font-medium mb-2">
                  Shipping Experts
                </p>
                <p className="text-[#606060] text-sm leading-relaxed">
                  Our team of shipping professionals with 5+ years of experience
                  in international logistics. We're dedicated to making shipping
                  from USA to Bangladesh simple and affordable.
                </p>
              </div>
            </div>
          </div>

          {/*  Sidebar  */}
          <div className="lg:col-span-1">
            {/*  Table of Contents  */}
            <div
              className="bg-white rounded-2xl p-6 border border-[#DCE8C6] mb-6 sticky top-24 reveal"
            >
              <h4 className="font-bold text-[#333] mb-4 flex items-center gap-2">
                <i className="fas fa-list text-[#6DA015]"></i>Contents
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="toc-link text-[#606060] text-sm block py-1 border-l-2 border-[#DCE8C6] pl-3 hover:border-[#6DA015]"
                    >Why Packaging Matters</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    className="toc-link text-[#606060] text-sm block py-1 border-l-2 border-[#DCE8C6] pl-3 hover:border-[#6DA015]"
                    >Step-by-Step Guide</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    className="toc-link text-[#606060] text-sm block py-1 border-l-2 border-[#DCE8C6] pl-3 hover:border-[#6DA015]"
                    >Tips for Electronics</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    className="toc-link text-[#606060] text-sm block py-1 border-l-2 border-[#DCE8C6] pl-3 hover:border-[#6DA015]"
                    >Documentation</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    className="toc-link text-[#606060] text-sm block py-1 border-l-2 border-[#DCE8C6] pl-3 hover:border-[#6DA015]"
                    >Final Tips</a
                  >
                </li>
              </ul>
            </div>

            {/*  Quick Track Widget  */}
            <div
              className="bg-gradient-to-b from-[#6DA015] to-[#46C0A2] rounded-2xl p-6 mb-6 text-white reveal"
            >
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-search-location"></i>Track Package
              </h4>
              <input
                type="text"
                placeholder="Tracking number..."
                className="w-full bg-white/20 text-white placeholder-white/60 border border-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-white mb-3"
              />
              <a href="/tracking"
                ><button
                  className="w-full bg-white text-[#6DA015] font-bold py-2.5 rounded-xl hover:shadow-lg transition text-sm"
                >
                  Track Now
                </button></a
              >
            </div>

            {/*  Related Posts  */}
            <div
              className="bg-white rounded-2xl p-6 border border-[#DCE8C6] reveal"
            >
              <h4 className="font-bold text-[#333] mb-4">Related Posts</h4>
              <div className="flex flex-col gap-4">
                <a
                  href="/read-more"
                  className="related-card flex gap-3 p-3 rounded-xl hover:bg-[#F9FAFC] border border-transparent hover:border-[#DCE8C6]"
                >
                  <div
                    className="w-16 h-14 rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="/assets/Rectangle 2041.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-[#333] text-xs leading-tight mb-1"
                    >
                      Top 5 Ways to Save on Shipping
                    </p>
                    <p className="text-[#6DA015] text-xs">March 15, 2025</p>
                  </div>
                </a>
                <a
                  href="/read-more"
                  className="related-card flex gap-3 p-3 rounded-xl hover:bg-[#F9FAFC] border border-transparent hover:border-[#DCE8C6]"
                >
                  <div
                    className="w-16 h-14 rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="/assets/Rectangle 2042 (2).png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-[#333] text-xs leading-tight mb-1"
                    >
                      Understanding Bangladesh Customs
                    </p>
                    <p className="text-[#6DA015] text-xs">March 10, 2025</p>
                  </div>
                </a>
                <a
                  href="/read-more"
                  className="related-card flex gap-3 p-3 rounded-xl hover:bg-[#F9FAFC] border border-transparent hover:border-[#DCE8C6]"
                >
                  <div
                    className="w-16 h-14 rounded-xl overflow-hidden flex-shrink-0"
                  >
                    <img
                      src="/assets/Rectangle 2042 (3).png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p
                      className="font-medium text-[#333] text-xs leading-tight mb-1"
                    >
                      Package Consolidation Guide
                    </p>
                    <p className="text-[#6DA015] text-xs">March 5, 2025</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  MORE ARTICLES  */}
    <section className="py-12 px-4 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-8 reveal">
          <h3 className="font-bold text-2xl text-[#333]">More Articles</h3>
          <a
            href="/blog"
            className="text-[#6DA015] font-semibold text-sm hover:underline inline-flex items-center gap-2"
            >View All <i className="fas fa-arrow-right text-xs"></i
          ></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2041.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Savings</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                Top 5 Ways to Save on Shipping
              </h3>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm mt-2"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2042 (2).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Customs</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                Understanding Bangladesh Customs
              </h3>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm mt-2"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2042 (3).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Guides</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                Package Consolidation Complete Guide
              </h3>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm mt-2"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
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
            <h6 className="font-bold text-[#6DA015] mb-4">Blog</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/blog"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >All Articles</a
                >
              </li>
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
                  >Customs Guides</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Savings Hacks</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Newsletter</h6>
            <p className="text-white/70 text-sm mb-3">
              Get weekly shipping tips in your inbox.
            </p>
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
