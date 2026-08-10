import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Press Freedom Under Pressure — Why Independent Media Matters",
  description: "Press freedom as democratic infrastructure: intimidation, access fights, and public-interest reporting—plus how LibertyGuard tracks press-related democracy threats.",
  alternates: {
    canonical: 'https://libertyguard.app/press-freedom',
  },
  openGraph: {
    title: "Press Freedom | LibertyGuard",
    description: "Press freedom as democratic infrastructure: intimidation, access fights, and public-interest reporting—plus how LibertyGuard tracks press-related democracy threats.",
    url: 'https://libertyguard.app/press-freedom',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Press Freedom"
      eyebrow="Brief // Fourth Estate"
      ctaNote="Watch press-freedom pressure in LibertyGuard Democracy Health categories and Media/Archives feeds—then verify with primary reporting."
    >
      <p>A free press is not a lifestyle brand for journalists; it is how the public learns what powerful people would rather keep offstage. When reporters face harassment, restricted access, or legal intimidation for lawful newsgathering, everyone else is flying blind.</p>
            <p>Press-freedom groups and democracy indexes track measurable declines and spikes in threats. Attribute those findings. Distinguish criticism of coverage (fair game) from efforts to criminalize reporting or punish outlets for unfavorable stories (a different animal).</p>
            <p>LibertyGuard’s Democracy Health model includes press-freedom pressure among its signals, and Media/Archives help users stay oriented without living inside a single algorithm.</p>
            <h2>Related</h2>
            <LinkGrid>
              <LinkCard href="/foia" title="FOIA" meta="Daylight via records" />
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Media capture patterns" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Speech is infrastructure" />
              <LinkCard href="/democracy" title="Democracy Hub" meta="Civic health map" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Sources & digital risk" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Recording in public" />
            </LinkGrid>
    </ContentLayout>
  )
}
