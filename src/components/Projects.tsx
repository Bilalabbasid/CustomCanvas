import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, ServerIcon, GlobeAltIcon, SparklesIcon, CodeBracketIcon, CpuChipIcon, CircleStackIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { staticProjects } from '../data/staticProjects';
import { Link } from 'react-router-dom';

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
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All', fullLabel: 'All Projects', icon: <SparklesIcon className="h-4 w-4" /> },
    { key: 'web', label: 'Web', fullLabel: 'Web Development', icon: <CodeBracketIcon className="h-4 w-4" /> },
    { key: 'backend', label: 'Backend', fullLabel: 'Backend & APIs', icon: <CpuChipIcon className="h-4 w-4" /> },
    { key: 'ai', label: 'AI/ML', fullLabel: 'AI & ML', icon: <SparklesIcon className="h-4 w-4" /> },
    { key: 'data', label: 'Data', fullLabel: 'Data & Analytics', icon: <CircleStackIcon className="h-4 w-4" /> },
    { key: 'mobile', label: 'Mobile', fullLabel: 'Mobile Apps', icon: <DevicePhoneMobileIcon className="h-4 w-4" /> },
  ];

  // Use static projects directly
  const allProjects = staticProjects as Project[];
  const projects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-500/10 dark:bg-primary-500/20 rounded-full mb-4 sm:mb-6"
          >
            <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500" />
            <span className="text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium">Our Portfolio</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2">
            Explore our portfolio of enterprise solutions across multiple industries and technology domains
          </p>

          {/* Filter buttons - Horizontal scroll on mobile */}
          <div className="relative -mx-4 sm:mx-0">
            <div className="flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible px-4 sm:px-0 pb-2 sm:pb-0 scrollbar-hide">
              {filters.map((filterItem) => (
                <motion.button
                  key={filterItem.key}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(filterItem.key)}
                  className={`flex-shrink-0 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    filter === filterItem.key
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500 hover:shadow-md'
                  }`}
                >
                  {filterItem.icon}
                  {/* Show short label on mobile, full label on larger screens */}
                  <span className="sm:hidden">{filterItem.label}</span>
                  <span className="hidden sm:inline">{filterItem.fullLabel}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id || `project-${index}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.2 }
                }}
                className="group animated-border-card relative rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700/80 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/5 transition-all duration-300"
              >
                <Link to={`/projects/${project.slug}`} className="block h-full">
                  {/* Card Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Top row: Category + Type + Featured */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 sm:mb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/40">
                          {(project.category || 'web').toUpperCase()}
                        </span>
                        <span className={`flex items-center gap-1 text-[10px] sm:text-xs font-medium ${project.type === 'public' ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}`}>
                          {project.type === 'private' ? (
                            <><ServerIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> <span className="hidden xs:inline">Private</span></>
                          ) : (
                            <><GlobeAltIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> <span className="hidden xs:inline">Public</span></>
                          )}
                        </span>
                      </div>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] sm:text-xs font-semibold rounded">
                          <SparklesIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          <span className="hidden xs:inline">Featured</span>
                        </span>
                      )}
                    </div>

                    {/* Title Row */}
                    <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <h3 className="flex-1 text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      {project.url && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, '_blank', 'noopener,noreferrer');
                          }}
                          className="flex-shrink-0 p-1.5 sm:p-2 rounded-lg text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/40 transition-colors"
                          aria-label="Open project in new tab"
                        >
                          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-3 sm:mb-4">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-3 sm:mb-4">
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1.5 sm:mb-2">
                        Key Highlights
                      </p>
                      <ul className="space-y-1 sm:space-y-1.5">
                        {(project.responsibilities || []).slice(0, 3).map((resp, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="line-clamp-1">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {(project.tech || []).slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 sm:px-2 py-0.5 bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 text-[10px] sm:text-xs rounded font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {(project.tech || []).length > 4 && (
                        <span className="px-1.5 sm:px-2 py-0.5 bg-gray-100 dark:bg-gray-700/60 text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs rounded font-medium">
                          +{(project.tech || []).length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                    {project.client?.industry && (
                      <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 font-medium truncate max-w-[100px] sm:max-w-none">
                        {project.client.industry}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16"
          >
            <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
            Ready to discuss your enterprise software needs?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300"
          >
            <span>Start Your Project</span>
            <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
