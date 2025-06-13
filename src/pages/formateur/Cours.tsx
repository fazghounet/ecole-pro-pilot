
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Calendar } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Cours = () => {
  const cours = [
    {
      id: 1,
      type: 'Code de la route',
      date: '13/06/2024',
      heure: '09:00 - 10:30',
      participants: 12,
      salle: 'Salle A',
      statut: 'Planifié'
    },
    {
      id: 2,
      type: 'Conduite',
      date: '13/06/2024',
      heure: '14:30 - 15:30',
      participants: 1,
      vehicule: 'Renault Clio',
      candidat: 'Marie Leroux',
      statut: 'Planifié'
    },
    {
      id: 3,
      type: 'Code de la route',
      date: '12/06/2024',
      heure: '09:00 - 10:30',
      participants: 15,
      salle: 'Salle A',
      statut: 'Terminé'
    },
    {
      id: 4,
      type: 'Conduite',
      date: '12/06/2024',
      heure: '16:00 - 17:00',
      participants: 1,
      vehicule: 'Peugeot 208',
      candidat: 'Paul Bernard',
      statut: 'Terminé'
    }
  ];

  const coursAVenir = cours.filter(c => c.statut === 'Planifié');
  const coursTermines = cours.filter(c => c.statut === 'Terminé');

  return (
    <DashboardLayout userRole="formateur" userName="Pierre Martin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mes Cours</h1>
            <p className="text-gray-600">Gestion de vos sessions de formation</p>
          </div>
          <Button>Nouveau cours</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours aujourd'hui</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Heures cette semaine</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28h</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours de code</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cours de conduite</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cours à venir</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date/Heure</TableHead>
                    <TableHead>Participants</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coursAVenir.map((cours) => (
                    <TableRow key={cours.id}>
                      <TableCell>
                        <Badge variant={cours.type === 'Code de la route' ? 'default' : 'secondary'}>
                          {cours.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{cours.date}</div>
                          <div className="text-sm text-gray-500">{cours.heure}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {cours.type === 'Code de la route' ? (
                          <span>{cours.participants} candidats</span>
                        ) : (
                          <span>{cours.candidat}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Voir détails</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cours récents</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {coursTermines.map((cours) => (
                    <TableRow key={cours.id}>
                      <TableCell>
                        <Badge variant={cours.type === 'Code de la route' ? 'default' : 'secondary'}>
                          {cours.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{cours.date}</TableCell>
                      <TableCell>
                        <Badge variant="outline">Terminé</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">Évaluer</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Cours;
