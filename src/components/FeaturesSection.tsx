
import React from 'react';
import { 
  Users, 
  Calendar, 
  Car, 
  BookOpen, 
  BarChart3, 
  Shield, 
  Clock, 
  CheckCircle,
  Smartphone,
  CreditCard,
  FileText,
  Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Gestion des candidats",
      description: "Suivi complet du parcours de chaque candidat, de l'inscription aux examens",
      icon: Users,
      color: "text-blue-500"
    },
    {
      title: "Planning intelligent",
      description: "Planification automatisée des cours avec optimisation des créneaux",
      icon: Calendar,
      color: "text-green-500"
    },
    {
      title: "Gestion de flotte",
      description: "Suivi des véhicules, maintenances et contrôles techniques",
      icon: Car,
      color: "text-primary-500"
    },
    {
      title: "Cours théoriques",
      description: "Plateforme d'apprentissage avec quiz et supports pédagogiques",
      icon: BookOpen,
      color: "text-purple-500"
    },
    {
      title: "Statistiques avancées",
      description: "Tableaux de bord et rapports détaillés sur les performances",
      icon: BarChart3,
      color: "text-orange-500"
    },
    {
      title: "Sécurité renforcée",
      description: "Authentification multi-niveaux et protection des données",
      icon: Shield,
      color: "text-red-500"
    },
    {
      title: "Gain de temps",
      description: "Automatisation des tâches répétitives et notifications",
      icon: Clock,
      color: "text-indigo-500"
    },
    {
      title: "Interface mobile",
      description: "Accès complet depuis smartphone et tablette",
      icon: Smartphone,
      color: "text-pink-500"
    },
    {
      title: "Gestion financière",
      description: "Suivi des paiements, facturations et reporting financier",
      icon: CreditCard,
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tous les outils dont vous avez besoin pour gérer efficacement votre auto-école, 
            réunis dans une seule plateforme intuitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <span className="text-lg font-semibold text-gray-900">
                Prêt à révolutionner votre auto-école ?
              </span>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Rejoignez les centaines d'auto-écoles qui nous font déjà confiance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Essai gratuit 30 jours
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Planifier une démo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
