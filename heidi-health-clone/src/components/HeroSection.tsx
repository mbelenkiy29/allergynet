"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, FlaskConical, Pill, FileText, ArrowLeftRight, Loader2, Sparkles } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const HeidiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
  </svg>
);

const features = ["Scribe", "Evidence", "Comms"];
const featureDescriptions: Record<string, string> = {
  "Scribe": "AI-powered clinical documentation",
  "Evidence": "Independent, unlimited clinical answers",
  "Comms": "Patient communication tools",
};

const sampleQueries = [
  "What should a patient know before starting a statin?",
  "What are the contraindications for metformin?",
  "How to manage acute migraine in pregnancy?",
  "First-line treatment for hypertension in diabetics?",
];

const sampleResponses: Record<string, string> = {
  "What should a patient know before starting a statin?": "Key points for patients starting statins: Take at the same time daily (evening preferred for some statins). Report muscle pain, weakness, or dark urine immediately. Avoid grapefruit with certain statins. Continue lifestyle modifications. Regular liver function monitoring may be needed.",
  "What are the contraindications for metformin?": "Metformin contraindications include: Severe renal impairment (eGFR <30), acute or chronic metabolic acidosis, history of lactic acidosis. Use caution with hepatic impairment, excessive alcohol use, and temporarily discontinue before contrast procedures.",
  "How to manage acute migraine in pregnancy?": "First-line: Acetaminophen (paracetamol). If inadequate: Metoclopramide for nausea. NSAIDs may be used in 2nd trimester only. Triptans: Limited data but may be considered. Avoid ergotamines. Non-pharmacological: Rest in dark room, cold compress, hydration.",
  "First-line treatment for hypertension in diabetics?": "ACE inhibitors or ARBs are first-line for hypertension in diabetics due to renal protective effects. Target BP: <130/80 mmHg. If additional therapy needed, consider calcium channel blockers or thiazide diuretics. Avoid beta-blockers as first-line.",
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

    // Simulate API call
    setTimeout(() => {
      const response = sampleResponses[searchQuery] ||
        "Heidi is searching through clinical guidelines and peer-reviewed research to provide you with an evidence-based answer. In production, this would connect to our AI-powered clinical knowledge base.";
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
        {/* Heidi Logo Icon */}
        <AnimatedSection animation="scale-up" className="flex justify-center mb-8">
          <HeidiIcon />
        </AnimatedSection>

        {/* Animated Feature Text */}
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

        {/* Description */}
        <AnimatedSection animation="fade-up" delay={200}>
          <p className="text-lg text-[#564841] mb-8 transition-all duration-300">
            {featureDescriptions[features[activeFeature]]}
          </p>
        </AnimatedSection>

        {/* Search Input */}
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
                placeholder="Ask a clinical question..."
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

          {/* Search Result */}
          {showResult && searchResult && (
            <div className="max-w-xl mx-auto mb-6 animate-fade-in">
              <div className="bg-white border border-[#e8e5e0] rounded-xl p-4 text-left shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#f9f7a4]" />
                  <span className="text-xs font-medium text-[#88706a]">Heidi Evidence</span>
                </div>
                <p className="text-sm text-[#2a1d1f] leading-relaxed">{searchResult}</p>
                <div className="mt-3 pt-3 border-t border-[#e8e5e0] flex items-center justify-between">
                  <span className="text-xs text-[#88706a]">Based on clinical guidelines</span>
                  <button className="text-xs text-[#2a1d1f] font-medium hover:underline">
                    View sources
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Quick Query Suggestions */}
          {!showResult && (
            <div className="max-w-xl mx-auto mb-6">
              <p className="text-xs text-[#88706a] mb-2">Try asking:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {sampleQueries.slice(1).map((query) => (
                  <button
                    key={query}
                    onClick={() => handleQuickQuery(query)}
                    className="px-3 py-1.5 text-xs bg-white border border-[#e8e5e0] rounded-full text-[#564841] hover:border-[#2a1d1f] transition-colors truncate max-w-[200px]"
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          )}
        </AnimatedSection>

        {/* Action Pills */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <Search className="w-4 h-4" />
              Look up
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <FlaskConical className="w-4 h-4" />
              Research
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <Pill className="w-4 h-4" />
              Treat
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <FileText className="w-4 h-4" />
              Explain
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e8e5e0] rounded-full text-sm text-[#2a1d1f] hover:border-[#2a1d1f] hover:shadow-sm transition-all">
              <ArrowLeftRight className="w-4 h-4" />
              Compare
            </button>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] hover:shadow-md transition-all"
            >
              Get Heidi free
            </Link>
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] hover:shadow-md transition-all"
            >
              Chat with us
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
