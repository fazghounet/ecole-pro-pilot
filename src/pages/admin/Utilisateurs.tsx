
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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const utilisateurs = [
  { id: '1', nom: 'Alice Dubois', email: 'alice.d@example.com', role: 'responsable', autoEcole: 'Auto-École Centre Ville' },
  { id: '2', nom: 'Bob Lemoine', email: 'bob.l@example.com', role: 'formateur', autoEcole: 'Conduite Plus' },
  { id: '3', nom: 'Charlie Petit', email: 'charlie.p@example.com', role: 'candidat', autoEcole: 'Permis Express' },
  { id: '4', nom: 'David Grand', email: 'david.g@example.com', role: 'admin', autoEcole: 'N/A' },
];

const Utilisateurs = () => {
  return (
    <DashboardLayout userRole="admin" userName="Admin Principal">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
            <p className="text-gray-600">Liste de tous les utilisateurs de la plateforme.</p>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Ajouter un utilisateur
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Auto-École</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {utilisateurs.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.nom}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge variant={user.role === 'admin' ? 'default' : user.role === 'responsable' ? 'secondary' : 'outline'}>{user.role}</Badge>
                  </TableCell>
                  <TableCell>{user.autoEcole}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">Modifier</Button>
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

export default Utilisateurs;
