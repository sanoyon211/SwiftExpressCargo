import React from 'react';
import Link from 'next/link';

export default function HelpSection() {
  return (
    <>
      <section className="py-16 bg-white dark:bg-slate-900 px-4">
      <div className="max-w-3xl mx-auto text-center reveal">
        <h3 className="font-bold text-2xl text-slate-900 dark:text-slate-50 mb-3">Need Help?</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          Can't find your package or have questions? Our support team is here
          24/7.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="https://wa.me/8801715825331"
            target="_blank"
            className="card-hover bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fab fa-whatsapp text-white text-xl"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">WhatsApp</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">+880 1715-825331</p>
          </a>
          <a
            href="mailto:support@swiftexpress.com"
            className="card-hover bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fas fa-envelope text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Email Support</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">support@swiftexpress.com</p>
          </a>
          <a
            href="/contact"
            className="card-hover bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[24px] p-6 text-center"
          >
            <div
              className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <i className="fas fa-comments text-white text-lg"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Live Chat</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Available 24/7</p>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
