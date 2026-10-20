'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#f5f3f3] text-[#1A0000] border-t border-black/10 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <svg
                width="72"
                height="32"
                viewBox="0 0 92 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#1A0000] fill-current"
              >
                <path d="M87.3957 18.9077C85.5881 19.3147 83.6397 19.9332 81.6823 20.7427C82.6141 17.9475 83.9838 15.1747 85.9679 13.144C86.7679 12.3255 86.4997 10.9537 85.4563 10.4927L83.709 9.72137C82.5269 9.19965 81.1729 9.25138 80.0289 9.85405C74.3289 12.8584 69.411 16.8006 65.3265 21.4781C65.9208 18.4422 66.8749 15.3883 68.1753 13.0946C68.6535 12.249 68.3094 11.1741 67.4223 10.7828L65.2751 9.83606C63.9478 9.25138 62.415 9.38405 61.2129 10.1981C56.8335 13.162 52.7981 16.8725 49.2298 21.5905C49.518 18.4624 50.2017 15.3119 51.3413 13.0856C51.7703 12.2468 51.4128 11.2213 50.557 10.8413L48.7092 10.0205C47.2858 9.38855 45.6257 9.84281 44.7006 11.1021C41.8026 15.0465 38.3817 18.6199 34.5519 21.8964C35.4725 18.7728 35.9686 15.3951 36.2188 12.5683C36.2702 11.9927 35.9484 11.4507 35.4234 11.2191L32.5119 9.92826C31.1891 9.34133 29.6496 9.62243 28.6084 10.6299C26.3584 12.8045 23.8201 14.5968 21.2103 16.2024C21.7376 15.0308 22.2426 13.8727 22.7252 12.7348C22.9889 12.1118 22.7073 11.39 22.0906 11.1179L19.568 9.99798C18.1961 9.38855 16.6029 9.65841 15.4924 10.6704C12.4492 13.4454 7.15584 16.5442 1.24805 18.7098C0.77436 18.883 0.756485 19.5486 1.21901 19.7443L3.39979 20.6708C3.85325 20.864 4.35824 20.9 4.83645 20.7698C7.48877 20.0456 10.6818 18.811 13.6379 17.3088C12.8024 18.8718 11.9174 20.4504 10.9901 22.0246C5.33033 25.4091 0.781062 29.1802 0.0168953 35.8028C-0.11717 36.961 0.557622 38.0585 1.65025 38.4407L5.71018 39.8621C6.73801 40.2217 7.88201 39.8621 8.51427 38.9715C11.2045 35.1708 13.7518 30.9476 16.0734 26.6346C20.2987 22.8431 25.2589 19.4923 30.7062 16.8996C29.6276 20.8648 28.5303 24.8142 27.4208 28.7479C27.1264 29.7915 27.6713 30.8711 28.6946 31.2588L31.8485 32.4533C32.9649 32.8757 34.218 32.4048 34.7958 31.3477C38.0831 25.3283 41.5165 20.1245 45.1843 15.656C44.3314 20.426 43.1973 25.1738 42.043 29.897C41.7486 31.1009 42.4414 32.3242 43.6322 32.7099L46.8582 33.7548C47.9625 34.1122 49.176 33.6278 49.7346 32.5976C53.6499 25.3789 57.5133 19.6749 61.4285 14.8817C60.1065 20.1708 58.7565 25.4418 57.3782 30.6865C57.0628 31.8845 57.7345 33.1197 58.9198 33.5134L62.0858 34.5663C63.196 34.9357 64.4173 34.4534 64.9818 33.4191C69.4589 25.2155 73.8058 19.006 78.1066 14.0722C76.9942 19.1249 75.8759 24.1565 74.7435 29.167C74.455 30.4439 75.2575 31.7061 76.516 31.9546L79.4796 32.5398C80.6811 32.7769 81.8596 32.0625 82.2625 30.8499C85.5901 20.8359 87.2798 12.0307 88.0433 3.65586C88.1189 2.82761 87.6407 2.05374 86.8778 1.76161L83.9263 0.63097C82.8598 0.222378 81.6548 0.655938 81.0827 1.65342C79.8249 3.84433 78.4729 6.27361 77.0673 8.90562C80.8935 5.56846 84.7214 3.12356 88.625 1.48805C89.1009 1.28876 89.6548 1.48003 89.8968 1.93046L91.1341 4.23469C91.4394 4.80287 91.2662 5.50367 90.7288 5.86433C87.054 8.32837 83.2755 11.7584 79.5262 16.2709C82.1388 15.8236 84.7738 15.8824 87.3957 18.9077Z" />
              </svg>
            </Link>
            <p className="text-xs text-[#1A0000]/60 leading-relaxed">
              Your AI Hire that gets you paid instantly anywhere in India.
            </p>
          </div>

          {/* Column 1: Payments */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A0000]/50 mb-4">
              Payments
            </h4>
            <ul className="space-y-2.5 text-sm text-[#1A0000]/80">
              <li>
                <Link href="#tap-to-pay" className="hover:text-[#FF5C19] transition-colors">
                  Tap to Pay
                </Link>
              </li>
              <li>
                <Link href="#payment-links" className="hover:text-[#FF5C19] transition-colors">
                  Payment Links
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-[#FF5C19] transition-colors">
                  UPI &amp; QR Payments
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-[#FF5C19] transition-colors">
                  Instant Settlements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A0000]/50 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#1A0000]/80">
              <li>
                <Link href="#growing" className="hover:text-[#FF5C19] transition-colors">
                  Website Builder
                </Link>
              </li>
              <li>
                <Link href="#card" className="hover:text-[#FF5C19] transition-colors">
                  Jim Card
                </Link>
              </li>
              <li>
                <Link href="#growing" className="hover:text-[#FF5C19] transition-colors">
                  Booking &amp; Scheduling
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#FF5C19] transition-colors">
                  Fee Calculator
                </Link>
              </li>
              <li>
                <Link href="#materials" className="hover:text-[#FF5C19] transition-colors">
                  Marketing Materials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A0000]/50 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-[#1A0000]/80">
              <li>
                <Link href="#ai" className="hover:text-[#FF5C19] transition-colors">
                  Ask Jim
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#FF5C19] transition-colors">
                  Pricing (1.99%)
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-[#FF5C19] transition-colors">
                  Blog &amp; Stories
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#FF5C19] transition-colors">
                  Selling with Jim
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Help */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-[#1A0000]/50 mb-4">
              Legal &amp; Trust
            </h4>
            <ul className="space-y-2.5 text-sm text-[#1A0000]/80">
              <li>
                <Link href="#terms" className="hover:text-[#FF5C19] transition-colors">
                  Terms &amp; Privacy
                </Link>
              </li>
              <li>
                <Link href="#data-protection" className="hover:text-[#FF5C19] transition-colors">
                  Data Protection Policy
                </Link>
              </li>
              <li>
                <Link href="#rbi" className="hover:text-[#FF5C19] transition-colors">
                  RBI Compliance
                </Link>
              </li>
              <li>
                <a href="mailto:support@jim.com" className="hover:text-[#FF5C19] transition-colors">
                  support@jim.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Language / Country Selector & Socials */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 text-xs font-semibold text-[#1A0000]">
            <span className="text-base">🇮🇳</span>
            <span>India (English) · ₹ INR</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-[#1A0000]">
            <a
              href="https://www.instagram.com/chatwithjim"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href="https://x.com/GetJIMnow"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              aria-label="X Twitter"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@chatwithjim"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="pt-6 border-t border-black/10 text-[11px] leading-relaxed text-[#1A0000]/60 space-y-2">
          <p>
            jim.com is not a bank. jim.com is a financial technology company providing software and payment collection infrastructure. Payment processing and settlement services in India are powered in partnership with RBI-licensed scheduled commercial banks and NPCI-authorized payment aggregator partners.
          </p>
          <p>
            The Jim Virtual Prepaid Card is issued pursuant to licensing by RuPay and Visa® India. Funds held in user merchant accounts are protected and held in nodal/escrow accounts with scheduled commercial banks adhering to Reserve Bank of India (RBI) directives. Level 1 PCI-DSS certified security. Instant settlements subject to banking network availability and standard terms.
          </p>
          <p className="pt-2 text-[#1A0000]/40 font-medium">
            © 2026 JIM Technologies India. All rights reserved. Powered by CloudWalk, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
