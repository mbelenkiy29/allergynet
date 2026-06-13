"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Shield } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const keyFacts = [
  { stat: "5 drops", label: "of blood required" },
  { stat: "46", label: "environmental allergens screened" },
  { stat: "60", label: "food allergens screened" },
  { stat: "5 days", label: "results from receipt of sample" },
  { stat: "All major", label: "insurances, TRICARE & Medicare accepted" },
  { stat: "Free 2-day", label: "shipping included" },
  { stat: "< 5 min", label: "to sign up online" },
];

const igeClasses = [
  { cls: "0",   desc: "Negative",        range: "< 0.35",        bg: "bg-gray-100",     text: "text-gray-700" },
  { cls: "0.5", desc: "Equivocal / Low", range: "0.35 – 0.70",   bg: "bg-yellow-50",    text: "text-yellow-800" },
  { cls: "1",   desc: "Low",             range: "0.71 – 3.50",   bg: "bg-yellow-200",   text: "text-yellow-900" },
  { cls: "2",   desc: "Moderate",        range: "3.51 – 17.50",  bg: "bg-yellow-400",   text: "text-yellow-900" },
  { cls: "3",   desc: "High",            range: "17.51 – 50.0",  bg: "bg-red-200",      text: "text-red-900" },
  { cls: "4",   desc: "Very High",       range: "50.01 – 100.0", bg: "bg-red-400",      text: "text-white" },
  { cls: "5",   desc: "Extremely High",  range: "> 100.0",       bg: "bg-red-600",      text: "text-white" },
];

const igg4Classes = [
  { bp: "0",   desc: "Negative",        range: "< 1.0",          bg: "bg-gray-100",    text: "text-gray-700" },
  { bp: "0.5", desc: "Equivocal / Low", range: "1.0 – 2.00",     bg: "bg-green-50",    text: "text-green-800" },
  { bp: "1",   desc: "Low",             range: "2.01 – 9.90",    bg: "bg-green-100",   text: "text-green-900" },
  { bp: "2",   desc: "Moderate",        range: "9.91 – 75",      bg: "bg-green-200",   text: "text-green-900" },
  { bp: "3",   desc: "High",            range: "75.10 – 99.99",  bg: "bg-green-400",   text: "text-green-900" },
  { bp: "4",   desc: "Very High",       range: "100.0 – 199.99", bg: "bg-green-600",   text: "text-white" },
  { bp: "5",   desc: "Extremely High",  range: "> 200",          bg: "bg-green-800",   text: "text-white" },
];

const environmentalAllergens: { category: string; items: string[] }[] = [
  { category: "Dust Mites", items: ["Mite Mix"] },
  { category: "Molds", items: ["Alternaria Alternata", "Cladosporium Herbarum", "Cladosporium Sphaerospermum", "Penicillium", "Aspergillus Fumigatus"] },
  { category: "Dander", items: ["Dog Epithelia", "Cat Hair"] },
  { category: "Weeds", items: ["Russian Thistle", "Sagebrush", "Dock/Sorrel Mix", "Western Ragweed Mix", "Firebush/Kochia", "Baccharis", "Marsh Elder/Burweed", "Nettle", "Pigweed (Rough/Redroot)", "English Plantain", "Hackberry", "Wingscale", "Lambs Quarter", "Cocklebur"] },
  { category: "Trees", items: ["Maple/Box Elder", "White Alder", "Fremont Cottonwood", "Elm", "Red Mulberry", "Red Cedar", "California Sycamore Pollen", "White Mulberry", "Gambel Oak", "Pecan", "Acacia", "California Black Walnut", "Arroyo Willow", "Palm", "Ponderosa Pine", "River Birch", "Mesquite", "Palo Verde", "Red/Green Ash", "Juniper"] },
  { category: "Grasses", items: ["Grass Mix", "Johnson Grass", "Bermuda"] },
  { category: "Insects", items: ["Cockroach"] },
];

const foodAllergens: { category: string; items: string[] }[] = [
  { category: "Proteins / Milk", items: ["Beef", "Chicken", "Clam", "Codfish", "Crab", "Egg White", "Flounder", "Lamb", "Lobster", "Cow Milk", "Oyster", "Pork", "Salmon", "Scallop", "Shrimp", "Tuna", "Turkey"] },
  { category: "Nuts / Seeds", items: ["Almond", "Brazil Nut", "Cashew Nut", "Coconut", "Hazelnut", "Peanut", "Sesame Seed", "English Walnut"] },
  { category: "Fruits", items: ["Peach", "Apple", "Banana", "Blueberry", "Cantaloupe", "Cherry", "Lemon", "Orange", "Raspberry", "Strawberry", "Tomato", "Watermelon"] },
  { category: "Vegetables / Misc", items: ["Green Bean", "Broccoli", "Carrot", "Celery", "Coffee", "Garlic", "Green Pea", "Mushroom", "Onion", "Green Pepper", "Sweet Potato", "White Potato", "Rye"] },
  { category: "Grains / Legumes / Beans", items: ["Barley", "Buckwheat", "Chocolate", "Corn", "Hops", "Malt", "Lima Bean", "Rice", "Soybean", "Whole Wheat"] },
];

const complianceBadges = [
  "SOC 2", "GDPR", "Cyber Essentials Plus", "APP", "HIPAA",
  "NZ Info Privacy", "ISO 9001", "ISO 42001", "UK Conformity",
  "ISO 27001", "TX-RAMP", "DSGVO", "PIPEDA", "NHS", "PDPA",
];

const collectionSteps = [
  "Clearly label the collection card.",
  "Disinfect the fingertip with an alcohol pad.",
  "Prick the fingertip using a lancet/needle.",
  "Allow a full drop of blood to form, then wipe this first drop away with cotton.",
  "Collect the remaining drops onto the collection card. Collect 5 full drops. Each drop should fully form before it touches the filter paper.",
  "Hold cotton on the fingertip until bleeding stops.",
  "Allow the filter paper to fully dry before mailing.",
];

function AccordionGroup({ title, groups }: { title: string; groups: { category: string; items: string[] }[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      <h3 className="font-serif text-xl text-[#2a1d1f] mb-4">{title}</h3>
      <div className="space-y-2">
        {groups.map((g) => (
          <div key={g.category} className="border border-[#e8e5e0] rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-left bg-white hover:bg-[#faf8f4] transition-colors"
              onClick={() => setOpen(open === g.category ? null : g.category)}
            >
              <span className="font-medium text-[#2a1d1f] text-sm">{g.category}</span>
              <ChevronDown className={`w-4 h-4 text-[#564841] transition-transform duration-200 ${open === g.category ? "rotate-180" : ""}`} />
            </button>
            {open === g.category && (
              <div className="px-4 pb-4 bg-white flex flex-wrap gap-2 pt-1">
                {g.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 bg-[#f5f3ef] text-[#564841] rounded-full border border-[#e8e5e0]">{item}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LabBloodTestsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Section 1 — Hero */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <p className="text-sm font-medium text-[#88706a] uppercase tracking-wide mb-4">
              Resources · Lab & Blood Tests
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] mb-4">
              Allergy Testing the Way You Need It
            </h1>
            <p className="text-lg font-medium text-[#564841] mb-6">Advanced. Simple. Comprehensive.</p>
            <p className="text-[#564841] max-w-2xl mx-auto mb-8">
              A single, simple blood test screens for a broad range of food and environmental allergens. The test measures how your immune system responds to specific substances, giving your provider the data they need to build an informed treatment plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full hover:bg-[#f0ee8a] transition-colors"
            >
              Contact Us to Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2 — Key Facts */}
      <section className="py-12 md:py-16 bg-[#2a1d1f]">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {keyFacts.map((fact, i) => (
                <div key={i} className="text-center p-4">
                  <p className="font-serif text-2xl md:text-3xl text-[#f9f7a4] mb-1">{fact.stat}</p>
                  <p className="text-xs text-[#c5beb8] leading-snug">{fact.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 3 — How the Test Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-6">Understanding Your Results</h2>
            <p className="text-[#564841] leading-relaxed mb-6">
              This test helps your medical professional determine the risk that you may have an allergic sensitivity to something you eat, breathe in, or touch. It measures the amount of a substance called <strong>IgE</strong> in your body. Higher IgE levels indicate a greater chance of an allergic reaction.
            </p>
            <p className="text-[#564841] leading-relaxed mb-10">
              The test also measures a second substance called <strong>IgG4</strong>. IgG4 can change how your body reacts to allergy-causing substances by competing with IgE to neutralize allergic responses.
            </p>
            <div className="bg-[#f5f3ef] rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-[#2a1d1f] mb-4">Blocking Potential</h3>
              <p className="text-[#564841] leading-relaxed">
                The competition between IgE and IgG4 is measured as <strong>Blocking Potential</strong>. A higher score means there is more potential for IgG4 to block IgE and prevent specific allergic reactions. Providers use this information alongside other clinical data, especially symptoms, to manage the effectiveness of allergy treatment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 4 — Result Classes Tables */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-3">Result Classes</h2>
            <p className="text-[#564841] mb-10 max-w-xl">Understanding what each class level means for your patient's allergen sensitivity and blocking potential.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {/* IgE Table */}
              <div>
                <h3 className="font-serif text-xl text-[#2a1d1f] mb-4">Allergen Specific IgE</h3>
                <div className="rounded-2xl overflow-hidden border border-[#e8e5e0]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#2a1d1f] text-[#faf8f4]">
                        <th className="px-4 py-3 text-left font-medium">Class</th>
                        <th className="px-4 py-3 text-left font-medium">Description</th>
                        <th className="px-4 py-3 text-left font-medium">Range (IU/mL)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {igeClasses.map((row) => (
                        <tr key={row.cls} className="border-t border-[#e8e5e0]">
                          <td className={`px-4 py-3 font-bold text-center ${row.bg} ${row.text} w-14`}>{row.cls}</td>
                          <td className="px-4 py-3 text-[#2a1d1f] bg-white">{row.desc}</td>
                          <td className="px-4 py-3 text-[#564841] bg-white font-mono text-xs">{row.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* IgG4 Table */}
              <div>
                <h3 className="font-serif text-xl text-[#2a1d1f] mb-4">Allergen Specific IgG4 (BP)</h3>
                <div className="rounded-2xl overflow-hidden border border-[#e8e5e0]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#2a1d1f] text-[#faf8f4]">
                        <th className="px-4 py-3 text-left font-medium">BP</th>
                        <th className="px-4 py-3 text-left font-medium">Description</th>
                        <th className="px-4 py-3 text-left font-medium">Range (mg/dL)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {igg4Classes.map((row) => (
                        <tr key={row.bp} className="border-t border-[#e8e5e0]">
                          <td className={`px-4 py-3 font-bold text-center ${row.bg} ${row.text} w-14`}>{row.bp}</td>
                          <td className="px-4 py-3 text-[#2a1d1f] bg-white">{row.desc}</td>
                          <td className="px-4 py-3 text-[#564841] bg-white font-mono text-xs">{row.range}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5 — What's Tested */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-3">What&apos;s Tested</h2>
            <p className="text-[#564841] mb-10">106 allergens across two comprehensive panels.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <AccordionGroup title="Environmental Panel — 46 Allergens" groups={environmentalAllergens} />
              <AccordionGroup title="Food Panel — 60 Allergens" groups={foodAllergens} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6 — Sample Collection */}
      <section className="py-16 md:py-24 bg-[#faf8f4]">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-2">Dried Blood Spot Collection</h2>
            <p className="text-[#564841] mb-10 text-lg">A simple finger-prick protocol that saves your office time.</p>
            <div className="space-y-4 mb-10">
              {collectionSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-[#e8e5e0]">
                  <span className="font-serif text-2xl text-[#2a1d1f] w-8 shrink-0">{i + 1}</span>
                  <p className="text-[#564841] leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#f9f7a4] rounded-2xl p-6 border border-[#2a1d1f]/10">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#2a1d1f] mt-0.5 shrink-0" />
                <p className="text-[#2a1d1f] text-sm leading-relaxed">
                  <strong>Expedited shipping included.</strong> Place the completed requisition, patient demographics, and dried sample in the provided mailer and send it back using the prepaid label.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Duty of Care */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="bg-[#f5f3ef] rounded-3xl p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2a1d1f] rounded-full text-xs text-[#faf8f4] mb-6">
                <Shield className="w-3.5 h-3.5" />
                Compliance & Standards
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4">
                Your duty of care, built in
              </h2>
              <p className="text-[#564841] mb-8 max-w-xl">
                We hold ourselves to the highest standard there is: the one you set when you care for patients.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {complianceBadges.map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-[#e8e5e0] hover:shadow-sm hover:border-[#2a1d1f] transition-all"
                  >
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-xs font-medium text-[#564841]">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
                >
                  Learn about our safety and protocols
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 7 — Billing & CTA */}
      <section className="py-16 md:py-24 bg-[#2a1d1f]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f4] mb-6">No Patient Surprises</h2>
            <p className="text-[#c5beb8] leading-relaxed mb-4">
              Compliant, transparent, and compassionate billing. All commercial insurances, TRICARE, and Medicare accepted.
            </p>
            <p className="text-[#c5beb8] leading-relaxed mb-10">
              Testing is performed at a CLIA and COLA certified laboratory.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full hover:bg-[#f0ee8a] transition-colors"
            >
              Contact Us to Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#f5f3ef] border-t border-[#e8e5e0]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-[#88706a] leading-relaxed text-center">
            Test results are not intended to be used as the sole source for clinical diagnosis. Treatment plans require a trained professional proficient in allergy management and immunotherapy. Medical necessity must be established prior to testing. This test has not been cleared or approved by the U.S. Food and Drug Administration.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
