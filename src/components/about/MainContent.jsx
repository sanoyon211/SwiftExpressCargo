"use client";

import React from 'react';
import { Award, Package, ShieldCheck, MapPin, Headset, User } from 'lucide-react';

export default function MainContent() {
  return (
    <>
      {/* HEADER SECTION */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
          <img src="/assets/image.png" alt="About Us" className="w-full h-full object-cover scale-105" suppressHydrationWarning />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">

          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">Our Global Journey</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Building Trust,<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Delivering Excellence.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Connecting the USA to Bangladesh with fast, reliable, and remarkably affordable cargo services since 2020.
          </p>
        </div>
      </header>

      {/* 2. OUR STORY SECTION */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text & Stats */}
            <div>
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
                Our Journey
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
                Our Story
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
                Swift Express Cargo was founded in 2020 with a simple mission: make international shipping from the USA to Bangladesh easy, affordable, and completely reliable for everyone.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
                What started as a small operation helping expats ship goods home has grown into a full-service logistics company serving thousands of customers worldwide. We understand the complexities of global shipping, and we've built our premium services to seamlessly solve them.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 text-center border border-slate-200 dark:border-white/10 transition-all hover:border-indigo-300 dark:hover:border-indigo-500/30">
                  <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-1">5+</div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 text-center border border-slate-200 dark:border-white/10 transition-all hover:border-indigo-300 dark:hover:border-indigo-500/30">
                  <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-1">50k+</div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Delivered</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 text-center border border-slate-200 dark:border-white/10 transition-all hover:border-indigo-300 dark:hover:border-indigo-500/30">
                  <div className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-1">15k+</div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-[10px] sm:text-xs uppercase tracking-wider">Clients</div>
                </div>
              </div>
            </div>

            {/* Right: Image & Badge */}
            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] sm:h-[500px] relative border border-slate-200 dark:border-white/10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                <img
                  src="/assets/image (4).png"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  suppressHydrationWarning
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-8 bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-5 border border-slate-200 dark:border-white/10 z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-inner">
                  <Award className="text-white" size={24} strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">Award Winning</div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">Best Cargo 2024</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Premium Bento Layout) */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Our Advantage
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              We offer unmatched shipping services with transparency, absolute reliability, and premium care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-white/20">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-500/20">
                <Package className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 tracking-tight">Package Consolidation</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">Combine multiple packages into one shipment. Save up to 40% on shipping costs by seamlessly consolidating orders from different US retailers.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-white/20">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-500/20">
                <ShieldCheck className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 tracking-tight">Security & Reliability</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">Every package is fully insured during transit. Our secure warehousing and meticulous handling ensure your items arrive safely.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-white/20">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-500/20">
                <MapPin className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 tracking-tight">Real-time Tracking</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">Track your shipment accurately at every step of the journey. Receive automatic SMS and email notifications for every vital status update.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start gap-6 transition-all hover:shadow-md hover:border-slate-300 dark:hover:border-white/20">
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-500/20">
                <Headset className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2 tracking-tight">24/7 Customer Support</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">Our dedicated, global support team is available around the clock via phone, email, and WhatsApp to assist with any inquiries.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Leadership
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              The dedicated professionals who make it all happen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { name: "Ahmed Rahman", role: "CEO & Founder", exp: "10+ years in international logistics" },
              { name: "Sarah Johnson", role: "Operations Manager", exp: "Expert in supply chain management" },
              { name: "Karim Hassan", role: "Customer Support Head", exp: "Dedicated to customer satisfaction" },
              { name: "Nadia Islam", role: "Customs & Compliance", exp: "Specialist in import regulations" }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden text-center group hover:shadow-lg transition-all duration-300 hover:border-slate-300 dark:hover:border-white/20"
              >
                {/* Team Member Image Placeholder */}
                <div className="h-56 bg-slate-200 dark:bg-slate-700 relative overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <User className="text-slate-400 dark:text-slate-500" size={48} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="p-6 relative z-20">
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg sm:text-xl mb-1 tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {member.exp}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}