"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CtaBanner() {
  return (
    // 🔴 Outer Section Padding কমানো হয়েছে (py-12 sm:py-16) এবং গ্লোবাল থিম ম্যাচ করা হয়েছে
    <section className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0A0F1C] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deep Dark Minimalist Container (ভেতরের প্যাডিং কমিয়ে py-12 sm:py-16 করা হয়েছে) */}
        <div className="relative bg-[#0f1629] rounded-3xl px-6 py-12 sm:px-12 sm:py-16 overflow-hidden text-center shadow-xl border border-slate-800 dark:border-white/10 group">

          {/* Subtle Elegance Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[250px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-80"></div>

          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">

            <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
              <Rocket size={28} className="text-white" strokeWidth={2} />
            </div>

            <h2 className="font-extrabold text-white text-3xl sm:text-4xl mb-4 tracking-tight leading-tight">
              Ready to simplify your <br className="hidden sm:block" /> global shipping?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mb-8 font-medium leading-relaxed">
              Join thousands of satisfied customers who trust Swift Express. Create your free account today and get your unique US tax-free address instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-8 bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f1629] flex items-center justify-center gap-2">
                  Create Free Account
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-8 bg-transparent hover:bg-white/5 text-white border border-slate-600 hover:border-slate-400 text-sm font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#0f1629] flex items-center justify-center">
                  Talk to Sales
                </button>
              </Link>
            </div>

            <p className="mt-6 text-slate-500 text-xs sm:text-sm font-medium">
              No credit card required • Setup in 2 minutes
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}