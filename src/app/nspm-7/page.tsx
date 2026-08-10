import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "NSPM-7 Explained — National Security Presidential Memos",
  description: "What NSPM-style national security presidential memoranda are, why civic watchers track them, and how LibertyGuard helps monitor democracy and overreach signals.",
  alternates: {
    canonical: 'https://libertyguard.app/nspm-7',
  },
  openGraph: {
    title: "NSPM-7 | LibertyGuard",
    description: "What NSPM-style national security presidential memoranda are, why civic watchers track them, and how LibertyGuard helps monitor democracy and overreach signals.",
    url: 'https://libertyguard.app/nspm-7',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="NSPM-7"
      eyebrow="Brief // Memos"
      ctaNote="Pair memo literacy with LibertyGuard threat alerts and offline Education guides—policy paper trails belong next to protest protocols."
    >
      <p>National Security Presidential Memoranda (NSPMs) are executive directives that shape how agencies prioritize security work. They are not statutes passed by Congress, but they can redirect bureaucracy with surprising speed. Civic watchers track them because “classified-adjacent paperwork” is where rights sometimes quietly shrink.</p>
            <p>When people discuss a specific memo such as NSPM-7, treat claims carefully: read the public text if available, note what reputable outlets and legal analysts report, and separate confirmed policy from rumor. Classification and redaction are normal; so is FOIA pressure for daylight. Do not invent secret plots—document what is on the record.</p>
            <p>LibertyGuard helps organizers keep situational awareness via threat alerts and Democracy Health signals, while FOIA literacy and rights guides live in Education for the long game.</p>
            <h2>Nearby reading</h2>
            <LinkGrid>
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Emergency powers & creep" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Security tools vs dragnets" />
              <LinkCard href="/foia" title="FOIA" meta="Force documents into daylight" />
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Institutional capture patterns" />
              <LinkCard href="/project-2025" title="Project 2025" meta="Parallel policy architecture" />
              <LinkCard href="/democracy" title="Democracy Hub" meta="Full civic map" />
            </LinkGrid>
    </ContentLayout>
  )
}
