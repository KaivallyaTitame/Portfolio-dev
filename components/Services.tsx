"use client";

import { Globe, Code2, Layers } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  web: <Globe className="w-8 h-8 text-[#38BDF8]" />,
  api: <Code2 className="w-8 h-8 text-[#38BDF8]" />,
  angular: <Layers className="w-8 h-8 text-[#38BDF8]" />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#08101F]">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-2">
          <span className="font-[family-name:var(--font-jetbrains-mono)] text-[#38BDF8] text-sm">05 / What I Build</span>
          <div className="flex-1 h-px bg-[#1A2E4A]"></div>
        </div>
        <p className="text-gray-400 text-sm mb-12">Available for freelance projects</p>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolio.services.map((service) => (
            <div
              key={service.title}
              className="bg-[#0D1528] border border-[#1A2E4A] rounded-xl p-6 hover:border-[#38BDF8]/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center mb-5 group-hover:bg-[#38BDF8]/20 transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-white font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm font-[family-name:var(--font-jetbrains-mono)]">
            Starting at ₹5,000 per project · Fast delivery · Clean code · Ongoing support
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-3 bg-[#38BDF8] text-[#08101F] font-semibold rounded-md hover:bg-[#38BDF8]/90 transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
