import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto">
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
              Votre Partenaire en Cybersécurité & Solution Numérique
            </motion.h1>
            <motion.p 
              className="text-[hsl(var(--brand-gray-text))] font-inter text-lg lg:text-lg mb-8 lg:mb-12"
              variants={fadeInUp}
            >
              Securisez votre infrastructures IT avec ZENOBEGLOBE
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
          <motion.div 
            className="flex-shrink-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <motion.div 
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                alt="Cybersecurity"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 overflow-hidden">
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
              <p className="text-[hsl(var(--brand-blue))] font-inter font-bold text-base mb-1">
                DECOUVREZ NOTRE HISTOIRE
              </p>
              <motion.div 
                className="w-14 h-0.5 bg-[hsl(var(--brand-blue))]"
                initial={{ width: 0 }}
                whileInView={{ width: 56 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
            </motion.div>
            <motion.h2 
              className="text-white font-inter font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6"
              variants={fadeInUp}
            >
              Sécurisez votre infrastructures IT avec ZENOBEGLOBE
            </motion.h2>
            <motion.p 
              className="text-[hsl(var(--brand-gray-text))] font-inter text-lg leading-relaxed mb-8"
              variants={fadeInUp}
            >
              ZenobeGlobe est une entreprise technologique innovante basée au
              Gabon, spécialisée dans l'accompagnement des entreprises,
              administrations et particuliers dans leur transition numérique.
            </motion.p>

            <motion.div 
              className="space-y-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 2.2207L4 5.2207V11.3107C4 16.3607 7.41 21.0707 12 22.2207C16.59 21.0707 20 16.3607 20 11.3107V5.2207L12 2.2207ZM10.94 15.7607L7.4 12.2207L8.81 10.8107L10.93 12.9307L15.17 8.6907L16.58 10.1007L10.94 15.7607Z"
                    fill="#2568A6"
                  />
                </svg>
                <span className="text-black font-inter font-bold text-base">
                  Solutions fiables et sécurisées
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 2.2207L4 5.2207V11.3107C4 16.3607 7.41 21.0707 12 22.2207C16.59 21.0707 20 16.3607 20 11.3107V5.2207L12 2.2207ZM10.94 15.7607L7.4 12.2207L8.81 10.8107L10.93 12.9307L15.17 8.6907L16.58 10.1007L10.94 15.7607Z"
                    fill="#2568A6"
                  />
                </svg>
                <span className="text-black font-inter font-bold text-base">
                  Accompagnement personnalisé
                </span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <svg
                  className="w-6 h-6 flex-shrink-0"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M12 2.2207L4 5.2207V11.3107C4 16.3607 7.41 21.0707 12 22.2207C16.59 21.0707 20 16.3607 20 11.3107V5.2207L12 2.2207ZM10.94 15.7607L7.4 12.2207L8.81 10.8107L10.93 12.9307L15.17 8.6907L16.58 10.1007L10.94 15.7607Z"
                    fill="#2568A6"
                  />
                </svg>
                <span className="text-black font-inter font-bold text-base">
                  Expertise locale et internationale
                </span>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <Link
              to="/a-propos"
                className="inline-flex px-16 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
            >
              Explorez plus
            </Link>
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
              <motion.img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Team member"
                className="rounded-3xl w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-[#D7EFF7] shadow-lg -z-10"
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.div>
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-[#BDE4F0] shadow-lg -z-10"
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              ></motion.div>
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
  icon: string;
  iconBg?: boolean;
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
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Application Web",
        description: "Développement d'applications web sur mesure pour digitaliser vos processus métier.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
      {
        title: "Application Mobile",
        description: "Applications mobiles natives iOS et Android pour étendre votre présence digitale.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
      },
    ],
    "Securité et reseau": [
      {
        title: "Audit Informatique",
        description: "Analyse complète de votre infrastructure IT pour identifier les failles et optimiser la sécurité.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Solution Antivirus et Firewall",
        description: "Protection avancée contre les menaces avec des solutions antivirus et firewall de dernière génération.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
      {
        title: "Déploiement et Configuration",
        description: "Installation et configuration professionnelle de votre infrastructure réseau et sécurité.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
      },
      {
        title: "Architecture Réseau sur Mesure",
        description: "Conception et mise en place d'une architecture réseau adaptée à vos besoins spécifiques.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ff09d306ee9bc7721aa4b49ccf8f867724372bba?width=124",
      },
    ],
    "Maintenance": [
      {
        title: "Maintenance Préventive",
        description: "Entretien régulier de vos systèmes pour éviter les pannes et optimiser les performances.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Maintenance Corrective",
        description: "Intervention rapide pour résoudre les problèmes techniques et rétablir vos services.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
      {
        title: "Support Technique",
        description: "Assistance technique 24/7 pour tous vos besoins informatiques et résolution de problèmes.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
      },
    ],
    "Design": [
      {
        title: "Design UI/UX",
        description: "Création d'interfaces utilisateur modernes et expériences utilisateur optimales.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Identité Visuelle",
        description: "Développement de votre identité de marque avec logo, charte graphique et supports visuels.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
      {
        title: "Design Graphique",
        description: "Création de supports visuels professionnels pour tous vos besoins marketing et communication.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
      },
    ],
    "Automatisme": [
      {
        title: "Automatisation de Processus",
        description: "Optimisation de vos workflows avec des solutions d'automatisation intelligentes.",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ff09d306ee9bc7721aa4b49ccf8f867724372bba?width=124",
      },
      {
        title: "Intégration Système",
        description: "Connexion et synchronisation de vos différents outils et systèmes métier.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Robotisation",
        description: "Mise en place de robots logiciels pour automatiser vos tâches répétitives.",
        image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
    ],
    "Marketing": [
      {
        title: "Marketing Digital",
        description: "Stratégies marketing digitales complètes pour booster votre présence en ligne.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/8cf03eed2241d52952acbeaa579fb479d2d7cd32?width=124",
      },
      {
        title: "SEO & Référencement",
        description: "Optimisation de votre visibilité sur les moteurs de recherche pour attirer plus de clients.",
        image: "https://images.unsplash.com/photo-1571677208737-b0e5149f9c2d?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
      },
      {
        title: "Gestion Réseaux Sociaux",
        description: "Animation et gestion professionnelle de vos comptes sur les réseaux sociaux.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
      },
    ],
    "Formations en burautique": [
      {
        title: "Formation Microsoft Office",
        description: "Maîtrise complète de la suite Microsoft Office (Word, Excel, PowerPoint, Outlook).",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a7eaddf90542b4b7062479727fe312605c468b7c?width=80",
        iconBg: true,
      },
      {
        title: "Formation Google Workspace",
        description: "Utilisation professionnelle des outils Google (Docs, Sheets, Slides, Drive).",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a7eaddf90542b4b7062479727fe312605c468b7c?width=80",
        iconBg: true,
      },
      {
        title: "Gestion de Projet Digital",
        description: "Formation aux outils de gestion de projet et de collaboration en ligne.",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a7eaddf90542b4b7062479727fe312605c468b7c?width=80",
        iconBg: true,
      },
    ],
  };

  const categories = [
    { id: "Maintenance", label: "Maintenance" },
    { id: "Design", label: "Design" },
    { id: "Developpement web/mobile", label: "Developpement web/mobile" },
    { id: "Automatisme", label: "Automatisme" },
    { id: "Marketing", label: "Marketing" },
    { id: "Formations en burautique", label: "Formations en burautique" },
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
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="border border-white rounded-[15px] p-5 flex flex-col transition-all duration-300 group cursor-pointer"
              >
                <Link to="/service" className="flex flex-col h-full">
                  <div className="relative mb-5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-2xl"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8">
                      {service.iconBg ? (
                        <div className="w-16 h-16 rounded-full bg-white border border-white flex items-center justify-center">
                          <img
                            src={service.icon}
                            alt=""
                            className="w-10 h-10"
                          />
                        </div>
                      ) : (
                        <img
                          src={service.icon}
                          alt=""
                          className="w-16 h-16 rounded-full border border-white"
                        />
                      )}
                    </div>
                  </div>
                  <div className="text-center mt-8 flex-1 flex flex-col">
                    <h3 className="text-white font-inter text-2xl font-semibold mb-2.5 group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#D9D9D9] font-inter text-base line-clamp-3 mb-4">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <span className="text-[hsl(var(--brand-cyan))] font-inter font-semibold text-sm flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                        En savoir plus
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
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
    { name: "Axel Pebe", role: "CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { name: "Ella Grace", role: "CTO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { name: "Jade Perez", role: "Designer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    { name: "Liam Smith", role: "Dev Frontend", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80" },
    { name: "Noah Brown", role: "Dev Backend", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=80" },
    { name: "Emma Wilson", role: "Product Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" },
    { name: "Olivia Taylor", role: "UX Researcher", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&q=80" },
    { name: "Lucas Martin", role: "QA Engineer", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&q=80" },
    { name: "Sophia Davis", role: "Marketing", image: "https://images.unsplash.com/photo-1547425260-84e9d3f06c64?w=400&q=80" },
  ];

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
                  className="text-center group"
                  variants={fadeInUp}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl mx-auto mb-4 w-48 h-48"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[hsl(var(--brand-cyan))]/0 group-hover:bg-[hsl(var(--brand-cyan))]/20 transition-all duration-300" />
                  </motion.div>
                  <h3 className="text-white font-inter text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 font-inter">{member.role}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white" />
          <CarouselNext className="right-0 bg-white" />
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
    },
    {
      question: "Quelles méthodes de paiement acceptez-vous ?",
      answer:
        "Nous acceptons les principales cartes bancaires (Visa, Mastercard), les virements bancaires et Mobile Money. Tous les paiements sont sécurisés et cryptés pour garantir la protection de vos données.",
    },
    {
      question: "Proposez-vous un support technique ?",
      answer:
        "Oui, notre équipe de support est disponible 24/7 pour répondre à toutes vos questions. Vous pouvez nous contacter par email, téléphone ou via notre chat en ligne. Nous garantissons un temps de réponse rapide.",
    },
    {
      question: "Quelle est votre politique de remboursement ?",
      answer:
        "Si vous n'êtes pas satisfait de nos services, nous offrons une garantie satisfait ou remboursé de 30 jours. Contactez notre équipe et nous traiterons votre demande dans les plus brefs délais.",
    },
    {
      question: "Combien de temps dure le support ?",
      answer:
        "Le support est inclus pendant toute la durée de votre contrat. Pour les projets ponctuels, nous offrons 6 mois de support gratuit, puis vous pouvez souscrire à un plan de maintenance selon vos besoins.",
    },
    {
      question: "Proposez-vous des formations personnalisées ?",
      answer:
        "Absolument ! Nous proposons des formations sur mesure adaptées à vos besoins spécifiques en cybersécurité, développement web, et outils bureautiques. Contactez-nous pour établir un programme personnalisé.",
    },
  ];

  return (
    <section className="w-full py-12 lg:py-20 bg-[hsl(var(--brand-blue))] overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-bold uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-white font-poppins text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <AccordionItem
                  value={`item-${idx}`}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-2 hover:bg-white/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-white font-poppins text-lg md:text-xl font-semibold pr-4">
                  {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 font-inter text-base md:text-lg leading-relaxed pb-6 pt-2">
                  {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-gray-300 font-inter text-base mb-4">
            Vous avez d'autres questions ?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex px-8 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg text-black font-inter font-semibold hover:bg-opacity-90 transition-colors"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "ZenobeGlobe a transformé notre infrastructure IT. Service professionnel et support réactif.",
      author: "Jean Martin",
      role: "CEO, TechGabon",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      text: "Excellent service, je recommande vivement pour tous vos projets de transformation digitale.",
      author: "Marie Claire",
      role: "CTO, Innovate",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      text: "Équipe professionnelle avec une grande expertise en cybersécurité. Résultats au-delà de nos attentes.",
      author: "Alex Mbongo",
      role: "IT Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-black overflow-hidden">
      <div className="container mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
        <h2 className="text-white font-poppins text-3xl md:text-5xl font-semibold mb-4">
            Témoignages
        </h2>
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto mb-12">
          Ce que nos clients disent de nous
        </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-[hsl(var(--brand-cyan))] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                />
                <div className="text-left">
                  <h4 className="text-white font-inter font-semibold">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 font-inter text-left">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-[hsl(var(--brand-blue))] overflow-hidden">
      <div className="container mx-auto">
        <motion.div 
          className="bg-[#0f1729] rounded-3xl px-6 md:px-12 lg:px-16 py-12 lg:py-16 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
        >
          <motion.h2 
            className="text-white font-poppins text-3xl md:text-4xl font-semibold mb-4"
            variants={fadeInUp}
          >
            Contactez nous
          </motion.h2>
          <motion.p 
            className="text-gray-400 font-inter text-lg mb-8"
            variants={fadeInUp}
          >
            N'hésitez pas à nous contacter pour toute question ou demande
          </motion.p>

          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            variants={staggerContainer}
          >
            <motion.a 
              href="mailto:zenobeglobe@gmail.com"
              className="flex items-center gap-3 text-white group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ x: 10, scale: 1.05 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </motion.svg>
              <span className="font-inter group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                zenobeglobe@gmail.com
              </span>
            </motion.a>

            <motion.a 
              href="https://wa.link/eyvnes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white group cursor-pointer"
              variants={fadeInUp}
              whileHover={{ x: 10, scale: 1.05 }}
            >
              <motion.svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </motion.svg>
              <span className="font-inter group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                WhatsApp: +237 683 428 378
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
