import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/*  HEADER  */}
      <header
        style={{ 'backgroundImage': 'url("/assets/image (6).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
        className="relative h-auto w-full"
      >
        <div className="flex justify-center py-20 md:py-32 px-4 text-center hero-text">
          <div>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30">
              💰 Transparent Pricing
            </span>
            <h1 className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4">
              Shipping Rates
            </h1>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Clear, competitive pricing with no hidden fees
            </p>
            <div className="flex gap-2 justify-center">
              <div className="h-[10px] w-[40px] bg-teal-500 rounded-full"></div>
              <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
              <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
            </div>
          </div>
        </div>
        <a href="https://wa.me/8801715825331" target="_blank" className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green">
            <i className="fab fa-whatsapp text-white text-2xl"></i>
          </div>
        </a>
      </header>

      {/*  PROMO BANNER  */}
      <section className="py-8 px-4">
        <div className="container reveal">
          <div className="relative bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[32px] px-8 md:px-12 py-8 overflow-hidden">
            <img src="/assets/Frame 2147225186.png" alt="" className="absolute right-0 top-0 h-full opacity-20 hidden md:block" />
            <img src="/assets/Frame 2147225185.png" alt="" className="absolute left-0 top-0 h-full opacity-20 hidden md:block" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-bold text-2xl md:text-3xl text-white mb-2">Save big with smart shopping!</h2>
                <p className="text-white/80 text-sm md:text-base max-w-lg">
                  Consolidate multiple packages and save up to 40% on your total shipping cost. Shop from any US store today.
                </p>
              </div>
              <a href="/shop" className="flex-shrink-0">
                <button className="bg-white text-teal-500 font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all hover:-translate-y-1 whitespace-nowrap">
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
            <button className="tab-btn active px-5 py-2.5 rounded-full font-medium border-2 border-slate-200 text-sm" data-tab="package">Package Rates</button>
            <button className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-slate-200 text-sm text-slate-500" data-tab="brokerage">Brokerage Fees</button>
            <button className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-slate-200 text-sm text-slate-500" data-tab="warranty">Warranty & Returns</button>
            <button className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-slate-200 text-sm text-slate-500" data-tab="pickup">Pickup at Warehouse</button>
            <button className="tab-btn px-5 py-2.5 rounded-full font-medium border-2 border-slate-200 text-sm text-slate-500" data-tab="additional">Additional Charges</button>
          </div>

          {/*  Package Rates  */}
          <div className="tab-content active" id="tab-package">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-box text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Package Rates</h3>
                  <p className="text-slate-500 text-sm">Based on actual weight per shipment</p>
                </div>
              </div>
              <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 px-6 py-4 flex justify-between">
                  <span className="text-white font-bold">Package Weight</span>
                  <span className="text-white font-bold">Rate (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">0.5 lb</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">1 lb</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">2 lbs</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">3 lbs</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$25.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">Additional lb</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$5.00 / lb</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center bg-[#FFF8E7]">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-star text-yellow-500 text-xs"></i><span className="text-[#555] font-medium">Packages over 25 lbs</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-yellow-100 px-4 py-1.5 rounded-full text-sm">$50.00 flat</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-teal-500 mt-0.5"></i>
                <p className="text-slate-500 text-sm">
                  Rates are for standard shipping. Express and economy options available at checkout. Volumetric weight may apply for oversized packages.
                </p>
              </div>
            </div>
          </div>

          {/*  Brokerage Fees  */}
          <div className="tab-content" id="tab-brokerage">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-passport text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Brokerage Fees</h3>
                  <p className="text-slate-500 text-sm">Customs clearance fee based on declared value (CIF)</p>
                </div>
              </div>
              <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 px-6 py-4 flex justify-between">
                  <span className="text-white font-bold">Package CIF Value (USD)</span>
                  <span className="text-white font-bold">Fee (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">$0 – $500.00</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">FREE</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">$501 – $1,000.00</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">$1,001 – $2,000.00</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">$2,001 – $3,000.00</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">Over $3,000.00</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">0.5% of CIF</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-teal-500 mt-0.5"></i>
                <p className="text-slate-500 text-sm">
                  CIF = Cost + Insurance + Freight. This fee covers customs documentation and clearance services. Import duties and VAT are separate and collected by customs.
                </p>
              </div>
            </div>
          </div>

          {/*  Warranty & Returns  */}
          <div className="tab-content" id="tab-warranty">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-undo text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Warranty Program & Returns</h3>
                  <p className="text-slate-500 text-sm">Return shipping fees based on declared value</p>
                </div>
              </div>
              <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 px-6 py-4 flex justify-between">
                  <span className="text-white font-bold">Declared Value (USD)</span>
                  <span className="text-white font-bold">Service Fee (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">Up to $500</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">$501 – $1,000</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">$1,001 – $2,000</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">Over $2,000</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">1% of value</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-teal-500 mt-0.5"></i>
                <p className="text-slate-500 text-sm">
                  Returns must be initiated within 30 days of delivery. Items must be unused and in original packaging. We handle the entire return process with US retailers.
                </p>
              </div>
            </div>
          </div>

          {/*  Pickup at Warehouse  */}
          <div className="tab-content" id="tab-pickup">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-warehouse text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Pickup at USA Warehouse</h3>
                  <p className="text-slate-500 text-sm">Self-pickup rates from our US warehouse</p>
                </div>
              </div>
              <div className="bg-white rounded-[32px] shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-emerald-400 px-6 py-4 flex justify-between">
                  <span className="text-white font-bold">Weight</span>
                  <span className="text-white font-bold">Rate (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">1 Kg</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$10.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span><span className="text-[#555] font-medium">2 Kg</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$18.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">3 Kg</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$25.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span><span className="text-[#555] font-medium">5+ Kg</span>
                    </div>
                    <span className="font-bold text-slate-900 bg-[#F1F6F2] px-4 py-1.5 rounded-full text-sm">$7.00 / Kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Additional Charges  */}
          <div className="tab-content" id="tab-additional">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <i className="fas fa-plus-circle text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Additional Charges</h3>
                  <p className="text-slate-500 text-sm">Optional and applicable service fees</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-truck text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Local Delivery</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                  <p className="text-slate-500 text-xs">Within Dhaka city (some exceptions apply)</p>
                </div>
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-plane text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Express Shipping</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">+$100</p>
                  <p className="text-slate-500 text-xs">Per shipment, delivered in 3-5 days</p>
                </div>
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-shield-alt text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Package Insurance</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">1.5%</p>
                  <p className="text-slate-500 text-xs">Of declared value (min. $5 per shipment)</p>
                </div>
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-user-check text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Membership Fee</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                  <p className="text-slate-500 text-xs">No monthly or annual fees ever</p>
                </div>
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-camera text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Package Photography</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">$2.00</p>
                  <p className="text-slate-500 text-xs">Per package, photos sent before shipping</p>
                </div>
                <div className="card-hover bg-white rounded-[24px] border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-500/15 to-teal-400/15 rounded-xl flex items-center justify-center">
                      <i className="fas fa-boxes text-teal-500"></i>
                    </div>
                    <h4 className="font-bold text-slate-900">Consolidation</h4>
                  </div>
                  <p className="text-2xl font-bold gradient-text mb-1">FREE</p>
                  <p className="text-slate-500 text-xs">Combine packages at no extra charge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CALCULATOR CTA  */}
      <section className="py-12 px-4 bg-slate-50">
        <div className="container">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 reveal">
            <div className="w-full md:w-1/3">
              <img src="/assets/image (4).png" alt="Calculator" className="w-full h-auto rounded-[24px]" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-bold text-3xl text-slate-900 mb-4">Want a precise estimate?</h3>
              <p className="text-slate-500 mb-6">
                Use our advanced shipping calculator to get an exact quote based on dimensions, weight, and destination. Compare different shipping methods instantly.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-teal-500"></i><span className="text-sm font-medium text-slate-900">Instant Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-teal-500"></i><span className="text-sm font-medium text-slate-900">Compare Methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-teal-500"></i><span className="text-sm font-medium text-slate-900">No Sign-up Needed</span>
                </div>
              </div>
              <a href="/cost-calculator">
                <button className="btn-primary px-8 py-3 w-full sm:w-auto">Open Cost Calculator</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
