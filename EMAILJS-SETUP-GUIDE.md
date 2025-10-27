# Guide de Configuration EmailJS pour le Formulaire de Réservation

## 📋 Table des matières
1. [Créer un compte EmailJS](#1-créer-un-compte-emailjs)
2. [Configurer un service email](#2-configurer-un-service-email)
3. [Créer un template d'email](#3-créer-un-template-demail)
4. [Récupérer les clés d'API](#4-récupérer-les-clés-dapi)
5. [Configurer votre application](#5-configurer-votre-application)
6. [Tester le formulaire](#6-tester-le-formulaire)

---

## 1. Créer un compte EmailJS

1. Rendez-vous sur https://www.emailjs.com/
2. Cliquez sur **"Get Started"** ou **"Sign Up"**
3. Créez votre compte (email + mot de passe)
4. Confirmez votre email si nécessaire

---

## 2. Configurer un service email

1. Après connexion, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** généré (ex: `service_abc123`)

---

## 3. Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Donnez un nom à votre template (ex: "Formation Reservation")
4. Configurez le template avec les variables suivantes :

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
  <h2>Nouvelle Demande de Réservation de Formation</h2>
  
  <div style="margin: 20px 0;">
    <h3>Informations du client :</h3>
    <p><strong>Formation :</strong> {{formation}}</p>
    <p><strong>Nom complet :</strong> {{nom}}</p>
    <p><strong>Email :</strong> {{email}}</p>
    <p><strong>Téléphone :</strong> {{telephone}}</p>
    <p><strong>Message :</strong> {{message}}</p>
  </div>
  
  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc;">
    <p style="color: #666; font-size: 12px;">Email envoyé depuis le formulaire de réservation ZenobeGlobe</p>
  </div>
</body>
</html>
```

5. Dans les paramètres du template :
   - **To Email** : `{{to_email}}`
   - **From Name** : ZenobeGlobe
   - **From Email** : Votre email
   - **Subject** : Nouvelle Demande de Réservation - {{formation}}

6. Sauvegardez le template et notez le **Template ID** (ex: `template_xyz789`)

---

## 4. Récupérer les clés d'API

1. Allez dans **"Account"** → **"General"**
2. Trouvez la section **"API Keys"**
3. Copiez votre **Public Key** (ex: `aBc123DeF456...`)

---

## 5. Configurer votre application

1. Ouvrez le fichier `src/config/emailjs.ts`
2. Remplacez les valeurs suivantes :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'votre_service_id',      // Service ID du step 2
  TEMPLATE_ID: 'votre_template_id',    // Template ID du step 3
  PUBLIC_KEY: 'votre_public_key',      // Public Key du step 4
  DESTINATION_EMAIL: 'zenobeglobe@gmail.com' // Votre email de destination
};
```

**Exemple :**
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',
  TEMPLATE_ID: 'template_xyz789',
  PUBLIC_KEY: 'aBc123DeF456GhI789JkL0',
  DESTINATION_EMAIL: 'zenobeglobe@gmail.com'
};
```

3. Sauvegardez le fichier

---

## 6. Tester le formulaire

1. Démarrez votre application : `npm run dev`
2. Allez sur la page Formation
3. Cliquez sur "S'inscrire maintenant" ou "Réserver une formation"
4. Remplissez le formulaire
5. Cliquez sur "Réserver la Formation"
6. Vérifiez que vous recevez bien l'email

---

## 🔒 Sécurité

**⚠️ Important** : Les clés EmailJS sont visibles côté client. Pour une sécurité maximale :

1. Utilisez uniquement la **Public Key** (pas la Private Key)
2. Limitez les quotas sur votre compte EmailJS
3. Activez la **"Public Key restriction"** dans les paramètres
4. Surveillez les envois depuis le dashboard EmailJS

---

## 🆘 Dépannage

### Le formulaire ne s'envoie pas

1. Vérifiez que vous avez bien remplacé toutes les clés dans `src/config/emailjs.ts`
2. Vérifiez la console du navigateur pour les erreurs
3. Assurez-vous que votre service email est bien connecté dans EmailJS
4. Vérifiez que votre template utilise bien les bonnes variables

### "Invalid API Key" error

1. Vérifiez que la Public Key est correcte
2. Assurez-vous que la clé n'a pas expiré
3. Réactivez la clé depuis le dashboard EmailJS

### L'email ne parvient pas

1. Vérifiez le dossier spam de votre boîte email
2. Vérifiez que l'email de destination est correct
3. Vérifiez les logs EmailJS dans le dashboard

---

## 📊 Limites EmailJS

### Plan Gratuit
- 200 emails/mois
- 2 services email
- 5 templates

### Plan Payant (Recommandé pour production)
- Emails illimités
- Support prioritaire
- Analytics avancées

Pour passer au plan payant : https://www.emailjs.com/pricing

---

## ✅ Checklist de configuration

- [ ] Compte EmailJS créé
- [ ] Service email configuré
- [ ] Template d'email créé avec les bonnes variables
- [ ] Clés API récupérées
- [ ] Configuration mise à jour dans `src/config/emailjs.ts`
- [ ] Test d'envoi réussi
- [ ] Email reçu correctement

---

## 📧 Support

Pour toute question sur EmailJS :
- Documentation : https://www.emailjs.com/docs/
- Support : support@emailjs.com

Pour toute question sur le site ZenobeGlobe :
- Email : zenobeglobe@gmail.com
- WhatsApp : +237 671 524 727

