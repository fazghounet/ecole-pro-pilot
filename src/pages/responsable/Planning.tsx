
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const ResponsablePlanning = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Planning de l'Auto-École</h1>
          <p className="text-gray-600">Visualisez et organisez le planning des cours et des formateurs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>La fonctionnalité de planning est en cours de développement.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResponsablePlanning;
