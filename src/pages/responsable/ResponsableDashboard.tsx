
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Car, Calendar, BookOpen, Euro } from 'lucide-react';
import PricingManager from '@/components/pricing/PricingManager';

interface PricingData {
  conduitePrice: number;
  codePrice: number;
}

const ResponsableDashboard = () => {
  const [pricing, setPricing] = useState<PricingData>({
    conduitePrice: 45,
    codePrice: 25,
  });

  const handlePricingSave = (newPricing: PricingData) => {
    setPricing(newPricing);
  };

  const stats = [
    {
      title: "Candidats actifs",
      value: "24",
      description: "ce mois-ci",
      icon: Users,
    },
    {
      title: "Cours programmés",
      value: "15",
      description: "cette semaine",
      icon: Calendar,
    },
    {
      title: "Véhicules disponibles",
      value: "6",
      description: "en service",
      icon: Car,
    },
    {
      title: "Sessions de code",
      value: "8",
      description: "cette semaine",
      icon: BookOpen,
    },
  ];

  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Responsable</h1>
          <p className="text-muted-foreground">
            Vue d'ensemble de votre auto-école
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <PricingManager 
            currentPricing={pricing}
            onSave={handlePricingSave}
          />
          
          <Card>
            <CardHeader>
              <CardTitle>Activité récente</CardTitle>
              <CardDescription>Les dernières actions dans votre auto-école</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Nouveau candidat inscrit</p>
                    <p className="text-xs text-muted-foreground">Marie Dubois - il y a 2h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Cours de conduite terminé</p>
                    <p className="text-xs text-muted-foreground">Pierre Martin - il y a 4h</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Véhicule en maintenance</p>
                    <p className="text-xs text-muted-foreground">Renault Clio - il y a 6h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResponsableDashboard;
