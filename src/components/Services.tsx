import React from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  CloudIcon, 
  Cog6ToothIcon,
  ChartBarIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'Custom CMS'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Deployment'],
      gradient: 'from-rose-500 to-pink-500',
      bgGradient: 'from-rose-500/10 to-pink-500/10',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems powered by machine learning, natural language processing, and computer vision.',
      features: ['LLM Integration', 'Computer Vision', 'NLP Solutions', 'Predictive Analytics'],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/10 to-violet-500/10',
      iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500'
    },
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: 'DevOps & Cloud Deployments',
      description: 'Scalable cloud infrastructure and deployment pipelines for reliable, high-performance applications.',
      features: ['AWS & GCP', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring & Scaling'],
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500'
    },
    {
      icon: <Cog6ToothIcon className="h-8 w-8" />,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions and workflow optimization.',
      features: ['Workflow Automation', 'API Integrations', 'Data Processing', 'Custom Tools'],
      gradient: 'from-amber-500 to-orange-500',
      bgGradient: 'from-amber-500/10 to-orange-500/10',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Data Dashboards & Analytics',
      description: 'Real-time dashboards and reconciliation tools that provide actionable business insights.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Reporting Tools'],
      gradient: 'from-indigo-500 to-blue-500',
      bgGradient: 'from-indigo-500/10 to-blue-500/10',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full mb-6"
          >
            <SparklesIcon className="h-5 w-5 text-accent-500" />
            <span className="text-accent-600 dark:text-accent-400 text-sm font-medium">Our Capabilities</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software engineering services tailored to meet your unique business requirements and technical challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
            >
              {/* Decorative background element */}
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <motion.div 
                className={`relative w-16 h-16 rounded-2xl ${service.iconBg} p-4 text-white mb-6 flex items-center justify-center shadow-lg`}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="relative text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="relative text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <ul className="relative space-y-2.5">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + featureIndex * 0.05 }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div 
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Ready to modernize your technology stack?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Let's architect a solution that fits your business
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all duration-300"
            >
              Request Proposal
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
