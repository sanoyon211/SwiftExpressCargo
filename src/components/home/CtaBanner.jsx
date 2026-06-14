import React from 'react';
import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="py-12 md:py-8 md:py-16 px-4 px-4">
      <div className="container">
        <div className="relative bg-slate-900 rounded-[40px] md:rounded-[60px] px-8 md:px-20 py-8 md:py-16 md:py-8 md:py-16 overflow-hidden text-center reveal shadow-md dark:border dark:border-white/5">
          {/* Dynamic background gradients */}
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border border-white/20 text-indigo-300 text-sm font-medium mb-6">
              Start Shipping Today
            </span>
            <h2 className="font-semibold text-white text-2xl md:text-3xl md:text-2xl md:text-3xl md:text-3xl md:text-2xl md:text-3xl mb-6 tracking-tight">Hassle-Free Shipping,<br className="hidden md:block"/> Every Time</h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join thousands of satisfied customers shipping from USA to Bangladesh with Swift Express Cargo. Secure, fast, and remarkably affordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/sign-up">
                <button className="bg-indigo-600 text-white font-medium px-10 py-4 rounded-full hover:bg-indigo-500 shadow-sm shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                  Sign Up For Free
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white/5 dark:bg-slate-800/5 backdrop-blur-md text-white font-medium px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 dark:bg-slate-800/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
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
