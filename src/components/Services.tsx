import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  CloudIcon, 
  Cog6ToothIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'Custom CMS'],
      color: 'bg-electric-500'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Deployment'],
      color: 'bg-accent-600'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems powered by machine learning, natural language processing, and computer vision.',
      features: ['LLM Integration', 'Computer Vision', 'NLP Solutions', 'Predictive Analytics'],
      color: 'bg-primary-500'
    },
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: 'DevOps & Cloud Deployments',
      description: 'Scalable cloud infrastructure and deployment pipelines for reliable, high-performance applications.',
      features: ['AWS & GCP', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring & Scaling'],
      color: 'bg-electric-600'
    },
    {
      icon: <Cog6ToothIcon className="h-8 w-8" />,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions and workflow optimization.',
      features: ['Workflow Automation', 'API Integrations', 'Data Processing', 'Custom Tools'],
      color: 'bg-accent-500'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Data Dashboards & Analytics',
      description: 'Real-time dashboards and reconciliation tools that provide actionable business insights.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Reporting Tools'],
      color: 'bg-primary-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-accent-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive software solutions that drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 group"
            >
              <motion.div 
                className={`w-16 h-16 rounded-xl ${service.color} p-4 text-white mb-6 flex items-center justify-center shadow-lg`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.15,
                  y: -5
                }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;