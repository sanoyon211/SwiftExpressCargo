import React from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

const featuredPost = blogPosts.find(p => p.isFeatured) || blogPosts[0];

export default function MainContent() {
  return (
    <>
      {/* HEADER */}
    <header
      style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/assets/image.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center dark:border-b dark:border-slate-800"
    >
      <div className="flex justify-center pt-32 pb-20 px-4 text-center hero-text">
        <div>
          <span className="inline-block bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full mb-5 border border-white/30">
            📝 Shipping Tips & News
          </span>
          <h1 className="font-semibold text-[40px] md:text-[64px] text-white leading-tight mb-4 tracking-tight">
            Our Blog
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Expert guides, shipping tips and industry news
          </p>
        </div>
      </div>
      <a href="https://wa.me/8801715825331" target="_blank" className="absolute right-5 bottom-5 md:right-10 md:bottom-10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-sm hover:shadow-indigo-600/40">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 w-14 h-14 rounded-full flex items-center justify-center shadow-sm pulse-green">
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/* FEATURED POST */}
    <section className="py-12 px-4 bg-white dark:bg-slate-900">
      <div className="container reveal">
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-slate-800 rounded-[32px] overflow-hidden shadow-sm border border-slate-100 dark:border-white/5 hover:shadow-md transition-all duration-500 dark:border dark:border-white/5">
              <div className="overflow-hidden h-64 md:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-5 md:p-10 flex flex-col justify-center">
                <span className="inline-block bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-4 w-fit">
                  Featured Post
                </span>
                <h2 className="font-semibold text-2xl md:text-3xl text-slate-900 dark:text-slate-50 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50 text-sm">{featuredPost.author.name}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">{featuredPost.date}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:gap-3 transition-all">
                    Read More <i className="fas fa-arrow-right text-xs"></i>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>

    {/* ALL POSTS */}
    <section className="py-12 px-4 pb-24">
      <div className="container">
        {/* Filter + Search */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10 reveal">
          <div className="relative w-full sm:w-72">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3 border-2 border-slate-100 dark:border-white/5 rounded-md focus:outline-none focus:border-indigo-600 text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="filter-btn active text-sm px-4 py-2 rounded-full border-2 border-slate-100 dark:border-white/5 font-medium">All</button>
            <button className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-100 dark:border-white/5 font-medium text-slate-500 dark:text-slate-400">Tips</button>
            <button className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-100 dark:border-white/5 font-medium text-slate-500 dark:text-slate-400">Guides</button>
            <button className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-100 dark:border-white/5 font-medium text-slate-500 dark:text-slate-400">Customs</button>
            <button className="filter-btn text-sm px-4 py-2 rounded-full border-2 border-slate-100 dark:border-white/5 font-medium text-slate-500 dark:text-slate-400">Savings</button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 stagger reveal">
          {blogPosts.filter(p => !p.isFeatured).map((post) => (
            <article key={post.slug} className="blog-card bg-white dark:bg-slate-800 rounded-[24px] shadow-sm overflow-hidden border border-slate-100 dark:border-white/5">
              <div className="overflow-hidden h-52">
                <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge text-xs">{post.category}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">{post.date}</span>
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-50 mb-2 hover:text-indigo-600 transition-colors tracking-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-white text-xs"></i>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">{post.author.name}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-indigo-600 font-medium text-sm hover:gap-2.5 transition-all">
                    Read <i className="fas fa-arrow-right text-xs"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12 reveal">
          <button className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium text-sm flex items-center justify-center">1</button>
          <button className="w-10 h-10 rounded-md border-2 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 font-medium text-sm flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors">2</button>
          <button className="w-10 h-10 rounded-md border-2 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 font-medium text-sm flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors">3</button>
          <button className="w-10 h-10 rounded-md border-2 border-slate-100 dark:border-white/5 text-slate-500 dark:text-slate-400 font-medium text-sm flex items-center justify-center hover:border-indigo-600 hover:text-indigo-600 transition-colors">
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    {/* NEWSLETTER */}
    <section className="py-12 px-4 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] dark:from-slate-800 dark:to-indigo-600/30 rounded-[32px] p-5 md:p-6 md:p-12 text-center border border-slate-100 dark:border-white/5 reveal">
          <i className="fas fa-envelope-open-text text-indigo-600 text-2xl md:text-3xl mb-4"></i>
          <h3 className="font-semibold text-2xl md:text-3xl text-slate-900 dark:text-slate-50 mb-3 tracking-tight">
            Subscribe for Shipping Tips
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Get weekly guides, cost-saving tips and shipping news delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 w-full px-5 py-3.5 border-2 border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-md focus:outline-none focus:border-indigo-600 text-sm"
            />
            <button className="w-full sm:w-auto subscribe-btn bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-md px-8 py-3.5 font-medium hover:-translate-y-0.5 hover:shadow-sm hover:from-indigo-700 hover:to-indigo-600 transition-all duration-300 inline-flex items-center justify-center shadow-md whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


