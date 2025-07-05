
import React from 'react';
import { ExternalLink, Database, TrendingUp, Shield, BarChart3, Monitor, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "AI-Powered Fraud Risk Analytics System",
      icon: <Shield className="text-red-600" size={32} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop",
      description: "Built a robust fraud detection system leveraging AI/ML algorithms, anomaly detection, and exploratory data analysis to monitor financial transaction data and proactively identify risk patterns.",
      details: [
        "Utilized Python, SQL, and statistical techniques to generate fraud KPIs and detect anomalies in real-time",
        "Deployed using automated data pipelines, enabling 35% improvement in fraud precision metrics",
        "Reduced false positives by 28% while enhancing customer experience through optimized decline strategies"
      ],
      tags: ["Python", "SQL", "AI/ML", "Fraud Detection", "Real-time Analytics"]
    },
    {
      name: "LLM-Powered Claims Triage System",
      icon: <Database className="text-blue-600" size={32} />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop",
      description: "Developed an LLM-powered insurance claims triage and fraud detection system using advanced NLP and machine learning techniques.",
      details: [
        "Applied RAG architecture to process structured and unstructured data with 85% fraud detection accuracy",
        "Reduced manual review processes by 60% through automated triage",
        "Utilized Python, MySQL, Pandas, Scikit-learn, LangChain, and AWS SageMaker"
      ],
      tags: ["LLM", "NLP", "Python", "AWS SageMaker", "Insurance", "RAG"]
    },
    {
      name: "Flight Fare Prediction System",
      icon: <TrendingUp className="text-green-600" size={32} />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=600&fit=crop",
      description: "Analyzed and visualized flight datasets to establish pricing strategies for a new airline venture, Galway Air.",
      details: [
        "Used Python and Seaborn to predict ticket costs and identify seasonal trends",
        "Built recommendation system to optimize pricing strategies",
        "Provided data-driven insights for informed business decisions"
      ],
      tags: ["Python", "Seaborn", "Machine Learning", "Pricing Strategy", "Data Visualization"]
    },
    {
      name: "ICC Cricket World Cup Dashboard",
      icon: <BarChart3 className="text-orange-600" size={32} />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=600&fit=crop",
      description: "Interactive Tableau dashboard presenting ICC Cricket World Cup 2021 performance metrics across all participating teams.",
      details: [
        "Displays detailed batting and bowling statistics including runs, strike rates, and economy rates",
        "Interactive pie charts showing each player's contribution with match and innings filters",
        "Demonstrates advanced data aggregation and visualization capabilities"
      ],
      tags: ["Tableau", "Data Visualization", "Sports Analytics", "Interactive Dashboard"],
      link: "https://public.tableau.com/app/profile/vijayakumar.pattar/viz/ICCCricketWorldcup2021/CricketWorldcup2021"
    },
    {
      name: "Netflix Data Exploration Dashboard",
      icon: <Monitor className="text-purple-600" size={32} />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=600&fit=crop",
      description: "Comprehensive Tableau dashboard analyzing Netflix content data with global distribution insights and genre trends.",
      details: [
        "Interactive world map showing titles by country and top 10 genres analysis",
        "Trends visualization for movies and TV shows over time with ratings breakdown",
        "Advanced data storytelling demonstrating content release patterns and metadata insights"
      ],
      tags: ["Tableau", "Data Analysis", "Content Analytics", "Global Distribution"],
      link: "https://public.tableau.com/app/profile/vijayakumar.pattar/viz/NETFLIX_16756833609420/NETFLIX"
    },
    {
      name: "Automated CAPTCHA Recognition System",
      icon: <Globe className="text-indigo-600" size={32} />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=600&fit=crop",
      description: "Developed an automated CAPTCHA recognition solution combining OCR and NLP techniques for form automation.",
      details: [
        "Preprocesses distorted text images and extracts characters using Tesseract OCR",
        "Applies NLP-based error correction to improve character recognition accuracy",
        "Streamlines form submissions through intelligent automation"
      ],
      tags: ["Python", "OCR", "NLP", "Computer Vision", "Automation", "Tesseract"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Key projects showcasing expertise in fraud detection, AI/ML, and data analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {project.link ? (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                  >
                    View Dashboard
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                ) : (
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                    View Details
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
