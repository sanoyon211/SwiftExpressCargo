import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header
      style={{ 'backgroundImage': 'url("/assets/image (8).png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
      {/*  Hero Text  */}
      <div className="flex justify-center px-4 py-20 md:py-32 text-center">
        <div className="hero-text">
          <span
            className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
          >
            🧮 Instant Price Estimate
          </span>
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Cost Calculator
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Get an accurate shipping estimate in seconds — no sign-up required
          </p>
          <div className="flex gap-2 justify-center">
            <div className="h-[10px] w-[40px] bg-teal-500 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/*  WhatsApp  */}
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-teal-500 to-emerald-400 w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center shadow-lg pulse-green"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>
    </>
  );
}
