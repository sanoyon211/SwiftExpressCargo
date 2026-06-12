"use client";
import React, { useState } from 'react';

const DUMMY_DATA = {
  'SEC-2025-001234': {
    status: 'In Transit',
    from: 'New York, USA',
    to: 'Dhaka, Bangladesh',
    estDelivery: 'Mar 30, 2025',
    weight: '2.5 kg',
    location: 'Frankfurt, Germany',
    locationDesc: 'In Transit Hub',
    history: [
      { date: 'Mar 24, 2025', time: '10:30 AM', status: 'Arrived at Transit Hub', location: 'Frankfurt, Germany', completed: true },
      { date: 'Mar 23, 2025', time: '08:15 PM', status: 'Departed from Origin Facility', location: 'New York, USA', completed: true },
      { date: 'Mar 23, 2025', time: '02:00 PM', status: 'Package Processed', location: 'New York, USA', completed: true },
      { date: 'Mar 22, 2025', time: '09:45 AM', status: 'Tracking Number Created', location: 'New York, USA', completed: true },
      { date: 'Pending', time: '', status: 'Out for Delivery', location: 'Dhaka, Bangladesh', completed: false },
      { date: 'Pending', time: '', status: 'Delivered', location: 'Dhaka, Bangladesh', completed: false },
    ]
  },
  'SEC-2025-005678': {
    status: 'Delivered',
    from: 'Los Angeles, USA',
    to: 'Chittagong, Bangladesh',
    estDelivery: 'Delivered on Mar 20, 2025',
    weight: '12.0 kg',
    location: 'Chittagong, Bangladesh',
    locationDesc: 'Final Destination',
    history: [
      { date: 'Mar 20, 2025', time: '02:30 PM', status: 'Delivered', location: 'Chittagong, Bangladesh', completed: true },
      { date: 'Mar 20, 2025', time: '08:15 AM', status: 'Out for Delivery', location: 'Chittagong, Bangladesh', completed: true },
      { date: 'Mar 18, 2025', time: '11:00 AM', status: 'Customs Cleared', location: 'Dhaka, Bangladesh', completed: true },
      { date: 'Mar 15, 2025', time: '09:45 AM', status: 'Tracking Number Created', location: 'Los Angeles, USA', completed: true },
    ]
  }
};

export default function TrackingSection() {
  const [inputId, setInputId] = useState('');
  const [searchState, setSearchState] = useState('idle'); // idle, loading, success, error
  const [data, setData] = useState(null);

  const handleSearch = (id) => {
    const searchId = id || inputId;
    if (!searchId) return;

    setSearchState('loading');
    
    // Simulate API call
    setTimeout(() => {
      const result = DUMMY_DATA[searchId];
      if (result) {
        setData({ id: searchId, ...result });
        setSearchState('success');
      } else {
        // Fallback dummy data for any other ID
        setData({
          id: searchId,
          status: 'Processing',
          from: 'USA',
          to: 'Bangladesh',
          estDelivery: 'TBD',
          weight: 'Unknown',
          location: 'Origin Facility',
          locationDesc: 'Processing',
          history: [
            { date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString(), status: 'Order Received', location: 'USA', completed: true },
            { date: 'Pending', time: '', status: 'In Transit', location: '', completed: false },
            { date: 'Pending', time: '', status: 'Delivered', location: '', completed: false },
          ]
        });
        setSearchState('success');
      }
    }, 1500);
  };

  return (
    <>
      <section className="py-10 md:py-16 px-4 px-4">
      <div className="max-w-3xl mx-auto">
        {/*  Search Box  */}
        <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-lg p-8 mb-8 dark:border dark:border-slate-700">
          <h2 className="font-bold text-2xl text-slate-900 dark:text-slate-50 mb-2">
            Enter Tracking Number
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
            Track your package status in real-time using your order tracking ID
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"></i>
              <input
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="e.g. SEC-2025-001234"
                className="w-full pl-11 pr-4 py-4 border-2 border-slate-200 dark:border-slate-700 bg-transparent rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 dark:text-slate-50 transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={searchState === 'loading'}
              className="bg-gradient-to-r from-teal-500 to-emerald-400 text-white hover:shadow-lg transition-all px-8 py-4 rounded-xl text-base font-semibold disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {searchState === 'loading' ? (
                <><i className="fas fa-circle-notch fa-spin"></i> Searching...</>
              ) : (
                <><i className="fas fa-search-location"></i> Track Now</>
              )}
            </button>
          </form>

          {/*  Sample Tracking Numbers  */}
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-slate-500 dark:text-slate-400 text-xs">Try demo:</span>
            <button
              onClick={() => { setInputId('SEC-2025-001234'); handleSearch('SEC-2025-001234'); }}
              className="text-xs bg-[#F1F6F2] dark:bg-slate-700 text-teal-500 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              SEC-2025-001234
            </button>
            <button
              onClick={() => { setInputId('SEC-2025-005678'); handleSearch('SEC-2025-005678'); }}
              className="text-xs bg-[#F1F6F2] dark:bg-slate-700 text-teal-500 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
            >
              SEC-2025-005678
            </button>
          </div>
        </div>

        {/*  Tracking Result  */}
        {searchState === 'success' && data && (
          <div className="tracking-result animate-fade-in-up">
            {/*  Package Info  */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-lg overflow-hidden mb-6 dark:border dark:border-slate-700">
              <div className="bg-gradient-to-r from-teal-500 to-emerald-400 p-6 text-white">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <p className="text-white/80 text-sm mb-1">Tracking Number</p>
                    <h3 className="font-bold text-xl">{data.id}</h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
                      {data.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">From</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{data.from}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">To</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{data.to}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Est. Delivery</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{data.estDelivery}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">Weight</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50 text-sm">{data.weight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/*  Timeline / History  */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-lg p-8 mb-6 dark:border dark:border-slate-700">
              <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-6">Tracking History</h3>
              <div className="flex flex-col gap-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
                
                {data.history.map((step, idx) => (
                  <div key={idx} className="relative z-10 flex gap-6 pb-6 last:pb-0 group">
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step.completed ? 'bg-teal-500' : 'bg-slate-200 dark:bg-slate-700'}`}>
                        {step.completed && <i className="fas fa-check text-white text-[10px]"></i>}
                      </div>
                    </div>
                    <div className="flex-1 pb-2">
                      <h4 className={`font-bold text-sm ${step.completed ? 'text-slate-900 dark:text-slate-50' : 'text-slate-400 dark:text-slate-500'}`}>{step.status}</h4>
                      {step.location && <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><i className="fas fa-map-marker-alt mr-1"></i>{step.location}</p>}
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{step.date} {step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*  Map Placeholder  */}
            <div className="bg-white dark:bg-slate-800 rounded-[32px] shadow-lg p-6 mb-6 dark:border dark:border-slate-700">
              <h3 className="font-bold text-xl text-slate-900 dark:text-slate-50 mb-4">Current Location</h3>
              <div className="bg-slate-100 dark:bg-slate-900 rounded-[24px] h-52 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="text-center z-10 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-teal-500/30 animate-bounce">
                    <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">{data.location}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{data.locationDesc}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
