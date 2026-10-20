'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GrowingSection() {
  return (
    <section id="growing" className="py-24 lg:py-32 bg-[#101114] text-white overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF5C19]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#C6FF1A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6FF1A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Business Growth Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Start faster. Sell smarter.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed max-w-xl">
            Everything an independent creator, shop, or freelancer in India needs to run a profitable business from one pocket.
          </p>
        </div>

        {/* 3 Stacking / Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Generate a Website */}
          <div className="rounded-3xl bg-[#18191E] p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-2xl mb-6">
                🌐
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Generate a Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Get a custom e-commerce storefront you can launch in minutes. Create a catalog, connect UPI & cards, and customize your theme.
              </p>

              {/* Visual preview */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-4 mb-6">
                <div className="flex items-center justify-between text-xs text-white/50 mb-3 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-white/40">jim.site/your-brand</span>
                </div>
                <div className="space-y-2">
                  <div className="h-20 rounded-xl bg-gradient-to-r from-neutral-800 to-neutral-700 p-3 flex items-end">
                    <span className="text-xs font-bold text-white">Artisan Studio Bangalore</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="font-semibold text-white/90">Kullad Mug</div>
                      <div className="text-[#FF5C19] font-bold">₹450</div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                      <div className="font-semibold text-white/90">Filter Coffee</div>
                      <div className="text-[#FF5C19] font-bold">₹380</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#C6FF1A]">
              <span>Website builder included free</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 2: Spot Opportunities */}
          <div className="rounded-3xl bg-[#18191E] p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FF5C19]/20 text-[#FF5C19] flex items-center justify-center text-2xl mb-6">
                📍
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Spot Opportunities</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Catch verified sales events and local markets near you. Jim notifies you when high-footfall pop-ups are accepting seller applications.
              </p>

              {/* Opportunity Alert Card */}
              <div className="rounded-2xl bg-black/40 border border-[#FF5C19]/30 p-5 mb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF5C19]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-2 text-xs text-[#FF5C19] font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C19] animate-pulse" />
                  <span>Market Alert · Mumbai</span>
                </div>
                <div className="font-bold text-white text-sm mb-1">
                  Kala Ghoda Festive Pop-up
                </div>
                <p className="text-xs text-white/60 mb-3">
                  Estimated 4,500+ daily visitors. Applications close Thursday.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5C19]/20 text-[#FF5C19] text-xs font-semibold">
                  <span>Register as Vendor in 1 Tap</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#C6FF1A]">
              <span>Autonomous local scouting</span>
              <span>→</span>
            </div>
          </div>

          {/* Card 3: Ask Jim Anything (Q1 Overview in INR) */}
          <div className="rounded-3xl bg-[#18191E] p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C6FF1A]/20 text-[#C6FF1A] flex items-center justify-center text-2xl mb-6">
                📊
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ask Jim Anything</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Instant answers about your financial health, gross margins, GST summaries, and best-performing sales channels.
              </p>

              {/* Financial Breakdown Mockup */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-5 mb-6 text-xs">
                <div className="font-mono text-white/50 text-[11px] mb-2">
                  &gt; "How much did I make in Q1?"
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex justify-between items-center text-white/70">
                    <span>📦 Orders Processed:</span>
                    <span className="font-bold text-white">1,372</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>💎 Total Gross:</span>
                    <span className="font-bold text-[#C6FF1A]">₹3,64,800.00</span>
                  </div>
                  <div className="flex justify-between items-center text-white/70">
                    <span>💰 Total Net (Settled):</span>
                    <span className="font-bold text-white">₹3,57,540.00</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-[10px] text-emerald-400 font-semibold">
                    ↑ 24% revenue increase compared to previous quarter
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#C6FF1A]">
              <span>Real-time intelligence</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
