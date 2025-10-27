'use client';

import { WarningIcon } from '@/components/WarningIcon';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16 pt-24 md:pt-32">
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* App Label - bigger to match GET WATCHTOWER */}
          <div className="mb-8">
            <p className="font-climate-bold text-5xl md:text-8xl text-climate-cream tracking-wide leading-tight whitespace-pre-line">
              {`JOIN THE\nRESISTANCE`}
            </p>
          </div>

          {/* Logo only */}
          <div className="relative mb-8">
            <div className="w-40 h-40 md:w-[28rem] md:h-[28rem] mx-auto relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/libertyguard-logo.png"
                  alt="LibertyGuard Logo"
                  className="w-36 h-36 md:w-[24rem] md:h-[24rem] mx-auto opacity-90"
                />
              </div>
            </div>
          </div>


          {/* Description - left justified */}
          <div className="text-left max-w-4xl mx-auto mb-16">
            <p className="text-climate-cream text-xl md:text-2xl leading-relaxed mb-4">
              <span className="text-climate-red font-bold">DEMOCRACY IS UNDER ATTACK.</span> You know it. We see it. Now you have the tools to defend it.
            </p>

            <p className="text-climate-cream text-xl md:text-2xl leading-relaxed mb-4">
              <span className="text-climate-red font-bold">LibertyGuard</span> is the resistance app they don't want you to have. Real-time threat monitoring, protest coordination, legal rights protection, and emergency protocols—all in your pocket, working offline when they shut down the networks.
            </p>
            
            <p className="text-climate-cream text-xl md:text-2xl leading-relaxed">
              This isn't theory. This is the toolkit activists use to stay safe while defending democracy. <span className="text-climate-red font-bold">Download now. Free 7-day trial. No questions asked.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Get The App Section */}
      <div className="bg-climate-red relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 max-w-8xl mx-auto px-6">
          <h2 className="font-climate-bold text-4xl md:text-8xl text-climate-cream text-center mb-8 md:mb-12">
            GET LIBERTY GUARD
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 px-8 md:px-16 lg:px-24">
            <div className="text-center md:text-left md:max-w-md lg:max-w-lg">
              {/* Bullet points on separate lines with left margin */}
              <div className="text-climate-cream text-lg md:text-xl mb-8 space-y-2">
                <p>• <strong className="text-climate-red">Real-time threat intelligence</strong> — See what's happening before it hits the news</p>
                <p>• <strong className="text-climate-red">One-tap emergency beacon</strong> — Alert trusted contacts with your exact location instantly</p>
                <p>• <strong className="text-climate-red">35+ resistance guides</strong> — Protest protocols, legal rights, medical care, all offline</p>
                <p>• <strong className="text-climate-red">Protest coordination</strong> — Find local events, organize actions, stay connected</p>
                <p>• <strong className="text-climate-red">Message generator</strong> — 100+ powerful protest signs and chants</p>
                <p>• <strong className="text-climate-red">Encrypted community messaging</strong> — Secure communication when it matters most</p>
                <p>• <strong className="text-climate-red">Democracy health dashboard</strong> — Track threats to free speech and rights</p>
                <p>• <strong className="text-climate-red">Legal protection</strong> — Know your rights, document incidents, stay safe</p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://apps.apple.com/search?term=LibertyGuard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-climate-black text-climate-cream px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold hover:bg-gray-900 transition-colors mb-4"
                >
                  DOWNLOAD FOR iOS
                </a>
                <div className="text-climate-cream text-sm space-y-1">
                  <p>• Free version available</p>
                  <p>• Pro: $4.99/month or $39.99/year</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 w-full max-w-5xl">
                <div className="text-center">
                  <img
                    src="/screenshots/LibertyGuard_Screenshot1.png"
                    alt="LibertyGuard Democracy Health Dashboard with threat monitoring"
                    className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-200 md:hover:scale-105"
                  />
                  <p className="text-climate-cream text-sm mt-3 font-bold">Democracy Dashboard</p>
                </div>

                <div className="text-center">
                  <img
                    src="/screenshots/LibertyGuard_Screenshot2.png"
                    alt="Real-time threat alerts and authoritarian activity monitoring"
                    className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-200 md:hover:scale-105"
                  />
                  <p className="text-climate-cream text-sm mt-3 font-bold">Threat Alerts</p>
                </div>

                <div className="text-center">
                  <img
                    src="/screenshots/LibertyGuard_Screenshot3.png"
                    alt="Protest events and community organizing"
                    className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-200 md:hover:scale-105"
                  />
                  <p className="text-climate-cream text-sm mt-3 font-bold">Threat Tracker</p>
                </div>

                <div className="text-center">
                  <img
                    src="/screenshots/LibertyGuard_Screenshot4.png"
                    alt="Resistance survival guides and protest protocols"
                    className="w-full h-auto rounded-xl shadow-2xl transition-transform duration-200 md:hover:scale-105"
                  />
                  <p className="text-climate-cream text-sm mt-3 font-bold">Events & Organizing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Readiness Section */}
      <div className="bg-climate-cream py-16 md:py-24 relative overflow-hidden" id="readiness">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Mobile: Simple stacked layout */}
          <div className="block md:hidden">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h2 className="font-climate-bold text-4xl text-climate-black leading-tight mb-8">
                MONITOR DEMOCRACY HEALTH
              </h2>

              {/* More engaging copy about app features - centered block with left-aligned text and lightning bolt bullets */}
              <div className="text-climate-black text-sm leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
                <p>
                  ⚡ Your democracy health dashboard continuously tracks threats to democratic institutions in real-time.
                  Get instant scores for free speech, electoral integrity, civil rights, press freedom, and judicial independence.
                </p>

                <p>
                  ⚡ Real-time threat monitoring aggregates government overreach, military movements,
                  and civil unrest from multiple sources. When democracy is declining, you'll see exactly which rights are under attack.
                </p>

                <p>
                  ⚡ Access 35+ resistance guides covering protest protocols, improvised medicine, advanced trauma care,
                  legal rights, and community organizing. All content works offline when authorities shut down networks.
                </p>

                <p>
                  ⚡ Find local protests and organizing events from Indivisible chapters, Eventbrite, and community sources.
                  Generate powerful protest messages and chants. Emergency beacon alerts your contacts instantly with your location.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop: Original centered layout */}
          <div className="hidden md:block">
            <div className="text-center max-w-4xl mx-auto px-6 py-8">
              <h2 className="font-climate-bold text-6xl md:text-8xl text-climate-black leading-tight mb-12">
                MONITOR DEMOCRACY HEALTH
              </h2>

              {/* More engaging copy about app features - centered block with left-aligned text and lightning bolt bullets */}
              <div className="text-climate-black text-lg leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
                <p>
                  ⚡ Your democracy health dashboard continuously tracks threats to democratic institutions in real-time.
                  Get instant scores for free speech, electoral integrity, civil rights, press freedom, and judicial independence.
                </p>

                <p>
                  ⚡ Real-time threat monitoring aggregates government overreach, military movements,
                  and civil unrest from multiple sources. When democracy is declining, you'll see exactly which rights are under attack.
                </p>

                <p>
                  ⚡ Access 35+ resistance guides covering protest protocols, improvised medicine, advanced trauma care,
                  legal rights, and community organizing. All content works offline when authorities shut down networks.
                </p>

                <p>
                  ⚡ Find local protests and organizing events from Indivisible chapters, Eventbrite, and community sources.
                  Generate powerful protest messages and chants. Emergency beacon alerts your contacts instantly with your location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-climate-red py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-climate-bold text-4xl md:text-6xl text-climate-cream mb-8">RESOURCES & GUIDES</h2>
          <p className="text-climate-cream text-xl mb-8">Essential guides to protect your rights and stay safe during protests</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/protest-safety"
              className="bg-climate-black text-climate-cream px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors inline-block"
            >
              Protest Safety Guide
            </a>
            <a 
              href="/know-your-rights"
              className="bg-climate-black text-climate-cream px-6 py-3 rounded-full text-lg font-bold hover:bg-gray-900 transition-colors inline-block"
            >
              Know Your Rights
            </a>
          </div>
        </div>
      </div>

      {/* Features Intel Section */}
      <div className="bg-climate-black py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-climate-bold text-6xl md:text-8xl text-climate-red mb-12">KEY FEATURES</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 REAL-TIME THREAT INTELLIGENCE</h3>
                <p className="text-climate-cream">See what's happening before it hits the news. AI-powered monitoring tracks government overreach, military movements, and civil unrest from multiple sources. You'll know when democracy is under attack.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 ONE-TAP EMERGENCY BEACON</h3>
                <p className="text-climate-cream">Press a button. Your exact location gets sent to emergency contacts instantly. GPS coordinates, map links, custom messages. One tap could save your life.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 35+ RESISTANCE SURVIVAL GUIDES</h3>
                <p className="text-climate-cream">Complete offline library: protest protocols, legal rights, improvised medicine, trauma care, community organizing. All cached locally—works when they shut down the networks.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 ENCRYPTED COMMUNITY MESSAGING</h3>
                <p className="text-climate-cream">Secure communication when it matters most. End-to-end encrypted messages with fellow activists. Share updates, coordinate actions, stay safe. All data stored locally for offline access.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 PROTEST COORDINATION</h3>
                <p className="text-climate-cream">Find and join protests in your area. Location-based search from Indivisible chapters, Eventbrite, and activist communities. Organize actions, mobilize people, create change.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 PROTEST MESSAGE GENERATOR</h3>
                <p className="text-climate-cream">Need a powerful sign for your next march? Generate witty, impactful protest messages in seconds. 100+ researched chants and slogans. Anti-authoritarian. Pro-democracy. No names, no identifying details—completely safe.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 LEGAL RIGHTS PROTECTION</h3>
                <p className="text-climate-cream">Know your rights at all times. Constitutional protections, arrest protocols, documentation procedures. Full legal guide works offline. Document incidents with timestamp and GPS coordinates.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 DEMOCRACY HEALTH DASHBOARD</h3>
                <p className="text-climate-cream">Track threats to free speech, electoral integrity, civil rights, press freedom, and judicial independence. Real-time scoring shows exactly how healthy democracy is—and where it's declining.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 BUILT FOR PRIVACY</h3>
                <p className="text-climate-cream">Local-first architecture. AES-256 encryption. Zero data selling. We built this for activists facing surveillance. Your data stays on your device. Your communication stays secure.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Brief FAQ */}
      <div className="bg-climate-cream py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-climate-bold text-6xl md:text-8xl text-climate-red text-center mb-16">FREQUENTLY ASKED QUESTIONS</h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> What makes LibertyGuard different from other activist apps?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                LibertyGuard combines democracy health monitoring, real-time threat intelligence, protest coordination, live messaging, protest message generation, and 35+ resistance guides into one comprehensive platform. Unlike basic alert apps, we provide complete awareness of threats to democracy with both immediate intelligence and long-term organizing tools.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> Who should use LibertyGuard?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                Activists, organizers, protesters, journalists, legal observers, civil rights advocates, and anyone defending democracy. Whether you're monitoring threats, organizing actions, generating protest messages, or protecting democratic values, LibertyGuard provides the tools you need to stay safe and effective.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> How does the protest message generator work?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                The Protest Message Generator provides 100+ researched, witty, and impactful messages for signs and chants. You can generate random messages or filter by cause (climate, democracy, justice, anti-fascism, etc.). All messages are carefully crafted to be powerful, clever, and safe—no names or identifying details that could endanger you.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> What happens if authorities shut down the internet?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                All 35+ resistance guides, protest protocols, legal rights information, and survival content is cached locally on your device. Even when networks are shut down or heavily monitored, your critical resistance information remains fully accessible offline. Live messages are also cached locally and will sync when connectivity is restored.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> How does the democracy health scoring work?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                The democracy dashboard analyzes real-time threat data across multiple categories using AI-powered classification and confidence scoring. It tracks government overreach, military movements, civil rights violations, and press freedom to calculate overall democracy health and identify declining areas requiring action.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with support contact */}
      <div className="bg-climate-black py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
                <h3 className="text-climate-cream text-2xl font-bold mb-2">LIBERTY GUARD</h3>
            <p className="text-climate-cream text-sm opacity-60">Defend Democracy. Protect Rights.</p>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy" className="text-climate-red hover:text-climate-cream transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-climate-red hover:text-climate-cream transition-colors">Terms of Service</Link>
              <Link href="/protest-safety" className="text-climate-red hover:text-climate-cream transition-colors">Protest Safety Guide</Link>
              <Link href="/know-your-rights" className="text-climate-red hover:text-climate-cream transition-colors">Know Your Rights</Link>
            </div>
            <p className="text-climate-cream text-sm">
              Support: <a href="mailto:support@libertyguard.app" className="text-climate-red hover:underline font-bold">support@libertyguard.app</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
