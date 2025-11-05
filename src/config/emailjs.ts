/**
 * Configuration EmailJS pour l'envoi d'emails
 * 
 * INSTRUCTIONS POUR CONFIGURER EMAILJS :
 * 
 * 1. Créez un compte sur https://www.emailjs.com/
 * 2. Créez un service email (Gmail, Outlook, etc.)
 * 3. Créez un template d'email avec les variables :
 *    - {{formation}}
 *    - {{nom}}
 *    - {{email}}
 *    - {{telephone}}
 *    - {{message}}
 *    - {{to_email}}
 * 4. Récupérez vos clés depuis le dashboard EmailJS
 * 5. Remplacez les valeurs ci-dessous par vos vraies clés
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_h9d7qnt', // À remplacer par votre Service ID depuis le dashboard EmailJS
  TEMPLATE_ID: 'template_h164zhb', // À remplacer par votre Template ID depuis le dashboard EmailJS
  PUBLIC_KEY: 'oZdvdkB-d1Z2dgiGu', // À remplacer par votre Public Key depuis le dashboard EmailJS
  DESTINATION_EMAIL: 'zenobeglobe@gmail.com' // Email de destination
};

