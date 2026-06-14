import React from 'react';
import Link from 'next/link';

export default function ConsolidationTip() {
  return (
    <>
      <section className="py-10 px-4 bg-white dark:bg-slate-900">
      <div className="container reveal">
        <div
          className="bg-gradient-to-r from-slate-900 to-[#1a3d8c] rounded-[32px] p-5 md:p-6 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="text-white">
              <div
                className="inline-block bg-white/20 dark:bg-slate-800/20 text-white text-xs px-3 py-1.5 rounded-full mb-4 font-medium"
              >
                💡 PRO TIP
              </div>
              <h3 className="font-semibold text-2xl md:text-3xl mb-3 tracking-tight">
                Save up to 40% with Package Consolidation
              </h3>
              <p className="text-white/80 leading-relaxed">
                Order from multiple US stores and combine everything into one
                shipment. Instead of paying shipping for 5 separate orders, pay
                once for all of them together.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div
                className="bg-white/10 dark:bg-slate-800/10 rounded-[24px] p-5 backdrop-blur-sm border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/80 text-sm"
                    >Without Consolidation</span
                  >
                  <span className="text-red-300 font-semibold">5 × $15 = $75</span>
                </div>
                <div className="h-2 bg-white/20 dark:bg-slate-800/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400 rounded-full"
                    style={{ 'width': '100%' }}
                  ></div>
                </div>
              </div>
              <div
                className="bg-white/10 dark:bg-slate-800/10 rounded-[24px] p-5 backdrop-blur-sm border border-white/20"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/80 text-sm">With Consolidation</span>
                  <span className="text-indigo-500 font-semibold">1 × $45 = $45</span>
                </div>
                <div className="h-2 bg-white/20 dark:bg-slate-800/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ 'width': '60%' }}
                  ></div>
                </div>
              </div>
              <p className="text-white/70 text-xs text-right">
                Save <strong className="text-indigo-500">$30 (40%)</strong> on 5
                packages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


