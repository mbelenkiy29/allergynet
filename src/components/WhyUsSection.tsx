"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] mb-4">
          1 in 5 of Your Patients Is Suffering.<br />You Can Change That.
        </h2>
        <p className="text-lg text-[#564841] mb-8">
          OTC medications only mask symptoms — often with significant side effects and no end in sight. Allergen immunotherapy is the only treatment proven to resolve the allergy itself, and your practice can start offering it today.
        </p>
        <Link
          href="/our-services"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
        >
          See how it works
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-5xl mx-auto mt-12 px-4">
        <div className="relative bg-gradient-to-b from-[#2a1d1f] to-[#564841] rounded-3xl p-8 overflow-hidden">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center max-w-lg">
              <p className="text-[#c5beb8] text-sm mb-4 uppercase tracking-wide">Better Immunity, Better Health</p>
              <h3 className="font-serif text-4xl md:text-6xl text-[#faf8f4] italic mb-6">For Life</h3>
              <p className="text-[#c5beb8] text-sm leading-relaxed">
                When the immune system's resources are needlessly used to fight allergens, overall health can be negatively impacted. Precision allergy testing and customized treatment could help your patients say goodbye to allergies for good.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80">
            <div className="bg-[#564841] h-16 rounded-t-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
