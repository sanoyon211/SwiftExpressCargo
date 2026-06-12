import React from 'react';
import Link from 'next/link';

export default function MainContent({ post }) {
  if (!post) return null;

  return (
    <>
    <div className="bg-teal-50 dark:bg-slate-900 pt-32 pb-10 md:pt-40 md:pb-16 px-4 border-b border-transparent dark:border-slate-800">
      <div className="container max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 reveal">
          <Link href="/" className="hover:text-teal-500 transition-colors">Home</Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <Link href="/blog" className="hover:text-teal-500 transition-colors">Blog</Link>
          <i className="fas fa-chevron-right text-xs"></i>
          <span className="text-slate-900 dark:text-slate-50">{post.title}</span>
        </nav>
        
        <div className="flex flex-wrap gap-2 mb-4 reveal">
          <span className="badge text-xs">{post.category}</span>
          <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            <i className="fas fa-clock text-teal-500 text-xs"></i>{post.readTime}
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            <i className="fas fa-eye text-teal-500 text-xs"></i>{post.views}
          </span>
        </div>
        
        <h1 className="font-bold text-3xl md:text-[48px] text-slate-900 dark:text-slate-50 leading-tight mb-6 reveal">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-between flex-wrap gap-4 reveal">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-white"></i>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-50">{post.author.name}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{post.date}</p>
            </div>
          </div>
          
          {/* Share buttons */}
          <div className="flex items-center gap-3">
            <span className="text-slate-500 dark:text-slate-400 text-sm">Share:</span>
            <a href="https://facebook.com" target="_blank" className="share-btn w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:shadow-lg">
              <i className="fab fa-facebook-f text-white text-xs"></i>
            </a>
            <a href="https://x.com" target="_blank" className="share-btn w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center hover:shadow-lg">
              <i className="fab fa-x-twitter text-white text-xs"></i>
            </a>
            <a href="https://wa.me/" target="_blank" className="share-btn w-9 h-9 bg-green-500 rounded-full flex items-center justify-center hover:shadow-lg">
              <i className="fab fa-whatsapp text-white text-xs"></i>
            </a>
            <button className="share-btn w-9 h-9 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center hover:shadow-lg">
              <i className="fas fa-link text-slate-500 dark:text-white text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* ARTICLE CONTENT */}
    <section className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Hero Image */}
            <div className="rounded-[32px] overflow-hidden shadow-xl mb-10 reveal">
              <img src={post.image} alt={post.title} className="w-full h-[400px] md:h-[500px] object-cover" />
            </div>

            {/* Article */}
            <div 
              className="bg-white dark:bg-slate-800 rounded-[32px] p-8 md:p-10 shadow-sm border border-slate-200 dark:border-slate-700 prose dark:prose-invert max-w-none reveal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 reveal">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Tags:</span>
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-[#F1F6F2] dark:bg-slate-700 text-teal-500 text-xs px-3 py-1.5 rounded-full cursor-pointer hover:bg-teal-500 hover:text-white transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Box */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] p-6 mt-8 border border-slate-200 dark:border-slate-700 flex gap-5 items-start reveal">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center flex-shrink-0">
                <i className="fas fa-user text-white text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1">{post.author.name}</h4>
                <p className="text-teal-500 text-sm font-medium mb-2">{post.author.role}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {post.author.description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Track Widget */}
            <div className="bg-gradient-to-b from-teal-500 to-teal-400 rounded-[24px] p-6 mb-6 text-white reveal">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <i className="fas fa-search-location"></i>Track Package
              </h4>
              <input
                type="text"
                placeholder="Tracking number..."
                className="w-full bg-white dark:bg-slate-800/20 text-white placeholder-white/60 border border-white/30 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-white mb-3"
              />
              <Link href="/tracking">
                <button className="w-full bg-white dark:bg-slate-800 text-teal-500 font-bold py-2.5 rounded-xl hover:shadow-lg transition text-sm dark:border dark:border-slate-700">
                  Track Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
