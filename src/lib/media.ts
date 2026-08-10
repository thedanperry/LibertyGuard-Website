export type MediaItem = {
  slug: string
  title: string
  description: string
  url: string
  section: 'news-analysis' | 'activism' | 'education' | 'legal'
  sectionLabel: string
  related?: string[]
}

/** Featured Media / Archives channels from LibertyGuard app (trademark-safe: not affiliated). */
export const MEDIA_ITEMS: MediaItem[] = [
  {
    slug: 'democracy-now',
    title: 'Democracy Now!',
    description:
      'Independent news with focus on social justice, civil rights, democracy, and grassroots movements worldwide.',
    url: 'https://www.youtube.com/@democracynow',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/press-freedom', '/democracy', '/civil-liberties'],
  },
  {
    slug: 'pod-save-america',
    title: 'Pod Save America',
    description:
      'Political podcast from former Obama administration staffers with progressive analysis of current events.',
    url: 'https://www.youtube.com/@PodSaveAmerica',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/democracy', '/voting-rights', '/resistance'],
  },
  {
    slug: 'keith-edwards',
    title: 'Keith Edwards',
    description:
      'Daily progressive news breakdowns, campaign analysis, and democracy-focused commentary for organizers.',
    url: 'https://www.youtube.com/@keithedwards',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/democracy', '/protests'],
  },
  {
    slug: 'adam-mockler',
    title: 'Adam Mockler',
    description:
      'Fast-paced progressive political reporting on authoritarian threats, elections, and democracy fights.',
    url: 'https://www.youtube.com/@AdamMockler',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/authoritarianism', '/democracy'],
  },
  {
    slug: 'secular-talk',
    title: 'Secular Talk',
    description:
      'Independent progressive commentary from Kyle Kulinski on policy, labor, and civil liberties.',
    url: 'https://www.youtube.com/@SecularTalk',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/civil-liberties', '/government-overreach'],
  },
  {
    slug: 'hasan-piker',
    title: 'Hasan Piker',
    description:
      'Left political commentary and live analysis on labor, foreign policy, protests, and authoritarianism.',
    url: 'https://www.youtube.com/@HasanAbi',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/dsa', '/protests', '/authoritarianism'],
  },
  {
    slug: 'mike-nellis',
    title: 'Mike Nellis',
    description:
      'Progressive strategist focused on messaging, organizing, and practical democracy defense.',
    url: 'https://www.youtube.com/@mike_nellis',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/resistance', '/democracy'],
  },
  {
    slug: 'ms-now',
    title: 'MS Now',
    description:
      'National news and opinion covering democracy, civil rights, investigations, and accountability.',
    url: 'https://www.youtube.com/@msnow',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/press-freedom', '/democracy'],
  },
  {
    slug: 'democratic-socialists',
    title: 'Democratic Socialists of America',
    description:
      'DSA organizing updates, labor solidarity, mutual aid, and grassroots economic-justice campaigns.',
    url: 'https://www.youtube.com/@DemSocialists',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/dsa', '/resistance', '/protests'],
  },
  {
    slug: 'the-young-turks',
    title: 'The Young Turks',
    description:
      'Progressive news network covering politics, social justice, and people-powered democracy.',
    url: 'https://www.youtube.com/@TheYoungTurks',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/democracy', '/press-freedom'],
  },
  {
    slug: 'tim-dillon',
    title: 'Tim Dillon',
    description:
      'Political satire and cultural commentary skewering power, hypocrisy, and authoritarian absurdity.',
    url: 'https://www.youtube.com/@TimDillonShow',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/authoritarianism', '/media'],
  },
  {
    slug: 'vox',
    title: 'Vox',
    description:
      'Explanatory journalism on politics, current events, culture, and complex policy with clear context.',
    url: 'https://www.youtube.com/channel/UCLXo7UDZvByw2ixzpQCufnA',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/press-freedom', '/foia'],
  },
  {
    slug: 'breaking-points',
    title: 'Breaking Points',
    description:
      'Independent political analysis on current events, policy, and forces shaping democracy.',
    url: 'https://www.youtube.com/@BreakingPoints',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/democracy', '/government-overreach'],
  },
  {
    slug: 'majority-report',
    title: 'The Majority Report',
    description:
      'Sam Seder’s progressive commentary with in-depth discussions on policy and current events.',
    url: 'https://www.youtube.com/user/SamSeder',
    section: 'news-analysis',
    sectionLabel: 'News & Analysis',
    related: ['/democracy', '/resistance'],
  },
  {
    slug: 'straight-white-american-jesus',
    title: 'Straight White American Jesus',
    description:
      'Progressive Christian podcast on faith, politics, and social justice.',
    url: 'https://www.youtube.com/c/StraightWhiteAmericanJesusPodcast',
    section: 'activism',
    sectionLabel: 'Activism & Organizing',
    related: ['/civil-liberties', '/resistance'],
  },
  {
    slug: 'ive-had-it',
    title: "I've Had It",
    description:
      'Podcast on current events and social issues with progressive and activist perspectives.',
    url: 'https://www.youtube.com/results?search_query=i%27ve+had+it',
    section: 'activism',
    sectionLabel: 'Activism & Organizing',
    related: ['/protests', '/resistance'],
  },
  {
    slug: 'indivisible',
    title: 'Indivisible',
    description:
      'Grassroots organizing and resistance strategies for local power and democracy defense.',
    url: 'https://www.youtube.com/@IndivisibleTeam',
    section: 'activism',
    sectionLabel: 'Activism & Organizing',
    related: ['/resistance', '/voting-rights', '/protests'],
  },
  {
    slug: 'peoples-action',
    title: "People's Action",
    description:
      'Community organizing and direct-action training for building people power.',
    url: 'https://www.youtube.com/@PeoplesAction',
    section: 'activism',
    sectionLabel: 'Activism & Organizing',
    related: ['/resistance', '/protests'],
  },
  {
    slug: 'robert-reich',
    title: 'Robert Reich',
    description:
      'Economic inequality and democracy explainers on how policy shapes political power.',
    url: 'https://www.youtube.com/@RBReich',
    section: 'education',
    sectionLabel: 'Education',
    related: ['/democracy', '/civil-liberties'],
  },
  {
    slug: 'thom-hartmann',
    title: 'Thom Hartmann',
    description:
      'Progressive talk covering politics, economics, and policy’s impact on everyday people.',
    url: 'https://www.youtube.com/@ThomHartmann',
    section: 'education',
    sectionLabel: 'Education',
    related: ['/democracy', '/press-freedom'],
  },
  {
    slug: 'behind-the-bastards',
    title: 'Behind The Bastards',
    description:
      'Robert Evans on history’s worst actors—context for authoritarianism and threats to democracy.',
    url: 'https://www.youtube.com/@BehindTheBastards',
    section: 'education',
    sectionLabel: 'Education',
    related: ['/authoritarianism', '/surveillance'],
  },
  {
    slug: 'aclu',
    title: 'ACLU',
    description:
      'Civil liberties education, know-your-rights resources, and updates on constitutional cases.',
    url: 'https://www.youtube.com/@ACLU',
    section: 'legal',
    sectionLabel: 'Legal & Rights',
    related: ['/know-your-rights', '/civil-liberties', '/protest-safety'],
  },
  {
    slug: 'national-lawyers-guild',
    title: 'National Lawyers Guild',
    description:
      'Legal observer training and rights education for activists and protesters.',
    url: 'https://www.youtube.com/@NationalLawyersGuild',
    section: 'legal',
    sectionLabel: 'Legal & Rights',
    related: ['/know-your-rights', '/protest-safety', '/protests'],
  },
  {
    slug: 'eff',
    title: 'Electronic Frontier Foundation (EFF)',
    description:
      'Digital rights and privacy advocacy—tools and education for protecting online freedoms.',
    url: 'https://www.youtube.com/@EFForg',
    section: 'legal',
    sectionLabel: 'Legal & Rights',
    related: ['/digital-privacy', '/surveillance', '/civil-liberties'],
  },
]

export function getMediaBySlug(slug: string) {
  return MEDIA_ITEMS.find((m) => m.slug === slug)
}

export const MEDIA_SECTIONS = [
  'news-analysis',
  'activism',
  'education',
  'legal',
] as const
