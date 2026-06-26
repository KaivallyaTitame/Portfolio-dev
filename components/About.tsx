"use client";

import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0D1528] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#38BDF8]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-right" className="flex items-center gap-4 mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">01 / About Me</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-up">
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              {portfolio.summary}
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I specialize in Java, Spring Boot, Angular, and full-stack web development. I write clean, well-documented code and enjoy solving complex problems with elegant solutions.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                📍 {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#08101F] border border-[#1A2E4A] text-gray-300 text-sm">
                🎓 B.Tech IT - VIIT Pune
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                ● Open to Opportunities
              </span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/30 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Education</h3>
                <p className="text-gray-400 text-sm">{portfolio.education.institute}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">{portfolio.education.degree}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">GPA: {portfolio.education.gpa}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">{portfolio.education.period}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-[#38BDF8]">▹</span>
                <span className="text-gray-300">6 months SWE Intern at Qualys</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">8.0</p>
                <p className="text-gray-500 text-xs mt-1">GPA / 10</p>
              </div>
              <div className="bg-[#0D1528] border border-[#1A2E4A] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">23</p>
                <p className="text-gray-500 text-xs mt-1">GitHub Repos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
