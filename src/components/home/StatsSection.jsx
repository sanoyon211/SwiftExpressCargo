"use client";

import React from 'react';
import { Package, Users, Globe, Star } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { id: 1, icon: Package, number: "50k+", label: "Packages Delivered" },
    { id: 2, icon: Users, number: "15k+", label: "Happy Customers" },
    { id: 3, icon: Globe, number: "25+", label: "Countries Served" },
    { id: 4, icon: Star, number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divided Clean Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-8 md:divide-x divide-slate-200 dark:divide-white/10 text-center md:text-left">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className={`flex flex-col md:pl-8 ${index === 0 ? 'md:pl-0' : ''}`}>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Icon size={18} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2} />
                  <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}