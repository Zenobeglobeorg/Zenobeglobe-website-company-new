import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-8 xl:gap-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1eb8fe5e49f4db523aa4b865b8939292b797aa10?width=417"
              alt="ZenobeGlobe Logo"
              className="h-16 lg:h-[85px] w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
            <Link
              to="/"
              className="text-white "
            >
              Accueil
            </Link>
            <Link
              to="/a-propos"
              className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
            >
              A Propos
            </Link>
            <Link
              to="/service"
              className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
            >
              Service
            </Link>
            <Link
              to="/equipe"
              className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
            >
              Equipe
            </Link>
            <Link
              to="/formation"
              className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
            >
              Formation
            </Link>
            <Link
              to="/contact"
              className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/commencer"
            className="hidden lg:flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[hsl(var(--brand-cyan))] text-white font-inter text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-colors"
          >
            <span>Commencer</span>
          </Link>

          <button className="lg:hidden text-white" title="Open Menu">
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
          </button>
        </div>
      </div>
    </header>
  );
}
