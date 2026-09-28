import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import GoogleAnalytics from "./GoogleAnalytics";
import PreloadResources from "./PreloadResources";
import BackToTop from "./BackToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col">
      <PreloadResources />
      <GoogleAnalytics />
      <Header />
      <main className="flex-1">
        {/* Animé par clé de route : chaque nouvelle page apparaît en fondu
           + léger glissement vers le haut, pour une navigation plus vivante. */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
