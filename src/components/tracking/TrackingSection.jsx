"use client";
import React, { useState } from 'react';
import {
  Search, MapPin, Calendar, Weight, Clock,
  Check, Package, Loader2, Navigation, ArrowRight, PackageSearch
} from 'lucide-react';

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
    }, 1200);
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    if (!data || !data.history) return 0;
    const completedSteps = data.history.filter(step => step.completed).length;
    return Math.round((completedSteps / data.history.length) * 100);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Search Box Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-white/10 p-6 sm:p-10 mb-10 transition-all duration-300 relative z-20">
          <h2 className="font-bold text-2xl text-slate-900 dark:text-white mb-2 tracking-tight">
            Track your shipment
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            Enter your tracking or reference number below to get real-time updates.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
              </div>
              <input
                type="text"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
                placeholder="e.g. SEC-2025-001234"
                className="w-full h-14 pl-14 pr-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 dark:text-white transition-all text-lg tracking-wide placeholder:text-slate-400/70"
                required
              />
            </div>
            <button
              type="submit"
              disabled={searchState === 'loading'}
              className="h-14 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all px-8 rounded-lg font-bold disabled:opacity-70 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 shrink-0"
            >
              {searchState === 'loading' ? (
                <><Loader2 className="animate-spin" size={20} /> Locating...</>
              ) : (
                <>Track Package <ArrowRight size={18} /></>
              )}
            </button>
          </form>

          {/* Sample Tracking Numbers */}
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Demo IDs:</span>
            <button
              onClick={() => { setInputId('SEC-2025-001234'); handleSearch('SEC-2025-001234'); }}
              className="text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors border border-indigo-100 dark:border-indigo-500/20"
            >
              SEC-2025-001234
            </button>
            <button
              onClick={() => { setInputId('SEC-2025-005678'); handleSearch('SEC-2025-005678'); }}
              className="text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors border border-indigo-100 dark:border-indigo-500/20"
            >
              SEC-2025-005678
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* EMPTY STATE (When no search is active)    */}
        {/* ========================================= */}
        {searchState === 'idle' && (
          <div className="animate-in fade-in duration-500 flex flex-col items-center justify-center py-16 sm:py-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white/50 dark:bg-slate-900/20 text-center relative z-10">
            <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 flex items-center justify-center mb-6 text-slate-400 dark:text-slate-500 transform -rotate-6 transition-transform hover:rotate-0">
              <PackageSearch size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3 tracking-tight">
              Ready to locate your package?
            </h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed px-4">
              Enter your unique tracking ID in the search box above to instantly view your package's current location, transit history, and estimated delivery date.
            </p>
          </div>
        )}

        {/* ========================================= */}
        {/* LOADING STATE                             */}
        {/* ========================================= */}
        {searchState === 'loading' && (
          <div className="animate-in fade-in duration-300 flex flex-col items-center justify-center py-20 sm:py-32">
            <Loader2 className="animate-spin text-indigo-500 mb-6" size={48} strokeWidth={1.5} />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">Searching global database...</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Retrieving real-time location data</p>
          </div>
        )}

        {/* ========================================= */}
        {/* TRACKING RESULT DASHBOARD                 */}
        {/* ========================================= */}
        {searchState === 'success' && data && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out space-y-6">

            {/* 1. Main Status Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
              <div className="p-6 sm:p-10 border-b border-slate-200 dark:border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Tracking ID</p>
                    <h3 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                      {data.id}
                      <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${data.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400' :
                          data.status === 'In Transit' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400'
                        }`}>
                        {data.status}
                      </span>
                    </h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative pt-2 mb-2">
                  <div className="overflow-hidden h-2.5 mb-4 text-xs flex rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      style={{ width: `${calculateProgress()}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-1000 ease-out relative"
                    >
                      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-semibold text-slate-400">
                    <span>Processed</span>
                    <span>In Transit</span>
                    <span>Delivered</span>
                  </div>
                </div>
              </div>

              {/* Package Details Grid */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-6 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                    <Navigation size={16} />
                    <p className="text-xs font-bold uppercase tracking-wider">Origin</p>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">{data.from}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                    <MapPin size={16} />
                    <p className="text-xs font-bold uppercase tracking-wider">Destination</p>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">{data.to}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                    <Calendar size={16} />
                    <p className="text-xs font-bold uppercase tracking-wider">Est. Delivery</p>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">{data.estDelivery}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                    <Weight size={16} />
                    <p className="text-xs font-bold uppercase tracking-wider">Weight</p>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white">{data.weight}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 2. Timeline / History Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-sm">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-8 tracking-tight flex items-center gap-2">
                  <Clock className="text-indigo-500" size={20} /> Tracking History
                </h3>

                <div className="relative">
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800"></div>

                  <div className="space-y-8 relative z-10">
                    {data.history.map((step, idx) => (
                      <div key={idx} className="flex gap-5 group">
                        <div className="flex flex-col items-center shrink-0">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step.completed
                              ? 'bg-indigo-50 dark:bg-indigo-500/20 border-indigo-500 text-indigo-600 dark:text-indigo-400'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600'
                            }`}>
                            {step.completed ? <Check size={18} strokeWidth={3} /> : <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>}
                          </div>
                        </div>

                        <div className={`pt-2 ${step.completed ? 'opacity-100' : 'opacity-50'}`}>
                          <h4 className={`font-bold text-base mb-1 ${step.completed ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
                            {step.status}
                          </h4>
                          {step.location && (
                            <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1.5 mb-1">
                              <MapPin size={14} /> {step.location}
                            </p>
                          )}
                          <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                            {step.date !== 'Pending' ? `${step.date} · ${step.time}` : 'Pending update'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Live Map Placeholder Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-10 shadow-sm flex flex-col">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-8 tracking-tight flex items-center gap-2">
                  <MapPin className="text-indigo-500" size={20} /> Current Location
                </h3>

                <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-white/5 relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] group">
                  <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] dark:opacity-5"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent opacity-50"></div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-indigo-500/20 rounded-full animate-ping opacity-75"></div>
                  </div>

                  <div className="relative z-10 text-center transform transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl shadow-xl flex items-center justify-center mx-auto mb-4 border border-slate-100 dark:border-white/10 text-indigo-600 dark:text-indigo-400">
                      <Package size={32} strokeWidth={1.5} />
                    </div>
                    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm inline-block">
                      <p className="font-bold text-slate-900 dark:text-white text-base">{data.location}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider mt-0.5">{data.locationDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}