"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PieChart, Package, Receipt, Settings, LogOut, Menu } from 'lucide-react';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // 🔴 FontAwesome-এর বদলে Lucide React আইকন কম্পোনেন্ট ব্যবহার করা হয়েছে
  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: PieChart },
    { name: 'Shipments', path: '/dashboard/shipments', icon: Package },
    { name: 'Invoices', path: '/dashboard/invoices', icon: Receipt },
    { name: 'Profile Settings', path: '/dashboard/profile', icon: Settings },
  ];

  return (
    // মেইন গ্লোবাল ব্যাকগ্রাউন্ডের সাথে ম্যাচ করানো হয়েছে
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0F1C] pt-20 sm:pt-24 flex transition-colors duration-300">

      {/* Mobile sidebar overlay (Blur effect added for premium feel) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`fixed top-20 sm:top-24 left-0 h-[calc(100vh-5rem)] sm:h-[calc(100vh-6rem)] w-64 bg-white dark:bg-[#0f1629] border-r border-slate-200 dark:border-white/10 transform transition-transform duration-300 z-50 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}`}>
        <div className="h-full px-4 py-6 overflow-y-auto flex flex-col">

          {/* Sidebar Header */}
          <div className="mb-8 px-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">User Portal</h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Manage your cargo</p>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-1.5 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold ${isActive
                      ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                    }`}
                >
                  <Icon className={`w-5 h-5 mr-3 transition-transform ${isActive ? 'scale-110' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10 mt-auto">
            <button className="flex items-center w-full px-4 py-3 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors group focus:outline-none">
              <LogOut className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              Logout
            </button>
          </div>

        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 w-full flex flex-col">

        {/* Mobile Header Toggle */}
        <header className="bg-white dark:bg-[#0f1629] shadow-sm border-b border-slate-200 dark:border-white/10 py-4 px-4 sm:px-6 md:hidden flex items-center justify-between sticky top-20 sm:top-24 z-30">
          <span className="font-bold text-slate-900 dark:text-white">Dashboard</span>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -mr-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </header>

        {/* Page Content Rendering */}
        <main className="p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}