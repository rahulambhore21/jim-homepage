'use client';

import React from 'react';
import Image from 'next/image';

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#1A0000] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Built Without Compromise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A0000] leading-tight">
            Never miss a sale. <br />
            Never wait for funds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1A0000]/70 max-w-xl mx-auto">
            Traditional card machines take days to settle and deduct monthly rentals. Jim changes the game with zero hardware and instant payouts.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Benefit 1: No Extra Hardware */}
          <div className="rounded-3xl bg-[#f5f3f3] p-8 lg:p-10 border border-black/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm mb-6">
                📱
              </div>
              <h3 className="text-2xl font-bold text-[#1A0000] mb-3">
                No extra hardware
              </h3>
              <p className="text-base text-[#1A0000]/70 leading-relaxed mb-6">
                If you have an iPhone or Android smartphone, you now have a high-speed contactless POS terminal. Say goodbye to bulky Bluetooth card machines and paper rolls.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-semibold text-[#1A0000]/60">
              Works on all standard NFC smartphones
            </div>
          </div>

          {/* Benefit 2: Flat & Transparent Fee Rates */}
          <div className="rounded-3xl bg-[#f5f3f3] p-8 lg:p-10 border border-black/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm mb-6">
                🏷️
              </div>
              <h3 className="text-2xl font-bold text-[#1A0000] mb-3">
                Flat &amp; transparent fee rates
              </h3>
              <p className="text-base text-[#1A0000]/70 leading-relaxed mb-6">
                Download for free and pay a simple, low 1.99% fee per transaction. No monthly maintenance fees, zero device rental deductions, and no minimum volume penalty.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-semibold text-[#1A0000]/60">
              Save up to ₹18,000/year on terminal rentals
            </div>
          </div>

          {/* Benefit 3: Fast Payouts (With 3D Rupee Icon!) */}
          <div className="rounded-3xl bg-[#101114] text-white p-8 lg:p-10 border border-white/10 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-6 border border-white/20 shadow-md">
                <Image
                  src="/assets/rupee_3d.jpg"
                  alt="3D Rupee Instant Payout"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>Instant payouts in ₹</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#C6FF1A]/20 text-[#C6FF1A] font-mono">
                  Real-Time
                </span>
              </h3>
              <p className="text-base text-white/70 leading-relaxed mb-6">
                Your sales settle directly to your virtual Jim Card in seconds, or auto-transfer to your Indian bank account via IMPS/UPI. Zero waiting for T+2 business days.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/10 text-xs font-semibold text-[#C6FF1A]">
              Available 24/7/365 including bank holidays
            </div>
          </div>

          {/* Benefit 4: Built-in Security */}
          <div className="rounded-3xl bg-[#f5f3f3] p-8 lg:p-10 border border-black/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-2xl shadow-sm mb-6">
                🔒
              </div>
              <h3 className="text-2xl font-bold text-[#1A0000] mb-3">
                Built-in RBI &amp; PCI-DSS security
              </h3>
              <p className="text-base text-[#1A0000]/70 leading-relaxed mb-6">
                Every transaction uses bank-grade tokenization and end-to-end encryption certified by RuPay, Visa, Mastercard, and NPCI standards. Card numbers or PINs are never stored on your device.
              </p>
            </div>
            <div className="pt-4 border-t border-black/10 text-xs font-semibold text-[#1A0000]/60">
              Certified Level 1 PCI-DSS Security
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
