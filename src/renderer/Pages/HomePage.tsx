import React from 'react';
import Loader from '../Components/Global/Loader';
import Infinity from '@/Components/Global/Infinity';

const HomePage: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center ">
            <Infinity />
            <h1 className="text-6xl bg-gradient-to-r from-secondary-light to-primary-light text-transparent bg-clip-text animate-bounce">
                Hello Friend.
            </h1>
            <p className="mt-4 font-mono text-lg">
                Welcome to the first version of my aether simulator!
            </p>
            <hr />
            <div className="rounded-xl m-5 bg-gray p-4 text-gray-light font-mono opacity-75">
                All things in the universe can be reduced into a single unit of existence, known as aether.
            </div>
            <div className="flex space-x-4 mt-6 w-full">
                <a href="/documentation" className="text-primary hover:text-primary-light flex-1 text-center transition duration-300">Documentation</a>
                <a href="/theory" className="text-primary hover:text-primary-light flex-1 text-center transition duration-300">Theory</a>
                <a href="/explore" className="text-primary hover:text-primary-light flex-1 text-center transition duration-300">Explore</a>
            </div>
            <div className="mt-40 text-gray-700">
                @CryptoKallie
            </div>
        </div>
    );
};

export default HomePage;