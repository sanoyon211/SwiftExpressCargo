"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator, Tag, ChevronDown, Weight, Scale, DollarSign,
  Box, Zap, FileText, ShieldCheck, Camera, Clock, UserPlus, Info
} from 'lucide-react';

export default function CalculatorSection() {
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('lb');
  const [productValue, setProductValue] = useState('');
  const [speed, setSpeed] = useState('standard');
  const [insurance, setInsurance] = useState(false);
  const [photo, setPhoto] = useState(false);

  const [results, setResults] = useState(null);

  const handleCalculate = () => {
    let baseWeight = parseFloat(weight) || 0;
    if (unit === 'kg') {
      baseWeight = baseWeight * 2.20462;
    }

    let baseRate = 0;
    if (baseWeight > 0 && baseWeight <= 0.5) baseRate = 10;
    else if (baseWeight > 0.5 && baseWeight <= 1) baseRate = 15;
    else if (baseWeight > 1 && baseWeight <= 2) baseRate = 20;
    else if (baseWeight > 2 && baseWeight <= 3) baseRate = 25;
    else if (baseWeight > 3 && baseWeight <= 25) baseRate = 25 + (Math.ceil(baseWeight - 3) * 5);
    else if (baseWeight > 25) baseRate = 50 + ((baseWeight - 25) * 4);

    let speedMult = 1;
    if (speed === 'express') speedMult = 1.8;
    if (speed === 'economy') speedMult = 0.7;

    const speedAdj = (baseRate * speedMult) - baseRate;

    let val = parseFloat(productValue) || 0;
    const brokerage = val > 100 ? (val * 0.05) : 5;
    const insCost = insurance ? (val * 0.015) : 0;
    const photoCost = photo ? 2.0 : 0;

    const total = baseRate + speedAdj + brokerage + insCost + photoCost;

    let timeStr = '7–14 business days';
    if (speed === 'express') timeStr = '3–5 business days';
    if (speed === 'economy') timeStr = '14–21 business days';

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
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Unified "App" Container */}
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden flex flex-col lg:flex-row">

          {/* ------------------------------------------- */}
          {/* LEFT SIDE: FORM SECTION */}
          {/* ------------------------------------------- */}
          <div className="lg:w-3/5 p-8 sm:p-12">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Calculator size={24} />
              </div>
              <div>
                <h2 className="font-bold text-2xl text-slate-900 dark:text-white tracking-tight">Shipping Details</h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Enter details for an instant estimate</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Product Category */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Category</label>
                <div className="relative">
                  <Tag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <select className="w-full h-12 pl-11 pr-10 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white appearance-none cursor-pointer outline-none transition-all">
                    <option value="">Select product type...</option>
                    <option value="electronics">Electronics & Gadgets</option>
                    <option value="clothing">Clothing & Fashion</option>
                    <option value="accessories">Accessories & Jewelry</option>
                    <option value="other">Other Items</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Weight & Unit */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Total Weight</label>
                  <div className="relative">
                    <Weight size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="0.00"
                      min="0.1"
                      step="0.1"
                      className="w-full h-12 pl-11 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Unit</label>
                  <div className="relative">
                    <Scale size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full h-12 pl-11 pr-10 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white appearance-none cursor-pointer outline-none transition-all"
                    >
                      <option value="lb">Pounds (lb)</option>
                      <option value="kg">Kilograms (kg)</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Product Value */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                  Total Product Value (USD)
                  <div className="group relative cursor-help">
                    <Info size={14} className="text-slate-400" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-800 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 text-center">
                      Include original shipping to US warehouse and taxes.
                    </div>
                  </div>
                </label>
                <div className="relative">
                  <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  <input
                    type="number"
                    value={productValue}
                    onChange={(e) => setProductValue(e.target.value)}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="w-full h-12 pl-11 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm text-slate-900 dark:text-white outline-none transition-all"
                  />
                </div>
              </div>

              {/* Delivery Speed - Radio Cards */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Delivery Speed</label>
                <div className="space-y-3">
                  {/* Standard */}
                  <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${speed === 'standard' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="speed" checked={speed === 'standard'} onChange={() => setSpeed('standard')} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer" />
                      <div>
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">Standard</span>
                        <span className="block text-xs text-slate-500 mt-0.5">7–14 days</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">Base Rate</span>
                  </label>

                  {/* Express */}
                  <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${speed === 'express' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="speed" checked={speed === 'express'} onChange={() => setSpeed('express')} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer" />
                      <div>
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">Express</span>
                        <span className="block text-xs text-slate-500 mt-0.5">3–5 days</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-orange-600 bg-orange-100 dark:bg-orange-500/20 dark:text-orange-400 px-2.5 py-1 rounded-md">Fastest</span>
                  </label>

                  {/* Economy */}
                  <label className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-all ${speed === 'economy' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-500/10 ring-1 ring-indigo-600' : 'border-slate-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-white/20'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="speed" checked={speed === 'economy'} onChange={() => setSpeed('economy')} className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 cursor-pointer" />
                      <div>
                        <span className="block text-sm font-bold text-slate-900 dark:text-white">Economy</span>
                        <span className="block text-xs text-slate-500 mt-0.5">14–21 days</span>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-400 px-2.5 py-1 rounded-md">Save 30%</span>
                  </label>
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Add-ons (Optional)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-start gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-indigo-400 transition-colors">
                    <input type="checkbox" checked={insurance} onChange={(e) => setInsurance(e.target.checked)} className="mt-0.5 w-4 h-4 text-indigo-600 rounded cursor-pointer focus:ring-indigo-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Insurance</p>
                      <p className="text-xs text-slate-500 mt-0.5">1.5% of value</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-3 border border-slate-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-indigo-400 transition-colors">
                    <input type="checkbox" checked={photo} onChange={(e) => setPhoto(e.target.checked)} className="mt-0.5 w-4 h-4 text-indigo-600 rounded cursor-pointer focus:ring-indigo-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">Photos</p>
                      <p className="text-xs text-slate-500 mt-0.5">+$2.00 / pkg</p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full h-14 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white rounded-xl font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none"
              >
                <Calculator size={18} /> Calculate Shipping Cost
              </button>

            </div>
          </div>

          {/* ------------------------------------------- */}
          {/* RIGHT SIDE: RESULT / RECEIPT SECTION */}
          {/* ------------------------------------------- */}
          <div className="lg:w-2/5 bg-slate-50 dark:bg-slate-800/50 p-8 sm:p-12 lg:border-l border-slate-200 dark:border-white/10 flex flex-col relative">

            {/* Subtle Gradient Glow inside the right panel */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div className="mb-10">
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Estimated Total</p>
                <div className="flex items-end gap-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 tracking-tight">
                    ${results ? results.total.toFixed(2) : '0.00'}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium mb-1.5">USD</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 font-medium flex items-center gap-2">
                  <Clock size={16} className="text-indigo-500" />
                  {results ? `${speed.charAt(0).toUpperCase() + speed.slice(1)} · ${results.timeStr}` : 'Standard · 7–14 days'}
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-white/5 mb-8">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-4 border-b border-slate-100 dark:border-white/5 pb-4">Rate Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><Box size={14} /> Base Rate</span>
                    <span className="font-semibold text-slate-900 dark:text-white">${results ? results.baseRate.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><Zap size={14} /> Speed Adjust</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{results ? (results.speedAdj > 0 ? '+' : '') + results.speedAdj.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><FileText size={14} /> Brokerage</span>
                    <span className="font-semibold text-slate-900 dark:text-white">${results ? results.brokerage.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><ShieldCheck size={14} /> Insurance</span>
                    <span className="font-semibold text-slate-900 dark:text-white">${results ? results.insCost.toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2"><Camera size={14} /> Photography</span>
                    <span className="font-semibold text-slate-900 dark:text-white">${results ? results.photoCost.toFixed(2) : '0.00'}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-white/5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Weight</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">{results ? `${results.weightLb.toFixed(1)} lb` : '—'}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-white/5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Rate Per Lb</p>
                  <p className="font-bold text-slate-900 dark:text-white text-base">{results ? `$${results.perLb.toFixed(2)}` : '—'}</p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                <Link href="/signup" className="block w-full">
                  <button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <UserPlus size={18} /> Sign Up to Ship
                  </button>
                </Link>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-4">
                  *This is an estimate. Final cost will be calculated upon receiving packages at our warehouse.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}