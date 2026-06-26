"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-[#08101F]/90 backdrop-blur-md border-b border-gray-800/50 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-jetbrains-mono)] text-xl font-bold text-[#38BDF8]">
          KT.dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-gray-300 hover:text-[#38BDF8] transition-colors text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me button */}
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden lg:inline-block px-5 py-2 border border-[#38BDF8] text-[#38BDF8] text-sm rounded-md hover:bg-[#38BDF8]/10 transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-gray-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0B1527] border-t border-gray-800">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-300 hover:text-[#38BDF8] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="px-5 py-2 border border-[#38BDF8] text-[#38BDF8] text-sm rounded-md hover:bg-[#38BDF8]/10 transition-colors"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
