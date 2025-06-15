
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Car, Wrench, PlusCircle } from 'lucide-react';

const vehicles = [
  { id: 'VEH001', brand: 'Renault', model: 'Clio', plate: 'AB-123-CD', status: 'Disponible' },
  { id: 'VEH002', brand: 'Peugeot', model: '208', plate: 'EF-456-GH', status: 'En maintenance' },
  { id: 'VEH003', brand: 'Citroën', model: 'C3', plate: 'IJ-789-KL', status: 'Disponible' },
  { id: 'VEH004', brand: 'Renault', model: 'Captur', plate: 'MN-012-OP', status: "En cours d'utilisation" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Disponible':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80">{status}</Badge>;
    case 'En maintenance':
      return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100/80">{status}</Badge>;
    case "En cours d'utilisation":
      return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100/80">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const ResponsableVehicules = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Véhicules</h1>
          <p className="text-gray-600">Gérez la flotte de véhicules de votre auto-école.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Véhicules</CardTitle>
                    <Car className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{vehicles.length}</div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">En Maintenance</CardTitle>
                    <Wrench className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{vehicles.filter(v => v.status === 'En maintenance').length}</div>
                </CardContent>
            </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle>Flotte de véhicules</CardTitle>
              <div className="flex items-center gap-2">
                <Input placeholder="Rechercher par plaque..." className="max-w-sm" />
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Ajouter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Marque</TableHead>
                  <TableHead>Modèle</TableHead>
                  <TableHead>Immatriculation</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((vehicle) => (
                  <TableRow key={vehicle.id}>
                    <TableCell>{vehicle.brand}</TableCell>
                    <TableCell>{vehicle.model}</TableCell>
                    <TableCell className="font-mono">{vehicle.plate}</TableCell>
                    <TableCell>{getStatusBadge(vehicle.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Modifier</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResponsableVehicules;
