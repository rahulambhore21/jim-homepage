'use client';

import React from 'react';
import Image from 'next/image';

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
          {/* Stat 1: Geographic reach */}
          <div className="pt-6 md:pt-0 px-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#1A0000] mb-2">
              All 28 States &amp; UTs
            </div>
            <p className="text-sm text-[#1A0000]/60 max-w-xs mx-auto">
              Trusted by independent businesses from Mumbai and Delhi to Kochi and Guwahati.
            </p>
          </div>

          {/* Stat 2: Rating */}
          <div className="pt-6 md:pt-0 px-4 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#1A0000]">
                4.8
              </span>
              <div className="flex text-amber-400 text-lg">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            <p className="text-sm text-[#1A0000]/60 max-w-xs">
              Based on 14,000+ reviews across Apple App Store and Google Play Store.
            </p>
          </div>

          {/* Stat 3: Volume processed */}
          <div className="pt-6 md:pt-0 px-4">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5C19] mb-2">
              ₹150+ Crores
            </div>
            <p className="text-sm text-[#1A0000]/60 max-w-xs mx-auto">
              Safely transacted with 100% instant settlement and zero POS machine rental fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
