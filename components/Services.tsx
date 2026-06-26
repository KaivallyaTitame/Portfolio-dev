"use client";

import { Award, BookOpen, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#08101F] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#38BDF8]/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div data-aos="fade-right">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">05 / Certifications</span>
            <div className="flex-1 h-px bg-[#1A2E4A]"></div>
          </div>
          <p className="text-gray-400 text-sm mb-12">Professional certifications & courses completed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolio.certifications.map((cert, index) => (
            <div
              key={cert.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#0D1528] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center mb-5 group-hover:bg-[#38BDF8]/20 transition-colors">
                {index === 0 ? (
                  <GraduationCap className="w-7 h-7 text-[#38BDF8]" />
                ) : index === 1 ? (
                  <BookOpen className="w-7 h-7 text-[#38BDF8]" />
                ) : (
                  <Award className="w-7 h-7 text-[#38BDF8]" />
                )}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-base mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-[#38BDF8]/70 text-xs font-[family-name:var(--font-jetbrains-mono)]">{cert.year}</p>
            </div>
          ))}
        </div>

        {/* Relevant Courses */}
        <div data-aos="fade-up" className="bg-[#0D1528] border border-[#1A2E4A] rounded-xl p-6">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-lg mb-4">
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.education.courses.map((course) => (
              <span
                key={course}
                className="font-[family-name:var(--font-jetbrains-mono)] text-xs px-3 py-1.5 bg-[#08101F] text-gray-300 border border-[#1A2E4A] rounded-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
