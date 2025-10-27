import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-6xl md:text-8xl text-climate-red text-center mb-16">
          PRIVACY POLICY
        </h1>

        <div className="space-y-8 text-climate-cream">
          <div className="text-center mb-8">
            <p className="text-sm opacity-60">Effective Date: October 2025</p>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Our Commitment to Privacy</h2>
            <p className="text-lg leading-relaxed mb-4">
              As an app designed to protect democratic rights and resist authoritarianism, we understand that privacy is not just a preference - it's a necessity. We minimize data collection, maximize encryption, and prioritize your safety above all else.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Location Data:</strong> Collected to provide location-based threat alerts, find nearby protests and events, and enable emergency beacon functionality. Location data is processed locally when possible and never shared without your explicit consent.</li>
                  <li><strong>Device Information:</strong> Basic device information for app functionality, security verification, and encrypted media storage</li>
                  <li><strong>Usage Analytics:</strong> Anonymous usage data to improve app performance and security (fully anonymized)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Resistance & Documentation Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Threat Monitoring:</strong> Aggregated threat data from news sources and social media (no personal data stored)</li>
                  <li><strong>Media Evidence:</strong> Photos and videos you capture are encrypted with AES-256 and stored locally on your device. We never have access to your media.</li>
                  <li><strong>Community Alerts:</strong> User-submitted alerts about authoritarian threats (moderated for accuracy)</li>
                  <li><strong>Event Data:</strong> Protests and organizing events scraped from public sources (Indivisible, Eventbrite, Reddit)</li>
                  <li><strong>Democracy Health Metrics:</strong> Aggregated threat scores and category assessments (fully anonymized)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Emergency Beacon Data</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Emergency Contacts:</strong> Stored locally on your device, never transmitted to our servers</li>
                  <li><strong>Emergency Messages:</strong> Stored locally, only sent to your pre-selected contacts when you activate the beacon</li>
                  <li><strong>Location Sharing:</strong> Only shared when you explicitly activate the emergency beacon</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Monitor threats to democracy and civil rights</li>
              <li>Provide real-time alerts about authoritarian activity</li>
              <li>Enable secure documentation of police violence and state misconduct</li>
              <li>Facilitate organizing and protest coordination</li>
              <li>Protect user anonymity and operational security</li>
              <li>Aggregate threat intelligence from multiple sources</li>
              <li>Calculate democracy health scores and risk assessments</li>
              <li>Connect activists with local events and protests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Information Sharing</h2>
            <p className="text-lg leading-relaxed mb-4 font-bold">
              We do not sell, trade, or rent your personal information to third parties. Period.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              We may share information only in these limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Public Interest:</strong> Aggregated, anonymized threat data may be shared with journalists, NGOs, civil rights organizations, or legal advocates for public interest purposes</li>
              <li><strong>Legal Requirements:</strong> We will resist any government requests for user data and will only comply when legally required and constitutionally valid. We will notify users when legally permitted.</li>
              <li><strong>Service Providers:</strong> Minimal data shared with trusted partners who assist in app operation (under strict confidentiality agreements and with minimal access)</li>
              <li><strong>User Consent:</strong> When you explicitly choose to share information (e.g., activating emergency beacon)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Data Security</h2>
            <p className="text-lg leading-relaxed mb-4">
              We implement military-grade security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>AES-256 Encryption:</strong> All media evidence encrypted locally on your device</li>
              <li><strong>Encrypted Storage:</strong> AsyncStorage with encryption for all sensitive data</li>
              <li><strong>Secure API Connections:</strong> HTTPS/TLS for all network communications</li>
              <li><strong>Local-First Architecture:</strong> Most data stored locally, minimizing server exposure</li>
              <li><strong>Zero-Knowledge Architecture:</strong> We cannot access your encrypted media or emergency contacts</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Encryption & Evidence Chain of Custody</h2>
            <p className="text-lg leading-relaxed">
              All photos and videos captured in the app are encrypted with AES-256 immediately upon capture, stored locally on your device, tagged with metadata (location, timestamp, device info) for legal validity, maintained with chain of custody for potential legal use, saved to your device's photo library for backup, and never transmitted to our servers or any third party without your explicit action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Resistance in Authoritarian Contexts</h2>
            <p className="text-lg leading-relaxed mb-4">
              We understand that many users may be living under surveillance states or authoritarian regimes. We've designed LibertyGuard with this in mind:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Minimal Server Communication:</strong> Most features work locally</li>
              <li><strong>Encrypted Everything:</strong> Your data is protected even if your device is seized</li>
              <li><strong>Plausible Deniability:</strong> Media is stored in standard photo library format</li>
              <li><strong>No Account Required:</strong> Use core features without creating an account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Warrant Canary</h2>
            <p className="text-lg leading-relaxed mb-4">
              As of January 11, 2025, LibertyGuard has:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Never received a National Security Letter</li>
              <li>Never received a FISA court order</li>
              <li>Never been compelled to provide user data to any government agency</li>
              <li>Never been prohibited from informing users of data requests</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4">
              This canary will be updated quarterly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, contact us at:
            </p>
            <p className="text-lg mt-4">
              <strong>Email:</strong> <a href="mailto:support@libertyguard.app" className="text-climate-red hover:underline">support@libertyguard.app</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-climate-red mb-4">Your Rights</h2>
            <p className="text-lg leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information (though we collect very little)</li>
              <li>Delete your data at any time</li>
              <li>Opt out of location services, analytics, and non-essential data collection</li>
              <li>Export your data</li>
              <li>Request transparency about any data we hold</li>
              <li>Use the app without creating an account for most features</li>
            </ul>
          </section>

          <div className="mt-16 pt-8 border-t border-climate-red text-center">
            <p className="text-sm opacity-60">
              This Privacy Policy is effective as of October 2025 and applies to all users of the LibertyGuard application.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="bg-climate-cream text-climate-red px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors inline-block">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
