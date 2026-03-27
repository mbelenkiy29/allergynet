"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, FileText, Search, MessageSquare, Stethoscope, Users, Brain, BookOpen, HelpCircle, Newspaper } from "lucide-react";

const HeidiLogo = () => (
  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="#2a1d1f" strokeWidth="3" fill="none"/>
  </svg>
);

const platformItems = [
  { name: "Evidence", description: "Clinical answers instantly", icon: Search, href: "#" },
  { name: "Scribe", description: "AI documentation", icon: FileText, href: "#" },
  { name: "Comms", description: "Patient communication", icon: MessageSquare, href: "#" },
  { name: "Remote", description: "AI hardware", icon: Stethoscope, href: "#" },
];

const resourceItems = [
  { name: "Blog", description: "Latest updates & insights", icon: Newspaper, href: "#" },
  { name: "Help Centre", description: "Get support", icon: HelpCircle, href: "#" },
  { name: "Guides", description: "Learn how to use Heidi", icon: BookOpen, href: "#" },
  { name: "Community", description: "Join the conversation", icon: Users, href: "#" },
  { name: "Research", description: "Clinical studies", icon: Brain, href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const platformRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Timeout refs for hover delay
  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns when clicking outside
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

  // Cleanup timeouts on unmount
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
      {/* Announcement Banner */}
      <div className="bg-[#f9f7a4] py-2 px-4 text-center">
        <Link
          href="#"
          className="text-sm text-[#2a1d1f] hover:underline"
        >
          A New Era for US Healthcare: Heidi and R1 RCM Unite in Landmark Revenue Cycle Management Partnership.
        </Link>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-[#faf8f4] border-b border-[#e8e5e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <HeidiLogo />
              <span className="font-serif text-2xl font-semibold text-[#2a1d1f]">Heidi</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Platform Dropdown */}
              <div
                className="relative"
                ref={platformRef}
                onMouseEnter={handlePlatformEnter}
                onMouseLeave={handlePlatformLeave}
              >
                <button
                  className="flex items-center gap-1 text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors py-2"
                  onClick={() => {
                    setPlatformOpen(!platformOpen);
                    setResourcesOpen(false);
                  }}
                >
                  Platform
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${platformOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-[#e8e5e0] py-2 transition-all duration-200 origin-top ${
                    platformOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
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

              {/* Resources Dropdown */}
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
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-lg border border-[#e8e5e0] py-2 transition-all duration-200 origin-top ${
                    resourcesOpen
                      ? 'opacity-100 scale-100 translate-y-0'
                      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
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

              <Link href="#" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Enterprise
              </Link>
              <Link href="#" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Pricing
              </Link>
              <Link href="#" className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors">
                Chat with us
              </Link>
              <div className="flex items-center gap-1 text-sm text-[#2a1d1f]">
                <span className="text-base">🇺🇸</span>
                US
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="#"
                className="text-sm text-[#2a1d1f] hover:text-[#564841] transition-colors"
              >
                Log in
              </Link>
              <Link
                href="#"
                className="px-4 py-2 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
              >
                Get Heidi free
              </Link>
            </div>

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#faf8f4] border-t border-[#e8e5e0]">
            <nav className="px-4 py-4 flex flex-col gap-2">
              {/* Mobile Platform Section */}
              <div className="border-b border-[#e8e5e0] pb-3">
                <p className="text-xs font-semibold text-[#88706a] uppercase tracking-wide mb-2">Platform</p>
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

              {/* Mobile Resources Section */}
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
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <Link href="#" className="py-2 text-[#2a1d1f] hover:text-[#564841]">Enterprise</Link>
              <Link href="#" className="py-2 text-[#2a1d1f] hover:text-[#564841]">Pricing</Link>
              <Link href="#" className="py-2 text-[#2a1d1f] hover:text-[#564841]">Chat with us</Link>

              <div className="flex gap-3 pt-4 border-t border-[#e8e5e0]">
                <Link href="#" className="text-[#2a1d1f]">Log in</Link>
                <Link
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full"
                >
                  Get Heidi free
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
