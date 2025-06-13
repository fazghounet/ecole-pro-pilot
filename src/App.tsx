import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

// Dashboard imports
import AdminDashboard from "./pages/admin/AdminDashboard";
import ResponsableDashboard from "./pages/responsable/ResponsableDashboard";
import FormateurDashboard from "./pages/formateur/FormateurDashboard";
import CandidatDashboard from "./pages/candidat/CandidatDashboard";

// Formateur pages
import FormateurCandidats from "./pages/formateur/Candidats";
import FormateurCours from "./pages/formateur/Cours";
import FormateurPlanning from "./pages/formateur/Planning";
import FormateurVehicules from "./pages/formateur/Vehicules";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Responsable Routes */}
          <Route path="/dashboard" element={<ResponsableDashboard />} />
          
          {/* Formateur Routes */}
          <Route path="/formateur/dashboard" element={<FormateurDashboard />} />
          <Route path="/formateur/candidats" element={<FormateurCandidats />} />
          <Route path="/formateur/cours" element={<FormateurCours />} />
          <Route path="/formateur/planning" element={<FormateurPlanning />} />
          <Route path="/formateur/vehicules" element={<FormateurVehicules />} />
          
          {/* Candidat Routes */}
          <Route path="/candidat/dashboard" element={<CandidatDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
