import React from 'react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="py-10 md:py-8 md:py-16 px-4 md:py-8 md:py-16 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-white dark:bg-slate-900 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20 reveal">
          <span className="text-indigo-700 font-medium tracking-wider uppercase text-sm mb-3 block">Simple Process</span>
          <h3 className="font-semibold text-3xl md:text-3xl md:text-2xl md:text-3xl text-slate-900 dark:text-slate-50 mb-6 tracking-tight">How It Works</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Four simple steps to get your international packages delivered right to your doorstep.</p>
        </div>
        
        <div className="relative mt-8">
          {/* Connection line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] border-t-2 border-dashed border-slate-200 dark:border-white/10 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-6 md:gap-12 stagger reveal relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm shadow-indigo-600/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-indigo-600/20 transition-all duration-300 border border-slate-100 dark:border-white/5 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-user-plus text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  1
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 w-full p-6 md:p-4 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-white/5 group-hover:border-indigo-200 dark:group-hover:border-slate-700 group-hover:shadow-sm group-hover:shadow-indigo-600/5">
                <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors tracking-tight">Free Sign Up</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Create your free account and get a unique US warehouse address instantly.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm shadow-indigo-600/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-indigo-600/20 transition-all duration-300 border border-slate-100 dark:border-white/5 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-cart-shopping text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  2
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 w-full p-6 md:p-4 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-white/5 group-hover:border-indigo-200 dark:group-hover:border-slate-700 group-hover:shadow-sm group-hover:shadow-indigo-600/5">
                <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors tracking-tight">Shop Online</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Shop from any US store (Amazon, Apple, etc.) using your Swift Express address.</p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm shadow-indigo-600/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-indigo-600/20 transition-all duration-300 border border-slate-100 dark:border-white/5 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-plane-departure text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  3
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 w-full p-6 md:p-4 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-white/5 group-hover:border-indigo-200 dark:group-hover:border-slate-700 group-hover:shadow-sm group-hover:shadow-indigo-600/5">
                <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors tracking-tight">We Ship It</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">We receive, consolidate, process, and securely ship your package to Bangladesh.</p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm shadow-indigo-600/5 mb-8 group-hover:-translate-y-2 group-hover:shadow-indigo-600/20 transition-all duration-300 border border-slate-100 dark:border-white/5 z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <i className="fas fa-box-open text-indigo-600 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-sm shadow-md border-2 border-white dark:border-slate-900">
                  4
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 w-full p-6 md:p-4 md:p-8 rounded-[24px] group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300 border border-slate-100 dark:border-white/5 group-hover:border-indigo-200 dark:group-hover:border-slate-700 group-hover:shadow-sm group-hover:shadow-indigo-600/5">
                <h4 className="font-semibold text-xl text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-700 dark:group-hover:text-indigo-500 transition-colors tracking-tight">Receive Package</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Get your package safely delivered right to your doorstep in days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


