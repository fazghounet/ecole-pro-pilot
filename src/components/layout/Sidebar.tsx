
import React from 'react';
import { Link } from 'react-router-dom';
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  userRole: 'admin' | 'responsable' | 'formateur' | 'candidat';
}

const AppSidebar = ({ userRole }: AppSidebarProps) => {
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
          { icon: LayoutDashboard, label: 'Dashboard', path: '/responsable/dashboard' },
          { icon: Users, label: 'Utilisateurs', path: '/responsable/utilisateurs' },
          { icon: BookOpen, label: 'Cours', path: '/responsable/cours' },
          { icon: Calendar, label: 'Planning', path: '/responsable/planning' },
          { icon: Car, label: 'Véhicules', path: '/responsable/vehicules' },
          { icon: CreditCard, label: 'Paiements', path: '/responsable/paiements' },
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
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AutoÉcole</h1>
            <p className="text-xs text-gray-500">Manager</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
