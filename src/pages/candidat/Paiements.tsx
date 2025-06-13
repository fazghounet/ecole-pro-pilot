
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { CreditCard, Calendar, CheckCircle, Clock, XCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CandidatPaiements = () => {
  const paymentHistory = [
    {
      id: 1,
      type: 'Forfait code + conduite',
      amount: 1200,
      date: '2024-05-01',
      status: 'payé',
      method: 'Carte bancaire',
      reference: 'PAY-2024-001'
    },
    {
      id: 2,
      type: 'Heures supplémentaires (5h)',
      amount: 250,
      date: '2024-05-15',
      status: 'payé',
      method: 'Virement',
      reference: 'PAY-2024-002'
    },
    {
      id: 3,
      type: 'Examen code (2ème tentative)',
      amount: 30,
      date: '2024-06-01',
      status: 'en_attente',
      method: 'Prélèvement automatique',
      reference: 'PAY-2024-003',
      dueDate: '2024-06-15'
    }
  ];

  const paymentSummary = {
    totalPaid: 1450,
    totalDue: 30,
    nextPayment: {
      amount: 30,
      date: '2024-06-15',
      description: 'Examen code (2ème tentative)'
    }
  };

  const paymentPlan = [
    {
      id: 1,
      description: 'Forfait initial (code + 20h conduite)',
      amount: 1200,
      status: 'payé',
      date: '2024-05-01'
    },
    {
      id: 2,
      description: 'Heures supplémentaires (5h)',
      amount: 250,
      status: 'payé',
      date: '2024-05-15'
    },
    {
      id: 3,
      description: 'Examen code (2ème tentative)',
      amount: 30,
      status: 'en_cours',
      date: '2024-06-15'
    },
    {
      id: 4,
      description: 'Heures conduite supplémentaires (prévisionnel)',
      amount: 200,
      status: 'prevu',
      date: 'À définir'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'payé':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'en_attente':
      case 'en_cours':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'échoué':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'payé':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'en_attente':
      case 'en_cours':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'échoué':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'prevu':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <DashboardLayout userRole="candidat" userName="Marie Leroux">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mes Paiements</h1>
          <p className="text-gray-600">Gérez vos paiements et suivez votre plan de financement</p>
        </div>

        {/* Résumé des paiements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{paymentSummary.totalPaid}€</p>
                <p className="text-sm text-gray-600">Total payé</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{paymentSummary.totalDue}€</p>
                <p className="text-sm text-gray-600">En attente</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <CreditCard className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-gray-900">{paymentSummary.nextPayment.amount}€</p>
                <p className="text-sm text-gray-600">Prochain paiement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Historique des paiements */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Historique des paiements</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      {getStatusIcon(payment.status)}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-sm font-medium text-gray-900">{payment.type}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(payment.status)}`}>
                            {payment.status === 'payé' ? 'Payé' : 
                             payment.status === 'en_attente' ? 'En attente' : 'Échoué'}
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(payment.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          <p>Méthode : {payment.method}</p>
                          <p>Référence : {payment.reference}</p>
                          {payment.dueDate && (
                            <p className="text-yellow-600 font-medium">
                              Échéance : {new Date(payment.dueDate).toLocaleDateString('fr-FR')}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{payment.amount}€</p>
                      {payment.status === 'payé' && (
                        <Button variant="ghost" size="sm" className="mt-2">
                          <Download className="w-4 h-4 mr-1" />
                          Reçu
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plan de paiement */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Plan de paiement</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {paymentPlan.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(item.status)}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{item.description}</h3>
                        <p className="text-sm text-gray-600">
                          {item.status !== 'prevu' ? 
                            new Date(item.date).toLocaleDateString('fr-FR') : 
                            item.date
                          }
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">{item.amount}€</p>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(item.status)}`}>
                        {item.status === 'payé' ? 'Payé' : 
                         item.status === 'en_cours' ? 'En cours' : 
                         item.status === 'prevu' ? 'Prévu' : item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prochain paiement */}
        {paymentSummary.nextPayment && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Clock className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="text-lg font-medium text-yellow-900">Prochain paiement</h3>
                  <p className="text-sm text-yellow-700">{paymentSummary.nextPayment.description}</p>
                  <p className="text-sm text-yellow-700">
                    Échéance : {new Date(paymentSummary.nextPayment.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-yellow-900">{paymentSummary.nextPayment.amount}€</p>
                <Button className="mt-2">
                  Payer maintenant
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Moyens de paiement */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Moyens de paiement acceptés</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <CreditCard className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-medium">Carte bancaire</p>
                <p className="text-sm text-gray-600">Visa, Mastercard</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">€</span>
              </div>
              <div>
                <p className="font-medium">Virement bancaire</p>
                <p className="text-sm text-gray-600">SEPA</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-500" />
              <div>
                <p className="font-medium">Prélèvement</p>
                <p className="text-sm text-gray-600">Automatique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatPaiements;
