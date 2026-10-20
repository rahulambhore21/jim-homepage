import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Jim | Your AI Hire That Gets You Paid — Instant Payouts in India',
  description:
    'Meet Jim — the AI partner that runs your payments and grows your business. Accept contactless card & UPI payments on your phone, send links, and track sales across India.',
  icons: {
    icon: '/assets/Favicon.png',
    apple: '/assets/Favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-full font-sans bg-[#f5f3f3] text-[#1A0000]">{children}</body>
    </html>
  );
}
