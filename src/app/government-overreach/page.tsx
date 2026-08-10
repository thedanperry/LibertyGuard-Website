import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Government Overreach — When Power Skips the Brakes",
  description: "What government overreach looks like in practice: emergency powers, surveillance creep, speech chill, and how LibertyGuard tracks democracy threats and rights pressure.",
  alternates: {
    canonical: 'https://libertyguard.app/government-overreach',
  },
  openGraph: {
    title: "Government Overreach | LibertyGuard",
    description: "What government overreach looks like in practice: emergency powers, surveillance creep, speech chill, and how LibertyGuard tracks democracy threats and rights pressure.",
    url: 'https://libertyguard.app/government-overreach',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Government Overreach"
      eyebrow="Watch // Power"
      ctaNote="Monitor overreach signals with LibertyGuard threat alerts and Democracy Health—then open offline rights guides when you need them."
    >
      <p>Government overreach is what happens when the state uses tools meant for emergencies as a lifestyle brand. Emergency powers that never sunset. Dragnet surveillance sold as “safety.” Speech chill dressed up as “order.” Agencies that treat oversight as optional DLC.</p>
            <p>In healthy systems, separation of powers, independent courts, inspectors general, and a free press act as brakes. When those brakes squeal—or get cut—citizens need visibility fast. Attribution matters: cite statutes, memos, court rulings, and reputable reporting. Outrage without receipts is just noise.</p>
            <p>LibertyGuard’s threat intelligence and Democracy Health dashboard are built to surface patterns across overreach, civil rights pressure, and press freedom—so organizers and journalists are not refreshing doomscroll alone.</p>
            <h2>Go deeper</h2>
            <LinkGrid>
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="The pattern language of capture" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Eyes everywhere, accountability nowhere" />
              <LinkCard href="/nspm-7" title="NSPM-7" meta="National security memo context" />
              <LinkCard href="/project-2025" title="Project 2025" meta="Policy architecture debates" />
              <LinkCard href="/foia" title="FOIA" meta="Force daylight with paper" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Your rights stack" />
            </LinkGrid>
    </ContentLayout>
  )
}
