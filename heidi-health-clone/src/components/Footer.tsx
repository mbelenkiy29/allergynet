"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


const footerSections = [
  {
    title: "Specialties",
    links: [
      { name: "Family Medicine", href: "/our-services" },
      { name: "Specialists", href: "/our-services" },
      { name: "Nurses", href: "/our-services" },
      { name: "Mental Health", href: "/contact" },
      { name: "Allied Health", href: "/our-services" },
      { name: "Dentists", href: "/contact" },
      { name: "Veterinarians", href: "/contact" },
      { name: "Trainees", href: "/sign-up" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { name: "Safety Research", href: "/research" },
      { name: "HIPAA", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Our Services", href: "/our-services" },
      { name: "Research", href: "/research" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "About Us",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "Sign Up", href: "/sign-up" },
      { name: "Log In", href: "/login" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Research Papers", href: "/research" },
      { name: "Our Services", href: "/our-services" },
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
