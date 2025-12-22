import { useEffect } from "react";

interface LocalBusinessSchema {
  name: string;
  phone: string;
  email: string;
  url: string;
  logo: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
  areaServed: string[];
  sameAs: string[];
}

interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewSchema {
  author: string;
  reviewBody: string;
  reviewRating: number;
  datePublished: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
  localBusiness?: boolean;
  service?: ServiceSchema;
  faqItems?: FAQItem[];
  reviews?: ReviewSchema[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

const businessInfo: LocalBusinessSchema = {
  name: "CanManCam Pressure Washing",
  phone: "607-427-1175",
  email: "canmancam@yahoo.com",
  url: "https://canmancam.replit.app",
  logo: "https://canmancam.replit.app/attached_assets/canmancam-pressure-washing-mount-pleasant_1766437167448.png",
  image: "https://canmancam.replit.app/attached_assets/canmancam-pressure-washing-mount-pleasant_1766437167448.png",
  address: {
    streetAddress: "",
    addressLocality: "Mount Pleasant",
    addressRegion: "SC",
    postalCode: "29464",
    addressCountry: "US"
  },
  geo: {
    latitude: 32.8484556,
    longitude: -79.8108823
  },
  openingHours: ["Mo-Su 00:00-23:59"],
  priceRange: "$$",
  areaServed: [
    "Mount Pleasant, SC",
    "Isle of Palms, SC",
    "Sullivan's Island, SC",
    "Charleston, SC",
    "Daniel Island, SC",
    "James Island, SC",
    "West Ashley, SC",
    "North Charleston, SC"
  ],
  sameAs: []
};

export function SEO({
  title,
  description,
  canonicalUrl,
  keywords,
  ogImage,
  ogType = "website",
  breadcrumbs,
  localBusiness = true,
  service,
  faqItems,
  reviews,
  aggregateRating
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    updateMeta("description", description);
    if (keywords) updateMeta("keywords", keywords);
    
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType, true);
    if (ogImage) updateMeta("og:image", ogImage, true);
    if (canonicalUrl) updateMeta("og:url", canonicalUrl, true);
    
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:card", "summary_large_image");
    if (ogImage) updateMeta("twitter:image", ogImage);

    updateMeta("geo.region", "US-SC");
    updateMeta("geo.placename", "Mount Pleasant");
    updateMeta("geo.position", `${businessInfo.geo.latitude};${businessInfo.geo.longitude}`);
    updateMeta("ICBM", `${businessInfo.geo.latitude}, ${businessInfo.geo.longitude}`);

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", canonicalUrl);
    }

    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]');
    existingSchemas.forEach(el => el.remove());

    const schemas: object[] = [];

    if (localBusiness) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${businessInfo.url}/#localbusiness`,
        name: businessInfo.name,
        telephone: businessInfo.phone,
        email: businessInfo.email,
        url: businessInfo.url,
        logo: businessInfo.logo,
        image: businessInfo.image,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.address.streetAddress,
          addressLocality: businessInfo.address.addressLocality,
          addressRegion: businessInfo.address.addressRegion,
          postalCode: businessInfo.address.postalCode,
          addressCountry: businessInfo.address.addressCountry
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessInfo.geo.latitude,
          longitude: businessInfo.geo.longitude
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59"
        },
        priceRange: businessInfo.priceRange,
        areaServed: businessInfo.areaServed.map(area => ({
          "@type": "City",
          name: area
        })),
        sameAs: businessInfo.sameAs,
        ...(aggregateRating && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            reviewCount: aggregateRating.reviewCount,
            bestRating: 5,
            worstRating: 1
          }
        })
      });
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      });
    }

    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "LocalBusiness",
          name: service.provider,
          telephone: businessInfo.phone,
          url: businessInfo.url
        },
        areaServed: {
          "@type": "City",
          name: service.areaServed
        },
        serviceType: service.serviceType
      });
    }

    if (faqItems && faqItems.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      });
    }

    if (reviews && reviews.length > 0) {
      reviews.forEach(review => {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.author
          },
          reviewBody: review.reviewBody,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.reviewRating,
            bestRating: 5,
            worstRating: 1
          },
          datePublished: review.datePublished,
          itemReviewed: {
            "@type": "LocalBusiness",
            name: businessInfo.name
          }
        });
      });
    }

    schemas.forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      const schemas = document.querySelectorAll('script[type="application/ld+json"][data-seo="true"]');
      schemas.forEach(el => el.remove());
    };
  }, [title, description, canonicalUrl, keywords, ogImage, ogType, breadcrumbs, localBusiness, service, faqItems, reviews, aggregateRating]);

  return null;
}

export { businessInfo };
