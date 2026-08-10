import type { Metadata } from 'next'
import { ContentLayout, LinkCard, LinkGrid } from '@/components/ContentLayout'

export const metadata: Metadata = {
  title: "Police Militarization — Gear, Doctrine & Accountability",
  description: "What police militarization means: surplus equipment, crowd-control doctrine, and accountability debates—with protest safety links and LibertyGuard field tools.",
  alternates: {
    canonical: 'https://libertyguard.app/police-militarization',
  },
  openGraph: {
    title: "Police Militarization | LibertyGuard",
    description: "What police militarization means: surplus equipment, crowd-control doctrine, and accountability debates—with protest safety links and LibertyGuard field tools.",
    url: 'https://libertyguard.app/police-militarization',
  },
}

export default function Page() {
  return (
    <ContentLayout
      title="Police Militarization"
      eyebrow="Brief // Force"
      ctaNote="Before you assemble, open Protest Safety and Know Your Rights in LibertyGuard—Emergency Beacon and offline protocols when situations escalate."
    >
      <p>Police militarization refers to the spread of military-grade equipment, tactics, and culture into domestic policing—think armored vehicles, specialized munitions, and war-zone aesthetics at crowd events. Supporters argue readiness; critics argue that gear shapes behavior and escalates encounters that needed de-escalation instead.</p>
            <p>Federal surplus programs and post-9/11 funding streams (widely reported by major outlets and researchers) accelerated the trend. Accountability questions follow: bodycams, use-of-force policies, civilian oversight, and whether “riot” framing swallows peaceful assembly. Stick to documented policies and reputable investigations.</p>
            <p>If you protest, prepare for the environment you might meet: exits, legal observers, recording laws, and medical basics. LibertyGuard’s Protest Safety content, Emergency Beacon, and offline guides are built for that reality—not for fantasy combat.</p>
            <h2>Field context</h2>
            <LinkGrid>
              <LinkCard href="/protest-safety" title="Protest Safety" meta="Practical survival protocols" />
              <LinkCard href="/protests" title="Protests" meta="Assembly rights & coordination" />
              <LinkCard href="/know-your-rights" title="Know Your Rights" meta="Encounters & recording" />
              <LinkCard href="/surveillance" title="Surveillance" meta="Sensors at the perimeter" />
              <LinkCard href="/government-overreach" title="Government Overreach" meta="Force without oversight" />
              <LinkCard href="/resistance" title="Resistance Hub" meta="Long-game organizing" />
            </LinkGrid>
    </ContentLayout>
  )
}
