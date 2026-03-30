"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practiceName: "",
    role: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e8e5e0] rounded-full text-xs font-medium text-[#564841] mb-6">
            <Mail className="w-3.5 h-3.5" />
            Get in touch
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[#564841] leading-relaxed">
            Interested in bringing allergy testing and immunotherapy to your practice? Reach out and a member of our team will be in touch shortly.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-2xl text-[#2a1d1f] mb-6">How we can help</h2>
              <p className="text-sm text-[#564841] leading-relaxed mb-4">
                Whether you're a practice looking to add allergy services, or an existing partner with a question, we're here to help.
              </p>
              <p className="text-sm text-[#564841] leading-relaxed">
                Our team typically responds within one business day.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e8e5e0] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#2a1d1f]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#88706a] uppercase tracking-widest mb-0.5">Phone</p>
                  <a href="tel:18009011522" className="text-sm text-[#2a1d1f] hover:text-[#564841]">
                    1-800-901-1522
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e8e5e0] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#2a1d1f]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#88706a] uppercase tracking-widest mb-0.5">Email</p>
                  <a href="mailto:info@nationwideallergy.com" className="text-sm text-[#2a1d1f] hover:text-[#564841]">
                    info@nationwideallergy.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e8e5e0] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#2a1d1f]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#88706a] uppercase tracking-widest mb-0.5">Location</p>
                  <p className="text-sm text-[#2a1d1f]">United States — Nationwide</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8e5e0]">
              <p className="text-xs text-[#88706a] mb-3">Have a quick question?</p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2a1d1f] underline underline-offset-4 hover:text-[#564841]"
              >
                View our FAQ →
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-3xl border border-[#e8e5e0] px-8">
                <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="font-serif text-2xl text-[#2a1d1f] mb-2">Message received!</h3>
                <p className="text-[#564841] text-sm mb-6">
                  Thanks for reaching out. A member of our team will get back to you within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", practiceName: "", role: "", message: "" }); }}
                  className="px-5 py-2.5 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] border border-[#2a1d1f] rounded-full hover:bg-[#f5f2a0] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#e8e5e0] p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#564841] mb-1.5">First name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#564841] mb-1.5">Last name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#564841] mb-1.5">Email <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@mypractice.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#564841] mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#564841] mb-1.5">Practice name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    name="practiceName"
                    required
                    value={form.practiceName}
                    onChange={handleChange}
                    placeholder="Smith Family Medicine"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#564841] mb-1.5">Your role</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm focus:outline-none focus:border-[#2a1d1f] transition-colors"
                  >
                    <option value="">Select your role…</option>
                    <option value="physician">Physician / MD / DO</option>
                    <option value="np">Nurse Practitioner</option>
                    <option value="pa">Physician Assistant</option>
                    <option value="office-manager">Office Manager</option>
                    <option value="billing">Billing / Admin</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#564841] mb-1.5">Message <span className="text-red-400">*</span></label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your practice and how we can help…"
                    className="w-full px-4 py-3 rounded-xl border border-[#e8e5e0] bg-[#faf8f4] text-[#2a1d1f] text-sm placeholder:text-[#c0b8b0] focus:outline-none focus:border-[#2a1d1f] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2a1d1f] hover:bg-[#564841] text-[#faf8f4] text-sm font-medium rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send message
                </button>

                <p className="text-xs text-[#88706a] text-center">
                  By submitting this form you agree to be contacted by a Nationwide Allergy representative.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
