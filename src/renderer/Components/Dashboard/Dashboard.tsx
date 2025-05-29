import React from 'react';
import '../../Styles/Global.css';
import '../../Styles/App.css';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/Components/ui/sidebar';
import TitleBar from './TitleBar';
import Footer from './Footer';
import NavBar from './Navbar';

function Dashboard() {
  return (
    <SidebarProvider>
      <div className="w-screen h-svh flex flex-col">
        <TitleBar />

        <div className="flex flex-row bg-gray-darker border-secondary flex-1">
          <NavBar />
          {/* <SettingsBar /> */}

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
}

export default Dashboard;
