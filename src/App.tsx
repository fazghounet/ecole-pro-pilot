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

// Admin pages
import AutoEcoles from "./pages/admin/AutoEcoles";
import Utilisateurs from "./pages/admin/Utilisateurs";
import Roles from "./pages/admin/Roles";

// Responsable pages
import ResponsableUtilisateurs from "./pages/responsable/Utilisateurs";
import ResponsableCours from "./pages/responsable/Cours";
import ResponsablePlanning from "./pages/responsable/Planning";
import ResponsableVehicules from "./pages/responsable/Vehicules";
import ResponsablePaiements from "./pages/responsable/Paiements";
import ResponsableProfil from "./pages/responsable/Profil";

// Formateur pages
import FormateurCandidats from "./pages/formateur/Candidats";
import FormateurCours from "./pages/formateur/Cours";
import FormateurPlanning from "./pages/formateur/Planning";
import FormateurVehicules from "./pages/formateur/Vehicules";

// Candidat pages
import CandidatPlanning from "./pages/candidat/Planning";
import CandidatDocuments from "./pages/candidat/Documents";
import CandidatCours from "./pages/candidat/Cours";
import CandidatExamens from "./pages/candidat/Examens";
import CandidatPaiements from "./pages/candidat/Paiements";
import ChoisirAutoEcole from "./pages/candidat/ChoisirAutoEcole";

// Add new imports for profile pages
import AdminProfil from "./pages/admin/Profil";
import FormateurProfil from "./pages/formateur/Profil";
import CandidatProfil from "./pages/candidat/Profil";

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
          <Route path="/admin/auto-ecoles" element={<AutoEcoles />} />
          <Route path="/admin/utilisateurs" element={<Utilisateurs />} />
          <Route path="/admin/roles" element={<Roles />} />
          <Route path="/admin/profil" element={<AdminProfil />} />
          
          {/* Responsable Routes */}
          <Route path="/responsable/dashboard" element={<ResponsableDashboard />} />
          <Route path="/responsable/utilisateurs" element={<ResponsableUtilisateurs />} />
          <Route path="/responsable/cours" element={<ResponsableCours />} />
          <Route path="/responsable/planning" element={<ResponsablePlanning />} />
          <Route path="/responsable/vehicules" element={<ResponsableVehicules />} />
          <Route path="/responsable/paiements" element={<ResponsablePaiements />} />
          <Route path="/responsable/profil" element={<ResponsableProfil />} />
          
          {/* Formateur Routes */}
          <Route path="/formateur/dashboard" element={<FormateurDashboard />} />
          <Route path="/formateur/candidats" element={<FormateurCandidats />} />
          <Route path="/formateur/cours" element={<FormateurCours />} />
          <Route path="/formateur/planning" element={<FormateurPlanning />} />
          <Route path="/formateur/vehicules" element={<FormateurVehicules />} />
          <Route path="/formateur/profil" element={<FormateurProfil />} />
          
          {/* Candidat Routes */}
          <Route path="/candidat/dashboard" element={<CandidatDashboard />} />
          <Route path="/candidat/choisir-auto-ecole" element={<ChoisirAutoEcole />} />
          <Route path="/candidat/planning" element={<CandidatPlanning />} />
          <Route path="/candidat/documents" element={<CandidatDocuments />} />
          <Route path="/candidat/cours" element={<CandidatCours />} />
          <Route path="/candidat/examens" element={<CandidatExamens />} />
          <Route path="/candidat/paiements" element={<CandidatPaiements />} />
          <Route path="/candidat/profil" element={<CandidatProfil />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
