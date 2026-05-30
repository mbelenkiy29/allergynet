import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const perks = [
  "Turnkey setup — no equipment needed",
  "Expert support from our clinical team",
  "Flat-fee pricing, no long-term contracts",
  "Serving providers nationwide",
];

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left — value prop */}
          <div className="md:pt-4">
            <p className="text-sm font-medium text-[#88706a] uppercase tracking-widest mb-4">Get started</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[#2a1d1f] leading-tight mb-5">
              Bring precision allergy care to your practice.
            </h1>
            <p className="text-[#564841] leading-relaxed mb-8">
              Join hundreds of primary care providers across the country offering in-house allergy testing and treatment through the Nationwide Allergy program.
            </p>
            <ul className="space-y-3 mb-8">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#2a1d1f] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#564841]">{perk}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#88706a]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#2a1d1f] font-medium underline underline-offset-2 hover:text-[#564841]">
                Log in
              </Link>
            </p>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-[#e8e5e0] shadow-sm p-8 md:p-10">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-6">Create your account</h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="practice" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                  Practice name
                </label>
                <input
                  id="practice"
                  type="text"
                  placeholder="Smith Family Medicine"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@yourpractice.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#2a1d1f] mb-1.5">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] placeholder-[#b5a9a5] text-sm focus:outline-none focus:ring-2 focus:ring-[#2a1d1f]/20 focus:border-[#2a1d1f] transition"
                />
              </div>

              <div className="flex items-start gap-2.5 mt-1">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-[#e8e5e0] accent-[#2a1d1f]"
                />
                <label htmlFor="terms" className="text-sm text-[#564841]">
                  I agree to the{" "}
                  <Link href="#" className="text-[#2a1d1f] underline underline-offset-2 hover:text-[#564841]">Terms of Service</Link>
                  {" "}and{" "}
                  <Link href="#" className="text-[#2a1d1f] underline underline-offset-2 hover:text-[#564841]">Privacy Policy</Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] border border-[#2a1d1f] rounded-full hover:bg-[#f5f2a0] transition-colors mt-1"
              >
                Create account
              </button>

              <div className="relative my-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e8e5e0]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs text-[#88706a]">or sign up with</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-3 px-6 text-sm font-medium text-[#2a1d1f] bg-white border border-[#e8e5e0] rounded-full hover:bg-[#faf8f4] transition-colors flex items-center justify-center gap-2.5"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z" fill="#4285F4"/>
                  <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                  <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95819H0.957275C0.347727 6.17319 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                  <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
