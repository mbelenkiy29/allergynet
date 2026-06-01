"use client";

import Link from "next/link";
import { ArrowRight, Award, HeartPulse } from "lucide-react";

const AllergyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="16" stroke="#f9f7a4" strokeWidth="2.5" fill="none"/>
    <path d="M20 4 L20 36 M4 20 L36 20" stroke="#f9f7a4" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export function EnterpriseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4 md:mb-0">
            Chosen by Primary Care providers<br />for their patients<br />nationwide.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-white border border-[#2a1d1f] rounded-full hover:bg-[#f5f3ef] transition-colors"
          >
            Talk to Our Team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-[#2a1d1f] rounded-2xl p-6 text-[#faf8f4] row-span-2">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#564841] rounded-full text-xs mb-4">
                <Award className="w-3 h-3" />
                Trusted Since 2013
              </div>
            </div>
            <p className="text-lg mb-8">
              Simple flat-fee pricing with no fee-splitting and no complicated MSO arrangements — ever.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-[#f9f7a4] hover:underline"
            >
              Get started — no contracts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-[#f9f7a4] rounded-2xl p-6 md:col-span-2">
            <p className="text-[#2a1d1f] mb-6">
              "There are now treatments available that have been specifically designed to resolve the allergy itself — not just mask the symptoms. Nationwide Allergy makes it possible for Primary Care to deliver these solutions."
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/our-services"
                className="inline-flex items-center gap-2 text-sm text-[#2a1d1f] hover:underline"
              >
                Learn about our approach
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-[#564841]">
                Nationwide Allergy<br />Clinical Team
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e8e5e0]">
            <div className="flex items-center gap-2 mb-4">
              <HeartPulse className="w-5 h-5 text-[#2a1d1f]" />
              <span className="text-sm text-[#564841]">Better Immunity, Better Health</span>
            </div>
            <p className="font-serif text-2xl text-[#2a1d1f] mb-4">
              Say goodbye to allergies — for life
            </p>
          </div>

          <div className="bg-[#2a1d1f] rounded-2xl p-6">
            <div className="mb-4">
              <AllergyIcon />
            </div>
            <p className="text-[#faf8f4]">
              Precision allergy testing demands a complete, expert-backed program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
