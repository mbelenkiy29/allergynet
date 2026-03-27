"use client";

import Link from "next/link";
import { ArrowRight, Award, Building2 } from "lucide-react";

const HeidiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#f9f7a4" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="#f9f7a4" strokeWidth="2.5" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="#f9f7a4" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="#f9f7a4" strokeWidth="2.5" fill="none"/>
  </svg>
);

export function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4 md:mb-0">
            Chosen by hospitals and<br />healthcare systems for their<br />clinical workforce.
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-white border border-[#2a1d1f] rounded-full hover:bg-[#f5f3ef] transition-colors"
          >
            Explore Enterprise
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* KLAS Research Card */}
          <div className="bg-[#2a1d1f] rounded-2xl p-6 text-[#faf8f4] row-span-2">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#564841] rounded-full text-xs mb-4">
                <Award className="w-3 h-3" />
                KLAS Customer Rated
              </div>
            </div>
            <p className="text-lg mb-8">
              100% of customers surveyed by KLAS Research said they would purchase Heidi again
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#f9f7a4] hover:underline"
            >
              Read the report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MaineGeneral Quote */}
          <div className="bg-[#f9f7a4] rounded-2xl p-6 md:col-span-2">
            <p className="text-[#2a1d1f] mb-6">
              "We see Heidi as a partner helping us deliver measurable transformation to our organization, making us more resilient as we face the many challenges in our industry."
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm text-[#2a1d1f] hover:underline"
              >
                Read the report
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-[#564841]">
                Mark St. John, CIO,<br />MaineGeneral Health
              </p>
            </div>
          </div>

          {/* Jean Bishop Centre */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0]">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-[#2a1d1f]" />
              <span className="text-sm text-[#564841]">The Jean Bishop Centre</span>
            </div>
            <p className="font-serif text-2xl text-[#2a1d1f] mb-4">
              85% improvement in clinician wellbeing
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#2a1d1f] hover:underline"
            >
              Read the report
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* AI Approach Card */}
          <div className="bg-[#2a1d1f] rounded-2xl p-6">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#faf8f4] hover:underline mb-8"
            >
              Learn more
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="mb-4">
              <HeidiIcon />
            </div>
            <p className="text-[#faf8f4]">
              AI demands a new approach to purchasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
