
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, BookOpen, Users } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const courses = [
  { id: 'CRS001', title: 'Cours de conduite - Permis B', instructor: 'John Doe', date: '2025-06-20', time: '10:00 - 12:00', students: 1 },
  { id: 'CRS002', title: 'Cours de code - En ligne', instructor: 'Jane Smith', date: '2025-06-18', time: '18:00 - 20:00', students: 15 },
  { id: 'CRS003', title: 'Cours de conduite - Moto A2', instructor: 'Peter Jones', date: '2025-06-21', time: '14:00 - 16:00', students: 1 },
  { id: 'CRS004', title: 'Leçon de perfectionnement', instructor: 'John Doe', date: '2025-06-22', time: '09:00 - 10:00', students: 1 },
];

const ResponsableCours = () => {
  return (
    <DashboardLayout userRole="responsable" userName="Jean Dupont">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gestion des Cours</h1>
          <p className="text-gray-600">Planifiez et gérez les cours de votre auto-école.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cours programmés</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{courses.length}</div>
                  <p className="text-xs text-muted-foreground">cette semaine</p>
              </CardContent>
          </Card>
          <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inscriptions totales</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                  <div className="text-2xl font-bold">{courses.reduce((acc, course) => acc + course.students, 0)}</div>
                  <p className="text-xs text-muted-foreground">cette semaine</p>
              </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <CardTitle>Liste des cours</CardTitle>
              <div className="flex items-center gap-2">
                <Input placeholder="Rechercher un cours..." className="max-w-sm" />
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Planifier un cours
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Titre du cours</TableHead>
                  <TableHead>Formateur</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Heure</TableHead>
                  <TableHead>Inscrits</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell className="font-medium">{course.title}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{new Date(course.date).toLocaleDateString()}</TableCell>
                    <TableCell>{course.time}</TableCell>
                    <TableCell className="text-center">{course.students}</TableCell>
                    <TableCell className="text-right">
                       <Button variant="ghost" size="sm">Gérer</Button>
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

export default ResponsableCours;
