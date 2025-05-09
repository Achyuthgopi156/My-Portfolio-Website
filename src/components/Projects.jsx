import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Crowdfunding Platform",
      description: "Scalable backend for a crowdfunding platform supporting 5,000+ concurrent users with sub-100ms response times.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Docker"],
      github: "#",
      demo: ""
    },
    {
      title: "Thyroid-Detection-using-ML-Models",
      description: " Built an intelligent diagnostic system using Random Forest, SVM, and Gradient Boosting to classify thyroid conditions from medical data with 98% accuracy.",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      github: "https://github.com/Achyuthgopi156/Thyroid-Detection-using-ML-Models",
      demo: ""
    },
    {
      title: "SciAssist_AI",
      description: "SCIAssist AI – An AI-powered research assistant that extracts answers from scientific PDFs",
      tech: ["LLaMA 3.2", "RAG", "FAISS", "Streamlit"],
      github: "https://github.com/Achyuthgopi156/SciAssist_AI",
      demo: "https://sciassistai-hl43wrrkuj62llbdcvhqev.streamlit.app/"
    },
    {
      title: "SyncAnalytica: Real-Time Data Analysis & Visualization Tool",
      description: "Designed and developed a real-time data analytics dashboard that allows users to upload CSV files, visualize data, generate insights using AI, and download reports.",
      tech: ["Pandas", "Python", "Plotly", "Streamlit"],
      github: "https://github.com/Achyuthgopi156/SyncAnalytica_AI",
      demo: "https://syncanalyticaai-ppxdqvphnphyggte5qwxvd.streamlit.app/"
    },
    {
      title: "Pneumonia Detection Model using X-ray Images",
      description: "This project focuses on detecting pneumonia using X-ray images, employing Convolutional Neural Networks (CNNs) and transfer learning.",
      tech: ["Python", "TensorFlow ", "ResNet50", "Matplotlib", "NumPy"],
      github: "https://github.com/Achyuthgopi156/PneumoniaDetection",
      demo: ""
    },
    {
      title: "Optical Communication Virtual Lab",
      description: "Developed a Web-Based Optical Communication Virtual Lab for IIT Roorkee, enabling real-time simulation and visualization of fiber optic systems.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Achyuthgopi156/Virtual-Labs",
      demo: "https://oc-iitr.vlabs.ac.in/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-4">
          My <span className="text-teal">Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my notable projects showcasing my expertise in full-stack development and system architecture.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-blue mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-teal-100 text-teal-800 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-navy-blue hover:text-teal"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-navy-blue hover:text-teal"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;