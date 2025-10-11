import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="flex-1 max-w-[816px]">
            <h1 className="text-white font-poppins text-4xl md:text-5xl lg:text-[80px] font-medium leading-tight lg:leading-[90px] mb-6 lg:mb-8">
              Votre Partenaire en Cybersécurité & Solution Numérique
            </h1>
            <p className="text-[hsl(var(--brand-gray-text))] font-inter text-lg lg:text-lg mb-8 lg:mb-12">
              Securisez votre infrastructures IT avec ZENOBEGLOBE
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/commencer"
                className="px-10 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-colors"
              >
                Commencer
              </Link>
              <Link
                to="/travail"
                className="px-10 py-4 border-4 border-[#4AA3DF] rounded-lg text-white font-inter font-semibold text-base hover:bg-[#4AA3DF] hover:bg-opacity-20 transition-colors"
              >
                Notre Travail
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
                alt="Cybersecurity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-[733px]">
            <div className="mb-6">
              <p className="text-[hsl(var(--brand-blue))] font-inter font-bold text-base mb-1">
                DECOUVREZ NOTRE HISTOIRE
              </p>
              <div className="w-14 h-0.5 bg-[hsl(var(--brand-blue))]"></div>
            </div>
            <h2 className="text-white font-inter font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Sécurisez votre infrastructures IT avec ZENOBEGLOBE
            </h2>
            <p className="text-[hsl(var(--brand-gray-text))] font-inter text-lg leading-relaxed mb-8">
              ZenobeGlobe est une entreprise technologique innovante basée au
              Gabon, spécialisée dans l'accompagnement des entreprises,
              administrations et particuliers dans leur transition numérique.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg">
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
              </div>

              <div className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg">
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
              </div>

              <div className="flex items-center gap-3 px-2 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg">
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
              </div>
            </div>

            <Link
              to="/a-propos"
              className="inline-flex px-16 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold text-base hover:bg-opacity-90 transition-colors"
            >
              Explorez plus
            </Link>
          </div>

          <div className="flex-shrink-0 relative">
            <div className="relative w-full max-w-[522px]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Team member"
                className="rounded-3xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-[#D7EFF7] shadow-lg -z-10"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-3xl bg-[#BDE4F0] shadow-lg -z-10"></div>
            </div>
          </div>
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
        "Our team of experienced attorneys offers comprehensive legal advice across various practice areas.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/c0111912a356c713dc003ea251c125b43aff13d5?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f01c68df7669c2c46b3c0adbe169a5a0838160bc?width=124",
    },
    {
      title: "Application Web",
      description:
        "From misdemeanors to felonies, we offer strategic defense strategies to safeguard your rights and pursue the best possible",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/f1db32357c67da0db63d2f16fdf3f7012e5fa5d4?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ca50e1f722487d939acedb05bd3274b8832146ad?width=124",
    },
    {
      title: "Application Mobile",
      description:
        "From business formation and governance to mergers and acquisitions, our corporate law team provides comprehensive legal solutions.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/bb637126a9fbdfdad9c809d22705c4911d4f2594?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/14e9a81667a4f3b20f0e9d3ac5e2003b62e2a305?width=124",
    },
    {
      title: "Automatisme",
      description:
        "Our team of experienced attorneys offers comprehensive legal advice across various practice areas.",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/953732b758b7f478d18ffcaad6ff00d221aa0559?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ff09d306ee9bc7721aa4b49ccf8f867724372bba?width=124",
    },
    {
      title: "Marketing",
      description:
        "From misdemeanors to felonies, we offer strategic defense strategies to safeguard your rights and pursue the best possible",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/035863fa130a04d7e8a62ca359bfb4771799767a?width=800",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8cf03eed2241d52952acbeaa579fb479d2d7cd32?width=124",
    },
    {
      title: "Formations en burautique",
      description:
        "From business formation and governance to mergers and acquisitions, our corporate law team provides comprehensive legal solutions.",
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
    <section className="w-full px-4 lg:px-8 py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="bg-[hsl(var(--brand-blue))] rounded-[20px] px-6 md:px-12 lg:px-24 py-12 lg:py-16">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-white font-poppins text-2xl md:text-3xl font-semibold mb-6">
              Nos Services
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-6 md:px-10 py-2 md:py-2.5 rounded-[20px] font-inter text-base md:text-xl font-semibold transition-colors ${
                    cat.highlight
                      ? "bg-[#BBB] text-black"
                      : "bg-white text-black hover:bg-opacity-90"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="border border-white rounded-[15px] p-5 flex flex-col"
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
              </div>
            ))}
          </div>
        </div>
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
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-white font-poppins text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Notre Equipe
        </h2>
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto mb-12 lg:mb-16">
          Une équipe d'experts passionnés dédiée à votre succès numérique
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-2xl object-cover mx-auto mb-4"
              />
              <h3 className="text-white font-inter text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-gray-400 font-inter">{member.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full ${
                dot === 0 ? "bg-white" : "bg-gray-600"
              }`}
            ></div>
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
    <section className="w-full py-12 lg:py-20 bg-[hsl(var(--brand-blue))]">
      <div className="container mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[hsl(var(--brand-cyan))] font-inter text-sm font-bold uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-white font-poppins text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
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
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 font-inter text-base mb-4">
            Vous avez d'autres questions ?
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 bg-[hsl(var(--brand-cyan))] rounded-lg text-black font-inter font-semibold hover:bg-opacity-90 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      author: "John Doe",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    },
    {
      text: "Excellent service, highly recommended for digital transformation projects.",
      author: "Marie Claire",
      role: "CTO, Innovate",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    {
      text: "Professional team with great expertise in cybersecurity solutions.",
      author: "Alex Johnson",
      role: "IT Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-white font-poppins text-3xl md:text-5xl font-semibold mb-4">
          Temoignages
        </h2>
        <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto mb-12">
          Ce que nos clients disent de nous
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="text-white font-inter font-semibold">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 font-inter text-left">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="w-full px-4 lg:px-8 py-12 lg:py-20 bg-[hsl(var(--brand-blue))]">
      <div className="container mx-auto">
        <div className="bg-[#0f1729] rounded-3xl px-6 md:px-12 lg:px-16 py-12 lg:py-16 max-w-5xl mx-auto">
          <h2 className="text-white font-poppins text-3xl md:text-4xl font-semibold mb-4">
            Contactez nous
          </h2>
          <p className="text-gray-400 font-inter text-lg mb-8">
            N'hésitez pas à nous contacter pour toute question ou demande
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-3 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-inter">
                Ecrivez nous un mail
              </span>
            </div>

            <div className="flex items-center gap-3 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-inter">
                Call us directly: +241 01 733 187
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
