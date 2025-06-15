
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import { SidebarProvider, useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'admin' | 'responsable' | 'formateur' | 'candidat';
  userName: string;
}

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { open, isMobile } = useSidebar();
  return (
    <main
      className={cn(
        'pt-16 p-6 transition-[margin-left] duration-300 ease-in-out',
        isMobile ? 'ml-0' : open ? 'md:ml-64' : 'md:ml-12'
      )}
    >
      {children}
    </main>
  );
};

const DashboardLayout = ({ children, userRole, userName }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50">
        <Sidebar userRole={userRole} />
        <DashboardHeader userName={userName} userRole={userRole} />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
