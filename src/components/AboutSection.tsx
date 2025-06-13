
import React from 'react';
import { Target, Award, Users2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Nous développons constamment de nouvelles fonctionnalités pour rester à la pointe de la technologie",
      icon: Target,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Excellence",
      description: "Notre engagement qualité nous permet d'offrir une solution fiable et performante",
      icon: Award,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Accompagnement",
      description: "Notre équipe vous accompagne dans la mise en place et l'utilisation de la plateforme",
      icon: Users2,
      color: "bg-primary-100 text-primary-600"
    },
    {
      title: "Croissance",
      description: "Nous aidons votre auto-école à se développer grâce à nos outils d'analyse et de gestion",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              À propos d'AutoÉcole Manager
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Depuis 2020, nous développons des solutions numériques spécialement conçues 
              pour les auto-écoles. Notre mission est de simplifier la gestion quotidienne 
              des professionnels de l'enseignement de la conduite.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fruit de nombreux échanges avec des responsables d'auto-écoles, notre plateforme 
              répond aux besoins réels du secteur : gain de temps, optimisation des ressources, 
              amélioration de l'expérience candidats.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">500+</div>
                <div className="text-gray-600">Auto-écoles partenaires</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">4 ans</div>
                <div className="text-gray-600">D'expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">50k+</div>
                <div className="text-gray-600">Candidats formés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
                <div className="text-gray-600">Support technique</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Une équipe passionnée à votre service
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Composée d'experts en technologie et de professionnels du secteur automobile, 
            notre équipe comprend vos enjeux et développe les solutions adaptées.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">DS</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">David Silva</h4>
                <p className="text-gray-600">Fondateur & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">ML</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Marie Laurent</h4>
                <p className="text-gray-600">Directrice Produit</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">JD</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Julien Dubois</h4>
                <p className="text-gray-600">Responsable Technique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
