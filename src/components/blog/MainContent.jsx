"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { Search, User, ArrowRight, ChevronRight, Mail, BookOpen } from 'lucide-react';

export default function MainContent() {
  const featuredPost = blogPosts.find(p => p.isFeatured) || blogPosts[0];
  const regularPosts = blogPosts.filter(p => p.slug !== featuredPost.slug);

  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Tips', 'Guides', 'Customs', 'Savings'];

  return (
    <>
      {/* HEADER SECTION */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
          <img src="/assets/image.png" alt="Our Blog" className="w-full h-full object-cover scale-105" suppressHydrationWarning />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">

          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">News & Updates</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Shipping Tips,<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Industry Insights.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Expert guides, industry updates, and smart shipping tips to help you navigate international logistics effortlessly.
          </p>
        </div>
      </header>

      {/* 2. FEATURED POST SECTION */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Featured Article
            </h2>
          </div>

          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="group block focus:outline-none">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-4 sm:p-6 lg:p-8 border border-slate-200 dark:border-white/10 hover:shadow-xl hover:border-slate-300 dark:hover:border-white/20 transition-all duration-500">

                {/* Image */}
                <div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                  <img
                    src={featuredPost.image || featuredPost.thumbnail}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    suppressHydrationWarning
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center py-4 sm:py-6 lg:px-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-wide uppercase">
                      Featured Post
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                      {featuredPost.date || 'Recent'}
                    </span>
                  </div>

                  <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                        <User size={18} className="text-slate-500 dark:text-slate-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900 dark:text-white text-sm">
                          {featuredPost.author?.name || 'Admin'}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 text-xs">Author</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article <ArrowRight size={18} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          )}
        </div>
      </section>

      {/* 3. ALL POSTS SECTION */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Bar: Search & Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">

            {/* Search Bar */}
            <div className="relative w-full md:max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full h-12 pl-11 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none ${activeFilter === filter
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 transition-all duration-300 hover:shadow-lg hover:border-slate-300 dark:hover:border-white/20"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    suppressHydrationWarning
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex px-2.5 py-1 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 mt-auto border-t border-slate-200 dark:border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center">
                        <User size={14} className="text-slate-500 dark:text-slate-400" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-400 text-xs font-medium">
                        {post.author?.name || 'Admin'}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-2.5 transition-all focus:outline-none"
                    >
                      Read <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-semibold text-sm flex items-center justify-center shadow-md focus:outline-none">
              1
            </button>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-medium text-sm flex items-center justify-center hover:border-indigo-500 hover:text-indigo-600 transition-colors focus:outline-none">
              2
            </button>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 font-medium text-sm flex items-center justify-center hover:border-indigo-500 hover:text-indigo-600 transition-colors focus:outline-none">
              3
            </button>
            <span className="text-slate-400 mx-1">...</span>
            <button className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:border-indigo-500 hover:text-indigo-600 transition-colors focus:outline-none">
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* 4. NEWSLETTER CTA (Immersive Minimalist Banner) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-slate-900 rounded-[2rem] px-6 py-12 sm:p-16 overflow-hidden text-center shadow-2xl border border-slate-800">

            {/* Subtle Elegance Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-sm">
                <Mail size={32} className="text-white" strokeWidth={1.5} />
              </div>

              <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4 tracking-tight">
                Subscribe to our Newsletter
              </h2>

              <p className="text-slate-400 text-base sm:text-lg mb-10 font-normal leading-relaxed">
                Get weekly guides, exclusive cost-saving tips, and the latest international shipping news delivered directly to your inbox.
              </p>

              <div className="w-full flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 w-full h-14 px-5 bg-white/5 border border-white/10 text-white rounded-lg text-base placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                />
                <button className="w-full sm:w-auto h-14 px-8 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-sm flex items-center justify-center gap-2 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}