'use client';

import React from 'react';

const doneItems = [
  { title: 'Website Builder', tag: 'Free' },
  { title: 'Tap to Pay', tag: '1.99% per tap' },
  { title: 'Payment Links', tag: '1.99% per sale' },
  { title: 'UPI Collections', tag: 'Instant' },
  { title: 'Booking', tag: 'Free' },
  { title: 'Product Catalog', tag: 'Free' },
  { title: 'Jim Card', tag: 'Free' },
  { title: 'Instant Payouts', tag: '₹0 Fee' },
];

export default function ThingsDoneMarquee() {
  return (
    <section className="py-8 bg-[#101114] text-white overflow-hidden border-y border-white/10">
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#101114] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#101114] to-transparent" />

        <div className="animate-marquee flex items-center gap-8 py-2">
          {[...doneItems, ...doneItems, ...doneItems].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5C19]" />
              <span className="text-white/90">{item.title}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#C6FF1A]/20 text-[#C6FF1A] text-xs font-bold font-mono">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
