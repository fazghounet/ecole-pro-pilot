
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Fuel, Calendar, Wrench } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Vehicules = () => {
  const vehicules = [
    {
      id: 1,
      marque: 'Renault',
      modele: 'Clio',
      immatriculation: 'AB-123-CD',
      kilometrage: 45000,
      carburant: 'Essence',
      controle_technique: '15/12/2024',
      statut: 'Disponible',
      prochaine_revision: '20/08/2024'
    },
    {
      id: 2,
      marque: 'Peugeot',
      modele: '208',
      immatriculation: 'EF-456-GH',
      kilometrage: 67000,
      carburant: 'Diesel',
      controle_technique: '05/03/2024',
      statut: 'En maintenance',
      prochaine_revision: '10/07/2024'
    },
    {
      id: 3,
      marque: 'Citroën',
      modele: 'C3',
      immatriculation: 'IJ-789-KL',
      kilometrage: 32000,
      carburant: 'Essence',
      controle_technique: '28/10/2024',
      statut: 'Disponible',
      prochaine_revision: '15/09/2024'
    }
  ];

  const getStatutBadge = (statut: string) => {
    switch (statut) {
      case 'Disponible':
        return <Badge variant="default" className="bg-green-100 text-green-800">Disponible</Badge>;
      case 'En maintenance':
        return <Badge variant="destructive">En maintenance</Badge>;
      case 'En cours':
        return <Badge variant="secondary">En cours</Badge>;
      default:
        return <Badge variant="outline">{statut}</Badge>;
    }
  };

  const isExpiringSoon = (date: string) => {
    const targetDate = new Date(date.split('/').reverse().join('-'));
    const today = new Date();
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30 && diffDays > 0;
  };

  const isExpired = (date: string) => {
    const targetDate = new Date(date.split('/').reverse().join('-'));
    const today = new Date();
    return targetDate < today;
  };

  return (
    <DashboardLayout userRole="formateur" userName="Pierre Martin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Véhicules</h1>
          <p className="text-gray-600">Consultation des véhicules de l'auto-école</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total véhicules</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{vehicules.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Disponibles</CardTitle>
              <Car className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {vehicules.filter(v => v.statut === 'Disponible').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En maintenance</CardTitle>
              <Wrench className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {vehicules.filter(v => v.statut === 'En maintenance').length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contrôles à venir</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {vehicules.filter(v => isExpiringSoon(v.controle_technique)).length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des véhicules</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Véhicule</TableHead>
                  <TableHead>Kilométrage</TableHead>
                  <TableHead>Carburant</TableHead>
                  <TableHead>Contrôle technique</TableHead>
                  <TableHead>Prochaine révision</TableHead>
                  <TableHead>Statut</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicules.map((vehicule) => (
                  <TableRow key={vehicule.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{vehicule.marque} {vehicule.modele}</div>
                        <div className="text-sm text-gray-500">{vehicule.immatriculation}</div>
                      </div>
                    </TableCell>
                    <TableCell>{vehicule.kilometrage.toLocaleString()} km</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Fuel className="w-4 h-4" />
                        <span>{vehicule.carburant}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={
                        isExpired(vehicule.controle_technique) ? 'text-red-600 font-medium' :
                        isExpiringSoon(vehicule.controle_technique) ? 'text-orange-600 font-medium' :
                        'text-gray-900'
                      }>
                        {vehicule.controle_technique}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={
                        isExpired(vehicule.prochaine_revision) ? 'text-red-600 font-medium' :
                        isExpiringSoon(vehicule.prochaine_revision) ? 'text-orange-600 font-medium' :
                        'text-gray-900'
                      }>
                        {vehicule.prochaine_revision}
                      </span>
                    </TableCell>
                    <TableCell>
                      {getStatutBadge(vehicule.statut)}
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

export default Vehicules;
