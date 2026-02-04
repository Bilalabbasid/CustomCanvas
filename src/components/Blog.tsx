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
    id: '18',
    slug: 'nvidia-ai-chip-competition-analysis',
    title: 'Nvidia vs The Competition: The Battle for AI Chip Supremacy',
    excerpt: 'As AI demand explodes, Nvidia faces fierce competition. Explore the battle for AI hardware dominance.',
    content: '',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '14 min read',
    category: 'AI & Machine Learning',
    tags: ['Nvidia', 'AI Hardware', 'Competition', 'GPU'],
  },
  {
    id: '17',
    slug: 'openai-xai-anthropic-ai-race',
    title: 'OpenAI vs xAI vs Anthropic: The Race to Define AI Future',
    excerpt: 'Compare the fierce competition between OpenAI, xAI, Anthropic, and other AI giants shaping the future.',
    content: '',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '15 min read',
    category: 'AI & Machine Learning',
    tags: ['OpenAI', 'xAI', 'Anthropic', 'AI Competition'],
  },
  {
    id: '16',
    slug: 'nasa-genesis-mission-space-exploration',
    title: 'NASA Genesis Mission: Pioneering the Future of Space Exploration',
    excerpt: 'Discover NASA Genesis mission bold leap in space exploration and cosmic origins research.',
    content: '',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '12 min read',
    category: 'Technology & Innovation',
    tags: ['NASA', 'Space', 'Genesis Mission', 'Science'],
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
              {/* Blog Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.slug === 'nvidia-ai-chip-competition-analysis'
                    ? 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'openai-xai-anthropic-ai-race'
                    ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'nasa-genesis-mission-space-exploration'
                    ? 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'ai-market-trillion-dollar-future-2030'
                    ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'ai-automation-business-transformation'
                    ? 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'website-business-growth-catalyst'
                    ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'moltbot-data-privacy-concerns'
                    ? 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'moltbot-integration-security-risks'
                    ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'moltbot-security-risks-local-ai'
                    ? 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'web3-blockchain-enterprise-integration'
                    ? 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'devops-automation-ci-cd-best-practices'
                    ? 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'moltbot-personal-ai-assistant' 
                    ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'
                  }
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
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
