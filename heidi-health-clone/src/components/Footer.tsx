"use client";

import Link from "next/link";
const footerSections = [
  {
    title: "Specialties",
    links: [
      { name: "Family Medicine", href: "/our-services" },
      { name: "Internal Medicine", href: "/our-services" },
      { name: "Pediatrics", href: "/our-services" },
      { name: "Nurse Practitioners", href: "/our-services" },
      { name: "Physician Assistants", href: "/our-services" },
      { name: "Urgent Care", href: "/our-services" },
      { name: "ENT / Otolaryngology", href: "/our-services" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { name: "HIPAA", href: "/resources/lab-blood-tests" },
      { name: "CLIA Certified", href: "/resources/lab-blood-tests" },
      { name: "COLA Certified", href: "/resources/lab-blood-tests" },
      { name: "SOC 2", href: "/resources/lab-blood-tests" },
      { name: "ISO 27001", href: "/resources/lab-blood-tests" },
      { name: "ISO 9001", href: "/resources/lab-blood-tests" },
      { name: "TX-RAMP", href: "/resources/lab-blood-tests" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Screening", href: "/our-services#screening" },
      { name: "Testing", href: "/our-services#testing" },
      { name: "Treatment", href: "/our-services#treatment" },
      { name: "Immunity & Health", href: "/our-services#immunity" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Why Us", href: "/#why-us" },
      { name: "Research", href: "/research" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Lab & Blood Tests", href: "/resources/lab-blood-tests" },
      { name: "FAQ", href: "/faq" },
      { name: "Research", href: "/research" },
      { name: "Guides", href: "/our-services" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
    ],
  },
];


export function Footer({ showAll = false }: { showAll?: boolean }) {
  const sections = showAll
    ? footerSections
    : footerSections.filter((s) => s.title !== "Specialties" && s.title !== "Compliance");

  return (
    <footer className="bg-[#f5f3ef] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left Side */}
          <div className="lg:w-1/4">
            <p className="text-sm text-[#564841] mb-2">Nationwide Allergy. By your side.</p>
            <p className="text-xs text-[#88706a]">© 2026 Nationwide Allergy. All rights reserved.</p>

            {/* Logo */}
            <div className="mt-8">
              <Link href="/" className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/na-icon.png"
                  alt="Nationwide Allergy"
                  style={{ height: "40px", width: "40px", objectFit: "contain" }}
                />
                <span className="font-serif font-semibold text-[#2a1d1f] text-lg leading-tight">Nationwide<br />Allergy</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Links Grid */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-[#2a1d1f] mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#564841] hover:text-[#2a1d1f] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
