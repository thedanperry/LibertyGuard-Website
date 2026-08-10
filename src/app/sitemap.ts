import type { MetadataRoute } from 'next'
import { ALL_EXPLORE_LINKS } from '@/lib/explore'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const exploreEntries = ALL_EXPLORE_LINKS.map((link) => ({
    url: `https://libertyguard.app${link.href}`,
    lastModified,
    changeFrequency: (link.changeFrequency ?? 'monthly') as 'monthly' | 'weekly' | 'yearly',
    priority: link.priority ?? 0.7,
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
