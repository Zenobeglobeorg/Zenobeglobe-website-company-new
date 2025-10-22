import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GoogleAnalytics from "./GoogleAnalytics";
import PreloadResources from "./PreloadResources";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col">
      <PreloadResources />
      <GoogleAnalytics />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
