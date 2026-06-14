import React from 'react';

export default function StatsSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800/50 py-8 md:py-16 border-b border-slate-100 dark:border-white/5 relative z-10 -mt-10 rounded-t-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center stagger reveal">
          <div className="flex flex-col items-center gap-3 p-4 group">
            <div className="w-16 h-16 bg-indigo-50 group-hover:bg-indigo-600 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
              <i className="fas fa-box text-indigo-600 group-hover:text-white text-2xl transition-colors duration-300"></i>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50" data-target="50000" data-suffix="+">50k+</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Packages Delivered</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 group">
            <div className="w-16 h-16 bg-indigo-50 group-hover:bg-indigo-600 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
              <i className="fas fa-users text-indigo-600 group-hover:text-white text-2xl transition-colors duration-300"></i>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50" data-target="15000" data-suffix="+">15k+</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Happy Customers</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 group">
            <div className="w-16 h-16 bg-indigo-50 group-hover:bg-indigo-600 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
              <i className="fas fa-globe text-indigo-600 group-hover:text-white text-2xl transition-colors duration-300"></i>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50" data-target="25" data-suffix="+">25+</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Countries Served</div>
          </div>
          <div className="flex flex-col items-center gap-3 p-4 group">
            <div className="w-16 h-16 bg-indigo-50 group-hover:bg-indigo-600 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
              <i className="fas fa-star text-indigo-600 group-hover:text-white text-2xl transition-colors duration-300"></i>
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-50" data-target="98" data-suffix="%">98%</div>
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}


