import React from 'react';

export default function Faq() {
  return (
    <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 dark:bg-slate-900 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
          <h3 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Frequently Asked Questions</h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">Find detailed answers to common questions about our international shipping services and policies.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger reveal">
          {/* FAQ 1 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 dark:border dark:border-slate-700">
            <input type="checkbox" id="faq1" className="hidden peer" />
            <label htmlFor="faq1" className="flex justify-between items-center p-6 cursor-pointer group">
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-lg pr-4 group-hover:text-teal-600 transition-colors">How long does shipping take?</span>
              <span className="w-10 h-10 min-w-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 peer-checked:bg-teal-50 transition-colors relative text-slate-400 group-hover:text-teal-500 group-hover:bg-teal-50">
                <i className="fas fa-chevron-down transition-transform duration-300 peer-checked:rotate-180"></i>
              </span>
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-64 transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-slate-900/50">
              <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2">Standard shipping from USA to Bangladesh takes 7-14 business days. Express shipping takes 3-5 business days. We also offer economy shipping which takes 14-21 business days at significantly reduced rates.</p>
            </div>
          </div>
          
          {/* FAQ 2 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 dark:border dark:border-slate-700">
            <input type="checkbox" id="faq2" className="hidden peer" />
            <label htmlFor="faq2" className="flex justify-between items-center p-6 cursor-pointer group">
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-lg pr-4 group-hover:text-teal-600 transition-colors">What items are restricted?</span>
              <span className="w-10 h-10 min-w-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 peer-checked:bg-teal-50 transition-colors relative text-slate-400 group-hover:text-teal-500 group-hover:bg-teal-50">
                <i className="fas fa-chevron-down transition-transform duration-300 peer-checked:rotate-180"></i>
              </span>
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-64 transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-slate-900/50">
              <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2">Restricted items include hazardous materials, flammable liquids, batteries over a certain size, firearms, and perishable goods. Please check our comprehensive restricted items list on our services page before placing your order.</p>
            </div>
          </div>
          
          {/* FAQ 3 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 dark:border dark:border-slate-700">
            <input type="checkbox" id="faq3" className="hidden peer" />
            <label htmlFor="faq3" className="flex justify-between items-center p-6 cursor-pointer group">
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-lg pr-4 group-hover:text-teal-600 transition-colors">How is shipping cost calculated?</span>
              <span className="w-10 h-10 min-w-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 peer-checked:bg-teal-50 transition-colors relative text-slate-400 group-hover:text-teal-500 group-hover:bg-teal-50">
                <i className="fas fa-chevron-down transition-transform duration-300 peer-checked:rotate-180"></i>
              </span>
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-64 transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-slate-900/50">
              <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2">Shipping cost is based on the actual weight or volumetric weight (whichever is higher) of your package. Use our intuitive cost calculator to get an instant estimate. Consolidating multiple packages can save you up to 40% on shipping costs.</p>
            </div>
          </div>
          
          {/* FAQ 4 */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 dark:border dark:border-slate-700">
            <input type="checkbox" id="faq4" className="hidden peer" />
            <label htmlFor="faq4" className="flex justify-between items-center p-6 cursor-pointer group">
              <span className="font-semibold text-slate-800 dark:text-slate-100 text-lg pr-4 group-hover:text-teal-600 transition-colors">Is there a weight limit per package?</span>
              <span className="w-10 h-10 min-w-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-slate-900 peer-checked:bg-teal-50 transition-colors relative text-slate-400 group-hover:text-teal-500 group-hover:bg-teal-50">
                <i className="fas fa-chevron-down transition-transform duration-300 peer-checked:rotate-180"></i>
              </span>
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-64 transition-all duration-500 ease-in-out bg-slate-50/50 dark:bg-slate-900/50">
              <p className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed pt-2">Individual packages can weigh up to 70 lbs (32 kg). For heavier items, we offer specialized freight shipping services. Contact our support team for special arrangements regarding oversized or heavy cargo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
