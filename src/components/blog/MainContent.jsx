import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image.png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
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
            <div className="h-[10px] w-[40px] bg-teal-500 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
          </div>
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

    {/*  FEATURED POST  */}
    <section className="py-12 px-4 bg-white">
      <div className="container reveal">
        <a href="/read-more" className="group block">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-[32px] overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500"
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
                className="inline-block bg-gradient-to-r from-teal-500 to-emerald-400 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit"
                >Featured Post</span
              >
              <h2
                className="font-bold text-2xl md:text-3xl text-slate-900 mb-4 group-hover:text-teal-500 transition-colors"
              >
                How to Package Your Items for International Shipping
              </h2>
              <p className="text-slate-500 leading-relaxed mb-6">
                Learn the best practices for packaging your valuable items to
                ensure they arrive safely through international shipping routes.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">Swift Team</p>
                    <p className="text-slate-500 text-xs">March 20, 2025</p>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm group-hover:gap-3 transition-all"
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
              className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm"
            ></i>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm bg-white text-slate-900"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className="filter-btn active text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium"
            >
              All
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
            >
              Tips
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
            >
              Guides
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
            >
              Customs
            </button>
            <button
              className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-200 font-medium text-slate-500"
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
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">March 20, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                How to Package Items for International Shipping
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Learn the best practices for packaging fragile and valuable
                items for safe international delivery.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 2  */}
          <article
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">March 15, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                Top 5 Ways to Save on Shipping Costs from USA
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Smart strategies to reduce your international shipping expenses
                significantly.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 3  */}
          <article
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">March 10, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                Understanding Customs & Duties for Bangladesh
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                A complete guide to navigating Bangladesh customs procedures for
                your packages.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 4  */}
          <article
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">March 5, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                Beginner's Guide to Package Consolidation
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Everything you need to know about combining multiple packages
                for maximum savings.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 5  */}
          <article
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">Feb 28, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                What Items Are Restricted in International Shipping?
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Know what you can and cannot ship to avoid delays and additional
                charges at customs.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>

          {/*  Article 6  */}
          <article
            className="blog-card bg-white rounded-[24px] shadow-sm overflow-hidden border border-slate-200"
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
                <span className="text-slate-500 text-xs">Feb 22, 2025</span>
              </div>
              <h3
                className="font-bold text-lg text-slate-900 mb-2 hover:text-teal-500 transition-colors"
              >
                How Real-Time Tracking Works for Your Shipment
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                An inside look at how our tracking system keeps you updated at
                every step of delivery.
              </p>
              <div
                className="flex items-center justify-between pt-4 border-t border-slate-200"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-user text-white text-xs"></i>
                  </div>
                  <span className="text-slate-500 text-xs">Swift Team</span>
                </div>
                <a
                  href="/read-more"
                  className="inline-flex items-center gap-1.5 text-teal-500 font-semibold text-sm hover:gap-2.5 transition-all"
                  >Read <i className="fas fa-arrow-right text-xs"></i
                ></a>
              </div>
            </div>
          </article>
        </div>

        {/*  Pagination  */}
        <div className="flex justify-center gap-2 mt-12 reveal">
          <button
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-400 text-white font-semibold text-sm flex items-center justify-center"
          >
            1
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-slate-200 text-slate-500 font-semibold text-sm flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors"
          >
            2
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-slate-200 text-slate-500 font-semibold text-sm flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors"
          >
            3
          </button>
          <button
            className="w-10 h-10 rounded-xl border-2 border-slate-200 text-slate-500 font-semibold text-sm flex items-center justify-center hover:border-teal-500 hover:text-teal-500 transition-colors"
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
          className="bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] rounded-[32px] p-8 md:p-12 text-center border border-slate-200 reveal"
        >
          <i className="fas fa-envelope-open-text text-teal-500 text-4xl mb-4"></i>
          <h3 className="font-bold text-2xl md:text-3xl text-slate-900 mb-3">
            Subscribe for Shipping Tips
          </h3>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            Get weekly guides, cost-saving tips and shipping news delivered to
            your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-sm"
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
    </>
  );
}
