'use client';

import React from 'react';

const audiences = [
  'Boutique Owners',
  'Specialty Cafes',
  'Handloom Designers',
  'Home Bakers',
  'Freelancers & Consultants',
  'Yoga & Fitness Coaches',
  'Salon Stylists',
  'Pop-up Sellers',
  'Photographers',
  'Artisanal Crafters',
  'Chai & Coffee Roasters',
  'Custom Tailors',
];

export default function AudienceMarquee() {
  return (
    <section className="py-12 bg-[#f5f3f3] border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#1A0000]/50">
          Built for modern independent businesses
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#f5f3f3] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#f5f3f3] to-transparent" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {[...audiences, ...audiences, ...audiences].map((name, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 shrink-0 px-5 py-2.5 rounded-full bg-white border border-black/10 text-sm sm:text-base font-semibold text-[#1A0000] shadow-xs hover:border-[#FF5C19] transition-colors"
            >
              <span className="text-[#FF5C19]">⚡</span>
              <span>Jim is for {name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
