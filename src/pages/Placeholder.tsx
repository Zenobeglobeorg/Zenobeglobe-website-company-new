import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-white font-poppins text-4xl md:text-5xl font-semibold mb-6">
            {pageName}
          </h1>
          <p className="text-gray-400 font-inter text-lg mb-8">
            Cette page est en cours de développement. Continuez à explorer notre site ou revenez bientôt pour découvrir ce contenu.
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3 bg-[hsl(var(--brand-blue))] rounded-lg text-white font-inter font-semibold hover:bg-opacity-90 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </Layout>
  );
}
