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
        
        <div className="relative mt-8">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-1 bg-slate-100 dark:bg-slate-800 rounded-full z-0 overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-400 to-emerald-400 w-full opacity-30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-12 stagger reveal relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-teal-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-700 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-user-plus text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  1
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 w-full p-6 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-transparent group-hover:border-teal-100 dark:group-hover:border-slate-700 group-hover:shadow-xl group-hover:shadow-teal-500/5">
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Free Sign Up</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Create your free account and get a unique US warehouse address instantly.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-teal-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-700 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-cart-shopping text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  2
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 w-full p-6 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-transparent group-hover:border-teal-100 dark:group-hover:border-slate-700 group-hover:shadow-xl group-hover:shadow-teal-500/5">
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Shop Online</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Shop from any US store (Amazon, Apple, etc.) using your Swift Express address.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-teal-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-700 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-plane-departure text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  3
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 w-full p-6 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-transparent group-hover:border-teal-100 dark:group-hover:border-slate-700 group-hover:shadow-xl group-hover:shadow-teal-500/5">
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">We Ship It</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We receive, consolidate, process, and securely ship your package to Bangladesh.</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-teal-500/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-teal-500/20 transition-all duration-300 border border-slate-100 dark:border-slate-700 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-box-open text-teal-500 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  4
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 w-full p-6 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-transparent group-hover:border-teal-100 dark:group-hover:border-slate-700 group-hover:shadow-xl group-hover:shadow-teal-500/5">
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Receive Package</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Get your package safely delivered right to your doorstep in days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


