'use client';

import React from 'react';
import Link from 'next/link';

export default function PreFooterCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f3f3] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#1A0000] text-xs font-bold uppercase tracking-wider mb-6">
            <span>Get Started in 2 Minutes</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1A0000] leading-tight mb-6">
            Run your business solo, <br className="hidden sm:block" />
            with a partner.
          </h2>

          <p className="text-base sm:text-xl text-[#1A0000]/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Download the app for free. Accept your first contactless card or UPI tap right on your phone in under two minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#signup"
              className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#1A0000] text-white text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5C19]/35 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Start selling now</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>

            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-black/15 bg-white/70 hover:bg-white text-[#1A0000] text-sm font-semibold transition-all w-full sm:w-auto shadow-xs"
            >
              Explore Pricing &amp; Fees (1.99%)
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
