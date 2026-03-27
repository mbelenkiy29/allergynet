"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const HeidiIcon = () => (
  <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="12" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="12" cy="28" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
    <circle cx="28" cy="28" r="8" stroke="#2a1d1f" strokeWidth="2.5" fill="none"/>
  </svg>
);

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection animation="scale-up">
          <div className="relative bg-[#f9f7a4] rounded-3xl p-12 md:p-20 overflow-hidden">
            {/* Decorative Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <svg
                className="absolute -bottom-20 -left-20 w-64 h-64 text-[#2a1d1f] opacity-10"
                viewBox="0 0 200 200"
              >
                <path
                  d="M100 0C155.228 0 200 44.772 200 100C200 155.228 155.228 200 100 200C44.772 200 0 155.228 0 100C0 44.772 44.772 0 100 0ZM100 40C66.863 40 40 66.863 40 100C40 133.137 66.863 160 100 160C133.137 160 160 133.137 160 100C160 66.863 133.137 40 100 40Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="absolute -bottom-10 -right-10 w-48 h-48 text-[#2a1d1f] opacity-10"
                viewBox="0 0 200 200"
              >
                <path
                  d="M100 0C155.228 0 200 44.772 200 100C200 155.228 155.228 200 100 200C44.772 200 0 155.228 0 100C0 44.772 44.772 0 100 0Z"
                  fill="currentColor"
                />
              </svg>
              <svg
                className="absolute top-10 right-20 w-32 h-32 text-[#2a1d1f] opacity-10"
                viewBox="0 0 200 200"
              >
                <path
                  d="M100 0C155.228 0 200 44.772 200 100C200 155.228 155.228 200 100 200C44.772 200 0 155.228 0 100C0 44.772 44.772 0 100 0ZM100 40C66.863 40 40 66.863 40 100C40 133.137 66.863 160 100 160C133.137 160 160 133.137 160 100C160 66.863 133.137 40 100 40Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="relative text-center">
              <div className="flex justify-center mb-6">
                <HeidiIcon />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] mb-8">
                Feel the difference of<br />Heidi by your side.
              </h2>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4" />
                Get Heidi free
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
