import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/constants'

type AppStoreCtaProps = {
  note?: string
  iosLabel?: string
  androidLabel?: string
}

export function AppStoreCta({
  note = 'Open Democracy Health, threat alerts, Protest Map, Emergency Beacon, offline rights guides, and Protection checklists in one app.',
  iosLabel = 'DOWNLOAD FOR iOS',
  androidLabel = 'DOWNLOAD FOR ANDROID',
}: AppStoreCtaProps) {
  return (
    <div className="mt-14 rounded-xl border-2 border-[#ebe3db] bg-climate-red px-6 py-8 text-center">
      <p className="mb-6 text-lg leading-relaxed text-climate-cream">{note}</p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="store-cta-btn inline-block whitespace-nowrap rounded-full bg-climate-black px-8 py-3 text-lg font-bold text-climate-cream no-underline transition-colors hover:bg-gray-900 hover:!text-climate-cream"
        >
          {iosLabel}
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="store-cta-btn inline-block whitespace-nowrap rounded-full bg-climate-cream px-8 py-3 text-lg font-bold text-climate-red no-underline transition-colors hover:bg-opacity-90 hover:!text-climate-red"
        >
          {androidLabel}
        </a>
      </div>
      <p className="mt-4 text-sm text-climate-cream opacity-80">
        Free version available · Pro: $4.99/month or $39.99/year · Free 7-day trial
      </p>
    </div>
  )
}
