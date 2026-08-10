import type { Metadata } from 'next'
import Link from 'next/link'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'
import { MEDIA_ITEMS, MEDIA_SECTIONS } from '@/lib/media'

export const metadata: Metadata = {
  title: 'Media & Podcasts in LibertyGuard — Progressive News Archives',
  description:
    'Featured media in the LibertyGuard app Archives: Democracy Now!, Pod Save America, Hasan Piker, Majority Report, ACLU, EFF, and more. Not affiliated—open them in-app.',
  alternates: {
    canonical: 'https://libertyguard.app/media',
  },
  openGraph: {
    title: 'Media Archives | LibertyGuard',
    description:
      'Browse the progressive news, podcasts, and rights channels featured in LibertyGuard Media/Archives.',
    url: 'https://libertyguard.app/media',
  },
}

const SECTION_COPY: Record<(typeof MEDIA_SECTIONS)[number], string> = {
  'news-analysis': 'News & Analysis',
  activism: 'Activism & Organizing',
  education: 'Education',
  legal: 'Legal & Rights',
}

export default function Page() {
  return (
    <ContentLayout
      title="Media & Podcasts"
      eyebrow="Archives // Featured Channels"
      ctaNote="Open LibertyGuard → Media/Archives to stream these channels in-app—then jump to Protest Map, Emergency Beacon, Democracy Health, and offline rights guides."
    >
      <p>
        LibertyGuard’s Media tab (Archives) is a curated dial of progressive news, political podcasts,
        organizing channels, and civil-liberties educators. Names and trademarks belong to their
        owners. Listing a show here—or in the app—does <strong>not</strong> mean endorsement,
        partnership, or affiliation unless separately stated.
      </p>
      <p>
        Use this hub to discover what’s inside the app, then download LibertyGuard when you want
        alerts, Protest Map, Freedom Check, and offline Education in the same pocket as the feed.
      </p>

      {MEDIA_SECTIONS.map((section) => {
        const items = MEDIA_ITEMS.filter((m) => m.section === section)
        return (
          <div key={section}>
            <h2>{SECTION_COPY[section]}</h2>
            <LinkGrid>
              {items.map((item) => (
                <LinkCard
                  key={item.slug}
                  href={`/media/${item.slug}`}
                  title={item.title}
                  meta={item.description.slice(0, 90) + '…'}
                />
              ))}
            </LinkGrid>
          </div>
        )
      })}

      <h2>Civic briefs nearby</h2>
      <LinkGrid>
        <LinkCard href="/dsa" title="DSA" meta="Democratic Socialists of America primer" />
        <LinkCard href="/democracy" title="Democracy Hub" meta="Health checks & threat lanes" />
        <LinkCard href="/protests" title="Protests" meta="Assembly & coordination" />
        <LinkCard href="/press-freedom" title="Press Freedom" meta="Why independent media matters" />
        <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Encounter scripts" />
        <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Pattern recognition" />
      </LinkGrid>
      <p>
        Prefer the in-app list? Same roster lives under Media in LibertyGuard—plus live threat alerts
        when the headlines get operational.
      </p>
      <p className="text-sm opacity-60">
        Also see existing <Link href="/blog">Blog</Link> and <Link href="/features">Features</Link>{' '}
        pages.
      </p>
    </ContentLayout>
  )
}
