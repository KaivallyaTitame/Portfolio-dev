"use client";

import { Award } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-[#08101F] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-500/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-right" className="flex items-center gap-4 mb-12">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">06 / Awards &amp; Achievements</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {portfolio.achievements.map((ach, index) => (
            <div
              key={ach.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#0D1528] border border-[#1A2E4A] rounded-xl p-5 hover:border-[#38BDF8]/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{ach.title}</h4>
                  <p className="text-gray-500 text-xs">{ach.org}</p>
                  <p className="text-gray-600 text-xs mt-1">{ach.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
