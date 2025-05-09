import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Volunteer Software Developer",
      company: "Murphy Charitable Foundation Uganda",
      duration: "Jan 2024 - Present",
      location: "OH, US",
      responsibilities: [
        "Engineered scalable backend for crowdfunding platform supporting 5,000+ concurrent users",
        "Designed 15+ RESTful APIs with Swagger/OpenAPI and JWT authentication",
        "Created automated AWS/Azure provisioning system reducing setup time from days to hours",
        "Implemented real-time notification system increasing user engagement by 22%",
        "Built CI/CD pipelines enabling zero-downtime deployments"
      ]
    },
    {
      role: "Graduate Software Engineer",
      company: "Client: Xerox",
      duration: "Jun 2022 - Dec 2022",
      location: "NY, US",
      responsibilities: [
        "Developed 15+ RESTful microservices using Java and Spring Boot",
        "Architected event-driven systems with Kafka processing 10,000+ messages/sec",
        "Optimized data models achieving sub-5ms read performance",
        "Constructed CI/CD pipelines reducing deployment errors by 85%",
        "Mentored junior developers reducing onboarding time by 40%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Value Labs",
      duration: "Nov 2020 - Mar 2022",
      location: "TG, IN",
      responsibilities: [
        "Spearheaded end-to-end SDLC cutting development time by 20%",
        "Led Agile-driven development enhancing team productivity by 30%",
        "Developed microservices improving load balancing and security by 15%",
        "Optimized DevOps workflows reducing deployment errors by 20%",
        "Enhanced business logic processing accelerating operations by 20%"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Value Labs",
      duration: "May 2020 - Oct 2020",
      location: "TG, IN",
      responsibilities: [
        "Architected full-stack applications increasing responsiveness by 30%",
        "Designed RESTful microservices enhancing system security by 40%",
        "Implemented Redis caching decreasing API response times by 70%",
        "Configured CI/CD pipelines reducing deployment time by 65%",
        "Achieved 90% code coverage reducing production defects by 75%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">
          Work <span className="text-teal">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-teal transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center`}
            >
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0`}>
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <FaBriefcase className="text-teal mr-2" />
                    <h3 className="text-xl font-bold text-navy-blue">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">{exp.company}</h4>
                  <p className="text-gray-500 mb-4">
                    {exp.duration} | {exp.location}
                  </p>
                  {/* <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul> */}
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-teal border-4 border-white z-10 mx-auto">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              
              {/* Empty div for alignment */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;