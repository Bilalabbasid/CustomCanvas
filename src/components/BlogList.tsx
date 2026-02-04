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
    id: '18',
    slug: 'nvidia-ai-chip-competition-analysis',
    title: 'Nvidia vs The Competition: The Battle for AI Chip Supremacy',
    excerpt: 'As AI demand explodes, Nvidia faces fierce competition from AMD, Intel, and custom chip makers. Explore the technology, strategies, and market dynamics shaping the future of AI hardware.',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '14 min read',
    category: 'AI & Machine Learning',
    tags: ['Nvidia', 'AI Hardware', 'Competition', 'GPU', 'Technology'],
  },
  {
    id: '17',
    slug: 'openai-xai-anthropic-ai-race',
    title: 'OpenAI vs xAI vs Anthropic: The Race to Define AI Future',
    excerpt: 'The AI landscape is dominated by fierce competition between OpenAI, Elon Musk xAI, Anthropic, and other giants. Compare their approaches, technologies, and visions for artificial intelligence.',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '15 min read',
    category: 'AI & Machine Learning',
    tags: ['OpenAI', 'xAI', 'Anthropic', 'AI Competition', 'ChatGPT'],
  },
  {
    id: '16',
    slug: 'nasa-genesis-mission-space-exploration',
    title: 'NASA Genesis Mission: Pioneering the Future of Space Exploration',
    excerpt: 'NASA Genesis mission represents a bold leap in space exploration, studying solar wind and cosmic origins. Discover the technology, challenges, and implications for humanity understanding of the universe.',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '12 min read',
    category: 'Technology & Innovation',
    tags: ['NASA', 'Space', 'Genesis Mission', 'Science', 'Exploration'],
  },
  {
    id: '15',
    slug: 'ai-market-trillion-dollar-future-2030',
    title: 'AI Market to Reach Trillions by 2030: How Your Business Can Capitalize',
    excerpt: 'The AI market is projected to reach $2 trillion by 2030. Learn how this explosive growth creates opportunities for businesses of all sizes and how CodeWorld.dev can help you leverage AI for competitive advantage.',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '13 min read',
    category: 'AI & Machine Learning',
    tags: ['AI Market', 'Business Growth', 'Investment', 'Future Trends', '2030'],
  },
  {
    id: '14',
    slug: 'ai-automation-business-transformation',
    title: 'AI Automation: Transforming Business Operations in 2026',
    excerpt: 'Discover how artificial intelligence and automation are revolutionizing business operations, from customer service to data analysis, and learn practical implementation strategies.',
    author: 'Code World Team',
    date: '2026-02-05',
    readTime: '13 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Automation', 'Business', 'Digital Transformation', 'Efficiency'],
  },
  {
    id: '13',
    slug: 'website-business-growth-catalyst',
    title: 'How a Professional Website Can Scale Your Business',
    excerpt: 'Your website is more than a digital business card. Learn how a well designed website becomes a powerful growth engine that attracts customers, builds credibility, and drives revenue.',
    author: 'Code World Team',
    date: '2026-02-04',
    readTime: '11 min read',
    category: 'Web Development',
    tags: ['Website', 'Business Growth', 'Digital Marketing', 'E-commerce', 'SEO'],
  },
  {
    id: '12',
    slug: 'moltbot-data-privacy-concerns',
    title: 'Moltbot and Data Privacy: What You Need to Know',
    excerpt: 'While Moltbot offers powerful local AI capabilities, understanding data privacy implications is crucial. Explore the security considerations and best practices for protecting sensitive information.',
    author: 'Code World Team',
    date: '2026-02-03',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['Moltbot', 'Privacy', 'Security', 'AI', 'Data Protection'],
  },
  {
    id: '11',
    slug: 'moltbot-integration-security-risks',
    title: 'Security Risks of Moltbot Third-Party Integrations',
    excerpt: 'Moltbot power lies in its integrations, but each connection introduces potential security vulnerabilities. Learn how to secure your Moltbot setup against common integration threats.',
    author: 'Code World Team',
    date: '2026-02-03',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    tags: ['Moltbot', 'Security', 'Integrations', 'API Security', 'Vulnerabilities'],
  },
  {
    id: '10',
    slug: 'moltbot-security-risks-local-ai',
    title: 'Understanding Security Risks in Moltbot Local AI Deployments',
    excerpt: 'Running AI locally with Moltbot provides privacy benefits, but it also introduces unique security challenges. Discover the risks and how to mitigate them effectively.',
    author: 'Code World Team',
    date: '2026-02-03',
    readTime: '11 min read',
    category: 'AI & Machine Learning',
    tags: ['Moltbot', 'Security', 'AI', 'Local Deployment', 'Cybersecurity'],
  },
  {
    id: '9',
    slug: 'web3-blockchain-enterprise-integration',
    title: 'Web3 and Blockchain Integration in Enterprise Applications',
    excerpt: 'Practical approaches to integrating blockchain technology and Web3 capabilities into existing enterprise systems for transparency, security, and decentralized workflows.',
    author: 'Code World Team',
    date: '2026-02-02',
    readTime: '14 min read',
    category: 'Blockchain & Web3',
    tags: ['Web3', 'Blockchain', 'Enterprise', 'Smart Contracts', 'Decentralization'],
  },
  {
    id: '8',
    slug: 'devops-automation-ci-cd-best-practices',
    title: 'DevOps Automation: CI/CD Pipelines That Actually Work',
    excerpt: 'Build reliable, fast, and secure CI/CD pipelines using modern DevOps tools. Learn from real world implementations and avoid common pitfalls.',
    author: 'Code World Team',
    date: '2026-02-01',
    readTime: '11 min read',
    category: 'Cloud & DevOps',
    tags: ['DevOps', 'CI/CD', 'Automation', 'Docker', 'Kubernetes'],
  },
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

const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Cloud & DevOps', 'Blockchain & Web3', 'Mobile Development', 'Architecture'];

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
              {/* Blog Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.slug === 'web3-blockchain-enterprise-integration'
                    ? 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'devops-automation-ci-cd-best-practices'
                    ? 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'moltbot-personal-ai-assistant' 
                    ? 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'best-practices-react-performance'
                    ? 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'ai-integration-modern-apps'
                    ? 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'cloud-architecture-scalability'
                    ? 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'mobile-app-development-trends'
                    ? 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop'
                    : post.slug === 'typescript-best-practices'
                    ? 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1200&auto=format&fit=crop'
                    : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop'
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
