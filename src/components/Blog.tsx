import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  tags: string[];
}

// Sample blog posts - later move to database or CMS
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'best-practices-react-performance',
    title: 'Best Practices for React Performance Optimization',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
    content: '',
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
    excerpt: 'Discover how to leverage AI and machine learning in your web applications.',
    content: '',
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
    excerpt: 'Essential strategies for designing cloud infrastructure that scales with your business.',
    content: '',
    author: 'Code World Team',
    date: '2026-01-15',
    readTime: '12 min read',
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'Architecture', 'Scalability'],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends in software development, AI, and digital transformation
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta information */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
