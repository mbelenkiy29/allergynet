"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Search, MessageSquare } from "lucide-react";

const HeidiIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
  </svg>
);

const features = [
  {
    id: "evidence",
    name: "Evidence",
    icon: Search,
    description: "Ask real clinical questions and get clear, evidence-based answers instantly. Heidi Evidence brings trusted guidelines and peer-reviewed research directly into your workflow so decisions dont stall care.",
    cta: "Explore Evidence",
    bgColor: "from-sky-300 to-sky-100",
  },
  {
    id: "scribe",
    name: "Scribe",
    icon: FileText,
    description: "AI-powered documentation that captures patient encounters and generates clinical notes automatically, giving you more time to focus on patient care.",
    cta: "Explore Scribe",
    bgColor: "from-amber-200 to-amber-100",
  },
  {
    id: "comms",
    name: "Comms",
    icon: MessageSquare,
    description: "Streamline patient communication with AI-assisted messaging, follow-ups, and care coordination tools that keep your patients informed and engaged.",
    cta: "Explore Comms",
    bgColor: "from-emerald-200 to-emerald-100",
  },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("evidence");

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] text-center mb-12">
          Get answers, keep moving
        </h2>

        {/* Feature Image */}
        <div className={`relative mb-8 rounded-3xl overflow-hidden bg-gradient-to-b ${activeFeature.bgColor}`}>
          <div className="aspect-[16/9] flex items-center justify-center p-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <ActiveIcon className="w-16 h-16 mx-auto mb-4 text-[#2a1d1f]" />
              <h3 className="text-2xl font-serif text-[#2a1d1f] mb-2">{activeFeature.name}</h3>
              <p className="text-[#564841] max-w-md">Clinical AI at your fingertips</p>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2 mb-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === feature.id
                    ? "bg-[#2a1d1f] text-[#faf8f4]"
                    : "bg-white text-[#2a1d1f] border border-[#e8e5e0] hover:border-[#2a1d1f]"
                }`}
              >
                <HeidiIcon className={`w-5 h-5 ${activeTab === feature.id ? "text-[#faf8f4]" : "text-[#2a1d1f]"}`} />
                {feature.name}
              </button>
            );
          })}
        </div>

        {/* Feature Description */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-[#564841] mb-6">{activeFeature.description}</p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] transition-colors"
          >
            {activeFeature.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
