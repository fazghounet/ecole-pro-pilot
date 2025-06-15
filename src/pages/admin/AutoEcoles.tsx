
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const autoEcoles = [
  { id: '1', nom: 'Auto-École Centre Ville', responsable: 'Jean Dupont', ville: 'Paris', dateCreation: '15/05/2023' },
  { id: '2', nom: 'Conduite Plus', responsable: 'Marie Martin', ville: 'Lyon', dateCreation: '20/06/2023' },
  { id: '3', nom: 'Permis Express', responsable: 'Pierre Durand', ville: 'Marseille', dateCreation: '10/08/2023' },
];

const AutoEcoles = () => {
  return (
    <DashboardLayout userRole="admin" userName="Admin Principal">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion des Auto-Écoles</h1>
            <p className="text-gray-600">Liste des auto-écoles enregistrées sur la plateforme.</p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Ajouter une auto-école
          </Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
           <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom de l'auto-école</TableHead>
                <TableHead>Responsable</TableHead>
                <TableHead>Ville</TableHead>
                <TableHead>Date de création</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {autoEcoles.map((ecole) => (
                <TableRow key={ecole.id}>
                  <TableCell className="font-medium">{ecole.nom}</TableCell>
                  <TableCell>{ecole.responsable}</TableCell>
                  <TableCell>{ecole.ville}</TableCell>
                  <TableCell>{ecole.dateCreation}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Détails</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AutoEcoles;
