import React from 'react';
import Link from 'next/link';

export default function QuickTrackSection() {
  return (
    <section className="py-10 md:py-8 md:py-16 px-4 md:py-8 md:py-16 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="container">
        <div className="bg-slate-900 rounded-[32px] p-6 md:p-16 reveal relative overflow-hidden shadow-md dark:border dark:border-white/5">
          {/* Decorative gradients */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
            <div className="text-white">
              <span className="text-indigo-500 font-medium tracking-wider uppercase text-sm mb-4 block">Stay Updated</span>
              <h3 className="font-semibold text-3xl md:text-3xl md:text-2xl md:text-3xl mb-6 tracking-tight">Track Your Shipment</h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md">Get real-time updates on your package location and estimated delivery date instantly.</p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <i className="fas fa-check text-indigo-500 text-xs"></i>
                  </div>
                  Live location tracking
                </li>
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <i className="fas fa-check text-indigo-500 text-xs"></i>
                  </div>
                  SMS & email notifications
                </li>
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center">
                    <i className="fas fa-check text-indigo-500 text-xs"></i>
                  </div>
                  Delivery history
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-5 md:p-4 md:p-8 shadow-md">
              <div className="mb-6">
                <label className="text-white font-medium block mb-3 text-lg">Enter Tracking Number</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" id="trackInput2" placeholder="e.g. SEC-2025-001234"
                    className="flex-1 w-full bg-white/5 dark:bg-slate-800/5 text-white placeholder-slate-400 border border-white/20 rounded-md px-5 py-4 focus:outline-none focus:border-indigo-500 focus:bg-white/10 dark:bg-slate-800/10 transition-all text-base" />
                  <Link href="/tracking" className="block w-full sm:w-auto">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-8 py-4 rounded-md transition-colors shadow-sm shadow-indigo-600/20 flex items-center justify-center gap-2">
                      <i className="fas fa-search"></i>Track
                    </button>
                  </Link>
                </div>
              </div>
              <Link href="/tracking" className="text-indigo-500 hover:text-indigo-300 text-sm transition-colors flex items-center gap-2 font-medium">
                View full tracking page <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


