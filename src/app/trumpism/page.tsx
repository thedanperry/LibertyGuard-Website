import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Trumpism Explained — Movement Politics, Facts & Attribution",
  description: "A careful, attributed overview of Trumpism as a political movement—rhetoric, coalitions, and democratic-norm debates—plus LibertyGuard tools for tracking related civic threats.",
  alternates: {
    canonical: 'https://libertyguard.app/trumpism',
  },
  openGraph: {
    title: "Trumpism | LibertyGuard",
    description: "A careful, attributed overview of Trumpism as a political movement—rhetoric, coalitions, and democratic-norm debates—plus LibertyGuard tools for tracking related civic threats.",
    url: 'https://libertyguard.app/trumpism',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Trumpism"
      eyebrow="Brief // Movement Politics"
      ctaNote="Follow democracy-threat signals in LibertyGuard alerts and Democracy Health—built for organizers who want receipts, not rumor mills."
    >
      <p>“Trumpism” is journalists’ and scholars’ shorthand for a political movement associated with Donald J. Trump: populist nationalism, distrust of many institutions, loyalty-first politics, and a communications style that thrives on conflict. That is a description of a public political phenomenon—not a personal insult contest, and not a claim that every supporter endorses every excess.</p>
            <p>Serious coverage—court records, congressional reports, mainstream investigative journalism—documents contested claims about election integrity, pressure on officials, and rhetoric about opponents. When discussing individuals, stick to attributed statements and adjudicated facts. Avoid rumor. Avoid inventing criminality. Democracy defense works better with receipts.</p>
            <p>LibertyGuard’s job is not to be a partisan megaphone. It is to help users monitor threats to rights and institutions, coordinate peaceful civic action, and keep legal/educational guides offline. Use the Democracy Health dashboard and alerts as situational awareness—then verify with primary sources.</p>
            <h2>Context lanes</h2>
            <LinkGrid>
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Pattern recognition without fanfic" />
              <LinkCard href="/project-2025" title="Project 2025" meta="Heritage-linked policy blueprint" />
              <LinkCard href="/voting-rights" title="Voting Rights" meta="Access and election admin" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Media under political fire" />
              <LinkCard href="/democracy" title="Democracy Hub" meta="The wider map" />
              <LinkCard href="/nspm-7" title="NSPM-7" meta="Security memo literacy" />
            </LinkGrid>
    </ContentLayout>
  )
}
