import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { staticProjects } from '../data/staticProjects';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  _id?: string;
  title?: string;
  slug?: string;
  description?: string;
  category?: string;
  type?: 'public' | 'private';
  url?: string;
  tech?: string[];
  responsibilities?: string[];
  featured?: boolean;
  client?: { industry?: string };
  image?: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web' },
    { key: 'backend', label: 'Backend' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'mobile', label: 'Mobile' },
  ];

  const allProjects = staticProjects as Project[];
  const projects = filter === 'all' 
    ? allProjects.filter(p => p.featured).slice(0, 6)
    : allProjects.filter(p => p.category === filter).slice(0, 6);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-32 bg-gray-50 dark:bg-gray-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-32">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {filters.map((filterItem) => (
              <button
                key={filterItem.key}
                onClick={() => setFilter(filterItem.key)}
                className={`px-8 py-4 rounded-full font-mono text-sm uppercase tracking-wider transition-all ${
                  filter === filterItem.key
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white'
                }`}
              >
                {filterItem.label}
              </button>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-gray-900 dark:text-white leading-tight"
          >
            SELECTED
            <br />
            <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-electric-500 bg-clip-text text-transparent">
              WORK
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                  )}

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.url && (
                        <ArrowTopRightOnSquareIcon className="h-6 w-6 text-gray-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {(project.tech || []).slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono uppercase tracking-wider border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all hover:scale-105"
          >
            <span>Discuss Your Project</span>
            <ArrowTopRightOnSquareIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
