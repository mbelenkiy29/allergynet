"use client";

import Link from "next/link";

export function CarePartnerSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f4]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a1d1f] leading-tight mb-6">
              A care partner for the full clinical day
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] transition-colors"
              >
                Get Heidi free
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-medium text-[#2a1d1f] bg-white rounded-full border border-[#2a1d1f] hover:bg-[#f5f3ef] transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-lg text-[#564841] leading-relaxed">
              Heidi supports clinicians across the day from documentation to decisions and follow-up without adding burden. What began with notes now supports the work that surrounds them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
