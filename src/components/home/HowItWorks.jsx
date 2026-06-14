"use client";

import React from 'react';
import { UserPlus, ShoppingCart, PlaneTakeoff, PackageCheck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Free Sign Up',
      description: 'Create your free account instantly. You will immediately receive a unique, tax-free US warehouse address to use at checkout for any US-based online store.',
      icon: UserPlus,
    },
    {
      id: 2,
      title: 'Shop Online',
      description: 'Shop your favorite brands (Amazon, Apple, Sephora, etc.) and use your new Swift Express US address as the delivery destination.',
      icon: ShoppingCart,
    },
    {
      id: 3,
      title: 'We Ship It',
      description: 'Once your items arrive at our warehouse, we securely receive, inspect, and consolidate them to save you money, then ship them directly to Bangladesh.',
      icon: PlaneTakeoff,
    },
    {
      id: 4,
      title: 'Receive Package',
      description: 'Sit back and relax. Your consolidated packages are safely delivered right to your doorstep within a matter of days.',
      icon: PackageCheck,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Simple Process
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              Your bridge to <br className="hidden lg:block" /> US shopping.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              We've streamlined the international shipping process. Four simple steps are all it takes to get your favorite international products delivered safely to your doorstep.
            </p>

            {/* Trust Badge (Visible on Desktop) */}
            <div className="hidden lg:flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/10 w-fit">
              <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-lg">
                🚀
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">
                Fast & Reliable Delivery
              </div>
            </div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="lg:col-span-7 relative">

            {/* The vertical connecting line */}
            <div className="absolute left-[23px] sm:left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500/30 via-slate-200 to-transparent dark:from-indigo-500/30 dark:via-slate-800 dark:to-transparent"></div>

            <div className="flex flex-col gap-10 sm:gap-14 relative z-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative flex gap-6 sm:gap-8 group">

                    {/* Timeline Node & Icon */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white dark:bg-slate-950 border-4 border-slate-50 dark:border-slate-900 rounded-full flex items-center justify-center shadow-sm group-hover:border-indigo-50 dark:group-hover:border-indigo-900/20 transition-colors duration-300">
                        <div className="w-8 h-8 sm:w-14 sm:h-14 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                          <Icon className="text-slate-500 dark:text-slate-400 group-hover:text-white transition-colors w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-1 -right-1 sm:top-0 sm:-right-1 w-5 h-5 sm:w-7 sm:h-7 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md ring-2 ring-white dark:ring-slate-950">
                        {step.id}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="pt-1 sm:pt-4">
                      <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-2 sm:mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}