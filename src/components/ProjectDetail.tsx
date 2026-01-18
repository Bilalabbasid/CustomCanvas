import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeftIcon, 
  ArrowTopRightOnSquareIcon, 
  ServerIcon, 
  GlobeAltIcon,
  CalendarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { staticProjects } from '../data/staticProjects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = staticProjects.find(p => p.slug === slug);

  // Go back to previous page (preserves scroll position)
  const handleGoBack = () => {
    navigate(-1);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button 
            onClick={handleGoBack}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  {project.type === 'private' ? (
                    <ServerIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <GlobeAltIcon className="h-5 w-5 text-green-500" />
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {project.type === 'private' ? 'Private Deployment' : 'Public Project'}
                  </span>
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-sm rounded-full font-medium">
                    Featured Project
                  </span>
                )}
              </div>
            </div>
            
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 hover:scale-105 transition-all duration-300 shadow-lg flex-shrink-0"
              >
                <span>Visit Project</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5 ml-2" />
              </a>
            )}
          </div>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Long Description */}
            {project.longDescription && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>
            )}

            {/* Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.images.map((image, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                      {image.caption && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {image.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Project Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Category</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {project.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <ChartBarIcon className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Status</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                      {project.status || 'Completed'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Client Info */}
            {project.client && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Client Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Company</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.client.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Industry</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.client.industry}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Company Size</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {project.client.size}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project Metrics */}
            {project.metrics && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Project Impact
                </h3>
                <div className="space-y-3">
                  {project.metrics.users && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Users</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {project.metrics.users.toLocaleString()}
                      </p>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Performance</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {project.metrics.performance}
                      </p>
                    </div>
                  )}
                  {project.metrics.impact && (
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Business Impact</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {project.metrics.impact}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-primary-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 text-center border-2 border-primary-200 dark:border-primary-700 shadow-xl"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in a Similar Project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's discuss how we can help bring your vision to life with cutting-edge technology and expert development.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
