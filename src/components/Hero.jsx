import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen bg-blue-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-2">Issa Mluleki Velem</h1>
      <h2 className="text-xl mb-4">Full-Stack Developer | IT Student at Johannesburg University</h2>
      <p className="max-w-xl mb-8">
        Building digital solutions for real problems with clean, efficient code and user-focused design.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2 bg-white text-blue-900 p-4 rounded shadow"><FaLaptopCode /> Web Development</div>
        <div className="flex items-center gap-2 bg-white text-blue-900 p-4 rounded shadow"><FaMobileAlt /> Responsive Design</div>
        <div className="flex items-center gap-2 bg-white text-blue-900 p-4 rounded shadow"><FaDatabase /> Database Solutions</div>
        <div className="flex items-center gap-2 bg-white text-blue-900 p-4 rounded shadow"><FaLightbulb /> Creative Problem Solving</div>
      </div>

      <div className="flex gap-4">
        <a href="#myprojects" className="bg-yellow-400 text-black px-6 py-2 rounded shadow hover:bg-gray-100">
          View My Projects
        </a>
        <a 
          href="https://wa.me/27840489731?text=Hi%20Issa%2C%20I'm%20interested%20in%20working%20with%20you!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-700 px-6 py-2 rounded shadow hover:bg-blue-800"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Hero;



