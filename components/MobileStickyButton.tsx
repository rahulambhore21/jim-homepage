'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MobileStickyButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show after scrolling past hero
      setVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <Link
        href="#signup"
        className="w-full py-4 px-6 rounded-full bg-[#1A0000] text-white font-bold text-center flex items-center justify-center gap-2 shadow-2xl shadow-black/40 border border-white/20 active:scale-95 transition-all"
      >
        <span>Get Jim · Start Selling</span>
        <span className="text-[#FF5C19]">⚡</span>
      </Link>
    </div>
  );
}
