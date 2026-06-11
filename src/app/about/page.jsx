"use client";
import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/image.png")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative h-auto w-full"
    >
      <div
        className="md:hidden py-4 px-6 bg-black/30 backdrop-blur-lg flex justify-between items-center"
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-[101px] h-[53px] object-cover"
        />
        <button id="menubtn" className="text-white text-2xl">
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="bg-black/30 backdrop-blur-lg hidden md:flex justify-center">
        <nav className="container flex items-center justify-between py-4 px-4">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-[101px] h-[53px] object-cover"
          />
          <ul className="flex gap-8">
            <li>
              <a
                href="/"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Services</a
              >
            </li>
            <li>
              <a href="/about" className="text-[#46C0A2] font-medium"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="/rates"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Rates</a
              >
            </li>
            <li>
              <a
                href="/cost-calculator"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Cost Calculator</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
                >Contact</a
              >
            </li>
          </ul>
          <div className="flex gap-3">
            <a href="./signin_up/login.html"
              ><button className="btn-primary text-sm px-5 py-2.5">
                Sign In
              </button></a
            >
            <a href="./signin_up/sign_up.html"
              ><button
                className="border border-white text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/20 transition"
              >
                Sign Up
              </button></a
            >
          </div>
        </nav>
      </div>
      <nav
        className="hidden absolute z-50 right-0 top-[72px] w-full md:hidden"
        id="mobileMenu"
      >
        <div className="mx-4 bg-white/95 rounded-2xl shadow-2xl p-6">
          <ul className="flex flex-col gap-4 mb-6">
            <li>
              <a
                href="/"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-home w-5 text-[#6DA015]"></i>Home</a
              >
            </li>
            <li>
              <a
                href="/services"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-shipping-fast w-5 text-[#6DA015]"></i
                >Services</a
              >
            </li>
            <li>
              <a
                href="/about"
                className="text-[#6DA015] font-semibold py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-info-circle w-5 text-[#6DA015]"></i>About
                Us</a
              >
            </li>
            <li>
              <a
                href="/tracking"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-search-location w-5 text-[#6DA015]"></i
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-[#333] font-medium py-2 flex items-center gap-3"
                ><i className="fas fa-envelope w-5 text-[#6DA015]"></i>Contact</a
              >
            </li>
          </ul>
          <div className="flex gap-3">
            <a href="./signin_up/login.html" className="flex-1"
              ><button className="btn-primary w-full text-sm py-2.5">
                Sign In
              </button></a
            >
            <a href="./signin_up/sign_up.html" className="flex-1"
              ><button className="btn-outline w-full text-sm py-2.5">
                Sign Up
              </button></a
            >
          </div>
        </div>
      </nav>

      <div
        className="flex justify-center py-20 md:py-32 px-4 text-center hero-text"
      >
        <div>
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            About Us
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
            Connecting USA to Bangladesh with fast, reliable, and affordable
            cargo services since 2020.
          </p>
          {/*  Track Bar  */}
          <div className="max-w-md mx-auto">
            <div
              className="bg-white/15 backdrop-blur-lg border border-white/30 rounded-full p-2 flex items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-3 pl-3">
                <i className="fas fa-search text-white/70 text-sm"></i>
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="bg-transparent text-white placeholder-white/60 focus:outline-none text-sm w-full"
                />
              </div>
              <a href="/tracking"
                ><button className="btn-primary text-sm px-5 py-2.5">
                  Track Now
                </button></a
              >
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-10">
            <div className="h-[10px] w-[40px] bg-[#6DA015] rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-[#6DA015]/40 rounded-full"></div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-[#6DA015] to-[#46C0A2] w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/*  OUR STORY  */}
    <section className="py-16 px-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left">
            <div className="section-divider mb-4" style={{ 'margin': '0 0 16px 0' }}></div>
            <h2 className="font-bold text-3xl md:text-4xl text-[#333] mb-6">
              Our Story
            </h2>
            <p className="text-[#606060] leading-relaxed mb-4">
              Swift Express Cargo was founded in 2020 with a simple mission:
              make international shipping from the USA to Bangladesh easy,
              affordable, and reliable for everyone.
            </p>
            <p className="text-[#606060] leading-relaxed mb-6">
              What started as a small operation helping Bangladeshi expats ship
              goods home has grown into a full-service cargo company serving
              thousands of customers worldwide. We understand the challenges of
              international shipping, and we've built our services to solve
              them.
            </p>
            <div className="flex flex-wrap gap-4">
              <div
                className="bg-[#F1F6F2] rounded-2xl p-4 text-center min-w-[120px]"
              >
                <div
                  className="font-bold text-2xl gradient-text"
                  data-target="5"
                  data-suffix="+"
                >
                  0
                </div>
                <div className="text-[#606060] text-xs mt-1">Years Experience</div>
              </div>
              <div
                className="bg-[#F1F6F2] rounded-2xl p-4 text-center min-w-[120px]"
              >
                <div
                  className="font-bold text-2xl gradient-text"
                  data-target="50000"
                  data-suffix="+"
                >
                  0
                </div>
                <div className="text-[#606060] text-xs mt-1">
                  Packages Delivered
                </div>
              </div>
              <div
                className="bg-[#F1F6F2] rounded-2xl p-4 text-center min-w-[120px]"
              >
                <div
                  className="font-bold text-2xl gradient-text"
                  data-target="15000"
                  data-suffix="+"
                >
                  0
                </div>
                <div className="text-[#606060] text-xs mt-1">Happy Customers</div>
              </div>
            </div>
          </div>
          <div className="reveal-right relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src="/assets/image (4).png"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-[#DCE8C6]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-xl flex items-center justify-center"
                >
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <div>
                  <div className="font-bold text-[#333]">Award Winning</div>
                  <div className="text-[#606060] text-xs">Best Cargo 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  WHY CHOOSE US  */}
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Why Choose Us
          </h2>
          <p className="text-[#606060] text-lg mt-3 max-w-xl mx-auto">
            We offer unmatched shipping services with transparency, reliability,
            and care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger reveal">
          <div
            className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex items-start gap-5 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-box-open text-white text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#333] mb-2">
                Package Consolidation
              </h4>
              <p className="text-[#606060] text-sm leading-relaxed">
                Combine multiple packages into one shipment. Save up to 40% on
                shipping costs by consolidating your orders from different US
                stores.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex items-start gap-5 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-shield-alt text-white text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#333] mb-2">
                Security & Reliability
              </h4>
              <p className="text-[#606060] text-sm leading-relaxed">
                Every package is fully insured during transit. Our secure
                warehousing and careful handling ensures your items arrive
                safely.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex items-start gap-5 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-map-marker-alt text-white text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#333] mb-2">
                Real-time Tracking
              </h4>
              <p className="text-[#606060] text-sm leading-relaxed">
                Track your shipment at every step of the journey. Get SMS and
                email notifications for every status update automatically.
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl border border-[#DCE8C6] p-6 flex items-start gap-5 shadow-sm"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <i className="fas fa-headset text-white text-xl"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#333] mb-2">
                24/7 Customer Support
              </h4>
              <p className="text-[#606060] text-sm leading-relaxed">
                Our dedicated support team is always available via phone, email,
                and WhatsApp to help with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  COMPANY OVERVIEW VIDEO  */}
    <section className="py-16 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Company Overview
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            See how we make shipping simple and reliable
          </p>
        </div>
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl reveal"
          style={{ 'aspectRatio': '16/9' }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SWHfcJpByF4"
            title="Company Overview"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <div
            className="absolute top-4 right-4 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white py-3 px-6 rounded-bl-2xl rounded-tr-2xl font-bold text-sm md:text-lg"
          >
            More Than A Shipping Service
          </div>
        </div>
      </div>
    </section>

    {/*  TEAM  */}
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Meet Our Team
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            The people who make it all happen
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger reveal"
        >
          <div
            className="card-hover bg-white rounded-2xl shadow-sm border border-[#DCE8C6] overflow-hidden text-center"
          >
            <div
              className="h-48 bg-gradient-to-br from-[#6DA015]/20 to-[#46C0A2]/20 flex items-center justify-center"
            >
              <div
                className="w-24 h-24 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
              >
                <i className="fas fa-user text-white text-4xl"></i>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[#333] text-lg">Ahmed Rahman</h4>
              <p className="text-[#6DA015] text-sm font-medium">CEO & Founder</p>
              <p className="text-[#606060] text-xs mt-2">
                10+ years in international logistics
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl shadow-sm border border-[#DCE8C6] overflow-hidden text-center"
          >
            <div
              className="h-48 bg-gradient-to-br from-[#6DA015]/20 to-[#46C0A2]/20 flex items-center justify-center"
            >
              <div
                className="w-24 h-24 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
              >
                <i className="fas fa-user text-white text-4xl"></i>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[#333] text-lg">Sarah Johnson</h4>
              <p className="text-[#6DA015] text-sm font-medium">
                Operations Manager
              </p>
              <p className="text-[#606060] text-xs mt-2">
                Expert in supply chain management
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl shadow-sm border border-[#DCE8C6] overflow-hidden text-center"
          >
            <div
              className="h-48 bg-gradient-to-br from-[#6DA015]/20 to-[#46C0A2]/20 flex items-center justify-center"
            >
              <div
                className="w-24 h-24 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
              >
                <i className="fas fa-user text-white text-4xl"></i>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[#333] text-lg">Karim Hassan</h4>
              <p className="text-[#6DA015] text-sm font-medium">
                Customer Support Head
              </p>
              <p className="text-[#606060] text-xs mt-2">
                Dedicated to customer satisfaction
              </p>
            </div>
          </div>
          <div
            className="card-hover bg-white rounded-2xl shadow-sm border border-[#DCE8C6] overflow-hidden text-center"
          >
            <div
              className="h-48 bg-gradient-to-br from-[#6DA015]/20 to-[#46C0A2]/20 flex items-center justify-center"
            >
              <div
                className="w-24 h-24 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center"
              >
                <i className="fas fa-user text-white text-4xl"></i>
              </div>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-[#333] text-lg">Nadia Islam</h4>
              <p className="text-[#6DA015] text-sm font-medium">
                Customs & Compliance
              </p>
              <p className="text-[#606060] text-xs mt-2">
                Specialist in import regulations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  TESTIMONIALS  */}
    <section className="py-16 px-4 bg-white">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="section-divider"></div>
          <h2 className="font-bold text-3xl md:text-4xl text-[#333] mt-4">
            Customer Feedback
          </h2>
          <p className="text-[#606060] text-lg mt-3">
            Don't just take our word for it
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl border border-[#DCE8C6] p-6 shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
            <p className="text-[#606060] text-sm leading-relaxed mb-4">
              "Amazing service! My Apple products arrived safely and ahead of
              schedule. The real-time tracking gave me peace of mind throughout
              the process."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/assets/ronald.png"
                alt="Ronald"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#333] text-sm">Ronald Richards</p>
                <p className="text-[#606060] text-xs">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl border border-[#DCE8C6] p-6 shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i>
            </div>
            <p className="text-[#606060] text-sm leading-relaxed mb-4">
              "The package consolidation feature saved me a lot of money. I
              shipped 5 packages together and paid much less than expected.
              Highly recommend!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/assets/lady.png"
                alt="Floyd"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#333] text-sm">Floyd Miles</p>
                <p className="text-[#606060] text-xs">Chittagong, Bangladesh</p>
              </div>
            </div>
          </div>
          <div
            className="card-hover bg-[#F9FAFC] rounded-2xl border border-[#DCE8C6] p-6 shadow-sm"
          >
            <div className="flex gap-1 mb-4">
              <i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star text-yellow-400"></i
              ><i className="fas fa-star-half-alt text-yellow-400"></i>
            </div>
            <p className="text-[#606060] text-sm leading-relaxed mb-4">
              "Customer support is exceptional. They answered my questions
              instantly via WhatsApp. My package was delivered in perfect
              condition. 5 stars!"
            </p>
            <div className="flex items-center gap-3">
              <img
                src="/assets/savanna.png"
                alt="Savannah"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#333] text-sm">Savannah Nguyen</p>
                <p className="text-[#606060] text-xs">Sylhet, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  BLOG  */}
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="container">
        <div className="flex justify-between items-start mb-10 reveal">
          <div>
            <div className="section-divider mb-3" style={{ 'margin': '0 0 12px 0' }}></div>
            <h2 className="font-bold text-2xl md:text-[36px] text-[#333]">
              Our Blog
            </h2>
          </div>
          <a href="/blog"
            ><button className="btn-primary text-sm px-5 py-2.5">
              View All
            </button></a
          >
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger reveal">
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2041.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Tips</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                Initial Consultation Guide
              </h3>
              <p className="text-[#606060] text-sm mb-4">
                Learn how to get started with your first shipment from USA to
                Bangladesh.
              </p>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2042 (2).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Guide</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                How to Save on Shipping
              </h3>
              <p className="text-[#606060] text-sm mb-4">
                Top strategies to reduce your shipping costs significantly with
                consolidation.
              </p>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
          <article
            className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden border border-[#DCE8C6]"
          >
            <div className="img-zoom h-48">
              <img
                src="/assets/Rectangle 2042 (3).png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <span className="badge text-xs mb-3 inline-block">Customs</span>
              <h3 className="font-bold text-base text-[#333] mb-2">
                Understanding Customs Rules
              </h3>
              <p className="text-[#606060] text-sm mb-4">
                Everything you need to know about Bangladesh customs for your
                shipments.
              </p>
              <a
                href="/read-more"
                className="inline-flex items-center gap-2 text-[#6DA015] font-semibold text-sm hover:gap-3 transition-all"
                >Read More <i className="fas fa-arrow-right text-xs"></i
              ></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    {/*  FOOTER  */}
    <footer className="bg-[#0B2A77] py-16">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10"
        >
          <div>
            <img src="/assets/logo.png" alt="Logo" className="w-[120px] mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Your trusted shipping partner from USA to Bangladesh since 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-facebook-f text-white text-xs"></i
              ></a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-instagram text-white text-xs"></i
              ></a>
              <a
                href="https://wa.me/8801715825331"
                target="_blank"
                className="w-9 h-9 bg-gradient-to-r from-[#6DA015] to-[#46C0A2] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                ><i className="fab fa-whatsapp text-white text-xs"></i
              ></a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Quick Links</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/services"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="/rates"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Rates</a
                >
              </li>
              <li>
                <a
                  href="/tracking"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Track Shipment</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Support</h6>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="/contact"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Contact Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Privacy Policy</a
                >
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Terms of Service</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-[#6DA015] mb-4">Newsletter</h6>
            <p className="text-white/70 text-sm mb-3">
              Get updates and shipping tips in your inbox.
            </p>
            <div className="bg-white rounded-full flex items-center px-3 py-1">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent text-gray-600 focus:outline-none pl-2 text-sm py-2"
              />
              <button
                className="subscribe-btn bg-gradient-to-r from-[#6DA015] to-[#46C0A2] text-white text-sm px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 text-center">
          <p className="text-white/60 text-sm">
            © Swift Express Cargo 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

    
  
    </>
  );
}
