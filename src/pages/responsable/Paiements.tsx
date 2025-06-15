
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DollarSign, Users, CreditCard, TrendingUp } from 'lucide-react';
import CardStat from '@/components/ui/card-stat';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const payments = [
  { id: 'PAY001', candidate: 'Alice Martin', amount: 250.00, date: '2025-06-15', status: 'Payé' },
  { id: 'PAY002', candidate: 'Bob Dupont', amount: 150.00, date: '2025-06-14', status: 'En attente' },
  { id: 'PAY003', candidate: 'Charlie Durand', amount: 500.00, date: '2025-06-13', status: 'Payé' },
  { id: 'PAY004', candidate: 'Diana Prince', amount: 75.50, date: '2025-06-12', status: 'Échoué' },
  { id: 'PAY005', candidate: 'Eve Polastri', amount: 300.00, date: '2025-06-11', status: 'Payé' },
  { id: 'PAY006', candidate: 'Frank Castle', amount: 250.00, date: '2025-06-10', status: 'Payé' },
  { id: 'PAY007', candidate: 'Grace Adler', amount: 150.00, date: '2025-06-09', status: 'En attente' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Payé':
      return <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80">Payé</Badge>;
    case 'En attente':
      return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80">En attente</Badge>;
    case 'Échoué':
      return <Badge variant="destructive">Échoué</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const ResponsablePaiements = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Paiements</h1>
          <p className="text-gray-600">Suivez les paiements de vos candidats.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <CardStat title="Revenu Total (Mois)" value="€1,250.50" icon={DollarSign} trend={{ value: 12.5, isPositive: true }} />
          <CardStat title="Paiements en attente" value="2" icon={CreditCard} />
          <CardStat title="Nouveaux Candidats (Mois)" value="+5" icon={Users} />
          <CardStat title="Taux de conversion" value="85%" icon={TrendingUp} description="Basé sur les 30 derniers jours"/>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle>Historique des paiements</CardTitle>
              <div className="flex items-center gap-2">
                <Input placeholder="Rechercher par candidat..." className="max-w-sm" />
                <Button>Enregistrer un paiement</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Candidat</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.candidate}</TableCell>
                    <TableCell>€{payment.amount.toFixed(2)}</TableCell>
                    <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Détails</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-center">
             <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ResponsablePaiements;
