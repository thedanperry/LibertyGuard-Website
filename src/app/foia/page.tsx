import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "FOIA Guide — Using the Freedom of Information Act",
  description: "How FOIA works for journalists, organizers, and citizens: requests, exemptions, appeals—and why paper trails matter for accountability. Ties to LibertyGuard civic tools.",
  alternates: {
    canonical: 'https://libertyguard.app/foia',
  },
  openGraph: {
    title: "FOIA | LibertyGuard",
    description: "How FOIA works for journalists, organizers, and citizens: requests, exemptions, appeals—and why paper trails matter for accountability. Ties to LibertyGuard civic tools.",
    url: 'https://libertyguard.app/foia',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="FOIA"
      eyebrow="Toolkit // Daylight"
      ctaNote="Stay alert to accountability stories with LibertyGuard threat intel, then use offline Education guides while you chase paper trails."
    >
      <p>The Freedom of Information Act is America’s official “show your work” button for federal agencies. Journalists use it. Researchers use it. Annoyed citizens use it. You request records; the agency responds (sometimes slowly, sometimes with a black highlighter that could double as modern art).</p>
            <p>Exemptions exist for classified material, personal privacy, deliberative process, and more—disputes often land in appeals or court. State open-records laws cover state and local agencies with their own quirks. Practical tip: be specific, keep deadlines, and publish what you get. Sunlight is a team sport.</p>
            <p>FOIA will not replace street-level organizing, but it pairs beautifully with protest documentation and press freedom. LibertyGuard keeps you plugged into threat signals while Education packs stay available offline between request rounds.</p>
            <h2>Connect the dots</h2>
            <LinkGrid>
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Why reporters file FOIAs" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Ask for the camera policies" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Paper trails vs vibes" />
              <LinkCard href="/resistance" title="Resistance Hub" meta="Accountability as strategy" />
              <LinkCard href="/nspm-7" title="NSPM-7" meta="Memo literacy" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Rights worth documenting" />
            </LinkGrid>
    </ContentLayout>
  )
}
