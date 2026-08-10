import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Protests & Peaceful Assembly — Rights, Safety, Coordination",
  description: "How peaceful protest works in practice: First Amendment basics, safety protocols, documentation, and LibertyGuard tools for maps, beacons, and message generation.",
  alternates: {
    canonical: 'https://libertyguard.app/protests',
  },
  openGraph: {
    title: "Protests | LibertyGuard",
    description: "How peaceful protest works in practice: First Amendment basics, safety protocols, documentation, and LibertyGuard tools for maps, beacons, and message generation.",
    url: 'https://libertyguard.app/protests',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Protests"
      eyebrow="Action // Assembly"
      ctaNote="Find local actions on Protest Map, generate signs with the Message Generator, set Emergency Beacon contacts, and cache protest protocols offline."
    >
      <p>Peaceful assembly is how democracies argue in public. Sidewalks fill. Signs get witty. Someone brings a drum that is somehow always slightly out of tune. Done right, protest is protected political speech—not a free-for-all, and not a blank check for authorities to treat crowds as enemy combatants.</p>
            <p>Time, place, and manner rules exist. Blocking ambulances is not clever. Knowing your exits, your buddy, and your lawyer’s number is clever. Recording in public spaces is often protected; confiscating phones without process is a red flag worth documenting.</p>
            <p>LibertyGuard’s Protest Map surfaces events. The Message Generator offers 100+ researched slogans by cause. Emergency Beacon SOS shares location with trusted contacts. Education caches protest protocols offline.</p>
            <h2>Field manuals</h2>
            <LinkGrid>
              <LinkCard href="/protest-safety" title="Protest Safety Guide" meta="Gear, exits, arrest protocol" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="What to say—and not say" />
              <LinkCard href="/police-militarization" title="Police Militarization" meta="Context for crowd control gear" />
              <LinkCard href="/resistance" title="Resistance Hub" meta="Organizing beyond one march" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Cameras at the march" />
        <LinkCard href="/digital-privacy" title="Digital Privacy" meta="Phones before you go" />
        <LinkCard href="/dsa" title="DSA" meta="Left organizing context" />
        <LinkCard href="/media" title="Media Archives" meta="News & podcasts in-app" />
      </LinkGrid>
    </ContentLayout>
  )
}
