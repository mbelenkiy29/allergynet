"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const faqs = [
  {
    question: "How is the allergy skin test performed, and is it painful?",
    answer:
      "The testing is not painful. A drop of solution is placed onto the skin surface and the medication will absorb into the skin. After the test is performed, it takes about 15 minutes to develop. A positive test will appear as a raised, red bump on the skin.",
  },
  {
    question: "How long does the allergy skin testing take?",
    answer:
      "The testing takes approximately 30 minutes – 15 minutes to administer and 15 minutes to register the results – so you don't have to wait long to learn the cause of your allergies.",
  },
  {
    question: "When is blood testing used for testing allergies?",
    answer:
      "Both whole blood IgE and \"fingerstick\" testing can give a practitioner, in certain cases, a better idea of the next course in a treatment plan where skin testing was not an acceptable option.",
  },
  {
    question: "Who can be tested?",
    answer:
      "Adults and children over the age of 4 years can be tested for allergies. This is especially helpful for patients who report significant allergy symptoms and/or who suffer with allergic asthma, allergic pneumonia, and other reasons where medical necessity calls for specific testing and potential treatment.",
  },
  {
    question: "Can the skin test detect food allergies?",
    answer:
      "Common panels test for dust mites, animal hair and dander, trees, grass and weed pollens, molds and cockroach droppings. The test does not detect food allergies.",
  },
  {
    question: "What is immunotherapy?",
    answer:
      "Allergen immunotherapy is a form of treatment aimed at decreasing a patient's sensitivity to substances called allergens. Immunotherapy involves introducing increasing amounts of an allergen to a patient over several months.",
  },
  {
    question: "How long will the patient be on immunotherapy?",
    answer:
      "The course of immunotherapy varies by individual. The initial course of immunotherapy is one year, but full allergen immunity can take anywhere between one and three years.",
  },
  {
    question: "How soon will patients see results from immunotherapy?",
    answer:
      "Relief from allergies varies by individual, but the vast majority of patients start seeing results after the first three months of immunotherapy.",
  },
  {
    question: "What if the patient is currently taking antihistamines?",
    answer:
      "In order to achieve the most accurate test results, patients should discontinue any antihistamines, over-the-counter or prescription, for 1 or 2 days prior to allergy testing.",
  },
  {
    question: "What are the benefits of allergy testing and immunotherapy?",
    answer:
      "One in five people suffer from symptomatic allergies. These symptoms can vary greatly from minor discomfort to severe disability. The cost of allergies can be significant when factoring in lost productivity and days off from work.",
  },
  {
    question: "Is immunotherapy effective in eliminating allergies?",
    answer:
      "Yes, immunotherapy can be very effective in greatly decreasing or even eliminating the symptoms of allergies. Up to 85% of patients receive a complete cure or a noticeable reduction in allergy symptoms.",
  },
  {
    question: "Are skin testing and immunotherapy covered by insurance?",
    answer:
      "Most insurance plans cover skin allergy testing and immunotherapy when medical necessity is established.",
  },
  {
    question: "How is billing handled for patients?",
    answer:
      "We work with your billing team to help you execute the best possible billing practices for services rendered.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#e8e5e0] rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#faf8f4] transition-colors"
      >
        <span className="font-medium text-[#2a1d1f] text-base leading-snug">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#88706a] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-[#564841] text-sm leading-relaxed border-t border-[#e8e5e0] pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e8e5e0] rounded-full text-xs font-medium text-[#564841] mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Prescriber FAQ
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] leading-tight mb-6">
            Frequently Asked<br />Questions
          </h1>
          <p className="text-lg text-[#564841] leading-relaxed">
            Common questions from prescribers about allergy testing and immunotherapy with Nationwide Allergy.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-[#e8e5e0]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#564841] mb-6">Still have questions? We're happy to help.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] border border-[#2a1d1f] rounded-full hover:bg-[#f5f2a0] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/our-services"
              className="px-6 py-3 text-sm font-medium text-[#faf8f4] bg-[#2a1d1f] rounded-full hover:bg-[#564841] transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
