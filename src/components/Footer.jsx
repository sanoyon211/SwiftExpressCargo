import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-1">
            <Link href="/">
              <img src="/assets/logo.png" alt="Logo" className="w-[140px] mb-6 brightness-0 invert opacity-90" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pr-4">
              Your trusted premium logistics and shipping partner from USA to Bangladesh since 2020. Fast, secure, and reliable.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group"
              >
                <i className="fab fa-facebook-f text-slate-300 group-hover:text-white text-sm"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group"
              >
                <i className="fab fa-instagram text-slate-300 group-hover:text-white text-sm"></i>
              </a>
              <a
                href="https://wa.me/8801715825331"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 group"
              >
                <i className="fab fa-whatsapp text-slate-300 group-hover:text-white text-sm"></i>
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Quick Links</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Services
                </Link>
              </li>
              <li>
                <Link href="/rates" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Rates
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Track Shipment
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Support</h6>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-teal-400 text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-teal-500/0 transition-all"></span> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-white mb-6 text-lg tracking-tight">Newsletter</h6>
            <p className="text-slate-400 text-sm mb-4">
              Get premium shipping tips and exclusive updates directly in your inbox.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-full flex items-center p-1 focus-within:border-teal-500/50 focus-within:bg-white/10 transition-all">
              <i className="fas fa-envelope text-slate-400 ml-4 text-sm"></i>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white focus:outline-none px-3 text-sm py-2 placeholder-slate-500"
              />
              <button className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-teal-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Swift Express Cargo. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png" alt="Visa" className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
}
