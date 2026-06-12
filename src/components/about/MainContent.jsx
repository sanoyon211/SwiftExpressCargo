import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/* HEADER */}
      <header className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 dark:border-b dark:border-slate-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
          <img src="/assets/image.png" alt="About Us" className="w-full h-full object-cover scale-105" />
        </div>
        
        <div className="container relative z-20 pt-32 pb-20 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 text-teal-300 text-sm font-medium mb-6 hero-text">
            Premium Global Logistics
          </span>
          <h1 className="hero-text text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Us</span>
          </h1>
          <p className="hero-text-delay text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connecting the USA to Bangladesh with fast, reliable, and remarkably affordable cargo services since 2020.
          </p>
        </div>
      </header>

      {/* OUR STORY */}
      <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Journey</span>
              <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Our Story</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Swift Express Cargo was founded in 2020 with a simple mission: make international shipping from the USA to Bangladesh easy, affordable, and completely reliable for everyone.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10">
                What started as a small operation helping expats ship goods home has grown into a full-service logistics company serving thousands of customers worldwide. We understand the complexities of global shipping, and we've built our premium services to seamlessly solve them.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-[20px] p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700 hover:border-teal-100 hover:shadow-md transition-all">
                  <div className="font-bold text-3xl text-slate-900 dark:text-slate-50 mb-2">5+</div>
                  <div className="text-teal-600 font-medium text-xs uppercase tracking-wider">Years Exp</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-[20px] p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700 hover:border-teal-100 hover:shadow-md transition-all">
                  <div className="font-bold text-3xl text-slate-900 dark:text-slate-50 mb-2">50k+</div>
                  <div className="text-teal-600 font-medium text-xs uppercase tracking-wider">Delivered</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-[20px] p-6 text-center shadow-sm border border-slate-100 dark:border-slate-700 hover:border-teal-100 hover:shadow-md transition-all">
                  <div className="font-bold text-3xl text-slate-900 dark:text-slate-50 mb-2">15k+</div>
                  <div className="text-teal-600 font-medium text-xs uppercase tracking-wider">Clients</div>
                </div>
              </div>
            </div>
            
            <div className="reveal-right relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl h-[500px] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                <img src="/assets/image (4).png" alt="Our Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 rounded-[24px] shadow-xl p-6 border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-4 dark:border dark:border-slate-700">
                <div className="w-14 h-14 bg-teal-500 rounded-[24px] flex items-center justify-center shadow-lg shadow-teal-500/30">
                  <i className="fas fa-award text-white text-2xl"></i>
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-50 text-lg">Award Winning</div>
                  <div className="text-slate-500 dark:text-slate-400 font-medium">Best Cargo 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Advantage</span>
            <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Why Choose Us</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              We offer unmatched shipping services with transparency, absolute reliability, and premium care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger reveal">
            <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-16 h-16 bg-teal-50 rounded-[20px] flex items-center justify-center flex-shrink-0">
                <i className="fas fa-box-open text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-3">Package Consolidation</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Combine multiple packages into one shipment. Save up to 40% on shipping costs by seamlessly consolidating orders from different US retailers.</p>
              </div>
            </div>
            
            <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-16 h-16 bg-emerald-50 rounded-[20px] flex items-center justify-center flex-shrink-0">
                <i className="fas fa-shield-alt text-emerald-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-3">Security & Reliability</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Every package is fully insured during transit. Our secure warehousing and meticulous handling ensure your items arrive safely.</p>
              </div>
            </div>
            
            <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-16 h-16 bg-teal-50 rounded-[20px] flex items-center justify-center flex-shrink-0">
                <i className="fas fa-map-marker-alt text-teal-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-3">Real-time Tracking</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Track your shipment accurately at every step of the journey. Receive automatic SMS and email notifications for every vital status update.</p>
              </div>
            </div>
            
            <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] border border-slate-100 dark:border-slate-700 p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm dark:border dark:border-slate-700">
              <div className="w-16 h-16 bg-emerald-50 rounded-[20px] flex items-center justify-center flex-shrink-0">
                <i className="fas fa-headset text-emerald-600 text-2xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-3">24/7 Customer Support</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Our dedicated, global support team is available around the clock via phone, email, and WhatsApp to assist with any inquiries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-10 md:py-16 px-4 md:py-24 px-4 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="text-center mb-16 reveal">
            <span className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Leadership</span>
            <h2 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-slate-50 mb-6">Meet Our Team</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">The dedicated professionals who make it all happen.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger reveal">
            {[
              { name: "Ahmed Rahman", role: "CEO & Founder", exp: "10+ years in international logistics" },
              { name: "Sarah Johnson", role: "Operations Manager", exp: "Expert in supply chain management" },
              { name: "Karim Hassan", role: "Customer Support Head", exp: "Dedicated to customer satisfaction" },
              { name: "Nadia Islam", role: "Customs & Compliance", exp: "Specialist in import regulations" }
            ].map((member, index) => (
              <div key={index} className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-slate-50 dark:bg-slate-800 rounded-[24px] shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden text-center group">
                <div className="h-56 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10"></div>
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <i className="fas fa-user text-slate-400 text-5xl"></i>
                  </div>
                </div>
                <div className="p-6 relative z-20 bg-white dark:bg-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-slate-50 text-xl mb-1">{member.name}</h4>
                  <p className="text-teal-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
