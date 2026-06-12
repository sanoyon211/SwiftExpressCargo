import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-slate-50 dark:bg-slate-900 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Simple Process</span>
          <h3 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">How It Works</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Four simple steps to get your international packages delivered right to your doorstep.</p>
        </div>
        
        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-6 md:p-12 left-[12%] right-[12%] h-0.5 bg-slate-100 dark:bg-slate-800 z-0">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-emerald-400 w-full opacity-30 dark:opacity-100"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 stagger reveal relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 border-[6px] border-slate-50 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10 mb-6 group-hover:border-teal-50 dark:group-hover:border-slate-600 group-hover:scale-110 transition-all duration-300 dark:border dark:border-slate-700">
                <span className="text-teal-600 font-bold text-3xl">1</span>
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Free Sign Up</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Create your free account and get a unique US warehouse address instantly.</p>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 border-[6px] border-slate-50 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10 mb-6 group-hover:border-teal-50 dark:group-hover:border-slate-600 group-hover:scale-110 transition-all duration-300 dark:border dark:border-slate-700">
                <span className="text-teal-600 font-bold text-3xl">2</span>
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Shop Online</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Shop from any US store (Amazon, Apple, etc.) using your Swift Express address.</p>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 border-[6px] border-slate-50 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10 mb-6 group-hover:border-teal-50 dark:group-hover:border-slate-600 group-hover:scale-110 transition-all duration-300 dark:border dark:border-slate-700">
                <span className="text-teal-600 font-bold text-3xl">3</span>
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">We Ship It</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We receive, consolidate, process, and securely ship your package to Bangladesh.</p>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white dark:bg-slate-800 border-[6px] border-slate-50 dark:border-slate-700 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/10 mb-6 group-hover:border-teal-50 dark:group-hover:border-slate-600 group-hover:scale-110 transition-all duration-300 dark:border dark:border-slate-700">
                <span className="text-teal-600 font-bold text-3xl">4</span>
              </div>
              <h4 className="font-bold text-xl text-slate-800 dark:text-slate-100 mb-3">Receive Package</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Get your package safely delivered right to your doorstep in days.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


