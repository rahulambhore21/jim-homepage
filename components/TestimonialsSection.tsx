'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ananya Sharma',
    role: 'Founder, The Modern Weave (Boutique)',
    city: 'Mumbai',
    image: '/assets/merchant_boutique.jpg',
    quote:
      'I love Jim because it helps us check out customers so much faster at weekend exhibits. You just punch in the amount, they tap their card or phone, and that’s it. Money is in my account in seconds!',
  },
  {
    name: 'Rohan Sen',
    role: 'Owner, Araku & Co Specialty Coffee',
    city: 'Bangalore',
    image: '/assets/merchant_cafe.jpg',
    quote:
      'Using Jim has replaced our clunky POS machine completely. Instant settlements without bank hold-ups or rental fees made running our coffee pop-ups totally effortless.',
  },
  {
    name: 'Vikram Singhal',
    role: 'Creative Director, Delhi Leatherworks',
    city: 'New Delhi',
    image: '/assets/David_desktop.webp',
    quote:
      'Jim enables you to have your sales money right away. When customers order over Instagram or WhatsApp, I just send an encrypted payment link. Highly recommended!',
  },
  {
    name: 'Pooja Patel',
    role: 'Ceramics & Home Decor Studio',
    city: 'Pune',
    image: '/assets/Krystal_desktop.webp',
    quote:
      'Jim saves me hours every week. I just shared my catalog vision with Jim and it gave me back a fully functional website and instant card checkout right on my phone.',
  },
  {
    name: 'Saleem Khan',
    role: 'Custom Tailoring & Menswear',
    city: 'Hyderabad',
    image: '/assets/saleem_desktop.webp',
    quote:
      'No complicated machines, no paper rolls, no monthly rental deductions. My clients love how smooth the contactless tap experience is on my phone.',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#f5f3f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#1A0000] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Merchant Stories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A0000]">
              Loved by independent sellers across India.
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-black/15 bg-white hover:bg-neutral-100 flex items-center justify-center text-[#1A0000] transition-colors shadow-xs cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#1A0000] hover:bg-black flex items-center justify-center text-white transition-colors shadow-md cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Highlighted Testimonial Card */}
        <div className="rounded-3xl bg-white border border-black/5 p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg border border-black/5">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                  {testimonials[activeIndex].city}, India
                </div>
              </div>
            </div>

            {/* Quote and details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
                <span className="ml-2 text-xs font-bold text-[#1A0000]">5.0 Verified Merchant</span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1A0000] leading-snug mb-8">
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div>
                <h4 className="text-lg font-bold text-[#1A0000]">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-neutral-500 font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>

              {/* Progress indicator pills */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeIndex === idx ? 'w-8 bg-[#FF5C19]' : 'w-2 bg-black/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
