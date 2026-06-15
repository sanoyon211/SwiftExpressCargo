"use client";

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">

      {/* Background Image & Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
        <img
          src="/assets/image.png"
          alt="Tracking Background"
          className="w-full h-full object-cover scale-105"
          suppressHydrationWarning
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">

        {/* Glassmorphism Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">Real-Time Visibility</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          Track Your<br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Package.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Enter your tracking number below to see the current status and precise location of your shipment instantly.
        </p>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 group focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative bg-[#25D366] hover:bg-[#20bd5a] h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
          <FaWhatsapp className="text-white text-3xl md:text-4xl" />

          {/* Ping Animation */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3 md:h-4 md:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500 border-2 border-[#25D366]"></span>
          </span>
        </div>
      </a>

    </header>
  );
}