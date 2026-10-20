'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paymentsOpen, setPaymentsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-[#f5f3f3]/85 backdrop-blur-md shadow-xs' : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link href="/" aria-label="Home" className="flex items-center">
                <svg
                  width="78"
                  height="34"
                  viewBox="0 0 92 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#1A0000] fill-current"
                >
                  <path d="M87.3957 18.9077C85.5881 19.3147 83.6397 19.9332 81.6823 20.7427C82.6141 17.9475 83.9838 15.1747 85.9679 13.144C86.7679 12.3255 86.4997 10.9537 85.4563 10.4927L83.709 9.72137C82.5269 9.19965 81.1729 9.25138 80.0289 9.85405C74.3289 12.8584 69.411 16.8006 65.3265 21.4781C65.9208 18.4422 66.8749 15.3883 68.1753 13.0946C68.6535 12.249 68.3094 11.1741 67.4223 10.7828L65.2751 9.83606C63.9478 9.25138 62.415 9.38405 61.2129 10.1981C56.8335 13.162 52.7981 16.8725 49.2298 21.5905C49.518 18.4624 50.2017 15.3119 51.3413 13.0856C51.7703 12.2468 51.4128 11.2213 50.557 10.8413L48.7092 10.0205C47.2858 9.38855 45.6257 9.84281 44.7006 11.1021C41.8026 15.0465 38.3817 18.6199 34.5519 21.8964C35.4725 18.7728 35.9686 15.3951 36.2188 12.5683C36.2702 11.9927 35.9484 11.4507 35.4234 11.2191L32.5119 9.92826C31.1891 9.34133 29.6496 9.62243 28.6084 10.6299C26.3584 12.8045 23.8201 14.5968 21.2103 16.2024C21.7376 15.0308 22.2426 13.8727 22.7252 12.7348C22.9889 12.1118 22.7073 11.39 22.0906 11.1179L19.568 9.99798C18.1961 9.38855 16.6029 9.65841 15.4924 10.6704C12.4492 13.4454 7.15584 16.5442 1.24805 18.7098C0.77436 18.883 0.756485 19.5486 1.21901 19.7443L3.39979 20.6708C3.85325 20.864 4.35824 20.9 4.83645 20.7698C7.48877 20.0456 10.6818 18.811 13.6379 17.3088C12.8024 18.8718 11.9174 20.4504 10.9901 22.0246C5.33033 25.4091 0.781062 29.1802 0.0168953 35.8028C-0.11717 36.961 0.557622 38.0585 1.65025 38.4407L5.71018 39.8621C6.73801 40.2217 7.88201 39.8621 8.51427 38.9715C11.2045 35.1708 13.7518 30.9476 16.0734 26.6346C20.2987 22.8431 25.2589 19.4923 30.7062 16.8996C29.6276 20.8648 28.5303 24.8142 27.4208 28.7479C27.1264 29.7915 27.6713 30.8711 28.6946 31.2588L31.8485 32.4533C32.9649 32.8757 34.218 32.4048 34.7958 31.3477C38.0831 25.3283 41.5165 20.1245 45.1843 15.656C44.3314 20.426 43.1973 25.1738 42.043 29.897C41.7486 31.1009 42.4414 32.3242 43.6322 32.7099L46.8582 33.7548C47.9625 34.1122 49.176 33.6278 49.7346 32.5976C53.6499 25.3789 57.5133 19.6749 61.4285 14.8817C60.1065 20.1708 58.7565 25.4418 57.3782 30.6865C57.0628 31.8845 57.7345 33.1197 58.9198 33.5134L62.0858 34.5663C63.196 34.9357 64.4173 34.4534 64.9818 33.4191C69.4589 25.2155 73.8058 19.006 78.1066 14.0722C76.9942 19.1249 75.8759 24.1565 74.7435 29.167C74.455 30.4439 75.2575 31.7061 76.516 31.9546L79.4796 32.5398C80.6811 32.7769 81.8596 32.0625 82.2625 30.8499C85.5901 20.8359 87.2798 12.0307 88.0433 3.65586C88.1189 2.82761 87.6407 2.05374 86.8778 1.76161L83.9263 0.63097C82.8598 0.222378 81.6548 0.655938 81.0827 1.65342C79.8249 3.84433 78.4729 6.27361 77.0673 8.90562C80.8935 5.56846 84.7214 3.12356 88.625 1.48805C89.1009 1.28876 89.6548 1.48003 89.8968 1.93046L91.1341 4.23469C91.4394 4.80287 91.2662 5.50367 90.7288 5.86433C87.054 8.32837 83.2755 11.7584 79.5262 16.2709C82.1388 15.8236 84.7738 15.8824 87.3957 18.9077Z" />
                </svg>
              </Link>

              {/* Nav links */}
              <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                {/* Payments dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setPaymentsOpen(true)}
                  onMouseLeave={() => setPaymentsOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors rounded-full cursor-pointer">
                    Payments
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        paymentsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {paymentsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-xl p-2 z-50">
                      <Link
                        href="#tap-to-pay"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Tap to Pay</span>
                        <span className="text-xs text-neutral-500">Accept cards on phone with 0 hardware</span>
                      </Link>
                      <Link
                        href="#payment-links"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Payment Links</span>
                        <span className="text-xs text-neutral-500">Sell over WhatsApp, SMS & Social</span>
                      </Link>
                      <Link
                        href="#features"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">UPI & QR Collections</span>
                        <span className="text-xs text-neutral-500">Instant UPI soundless receipts</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Solutions dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors rounded-full cursor-pointer">
                    Solutions
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        solutionsOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {solutionsOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/5 shadow-xl p-2 z-50">
                      <Link
                        href="#growing"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Website Builder</span>
                        <span className="text-xs text-neutral-500">AI creates your store in seconds</span>
                      </Link>
                      <Link
                        href="#card"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Jim Card</span>
                        <span className="text-xs text-neutral-500">Virtual card with instant earnings</span>
                      </Link>
                      <Link
                        href="#growing"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Booking & Appointments</span>
                        <span className="text-xs text-neutral-500">Schedule clients & collect deposits</span>
                      </Link>
                      <Link
                        href="#pricing"
                        className="flex flex-col px-3 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors"
                      >
                        <span className="text-sm font-semibold text-[#1A0000]">Fee Calculator</span>
                        <span className="text-xs text-neutral-500">Calculate savings in ₹ Rupees</span>
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="#ai"
                  className="px-3 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors rounded-full"
                >
                  Ask Jim
                </Link>
                <Link
                  href="#pricing"
                  className="px-3 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors rounded-full"
                >
                  Pricing
                </Link>
                <Link
                  href="#blog"
                  className="px-3 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors rounded-full"
                >
                  Blog
                </Link>
              </nav>
            </div>

            {/* Right CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href="#login"
                className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-[#1A0000] hover:text-[#FF5C19] transition-colors"
              >
                Login
              </Link>

              {/* Start selling now button */}
              <Link
                href="#signup"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#1A0000] text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5C19]/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Glow layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF5C19] to-[#FF4C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
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

              {/* Mobile menu hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#1A0000] hover:bg-black/5 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f5f3f3] pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto md:hidden">
          <div className="flex flex-col space-y-4 pt-4">
            <div className="border-b border-black/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Payments</span>
              <div className="mt-2 flex flex-col space-y-2">
                <Link
                  href="#tap-to-pay"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1A0000] py-1"
                >
                  Tap to Pay
                </Link>
                <Link
                  href="#payment-links"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1A0000] py-1"
                >
                  Payment Links
                </Link>
              </div>
            </div>

            <div className="border-b border-black/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">Solutions</span>
              <div className="mt-2 flex flex-col space-y-2">
                <Link
                  href="#growing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1A0000] py-1"
                >
                  Website Builder
                </Link>
                <Link
                  href="#card"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1A0000] py-1"
                >
                  Jim Card
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-[#1A0000] py-1"
                >
                  Pricing & Calculator
                </Link>
              </div>
            </div>

            <Link
              href="#ai"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium text-[#1A0000] py-2"
            >
              Ask Jim
            </Link>
            <Link
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium text-[#1A0000] py-2"
            >
              Blog
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full border border-black/20 text-center font-medium text-[#1A0000]"
            >
              Login
            </Link>
            <Link
              href="#signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-full bg-[#1A0000] text-center font-medium text-white shadow-lg shadow-[#FF5C19]/20"
            >
              Start selling now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
