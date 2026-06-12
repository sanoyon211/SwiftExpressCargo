import React from 'react';

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 dark:border-b dark:border-slate-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
        {/* You can use a specific image if you have one, e.g., image.png */}
        <img src="/assets/image.png" alt="Tracking Background" className="w-full h-full object-cover scale-105" />
      </div>
      
      <div className="container relative z-20 pt-32 pb-20 text-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-medium mb-6 hero-text">
          📍 Real-time Tracking
        </span>
        <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Package</span>
        </h1>
        <p className="hero-text-delay text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Enter your tracking number below to see the current status and location of your shipment.
        </p>
      </div>
      
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn z-30"
      >
        <div className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green">
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>
  );
}
