import React from 'react';
import Infinity from '@/Components/Global/Infinity';

function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <Infinity />
      <h1 className="text-6xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text  animate-gradient">
        Hello.
      </h1>
      <p className="mt-4 font-mono text-lg">Lets automate with Dosei.</p>

      <div className="flex space-x-4 mt-6 w-full">
        <a
          href="/documentation"
          className="text-primary hover:text-primary-light flex-1 text-center transition duration-300"
        >
          {/* Documentation */}
        </a>
        <a
          href="/theory"
          className="text-primary hover:text-primary-light flex-1 text-center transition duration-300"
        >
          {/* Theory */}
        </a>
        <a
          href="/explore"
          className="text-primary hover:text-primary-light flex-1 text-center transition duration-300"
        >
          {/* Explore */}
        </a>
      </div>
      <div className="flex flex-row gap-4 align-center mt-40 justify-center">
        <img
          src="https://github.com/CryptoKallie.png"
          className="size-8 rounded-full"
          alt="CryptoKallie"
        />
        <div className="flex items-center">
          <div className="text-gray-700">@CryptoKallie</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
