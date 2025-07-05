
import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Analyst",
      company: "Merck KGaA",
      location: "Bangalore, India",
      period: "October 2020 – August 2023",
      achievements: [
        "Engineered machine learning algorithms to identify complex fraud patterns across 2M transactional records, reducing false negatives by 35% and improving detection scalability by 40% across global risk systems.",
        "Performed data mining and exploratory data analysis (EDA) on over 500K+ financial records monthly, revealing fraud signals previously undetected by legacy systems.",
        "Built and deployed real-time fraud dashboards using Python and SQL, increasing fraud event response time by 60% and improving data accuracy by 25% through automated alerts and visualisations.",
        "Designed robust preprocessing pipelines that cleaned and standardised unstructured log data with >95% consistency, boosting model performance and reliability by 30%.",
        "Collaborated with fraud operations and compliance teams to deploy fraud detection strategies that improved financial risk control efficiency by 25%, reducing monetary losses by an estimated €1M annually."
      ]
    },
    {
      title: "Software Engineer",
      company: "Cyient",
      location: "Bangalore, India",
      period: "September 2018 – May 2020",
      achievements: [
        "Designed unsupervised ML tools to detect early-stage fraud signals, resulting in a 40% increase in anomaly identification rate during simulation testing across 50+ aviation datasets.",
        "Developed and maintained structured datasets for ML modelling, decreasing data preparation and validation time by 50%, and accelerating project delivery timelines.",
        "Automated SQL-based fraud signal extraction workflows, cutting analysis time from hours to minutes and improving accuracy in fraud detection logic by 35%.",
        "Collaborated with QA and engineering teams to codify fraud pattern logic into simulation environments, enabling real-time test validations and reducing test effort by 20%.",
        "Optimised existing database structures and pipelines, improving overall data reliability and system uptime to >99.5%, critical for analytics environments in regulated domains."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional experience in fraud detection, AI/ML, and data science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center mb-4 md:mb-0 flex-shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                
                {/* Content */}
                <div className="md:ml-8 bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <Calendar size={16} className="mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <h4 className="text-xl font-semibold text-blue-700 mb-2 sm:mb-0 sm:mr-6">
                      {exp.company}
                    </h4>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={16} className="mr-2" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
