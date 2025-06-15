
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Building, Calendar, GraduationCap } from 'lucide-react';

const CandidatProfil = () => {
  return (
    <DashboardLayout userRole="candidat" userName="Pierre Martin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mon Profil</h1>
          <p className="text-muted-foreground">
            Gérez vos informations personnelles et préférences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Informations personnelles
              </CardTitle>
              <CardDescription>
                Vos informations de base
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="text-lg">PM</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">
                    Changer la photo
                  </Button>
                  <p className="text-sm text-muted-foreground mt-1">
                    JPG, PNG ou GIF (max. 2MB)
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" defaultValue="Pierre" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" defaultValue="Martin" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex">
                    <Mail className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue="pierre.martin@email.fr" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <div className="flex">
                    <Phone className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                    <Input id="telephone" defaultValue="06 98 76 54 32" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formation Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Informations de formation
              </CardTitle>
              <CardDescription>
                Vos informations de candidat
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="autoecole">Auto-école</Label>
                <div className="flex">
                  <Building className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                  <Input id="autoecole" defaultValue="Auto-École Conduite Plus" readOnly />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="permis">Type de permis</Label>
                <Input id="permis" defaultValue="Permis B" readOnly />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="adresse">Adresse</Label>
                <div className="flex">
                  <MapPin className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                  <Input id="adresse" defaultValue="456 Avenue des Étudiants, 75002 Paris" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="dateinscription">Date d'inscription</Label>
                <div className="flex">
                  <Calendar className="w-4 h-4 mt-3 mr-2 text-muted-foreground" />
                  <Input id="dateinscription" defaultValue="10/01/2024" readOnly />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Sécurité</CardTitle>
            <CardDescription>
              Gérez votre mot de passe et vos paramètres de sécurité
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Mot de passe actuel</Label>
              <Input id="current-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">Nouveau mot de passe</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirmer le nouveau mot de passe</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button>Changer le mot de passe</Button>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button>Sauvegarder les modifications</Button>
          <Button variant="outline">Annuler</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CandidatProfil;
