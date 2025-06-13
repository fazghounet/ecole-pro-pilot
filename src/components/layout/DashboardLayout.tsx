
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: 'admin' | 'responsable' | 'formateur' | 'candidat';
  userName: string;
}

const DashboardLayout = ({ children, userRole, userName }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar userRole={userRole} />
      <DashboardHeader userName={userName} userRole={userRole} />
      <main className="ml-64 pt-16 p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
