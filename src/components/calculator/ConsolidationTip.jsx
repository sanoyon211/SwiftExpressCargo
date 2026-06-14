"use client";

import React from 'react';
import { Lightbulb, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ConsolidationTip() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Premium Dark Widget Card */}
        <div className="relative bg-slate-900 rounded-[2rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">

          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-600/20 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Content: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                <Lightbulb size={16} className="text-indigo-400" /> Pro Tip
              </div>

              <h3 className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
                Save up to 40% with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Consolidation.</span>
              </h3>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
                Order from multiple US stores and combine everything into one secure shipment. Instead of paying expensive shipping fees for 5 separate orders, pay just once for all of them together.
              </p>

              <Link href="/services" className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300 hover:gap-3 transition-all focus:outline-none">
                Learn how consolidation works <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right Content: Dashboard-style Data Comparison */}
            <div className="flex flex-col gap-4 w-full max-w-md lg:max-w-none mx-auto">

              {/* Without Consolidation */}
              <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Shipping Separately</span>
                  <span className="text-white font-bold text-base sm:text-lg">5 × $15 = $75</span>
                </div>
                <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400/80 rounded-full w-full"></div>
                </div>
              </div>

              {/* With Consolidation */}
              <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-indigo-500/30 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/5"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-300 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      With Swift Express
                    </span>
                    <span className="text-emerald-400 font-bold text-base sm:text-lg">1 × $45 = $45</span>
                  </div>
                  <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[60%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              </div>

              {/* Savings Summary */}
              <div className="flex justify-end items-center mt-2 gap-2 text-slate-300 text-sm sm:text-base">
                <TrendingDown size={18} className="text-emerald-400" />
                <span>You save <strong className="text-emerald-400 font-bold">$30 (40%)</strong> on 5 packages</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}