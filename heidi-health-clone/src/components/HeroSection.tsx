"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Syringe, HeartPulse, Microscope, ClipboardCheck, Loader2, Sparkles } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const AllergyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <path d="M20 4 L20 36 M4 20 L36 20" stroke="#2a1d1f" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const features = ["Screening", "Testing", "Treatment"];
const featureDescriptions: Record<string, string> = {
  "Screening": "Identify allergy candidates right in the waiting room",
  "Testing": "Custom-tailored precision allergy testing for your patients",
  "Treatment": "Sublingual & subcutaneous treatments that resolve the allergy itself",
};

const sampleQueries = [
  "What are common signs a patient needs allergy testing?",
  "What is the difference between sublingual and subcutaneous treatment?",
  "How does skin-prick allergy testing work?",
  "What allergens can be tested in a primary care setting?",
];

const sampleResponses: Record<string, string> = {
  "What are common signs a patient needs allergy testing?": "Key indicators for allergy testing referral: Persistent nasal congestion, sneezing, or itchy eyes that OTC medications fail to control. Recurrent sinus infections (3+ per year). Asthma triggered by environmental factors. Unexplained chronic skin rashes or eczema. Seasonal symptom patterns. Food-related reactions. Starting an allergy program in the waiting room with a simple screening tool can efficiently identify candidates.",
  "What is the difference between sublingual and subcutaneous treatment?": "Subcutaneous immunotherapy (SCIT): Traditional 'allergy shots' — allergen injected under the skin. Requires office visits. Highly effective. Sublingual immunotherapy (SLIT): Allergen drops or tablets placed under the tongue. Can often be self-administered at home. Growing evidence base. Both aim to desensitize the immune system over time, reducing symptoms and potentially resolving the allergy itself. Nationwide Allergy offers guidance on both approaches for your practice.",
  "How does skin-prick allergy testing work?": "Skin-prick (percutaneous) testing: Small amounts of allergen extracts are placed on the forearm or back. A lancet is used to lightly prick through each drop. A positive result is a wheal-and-flare reaction at the prick site within 15–20 minutes. It is the most common first-line allergy test, is well-tolerated, and provides results quickly. Nationwide Allergy helps offices select and implement the right testing protocol for their patient population.",
  "What allergens can be tested in a primary care setting?": "Primary care offices can typically test for: Environmental allergens (dust mites, pet dander, mold, pollen — trees, grasses, weeds). Food allergens (peanuts, tree nuts, milk, eggs, wheat, soy, shellfish). Insect venom. Nationwide Allergy provides a full turnkey program including training, billing setup, and testing supplies to make this process seamless.",
};

export function HeroSection() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [searchQuery, setSearchQuery] = useState(sampleQueries[0]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setShowResult(false);
    setSearchResult(null);
    setTimeout(() => {
      const response =
        sampleResponses[searchQuery] ||
        "Nationwide Allergy's expert team is here to help guide you through every step — from patient screening to treatment. Sign up today and start providing the highest quality allergy solutions for your patients.";
      setSearchResult(response);
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  const handleQuickQuery = (query: string) => {
    setSearchQuery(query);
    setShowResult(false);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection animation="scale-up" className="flex justify-center mb-8">
          <AllergyIcon />
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex items-center justify-center gap-4 mb-6">
            {features.map((feature, index) => (
              <span
                key={feature}
                className={`font-serif text-4xl md:text-6xl transition-all duration-500 cursor-pointer ${
                  index === activeFeature
                    ? "text-[#2a1d1f] scale-100"
                    : "text-[#c5beb8] scale-95 italic"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {feature}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-lg text-[#564841] mb-8 transition-all duration-300">
            {featureDescriptions[features[activeFeature]]}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={300}>
          <div className="max-w-xl mx-auto mb-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                {isSearching ? (
                  <Loader2 className="w-5 h-5 text-[#88706a] animate-spin" />
                ) : (
                  <Search className="w-5 h-5 text-[#88706a]" />
                )}
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResult(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Ask an allergy question..."
                className="w-full pl-12 pr-12 py-4 bg-white border border-[#e8e5e0] rounded-xl text-[#2a1d1f] placeholder-[#88706a] focus:outline-none focus:border-[#2a1d1f] focus:ring-1 focus:ring-[#2a1d1f] transition-all"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f9f7a4] rounded-lg flex items-center justify-center hover:bg-[#f5f2a0] transition-colors disabled:opacity-50"
                aria-label="Submit"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 8h8m0 0L8 4m4 4l-4 4" stroke="#2a1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {showResult && searchResult && (
            <div className="max-w-xl mx-auto mb-6 animate-fade-in">
              <div className="bg-white border border-[#e8e5e0] rounded-xl p-4 text-left shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#f9f7a4]" />
                  <span className="text-xs font-medium text-[#88706a]">Nationwide Allergy Guide</span>
                </div>
                <p className="text-sm text-[#2a1d1f] leading-relaxed">{searchResult}</p>
                <div className="mt-3 pt-3 border-t border-[#e8e5e0] flex items-center justify-between">
                  <span className="text-xs text-[#88706a]">Based on clinical best practices</span>
                  <button className="text-xs text-[#2a1d1f] font-medium hover:underline">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          )}

          {!showResult && (
            <div className="max-w-xl mx-auto mb-6">
              <p className="text-xs text-[#88706a] mb-2">Try asking:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {sampleQueries.slice(1).map((query) => (
                  <button
                    key={query}
                    onClick={() => handleQuickQuery(query)}
                    className="px-3 py-1.5 text-xs bg-white border border-[#e8e5e0] rounded-full text-[#564841] hover:border-[#2a1d1f] transition-colors truncate max-w-[220px]"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <ClipboardCheck className="w-4 h-4" />
              Screen
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <Microscope className="w-4 h-4" />
              Test
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <Syringe className="w-4 h-4" />
              Treat
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <HeartPulse className="w-4 h-4" />
              Immunize
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <Search className="w-4 h-4" />
              Look up
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] hover:shadow-md transition-all"
            >
              Sign Up Today
            </Link>
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] hover:shadow-md transition-all"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
