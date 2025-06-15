
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CardStat from '@/components/ui/card-stat';
import { Users, BookOpen, Car, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card as UICard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pendingRequests = [
  { id: 'REQ001', name: 'Lucas Dubois' },
  { id: 'REQ002', name: 'Chloé Garcia' },
];

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
            title="Demandes en attente"
            value={pendingRequests.length}
            description="Nouvelles inscriptions"
            icon={Users}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UICard>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold">Demandes d'inscription</CardTitle>
                <Button variant="link" asChild className="text-sm">
                    <a href="/responsable/utilisateurs">
                        Tout voir <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 pt-2">
                {pendingRequests.length > 0 ? (
                    pendingRequests.slice(0, 3).map((req) => (
                    <div key={req.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                        <span className="font-medium text-sm">{req.name}</span>
                        <Button variant="secondary" size="sm" className="h-7">Détails</Button>
                    </div>
                    ))
                ) : (
                    <p className="text-sm text-center text-gray-500 py-4">Aucune nouvelle demande.</p>
                )}
                </div>
            </CardContent>
          </UICard>

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
