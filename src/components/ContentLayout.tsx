import Link from 'next/link'
import type { ReactNode } from 'react'
import { AppStoreCta } from '@/components/AppStoreCta'
import { SiteFooter } from '@/components/SiteFooter'

type ContentLayoutProps = {
  title: string
  eyebrow?: string
  children: ReactNode
  showCta?: boolean
  ctaNote?: string
  disclaimer?: boolean
}

export function ContentLayout({
  title,
  eyebrow,
  children,
  showCta = true,
  ctaNote,
  disclaimer = true,
}: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-climate-black text-climate-cream flex flex-col">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-block text-climate-red hover:text-climate-cream transition-colors mb-8 font-bold"
          >
            ← Back to Home
          </Link>
          {eyebrow ? (
            <p className="text-climate-red/80 text-xs uppercase tracking-[0.18em] mb-4">{eyebrow}</p>
          ) : null}
          <h1 className="font-climate-bold text-4xl md:text-6xl text-climate-red mb-8 leading-tight">
            {title}
          </h1>
          <div className="space-y-5 text-climate-cream text-lg leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-climate-red [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-climate-red [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:ml-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:ml-2 [&_strong]:text-climate-cream [&_a]:text-climate-red [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-climate-cream">
            {children}
            {disclaimer ? (
              <p className="text-sm opacity-60 pt-4 border-t border-white/10 mt-8">
                Educational overview only — not legal advice. Laws vary by jurisdiction. Consult a
                qualified attorney for your situation. See our{' '}
                <Link href="/legal-disclaimer">legal disclaimer</Link>.
              </p>
            ) : null}
            {showCta ? <AppStoreCta note={ctaNote} /> : null}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

type LinkCardProps = {
  href: string
  title: string
  meta: string
}

export function LinkCard({ href, title, meta }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-climate-red/25 p-4 hover:border-climate-red/60 hover:bg-climate-red/10 transition-colors"
      style={{ textDecoration: 'none' }}
    >
      <span className="block text-climate-cream font-bold text-base mb-1 no-underline">{title}</span>
      <span className="block text-climate-cream/55 text-sm leading-snug no-underline">{meta}</span>
    </Link>
  )
}

export function LinkGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 not-prose">{children}</div>
}
