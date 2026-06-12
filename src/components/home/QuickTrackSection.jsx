import React from 'react';
import Link from 'next/link';

export default function QuickTrackSection() {
  return (
    <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="bg-slate-900 rounded-[32px] p-10 md:p-16 reveal relative overflow-hidden shadow-2xl dark:border dark:border-slate-700">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-white">
              <span className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Stay Updated</span>
              <h3 className="font-bold text-3xl md:text-5xl mb-6">Track Your Shipment</h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md">Get real-time updates on your package location and estimated delivery date instantly.</p>
              
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <i className="fas fa-check text-teal-400 text-xs"></i>
                  </div>
                  Live location tracking
                </li>
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <i className="fas fa-check text-teal-400 text-xs"></i>
                  </div>
                  SMS & email notifications
                </li>
                <li className="flex items-center gap-4 text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                    <i className="fas fa-check text-teal-400 text-xs"></i>
                  </div>
                  Delivery history
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 shadow-2xl">
              <div className="mb-6">
                <label className="text-white font-medium block mb-3 text-lg">Enter Tracking Number</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" id="trackInput2" placeholder="e.g. SEC-2025-001234"
                    className="flex-1 bg-white/5 dark:bg-slate-800/5 text-white placeholder-slate-400 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-400 focus:bg-white/10 dark:bg-slate-800/10 transition-all text-base" />
                  <Link href="/tracking">
                    <button className="bg-teal-500 hover:bg-teal-400 text-white font-medium px-8 py-4 rounded-xl transition-colors shadow-lg shadow-teal-500/20 w-full sm:w-auto h-full flex items-center justify-center gap-2">
                      <i className="fas fa-search"></i>Track
                    </button>
                  </Link>
                </div>
              </div>
              <Link href="/tracking" className="text-teal-400 hover:text-teal-300 text-sm transition-colors flex items-center gap-2 font-medium">
                View full tracking page <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
