import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 text-white px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="./assets/logo.png" 
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h4 className="ml-2 font-bold">Sourav.dev</h4>
        </div>

        {/* Menu Button for small devices */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={0} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-5 font-bold">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-2 space-y-2 font-bold">
          <li><a href="#home" className="block hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="block hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="block hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
