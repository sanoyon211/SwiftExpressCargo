"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, Mail } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFaq = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping from USA to Bangladesh takes 7-14 business days. Express shipping takes 3-5 business days. We also offer economy shipping which takes 14-21 business days at significantly reduced rates."
    },
    {
      question: "What items are restricted?",
      answer: "Restricted items include hazardous materials, flammable liquids, batteries over a certain size, firearms, and perishable goods. Please check our comprehensive restricted items list on our services page before placing your order."
    },
    {
      question: "How is shipping cost calculated?",
      answer: "Shipping cost is based on the actual weight or volumetric weight (whichever is higher) of your package. Use our intuitive cost calculator to get an instant estimate. Consolidating multiple packages can save you up to 40% on shipping costs."
    },
    {
      question: "Is there a weight limit per package?",
      answer: "Individual packages can weigh up to 70 lbs (32 kg). For heavier items, we offer specialized freight shipping services. Contact our support team for special arrangements regarding oversized or heavy cargo."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Support CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Got Questions?
            </span>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Find detailed answers to common questions about our international shipping services, pricing, and operational policies.
            </p>

            {/* Support CTA Box */}
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <Mail size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Still have questions?</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <Link href="/contact">
                <button className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline focus:outline-none">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Flush Accordion */}
          <div className="lg:col-span-7 flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-slate-200 dark:border-white/10 last:border-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-semibold text-base sm:text-lg pr-6 transition-colors duration-200 ${isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      }`}>
                      {faq.question}
                    </span>

                    <div className="shrink-0 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                      {isOpen ? (
                        <Minus size={20} strokeWidth={2} />
                      ) : (
                        <Plus size={20} strokeWidth={2} />
                      )}
                    </div>
                  </button>

                  {/* Modern Grid Animation for Accordion */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed pr-6 sm:pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}