"use client";

import React from 'react';
import { Zap, ShieldCheck, Package, Headset } from 'lucide-react';

export default function QuickInfoStrip() {
  const infoItems = [
    { icon: Zap, text: "Instant Estimate" },
    { icon: ShieldCheck, text: "Fully Insured" },
    { icon: Package, text: "Free Consolidation" },
    { icon: Headset, text: "24/7 Support" }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 py-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 text-sm font-semibold text-slate-600 dark:text-slate-400 w-full">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon size={16} className="text-indigo-500 dark:text-indigo-400" strokeWidth={2.5} />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}