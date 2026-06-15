"use client";

import React from 'react';
import { Calculator } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="relative w-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">

      {/* Background Image & Gradient Overlays (Matches About/Blog/Contact Pages) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
        <img
          src="/assets/image (8).png"
          alt="Cost Calculator Background"
          className="w-full h-full object-cover scale-105"
          suppressHydrationWarning
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-24 pb-16 text-center">

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-indigo-300 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
          <Calculator size={16} /> Transparent Pricing
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Calculator</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Get an accurate, instant shipping estimate in seconds. No hidden fees, no sign-up required.
        </p>

      </div>



    </header>
  );
}