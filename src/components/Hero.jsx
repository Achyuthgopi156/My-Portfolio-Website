import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoLogoMedium } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaSlack } from "react-icons/fa6";
import profileImage from '/Users/achyuth/Desktop/portfolio/src/assets/GopiRaju.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            Hi, I'm <span className="text-teal">Gopi Raju Rajolu</span> 👋
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-navy-blue mb-6">
            Software Engineer | Full-Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
          What drives me? Crafting systems that are not only efficient but also built with care. I enjoy digging into performance issues, simplifying complexity, and making tech feel seamless.

          If you're into clean code, good coffee, and solving real-world problems—we’ll get along just fine.
          </p>
          <div className="flex space-x-4 mb-8">
            <a href="#projects" className="bg-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-navy-blue text-navy-blue px-6 py-3 rounded-lg font-medium hover:bg-navy-blue hover:text-white transition">
              Contact Me
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Achyuthgopi156" target="_blank" rel="noopener noreferrer" className="text-navy-blue hover:text-teal">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com/in/gopi-raju-rajolu-aa1a17346" target="_blank" rel="noopener noreferrer" className="text-navy-blue hover:text-teal">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://medium.com/@gopirajunl.r" target="_blank" rel="noopener noreferrer" className="text-navy-blue hover:text-teal">
              <IoLogoMedium className="text-2xl" />
            </a>
            <a href="https://murphycharity.slack.com/team/U08802CV483" target="_blank" rel="noopener noreferrer" className="text-navy-blue hover:text-teal">
              <FaSlack className="text-2xl" />
            </a>
            <a href="mailto:gopiraju.rajolu@gmail.com" className="text-navy-blue hover:text-teal">
              <HiOutlineMail className="text-2xl" />
            </a>
            <a href="tel:+1(937)516-0245" className="text-navy-blue hover:text-teal">
              <BsTelephoneFill className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-teal rounded-full opacity-10 absolute -z-10 top-6 left-6"></div>
            <img 
              src={profileImage}
              alt="Gopi Raju Rajolu" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
