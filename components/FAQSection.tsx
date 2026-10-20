'use client';

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How do I receive the funds from my sales using Tap with Jim?',
    answer:
      'Payments in seconds are our standard. So whenever you make a sale, your money is available immediately in your account. No more waiting 1–2 business days or weekend bank hold-ups.',
  },
  {
    question: 'How do I use my money with Jim?',
    answer:
      'You have two easy ways to access your earnings—spend them instantly or transfer them directly to any Indian bank account:\n\n1. Spend instantly with the Jim Virtual Card (Free): Every sale funds your Jim RuPay/Visa prepaid card in seconds. Add it to your phone wallet for in-store payments or shop online anywhere cards are accepted.\n\n2. Instant UPI/IMPS Bank Transfer: Transfer funds directly to your HDFC, ICICI, SBI, Axis, or any other bank account instantly 24/7.',
  },
  {
    question: 'How do I use Tap with Jim?',
    answer:
      'Simply download the Jim app on your NFC-enabled iPhone or Android smartphone and tap "Start Selling". At checkout, enter the amount and ask the customer to hold their contactless credit/debit card (RuPay, Visa, Mastercard) or NFC phone near the top of your device. The payment completes securely in under 2 seconds.',
  },
  {
    question: 'What payment methods does Tap with Jim accept?',
    answer:
      'Jim accepts all contactless cards including RuPay, Visa, Mastercard, American Express, as well as digital wallets like Google Pay, Apple Pay, and Samsung Pay. You can also generate dynamic UPI QR codes and encrypted payment links directly inside the app.',
  },
  {
    question: 'What are the fees for Tap with Jim in India?',
    answer:
      'The service fee is a flat and transparent 1.99% per tap transaction. There are no monthly hardware rental charges, no hidden setup fees, and no minimum monthly balance required.',
  },
  {
    question: 'What is the minimum payment amount I can receive using Tap with Jim?',
    answer:
      'The minimum transaction amount for Tap with Jim is ₹1.00.',
  },
  {
    question: 'Is it safe to sell and pay using Tap with Jim?',
    answer:
      'Security is our highest priority. Jim complies with Reserve Bank of India (RBI) tokenization guidelines and PCI-DSS Level 1 specifications. Card numbers and customer PINs are never stored on your phone or on Jim servers.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#f5f3f3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#1A0000] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A0000]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#1A0000]/65">
            Everything you need to know about accepting contactless payments with Jim in India.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-black/5 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#1A0000] pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-black/5 text-[#1A0000] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#FF5C19] text-white' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#1A0000]/70 leading-relaxed border-t border-black/5 whitespace-pre-line animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
