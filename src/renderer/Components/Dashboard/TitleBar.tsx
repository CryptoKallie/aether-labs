import React from 'react';

import { ReactComponent as Logo } from '../../../../assets/icons/sparkle.svg';

const TitleBar: React.FC = () => {
  return (
    <nav className="bg-primary-dark text-white flex border-b border-primary-light justify-between items-center z-20 w-full right-0">
      <div
        style={{ WebkitAppRegion: 'drag' }}
        className="pl-6 pr-5 flex w-3/4 items-center justify-start rounded-r-full h-full"
      >
        <span className="font-fancy mr-6 text-2xl text-primary-light select-none self-end">
          xo
        </span>
        <Logo className="h-10 w-8 text-white" />
        <h1 className="text-3xl font-fancy text-white select-none transition-transform duration-300 ease-in-out transform hover:scale-110">
          Aether Labs
        </h1>
        
      </div>
      <div className="pr-5 p-2 flex space-x-2">
      <span className="inline-flex ml-3 font-mono items-center justify-center px-2 pl-4 pr-4 text-sm text-gray-light bg-primary-darker rounded-full">
          v1.0.0
        </span>
      </div>
    </nav>
  );
};

export default TitleBar;
