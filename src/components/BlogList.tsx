import { motion } from 'framer-motion';
import { Calendar, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

// Extended blog posts list
const allBlogPosts: BlogPost[] = [
  {
    id: '7',
    slug: 'moltbot-personal-ai-assistant',
    title: 'Moltbot: A Personal AI Assistant That Goes Beyond Chat',
    excerpt: 'Discover Moltbot, an open-source AI assistant that executes real tasks, automates workflows, and runs locally on your machine with full privacy and control.',
    author: 'Code World Team',
    date: '2026-01-31',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Automation', 'Open Source', 'Moltbot', 'Privacy'],
  },
  {
    id: '1',
    slug: 'best-practices-react-performance',
    title: 'Best Practices for React Performance Optimization',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience. We cover memoization, lazy loading, and more.',
    author: 'Code World Team',
    date: '2026-01-25',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Optimization'],
  },
  {
    id: '2',
    slug: 'ai-integration-modern-apps',
    title: 'Integrating AI into Modern Web Applications',
    excerpt: 'Discover how to leverage AI and machine learning in your web applications to provide intelligent features.',
    author: 'Code World Team',
    date: '2026-01-20',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Integration'],
  },
  {
    id: '3',
    slug: 'cloud-architecture-scalability',
    title: 'Building Scalable Cloud Architecture',
    excerpt: 'Essential strategies for designing cloud infrastructure that scales with your business needs.',
    author: 'Code World Team',
    date: '2026-01-15',
    readTime: '12 min read',
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'Architecture', 'Scalability'],
  },
  {
    id: '4',
    slug: 'mobile-app-development-trends',
    title: 'Mobile App Development Trends in 2026',
    excerpt: 'Stay ahead of the curve with the latest mobile app development trends and technologies.',
    author: 'Code World Team',
    date: '2026-01-10',
    readTime: '7 min read',
    category: 'Mobile Development',
    tags: ['Mobile', 'Trends', 'iOS', 'Android'],
  },
  {
    id: '5',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Enterprise Applications',
    excerpt: 'Master TypeScript patterns and practices for building robust enterprise-grade applications.',
    author: 'Code World Team',
    date: '2026-01-05',
    readTime: '15 min read',
    category: 'Web Development',
    tags: ['TypeScript', 'Best Practices', 'Enterprise'],
  },
  {
    id: '6',
    slug: 'microservices-architecture-guide',
    title: 'Complete Guide to Microservices Architecture',
    excerpt: 'Learn how to design and implement microservices architecture for scalable applications.',
    author: 'Code World Team',
    date: '2026-01-01',
    readTime: '20 min read',
    category: 'Architecture',
    tags: ['Microservices', 'Architecture', 'Backend'],
  },
];

const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Cloud & DevOps', 'Mobile Development', 'Architecture'];

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on software development
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>

              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No articles found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
