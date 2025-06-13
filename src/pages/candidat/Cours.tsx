
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { BookOpen, Clock, User, CheckCircle, XCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CandidatCours = () => {
  const upcomingCourses = [
    {
      id: 1,
      type: 'Conduite',
      date: '2024-06-14',
      time: '14:30',
      duration: '1h',
      instructor: 'Pierre Martin',
      topic: 'Circulation en ville',
      status: 'programmé'
    },
    {
      id: 2,
      type: 'Code de la route',
      date: '2024-06-15',
      time: '09:00',
      duration: '1h30',
      instructor: 'Sophie Durand',
      topic: 'Signalisation routière',
      status: 'programmé'
    }
  ];

  const pastCourses = [
    {
      id: 3,
      type: 'Code de la route',
      date: '2024-06-10',
      time: '09:00',
      duration: '1h30',
      instructor: 'Sophie Durand',
      topic: 'Règles de priorité',
      status: 'présent',
      note: 'Très bonne participation, concepts bien assimilés'
    },
    {
      id: 4,
      type: 'Conduite',
      date: '2024-06-08',
      time: '15:00',
      duration: '1h',
      instructor: 'Pierre Martin',
      topic: 'Manœuvres de stationnement',
      status: 'présent',
      note: 'Bonne progression sur les créneaux, à améliorer en bataille'
    },
    {
      id: 5,
      type: 'Code de la route',
      date: '2024-06-05',
      time: '14:00',
      duration: '1h30',
      instructor: 'Sophie Durand',
      topic: 'Code de la route - Révisions',
      status: 'absent',
      note: 'Absence justifiée'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'présent':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'absent':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Calendar className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'présent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'programmé':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <DashboardLayout userRole="candidat" userName="Marie Leroux">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes Cours</h1>
          <p className="text-gray-600">Suivez votre progression théorique et pratique</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">18</p>
                <p className="text-sm text-gray-600">Heures de code</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Heures de conduite</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">85%</p>
                <p className="text-sm text-gray-600">Taux de présence</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-4">
          <TabsList>
            <TabsTrigger value="upcoming">Cours à venir</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Prochains cours</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingCourses.map((course) => (
                  <div key={course.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        {getStatusIcon(course.status)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{course.type}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(course.status)}`}>
                              {course.status === 'programmé' ? 'Programmé' : course.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-900 font-medium mb-2">{course.topic}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(course.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{course.time} ({course.duration})</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{course.instructor}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Historique des cours</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {pastCourses.map((course) => (
                  <div key={course.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      {getStatusIcon(course.status)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{course.type}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(course.status)}`}>
                            {course.status === 'présent' ? 'Présent' : 
                             course.status === 'absent' ? 'Absent' : course.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-900 font-medium mb-2">{course.topic}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(course.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{course.time} ({course.duration})</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span>{course.instructor}</span>
                          </div>
                        </div>
                        {course.note && (
                          <div className={`p-3 rounded-md border ${
                            course.status === 'présent' ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                          }`}>
                            <p className={`text-sm ${
                              course.status === 'présent' ? 'text-green-800' : 'text-gray-700'
                            }`}>
                              <strong>Note du formateur :</strong> {course.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CandidatCours;
