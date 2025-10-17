import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

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
    <section className="w-full bg-[#090914] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="flex-shrink-0 order-1 lg:order-none"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
          >
            <motion.img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0a139e4ff12214b9c3172449a022c1e05d988ed8?width=1582"
              alt="Team member"
              className="w-full max-w-[400px] lg:max-w-[791px] h-auto rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="flex-1 text-center lg:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-white font-poppins text-3xl md:text-5xl lg:text-[80px] font-medium leading-tight lg:leading-[90px] mb-8"
              variants={fadeInUp}
            >
              "Qui Sommes-Nous ?" ou "L'Innovation au cœur de nos solutions"
            </motion.h1>
            <motion.div 
              className="flex justify-center lg:justify-end"
              variants={fadeInUp}
            >
              <motion.button 
                className="px-10 py-5 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Decouvrez nos services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NotreHistoireSection() {
  const features = [
    {
      title: "Solutions Fiables",
      description:
        "Des technologies de pointe et des architectures solides pour une performance et une sécurité inégalées.",
    },
    {
      title: "Support Personnalisé",
      description:
        "Une équipe dédiée à votre écoute pour un accompagnement sur mesure et une réactivité optimale.",
    },
    {
      title: "Expertise Locale & Internationale",
      description:
        "Une connaissance approfondie du marché local, renforcée par une perspective et des standards internationaux.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-6 lg:mb-12">
            Notre Histoire
          </h2>
          <p className="text-[hsl(var(--brand-gray-text))] font-inter text-lg leading-relaxed text-center max-w-[640px] mx-auto mb-12 lg:mb-16">
            ZenobeGlobe est une entreprise technologique innovante basée au Gabon
            et au Cameroun, spécialisée dans l'accompagnement des entreprises,
            administrations et particuliers dans leur transition numérique.Notre
            objectif est de proposer des solutions fiables, adaptées et durables
            dans les domaines clés du digital, en bâtissant un écosystème
            technologique local, accessible, performant et sécurisé.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#090914] rounded-lg p-8 flex flex-col items-center text-center"
            >
              <motion.div 
                className="w-16 h-16 bg-[hsl(var(--brand-blue))] border border-[#E5EAF1] rounded-2xl flex items-center justify-center mb-8"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6665 17.334L11.9998 22.6673L25.3332 9.33398"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="text-white font-inter text-2xl font-bold mb-4">
                {feature.title}
              </h3>
              <p className="text-[#D9D9D9] font-inter text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-[#090914] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-12 lg:mb-20">
            Notre Mission Et Vision
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Image Section */}
          <motion.div 
            className="flex-1 rounded-lg h-64 lg:h-[423px] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Notre équipe en action"
              className="w-full h-full object-cover rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.div 
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-[hsl(var(--brand-blue))] rounded-lg overflow-hidden">
              {/* Mission Button */}
              <motion.button
                onClick={() => setShowMission(!showMission)}
                className="w-full px-8 py-6 flex items-center gap-4 border-b border-white hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.svg
                  className="w-8 h-8 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: showMission ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path
                    d="M11.1659 23.9621L22.3599 17.4991C23.7899 16.6751 23.7899 15.3241 22.3599 14.4991L11.1649 8.03614C9.73489 7.21014 8.56689 7.88614 8.56689 9.53614V22.4621C8.56689 24.1121 9.73689 24.7881 11.1649 23.9621H11.1659Z"
                    fill="white"
                  />
                </motion.svg>
                <span className="text-white font-poppins text-2xl lg:text-[32px] font-semibold">
                  Notre Mission
                </span>
              </motion.button>

              {/* Mission Content */}
              <motion.div
                initial={false}
                animate={{
                  height: showMission ? "auto" : 0,
                  opacity: showMission ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6">
                  <p className="text-white font-poppins text-sm lg:text-[15px] font-semibold leading-relaxed">
                    Devenir le partenaire de référence en transformation
                    numérique en Afrique Centrale en offrant des solutions
                    technologiques innovantes et adaptées au contexte local. <br />
                    Notre engagement repose sur une conviction forte : la
                    technologie doit être un levier de progrès au service de
                    l'humain, de la performance organisationnelle et du
                    développement durable.
                  </p>
                </div>
              </motion.div>

              {/* Vision Button */}
              <motion.button
                onClick={() => setShowVision(!showVision)}
                className="w-full px-8 py-6 flex items-center gap-4 border-t border-white hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.svg
                  className="w-8 h-8 flex-shrink-0"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ rotate: showVision ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <path
                    d="M11.1659 23.9621L22.3599 17.4991C23.7899 16.6751 23.7899 15.3241 22.3599 14.4991L11.1649 8.03614C9.73489 7.21014 8.56689 7.88614 8.56689 9.53614V22.4621C8.56689 24.1121 9.73689 24.7881 11.1649 23.9621H11.1659Z"
                    fill="white"
                  />
                </motion.svg>
                <span className="text-white font-poppins text-2xl lg:text-[32px] font-semibold">
                  Notre Vision
                </span>
              </motion.button>

              {/* Vision Content */}
              <motion.div
                initial={false}
                animate={{
                  height: showVision ? "auto" : 0,
                  opacity: showVision ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6">
                  <p className="text-white font-poppins text-sm lg:text-[15px] font-semibold leading-relaxed">
                  Concevoir des solutions digitales sur mesure, intelligentes, sécurisées et évolutives, 
                  accompagnant entreprises et particuliers vers un écosystème numérique fluide et accessible. <br />
                  Nous bâtissons un écosystème numérique local, accessible, performant et sécurisé, permettant 
                  à nos clients d'évoluer dans un environnement digital sans faille.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NosValeursSection() {
  const values = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 7.25696C21.2216 5.87292 23.0088 5 25 5C28.6819 5 31.6667 7.98477 31.6667 11.6667C31.6667 15.3486 28.6819 18.3333 25 18.3333C23.0088 18.3333 21.2216 17.4604 20 16.0764M25 35H5V33.3333C5 27.8105 9.47715 23.3333 15 23.3333C20.5228 23.3333 25 27.8105 25 33.3333V35ZM25 35H35V33.3333C35 27.8105 30.5228 23.3333 25 23.3333C23.1786 23.3333 21.4709 23.8203 20 24.6712M21.6667 11.6667C21.6667 15.3486 18.6819 18.3333 15 18.3333C11.3181 18.3333 8.33333 15.3486 8.33333 11.6667C8.33333 7.98477 11.3181 5 15 5C18.6819 5 21.6667 7.98477 21.6667 11.6667Z"
            stroke="url(#paint0_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="5"
              y1="5"
              x2="38.6377"
              y2="9.86897"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6DDCFF" />
              <stop offset="1" stopColor="#7F60F9" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description:
        "Create a free account. Amet minim mollit non est sit dolor do.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M28.3332 23.3327V33.3327M23.3332 28.3327H33.3332M9.99984 16.666H13.3332C15.1741 16.666 16.6665 15.1736 16.6665 13.3327V9.99935C16.6665 8.1584 15.1741 6.66602 13.3332 6.66602H9.99984C8.15889 6.66602 6.6665 8.1584 6.6665 9.99935V13.3327C6.6665 15.1736 8.15889 16.666 9.99984 16.666ZM26.6665 16.666H29.9998C31.8408 16.666 33.3332 15.1736 33.3332 13.3327V9.99935C33.3332 8.1584 31.8408 6.66602 29.9998 6.66602H26.6665C24.8256 6.66602 23.3332 8.1584 23.3332 9.99935V13.3327C23.3332 15.1736 24.8256 16.666 26.6665 16.666ZM9.99984 33.3327H13.3332C15.1741 33.3327 16.6665 31.8403 16.6665 29.9993V26.666C16.6665 24.8251 15.1741 23.3327 13.3332 23.3327H9.99984C8.15889 23.3327 6.6665 24.8251 6.6665 26.666V29.9993C6.6665 31.8403 8.15889 33.3327 9.99984 33.3327Z"
            stroke="url(#paint0_linear2)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear2"
              x1="6.6665"
              y1="6.66602"
              x2="36.5666"
              y2="10.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6DDCFF" />
              <stop offset="1" stopColor="#7F60F9" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description:
        "Add team member on your project. Amet minim mollit non.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M8.33333 5V11.6667M5 8.33333H11.6667M10 28.3333V35M6.66667 31.6667H13.3333M21.6667 5L25.4762 16.4286L35 20L25.4762 23.5714L21.6667 35L17.8571 23.5714L8.33333 20L17.8571 16.4286L21.6667 5Z"
            stroke="url(#paint0_linear3)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear3"
              x1="5"
              y1="5"
              x2="38.6377"
              y2="9.86897"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6DDCFF" />
              <stop offset="1" stopColor="#7F60F9" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description:
        "Start automating. Amet minim mollit non est sit dolor doros.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M21.6665 16.6667V5L6.6665 23.3333H18.3332L18.3332 35L33.3332 16.6667L21.6665 16.6667Z"
            stroke="url(#paint0_linear4)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear4"
              x1="6.6665"
              y1="5"
              x2="36.696"
              y2="8.86373"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6DDCFF" />
              <stop offset="1" stopColor="#7F60F9" />
            </linearGradient>
          </defs>
        </svg>
      ),
      description: "Grow business fast. Amet minim mollit non est sit dolor.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-12 lg:mb-20">
            Nos valeurs
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-[#090914] rounded-lg p-8 flex flex-col ${
                idx === 1 ? "lg:mt-12" : idx === 3 ? "lg:mt-24" : ""
              }`}
            >
              <motion.div 
                className="mb-8"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <p className="text-white font-inter text-xl leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function NotreEquipeSection() {
  const team = [
    {
      name: "Matida Flora",
      role: "Product Manager",
      image:
        "/img-1.jpg",
      highlight: false,
    },
    {
      name: "Brice",
      role: "CTO",
      image:
        "/img-2.jpg",
      highlight: false,
    },
    {
      name: "Aurel",
      role: "Designer",
      image:
        "/img-3.jpg",
      highlight: false,
    },
    {
      name: "Diallo",
      role: "Dev Backend",
      image:
        "/img-4.jpg",
      highlight: false,
    },
    {
        name: "Toussok Fabricia",
        role: "Dev Frontend",
        image:
          "/img-5.jpg",
        highlight: false,
    },
    {
        name: "Ngoulou Zenobe",
        role: "CEO",
        image:
          "/img-6.jpg",
        highlight: false,
    },
    {
        name: "Djoko Franck",
        role: "Dev Fullstack",
        image:
          "/img-7.jpg",
        highlight: false,
    },
  ];
  /*const team = [
    {
      name: "Theresa Webb",
      role: "Co-Founder, CEO",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/3fb60d047b1f6c7ee0330ff6bc231700768c1126?width=612",
      highlight: false,
    },
    {
      name: "Devon Lane",
      role: "Ethical Hacker",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/2b1546e1da724c9cff1e4794008ef32dc262028e?width=612",
      highlight: true,
    },
    {
      name: "Jacob Jones",
      role: "Software Development Manager",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/93e0cd6986fd544062c86471cc86d0422eeade95?width=612",
      highlight: false,
    },
    {
      name: "Wade Warren",
      role: "Team Leader",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/415440f7b9b4ff2c4e7208b4f30ee8a48c288e88?width=612",
      highlight: false,
    },
  ];*/

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-[#090914] overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-12 lg:mb-20">
            Notre Equipe
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-12 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {team.map((member, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <TeamCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <TeamCard key={`row2-${idx}`} member={member} />
            ))}
          </div>*/}
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
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div 
      className="bg-[#27272A] rounded-sm overflow-hidden"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-auto aspect-square object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="p-5">
        <h3 className="text-white font-ibm-plex-sans text-lg font-semibold mb-1">
          {member.name}
        </h3>
        <p className="text-[hsl(var(--brand-gray-text))] font-inter text-base mb-4">
          {member.role}
        </p>
      </div>
      <div className="border-t border-[#3F3F46]">
        <motion.button
          className={`w-full py-4 text-white font-ibm-plex-sans text-xs uppercase tracking-widest transition-colors ${
            member.highlight
              ? "bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] hover:opacity-90"
              : "bg-[#27272A] hover:bg-[#3F3F46]"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Follow on Twitter
        </motion.button>
      </div>
    </motion.div>
  );
}
