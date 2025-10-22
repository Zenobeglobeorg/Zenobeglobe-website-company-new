import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { 
  Shield, Code, Brain, Users, Award, Clock, Star, ArrowRight, CheckCircle, Target, Calendar, GraduationCap, Settings
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

export default function Formation() {
  return (
    <Layout>
        <SEO 
        title="Formations | ZenobeGlobe | Expert Cybersécurité au Gabon"
        description="Découvrez nos formations innovantes pour devenir un expert en cybersécurité et développement web. Accélérez votre carrière avec nos parcours de formation adaptés et certifiants."
        keywords="formations ZenobeGlobe, cybersécurité Gabon, développement web Gabon, formation bureautique Gabon"
        canonical="https://zenobeglobe.com/formation"
      />
      <div className="w-full bg-black">
        <HeroSection />
        <DomainesFormationSection />
        <FormationsPopulairesSection />
        <PourquoiChoisirSection />
        <TestimonialsSection />
        <CTASection />
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
              FORMATIONS CERTIFIANTES • 2025
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
              className="text-white font-poppins text-4xl md:text-5xl lg:text-[70px] font-bold leading-tight mb-6"
              variants={fadeInUp}
            >
              Développez vos Compétences avec nos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
                Formations Innovantes
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Accélérez votre carrière et maîtrisez les <strong>technologies de demain</strong> 
              grâce à des parcours de formation adaptés et <strong>certifiants</strong>. 
              Rejoignez des milliers de professionnels qui ont transformé leur avenir avec <strong>ZenobeGlobe</strong>.
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
                { number: "500+", label: "Apprenants Formés" },
                { number: "95%", label: "Taux de Réussite" },
                { number: "15+", label: "Formations Disponibles" },
                { number: "24/7", label: "Support Pédagogique" }
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
              <motion.div variants={fadeInUp}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-lg text-white font-inter font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-300"
                >
                  <span>Découvrir nos formations</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[hsl(var(--brand-cyan))] rounded-lg text-[hsl(var(--brand-cyan))] font-inter font-semibold text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
                >
                  <span>Nos formateurs</span>
                  <Users className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Section image améliorée */}
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Formation IT moderne - ZenobeGlobe Gabon"
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
                <GraduationCap className="w-8 h-8 text-[hsl(var(--brand-cyan))]" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-[hsl(var(--brand-blue))]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[hsl(var(--brand-blue))]/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Award className="w-6 h-6 text-[hsl(var(--brand-blue))]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DomainesFormationSection() {
  const domaines = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Maîtrisez les dernières technologies front-end et back-end pour créer des applications web innovantes.",
      color: "from-blue-500 to-cyan-500",
      features: ["React", "Node.js", "MongoDB", "TypeScript"]
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protégez les systèmes et les données contre les menaces numériques avec nos experts en sécurité informatique.",
      color: "from-red-500 to-orange-500",
      features: ["Ethical Hacking", "Audit Sécurité", "Firewall", "Cryptographie"]
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Explorez le machine learning, le deep learning et l'analyse de données pour des solutions intelligentes.",
      color: "from-purple-500 to-pink-500",
      features: ["Python", "TensorFlow", "Data Science", "MLOps"]
    },
    {
      icon: Target,
      title: "Gestion de Projet",
      description: "Apprenez les méthodologies agiles et traditionnelles pour mener vos projets au succès.",
      color: "from-green-500 to-emerald-500",
      features: ["Scrum", "Agile", "PMI", "Kanban"]
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto">
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
              DOMAINES DE FORMATION
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Nos Domaines de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
              Formation
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez nos programmes de formation spécialisés dans les <strong>technologies les plus demandées</strong> du marché IT au <strong>Gabon</strong> et en <strong>Afrique Centrale</strong>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {domaines.map((domaine, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-2xl p-8 border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Icône moderne */}
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <domaine.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-poppins text-xl font-bold group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                  {domaine.title}
                </h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed">
                  {domaine.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {domaine.features.map((feature, featureIdx) => (
                    <motion.span
                      key={featureIdx}
                      className="px-3 py-1 bg-[hsl(var(--brand-cyan))]/10 border border-[hsl(var(--brand-cyan))]/20 rounded-full text-[hsl(var(--brand-cyan))] text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                <motion.div
                  className="mt-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[hsl(var(--brand-cyan))] font-inter font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
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
      </div>
    </section>
  );
}

function FormationsPopulairesSection() {
  const formations = [
    {
      image: "/Formation-deux.jpeg",
      title: "Fullstack JavaScript Bootcamp",
      duration: "12 semaines",
      level: "Avancé",
      price: "450,000 XAF",
      description: "Devenez un développeur Fullstack polyvalent avec React, Node.js et MongoDB, de la conception au déploiement.",
      features: ["React & Next.js", "Node.js & Express", "MongoDB", "Déploiement AWS"],
      rating: 4.9,
      students: 150
    },
    {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      title: "Fondamentaux de la Cybersécurité",
      duration: "4 semaines",
      level: "Débutant",
      price: "280,000 XAF",
      description: "Acquérez les bases essentielles pour comprendre et prévenir les cyberattaques courantes.",
      features: ["Ethical Hacking", "Audit Sécurité", "Firewall", "Cryptographie"],
      rating: 4.8,
      students: 89
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      title: "Introduction au Machine Learning avec Python",
      duration: "8 semaines",
      level: "Intermédiaire",
      price: "380,000 XAF",
      description: "Découvrez l'intelligence artificielle et le machine learning avec Python et TensorFlow.",
      features: ["Python", "TensorFlow", "Data Science", "MLOps"],
      rating: 4.7,
      students: 67
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-[#090914] to-black">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(var(--brand-cyan))]/20 border border-[hsl(var(--brand-cyan))]/30 rounded-full mb-6"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-[hsl(var(--brand-cyan))] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-semibold">
              FORMATIONS POPULAIRES
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Nos Formations{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
              Populaires
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez nos <strong>formations les plus demandées</strong> par les professionnels IT au <strong>Gabon</strong>. 
            Des programmes complets avec <strong>certification</strong> et <strong>accompagnement personnalisé</strong>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {formations.map((formation, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image avec overlay */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={formation.image}
                  alt={`Formation ${formation.title} - ZenobeGlobe Gabon`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  width="400"
                  height="192"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Overlay avec gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Badge niveau */}
                <motion.div
                  className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] text-white px-3 py-1 rounded-full text-xs font-semibold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {formation.level}
                </motion.div>
                
                {/* Prix */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-[hsl(var(--brand-cyan))] font-bold text-lg">{formation.price}</div>
                </motion.div>
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-poppins text-xl font-bold group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                    {formation.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[hsl(var(--brand-cyan))] text-[hsl(var(--brand-cyan))]" />
                    <span className="text-gray-300 text-sm font-medium">{formation.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{formation.students} étudiants</span>
                  </div>
                </div>
                
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
                  {formation.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {formation.features.map((feature, featureIdx) => (
                    <motion.span
                      key={featureIdx}
                      className="px-2 py-1 bg-[hsl(var(--brand-cyan))]/10 border border-[hsl(var(--brand-cyan))]/20 rounded-full text-[hsl(var(--brand-cyan))] text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                {/* CTA */}
                <motion.div
                  className="mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-lg text-white font-inter font-semibold text-sm hover:opacity-90 transition-all duration-300"
                  >
                    <span>S'inscrire maintenant</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
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
      </div>
    </section>
  );
}

function PourquoiChoisirSection() {
  const reasons = [
    {
      icon: Users,
      title: "Formateurs Experts",
      description: "Apprenez des meilleurs, nos formateurs sont des professionnels reconnus dans leur domaine.",
      features: ["8+ ans d'expérience", "Certifications internationales", "Projets réels"]
    },
    {
      icon: Calendar,
      title: "Flexibilité & Adaptabilité",
      description: "Des programmes modulables pour s'adapter à votre emploi du temps et à vos objectifs.",
      features: ["Formation en ligne", "Horaires flexibles", "Programme sur mesure"]
    },
    {
      icon: Award,
      title: "Certifications Reconnues",
      description: "Obtenez des certifications valorisantes qui boosteront votre carrière.",
      features: ["Certificats officiels", "Reconnaissance internationale", "Valorisation CV"]
    },
    {
      icon: Settings,
      title: "Support Personnalisé",
      description: "Bénéficiez d'un accompagnement individuel tout au long de votre parcours.",
      features: ["Mentorat 1:1", "Support 24/7", "Suivi personnalisé"]
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Pourquoi Nous{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
              Choisir ?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez les <strong>avantages exclusifs</strong> qui font de <strong>ZenobeGlobe</strong> 
            le leader de la formation IT au <strong>Gabon</strong>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gradient-to-br from-[#090914] to-[#0a0a1a] rounded-2xl p-8 border border-gray-800 hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Icône moderne */}
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-poppins text-xl font-bold group-hover:text-[hsl(var(--brand-cyan))] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-300 font-inter text-sm leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mt-4">
                  {reason.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[hsl(var(--brand-cyan))]" />
                      <span className="text-gray-400 text-xs">{feature}</span>
                    </motion.div>
                  ))}
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
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Brandon Dubois",
      role: "Développeuse Web",
      avatar: "profil-1.webp",
      quote: "Les formations sont d'une qualité exceptionnelle, avec des projets concrets qui m'ont permis d'intégrer rapidement le marché du travail.",
      rating: 5,
      company: "TechGabon"
    },
    {
      name: "Marc Lefevre",
      role: "Consultant en Cybersécurité",
      avatar: "profil-2.jpg",
      quote: "Un grand merci aux formateurs pour leur expertise et leur pédagogie. J'ai pu acquérir des compétences clés pour mon évolution professionnelle.",
      rating: 5,
      company: "Digital Solutions"
    },
    {
      name: "Amélie Bernard",
      role: "Chef de Projet",
      avatar: "profil-3.webp",
      quote: "Le programme de gestion de projet est très complet et m'a donné les outils pour manager mes équipes avec plus d'efficacité. Je recommande !",
      rating: 5,
      company: "Innovate"
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-[#090914] to-black">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Ce que Disent Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
              Apprenants
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Découvrez les <strong>témoignages authentiques</strong> de nos apprenants qui ont transformé leur carrière avec <strong>ZenobeGlobe</strong>.
          </motion.p>
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
              className="group relative bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-[hsl(var(--brand-cyan))]/50 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(var(--brand-cyan))] text-[hsl(var(--brand-cyan))]" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-300 font-inter text-left leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[hsl(var(--brand-cyan))]/30"
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[hsl(var(--brand-cyan))] rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                </motion.div>
                <div className="text-left">
                  <h4 className="text-white font-inter font-semibold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-[hsl(var(--brand-cyan))] text-xs font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-black to-[#090914]">
      <div className="container mx-auto text-center max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-white font-poppins text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={fadeInUp}
          >
            Prêt à Transformer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--brand-cyan))] to-[hsl(var(--brand-blue))]">
              Votre Carrière ?
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 font-inter text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Rejoignez des milliers de professionnels qui ont boosté leurs compétences avec nos formations. 
            <strong>Commencez votre transformation dès aujourd'hui</strong>.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-cyan))] rounded-lg text-white font-inter font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-300"
              >
                <span>Découvrir nos formations</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[hsl(var(--brand-cyan))] rounded-lg text-[hsl(var(--brand-cyan))] font-inter font-semibold text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
              >
                <span>Rencontrer nos formateurs</span>
                <Users className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
