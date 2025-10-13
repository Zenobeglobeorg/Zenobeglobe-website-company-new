import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
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

function ServicesSection() {
  const services = [
    {
      title: "Site Web",
      description:
        "Création de sites web modernes, performants et responsive adaptés à vos besoins.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c0111912a356c713dc003ea251c125b43aff13d5?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
    },
    {
      title: "Application Web",
      description:
        "Développement d'applications web sur mesure pour digitaliser vos processus métier.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f1db32357c67da0db63d2f16fdf3f7012e5fa5d4?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
    },
    {
      title: "Application Mobile",
      description:
        "Applications mobiles natives iOS et Android pour étendre votre présence digitale.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bb637126a9fbdfdad9c809d22705c4911d4f2594?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
    },
    {
      title: "Automatisme",
      description:
        "Solutions d'automatisation pour optimiser vos workflows et gagner en productivité.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/953732b758b7f478d18ffcaad6ff00d221aa0559?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ff09d306ee9bc7721aa4b49ccf8f867724372bba?width=124",
    },
    {
      title: "Marketing",
      description:
        "Stratégies marketing digitales pour booster votre visibilité et croissance en ligne.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/035863fa130a04d7e8a62ca359bfb4771799767a?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8cf03eed2241d52952acbeaa579fb479d2d7cd32?width=124",
    },
    {
      title: "Formations en burautique",
      description:
        "Formations pratiques pour maîtriser les outils bureautiques et améliorer votre efficacité.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2cdf9385ce94d364c01bd7e6754e79159e9171fe?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a7eaddf90542b4b7062479727fe312605c468b7c?width=80",
      iconBg: true,
    },
  ];

  const categories = [
    { label: "Maintenance", active: true },
    { label: "Design", active: false },
    { label: "Developpement web/mobile", active: true, highlight: true },
    { label: "Automatisme", active: false },
    { label: "Marketing", active: false },
    { label: "Formations en burautique", active: false },
    { label: "Securité et reseau", active: false },
  ];

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
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 md:px-10 py-2 md:py-2.5 rounded-[20px] font-inter text-base md:text-xl font-semibold transition-all duration-300 ${
                    cat.highlight
                      ? "bg-[#BBB] text-black"
                      : "bg-white text-black hover:bg-opacity-90"
                  }`}
                >
                  {cat.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="border border-white rounded-[15px] p-5 flex flex-col transition-all duration-300"
              >
                <div className="relative mb-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto rounded-2xl"
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
                <div className="text-center mt-8">
                  <h3 className="text-white font-inter text-2xl font-semibold mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-[#D9D9D9] font-inter text-base line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Axel Pebe",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    },
    {
      name: "Ella Grace",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    },
    {
      name: "Jade Perez",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
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
        <h2 className="text-white font-poppins text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Notre Equipe
        </h2>
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto mb-12 lg:mb-16">
          Une équipe d'experts passionnés dédiée à votre succès numérique
        </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member, idx) => (
            <motion.div 
              key={idx} 
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl mx-auto mb-4 w-48 h-48"
                whileHover={{ scale: 1.1 }}
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
          ))}
        </motion.div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              className={`w-3 h-3 rounded-full ${
                dot === 0 ? "bg-white" : "bg-gray-600"
              }`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: dot * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.3 }}
            ></motion.div>
          ))}
        </div>
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
