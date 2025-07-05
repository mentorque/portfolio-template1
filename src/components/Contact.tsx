
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on fraud detection projects or discuss AI/ML opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300">0892032570</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">v.pattar215@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-300">D01W8W2, Dublin, Ireland</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/vijay215/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    Connect with me
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <ExternalLink size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Tableau Portfolio</h4>
                  <a 
                    href="https://public.tableau.com/app/profile/vijayakumar.pattar/vizzes" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    View my dashboards
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © 2024 Vijayakumar Pattar. Built with passion for data science and fraud detection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
