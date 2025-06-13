
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, Calendar, TrendingUp } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Candidats = () => {
  const candidats = [
    {
      id: 1,
      nom: 'Marie Leroux',
      email: 'marie.leroux@email.com',
      progression: 75,
      prochainCours: '15/06 - 14:30',
      statut: 'En cours',
      dernierCommentaire: 'Bon niveau, à poursuivre'
    },
    {
      id: 2,
      nom: 'Paul Bernard',
      email: 'paul.bernard@email.com',
      progression: 45,
      prochainCours: '16/06 - 16:00',
      statut: 'En cours',
      dernierCommentaire: 'Besoin de travailler les créneaux'
    },
    {
      id: 3,
      nom: 'Sophie Dubois',
      email: 'sophie.dubois@email.com',
      progression: 90,
      prochainCours: '17/06 - 10:00',
      statut: 'Prêt examen',
      dernierCommentaire: 'Excellent niveau, prêt pour l\'examen'
    }
  ];

  return (
    <DashboardLayout userRole="formateur" userName="Pierre Martin">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes Candidats</h1>
          <p className="text-gray-600">Suivi et évaluation de vos candidats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total candidats</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prêts examen</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sessions cette semaine</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commentaires à faire</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des candidats</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidat</TableHead>
                  <TableHead>Progression</TableHead>
                  <TableHead>Prochain cours</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {candidats.map((candidat) => (
                  <TableRow key={candidat.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{candidat.nom}</div>
                        <div className="text-sm text-gray-500">{candidat.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${candidat.progression}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{candidat.progression}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{candidat.prochainCours}</TableCell>
                    <TableCell>
                      <Badge variant={candidat.statut === 'Prêt examen' ? 'default' : 'secondary'}>
                        {candidat.statut}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Voir fiche</Button>
                        <Button size="sm" variant="outline">Commentaire</Button>
                      </div>
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

export default Candidats;
