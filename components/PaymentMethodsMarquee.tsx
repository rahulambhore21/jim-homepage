'use client';

import React from 'react';
import Image from 'next/image';

const paymentMethods = [
  { name: 'UPI', src: '/assets/upi.svg', width: 44, height: 26 },
  { name: 'RuPay', src: '/assets/rupay.svg', width: 56, height: 22 },
  { name: 'Visa', src: '/assets/visa.svg', width: 46, height: 20 },
  { name: 'Mastercard', src: '/assets/mastercard.svg', width: 40, height: 24 },
  { name: 'PhonePe', src: '/assets/phonepe.svg', width: 40, height: 24 },
  { name: 'Google Pay', src: '/assets/gpay.svg', width: 46, height: 20 },
  { name: 'Paytm', src: '/assets/paytm.svg', width: 46, height: 20 },
  { name: 'Apple Pay', src: '/assets/apple.svg', width: 42, height: 20 },
  { name: 'American Express', src: '/assets/amex.svg', width: 42, height: 22 },
  { name: 'Samsung Pay', src: '/assets/samsung.svg', width: 52, height: 18 },
];

export default function PaymentMethodsMarquee() {
  return (
    <section className="py-10 bg-[#f5f3f3] border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1A0000]/60">
          Accept payments from all major cards, UPI, and digital wallets
        </p>
      </div>

      {/* Infinite marquee ticker */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-[#f5f3f3] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-[#f5f3f3] to-transparent" />

        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {[...paymentMethods, ...paymentMethods, ...paymentMethods].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 shrink-0 px-2"
              title={item.name}
            >
              <Image
                src={item.src}
                alt={item.name}
                width={item.width}
                height={item.height}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
