import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Democracy Hub — Health Checks, Threats & Civic Defense",
  description: "LibertyGuard democracy hub: how democratic norms erode, how to track threats, and tools for civic defense—alerts, Freedom Check, and offline rights guides.",
  alternates: {
    canonical: 'https://libertyguard.app/democracy',
  },
  openGraph: {
    title: "Democracy Hub | LibertyGuard",
    description: "LibertyGuard democracy hub: how democratic norms erode, how to track threats, and tools for civic defense—alerts, Freedom Check, and offline rights guides.",
    url: 'https://libertyguard.app/democracy',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Democracy Hub"
      eyebrow="Hub // Civic Defense"
      ctaNote="Open LibertyGuard’s Democracy Health dashboard, Freedom Check, and live threat alerts—then keep offline rights guides ready when the feed gets loud."
    >
      <p>Democracy is not a vibe. It is paperwork, votes counted in public, courts that still matter, journalists who can publish without a knock at midnight, and a public that can assemble without needing a permission slip from the strongest person in the room. When those pieces wobble, people feel it in their bones before the pundits invent a new acronym.</p>
            <p>LibertyGuard exists for that wobble. The Democracy Health dashboard tracks pressure on rights and institutions. Freedom Check gives you a pulse-check on civil liberties. Threat alerts surface government overreach, press freedom hits, and protest-relevant risk—so you are not relying on a group chat that refreshes every three hours.</p>
            <p>This hub is the web table of contents. Pick a lane, read the brief, then open the app when you need maps, beacons, checklists, or offline guides.</p>
            <h2>Start here</h2>
            <LinkGrid>
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="How democracies slide—telltale patterns" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Power without the usual brakes" />
              <LinkCard href="/voting-rights" title="Voting Rights" meta="Access, integrity, and the long fight" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Newsrooms under pressure" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="The rights stack that keeps you free" />
              <LinkCard href="/project-2025" title="Project 2025" meta="Policy blueprint—factual framing" />
              <LinkCard href="/trumpism" title="Trumpism" meta="Movement politics, carefully attributed" />
              <LinkCard href="/nspm-7" title="NSPM-7" meta="National security memo context" />
              <LinkCard href="/dsa" title="DSA" meta="Democratic Socialists of America primer" />
            </LinkGrid>
            <h2>Action & safety</h2>
            <LinkGrid>
              <LinkCard href="/resistance" title="Resistance Hub" meta="Organizing, mutual aid, staying effective" />
              <LinkCard href="/protests" title="Protests" meta="Assembly, coordination, documentation" />
              <LinkCard href="/protest-safety" title="Protest Safety" meta="Gear, exits, emergency protocols" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Speech, silence, counsel—assert them" />
            </LinkGrid>
            <p>We keep the homepage hero clean on purpose. The directory lives in the footer—like a speakeasy for people who still believe in ballots and the Bill of Rights.</p>
    </ContentLayout>
  )
}
