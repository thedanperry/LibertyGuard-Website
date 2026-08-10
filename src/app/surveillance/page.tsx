import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Surveillance State Risks — Cameras, Data & Civil Rights",
  description: "How modern surveillance works—CCTV, phone data, face recognition, data brokers—and practical privacy habits. LibertyGuard emphasizes local-first design and offline guides.",
  alternates: {
    canonical: 'https://libertyguard.app/surveillance',
  },
  openGraph: {
    title: "Surveillance | LibertyGuard",
    description: "How modern surveillance works—CCTV, phone data, face recognition, data brokers—and practical privacy habits. LibertyGuard emphasizes local-first design and offline guides.",
    url: 'https://libertyguard.app/surveillance',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Surveillance"
      eyebrow="Watch // Eyes"
      ctaNote="LibertyGuard is built local-first with AES-256 encrypted messaging options—pair that with Digital Privacy habits and offline Education guides."
    >
      <p>Surveillance used to mean a guy with binoculars and a thermos. Now it means license-plate readers, phone location pings, cloud backups of everything you ever typed, and face recognition that treats a sidewalk like a VIP guest list—except you did not RSVP.</p>
            <p>Democratic societies can investigate crime without building permanent dragnets. The tell is whether oversight is real: warrants, minimization, audits, and consequences when agencies overcollect. Reporting from major outlets and civil liberties groups has documented both useful policing tools and mission creep. Attribute the source; do not invent a conspiracy when a FOIA release will do.</p>
            <p>Practical habits help: lock screens, encrypted messengers, knowing when you can refuse a device search, and not livestreaming your home address mid-protest. LibertyGuard’s architecture emphasizes local-first storage and encrypted community messaging—tools for people who assume the network is unfriendly.</p>
            <h2>Related</h2>
            <LinkGrid>
              <LinkCard href="/digital-privacy" title="Digital Privacy" meta="Phone hygiene that sticks" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Searches & recording" />
              <LinkCard href="/police-militarization" title="Police Militarization" meta="Hardware meets doctrine" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Power without brakes" />
              <LinkCard href="/foia" title="FOIA" meta="Ask for the camera policies" />
              <LinkCard href="/protests" title="Protests" meta="Assembly under watch" />
            </LinkGrid>
    </ContentLayout>
  )
}
