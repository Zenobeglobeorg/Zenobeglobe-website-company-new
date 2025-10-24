import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO, { localBusinessSchema } from "@/components/SEO";
import { 
  Rocket, 
  Briefcase, 
  Users, 
  Lightbulb, 
  Globe, 
  Eye,
  Target,
  Star,
  Handshake,
  Shield,
  Calendar,
  CheckCircle,
  Layers,
  Quote
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

export default function APropos() {
  return (
    <Layout>
      <SEO 
        title="À Propos - ZenobeGlobe | Expert Cybersécurité au Gabon"
        description="Découvrez ZenobeGlobe, votre partenaire IT au Gabon. Notre équipe d'experts en cybersécurité et développement IT vous accompagne dans votre transformation digitale à Libreville."
        keywords="à propos ZenobeGlobe, équipe cybersécurité Gabon, histoire entreprise IT Libreville, experts développement web Gabon"
        canonical="https://zenobeglobe.com/a-propos"
        structuredData={localBusinessSchema}
      />
      <div className="w-full bg-black">
        <HeroSection />
        <NotreHistoireSection />
        <MissionVisionSection />
        <NosValeursSection />
        <NotreEquipeSection />
      </div>
    </Layout>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#090914] via-[#0a0a1a] to-[#090914] overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[hsl(var(--brand-cyan))]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[hsl(var(--brand-blue))]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        {/* Header avec badge */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
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
                Depuis 2025 • Nouveau Leader en Cybersécurité
              </span>
          </motion.div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Contenu principal */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-white font-poppins text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight lg:leading-[80px] mb-6"
              variants={fadeInUp}
            >
              Nous transformons l'
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                avenir numérique
              </span>
              <br />
              de l'<strong>Afrique Centrale</strong>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              <strong>ZenobeGlobe</strong> est plus qu'une entreprise technologique. Nous sommes les architectes 
              de la <strong>transformation digitale</strong> qui propulse les entreprises <strong>gabonaises et camerounaises</strong> 
              vers l'excellence numérique. Basés à <strong>Libreville</strong>, nous offrons des <strong>solutions de cybersécurité</strong> 
              et <strong>développement IT</strong> sur mesure.
            </motion.p>

            {/* Statistiques impressionnantes */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "150+", label: "Projets Réalisés" },
                { number: "98%", label: "Satisfaction Client" },
                { number: "5+", label: "Années d'Expertise" },
                { number: "24/7", label: "Support Technique" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-[hsl(var(--brand-cyan))] font-poppins text-2xl lg:text-3xl font-bold mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-400 font-inter text-sm">
                    {stat.label}
          </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA amélioré */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button 
                className="px-8 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(79, 209, 197, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvrir notre histoire</span>
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 border-2 border-[hsl(var(--brand-cyan))] rounded-lg text-[hsl(var(--brand-cyan))] font-inter font-semibold text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos réalisations
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image avec effet moderne */}
          <motion.div 
            className="flex-shrink-0 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative">
              {/* Image principale */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/Hero main.jpg"
                  alt="Équipe ZenobeGlobe en action - Experts cybersécurité et développement IT au Gabon"
                  className="w-full max-w-[500px] lg:max-w-[600px] h-auto rounded-2xl"
                  loading="lazy"
                  width="600"
                  height="400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
              </motion.div>

              {/* Éléments flottants */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--brand-cyan))]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[hsl(var(--brand-cyan))]/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Layers className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-[hsl(var(--brand-blue))]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[hsl(var(--brand-blue))]/30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <CheckCircle className="w-6 h-6 text-[hsl(var(--brand-blue))]" />
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NotreHistoireSection() {
  const timeline = [
    {
      year: "2025",
      title: "Fondation de ZenobeGlobe",
      description: "Création de l'entreprise avec une vision claire : démocratiser la technologie en Afrique Centrale.",
      icon: Rocket,
      highlight: true
    },
    {
      year: "2025",
      title: "Premiers Projets",
      description: "Nos premiers clients nous font confiance pour leurs projets de cybersécurité et développement web.",
      icon: Briefcase,
      highlight: false
    },
    {
      year: "2025",
      title: "Équipe Fondatrice",
      description: "Assemblage d'une équipe d'experts passionnés par l'innovation technologique.",
      icon: Users,
      highlight: false
    },
    {
      year: "2025",
      title: "Innovation & Vision",
      description: "Développement de nos premières solutions et définition de notre approche unique.",
      icon: Lightbulb,
      highlight: false
    },
    {
      year: "2025",
      title: "Expansion & Croissance",
      description: "Établissement de notre présence au Gabon et au Cameroun avec des projets ambitieux.",
      icon: Globe,
      highlight: false
    },
    {
      year: "2025",
      title: "Avenir Digital",
      description: "Nous continuons d'innover pour accompagner la transformation numérique de l'Afrique.",
      icon: Eye,
      highlight: true
    }
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--brand-blue))]/30 rounded-full mb-6"
              variants={fadeInUp}
            >
              <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
                Notre Parcours
              </span>
            </motion.div>
            <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-6">
              Une Histoire de 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                {" "}Succès
              </span>
        </h2>
            <p className="text-gray-300 font-inter text-lg leading-relaxed max-w-3xl mx-auto">
              De nos débuts modestes à notre position actuelle de leader en cybersécurité, 
              découvrez les étapes clés qui ont façonné ZenobeGlobe.
            </p>
          </div>
        </motion.div>

        {/* Timeline moderne */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne centrale */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))] rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timeline.map((item, idx) => (
              <motion.div
              key={idx}
                className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                variants={fadeInUp}
              >
                {/* Contenu */}
                <motion.div 
                  className={`flex-1 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`bg-[#090914] rounded-2xl p-8 border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300 ${
                    item.highlight ? 'ring-2 ring-[hsl(var(--brand-blue))]/30' : ''
                  }`}>
                    <div className={`flex items-center gap-4 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                      <motion.div
                        className="text-[hsl(var(--brand-cyan))]"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8" />
                      </motion.div>
                      <div className={`text-[hsl(var(--brand-cyan))] font-poppins text-2xl font-bold ${idx % 2 === 0 ? 'order-first' : ''}`}>
                        {item.year}
                      </div>
                    </div>
                    <h3 className="text-white font-poppins text-xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-inter text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Point central */}
                <motion.div
                  className="relative z-10 flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full border-4 border-black ${
                      item.highlight 
                        ? 'bg-[hsl(var(--brand-cyan))] shadow-lg shadow-[hsl(var(--brand-cyan))]/50' 
                        : 'bg-[hsl(var(--brand-blue))]'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Espace vide pour l'équilibre */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistiques impressionnantes */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
              {[
                { number: "10+", label: "Projets Réalisés", icon: Target },
                { number: "100%", label: "Satisfaction Client", icon: Star },
                { number: "1", label: "Année d'Innovation", icon: Calendar },
                { number: "24/7", label: "Support Technique", icon: Shield }
              ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <motion.div
                className="text-[hsl(var(--brand-cyan))] mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-10 h-10 mx-auto" />
              </motion.div>
              <motion.div
                className="text-[hsl(var(--brand-cyan))] font-poppins text-3xl font-bold mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-inter text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const missionVisionData = {
    mission: {
      title: "Notre Mission",
      icon: Target,
      content: "Devenir le partenaire de référence en transformation numérique en Afrique Centrale en offrant des solutions technologiques innovantes et adaptées au contexte local.",
      details: [
        "Démocratiser l'accès aux technologies de pointe",
        "Accompagner les entreprises dans leur transformation digitale",
        "Former les talents locaux aux métiers du numérique",
        "Développer des solutions sécurisées et durables"
      ],
      color: "from-white/50 to-white/0"
    },
    vision: {
      title: "Notre Vision",
      icon: Eye,
      content: "Concevoir des solutions digitales sur mesure, intelligentes, sécurisées et évolutives, accompagnant entreprises et particuliers vers un écosystème numérique fluide et accessible.",
      details: [
        "Un écosystème numérique local performant",
        "Des solutions adaptées aux besoins africains",
        "Une expertise reconnue internationalement",
        "Un impact positif sur le développement économique"
      ],
      color: "from-white/50 to-white/0"
    }
  };

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-[#090914] to-black overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--brand-blue))]/30 rounded-full mb-6"
              variants={fadeInUp}
            >
              <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
                Notre Engagement
              </span>
            </motion.div>
            <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-6">
              Mission & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                {" "}Vision
              </span>
        </h2>
            <p className="text-gray-300 font-inter text-lg leading-relaxed max-w-3xl mx-auto">
              Découvrez les valeurs qui guident notre action et notre vision pour l'avenir numérique de l'Afrique.
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tabs de navigation */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-[#090914] rounded-2xl p-2 border border-gray-800">
              {Object.entries(missionVisionData).map(([key, data]) => (
                <motion.button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-xl font-inter font-semibold text-base transition-all duration-300 flex items-center gap-3 ${
                    activeTab === key
                      ? "bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <data.icon className="w-5 h-5" />
                  {data.title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-3xl p-8 lg:p-12 border border-gray-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    className="text-[hsl(var(--brand-cyan))]"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {(() => {
                      const IconComponent = missionVisionData[activeTab as keyof typeof missionVisionData].icon;
                      return <IconComponent className="w-10 h-10" />;
                    })()}
                  </motion.div>
                  <h3 className="text-white font-poppins text-3xl font-bold">
                    {missionVisionData[activeTab as keyof typeof missionVisionData].title}
                  </h3>
                </motion.div>

                <motion.p
                  className="text-gray-300 font-inter text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {missionVisionData[activeTab as keyof typeof missionVisionData].content}
                </motion.p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {missionVisionData[activeTab as keyof typeof missionVisionData].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-300 font-inter text-base">
                        {detail}
                </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image et éléments visuels */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/Mission.jpg"
                  alt="Notre équipe en action"
                  className="w-full h-[500px] object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay avec gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${missionVisionData[activeTab as keyof typeof missionVisionData].color} opacity-60`} />
                
                {/* Éléments flottants */}
                <motion.div
                  className="absolute top-6 right-6 w-16 h-16 bg-[hsl(var(--brand-cyan))] backdrop-blur-sm rounded-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {(() => {
                    const IconComponent = missionVisionData[activeTab as keyof typeof missionVisionData].icon;
                    return <IconComponent className="w-8 h-8 text-white" />;
                  })()}
                </motion.div>

                <motion.div
                  className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-sm rounded-2xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h4 className="text-white font-poppins text-lg font-semibold mb-2">
                    {missionVisionData[activeTab as keyof typeof missionVisionData].title}
                  </h4>
                  <p className="text-gray-300 font-inter text-sm">
                    {activeTab === "mission" 
                      ? "Transformer l'Afrique par la technologie" 
                      : "Un avenir numérique brillant"
                    }
                  </p>
                </motion.div>
              </motion.div>

              {/* Éléments décoratifs */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-[hsl(var(--brand-cyan))]/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--brand-blue))]/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NosValeursSection() {
  const values = [
    {
      title: "Innovation",
      icon: Lightbulb,
      description: "Nous repoussons constamment les limites technologiques pour offrir des solutions avant-gardistes.",
      color: "from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]",
      features: ["Recherche & Développement", "Technologies émergentes", "Solutions créatives"]
    },
    {
      title: "Excellence",
      icon: Star,
      description: "Nous nous engageons à fournir des services de la plus haute qualité dans tous nos projets.",
      color: "from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue))]/80",
      features: ["Standards internationaux", "Qualité garantie", "Suivi personnalisé"]
    },
    {
      title: "Intégrité",
      icon: Handshake,
      description: "La transparence et l'honnêteté guident toutes nos interactions avec nos clients et partenaires.",
      color: "from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]",
      features: ["Transparence totale", "Éthique professionnelle", "Confiance mutuelle"]
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "Nous croyons en la force du travail d'équipe et de la collaboration pour atteindre l'excellence.",
      color: "from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))]",
      features: ["Esprit d'équipe", "Partage de connaissances", "Synergie collective"]
    }
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--brand-blue))]/30 rounded-full mb-6"
              variants={fadeInUp}
            >
              <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
                Nos Fondements
              </span>
            </motion.div>
            <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-6">
              Nos 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                {" "}Valeurs
              </span>
        </h2>
            <p className="text-gray-300 font-inter text-lg leading-relaxed max-w-3xl mx-auto">
              Les principes fondamentaux qui guident notre action et façonnent notre culture d'entreprise.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <motion.div
                className="bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-3xl p-8 border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300 h-full"
                whileHover={{ boxShadow: "0 20px 40px rgba(79, 209, 197, 0.1)" }}
              >
                {/* Header avec icône et titre */}
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white font-poppins text-2xl font-bold">
                    {value.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-300 font-inter text-base leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                {value.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: featureIdx * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-[hsl(var(--brand-cyan))] rounded-full flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-400 font-inter text-sm">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Effet de hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-cyan))]/5 to-[hsl(var(--brand-blue))]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section supplémentaire avec témoignage */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 to-[hsl(var(--brand-cyan))]/10 rounded-3xl p-8 lg:p-12 border border-[hsl(var(--brand-blue))]/20 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-[hsl(var(--brand-cyan))] mb-6"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="w-16 h-16 mx-auto" />
            </motion.div>
            <motion.blockquote
              className="text-white font-poppins text-xl lg:text-2xl font-medium leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              "Nos valeurs ne sont pas seulement des mots sur un mur, 
              elles sont le cœur de tout ce que nous faisons chez ZenobeGlobe."
            </motion.blockquote>
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">NZ</span>
              </div>
              <div className="text-left">
                <div className="text-white font-inter font-semibold">Ngoulou Zenobe</div>
                <div className="text-gray-400 font-inter text-sm">CEO & Fondateur</div>
        </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function NotreEquipeSection() {
  const team = [
    {
      name: "Ngoulou Zenobe",
      role: "CEO & Fondateur",
      image: "/img-6.jpg",
      highlight: true,
      bio: "Visionnaire et leader technologique avec plus de 8 ans d'expérience",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Matida Flora",
      role: "Product Manager",
      image: "/img-1.jpg",
      highlight: false,
      bio: "Spécialiste en gestion de produits et stratégie digitale",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Brice",
      role: "CTO",
      image: "/img-2.jpg",
      highlight: false,
      bio: "Expert en architecture technique et innovation",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Aurel",
      role: "Designer UX/UI",
      image: "/img-3.jpg",
      highlight: false,
      bio: "Créateur d'expériences utilisateur exceptionnelles",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Diallo",
      role: "Dev Backend",
      image: "/img-4.jpg",
      highlight: false,
      bio: "Développeur backend passionné par les solutions robustes",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Toussok Fabricia",
      role: "Dev Frontend",
      image: "/img-5.jpg",
      highlight: false,
      bio: "Spécialiste en interfaces modernes et réactives",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Djoko Franck",
      role: "Dev Fullstack",
      image: "/img-7.jpg",
      highlight: false,
      bio: "Développeur polyvalent maîtrisant toutes les technologies",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Nick Giresse",
      role: "Dev Fullstack",
      image: "/img-8.jpg",
      highlight: false,
      bio: "Expert en développement d'applications complexes",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Kenne Tiomene",
      role: "Designer Graphique",
      image: "/img-9.jpg",
      highlight: false,
      bio: "Créateur visuel avec un sens artistique développé",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Wilfried Cheffer",
      role: "Responsable Marketing",
      image: "/img-10.jpg",
      highlight: false,
      bio: "Stratège marketing digital et communication",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-[#090914] to-black overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-blue))]/20 border border-[hsl(var(--brand-blue))]/30 rounded-full mb-6"
              variants={fadeInUp}
            >
              <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
                Notre Force
              </span>
            </motion.div>
            <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-6">
              Notre 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                {" "}Équipe
              </span>
        </h2>
            <p className="text-gray-300 font-inter text-lg leading-relaxed max-w-3xl mx-auto">
              Rencontrez les talents exceptionnels qui font de ZenobeGlobe un leader en cybersécurité et solutions numériques.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
            {team.map((member, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-100px" }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        {/* Section CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div
            className="bg-gradient-to-r from-[hsl(var(--brand-blue))]/10 to-[hsl(var(--brand-cyan))]/10 rounded-3xl p-8 lg:p-12 border border-[hsl(var(--brand-blue))]/20 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-white font-poppins text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Rejoignez notre équipe
            </motion.h3>
            <motion.p
              className="text-gray-300 font-inter text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nous recherchons constamment des talents passionnés pour rejoindre notre mission de transformation numérique.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-lg text-white font-inter font-semibold text-base hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir les offres d'emploi
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-[hsl(var(--brand-cyan))] rounded-lg text-[hsl(var(--brand-cyan))] font-inter font-semibold text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Candidature spontanée
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  highlight: boolean;
  bio: string;
  social: { linkedin: string; twitter: string };
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
    >
      {/* Image avec overlay */}
      <div className="relative overflow-hidden">
        <motion.img
        src={member.image}
        alt={member.name}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
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
            viewport={{ once: false }}
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
      </div>
    </motion.div>
  );
}
