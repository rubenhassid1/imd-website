"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50">
      <nav
        className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4"
        aria-label="Primary navigation"
      >
        <Link href="/" className="font-heading text-2xl font-bold tracking-wide">
          IMD
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="font-body font-semibold text-base hover:text-primary-light transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="font-body font-semibold text-base hover:text-primary-light transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-body font-semibold text-base px-6 py-2 rounded-[4px] hover:bg-primary-light transition-colors"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 focus:outline-2 focus:outline-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary-dark px-6 pb-4 space-y-3">
          <Link
            href="/"
            className="block font-body font-semibold text-base py-2 hover:text-primary-light"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="block font-body font-semibold text-base py-2 hover:text-primary-light"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary font-body font-semibold text-base px-6 py-2 rounded-[4px] mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Request a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
