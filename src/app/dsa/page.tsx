import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: 'DSA Explained — Democratic Socialists of America, AOC, Bernie, Hasan',
  description:
    'What DSA is: history, politics, and figures often searched with it—AOC, Bernie Sanders, Hasan Piker—with accurate member vs ally vs commentator context. LibertyGuard protest & democracy tools.',
  alternates: {
    canonical: 'https://libertyguard.app/dsa',
  },
  openGraph: {
    title: 'DSA / Democratic Socialists of America | LibertyGuard',
    description:
      'Factual DSA primer plus public figures people associate with democratic socialism—and LibertyGuard tools for protests, rights, and democracy monitoring.',
    url: 'https://libertyguard.app/dsa',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="DSA — Democratic Socialists of America"
      eyebrow="Brief // Org Context"
      ctaNote="Organizing adjacent to DSA chapters or just tracking the discourse? LibertyGuard has Protest Map, Emergency Beacon, rights guides, threat alerts, Democracy Health, and Media Archives (including DSA’s channel and Hasan Piker)—offline when networks fail."
    >
      <p>
        DSA is shorthand for the Democratic Socialists of America—a multi-tendency U.S. socialist
        membership organization that grew sharply after the mid-2010s. It is not a secret society, not
        a ballot-line party in the classic sense (members often work inside and around Democratic
        primaries), and not a monolith. Chapters disagree. Caucuses argue. Search interest spikes
        whenever high-profile names—<strong>Alexandria Ocasio-Cortez (AOC)</strong>,{' '}
        <strong>Bernie Sanders</strong>, streamers like <strong>Hasan Piker</strong>—collide with
        headlines about socialism, protests, or the left.
      </p>
      <p>
        This page is a civic primer: what DSA is, accurate context on famous adjacent figures, and how
        LibertyGuard’s real tools map to protest safety, surveillance awareness, and democracy-threat
        monitoring. Not an endorsement. Not a smear. Not legal advice. LibertyGuard is not affiliated
        with DSA.
      </p>

      <h2>What DSA is</h2>
      <p>
        Per its own materials and longstanding reporting, DSA describes itself as a democratic
        socialist organization: members push policies like Medicare for All, labor power, housing
        justice, climate action, and expanded democracy—via electoral work, mutual aid, labor
        solidarity, and protest. Structure matters: national conventions and leadership set broad
        direction; local chapters run much of the day-to-day. When someone says “DSA did X,” ask which
        body, which city, and which source.
      </p>

      <h2>History & recent relevance</h2>
      <p>
        DSA formed in 1982 from a merger of earlier democratic socialist currents associated with
        Michael Harrington’s tradition. It stayed relatively small for decades, then surged after
        Bernie Sanders’s 2016 presidential campaign and again through the Trump-era resistance years
        and 2020 uprising period—growth widely covered by mainstream outlets and acknowledged by DSA.
        That surge meant more chapters, more DSA-endorsed candidacies, and louder internal fights
        over strategy.
      </p>

      <h2>Key figures people search with “DSA” (accurate labels)</h2>
      <p>
        Google lumps politicians, podcasters, and orgs together. Precision beats fanfic:
      </p>
      <h3>Alexandria Ocasio-Cortez (AOC)</h3>
      <p>
        U.S. Representative from New York. Widely reported as a DSA member whose 2018 primary win
        became a national symbol of a leftward shift inside Democratic politics. She is an elected
        official with her own record—not “the DSA,” and not a LibertyGuard partner. Searches for AOC
        + DSA usually want that membership/electoral context plus progressive policy fights.
      </p>
      <h3>Bernie Sanders</h3>
      <p>
        U.S. Senator from Vermont and two-time presidential candidate who popularized “democratic
        socialist” language for a mass audience. He is often described as an ally and inspiration for
        DSA growth rather than as DSA’s organizational boss. Attribute carefully: Sanders’s campaigns
        and DSA’s membership boom are historically linked in reporting; that is not the same as
        Sanders chairing DSA.
      </p>
      <h3>Hasan Piker</h3>
      <p>
        Left political commentator and livestreamer (often searched as HasanAbi) who discusses labor,
        foreign policy, protests, and socialist politics to a large online audience. He is a{' '}
        <strong>media commentator</strong> featured in LibertyGuard’s Media Archives—not DSA
        leadership by virtue of being on a YouTube list. Viewers looking for Hasan + DSA usually want
        left-media context next to organizing tools.
      </p>
      <h3>Other DSA-adjacent / frequently associated names</h3>
      <ul>
        <li>
          <strong>DSA-endorsed or DSA-member electeds</strong> (varies by cycle and chapter)—coverage
          in major outlets regularly notes endorsements; check primary sources for the current roster.
        </li>
        <li>
          <strong>Labor and tenant organizers</strong> who collaborate locally with chapters without
          being national spokespeople.
        </li>
        <li>
          <strong>Left media</strong> that covers DSA fights—e.g. channels LibertyGuard lists such as
          The Majority Report, The Young Turks, Secular Talk, Democracy Now!—again, listing ≠
          affiliation.
        </li>
      </ul>
      <p>
        Rule of thumb: <em>member</em>, <em>endorse</em>, <em>ally</em>, and <em>commentator</em> are
        different relationships. Say which one you mean.
      </p>

      <h2>Role in U.S. left politics</h2>
      <p>
        DSA is often the largest explicitly socialist membership org people meet locally. It sits
        alongside unions, tenant unions, racial justice groups, and issue campaigns—sometimes in
        coalition, sometimes in tension. Right-wing critics treat DSA as radical shorthand; left
        critics sometimes call it too electoral. For civic literacy, the useful fact is simpler: DSA
        is a real public organization with bylaws, conventions, chapters, and a paper trail.
      </p>

      <h2>LibertyGuard tools that map to this search neighborhood</h2>
      <ul>
        <li>
          <strong>Protest Map & Message Generator</strong> — local actions and 100+ researched slogans.
        </li>
        <li>
          <strong>Emergency Beacon SOS</strong> — location to trusted contacts when a march escalates.
        </li>
        <li>
          <strong>Know Your Rights / Education packs</strong> — offline protest and constitutional
          guides.
        </li>
        <li>
          <strong>Threat alerts, Democracy Health, Freedom Check</strong> — overreach and rights
          pressure signals.
        </li>
        <li>
          <strong>Media Archives</strong> — including DSA’s channel, Hasan Piker, Democracy Now!, and
          rights orgs like ACLU / NLG / EFF.
        </li>
        <li>
          <strong>Local-first + encrypted messaging options</strong> — built for surveillance-aware
          users.
        </li>
      </ul>

      <h2>Read next</h2>
      <LinkGrid>
        <LinkCard href="/media" title="Media Hub" meta="Full Archives roster from the app" />
        <LinkCard href="/media/hasan-piker" title="Hasan Piker" meta="Featured Media channel page" />
        <LinkCard href="/media/democratic-socialists" title="DSA on YouTube" meta="Org channel in Archives" />
        <LinkCard href="/protests" title="Protests" meta="Assembly & coordination" />
        <LinkCard href="/protest-safety" title="Protest Safety" meta="Gear, exits, arrest protocol" />
        <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Speech, silence, counsel" />
        <LinkCard href="/democracy" title="Democracy Hub" meta="Health checks & civic lanes" />
        <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Pattern language of capture" />
        <LinkCard href="/surveillance" title="Surveillance" meta="Cameras, data, dragnets" />
        <LinkCard href="/nspm-7" title="NSPM-7" meta="Security memo literacy" />
        <LinkCard href="/resistance" title="Resistance Hub" meta="Organizing beyond one march" />
        <LinkCard href="/civil-liberties" title="Civil Liberties" meta="The rights stack" />
      </LinkGrid>
      <p>
        Long URL{' '}
        <a href="/democratic-socialists-of-america">/democratic-socialists-of-america</a> redirects
        here for full-name searches.
      </p>
    </ContentLayout>
  )
}
