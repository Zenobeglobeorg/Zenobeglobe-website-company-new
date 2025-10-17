
import './App.css'

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Service from './pages/Service';
import APropos from './pages/APropos';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/service" element={<Service />} />
          <Route path="/equipe" element={<Placeholder pageName="Notre Équipe" />} />
          <Route path="/formation" element={<Placeholder pageName="Formations" />} />
          <Route path="/contact" element={<Placeholder pageName="Contact" />} />
          <Route path="/commencer" element={<Placeholder pageName="Commencer" />} />
          <Route path="/travail" element={<Placeholder pageName="Notre Travail" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;