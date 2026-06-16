import React from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, Eye, User, Link as LinkIcon, Search } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function MainContent({ post }) {
  if (!post) return null;

  return (
    <>
      {/* 🔴 Top Gap Fixed: pt-32/40 সরিয়ে শুধু py-8/12 দেওয়া হয়েছে */}
      <div className="bg-slate-50 dark:bg-[#0A0F1C] py-8 md:py-12 px-4 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="container max-w-4xl mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</Link>
            <ChevronRight size={14} />
            <span className="text-slate-900 dark:text-slate-50 truncate">{post.title}</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-5 items-center">
            <span className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5 font-medium">
              <Clock size={14} className="text-indigo-600 dark:text-indigo-400" />
              {post.readTime}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1.5 font-medium">
              <Eye size={14} className="text-indigo-600 dark:text-indigo-400" />
              {post.views}
            </span>
          </div>

          <h1 className="font-extrabold text-3xl md:text-5xl text-slate-900 dark:text-white leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-6 border-t border-slate-200 dark:border-white/10 pt-6">

            {/* Author Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full flex items-center justify-center shadow-sm">
                <User size={20} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{post.author.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{post.date}</p>
              </div>
            </div>

            {/* 🔴 Share buttons Fixed (react-icons/fa) */}
            <div className="flex items-center gap-3">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-bold mr-1">Share:</span>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Share on Facebook" className="w-9 h-9 bg-[#1877F2] hover:bg-[#1864D2] rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 shadow-sm">
                <FaFacebookF className="text-white text-sm" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Share on Twitter" className="w-9 h-9 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 shadow-sm">
                <FaTwitter className="text-white dark:text-slate-900 text-sm" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Share on WhatsApp" className="w-9 h-9 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 shadow-sm">
                <FaWhatsapp className="text-white text-sm lg:text-base" />
              </a>
              <button aria-label="Copy Link" className="w-9 h-9 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full flex items-center justify-center transition-transform hover:-translate-y-1 shadow-sm">
                <LinkIcon size={14} className="text-slate-700 dark:text-slate-300" strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <section className="py-12 px-4 bg-white dark:bg-[#0A0F1C] transition-colors duration-300">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              {/* Hero Image */}
              <div className="rounded-3xl overflow-hidden shadow-sm mb-10 border border-slate-200 dark:border-white/10">
                <img src={post.image} alt={post.title} className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* 🔴 Article Typography Enhanced */}
              <div
                className="bg-white dark:bg-[#0f1629] rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-white/10 prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 prose-img:rounded-2xl transition-colors duration-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-8">
                <span className="text-slate-500 dark:text-slate-400 text-sm font-bold mr-2">Tags:</span>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-lg cursor-pointer hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors border border-slate-200 dark:border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author Bottom Box */}
              <div className="bg-slate-50 dark:bg-[#0f1629] rounded-2xl p-6 mt-10 border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row gap-5 items-start transition-colors duration-300">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User size={28} className="text-indigo-600 dark:text-indigo-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1 tracking-tight">{post.author.name}</h4>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-3">{post.author.role}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium">
                    {post.author.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">

                {/* 🔴 Quick Track Widget Fixed for Light/Dark Mode */}
                <div className="bg-indigo-600 dark:bg-indigo-600/20 rounded-2xl p-6 md:p-8 shadow-lg border border-indigo-500/50 dark:border-indigo-500/30 text-white">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2.5 tracking-tight text-white dark:text-indigo-400">
                    <Search size={20} strokeWidth={2.5} /> Track Package
                  </h4>
                  <p className="text-indigo-100 dark:text-slate-300 text-sm mb-5 font-medium leading-relaxed">
                    Enter your tracking number to get real-time updates on your cargo.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Tracking number..."
                      // Light mode visibility fixed
                      className="w-full bg-white/20 dark:bg-[#0A0F1C]/50 text-white placeholder-indigo-100 dark:placeholder-slate-400 border border-white/30 dark:border-white/10 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-indigo-500 transition-all shadow-inner"
                    />
                    <Link href="/tracking" className="block">
                      <button className="w-full bg-white dark:bg-indigo-500 text-indigo-600 dark:text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-[#0A0F1C]">
                        Track Now
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}