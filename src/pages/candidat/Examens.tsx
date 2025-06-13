
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FileText, Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CandidatExamens = () => {
  const upcomingExams = [
    {
      id: 1,
      type: 'Code de la route',
      date: '2024-06-20',
      time: '14:30',
      location: 'Centre d\'examen - 15 rue de la Paix',
      status: 'programmé',
      instructions: 'Se présenter 30 minutes avant avec une pièce d\'identité valide'
    }
  ];

  const examHistory = [
    {
      id: 2,
      type: 'Code de la route',
      date: '2024-05-15',
      time: '09:30',
      location: 'Centre d\'examen - 15 rue de la Paix',
      status: 'échoué',
      score: '32/40',
      details: 'Seuil requis : 35/40. Prochaine tentative disponible dans 48h'
    },
    {
      id: 3,
      type: 'Code de la route',
      date: '2024-04-20',
      time: '14:00',
      location: 'Centre d\'examen - 15 rue de la Paix',
      status: 'échoué',
      score: '28/40',
      details: 'Seuil requis : 35/40. À retravailler : signalisation et priorités'
    }
  ];

  const examInfo = {
    codeAttempts: 3,
    maxCodeAttempts: 5,
    drivingEligible: false,
    minHoursCode: 20,
    currentHoursCode: 18,
    minHoursDriving: 20,
    currentHoursDriving: 12
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'réussi':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'échoué':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'programmé':
        return <Calendar className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'réussi':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'échoué':
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
          <h1 className="text-2xl font-bold text-gray-900">Mes Examens</h1>
          <p className="text-gray-600">Suivez vos examens du code et de la conduite</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Examens à venir */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Examens programmés</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingExams.length > 0 ? (
                  upcomingExams.map((exam) => (
                    <div key={exam.id} className="p-6">
                      <div className="flex items-start space-x-4">
                        {getStatusIcon(exam.status)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900">{exam.type}</h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(exam.status)}`}>
                              Programmé
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(exam.date).toLocaleDateString('fr-FR', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{exam.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            <strong>Lieu :</strong> {exam.location}
                          </p>
                          <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                            <p className="text-sm text-blue-800">
                              <strong>Instructions :</strong> {exam.instructions}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Aucun examen programmé pour le moment</p>
                  </div>
                )}
              </div>
            </div>

            {/* Historique des examens */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Historique des examens</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {examHistory.map((exam) => (
                  <div key={exam.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      {getStatusIcon(exam.status)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">{exam.type}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(exam.status)}`}>
                            {exam.status === 'réussi' ? 'Réussi' : 'Échoué'}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(exam.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{exam.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4" />
                            <span>Score : {exam.score}</span>
                          </div>
                        </div>
                        <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                          <p className="text-sm text-gray-700">{exam.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Informations et progression */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Éligibilité aux examens</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Heures de code</span>
                    <span className="text-sm text-gray-600">{examInfo.currentHoursCode}/{examInfo.minHoursCode}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(examInfo.currentHoursCode / examInfo.minHoursCode) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {examInfo.currentHoursCode >= examInfo.minHoursCode ? '✅' : '❌'} 
                    {examInfo.currentHoursCode >= examInfo.minHoursCode ? ' Éligible au code' : ` Il vous reste ${examInfo.minHoursCode - examInfo.currentHoursCode}h`}
                  </p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Heures de conduite</span>
                    <span className="text-sm text-gray-600">{examInfo.currentHoursDriving}/{examInfo.minHoursDriving}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(examInfo.currentHoursDriving / examInfo.minHoursDriving) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {examInfo.drivingEligible ? '✅' : '❌'} 
                    {examInfo.drivingEligible ? ' Éligible à la conduite' : ` Il vous reste ${examInfo.minHoursDriving - examInfo.currentHoursDriving}h + réussir le code`}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Tentatives d'examen</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Code de la route</span>
                  <span className="text-sm font-medium">{examInfo.codeAttempts}/{examInfo.maxCodeAttempts}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${(examInfo.codeAttempts / examInfo.maxCodeAttempts) * 100}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-600">
                  Il vous reste {examInfo.maxCodeAttempts - examInfo.codeAttempts} tentatives
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Conseils pour réussir</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Révisez les tests en ligne</li>
                <li>• Dormez bien la veille</li>
                <li>• Arrivez en avance</li>
                <li>• Relisez bien chaque question</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatExamens;
