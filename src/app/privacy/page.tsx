import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed">
              When you use our website or contact us, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and position</li>
              <li>Inquiry details and messages</li>
              <li>IP address and browser information (automatically collected)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process orders and deliver products</li>
              <li>Send important updates about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Information Security</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Services</h2>
            <p className="text-gray-400 leading-relaxed">
              We may use third-party services for analytics, payment processing, and communication. These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-3 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-primary mt-3">
              Email: info@alrashudin.com<br />
              Phone: +971 50 170 1331<br />
              Address: Industrial Area, Sajaa, Sharjah, UAE
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
            <p className="text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
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