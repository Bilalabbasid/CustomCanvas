import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, CloudIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const technologies = [
    {
      category: 'Frontend & Mobile',
      icon: <CodeBracketIcon className="h-8 w-8" />,
      items: ['React', 'Next.js', 'React Native', 'TypeScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend & APIs',
      icon: <CpuChipIcon className="h-8 w-8" />,
      items: ['Node.js', 'Python', 'Go', 'GraphQL'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      category: 'AI & Machine Learning',
      icon: <ChartBarIcon className="h-8 w-8" />,
      items: ['LLMs', 'NLP', 'Computer Vision', 'TensorFlow'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: <CloudIcon className="h-8 w-8" />,
      items: ['AWS', 'GCP', 'Kubernetes', 'Docker'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Code World</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We help clients build cutting-edge digital products using modern technologies and AI-driven solutions. 
            Our expertise spans full-stack development, machine learning, cloud infrastructure, and real-time analytics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tech.color} p-4 text-white mb-4 mx-auto flex items-center justify-center`}>
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.items.map((item) => (
                  <li key={item} className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Real-time dashboards and analytics that drive business decisions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From handling billions of records per day to building intelligent systems that learn and adapt, 
              we create solutions that scale with your business and deliver measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;