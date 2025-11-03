import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Activism Resources & Guides – LibertyGuard Blog",
  description: "Essential guides for activists and organizers: protest safety tips, legal rights information, community organizing strategies, and democracy protection resources. Stay informed and stay safe.",
  keywords: "activism guides, protest safety tips, legal rights for activists, community organizing, democracy protection resources, protest organizer guides, civil rights information",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-climate-bold text-4xl md:text-6xl text-climate-red text-center mb-8">
          ACTIVISM RESOURCES & GUIDES
        </h1>
        
        <div className="text-center mb-12">
          <p className="text-climate-cream text-xl font-bold mb-2">Essential Guides for Defending Democracy</p>
          <p className="text-climate-cream text-lg opacity-75">Stay informed, stay safe, stay effective</p>
        </div>

        <div className="space-y-8">
          <article className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-2xl font-bold text-climate-red mb-4">
              <Link href="/protest-safety" className="hover:text-climate-cream transition-colors">
                Complete Protest Safety Guide 2025
              </Link>
            </h2>
            <p className="text-climate-cream text-lg mb-4">
              Everything you need to know to stay safe during protests: what to bring, your legal rights, emergency protocols, and documentation procedures. This comprehensive guide could save you from arrest, injury, or legal trouble.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-climate-cream/75 text-sm">#ProtestSafety</span>
              <span className="text-climate-cream/75 text-sm">#KnowYourRights</span>
              <span className="text-climate-cream/75 text-sm">#ActivistGuide</span>
            </div>
            <Link href="/protest-safety" className="text-climate-red hover:text-climate-cream transition-colors inline-block mt-4 font-bold">
              Read Full Guide →
            </Link>
          </article>

          <article className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-2xl font-bold text-climate-red mb-4">
              <Link href="/know-your-rights" className="hover:text-climate-cream transition-colors">
                Know Your Rights: Complete Legal Guide for Activists
              </Link>
            </h2>
            <p className="text-climate-cream text-lg mb-4">
              Your constitutional rights during protests and police encounters. Learn your First Amendment rights, what to say to police, Fourth Amendment protections, and how to document everything legally.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-climate-cream/75 text-sm">#LegalRights</span>
              <span className="text-climate-cream/75 text-sm">#ConstitutionalRights</span>
              <span className="text-climate-cream/75 text-sm">#ActivistLegal</span>
            </div>
            <Link href="/know-your-rights" className="text-climate-red hover:text-climate-cream transition-colors inline-block mt-4 font-bold">
              Read Full Guide →
            </Link>
          </article>

          <article className="p-8 rounded-lg" style={{backgroundColor: 'rgba(235, 227, 219, 0.1)'}}>
            <h2 className="text-2xl font-bold text-climate-red mb-4">
              <Link href="/features" className="hover:text-climate-cream transition-colors">
                LibertyGuard Features: Complete Activism Toolkit
              </Link>
            </h2>
            <p className="text-climate-cream text-lg mb-4">
              Detailed overview of all LibertyGuard features: real-time threat alerts, secure messaging, protest coordination, emergency beacon, legal rights guides, and democracy health monitoring.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-climate-cream/75 text-sm">#AppFeatures</span>
              <span className="text-climate-cream/75 text-sm">#ActivismTools</span>
              <span className="text-climate-cream/75 text-sm">#OrganizerTools</span>
            </div>
            <Link href="/features" className="text-climate-red hover:text-climate-cream transition-colors inline-block mt-4 font-bold">
              View All Features →
            </Link>
          </article>
        </div>

        <div className="mt-16 p-8 rounded-lg text-center" style={{backgroundColor: 'rgba(245, 67, 53, 0.15)'}}>
          <h2 className="text-2xl font-bold text-climate-cream mb-4">Stay Updated</h2>
          <p className="text-climate-cream mb-6">
            More guides and resources coming soon. Sign up for updates or download the app to get real-time alerts and all resources offline.
          </p>
          <a 
            href="https://apps.apple.com/us/app/libertyguard/id6753902370?platform=iphone" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-climate-cream text-climate-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors"
          >
            DOWNLOAD LIBERTYGUARD
          </a>
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

