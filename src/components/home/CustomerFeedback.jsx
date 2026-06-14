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
      review: "Excellent service! My package arrived in perfect condition and right on time. The real-time tracking system is incredibly accurate and gave me great peace of mind. Highly recommended for business shipping!",
      featured: true
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
    }
  ];

  const renderStars = (rating, isFeatured = false) => {
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
          className={isFeatured ? "text-slate-600" : "text-slate-300 dark:text-slate-600"}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* Left Column: Heading & Overall Rating */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">
              Customer Feedback
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Loved by businesses worldwide.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Don't just take our word for it. Discover why thousands of customers trust Swift Express for their international shipping needs.
            </p>

            {/* Aggregate Trust Score */}
            <div className="flex items-center gap-4 p-5 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm inline-flex">
              <div className="text-4xl font-bold text-slate-900 dark:text-white">4.9</div>
              <div>
                <div className="flex gap-1 mb-1">
                  {renderStars(5)}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">
                  Based on 2,500+ reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Reviews Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {reviews.map((review) => {
              if (review.featured) {
                return (
                  /* Featured Large Card */
                  <div
                    key={review.id}
                    className="sm:col-span-2 relative bg-slate-900 text-white p-8 sm:p-10 rounded-2xl overflow-hidden shadow-xl border border-slate-800 group"
                  >
                    <Quote size={120} className="absolute -top-6 -right-6 text-white/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-500" />

                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {renderStars(review.rating, true)}
                      </div>
                      <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-10 text-slate-200">
                        "{review.review}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-slate-700"
                        />
                        <div>
                          <h4 className="font-semibold text-lg tracking-tight">{review.name}</h4>
                          <p className="text-slate-400 text-sm">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                /* Standard Cards */
                <div
                  key={review.id}
                  className="relative bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Quote size={80} className="absolute -top-4 -right-4 text-slate-100 dark:text-white/[0.02] rotate-12" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover bg-slate-100 dark:bg-slate-700"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white tracking-tight">{review.name}</h4>
                        <div className="flex gap-1 mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow">
                      "{review.review}"
                    </p>
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