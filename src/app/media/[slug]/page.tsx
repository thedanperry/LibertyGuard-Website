import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/constants'
import { getMediaBySlug, MEDIA_ITEMS } from '@/lib/media'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return MEDIA_ITEMS.map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getMediaBySlug(slug)
  if (!item) return { title: 'Media | LibertyGuard' }
  return {
    title: `${item.title} — Featured in LibertyGuard Media`,
    description: `${item.description} Featured in LibertyGuard Archives (not affiliated). Open Democracy Health, alerts, and rights guides in the app.`,
    alternates: { canonical: `https://libertyguard.app/media/${item.slug}` },
    openGraph: {
      title: `${item.title} | LibertyGuard Media`,
      description: item.description,
      url: `https://libertyguard.app/media/${item.slug}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const item = getMediaBySlug(slug)
  if (!item) notFound()

  return (
    <ContentLayout
      title={item.title}
      eyebrow={`Media // ${item.sectionLabel}`}
      ctaNote={`Open ${item.title} inside LibertyGuard Media/Archives—then keep Protest Map, Emergency Beacon, and offline rights guides one tap away.`}
    >
      <p>{item.description}</p>
      <p>
        This channel is listed in LibertyGuard’s in-app Media Archives so organizers and citizens can
        find progressive news and rights education quickly. LibertyGuard is <strong>not</strong>{' '}
        affiliated with {item.title} unless a separate partnership is announced. All trademarks
        remain with their owners.
      </p>
      <p>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          Visit {item.title} on YouTube
        </a>
        {' · '}
        <Link href="/media">All featured media</Link>
      </p>
      <h2>Why it’s in the app</h2>
      <p>
        Archives sit next to Democracy Health, threat alerts, Protest Map, Protection checklists, and
        Education guides. Consume the feed; keep operational tools ready when stories become street
        conditions.
      </p>
      <h2>Related</h2>
      <LinkGrid>
        {(item.related ?? ['/media', '/democracy']).map((href) => (
          <LinkCard
            key={href}
            href={href}
            title={href.replace(/^\//, '').replace(/-/g, ' ')}
            meta="LibertyGuard brief"
          />
        ))}
        <LinkCard href="/media" title="Media Hub" meta="Full Archives roster" />
        <LinkCard href="/features" title="Features" meta="What the app ships" />
      </LinkGrid>
      <p className="text-sm opacity-70">
        Download:{' '}
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          iOS
        </a>
        {' · '}
        <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
          Android
        </a>
      </p>
    </ContentLayout>
  )
}
