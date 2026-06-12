import React from 'react';
import Link from 'next/link';

export default function MainContent() {
  return (
    <>
      {/*  HEADER  */}
    <header
      style={{ 'backgroundImage': 'url("/assets/7771d7d86123da77de082143b78a5420695f0f81.jpg")', 'backgroundSize': 'cover', 'backgroundPosition': 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center"
    >
      <div
        className="flex justify-center pt-32 pb-20 px-4 text-center hero-text"
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
            <div className="h-[10px] w-[40px] bg-teal-500 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
            <div className="h-[10px] w-[40px] bg-teal-500/40 rounded-full"></div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 whatsapp-btn"
      >
        <div
          className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green"
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
            className="card-hover bg-white rounded-[24px] p-6 text-center shadow-sm border border-slate-200 group"
          >
            <div
              className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300"
            >
              <i
                className="fas fa-phone text-teal-500 text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
            <p className="text-slate-500 text-sm">+1 (012) 345-6789</p>
          </a>
          <a
            href="mailto:info@swiftexpress.com"
            className="card-hover bg-white rounded-[24px] p-6 text-center shadow-sm border border-slate-200 group"
          >
            <div
              className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300"
            >
              <i
                className="fas fa-envelope text-teal-500 text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
            <p className="text-slate-500 text-sm">info@swiftexpress.com</p>
          </a>
          <a
            href="https://wa.me/8801715825331"
            target="_blank"
            className="card-hover bg-white rounded-[24px] p-6 text-center shadow-sm border border-slate-200 group"
          >
            <div
              className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300"
            >
              <i
                className="fab fa-whatsapp text-teal-500 text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
            <p className="text-slate-500 text-sm">+880 1715-825331</p>
          </a>
          <div
            className="card-hover bg-white rounded-[24px] p-6 text-center shadow-sm border border-slate-200 group"
          >
            <div
              className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300"
            >
              <i
                className="fas fa-map-marker-alt text-teal-500 text-xl group-hover:text-white transition-colors"
              ></i>
            </div>
            <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
            <p className="text-slate-500 text-sm">Massachusetts 02156, USA</p>
          </div>
        </div>

        {/*  Contact Form + Info  */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/*  Info Card  */}
          <div className="lg:col-span-2 reveal-left">
            <div
              className="bg-gradient-to-b from-teal-500 to-teal-400 rounded-[32px] p-8 h-full text-white"
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
              className="bg-white rounded-[32px] shadow-sm p-8 border border-slate-200"
            >
              <h3 className="font-bold text-2xl text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form id="contactForm" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 text-sm font-medium mb-2"
                      >First Name *</label
                    >
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-sm font-medium mb-2"
                      >Last Name *</label
                    >
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 text-sm font-medium mb-2"
                      >Email *</label
                    >
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 text-sm font-medium mb-2"
                      >Phone Number</label
                    >
                    <input
                      type="tel"
                      placeholder="+880 1234-567890"
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-500 text-sm font-medium mb-2"
                    >Subject</label
                  >
                  <select
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Shipping Question</option>
                    <option>Tracking Issue</option>
                    <option>Billing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 text-sm font-medium mb-2"
                    >Message *</label
                  >
                  <textarea
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors text-sm resize-none"
                  ></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    className="mt-1 w-4 h-4 accent-teal-500"
                  />
                  <label htmlFor="agree" className="text-slate-500 text-sm"
                    >I agree to the
                    <a href="#" className="text-teal-500 hover:underline"
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
          className="rounded-[32px] overflow-hidden shadow-lg border border-slate-200 reveal"
          style={{ 'height': '350px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94382.52977695285!2d-71.12119!3d42.35843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2002156%2C%20USA!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="350"
            style={{ 'border': '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </section>
    </>
  );
}
