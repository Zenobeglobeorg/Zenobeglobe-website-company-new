import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/a-propos", label: "A Propos" },
    { to: "/service", label: "Service" },
    { to: "/equipe", label: "Equipe" },
    { to: "/formation", label: "Formation" },
    { to: "/contact", label: "Contact" },
  ];

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white font-['IBM_Plex_Sans'] text-base hover:text-[hsl(var(--brand-cyan))] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/commencer"
            className="hidden lg:flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-[hsl(var(--brand-cyan))] text-white font-inter text-base hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-colors"
          >
            <span>Commencer</span>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
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
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[hsl(var(--background))]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white font-['IBM_Plex_Sans'] text-lg hover:text-[hsl(var(--brand-cyan))] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/commencer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 px-6 py-3 rounded-full border border-[hsl(var(--brand-cyan))] text-white font-inter text-base text-center hover:bg-[hsl(var(--brand-cyan))] hover:text-black transition-colors"
                >
                  Commencer
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
