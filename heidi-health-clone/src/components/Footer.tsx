"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const HeidiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
  </svg>
);

const footerSections = [
  {
    title: "Specialties",
    links: [
      { name: "Family Medicine", href: "#" },
      { name: "Specialists", href: "#" },
      { name: "Nurses", href: "#" },
      { name: "Mental Health", href: "#" },
      { name: "Allied Health", href: "#" },
      { name: "Dentists", href: "#" },
      { name: "Veterinarians", href: "#" },
      { name: "Trainees", href: "#" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { name: "Safety", href: "#" },
      { name: "Trust Center", href: "#" },
      { name: "AU/NZ", href: "#" },
      { name: "Canada", href: "#" },
      { name: "UK", href: "#" },
      { name: "GDPR", href: "#" },
      { name: "HIPAA", href: "#" },
    ],
  },
  {
    title: "Product",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Downloads", href: "#" },
      { name: "Heidi Guides", href: "#" },
      { name: "Help Centre", href: "#" },
      { name: "System Status", href: "#" },
      { name: "System Requirements", href: "#" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Company", href: "#" },
      { name: "Customer Stories", href: "#" },
      { name: "Media", href: "#" },
      { name: "Open Roles", href: "#" },
      { name: "People", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "ROI Calculator", href: "#" },
      { name: "Resource Centre", href: "#" },
      { name: "Template Community", href: "#" },
      { name: "FAQs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Usage Policy", href: "#" },
      { name: "UKGDPR Policy", href: "#" },
      { name: "Accessibility", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "X", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f3ef] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left Side */}
          <div className="lg:w-1/4">
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2a1d1f] hover:bg-[#564841] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-[#faf8f4]" />
                  </Link>
                );
              })}
            </div>
            <p className="text-sm text-[#564841] mb-2">Heidi. By your side.</p>
            <p className="text-xs text-[#88706a]">© 2026 Heidi. All rights reserved.</p>

            {/* Logo */}
            <div className="mt-8">
              <Link href="/" className="flex items-center gap-2">
                <HeidiLogo />
                <span className="font-serif text-xl font-semibold text-[#2a1d1f]">Heidi</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Links Grid */}
          <div className="lg:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerSections.map((section) => (
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
