
import React from 'react';
import { GraduationCap, BookOpen, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "University of Galway",
      degree: "M.Sc. in Business Analytics",
      grade: "2:1",
      period: "September 2023 – June 2024",
      coursework: [
        "Advanced Data Analytics",
        "Machine Learning",
        "Business Intelligence",
        "Statistical Modeling",
        "Data Mining",
        "Risk Analytics"
      ]
    },
    {
      institution: "Visvesvaraya Technological University",
      degree: "Bachelor's degree in Computer Science",
      grade: "1:1",
      period: "August 2014 – June 2018",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
        "Programming Languages"
      ]
    }
  ];

  const achievements = [
    "Certificate of Innovation – Awarded at Merck KGaA for developing the 'ABC-VED-FNS Matrix Analysis', led a 5-member team to complete the project in a year, 2 months ahead of schedule, resulting in a 25% reduction in inventory costs and a 15% improvement in stock availability.",
    "Team Impact Award – Earned at Merck KGaA for driving a project that boosted market competitiveness by 10% and amplified revenues by 5%."
  ];

  const certifications = [
    "Machine Learning A-Z: AI, Python & R + ChatGPT Prize (2023)",
    "Lean Six Sigma (December 2022)",
    "Cybersecurity and Ethical Hacking (May 2017)",
    "Android Application Development (October 2016)"
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education & Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic background and professional recognition in data science and analytics
          </p>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center mb-4 md:mb-0 flex-shrink-0">
                  <GraduationCap className="text-white" size={24} />
                </div>
                
                {/* Content */}
                <div className="md:ml-8 bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h5 className="text-xl font-semibold text-blue-700 mb-2 sm:mb-0">
                      {edu.institution}
                    </h5>
                    <div className="flex items-center text-green-600 font-semibold">
                      <Award size={16} className="mr-2" />
                      Grade: {edu.grade}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <BookOpen size={18} className="text-gray-600 mr-2" />
                      <span className="font-semibold text-gray-800">Key Coursework:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-700">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Achievements</h3>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <Award className="text-green-600 mr-4 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
