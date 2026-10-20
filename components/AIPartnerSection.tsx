'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PromptQA {
  question: string;
  answer: string;
  badge: string;
}

const promptQAData: PromptQA[] = [
  {
    question: 'Am I on track for ₹1,50,000 this month?',
    answer:
      'Yes! You’ve generated ₹1,12,400 so far. At your current pace of ₹4,800/day, you’re projected to hit ₹1,64,000 by month-end (+9% above your goal).',
    badge: 'Pace Analysis',
  },
  {
    question: 'Any pop-ups or flea markets near Bandra this weekend?',
    answer:
      'Found 2 upcoming weekend markets: "Kala Ghoda Artisan Fair" (Sat-Sun, Bandra West) and "Sunday Farmers & Makers Bazaar" in Khar. Tap below to send your vendor booking profile.',
    badge: 'Local Opportunities',
  },
  {
    question: 'How did yesterday close?',
    answer:
      'Yesterday closed strong: ₹18,650 in total sales across 34 contactless taps & 8 payment links. Peak hours were 4 PM – 7 PM. All funds settled instantly to your Jim account.',
    badge: 'Daily Closing',
  },
];

export default function AIPartnerSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [userQuery, setUserQuery] = useState('');
  const [customReply, setCustomReply] = useState<string | null>(null);

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    setCustomReply(
      `Analyzing your recent sales data... For "${userQuery}", Jim recommends optimizing weekend hours and enabling instant WhatsApp payment links for pending custom orders.`
    );
  };

  return (
    <section id="ai-partner" className="py-20 lg:py-28 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5C19]/10 text-[#FF5C19] text-xs font-bold uppercase tracking-wider mb-6">
              <span>Smart Business AI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A0000] leading-[1.12] mb-6">
              Jim is the AI partner helping you get paid and grow your business.
            </h2>

            <p className="text-base sm:text-lg text-[#1A0000]/70 max-w-lg mb-8 leading-relaxed">
              From real-time sales forecasting and spot opportunities to instant settlements in ₹ Rupees, Jim works 24/7 so you can focus on making and selling.
            </p>

            <Link
              href="#signup"
              className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1A0000] text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FF5C19]/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2.5">
                <span>Start selling now</span>
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

          {/* Right Column: Interactive AI Assistant Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-[#101114] text-white p-6 sm:p-8 shadow-2xl border border-white/10 ring-1 ring-black/5">
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF5C19] to-[#FF4C24] flex items-center justify-center font-black text-white text-base shadow-md shadow-[#FF5C19]/30">
                    J
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm sm:text-base">Ask Jim</h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/50">
                      <span className="w-2 h-2 rounded-full bg-[#C6FF1A]" />
                      <span>Online · Real-time financial AI</span>
                    </div>
                  </div>
                </div>

                <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                  Ask what you need
                </span>
              </div>

              {/* Sample Prompt Pills */}
              <div className="py-6 flex flex-col gap-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Suggested Prompts:
                </span>
                <div className="flex flex-col gap-2">
                  {promptQAData.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setSelectedIdx(idx);
                        setCustomReply(null);
                      }}
                      className={`text-left p-3 rounded-2xl text-xs sm:text-sm transition-all duration-200 border cursor-pointer flex items-center justify-between gap-2 ${
                        selectedIdx === idx && !customReply
                          ? 'bg-[#FF5C19]/15 border-[#FF5C19] text-white shadow-sm'
                          : 'bg-white/5 border-white/5 hover:bg-white/10 text-white/80'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-[#FF5C19]">💬</span>
                        <span>{item.question}</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-white/60 shrink-0">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Response Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm leading-relaxed text-white/90">
                <div className="flex items-center gap-2 mb-2 font-semibold text-[#FF5C19]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C19]" />
                  <span>Jim AI Response</span>
                </div>
                <p>{customReply ? customReply : promptQAData[selectedIdx].answer}</p>
              </div>

              {/* Live Input Field */}
              <form onSubmit={handleAsk} className="mt-6 flex items-center gap-2">
                <input
                  type="text"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Ask anything about your sales, revenue, or events..."
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-hidden focus:border-[#FF5C19] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-full bg-[#FF5C19] hover:bg-[#FF4C24] text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-md shadow-[#FF5C19]/30"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
