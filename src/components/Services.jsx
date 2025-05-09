import React, { useState } from 'react';
import { FiCode, FiCloud, FiDollarSign, FiLayers } from 'react-icons/fi';

const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const services = [
    {
      title: "Full-Stack Development",
      icon: <FiCode className="text-3xl" />,
      description: "From concept to deployment, I build responsive web applications using cutting-edge technologies.",
      backContent: [
        "React/Next.js frontends",
        "Node.js & Spring Boot backends",
        "REST & GraphQL APIs",
        "Database architecture"
      ],
      color: "bg-teal-100"
    },
    {
      title: "Cloud Solutions",
      icon: <FiCloud className="text-3xl" />,
      description: "Scalable cloud infrastructure tailored to your business needs.",
      backContent: [
        "AWS/Azure deployment",
        "Serverless architecture",
        "CI/CD pipelines",
        "Container orchestration"
      ],
      color: "bg-blue-100"
    },
    {
      title: "Flexible Engagement",
      icon: <FiDollarSign className="text-3xl" />,
      description: "Work with me on terms that suit your project.",
      backContent: [
        "Pay-after-delivery option",
        "Milestone-based billing",
        "Dedicated support hours",
        "Code quality guarantee"
      ],
      color: "bg-purple-100"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-blue mb-4">How I Can Help</h2>
          <div className="w-20 h-1 bg-teal mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I deliver tailored solutions with transparent processes and flexible engagement models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative h-96 perspective-1000 cursor-pointer ${service.color} rounded-xl p-1`}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
                  <div className="text-teal mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-center text-navy-blue mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                  <button className="mt-6 text-sm font-semibold text-teal hover:underline">
                    Learn more →
                  </button>
                </div>
                
                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden bg-white rotate-y-180 p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-navy-blue mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.backContent.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-teal rounded-full mt-2 mr-3"></span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <span className="text-xs text-gray-400">Click to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Value Proposition */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border-l-4 border-teal">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
              <FiLayers className="text-5xl text-teal" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-navy-blue mb-3">Risk-Free Engagement</h3>
              <p className="text-gray-600 mb-4">
                For qualifying projects, I offer a <span className="font-semibold text-teal">pay-after-delivery</span> model 
                where you only pay when you're completely satisfied with the results.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded mr-2">✓</span>
                  <span className="text-gray-700">15-day quality guarantee</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded mr-2">✓</span>
                  <span className="text-gray-700">Transparent progress tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;