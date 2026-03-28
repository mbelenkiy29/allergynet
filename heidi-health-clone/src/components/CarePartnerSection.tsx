"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

const programFeatures = [
  "Step-by-step training of your staff",
  "Complete allergy billing and coding setup",
  "No fee-splitting and no complicated MSO arrangements",
  "Office documents and forms included",
  "Simple flat-fee pricing",
  "No long-term contracts",
];

export function CarePartnerSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a1d1f] leading-tight mb-6">
              A complete turnkey program for your practice
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] transition-colors"
              >
                Sign Up Today
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-[#2a1d1f] bg-white rounded-full border border-[#2a1d1f] hover:bg-[#f5f3ef] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div>
            <p className="text-lg text-[#564841] leading-relaxed mb-6">
              Nationwide Allergy formed in 2013 with the mission of bringing the highest quality Allergy Testing and Treatment to Primary Care providers in the simplest and most cost-effective way.
            </p>
            <ul className="space-y-3">
              {programFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2a1d1f] mt-0.5 flex-shrink-0" />
                  <span className="text-[#564841] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
