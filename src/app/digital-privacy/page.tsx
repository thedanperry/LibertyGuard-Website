import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Digital Privacy Guide — Phones, Encryption & Protest Hygiene",
  description: "Practical digital privacy for activists and citizens: device searches, encryption, backups, and protest phone hygiene—aligned with LibertyGuard’s local-first design.",
  alternates: {
    canonical: 'https://libertyguard.app/digital-privacy',
  },
  openGraph: {
    title: "Digital Privacy | LibertyGuard",
    description: "Practical digital privacy for activists and citizens: device searches, encryption, backups, and protest phone hygiene—aligned with LibertyGuard’s local-first design.",
    url: 'https://libertyguard.app/digital-privacy',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Digital Privacy"
      eyebrow="Toolkit // Signal Hygiene"
      ctaNote="LibertyGuard emphasizes local-first data and encrypted messaging—combine with Know Your Rights scripts for device searches."
    >
      <p>Your phone is a diary, a camera, a tracker, and a confession booth that never sleeps. Digital privacy is the art of deciding what it gets to overhear—especially before a protest, a border crossing, or a knock that is not selling cookies.</p>
            <p>Basics that punch above their weight: strong device passcodes, OS updates, encrypted messengers, locking biometrics when compelled unlock is a risk, cloud backup strategies for evidence you want preserved, and knowing how to say you do not consent to a search. Laws vary; this is education, not counsel.</p>
            <p>LibertyGuard’s product choices—local-first architecture, AES-256 encryption for sensitive messaging, minimal tracking—exist because activists face surveillance incentives. Pair the app with habits, not hope.</p>
            <h2>Pair with</h2>
            <LinkGrid>
              <LinkCard href="/surveillance" title="Surveillance" meta="The wider eye" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Searches & silence" />
              <LinkCard href="/protest-safety" title="Protest Safety" meta="What to bring (and not)" />
              <LinkCard href="/foia" title="FOIA" meta="Demand agency policies" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Privacy as a right" />
              <LinkCard href="/protests" title="Protests" meta="Assembly + phones" />
            </LinkGrid>
    </ContentLayout>
  )
}
