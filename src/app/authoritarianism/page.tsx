import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Authoritarianism Explained — Warning Signs & Civic Defense",
  description: "A factual primer on authoritarian patterns—norm erosion, loyalist capture, speech chill—and civic defense tools in LibertyGuard: alerts, democracy scoring, rights guides.",
  alternates: {
    canonical: 'https://libertyguard.app/authoritarianism',
  },
  openGraph: {
    title: "Authoritarianism | LibertyGuard",
    description: "A factual primer on authoritarian patterns—norm erosion, loyalist capture, speech chill—and civic defense tools in LibertyGuard: alerts, democracy scoring, rights guides.",
    url: 'https://libertyguard.app/authoritarianism',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Authoritarianism"
      eyebrow="Brief // Patterns"
      ctaNote="Track authoritarian-pressure signals with Democracy Health and threat alerts, then keep Protection checklists and rights guides ready offline."
    >
      <p>Authoritarianism is less a mustache-twirl monologue and more a project plan: weaken independent institutions, reward personal loyalty over law, redefine critics as enemies, and make fear cheaper than accountability. Scholars and democracy indexes (Freedom House, V-Dem, and others) describe measurable declines—not vibes.</p>
            <p>Classic tells include attacks on election administration, pressure on prosecutors and judges, efforts to tame the civil service, and sustained campaigns to delegitimize the press. None of that requires inventing secret societies. It requires reading primary sources and reputable journalism, then organizing accordingly.</p>
            <p>LibertyGuard treats democratic decline as an operational problem: score it, alert on it, prepare for it. Offline Education packs and Protection checklists exist for the days when “it can’t happen here” becomes a punchline.</p>
            <h2>Map the landscape</h2>
            <LinkGrid>
              <LinkCard href="/democracy" title="Democracy Hub" meta="Health checks & civic lanes" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Emergency powers as lifestyle" />
              <LinkCard href="/project-2025" title="Project 2025" meta="Blueprint debates, attributed" />
              <LinkCard href="/trumpism" title="Trumpism" meta="Movement politics overview" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Why independent media matters" />
              <LinkCard href="/resistance" title="Resistance Hub" meta="What citizens actually do" />
            </LinkGrid>
    </ContentLayout>
  )
}
