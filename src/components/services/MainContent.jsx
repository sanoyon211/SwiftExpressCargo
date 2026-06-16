"use client";

import React from 'react';
import Link from 'next/link';
import {
  Search, Plane, Truck, Globe, Check,
  Package, ShieldCheck, Camera, Undo2, ShoppingBag, FileCheck, ArrowRight
} from 'lucide-react';
import Faq from '../home/Faq';

export default function MainContent() {
  const additionalServices = [
    { icon: Package, title: "Package Consolidation", desc: "Combine multiple packages into one and save significantly on shipping costs." },
    { icon: ShieldCheck, title: "Package Insurance", desc: "Protect your valuable items with our comprehensive, hassle-free insurance coverage." },
    { icon: Camera, title: "Package Photography", desc: "Get high-res photos of your package taken before it ships for verification." },
    { icon: Undo2, title: "Return Service", desc: "Need to return an item? We handle returns back to US retailers easily." },
    { icon: ShoppingBag, title: "Personal Shopper", desc: "Can't buy from a US store? We'll shop and ship directly on your behalf." },
    { icon: FileCheck, title: "Customs Clearance", desc: "We handle all documentation and duties for a perfectly smooth process." }
  ];

  return (
    <>
      {/* HEADER SECTION */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
          <img src="/assets/image (1).png" alt="Services" className="w-full h-full object-cover scale-105" suppressHydrationWarning />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">

          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">Comprehensive Logistics</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Premium Services,<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Tailored For You.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Choose the premium shipping option that best fits your timeline, budget, and business requirements.
          </p>

          {/* Glassmorphism Tracking Bar (Like Homepage) */}
          <div className="w-full max-w-xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2 flex items-center gap-2 shadow-2xl transition-all hover:bg-white/10">
              <div className="flex-1 flex items-center gap-3 pl-4">
                <Search size={20} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="bg-transparent text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base w-full h-10"
                />
              </div>
              <Link href="/tracking" className="shrink-0">
                <button className="h-10 sm:h-12 bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 sm:px-8 rounded-full transition-colors flex items-center gap-2 focus:outline-none text-sm sm:text-base">
                  Track <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. CORE SHIPPING SERVICES */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Logistics Options
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Primary Shipping Services
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Choose the premium shipping option that best fits your timeline and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

            {/* USA Shipping */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-10 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20">
                <Plane size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2 tracking-tight">USA Shipping</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-4">From $10/lb</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                Ship directly from any US store to Bangladesh. Get a free US address to shop from Amazon, Walmart, and more.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {['Free US address', 'Package consolidation', '7-14 day delivery', 'Full insurance'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block w-full mt-auto">
                <button className="w-full py-4 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-lg hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none">
                  Get Started Free
                </button>
              </Link>
            </div>

            {/* Local Delivery (Featured) */}
            <div className="relative bg-slate-900 dark:bg-slate-800 rounded-[2rem] p-8 sm:p-10 border border-slate-800 dark:border-white/10 shadow-2xl flex flex-col h-full lg:scale-105 z-10 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-indigo-400 text-white font-bold text-[10px] sm:text-xs px-6 py-1.5 rounded-b-lg shadow-sm tracking-widest uppercase">
                Most Popular
              </div>

              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 backdrop-blur-sm mt-4">
                <Truck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-2xl text-white mb-2 tracking-tight">Local Delivery</h3>
              <p className="text-indigo-400 font-bold text-lg mb-4">Free in Dhaka</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-1">
                Door-to-door delivery throughout Bangladesh. Once your package clears customs, we deliver it right to your home.
              </p>
              <ul className="flex flex-col gap-4 mb-8 relative z-10">
                {['Free delivery in Dhaka', 'All 64 districts', 'Same-day dispatch', 'SMS tracking alerts'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block w-full mt-auto relative z-10">
                <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-indigo-600/25 transition-all focus:outline-none">
                  Get Started Free
                </button>
              </Link>
            </div>

            {/* Regional Shipping */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-10 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-8 border border-indigo-100 dark:border-indigo-500/20">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-2xl text-slate-900 dark:text-white mb-2 tracking-tight">Regional Shipping</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-4">From $8/kg</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1">
                Ship to South Asian countries including India, Pakistan, Nepal, and Sri Lanka with highly competitive rates.
              </p>
              <ul className="flex flex-col gap-4 mb-8">
                {['10+ countries supported', 'Customs assistance', '5-10 day delivery', 'Live international tracking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block w-full mt-auto">
                <button className="w-full py-4 border-2 border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-lg hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-colors focus:outline-none">
                  Get Started Free
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ADDITIONAL SERVICES (Minimalist Flat Grid) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 lg:mb-20">
            <div className="max-w-2xl">
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Value Added
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                Additional Services
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-md md:text-right leading-relaxed">
              Premium extras designed to completely enhance and protect your international shipping experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group flex flex-col items-start text-left focus:outline-none">
                  <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-white/5 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:border-indigo-600 dark:group-hover:bg-indigo-600 shadow-sm">
                    <Icon
                      className="text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Faq />

      {/* 4. CALL TO ACTION (Dark Banner) */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-slate-900 rounded-[2rem] px-6 py-12 sm:p-16 overflow-hidden text-center shadow-2xl border border-slate-800">

            {/* Subtle Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
                Ready to Start Shipping?
              </h2>

              <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                Sign up for free and get your US address today. No monthly fees, no hidden charges. Just simple, fast, and secure logistics.
              </p>

              <Link href="/signup" className="focus:outline-none">
                <button className="h-14 px-10 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-md flex items-center justify-center gap-2 whitespace-nowrap">
                  Create Free Account <ArrowRight size={18} />
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}