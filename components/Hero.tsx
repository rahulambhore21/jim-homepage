'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [tapped, setTapped] = useState(false);
  const [amount, setAmount] = useState('850.00');

  const handleSimulateTap = () => {
    setTapped(true);
    setTimeout(() => {
      setTapped(false);
    }, 3200);
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#f5f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Copy, CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 text-[#1A0000] text-xs font-semibold tracking-wide w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF5C19] animate-pulse" />
              <span>Instant Payouts Standard in India · RBI & NPCI Compliant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight text-[#1A0000] leading-[1.08] mb-6">
              Sell anywhere. <br />
              <span className="relative">
                Get paid instantly.
                <span className="absolute bottom-1.5 left-0 w-full h-[6px] bg-[#FF5C19]/25 rounded-full -z-10" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#1A0000]/70 max-w-xl font-normal leading-relaxed mb-8">
              One app, two ways to get paid: accept contactless card & UPI payments using just your smartphone, or send smart payment links to customers anywhere in India.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="#signup"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#1A0000] text-white text-base font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5C19]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  <span className="font-semibold">Start selling now</span>
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

              <button
                type="button"
                onClick={handleSimulateTap}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-black/15 bg-white/60 hover:bg-white text-[#1A0000] text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span className="text-[#FF5C19]">⚡</span> Try Tap to Pay Demo
              </button>
            </div>

            {/* Sub-badge */}
            <div className="pt-2 border-t border-black/10">
              <p className="text-sm font-medium text-[#1A0000]/65 flex items-center gap-2 flex-wrap">
                <span>No monthly rentals</span>
                <span className="opacity-40">·</span>
                <span>No POS machine needed</span>
                <span className="opacity-40">·</span>
                <span>Flat 1.99% fee</span>
                <span className="opacity-40">·</span>
                <span>₹0 Setup Cost</span>
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Phone Screen Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient Warm Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FF5C19]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#C6FF1A]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Phone Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-[#101114] rounded-[44px] p-3 shadow-2xl shadow-black/40 border-[5px] border-[#22242b] ring-1 ring-white/10 select-none">
              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 ml-auto mr-3" />
              </div>

              {/* Inner Screen */}
              <div className="relative w-full h-full bg-[#18191E] rounded-[36px] overflow-hidden flex flex-col justify-between p-6 text-white pt-10">
                {/* Top Status */}
                <div className="flex items-center justify-between text-xs text-white/50 pt-2">
                  <div className="flex items-center gap-1 font-semibold text-white/70">
                    <span className="text-[#FF5C19]">●</span> JIM Terminal
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-white/10 text-white/80 font-mono">
                      NFC ON
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>

                {/* Center Content: Tap Screen */}
                <div className="flex flex-col items-center justify-center my-auto text-center py-4">
                  {/* NFC Wave Animation or Success State */}
                  {!tapped ? (
                    <>
                      {/* Contactless waves icon */}
                      <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-2 border-[#FF5C19]/30 animate-ping" />
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FF5C19]/20 to-[#FF4C24]/10 flex items-center justify-center border border-[#FF5C19]/40">
                          <svg
                            className="w-8 h-8 text-[#FF5C19]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8.5 16.5a5 5 0 0 1 0-9" />
                            <path d="M12 19a8.5 8.5 0 0 0 0-14" />
                            <path d="M15.5 21.5a12 12 0 0 0 0-19" />
                          </svg>
                        </div>
                      </div>

                      <span className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-1">
                        Tap Card or Phone
                      </span>
                      <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                        ₹{amount}
                      </div>
                      <p className="text-xs text-white/60 max-w-[200px]">
                        Hold contactless RuPay, Visa, Mastercard, or Google Pay here
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setAmount('1200.00')}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                        >
                          ₹1,200
                        </button>
                        <button
                          type="button"
                          onClick={() => setAmount('850.00')}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                        >
                          ₹850
                        </button>
                        <button
                          type="button"
                          onClick={() => setAmount('2450.00')}
                          className="px-2.5 py-1 text-[11px] rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                        >
                          ₹2,450
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Instant Payment Success Animation */
                    <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mb-4 text-emerald-400">
                        <svg
                          className="w-9 h-9"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        Approved · Paid Instantly
                      </span>
                      <div className="text-3xl font-extrabold text-white mb-1">₹{amount}</div>
                      <span className="text-xs text-white/50">Funds in Jim Card & Bank</span>
                      <div className="mt-4 px-3 py-1.5 rounded-full bg-white/10 text-[11px] text-white/70">
                        Receipt sent via WhatsApp
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card / Simulated Card Contactless Interaction */}
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-white/40">Ready to charge</span>
                    <span className="text-[#C6FF1A] font-semibold text-[11px]">Instant Payout</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateTap}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] text-white text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#FF5C19]/30"
                  >
                    {tapped ? 'Tap Again' : `Charge ₹${amount}`}
                  </button>
                </div>
              </div>

              {/* Simulated Card Overlay Hovering */}
              <div
                className={`absolute -top-6 -right-6 w-44 h-28 rounded-2xl bg-gradient-to-tr from-[#1E2028] via-[#2A2D3A] to-[#3B4052] p-3 text-white shadow-2xl border border-white/20 transition-all duration-500 cursor-pointer ${
                  tapped
                    ? 'translate-x-[-40px] translate-y-[80px] rotate-[-5deg] scale-95 shadow-emerald-500/30'
                    : 'hover:translate-y-2 hover:rotate-2 rotate-[8deg]'
                }`}
                onClick={handleSimulateTap}
                title="Click to simulate contactless card tap"
              >
                <div className="flex justify-between items-start">
                  <div className="w-6 h-5 rounded-sm bg-amber-400/80 border border-amber-300/60" />
                  <svg className="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8.5 16.5a5 5 0 0 1 0-9" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 19a8.5 8.5 0 0 0 0-14" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="mt-4 font-mono text-[10px] tracking-widest text-white/70">
                  •••• 4821
                </div>
                <div className="flex justify-between items-end mt-1 text-[9px] text-white/50">
                  <span>TAP TO PAY</span>
                  <span className="font-bold text-white text-[10px] italic">RuPay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
