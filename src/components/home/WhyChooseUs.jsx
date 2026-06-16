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
    // 🔴 গ্লোবাল ডার্ক থিম bg-[#0A0F1C] এর সাথে ম্যাচ করা হয়েছে
    <section className="py-16 sm:py-24 bg-white dark:bg-[#0A0F1C] border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
            Our Advantage
          </span>
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
            Why choose <br className="hidden sm:block" /> Swift Express?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            We don't just ship packages; we deliver peace of mind. Experience a premium logistics service built on reliability, speed, and modern technology.
          </p>
        </div>

        {/* Premium Bento Grid - Compact Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                // 🔴 min-h বাদ দেওয়া হয়েছে, p-6/p-8 করা হয়েছে এবং rounded-2xl দেওয়া হয়েছে
                className="group relative bg-slate-50 dark:bg-[#0f1629] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-indigo-400/30"
              >
                {/* Subtle Hover Glow (Decorative) */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top: Icon Box (সাইজ ও নিচের মার্জিন কমানো হয়েছে) */}
                <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-[#1a233a] rounded-xl border border-slate-200 dark:border-white/5 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all duration-500">
                  <Icon
                    size={24}
                    className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>

                {/* Bottom: Content */}
                <div className="relative z-10">
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 sm:mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
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