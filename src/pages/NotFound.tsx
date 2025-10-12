import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 overflow-hidden relative">
        <motion.div 
          className="text-center max-w-2xl relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated 404 Number */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <motion.h1 
              className="text-[hsl(var(--brand-cyan))] font-poppins text-9xl md:text-[200px] font-bold mb-4"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(79, 209, 197, 0.5)",
                  "0 0 60px rgba(79, 209, 197, 0.8)",
                  "0 0 20px rgba(79, 209, 197, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
          </motion.div>

          <motion.h2
            className="text-white font-poppins text-3xl md:text-4xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Oups ! Page introuvable
          </motion.h2>

          <motion.p 
            className="text-gray-400 font-inter text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex px-10 py-4 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--brand-cyan))]/20 rounded-full blur-3xl -z-0"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(var(--brand-blue))]/20 rounded-full blur-3xl -z-0"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </Layout>
  );
};

export default NotFound;
