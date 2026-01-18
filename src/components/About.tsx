import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, CloudIcon, ChartBarIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const technologies = [
    {
      category: 'Frontend & Mobile',
      icon: <CodeBracketIcon className="h-8 w-8" />,
      items: ['React', 'Next.js', 'React Native', 'TypeScript'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      category: 'Backend & APIs',
      icon: <CpuChipIcon className="h-8 w-8" />,
      items: ['Node.js', 'Python', 'Go', 'GraphQL'],
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      category: 'AI & Machine Learning',
      icon: <ChartBarIcon className="h-8 w-8" />,
      items: ['LLMs', 'NLP', 'Computer Vision', 'TensorFlow'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      category: 'Cloud & DevOps',
      icon: <CloudIcon className="h-8 w-8" />,
      items: ['AWS', 'GCP', 'Kubernetes', 'Docker'],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/10'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6"
          >
            <RocketLaunchIcon className="h-5 w-5 text-primary-500" />
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">Your Technology Partner</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            About <span className="gradient-text">Code World</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We partner with forward-thinking organizations to architect, develop, and deploy mission-critical software systems. 
            From digital transformation initiatives to custom enterprise solutions, we deliver technology that drives competitive advantage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-gradient-to-br ${tech.bgGradient} rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
            >
              {/* Decorative element */}
              <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${tech.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
              
              <motion.div 
                className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} p-4 text-white mb-4 mx-auto flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                {tech.icon}
              </motion.div>
              
              <h3 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {tech.category}
              </h3>
              
              <ul className="relative space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.gradient} rounded-full mr-2`} />
                    {item}
                  </motion.li>
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
          className="mt-16"
        >
          <motion.div 
            className="relative bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-electric-500/10 rounded-3xl p-8 md:p-12 border border-primary-200/50 dark:border-primary-700/50 overflow-hidden"
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-500/20 to-electric-500/20 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <SparklesIcon className="h-12 w-12 text-primary-500" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Building software that{' '}
                <span className="gradient-text">powers your business growth</span>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                Our solutions process millions of transactions, serve global user bases, and integrate seamlessly with your existing infrastructure. 
                We build systems designed for reliability, performance, and long-term maintainability.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {['Enterprise-Grade Security', 'High Availability', '24/7 Support', 'Agile Methodology'].map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
