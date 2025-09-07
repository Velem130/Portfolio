import React from "react";
import aspnet from '../assets/aspnet.jpg';
import card from '../assets/card.jpg';
import dataanalyse from '../assets/dataanalyse.jpg';
import movies from '../assets/movies.jpg';
import store from '../assets/store.jpg';
import portfolio from '../assets/Portfolio.jpg';
import { Link } from 'react-router-dom';

function Proje() {
  return (
    <section className="px-4 py-12 bg-neutral-100 text-center">
      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">My Website Projects</h2>

      {/* Note */}
      <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-10">
        <strong>Note:</strong> These projects were developed as part of my academic coursework at Mangosuthu University. While they demonstrate my technical capabilities, they were not commercially deployed. I'm now seeking real-world opportunities to build professional websites for your business.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Online Store Website */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={store} alt="Online Store Website" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Online Store Website</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">HTML5</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">CSS3</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">JavaScript</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">React</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Node.js</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://www.asos.com/" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
             <Link to="/portfolio-code" className=" border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">view Code</Link>
            </div>
          </div>
        </div>

        {/* Portfolio Website */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={portfolio} alt="Portfolio Website" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Portfolio Website</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">React</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Tailwind CSS</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://portfolio-lovat-iota-73.vercel.app/" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
              <a href="/portfolio-code" className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">view Code </a>
            </div>
          </div>
        </div>

        {/* Sales Data Analysis */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={dataanalyse} alt="Sales Data Analysis" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">We Build websites</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Python</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Pandas</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Matplotlib</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Tableau</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="https://webuildwebsites.vercel.app/" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
              <a href="/portfolio-code" className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">View Codes</a>
            </div>
          </div>
        </div>

        {/* Movie Website */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={movies} alt="Movie Website" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Movie Website</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">React Native</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Firebase</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Redux</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">HealthKit API</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
              <a href="/portfolio-code" className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">View Codes</a>
            </div>
          </div>
        </div>

        {/* ASP.NET Application */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={aspnet} alt="ASP.NET Application" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">ASP.NET Application</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">TensorFlow</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">NLTK</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Flask</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">ASP.NET</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
              <a href="/portfolio-code" className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">View Codes</a>
            </div>
          </div>
        </div>

        {/* Card Game */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
          <img src={card} alt="Card Game" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">Card Game</h3>
            <div className="flex flex-wrap gap-2 text-sm text-white mt-2">
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Raspberry Pi</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">Python</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">MQTT</span>
              <span className="bg-blue-100 px-2 py-1 text-black rounded">React</span>
            </div>
            <div id="services" className="mt-4 flex flex-wrap gap-2">
              <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">View Website</a>
              <a href="/portfolio-code" className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-400">View Codes</a>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="mt-16 bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Need a Professional Website for Your Business?
        </h3>
        <p className="text-gray-600 mb-6">
          I'm ready to apply my skills to create a beautiful, functional website that represents your brand and serves your customers.
        </p>
        <a
          href="https://wa.me/27840489731"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded transition duration-300"
        >
          Let's Build Your Website
        </a>
      </div>
    </section>
  );
}

export default Proje;


