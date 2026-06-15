"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator, ArrowRight, Package, FileText, Undo2, Store,
  PlusCircle, Truck, Plane, ShieldCheck, UserCheck, Camera, Layers, Info, Star
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function MainContent() {
  const [activeTab, setActiveTab] = useState('package');

  return (
    <>
      {/* 1. HEADER SECTION (Immersive Dark Hero) */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
          <img
            src="/assets/image (6).png"
            alt="Shipping Rates"
            className="w-full h-full object-cover scale-105"
            suppressHydrationWarning
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">Transparent Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Rates.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Clear, competitive pricing with absolutely no hidden fees. Know exactly what you pay before you ship.
          </p>
        </div>


      </header>

      {/* 2. PROMO BANNER (Sleek SaaS Style) */}
      <section className="py-8 sm:py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-indigo-600 dark:bg-indigo-900/40 border border-indigo-500/20 rounded-[2rem] px-8 sm:px-12 py-8 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            {/* Decorative Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h2 className="font-bold text-2xl sm:text-3xl text-white mb-2 tracking-tight">Save big with smart shopping!</h2>
              <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
                Consolidate multiple packages and save up to 40% on your total shipping cost. Shop from any US store today.
              </p>
            </div>

            <Link href="/services" className="relative z-10 shrink-0 focus:outline-none">
              <button className="bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-lg hover:bg-slate-50 hover:shadow-lg transition-all focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. RATES TABS & DATA */}
      <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Segmented Control (Tabs) */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap sm:flex-nowrap p-1.5 bg-slate-200/60 dark:bg-slate-800/60 rounded-2xl md:rounded-full w-full sm:w-auto overflow-hidden">
              {[
                { id: 'package', label: 'Package Rates' },
                { id: 'brokerage', label: 'Brokerage' },
                { id: 'warranty', label: 'Returns' },
                { id: 'pickup', label: 'Pickup' },
                { id: 'additional', label: 'Extras' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-lg md:rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${activeTab === tab.id
                      ? 'bg-white dark:bg-slate-950 text-indigo-600 dark:text-indigo-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Wrapper */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-white/10 p-6 sm:p-10 transition-all duration-300 min-h-[400px]">

            {/* PACKAGE RATES */}
            {activeTab === 'package' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <Package className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Package Rates</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Based on actual weight per shipment</p>
                  </div>
                </div>

                <div className="flex flex-col border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden mb-6">
                  <div className="flex justify-between bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Package Weight</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Rate (USD)</span>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">0.5 lb</span>
                      <span className="font-bold text-slate-900 dark:text-white">$10.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">1 lb</span>
                      <span className="font-bold text-slate-900 dark:text-white">$15.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">2 lbs</span>
                      <span className="font-bold text-slate-900 dark:text-white">$20.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">3 lbs</span>
                      <span className="font-bold text-slate-900 dark:text-white">$25.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-indigo-50/50 dark:bg-indigo-500/5">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-400">Additional lb</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">$5.00 / lb</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-yellow-50/50 dark:bg-yellow-500/5">
                      <span className="flex items-center gap-2 font-semibold text-yellow-700 dark:text-yellow-500"><Star size={14} /> Packages over 25 lbs</span>
                      <span className="font-bold text-yellow-700 dark:text-yellow-500">$50.00 flat + $4/lb</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-4 flex items-start gap-3 border border-slate-200 dark:border-white/5">
                  <Info className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Rates are for standard shipping. Express and economy options are available at checkout. Volumetric weight may apply for oversized packages.
                  </p>
                </div>
              </div>
            )}

            {/* BROKERAGE FEES */}
            {activeTab === 'brokerage' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <FileText className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Brokerage Fees</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Customs clearance fee based on declared value (CIF)</p>
                  </div>
                </div>

                <div className="flex flex-col border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden mb-6">
                  <div className="flex justify-between bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Package CIF Value</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Fee (USD)</span>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                    <div className="flex justify-between items-center px-6 py-4 bg-emerald-50/50 dark:bg-emerald-500/5">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$0 – $500.00</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">FREE</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$501 – $1,000.00</span>
                      <span className="font-bold text-slate-900 dark:text-white">$10.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$1,001 – $2,000.00</span>
                      <span className="font-bold text-slate-900 dark:text-white">$15.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$2,001 – $3,000.00</span>
                      <span className="font-bold text-slate-900 dark:text-white">$20.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-indigo-50/50 dark:bg-indigo-500/5">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-400">Over $3,000.00</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">0.5% of CIF</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-4 flex items-start gap-3 border border-slate-200 dark:border-white/5">
                  <Info className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    CIF = Cost + Insurance + Freight. This fee covers customs documentation and clearance services. Import duties and VAT are separate and collected directly by customs.
                  </p>
                </div>
              </div>
            )}

            {/* WARRANTY & RETURNS */}
            {activeTab === 'warranty' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <Undo2 className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Warranty & Returns</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Return shipping fees based on declared value</p>
                  </div>
                </div>

                <div className="flex flex-col border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden mb-6">
                  <div className="flex justify-between bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Declared Value</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Service Fee</span>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">Up to $500</span>
                      <span className="font-bold text-slate-900 dark:text-white">$10.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$501 – $1,000</span>
                      <span className="font-bold text-slate-900 dark:text-white">$15.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">$1,001 – $2,000</span>
                      <span className="font-bold text-slate-900 dark:text-white">$20.00</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-indigo-50/50 dark:bg-indigo-500/5">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-400">Over $2,000</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">1% of value</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-4 flex items-start gap-3 border border-slate-200 dark:border-white/5">
                  <Info className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Returns must be initiated within 30 days of delivery. Items must be unused and in original packaging. We handle the entire return process with US retailers on your behalf.
                  </p>
                </div>
              </div>
            )}

            {/* PICKUP */}
            {activeTab === 'pickup' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <Store className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Pickup at Warehouse</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Self-pickup rates from our facilities</p>
                  </div>
                </div>

                <div className="flex flex-col border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden">
                  <div className="flex justify-between bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-white/10">
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Weight</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">Rate (USD)</span>
                  </div>
                  <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">1 Kg</span>
                      <span className="font-bold text-slate-900 dark:text-white">$10.00 / Kg</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">2 Kg</span>
                      <span className="font-bold text-slate-900 dark:text-white">$18.00 / Kg</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4">
                      <span className="font-medium text-slate-700 dark:text-slate-300">3 Kg</span>
                      <span className="font-bold text-slate-900 dark:text-white">$25.00 / Kg</span>
                    </div>
                    <div className="flex justify-between items-center px-6 py-4 bg-indigo-50/50 dark:bg-indigo-500/5">
                      <span className="font-semibold text-indigo-700 dark:text-indigo-400">5+ Kg</span>
                      <span className="font-bold text-indigo-700 dark:text-indigo-400">$7.00 / Kg</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ADDITIONAL CHARGES */}
            {activeTab === 'additional' && (
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20">
                    <PlusCircle className="text-indigo-600 dark:text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Additional Charges</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Optional services and their respective fees</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Local Delivery", desc: "Within Dhaka city (some exceptions apply)", price: "FREE", icon: Truck, highlight: true },
                    { title: "Express Shipping", desc: "Per shipment, delivered in 3-5 days", price: "+$100", icon: Plane },
                    { title: "Package Insurance", desc: "Of declared value (min. $5 per shipment)", price: "1.5%", icon: ShieldCheck },
                    { title: "Membership Fee", desc: "No monthly or annual fees ever", price: "FREE", icon: UserCheck, highlight: true },
                    { title: "Package Photos", desc: "Per package, photos sent before shipping", price: "$2.00", icon: Camera },
                    { title: "Consolidation", desc: "Combine packages at no extra charge", price: "FREE", icon: Layers, highlight: true },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                          <Icon size={18} className="text-slate-500 dark:text-slate-400" />
                          <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                        </div>
                        <p className={`text-2xl font-bold tracking-tight mb-1 ${item.highlight ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>
                          {item.price}
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 4. CALCULATOR CTA (SaaS Split Card) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-6 sm:p-12 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center gap-10 lg:gap-16">

            {/* Image Side */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 shrink-0">
              <img src="/assets/image (4).png" alt="Shipping Calculator" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" suppressHydrationWarning />
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="font-bold text-3xl text-slate-900 dark:text-white mb-4 tracking-tight">Need a precise estimate?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                Use our advanced shipping calculator to get an exact quote based on dimensions, weight, and destination. Compare different shipping methods instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-white/5 shadow-sm">
                  <Calculator size={14} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Instant Quotes</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-white/5 shadow-sm">
                  <UserCheck size={14} className="text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">No Sign-up Needed</span>
                </div>
              </div>

              <Link href="/cost-calculator" className="block focus:outline-none">
                <button className="w-full sm:w-auto px-8 h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 flex items-center justify-center gap-2">
                  Open Cost Calculator <ArrowRight size={18} />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}