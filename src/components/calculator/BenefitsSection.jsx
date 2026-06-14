"use client";

import React from 'react';
import { Package, ShieldCheck, MapPin, Headset } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Package Consolidation",
      description: "Combine multiple packages and save up to 40% on your total shipping cost seamlessly.",
      icon: Package
    },
    {
      title: "Security & Reliability",
      description: "Every package is fully insured and handled with meticulous care throughout transit.",
      icon: ShieldCheck
    },
    {
      title: "Real-Time Tracking",
      description: "Track your shipment at every micro-step from our US warehouse directly to your door.",
      icon: MapPin
    },
    {
      title: "24/7 Global Support",
      description: "Our dedicated support team is available round the clock via phone, email & WhatsApp.",
      icon: Headset
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Included Features
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Your Benefits with Swift Express
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-md md:text-right leading-relaxed">
            Everything you need for a seamless shipping experience, included automatically with every shipment.
          </p>
        </div>

        {/* Minimalist Flat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 sm:gap-y-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-start text-left focus:outline-none"
              >
                {/* Minimal Icon Wrapper */}
                <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-white/5 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:border-indigo-600 dark:group-hover:bg-indigo-600 shadow-sm">
                  <Icon
                    className="text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
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