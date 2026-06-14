"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('package');

  return (
    <>
      {/*  HEADER  */}
      <header
        style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/assets/image (6).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center dark:border-b dark:border-slate-800"
      >
        <div className="flex justify-center pt-32 pb-20 px-4 text-center hero-text">
          <div>
            <span className="inline-block bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30">
              💰 Transparent Pricing
            </span>
            <h1 className="font-semibold text-[40px] md:text-[64px] text-white leading-tight mb-4 tracking-tight">
              Shipping Rates
            </h1>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Clear, competitive pricing with no hidden fees
            </p>
            
          </div>
        </div>
        <a href="https://wa.me/8801715825331" target="_blank" className="absolute right-5 bottom-5 md:right-10 md:bottom-10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-sm hover:shadow-indigo-600/40">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-14 h-14 rounded-full flex items-center justify-center shadow-sm pulse-green">
            <i className="fab fa-whatsapp text-white text-2xl"></i>
          </div>
        </a>
      </header>

      {/*  PROMO BANNER  */}
      <section className="py-8 px-4">
        <div className="container reveal">
          <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-[32px] px-8 md:px-12 py-8 overflow-hidden">
            <img src="/assets/Frame 2147225186.png" alt="" className="absolute right-0 top-0 h-full opacity-20 hidden md:block" />
            <img src="/assets/Frame 2147225185.png" alt="" className="absolute left-0 top-0 h-full opacity-20 hidden md:block" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="font-semibold text-2xl md:text-3xl text-white mb-2 tracking-tight">Save big with smart shopping!</h2>
                <p className="text-white/80 text-sm md:text-base max-w-lg">
                  Consolidate multiple packages and save up to 40% on your total shipping cost. Shop from any US store today.
                </p>
              </div>
              <a href="/shop" className="flex-shrink-0">
                <button className="bg-white dark:bg-slate-800 text-indigo-600 font-semibold px-8 py-3 rounded-full hover:shadow-sm transition-all hover:-translate-y-1 whitespace-nowrap dark:border dark:border-white/5">
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
              className={`px-5 py-2.5 rounded-full font-medium border-2 border-slate-100 dark:border-white/5 text-sm transition-colors ${activeTab === 'package' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:border-indigo-600'}`} 
              onClick={() => setActiveTab('package')}
            >Package Rates</button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium border-2 border-slate-100 dark:border-white/5 text-sm transition-colors ${activeTab === 'brokerage' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:border-indigo-600'}`} 
              onClick={() => setActiveTab('brokerage')}
            >Brokerage Fees</button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium border-2 border-slate-100 dark:border-white/5 text-sm transition-colors ${activeTab === 'warranty' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:border-indigo-600'}`} 
              onClick={() => setActiveTab('warranty')}
            >Warranty & Returns</button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium border-2 border-slate-100 dark:border-white/5 text-sm transition-colors ${activeTab === 'pickup' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:border-indigo-600'}`} 
              onClick={() => setActiveTab('pickup')}
            >Pickup at Warehouse</button>
            <button 
              className={`px-5 py-2.5 rounded-full font-medium border-2 border-slate-100 dark:border-white/5 text-sm transition-colors ${activeTab === 'additional' ? 'bg-indigo-50 text-indigo-700 border-indigo-600 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:border-indigo-600'}`} 
              onClick={() => setActiveTab('additional')}
            >Additional Charges</button>
          </div>

          {/*  Package Rates  */}
          {activeTab === 'package' && (
          <div className="tab-content active animate-in fade-in duration-300" id="tab-package">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md flex items-center justify-center">
                  <i className="fas fa-box text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-50 tracking-tight">Package Rates</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Based on actual weight per shipment</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden dark:border dark:border-white/5">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex justify-between">
                  <span className="text-white font-semibold">Package Weight</span>
                  <span className="text-white font-semibold">Rate (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">0.5 lb</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">1 lb</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">2 lbs</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">3 lbs</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$25.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">Additional lb</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$5.00 / lb</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center bg-[#FFF8E7] dark:bg-yellow-900/20">
                    <div className="flex items-center gap-3">
                      <i className="fas fa-star text-yellow-500 text-xs"></i><span className="text-[#555] dark:text-slate-400 font-medium">Packages over 25 lbs</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-yellow-100 dark:bg-yellow-600/30 px-4 py-1.5 rounded-full text-sm">$50.00 flat</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] dark:bg-slate-700 rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-indigo-600 mt-0.5"></i>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Rates are for standard shipping. Express and economy options available at checkout. Volumetric weight may apply for oversized packages.
                </p>
              </div>
            </div>
          </div>
          )}

          {/*  Brokerage Fees  */}
          {activeTab === 'brokerage' && (
          <div className="tab-content animate-in fade-in duration-300" id="tab-brokerage">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md flex items-center justify-center">
                  <i className="fas fa-passport text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-50 tracking-tight">Brokerage Fees</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Customs clearance fee based on declared value (CIF)</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden dark:border dark:border-white/5">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex justify-between">
                  <span className="text-white font-semibold">Package CIF Value (USD)</span>
                  <span className="text-white font-semibold">Fee (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$0 – $500.00</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">FREE</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$501 – $1,000.00</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$1,001 – $2,000.00</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$2,001 – $3,000.00</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">Over $3,000.00</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">0.5% of CIF</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] dark:bg-slate-700 rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-indigo-600 mt-0.5"></i>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  CIF = Cost + Insurance + Freight. This fee covers customs documentation and clearance services. Import duties and VAT are separate and collected by customs.
                </p>
              </div>
            </div>
          </div>
          )}

          {/*  Warranty & Returns  */}
          {activeTab === 'warranty' && (
          <div className="tab-content animate-in fade-in duration-300" id="tab-warranty">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md flex items-center justify-center">
                  <i className="fas fa-undo text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-50 tracking-tight">Warranty Program & Returns</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Return shipping fees based on declared value</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden dark:border dark:border-white/5">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex justify-between">
                  <span className="text-white font-semibold">Declared Value (USD)</span>
                  <span className="text-white font-semibold">Service Fee (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">Up to $500</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$10.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$501 – $1,000</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$15.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">$1,001 – $2,000</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$20.00</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">Over $2,000</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">1% of value</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-[#F1F6F2] dark:bg-slate-700 rounded-[24px] p-4 flex items-start gap-3">
                <i className="fas fa-info-circle text-indigo-600 mt-0.5"></i>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Returns must be initiated within 30 days of delivery. Items must be unused and in original packaging. We handle the entire return process with US retailers.
                </p>
              </div>
            </div>
          </div>
          )}

          {/*  Pickup at Warehouse  */}
          {activeTab === 'pickup' && (
          <div className="tab-content animate-in fade-in duration-300" id="tab-pickup">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md flex items-center justify-center">
                  <i className="fas fa-warehouse text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-50 tracking-tight">Pickup at USA Warehouse</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Self-pickup rates from our US warehouse</p>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden dark:border dark:border-white/5">
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex justify-between">
                  <span className="text-white font-semibold">Weight</span>
                  <span className="text-white font-semibold">Rate (USD)</span>
                </div>
                <div className="divide-y divide-slate-200">
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">1 Kg</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$10.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">2 Kg</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$18.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">3 Kg</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$25.00 / Kg</span>
                  </div>
                  <div className="rate-row flex justify-between px-6 py-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full"></span><span className="text-[#555] dark:text-slate-400 font-medium">5+ Kg</span>
                    </div>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 bg-[#F1F6F2] dark:bg-slate-700 px-4 py-1.5 rounded-full text-sm">$7.00 / Kg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}

          {/*  Additional Charges  */}
          {activeTab === 'additional' && (
          <div className="tab-content animate-in fade-in duration-300" id="tab-additional">
            <div className="max-w-3xl mx-auto reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-md flex items-center justify-center">
                  <i className="fas fa-plus-circle text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-50 tracking-tight">Additional Charges</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Optional and applicable service fees</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-truck text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Local Delivery</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">FREE</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Within Dhaka city (some exceptions apply)</p>
                </div>
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-plane text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Express Shipping</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">+$100</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Per shipment, delivered in 3-5 days</p>
                </div>
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-shield-alt text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Package Insurance</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">1.5%</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Of declared value (min. $5 per shipment)</p>
                </div>
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-user-check text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Membership Fee</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">FREE</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">No monthly or annual fees ever</p>
                </div>
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-camera text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Package Photography</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">$2.00</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Per package, photos sent before shipping</p>
                </div>
                <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-5 shadow-sm dark:border dark:border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600/15 to-indigo-500/15 rounded-md flex items-center justify-center">
                      <i className="fas fa-boxes text-indigo-600"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-50 tracking-tight">Consolidation</h4>
                  </div>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-1">FREE</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Combine packages at no extra charge</p>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/*  CALCULATOR CTA  */}
      <section className="py-12 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] p-5 md:p-6 md:p-12 border border-slate-100 dark:border-white/5 shadow-sm flex flex-col md:flex-row items-center gap-4 md:gap-8 reveal dark:border dark:border-white/5">
            <div className="w-full md:w-1/3">
              <img src="/assets/image (4).png" alt="Calculator" className="w-full h-auto rounded-[24px]" />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-semibold text-3xl text-slate-900 dark:text-slate-50 mb-4 tracking-tight">Want a precise estimate?</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                Use our advanced shipping calculator to get an exact quote based on dimensions, weight, and destination. Compare different shipping methods instantly.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-indigo-600"></i><span className="text-sm font-medium text-slate-900 dark:text-slate-50">Instant Quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-indigo-600"></i><span className="text-sm font-medium text-slate-900 dark:text-slate-50">Compare Methods</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-indigo-600"></i><span className="text-sm font-medium text-slate-900 dark:text-slate-50">No Sign-up Needed</span>
                </div>
              </div>
              <a href="/cost-calculator">
                <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-sm hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-md px-8 py-3 w-full sm:w-auto">Open Cost Calculator</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


