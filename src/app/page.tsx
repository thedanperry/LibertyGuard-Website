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
              <span className="text-climate-red font-bold">LIBERTY GUARD</span> is your comprehensive resistance companion,
              designed to keep you informed, organized, and safe while defending democratic rights.
            </p>

            <p className="text-climate-cream text-xl md:text-2xl leading-relaxed">
              Whether you're monitoring threats to democracy, organizing protests, documenting civil rights violations, or preparing for civil unrest,
              <span className="text-climate-red"> LibertyGuard provides the tools, knowledge, and real-time intelligence</span> you need to resist effectively and stay safe.
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
              <div className="text-climate-cream text-lg md:text-xl mb-8 space-y-2 ml-4 md:ml-6">
                <p>• Democracy health monitoring</p>
                <p>• Real-time threat alerts</p>
                <p>• Protest event coordination</p>
                <p>• Encrypted media documentation</p>
                <p>• Emergency beacon system</p>
                <p>• 35+ resistance guides</p>
                <p>• Community organizing tools</p>
                <p>• Protection checklists</p>
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
                <div className="text-climate-cream text-sm space-y-1 ml-4 md:ml-6">
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
                  Document civil rights violations with encrypted media. Emergency beacon alerts your contacts instantly with location and evidence.
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
                  Document civil rights violations with encrypted media. Emergency beacon alerts your contacts instantly with location and evidence.
                </p>
              </div>
            </div>
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
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 DEMOCRACY HEALTH MONITOR</h3>
                <p className="text-climate-cream">Real-time tracking of threats to free speech, electoral integrity, civil rights, press freedom, and judicial independence. See exactly when and how democracy is declining.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 THREAT INTELLIGENCE</h3>
                <p className="text-climate-cream">Aggregated alerts from news sources, social media, and community reports. Intelligent filtering prioritizes domestic threats to democracy with confidence scoring.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 PROTEST COORDINATION</h3>
                <p className="text-climate-cream">Find local protests, marches, and organizing events. Location-based search from Indivisible chapters, Eventbrite, and activist communities.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 ENCRYPTED DOCUMENTATION</h3>
                <p className="text-climate-cream">Document police violence with AES-256 encrypted photos and videos. Chain of custody metadata for legal admissibility. Your evidence stays protected even if device is seized.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 RESISTANCE SURVIVAL GUIDES</h3>
                <p className="text-climate-cream">35+ guides including Protest Protocols, US Constitution, Improvised Medicine, Advanced Trauma Care, Legal Rights, and Community Organizing. All offline-accessible.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 EMERGENCY BEACON</h3>
                <p className="text-climate-cream">One-tap emergency alert sends location, map links, and recent photos/videos to pre-selected contacts. Automatic GPS coordinates and customizable messages.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 PROTECTION CHECKLIST</h3>
                <p className="text-climate-cream">Systematic preparedness tracking for protest safety gear, legal protection, first aid, communication tools, and emergency supplies. Customized for your household.</p>
              </div>
              <div>
                <h3 className="text-climate-red text-xl font-bold mb-2">🔥 PRIVACY & SECURITY</h3>
                <p className="text-climate-cream">Local-first architecture, AES-256 encryption, zero data selling, minimal collection. Designed for activists facing surveillance and monitoring.</p>
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
                LibertyGuard combines democracy health monitoring, real-time threat intelligence, protest coordination, encrypted documentation, and 35+ resistance guides into one comprehensive platform. Unlike basic alert apps, we provide complete awareness of threats to democracy with both immediate intelligence and long-term organizing tools.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> Who should use LibertyGuard?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                Activists, organizers, protesters, journalists, legal observers, civil rights advocates, and anyone defending democracy. Whether you're monitoring threats, organizing actions, documenting civil rights violations, or protecting democratic values, LibertyGuard provides the tools you need to stay safe and effective.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> How does the encrypted documentation work?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed">
                All photos and videos are encrypted with AES-256 immediately upon capture and stored locally on your device. We never have access to your media. Metadata includes location, timestamp, and device info for legal chain of custody. Your evidence is protected even if your device is seized.
              </p>
            </div>

            <div className="pl-6">
              <h3 className="font-bold text-2xl text-climate-black mb-4 flex items-center gap-3">
                <WarningIcon variant="triangle" size={24} /> What happens if authorities shut down the internet?
              </h3>
              <p className="text-climate-black text-lg leading-relaxed mb-4">
                All 35+ resistance guides, protest protocols, legal rights information, and survival content is cached locally on your device. Even when networks are shut down or heavily monitored, your critical resistance information remains fully accessible offline.
              </p>
              <p className="text-climate-black text-lg leading-relaxed">
                <strong>Additionally, LibertyGuard includes mesh networking technology</strong> that lets you communicate with nearby activists without internet or cellular service. Using Bluetooth and WiFi Direct, you can relay messages, alerts, and encrypted evidence through a peer-to-peer network—even during complete internet shutdowns. <Link href="/mesh-networking" className="text-climate-red font-bold hover:underline">Learn more about mesh networking →</Link>
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
          <div className="space-y-2 text-sm">
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-climate-red hover:text-climate-cream transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-climate-red hover:text-climate-cream transition-colors">Terms of Service</Link>
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
