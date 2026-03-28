import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { ClipboardList, Microscope, HeartPulse, Syringe, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Simple Screening Test",
    subtitle: "An effective allergy program starts in the waiting room.",
    description:
      "The first step in the Nationwide Allergy Protocol is effectively screening patients for significant allergy symptoms where over-the-counter medications have failed. This initial screening helps discern whether further discussion may be warranted for treatment, identifying the right patients before committing to a full testing program.",
    details: [
      "Administered in the waiting room before the appointment",
      "Identifies patients where OTC medications have not provided relief",
      "Simple, standardized questionnaire provided by Nationwide Allergy",
      "Requires no additional equipment or staff training to begin",
    ],
    color: "from-sky-50 to-sky-100",
    accent: "bg-sky-500",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Testing",
    subtitle: "Custom-tailored testing designed around your practice.",
    description:
      "Nationwide Allergy will help your office choose the best possible testing program for you and your patients. Our team of experts guides you through the process from beginning to end. We know your patients come first, and we can help design a program that is custom-tailored to your needs, whether that's a small primary care office or a larger multi-provider practice.",
    details: [
      "Nationwide Allergy experts guide your office through every step",
      "Testing protocols custom-tailored to your patient population",
      "Complete training provided for your staff",
      "All office documents and forms included",
    ],
    color: "from-amber-50 to-amber-100",
    accent: "bg-amber-500",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Results",
    subtitle: "Simplicity and patient success above all else.",
    description:
      "Quality and service are the #1 priorities for you and your patients. Our innovative treatment program is designed with both the patient and the prescriber in mind to maximize simplicity and patient success. Once test results are in, Nationwide Allergy's support team helps your office interpret findings and determine the right path forward for each individual patient.",
    details: [
      "Clear, actionable results delivered to your office",
      "Expert interpretation support from the Nationwide Allergy team",
      "Treatment planning tailored to each patient's allergen profile",
      "Ongoing quality and service support throughout",
    ],
    color: "from-emerald-50 to-emerald-100",
    accent: "bg-emerald-500",
  },
  {
    number: "04",
    icon: Syringe,
    title: "Treatment",
    subtitle: "Many options — we'll help you find the best fit.",
    description:
      "Many treatment options exist to help your patients. Nationwide Allergy's team of experts will help walk you through the best fit for you and your team. Ask us about sublingual treatments (drops or tablets placed under the tongue) in addition to traditional subcutaneous immunotherapy (allergy shots). Both approaches are designed to build the immune system's tolerance to specific allergens over time.",
    details: [
      "Sublingual immunotherapy (SLIT) — drops or tablets, often self-administered at home",
      "Subcutaneous immunotherapy (SCIT) — traditional allergy shots in-office",
      "Treatment vials prepared and shipped directly to your practice",
      "Simple flat-fee pricing with no long-term contracts",
    ],
    color: "from-rose-50 to-rose-100",
    accent: "bg-rose-500",
  },
];

export default function OurServicesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium text-[#88706a] uppercase tracking-widest mb-4">The Process</p>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] leading-tight mb-6">
            Precision Allergy Testing.<br />Excellent Results.
          </h1>
          <p className="text-lg text-[#564841] leading-relaxed mb-8">
            Our complete turnkey program takes your practice from patient screening all the way
            through to long-term treatment — with expert support at every step and no long-term contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] rounded-full border border-[#2a1d1f] hover:bg-[#f5f2a0] transition-colors"
            >
              Sign Up Today
            </Link>
            <Link
              href="#"
              className="px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <section className="pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={step.number}
                className={`rounded-3xl overflow-hidden bg-gradient-to-br ${step.color} border border-white/60`}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}>
                  {/* Icon / Number side */}
                  <div className={`flex flex-col justify-center items-center p-12 md:p-16 bg-white/40 ${isEven ? "md:order-2" : ""}`}>
                    <div className="relative mb-6">
                      <span className="font-serif text-8xl text-[#2a1d1f]/10 leading-none select-none">{step.number}</span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                          <Icon className="w-8 h-8 text-[#2a1d1f]" />
                        </div>
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] text-center mb-2">
                      {step.title}
                    </h2>
                    <p className="text-[#564841] text-center text-sm italic">{step.subtitle}</p>
                  </div>

                  {/* Content side */}
                  <div className={`p-10 md:p-16 flex flex-col justify-center ${isEven ? "md:order-1" : ""}`}>
                    <p className="text-[#564841] text-lg leading-relaxed mb-8">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#2a1d1f] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-[#564841]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Better Immunity section */}
      <section className="py-16 md:py-24 bg-[#2a1d1f] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#564841] rounded-full text-xs text-[#faf8f4] mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                The bigger picture
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#faf8f4] leading-tight mb-6">
                Better Immunity,<br />Better Health —<br />For Life.
              </h2>
              <p className="text-[#c5beb8] leading-relaxed mb-4">
                The immune system protects us from all types of illnesses. When those resources are being used up needlessly to fight allergens, overall health can be negatively impacted.
              </p>
              <p className="text-[#c5beb8] leading-relaxed mb-4">
                Weight gain, occurrences of cold and flu, hormonal imbalance, and even higher rates of some cancers have all been associated with a weakened immune system.
              </p>
              <p className="text-[#f9f7a4] leading-relaxed font-medium">
                Precision allergy testing and customized treatment could help your patients say goodbye to allergies — for good.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "50", label: "States served nationwide" },
                { stat: "< 10 min", label: "To enroll your practice" },
                { stat: "2013", label: "Founded on this mission" },
                { stat: "100%", label: "Turnkey — we handle setup" },
              ].map((item) => (
                <div key={item.label} className="bg-[#564841] rounded-2xl p-6">
                  <p className="font-serif text-3xl text-[#f9f7a4] mb-2">{item.stat}</p>
                  <p className="text-sm text-[#c5beb8]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2a1d1f] mb-4">
            Have questions about the process?
          </h2>
          <p className="text-[#564841] mb-8">
            Our team is ready to walk you through every detail and help you design a program that fits your practice.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-white border border-[#2a1d1f] rounded-full hover:bg-[#f5f3ef] transition-colors"
            >
              View FAQ
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
            >
              Contact our team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
