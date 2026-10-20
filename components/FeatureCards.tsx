'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FeatureCards() {
  const [copied, setCopied] = useState(false);
  const [tapDone, setTapDone] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#f5f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#1A0000] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Two Ways to Sell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A0000]">
            Take payments your way.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1A0000]/70">
            Whether you’re face-to-face at a market counter or selling across WhatsApp and Instagram, Jim gives you the lowest rate and fastest payout in India.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: In Person - Tap to Pay */}
          <div
            id="tap-to-pay"
            className="group relative rounded-3xl bg-white p-8 lg:p-10 border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5C19] bg-[#FF5C19]/10 px-3 py-1 rounded-full">
                  In Person
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  Flat 1.99% / tap
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A0000] mb-3">
                Sell with Tap to Pay
              </h3>

              <p className="text-sm sm:text-base text-[#1A0000]/70 mb-8 leading-relaxed">
                Turn your phone into a secure contactless card reader with no extra hardware, zero machine rental fees, and instant settlement to your account.
              </p>

              {/* Interactive Card UI Mockup */}
              <div className="rounded-2xl bg-[#18191E] text-white p-6 shadow-inner border border-white/10 mb-8 relative">
                <div className="flex items-center justify-between text-xs text-white/50 mb-4 pb-3 border-b border-white/10">
                  <span>Payment Method</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Tap to Pay Active
                  </span>
                </div>

                <div className="text-center py-4">
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    Sale Amount
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    ₹850.00
                  </div>
                  <span className="text-xs text-white/60">
                    Hold RuPay / Visa / Mastercard near the top
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setTapDone(true);
                      setTimeout(() => setTapDone(false), 2500);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#FF5C19] hover:bg-[#FF4C24] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-md"
                  >
                    {tapDone ? '✓ Paid ₹850.00 (Instant)' : 'Tap Card to Phone'}
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="#signup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A0000] group-hover:text-[#FF5C19] transition-colors"
            >
              <span>Learn about Tap to Pay</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Card 2: Remote - Payment Links */}
          <div
            id="payment-links"
            className="group relative rounded-3xl bg-white p-8 lg:p-10 border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Remote & Online
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  Flat 1.99% / link
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A0000] mb-3">
                Sell with Payment Links
              </h3>

              <p className="text-sm sm:text-base text-[#1A0000]/70 mb-8 leading-relaxed">
                Easily generate and send encrypted payment links to customers over WhatsApp, Instagram DM, SMS, or email. Get paid via UPI, Netbanking, or Cards.
              </p>

              {/* Interactive Payment Link UI Mockup */}
              <div className="rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 border border-neutral-200 mb-8">
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-200">
                  <span className="font-semibold text-neutral-800">Order #JM-8492</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    Encrypted
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#1A0000]">Handcrafted Ceramic Vase</h4>
                    <p className="text-xs text-neutral-500">Custom Glaze · Ready to dispatch</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-[#1A0000]">₹2,450.00</span>
                  </div>
                </div>

                {/* WhatsApp Share Simulation */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>💬</span>
                    <span>{copied ? 'Link Copied!' : 'Send on WhatsApp'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-xl bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copied ? '✓' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="#signup"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A0000] group-hover:text-[#FF5C19] transition-colors"
            >
              <span>Learn about Payment Links</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
