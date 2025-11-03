export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LibertyGuard",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://apps.apple.com/us/app/libertyguard/id6753902370"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "10",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Comprehensive activism and democracy protection app with real-time threat alerts, secure encrypted messaging, protest coordination tools, legal rights guides, and emergency protocols. Built for activists, organizers, and citizens defending democracy.",
    "featureList": [
      "Real-time threat intelligence and democracy health monitoring",
      "Secure encrypted community messaging",
      "Protest coordination and event finder",
      "Emergency beacon with GPS location sharing",
      "35+ offline resistance and legal rights guides",
      "Protest message generator with 100+ researched chants",
      "Legal rights protection and documentation tools",
      "Democracy health dashboard tracking civil rights and free speech"
    ],
    "screenshot": [
      "https://libertyguard.app/screenshots/LibertyGuard_Screenshot1.png",
      "https://libertyguard.app/screenshots/LibertyGuard_Screenshot2.png",
      "https://libertyguard.app/screenshots/LibertyGuard_Screenshot3.png",
      "https://libertyguard.app/screenshots/LibertyGuard_Screenshot4.png"
    ],
    "url": "https://libertyguard.app",
    "publisher": {
      "@type": "Organization",
      "name": "LibertyGuard"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

