"use client";

import { Microscope, HeartPulse, ClipboardList, Syringe, ShieldCheck, MapPin } from "lucide-react";

const partners = [
  "Primary Care Providers",
  "Family Medicine",
  "Internal Medicine",
  "Pediatric Practices",
  "ENT Specialists",
  "Urgent Care Centers",
];

const serviceIconComponents = [Microscope, HeartPulse, ClipboardList, Syringe, ShieldCheck, MapPin];

export function PartnersMarquee() {
  return (
    <section className="py-8 border-y border-[#e8e5e0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
          <span className="text-sm text-[#564841]">Serving practices nationwide:</span>
          <div className="flex items-center gap-3">
            {serviceIconComponents.map((Icon, index) => (
              <Icon
                key={index}
                className="w-5 h-5 text-[#88706a] hover:text-[#2a1d1f] transition-colors cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
              <span
                key={index}
                className="mx-8 text-lg font-medium text-[#88706a] hover:text-[#2a1d1f] transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
