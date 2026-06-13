"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Microscope, ClipboardList, HeartPulse, Syringe } from "lucide-react";

const platformItems = [
  { name: "Screening", description: "Identify allergy candidates quickly", icon: ClipboardList, href: "/our-services#screening" },
  { name: "Testing", description: "Precision allergy testing programs", icon: Microscope, href: "/our-services#testing" },
  { name: "Treatment", description: "Sublingual & subcutaneous options", icon: Syringe, href: "/our-services#treatment" },
  { name: "Immunity & Health", description: "Long-term patient wellness", icon: HeartPulse, href: "/our-services#immunity" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  const platformRef = useRef<HTMLDivElement>(null);
  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setPlatformOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    };
  }, []);

  const handlePlatformEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setPlatformOpen(true);
  };

  const handlePlatformLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setPlatformOpen(false);
    }, 150);
  };

  return (
    <>
      <div className="bg-[#f9f7a4] py-2 px-4 text-center">
        <Link href="/" className="text-sm text-[#2a1d1f] hover:underline">
          Nationwide Allergy — Bringing precision allergy testing &amp; treatment to Primary Care providers since 2013.
        </Link>
      </div>

      <header className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e5e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/na-icon.png"
                alt="Nationwide Allergy"
                style={{ height: "40px", width: "40px", objectFit: "contain" }}
              />
              <span className="font-serif font-semibold text-[#2a1d1f] text-lg leading-tight">Nationwide<br />Allergy</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <div
                className="relative"
                ref={platformRef}
                onMouseEnter={handlePlatformEnter}
                onMouseLeave={handlePlatformLeave}
              >
                <div className="flex items-center gap-0.5">
                  <Link
                    href="/our-services"
                    className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors py-2"
                  >
                    Our Services
                  </Link>
                  <button
                    className="flex items-center text-[#2a1d1f] hover:text-[#564841] transition-colors py-2 px-1"
                    onClick={() => setPlatformOpen(!platformOpen)}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${platformOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div
                  className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-[#e8e5e0] py-2 transition-all duration-200 origin-top ${
                    platformOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {platformItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-[#f5f3ef] transition-colors"
                        onClick={() => setPlatformOpen(false)}
                      >
                        <Icon className="w-5 h-5 text-[#564841] mt-0.5" />
                        <div>
                          <div className="font-medium text-[#2a1d1f]">{item.name}</div>
                          <div className="text-sm text-[#88706a]">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="/resources/lab-blood-tests" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Lab &amp; Blood Tests
              </Link>
              <Link href="/research" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Research
              </Link>
              <Link href="/faq" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                FAQ
              </Link>
            </nav>

            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="px-5 py-2 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#2a1d1f]" />
              ) : (
                <Menu className="w-6 h-6 text-[#2a1d1f]" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf8f4] border-t border-[#e8e5e0]">
            <nav className="px-4 py-4 flex flex-col gap-2">
              <div className="border-b border-[#e8e5e0] pb-3">
                <p className="text-xs font-semibold text-[#88706a] uppercase tracking-wide mb-2">Our Services</p>
                {platformItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 py-2 text-[#2a1d1f] hover:text-[#564841]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <Link href="/resources/lab-blood-tests" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>Lab &amp; Blood Tests</Link>
              <Link href="/research" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>Research</Link>
              <Link href="/faq" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>

              <div className="pt-4 border-t border-[#e8e5e0]">
                <Link
                  href="/contact"
                  className="block text-center px-4 py-2.5 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
