# Guide de Configuration SEO - ZenobeGlobe

## 📊 **GOOGLE ANALYTICS 4 - Configuration**

### 1. Créer un compte Google Analytics
1. Allez sur [analytics.google.com](https://analytics.google.com)
2. Cliquez sur "Commencer à mesurer"
3. Créez un compte pour "ZenobeGlobe"
4. Sélectionnez "Gabon" comme pays
5. Acceptez les conditions d'utilisation

### 2. Créer une propriété
1. Nom de la propriété : "ZenobeGlobe Website"
2. Fuseau horaire : "Africa/Libreville"
3. Devise : "XAF (Franc CFA)"
4. Secteur d'activité : "Technologie"

### 3. Créer un flux de données
1. Plateforme : "Web"
2. URL du site web : "https://zenobeglobe.com"
3. Nom du flux : "ZenobeGlobe Main Website"

### 4. Obtenir l'ID de mesure
- Format : G-XXXXXXXXXX
- À ajouter dans le code du site

## 🔍 **GOOGLE SEARCH CONSOLE - Configuration**

### 1. Ajouter une propriété
1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Cliquez sur "Ajouter une propriété"
3. URL : "https://zenobeglobe.com"
4. Méthode de vérification : "Balise HTML"

### 2. Vérifier la propriété
- Copiez la balise meta de vérification
- Ajoutez-la dans le `<head>` de index.html

### 3. Soumettre le sitemap
1. Allez dans "Sitemaps"
2. Ajoutez : "https://zenobeglobe.com/sitemap.xml"
3. Cliquez sur "Envoyer"

## 📈 **GOOGLE MY BUSINESS - Configuration**

### 1. Créer un profil
1. Allez sur [business.google.com](https://business.google.com)
2. Cliquez sur "Gérer maintenant"
3. Recherchez "ZenobeGlobe" ou créez un nouveau profil

### 2. Informations de base
```
Nom : ZenobeGlobe - Cybersécurité & IT
Catégorie : Services informatiques
Adresse : [Votre adresse à Libreville]
Téléphone : +237 671 524 727
Site web : https://zenobeglobe.com
```

### 3. Horaires d'ouverture
```
Lundi - Vendredi : 8h00 - 18h00
Samedi : 9h00 - 13h00
Dimanche : Fermé
```

### 4. Photos recommandées
- Photo de profil : Logo ZenobeGlobe
- Photos de couverture : Bureau, équipe, projets
- Photos de produits : Services IT, cybersécurité

## 🎯 **OBJECTIFS DE CONVERSION**

### Google Analytics - Événements à suivre
```javascript
// Contact par téléphone
gtag('event', 'phone_call', {
  'event_category': 'contact',
  'event_label': 'header_phone'
});

// Contact par email
gtag('event', 'email_click', {
  'event_category': 'contact',
  'event_label': 'footer_email'
});

// Contact WhatsApp
gtag('event', 'whatsapp_click', {
  'event_category': 'contact',
  'event_label': 'whatsapp_button'
});

// Clic sur service
gtag('event', 'service_click', {
  'event_category': 'services',
  'event_label': 'service_name'
});

// Demande de devis
gtag('event', 'quote_request', {
  'event_category': 'conversion',
  'event_label': 'contact_form'
});
```

## 📱 **MÉTRIQUES À SURVEILLER**

### 1. Métriques SEO
- Position moyenne sur mots-clés cibles
- Trafic organique mensuel
- Taux de clics (CTR) dans les résultats
- Impressions et clics par requête

### 2. Métriques de performance
- Temps de chargement des pages
- Core Web Vitals (LCP, FID, CLS)
- Taux de rebond
- Pages vues par session

### 3. Métriques de conversion
- Contacts générés par mois
- Taux de conversion global
- Coût par acquisition (CPA)
- Valeur vie client (LTV)

## 🔧 **OUTILS SEO RECOMMANDÉS**

### Gratuits
- Google Search Console
- Google Analytics 4
- Google PageSpeed Insights
- Google Mobile-Friendly Test
- Schema Markup Validator

### Payants (optionnels)
- SEMrush (99€/mois) - Analyse concurrentielle
- Ahrefs (99€/mois) - Backlinks et mots-clés
- Screaming Frog (259€/an) - Audit technique

## 📅 **CALENDRIER SEO**

### Semaine 1-2 : Fondations
- ✅ Meta tags optimisés
- ✅ Sitemap créé
- ✅ Robots.txt configuré
- ✅ Images optimisées

### Semaine 3-4 : Analytics
- 🔄 Google Analytics installé
- 🔄 Search Console configuré
- 🔄 Google My Business créé
- 🔄 Objectifs de conversion définis

### Mois 2-3 : Contenu
- 📝 4 articles de blog créés
- 📝 Pages de services détaillées
- 📝 Témoignages clients ajoutés
- 📝 FAQ enrichie

### Mois 4-6 : Autorité
- 🔗 Campagne de netlinking
- 🔗 Partenariats locaux
- 🔗 Guest posting
- 🔗 Optimisation continue

## 📊 **RAPPORTS MENSUELS**

### Métriques à suivre chaque mois :
1. **Trafic organique** : +20% par mois
2. **Position moyenne** : Amélioration sur mots-clés cibles
3. **Conversions** : Contacts générés
4. **Performance** : Core Web Vitals
5. **Autorité** : Nouveaux backlinks

### Actions correctives :
- Si trafic en baisse : Analyser les positions et optimiser le contenu
- Si conversions faibles : Améliorer les CTA et l'UX
- Si performance dégradée : Optimiser les images et le code
- Si autorité faible : Intensifier le netlinking

## 🎯 **OBJECTIFS 6 MOIS**

### Objectifs quantitatifs :
- **Position** : Top 3 sur "cybersécurité Gabon"
- **Trafic** : 1000 visiteurs organiques/mois
- **Conversions** : 50 contacts/mois
- **Autorité** : 20+ backlinks de qualité

### Objectifs qualitatifs :
- Reconnaissance locale au Gabon
- Partenariats avec entreprises gabonaises
- Références clients satisfaits
- Présence dans les médias locaux


