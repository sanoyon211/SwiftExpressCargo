"use client";
import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <>

    <div id="preloader"><div className="spinner"></div></div>
    <div id="progress-bar"></div>
    <button id="backToTop"><i className="fas fa-arrow-up text-xs"></i></button>
    <div className="toast"></div>

    {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/7771d7d86123da77de082143b78a5420695f0f81.jpg")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
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
              <a
                href="/about"
                className="text-white font-medium hover:text-[#6DA015] transition-colors"
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
              <a href="/contact" className="text-[#46C0A2] font-medium"
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
                href="/tracking"
                className="text-[#333] font-medium py-2 border-b border-gray-100 flex items-center gap-3"
                ><i className="fas fa-search-location w-5 text-[#6DA015]"></i
                >Track</a
              >
            </li>
            <li>
              <a
                href="/contact"
                className="text-[#6DA015] font-semibold py-2 flex items-center gap-3"
                ><i className="fas fa-envelope w-5 text-[#6DA015]"></i>Contact</a
              >
            </li>
          </ul>
        </div>
      </nav>

      <div
        className="flex justify-center py-20 md:py-32 px-4 text-center hero-text"
      >
        <div>
          <h1
            className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4"
          >
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-lg mx-auto">
            We're here to help. Reach out to us anytime.
          </p>
          <div className="flex gap-2 justify-center mt-8">
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

    {/*  CONTACT CHANNELS  */}
    <section className="py-16 px-4">
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger reveal"
        >
          <a
            href="tel:+10123456789"
            className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-[#DCE8C6] group"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#6DA015] group-hover:to-[#46C0A2] transition-all duration-300"
            >
              <i
                className="fas fa-phone text-[#6DA015] text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">Phone</h4>
            <p className="text-[#606060] text-sm">+1 (012) 345-6789</p>
          </a>
          <a
            href="mailto:info@swiftexpress.com"
            className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-[#DCE8C6] group"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#6DA015] group-hover:to-[#46C0A2] transition-all duration-300"
            >
              <i
                className="fas fa-envelope text-[#6DA015] text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">Email</h4>
            <p className="text-[#606060] text-sm">info@swiftexpress.com</p>
          </a>
          <a
            href="https://wa.me/8801715825331"
            target="_blank"
            className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-[#DCE8C6] group"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#6DA015] group-hover:to-[#46C0A2] transition-all duration-300"
            >
              <i
                className="fab fa-whatsapp text-[#6DA015] text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">WhatsApp</h4>
            <p className="text-[#606060] text-sm">+880 1715-825331</p>
          </a>
          <div
            className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-[#DCE8C6] group"
          >
            <div
              className="w-14 h-14 bg-gradient-to-r from-[#6DA015]/10 to-[#46C0A2]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#6DA015] group-hover:to-[#46C0A2] transition-all duration-300"
            >
              <i
                className="fas fa-map-marker-alt text-[#6DA015] text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-[#333] mb-1">Address</h4>
            <p className="text-[#606060] text-sm">Massachusetts 02156, USA</p>
          </div>
        </div>

        {/*  Contact Form + Info  */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/*  Info Card  */}
          <div className="lg:col-span-2 reveal-left">
            <div
              className="bg-gradient-to-b from-[#6DA015] to-[#46C0A2] rounded-3xl p-8 h-full text-white"
            >
              <h3 className="font-bold text-2xl mb-2">Contact Information</h3>
              <p className="text-white/80 text-sm mb-10">
                Say something to start a live chat!
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Phone</p>
                    <p className="font-medium">+1 (012) 345-6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Email</p>
                    <p className="font-medium">info@swiftexpress.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
                  >
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Office</p>
                    <p className="font-medium">
                      123 Shipping Lane<br />Massachusetts 02156<br />United
                      States
                    </p>
                  </div>
                </div>
              </div>

              {/*  Social  */}
              <div className="flex gap-3 mt-12">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
                  ><i className="fab fa-facebook-f text-white text-sm"></i
                ></a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
                  ><i className="fab fa-instagram text-white text-sm"></i
                ></a>
                <a
                  href="https://x.com"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
                  ><i className="fab fa-x-twitter text-white text-sm"></i
                ></a>
                <a
                  href="https://wa.me/8801715825331"
                  target="_blank"
                  className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"
                  ><i className="fab fa-whatsapp text-white text-sm"></i
                ></a>
              </div>

              {/*  Decorative dots  */}
              <div className="mt-10 grid grid-cols-5 gap-2 opacity-30">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/*  Form  */}
          <div className="lg:col-span-3 reveal-right">
            <div
              className="bg-white rounded-3xl shadow-sm p-8 border border-[#DCE8C6]"
            >
              <h3 className="font-bold text-2xl text-[#333] mb-2">
                Send a Message
              </h3>
              <p className="text-[#606060] text-sm mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form id="contactForm" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#606060] text-sm font-medium mb-2"
                      >First Name *</label
                    >
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606060] text-sm font-medium mb-2"
                      >Last Name *</label
                    >
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#606060] text-sm font-medium mb-2"
                      >Email *</label
                    >
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[#606060] text-sm font-medium mb-2"
                      >Phone Number</label
                    >
                    <input
                      type="tel"
                      placeholder="+880 1234-567890"
                      className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#606060] text-sm font-medium mb-2"
                    >Subject</label
                  >
                  <select
                    className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Shipping Question</option>
                    <option>Tracking Issue</option>
                    <option>Billing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#606060] text-sm font-medium mb-2"
                    >Message *</label
                  >
                  <textarea
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border-2 border-[#DCE8C6] rounded-xl focus:outline-none focus:border-[#6DA015] text-[#333] transition-colors text-sm resize-none"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    className="mt-1 w-4 h-4 accent-[#6DA015]"
                  />
                  <label htmlFor="agree" className="text-[#606060] text-sm"
                    >I agree to the
                    <a href="#" className="text-[#6DA015] hover:underline"
                      >Privacy Policy</a
                    >
                    and consent to being contacted.</label
                  >
                </div>
                <button
                  type="submit"
                  className="btn-primary py-4 text-base font-semibold w-full sm:w-auto sm:px-12"
                >
                  <i className="fas fa-paper-plane mr-2"></i>Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  MAP SECTION  */}
    <section className="py-10 px-4 bg-white">
      <div className="container">
        <div
          className="rounded-3xl overflow-hidden shadow-lg border border-[#DCE8C6] reveal"
          style={{ 'height': '350px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94382.52977695285!2d-71.12119!3d42.35843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2002156%2C%20USA!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="350"
            style={{ 'border': '0' }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
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
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted shipping partner from USA to Bangladesh.
            </p>
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
                  href="/tracking"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Track Shipment</a
                >
              </li>
              <li>
                <a
                  href="/rates"
                  className="text-white/70 hover:text-[#46C0A2] text-sm transition-colors"
                  >Rates</a
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
            <div className="flex gap-3 mt-5">
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
