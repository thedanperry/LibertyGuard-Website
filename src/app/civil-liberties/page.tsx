import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Civil Liberties Explained — Speech, Privacy, Due Process",
  description: "A sharp primer on U.S. civil liberties—speech, assembly, privacy, due process—and how LibertyGuard helps you track threats and keep rights guides offline.",
  alternates: {
    canonical: 'https://libertyguard.app/civil-liberties',
  },
  openGraph: {
    title: "Civil Liberties | LibertyGuard",
    description: "A sharp primer on U.S. civil liberties—speech, assembly, privacy, due process—and how LibertyGuard helps you track threats and keep rights guides offline.",
    url: 'https://libertyguard.app/civil-liberties',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Civil Liberties"
      eyebrow="Brief // Rights Stack"
      ctaNote="Use LibertyGuard Freedom Check and Democracy Health to watch rights pressure, then keep Know Your Rights guides offline in Education."
    >
      <p>Civil liberties are the guardrails that keep government power from treating people like props. In the U.S. tradition, that usually means First Amendment speech and assembly, Fourth Amendment limits on searches, Fifth and Sixth Amendment due process and counsel, equal protection, and a free press that can annoy the powerful without vanishing overnight.</p>
            <p>They are not vibes. They are enforceable claims—when courts still work, when lawyers show up, and when citizens know enough to say the magic words: <em>I do not consent to a search. I want a lawyer. Am I free to go?</em></p>
            <p>LibertyGuard’s Freedom Check and Democracy Health scoring watch categories like press freedom and civil rights pressure. Offline Education packs put rights and protest protocols on your phone when networks fail.</p>
            <h2>Related briefs</h2>
            <LinkGrid>
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Encounter scripts that matter" />
              <LinkCard href="/digital-privacy" title="Digital Privacy" meta="Phones, warrants, encryption" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Cameras, data brokers, dragnets" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Why journalism is infrastructure" />
              <LinkCard href="/voting-rights" title="Voting Rights" meta="The franchise under stress" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="When power skips the brakes" />
            </LinkGrid>
    </ContentLayout>
  )
}
