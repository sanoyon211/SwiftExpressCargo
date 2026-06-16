"use client";

import React from 'react';
import Link from 'next/link';
import { Package } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // 🔴 MAGIC TRICK: Dashboard-এ থাকলে Footer হাইড করে দেবে
  if (pathname?.startsWith('/dashboard')) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1C] border-t border-white/5 text-slate-300 pt-16 sm:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column (Wider) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link href="/" className="flex items-center gap-2.5 mb-6 focus:outline-none group w-fit">
              <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <Package size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                SwiftExpress
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Your premium partner for international logistics. We bridge the gap between global markets and your doorstep with fast, secure, and affordable shipping solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:-translate-y-1 shadow-sm">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:-translate-y-1 shadow-sm">
                <FaFacebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:-translate-y-1 shadow-sm">
                <FaLinkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:-translate-y-1 shadow-sm">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold mb-6 tracking-tight">Services</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/services" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Air Freight</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Ocean Freight</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Package Consolidation</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Customs Clearance</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-tight">Company</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/about" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-tight">Helpful Links</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/tracking" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Track your Package</Link></li>
              <li><Link href="/rates" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Shipping Calculator</Link></li>
              <li><Link href="/prohibited-items" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">Prohibited Items</Link></li>
              <li><Link href="/faq" className="text-slate-400 hover:text-indigo-400 text-sm font-medium transition-colors">FAQs</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} Swift Express Cargo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}