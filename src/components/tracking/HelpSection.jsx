"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HelpSection() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h3 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4 tracking-tight">
          Need Help?
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Can't find your package or have questions? Our expert support team is here 24/7 to assist you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/8801715825331"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:shadow-lg focus:outline-none flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 group-hover:text-white border border-emerald-200 dark:border-emerald-500/20">
              <FaWhatsapp size={28} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">WhatsApp</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">+880 1715-825331</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:support@swiftexpress.com"
            className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg focus:outline-none flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 group-hover:text-white border border-indigo-200 dark:border-indigo-500/20">
              <Mail size={26} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Email Support</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">support@swiftexpress.com</p>
          </a>

          {/* Live Chat Card */}
          <Link
            href="/contact"
            className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg focus:outline-none flex flex-col items-center"
          >
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 text-blue-600 dark:text-blue-400 group-hover:text-white border border-blue-200 dark:border-blue-500/20">
              <MessageSquare size={26} strokeWidth={1.5} />
            </div>
            <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Live Chat</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Available 24/7</p>
          </Link>

        </div>
      </div>
    </section>
  );
}