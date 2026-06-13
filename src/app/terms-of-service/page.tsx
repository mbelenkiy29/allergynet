import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Nationwide Allergy",
  description: "Terms of Service for Nationwide Allergy LLC",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-semibold text-[#88706a] uppercase tracking-widest mb-4">Nationwide Allergy</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#2a1d1f] leading-tight mb-4">Terms of Service</h1>
        <p className="text-sm text-[#88706a] border-b border-[#e8e5e0] pb-6 mb-8">
          Effective date: January 2026 &nbsp;·&nbsp; Last updated: June 2026
        </p>

        {/* Table of Contents */}
        <div className="bg-white border border-[#e8e5e0] rounded-2xl p-6 mb-12">
          <p className="text-sm font-semibold text-[#2a1d1f] mb-3">Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-[#564841] list-decimal list-inside">
            {[
              ["#agreement", "Agreement to these terms"],
              ["#who", "Who we are"],
              ["#eligibility", "Eligibility and intended use"],
              ["#medical", "Not medical advice"],
              ["#assistant", "Website assistant"],
              ["#enrollment", "Enrollment and program agreements"],
              ["#acceptable", "Acceptable use"],
              ["#ip", "Intellectual property"],
              ["#third-party", "Third-party links and services"],
              ["#warranties", "Disclaimer of warranties"],
              ["#liability", "Limitation of liability"],
              ["#indemnification", "Indemnification"],
              ["#governing", "Governing law and disputes"],
              ["#termination", "Termination"],
              ["#changes", "Changes to these terms"],
              ["#contact", "Contact us"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#2a1d1f] transition-colors">{label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-10 text-[#564841] leading-relaxed">

          <section id="agreement">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">1. Agreement to these terms</h2>
            <p>These Terms of Service ("Terms") govern your access to and use of the website operated by Nationwide Allergy LLC ("Nationwide Allergy," "we," "us," or "our"), including any content, features, and interactive tools offered on it (the "Site"). By accessing or using the Site, you agree to be bound by these Terms and by our <Link href="/privacy-policy" className="text-[#2a1d1f] underline underline-offset-2 hover:text-[#564841]">Privacy Policy</Link>. If you do not agree, please do not use the Site.</p>
          </section>

          <section id="who">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">2. Who we are</h2>
            <p>Nationwide Allergy provides turnkey allergy testing and immunotherapy programs designed for primary care and other healthcare practices. The Site is an informational and marketing resource that describes our programs and allows interested practices to contact us and request information.</p>
          </section>

          <section id="eligibility">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">3. Eligibility and intended use</h2>
            <p>The Site is intended for use by healthcare professionals, practice administrators, and others evaluating our programs on behalf of a practice. You represent that you are at least 18 years old and have the authority to use the Site and to submit any information you provide on behalf of yourself or your organization. The Site is intended for users in the United States.</p>
          </section>

          <section id="medical">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">4. Not medical advice</h2>
            <p>The Site does not provide medical advice. All content on the Site is for general informational and educational purposes only and is not a substitute for professional medical judgment, diagnosis, or treatment. Nothing on the Site creates a provider-patient relationship. Healthcare professionals remain solely responsible for all clinical decisions and for the care of their patients.</p>
          </section>

          <section id="assistant">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">5. Website assistant</h2>
            <p>The Site may offer an interactive assistant that answers general questions about allergy testing and treatment. The assistant provides general information only, may not be accurate or complete, and must not be relied upon as medical, legal, or professional advice. You agree not to submit patient names, patient records, or other protected health information into the assistant or any Site form. Your use of the assistant is at your own discretion and risk.</p>
          </section>

          <section id="enrollment">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">6. Enrollment and program agreements</h2>
            <p>Submitting a contact or enrollment request through the Site does not by itself create a binding agreement for services. Any program, clinical, or commercial relationship between your practice and Nationwide Allergy is governed by a separate written agreement between the parties. If anything in these Terms conflicts with a signed program agreement, the signed agreement controls for the services it covers.</p>
          </section>

          <section id="acceptable">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">7. Acceptable use</h2>
            <p>When using the Site, you agree that you will not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Use the Site for any unlawful purpose or in violation of these Terms</li>
              <li>Submit false, misleading, or fraudulent information</li>
              <li>Upload or transmit protected health information through public Site features</li>
              <li>Attempt to gain unauthorized access to the Site, its servers, or related systems</li>
              <li>Interfere with or disrupt the Site, including by introducing malware or excessive automated requests</li>
              <li>Copy, scrape, reproduce, or redistribute Site content without our permission</li>
              <li>Use the Site or its content to develop a competing product or service</li>
            </ul>
          </section>

          <section id="ip">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">8. Intellectual property</h2>
            <p>The Site and its contents, including text, graphics, logos, the Nationwide Allergy name and marks, and the design and arrangement of the Site, are owned by Nationwide Allergy or its licensors and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for its intended purpose. No other rights are granted. You may not use our name, logo, or marks without our prior written consent.</p>
          </section>

          <section id="third-party">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">9. Third-party links and services</h2>
            <p>The Site may contain links to third-party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party. Links are provided for convenience only and do not imply endorsement. Your use of third-party sites is governed by their own terms and policies.</p>
          </section>

          <section id="warranties">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">10. Disclaimer of warranties</h2>
            <p>The Site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, Nationwide Allergy disclaims all warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.</p>
            <p className="mt-3">We do not warrant that the Site will be uninterrupted, secure, error-free, or free of harmful components, or that any information on the Site is accurate, current, or complete. Any reliance you place on Site content is at your own risk.</p>
          </section>

          <section id="liability">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">11. Limitation of liability</h2>
            <p>To the fullest extent permitted by law, Nationwide Allergy and its officers, members, employees, and agents will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, data, or goodwill, arising out of or related to your use of, or inability to use, the Site, whether based in contract, tort, negligence, strict liability, or any other theory, even if advised of the possibility of such damages.</p>
            <p className="mt-3">To the fullest extent permitted by law, our total liability for any claim arising out of or relating to the Site will not exceed one hundred U.S. dollars (US $100). Some jurisdictions do not allow certain limitations, so some of the above may not apply to you.</p>
          </section>

          <section id="indemnification">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">12. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Nationwide Allergy and its officers, members, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the Site, your violation of these Terms, or your violation of any law or the rights of any third party.</p>
          </section>

          <section id="governing">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">13. Governing law and disputes</h2>
            <p>These Terms are governed by the laws of the State of Texas, without regard to its conflict of laws rules. You agree that any dispute arising out of or relating to these Terms or the Site will be brought exclusively in the state or federal courts located in Dallas County, Texas, and you consent to the personal jurisdiction of those courts. Nothing in this section limits any separate dispute resolution terms in a signed program agreement.</p>
          </section>

          <section id="termination">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">14. Termination</h2>
            <p>We may suspend or terminate your access to the Site at any time, with or without notice, for any reason, including if we believe you have violated these Terms. Provisions that by their nature should survive termination, including intellectual property, disclaimers, limitation of liability, indemnification, and governing law, will continue to apply.</p>
          </section>

          <section id="changes">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">15. Changes to these terms</h2>
            <p>We may update these Terms from time to time. When we do, we will revise the "Last updated" date above. Material changes may be communicated through the Site or by other reasonable means. Your continued use of the Site after changes take effect means you accept the updated Terms.</p>
          </section>

          <section id="contact">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">16. Contact us</h2>
            <p>If you have questions about these Terms, please contact us:</p>
            <ul className="list-none mt-3 space-y-1">
              <li><strong className="text-[#2a1d1f]">Nationwide Allergy LLC</strong></li>
              <li>Email: <a href="mailto:partnerships@nationwideallergy.net" className="text-[#2a1d1f] underline underline-offset-2 hover:text-[#564841]">partnerships@nationwideallergy.net</a></li>
              <li>Phone: <a href="tel:19297735011" className="text-[#2a1d1f] underline underline-offset-2 hover:text-[#564841]">929-773-5011</a></li>
              <li>Mailing address: Dallas, TX 75226</li>
            </ul>
          </section>

        </div>

        <div className="mt-16 pt-6 border-t border-[#e8e5e0] text-xs text-[#88706a]">
          &copy; 2026 Nationwide Allergy. All rights reserved. &nbsp;·&nbsp;
          <Link href="/privacy-policy" className="hover:text-[#2a1d1f] transition-colors">Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/contact" className="hover:text-[#2a1d1f] transition-colors">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
