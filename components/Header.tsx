"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-base-100 border-b-2 border-secondary sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://wyliefordenton.com/wp-content/uploads/2025/06/Asset-41@4x.png"
            alt="David Wylie for County Commissioner"
            width={120}
            height={95}
            className="h-12 w-auto object-contain"
            unoptimized
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="btn btn-primary btn-sm text-white font-bold uppercase tracking-wide"
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden btn btn-ghost btn-sm"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 border-t-2 border-secondary px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary font-semibold hover:text-primary transition-colors uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="btn btn-primary text-white font-bold uppercase tracking-wide w-full"
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
