import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/constants'

type AppStoreCtaProps = {
  label?: string
  note?: string
}

export function AppStoreCta({
  label = 'DOWNLOAD LIBERTYGUARD',
  note = 'Open Democracy Health, threat alerts, Protest Map, Emergency Beacon, offline rights guides, and Protection checklists in one app.',
}: AppStoreCtaProps) {
  return (
    <div
      className="mt-14 rounded-xl border border-climate-red/40 p-6 md:p-8 text-center"
      style={{ backgroundColor: 'rgba(245, 67, 53, 0.12)' }}
    >
      <p className="text-climate-cream text-lg leading-relaxed mb-6">{note}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-climate-cream text-climate-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors"
        >
          {label} — iOS
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-climate-cream text-climate-black px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors"
        >
          {label} — Android
        </a>
      </div>
      <p className="text-climate-cream text-sm mt-4 opacity-80">
        Free version available · Pro: $4.99/month or $39.99/year · Free 7-day trial
      </p>
    </div>
  )
}
