"use client";

import React, { useState } from 'react';
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, Loader2, MessageSquare } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

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
      {/* HEADER SECTION */}
      <header className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#0A0F1C] border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0F1C]/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/50 to-transparent z-10"></div>
          <img src="/assets/7771d7d86123da77de082143b78a5420695f0f81.jpg" alt="Contact Us" className="w-full h-full object-cover scale-105" suppressHydrationWarning />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 pb-20 text-center flex flex-col items-center">

          {/* Glassmorphism Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-slate-300 text-xs sm:text-sm font-medium tracking-wide">24/7 Global Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Get In Touch,<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">We're Here to Help.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Reach out to our global support team for any inquiries, tracking issues, or partnership opportunities.
          </p>
        </div>
      </header>

      {/* 2. CONTACT INFORMATION & FORM SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Contact Information Card */}
            <div className="lg:col-span-5 bg-indigo-600 dark:bg-indigo-900/80 rounded-[2rem] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden h-full flex flex-col">

              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-indigo-700 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="font-bold text-2xl sm:text-3xl mb-4 tracking-tight">Contact Information</h3>
                <p className="text-indigo-100 text-sm sm:text-base leading-relaxed mb-12">
                  Have questions about our shipping rates or need help with a package? Drop us a line or give us a call.
                </p>

                <div className="flex flex-col gap-8 mb-16">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-xs sm:text-sm font-medium mb-1 uppercase tracking-wider">Phone Support</p>
                      <p className="font-semibold text-lg sm:text-xl">+1 (012) 345-6789</p>
                      <p className="text-indigo-200 text-xs mt-1">Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-xs sm:text-sm font-medium mb-1 uppercase tracking-wider">Email Us</p>
                      <p className="font-semibold text-lg sm:text-xl">info@swiftexpress.com</p>
                      <p className="text-indigo-200 text-xs mt-1">We aim to reply within 2 hours</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-xs sm:text-sm font-medium mb-1 uppercase tracking-wider">Main Hub</p>
                      <p className="font-semibold text-base sm:text-lg leading-snug">
                        123 Logistics Boulevard,<br />
                        Boston, Massachusetts 02156<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="relative z-10 mt-auto pt-8 border-t border-white/20">
                <p className="text-indigo-200 text-xs font-medium mb-4 uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                    <FaFacebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-all border border-white/10">
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2rem] p-8 sm:p-12 border border-slate-200 dark:border-white/10 shadow-lg">
              <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2 tracking-tight">Send a Message</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-10">
                Fill out the form below and our team will get back to you immediately.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Doe"
                      className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Subject</label>
                  <select className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all cursor-pointer">
                    <option value="" disabled selected>Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="tracking">Tracking Issue</option>
                    <option value="billing">Billing & Invoices</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2">Message <span className="text-red-500">*</span></label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                  </div>
                  <label htmlFor="agree" className="text-slate-500 dark:text-slate-400 text-sm leading-tight cursor-pointer">
                    I agree to the <a href="#" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Privacy Policy</a> and consent to being contacted by Swift Express.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <><Loader2 className="animate-spin" size={20} /> Sending Message...</>
                  ) : (
                    <><Send size={20} /> Send Message</>
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH MAP SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/5 h-[400px] sm:h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94382.52977695285!2d-71.12119!3d42.35843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA%2002156%2C%20USA!5e0!3m2!1sen!2sbd!4v1234567890"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801715825331"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 md:right-8 md:bottom-8 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative bg-[#25D366] hover:bg-[#20bd5a] h-14 w-14 rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 hover:-translate-y-1">
          <FaWhatsapp className="text-white text-3xl" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#25D366]"></span>
          </span>
        </div>
      </a>
    </>
  );
}