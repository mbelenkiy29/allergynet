import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, ExternalLink, Download, BookOpen, FlaskConical } from "lucide-react";

const papers = [
  {
    id: 1,
    tag: "Subcutaneous Immunotherapy",
    title: "Efficacy and Safety of Subcutaneous Allergen Immunotherapy for Allergic Rhinitis",
    authors: "Myung Hyun Sohn, MD, PhD",
    journal: "Allergy, Asthma & Immunology Research",
    year: "2018",
    doi: "https://doi.org/10.4168/aair.2018.10.1.1",
    summary:
      "A large retrospective cohort study reviewed 304 patients with allergic rhinitis treated using subcutaneous immunotherapy (SCIT) targeting house dust mites. SCIT facilitated remission in 76.6% of patients within 4.9 years on average. Severe AR, specific IgE levels ≥17.5 kU/L, and immunotherapy duration ≥3 years were identified as significant predictors of clinical remission.",
    highlights: [
      "76.6% remission rate in AR patients treated with SCIT",
      "Average remission achieved within 4.9 years",
      "Only 24% of patients experienced adverse reactions; 1 case of anaphylaxis",
      "SCIT is the only treatment that alters the natural course of disease",
    ],
    file: "/research-aair.pdf",
    color: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
  },
  {
    id: 2,
    tag: "Self-Administered Immunotherapy",
    title: "The Safety of Self-Administered Allergen Immunotherapy During the Buildup and Maintenance Phases",
    authors: "Frederick M. Schaffer, MD et al. — United Allergy Services & Medical University of South Carolina",
    journal: "International Forum of Allergy & Rhinology",
    year: "2015",
    doi: "https://doi.org/10.1002/alr.21443",
    summary:
      "Analysis of 23,614 patient records and over 2 million immunotherapy injections showed that a self-administration protocol characterized by patient preselection and a slow buildup phase is remarkably safe — with a systemic reaction (SR) rate of just 0.16% per patient and 0.002% per injection. From 2009 through early 2014, over 90,000 patients received more than 10 million injections without fatalities.",
    highlights: [
      "0.002% systemic reaction rate per injection — far below office-based rates of 3–14%",
      "90,000+ patients, 10 million+ injections with zero fatalities",
      "Self-administration safety validated for both buildup and maintenance phases",
      "Statistically significant improvement over office-based protocols (p < 0.0001)",
    ],
    file: "/research-hhs-public.pdf",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    tag: "Safety Review",
    title: "Allergen Immunotherapy: An Updated Review of Safety",
    authors: "Christine James & David I. Bernstein — University of Cincinnati College of Medicine",
    journal: "Current Opinion in Allergy and Clinical Immunology",
    year: "2019",
    doi: null,
    summary:
      "A comprehensive updated review evaluating the safety of both sublingual (SLIT) and subcutaneous (SCIT) allergen immunotherapy. The review found the risk of systemic reactions with SCIT to be quite low, while SLIT has a high incidence of local site reactions but very uncommon severe anaphylactic events. Both modalities are beneficial for allergic rhinitis and venom hypersensitivity when administered by knowledgeable physicians.",
    highlights: [
      "SCIT systemic reaction risk is low when appropriate patients are selected",
      "SLIT shows very uncommon severe anaphylactic events",
      "Both SCIT and SLIT are effective for allergic rhinitis and venom hypersensitivity",
      "3 years of SCIT or SLIT offers sustained clinical benefit up to 2 years post-treatment",
    ],
    file: "/research-hhs.pdf",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 4,
    tag: "Sublingual Immunotherapy",
    title: "Sublingual Immunotherapy for Treating Adult Patients with Allergic Rhinitis Induced by House Dust Mite",
    authors: "Miao Han, MM et al. — Affiliated Hospital of Yan'an University",
    journal: "Medicine (Wolters Kluwer)",
    year: "2018",
    doi: "https://doi.org/10.1097/MD.0000000000011705",
    summary:
      "A retrospective study of 201 adult patients with moderate-to-severe house dust mite-induced allergic rhinitis treated with sublingual immunotherapy (SLIT) drops over two years. Significant improvements were observed in AR symptom scores and quality of life after both 1 year and 2 years of treatment (P < .01), with only mild and acceptable adverse events recorded.",
    highlights: [
      "Significant symptom improvement after both 1-year and 2-year SLIT treatment",
      "Quality of life improved substantially across all measured domains",
      "Only mild and acceptable adverse events observed throughout the study",
      "SLIT demonstrated as efficacious and safe for HDM-induced AR in adults",
    ],
    file: "/research-medicine.pdf",
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
  },
  {
    id: 5,
    tag: "World Allergy Organization",
    title: "Sublingual Immunotherapy: World Allergy Organization Position Paper 2013 Update",
    authors: "Canonica GW, Cox L, Pawankar R et al. — World Allergy Organization",
    journal: "World Allergy Organization Journal",
    year: "2014",
    doi: "https://doi.org/10.1186/1939-4551-7-6",
    summary:
      "The definitive global position paper on sublingual immunotherapy, covering mechanisms, clinical efficacy, safety profile, patient selection criteria, and future directions. As of 2013, 77 randomized double-blind placebo-controlled trials of SLIT had been conducted. The WAO concludes SLIT is clinically effective for rhinoconjunctivitis and asthma, with evidence supporting long-term remission after discontinuation.",
    highlights: [
      "77 randomized, double-blind, placebo-controlled SLIT trials reviewed",
      "SLIT is effective for rhinoconjunctivitis and asthma in adults and children",
      "Long-term remission documented after discontinuation of therapy",
      "SLIT may prevent new sensitizations and reduce progression to asthma",
    ],
    file: "/research-sublingual.pdf",
    color: "from-violet-50 to-violet-100",
    iconColor: "text-violet-600",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e8e5e0] rounded-full text-xs font-medium text-[#564841] mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            Peer-reviewed research
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-[#2a1d1f] leading-tight mb-6">
            The Science Behind<br />Allergen Immunotherapy
          </h1>
          <p className="text-lg text-[#564841] leading-relaxed mb-8">
            Our protocols are grounded in decades of peer-reviewed clinical research. Below are key studies supporting the efficacy and safety of the allergy testing and immunotherapy treatments we help your practice deliver.
          </p>
          <Link
            href="/our-services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#2a1d1f] bg-[#f9f7a4] border border-[#2a1d1f] rounded-full hover:bg-[#f5f2a0] transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Learn about our services
          </Link>
        </div>
      </section>

      {/* Papers grid */}
      <section className="pb-20 md:pb-28 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className={`rounded-3xl overflow-hidden bg-gradient-to-br ${paper.color} border border-white/60`}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/60 rounded-full text-xs font-medium text-[#564841]">
                      <FileText className="w-3 h-3" />
                      {paper.tag}
                    </span>
                    <span className="text-xs text-[#88706a]">{paper.year}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {paper.doi && (
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/60 hover:bg-white/80 rounded-full text-xs font-medium text-[#2a1d1f] transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View DOI
                      </a>
                    )}
                    <a
                      href={paper.file}
                      download
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2a1d1f] hover:bg-[#564841] rounded-full text-xs font-medium text-white transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      Download PDF
                    </a>
                  </div>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl text-[#2a1d1f] leading-snug mb-2">
                  {paper.title}
                </h2>
                <p className="text-sm text-[#88706a] mb-1">{paper.authors}</p>
                <p className="text-sm font-medium text-[#564841] italic mb-6">
                  {paper.journal}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#88706a] mb-3">Summary</h3>
                    <p className="text-[#564841] leading-relaxed text-sm">{paper.summary}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#88706a] mb-3">Key Findings</h3>
                    <ul className="space-y-2.5">
                      {paper.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2a1d1f] mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-[#564841]">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 px-4 border-t border-[#e8e5e0]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#88706a] leading-relaxed">
            The research cited on this page is provided for informational purposes and represents published, peer-reviewed literature on allergen immunotherapy. Nationwide Allergy does not claim authorship of these studies. Individual clinical outcomes may vary. Please consult with a qualified healthcare provider regarding appropriate treatment options for your patients.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
