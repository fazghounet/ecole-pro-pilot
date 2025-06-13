
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import CardStat from '@/components/ui/card-stat';
import { BookOpen, Calendar, CreditCard, TrendingUp } from 'lucide-react';

const CandidatDashboard = () => {
  return (
    <DashboardLayout userRole="candidat" userName="Marie Leroux">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mon Dashboard</h1>
          <p className="text-gray-600">Bonjour Marie, voici votre progression</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CardStat
            title="Heures de code"
            value="18/20"
            description="Heures effectuées"
            icon={BookOpen}
          />
          <CardStat
            title="Heures de conduite"
            value="12/20"
            description="Heures effectuées"
            icon={Calendar}
          />
          <CardStat
            title="Prochaine session"
            value="Demain"
            description="Conduite à 14h30"
            icon={Calendar}
          />
          <CardStat
            title="Progression"
            value="75%"
            description="Formation globale"
            icon={TrendingUp}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Progression théorie</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Code de la route</span>
                  <span className="text-sm text-gray-600">18/20 heures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Tests en ligne</span>
                  <span className="text-sm text-gray-600">85% de réussite</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Progression pratique</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Heures de conduite</span>
                  <span className="text-sm text-gray-600">12/20 heures</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Dernière évaluation :</p>
                <div className="bg-green-50 p-3 rounded border border-green-200">
                  <p className="text-sm text-green-800 font-medium">Très bonne progression !</p>
                  <p className="text-xs text-green-600">Formateur: Pierre Martin - 08/06/2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Prochaines sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-200">
              <div>
                <span className="font-medium">Conduite avec Pierre Martin</span>
                <p className="text-sm text-gray-600">Véhicule: Renault Clio (AB-123-CD)</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">Demain 14:30</span>
                <p className="text-xs text-gray-600">1 heure</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <span className="font-medium">Code de la route - Groupe A</span>
                <p className="text-sm text-gray-600">Salle de cours n°2</p>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium">Vendredi 09:00</span>
                <p className="text-xs text-gray-600">1h30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatDashboard;
