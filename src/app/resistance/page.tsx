import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Resistance Hub — Organizing, Mutual Aid & Civic Pushback",
  description: "Practical resistance hub for civic defense: organizing tools, protest coordination, offline guides, encrypted messaging, and rights documentation—tied to LibertyGuard features.",
  alternates: {
    canonical: 'https://libertyguard.app/resistance',
  },
  openGraph: {
    title: "Resistance Hub | LibertyGuard",
    description: "Practical resistance hub for civic defense: organizing tools, protest coordination, offline guides, encrypted messaging, and rights documentation—tied to LibertyGuard features.",
    url: 'https://libertyguard.app/resistance',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Resistance Hub"
      eyebrow="Hub // Pushback"
      ctaNote="Download LibertyGuard for Protest Map events, message generator slogans, community threads, Protection checklists, and 35+ offline resistance guides."
    >
      <p>Resistance is not cosplay. It is the boring, brave work of showing up: documenting abuses, defending neighbors, filing FOIA requests, walking precincts, and building networks that still function when the Wi‑Fi gets weird. History’s loudest moments usually rest on quieter habits—mutual aid lists, legal observer shifts, and people who know which hotline to call.</p>
            <p>LibertyGuard packages that toolkit: Protest Map for local actions, a Protest Message Generator with 100+ researched slogans, live community messaging, Protection checklists, Emergency Beacon SOS, an Education library of offline guides, and Media Archives featuring progressive news and rights channels (Democracy Now!, Majority Report, ACLU, and more—listing is not affiliation).</p>
            <h2>Read next</h2>
            <LinkGrid>
              <LinkCard href="/protests" title="Protests" meta="Assembly as a democratic muscle" />
              <LinkCard href="/protest-safety" title="Protest Safety" meta="What to bring, how to exit" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Assert speech, silence, counsel" />
              <LinkCard href="/foia" title="FOIA" meta="Paper trails as civic power" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Rights worth defending" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Watchers, cameras, data trails" />
              <LinkCard href="/democracy" title="Democracy Hub" meta="Health checks & threat lanes" />
        <LinkCard href="/police-militarization" title="Police Militarization" meta="Gear, doctrine, accountability" />
        <LinkCard href="/dsa" title="DSA" meta="Org context on the U.S. left" />
        <LinkCard href="/media" title="Media Archives" meta="Podcasts & channels in the app" />
      </LinkGrid>
            <p>Effective resistance is measurable: fewer people alone, more people informed, better documentation when something goes wrong. That is the product brief.</p>
    </ContentLayout>
  )
}
