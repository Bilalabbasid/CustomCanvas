import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  CpuChipIcon, 
  CloudIcon, 
  Cog6ToothIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'Custom CMS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android Apps', 'React Native', 'Flutter Development', 'App Store Deployment'],
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent systems powered by machine learning, natural language processing, and computer vision.',
      features: ['LLM Integration', 'Computer Vision', 'NLP Solutions', 'Predictive Analytics'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: <CloudIcon className="h-8 w-8" />,
      title: 'DevOps & Cloud Deployments',
      description: 'Scalable cloud infrastructure and deployment pipelines for reliable, high-performance applications.',
      features: ['AWS & GCP', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring & Scaling'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Cog6ToothIcon className="h-8 w-8" />,
      title: 'Business Process Automation',
      description: 'Streamline operations with intelligent automation solutions and workflow optimization.',
      features: ['Workflow Automation', 'API Integrations', 'Data Processing', 'Custom Tools'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8" />,
      title: 'Data Dashboards & Analytics',
      description: 'Real-time dashboards and reconciliation tools that provide actionable business insights.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Reporting Tools'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-32 bg-white dark:bg-black overflow-hidden"
    >
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <span className="text-[20vw] font-display font-bold whitespace-nowrap text-gray-900 dark:text-white">
          SERVICES
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-tight">
            WHAT WE
            <br />
            <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 bg-clip-text text-transparent">
              DELIVER
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
            End-to-end solutions across the full software development lifecycle
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-gray-900 dark:hover:border-white transition-all duration-500 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="relative text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="relative space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className={`w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-8 right-8 text-gray-400 dark:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
