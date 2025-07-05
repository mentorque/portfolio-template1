
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["Python", "SQL", "R", "Git", "Jupyter", "Power BI"]
    },
    {
      title: "Data Science & AI/ML",
      skills: ["Data Mining", "Graph Algorithms", "Fraud Detection", "Clustering", "Anomaly Detection", "Supervised & Unsupervised Learning"]
    },
    {
      title: "Analytics & Engineering",
      skills: ["Exploratory Data Analysis (EDA)", "Forecasting", "Risk Modeling", "Pattern Recognition", "Real-Time Dashboards"]
    },
    {
      title: "Systems & Platforms",
      skills: ["Scalable Data Pipelines", "Database Optimization", "Financial Crimes Intelligence", "Automation Tools"]
    },
    {
      title: "Core Competencies",
      skills: ["Communication Skills", "Attention to Detail", "Problem-Solving", "Fast Learner", "Research Mindset", "Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive technical skills in fraud detection, AI/ML, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
