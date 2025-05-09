import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-blue mb-4">
          Get In <span className="text-teal">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-bold text-navy-blue mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-teal text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Email</h4>
                    <a href="mailto:gopiraju.rajolu@gmail.com" className="text-gray-600 hover:text-teal">
                      gopiraju.rajolu@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaPhone className="text-teal text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-700">Phone</h4>
                    <a href="tel:+19375160245" className="text-gray-600 hover:text-teal">
                      +1 (937) 516-0245
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaLinkedin className="text-teal text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-700">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/gopi-r-aa1a17346/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal"
                    >
                      linkedin.com/in/gopi-raju
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaGithub className="text-teal text-xl mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-700">GitHub</h4>
                    <a 
                      href="https://github.com/Achyuthgopi156" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-teal"
                    >
                      github.com/Achyuthgopi156
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-700 mb-3">Availability</h4>
                <p className="text-gray-600">
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs my expertise, don't hesitate to contact me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;