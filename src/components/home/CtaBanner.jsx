import React from 'react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-20 px-4">
      <div className="container">
        <div className="relative bg-slate-900 rounded-[40px] md:rounded-[60px] px-8 md:px-20 py-16 md:py-24 overflow-hidden text-center reveal shadow-2xl">
          {/* Dynamic background gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 mix-blend-overlay"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/30 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-teal-300 text-sm font-medium mb-6">
              Start Shipping Today
            </span>
            <h2 className="font-bold text-white text-4xl md:text-6xl mb-6 tracking-tight">Hassle-Free Shipping,<br className="hidden md:block"/> Every Time</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join thousands of satisfied customers shipping from USA to Bangladesh with Swift Express Cargo. Secure, fast, and remarkably affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/sign-up">
                <button className="bg-teal-500 text-white font-medium px-10 py-4 rounded-full hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Sign Up For Free
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/5 backdrop-blur-md text-white font-medium px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
