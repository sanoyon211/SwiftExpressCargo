import React from 'react';

export default function CustomerFeedback() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Customer Reviews</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Discover why thousands of customers trust us for their international shipping needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger reveal">
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[32px] p-8 shadow-sm dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors dark:border dark:border-slate-700">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 font-light italic">"Excellent service! My package arrived in perfect condition and right on time. The real-time tracking system is incredibly accurate and gave me great peace of mind. Highly recommended!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
              <img src="/assets/ronald.png" alt="Ronald" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Ronald Richards</h4>
                <p className="text-teal-600 text-sm font-medium">Business Owner</p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[32px] p-8 shadow-sm dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors dark:border dark:border-slate-700">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 font-light italic">"I've been using Swift Express for 2 years now. The customer service is absolutely amazing, and the prices are very competitive compared to others. Won't use anyone else for my shipping!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
              <img src="/assets/lady.png" alt="Floyd" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Floyd Miles</h4>
                <p className="text-teal-600 text-sm font-medium">Frequent Shopper</p>
              </div>
            </div>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[32px] p-8 shadow-sm dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors dark:border dark:border-slate-700">
            <div className="flex gap-1 mb-6">
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star text-yellow-400"></i>
              <i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8 font-light italic">"Package consolidation saved me so much money! The online dashboard interface is so easy to use, and their support team is always helpful and responsive. Great experience overall!"</p>
            <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
              <img src="/assets/savanna.png" alt="Savannah" className="w-12 h-12 rounded-full object-cover shadow-md" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">Savannah Nguyen</h4>
                <p className="text-teal-600 text-sm font-medium">Retail Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
