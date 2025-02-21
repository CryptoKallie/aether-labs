import React from 'react';
import Loader from '../Components/Global/Loader';
import Simulator from '@/Components/Simulation/Simulator';

const SimulationPage: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Simulator  />
        </div>
    );
};

export default SimulationPage;