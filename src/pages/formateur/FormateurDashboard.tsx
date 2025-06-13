
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CardStat from '@/components/ui/card-stat';
import { BookOpen, Users, Calendar, Clock } from 'lucide-react';

const FormateurDashboard = () => {
  return (
    <DashboardLayout userRole="formateur" userName="Pierre Martin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Formateur</h1>
          <p className="text-gray-600">Bonjour Pierre, voici votre planning du jour</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardStat
            title="Sessions aujourd'hui"
            value={6}
            description="Cours à animer"
            icon={BookOpen}
          />
          <CardStat
            title="Candidats suivis"
            value={32}
            description="Candidats en formation"
            icon={Users}
          />
          <CardStat
            title="Heures cette semaine"
            value={28}
            description="Heures d'enseignement"
            icon={Clock}
          />
          <CardStat
            title="Prochaine session"
            value="09:00"
            description="Code de la route"
            icon={Calendar}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Planning du jour</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-200">
                <div>
                  <span className="font-medium">Code de la route - Groupe A</span>
                  <p className="text-sm text-gray-600">12 candidats inscrits</p>
                </div>
                <span className="text-sm font-medium">09:00 - 10:30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                <div>
                  <span className="font-medium">Conduite - Marie Leroux</span>
                  <p className="text-sm text-gray-600">Leçon de conduite individuelle</p>
                </div>
                <span className="text-sm font-medium">14:30 - 15:30</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded border border-green-200">
                <div>
                  <span className="font-medium">Conduite - Paul Bernard</span>
                  <p className="text-sm text-gray-600">Leçon de conduite individuelle</p>
                </div>
                <span className="text-sm font-medium">16:00 - 17:00</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Candidats à évaluer</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">Sophie Dubois</span>
                  <p className="text-sm text-gray-600">Session du 10/06 - Code</p>
                </div>
                <button className="text-sm text-primary font-medium">Évaluer</button>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <div>
                  <span className="font-medium">Thomas Petit</span>
                  <p className="text-sm text-gray-600">Session du 10/06 - Conduite</p>
                </div>
                <button className="text-sm text-primary font-medium">Évaluer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FormateurDashboard;
