"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, FileSearch, Lock, Check } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const badges = [
  "SOC 2",
  "GDPR",
  "Cyber Essentials Plus",
  "APP",
  "HIPAA",
  "NZ Info Privacy",
  "ISO 9001",
  "ISO 42001",
  "UK Conformity",
  "ISO 27001",
  "TX-RAMP",
  "DSGVO",
  "PIPEDA",
  "NHS",
  "PDPA",
];

const features = [
  {
    icon: ShieldCheck,
    title: "Validated in practice",
    description: "We test and iterate our models in real-world scenarios to ensure Heidi remains accurate, reliable and clinically sound.",
  },
  {
    icon: FileSearch,
    title: "Deep clinical review",
    description: "Our medical team reviews and refines outputs — adding the reliability automation alone cant provide.",
  },
  {
    icon: Lock,
    title: "Privacy, without shortcuts",
    description: "Our systems are built to the highest global standards, keeping every patient record secure, private, and protected.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="bg-[#f5f3ef] rounded-3xl p-8 md:p-12">
            {/* Header */}
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4">
              Your duty of care, built in
            </h2>
            <p className="text-[#564841] mb-8 max-w-xl">
              We hold ourselves to the highest standard there is: the one you set when you care for patients.
            </p>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#e8e5e0] transition-all hover:shadow-sm hover:border-[#2a1d1f]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-[#564841]">{badge}</span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors mb-12"
            >
              Learn about Heidi's safety and security
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="p-6 bg-white rounded-2xl border border-[#e8e5e0] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <feature.icon className="w-8 h-8 text-[#2a1d1f] mb-4" />
                    <h3 className="font-serif text-lg text-[#2a1d1f] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[#564841]">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
