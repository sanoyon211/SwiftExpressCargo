"use client";

import React from 'react';
import { Star, StarHalf, Quote } from 'lucide-react';

export default function CustomerFeedback() {
  const reviews = [
    {
      id: 1,
      name: "Ronald Richards",
      role: "E-commerce Business Owner",
      image: "/assets/ronald.png",
      rating: 5,
      review: "Excellent service! My package arrived in perfect condition and right on time. The real-time tracking system is incredibly accurate and gave me great peace of mind. Highly recommended for business shipping!"
    },
    {
      id: 2,
      name: "Floyd Miles",
      role: "Frequent Shopper",
      image: "/assets/lady.png",
      rating: 5,
      review: "I've been using Swift Express for 2 years now. The customer service is absolutely amazing, and the prices are very competitive. Won't use anyone else!"
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      role: "Retail Customer",
      image: "/assets/savanna.png",
      rating: 4.5,
      review: "Package consolidation saved me so much money! The dashboard is easy to use, and support is always responsive. Great experience overall!"
    },
    {
      id: 4,
      name: "Jerome Bell",
      role: "Global Importer",
      image: "https://i.pravatar.cc/150?img=11", // Add a sample image for the 4th review
      rating: 5,
      review: "The customs clearance process was seamless. They handled all the paperwork, and my shipment cleared without any delays. Truly a premium logistics partner."
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} className="fill-amber-400 text-amber-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" size={16} className="fill-amber-400 text-amber-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          size={16}
          className="text-slate-300 dark:text-slate-600"
        />
      );
    }
    return stars;
  };

  return (
    // 🔴 Global Dark Theme Match
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0A0F1C] border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Heading & Overall Rating */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Customer Feedback
            </span>
            <h2 className="font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Loved by businesses worldwide.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8 font-medium">
              Don't just take our word for it. Discover why thousands of customers trust Swift Express for their international shipping needs.
            </p>

            {/* Aggregate Trust Score */}
            <div className="flex items-center gap-4 p-5 bg-white dark:bg-[#0f1629] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm inline-flex hover:shadow-md transition-shadow">
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white">4.9</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {renderStars(5)}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  Based on 2,500+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Equal Sized Reviews Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

            {/* 🔴 Featured true/false মুছে দিয়ে সব কার্ড সমান করা হয়েছে */}
            {reviews.map((review) => (
              <div
                key={review.id}
                className="relative bg-white dark:bg-[#0f1629] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500/30 dark:hover:border-indigo-400/30 group"
              >
                {/* Decorative Quote Icon */}
                <Quote size={80} className="absolute -top-4 -right-4 text-slate-50 dark:text-white/[0.02] rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                <div className="relative z-10 flex flex-col h-full">

                  {/* User Profile Info */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-700 shadow-sm group-hover:border-indigo-100 dark:group-hover:border-indigo-500/30 transition-colors"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white tracking-tight">{review.name}</h4>
                      <div className="flex gap-1 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow font-medium italic">
                    "{review.review}"
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}