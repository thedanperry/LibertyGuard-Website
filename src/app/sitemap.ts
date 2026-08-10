import type { MetadataRoute } from 'next'
import { ALL_EXPLORE_LINKS } from '@/lib/explore'
import { MEDIA_ITEMS } from '@/lib/media'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const exploreEntries = ALL_EXPLORE_LINKS.map((link) => ({
    url: `https://libertyguard.app${link.href}`,
    lastModified,
    changeFrequency: (link.changeFrequency ?? 'monthly') as 'monthly' | 'weekly' | 'yearly',
    priority: link.priority ?? 0.7,
  }))

  const mediaEntries = MEDIA_ITEMS.map((item) => ({
    url: `https://libertyguard.app/media/${item.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: 'https://libertyguard.app',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://libertyguard.app/features',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://libertyguard.app/blog',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...exploreEntries,
    ...mediaEntries,
    {
      url: 'https://libertyguard.app/privacy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://libertyguard.app/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://libertyguard.app/legal-disclaimer',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
