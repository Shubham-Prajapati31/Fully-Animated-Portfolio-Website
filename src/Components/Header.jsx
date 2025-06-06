"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons (install lucide-react if not already)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          My Portfolio
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-20">
          <a href="#about" className="text-xl hover:text-blue-400">About</a>
          <a href="#skills" className="text-xl hover:text-blue-400">Skills</a>
          <a href="#Projects" className="text-xl hover:text-blue-400">Projects</a>
          <a href="#contact" className="text-xl hover:text-blue-400">Contact</a>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-3 text-center bg-gray-800 p-4 rounded-md">
          <a href="#about" className="text-lg hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="text-lg hover:text-blue-400" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#Projects" className="text-lg hover:text-blue-400" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="text-lg hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
