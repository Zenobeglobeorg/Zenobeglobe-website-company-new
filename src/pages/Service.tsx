import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { User, Grid, Sparkles, Zap, Smartphone, Shield, Server, Edit, Globe, Lock, Code, Brush, Package, FileText, X, ChevronDown } from "lucide-react"; // Added ChevronDown for the select dropdown
import { useState, useCallback, useMemo, useEffect } from "react"; 
import type { ReactNode } from "react";

// Define the Service component
export default function Service() {
    
    // --------------------------------------------------------------------------------
    // NEW ADDITIONS FOR MODAL START
    // --------------------------------------------------------------------------------
    
    // State to manage modal visibility and the service selected in the dropdown
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [initialService, setInitialService] = useState('');

    // List of all main services for the dropdown
    const allServices = useMemo(() => ([
        "SÉCURITÉ ET RÉSEAUX INFORMATIQUE",
        "MAINTENANCE",
        "DÉVELOPPEMENT WEB/MOBILE",
        "FORMATION EN BUREAUTIQUE",
        "MARKETING DIGITAL",
        "INFOGRAPHIE ET DESIGN",
        "INTERNET DES OBJETS (IoT)",
    ]), []);

    // Helper to open the modal and set the initial service
    const openModal = useCallback((service: string) => {
        setInitialService(service);
        setIsModalOpen(true);
    }, []);

    // Helper to close the modal
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        // Reset the service selection on close if needed, but not strictly required
    }, []);
    
    // --------------------------------------------------------------------------------
    // NEW ADDITIONS FOR MODAL END
    // --------------------------------------------------------------------------------

    // Mission items data for reusability and clarity
    // ... (Existing data structures for securityMissions, maintenanceMissions, etc. are here)
    const securityMissions = [
        { title: "Audit informatique", description: "Analyse complète de votre infrastructure pour identifier les vulnérabilités et proposer des solutions adaptées à votre environnement numérique.", icon: <User className="w-8 h-8 text-white" /> },
        { title: "Solution antivirus et firewall", description: "Mise en place de solutions antivirus et de pare-feu pour protéger votre infrastructure contre les menaces externes.", icon: <Shield className="w-8 h-8 text-white" /> },
        { title: "Déploiement et configuration", description: "Déploiement et configuration de votre infrastructure pour assurer la fiabilité et la performance de votre environnement numérique.", icon: <Server className="w-8 h-8 text-white" /> },
        { title: "Architecture réseau sur mesure", description: "Conception et mise en place d'une architecture réseau adaptée à vos besoins spécifiques.", icon: <Grid className="w-8 h-8 text-white" /> },
    ];

    const maintenanceMissions = [
        { title: "Audit informatique", description: "Analyse complète de votre infrastructure pour identifier les vulnérabilités et proposer des solutions adaptées à votre environnement numérique.", icon: <User className="w-8 h-8 text-white" /> },
        { title: "Télésurveillance et Proactivité", description: "Surveillance et maintenance préventive à distance pour anticiper les pannes et garantir le temps de disponibilité maximal.", icon: <Lock className="w-8 h-8 text-white" /> },
        { title: "Déploiement et configuration", description: "Déploiement et configuration de votre infrastructure pour assurer la fiabilité et la performance de votre environnement numérique.", icon: <Server className="w-8 h-8 text-white" /> },
    ];

    const devOfferings = [
        { title: "Conception sur mesure et ergonomique", icon: <User className="w-6 h-6 text-white" /> },
        { title: "Applications mobiles natives Android & IOS", icon: <Smartphone className="w-6 h-6 text-white" /> },
        { title: "Solutions performantes et optimisées SEO", icon: <Grid className="w-6 h-6 text-white" /> },
        { title: "Sites web professionnels et boutiques e-commerce", icon: <Sparkles className="w-6 h-6 text-white" /> },
        { title: "Intégration avec vos systèmes existants", icon: <Code className="w-6 h-6 text-white" /> },
        { title: "Sécurité et protection des données", icon: <Zap className="w-6 h-6 text-white" /> },
    ];

    const marketingMissions = [
        { title: "Stratégie de contenu (SEO/SEA)", description: "Atteignez la bonne audience. Nous optimisons votre présence pour un meilleur classement sur Google (SEO) et gérons vos campagnes publicitaires ciblées (SEA).", icon: <Globe className="w-8 h-8 text-white" /> },
        { title: "Gestion des réseaux sociaux", description: "Nous développons et engageons votre communauté. De la création de contenu à la gestion des campagnes, nous transformons l'engagement en croissance.", icon: <Edit className="w-8 h-8 text-white" /> },
        { title: "Analyse et Amélioration de la performance", description: "Nous ne faisons pas que des promesses, nous mesurons. Analyse des données, rapports clairs et recommandations précises pour une amélioration continue.", icon: <Grid className="w-8 h-8 text-white" /> },
    ];

    const designOfferings = [
        { title: "Gestion de Votre Identité Visuelle", description: "Création de logos, chartes graphiques et kits d'identité complets pour une marque forte et cohérente.", icon: <Brush className="w-6 h-6 text-white" /> },
        { title: "Supports Imprimés et Digitaux", description: "Conception de brochures, cartes de visite, affiches, bannières web et newsletters professionnelles.", icon: <FileText className="w-6 h-6 text-white" /> },
        { title: "Design UI/UX d'Applications", description: "Création d'interfaces utilisateur intuitives et d'expériences utilisateur engageantes pour vos plateformes numériques.", icon: <Smartphone className="w-6 h-6 text-white" /> },
    ];
    
    // Helper component for Mission Items
    const MissionItem = ({ title, description, icon }: { title: string, description: string, icon: ReactNode }) => (
        <div className="w-full md:w-[23%] flex flex-col gap-3 p-4">
            <div className="mx-auto bg-[#49B0F2] w-24 h-24 rounded-xl flex items-center justify-center shadow-lg">
                {icon}
            </div>
            <h3 className="font-poppins text-white text-lg font-semibold mt-2">{title}</h3>
            <p className="font-inter text-sm text-gray-400 text-center">{description}</p>
        </div>
    );
    
    // Helper component for Development Offerings (Cubes)
    const DevCube = ({ title, icon }: { title: string, icon: ReactNode }) => (
        <motion.div
            className="h-64 p-6 rounded-xl shadow-2xl bg-[#111827] flex flex-col justify-between cursor-pointer border border-transparent hover:border-[#49B0F2]"
            whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
        >
            <div className="w-10 h-10 bg-gradient-to-br from-[#49B0F2] to-[#2563EB] rounded-lg flex items-center justify-center p-2">
                {icon}
            </div>
            <p className="text-xl font-poppins font-medium leading-snug">
                {title.split('<br />').map((line, index) => (
                    <span key={index}>{line}<br /></span>
                ))}
            </p>
        </motion.div>
    );

    // Helper component for Training List Items
    const TrainingItem = ({ number, title, description }: { number: number, title: string, description: string }) => (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#1A374A] font-bold flex items-center justify-center text-lg mt-1 shadow-md">
                {number}
            </div>
            <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-1 font-poppins">{title}</h3>
                <p className="text-gray-300 text-base font-inter">{description}</p>
            </div>
        </div>
    );
    
    // --------------------------------------------------------------------------------
    // MODIFIED Reservation Button (to accept and pass service name)
    // --------------------------------------------------------------------------------
    const ReservationButton = ({ serviceName }: { serviceName: string }) => (
        <motion.button 
            className="text-white rounded px-12 py-3 text-lg font-medium tracking-wider uppercase shadow-lg hover:shadow-xl transition duration-300" 
            style={{ backgroundColor: "#49B0F2", fontFamily: "Inter", margin: "auto", cursor: "pointer", width: "fit-content" }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(73, 176, 242, 0.5), 0 4px 6px -2px rgba(73, 176, 242, 0.2)" }}
            transition={{ duration: 0.3 }}
            onClick={() => openModal(serviceName)} // Use the new openModal function
        >
            Réserver ce service
        </motion.button>
    );
    // --------------------------------------------------------------------------------
    
    // Pricing Card Component (for CONTRACT DE SUPPORT TECHNIQUES)
    const PricingCard = ({ title, features, isPremium }: { title: string, features: string[], isPremium: boolean }) => (
        <motion.div 
            className={`p-8 rounded-2xl shadow-2xl flex flex-col space-y-6 ${isPremium ? 'bg-gradient-to-br from-[#49B0F2]/20 to-gray-900 border-2 border-[#49B0F2]' : 'bg-[#111827] border border-gray-700'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            <h3 className="text-3xl font-poppins font-bold text-white uppercase">{title}</h3>
            <p className="text-sm text-[#49B0F2] font-inter">Meilleur rapport qualité-prix</p>
            <ul className="space-y-3 text-left">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 font-inter">
                        <svg className="flex-shrink-0 w-5 h-5 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#49B0F2" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
            {/* Added ReservationButton here for consistency, but kept original 'Choisir le plan' for pricing context */}
            <button className={`w-full py-3 rounded-lg font-poppins font-bold text-lg transition duration-300 ${isPremium ? 'bg-[#49B0F2] text-white hover:bg-[#2563EB]' : 'bg-gray-700 text-white hover:bg-gray-600'}`}>
                Choisir le plan
            </button>
        </motion.div>
    );

    // --------------------------------------------------------------------------------
    // NEW ReservationModal Component - DESIGN ENHANCED HERE
    // --------------------------------------------------------------------------------
    const ReservationModal = ({ isOpen, onClose, initialService, allServices }: { 
        isOpen: boolean, 
        onClose: () => void, 
        initialService: string, 
        allServices: string[] 
    }) => {
        const [service, setService] = useState(initialService);
        const [email, setEmail] = useState('');
        const [message, setMessage] = useState('');

        // Ensure hook order: update service state when initialService prop changes
        useEffect(() => {
            setService(initialService);
        }, [initialService]);

        if (!isOpen) return null;

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            // Basic validation
            if (!email) {
                alert("Veuillez entrer une adresse email.");
                return;
            }
            // In a real app, you'd send this data to a backend API
            console.log({ email, service, message });
            alert(`Demande de réservation pour ${service} envoyée !\nEmail: ${email}`);
            onClose(); // Close on successful submission
            // Reset form fields
            setEmail('');
            setMessage('');
            setService(initialService); // Reset service to initial value
        };
        
        
        return (
            // Conteneur principal: fixed pour couvrir tout l'écran, permet le scroll de la page derrière
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
                {/* Backdrop: Darken and blur the background, clickable to close */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" // Backdrop blur amélioré
                />

                {/* Modal Container: Ajout de max-h-full et overflow-y-auto pour les petits écrans */}
                <motion.div
                    initial={{ y: -50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.3 }} // Animation de rebond affinée
                    className="relative w-full max-w-lg mx-auto bg-[#090914] p-6 sm:p-10 rounded-2xl shadow-3xl-blue border border-[#49B0F2]/30 max-h-full overflow-y-auto" // Shadow et bordure élégante
                    style={{ boxShadow: '0 15px 30px rgba(73, 176, 242, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)' }} // Ombre personnalisée
                >
                    <button 
                        onClick={onClose} 
                        className="absolute top-4 right-4 text-gray-400 hover:text-[#49B0F2] transition duration-200 p-2 rounded-full bg-gray-900/50 hover:bg-gray-800" // Bouton de fermeture stylisé
                        aria-label="Fermer le formulaire"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <h2 className="text-4xl font-extrabold font-poppins text-white mb-2 text-center tracking-tight">
                        Réserver un Service
                    </h2>
                    <p className="text-center text-gray-400 font-inter mb-10 text-base">
                        Remplissez le formulaire pour que nous puissions vous contacter rapidement.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-inter mb-2">
                                Votre Email <span className="text-[#49B0F2]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#49B0F2] focus:ring-2 focus:ring-[#49B0F2]/50 transition duration-300 shadow-inner" // PADDING, arrondis et focus améliorés
                                placeholder="votre.email@exemple.com"
                            />
                        </div>

                        {/* Service Select - Avec Flèche de Déroulement Personnalisée */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-medium text-gray-300 font-inter mb-2">
                                Service Demandé <span className="text-[#49B0F2]">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    required
                                    className="w-full p-4 pr-12 rounded-xl bg-gray-900 border border-gray-700 text-white focus:border-[#49B0F2] focus:ring-2 focus:ring-[#49B0F2]/50 transition duration-300 appearance-none" // APPARENCE NATIVE RETIREE
                                    style={{ WebkitAppearance: 'none', MozAppearance: 'none' }} 
                                >
                                    {allServices.map((serviceOption) => (
                                        <option 
                                            key={serviceOption} 
                                            value={serviceOption}
                                            className="bg-[#090914] text-white" // Style des options
                                        >
                                            {serviceOption}
                                        </option>
                                    ))}
                                </select>
                                {/* Flèche de déroulement customisée */}
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-inter mb-2">
                                Votre Message (optionnel)
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#49B0F2] focus:ring-2 focus:ring-[#49B0F2]/50 transition duration-300 shadow-inner" // PADDING, arrondis et focus améliorés
                                placeholder="Décrivez votre demande ou vos besoins spécifiques..."
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button 
                            type="submit"
                            className="w-full text-white rounded-xl py-4 text-lg font-bold tracking-wider uppercase shadow-lg transition duration-300 mt-8" // Ajout de MT-8 et taille du bouton
                            style={{ backgroundColor: "#49B0F2", fontFamily: "Inter", cursor: "pointer" }}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -5px rgba(73, 176, 242, 0.5)" }} // Ombre au survol plus prononcée
                            transition={{ duration: 0.2 }}
                        >
                            Envoyer la Demande
                        </motion.button>

                        {/* Cancel Button */}
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="w-full py-2 text-gray-500 font-medium font-inter hover:text-white transition duration-200"
                        >
                            Annuler
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    };
    // --------------------------------------------------------------------------------


    return (
        <Layout>
            {/* The main content div's background class is used as a base */}
            <div className="min-h-screen bg-[#272626cc] text-white">
                
                {/* 1. SECURITE ET RESEAUX INFORMATIQUE */}
                {/* ... (Existing sections 1 to 8 remain unchanged) ... */}
                
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 1) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            SÉCURITÉ ET RÉSEAUX INFORMATIQUE
                        </h1>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* ... (Text and Image) ... */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                            <div className="lg:w-1/2 w-full order-2 lg:order-1 text-justify space-y-4">
                                <h2 className="text-3xl md:text-4xl font-medium font-poppins text-white">
                                    Sécurité & Réseau Informatique
                                </h2>
                                <p className="mt-2 text-lg leading-relaxed font-inter text-gray-300">
                                    Le service de sécurité informatique de **ZENOBEGLOBE** est conçu comme une cyber-stratégie complète pour protéger les informations et les actifs numériques de votre entreprise. Il propose des solutions réseau adaptées à vos besoins spécifiques pour garantir la **performance, la sécurité et la fiabilité** de votre infrastructure.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2 h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" 
                                    alt="Cybersecurity concept with digital lock" 
                                    className="w-full h-full object-cover" 
                                    loading="lazy" 
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-12">
                            <ReservationButton serviceName="SÉCURITÉ ET RÉSEAUX INFORMATIQUE" />
                        </div>
                        
                        <div className="mt-20 p-6 md:p-8 rounded-2xl border-2 border-[#49B0F2] bg-[#0A0A19] shadow-xl">
                            <p className="font-inter text-[#49B0F2] uppercase text-sm font-medium text-center">MISSION</p>
                            <h2 className="text-3xl font-medium font-poppins text-white text-center mb-10">Nos Missions Liées</h2>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-4">
                                {securityMissions.map((mission, index) => (
                                    <MissionItem key={index} {...mission} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />
                
                {/* 2. MAINTENANCE */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 2) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            MAINTENANCE
                        </h1>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                            <div className="lg:w-1/2 w-full order-2 text-justify space-y-4">
                                <h2 className="text-3xl md:text-4xl font-medium font-poppins text-white">
                                    Maintenance Informatique
                                </h2>
                                <p className="mt-2 text-lg leading-relaxed font-inter text-gray-300">
                                    **ZENOBEGLOBE** : Votre tranquillité par la Maintenance Informatique. Le service de maintenance de ZENOBEGLOBE a pour objectif central de maintenir vos équipements en parfait état de fonctionnement et d'assurer la **longévité** de votre infrastructure numérique.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                                    alt="IT Maintenance concept" 
                                    className="w-full h-full object-cover" 
                                    loading="lazy" 
                                />
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12">
                            <ReservationButton serviceName="MAINTENANCE" />
                        </div>
                        
                        <div className="mt-20 p-6 md:p-8 rounded-2xl border-2 border-[#49B0F2] bg-[#0A0A19] shadow-xl">
                            <p className="font-inter text-[#49B0F2] uppercase text-sm font-medium text-center">MISSION</p>
                            <h2 className="text-3xl font-medium font-poppins text-white text-center mb-10">Nos Missions Liées</h2>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-4">
                                {maintenanceMissions.map((mission, index) => (
                                    <MissionItem key={index} {...mission} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />

                {/* 3. DEVELOPPEMENT WEB/MOBILE */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 3) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            DÉVELOPPEMENT WEB/MOBILE
                        </h1>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                            <div className="lg:w-1/2 w-full order-2 lg:order-1 text-justify space-y-4">
                                <h2 className="text-3xl md:text-4xl font-medium font-poppins text-white">
                                    Développement Web/Mobile
                                </h2>
                                <p className="mt-2 text-lg leading-relaxed font-inter text-gray-300">
                                    Le service de développement web et mobile de **ZENOBEGLOBE** est conçu pour créer des solutions numériques sur mesure qui répondent aux besoins spécifiques de votre entreprise. Nous utilisons les dernières technologies et méthodologies pour garantir la **performance, la sécurité et la fiabilité** de votre infrastructure.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full order-1 lg:order-2 flex gap-6 items-end justify-center p-4">
                                <div className="w-28 h-40 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-xl overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Web Development" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                                <div className="w-36 h-64 sm:w-56 sm:h-96 lg:w-64 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Mobile Development" className="w-full h-full object-cover" loading="lazy" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12">
                            <ReservationButton serviceName="DÉVELOPPEMENT WEB/MOBILE" />
                        </div>
                        
                        {/* Ce Que Nous Offrons - Grid Section */}
                        <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                            {/* ... (Existing code for offerings grid) ... */}
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-poppins">
                                    Ce Que Nous Offrons
                                </h2>
                                <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto font-inter">
                                    Nous créons des solutions digitales sur mesure adaptées à vos besoins spécifiques.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                {/* Column 1: Conception, Applications Mobiles */}
                                <div className="flex flex-col space-y-8">
                                    <DevCube title={devOfferings[0].title.replace('sur mesure<br />et ergonomique', 'sur mesure\n<br />et ergonomique')} icon={devOfferings[0].icon} />
                                    <DevCube title={devOfferings[1].title.replace('mobiles<br />natives Android &amp; IOS', 'mobiles\n<br />natives Android &amp; IOS')} icon={devOfferings[1].icon} />
                                </div>

                                {/* Column 2: Solutions SEO, Sites web professionnels */}
                                <div className="flex flex-col space-y-8 lg:mt-16">
                                    <DevCube title={devOfferings[2].title.replace('performantes<br />et optimisées SEO', 'performantes\n<br />et optimisées SEO')} icon={devOfferings[2].icon} />
                                    <DevCube title={devOfferings[3].title.replace('web<br />professionnels et<br />boutiques e-commerce', 'web\n<br />professionnels et\n<br />boutiques e-commerce')} icon={devOfferings[3].icon} />
                                </div>

                                {/* Column 3: Intégration, Sécurité */}
                                <div className="flex flex-col space-y-8">
                                    <DevCube title={devOfferings[4].title.replace('avec vos<br />systèmes existants', 'avec vos\n<br />systèmes existants')} icon={devOfferings[4].icon} />
                                    <DevCube title={devOfferings[5].title.replace('et protection<br />des données', 'et protection\n<br />des données')} icon={devOfferings[5].icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />

                {/* 4. FORMATION EN BUREAUTIQUE */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 4) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            FORMATION EN BUREAUTIQUE
                        </h1>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
                            
                            {/* Colonne de gauche: Titre et description */}
                            <div className="lg:w-1/2 text-left space-y-6 lg:space-y-8">
                                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white font-poppins">
                                    FORMATIONS ET OUTILS COLLABORATIFS
                                </h2>
                                <p className="mt-4 text-lg text-gray-300 max-w-lg font-inter">
                                    Développez les compétences numériques de votre équipe grâce à nos programmes de formation personnalisés et adaptés à vos besoins spécifiques.
                                </p>
                                <motion.button 
                                    className="mt-6 text-white rounded px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition duration-300" 
                                    style={{ backgroundColor: "#49B0F2", fontFamily: "Inter", cursor: "pointer" }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => openModal("FORMATION EN BUREAUTIQUE")}
                                >
                                    Réserver une formation
                                </motion.button>
                            </div>

                            {/* Colonne de droite: Liste des formations */}
                            <div className="lg:w-1/2 w-full p-6 md:p-8 rounded-xl shadow-2xl" style={{ backgroundColor: '#1A374A' }}>
                                {/* ... (Training Items) ... */}
                                <div className="space-y-8">
                                    <TrainingItem number={1} title="Outils bureautiques avancés" description="Maîtrisez Excel, Word, PowerPoint et Outlook pour optimiser votre productivité quotidienne et professionnaliser vos documents." />
                                    <hr className="border-t border-[#49B0F2]/40" />
                                    <TrainingItem number={2} title="Outils collaboratifs" description="Apprenez à utiliser Teams, Zoom, Slack et Google Workspace pour des réunions et collaborations efficaces à distance." />
                                    <hr className="border-t border-[#49B0F2]/40" />
                                    <TrainingItem number={3} title="Sécurité informatique" description="Initiez votre personnel aux bonnes pratiques de cybersécurité pour protéger vos données sensibles et éviter les cyberattaques." />
                                    <hr className="border-t border-[#49B0F2]/40" />
                                    <TrainingItem number={4} title="Gestion des projets numériques" description="Formez-vous aux méthodes et outils de gestion de projets digitaux pour mener à bien vos initiatives technologiques." />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />

                {/* 5. MARKETING DIGITAL */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 5) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            MARKETING DIGITAL
                        </h1>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Section Principale: Texte et Image */}
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                            <div className="lg:w-1/2 text-left space-y-6">
                                <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight font-poppins">
                                    Marketing<br />Digital
                                </h2>
                                <p className="mt-4 text-lg text-gray-300 max-w-lg font-inter">
                                    Notre expertise est là pour vous donner un avantage décisif en ligne. Nous vous offrons des solutions sur mesure pour que vous atteigniez vos objectifs spécifiques, le tout géré par nos équipes qualifiées.
                                </p>
                            </div>

                            <div className="lg:w-1/2 w-full h-80 sm:h-96 lg:h-[450px] relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                                <img 
                                    src="https://images.unsplash.com/photo-1542435503-921c550f17f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Digital Marketing dashboard and analysis" 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                />
                                <div className="absolute top-0 right-0 w-12 h-12 bg-[#49B0F2] flex items-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12 mb-16">
                            <ReservationButton serviceName="MARKETING DIGITAL" />
                        </div>

                        {/* Section Missions Liées */}
                        <div className="p-6 md:p-12 rounded-xl border border-gray-700 bg-[#0A0A19] shadow-xl">
                            {/* ... (Marketing Missions) ... */}
                            <p className="text-center text-[#49B0F2] uppercase text-sm font-inter">Missions</p>
                            <h3 className="text-3xl font-medium font-poppins text-center mt-2 mb-12 text-white">
                                Nos Missions Liées
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {marketingMissions.map((mission, index) => (
                                    <div key={index} className="flex flex-col items-center text-center space-y-4">
                                        <div className="w-24 h-24 bg-[#49B0F2]/10 rounded-md flex items-center justify-center">
                                            {mission.icon}
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                                                {mission.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 font-inter">
                                                {mission.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-t border-gray-800" />
                
                {/* 6. INFOGRAPHIE ET DESIGN (New Section) */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 6) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            INFOGRAPHIE ET DESIGN
                        </h1>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                            <div className="lg:w-1/2 w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1549692520-22c10b77c5c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="Graphic Design and Infographics" 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                />
                            </div>
                            <div className="lg:w-1/2 w-full text-justify space-y-4">
                                <h2 className="text-3xl md:text-4xl font-medium font-poppins text-white">
                                    Infographie et Design
                                </h2>
                                <p className="mt-2 text-lg leading-relaxed font-inter text-gray-300">
                                    Nous créons des visuels percutants et professionnels pour renforcer votre image de marque. Notre service couvre l'infographie, l'identité visuelle, et le design UI/UX pour toutes vos plateformes.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12">
                            <ReservationButton serviceName="INFOGRAPHIE ET DESIGN" />
                        </div>
                        
                        {/* Ce Que Nous Proposons */}
                        <div className="mt-20 p-6 md:p-12 rounded-2xl border-2 border-[#49B0F2]/50 bg-[#0A0A19] shadow-xl">
                            {/* ... (Design Offerings) ... */}
                            <p className="font-inter text-[#49B0F2] uppercase text-sm font-medium text-center">OFFRE</p>
                            <h3 className="text-3xl font-medium font-poppins text-center mt-2 mb-12 text-white">
                                Ce Que Nous Proposons
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {designOfferings.map((offering, index) => (
                                    <div key={index} className="flex flex-col items-center text-center space-y-4">
                                        <div className="w-24 h-24 bg-[#49B0F2] rounded-md flex items-center justify-center shadow-lg">
                                            {offering.icon}
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                                                {offering.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 font-inter">
                                                {offering.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />

                {/* 7. INTERNET DES OBJETS (New Section) */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 7) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            INTERNET DES OBJETS (IoT)
                        </h1>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                            <div className="lg:w-1/2 w-full text-justify space-y-4 order-2 lg:order-1">
                                <h2 className="text-3xl md:text-4xl font-medium font-poppins text-white">
                                    Internet Des Objets (IoT)
                                </h2>
                                <p className="mt-2 text-lg leading-relaxed font-inter text-gray-300">
                                    Nous concevons et déployons des solutions IoT sur mesure pour l'**automatisation** et la **collecte de données** intelligentes. Transformez votre entreprise avec des capteurs, des plateformes cloud et des analyses prédictives.
                                </p>
                            </div>
                            <div className="lg:w-1/2 w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
                                <img 
                                    src="https://source.unsplash.com/1600x900/?iot,devices,sensors"
                                    alt="Internet of Things (IoT) devices" 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        
                        <div className="flex justify-center mt-12">
                            <ReservationButton serviceName="INTERNET DES OBJETS (IoT)" />
                        </div>
                        
                        {/* Missions Liées (IoT) */}
                        <div className="mt-20 p-6 md:p-12 rounded-2xl border-2 border-[#49B0F2]/50 bg-[#0A0A19] shadow-xl">
                            {/* ... (IoT Missions) ... */}
                            <p className="font-inter text-[#49B0F2] uppercase text-sm font-medium text-center">MISSION</p>
                            <h3 className="text-3xl font-medium font-poppins text-center mt-2 mb-12 text-white">
                                Nos Missions Liées
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-[#49B0F2]/10 rounded-md flex items-center justify-center">
                                        <Package className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                                            Conception et Prototypage
                                        </h4>
                                        <p className="text-sm text-gray-400 font-inter">
                                            Développement de solutions matérielles et logicielles pour vos besoins IoT spécifiques.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-[#49B0F2]/10 rounded-md flex items-center justify-center">
                                        <Server className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                                            Intégration et Déploiement Cloud
                                        </h4>
                                        <p className="text-sm text-gray-400 font-inter">
                                            Mise en place de plateformes cloud robustes pour la gestion et l'analyse des données IoT.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-24 h-24 bg-[#49B0F2]/10 rounded-md flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-lg font-semibold text-white mb-2 font-poppins">
                                            Sécurité et Maintenance IoT
                                        </h4>
                                        <p className="text-sm text-gray-400 font-inter">
                                            Garantie de la sécurité de vos dispositifs et assurance d'une maintenance préventive continue.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <hr className="border-t border-gray-800" />

                {/* 8. CONTRACT DE SUPPORT TECHNIQUES (New Section - Pricing) */}
                <section className="py-16 md:py-24 bg-[#090914] flex flex-col gap-12">
                    {/* ... (Existing code for section 8) ... */}
                    <div className="bg-[#49B0F2] h-48 sm:h-64 flex items-center justify-center px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight font-poppins text-white text-center">
                            CONTRAT DE SUPPORT TECHNIQUE
                        </h1>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold font-poppins">
                            Choisissez le Plan qui Vous Convient
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
                            Nos contrats de support technique sont conçus pour vous offrir une tranquillité d'esprit totale, quelle que soit la taille de votre structure, garantissant une résolution rapide des problèmes.
                        </p>

                        {/* Pricing Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
                            <PricingCard 
                                title="Support Standard" 
                                features={["Assistance à distance (Heures ouvrables)", "Temps de réponse 4h", "Résolution des problèmes logiciels de base", "Maintenance préventive trimestrielle"]}
                                isPremium={false} 
                            />
                            <PricingCard 
                                title="Support Premium" 
                                features={["Assistance 24/7 (Distance & Sur site)", "Temps de réponse 1h (Priorité)", "Gestion complète du parc informatique", "Audit de sécurité annuel inclus", "Sauvegarde et récupération de données"]}
                                isPremium={true} 
                            />
                            <PricingCard 
                                title="Support Entreprise" 
                                features={["Assistance 24/7 (Distance & Sur site)", "Temps de réponse < 30 min (Urgence)", "Technicien dédié sur site (selon contrat)", "Conseil stratégique illimité", "Gestion de projets technologiques"]}
                                isPremium={false} 
                            />
                        </div>
                    </div>
                </section>
            </div>
            
            {/* -------------------------------------------------------------------------------- */}
            {/* NEW MODAL INVOCATION */}
            {/* -------------------------------------------------------------------------------- */}
            <ReservationModal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                initialService={initialService} 
                allServices={allServices} 
            />
        </Layout>
    );
}