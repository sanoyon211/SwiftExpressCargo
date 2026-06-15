"use client";

import React from 'react';
import { Package, ShieldCheck, MapPin, Headset } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Package Consolidation',
      description: 'Combine multiple packages into one shipment. Our smart consolidation process saves you significantly on international shipping costs.',
      icon: Package,
    },
    {
      id: 2,
      title: 'Security & Reliability',
      description: 'Your packages are fully insured, meticulously tracked, and handled with the utmost care in our climate-controlled facilities.',
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: 'Real-time Tracking',
      description: 'Experience complete transparency. Track your shipment at every micro-step, from our US warehouse directly to your doorstep.',
      icon: MapPin,
    },
    {
      id: 4,
      title: '24/7 Global Support',
      description: 'Our dedicated support team is always available. Whether its a holiday or midnight, we are here to assist you with your cargo.',
      icon: Headset,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
            Our Advantage
          </span>
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
            Why choose <br className="hidden sm:block" /> Swift Express?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            We don't just ship packages; we deliver peace of mind. Experience a premium logistics service built on reliability, speed, and modern technology.
          </p>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-8 sm:p-10 border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[340px] transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:hover:border-white/20 dark:hover:bg-slate-800/50"
              >
                {/* Subtle Hover Glow (Decorative) */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top: Icon Box */}
                <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-sm mb-12 group-hover:scale-110 transition-transform duration-500">
                  <Icon
                    size={28}
                    className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Bottom: Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}