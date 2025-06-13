
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FileText, Upload, Download, CheckCircle, AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CandidatDocuments = () => {
  const documents = [
    {
      id: 1,
      name: 'Carte d\'identité (recto)',
      type: 'Pièce d\'identité',
      status: 'validé',
      uploadDate: '2024-05-15',
      size: '2.3 MB'
    },
    {
      id: 2,
      name: 'Carte d\'identité (verso)',
      type: 'Pièce d\'identité',
      status: 'validé',
      uploadDate: '2024-05-15',
      size: '2.1 MB'
    },
    {
      id: 3,
      name: 'Photo d\'identité',
      type: 'Photo',
      status: 'validé',
      uploadDate: '2024-05-15',
      size: '1.8 MB'
    },
    {
      id: 4,
      name: 'Attestation de recensement',
      type: 'Attestation',
      status: 'en_attente',
      uploadDate: '2024-06-10',
      size: '1.2 MB'
    },
    {
      id: 5,
      name: 'Certificat médical',
      type: 'Médical',
      status: 'rejeté',
      uploadDate: '2024-06-08',
      size: '950 KB',
      reason: 'Document expiré'
    }
  ];

  const requiredDocuments = [
    'Carte d\'identité (recto/verso)',
    'Photo d\'identité récente',
    'Attestation de recensement',
    'Certificat médical (moins de 6 mois)',
    'Justificatif de domicile'
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'validé':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'en_attente':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'rejeté':
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'validé':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'en_attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'rejeté':
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
            <h1 className="text-2xl font-bold text-gray-900">Mes Documents</h1>
            <p className="text-gray-600">Gérez vos documents administratifs</p>
          </div>
          <Button>
            <Upload className="w-4 h-4 mr-2" />
            Ajouter un document
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Documents uploadés</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {documents.map((doc) => (
                  <div key={doc.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(doc.status)}
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                          <p className="text-sm text-gray-600">{doc.type} • {doc.size}</p>
                          <p className="text-xs text-gray-500">
                            Uploadé le {new Date(doc.uploadDate).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(doc.status)}`}>
                          {doc.status === 'validé' ? 'Validé' : 
                           doc.status === 'en_attente' ? 'En attente' : 'Rejeté'}
                        </span>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    {doc.reason && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-sm text-red-800">
                          <strong>Raison du rejet :</strong> {doc.reason}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Documents requis</h3>
              <div className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Conseils</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Photos en couleur uniquement</li>
                <li>• Format PDF ou JPG accepté</li>
                <li>• Taille max : 5 MB par fichier</li>
                <li>• Documents lisibles et non tronqués</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Statut du dossier</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Documents validés</span>
                  <span className="text-sm font-medium">3/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-xs text-gray-600">
                  Il vous reste 2 documents à faire valider pour compléter votre dossier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatDocuments;
