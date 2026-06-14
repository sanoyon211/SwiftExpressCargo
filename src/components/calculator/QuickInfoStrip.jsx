import React from 'react';
import Link from 'next/link';

export default function QuickInfoStrip() {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-white/5 py-4 px-4">
      <div className="container">
        <div
          className="flex flex-wrap justify-center md:justify-between gap-4 text-sm text-slate-500 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-bolt text-indigo-600"></i
            ><span>Instant estimate — no sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-indigo-600"></i
            ><span>All packages fully insured</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-boxes text-indigo-600"></i
            ><span>Save up to 40% with consolidation</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-headset text-indigo-600"></i
            ><span>24/7 customer support</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
