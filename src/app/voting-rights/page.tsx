import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Voting Rights — Access, Integrity & Democratic Participation",
  description: "Voting rights basics: access, election administration, and integrity debates grounded in law and reporting—plus LibertyGuard tools for civic awareness and organizing.",
  alternates: {
    canonical: 'https://libertyguard.app/voting-rights',
  },
  openGraph: {
    title: "Voting Rights | LibertyGuard",
    description: "Voting rights basics: access, election administration, and integrity debates grounded in law and reporting—plus LibertyGuard tools for civic awareness and organizing.",
    url: 'https://libertyguard.app/voting-rights',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Voting Rights"
      eyebrow="Brief // The Franchise"
      ctaNote="Use LibertyGuard alerts and Protest Map to stay aware of civic actions around voting access—pair with offline rights Education."
    >
      <p>Voting rights are the boring miracle: millions of strangers agree that ballots beat bullets. The fight is usually about access (registration, IDs, drop boxes, lines), administration (who runs elections), and integrity (audits, chain of custody)—topics that deserve statutes and evidence, not meme warfare.</p>
            <p>U.S. history includes expansion of the franchise and periods of suppression. Modern debates should cite election officials, court rulings, and nonpartisan analysts. Extraordinary fraud claims require extraordinary proof; extraordinary barriers to voting deserve the same scrutiny.</p>
            <p>LibertyGuard supports civic awareness—threat alerts, democracy scoring, and organizing tools—so people can participate peacefully and stay informed about pressures on democratic participation.</p>
            <h2>Keep reading</h2>
            <LinkGrid>
              <LinkCard href="/democracy" title="Democracy Hub" meta="Institutions under stress" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Rights beyond Election Day" />
              <LinkCard href="/resistance" title="Resistance Hub" meta="Organizing that lasts" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Covering elections safely" />
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="When elections become theater" />
              <LinkCard href="/protests" title="Protests" meta="Public pressure, peacefully" />
            </LinkGrid>
    </ContentLayout>
  )
}
