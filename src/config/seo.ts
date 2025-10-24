// Configuration SEO centralisée pour ZenobeGlobe

export const SEO_CONFIG = {
  // Informations de base
  siteName: 'ZenobeGlobe',
  siteUrl: 'https://zenobeglobe.com',
  siteDescription: 'Expert en cybersécurité et solutions IT au Gabon',
  
  // Contact
  contact: {
    phone: '+237-671-524-727',
    email: 'zenobeglobe@gmail.com',
    address: 'Libreville, Gabon',
    coordinates: {
      latitude: '0.4162',
      longitude: '9.4673'
    }
  },
  
  // Zones de service
  serviceAreas: ['Gabon', 'Cameroun'],
  
  // Services principaux
  services: [
    'Cybersécurité',
    'Développement Web',
    'Développement Mobile',
    'Maintenance Informatique',
    'Formation Bureautique',
    'Marketing Digital',
    'Design Graphique'
  ],
  
  // Mots-clés principaux
  keywords: {
    primary: [
      'cybersécurité Gabon',
      'développement web Libreville',
      'maintenance informatique',
      'formation bureautique',
      'solutions IT Gabon'
    ],
    secondary: [
      'sécurité réseau',
      'développement mobile',
      'ZenobeGlobe',
      'expert IT Libreville',
      'services informatiques Gabon'
    ],
    longTail: [
      'entreprise cybersécurité Libreville',
      'développeur web mobile Gabon',
      'maintenance informatique entreprise',
      'formation bureautique professionnelle',
      'solutions IT sur mesure Gabon'
    ]
  },
  
  // Réseaux sociaux
  social: {
    linkedin: 'https://www.linkedin.com/company/zenobeglobe',
    facebook: 'https://www.facebook.com/zenobeglobe',
    twitter: '@zenobeglobe'
  },
  
  // Images SEO
  images: {
    ogImage: 'https://zenobeglobe.com/og-image.jpg',
    twitterImage: 'https://zenobeglobe.com/twitter-image.jpg',
    logo: 'https://zenobeglobe.com/Logo.svg'
  },
  
  // Configuration Google Analytics
  analytics: {
    measurementId: 'G-XXXXXXXXXX', // À remplacer par votre ID réel
    events: {
      contact: 'contact',
      serviceClick: 'service_click',
      quoteRequest: 'quote_request',
      download: 'file_download'
    }
  },
  
  // Configuration des pages
  pages: {
    home: {
      title: 'ZenobeGlobe - Expert Cybersécurité & Solutions IT au Gabon | Libreville',
      description: 'ZenobeGlobe : Votre partenaire IT au Gabon. Cybersécurité, développement web/mobile, maintenance informatique, formation bureautique. Expertise locale, solutions sur mesure à Libreville.',
      keywords: 'cybersécurité Gabon, développement web Libreville, maintenance informatique, formation bureautique, solutions IT, sécurité réseau, développement mobile, ZenobeGlobe'
    },
    about: {
      title: 'À Propos - ZenobeGlobe | Expert Cybersécurité au Gabon',
      description: 'Découvrez ZenobeGlobe, votre partenaire IT au Gabon. Notre équipe d\'experts en cybersécurité et développement IT vous accompagne dans votre transformation digitale à Libreville.',
      keywords: 'à propos ZenobeGlobe, équipe cybersécurité Gabon, histoire entreprise IT Libreville, experts développement web Gabon'
    },
    services: {
      title: 'Services IT - ZenobeGlobe | Cybersécurité & Développement au Gabon',
      description: 'Découvrez nos services IT au Gabon : cybersécurité, développement web/mobile, maintenance informatique, formation bureautique. Solutions sur mesure à Libreville.',
      keywords: 'services IT Gabon, cybersécurité Libreville, développement web mobile, maintenance informatique, formation bureautique'
    },
    contact: {
      title: 'Contact - ZenobeGlobe | Expert IT au Gabon',
      description: 'Contactez ZenobeGlobe pour vos besoins en cybersécurité et développement IT au Gabon. Devis gratuit, expertise locale à Libreville.',
      keywords: 'contact ZenobeGlobe, expert IT Gabon, devis cybersécurité, consultation informatique Libreville'
    }
  },
  
  // Configuration des performances
  performance: {
    targetLoadTime: 3000, // 3 secondes
    imageOptimization: {
      quality: 80,
      formats: ['webp', 'avif', 'jpg'],
      lazyLoading: true
    },
    caching: {
      staticAssets: '1y',
      html: '1h',
      api: '5m'
    }
  },
  
  // Configuration du contenu
  content: {
    blogPostsPerMonth: 4,
    minWordCount: 800,
    maxWordCount: 2000,
    targetReadingTime: '5-8 minutes'
  }
};

// Fonctions utilitaires
export const generatePageTitle = (pageTitle: string, includeSiteName = true) => {
  if (includeSiteName && !pageTitle.includes(SEO_CONFIG.siteName)) {
    return `${pageTitle} | ${SEO_CONFIG.siteName}`;
  }
  return pageTitle;
};

export const generateMetaDescription = (description: string, maxLength = 160) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength - 3) + '...';
};

export const generateKeywords = (additionalKeywords: string[] = []) => {
  const allKeywords = [
    ...SEO_CONFIG.keywords.primary,
    ...SEO_CONFIG.keywords.secondary,
    ...additionalKeywords
  ];
  return [...new Set(allKeywords)].join(', ');
};

// Configuration des données structurées
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SEO_CONFIG.siteName,
  "description": SEO_CONFIG.siteDescription,
  "url": SEO_CONFIG.siteUrl,
  "logo": SEO_CONFIG.images.logo,
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": SEO_CONFIG.contact.phone,
    "contactType": "customer service",
    "email": SEO_CONFIG.contact.email,
    "availableLanguage": ["French", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SEO_CONFIG.contact.address.split(',')[0],
    "addressCountry": "GA"
  },
  "areaServed": SEO_CONFIG.serviceAreas.map(area => ({
    "@type": "Country",
    "name": area
  })),
  "serviceType": SEO_CONFIG.services,
  "sameAs": Object.values(SEO_CONFIG.social)
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SEO_CONFIG.siteName,
  "image": SEO_CONFIG.images.logo,
  "description": SEO_CONFIG.siteDescription,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": SEO_CONFIG.contact.address.split(',')[0],
    "addressCountry": "GA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SEO_CONFIG.contact.coordinates.latitude,
    "longitude": SEO_CONFIG.contact.coordinates.longitude
  },
  "url": SEO_CONFIG.siteUrl,
  "telephone": SEO_CONFIG.contact.phone,
  "email": SEO_CONFIG.contact.email,
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.contact.coordinates.latitude,
      "longitude": SEO_CONFIG.contact.coordinates.longitude
    },
    "geoRadius": "500000"
  }
});


