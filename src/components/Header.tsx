import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/a-propos", label: "A Propos" },
    { to: "/service", label: "Service" },
    //{ to: "/equipe", label: "Equipe" },
    { to: "/formation", label: "Formation" },
    //{ to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Effet de scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-8 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="flex-shrink-0">
              <motion.img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1eb8fe5e49f4db523aa4b865b8939292b797aa10?width=417"
                alt="ZenobeGlobe Logo"
                className="h-16 lg:h-[85px] w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex items-center gap-12 xl:gap-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {navLinks.map((link, idx) => {
              const active = isActive(link.to);
              return (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={link.to}
                    className={`font-['IBM_Plex_Sans'] text-base transition-colors relative group ${
                      active 
                        ? "text-[hsl(var(--brand-cyan))] font-semibold" 
                        : "text-white hover:text-[hsl(var(--brand-cyan))]"
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[hsl(var(--brand-cyan))] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/service"
              className="hidden lg:flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[hsl(var(--brand-cyan))] text-white font-inter text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-all duration-300"
            >
              <span>Commencer</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <motion.button 
                className="lg:hidden text-white" 
                title="Open Menu"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[hsl(var(--background))]">
              <motion.nav 
                className="flex flex-col gap-6 mt-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <motion.div
                      key={link.to}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 10, scale: 1.05 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-['IBM_Plex_Sans'] text-lg transition-colors block relative ${
                          active 
                            ? "text-[hsl(var(--brand-cyan))] font-semibold" 
                            : "text-white hover:text-[hsl(var(--brand-cyan))]"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-[hsl(var(--brand-cyan))]"
                            layoutId="mobile-active-link"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/commencer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-4 px-6 py-3 rounded-full border border-[hsl(var(--brand-cyan))] text-white font-inter text-base text-center hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-colors block"
                  >
                    Commencer
                  </Link>
                </motion.div>
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
