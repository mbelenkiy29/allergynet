"use client";

import { useState } from "react";
import Link from "next/link";
import { ClipboardList, Microscope, HeartPulse, Syringe } from "lucide-react";

const AllergyIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M20 4 L20 36 M4 20 L36 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const features = [
  {
    id: "screening",
    name: "Screening",
    icon: ClipboardList,
    description: "An effective allergy program starts in the waiting room. Our simple screening protocol quickly identifies patients with significant allergy symptoms where OTC medications have failed — so your team can focus on the patients who need you most.",
    cta: "Explore Screening",
    bgColor: "from-sky-300 to-sky-100",
  },
  {
    id: "testing",
    name: "Testing",
    icon: Microscope,
    description: "Nationwide Allergy helps your office choose the best possible testing program for you and your patients. Our team of experts guides you from beginning to end, designing a custom-tailored program that fits your practice's unique needs.",
    cta: "Explore Testing",
    bgColor: "from-amber-200 to-amber-100",
  },
  {
    id: "results",
    name: "Results",
    icon: HeartPulse,
    description: "Quality and service are our #1 priorities. Our innovative treatment program is designed with the patient and prescriber in mind to maximize simplicity and patient success — delivering measurable outcomes your patients will feel.",
    cta: "Explore Results",
    bgColor: "from-emerald-200 to-emerald-100",
  },
  {
    id: "treatment",
    name: "Treatment",
    icon: Syringe,
    description: "Many treatment options exist to help your patients. Ask us about sublingual treatments in addition to traditional subcutaneous options. Our experts will walk you through the best fit for you, your team, and your patient population.",
    cta: "Explore Treatment",
    bgColor: "from-rose-200 to-rose-100",
  },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("screening");

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] text-center mb-12">
          Precision allergy testing, excellent results
        </h2>

        <div className={`relative mb-8 rounded-3xl overflow-hidden bg-gradient-to-b ${activeFeature.bgColor}`}>
          <div className="aspect-[16/9] flex items-center justify-center p-8">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <ActiveIcon className="w-16 h-16 mx-auto mb-4 text-[#2a1d1f]" />
              <h3 className="text-2xl font-serif text-[#2a1d1f] mb-2">{activeFeature.name}</h3>
              <p className="text-[#564841] max-w-md">Nationwide Allergy — a complete turnkey program</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === feature.id
                  ? "bg-[#2a1d1f] text-[#faf8f4]"
                  : "bg-white text-[#2a1d1f] border border-[#e8e5e0] hover:border-[#2a1d1f]"
              }`}
            >
              <AllergyIcon className={`w-5 h-5 ${activeTab === feature.id ? "text-[#faf8f4]" : "text-[#2a1d1f]"}`} />
              {feature.name}
            </button>
          ))}
        </div>

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
