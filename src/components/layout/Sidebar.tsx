
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Car, 
  Calendar, 
  FileText, 
  Settings,
  BookOpen,
  CreditCard,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SidebarProps {
  userRole: 'admin' | 'responsable' | 'formateur' | 'candidat';
}

const Sidebar = ({ userRole }: SidebarProps) => {
  const getMenuItems = () => {
    switch (userRole) {
      case 'admin':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
          { icon: Building, label: 'Auto-écoles', path: '/admin/auto-ecoles' },
          { icon: Users, label: 'Utilisateurs', path: '/admin/utilisateurs' },
          { icon: Settings, label: 'Rôles', path: '/admin/roles' },
        ];
      case 'responsable':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
          { icon: Users, label: 'Utilisateurs', path: '/utilisateurs' },
          { icon: BookOpen, label: 'Cours', path: '/cours' },
          { icon: Calendar, label: 'Planning', path: '/planning' },
          { icon: Car, label: 'Véhicules', path: '/vehicules' },
          { icon: CreditCard, label: 'Paiements', path: '/paiements' },
        ];
      case 'formateur':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/formateur/dashboard' },
          { icon: Users, label: 'Candidats', path: '/formateur/candidats' },
          { icon: BookOpen, label: 'Cours', path: '/formateur/cours' },
          { icon: Calendar, label: 'Planning', path: '/formateur/planning' },
          { icon: Car, label: 'Véhicules', path: '/formateur/vehicules' },
        ];
      case 'candidat':
        return [
          { icon: LayoutDashboard, label: 'Dashboard', path: '/candidat/dashboard' },
          { icon: BookOpen, label: 'Cours', path: '/candidat/cours' },
          { icon: Calendar, label: 'Planning', path: '/candidat/planning' },
          { icon: CreditCard, label: 'Paiements', path: '/candidat/paiements' },
          { icon: FileText, label: 'Documents', path: '/candidat/documents' },
          { icon: FileText, label: 'Examens', path: '/candidat/examens' },
        ];
      default:
        return [];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AutoÉcole</h1>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
        </div>
      </div>
      
      <Separator className="mb-4" />
      
      <nav className="px-4">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            className="w-full justify-start mb-2 text-gray-700 hover:text-primary hover:bg-gray-100"
            asChild
          >
            <a href={item.path} className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </a>
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
