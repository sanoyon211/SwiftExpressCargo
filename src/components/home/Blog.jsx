"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export default function Blog() {
  // Getting the latest 3 posts
  const recentPosts = blogPosts.slice(0, 3);

  // Separating the first post as the "Featured" post
  const featuredPost = recentPosts[0];
  const sidePosts = recentPosts.slice(1, 3);

  // Fallback check just in case the blog data is empty
  if (!featuredPost) return null;

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Knowledge Base
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight">
              Shipping Insights & News
            </h2>
          </div>

          <Link href="/blog" className="shrink-0 w-full sm:w-auto">
            <button className="w-full sm:w-auto h-11 px-6 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600">
              View All Posts
            </button>
          </Link>
        </div>

        {/* Featured + Side Posts Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Left: Featured Huge Post (7 Columns) */}
          <article className="lg:col-span-7 group flex flex-col focus:outline-none">
            <Link href={`/blog/${featuredPost.slug}`} className="flex flex-col h-full">
              {/* Featured Image */}
              <div className="relative w-full aspect-video sm:aspect-[16/9] rounded-2xl overflow-hidden mb-6 sm:mb-8 bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10 shrink-0">
                <img
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  suppressHydrationWarning
                />
              </div>

              {/* Featured Content */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-wide uppercase">
                  {featuredPost.category}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  5 min read
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6 line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm transition-all group-hover:gap-3">
                Read Full Article <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </Link>
          </article>

          {/* Right: Stacked Side Posts (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10 lg:pt-2">
            {sidePosts.map((post) => (
              <article key={post.slug} className="group focus:outline-none">
                <Link href={`/blog/${post.slug}`} className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5 sm:gap-6">

                  {/* Side Post Image */}
                  <div className="relative w-full sm:w-48 lg:w-full xl:w-40 h-52 sm:h-36 lg:h-52 xl:h-36 shrink-0 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-white/10">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Side Post Content */}
                  <div className="flex flex-col flex-1 py-1">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wide uppercase mb-2">
                      {post.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto inline-flex items-center gap-1.5 text-slate-900 dark:text-white font-semibold text-sm transition-all group-hover:gap-2.5">
                      Read Article <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}