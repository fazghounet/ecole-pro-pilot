
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, MapPin, User, Car, BookOpen, Euro } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useToast } from "@/components/ui/use-toast";

// Données exemples pour les auto-écoles avec tarifs
const autoEcoles = [
  { 
    id: '1', 
    nom: 'Auto-École Centre Ville', 
    responsable: 'Jean Dupont', 
    ville: 'Paris', 
    description: 'Apprenez à conduire au coeur de la ville avec nos moniteurs expérimentés.',
    conduitePrice: 45,
    codePrice: 25
  },
  { 
    id: '2', 
    nom: 'Conduite Plus', 
    responsable: 'Marie Martin', 
    ville: 'Lyon', 
    description: 'Des formations complètes pour tous les types de permis. Flexibilité et réussite.',
    conduitePrice: 42,
    codePrice: 20
  },
  { 
    id: '3', 
    nom: 'Permis Express', 
    responsable: 'Pierre Durand', 
    ville: 'Marseille', 
    description: 'Passez votre permis rapidement grâce à nos stages accélérés.',
    conduitePrice: 48,
    codePrice: 30
  },
  { 
    id: '4', 
    nom: 'La Parisienne', 
    responsable: 'Sophie Leroy', 
    ville: 'Paris', 
    description: 'L\'excellence de la formation à la conduite dans un cadre premium.',
    conduitePrice: 55,
    codePrice: 35
  },
];

const ChoisirAutoEcole = () => {
    const { toast } = useToast();

    const handleRequest = (schoolName: string) => {
        console.log(`Request sent to ${schoolName}`);
        toast({
            title: "Demande envoyée !",
            description: `Votre demande d'inscription à "${schoolName}" a bien été envoyée.`,
            variant: "default",
        });
    };

    return (
        <DashboardLayout userRole="candidat" userName="Nouveau Candidat">
            <div className="space-y-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Choisir une Auto-École</h1>
                    <p className="text-gray-600">Parcourez la liste des auto-écoles et envoyez une demande d'inscription à celle de votre choix.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {autoEcoles.map((ecole) => (
                        <Card key={ecole.id} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Home className="w-5 h-5 text-primary-500" />
                                    {ecole.nom}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-2 pt-2">
                                     <MapPin className="w-4 h-4" /> {ecole.ville}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-sm text-gray-600">{ecole.description}</p>
                                <p className="text-sm text-muted-foreground flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Responsable : {ecole.responsable}
                                </p>
                                
                                {/* Tarifs */}
                                <div className="border-t pt-4 space-y-2">
                                    <h4 className="text-sm font-semibold flex items-center gap-2">
                                        <Euro className="w-4 h-4" />
                                        Tarifs
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Car className="w-3 h-3 text-blue-500" />
                                            <span>Conduite: {ecole.conduitePrice}€/h</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen className="w-3 h-3 text-green-500" />
                                            <span>Code: {ecole.codePrice}€/h</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={() => handleRequest(ecole.nom)}>
                                    Envoyer une demande
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default ChoisirAutoEcole;
