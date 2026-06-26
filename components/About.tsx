"use client";

import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0D1528]">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">01 / About Me</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              I&apos;m a 2026 B.Tech IT graduate from VIIT Pune with 6 months of hands-on Software Engineering experience at Qualys. I designed and built an AI-driven agent framework using MCP servers and Playwright for autonomous UI navigation.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Proficient in Java, Spring Boot, Angular, and REST APIs. Passionate about building scalable backend systems and AI-powered automation tools. Open to full-time roles and freelance projects.
            </p>

            {/* Inline badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                📍 {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                🎓 {portfolio.education.degree}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                ● Immediate Joiner
              </span>
            </div>
          </div>

          {/* Right side: Education card */}
          <div className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{portfolio.education.institute}</h3>
                <p className="text-gray-400 text-sm">{portfolio.education.degree}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Duration</span>
                <span className="text-gray-200">{portfolio.education.period}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Location</span>
                <span className="text-gray-200">{portfolio.education.location}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">GPA</span>
                <span className="text-[#38BDF8] font-semibold">{portfolio.education.gpa}</span>
              </div>
            </div>

            {/* Stat boxes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">8.0</p>
                <p className="text-gray-500 text-xs mt-1">CGPA</p>
              </div>
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">2026</p>
                <p className="text-gray-500 text-xs mt-1">Graduating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
