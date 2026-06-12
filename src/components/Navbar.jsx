"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-teal-600 font-semibold"
      : "text-slate-600 font-medium hover:text-teal-600 transition-colors";
  };

  const getMobileLinkClass = (path) => {
    return pathname === path
      ? "text-teal-600 font-semibold py-3 border-b border-slate-100 flex items-center gap-3"
      : "text-slate-600 font-medium py-3 border-b border-slate-100 flex items-center gap-3";
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2 transition-all duration-300">
      <div className="md:hidden px-6 flex justify-between items-center h-14">
        <Link href="/">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-[101px] h-[53px] object-contain"
          />
        </Link>
        <button onClick={toggleMenu} className="text-2xl text-slate-800 transition-colors">
          <i className={isMobileMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </button>
      </div>

      <div className="hidden md:flex justify-center">
        <nav className="container flex items-center justify-between h-14">
          <Link href="/">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-[101px] h-[53px] object-contain"
            />
          </Link>
          <ul className="flex gap-8">
            <li><Link href="/" className={getLinkClass("/")}>Home</Link></li>
            <li><Link href="/services" className={getLinkClass("/services")}>Services</Link></li>
            <li><Link href="/about" className={getLinkClass("/about")}>About Us</Link></li>
            <li><Link href="/rates" className={getLinkClass("/rates")}>Rates</Link></li>
            <li><Link href="/cost-calculator" className={getLinkClass("/cost-calculator")}>Cost Calculator</Link></li>
            <li><Link href="/tracking" className={getLinkClass("/tracking")}>Track</Link></li>
            <li><Link href="/contact" className={getLinkClass("/contact")}>Contact</Link></li>
          </ul>
          <div className="flex gap-3">
            <Link href="/signin">
              <button className="btn-primary text-sm px-6 py-2.5">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="btn-outline text-sm px-6 py-2.5">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      <nav className={`${isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"} absolute z-50 right-0 top-full w-full md:hidden transition-all duration-300`}>
        <div className="mx-4 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
          <ul className="flex flex-col gap-2 mb-6">
            <li>
              <Link onClick={toggleMenu} href="/" className={getMobileLinkClass("/")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-home text-teal-600 text-sm"></i></div>Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/services" className={getMobileLinkClass("/services")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-shipping-fast text-teal-600 text-sm"></i></div>Services
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/about" className={getMobileLinkClass("/about")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-info-circle text-teal-600 text-sm"></i></div>About Us
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/rates" className={getMobileLinkClass("/rates")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-dollar-sign text-teal-600 text-sm"></i></div>Rates
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/tracking" className={getMobileLinkClass("/tracking")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-search-location text-teal-600 text-sm"></i></div>Track
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/contact" className={getMobileLinkClass("/contact")}>
                <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center"><i className="fas fa-envelope text-teal-600 text-sm"></i></div>Contact
              </Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <Link href="/signin" className="flex-1" onClick={toggleMenu}>
              <button className="btn-primary w-full text-sm py-3 justify-center">Sign In</button>
            </Link>
            <Link href="/signup" className="flex-1" onClick={toggleMenu}>
              <button className="btn-outline w-full text-sm py-3 justify-center">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
