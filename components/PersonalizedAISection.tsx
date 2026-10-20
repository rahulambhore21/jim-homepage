'use client';

import React from 'react';
import Link from 'next/link';

export default function PersonalizedAISection() {
  return (
    <section id="ai" className="py-20 lg:py-32 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Real-time Animated Transaction & Action Cards */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Card 1: Weekly Sales Growth */}
            <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">
                  📈
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Weekly Sales
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#1A0000]">
                    +₹1,45,250.00
                  </div>
                </div>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                +22% this week
              </div>
            </div>

            {/* Card 2: Live Receipt */}
            <div className="p-6 rounded-3xl bg-white border border-black/5 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5C19]/10 text-[#FF5C19] flex items-center justify-center text-xl">
                  🧾
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium flex items-center gap-2">
                    <span>Receipt sent via WhatsApp</span>
                    <span>·</span>
                    <span>3 min ago</span>
                  </div>
                  <div className="text-base font-bold text-[#1A0000]">
                    Espresso &amp; Sourdough Toast
                  </div>
                </div>
              </div>
              <div className="text-lg font-extrabold text-[#1A0000]">
                +₹480.00
              </div>
            </div>

            {/* Card 3: Instant Cash Out to Bank / Jim Card */}
            <div className="p-6 rounded-3xl bg-[#101114] text-white border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A]/20 text-[#C6FF1A] flex items-center justify-center text-xl font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs text-[#C6FF1A] font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C6FF1A] animate-pulse" />
                    <span>Instant Settlement</span>
                    <span>·</span>
                    <span>Arrives in 2 min</span>
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    ₹45,000.00
                  </div>
                </div>
              </div>
              <div className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/80 font-mono">
                To Bank Account
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5C19]/10 text-[#FF5C19] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Next-Gen Agentic Commerce</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A0000] leading-[1.12] mb-6">
              Personalized AI powered by your sales.
            </h2>

            <p className="text-base sm:text-lg text-[#1A0000]/70 max-w-lg mb-8 leading-relaxed">
              Jim AI learns from every transaction to offer customized margin analysis, customer re-engagement nudges, and real actions—not just generic conversational chat.
            </p>

            <Link
              href="#signup"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1A0000] text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5C19]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Ask Jim</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          </div>
        </div>
      </div>
    </section>
  );
}
