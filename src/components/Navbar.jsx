"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Package, User, Sun, Moon, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Theme (Dark/Light Mode)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark' || (!savedTheme && isSystemDark)) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Rates', path: '/rates' },
    { name: 'Tracking', path: '/tracking' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 dark:bg-[#0A0F1C]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10 shadow-sm py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 focus:outline-none group">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <Package size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <span className={`font-extrabold text-xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
              SwiftExpress
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${isActive
                      ? (isScrolled ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10' : 'text-white bg-white/20')
                      : (isScrolled ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/10')
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">

            {/* Theme Toggle Button (Desktop) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors focus:outline-none ${isScrolled
                  ? 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10'
                  : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </button>

            {/* Sign In Button */}
            <Link href="/signin" className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${isScrolled ? 'text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400' : 'text-slate-100 hover:text-white'
              }`}>
              <User size={16} strokeWidth={2.5} /> Sign In
            </Link>

            {/* 🚀 Dashboard Button */}
            <Link
              href="/dashboard"
              className={`flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-all ${isScrolled
                  ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20'
                  : 'text-white bg-white/10 hover:bg-white/20'
                }`}
            >
              <LayoutDashboard size={16} strokeWidth={2.5} />
              Dashboard
            </Link>

            {/* Track Package Button */}
            <Link href="/tracking" className="h-10 px-5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#0A0F1C]">
              Track Package
            </Link>
          </div>

          {/* Mobile Buttons (Theme + Hamburger menu) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl focus:outline-none transition-colors ${isScrolled ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5' : 'text-white hover:bg-white/10'
                }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl focus:outline-none transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5' : 'text-white hover:bg-white/10'
                }`}
            >
              {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0f1629] border-b border-slate-200 dark:border-white/10 shadow-xl py-4 px-4 flex flex-col gap-1.5 transition-colors duration-300 rounded-b-2xl">

          {/* Nav Links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-bold rounded-xl transition-colors ${isActive
                    ? 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-500/10'
                    : 'text-slate-700 dark:text-slate-300 hover:text-indigo-600 hover:bg-slate-50 dark:hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="border-t border-slate-100 dark:border-white/10 my-2"></div>

          {/* Mobile Auth & Dashboard Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-2">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
            >
              <User size={18} strokeWidth={2.5} />
              Sign In
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 rounded-xl transition-colors"
            >
              <LayoutDashboard size={18} strokeWidth={2.5} />
              Dashboard
            </Link>
          </div>

          <Link href="/tracking" onClick={() => setIsOpen(false)} className="block">
            <button className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Track Package
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}