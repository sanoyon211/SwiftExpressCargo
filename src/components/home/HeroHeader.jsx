"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
    }, 6000); // Slightly slower for a more premium, relaxed feel
    return () => clearInterval(timer);
  }, [bgImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bgImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bgImages.length) % bgImages.length);

  return (
    <header className="relative w-full min-h-[100svh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">

      {/* Background Images Slider */}
      {bgImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
        >
          {/* Elegant Dark Overlays for Text Readability */}
          <div className="absolute inset-0 bg-slate-950/50 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent z-10"></div>

          <img
            src={img}
            alt={`Logistics background ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-[12000ms] ease-out"
            style={{ transform: currentSlide === index ? 'scale(1)' : 'scale(1.05)' }}
            priority={index === 0 ? "true" : "false"}
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-center text-center">
        <StaggerContainer>

          {/* Premium Badge */}
          <StaggerItem>
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-5 py-2 rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Premium Global Logistics
            </div>
          </StaggerItem>

          {/* Main Headline */}
          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl mx-auto drop-shadow-sm">
              Shipping Excellence, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Delivered Swiftly.</span>
            </h1>
          </StaggerItem>

          {/* Subheadline */}
          <StaggerItem>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
              Your trusted partner for USA to Bangladesh shipping. Fast, secure, and fully trackable cargo solutions tailored for your business.
            </p>
          </StaggerItem>

          {/* Tracking Bar (Glassmorphism) */}
          <StaggerItem>
            <div className="w-full max-w-2xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-full p-2 flex flex-col sm:flex-row items-center gap-2 shadow-lg transition-all focus-within:bg-white/15 focus-within:border-white/30">
                <div className="flex-1 flex items-center gap-3 px-4 w-full h-12 sm:h-auto">
                  <Package size={20} className="text-slate-300 shrink-0" />
                  <input
                    type="text"
                    id="trackingInput"
                    className="bg-transparent text-white placeholder-slate-300 focus:outline-none text-base w-full font-medium"
                    placeholder="Enter tracking number..."
                  />
                </div>
                <Link href="/tracking" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-3.5 sm:py-3.5 rounded-lg sm:rounded-full transition-colors flex items-center justify-center gap-2">
                    Track
                    <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {bgImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 focus:outline-none ${currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slider Navigation (Desktop) */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors z-20 text-white focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-black/40 transition-colors z-20 text-white focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      </div>


    </header>
  );
}