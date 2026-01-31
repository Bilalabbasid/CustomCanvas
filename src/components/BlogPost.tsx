import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

// Sample blog post data - later move to database or CMS
const blogPostsData: Record<string, any> = {
  'best-practices-react-performance': {
    title: 'Best Practices for React Performance Optimization',
    author: 'Code World Team',
    date: '2026-01-25',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Optimization'],
    content: `
      <h2>Introduction</h2>
      <p>React is a powerful library for building user interfaces, but as your application grows, you may notice performance issues. In this comprehensive guide, we'll explore the best practices for optimizing React applications.</p>
      
      <h2>1. Use React.memo for Component Memoization</h2>
      <p>React.memo is a higher-order component that memoizes your component, preventing unnecessary re-renders when props haven't changed.</p>
      <pre><code>const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});</code></pre>
      
      <h2>2. Implement useMemo and useCallback</h2>
      <p>These hooks help you avoid expensive calculations and function recreations on every render.</p>
      
      <h2>3. Code Splitting with React.lazy</h2>
      <p>Split your code into smaller chunks that can be loaded on demand, reducing initial bundle size.</p>
      
      <h2>4. Virtualize Long Lists</h2>
      <p>Use libraries like react-window or react-virtualized to render only visible items in long lists.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these optimization techniques, you can significantly improve your React application's performance and provide a better user experience.</p>
    `,
  },
  'ai-integration-modern-apps': {
    title: 'Integrating AI into Modern Web Applications',
    author: 'Code World Team',
    date: '2026-01-20',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Integration'],
    content: `
      <h2>The AI Revolution in Web Development</h2>
      <p>Artificial Intelligence is transforming how we build and interact with web applications. This guide will show you how to integrate AI capabilities into your projects.</p>
      
      <h2>Popular AI Integration Approaches</h2>
      <h3>1. OpenAI API</h3>
      <p>Leverage powerful models like GPT-4 for natural language processing, content generation, and intelligent chat features.</p>
      
      <h3>2. TensorFlow.js</h3>
      <p>Run machine learning models directly in the browser for image recognition, natural language processing, and more.</p>
      
      <h3>3. Cloud AI Services</h3>
      <p>Use services from AWS, Google Cloud, or Azure for speech recognition, translation, and computer vision.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Start with pre-trained models</li>
        <li>Implement proper error handling</li>
        <li>Consider privacy and data security</li>
        <li>Optimize for performance</li>
        <li>Monitor and improve accuracy over time</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI integration opens up endless possibilities for creating intelligent, user-friendly applications that stand out in today's competitive market.</p>
    `,
  },
  'cloud-architecture-scalability': {
    title: 'Building Scalable Cloud Architecture',
    author: 'Code World Team',
    date: '2026-01-15',
    readTime: '12 min read',
    category: 'Cloud & DevOps',
    tags: ['Cloud', 'Architecture', 'Scalability'],
    content: `
      <h2>Understanding Cloud Scalability</h2>
      <p>Building applications that scale efficiently is crucial for modern businesses. Let's explore the key principles of scalable cloud architecture.</p>
      
      <h2>Key Principles</h2>
      
      <h3>1. Horizontal Scaling</h3>
      <p>Add more instances of your application rather than increasing the size of a single instance.</p>
      
      <h3>2. Microservices Architecture</h3>
      <p>Break down your application into smaller, independent services that can scale individually.</p>
      
      <h3>3. Load Balancing</h3>
      <p>Distribute traffic across multiple servers to ensure optimal resource utilization.</p>
      
      <h3>4. Database Scaling</h3>
      <p>Implement read replicas, sharding, and caching strategies for database performance.</p>
      
      <h2>Cloud Provider Options</h2>
      <ul>
        <li><strong>AWS:</strong> Elastic Load Balancing, Auto Scaling, RDS</li>
        <li><strong>Google Cloud:</strong> Cloud Load Balancing, Compute Engine, Cloud SQL</li>
        <li><strong>Azure:</strong> Load Balancer, Virtual Machine Scale Sets, Azure SQL</li>
      </ul>
      
      <h2>Monitoring and Optimization</h2>
      <p>Use tools like CloudWatch, Datadog, or New Relic to monitor your infrastructure and identify bottlenecks.</p>
      
      <h2>Conclusion</h2>
      <p>Scalable architecture requires careful planning and implementation, but the investment pays off with improved performance and reliability.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view
    if (slug) {
      trackPageView(`/blog/${slug}`);
    }
    
    // Add structured data for SEO
    if (post) {
      // Update page title and meta description
      document.title = `${post.title} | Code World Blog`;
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.content.substring(0, 160).replace(/<[^>]*>/g, '') + '...');
      
      // Add structured data (JSON-LD)
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': post.title,
        'datePublished': post.date,
        'dateModified': post.date,
        'author': {
          '@type': 'Organization',
          'name': post.author
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Code World',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://codeworld.dev/logo.png'
          }
        },
        'description': post.content.substring(0, 200).replace(/<[^>]*>/g, ''),
        'keywords': post.tags.join(', '),
        'articleSection': post.category,
        'wordCount': post.content.split(' ').length
      });
      document.head.appendChild(script);
      
      return () => {
        // Cleanup
        document.title = 'Code World | Enterprise Software Development & Digital Solutions';
        const scripts = document.head.querySelectorAll('script[type="application/ld+json"]');
        scripts.forEach(s => {
          if (s.textContent?.includes('BlogPosting')) {
            document.head.removeChild(s);
          }
        });
      };
    }
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Post Not Found
          </h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 text-sm font-semibold bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </motion.header>

        {/* Featured Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-12 rounded-xl overflow-hidden"
        >
          <div className="h-96 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <span className="text-9xl">📝</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
