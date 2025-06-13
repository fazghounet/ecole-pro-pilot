
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';

const Planning = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const planningData = [
    {
      id: 1,
      heure: '09:00',
      duree: '1.5h',
      type: 'Code de la route',
      participants: '12 candidats',
      lieu: 'Salle A',
      status: 'confirmed'
    },
    {
      id: 2,
      heure: '11:00',
      duree: '1h',
      type: 'Conduite',
      participants: 'Marie Leroux',
      lieu: 'Renault Clio',
      status: 'confirmed'
    },
    {
      id: 3,
      heure: '14:30',
      duree: '1h',
      type: 'Conduite',
      participants: 'Paul Bernard',
      lieu: 'Peugeot 208',
      status: 'pending'
    },
    {
      id: 4,
      heure: '16:00',
      duree: '1h',
      type: 'Conduite',
      participants: 'Sophie Dubois',
      lieu: 'Renault Clio',
      status: 'confirmed'
    }
  ];

  const jours = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  const heures = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

  return (
    <DashboardLayout userRole="formateur" userName="Pierre Martin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mon Planning</h1>
            <p className="text-gray-600">Vue d'ensemble de vos sessions</p>
          </div>
          <Button>Nouveau créneau</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Planning de la semaine</CardTitle>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium">13 - 19 Juin 2024</span>
                  <Button variant="outline" size="sm">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="grid grid-cols-8 gap-1 min-w-[800px]">
                  <div className="p-2"></div>
                  {jours.map((jour) => (
                    <div key={jour} className="p-2 text-center font-medium bg-gray-50 border rounded">
                      {jour}
                    </div>
                  ))}
                  
                  {heures.map((heure) => (
                    <React.Fragment key={heure}>
                      <div className="p-2 text-sm font-medium text-gray-600 border-r">
                        {heure}
                      </div>
                      {jours.map((jour, jourIndex) => (
                        <div key={`${heure}-${jour}`} className="p-1 border border-gray-200 min-h-[60px]">
                          {/* Exemple de cours pour mercredi */}
                          {jour === 'Mer' && heure === '09:00' && (
                            <div className="bg-blue-100 p-1 rounded text-xs">
                              <div className="font-medium">Code</div>
                              <div>12 candidats</div>
                            </div>
                          )}
                          {jour === 'Mer' && heure === '14:00' && (
                            <div className="bg-green-100 p-1 rounded text-xs">
                              <div className="font-medium">Conduite</div>
                              <div>Marie L.</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cours d'aujourd'hui</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {planningData.map((cours) => (
                <div key={cours.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">{cours.heure}</span>
                      <span className="text-gray-500">({cours.duree})</span>
                    </div>
                    <Badge variant={cours.type === 'Code de la route' ? 'default' : 'secondary'}>
                      {cours.type}
                    </Badge>
                    <div>
                      <div className="font-medium">{cours.participants}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {cours.lieu}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={cours.status === 'confirmed' ? 'default' : 'outline'}>
                      {cours.status === 'confirmed' ? 'Confirmé' : 'En attente'}
                    </Badge>
                    <Button size="sm" variant="outline">Modifier</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Planning;
