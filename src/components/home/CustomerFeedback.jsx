import React from 'react';

export default function CustomerFeedback() {
  return (
    <section className="py-10 md:py-8 md:py-16 px-4 md:py-8 md:py-16 px-4 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="text-indigo-700 font-medium tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="font-semibold text-3xl md:text-3xl md:text-2xl md:text-3xl text-slate-900 dark:text-slate-50 mb-6 tracking-tight">Customer Reviews</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Discover why thousands of customers trust us for their international shipping needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 stagger reveal">
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[32px] p-5 md:p-4 md:p-8 shadow-sm dark:border dark:border-white/5 dark:hover:border-slate-600 transition-colors dark:border dark:border-white/5">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-light italic">"Excellent service! My package arrived in perfect condition and right on time. The real-time tracking system is incredibly accurate and gave me great peace of mind. Highly recommended!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
              <img src="/assets/ronald.png" alt="Ronald" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Ronald Richards</h4>
                <p className="text-indigo-700 text-sm font-medium">Business Owner</p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[32px] p-5 md:p-4 md:p-8 shadow-sm dark:border dark:border-white/5 dark:hover:border-slate-600 transition-colors dark:border dark:border-white/5">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-light italic">"I've been using Swift Express for 2 years now. The customer service is absolutely amazing, and the prices are very competitive compared to others. Won't use anyone else for my shipping!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
              <img src="/assets/lady.png" alt="Floyd" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Floyd Miles</h4>
                <p className="text-indigo-700 text-sm font-medium">Frequent Shopper</p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sm hover:border-indigo-600/10 dark:hover:shadow-md bg-white dark:bg-slate-800 rounded-[32px] p-5 md:p-4 md:p-8 shadow-sm dark:border dark:border-white/5 dark:hover:border-slate-600 transition-colors dark:border dark:border-white/5">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-8 font-light italic">"Package consolidation saved me so much money! The online dashboard interface is so easy to use, and their support team is always helpful and responsive. Great experience overall!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
              <img src="/assets/savanna.png" alt="Savannah" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-medium text-slate-900 dark:text-slate-50 tracking-tight">Savannah Nguyen</h4>
                <p className="text-indigo-700 text-sm font-medium">Retail Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


