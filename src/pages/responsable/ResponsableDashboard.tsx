
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CardStat from '@/components/ui/card-stat';
import { Users, BookOpen, Car, Calendar } from 'lucide-react';

const ResponsableDashboard = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Auto-École</h1>
          <p className="text-gray-600">Auto-École Centre Ville</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardStat
            title="Candidats"
            value={127}
            description="Candidats actifs"
            icon={Users}
            trend={{ value: 15, isPositive: true }}
          />
          <CardStat
            title="Sessions ce mois"
            value={89}
            description="Cours planifiés"
            icon={BookOpen}
            trend={{ value: 12, isPositive: true }}
          />
          <CardStat
            title="Véhicules"
            value={8}
            description="Véhicules disponibles"
            icon={Car}
          />
          <CardStat
            title="Sessions aujourd'hui"
            value={12}
            description="Cours du jour"
            icon={Calendar}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Sessions du jour</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">Code de la route - Groupe A</span>
                  <p className="text-sm text-gray-600">Formateur: Pierre Martin</p>
                </div>
                <span className="text-sm font-medium">09:00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">Conduite - Marie Leroux</span>
                  <p className="text-sm text-gray-600">Véhicule: Renault Clio (AB-123-CD)</p>
                </div>
                <span className="text-sm font-medium">14:30</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Alertes véhicules</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded border border-red-200">
                <div>
                  <span className="font-medium text-red-800">Contrôle technique expiré</span>
                  <p className="text-sm text-red-600">Peugeot 208 (EF-456-GH)</p>
                </div>
                <span className="text-sm text-red-600">Urgent</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded border border-orange-200">
                <div>
                  <span className="font-medium text-orange-800">Révision prochaine</span>
                  <p className="text-sm text-orange-600">Citroën C3 (IJ-789-KL)</p>
                </div>
                <span className="text-sm text-orange-600">Dans 5 jours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResponsableDashboard;
