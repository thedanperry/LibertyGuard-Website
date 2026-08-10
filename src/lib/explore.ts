export type ExploreLink = {
  href: string
  label: string
  priority?: number
  changeFrequency?: 'weekly' | 'monthly' | 'yearly'
}

export type ExploreGroup = {
  label: string
  links: ExploreLink[]
}

/** Buried footer Explore directory — keep off the homepage hero. */
export const EXPLORE_GROUPS: ExploreGroup[] = [
  {
    label: 'Rights & Safety',
    links: [
      { href: '/know-your-rights', label: 'Know Your Rights', priority: 0.85 },
      { href: '/protest-safety', label: 'Protest Safety', priority: 0.85 },
      { href: '/civil-liberties', label: 'Civil Liberties', priority: 0.8 },
      { href: '/digital-privacy', label: 'Digital Privacy', priority: 0.75 },
    ],
  },
  {
    label: 'Democracy & Power',
    links: [
      { href: '/democracy', label: 'Democracy Hub', priority: 0.9 },
      { href: '/authoritarianism', label: 'Authoritarianism', priority: 0.8 },
      { href: '/government-overreach', label: 'Government Overreach', priority: 0.8 },
      { href: '/voting-rights', label: 'Voting Rights', priority: 0.75 },
      { href: '/press-freedom', label: 'Press Freedom', priority: 0.75 },
    ],
  },
  {
    label: 'Resistance & Action',
    links: [
      { href: '/resistance', label: 'Resistance Hub', priority: 0.85 },
      { href: '/protests', label: 'Protests', priority: 0.85 },
      { href: '/dsa', label: 'DSA', priority: 0.8 },
      { href: '/foia', label: 'FOIA', priority: 0.7 },
      { href: '/police-militarization', label: 'Police Militarization', priority: 0.7 },
    ],
  },
  {
    label: 'Watchlist',
    links: [
      { href: '/surveillance', label: 'Surveillance', priority: 0.8 },
      { href: '/project-2025', label: 'Project 2025', priority: 0.8 },
      { href: '/nspm-7', label: 'NSPM-7', priority: 0.75 },
      { href: '/trumpism', label: 'Trumpism', priority: 0.7 },
    ],
  },
]

export const ALL_EXPLORE_LINKS: ExploreLink[] = EXPLORE_GROUPS.flatMap((g) => g.links)
