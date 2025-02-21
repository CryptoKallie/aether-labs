import React from 'react';
import Loader from '../Global/Loader';

const SimContainer: React.FC = () => {
    return (
        <div className="w-full h-full p-5 flex items-center justify-center">
            <Loader />
        </div>
    );
};

export default SimContainer;