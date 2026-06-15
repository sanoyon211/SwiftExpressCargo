"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Overview', path: '/dashboard', icon: 'fa-solid fa-chart-pie' },
    { name: 'Shipments', path: '/dashboard/shipments', icon: 'fa-solid fa-box-open' },
    { name: 'Invoices', path: '/dashboard/invoices', icon: 'fa-solid fa-file-invoice-dollar' },
    { name: 'Profile Settings', path: '/dashboard/profile', icon: 'fa-solid fa-user-gear' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-16 flex transition-colors duration-300">
      {/* Mobile sidebar overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-white/5 transform transition-transform duration-300 z-50 md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full px-4 py-6 overflow-y-auto">
          <div className="mb-8 px-4">
            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-50 tracking-tight">User Portal</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">Manage your cargo</p>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.path
                    ? 'bg-indigo-50 dark:bg-indigo-600/10 text-indigo-700 dark:text-indigo-500 font-medium'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800'
                }`}
              >
                <i className={`${item.icon} w-6 text-center mr-3`}></i>
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="absolute bottom-8 w-[calc(100%-2rem)]">
            <button className="flex items-center px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors w-full">
              <i className="fa-solid fa-arrow-right-from-bracket w-6 text-center mr-3"></i>
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 md:ml-64 w-full">
        <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-100 dark:border-white/5 py-4 px-4 sm:px-6 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </header>
        <main className="p-4 sm:p-6 lg:p-4 md:p-8 w-full max-w-7xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
