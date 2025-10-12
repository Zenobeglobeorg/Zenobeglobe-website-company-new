import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <motion.div 
          className="text-center max-w-2xl"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 
              className="text-white font-poppins text-4xl md:text-5xl font-semibold mb-6"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              {pageName}
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 font-inter text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cette page est en cours de développement. Continuez à explorer notre site ou revenez bientôt pour découvrir ce contenu.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="inline-flex px-8 py-3 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Animated background elements */}
          <motion.div
            className="absolute -z-10 w-72 h-72 bg-[hsl(var(--brand-cyan))]/10 rounded-full blur-3xl"
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
            className="absolute -z-10 w-96 h-96 bg-[hsl(var(--brand-blue))]/10 rounded-full blur-3xl"
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
        </motion.div>
      </div>
    </Layout>
  );
}
