"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '../Motion';

export default function HeroHeader() {
  const bgImages = [
    '/assets/boat.png',
    '/assets/cargo-ship-sailing-ocean.jpg',
    '/assets/arialview.jpg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bgImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bgImages.length) % bgImages.length);

  return (
    <header className="relative w-full min-h-[700px] md:min-h-[85vh] flex items-center justify-center overflow-hidden dark:border-b dark:border-slate-800">
      {/* Background Images Slider */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover scale-105 transform transition-transform duration-[10000ms]"
            style={{ transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)' }}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="container relative z-20 pt-24 pb-24 md:pt-32 md:pb-32 px-4 flex flex-col items-center text-center">
        <StaggerContainer>
          <div className="hero-text">
            <StaggerItem>
              <span className="inline-flex items-center gap-2 bg-white/10 dark:bg-slate-800/10 backdrop-blur-md text-indigo-300 text-sm font-medium px-5 py-2 rounded-full mb-8 border border-white/10 shadow-[0_0_20px_rgba(13,148,136,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Premium Global Logistics
              </span>
            </StaggerItem>
          </div>
          
          <StaggerItem>
            <h1 className="hero-text text-2xl md:text-3xl sm:text-3xl md:text-2xl md:text-3xl md:text-2xl md:text-3xl md:text-3xl md:text-2xl md:text-3xl lg:text-7xl px-2 font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
              Shipping Excellence, <br className="hidden md:block" />
              Delivered <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-500">Swiftly</span>
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <p className="hero-text-delay text-base md:text-lg lg:text-xl px-4 text-slate-300 mb-10 max-w-2xl font-light">
              Your trusted partner for USA to Bangladesh shipping. Fast, secure, and fully trackable cargo solutions tailored for your business.
            </p>
          </StaggerItem>

          {/* Tracking Bar */}
          <StaggerItem>
            <div className="hero-text-delay2 w-full max-w-lg mb-16">
              <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-xl border border-white/20 rounded-full p-2.5 flex items-center gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:bg-white/15 dark:bg-slate-800/15 transition-all">
                <div className="flex-1 flex items-center gap-3 pl-4">
                  <i className="fas fa-box-open text-indigo-500"></i>
                  <input type="text" id="trackingInput"
                    className="bg-transparent text-white placeholder-slate-400 focus:outline-none text-base w-full font-light"
                    placeholder="Enter tracking number (e.g. SEC-12345)" />
                </div>
                <Link href="/tracking">
                  <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-5 py-2.5 sm:px-8 sm:py-3 rounded-full transition-colors shadow-sm shadow-indigo-600/20 flex items-center gap-2">
                    Track
                    <i className="fas fa-arrow-right text-sm"></i>
                  </button>
                </Link>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Slider Dots */}
        <div className="flex gap-3 mt-auto absolute bottom-16">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-8 bg-indigo-600' : 'w-2 bg-white/30 dark:bg-slate-800/30 hover:bg-white/50 dark:bg-slate-800/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slider Navigation (Desktop) */}
      <div className="hidden md:block">
        <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 dark:bg-slate-800/5 border border-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 dark:bg-slate-800/20 hover:scale-110 transition-all z-20 text-white">
          <i className="fas fa-chevron-left text-sm"></i>
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 dark:bg-slate-800/5 border border-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 dark:bg-slate-800/20 hover:scale-110 transition-all z-20 text-white">
          <i className="fas fa-chevron-right text-sm"></i>
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/8801715825331" target="_blank" rel="noopener noreferrer"
        className="absolute right-6 bottom-10 md:right-10 md:bottom-16 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-sm hover:shadow-indigo-600/40 z-40 group">
        <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative bg-indigo-600 hover:bg-indigo-500 h-14 w-14 md:h-16 md:w-16 rounded-full flex justify-center items-center shadow-sm shadow-indigo-600/30 transition-all">
          <i className="fab fa-whatsapp text-white text-3xl"></i>
        </div>
      </a>
    </header>
  );
}
