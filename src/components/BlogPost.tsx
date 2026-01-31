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
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 60px 20px; margin: -20px -20px 40px -20px; border-radius: 12px; text-align: center;">
        <h1 style="color: white; font-size: 2.5em; margin: 0 0 20px 0;">🤖 Moltbot</h1>
        <p style="color: rgba(255,255,255,0.9); font-size: 1.3em; margin: 0;">Your Personal AI That Actually Gets Work Done</p>
      </div>

      <h2>Introduction: AI That Does More Than Talk</h2>
      <p>Artificial intelligence has evolved rapidly over the last few years, but most AI assistants still share the same limitation: <strong>they talk well, but they do very little</strong>. Moltbot changes that.</p>
      
      <p>Originally launched as Clawdbot, <strong>Moltbot is an open-source personal AI assistant designed to take real action</strong> instead of just responding to prompts. It runs locally on your machine, integrates with everyday tools, and behaves more like an intelligent coworker than a chatbot.</p>

      <div style="background: #f7fafc; padding: 30px; border-left: 4px solid #667eea; margin: 30px 0;">
        <h3 style="margin-top: 0;">💡 Key Insight</h3>
        <p style="margin-bottom: 0;"><em>"Stop chatting with AI. Start working with it."</em> — This is the philosophy behind Moltbot.</p>
      </div>

      <h2>What Makes Moltbot Different</h2>
      
      <p>Unlike cloud-based AI assistants, Moltbot operates directly on your system. This architectural decision provides several critical advantages:</p>

      <h3>🔒 Full Privacy and Data Control</h3>
      <p>Your data never leaves your machine. Every conversation, every file, every workflow stays completely under your control. No cloud storage, no third-party access, no privacy concerns.</p>

      <h3>⚡ Real System Integration</h3>
      <p>Instead of logging into another web interface, you interact with Moltbot through familiar messaging platforms. It can:</p>
      <ul>
        <li><strong>Execute tasks</strong> — Run scripts, manage files, automate workflows</li>
        <li><strong>Maintain long-term memory</strong> — Remember your preferences and past interactions</li>
        <li><strong>Integrate with tools</strong> — Connect with APIs, databases, and system utilities</li>
        <li><strong>Learn and adapt</strong> — Understand how you work and optimize accordingly</li>
      </ul>

      <h3>🧠 Persistent Context</h3>
      <p>Unlike traditional chatbots that reset after every conversation, Moltbot maintains context across sessions. Over time, it learns your patterns, preferences, and workflows, becoming increasingly effective.</p>

      <div style="background: #fff5f5; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <h4 style="color: #c53030; margin-top: 0;">⚠️ Important Note</h4>
        <p style="margin-bottom: 0;">Moltbot is powerful, but it's not designed for casual users. It requires thoughtful configuration and a basic understanding of automation and system permissions.</p>
      </div>

      <h2>Technical Architecture Overview</h2>
      
      <p>For those interested in the technical details, Moltbot consists of three primary layers:</p>

      <h3>1. Communication Layer</h3>
      <p>Handles incoming messages from chat platforms (Slack, Discord, Telegram, etc.) and routes them to the AI engine. This layer ensures seamless integration with your existing communication tools.</p>

      <h3>2. Reasoning Layer</h3>
      <p>Processes context, memory, and intent using configurable language models. You can swap models based on your needs — from local models for privacy to powerful cloud models for complex reasoning.</p>

      <h3>3. Execution Layer</h3>
      <p>Interfaces with the local system, automation scripts, APIs, and tools to perform actions. This is where Moltbot transforms understanding into execution.</p>

      <pre><code>// Example: Moltbot executing a file organization task
User: "Organize my downloads folder by file type"

Moltbot:
1. Scans downloads directory
2. Identifies file types (.pdf, .jpg, .zip, etc.)
3. Creates organized subdirectories
4. Moves files to appropriate folders
5. Reports: "Organized 47 files into 6 categories"
</code></pre>

      <h2>Why Moltbot Is Gaining Attention</h2>
      
      <p>The rapid rise of Moltbot highlights a growing demand for AI tools that are <strong>practical, private, and customizable</strong>. Here's why developers and power users are taking notice:</p>

      <h3>📊 The Shift Toward User-Controlled AI</h3>
      <p>Developers, founders, and technical teams are moving away from locked platforms and toward systems they can own, modify, and integrate deeply. Moltbot represents this shift from "AI as a service" to "AI as infrastructure."</p>

      <h3>🛠️ Real-World Use Cases</h3>
      <ul>
        <li><strong>Development Automation</strong> — Generate boilerplate code, run tests, deploy applications</li>
        <li><strong>System Administration</strong> — Monitor logs, manage servers, automate backups</li>
        <li><strong>Content Creation</strong> — Draft documents, generate reports, process data</li>
        <li><strong>Research & Analysis</strong> — Aggregate information, summarize findings, track trends</li>
        <li><strong>Personal Productivity</strong> — Schedule tasks, manage emails, organize files</li>
      </ul>

      <h3>🚀 Open Source and Extensible</h3>
      <p>Moltbot supports custom skills and integrations. Developers can add new capabilities by connecting scripts, APIs, or services. This makes it suitable for:</p>
      <ul>
        <li>Internal tooling and operations automation</li>
        <li>Experimental AI workflows</li>
        <li>Custom enterprise integrations</li>
        <li>Research and development projects</li>
      </ul>

      <h2>Security Considerations</h2>
      
      <p>Because Moltbot operates locally and can access sensitive resources, security is paramount:</p>

      <div style="background: #edf2f7; padding: 25px; border-radius: 8px; margin: 25px 0;">
        <h4 style="margin-top: 0;">🔐 Security Best Practices</h4>
        <ul style="margin-bottom: 0;">
          <li><strong>Scope permissions carefully</strong> — Grant only necessary access rights</li>
          <li><strong>Audit integrations regularly</strong> — Review what Moltbot can access</li>
          <li><strong>Use encryption for sensitive data</strong> — Protect credentials and secrets</li>
          <li><strong>Monitor execution logs</strong> — Track what actions are performed</li>
          <li><strong>Sandbox experimental features</strong> — Test new capabilities safely</li>
        </ul>
      </div>

      <h2>Is Moltbot Right for You?</h2>
      
      <p>Moltbot is ideal if you:</p>
      <ul>
        <li>✅ Value privacy and data ownership</li>
        <li>✅ Want AI that takes action, not just suggestions</li>
        <li>✅ Need deep integration with existing tools</li>
        <li>✅ Appreciate open-source and customizable solutions</li>
        <li>✅ Have technical knowledge to configure and secure it</li>
      </ul>

      <p>Moltbot may not be suitable if you:</p>
      <ul>
        <li>❌ Prefer plug-and-play solutions with no setup</li>
        <li>❌ Don't need system-level automation</li>
        <li>❌ Are uncomfortable with local AI agents</li>
        <li>❌ Want a managed, cloud-based service</li>
      </ul>

      <h2>How CodeWorld.dev Sees Moltbot</h2>
      
      <blockquote style="border-left: 4px solid #667eea; padding-left: 20px; margin: 30px 0; font-style: italic; color: #4a5568;">
        <p>At CodeWorld.dev, we believe AI should be practical, transparent, and owned by the people using it. Moltbot aligns with that belief.</p>
        
        <p>It represents a shift from AI as a service to AI as infrastructure. A tool you can build on, trust, and integrate deeply into real systems.</p>
        
        <p>Moltbot is not about hype. It's about capability. It shows what happens when AI moves closer to the user and further away from centralized control.</p>
      </blockquote>

      <h2>Getting Started with Moltbot</h2>
      
      <p>Ready to explore Moltbot? Here's how to begin:</p>

      <ol>
        <li><strong>Visit the GitHub repository</strong> — Review documentation and installation guides</li>
        <li><strong>Set up your environment</strong> — Install dependencies and configure settings</li>
        <li><strong>Choose your integrations</strong> — Connect messaging platforms and tools</li>
        <li><strong>Configure permissions</strong> — Define what Moltbot can access</li>
        <li><strong>Start small</strong> — Begin with simple tasks and expand gradually</li>
      </ol>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; margin: 40px -20px -20px -20px; border-radius: 12px; text-align: center;">
        <h3 style="color: white; margin-top: 0;">Ready to Build Your AI Agent?</h3>
        <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px;">Let CodeWorld.dev help you integrate AI solutions into your workflow.</p>
        <a href="/#contact" style="display: inline-block; background: white; color: #667eea; padding: 15px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; transition: transform 0.2s;">Get Started Today</a>
      </div>

      <h2>Conclusion: The Future of Personal AI</h2>
      
      <p>Moltbot represents the next step in personal AI. Not just conversation, but collaboration. Not just answers, but execution. As AI continues to mature, tools like Moltbot show what happens when intelligence meets ownership.</p>

      <p><strong>Key Takeaways:</strong></p>
      <ul>
        <li>🤖 Moltbot executes real tasks, not just conversations</li>
        <li>🔒 Runs locally for complete privacy and control</li>
        <li>🧠 Maintains long-term memory and context</li>
        <li>🛠️ Open-source and fully customizable</li>
        <li>⚡ Integrates with your existing tools and workflows</li>
      </ul>

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
