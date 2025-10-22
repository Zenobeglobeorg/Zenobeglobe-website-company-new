import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

export default function SEO({
  title = "ZenobeGlobe - Expert Cybersécurité & Solutions IT au Gabon | Libreville et au cameroun",
  description = "ZenobeGlobe : Votre partenaire IT au Gabon. Cybersécurité, développement web/mobile, maintenance informatique, formation bureautique. Expertise locale, solutions sur mesure à Libreville.",
  keywords = "cybersécurité Gabon, développement web Libreville, maintenance informatique, formation bureautique, solutions IT, sécurité réseau, développement mobile, ZenobeGlobe",
  canonical = "https://zenobeglobe.com",
  ogImage = "https://zenobeglobe.com/og-image.jpg",
  structuredData
}: SEOProps) {
  const fullTitle = title.includes("ZenobeGlobe") ? title : `${title} | ZenobeGlobe`;
  
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = fullTitle;
    
    // Mettre à jour la meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Mettre à jour les meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Mettre à jour le canonical
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Mettre à jour Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute('content', ogImage);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
    // Ajouter les données structurées si fournies
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [fullTitle, description, keywords, canonical, ogImage, structuredData]);
  
  return null; // Ce composant ne rend rien visuellement
}

// Données structurées prédéfinies
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ZenobeGlobe",
  "description": "Expert en cybersécurité et solutions IT au Gabon",
  "url": "https://zenobeglobe.com",
  "logo": "https://zenobeglobe.com/Logo.svg",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+237-671-524-727",
    "contactType": "customer service",
    "email": "zenobeglobe@gmail.com",
    "availableLanguage": ["French", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libreville",
    "addressCountry": "GA"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "Gabon"
    },
    {
      "@type": "Country", 
      "name": "Cameroun"
    }
  ],
  "serviceType": [
    "Cybersécurité",
    "Développement Web",
    "Développement Mobile", 
    "Maintenance Informatique",
    "Formation Bureautique",
    "Marketing Digital",
    "Design Graphique"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/zenobeglobe",
    "https://www.facebook.com/zenobeglobe"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ZenobeGlobe",
  "image": "https://zenobeglobe.com/Logo.svg",
  "description": "Expert en cybersécurité et solutions IT au Gabon",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Libreville",
    "addressCountry": "GA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "0.4162",
    "longitude": "9.4673"
  },
  "url": "https://zenobeglobe.com",
  "telephone": "+237-671-524-727",
  "email": "zenobeglobe@gmail.com",
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "0.4162",
      "longitude": "9.4673"
    },
    "geoRadius": "500000"
  }
};
