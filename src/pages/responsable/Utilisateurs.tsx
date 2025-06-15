import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlusCircle, Check, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AffecterCandidatDialog from '@/components/responsable/AffecterCandidatDialog';

const utilisateurs = [
  { id: '1', nom: 'Pierre Martin', email: 'pierre.m@example.com', role: 'formateur' },
  { id: '2', nom: 'Marie Leroux', email: 'marie.l@example.com', role: 'candidat' },
  { id: '3', nom: 'Paul Bernard', email: 'paul.b@example.com', role: 'candidat' },
];

const pendingRequests = [
  { id: 'REQ001', nom: 'Lucas Dubois', email: 'lucas.d@example.com', date: '15/06/2025' },
  { id: 'REQ002', nom: 'Chloé Garcia', email: 'chloe.g@example.com', date: '14/06/2025' },
];

const formateurs = utilisateurs.filter(u => u.role === 'formateur').map(u => ({ id: u.id, nom: u.nom }));

const AddUserDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un utilisateur
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un nouvel utilisateur</DialogTitle>
          <DialogDescription>
            Créez un compte pour un nouveau formateur ou candidat.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nom
            </Label>
            <Input id="name" placeholder="p. ex. John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" type="email" placeholder="p. ex. john@example.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
              Rôle
            </Label>
            <Select>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Sélectionner un rôle" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="formateur">Formateur</SelectItem>
                    <SelectItem value="candidat">Candidat</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Créer l'utilisateur</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const ResponsableUtilisateurs = () => {
  // Pour l'affectation (UI fake): onStocke juste l'affectation temporairement avec useState
  const [affectations, setAffectations] = useState<{[candidatId: string]: string}>({});

  const handleAffecter = (candidatId: string, formateurId: string) => {
    setAffectations(prev => ({
      ...prev,
      [candidatId]: formateurId
    }));
  };

  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion des Utilisateurs</h1>
            <p className="text-gray-600">Gérez les inscriptions et les comptes de votre auto-école.</p>
          </div>
          <AddUserDialog />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Demandes d'inscription en attente ({pendingRequests.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {pendingRequests.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date de demande</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingRequests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="font-medium">{req.nom}</TableCell>
                      <TableCell>{req.email}</TableCell>
                      <TableCell>{req.date}</TableCell>
                      <TableCell className="text-right space-x-1">
                        <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          <X className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-sm text-center text-gray-500 py-4">Aucune demande en attente.</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs actifs</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rôle</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {utilisateurs.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.nom}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'formateur' ? 'secondary' : 'outline'}>{user.role}</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button variant="outline" size="sm">Modifier</Button>
                      {user.role === 'candidat' && (
                        <>
                          <AffecterCandidatDialog
                            candidatNom={user.nom}
                            formateurs={formateurs}
                            onAffecter={(formateurId) => handleAffecter(user.id, formateurId)}
                          />
                          {affectations[user.id] && (
                            <span className="ml-2 text-xs text-green-700">
                              Affecté à {formateurs.find(f => f.id === affectations[user.id])?.nom}
                            </span>
                          )}
                        </>
                      )}
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

export default ResponsableUtilisateurs;
