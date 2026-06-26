"use client";

import { portfolio } from "@/data/portfolio";

export default function Skills() {
  const categories = Object.keys(portfolio.skills) as (keyof typeof portfolio.skills)[];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0D1528] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-right" className="flex items-center gap-4 mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">02 / Technical Skills</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </div>

        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {categories.map((category, index) => (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#08101F] border border-[#1A2E4A] rounded-xl p-5 hover:border-[#38BDF8]/30 transition-colors duration-300"
            >
              <h3 className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-xs uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills[category].map((skill: string) => (
                  <span
                    key={skill}
                    className="font-[family-name:var(--font-jetbrains-mono)] text-xs px-3 py-1.5 bg-[#0D1528] text-gray-300 border border-[#1A2E4A] rounded-md hover:text-[#38BDF8] hover:border-[#38BDF8]/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
