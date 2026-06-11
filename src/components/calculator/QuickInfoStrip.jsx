import React from 'react';
import Link from 'next/link';

export default function QuickInfoStrip() {
  return (
    <>
      <div className="bg-white border-b border-slate-200 py-4 px-4">
      <div className="container">
        <div
          className="flex flex-wrap justify-center md:justify-between gap-4 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <i className="fas fa-bolt text-teal-500"></i
            ><span>Instant estimate — no sign-up needed</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-teal-500"></i
            ><span>All packages fully insured</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-boxes text-teal-500"></i
            ><span>Save up to 40% with consolidation</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-headset text-teal-500"></i
            ><span>24/7 customer support</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
