"use client";

import Link from "next/link";

export function VideoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#2a1d1f] mb-4">
          Stay present in the moments<br />that <em className="italic">matter</em> most
        </h2>
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] transition-colors"
        >
          Get Heidi free
        </Link>

        {/* Video Embed Placeholder */}
        <div className="mt-12 bg-[#2a1d1f] rounded-2xl aspect-video flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#88706a] text-sm mb-2">More videos on YouTube</p>
            <div className="bg-[#faf8f4] rounded-xl p-4 inline-block">
              <p className="font-serif text-lg text-[#2a1d1f]">Heidi for Nurses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
