import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="py-10 md:py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="flex justify-between items-start mb-10 reveal">
            <div>
              <div className="section-divider mb-3" style={{ 'margin': '0 0 12px 0' }}></div>
              <h2 className="font-bold text-2xl md:text-[36px] text-slate-900 dark:text-slate-50">Our Blog</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Tips, guides and shipping news</p>
            </div>
            <Link href="/blog"><button className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-lg hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 inline-flex items-center justify-center shadow-md text-sm px-5 py-2.5">View All</button></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
            {recentPosts.map((post) => (
              <article key={post.slug} className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] shadow-sm overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="img-zoom h-52">
                  <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="badge text-xs mb-3 inline-block">{post.category}</span>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-slate-50 mb-2">{post.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm hover:gap-3 transition-all">
                    Read More <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
