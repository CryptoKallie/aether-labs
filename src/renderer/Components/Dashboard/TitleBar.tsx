import React from 'react';

import { ReactComponent as Logo } from '../../../../assets/icons/sparkle.svg';

import { IconX, IconSquares, IconMinus } from '@tabler/icons-react';

function TitleBar() {
  return (
    <nav className="bg-primary-dark text-white flex border-b border-primary-light justify-between items-center z-20 w-full right-0">
      <div
        style={{ WebkitAppRegion: 'drag' }}
        className="pl-2 pr-5 flex w-3/4 items-center justify-start rounded-r-full h-full"
      >
        <div className="flex items-center  mr-6">
          <button
            type="button"
            className="p-1 rounded hover:bg-primary-light/20"
            title="Minimize"
          >
            <IconX size={25} className="text-primary-light" />
          </button>
          <button
            type="button"
            className="p-1 rounded bg-primary-dark"
            title="Minimize"
          >
            <IconSquares size={25} className="text-primary-light" />
          </button>
          <button
            type="button"
            className="p-1 rounded hover:bg-primary-light/20"
            title="Minimize"
          >
            <IconMinus size={25} className="text-primary-light" />
          </button>
        </div>
      </div>
      <div className="pr-5 p-2 flex space-x-2">
        <h1 className="text-2xl font-fancy text-primary-darker select-none transition-transform duration-300 ease-in-out transform hover:scale-110">
          DOSEI{' '}
        </h1>
      </div>
    </nav>
  );
}

export default TitleBar;
