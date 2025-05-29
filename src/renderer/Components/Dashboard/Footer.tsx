import React from 'react';
import { SidebarTrigger } from '@/Components/ui/sidebar';
import NavControls from '../Simulation/NavControls';

function Footer() {
  return (
    <div className="w-full sticky bottom-0 h-10 border-primary-light border-t  font-mono p-2 left-0 z-40 bg-primary-dark text-white text-xs flex justify-between items-center">
      <div className="text-left  w-1/3">
        <SidebarTrigger />
      </div>
      <div className="text-center w-1/3 flex justify-center">
        <NavControls />
      </div>
      <div className="text-right  w-1/3 flex justify-end">
        <div className="bg-primary-darker w-fit p-2 pl-4 pr-4 font-mono rounded">
          00:00:00:00
        </div>
      </div>
    </div>
  );
}

export default Footer;
