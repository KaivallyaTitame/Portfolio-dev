"use client";

import { useEffect, useState } from "react";

const roles = [
  "Java Developer",
  "Backend Engineer",
  "MEAN Stack Developer",
  "AI Systems Builder",
  "Freelance Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl text-center">
        {/* Monospace label */}
        <p className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8]/70 text-sm md:text-base mb-4">
          {"> hello, world! I'm"}
        </p>

        {/* Big name */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-[72px] font-bold text-white mb-4">
          Kaivallya Titame
        </h1>

        {/* Typing animation */}
        <div className="h-12 md:h-14 flex items-center justify-center mb-6">
          <span className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-4xl font-semibold text-[#38BDF8]">
            {text}
          </span>
          <span className="w-[3px] h-8 md:h-10 bg-[#38BDF8] ml-1 animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          2026 B.Tech IT graduate from VIIT Pune. Building AI-powered systems and full-stack web apps. Available for placements and freelance projects.
        </p>

        {/* Green badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Available · Immediate Joiner · Pune, India
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#38BDF8] text-[#08101F] font-semibold rounded-md hover:bg-[#38BDF8]/90 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-md hover:bg-[#38BDF8]/10 transition-colors"
          >
            Hire Me for Freelance
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6 mo</p>
            <p className="text-gray-500 text-sm mt-1">Industry Exp</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6</p>
            <p className="text-gray-500 text-sm mt-1">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">8.0</p>
            <p className="text-gray-500 text-sm mt-1">GPA</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">130+</p>
            <p className="text-gray-500 text-sm mt-1">DSA Problems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
