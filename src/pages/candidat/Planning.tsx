import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Calendar, Clock, User, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CandidatNewSessionDialog from "@/components/candidat/CandidatNewSessionDialog";

const CandidatPlanning = () => {
  const upcomingSessions = [
    {
      id: 1,
      type: 'Conduite',
      date: '2024-06-14',
      time: '14:30',
      duration: '1h',
      instructor: 'Pierre Martin',
      vehicle: 'Renault Clio (AB-123-CD)',
      status: 'confirmé'
    },
    {
      id: 2,
      type: 'Code de la route',
      date: '2024-06-15',
      time: '09:00',
      duration: '1h30',
      instructor: 'Sophie Durand',
      location: 'Salle de cours n°2',
      status: 'confirmé'
    },
    {
      id: 3,
      type: 'Conduite',
      date: '2024-06-17',
      time: '16:00',
      duration: '1h',
      instructor: 'Pierre Martin',
      vehicle: 'Peugeot 208 (CD-456-EF)',
      status: 'en_attente'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmé':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'en_attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'annulé':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <DashboardLayout userRole="candidat" userName="Marie Leroux">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mon Planning</h1>
            <p className="text-gray-600">Gérez vos séances de formation</p>
          </div>
          <CandidatNewSessionDialog />
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Prochaines séances</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{session.type}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(session.status)}`}>
                        {session.status === 'confirmé' ? 'Confirmé' : 
                         session.status === 'en_attente' ? 'En attente' : 'Annulé'}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(session.date).toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{session.time} ({session.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{session.instructor}</span>
                      </div>
                      {session.vehicle && (
                        <div className="flex items-center space-x-2">
                          <Car className="w-4 h-4" />
                          <span>{session.vehicle}</span>
                        </div>
                      )}
                      {session.location && (
                        <div className="flex items-center space-x-2">
                          <span>{session.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {session.status === 'confirmé' && (
                      <Button variant="outline" size="sm">
                        Modifier
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Annuler
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Calendrier de la semaine</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day, index) => (
              <div key={day} className="py-2 font-medium text-gray-600">{day}</div>
            ))}
            {[10, 11, 12, 13, 14, 15, 16].map((date) => (
              <div key={date} className={`py-2 border rounded ${date === 14 || date === 15 ? 'bg-blue-100 border-blue-200' : 'border-gray-200'}`}>
                {date}
                {date === 14 && <div className="text-xs text-blue-600 mt-1">Conduite</div>}
                {date === 15 && <div className="text-xs text-blue-600 mt-1">Code</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatPlanning;
