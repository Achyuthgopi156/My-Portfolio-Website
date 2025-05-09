import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center">
                <img
                    src="/assets/logo.png"  // Now using public path
                    alt="Gopi Raju Rajolu Logo"
                    className="h-10 w-auto"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/logo-fallback.png";
                    }}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-navy-blue hover:text-teal transition">About</a>
              <a href="#services" className="text-navy-blue hover:text-teal transition">Services</a>
              <a href="#projects" className="text-navy-blue hover:text-teal transition">Projects</a>
              <a href="#experience" className="text-navy-blue hover:text-teal transition">Experience</a>
              <a href="#education" className="text-navy-blue hover:text-teal transition">Education</a>
              <a href="#achievements" className="text-navy-blue hover:text-teal transition">Achievements</a>
              <a href="#contact" className="text-navy-blue hover:text-teal transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-navy-blue focus:outline-none"
                  aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden pb-4">
                <div className="flex flex-col space-y-3">
                  <a href="#about" className="text-navy-blue hover:text-teal px-4 py-2">About</a>
                  <a href="#services" className="text-navy-blue hover:text-teal px-4 py-2">Services</a>
                  <a href="#projects" className="text-navy-blue hover:text-teal px-4 py-2">Projects</a>
                  <a href="#experience" className="text-navy-blue hover:text-teal px-4 py-2">Experience</a>
                  <a href="#education" className="text-navy-blue hover:text-teal px-4 py-2">Education</a>
                  <a href="#achievements" className="text-navy-blue hover:text-teal px-4 py-2">Achievements</a>
                  <a href="#contact" className="text-navy-blue hover:text-teal px-4 py-2">Contact</a>
                  <div className="flex space-x-4 pt-2 px-4">
                    <a href="https://github.com/Achyuthgopi156" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-navy-blue hover:text-teal text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/gopi-r-aa1a17346/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-navy-blue hover:text-teal text-xl" />
                    </a>
                    <a href="mailto:gopiraju.rajolu@gmail.com">
                      <FaEnvelope className="text-navy-blue hover:text-teal text-xl" />
                    </a>
                  </div>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;