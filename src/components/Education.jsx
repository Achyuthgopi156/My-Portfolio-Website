import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Masters in Computer Science and Engineering",
      institution: "Wright State University",
      duration: "Jan 2023 - Dec 2024",
      gpa: "3.5 GPA",
      details: [
        "Specialization in Software Engineering and Distributed Systems",
        "Relevant coursework: Advanced Algorithms, Cloud Computing, Machine Learning"
      ]
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Seshadri Rao Gudlavalleru Engineering College",
      duration: "June 2018 - May 2022",
      gpa: "3.76 GPA",
      details: [
        "Minor in Computer Science",
        "Thesis on 'Designing the Virtual Labs'"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">
          My <span className="text-teal">Education</span>
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaGraduationCap className="text-teal text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold text-gray-700">{edu.institution}</h4>
                  <p className="text-gray-500 mb-3">
                    {edu.duration} | {edu.gpa}
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;