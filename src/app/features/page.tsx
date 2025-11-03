import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "LibertyGuard Features – Real-Time Threat Alerts, Secure Messaging & Activism Tools",
  description: "Complete feature list for LibertyGuard activism app: real-time threat intelligence, encrypted messaging, protest coordination, emergency beacon, legal rights guides, and democracy health monitoring. All tools work offline.",
  keywords: "activism app features, threat alerts, secure messaging, protest coordination, emergency beacon, legal rights app, democracy monitoring, encrypted chat, organizer tools, protest safety features",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-4xl md:text-6xl text-climate-red text-center mb-8">
          LIBERTYGUARD FEATURES
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-climate-cream text-xl font-bold mb-2">Complete Activism Toolkit for Democracy Defense</p>
          <p className="text-climate-cream text-lg opacity-75">Real-time alerts, secure communication, and organizing tools—all in one app</p>
        </div>

        <div className="space-y-12">
          {/* Real-Time Threat Intelligence */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 REAL-TIME THREAT INTELLIGENCE</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              See what's happening before it hits the news. AI-powered monitoring tracks government overreach, military movements, and civil unrest from multiple sources. You'll know when democracy is under attack.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Democracy health dashboard with real-time scoring</li>
              <li>Aggregated threat monitoring from news and social media</li>
              <li>Location-based alerts for civil rights violations</li>
              <li>Category tracking: free speech, electoral integrity, press freedom, judicial independence</li>
              <li>Historical threat data and trend analysis</li>
            </ul>
          </section>

          {/* Emergency Beacon */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 ONE-TAP EMERGENCY BEACON</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Press a button. Your exact location gets sent to emergency contacts instantly. GPS coordinates, map links, custom messages. One tap could save your life.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Instant GPS location sharing with trusted contacts</li>
              <li>Custom emergency messages</li>
              <li>Multiple contact support</li>
              <li>Works even when networks are congested</li>
              <li>Map links for easy navigation to your location</li>
            </ul>
          </section>

          {/* Resistance Guides */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 35+ RESISTANCE SURVIVAL GUIDES</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Complete offline library: protest protocols, legal rights, improvised medicine, trauma care, community organizing. All cached locally—works when they shut down the networks.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Protest safety and legal rights protocols</li>
              <li>Advanced medical care and trauma response</li>
              <li>Community organizing strategies</li>
              <li>Documentation and evidence collection guides</li>
              <li>100% offline access—no internet required</li>
            </ul>
          </section>

          {/* Encrypted Messaging */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 ENCRYPTED COMMUNITY MESSAGING</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Secure communication when it matters most. End-to-end encrypted messages with fellow activists. Share updates, coordinate actions, stay safe. All data stored locally for offline access.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>AES-256 encryption for all messages</li>
              <li>Local-first storage architecture</li>
              <li>Offline message queuing</li>
              <li>Community channels for organizing</li>
              <li>Zero-knowledge architecture—we can't read your messages</li>
            </ul>
          </section>

          {/* Protest Coordination */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 PROTEST COORDINATION</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Find and join protests in your area. Location-based search from Indivisible chapters, Eventbrite, and activist communities. Organize actions, mobilize people, create change.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Location-based event finder</li>
              <li>Integration with Indivisible chapters and Eventbrite</li>
              <li>Community-submitted events and protests</li>
              <li>Event details, locations, and contact information</li>
              <li>Create and share your own events</li>
            </ul>
          </section>

          {/* Message Generator */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 PROTEST MESSAGE GENERATOR</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Need a powerful sign for your next march? Generate witty, impactful protest messages in seconds. 100+ researched chants and slogans. Anti-authoritarian. Pro-democracy. No names, no identifying details—completely safe.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>100+ researched and powerful messages</li>
              <li>Filter by cause: climate, democracy, justice, anti-fascism</li>
              <li>Chant generator for protests</li>
              <li>Sign ideas for marches and rallies</li>
              <li>Safe messaging—no identifying details</li>
            </ul>
          </section>

          {/* Legal Rights */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 LEGAL RIGHTS PROTECTION</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Know your rights at all times. Constitutional protections, arrest protocols, documentation procedures. Full legal guide works offline. Document incidents with timestamp and GPS coordinates.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Complete constitutional rights guide</li>
              <li>Arrest protocol step-by-step instructions</li>
              <li>Documentation tools with GPS and timestamps</li>
              <li>Legal aid hotline contacts</li>
              <li>What to say and what not to say to police</li>
            </ul>
          </section>

          {/* Democracy Dashboard */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 DEMOCRACY HEALTH DASHBOARD</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Track threats to free speech, electoral integrity, civil rights, press freedom, and judicial independence. Real-time scoring shows exactly how healthy democracy is—and where it's declining.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>Real-time democracy health scores</li>
              <li>Category breakdown: free speech, civil rights, press freedom</li>
              <li>Historical trend tracking</li>
              <li>Threat severity indicators</li>
              <li>Detailed threat descriptions and sources</li>
            </ul>
          </section>

          {/* Privacy & Security */}
          <section className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-3xl font-bold text-climate-red mb-4">🔥 BUILT FOR PRIVACY</h2>
            <p className="text-climate-cream text-lg leading-relaxed mb-4">
              Local-first architecture. AES-256 encryption. Zero data selling. We built this for activists facing surveillance. Your data stays on your device. Your communication stays secure.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-climate-cream">
              <li>AES-256 encryption for all sensitive data</li>
              <li>Local-first storage—minimal server communication</li>
              <li>Zero data selling policy</li>
              <li>No account required for core features</li>
              <li>Warrant canary and transparency reports</li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-lg text-center" style={{backgroundColor: 'rgba(245, 67, 53, 0.15)'}}>
          <h2 className="text-3xl font-bold text-climate-cream mb-4">Ready to Defend Democracy?</h2>
          <p className="text-climate-cream text-lg mb-6">
            Download LibertyGuard and get access to all features with a free 7-day trial.
          </p>
          <a 
            href="https://apps.apple.com/us/app/libertyguard/id6753902370?platform=iphone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-climate-cream text-climate-black px-8 py-4 rounded-full text-xl font-bold hover:bg-opacity-90 transition-colors mb-4"
          >
            DOWNLOAD LIBERTYGUARD FREE (7-DAY TRIAL)
          </a>
          <p className="text-climate-cream text-sm">
            Free version available • Pro: $4.99/month or $39.99/year
          </p>
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

