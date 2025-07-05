
import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Data Scientist & AI/ML Expert
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Energetic and motivated data scientist with 4+ years of experience applying AI, machine learning, and data mining techniques to detect financial crimes and enhance fraud prevention systems. Skilled in Python, SQL, and algorithm development, with a strong focus on scalability, reliability, and accuracy in fast-paced environments. Proven record of delivering actionable insights through exploratory data analysis and clean, structured datasets.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-3" size={20} />
                <span className="text-gray-700">0892032570</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-3" size={20} />
                <span className="text-gray-700">v.pattar215@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-3" size={20} />
                <span className="text-gray-700">Dublin, Ireland</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="text-blue-600 mr-3" size={20} />
                <a href="https://www.linkedin.com/in/vijay215/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold text-gray-800 mb-6">Quick Facts</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Location:</span>
                <span className="text-gray-600">Dublin, Ireland</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Education:</span>
                <span className="text-gray-600">M.Sc. Business Analytics</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Experience:</span>
                <span className="text-gray-600">4+ Years</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Visa Status:</span>
                <span className="text-gray-600">Stamp 1G</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Specialization:</span>
                <span className="text-gray-600">Fraud Detection & AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
