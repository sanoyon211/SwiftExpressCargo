"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed successfully!");
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden dark:border-t dark:border-slate-800">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <img src="/assets/logo.png" alt="Logo" className="w-[140px] mb-6 " />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
              Your trusted premium logistics and shipping partner from USA to Bangladesh since 2020. Fast, secure, and reliable.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20">
                <i className="fab fa-facebook-f text-slate-400 group-hover:text-white text-sm transition-colors"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20">
                <i className="fab fa-instagram text-slate-400 group-hover:text-white text-sm transition-colors"></i>
              </a>
              <a href="https://wa.me/8801715825331" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20">
                <i className="fab fa-whatsapp text-slate-400 group-hover:text-white text-sm transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Quick Links</h6>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Home</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Services</Link></li>
              <li><Link href="/rates" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Rates</Link></li>
              <li><Link href="/tracking" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Track Shipment</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Support</h6>
            <ul className="flex flex-col gap-3">
              <li><Link href="/contact" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Contact Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> FAQ</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-all flex items-center gap-2 group"><span className="w-0 h-px bg-teal-500 group-hover:w-3 transition-all duration-300"></span> Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Newsletter</h6>
            <p className="text-slate-400 text-sm mb-5">
              Get premium shipping tips and exclusive updates directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="bg-slate-900 border border-slate-800 rounded-2xl flex items-center p-1.5 focus-within:border-teal-500/50 focus-within:bg-slate-800 transition-all shadow-inner">
              <i className="fas fa-envelope text-slate-500 ml-3 text-sm"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="flex-1 bg-transparent text-white focus:outline-none px-3 text-sm py-2 placeholder-slate-500 w-full"
              />
              <button type="submit" className="bg-gradient-to-r from-teal-500 to-emerald-400 hover:from-teal-400 hover:to-emerald-300 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transform hover:-translate-y-0.5">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Swift Express Cargo. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-slate-600 text-sm mr-2">Secure payments by:</span>
            <div className="bg-white px-3 py-1.5 rounded-md flex items-center justify-center">
              <i className="fab fa-cc-mastercard text-[#eb001b] text-3xl"></i>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-md flex items-center justify-center">
              <i className="fab fa-cc-visa text-[#1a1f71] text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
