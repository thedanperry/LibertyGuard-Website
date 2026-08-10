import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Project 2025 Explained — Policy Blueprint, Facts & Context",
  description: "A careful factual overview of Project 2025 as a published policy blueprint: what it is, who authored related materials, and why civic watchers track it—plus LibertyGuard monitoring tools.",
  alternates: {
    canonical: 'https://libertyguard.app/project-2025',
  },
  openGraph: {
    title: "Project 2025 | LibertyGuard",
    description: "A careful factual overview of Project 2025 as a published policy blueprint: what it is, who authored related materials, and why civic watchers track it—plus LibertyGuard monitoring tools.",
    url: 'https://libertyguard.app/project-2025',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Project 2025"
      eyebrow="Brief // Policy Architecture"
      ctaNote="LibertyGuard’s Democracy Health model can factor Project 2025–related tracking into civic pressure signals—verify claims against primary documents."
    >
      <p>Project 2025 is a large, published policy initiative associated with The Heritage Foundation and allied contributors: a playbook for restructuring parts of the federal government and advancing a conservative governing agenda. It is a real document set—not a campfire legend. Read primary materials and mainstream explainers; do not outsource your brain to a viral screenshot.</p>
            <p>Supporters describe it as preparedness and reform. Critics—including many civil liberties advocates and democratic-institution watchers—argue portions would concentrate executive power and reshape agency independence. Attribute those arguments to named analysts and organizations. Avoid claiming secret criminal conspiracies; debate the text.</p>
            <p>LibertyGuard includes Project 2025–aware tracking in democracy impact modeling so users can see policy architecture debates alongside other civic pressure signals. Always cross-check with the source documents.</p>
            <h2>Context</h2>
            <LinkGrid>
              <LinkCard href="/authoritarianism" title="Authoritarianism" meta="Institutional capture patterns" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Power concentration risks" />
              <LinkCard href="/trumpism" title="Trumpism" meta="Adjacent movement politics" />
              <LinkCard href="/democracy" title="Democracy Hub" meta="Health checks" />
              <LinkCard href="/press-freedom" title="Press Freedom" meta="Covering policy fights" />
              <LinkCard href="/civil-liberties" title="Civil Liberties" meta="Rights at stake" />
            </LinkGrid>
    </ContentLayout>
  )
}
