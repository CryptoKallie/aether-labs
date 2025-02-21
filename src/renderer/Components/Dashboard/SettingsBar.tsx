import React from 'react';
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home.svg';
import { ReactComponent as SettingsIcon } from '../../../../assets/icons/settings.svg';
import { ReactComponent as BarChartIcon } from '../../../../assets/icons/bar-chart.svg';

const SettingsBar: React.FC = () => {
  return (
    <aside
      id="default-sidebar"
      className="top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-darker rounded-l-2xl border-l border-b border-t border-primary-light">
        <ul className="space-y-2 font-medium">
          <li>
        <a
          href="/simulation"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <HomeIcon className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="font-mono ms-3">Simulation</span>
        </a>
          </li>
          <li>
        <a
          href="/data"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <BarChartIcon className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 font-mono ms-3 whitespace-nowrap">
            Data
          </span>
        </a>
          </li>
          <li>
        <a
          href="/settings"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <SettingsIcon className="w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 font-mono ms-3 whitespace-nowrap">
            Settings
          </span>
        </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SettingsBar;
