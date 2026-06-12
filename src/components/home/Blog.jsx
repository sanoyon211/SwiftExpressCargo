import React from 'react';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
  <div className="container">
    <div className="flex justify-between items-start mb-10 reveal">
      <div>
        <div className="section-divider mb-3" style={{ 'margin': '0 0 12px 0' }}></div>
        <h2 className="font-bold text-2xl md:text-[36px] text-slate-900 dark:text-slate-50">Our Blog</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Tips, guides and shipping news</p>
      </div>
      <a href="/blog"><button className="btn-primary text-sm px-5 py-2.5">View All</button></a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
      <article className="card-hover bg-white dark:bg-slate-800 rounded-[24px] shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2041.png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Shipping Tips</span>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">How to Package Your Items for International Shipping</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Learn the best practices for packaging your items to ensure they arrive safely.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
      <article className="card-hover bg-white dark:bg-slate-800 rounded-[24px] shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2042 (2).png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Savings Guide</span>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">Top 5 Ways to Save on Shipping Costs from USA</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">Discover smart strategies to reduce your international shipping expenses significantly.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
      <article className="card-hover bg-white dark:bg-slate-800 rounded-[24px] shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
        <div className="img-zoom h-52"><img src="/assets/Rectangle 2042 (3).png" alt="Blog" className="w-full h-full object-cover" /></div>
        <div className="p-6">
          <span className="badge text-xs mb-3 inline-block">Guide</span>
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">Understanding Customs & Duties for Bangladesh</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">A complete guide to navigating customs procedures for your international shipments.</p>
          <a href="/read-more" className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all">Read More <i className="fas fa-arrow-right text-xs"></i></a>
        </div>
      </article>
    </div>
  </div>
</section>
    </>
  );
}
