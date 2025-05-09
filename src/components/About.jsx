import React from 'react';
import { FaJava, FaReact, FaAws } from 'react-icons/fa';
import profileImage from '../assets/123.JPG';
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiDocker, 
  SiApachekafka,
  SiTensorflow
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: "Java/Spring Boot", icon: <FaJava className="text-3xl" />, level: "Expert" },
    { name: "Microservices", icon: <SiSpringboot className="text-3xl" />, level: "Expert" },
    { name: "Cloud (AWS/Azure)", icon: <FaAws className="text-3xl" />, level: "Advanced" },
    { name: "React/Node.js", icon: <FaReact className="text-3xl" />, level: "Advanced" },
    { name: "Kafka/RabbitMQ", icon: <SiApachekafka className="text-3xl" />, level: "Advanced" },
    { name: "PostgreSQL/MongoDB", icon: <SiPostgresql className="text-3xl" />, level: "Expert" },
    { name: "Docker/K8s", icon: <SiDocker className="text-3xl" />, level: "Advanced" },
    { name: "AI/LLM Tools", icon: <SiTensorflow className="text-3xl" />, level: "Intermediate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-12">
          About <span className="text-teal">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <img 
              src={profileImage}
              alt="Gopi Raju Rajolu" 
              className="w-64 h-64 object-cover rounded-full border-4 border-teal shadow-lg"
              style={{
                width: '399px',
                height: '700px',
                maxWidth: 'none'
                // display: 'block'
              }}
              loading="eager" 
            />
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold text-navy-blue mb-4">
              Software Developer | Cloud Specialist
            </h3>
            <p className="text-gray-600 mb-6">
            I'm a full-stack developer who enjoys turning ideas into clean, efficient, and meaningful software. I recently completed my Master’s in Computer Science at Wright State University, and since then, I’ve been diving deep into building web apps, exploring cloud technologies, and collaborating on projects that make a difference.
            </p>
            
            <p className="text-gray-600 mb-8">
            Whether it’s crafting APIs, building intuitive user experiences, or learning something new in tech—I’m always up for a challenge. Outside of code, you’ll probably find me exploring new tools, helping nonprofits with tech, or just geeking out over cool ideas.

            <b> Let’s build something great together. </b>


            </p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-navy-blue mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:shadow-md transition">
                    <div className="text-teal mb-2">{skill.icon}</div>
                    <span className="font-medium text-navy-blue text-center">{skill.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://docs.google.com/document/d/1VSkTVdKYmO90stLq7W0E9janIa1AI4CH/edit?usp=sharing&ouid=107969038972162690638&rtpof=true&sd=true" 
                download 
                className="border-2 border-navy-blue text-navy-blue px-6 py-2 rounded-lg font-medium hover:bg-navy-blue hover:text-white transition"
              >
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="bg-teal text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-600 transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;