
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CardStat from '@/components/ui/card-stat';
import { Building, Users, Car, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <DashboardLayout userRole="admin" userName="Admin Principal">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
          <p className="text-gray-600">Vue d'ensemble de la plateforme</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardStat
            title="Auto-écoles"
            value={24}
            description="Total des auto-écoles actives"
            icon={Building}
            trend={{ value: 12, isPositive: true }}
          />
          <CardStat
            title="Utilisateurs"
            value="1,234"
            description="Total utilisateurs inscrits"
            icon={Users}
            trend={{ value: 8, isPositive: true }}
          />
          <CardStat
            title="Véhicules"
            value={156}
            description="Total véhicules en parc"
            icon={Car}
            trend={{ value: 3, isPositive: true }}
          />
          <CardStat
            title="Croissance"
            value="+15%"
            description="Croissance mensuelle"
            icon={TrendingUp}
            trend={{ value: 5, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Auto-écoles récentes</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Auto-École Centre Ville</span>
                <span className="text-sm text-gray-600">Créée il y a 2 jours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Conduite Plus</span>
                <span className="text-sm text-gray-600">Créée il y a 5 jours</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Activité récente</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">12 nouveaux candidats</span>
                <span className="text-sm text-gray-600">Aujourd'hui</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">3 nouvelles auto-écoles</span>
                <span className="text-sm text-gray-600">Cette semaine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
