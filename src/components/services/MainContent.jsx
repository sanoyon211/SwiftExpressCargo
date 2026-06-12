import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/* HEADER */}
      <header className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 dark:border-b dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
          <img src="/assets/image (1).png" alt="Services" className="w-full h-full object-cover scale-105" />
        </div>
        
        <div className="container relative z-20 pt-32 pb-20 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-medium mb-6 hero-text">
            🚀 Fast & Reliable Shipping
          </span>
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Services</span>
          </h1>
          <p className="hero-text-delay text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Comprehensive shipping solutions tailored for all your international logistics needs.
          </p>
          
          <div className="hero-text-delay2 max-w-md mx-auto">
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 rounded-full p-2.5 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/15 dark:bg-slate-800/15 transition-all">
              <div className="flex-1 flex items-center gap-3 pl-4">
                <i className="fas fa-search text-teal-400"></i>
                <input type="text" placeholder="Enter tracking number..." className="bg-transparent text-white placeholder-slate-400 focus:outline-none text-base w-full font-light" />
              </div>
              <Link href="/tracking">
                <button className="bg-teal-500 hover:bg-teal-400 text-white font-medium px-8 py-3 rounded-full transition-colors shadow-lg shadow-teal-500/20">
                  Track
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SHIPPING SERVICES */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16 reveal">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Logistics Options</span>
            <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Our Shipping Services</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Choose the premium shipping option that best fits your timeline and budget.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
            {/* US Shipping */}
            <div className="card-hover bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col items-center text-center gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-20 h-20 bg-teal-50 rounded-[24px] flex items-center justify-center text-teal-600">
                <i className="fas fa-flag-usa text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-slate-900 dark:text-slate-50 mb-2">USA Shipping</h3>
                <p className="text-teal-600 font-semibold mb-4 text-lg">From $10/lb</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Ship directly from any US store to Bangladesh. Get a free US address to shop from Amazon, Walmart, and more.</p>
              </div>
              <ul className="text-left w-full flex flex-col gap-3 my-4">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-teal-500 bg-teal-50 p-1 rounded-full text-[10px]"></i> Free US address</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-teal-500 bg-teal-50 p-1 rounded-full text-[10px]"></i> Package consolidation</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-teal-500 bg-teal-50 p-1 rounded-full text-[10px]"></i> 7-14 day delivery</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-teal-500 bg-teal-50 p-1 rounded-full text-[10px]"></i> Full insurance</li>
              </ul>
              <Link href="/sign-up" className="w-full mt-auto">
                <button className="w-full py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full hover:border-teal-500 hover:text-teal-600 transition-colors">Get Started Free</button>
              </Link>
            </div>
            
            {/* Local Delivery (Featured) */}
            <div className="bg-slate-900 rounded-[32px] p-8 flex flex-col items-center text-center gap-6 shadow-2xl scale-105 relative z-10 transform transition-transform hover:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-400 to-emerald-400 text-white font-bold text-xs px-6 py-2 rounded-full shadow-lg tracking-wider uppercase">
                Most Popular
              </div>
              <div className="w-20 h-20 bg-white/10 dark:bg-slate-800/10 rounded-[24px] flex items-center justify-center text-white backdrop-blur-sm">
                <i className="fas fa-truck text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white mb-2">Local Delivery</h3>
                <p className="text-teal-400 font-semibold mb-4 text-lg">Free in Dhaka</p>
                <p className="text-slate-300 text-sm leading-relaxed">Door-to-door delivery throughout Bangladesh. Once your package clears customs, we deliver it right to your home.</p>
              </div>
              <ul className="text-left w-full flex flex-col gap-3 my-4">
                <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-white bg-white/20 dark:bg-slate-800/20 p-1 rounded-full text-[10px]"></i> Free delivery in Dhaka</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-white bg-white/20 dark:bg-slate-800/20 p-1 rounded-full text-[10px]"></i> All 64 districts</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-white bg-white/20 dark:bg-slate-800/20 p-1 rounded-full text-[10px]"></i> Same-day dispatch</li>
                <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-white bg-white/20 dark:bg-slate-800/20 p-1 rounded-full text-[10px]"></i> SMS alerts</li>
              </ul>
              <Link href="/sign-up" className="w-full mt-auto">
                <button className="w-full py-4 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-400 shadow-lg shadow-teal-500/30 transition-all">Get Started Free</button>
              </Link>
            </div>
            
            {/* Regional Shipping */}
            <div className="card-hover bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col items-center text-center gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-20 h-20 bg-emerald-50 rounded-[24px] flex items-center justify-center text-emerald-600">
                <i className="fas fa-globe text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-slate-900 dark:text-slate-50 mb-2">Regional Shipping</h3>
                <p className="text-emerald-600 font-semibold mb-4 text-lg">From $8/kg</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Ship to South Asian countries including India, Pakistan, Nepal, and Sri Lanka with highly competitive rates.</p>
              </div>
              <ul className="text-left w-full flex flex-col gap-3 my-4">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-emerald-500 bg-emerald-50 p-1 rounded-full text-[10px]"></i> 10+ countries</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-emerald-500 bg-emerald-50 p-1 rounded-full text-[10px]"></i> Customs assistance</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-emerald-500 bg-emerald-50 p-1 rounded-full text-[10px]"></i> 5-10 day delivery</li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300"><i className="fas fa-check text-emerald-500 bg-emerald-50 p-1 rounded-full text-[10px]"></i> Live tracking</li>
              </ul>
              <Link href="/sign-up" className="w-full mt-auto">
                <button className="w-full py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors">Get Started Free</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Value Added</span>
            <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Additional Services</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Premium extras designed to completely enhance and protect your shipping experience.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger reveal">
            {[
              { icon: "fa-boxes", title: "Package Consolidation", desc: "Combine multiple packages into one and save significantly on shipping." },
              { icon: "fa-shield-alt", title: "Package Insurance", desc: "Protect your valuable items with our comprehensive insurance coverage." },
              { icon: "fa-camera", title: "Package Photography", desc: "Get high-res photos of your package taken before it ships for verification." },
              { icon: "fa-undo", title: "Return Service", desc: "Need to return an item? We handle returns back to US retailers easily." },
              { icon: "fa-search-dollar", title: "Personal Shopper", desc: "Can't buy from a US store? We'll shop and ship directly on your behalf." },
              { icon: "fa-passport", title: "Customs Clearance", desc: "We handle all documentation and duties for a perfectly smooth process." }
            ].map((service, index) => (
              <div key={index} className="card-hover bg-slate-50 dark:bg-slate-800 rounded-[24px] p-8 border border-slate-100 dark:border-slate-700 flex gap-5 items-start transition-all">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 rounded-[16px] flex items-center justify-center flex-shrink-0 text-teal-600">
                  <i className={`fas ${service.icon} text-xl`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-2 text-lg">{service.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container">
          <div className="relative bg-slate-900 rounded-[40px] md:rounded-[60px] px-8 md:px-20 py-16 md:py-24 overflow-hidden text-center reveal shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-emerald-900/40 mix-blend-overlay"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/30 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="font-bold text-white text-4xl md:text-5xl mb-6 tracking-tight">Ready to Start Shipping?</h2>
              <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
                Sign up for free and get your US address today. No monthly fees, no hidden charges.
              </p>
              <Link href="/sign-up">
                <button className="bg-teal-500 text-white font-medium px-10 py-4 rounded-full hover:bg-teal-400 shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1">
                  Sign Up For Free
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
