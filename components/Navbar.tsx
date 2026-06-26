"use client";

import { useState, useRef, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

const resumes = [
  {
    label: "Developer Resume",
    desc: "Java · Spring Boot · Angular · Full Stack",
    href: "/Kaivallya_Titame_Resume1.pdf",
  },
  {
    label: "MEAN Stack Resume",
    desc: "Angular · Node.js · Express · MongoDB",
    href: "/Resume_Developement_Kaivallya.pdf",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

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

        {/* Resume dropdown (desktop) */}
        <div ref={dropdownRef} className="hidden lg:block relative">
          <button
            onClick={() => setResumeOpen(!resumeOpen)}
            className="flex items-center gap-1.5 px-5 py-2 border border-[#38BDF8] text-[#38BDF8] text-sm rounded-md hover:bg-[#38BDF8]/10 transition-colors"
          >
            Resume
            <svg
              className={`w-3.5 h-3.5 transition-transform duration-200 ${resumeOpen ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {resumeOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-[#0D1528] border border-[#1A2E4A] rounded-xl shadow-xl shadow-black/30 overflow-hidden">
              {resumes.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex flex-col px-4 py-3 hover:bg-[#38BDF8]/10 transition-colors group"
                >
                  <span className="text-white text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
                    {r.label}
                  </span>
                  <span className="text-gray-500 text-xs mt-0.5">{r.desc}</span>
                </a>
              ))}
            </div>
          )}
        </div>

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
            {/* Resume options on mobile */}
            <li className="flex flex-col items-center gap-3 w-full px-8">
              <p className="text-gray-500 text-xs font-[family-name:var(--font-jetbrains-mono)] uppercase tracking-wider">Resume</p>
              {resumes.map((r) => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-5 py-2.5 border border-[#38BDF8]/50 text-[#38BDF8] text-sm rounded-md hover:bg-[#38BDF8]/10 transition-colors"
                >
                  {r.label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
