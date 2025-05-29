import React from 'react';
import {
  SidebarFooter,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/Components/ui/sidebar';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../../../assets/icons/settings.svg';
import { ReactComponent as BarChartIcon } from '../../../../assets/icons/bar-chart.svg';
import { ReactComponent as SimIcon } from '../../../../assets/icons/sim.svg';

function NavBar() {
  const applicationItems = [
    {
      title: 'Home',
      url: '/',
      icon: HomeIcon,
    },
  ];

  const AutomationItems = [
    {
      title: 'Vin Decoder',
      url: '/decoder',
      icon: SimIcon,
    },
    {
      title: 'Logs & Data',
      url: '/logs',
      icon: BarChartIcon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {applicationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={useLocation().pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Automation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {AutomationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={useLocation().pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarFooter />
      </SidebarContent>
    </Sidebar>
    // <aside
    //   className="top-0 left-0 z-50 w-16 h-full bg-primary-dark transition-transform -translate-x-full sm:translate-x-0"
    //   aria-label="Mini Sidebar"
    // >
    //   <div className="h-full  overflow-y-auto">
    //     <ul className="space-y-2 font-medium">
    //       <NavLink svg={<HomeIcon />} path={'/'} />
    //       <NavLink svg={<SimIcon />} path={'/simulation'} />
    //       <NavLink svg={<BarChartIcon />} path={'/logs'} />
    //       <NavLink svg={<SettingsIcon />} path={'/settings'} />
    //        <SidebarTrigger />
    //     </ul>
    //   </div>
    // </aside>
  );
}

export default NavBar;
