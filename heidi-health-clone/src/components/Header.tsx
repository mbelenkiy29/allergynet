"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Microscope, ClipboardList, HeartPulse, Syringe, HelpCircle, Newspaper, BookOpen, Users, Phone } from "lucide-react";

const platformItems = [
  { name: "Screening", description: "Identify allergy candidates quickly", icon: ClipboardList, href: "/our-services#screening" },
  { name: "Testing", description: "Precision allergy testing programs", icon: Microscope, href: "/our-services#testing" },
  { name: "Treatment", description: "Sublingual & subcutaneous options", icon: Syringe, href: "/our-services#treatment" },
  { name: "Immunity & Health", description: "Long-term patient wellness", icon: HeartPulse, href: "/our-services#immunity" },
];

const resourceItems = [
  { name: "FAQ", description: "Common questions answered", icon: HelpCircle, href: "https://www.nationwideallergy.net/faq", external: true },
  { name: "Blog", description: "Latest updates & insights", icon: Newspaper, href: "https://www.nationwideallergy.net/blog", external: true },
  { name: "Guides", description: "Learn about our process", icon: BookOpen, href: "/our-services", external: false },
  { name: "Community", description: "Connect with providers", icon: Users, href: "https://www.nationwideallergy.net", external: true },
  { name: "Contact Us", description: "Speak with our team", icon: Phone, href: "/#contact", external: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const platformRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (platformRef.current && !platformRef.current.contains(event.target as Node)) {
        setPlatformOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
      if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    };
  }, []);

  const handlePlatformEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    setResourcesOpen(false);
    setPlatformOpen(true);
  };

  const handlePlatformLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setPlatformOpen(false);
    }, 150);
  };

  const handleResourcesEnter = () => {
    if (resourcesTimeoutRef.current) clearTimeout(resourcesTimeoutRef.current);
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setPlatformOpen(false);
    setResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
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
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/na-logo-v2.png"
                alt="Nationwide Allergy"
                style={{ height: "36px", width: "auto" }}
              />
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
                    onClick={() => {
                      setPlatformOpen(!platformOpen);
                      setResourcesOpen(false);
                    }}
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

              <div
                className="relative"
                ref={resourcesRef}
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors py-2"
                  onClick={() => {
                    setResourcesOpen(!resourcesOpen);
                    setPlatformOpen(false);
                  }}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-[#e8e5e0] py-2 transition-all duration-200 origin-top ${
                    resourcesOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {resourceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-[#f5f3ef] transition-colors"
                        onClick={() => setResourcesOpen(false)}
                        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

              <Link href="/#why-us" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Why Us
              </Link>
              <Link href="/#pricing" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Pricing
              </Link>
              <Link href="/#contact" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
              >
                Sign Up Today
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

              <div className="border-b border-[#e8e5e0] pb-3">
                <p className="text-xs font-semibold text-[#88706a] uppercase tracking-wide mb-2">Resources</p>
                {resourceItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 py-2 text-[#2a1d1f] hover:text-[#564841]"
                      onClick={() => setMobileMenuOpen(false)}
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <Link href="/#why-us" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>Why Us</Link>
              <Link href="/#pricing" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/#contact" className="py-2 text-[#2a1d1f] hover:text-[#564841]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

              <div className="flex gap-3 pt-4 border-t border-[#e8e5e0]">
                <Link href="/login" className="text-[#2a1d1f]" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up Today
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
