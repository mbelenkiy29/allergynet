"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

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


const labTests = [
  {
    name: "ImmunoCAP Specific IgE",
    description:
      "Quantitative blood test measuring IgE antibodies to hundreds of individual allergens — pollens, molds, pet dander, dust mites, foods, and stinging insects.",
  },
  {
    name: "Total Serum IgE",
    description:
      "Baseline measurement of overall IgE load. Useful for stratifying atopic risk and guiding immunotherapy dosing decisions.",
  },
  {
    name: "Complete Blood Count (CBC) with Differential",
    description:
      "Screens for eosinophilia, a key marker of allergic inflammation and parasitic triggers that can mimic allergy symptoms.",
  },
  {
    name: "Allergen Component Testing (CRD)",
    description:
      "Molecular-level analysis of specific protein components within an allergen source — distinguishes true sensitization from cross-reactivity.",
  },
  {
    name: "Food Allergy Panels",
    description:
      "Targeted or comprehensive IgE panels for common foods (peanut, tree nuts, milk, egg, wheat, soy, shellfish) using RAST or ImmunoCAP methodology.",
  },
  {
    name: "Drug Allergy / Beta-Lactam IgE",
    description:
      "Serologic testing for penicillin and amoxicillin-specific IgE to help evaluate drug hypersensitivity before de-labeling patients.",
  },
];

export default function LabBloodTestsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-sm font-medium text-[#88706a] uppercase tracking-wide mb-4">
              Resources · Lab & Blood Tests
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] mb-6">
              Lab & Blood Tests
            </h1>
            <p className="text-lg text-[#564841] max-w-2xl mx-auto mb-8">
              Understand the serologic tests that underpin precision allergy
              diagnosis — what each measures, why it matters, and how Nationwide
              Allergy uses them to build every patient's treatment plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
            >
              Talk to our clinical team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lab Test Descriptions */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-3">
              Tests we use and why
            </h2>
            <p className="text-[#564841] mb-10 max-w-xl">
              Every test is ordered purposefully — matched to the patient's
              symptom history, exposure profile, and treatment goals.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {labTests.map((test, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="p-6 bg-white rounded-2xl border border-[#e8e5e0] h-full hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl text-[#2a1d1f] mb-2">
                    {test.name}
                  </h3>
                  <p className="text-sm text-[#564841]">{test.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Duty of Care / Security Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-[#f5f3ef] rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4">
                Your duty of care, built in
              </h2>
              <p className="text-[#564841] mb-8 max-w-xl">
                We hold ourselves to the highest standard there is: the one you
                set when you care for patients.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#e8e5e0] transition-all hover:shadow-sm hover:border-[#2a1d1f]"
                  >
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-[#564841]">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
                >
                  Learn about our safety and protocols
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4">
              Ready to bring lab-grade allergy testing to your practice?
            </h2>
            <p className="text-[#564841] mb-8">
              Our clinical team will walk you through every test, every result,
              and every treatment option — at no cost to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sign-up"
                className="px-8 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full hover:bg-[#f0ee8a] transition-colors"
              >
                Start Today — It&apos;s Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
