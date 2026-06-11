import React from 'react';
import Link from 'next/link';

export default function TrackingSection() {
  return (
    <>
      <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/*  Search Box  */}
        <div className="bg-white rounded-[32px] shadow-lg p-8 mb-8 reveal">
          <h2 className="font-bold text-2xl text-slate-900 mb-2">
            Enter Tracking Number
          </h2>
          <p className="text-slate-500 text-sm mb-6">
            Track your package status in real-time using your order tracking ID
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <i
                className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-teal-500"
              ></i>
              <input
                type="text"
                id="trackingInput"
                placeholder="e.g. SEC-2025-001234"
                className="w-full pl-11 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-teal-500 text-slate-900 transition-colors"
              />
            </div>
            <button
              id="trackBtn"
              className="btn-primary px-8 py-4 text-base font-semibold"
            >
              <i className="fas fa-search-location mr-2"></i>Track Now
            </button>
          </div>

          {/*  Sample Tracking Numbers  */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-slate-500 text-xs">Try demo:</span>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-teal-500 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
              data-id="SEC-2025-001234"
            >
              SEC-2025-001234
            </button>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-teal-500 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
              data-id="SEC-2025-005678"
            >
              SEC-2025-005678
            </button>
            <button
              className="demo-track text-xs bg-[#F1F6F2] text-teal-500 px-3 py-1 rounded-full hover:bg-teal-500 hover:text-white transition-colors"
              data-id="SEC-2025-009012"
            >
              SEC-2025-009012
            </button>
          </div>
        </div>

        {/*  Tracking Result  */}
        <div className="tracking-result" id="trackingResult">
          {/*  Package Info  */}
          <div
            className="bg-white rounded-[32px] shadow-lg overflow-hidden mb-6 reveal"
          >
            <div
              className="bg-gradient-to-r from-teal-500 to-emerald-400 p-6 text-white"
            >
              <div
                className="flex flex-col sm:flex-row justify-between items-start gap-4"
              >
                <div>
                  <p className="text-white/80 text-sm mb-1">Tracking Number</p>
                  <h3 className="font-bold text-xl" id="displayTrackId">
                    SEC-2025-001234
                  </h3>
                </div>
                <div className="text-right">
                  <span
                    className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30"
                    id="statusBadge"
                  >
                    In Transit
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-slate-500 text-xs mb-1">From</p>
                  <p className="font-semibold text-slate-900 text-sm">New York, USA</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">To</p>
                  <p className="font-semibold text-slate-900 text-sm">
                    Dhaka, Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Est. Delivery</p>
                  <p className="font-semibold text-slate-900 text-sm" id="estDelivery">
                    Mar 30, 2025
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs mb-1">Weight</p>
                  <p className="font-semibold text-slate-900 text-sm">2.5 kg</p>
                </div>
              </div>
            </div>
          </div>

          {/*  Progress Tracker  */}
          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-6 reveal">
            <h3 className="font-bold text-xl text-slate-900 mb-8">
              Shipment Progress
            </h3>

            {/*  Progress Steps  */}
            <div className="relative" id="progressSteps">
              {/*  Will be filled by JS  */}
            </div>
          </div>

          {/*  Timeline / History  */}
          <div className="bg-white rounded-[32px] shadow-lg p-8 mb-6 reveal">
            <h3 className="font-bold text-xl text-slate-900 mb-6">Tracking History</h3>
            <div id="trackingHistory" className="flex flex-col gap-0">
              {/*  Will be filled by JS  */}
            </div>
          </div>

          {/*  Map Placeholder  */}
          <div className="bg-white rounded-[32px] shadow-lg p-6 mb-6 reveal">
            <h3 className="font-bold text-xl text-slate-900 mb-4">Current Location</h3>
            <div
              className="map-placeholder rounded-[24px] h-52 flex items-center justify-center"
            >
              <div className="text-center z-10 relative">
                <div
                  className="w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 float-anim shadow-lg"
                >
                  <i className="fas fa-map-marker-alt text-white text-2xl"></i>
                </div>
                <p className="font-semibold text-slate-900">Frankfurt, Germany</p>
                <p className="text-slate-500 text-sm">In Transit Hub</p>
              </div>
            </div>
            <p className="text-slate-500 text-xs text-center mt-3">
              <i className="fas fa-info-circle text-teal-400 mr-1"></i>
              Live map integration available in the mobile app
            </p>
          </div>
        </div>

        {/*  Not Found State (initially hidden)  */}
        <div id="notFoundState" className="hidden">
          <div className="bg-white rounded-[32px] shadow-lg p-12 text-center reveal">
            <div
              className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <i className="fas fa-search text-red-400 text-3xl"></i>
            </div>
            <h3 className="font-bold text-2xl text-slate-900 mb-3">
              Tracking Number Not Found
            </h3>
            <p className="text-slate-500 mb-6">
              We couldn't find any shipment with the provided tracking number.
              Please check and try again.
            </p>
            <button
              className="btn-primary px-8 py-3"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
