"use client";

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, ArrowRight, Package } from 'lucide-react';

export default function QuickTrackSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Text */}
          <div className="lg:col-span-5">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Real-time Visibility
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Track your shipment <br className="hidden lg:block" /> instantly.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              No more guessing games. Enter your tracking number to get precise, real-time updates on your package's location and estimated delivery date.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <MapPin size={18} className="text-emerald-500" /> Exact live location updates
              </div>
              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <Package size={18} className="text-emerald-500" /> Complete delivery timeline
              </div>
            </div>
          </div>

          {/* Right Column: App-like Tracking Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-2xl overflow-hidden">

              {/* Fake App Header */}
              <div className="bg-slate-100 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="ml-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Tracking Portal
                </span>
              </div>

              {/* App Body */}
              <div className="p-6 sm:p-10">
                <label htmlFor="quickTrack" className="text-slate-900 dark:text-white font-semibold block mb-3 text-lg">
                  Enter Tracking Number
                </label>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Usually starts with SEC followed by numbers (e.g. SEC-2025-1234)
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Search size={20} className="text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="quickTrack"
                      placeholder="SEC-..."
                      className="w-full h-14 pl-12 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <Link href="/tracking" className="w-full sm:w-auto shrink-0">
                    <button className="w-full sm:w-auto h-14 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-sm flex items-center justify-center gap-2">
                      Track Package
                    </button>
                  </Link>
                </div>

                <Link href="/tracking" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:gap-3 transition-all focus:outline-none">
                  Advanced Tracking Options <ArrowRight size={16} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}