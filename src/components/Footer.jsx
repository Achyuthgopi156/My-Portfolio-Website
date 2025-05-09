import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoLogoMedium } from "react-icons/io5";
import { FaSlack } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Gopi Raju Rajolu</h2>
            <p className="text-blue-200">Software Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/Achyuthgopi156" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal text-xl"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/gopi-raju-rajolu-aa1a17346" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal text-xl"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://medium.com/@gopirajunl.r" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal text-xl"
            >
              <IoLogoMedium />
            </a>
            <a 
              href="https://murphycharity.slack.com/team/U08802CV483" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-teal text-xl"
            >
              <FaSlack />
            </a>
            <a 
              href="mailto:gopiraju.rajolu@gmail.com" 
              className="text-white hover:text-teal text-xl"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-6 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Gopi Raju Rajolu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;