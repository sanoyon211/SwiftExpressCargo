import React from 'react';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Advantage</span>
          <h3 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Why Choose Us</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">We provide the best shipping experience with top-notch service, modern tracking, and absolute reliability.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger reveal">
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-8 flex flex-col items-center text-center gap-5 dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
            <div className="w-20 h-20 bg-teal-50 rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <i className="fas fa-box-open text-teal-500 text-3xl"></i>
            </div>
            <h4 className="font-semibold text-xl text-slate-800 dark:text-slate-100 mt-2">Package Consolidation</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Combine multiple packages into one shipment to save significantly on international shipping costs.</p>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-8 flex flex-col items-center text-center gap-5 dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
            <div className="w-20 h-20 bg-emerald-50 rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <i className="fas fa-shield-alt text-emerald-500 text-3xl"></i>
            </div>
            <h4 className="font-semibold text-xl text-slate-800 dark:text-slate-100 mt-2">Security & Reliability</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Your packages are fully insured, meticulously tracked, and handled with the utmost care and security.</p>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-8 flex flex-col items-center text-center gap-5 dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
            <div className="w-20 h-20 bg-teal-50 rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <i className="fas fa-map-marker-alt text-teal-500 text-3xl"></i>
            </div>
            <h4 className="font-semibold text-xl text-slate-800 dark:text-slate-100 mt-2">Real-time Tracking</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Track your shipment at every step from our warehouse pickup directly to the final delivery destination.</p>
          </div>
          
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-8 flex flex-col items-center text-center gap-5 dark:border dark:border-slate-700 dark:hover:border-slate-600 transition-colors">
            <div className="w-20 h-20 bg-emerald-50 rounded-[20px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <i className="fas fa-headset text-emerald-500 text-3xl"></i>
            </div>
            <h4 className="font-semibold text-xl text-slate-800 dark:text-slate-100 mt-2">24/7 Support</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Our dedicated global support team is always available to assist you with any inquiries around the clock.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
