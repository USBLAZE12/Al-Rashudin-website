import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing and using the Al Rashudin Engineering website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Website</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use of the website.
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
              <li>Do not use the website for any fraudulent or illegal activities</li>
              <li>Do not attempt to gain unauthorized access to any part of the website</li>
              <li>Do not interfere with the proper working of the website</li>
              <li>Do not collect or harvest any information from the website without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Products and Services</h2>
            <p className="text-gray-400 leading-relaxed">
              All products and services displayed on our website are subject to availability. We reserve the right to discontinue any product or service at any time. Prices and specifications are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Al Rashudin Engineering and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              Al Rashudin Engineering shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Warranties</h2>
            <p className="text-gray-400 leading-relaxed">
              While we strive to provide accurate information, we make no warranties or representations about the accuracy or completeness of the website&apos;s content. The website is provided &quot;as is&quot; without any warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Indemnification</h2>
            <p className="text-gray-400 leading-relaxed">
              You agree to indemnify and hold Al Rashudin Engineering harmless from any claims, losses, damages, liabilities, and expenses arising out of your use of the website or violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of UAE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="text-primary mt-3">
              Email: info@alrashudin.com<br />
              Phone: +971 50 170 1331<br />
              Address: Industrial Area, Sajaa, Sharjah, UAE
            </p>
          </section>

          <p className="text-gray-500 mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:text-primary-dark transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}