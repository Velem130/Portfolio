import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // <-- React Icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow p-4 transition-colors duration-300 ${
        scrolled ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">PORTFOLIO</div>

        {/* Hamburger / Close Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex space-x-0 md:space-x-6 md:static absolute top-full left-0 w-full bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          } md:flex-row md:items-center md:w-auto`}
        >
          {['home', 'about', 'services', 'contact'].map((section) => (
            <li key={section} className="text-center py-2 md:py-0">
              <a
                href={`#${section}`}
                className="block md:inline hover:text-blue-400 transition"
                onClick={(e) => handleClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


