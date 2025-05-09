import React from 'react';
import { FaAward, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Demonstrated expertise in developing and maintaining AWS-based applications"
    },
    {
      title: "Accenture Nordics - Developer Job Simulation",
      issuer: "Accenture",
      date: "2024",
      description: "Simulated real-world tasks including front-end development, data transformation, and solution design, gaining insight into Accenture’s problem-solving approach and developer workflow"
    },
    {
      title: "Testing using Selenium",
      issuer: "SkillSoft Issued by HCL",
      date: "2022",
      description: "Gained hands-on experience in automating web applications, writing test scripts, and performing functional testing using Selenium WebDriver"
    },
    {
      title: "Best Project Award",
      issuer: "IIT Roorkee",
      date: "2021",
      description: "Awarded Best Project and recognized as a Silver Developer for designing and delivering a web-based Optical Communication Virtual Lab for IIT Roorkee, enabling interactive simulations and real-time data visualization"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-4">
          Achievements & <span className="text-teal">Certifications</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Recognitions and certifications that validate my technical expertise and professional growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-md transition">
              <div className="bg-teal-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                {index % 2 === 0 ? (
                  <FaAward className="text-teal text-2xl" />
                ) : (
                  <FaCertificate className="text-teal text-2xl" />
                )}
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-2">{achievement.title}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Issued by:</span> {achievement.issuer}
              </p>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">Date:</span> {achievement.date}
              </p>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;