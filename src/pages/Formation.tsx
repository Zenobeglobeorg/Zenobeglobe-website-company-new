import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";


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
    <section className="w-full px-4 lg:px-8 py-12 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex-1 max-w-[816px]">
            <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-[80px] font-medium leading-tight lg:leading-[90px] mb-6 lg:mb-8">
              Développez vos Compétences avec nos Formations Innovantes
            </h1>
            <p className="text-brand-gray-text font-inter text-lg lg:text-lg mb-8 lg:mb-12 max-w-[511px]">
              Accélérez votre carrière et maîtrisez les technologies de demain
              grâce à des parcours de formation adaptés et certifiants.
            </p>
            <button className="px-10 py-4 bg-brand-blue rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-colors">
              Voir toutes les formations
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2d27d7d9a0b555b6c8f502c80f0423f5d9a1a411?width=1298"
              alt="Formation"
              className="w-full max-w-[400px] lg:max-w-[649px] h-auto rounded-l-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainesFormationSection() {
  const domaines = [
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.8903 13.2244C47.4799 12.7861 46.9873 12.433 46.4405 12.1851C45.8937 11.9373 45.3035 11.7996 44.7034 11.7798C44.1034 11.7601 43.5054 11.8587 42.9435 12.0701C42.3816 12.2815 41.8668 12.6015 41.4286 13.0118C40.9903 13.4221 40.6372 13.9147 40.3893 14.4615C40.1415 15.0083 40.0037 15.5986 39.984 16.1986C39.9643 16.7987 40.0629 17.3967 40.2743 17.9586C40.4857 18.5205 40.8057 19.0353 41.216 19.4735L52.928 31.9992L41.2114 44.5249C40.8011 44.9632 40.4811 45.4779 40.2697 46.0398C40.0583 46.6018 39.9597 47.1998 39.9794 47.7998C39.9992 48.3998 40.1369 48.9901 40.3848 49.5369C40.6326 50.0837 40.9857 50.5763 41.424 50.9866C41.8622 51.397 42.377 51.717 42.9389 51.9283C43.5008 52.1397 44.0988 52.2384 44.6989 52.2186C45.2989 52.1989 45.8892 52.0612 46.436 51.8133C46.9828 51.5654 47.4754 51.2123 47.8857 50.7741L62.5326 35.1215C63.3244 34.2747 63.7649 33.1586 63.7649 31.9992C63.7649 30.8398 63.3244 29.7238 62.5326 28.8769L47.8903 13.2244ZM22.7886 19.4735C23.1989 19.0353 23.5189 18.5205 23.7303 17.9586C23.9416 17.3967 24.0403 16.7987 24.0205 16.1986C24.0008 15.5986 23.8631 15.0083 23.6152 14.4615C23.3674 13.9147 23.0142 13.4221 22.576 13.0118C22.1377 12.6015 21.623 12.2815 21.0611 12.0701C20.4992 11.8587 19.9011 11.7601 19.3011 11.7798C18.0893 11.8197 16.943 12.3393 16.1143 13.2244L1.46284 28.8769C0.670985 29.7238 0.230469 30.8398 0.230469 31.9992C0.230469 33.1586 0.670985 34.2747 1.46284 35.1215L16.1051 50.7741C16.9338 51.6591 18.0802 52.1788 19.292 52.2186C20.5038 52.2585 21.6818 51.8153 22.5668 50.9866C23.4519 50.158 23.9715 49.0116 24.0114 47.7998C24.0513 46.588 23.6081 45.41 22.7794 44.5249L11.072 31.9992L22.7886 19.4735Z"
            fill="#45A3C7"
          />
        </svg>
      ),
      title: "Développement Web",
      description:
        "Maîtrisez les dernières technologies front-end et back-end pour créer des applications web innovantes.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M53.3334 37.3327V15.9993C53.3334 14.5849 52.7715 13.2283 51.7713 12.2281C50.7711 11.2279 49.4145 10.666 48 10.666H16C14.5856 10.666 13.229 11.2279 12.2288 12.2281C11.2286 13.2283 10.6667 14.5849 10.6667 15.9993V37.3327M53.3334 37.3327H10.6667M53.3334 37.3327L57.4747 45.6154C57.881 46.4285 58.0728 47.3319 58.0318 48.24C57.9908 49.148 57.7183 50.0305 57.2404 50.8037C56.7624 51.5769 56.0948 52.2151 55.3008 52.6577C54.5069 53.1003 53.613 53.3327 52.704 53.3327H11.2987C10.3895 53.3331 9.49529 53.1011 8.70099 52.6587C7.90669 52.2162 7.23868 51.5781 6.76041 50.8048C6.28214 50.0316 6.00949 49.1489 5.96835 48.2406C5.92722 47.3324 6.11896 46.4287 6.52538 45.6154L10.6667 37.3327"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Cybersécurité",
      description:
        "Protégez les systèmes et les données contre les menaces numériques avec nos experts en sécurité informatique.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M26.6668 58.6673H37.3335M21.3335 40.0006H42.6668M13.3335 24.0006C13.3335 19.0499 15.3002 14.302 18.8008 10.8013C22.3015 7.30065 27.0495 5.33398 32.0002 5.33398C36.9509 5.33398 41.6988 7.30065 45.1995 10.8013C48.7002 14.302 50.6668 19.0499 50.6668 24.0006C50.669 27.0063 49.9423 29.9676 48.549 32.6307C47.1556 35.2939 45.1372 37.5794 42.6668 39.2913L41.2215 46.134C41.0301 47.3952 40.3931 48.5461 39.4258 49.3779C38.4585 50.2096 37.2252 50.6671 35.9495 50.6673H28.0508C26.7752 50.6671 25.5418 50.2096 24.5745 49.3779C23.6073 48.5461 22.9702 47.3952 22.7788 46.134L21.3335 39.3206C18.8623 37.6026 16.8438 35.3118 15.4506 32.6439C14.0575 29.976 13.3311 27.0104 13.3335 24.0006Z"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Intelligence Artificielle",
      description:
        "Explorez le machine learning, le deep learning et l'analyse de données pour des solutions intelligentes.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M13.3334 54C13.3334 55.104 14.2294 56 15.3334 56H43.7387C46.84 56 48 55.0267 48 51.7333V47.88M13.3334 54C13.3334 52.4087 13.9655 50.8826 15.0907 49.7574C16.216 48.6321 17.7421 48 19.3334 48H46.4054C47.008 48 47.5396 47.96 48 47.88M13.3334 54V16.5333C13.3334 13.504 13.1414 10.1627 16.2454 8.58133C17.3867 8 18.88 8 21.8667 8H46.4C49.696 8 50.6667 9.16533 50.6667 12.2667V43.7333C50.6667 46.3867 49.9147 47.5333 48 47.88"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Gestion de Projet",
      description:
        "Apprenez les méthodologies agiles et traditionnelles pour mener vos projets au succès.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-8 lg:mb-12">
          Nos Domaines de Formations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 max-w-7xl mx-auto">
          {domaines.map((domaine, idx) => (
            <div
              key={idx}
              className="bg-[#090914] rounded-lg p-12 flex flex-col items-center gap-10 hover:bg-opacity-80 transition-all"
            >
              <div className="flex-shrink-0">{domaine.icon}</div>
              <div className="flex flex-col items-center gap-5 text-center">
                <h3 className="text-white font-inter text-2xl font-bold">
                  {domaine.title}
                </h3>
                <p className="text-[#D9D9D9] font-inter text-lg leading-relaxed">
                  {domaine.description}
                </p>
                <button className="text-white font-inter text-lg font-bold hover:text-brand-cyan transition-colors">
                  Decouvrir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FormationsPopulairesSection() {
  const formations = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad625eb171bfd28c1d9b1d12a0a43b9a73977e37?width=792",
      title: "Fullstack JavaScript Bootcamp",
      duration: "12 semaines",
      level: "Avance",
      description:
        "Devenez un développeur Fullstack polyvalent avec React, Node.js et MongoDB, de la conception au déploiement.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad625eb171bfd28c1d9b1d12a0a43b9a73977e37?width=792",
      title: "Fondamentaux de la Cybersécurité",
      duration: "4 semaines",
      level: "Débutant",
      description:
        "Acquérez les bases essentielles pour comprendre et prévenir les cyberattaques courantes.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/ad625eb171bfd28c1d9b1d12a0a43b9a73977e37?width=792",
      title: "Introduction au Machine Learning avec Python",
      duration: "8 semaines",
      level: "Inermediaire",
      description:
        "Devenez un développeur Fullstack polyvalent avec React, Node.js et MongoDB, de la conception au déploiement.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-[#090914]">
      <div className="container mx-auto">
        <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-12 lg:mb-20">
          Nos Formations Populaires
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-11 max-w-6xl mx-auto">
          {formations.map((formation, idx) => (
            <div
              key={idx}
              className="bg-[#27272A] rounded-sm overflow-hidden"
            >
              <img
                src={formation.image}
                alt={formation.title}
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="p-5">
                <h3 className="text-white font-ibm-plex-sans text-lg font-semibold mb-2">
                  {formation.title}
                </h3>
                <p className="text-brand-gray-text font-inter text-base mb-3">
                  {formation.duration}
                </p>
                <div className="inline-block px-2.5 py-1 border border-[#45A3C7] rounded-[20px] mb-4">
                  <span className="text-brand-gray-text font-inter text-sm">
                    {formation.level}
                  </span>
                </div>
                <p className="text-brand-gray-text font-inter text-xs leading-5 mb-5">
                  {formation.description}
                </p>
                <button className="w-full py-3 bg-[#45A3C7] rounded text-white font-ibm-plex-sans text-xs uppercase tracking-widest hover:bg-opacity-90 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PourquoiChoisirSection() {
  const reasons = [
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.6668 34.6667C37.4958 34.6667 40.2089 35.7905 42.2093 37.7909C44.2097 39.7912 45.3335 42.5044 45.3335 45.3333V50.6667C45.3335 51.3739 45.0525 52.0522 44.5524 52.5523C44.0524 53.0524 43.3741 53.3333 42.6668 53.3333C41.9596 53.3333 41.2813 53.0524 40.7812 52.5523C40.2811 52.0522 40.0002 51.3739 40.0002 50.6667V45.3333C40.0002 43.9188 39.4383 42.5623 38.4381 41.5621C37.4379 40.5619 36.0813 40 34.6668 40H16.0002C14.5857 40 13.2291 40.5619 12.2289 41.5621C11.2287 42.5623 10.6668 43.9188 10.6668 45.3333V50.6667C10.6668 51.3739 10.3859 52.0522 9.88578 52.5523C9.38568 53.0524 8.70741 53.3333 8.00016 53.3333C7.29292 53.3333 6.61464 53.0524 6.11454 52.5523C5.61445 52.0522 5.3335 51.3739 5.3335 50.6667V45.3333C5.3335 42.5044 6.4573 39.7912 8.45769 37.7909C10.4581 35.7905 13.1712 34.6667 16.0002 34.6667H34.6668ZM50.6668 34.6667C52.7886 34.6667 54.8234 35.5095 56.3237 37.0098C57.824 38.5101 58.6668 40.5449 58.6668 42.6667V48C58.6668 48.7072 58.3859 49.3855 57.8858 49.8856C57.3857 50.3857 56.7074 50.6667 56.0002 50.6667C55.2929 50.6667 54.6146 50.3857 54.1145 49.8856C53.6144 49.3855 53.3335 48.7072 53.3335 48V42.6667C53.3335 41.9594 53.0525 41.2811 52.5524 40.781C52.0523 40.281 51.3741 40 50.6668 40H46.8908C45.9685 37.8872 44.514 36.0496 42.6695 34.6667H50.6668ZM25.3335 8C28.5161 8 31.5683 9.26428 33.8188 11.5147C36.0692 13.7652 37.3335 16.8174 37.3335 20C37.3335 23.1826 36.0692 26.2348 33.8188 28.4853C31.5683 30.7357 28.5161 32 25.3335 32C22.1509 32 19.0987 30.7357 16.8482 28.4853C14.5978 26.2348 13.3335 23.1826 13.3335 20C13.3335 16.8174 14.5978 13.7652 16.8482 11.5147C19.0987 9.26428 22.1509 8 25.3335 8ZM48.0002 16C50.1219 16 52.1567 16.8429 53.657 18.3431C55.1573 19.8434 56.0002 21.8783 56.0002 24C56.0002 26.1217 55.1573 28.1566 53.657 29.6569C52.1567 31.1571 50.1219 32 48.0002 32C45.8784 32 43.8436 31.1571 42.3433 29.6569C40.843 28.1566 40.0002 26.1217 40.0002 24C40.0002 21.8783 40.843 19.8434 42.3433 18.3431C43.8436 16.8429 45.8784 16 48.0002 16ZM25.3335 13.3333C23.5654 13.3333 21.8697 14.0357 20.6194 15.286C19.3692 16.5362 18.6668 18.2319 18.6668 20C18.6668 21.7681 19.3692 23.4638 20.6194 24.714C21.8697 25.9643 23.5654 26.6667 25.3335 26.6667C27.1016 26.6667 28.7973 25.9643 30.0475 24.714C31.2978 23.4638 32.0002 21.7681 32.0002 20C32.0002 18.2319 31.2978 16.5362 30.0475 15.286C28.7973 14.0357 27.1016 13.3333 25.3335 13.3333ZM48.0002 21.3333C47.2929 21.3333 46.6146 21.6143 46.1145 22.1144C45.6144 22.6145 45.3335 23.2928 45.3335 24C45.3335 24.7072 45.6144 25.3855 46.1145 25.8856C46.6146 26.3857 47.2929 26.6667 48.0002 26.6667C48.7074 26.6667 49.3857 26.3857 49.8858 25.8856C50.3859 25.3855 50.6668 24.7072 50.6668 24C50.6668 23.2928 50.3859 22.6145 49.8858 22.1144C49.3857 21.6143 48.7074 21.3333 48.0002 21.3333Z"
            fill="#45A3C7"
          />
        </svg>
      ),
      title: "Formateurs Experts",
      description:
        "Apprenez des meilleurs, nos formateurs sont des professionnels reconnus dans leur domaine.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M18.6665 29.334H23.9998V34.6673H18.6665V29.334ZM18.6665 40.0007H23.9998V45.334H18.6665V40.0007ZM29.3332 29.334H34.6665V34.6673H29.3332V29.334ZM29.3332 40.0007H34.6665V45.334H29.3332V40.0007ZM39.9998 29.334H45.3332V34.6673H39.9998V29.334ZM39.9998 40.0007H45.3332V45.334H39.9998V40.0007Z"
            fill="#45A3C7"
          />
          <path
            d="M13.3333 58.6673H50.6667C53.608 58.6673 56 56.2753 56 53.334V16.0007C56 13.0593 53.608 10.6673 50.6667 10.6673H45.3333V5.33398H40V10.6673H24V5.33398H18.6667V10.6673H13.3333C10.392 10.6673 8 13.0593 8 16.0007V53.334C8 56.2753 10.392 58.6673 13.3333 58.6673ZM50.6667 21.334L50.6693 53.334H13.3333V21.334H50.6667Z"
            fill="#45A3C7"
          />
        </svg>
      ),
      title: "Flexibilité & Adaptabilité",
      description:
        "Des programmes modulables pour s'adapter à votre emploi du temps et à vos objectifs.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M31.9998 38.4C26.9076 38.4 22.0241 36.3771 18.4234 32.7765C14.8227 29.1758 12.7998 24.2922 12.7998 19.2C12.7998 14.1078 14.8227 9.22425 18.4234 5.62355C22.0241 2.02285 26.9076 0 31.9998 0C37.092 0 41.9756 2.02285 45.5763 5.62355C49.177 9.22425 51.1998 14.1078 51.1998 19.2C51.1998 24.2922 49.177 29.1758 45.5763 32.7765C41.9756 36.3771 37.092 38.4 31.9998 38.4ZM31.9998 28.8C34.5459 28.8 36.9877 27.7886 38.788 25.9882C40.5884 24.1879 41.5998 21.7461 41.5998 19.2C41.5998 16.6539 40.5884 14.2121 38.788 12.4118C36.9877 10.6114 34.5459 9.6 31.9998 9.6C29.4537 9.6 27.0119 10.6114 25.2116 12.4118C23.4112 14.2121 22.3998 16.6539 22.3998 19.2C22.3998 21.7461 23.4112 24.1879 25.2116 25.9882C27.0119 27.7886 29.4537 28.8 31.9998 28.8ZM44.7998 37.6V64L31.9998 51.2L19.1998 64V37.6C22.9506 40.2285 27.4197 41.6385 31.9998 41.6385C36.5799 41.6385 41.049 40.2285 44.7998 37.6Z"
            fill="#45A3C7"
          />
        </svg>
      ),
      title: "Certifications Reconnues",
      description:
        "Obtenez des certifications valorisantes qui boosteront votre carrière.",
    },
    {
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <path
            d="M32.0002 58.6673C46.7278 58.6673 58.6668 46.7282 58.6668 32.0006C58.6668 17.2731 46.7278 5.33398 32.0002 5.33398C17.2726 5.33398 5.3335 17.2731 5.3335 32.0006C5.3335 46.7282 17.2726 58.6673 32.0002 58.6673Z"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.7333 17.8673C31.7333 17.8673 23.7333 21.334 18.4 27.4673C18.4 27.4673 18.4 37.0673 23.4667 43.2007C23.4667 43.2007 31.7333 45.0673 40 43.2007C40 43.2007 45.0667 37.0673 45.0667 27.4673C45.0667 27.734 39.7333 21.334 31.7333 17.8673ZM31.7333 17.8673V5.33398M45.0667 27.734C45.0667 27.734 53.0667 24.0007 57.0667 23.4673M40 43.4673C40 43.4673 45.0667 50.6673 47.7333 53.334M23.4667 43.4673C23.4667 43.4673 18.4 50.6673 16 53.334"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.93359 23.2012C10.6669 24.0012 18.6669 27.7345 18.6669 27.7345"
            stroke="#45A3C7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Support Personnalisé",
      description:
        "Bénéficiez d'un accompagnement individuel tout au long de votre parcours.",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24">
      <div className="container mx-auto">
        <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-8 lg:mb-12">
          Pourquoi Nous Choisis ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 max-w-7xl mx-auto">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-black rounded-lg p-12 flex flex-col items-center gap-10"
            >
              <div className="flex-shrink-0">{reason.icon}</div>
              <div className="flex flex-col items-center gap-5 text-center">
                <h3 className="text-white font-inter text-2xl font-bold">
                  {reason.title}
                </h3>
                <p className="text-[#D9D9D9] font-inter text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Dubois",
      role: "Developpeuse Web",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/35984ab457ff6629ab58306a01254c9cf9bc7729?width=200",
      quote:
        '"Les formations sont d\'une qualité exceptionnelle, avec des projets concrets qui m\'ont permis d\'intégrer rapidement le marché du travail."',
    },
    {
      name: "Marc Lefevre",
      role: "Consultant en Cybersécurité",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/7f860ac4374493b90bcedd6331642af8e9b33827?width=200",
      quote:
        '"Un grand merci aux formateurs pour leur expertise et leur pédagogie. J\'ai pu acquérir des compétences clés pour mon évolution professionnelle."',
    },
    {
      name: "Amélie Bernard",
      role: "Chef de Projet",
      avatar:
        "https://api.builder.io/api/v1/image/assets/TEMP/036a8c6db6ef47ab4af6501a9d34c8158f61363e?width=200",
      quote:
        '"Le programme de gestion de projet est très complet et m\'a donné les outils pour manager mes équipes avec plus d\'efficacité. Je recommande !"',
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24 bg-[#090914]">
      <div className="container mx-auto">
        <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight text-center mb-12 lg:mb-20">
          Ce que Disent Nos Apprenants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-[rgba(217,217,217,0.1)] border-2 border-[#D9D9D9] rounded-[20px] p-5 shadow-lg"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-6"
              />
              <p className="text-[#D9D9D9] font-inter text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <h4 className="text-white font-inter text-2xl font-bold mb-1">
                {testimonial.name}
              </h4>
              <p className="text-[#D9D9D9] font-inter text-lg">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="w-full px-4 lg:px-8 py-16 lg:py-24">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-white font-poppins text-4xl md:text-6xl lg:text-[80px] font-medium leading-tight mb-6">
          Prêt a Transformer Votre Carrière
        </h2>
        <p className="text-brand-gray-text font-inter text-lg mb-8 lg:mb-10">
          Rejoignez des milliers de professionnels qui ont boosté leurs
          compétences avec nos formations.
        </p>
        <Link
          to="/contact"
          className="inline-flex px-10 py-4 bg-brand-blue rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-colors"
        >
          Contactez-nous
        </Link>
      </div>
    </section>
  );
}
