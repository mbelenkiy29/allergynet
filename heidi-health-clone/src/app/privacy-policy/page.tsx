import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Nationwide Allergy",
  description: "Privacy Policy for Nationwide Allergy LLC",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <Header />

      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <p className="text-xs font-semibold text-[#88706a] uppercase tracking-widest mb-4">Nationwide Allergy</p>
        <h1 className="font-serif text-4xl md:text-5xl text-[#2a1d1f] leading-tight mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#88706a] border-b border-[#e8e5e0] pb-6 mb-8">
          Effective date: January 2026 &nbsp;·&nbsp; Last updated: June 2026
        </p>

        {/* Table of Contents */}
        <div className="bg-white border border-[#e8e5e0] rounded-2xl p-6 mb-12">
          <p className="text-sm font-semibold text-[#2a1d1f] mb-3">Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-[#564841] list-decimal list-inside">
            {[
              ["#scope", "About this policy"],
              ["#collect", "Information we collect"],
              ["#use", "How we use information"],
              ["#assistant", "Our website assistant"],
              ["#cookies", "Cookies and tracking"],
              ["#share", "How we share information"],
              ["#health", "A note on health information"],
              ["#security", "Data security"],
              ["#retention", "Data retention"],
              ["#rights", "Your privacy rights"],
              ["#dnt", "Do Not Track"],
              ["#links", "Third-party links"],
              ["#children", "Children's privacy"],
              ["#changes", "Changes to this policy"],
              ["#contact", "Contact us"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#2a1d1f] transition-colors">{label}</a>
              </li>
            ))}
          </ol>
        </div>

        <div className="prose-section space-y-10 text-[#564841] leading-relaxed">

          <section id="scope">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">1. About this policy</h2>
            <p>This Privacy Policy explains how Nationwide Allergy LLC ("Nationwide Allergy," "we," "us," or "our") collects, uses, and shares information when you visit our website, contact us, or interact with our programs and services. Nationwide Allergy provides allergy testing and immunotherapy programs to primary care and other healthcare practices.</p>
            <p className="mt-3">By using our website or submitting information to us, you agree to the practices described in this policy. If you do not agree, please do not use the site or submit information through it.</p>
          </section>

          <section id="collect">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">2. Information we collect</h2>
            <h3 className="font-semibold text-[#2a1d1f] mb-2">Information you provide to us</h3>
            <p>We collect information you choose to share, such as when you fill out a contact or enrollment form, request information, or communicate with our team. This may include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your name and professional title</li>
              <li>Practice or organization name</li>
              <li>Business email address and phone number</li>
              <li>Mailing or practice address</li>
              <li>The contents of any message, question, or request you send us</li>
              <li>Any other details you choose to include in your communications</li>
            </ul>
            <h3 className="font-semibold text-[#2a1d1f] mt-6 mb-2">Information collected automatically</h3>
            <p>When you visit our website, we and our service providers may automatically collect technical information, including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>IP address and general location (such as city or region)</li>
              <li>Browser type, device type, and operating system</li>
              <li>Pages viewed, links clicked, and time spent on the site</li>
              <li>The website or source that referred you to us</li>
              <li>Information collected through cookies and similar technologies (see Section 5)</li>
            </ul>
          </section>

          <section id="use">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">3. How we use information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to your inquiries and provide the information you request</li>
              <li>Enroll your practice and deliver our programs and services</li>
              <li>Communicate with you about your account, program, or requests</li>
              <li>Send program updates, educational content, or marketing communications where permitted by law</li>
              <li>Operate, maintain, secure, and improve our website and services</li>
              <li>Analyze how our site is used so we can make it better</li>
              <li>Comply with legal obligations and enforce our agreements</li>
            </ul>
            <p className="mt-3">You may opt out of marketing emails at any time by using the unsubscribe link in those messages or by contacting us using the details in Section 15.</p>
          </section>

          <section id="assistant">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">4. Our website assistant</h2>
            <p>Our website may offer an interactive assistant that answers general questions about allergy testing and treatment. Questions you type into the assistant may be processed and stored to operate the feature, improve our responses, and understand common topics of interest.</p>
            <div className="bg-[#f9f7a4] border border-[#e8e5e0] border-l-4 border-l-[#2a1d1f] rounded-xl p-5 mt-4">
              <p><strong className="text-[#2a1d1f]">Please do not enter sensitive personal information into the assistant.</strong> The assistant is for general educational questions only. Do not submit patient names, patient medical records, or other protected health information through it. The assistant does not provide medical advice and is not a substitute for professional clinical judgment.</p>
            </div>
          </section>

          <section id="cookies">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">5. Cookies and tracking technologies</h2>
            <p>We use cookies and similar technologies to operate our website, remember your preferences, and understand how visitors use the site. Cookies are small files stored on your device. We may use:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-[#2a1d1f]">Essential cookies</strong> that are necessary for the site to function</li>
              <li><strong className="text-[#2a1d1f]">Analytics cookies</strong> that help us measure and improve site performance, for example through services such as Google Analytics, Google Tag Manager, and the Meta (Facebook) Pixel</li>
              <li><strong className="text-[#2a1d1f]">Functional cookies</strong> that remember choices you make</li>
            </ul>
            <p className="mt-3">You can control cookies through your browser settings and by declining non-essential cookies where a cookie banner is offered. Blocking some cookies may affect how the site works.</p>
          </section>

          <section id="share">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">6. How we share information</h2>
            <p>We do not sell your personal information. We may share information in the following limited circumstances:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong className="text-[#2a1d1f]">Service providers.</strong> With vendors who perform services on our behalf, such as website hosting, email delivery, analytics, customer relationship management, and support. These providers are permitted to use the information only to provide services to us.</li>
              <li><strong className="text-[#2a1d1f]">Legal and safety.</strong> When required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Nationwide Allergy, our users, or others.</li>
              <li><strong className="text-[#2a1d1f]">Business transfers.</strong> In connection with a merger, acquisition, financing, or sale of all or part of our business, your information may be transferred as part of that transaction.</li>
              <li><strong className="text-[#2a1d1f]">With your direction.</strong> When you ask us to share your information or otherwise consent to sharing.</li>
            </ul>
          </section>

          <section id="health">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">7. A note on health information</h2>
            <p>This website is intended for healthcare professionals and practices evaluating our programs. The content on this site is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment.</p>
            <p className="mt-3">Please do not submit patient health information or protected health information through our website forms or assistant. Protected health information generated in connection with our clinical programs is handled separately under the applicable agreements and policies governing those services, and not under this website Privacy Policy.</p>
          </section>

          <section id="security">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">8. Data security</h2>
            <p>We use reasonable administrative, technical, and physical safeguards designed to protect the information we collect. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security. You share information with us at your own risk.</p>
          </section>

          <section id="retention">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">9. Data retention</h2>
            <p>We retain personal information for as long as needed to fulfill the purposes described in this policy, including to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we take steps to delete or de-identify it.</p>
          </section>

          <section id="rights">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">10. Your privacy rights</h2>
            <p>Depending on where you live, you may have rights regarding your personal information. These can include the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of certain uses, such as marketing communications</li>
              <li>Receive a copy of your information in a portable format</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us using the details in Section 15. We will respond as required by applicable law. We will not discriminate against you for exercising your privacy rights. If we deny a request, you may have the right to appeal by contacting us again.</p>
          </section>

          <section id="dnt">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">11. Do Not Track</h2>
            <p>Some browsers offer a "Do Not Track" signal. Because there is no common industry standard for how to respond to these signals, our website does not currently respond to them. We will update this policy if that changes.</p>
          </section>

          <section id="links">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">12. Third-party links</h2>
            <p>Our website may link to third-party sites or services that we do not control. This policy does not apply to those sites. We encourage you to review the privacy policies of any third-party site you visit.</p>
          </section>

          <section id="children">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">13. Children's privacy</h2>
            <p>Our website and services are intended for healthcare professionals and are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.</p>
          </section>

          <section id="changes">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">14. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date above. If we make material changes, we will provide additional notice as required by law. Your continued use of the website after changes take effect means you accept the updated policy.</p>
          </section>

          <section id="contact">
            <h2 className="font-serif text-2xl text-[#2a1d1f] mb-3">15. Contact us</h2>
            <p>If you have questions about this Privacy Policy or how we handle your information, please contact us:</p>
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
          <Link href="/contact" className="hover:text-[#2a1d1f] transition-colors">Contact Us</Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
