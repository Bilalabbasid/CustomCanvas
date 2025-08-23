import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Code World
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We build smart software for a smarter future. Specializing in scalable, AI-powered, 
              and data-driven solutions for startups and enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:abbasi.bilal2000@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/bilal-abbasid2000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors duration-200">Web Development</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors duration-200">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors duration-200">AI & ML</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors duration-200">DevOps & Cloud</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors duration-200">Data Analytics</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-indigo-400 transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors duration-200">Get Proposal</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} Code World. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;