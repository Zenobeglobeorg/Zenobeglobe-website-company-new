import { trackContact, trackServiceClick, trackQuoteRequest } from './GoogleAnalytics';

// Composant pour tracker les clics sur les liens de contact
export function ContactTracker({ method, children, ...props }: {
  method: 'phone' | 'email' | 'whatsapp' | 'form';
  children: React.ReactNode;
  [key: string]: any;
}) {
  const handleClick = () => {
    trackContact(method);
  };

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
}

// Composant pour tracker les clics sur les services
export function ServiceTracker({ serviceName, children, ...props }: {
  serviceName: string;
  children: React.ReactNode;
  [key: string]: any;
}) {
  const handleClick = () => {
    trackServiceClick(serviceName);
  };

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
}

// Composant pour tracker les demandes de devis
export function QuoteTracker({ children, ...props }: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  const handleClick = () => {
    trackQuoteRequest();
  };

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
}


