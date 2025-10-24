import { useEffect } from 'react';

// ID de mesure Google Analytics (à remplacer par votre vrai ID)
const GA_MEASUREMENT_ID = 'G-8DJ2J3YTKM'; // Remplacez par votre ID réel

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    // Charger Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialiser gtag
    window.gtag = function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Écouter les changements de route pour les SPA
    const handleRouteChange = () => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Écouter les changements d'URL
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return null;
}

// Fonctions utilitaires pour tracker les événements
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
    });
  }
};

// Événements spécifiques pour ZenobeGlobe
export const trackContact = (method: 'phone' | 'email' | 'whatsapp' | 'form') => {
  trackEvent('contact', {
    event_category: 'engagement',
    event_label: method,
    value: 1
  });
};

export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', {
    event_category: 'services',
    event_label: serviceName,
    value: 1
  });
};

export const trackQuoteRequest = () => {
  trackEvent('quote_request', {
    event_category: 'conversion',
    event_label: 'contact_form',
    value: 1
  });
};

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    event_category: 'engagement',
    event_label: fileName,
    value: 1
  });
};


