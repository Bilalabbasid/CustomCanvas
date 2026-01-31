import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

// Sample blog post data - later move to database or CMS
const blogPostsData: Record<string, any> = {
  'moltbot-personal-ai-assistant': {
    title: 'Moltbot: A Personal AI Assistant That Goes Beyond Chat',
    author: 'Code World Team',
    date: '2026-01-31',
    readTime: '12 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Automation', 'Open Source', 'Moltbot', 'Privacy'],
    content: `
      <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" alt="AI Assistant" style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 30px;" />

      <h2>AI That Does More Than Talk</h2>
      <p>Artificial intelligence has evolved rapidly, but most AI assistants still share the same limitation: they talk well, but they do very little. Moltbot changes that.</p>
      
      <p>Originally launched as Clawdbot, Moltbot is an open source personal AI assistant designed to take real action instead of just responding to prompts. It runs locally on your machine, integrates with everyday tools, and behaves more like an intelligent coworker than a chatbot.</p>

      <blockquote style="border-left: 4px solid #667eea; padding-left: 20px; margin: 30px 0; font-style: italic; color: #4a5568;">
        <p>Stop chatting with AI. Start working with it. This is the philosophy behind Moltbot.</p>
      </blockquote>

      <h2>What Makes Moltbot Different</h2>
      
      <p>Unlike cloud based AI assistants, Moltbot operates directly on your system. This architectural decision provides several critical advantages.</p>

      <h3>Full Privacy and Data Control</h3>
      <p>Your data never leaves your machine. Every conversation, every file, every workflow stays completely under your control. No cloud storage, no third party access, no privacy concerns.</p>

      <h3>Real System Integration</h3>
      <p>Instead of logging into another web interface, you interact with Moltbot through familiar messaging platforms. It can execute tasks like running scripts, managing files, and automating workflows. It maintains long term memory to remember your preferences and past interactions. It integrates with APIs, databases, and system utilities. Over time, it learns and adapts to understand how you work.</p>

      <h3>Persistent Context</h3>
      <p>Unlike traditional chatbots that reset after every conversation, Moltbot maintains context across sessions. Over time, it learns your patterns, preferences, and workflows, becoming increasingly effective.</p>

      <p><strong>Important Note:</strong> Moltbot is powerful, but it's not designed for casual users. It requires thoughtful configuration and a basic understanding of automation and system permissions.</p>

      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop" alt="System Architecture" style="width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin: 30px 0;" />

      <h2>Technical Architecture</h2>
      
      <p>For those interested in the technical details, Moltbot consists of three primary layers.</p>

      <h3>Communication Layer</h3>
      <p>Handles incoming messages from chat platforms like Slack, Discord, and Telegram, then routes them to the AI engine. This layer ensures seamless integration with your existing communication tools.</p>

      <h3>Reasoning Layer</h3>
      <p>Processes context, memory, and intent using configurable language models. You can swap models based on your needs, from local models for privacy to powerful cloud models for complex reasoning.</p>

      <h3>Execution Layer</h3>
      <p>Interfaces with the local system, automation scripts, APIs, and tools to perform actions. This is where Moltbot transforms understanding into execution.</p>

      <h2>Why Developers Are Paying Attention</h2>
      
      <p>The rapid rise of Moltbot highlights a growing demand for AI tools that are practical, private, and customizable.</p>

      <h3>The Shift Toward User Controlled AI</h3>
      <p>Developers, founders, and technical teams are moving away from locked platforms and toward systems they can own, modify, and integrate deeply. Moltbot represents this shift from AI as a service to AI as infrastructure.</p>

      <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" alt="Development Workflow" style="width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin: 30px 0;" />

      <h3>Real World Use Cases</h3>
      <p><strong>Development Automation:</strong> Generate boilerplate code, run tests, deploy applications.</p>
      <p><strong>System Administration:</strong> Monitor logs, manage servers, automate backups.</p>
      <p><strong>Content Creation:</strong> Draft documents, generate reports, process data.</p>
      <p><strong>Research and Analysis:</strong> Aggregate information, summarize findings, track trends.</p>
      <p><strong>Personal Productivity:</strong> Schedule tasks, manage emails, organize files.</p>

      <h3>Open Source and Extensible</h3>
      <p>Moltbot supports custom skills and integrations. Developers can add new capabilities by connecting scripts, APIs, or services. This makes it suitable for internal tooling, operations automation, experimental AI workflows,
        custom enterprise integrations, and research and development projects.</p>

      <h2>Security Considerations</h2>
      
      <p>Because Moltbot operates locally and can access sensitive resources, security is paramount. When configuring Moltbot, scope permissions carefully and grant only necessary access rights. Audit integrations regularly to review what Moltbot can access. Use encryption for sensitive data to protect credentials and secrets. Monitor execution logs to track what actions are performed, and sandbox experimental features to test new capabilities safely.</p>

      <h2>Is Moltbot Right for You?</h2>
      
      <p>Moltbot is ideal if you value privacy and data ownership, want AI that takes action rather than just suggestions, need deep integration with existing tools, appreciate open source and customizable solutions, and have technical knowledge to configure and secure it.</p>

      <p>Moltbot may not be suitable if you prefer plug and play solutions with no setup, don't need system level automation, are uncomfortable with local AI agents, or want a managed cloud based service.</p>

      <h2>How We See It at CodeWorld.dev</h2>
      
      <blockquote style="border-left: 4px solid #667eea; padding-left: 20px; margin: 30px 0; font-style: italic; color: #4a5568;">
        <p>At CodeWorld.dev, we believe AI should be practical, transparent, and owned by the people using it. Moltbot aligns with that belief.</p>
        
        <p>It represents a shift from AI as a service to AI as infrastructure. A tool you can build on, trust, and integrate deeply into real systems.</p>
        
        <p>Moltbot is not about hype. It's about capability. It shows what happens when AI moves closer to the user and further away from centralized control.</p>
      </blockquote>

      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Team Collaboration" style="width: 100%; height: 350px; object-fit: cover; border-radius: 12px; margin: 30px 0;" />

      <h2>Getting Started</h2>
      
      <p>Ready to explore Moltbot? Start by visiting the GitHub repository to review documentation and installation guides. Set up your environment by installing dependencies and configuring settings. Choose your integrations to connect messaging platforms and tools. Configure permissions to define what Moltbot can access. Start small with simple tasks and expand gradually.</p>

      <h2>The Future of Personal AI</h2>
      
      <p>Moltbot represents the next step in personal AI. Not just conversation, but collaboration. Not just answers, but execution. As AI continues to mature, tools like Moltbot show what happens when intelligence meets ownership.</p>

      <p>Moltbot executes real tasks instead of just conversations. It runs locally for complete privacy and control. It maintains long term memory and context. It's open source and fully customizable. And it integrates with your existing tools and workflows.</p>

      <p>Whether you're a developer looking to automate workflows, a founder building internal tools, or a power user seeking efficiency, Moltbot offers a compelling alternative to traditional AI assistants.</p>

      <p><em>Want to explore AI integration for your business? <a href="/#contact">Contact CodeWorld.dev</a> to discuss custom AI solutions tailored to your needs.</em></p>
    `,
  },
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
