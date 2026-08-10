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

const proseLink =
  '[&_a:not(.seo-card):not(.store-cta-btn)]:font-bold [&_a:not(.seo-card):not(.store-cta-btn)]:text-climate-red [&_a:not(.seo-card):not(.store-cta-btn)]:underline [&_a:not(.seo-card):not(.store-cta-btn)]:underline-offset-2 [&_a:not(.seo-card):not(.store-cta-btn)]:hover:text-climate-cream'

export function ContentLayout({
  title,
  eyebrow,
  children,
  showCta = true,
  ctaNote,
  disclaimer = true,
}: ContentLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-climate-black text-climate-cream">
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Link
            href="/"
            className="mb-8 inline-block font-bold text-climate-red transition-colors hover:text-climate-cream"
          >
            ← Back to Home
          </Link>
          {eyebrow ? (
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-climate-red/80">{eyebrow}</p>
          ) : null}
          <h1 className="mb-8 font-climate-bold text-4xl leading-tight text-climate-red md:text-6xl">
            {title}
          </h1>
          <div
            className={`space-y-5 text-lg leading-relaxed text-climate-cream [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-climate-red [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-climate-red [&_ul]:ml-2 [&_ul]:list-inside [&_ul]:list-disc [&_ul]:space-y-2 [&_ol]:ml-2 [&_ol]:list-inside [&_ol]:list-decimal [&_ol]:space-y-2 [&_strong]:text-climate-cream ${proseLink}`}
          >
            {children}
            {disclaimer ? (
              <p className="mt-8 border-t border-[#f54335]/25 pt-4 text-sm opacity-60">
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
      className="seo-card block rounded-lg border border-[#f54335]/40 bg-[#f54335]/10 px-4 py-4 text-climate-cream no-underline transition hover:border-[#f54335] hover:bg-[#f54335]/20 hover:!text-climate-cream"
    >
      <span className="mb-1.5 block text-[1.05rem] font-bold text-climate-red no-underline">
        {title}
      </span>
      <span className="block text-sm leading-snug text-climate-cream no-underline">{meta}</span>
    </Link>
  )
}

export function LinkGrid({ children }: { children: ReactNode }) {
  return <div className="not-prose my-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">{children}</div>
}
