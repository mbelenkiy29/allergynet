"use client";

import { AnimatedSection } from "./AnimatedSection";

export function StatsSection() {
  const stats = [
    {
      label: "Unseen work destroys clinical capacity.",
      value: "37 000 000",
      description: "hours returned to clinicians",
      highlighted: false,
    },
    {
      label: "Patients deserve to feel seen and heard.",
      value: "2 400 000",
      description: "patient visits supported each week",
      highlighted: true,
    },
    {
      label: "Medicine is not one size fits all.",
      value: "200+",
      description: "clinical specialties choose Heidi",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f5f3ef]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v12M2 8h12" stroke="#2a1d1f" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-sm text-[#564841]">Global scale</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] mb-4">
            Real world impact felt by<br />clinicians around the globe
          </h2>
          <p className="text-[#564841]">
            Pressure tested, assessed and approved by the toughest audience: clinicians like you.
          </p>
        </AnimatedSection>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className={`p-6 rounded-2xl border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  stat.highlighted
                    ? "bg-[#f9f7a4] border-[#f9f7a4]"
                    : "bg-white border-[#e8e5e0]"
                }`}
              >
                <p className="text-sm text-[#564841] mb-8">{stat.label}</p>
                <p className="font-serif text-4xl md:text-5xl text-[#2a1d1f] mb-2">{stat.value}</p>
                <p className="text-sm text-[#564841]">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
