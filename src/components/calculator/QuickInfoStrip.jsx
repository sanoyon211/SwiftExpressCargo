"use client";

import React from 'react';
import { Zap, ShieldCheck, Package, Headset } from 'lucide-react';

export default function QuickInfoStrip() {
  const infoItems = [
    {
      id: 1,
      icon: Zap,
      text: "Instant estimate — no sign up needed",
    },
    {
      id: 2,
      icon: ShieldCheck,
      text: "All packages fully insured",
    },
    {
      id: 3,
      icon: Package,
      text: "Save up to 40% with consolidation",
    },
    {
      id: 4,
      icon: Headset,
      text: "24/7 customer support",
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Strip Container */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-6 md:gap-y-0 text-sm font-medium text-slate-600 dark:text-slate-400 md:divide-x divide-slate-200 dark:divide-white/10 w-full">

          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-2.5 w-full sm:w-auto justify-center md:flex-1 ${index === 0 ? 'md:pl-0 md:justify-start' : 'md:justify-center'
                  } ${index === infoItems.length - 1 ? 'md:pr-0 md:justify-end' : ''
                  }`}
              >
                <Icon
                  size={16}
                  className="text-indigo-600 dark:text-indigo-400 shrink-0"
                  strokeWidth={2.5}
                />
                <span className="truncate">{item.text}</span>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}