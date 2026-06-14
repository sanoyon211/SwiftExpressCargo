"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Deep Dark Minimalist Container */}
        <div className="relative bg-slate-900 rounded-[2rem] px-6 py-16 sm:px-16 sm:py-24 overflow-hidden text-center shadow-2xl border border-slate-800">

          {/* Subtle Elegance Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">

            <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mb-8 shadow-sm">
              <Rocket size={32} className="text-white" strokeWidth={1.5} />
            </div>

            <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight leading-tight">
              Ready to simplify your <br className="hidden sm:block" /> global shipping?
            </h2>

            <p className="text-slate-400 text-base sm:text-lg mb-10 font-normal leading-relaxed">
              Join thousands of satisfied customers who trust Swift Express. Create your free account today and get your unique US tax-free address instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-white hover:bg-slate-100 text-slate-900 text-sm sm:text-base font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 flex items-center justify-center gap-2">
                  Create Free Account
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 sm:h-14 px-8 bg-transparent hover:bg-white/5 text-white border border-slate-700 hover:border-slate-500 text-sm sm:text-base font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 flex items-center justify-center">
                  Talk to Sales
                </button>
              </Link>
            </div>

            <p className="mt-8 text-slate-500 text-sm">
              No credit card required • Setup in 2 minutes
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}