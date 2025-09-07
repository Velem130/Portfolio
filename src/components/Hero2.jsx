import React from 'react';

const Hero2 = () => {
  return (
    <div className="bg-blue-600 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-white text-center px-4">
        
        <div className="bg-blue-500 p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold">4</p>
          <p className="mt-2">years Experience</p>
        </div>

        <div className="bg-blue-500 p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold">8</p>
          <p className="mt-2">projects completed</p>
        </div>

        <div className="bg-blue-500 p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold">3</p>
          <p className="mt-2">awards won</p>
        </div>

        <div id="about" className="bg-blue-500 p-6 rounded-lg shadow-md">
          <p className="text-3xl font-bold">10+</p>
          <p className="mt-2">happy clients</p>
        </div>

      </div>
    </div>
  );
};

export default Hero2;