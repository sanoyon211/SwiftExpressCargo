"use client";

import React from 'react';
import { Lightbulb, TrendingDown } from 'lucide-react';

export default function ConsolidationTip() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Soft Modern Banner */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-[2rem] p-8 sm:p-10 border border-indigo-100 dark:border-indigo-500/20 flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Left: Text */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider mb-3">
              <Lightbulb size={18} /> Pro Tip
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-2xl sm:text-3xl mb-3 tracking-tight">
              Save up to 40% with Consolidation.
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Order from multiple US stores and combine everything into one shipment. Instead of paying shipping for 5 separate orders, pay once for all of them together.
            </p>
          </div>

          {/* Right: Visual Savings Card */}
          <div className="w-full lg:w-auto flex-shrink-0 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm">
            <div className="flex flex-col gap-4 min-w-[280px]">

              <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Separate Orders (5)</span>
                <span className="text-slate-400 font-semibold line-through decoration-red-400">$75.00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-900 dark:text-white font-bold text-base flex items-center gap-2">
                  Consolidated
                </span>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">$45.00</span>
              </div>

              <div className="mt-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 uppercase tracking-wide">
                <TrendingDown size={14} /> You save $30.00
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}