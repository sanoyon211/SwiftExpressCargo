import React from 'react';
import Link from 'next/link';

export default function BenefitsSection() {
  return (
    <>
      <section className="py-14 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-10 reveal">
          <div
            style={{ 'width': '60px', 'height': '4px', 'background': 'linear-gradient(135deg, #6da015, #46c0a2)', 'borderRadius': '2px', 'margin': '0 auto 14px' }}
          ></div>
          <h2 className="font-semibold text-2xl md:text-3xl text-slate-900 dark:text-slate-50 tracking-tight">
            Your Benefits with Swift Express
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Everything included in every shipment
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger reveal"
        >
          <div
            className="ben-card bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-6 flex flex-col items-center text-center gap-4 shadow-sm dark:border dark:border-white/5"
          >
            <div
              className="w-14 h-14 bg-indigo-50 rounded-[24px] flex items-center justify-center"
            >
              <i className="fas fa-box-open text-indigo-600 text-2xl"></i>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Package Consolidation</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Combine multiple packages and save up to 40% on your total
              shipping cost.
            </p>
          </div>
          <div
            className="ben-card bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-6 flex flex-col items-center text-center gap-4 shadow-sm dark:border dark:border-white/5"
          >
            <div
              className="w-14 h-14 bg-indigo-50 rounded-[24px] flex items-center justify-center"
            >
              <i className="fas fa-shield-alt text-indigo-600 text-2xl"></i>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Security & Reliability</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Every package is fully insured and handled with care throughout
              transit.
            </p>
          </div>
          <div
            className="ben-card bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-6 flex flex-col items-center text-center gap-4 shadow-sm dark:border dark:border-white/5"
          >
            <div
              className="w-14 h-14 bg-indigo-50 rounded-[24px] flex items-center justify-center"
            >
              <i className="fas fa-map-marker-alt text-indigo-600 text-2xl"></i>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Real-Time Tracking</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Track your shipment at every step from US warehouse to your door.
            </p>
          </div>
          <div
            className="ben-card bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-white/5 p-6 flex flex-col items-center text-center gap-4 shadow-sm dark:border dark:border-white/5"
          >
            <div
              className="w-14 h-14 bg-indigo-50 rounded-[24px] flex items-center justify-center"
            >
              <i className="fas fa-headset text-indigo-600 text-2xl"></i>
            </div>
            <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">24/7 Support</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Our dedicated support team is available round the clock via phone,
              email & WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
