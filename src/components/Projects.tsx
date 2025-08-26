import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, ServerIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useProjects } from '../hooks/useProjects';
import { staticProjects } from '../data/staticProjects';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const { data, loading, error } = useProjects({ 
    category: filter === 'all' ? undefined : filter,
    limit: 50 
  });


  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'ai', label: 'AI & ML' },
    { key: 'data', label: 'Data & Analytics' },
  ];

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const dynamicProjects = data?.projects || [];

  // Merge logic: prefer static entries when duplicates exist (by slug), then include dynamic.
  type ProjectType = {
    _id?: string;
    slug?: string;
    title?: string;
    description?: string;
    responsibilities?: string[];
    tech?: string[];
    category?: string;
    featured?: boolean;
    url?: string;
    type?: string;
  };

  const mergedBySlug: Record<string, ProjectType> = {};

  // Add static first (gives priority), then dynamic if missing
  ([...staticProjects, ...dynamicProjects] as ProjectType[]).forEach((p) => {
    const key = (p as ProjectType).slug || (p as ProjectType)._id || JSON.stringify(p);
    if (!mergedBySlug[key]) mergedBySlug[key] = p as ProjectType;
  });

  // Convert back to array
  const allMergedProjects = Object.values(mergedBySlug) as ProjectType[];

  // Sort: featured projects that have a real url should appear at the top
  // Sort: projects with a real url first, then featured ones, then the rest
  allMergedProjects.sort((a, b) => {
    const aScore = (a.url ? 2 : 0) + (a.featured ? 1 : 0);
    const bScore = (b.url ? 2 : 0) + (b.featured ? 1 : 0);
    return bScore - aScore;
  });

  const projects = filter === 'all'
    ? allMergedProjects
    : allMergedProjects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing our expertise across web development, AI/ML, backend systems, and data analytics
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterItem) => (
              <motion.button
                key={filterItem.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterItem.key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  filter === filterItem.key
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {filterItem.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id || `project-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {project.type === 'private' ? (
                        <ServerIcon className="h-5 w-5 text-gray-400" />
                      ) : (
                        <GlobeAltIcon className="h-5 w-5 text-green-500" />
                      )}
                      {project.url && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.url, '_blank', 'noopener,noreferrer');
                          }}
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                        >
                          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {(project.responsibilities || []).map((resp: string, idx: number) => (
                        <li key={idx} className="flex items-start text-xs text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tech || []).map((tech: string) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!project.url && (
                    <div className="flex items-center text-xs text-gray-400">
                      <ServerIcon className="h-4 w-4 mr-1" />
                      Private deployment
                    </div>
                  )}
                </Link>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/projects/${project.slug}`}
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                    >
                      View Details →
                    </Link>
                    {project.featured && (
                      <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-lg font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;