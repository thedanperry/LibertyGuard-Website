export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LibertyGuard",
    "applicationCategory": "Utilities",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "4.99",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "10"
    },
    "description": "Your comprehensive democracy protection and resistance companion with real-time threat monitoring, protest coordination, and legal rights guides."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

