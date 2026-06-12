import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header
      style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/assets/image (8).png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center dark:border-b dark:border-slate-800"
    >
      {/*  Hero Text  */}
      <div className="flex justify-center px-4 pt-32 pb-20 text-center">
        <div className="hero-text">
          <span
            className="inline-block bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30"
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
