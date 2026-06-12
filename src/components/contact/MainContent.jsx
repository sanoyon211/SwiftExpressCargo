"use client";
import React, { useState } from 'react';
import { toast } from "sonner";

export default function MainContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <>
      {/*  HEADER  */}
    <header
      style={{ backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url("/assets/7771d7d86123da77de082143b78a5420695f0f81.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="relative min-h-[400px] md:min-h-[500px] w-full flex flex-col justify-center items-center dark:border-b dark:border-slate-800"
    >
      <div className="flex justify-center pt-32 pb-20 px-4 text-center hero-text">
        <div>
          <h1 className="font-bold text-[40px] md:text-[64px] text-white leading-tight mb-4">
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
        className="absolute right-5 bottom-5 md:right-10 md:bottom-10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/40"
      >
        <div className="bg-gradient-to-r from-teal-500 to-emerald-400 w-14 h-14 rounded-full flex items-center justify-center shadow-lg pulse-green">
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </div>
      </a>
    </header>

    {/*  CONTACT CHANNELS  */}
    <section className="py-16 px-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 stagger reveal">
          <a href="tel:+10123456789" className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700 group dark:border dark:border-slate-700">
            <div className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300">
              <i className="fas fa-phone text-teal-500 text-xl group-hover:text-white transition-colors"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Phone</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">+1 (012) 345-6789</p>
          </a>
          <a href="mailto:info@swiftexpress.com" className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700 group dark:border dark:border-slate-700">
            <div className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300">
              <i className="fas fa-envelope text-teal-500 text-xl group-hover:text-white transition-colors"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Email</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">info@swiftexpress.com</p>
          </a>
          <a href="https://wa.me/8801715825331" target="_blank" className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700 group dark:border dark:border-slate-700">
            <div className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300">
              <i className="fab fa-whatsapp text-teal-500 text-xl group-hover:text-white transition-colors"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">WhatsApp</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">+880 1715-825331</p>
          </a>
          <div className="transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/10 dark:hover:shadow-2xl bg-white dark:bg-slate-800 rounded-[24px] p-6 text-center shadow-sm border border-slate-200 dark:border-slate-700 group dark:border dark:border-slate-700">
            <div className="w-14 h-14 bg-teal-50 rounded-[24px] flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-400 transition-all duration-300">
              <i className="fas fa-map-marker-alt text-teal-500 text-xl group-hover:text-white transition-colors"></i>
            </div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Address</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Massachusetts 02156, USA</p>
          </div>
        </div>

        {/*  Contact Form + Info  */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/*  Info Card  */}
          <div className="lg:col-span-2 reveal-left">
            <div className="bg-gradient-to-b from-teal-500 to-teal-400 rounded-[32px] p-8 h-full text-white relative overflow-hidden">
              <h3 className="font-bold text-2xl mb-2 relative z-10">Contact Information</h3>
              <p className="text-white/80 text-sm mb-10 relative z-10">Say something to start a live chat!</p>

              <div className="flex flex-col gap-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Phone</p>
                    <p className="font-medium">+1 (012) 345-6789</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Email</p>
                    <p className="font-medium">info@swiftexpress.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs mb-1">Office</p>
                    <p className="font-medium">
                      123 Shipping Lane<br />Massachusetts 02156<br />United States
                    </p>
                  </div>
                </div>
              </div>

              {/*  Social  */}
              <div className="flex gap-3 mt-12 relative z-10">
                <a href="https://facebook.com" target="_blank" className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"><i className="fab fa-facebook-f text-white text-sm"></i></a>
                <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"><i className="fab fa-instagram text-white text-sm"></i></a>
                <a href="https://x.com" target="_blank" className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"><i className="fab fa-x-twitter text-white text-sm"></i></a>
                <a href="https://wa.me/8801715825331" target="_blank" className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition"><i className="fab fa-whatsapp text-white text-sm"></i></a>
              </div>

              {/*  Decorative dots  */}
              <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute top-[-20px] left-[-20px] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/*  Form  */}
          <div className="lg:col-span-3 reveal-right">
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm p-8 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-2xl text-slate-900 dark:text-slate-50 mb-2">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form id="contactForm" onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">First Name *</label>
                    <input type="text" required placeholder="John" className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 bg-transparent transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Last Name *</label>
                    <input type="text" required placeholder="Doe" className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 bg-transparent transition-colors text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Email *</label>
                    <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 bg-transparent transition-colors text-sm" />
                  </div>
                  <div>
                    <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Phone Number</label>
                    <input type="tel" placeholder="+880 1234-567890" className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 bg-transparent transition-colors text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 transition-colors text-sm bg-transparent">
                    <option className="bg-white dark:bg-slate-800">General Inquiry</option>
                    <option className="bg-white dark:bg-slate-800">Shipping Question</option>
                    <option className="bg-white dark:bg-slate-800">Tracking Issue</option>
                    <option className="bg-white dark:bg-slate-800">Billing</option>
                    <option className="bg-white dark:bg-slate-800">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">Message *</label>
                  <textarea required rows="5" placeholder="Write your message here..." className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 bg-transparent transition-colors text-sm resize-none"></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="agree" required className="mt-1 w-4 h-4 accent-teal-500" />
                  <label htmlFor="agree" className="text-slate-500 dark:text-slate-400 text-sm">
                    I agree to the <a href="#" className="text-teal-500 hover:underline">Privacy Policy</a> and consent to being contacted.
                  </label>
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white rounded-full px-8 py-3 font-medium hover:-translate-y-0.5 hover:shadow-lg hover:from-teal-600 hover:to-emerald-500 transition-all duration-300 inline-flex items-center justify-center shadow-md py-4 rounded-xl text-base font-semibold w-full sm:w-auto sm:px-12 disabled:opacity-70 flex items-center justify-center">
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin mr-2"></i>Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane mr-2"></i>Send Message</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  MAP SECTION  */}
    <section className="py-10 px-4 bg-white dark:bg-slate-900">
      <div className="container">
        <div className="rounded-[32px] overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 reveal" style={{ 'height': '350px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94382.52977695285!2d-71.12119!3d42.35843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2002156%2C%20USA!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="350"
            style={{ 'border': '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </section>
    </>
  );
}
