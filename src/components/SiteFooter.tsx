import Link from 'next/link'
import { EXPLORE_GROUPS } from '@/lib/explore'
import { SUPPORT_EMAIL } from '@/lib/constants'

type SiteFooterProps = {
  showExplore?: boolean
}

export function SiteFooter({ showExplore = true }: SiteFooterProps) {
  return (
    <footer className="bg-climate-black border-t border-white/10 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-6">
          <h3 className="text-climate-cream text-2xl font-bold mb-2">LIBERTY GUARD</h3>
          <p className="text-climate-cream text-sm opacity-60">Defend Democracy. Protect Rights.</p>
        </div>

        {showExplore ? (
          <div className="mb-10 text-left max-w-4xl mx-auto">
            <p className="text-climate-cream/50 text-xs uppercase tracking-[0.18em] mb-4 text-center">
              Explore
            </p>
            <div className="space-y-4">
              {EXPLORE_GROUPS.map((group) => (
                <p key={group.label} className="text-climate-cream/70 text-sm leading-relaxed">
                  <span className="text-climate-red font-bold mr-2">{group.label}</span>
                  {group.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 ? <span className="text-climate-cream/30"> · </span> : null}
                      <Link
                        href={link.href}
                        className="text-climate-cream/70 hover:text-climate-cream underline-offset-2 hover:underline transition-colors"
                      >
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
          <Link href="/features" className="text-climate-red hover:text-climate-cream transition-colors">
            Features
          </Link>
          <Link href="/blog" className="text-climate-red hover:text-climate-cream transition-colors">
            Blog
          </Link>
          <Link href="/privacy" className="text-climate-red hover:text-climate-cream transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-climate-red hover:text-climate-cream transition-colors">
            Terms of Service
          </Link>
          <Link href="/legal-disclaimer" className="text-climate-red hover:text-climate-cream transition-colors">
            Legal Disclaimer
          </Link>
          <Link href="/protest-safety" className="text-climate-red hover:text-climate-cream transition-colors">
            Protest Safety
          </Link>
          <Link href="/know-your-rights" className="text-climate-red hover:text-climate-cream transition-colors">
            Know Your Rights
          </Link>
        </div>
        <p className="text-climate-cream text-sm">
          Support:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-climate-red hover:underline font-bold">
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="text-climate-cream/40 text-xs mt-4">
          © {new Date().getFullYear()} LibertyGuard. Educational content only — not legal advice.
        </p>
      </div>
    </footer>
  )
}
