
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';

const roles = [
  { 
    nom: 'Admin', 
    description: "Accès total à la plateforme, gestion des auto-écoles et des utilisateurs.",
    permissions: ['Gérer les auto-écoles', 'Gérer les utilisateurs', 'Voir les statistiques globales']
  },
  { 
    nom: 'Responsable', 
    description: "Gère une auto-école spécifique, ses formateurs et ses candidats.",
    permissions: ['Gérer les formateurs', 'Gérer les candidats', 'Gérer le planning de son auto-école']
  },
  { 
    nom: 'Formateur', 
    description: "Donne des leçons de conduite, suit les progrès des candidats.",
    permissions: ['Gérer son planning', 'Suivre ses candidats', 'Valider les leçons']
  },
  { 
    nom: 'Candidat', 
    description: "Apprend à conduire, consulte son planning et ses résultats.",
    permissions: ['Consulter son planning', 'Suivre ses paiements', 'Voir ses documents']
  },
];

const Roles = () => {
  return (
    <DashboardLayout userRole="admin" userName="Admin Principal">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Rôles</h1>
          <p className="text-gray-600">Définition des rôles et de leurs permissions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <Card key={role.nom}>
              <CardHeader>
                <CardTitle>{role.nom}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Permissions :</h4>
                <ul className="space-y-2 text-sm">
                  {role.permissions.map((permission) => (
                    <li key={permission} className="flex items-center">
                      <Check className="w-4 h-4 mr-2 text-green-500" />
                      <span>{permission}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="mt-4">Modifier les permissions</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Roles;
