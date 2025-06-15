
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const ResponsableCours = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Cours</h1>
          <p className="text-gray-600">Planifiez et gérez les cours de votre auto-école.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p>La fonctionnalité de gestion des cours est en cours de développement.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ResponsableCours;
