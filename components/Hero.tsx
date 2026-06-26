"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Software Developer",
  "Full Stack Engineer",
  "Backend Developer",
  "AI Systems Builder",
  "MEAN Stack Developer",
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
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl text-center relative z-10">
        {/* Profile Image */}
        <div className="animate-fade-in-up mb-6 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#38BDF8]/30 shadow-lg shadow-[#38BDF8]/10">
            <Image
              src="/photo.jpg"
              alt="Kaivallya Titame"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Monospace label */}
        <p className="animate-fade-in-up [animation-delay:200ms] font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8]/70 text-sm md:text-base mb-4">
          {"> hello, world! I'm"}
        </p>

        {/* Big name */}
        <h1 className="animate-fade-in-up [animation-delay:300ms] font-[family-name:var(--font-space-grotesk)] text-5xl md:text-7xl lg:text-[72px] font-bold text-white mb-4">
          Kaivallya Titame
        </h1>

        {/* Typing animation */}
        <div className="animate-fade-in-up [animation-delay:500ms] h-12 md:h-14 flex items-center justify-center mb-6">
          <span className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-4xl font-semibold text-[#38BDF8]">
            {text}
          </span>
          <span className="w-[3px] h-8 md:h-10 bg-[#38BDF8] ml-1 animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-in-up [animation-delay:700ms] text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          B.Tech IT graduate with hands-on experience building scalable web apps, REST APIs, and AI-powered automation frameworks. Seeking Software Developer roles in Pune.
        </p>

        {/* Green badge */}
        <div className="animate-fade-in-up [animation-delay:900ms] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Open to Opportunities · Pune, India
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up [animation-delay:1000ms] flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#38BDF8] text-[#08101F] font-semibold rounded-md hover:bg-[#38BDF8]/90 hover:shadow-lg hover:shadow-[#38BDF8]/20 transition-all duration-300"
          >
            View My Projects
          </a>
          <a
            href="https://github.com/KaivallyaTitame"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-md hover:bg-[#38BDF8]/10 transition-all duration-300"
          >
            GitHub Profile
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in-up [animation-delay:1200ms] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">8+</p>
            <p className="text-gray-500 text-sm mt-1">Projects Built</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">6 mo</p>
            <p className="text-gray-500 text-sm mt-1">Industry Exp</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">23</p>
            <p className="text-gray-500 text-sm mt-1">GitHub Repos</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/[0.02] border border-[#1A2E4A]/50">
            <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">130+</p>
            <p className="text-gray-500 text-sm mt-1">DSA Problems</p>
          </div>
        </div>
      </div>
    </section>
  );
}
