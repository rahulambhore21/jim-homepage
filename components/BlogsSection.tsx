'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    category: 'JIM INSIGHTS',
    title: 'How to Make Money on Your Phone in 2026: 3 Real Routes for Indian Creators',
    image: '/assets/How_to_Make_Money_on_Your_Phone_in_2026__3_Real_Routes.webp',
    href: '#blog',
    aspect: 'aspect-square',
  },
  {
    category: 'PAYMENTS',
    title: 'Is Link Payment Safe? How to Pay and Collect Securely via UPI & Cards',
    image: '/assets/6a7489fb221db92a09c64c2d_payment-link.webp',
    href: '#blog',
    aspect: 'aspect-[318/385]',
  },
  {
    category: 'ENTREPRENEURSHIP',
    title: 'How to start a cloud kitchen or food truck in India: a 9-step practical guide',
    image: '/assets/6a7f35d90a601d764cd380f5_how-to-start-a-food-truck.webp',
    href: '#blog',
    aspect: 'aspect-square',
  },
  {
    category: 'FINTECH',
    title: 'How to accept credit card & contactless payments without a swiping POS machine',
    image: '/assets/Blog02.webp',
    href: '#blog',
    aspect: 'aspect-[318/256]',
  },
];

export default function BlogsSection() {
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-[#101114] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6FF1A] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Knowledge Base</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The latest
            </h2>
          </div>

          <Link
            href="#blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#FF5C19] transition-colors"
          >
            <span>All blog posts</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* 4 Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, idx) => (
            <Link
              key={idx}
              href={post.href}
              className="group flex flex-col justify-between rounded-3xl bg-[#18191E] p-4 sm:p-5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              <div>
                <div className={`relative w-full ${post.aspect} rounded-2xl overflow-hidden mb-4 bg-neutral-900`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="text-[11px] font-bold uppercase tracking-widest text-[#FF5C19] mb-2">
                  {post.category}
                </div>

                <h3 className="text-base font-semibold text-white/95 group-hover:text-white transition-colors leading-snug line-clamp-3">
                  {post.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40 group-hover:text-white/80 transition-colors">
                <span>Read article</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
