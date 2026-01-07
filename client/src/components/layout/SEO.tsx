import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/attached_assets/images/luxury_bali_resort_infinity_pool_at_sunset.png",
  structuredData,
}: SEOProps) {
  const [location] = useLocation();
  const fullUrl = `https://balipoolpros.com${location}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");
        metaKeywords.setAttribute("name", "keywords");
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute("content", keywords);
    }

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl || fullUrl);

    // Update Open Graph meta tags
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": fullUrl,
      "og:image": ogImage,
      "og:type": "website",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement("meta");
        ogTag.setAttribute("property", property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute("content", content);
    });

    // Update Twitter meta tags
    const twitterTags = {
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement("meta");
        twitterTag.setAttribute("name", name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute("content", content);
    });

    // Add structured data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, structuredData, fullUrl]);

  return null;
}

// Default structured data for the business
export const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bali Pool Pros",
  description:
    "Professional pool service in Bali offering pool maintenance, cleaning, repair, and installation for villas, resorts, and residential properties.",
  url: "https://balipoolpros.com",
  telephone: "+62 822-3756-5997",
  email: "info@balipoolpros.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Ubud No. 45",
    addressLocality: "Gianyar",
    addressRegion: "Bali",
    postalCode: "80571",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.5069,
    longitude: 115.2624,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],

  image:
    "https://balipoolpros.com/attached_assets/images/luxury_bali_resort_infinity_pool_at_sunset.png",
  sameAs: [
    "https://www.facebook.com/balipoolpros",
    "https://www.instagram.com/balipoolpros",
    "https://twitter.com/balipoolpros",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -8.4095,
      longitude: 115.1889,
    },
    geoRadius: "100 km",
  },
  serviceType: [
    "Pool Maintenance",
    "Pool Cleaning",
    "Pool Repair",
    "Pool Installation",
    "Water Testing",
    "Chemical Balancing",
  ],
};
