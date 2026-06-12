import React from 'react';
import Link from 'next/link';

export default function CalculatorSection() {
  return (
    <>
      <section className="py-14 px-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


      <div className="lg:col-span-7 reveal-left" suppressHydrationWarning>
            <div
              className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8"
            >
              {/*  Header  */}
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center shadow-lg"
                >
                  <i className="fas fa-calculator text-white text-lg"></i>
                </div>
                <div>
                  <h2 className="font-bold text-xl text-slate-900 dark:text-slate-50">
                    Check Your Shipping Price
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Fill in the details below for an instant estimate
                  </p>
                </div>
              </div>

              {/*  Product Type  */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2"
                  >Product Type</label
                >
                <div className="relative">
                  <i
                    className="fas fa-tag absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm z-10"
                  ></i>
                  <select
                    id="productType"
                    className="calc-select"
                  >
                    <option value="">Select product type...</option>
                    <option value="electronics">Electronics & Gadgets</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="accessories">Accessories & Jewelry</option>
                    <option value="books">Books & Media</option>
                    <option value="toys">Toys & Games</option>
                    <option value="cosmetics">Cosmetics & Beauty</option>
                    <option value="supplements">Health & Supplements</option>
                    <option value="auto">Auto Parts</option>
                    <option value="other">Other</option>
                  </select>
                  <i
                    className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-xs pointer-events-none"
                  ></i>
                </div>
              </div>

              {/*  Weight + Unit  */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2"
                    >Total Weight</label
                  >
                  <div className="relative">
                    <i
                      className="fas fa-weight absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm"
                    ></i>
                    <input
                      type="number"
                      id="weight"
                      className="calc-input"
                      placeholder="0.00"
                      min="0.1"
                      step="0.1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2"
                    >Unit</label
                  >
                  <div className="relative">
                    <i
                      className="fas fa-balance-scale absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm z-10"
                    ></i>
                    <select id="unit" className="calc-select">
                      <option value="lb">Pounds (lb)</option>
                      <option value="kg">Kilograms (kg)</option>
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-xs pointer-events-none"
                    ></i>
                  </div>
                </div>
              </div>

              {/*  Product Value  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Total Product Value in USD
                  <span className="font-normal text-[#999]"
                    >(incl. US shipping & tax)</span
                  >
                </label>
                <div className="relative">
                  <i
                    className="fas fa-dollar-sign absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm"
                  ></i>
                  <input
                    type="number"
                    id="productValue"
                    className="calc-input"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                <p className="text-xs text-[#999] mt-1.5 flex items-center gap-1">
                  <i className="fas fa-info-circle text-teal-400"></i>
                  Declare the exact value — used to calculate brokerage &
                  insurance fees
                </p>
              </div>

              {/*  Shipping Speed  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3"
                  >Shipping Speed</label
                >
                <div className="flex flex-col gap-3">
                  <div
                    className="speed-card active"
                    data-speed="standard"
                    data-mult="1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                          Standard Shipping
                        </p>
                        <p className="text-[#999] text-xs">7–14 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-[#F1F6F2] dark:bg-slate-700 text-teal-500 px-3 py-1 rounded-full"
                      >Base Rate</span
                    >
                  </div>
                  <div
                    className="speed-card"
                    data-speed="express"
                    data-mult="1.8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                          Express Shipping
                        </p>
                        <p className="text-[#999] text-xs">3–5 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full"
                      >+80% faster</span
                    >
                  </div>
                  <div
                    className="speed-card"
                    data-speed="economy"
                    data-mult="0.7"
                  >
                    <div className="flex items-center gap-3">
                      <div className="radio"></div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">
                          Economy Shipping
                        </p>
                        <p className="text-[#999] text-xs">14–21 business days</p>
                      </div>
                    </div>
                    <span
                      className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full"
                      >Save 30%</span
                    >
                  </div>
                </div>
              </div>

              {/*  Extra Options  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3"
                  >Add-ons
                  <span className="font-normal text-[#999]">(optional)</span></label
                >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className="flex items-center gap-3 p-3 border-2 border-[#E8F0DC] dark:border-slate-700 rounded-xl cursor-pointer hover:border-teal-500 transition-colors"
                  >
                    <input
                      type="checkbox"
                      id="addInsurance"
                      className="w-4 h-4 accent-teal-500"
                    />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50 text-sm">
                        Package Insurance
                      </p>
                      <p className="text-[#999] text-xs">1.5% of declared value</p>
                    </div>
                  </label>
                  <label
                    className="flex items-center gap-3 p-3 border-2 border-[#E8F0DC] dark:border-slate-700 rounded-xl cursor-pointer hover:border-teal-500 transition-colors"
                  >
                    <input
                      type="checkbox"
                      id="addPhoto"
                      className="w-4 h-4 accent-teal-500"
                    />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50 text-sm">
                        Package Photography
                      </p>
                      <p className="text-[#999] text-xs">+$2.00 per package</p>
                    </div>
                  </label>
                </div>
              </div>

              {/*  Calculate Button  */}
              <button
                id="calcBtn"
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-3.5 rounded-full font-bold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10"
                  ><i className="fas fa-calculator mr-2"></i>Calculate Shipping
                  Cost</span
                >
                <div
                  className="absolute inset-0 bg-white dark:bg-slate-800/0 group-hover:bg-white dark:bg-slate-800/10 transition-colors duration-300"
                ></div>
              </button>

              {/*  Disclaimer  */}
              <p
                className="text-xs text-[#999] text-center mt-4 flex items-center justify-center gap-1"
              >
                <i className="fas fa-info-circle text-teal-400"></i>
                Estimate only. Actual rates may vary. Import duties & VAT not
                included.
              </p>
            </div>
          </div>


      <div className="lg:col-span-5 sticky-result reveal-right" suppressHydrationWarning>
            {/*  Result Card  */}
            <div
              className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6"
            >
              {/*  Header gradient  */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-400 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-xs font-medium mb-1">
                      SHIPPING ESTIMATE
                    </p>
                    <div
                      id="totalDisplay"
                      className="text-white font-bold text-4xl price-pop"
                    >
                      $0.00
                    </div>
                    <p className="text-white/80 text-xs mt-1" id="speedLabel">
                      Standard · 7–14 days
                    </p>
                  </div>
                  <div
                    id="resultBadge"
                    className="bg-white dark:bg-slate-800/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30"
                  >
                    Estimate
                  </div>
                </div>
              </div>

              {/*  Breakdown Table  */}
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 text-sm mb-4">
                  Rate Breakdown
                </h4>
                <div className="divide-y divide-[#F1F6F2]">
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-box text-teal-500 text-xs w-4"></i>Base
                      Shipping Rate
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm" id="r-base"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <i
                        className="fas fa-tachometer-alt text-teal-500 text-xs w-4"
                      ></i
                      >Speed Adjustment
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm" id="r-speed"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                  >
                    <span
                      className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-passport text-teal-500 text-xs w-4"></i
                      >Brokerage Fee
                    </span>
                    <span
                      className="font-semibold text-slate-900 dark:text-slate-50 text-sm"
                      id="r-brokerage"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                    id="r-ins-row"
                  >
                    <span
                      className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <i
                        className="fas fa-shield-alt text-teal-500 text-xs w-4"
                      ></i
                      >Insurance
                    </span>
                    <span
                      className="font-semibold text-slate-900 dark:text-slate-50 text-sm"
                      id="r-insurance"
                      >—</span
                    >
                  </div>
                  <div
                    className="result-row flex justify-between items-center py-3 px-1 rounded-lg"
                    id="r-photo-row"
                  >
                    <span
                      className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <i className="fas fa-camera text-teal-500 text-xs w-4"></i
                      >Photography
                    </span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm" id="r-photo"
                      >—</span
                    >
                  </div>
                </div>

                {/*  Total  */}
                <div
                  className="flex justify-between items-center mt-4 p-4 bg-gradient-to-r from-[#F1F6F2] to-[#E8F8F5] dark:from-slate-700/50 dark:to-teal-900/20 rounded-[24px]"
                >
                  <span className="font-bold text-slate-900 dark:text-slate-50">Total Estimate</span>
                  <span className="font-bold text-2xl grad-text" id="r-total"
                    >$0.00</span
                  >
                </div>

                {/*  Delivery Info  */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700"
                  >
                    <i
                      className="fas fa-clock text-teal-500 mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Delivery</p>
                    <p className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5" id="r-time">
                      7–14 days
                    </p>
                  </div>
                  <div
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700"
                  >
                    <i
                      className="fas fa-weight text-teal-500 mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Weight</p>
                    <p
                      className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5"
                      id="r-weight"
                    >
                      — lb
                    </p>
                  </div>
                  <div
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700"
                  >
                    <i
                      className="fas fa-dollar-sign text-teal-500 mb-1 block text-sm"
                    ></i>
                    <p className="text-[#999] text-xs">Per Lb</p>
                    <p
                      className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5"
                      id="r-perlb"
                    >
                      —
                    </p>
                  </div>
                </div>

                {/*  CTA Buttons  */}
                <div className="flex flex-col gap-2 mt-5">
                  <a href="/sign-up">
                    <button
                      className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <i className="fas fa-user-plus mr-2"></i>Sign Up & Ship Now
                    </button>
                  </a>
                  <a href="/rates">
                    <button
                      className="w-full border-2 border-teal-500 text-teal-500 py-3 rounded-full font-semibold text-sm hover:bg-teal-500 hover:text-white transition-all duration-300"
                    >
                      <i className="fas fa-tags mr-2"></i>View Full Rate Chart
                    </button>
                  </a>
                </div>

                {/*  Disclaimer  */}
                <div
                  className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700/50 rounded-xl p-3 flex gap-2"
                >
                  <i
                    className="fas fa-exclamation-triangle text-yellow-500 text-xs mt-0.5 flex-shrink-0"
                  ></i>
                  <p className="text-xs text-yellow-800 dark:text-yellow-500 leading-relaxed">
                    Estimate only. Import duties, VAT & local delivery charges
                    are not included. Actual rate depends on final dimensions.
                  </p>
                </div>
              </div>
            </div>

            {/*  Rate Quick Reference  */}
            <div
              className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden reveal"
            >
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-400 px-5 py-3.5 flex justify-between items-center"
              >
                <span className="text-white font-bold text-sm"
                  >Package Rate Reference</span
                >
                <span className="text-white font-bold text-sm">Rate (USD)</span>
              </div>
              <div className="divide-y divide-[#F1F6F2]">
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">0.5 lb</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-[#F1F6F2] dark:bg-slate-700 px-3 py-0.5 rounded-full"
                    >$10.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">1 lb</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-[#F1F6F2] dark:bg-slate-700 px-3 py-0.5 rounded-full"
                    >$15.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">2 lbs</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-[#F1F6F2] dark:bg-slate-700 px-3 py-0.5 rounded-full"
                    >$20.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">3 lbs</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-[#F1F6F2] dark:bg-slate-700 px-3 py-0.5 rounded-full"
                    >$25.00</span
                  >
                </div>
                <div className="result-row flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Additional lb</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-[#F1F6F2] dark:bg-slate-700 px-3 py-0.5 rounded-full"
                    >$5.00/lb</span
                  >
                </div>
                <div
                  className="result-row flex justify-between px-5 py-3 bg-[#FFFBEB] dark:bg-yellow-900/20"
                >
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Over 25 lbs</span>
                  <span
                    className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-yellow-100 dark:bg-yellow-600/30 px-3 py-0.5 rounded-full"
                    >$50 flat</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
}
