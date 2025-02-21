import React, { useState } from 'react';
import { ReactComponent as BackwardIcon } from '../../../../assets/icons/backwards.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/icons/play.svg';
import { ReactComponent as PauseIcon } from '../../../../assets/icons/pause.svg';
import { ReactComponent as ForwardIcon } from '../../../../assets/icons/forwards.svg';
import { Button } from '@/Components/ui/button';

const NavControls: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex space-x-2">
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7">
        <BackwardIcon className="h-6 w-6" />
      </Button>
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <PauseIcon className="h-6 w-6" />
        ) : (
          <PlayIcon className="h-6 w-6" />
        )}
      </Button>
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7">
        <ForwardIcon className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default NavControls;
