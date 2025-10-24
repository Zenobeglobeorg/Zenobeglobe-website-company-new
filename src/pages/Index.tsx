import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO, { organizationSchema } from "@/components/SEO";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Shield, 
  Users, 
  Globe, 
  ArrowRight,
  Award,
  Zap,
  Code,
  Smartphone,
  Monitor,
  Lock,
  Network,
  Settings,
  Wrench,
  Palette,
  Brush,
  Bot,
  TrendingUp,
  BookOpen,
  GraduationCap,
  MessageCircle,
  Clock,
  Quote,
  Star,
  CheckCircle,
  Mail,
  MapPin
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function Index() {
  return (
    <Layout>
      <SEO 
        title="ZenobeGlobe - Expert Cybersécurité & Solutions IT au Gabon | Libreville"
        description="ZenobeGlobe : Votre partenaire IT au Gabon. Cybersécurité, développement web/mobile, maintenance informatique, formation bureautique. Expertise locale, solutions sur mesure à Libreville."
        keywords="cybersécurité Gabon, développement web Libreville, maintenance informatique, formation bureautique, solutions IT, sécurité réseau, développement mobile, ZenobeGlobe"
        canonical="https://zenobeglobe.com/"
        structuredData={organizationSchema}
      />
      <div className="w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  return (
    <section 
      className="w-full px-4 lg:px-8 py-12 lg:py-20 overflow-hidden relative min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: "url('/Hero main.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <motion.div 
            className="flex-1 max-w-[816px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-white font-poppins text-4xl md:text-5xl lg:text-[80px] font-medium leading-tight lg:leading-[90px] mb-6 lg:mb-8"
              variants={fadeInUp}
            >
              Votre Partenaire en <strong>Cybersécurité</strong> & Solutions IT au <strong>Gabon</strong>
            </motion.h1>
            <motion.p 
              className="text-gray-200 font-inter text-lg lg:text-xl mb-8 lg:mb-12"
              variants={fadeInUp}
            >
              Sécurisez votre infrastructure IT avec <strong>ZENOBEGLOBE</strong> - Expert en cybersécurité à <strong>Libreville</strong>
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
              <Link
                to="/commencer"
                  className="inline-block px-10 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
              >
                Commencer
              </Link>
              </motion.div>
              <motion.div variants={fadeInUp}>
              <Link
                to="/travail"
                  className="inline-block px-10 py-4 border-4 border-[#4AA3DF] rounded-lg text-white font-inter font-semibold text-base hover:bg-[#4AA3DF] hover:bg-opacity-20 hover:scale-105 transition-all duration-300"
              >
                Notre Travail
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Espace pour l'équilibre visuel */}
          <motion.div 
            className="flex-shrink-0 lg:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            {/* Contenu optionnel pour l'espace droit */}
            <motion.div 
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-right">
                <motion.div
                  className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-poppins text-xl font-semibold mb-2">
                    Expertise IT
                  </h3>
                  <p className="text-gray-200 font-inter text-sm">
                    Plus de 5 ans d'expérience dans la cybersécurité et les solutions numériques
                  </p>
                </motion.div>
            </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Solutions fiables et sécurisées",
      description: "Protection avancée de vos données et systèmes"
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Support dédié pour chaque projet"
    },
    {
      icon: Globe,
      title: "Expertise locale et internationale",
      description: "Connaissance du marché africain et standards mondiaux"
    }
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 overflow-hidden bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 max-w-[733px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.div className="mb-6" variants={fadeInUp}>
              <motion.div 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--brand-blue))]/30 rounded-full mb-6"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
                  DÉCOUVREZ NOTRE HISTOIRE
                </span>
              </motion.div>
            </motion.div>
            
            <motion.h2 
              className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Sécurisez votre infrastructure IT avec{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                ZENOBEGLOBE
                </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8"
              variants={fadeInUp}
            >
              <strong>ZenobeGlobe</strong> est une entreprise technologique innovante basée à <strong>Libreville, Gabon</strong>, 
              spécialisée dans l'accompagnement des entreprises, administrations et 
              particuliers dans leur <strong>transition numérique</strong>. Nous offrons des <strong>solutions de cybersécurité</strong>, 
              <strong>développement web et mobile</strong>, et <strong>maintenance informatique</strong> au Gabon et au Cameroun.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="group relative bg-gradient-to-r from-[#090914] to-[#0a0a1a] rounded-2xl p-6 border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-white font-inter font-bold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 font-inter text-sm">
                        {feature.description}
                      </p>
              </div>
            </div>

                  {/* Effet de hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-cyan))]/5 to-[hsl(var(--brand-blue))]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
            <Link
              to="/a-propos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-lg text-white font-inter font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-300"
            >
                  <span>Explorez plus</span>
                  <ArrowRight className="w-5 h-5" />
            </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  to="/service"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[hsl(var(--brand-cyan))] rounded-lg text-[hsl(var(--brand-cyan))] font-inter font-semibold text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
                >
                  <span>Nos Services</span>
                  <Zap className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-shrink-0 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative w-full max-w-[522px]">
              <motion.div
                className="relative overflow-hidden rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/About.jpg"
                  alt="Équipe ZenobeGlobe - Experts cybersécurité et développement IT au Gabon"
                className="rounded-3xl w-full h-auto"
                  loading="lazy"
                  width="600"
                  height="400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
                
                {/* Éléments flottants */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-2xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-poppins text-lg font-semibold mb-2">
                    Excellence IT
                  </h4>
                  <p className="text-gray-300 font-inter text-sm">
                    Solutions sur mesure pour votre réussite
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-[hsl(var(--brand-cyan))]/20 to-[hsl(var(--brand-blue))]/20 shadow-lg -z-10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              />
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-gradient-to-br from-[hsl(var(--brand-blue))]/20 to-[hsl(var(--brand-cyan))]/20 shadow-lg -z-10 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Interface pour les services
interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState("Developpement web/mobile");

  // Structure complète des services par catégorie
  const allServices: Record<string, Service[]> = {
    "Developpement web/mobile": [
    {
      title: "Site Web",
        description: "Création de sites web modernes, performants et responsive adaptés à vos besoins.",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
        icon: Monitor,
        color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Application Web",
        description: "Développement d'applications web sur mesure pour digitaliser vos processus métier.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        icon: Code,
        color: "from-purple-500 to-pink-500"
    },
    {
      title: "Application Mobile",
        description: "Applications mobiles natives iOS et Android pour étendre votre présence digitale.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        icon: Smartphone,
        color: "from-green-500 to-emerald-500"
      },
    ],
    "Securité et reseau": [
      {
        title: "Audit Informatique",
        description: "Analyse complète de votre infrastructure IT pour identifier les failles et optimiser la sécurité.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        icon: Shield,
        color: "from-red-500 to-orange-500"
      },
      {
        title: "Solution Antivirus et Firewall",
        description: "Protection avancée contre les menaces avec des solutions antivirus et firewall de dernière génération.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        icon: Lock,
        color: "from-yellow-500 to-red-500"
      },
      {
        title: "Déploiement et Configuration",
        description: "Installation et configuration professionnelle de votre infrastructure réseau et sécurité.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        icon: Settings,
        color: "from-indigo-500 to-purple-500"
      },
      {
        title: "Architecture Réseau sur Mesure",
        description: "Conception et mise en place d'une architecture réseau adaptée à vos besoins spécifiques.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
        icon: Network,
        color: "from-teal-500 to-blue-500"
      },
    ],
    "Maintenance": [
      {
        title: "Maintenance Préventive",
        description: "Entretien régulier de vos systèmes pour éviter les pannes et optimiser les performances.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        icon: Wrench,
        color: "from-orange-500 to-yellow-500"
      },
      {
        title: "Maintenance Corrective",
        description: "Intervention rapide pour résoudre les problèmes techniques et rétablir vos services.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        icon: Settings,
        color: "from-red-500 to-pink-500"
      },
      {
        title: "Support Technique",
        description: "Assistance technique 24/7 pour tous vos besoins informatiques et résolution de problèmes.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        icon: Users,
        color: "from-blue-500 to-cyan-500"
      },
    ],
    "Design": [
      {
        title: "Design UI/UX",
        description: "Création d'interfaces utilisateur modernes et expériences utilisateur optimales.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        icon: Palette,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Identité Visuelle",
        description: "Développement de votre identité de marque avec logo, charte graphique et supports visuels.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        icon: Brush,
        color: "from-indigo-500 to-purple-500"
      },
      {
        title: "Design Graphique",
        description: "Création de supports visuels professionnels pour tous vos besoins marketing et communication.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
        icon: Award,
        color: "from-green-500 to-emerald-500"
      },
    ],
    "Automatisme": [
      {
        title: "Automatisation de Processus",
        description: "Optimisation de vos workflows avec des solutions d'automatisation intelligentes.",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
        icon: Bot,
        color: "from-cyan-500 to-blue-500"
      },
      {
        title: "Intégration Système",
        description: "Connexion et synchronisation de vos différents outils et systèmes métier.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        icon: Network,
        color: "from-teal-500 to-green-500"
      },
      {
        title: "Robotisation",
        description: "Mise en place de robots logiciels pour automatiser vos tâches répétitives.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
        icon: Zap,
        color: "from-yellow-500 to-orange-500"
      },
    ],
    "Marketing": [
      {
        title: "Marketing Digital",
        description: "Stratégies marketing digitales complètes pour booster votre présence en ligne.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        icon: TrendingUp,
        color: "from-green-500 to-emerald-500"
      },
      {
        title: "SEO & Référencement",
        description: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer plus de clients.",
        image: "https://images.unsplash.com/photo-1571677208737-b0e5149f9c2d?w=800&q=80",
        icon: Globe,
        color: "from-blue-500 to-indigo-500"
      },
      {
        title: "Gestion Réseaux Sociaux",
        description: "Animation et gestion professionnelle de vos comptes sur les réseaux sociaux.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        icon: Users,
        color: "from-pink-500 to-rose-500"
      },
    ],
    "Formations et outils collaboratifs": [
      {
        title: "Outils bureautiques avancés",
        description: "Maîtrisez Excel, Word, PowerPoint et Outlook pour optimiser votre productivité quotidienne et professionnaliser vos documents.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        icon: BookOpen,
        color: "from-blue-500 to-indigo-500"
      },
      {
        title: "Outils collaboratifs",
        description: "Apprenez à utiliser Teams, Zoom, Slack et Google Workspace pour des réunions et collaborations efficaces à distance.",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        icon: GraduationCap,
        color: "from-green-500 to-teal-500"
      },
      {
        title: "Gestion de Projet Digital",
        description: "Formez-vous aux méthodes et outils de gestion de projets digitaux pour mener à bien vos initiatives technologiques",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
        icon: Monitor,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Sécurité informatique",
        description: "Initiez votre personnel aux bonnes pratiques de cybersécurité pour protéger vos données sensibles et éviter les cyberattaques.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        icon: Shield,
        color: "from-purple-500 to-pink-500"
      },
    ],
  };

  const categories = [
    { id: "Maintenance", label: "Maintenance" },
    { id: "Design", label: "Design" },
    { id: "Developpement web/mobile", label: "Developpement web/mobile" },
    { id: "Automatisme", label: "Automatisme" },
    { id: "Marketing", label: "Marketing" },
    { id: "Formations et outils collaboratifs", label: "Formations et outils collaboratifs" },
    { id: "Securité et reseau", label: "Securité et reseau" },
  ];

  // Récupérer les services de la catégorie sélectionnée
  const displayedServices = allServices[selectedCategory as keyof typeof allServices] || [];

  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="bg-[hsl(var(--brand-blue))] rounded-[20px] px-6 md:px-12 lg:px-24 py-12 lg:py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div className="text-center mb-8 lg:mb-12" variants={fadeInUp}>
            <h2 className="text-white font-poppins text-2xl md:text-3xl font-semibold mb-6">
              Nos Services
            </h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {categories.map((cat, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.id)}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 md:px-10 py-2 md:py-2.5 rounded-[20px] font-inter text-base md:text-xl font-semibold transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-[hsl(var(--brand-cyan))] text-black shadow-lg"
                      : "bg-white text-black hover:bg-opacity-90"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            {displayedServices.map((service, idx) => (
              <motion.div
                key={`${selectedCategory}-${idx}`}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col transition-all duration-300 cursor-pointer hover:border-[hsl(var(--brand-cyan))]/50"
              >
                <Link to="/service" className="flex flex-col h-full relative z-10">
                  <div className="relative mb-6">
                    <motion.div
                      className="relative overflow-hidden rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                  <img
                    src={service.image}
                    alt={`${service.title} - Service ${service.title.toLowerCase()} par ZenobeGlobe au Gabon`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </motion.div>
                    
                    {/* Icône moderne */}
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-white to-gray-100 border-4 border-white shadow-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
                    </motion.div>
                      </div>
                  
                  <div className="text-center mt-8 flex-1 flex flex-col">
                    <h3 className="text-white font-poppins text-xl font-extrabold mb-3 group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                    {service.title}
                  </h3>
                    <p className="text-white font-inter text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                    
                    <motion.div
                      className="mt-auto"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-[hsl(var(--brand-cyan))] font-inter font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                </div>
                </Link>
                
                {/* Effet de hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-cyan))]/5 to-[hsl(var(--brand-blue))]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const team = [
    {
      name: "Ngoulou Zenobe", 
      role: "CEO & Fondateur", 
      image: "/img-6.jpg",
      bio: "Visionnaire et leader technologique avec plus de 8 ans d'expérience",
      highlight: true,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Matida Flora", 
      role: "Product Manager", 
      image: "/img-1.jpg",
      bio: "Spécialiste en gestion de produits et stratégie digitale",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Brice", 
      role: "CTO",
      image: "/img-2.jpg",
      bio: "Expert en architecture technique et innovation",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Aurel", 
      role: "Designer UX/UI", 
      image: "/img-3.jpg",
      bio: "Créateur d'expériences utilisateur exceptionnelles",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Diallo", 
      role: "Dev Backend", 
      image: "/img-4.jpg",
      bio: "Développeur backend passionné par les solutions robustes",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Toussok Fabricia", 
      role: "Dev Frontend", 
      image: "/img-5.jpg",
      bio: "Spécialiste en interfaces modernes et réactives",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Djoko Franck", 
      role: "Dev Fullstack", 
      image: "/img-7.jpg",
      bio: "Développeur polyvalent maîtrisant toutes les technologies",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Nick Giresse", 
      role: "Dev Fullstack", 
      image: "/img-8.jpg",
      bio: "Expert en développement d'applications complexes",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Kenne Tiomene", 
      role: "Designer Graphique", 
      image: "/img-9.jpg",
      bio: "Créateur visuel avec un sens artistique développé",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
    { 
      name: "Wilfried Cheffer", 
      role: "Responsable Marketing", 
      image: "/img-10.jpg",
      bio: "Stratège marketing digital et communication",
      highlight: false,
      social: { linkedin: "#", twitter: "#" }
    },
  ];
  /*const team = [
    { name: "Axel Pebe", role: "CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Ella Grace", role: "CTO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { name: "Jade Perez", role: "Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { name: "Liam Smith", role: "Dev Frontend", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" },
    { name: "Noah Brown", role: "Dev Backend", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80" },
    { name: "Emma Wilson", role: "Product Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
    { name: "Olivia Taylor", role: "UX Researcher", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80" },
    { name: "Lucas Martin", role: "QA Engineer", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80" },
    { name: "Sophia Davis", role: "Marketing", image: "https://images.unsplash.com/photo-1547425260-84e9d3f06c64?w=400&q=80" },
  ];*/

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-black overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
        <h2 className="text-white font-poppins text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Notre Equipe
        </h2>
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto mb-12 lg:mb-16">
          Une équipe d'experts passionnés dédiée à votre succès numérique
        </p>
        </motion.div>

        <Carousel 
          className="max-w-5xl mx-auto" 
          opts={{ align: "start", loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
          {team.map((member, idx) => (
              <CarouselItem key={idx} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                <motion.div 
                  className="group relative bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Image avec overlay */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <motion.img
                src={member.image}
                      alt={`${member.name} - ${member.role} chez ZenobeGlobe, expert IT au Gabon`}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      width="300"
                      height="375"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Overlay avec gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Badge highlight */}
                    {member.highlight && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] text-white px-3 py-1 rounded-full text-xs font-semibold"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        Leader
                      </motion.div>
                    )}
                    
                    {/* Social links au hover */}
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-blue))] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[hsl(var(--brand-cyan))] transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </motion.a>
                    </motion.div>
                  </div>
                  
                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-white font-poppins text-xl font-bold mb-2 group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                {member.name}
              </h3>
                    <p className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
            </div>
                  
                  {/* CTA moderne */}
                  <div className="border-t border-gray-800 p-4">
                    <Link to="/a-propos" className="relative z-10">
                      <motion.button
                        className={`w-full py-3 text-white font-inter text-sm font-semibold rounded-lg transition-all duration-300 ${
                          member.highlight
                            ? "bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] hover:opacity-90"
                            : "bg-gray-800 hover:bg-[hsl(var(--brand-blue))]/20 hover:text-[hsl(var(--brand-cyan))]"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        En savoir plus
                      </motion.button>
                    </Link>
        </div>

                  {/* Effet de hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-cyan))]/5 to-[hsl(var(--brand-blue))]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-90px] bg-white" />
          <CarouselNext className="right-[-90px] bg-white" />
        </Carousel>

        {/* Dots/Pagination */}
        <motion.div 
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {Array.from({ length: count }).map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx + 1 
                  ? "bg-[hsl(var(--brand-cyan))] scale-125" 
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "Comment créer un compte ?",
      answer:
        "La création d'un compte est simple et rapide. Cliquez sur le bouton 'Commencer' en haut de la page, remplissez le formulaire avec vos informations et validez. Vous recevrez un email de confirmation pour activer votre compte.",
      icon: Users,
      category: "Compte"
    },
    {
      question: "Quelles méthodes de paiement acceptez-vous ?",
      answer:
        "Nous acceptons les principales cartes bancaires (Visa, Mastercard), les virements bancaires et Mobile Money. Tous les paiements sont sécurisés et cryptés pour garantir la protection de vos données.",
      icon: Shield,
      category: "Paiement"
    },
    {
      question: "Proposez-vous un support technique ?",
      answer:
        "Oui, notre équipe de support est disponible 24/7 pour répondre à toutes vos questions. Vous pouvez nous contacter par email, téléphone ou via notre chat en ligne. Nous garantissons un temps de réponse rapide.",
      icon: Settings,
      category: "Support"
    },
    {
      question: "Quelle est votre politique de remboursement ?",
      answer:
        "Si vous n'êtes pas satisfait de nos services, nous offrons une garantie satisfait ou remboursé de 30 jours. Contactez notre équipe et nous traiterons votre demande dans les plus brefs délais.",
      icon: Award,
      category: "Garantie"
    },
    {
      question: "Combien de temps dure le support ?",
      answer:
        "Le support est inclus pendant toute la durée de votre contrat. Pour les projets ponctuels, nous offrons 6 mois de support gratuit, puis vous pouvez souscrire à un plan de maintenance selon vos besoins.",
      icon: Clock,
      category: "Support"
    },
    {
      question: "Proposez-vous des formations personnalisées ?",
      answer:
        "Absolument ! Nous proposons des formations sur mesure adaptées à vos besoins spécifiques en cybersécurité, développement web, et outils bureautiques. Contactez-nous pour établir un programme personnalisé.",
      icon: GraduationCap,
      category: "Formation"
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-br from-[#090914] via-[#0a0a1a] to-[#090914] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-cyan))]/10 border border-[hsl(var(--brand-cyan))]/20 mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full animate-pulse"></div>
            <span className="text-[hsl(var(--brand-cyan))] text-sm font-medium">FAQ</span>
        </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-[hsl(var(--brand-gray-light))] text-lg max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--brand-cyan))]/10 group-hover:to-transparent transition-all duration-300">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))] flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg group-hover:text-[hsl(var(--brand-cyan))] transition-colors duration-300">
                  {faq.question}
                </h3>
                          <span className="text-[hsl(var(--brand-gray-light))] text-sm">
                            {faq.category}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-14">
                        <p className="text-[hsl(var(--brand-gray-light))] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-[hsl(var(--brand-cyan))]/10 to-[hsl(var(--brand-blue))]/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Vous avez d'autres questions ?
                </h3>
            <p className="text-[hsl(var(--brand-gray-light))] mb-6">
              Notre équipe est là pour vous aider. Contactez-nous directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/237671524727"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-cyan))] text-white rounded-lg font-semibold hover:bg-[hsl(var(--brand-cyan))]/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </motion.a>
              <motion.a
                href="mailto:zenobeglobe@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[hsl(var(--brand-cyan))] text-[hsl(var(--brand-cyan))] rounded-lg font-semibold hover:bg-[hsl(var(--brand-cyan))]/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Envoyer un Email
              </motion.a>
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "ZenobeGlobe a transformé notre infrastructure IT. Service professionnel et support réactif. Une équipe exceptionnelle qui comprend vraiment nos besoins.",
      author: "Jean Martin",
      role: "CEO, TechGabon",
      avatar: "/profil-1.webp",
      rating: 5,
      company: "TechGabon"
    },
    {
      text: "Excellent service, je recommande vivement pour tous vos projets de transformation digitale. Leur expertise en cybersécurité est remarquable.",
      author: "Marie Claire",
      role: "CTO, Innovate",
      avatar: "/profil-2.jpg",
      rating: 5,
      company: "Innovate"
    },
    {
      text: "Équipe professionnelle avec une grande expertise en cybersécurité. Résultats au-delà de nos attentes. Un partenaire de confiance.",
      author: "Alex Mbongo",
      role: "IT Manager",
      avatar: "/profil-3.webp",
      rating: 5,
      company: "Digital Solutions"
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-br from-[#0a0a1a] via-[#090914] to-[#0a0a1a] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.01%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-cyan))]/10 border border-[hsl(var(--brand-cyan))]/20 mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full animate-pulse"></div>
            <span className="text-[hsl(var(--brand-cyan))] text-sm font-medium">TÉMOIGNAGES</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ce que disent nos clients
        </h2>
          <p className="text-[hsl(var(--brand-gray-light))] text-lg max-w-2xl mx-auto">
            Découvrez les retours de nos clients satisfaits
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
              </div>
              
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--brand-cyan))] text-[hsl(var(--brand-cyan))]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-[hsl(var(--brand-gray-light))] font-inter text-left leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[hsl(var(--brand-cyan))]/30"
                />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[hsl(var(--brand-cyan))] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <h4 className="text-white font-inter font-semibold text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-[hsl(var(--brand-gray-light))] text-sm">{testimonial.role}</p>
                  <p className="text-[hsl(var(--brand-cyan))] text-xs font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[hsl(var(--brand-cyan))]/10 to-[hsl(var(--brand-blue))]/10 rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--brand-cyan))] mb-2">50+</div>
                <div className="text-[hsl(var(--brand-gray-light))] text-sm">Clients Satisfaits</div>
        </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--brand-cyan))] mb-2">100%</div>
                <div className="text-[hsl(var(--brand-gray-light))] text-sm">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--brand-cyan))] mb-2">24/7</div>
                <div className="text-[hsl(var(--brand-gray-light))] text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--brand-cyan))] mb-2">5★</div>
                <div className="text-[hsl(var(--brand-gray-light))] text-sm">Note Moyenne</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="w-full py-12 lg:py-20 bg-gradient-to-br from-[#090914] via-[#0a0a1a] to-[#090914] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-cyan))]/10 border border-[hsl(var(--brand-cyan))]/20 mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full animate-pulse"></div>
            <span className="text-[hsl(var(--brand-cyan))] text-sm font-medium">CONTACT</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-[hsl(var(--brand-gray-light))] text-lg max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en cybersécurité et développement
          </p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto border border-white/10 backdrop-blur-sm"
          variants={scaleIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Methods */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:zenobeglobe@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-cyan))]/10 to-transparent border border-[hsl(var(--brand-cyan))]/20 hover:border-[hsl(var(--brand-cyan))]/40 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))] flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
            </div>
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                    Email
                  </h3>
                  <p className="text-[hsl(var(--brand-gray-light))] text-sm">
                    zenobeglobe@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a 
                href="https://wa.me/237671524727"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-cyan))]/10 to-transparent border border-[hsl(var(--brand-cyan))]/20 hover:border-[hsl(var(--brand-cyan))]/40 transition-all duration-300 group"
                variants={fadeInUp}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
            </div>
                <div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-[hsl(var(--brand-gray-light))] text-sm">
                    +237 671 524 727
                  </p>
          </div>
              </motion.a>

              <motion.div 
                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[hsl(var(--brand-cyan))]/10 to-transparent border border-[hsl(var(--brand-cyan))]/20"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))] flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
        </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Localisation
                  </h3>
                  <p className="text-[hsl(var(--brand-gray-light))] text-sm">
                    Libreville, Gabon
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col justify-center space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Commencez votre projet
                </h3>
                <p className="text-[hsl(var(--brand-gray-light))] mb-6">
                  Obtenez un devis gratuit et personnalisé pour votre projet
                </p>
              </div>
              
              <div className="space-y-4">
                <motion.a
                  href="https://wa.me/237671524727"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[hsl(var(--brand-cyan))] text-white rounded-lg font-semibold hover:bg-[hsl(var(--brand-cyan))]/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Demander un Devis Gratuit
                </motion.a>
                
                <motion.a
                  href="mailto:zenobeglobe@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-[hsl(var(--brand-cyan))] text-[hsl(var(--brand-cyan))] rounded-lg font-semibold hover:bg-[hsl(var(--brand-cyan))]/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Envoyer un Email
                </motion.a>
              </div>
              
              <div className="text-center">
                <p className="text-[hsl(var(--brand-gray-light))] text-sm">
                  Réponse garantie sous 24h
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
