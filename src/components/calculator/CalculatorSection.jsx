"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CalculatorSection() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lb');
  const [productValue, setProductValue] = useState('');
  const [speed, setSpeed] = useState('standard'); // standard, express, economy
  const [insurance, setInsurance] = useState(false);
  const [photo, setPhoto] = useState(false);
  
  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    let baseWeight = parseFloat(weight) || 0;
    if (unit === 'kg') {
      baseWeight = baseWeight * 2.20462; // convert to lb
    }

    let baseRate = 0;
    if (baseWeight > 0 && baseWeight <= 0.5) baseRate = 10;
    else if (baseWeight > 0.5 && baseWeight <= 1) baseRate = 15;
    else if (baseWeight > 1 && baseWeight <= 2) baseRate = 20;
    else if (baseWeight > 2 && baseWeight <= 3) baseRate = 25;
    else if (baseWeight > 3 && baseWeight <= 25) baseRate = 25 + (Math.ceil(baseWeight - 3) * 5);
    else if (baseWeight > 25) baseRate = 50 + ((baseWeight - 25) * 4); // Flat $50 + $4/lb over 25

    let speedMult = 1;
    if (speed === 'express') speedMult = 1.8;
    if (speed === 'economy') speedMult = 0.7;

    const speedAdj = (baseRate * speedMult) - baseRate;
    
    let val = parseFloat(productValue) || 0;
    const brokerage = val > 100 ? (val * 0.05) : 5; // $5 min or 5%
    const insCost = insurance ? (val * 0.015) : 0;
    const photoCost = photo ? 2.0 : 0;

    const total = baseRate + speedAdj + brokerage + insCost + photoCost;
    
    let timeStr = '7–14 days';
    if (speed === 'express') timeStr = '3–5 days';
    if (speed === 'economy') timeStr = '14–21 days';

    setResults({
      baseRate,
      speedAdj,
      brokerage,
      insCost,
      photoCost,
      total,
      timeStr,
      weightLb: baseWeight,
      perLb: baseWeight > 0 ? (total / baseWeight) : 0
    });
  };

  return (
    <>
      <section className="py-14 px-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">


      <div className="lg:col-span-7 reveal-left" suppressHydrationWarning>
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 p-6 md:p-8">
              {/*  Header  */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-[24px] flex items-center justify-center shadow-lg">
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
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Product Type</label>
                <div className="relative">
                  <i className="fas fa-tag absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm z-10"></i>
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 appearance-none">
                    <option value="">Select product type...</option>
                    <option value="electronics">Electronics & Gadgets</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="accessories">Accessories & Jewelry</option>
                    <option value="other">Other</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-xs pointer-events-none"></i>
                </div>
              </div>

              {/*  Weight + Unit  */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Total Weight</label>
                  <div className="relative">
                    <i className="fas fa-weight absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm"></i>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50"
                      placeholder="0.00"
                      min="0.1"
                      step="0.1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Unit</label>
                  <div className="relative">
                    <i className="fas fa-balance-scale absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm z-10"></i>
                    <select value={unit} onChange={(e) => setUnit(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 appearance-none">
                      <option value="lb">Pounds (lb)</option>
                      <option value="kg">Kilograms (kg)</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 text-xs pointer-events-none"></i>
                  </div>
                </div>
              </div>

              {/*  Product Value  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Total Product Value in USD <span className="font-normal text-[#999]">(incl. US shipping & tax)</span>
                </label>
                <div className="relative">
                  <i className="fas fa-dollar-sign absolute left-4 top-1/2 -translate-y-1/2 text-teal-500 text-sm"></i>
                  <input
                    type="number"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/*  Shipping Speed  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Shipping Speed</label>
                <div className="flex flex-col gap-3">
                  {/* Standard */}
                  <div onClick={() => setSpeed('standard')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${speed === 'standard' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-teal-500/50'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${speed === 'standard' ? 'border-teal-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {speed === 'standard' && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">Standard Shipping</p>
                        <p className="text-[#999] text-xs">7–14 business days</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-[#F1F6F2] dark:bg-slate-700 text-teal-500 px-3 py-1 rounded-full">Base Rate</span>
                  </div>
                  {/* Express */}
                  <div onClick={() => setSpeed('express')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${speed === 'express' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-teal-500/50'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${speed === 'express' ? 'border-teal-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {speed === 'express' && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">Express Shipping</p>
                        <p className="text-[#999] text-xs">3–5 business days</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">+80% faster</span>
                  </div>
                  {/* Economy */}
                  <div onClick={() => setSpeed('economy')} className={`p-4 border-2 rounded-xl cursor-pointer transition-all flex items-center justify-between ${speed === 'economy' ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20' : 'border-slate-200 dark:border-slate-700 hover:border-teal-500/50'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${speed === 'economy' ? 'border-teal-500' : 'border-slate-300 dark:border-slate-600'}`}>
                        {speed === 'economy' && <div className="w-2.5 h-2.5 bg-teal-500 rounded-full"></div>}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">Economy Shipping</p>
                        <p className="text-[#999] text-xs">14–21 business days</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">Save 30%</span>
                  </div>
                </div>
              </div>

              {/*  Extra Options  */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">Add-ons <span className="font-normal text-[#999]">(optional)</span></label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 p-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-teal-500 transition-colors">
                    <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} className="w-4 h-4 accent-teal-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50 text-sm">Package Insurance</p>
                      <p className="text-[#999] text-xs">1.5% of declared value</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border-2 border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-teal-500 transition-colors">
                    <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} className="w-4 h-4 accent-teal-500" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-slate-50 text-sm">Package Photography</p>
                      <p className="text-[#999] text-xs">+$2.00 per package</p>
                    </div>
                  </label>
                </div>
              </div>

              {/*  Calculate Button  */}
              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-3.5 rounded-full font-bold text-base hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <i className="fas fa-calculator mr-2"></i>Calculate Shipping Cost
              </button>
            </div>
          </div>


      <div className="lg:col-span-5 sticky-result reveal-right" suppressHydrationWarning>
            {/*  Result Card  */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
              {/*  Header gradient  */}
              <div className="bg-gradient-to-r from-teal-500 to-emerald-400 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white/80 text-xs font-medium mb-1">SHIPPING ESTIMATE</p>
                    <div className="text-white font-bold text-4xl">
                      ${results ? results.total.toFixed(2) : '0.00'}
                    </div>
                    <p className="text-white/80 text-xs mt-1">
                      {results ? `${speed.charAt(0).toUpperCase() + speed.slice(1)} · ${results.timeStr}` : 'Standard · 7–14 days'}
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Estimate
                  </div>
                </div>
              </div>

              {/*  Breakdown Table  */}
              <div className="p-6">
                <h4 className="font-semibold text-slate-900 dark:text-slate-50 text-sm mb-4">Rate Breakdown</h4>
                <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 dark:text-slate-400 text-sm"><i className="fas fa-box text-teal-500 w-4"></i> Base Rate</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">${results ? results.baseRate.toFixed(2) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 dark:text-slate-400 text-sm"><i className="fas fa-tachometer-alt text-teal-500 w-4"></i> Speed Adjust</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{results ? (results.speedAdj > 0 ? '+' : '') + results.speedAdj.toFixed(2) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 dark:text-slate-400 text-sm"><i className="fas fa-passport text-teal-500 w-4"></i> Brokerage</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">${results ? results.brokerage.toFixed(2) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 dark:text-slate-400 text-sm"><i className="fas fa-shield-alt text-teal-500 w-4"></i> Insurance</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">${results ? results.insCost.toFixed(2) : '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-500 dark:text-slate-400 text-sm"><i className="fas fa-camera text-teal-500 w-4"></i> Photography</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm">${results ? results.photoCost.toFixed(2) : '—'}</span>
                  </div>
                </div>

                {/*  Delivery Info  */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
                    <i className="fas fa-clock text-teal-500 mb-1 block text-sm"></i>
                    <p className="text-[#999] text-xs">Delivery</p>
                    <p className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5">{results ? results.timeStr : '—'}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
                    <i className="fas fa-weight text-teal-500 mb-1 block text-sm"></i>
                    <p className="text-[#999] text-xs">Weight</p>
                    <p className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5">{results ? `${results.weightLb.toFixed(1)} lb` : '—'}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center border border-slate-200 dark:border-slate-700">
                    <i className="fas fa-dollar-sign text-teal-500 mb-1 block text-sm"></i>
                    <p className="text-[#999] text-xs">Per Lb</p>
                    <p className="font-bold text-slate-900 dark:text-slate-50 text-xs mt-0.5">{results ? `$${results.perLb.toFixed(2)}` : '—'}</p>
                  </div>
                </div>

                {/*  CTA Buttons  */}
                <div className="flex flex-col gap-2 mt-5">
                  <Link href="/signup">
                    <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-400 text-white py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      <i className="fas fa-user-plus mr-2"></i>Sign Up & Ship Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/*  Rate Quick Reference  */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden reveal">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-400 px-5 py-3.5 flex justify-between items-center">
                <span className="text-white font-bold text-sm">Package Rate Reference</span>
                <span className="text-white font-bold text-sm">Rate (USD)</span>
              </div>
              <div className="divide-y divide-[#F1F6F2] dark:divide-slate-700">
                <div className="flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">0.5 lb</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-slate-100 dark:bg-slate-700 px-3 py-0.5 rounded-full">$10.00</span>
                </div>
                <div className="flex justify-between px-5 py-3">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">1 lb</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-slate-100 dark:bg-slate-700 px-3 py-0.5 rounded-full">$15.00</span>
                </div>
                <div className="flex justify-between px-5 py-3 bg-[#FFFBEB] dark:bg-yellow-900/20">
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Over 25 lbs</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-50 text-sm bg-yellow-100 dark:bg-yellow-600/30 px-3 py-0.5 rounded-full">$50 flat + $4/lb</span>
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
