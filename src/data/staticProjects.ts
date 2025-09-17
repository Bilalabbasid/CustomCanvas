const rawStaticProjects = [
  // WEB DEVELOPMENT PROJECTS
  {
    _id: '1',
    title: 'Falaya',
    slug: 'falaya',
    description: 'Real Estate Marketplace platform handling everything from listings to offers and digital paperwork.',
    longDescription: 'Falaya is a comprehensive real estate marketplace that revolutionizes how properties are bought and sold. The platform handles the entire real estate transaction lifecycle, from initial property listings to final digital paperwork completion.',
    responsibilities: ['Led Web/Mobile team', 'Fullstack dev (frontend/backend)', 'AWS deployments'],
    url: 'https://falaya.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
    featured: true,
    client: {
      name: 'Falaya Inc.',
      industry: 'Real Estate',
      size: 'Startup'
    },
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    _id: '2',
    title: 'IntellicV - AI Resume Assistant',
    slug: 'intellicv-ai-assistant',
    description: 'GPT-powered AI resume assistant that helps users update their resumes naturally through conversational interface.',
    longDescription: 'IntellicV is an intelligent resume assistant powered by GPT that allows users to update their resumes through natural conversation. Users can simply tell the AI what they want to change, such as updating job titles, adding experiences, or modifying skills, and the AI handles the formatting and optimization automatically.',
    responsibilities: ['GPT API integration', 'Natural language processing', 'Resume parsing and generation', 'User authentication system'],
    url: 'https://intellicv-ai-assistant-1.onrender.com/',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'GPT API', 'Express', 'MongoDB', 'Authentication', 'NLP', 'PDF Generation'],
    featured: true,
    client: {
      name: 'IntellicV Technologies',
      industry: 'AI/HR Tech',
      size: 'Startup'
    },
    createdAt: '2024-01-05T00:00:00.000Z',
    updatedAt: '2024-01-05T00:00:00.000Z'
  },
  {
    _id: '3',
    title: 'LastChance Ticket - Event Booking Platform',
    slug: 'lastchance-ticket-booking',
    description: 'Comprehensive event ticket booking platform with real-time inventory, payment processing, and event management.',
    longDescription: 'LastChance Ticket is a full-featured event booking platform that handles ticket sales, event management, real-time inventory tracking, secure payment processing, and customer management. The platform supports multiple event types and provides comprehensive analytics for event organizers.',
    responsibilities: ['Full-stack development', 'Payment gateway integration', 'Real-time inventory management', 'Event management system'],
    url: 'https://www.lastchanceticket.com/',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Real-time', 'Payment Processing', 'Event Management'],
    featured: true,
    client: {
      name: 'LastChance Events',
      industry: 'Event Management',
      size: 'Mid-size'
    },
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z'
  },
  {
    _id: '4',
    title: 'Calorie Tracker - Nutrition Monitoring App',
    slug: 'calorie-tracker-app',
    description: 'Smart calorie counting and nutrition tracking application with food database and health analytics.',
    longDescription: 'A comprehensive calorie tracking application that helps users monitor their daily nutrition intake, track calories, analyze eating patterns, and achieve health goals. Features include extensive food database, barcode scanning, meal planning, and detailed nutritional analytics.',
    responsibilities: ['Frontend development', 'Nutrition database integration', 'Health analytics dashboard', 'User experience optimization'],
    url: 'https://5b0534f1.calorie-tracker-2vp.pages.dev/',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'JavaScript', 'Nutrition APIs', 'Charts.js', 'Local Storage', 'PWA', 'Health Analytics'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Health & Fitness',
      size: 'Startup'
    },
    createdAt: '2024-01-12T00:00:00.000Z',
    updatedAt: '2024-01-12T00:00:00.000Z'
  },
  {
    _id: '7',
    title: 'EduPortal - Learning Management System',
    slug: 'eduportal-lms',
  description: 'Private LMS deployment customized for a university, offering secure course delivery, grading, and campus integrations.',
  longDescription: 'EduPortal is configured as a private, university-deployed learning management system. It provides secure access controls, campus SSO integration, private hosting, and tailored analytics for university administrators and instructors.',
  responsibilities: ['Private university deployment', 'SSO & campus integrations', 'Customized admin dashboards', 'On-prem / VPC hosting'],
  // No public url for private university deployment
  category: 'web',
  type: 'private' as const,
    tech: ['React', 'Next.js', 'TypeScript', 'WebRTC', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TensorFlow.js'],
    featured: true,
    client: {
      name: 'EduTech Innovations',
      industry: 'Education',
      size: 'Enterprise'
    },
    createdAt: '2024-02-15T00:00:00.000Z',
    updatedAt: '2024-02-15T00:00:00.000Z'
  },
  {
    _id: '8',
    title: 'HealthConnect - Telemedicine Platform',
  slug: 'healthconnect-telemedicine',
  description: 'HIPAA-compliant telemedicine mobile app offering video consultations, messaging, and appointment management.',
  longDescription: 'HealthConnect is a HIPAA-focused mobile application designed for patients to book and conduct secure video consultations, manage prescriptions, and communicate with providers. The app targets mobile-first care delivery and integrates with backend EHR systems where required.',
  responsibilities: ['Mobile app development', 'HIPAA compliance', 'Secure video & messaging', 'Prescription and appointment flows'],
  // Keep a listing url if available, otherwise can be omitted
  url: 'https://healthconnect-platform.com',
  category: 'mobile',
  type: 'public' as const,
  tech: ['React Native', 'TypeScript', 'WebRTC', 'Node.js', 'Twilio', 'FHIR', 'Stripe'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      size: 'Enterprise'
    },
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z'
  },

  // BACKEND PROJECTS
  {
    _id: '9',
    title: 'Atrios',
    slug: 'atrios',
    description: 'Cloud-based network security platform with DNS filtering, DDoS protection, and traffic analytics.',
    longDescription: 'Atrios is an enterprise-grade network security platform that provides comprehensive protection through DNS filtering, DDoS mitigation, and advanced traffic analytics.',
    responsibilities: ['Backend team lead', 'DNSDist + KnotDNS setup', 'Analytics via ClickHouse'],
    url: 'https://atrios.io',
    category: 'backend',
    type: 'public' as const,
    tech: ['Go', 'ClickHouse', 'DNS', 'Security'],
    featured: true,
    client: {
      name: 'Atrios Security',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    },
    createdAt: '2024-03-15T00:00:00.000Z',
    updatedAt: '2024-03-15T00:00:00.000Z'
  },
  {
    _id: '10',
    title: 'Propdispatch',
    slug: 'propdispatch',
    description: 'Real-time multi-tenant sand job & load tracking system.',
    longDescription: 'Propdispatch is a sophisticated logistics platform that provides real-time tracking and management of sand jobs and load dispatching across multiple tenants.',
    responsibilities: ['Backend development', 'GCP Cloud Functions', 'Complex SQL queries'],
    url: 'https://propdispatch.com',
    category: 'backend',
    type: 'public' as const,
    tech: ['Node.js', 'GCP', 'PostgreSQL', 'Real-time'],
    featured: true,
    client: {
      name: 'PropDispatch LLC',
      industry: 'Logistics',
      size: 'Mid-size'
    },
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z'
  },
  {
    _id: '8',
    title: 'Atrios',
    slug: 'atrios',
    description: 'Cloud-based network security platform with DNS filtering, DDoS protection, and traffic analytics.',
    longDescription: 'Atrios is an enterprise-grade network security platform that provides comprehensive protection through DNS filtering, DDoS mitigation, and advanced traffic analytics.',
    responsibilities: ['Backend team lead', 'DNSDist + KnotDNS setup', 'Analytics via ClickHouse'],
    url: 'https://atrios.io',
    category: 'backend',
    type: 'public' as const,
    tech: ['Go', 'ClickHouse', 'DNS', 'Security'],
    featured: true,
    client: {
      name: 'Atrios Security',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    },
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z'
  },
  {
    _id: '8',
    title: 'MicroCommerce - E-commerce Microservices',
    slug: 'microcommerce-services',
    description: 'Scalable microservices architecture for e-commerce with event sourcing, CQRS, and distributed transactions.',
    longDescription: 'Enterprise-grade e-commerce backend built with microservices architecture, featuring event sourcing, CQRS pattern implementation, distributed transaction management, and high-availability service mesh architecture.',
    responsibilities: ['Microservices design', 'Event sourcing implementation', 'Service mesh configuration', 'Distributed transaction handling'],
    category: 'backend',
    type: 'private' as const,
    tech: ['Node.js', 'Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Istio', 'CQRS', 'Event Sourcing'],
    featured: true,
    client: {
      name: 'Commerce Solutions Inc.',
      industry: 'E-commerce',
      size: 'Enterprise'
    },
    createdAt: '2024-04-15T00:00:00.000Z',
    updatedAt: '2024-04-15T00:00:00.000Z'
  },
  {
    _id: '10',
    title: 'GameHub - Real-time Gaming Backend',
    slug: 'gamehub-backend',
    description: 'High-performance gaming backend with matchmaking, leaderboards, real-time multiplayer, and anti-cheat systems.',
    longDescription: 'Scalable gaming backend infrastructure supporting millions of concurrent players with intelligent matchmaking algorithms, real-time multiplayer synchronization, global leaderboards, and advanced anti-cheat detection systems.',
    responsibilities: ['Real-time multiplayer architecture', 'Matchmaking algorithms', 'Anti-cheat system development', 'Global leaderboard optimization'],
    category: 'backend',
    type: 'private' as const,
    tech: ['C++', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'UDP', 'TCP', 'Load Balancing'],
    featured: true,
    client: {
      name: 'GameStudio Interactive',
      industry: 'Gaming',
      size: 'Mid-size'
    },
    createdAt: '2024-05-15T00:00:00.000Z',
    updatedAt: '2024-05-15T00:00:00.000Z'
  },
  {
    _id: '10',
    title: 'GameHub - Real-time Gaming Backend',
    slug: 'gamehub-backend',
    description: 'High-performance gaming backend with matchmaking, leaderboards, real-time multiplayer, and anti-cheat systems.',
    longDescription: 'Scalable gaming backend infrastructure supporting millions of concurrent players with intelligent matchmaking algorithms, real-time multiplayer synchronization, global leaderboards, and advanced anti-cheat detection systems.',
    responsibilities: ['Real-time multiplayer architecture', 'Matchmaking algorithms', 'Anti-cheat system development', 'Global leaderboard optimization'],
    category: 'backend',
    type: 'private' as const,
    tech: ['C++', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'UDP', 'TCP', 'Load Balancing'],
    featured: true,
    client: {
      name: 'GameStudio Interactive',
      industry: 'Gaming',
      size: 'Mid-size'
    },
    createdAt: '2024-05-15T00:00:00.000Z',
    updatedAt: '2024-05-15T00:00:00.000Z'
  },

  // DATA ANALYTICS PROJECTS
  {
    _id: '11',
    title: 'Matador',
    slug: 'matador',
    description: 'Interception provisioning & handover tool for ISPs and law enforcement.',
    longDescription: 'Matador is a specialized system designed for ISPs and law enforcement agencies to manage interception provisioning and handover processes with the highest security standards.',
    responsibilities: ['Scripts in Go, Python, Node.js', 'Data processing of billions of records/day', 'ClickHouse backend'],
    category: 'data',
    type: 'private' as const,
    tech: ['Go', 'Python', 'ClickHouse', 'Big Data'],
    featured: true,
    createdAt: '2024-06-01T00:00:00.000Z',
    updatedAt: '2024-06-01T00:00:00.000Z'
  },
  {
    _id: '12',
    title: 'DataLake - Enterprise Data Warehouse',
    slug: 'datalake-warehouse',
    description: 'Petabyte-scale data warehouse with real-time ETL, data governance, and advanced analytics.',
    longDescription: 'Enterprise-grade data warehouse platform handling petabyte-scale data with real-time ETL pipelines, comprehensive data governance, advanced analytics capabilities, and machine learning integration.',
    responsibilities: ['Data warehouse architecture', 'Real-time ETL development', 'Data governance implementation', 'Performance optimization'],
    category: 'data',
    type: 'private' as const,
    tech: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'Python', 'Apache Airflow', 'dbt', 'PostgreSQL', 'Redis', 'Docker'],
    featured: true,
    client: {
      name: 'DataCorp Analytics',
      industry: 'Data Analytics',
      size: 'Enterprise'
    },
    createdAt: '2024-06-15T00:00:00.000Z',
    updatedAt: '2024-06-15T00:00:00.000Z'
  },
  {
    _id: '14',
    title: 'RetailAnalytics - Customer Behavior Platform',
    slug: 'retail-analytics-platform',
    description: 'Advanced retail analytics with customer segmentation, churn prediction, and recommendation engines.',
    longDescription: 'Comprehensive retail analytics platform providing customer behavior analysis, advanced segmentation, churn prediction models, personalized recommendation engines, and real-time inventory optimization.',
    responsibilities: ['Customer segmentation algorithms', 'Churn prediction models', 'Recommendation engine', 'Real-time analytics'],
    category: 'data',
    type: 'private' as const,
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'Apache Spark', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    featured: true,
    client: {
      name: 'RetailTech Inc.',
      industry: 'Retail',
      size: 'Enterprise'
    },
    createdAt: '2024-07-15T00:00:00.000Z',
    updatedAt: '2024-07-15T00:00:00.000Z'
  },

  // AI/ML PROJECTS
  {
    _id: '27',
    title: 'SheetsAssist - Custom Excel/Sheets Automation with AI Assistants',
    slug: 'sheetsassist-automation',
    description: 'Custom automation for Excel/Google Sheets empowered by AI assistants to automate formulas, data transformation, and workflow tasks.',
    longDescription: 'SheetsAssist provides intelligent automation for spreadsheets by combining programmatic macros, formula generation, and GPT-style AI assistants. Users can describe data transformations in plain English and the assistant generates optimized formulas, scripts (Apps Script / Office Scripts), pivot-ready summaries, and repeatable automation workflows. Integrations include CSV imports, APIs, and scheduled syncs.',
    responsibilities: ['Design AI-assisted spreadsheet workflows', 'Generate formulas & scripts via LLMs', 'Implement Apps Script/Office Scripts', 'Build scheduled syncs and connectors'],
    category: 'ai',
    type: 'private' as const,
    tech: ['TypeScript', 'Google Apps Script', 'Office Scripts', 'Node.js', 'OpenAI / LLMs', 'Puppeteer', 'APIs', 'OAuth2'],
    featured: true,
    client: {
      name: 'Productivity Labs',
      industry: 'SaaS',
      size: 'SMB'
    },
    createdAt: '2025-08-01T00:00:00.000Z',
    updatedAt: '2025-08-01T00:00:00.000Z'
  },

  {
    _id: '28',
    title: 'DocSearch RAG - RAG-Powered Document Summarization & Search System',
    slug: 'docsearch-rag-system',
    description: 'Retrieval-Augmented Generation system for summarizing, indexing, and searching large document collections with semantic search and concise answers.',
    longDescription: 'DocSearch RAG provides a complete pipeline for ingesting documents (PDFs, Word, HTML), extracting embeddings, and serving semantic search and conversational summarization using RAG. The system supports chunking strategies, vector stores (Pinecone/Weaviate/FAISS), prompt engineering, and a SaaS-ready search UI for knowledge workers.',
    responsibilities: ['Document ingestion & preprocessing', 'Embedding pipelines and vector store integration', 'RAG prompt design and evaluation', 'Search UI and conversational summarization'],
    category: 'ai',
    type: 'private' as const,
    tech: ['Python', 'LangChain', 'OpenAI / LLMs', 'Pinecone', 'FAISS', 'FastAPI', 'React', 'Docker'],
    featured: true,
    client: {
      name: 'KnowledgeCore',
      industry: 'Enterprise Search',
      size: 'Mid-size'
    },
    createdAt: '2025-07-15T00:00:00.000Z',
    updatedAt: '2025-07-15T00:00:00.000Z'
  },

  {
    _id: '29',
    title: 'AutoResponder AI - AI-Powered Email & Slack/Teams Auto-Responder',
    slug: 'autoresponder-ai',
    description: 'Automated contextual responders for email and collaboration platforms (Slack/Teams) using AI to classify intent and draft replies.',
    longDescription: 'AutoResponder AI integrates with email providers and collaboration platforms to automatically triage messages, detect intent, and draft contextual replies or suggested actions. Features include templating, SLA-aware prioritization, conversation memory, and secure connector patterns for sending or scheduling responses via SMTP, Microsoft Graph, or Slack APIs.',
    responsibilities: ['Connector development for Email/Slack/Teams', 'Intent classification & routing', 'LLM-based reply generation with safety checks', 'SLA and escalation workflows'],
    category: 'ai',
    type: 'private' as const,
    tech: ['Node.js', 'TypeScript', 'OpenAI / LLMs', 'Microsoft Graph API', 'Slack API', 'Redis', 'PostgreSQL', 'Docker'],
    featured: true,
    client: {
      name: 'CommsAI',
      industry: 'Automation',
      size: 'SMB'
    },
    createdAt: '2025-06-30T00:00:00.000Z',
    updatedAt: '2025-06-30T00:00:00.000Z'
  },

  // MOBILE PROJECTS

  {
    _id: '20',
    title: 'HealthTracker - Personal Health Monitor',
    slug: 'health-tracker-app',
    description: 'Comprehensive health monitoring app with wearable integration, AI health insights, and telemedicine features.',
    longDescription: 'Advanced health monitoring application integrating with various wearable devices, providing AI-powered health insights, medication reminders, symptom tracking, and direct telemedicine consultations.',
    responsibilities: ['Wearable device integration', 'Health data analytics', 'AI health insights', 'Telemedicine video calls'],
    url: 'https://health-tracker-bp-monitor.en.softonic.com/android',
    category: 'mobile',
    type: 'public' as const,
    tech: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'TensorFlow Lite', 'WebRTC', 'HealthKit', 'Google Fit'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      size: 'Mid-size'
    },
    createdAt: '2024-10-15T00:00:00.000Z',
    updatedAt: '2024-10-15T00:00:00.000Z'
  },

  // DEVOPS PROJECTS
  {
    _id: '21',
    title: 'CloudOps - Multi-Cloud Management Platform',
    slug: 'cloudops-management',
    description: 'Unified multi-cloud management platform with cost optimization, security compliance, and automated scaling.',
    longDescription: 'Enterprise cloud management platform providing unified control across AWS, Azure, and GCP with intelligent cost optimization, automated security compliance, resource right-sizing, and predictive scaling capabilities.',
    responsibilities: ['Multi-cloud architecture', 'Cost optimization algorithms', 'Security compliance automation', 'Infrastructure as Code'],
    category: 'devops',
    type: 'private' as const,
    tech: ['Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'AWS', 'Azure', 'GCP', 'Python', 'Go'],
    featured: true,
    client: {
      name: 'CloudOps Solutions',
      industry: 'Cloud Services',
      size: 'Enterprise'
    },
    createdAt: '2024-11-01T00:00:00.000Z',
    updatedAt: '2024-11-01T00:00:00.000Z'
  },
  
  // Additional live projects added by request
  {
    _id: '23',
    title: 'LearnPlayBond',
    slug: 'learnplaybond',
    description: 'Educational platform with interactive learning, gamification, and teacher tools.',
    longDescription: 'LearnPlayBond is a modern educational platform combining interactive lessons, quizzes, progress tracking, and collaborative tools for students and teachers.',
    responsibilities: ['Full-stack development', 'Real-time features', 'Deployment'],
    url: 'https://learnplaybond.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    featured: true,
    client: {
      name: 'LearnPlayBond',
      industry: 'EdTech',
      size: 'Startup'
    },
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  },
  {
    _id: '24',
    title: 'Gaming Animated Website',
    slug: 'gaming-animated-website',
    description: 'Animated showcase site for games and studios with rich transitions and interactive elements.',
    longDescription: 'A visually rich animated website built to showcase game studios and projects. Smooth transitions, responsive design, and engaging UI/UX are the focus.',
    responsibilities: ['Frontend development', 'Animation', 'Responsive design', 'Deployment'],
    url: 'https://gaming-animated-website.vercel.app',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Framer Motion', 'Vercel', 'Tailwind CSS'],
    featured: true,
    client: {
      name: 'Studio Demo',
      industry: 'Gaming',
      size: 'Small'
    },
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  },
  {
    _id: '25',
    title: 'TrySwitch',
    slug: 'tryswitch',
    description: 'Secure platform for account switching and management built with MERN and JWT authentication.',
    longDescription: 'TrySwitch is a secure account switching and management platform using a MERN stack with JWT-based authentication, role-based access, and session management.',
    responsibilities: ['Full-stack MERN implementation', 'JWT authentication', 'Role-based access control'],
    url: 'https://tryswitch.com',
    category: 'web',
    type: 'public' as const,
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    featured: true,
    client: {
      name: 'TrySwitch',
      industry: 'SaaS',
      size: 'Startup'
    },
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  },
  {
    _id: '26',
    title: 'UmrahMiles',
    slug: 'umrahmiles',
    description: 'React-based static site for Umrah travelers with booking and itinerary management.',
    longDescription: 'UmrahMiles is a React static site offering booking, itinerary management, and traveler guidance tailored for Umrah pilgrims, focusing on reliability and ease of use.',
    responsibilities: ['Frontend development', 'UX design', 'Deployment'],
    url: 'https://umrahmiles.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Tailwind CSS', 'Vercel'],
    featured: true,
    client: {
      name: 'UmrahMiles',
      industry: 'Travel',
      size: 'Small'
    },
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  }
  ,
  {
    _id: '30',
    title: 'Evoke News - Mobile App & Website',
    slug: 'evoke-news-app',
  description: 'Breaking news Android/iOS app and companion website — Vue 3 frontend with FastAPI backend, crawler server, and Flutter mobile app. Backend deployed on DigitalOcean.',
  longDescription: 'Evoke News combines a Vue 3 website and Flutter mobile app with a FastAPI backend. It includes a crawler server for ingest, YouTube API integration for video, dedicated API and crawler services, a database, and an editorial admin dashboard. Backend services are deployed on DigitalOcean droplets.',
    responsibilities: ['Built Vue 2 web and mobile frontends', 'FastAPI backend and YouTube integration', 'Crawler server and media pipeline', 'Editorial admin dashboard', 'DigitalOcean deployments'],
    url: 'https://play.google.com/store/apps/details?id=com.evokeplanet.breakingnews',
    category: 'mobile',
    type: 'public' as const,
  tech: ['Flutter', 'Vue.js 3', 'FastAPI', 'Python', 'YouTube API', 'Crawler', 'DigitalOcean', 'PostgreSQL', 'Docker'],
    featured: true,
    client: {
      name: 'Evoke Planet',
      industry: 'Media & News',
      size: 'Small'
    },
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  }
  ,
  {
    _id: '31',
    title: 'Business Intelligence Platform',
    slug: 'business-intelligence-platform',
    description: 'Enterprise-grade Business Intelligence platform transforming data into strategic insights. 🚀',
    longDescription: `This comprehensive Business Intelligence platform transforms how organizations leverage their data assets to drive strategic decisions, optimize operations, and accelerate growth. Built with enterprise-grade security and scalability, it delivers immediate value while providing a foundation for advanced analytics and AI-driven insights.

Features
📈 Analytics & Visualization
Interactive Dashboards with role-based access (Super Admin, Branch Manager, Analyst, Staff)
Advanced Charts using Recharts (Line, Bar, Pie, Area, Heatmap, Cohort analysis)
Real-time KPI Metrics with live data updates
Custom Chart Builder with drag-and-drop interface
Export Capabilities (PDF, Excel, PNG, SVG)
Mobile-responsive design with dark/light themes

🔄 ETL & Data Pipeline
Multi-source Data Ingestion: CSV uploads, REST APIs, Database connections
Automated Data Validation with configurable rules and business logic
Advanced Data Transformation (cleansing, normalization, enrichment)
Data Warehouse Management (PostgreSQL/ClickHouse support)
Scheduled ETL Jobs with Celery and Redis
Real-time Data Processing with streaming capabilities

🏗️ Architecture & Infrastructure
Microservices Architecture with Docker support
Scalable Task Queue with Celery and Redis
Database Flexibility (MongoDB for raw data, PostgreSQL/ClickHouse for warehouse)
API-first Design with comprehensive REST endpoints
Enterprise Security with JWT authentication and RBAC
Monitoring & Observability with Flower, Prometheus, and Sentry

💼 Business Intelligence Features
Sales Analytics: Revenue tracking, trend analysis, forecasting
Inventory Management: Stock levels, turnover rates, demand planning
Staff Performance: Individual metrics, team analytics, productivity tracking
Customer Analysis: Segmentation, behavior analysis, loyalty programs
Financial Reporting: P&L statements, cost analysis, margin tracking

🛠️ Technology Stack
Backend: Django 4.2, Django REST Framework, MongoDB, PostgreSQL/ClickHouse, Celery + Redis, JWT Auth
Frontend: React 18, Vite, Tailwind CSS, Recharts, React Query, Headless UI
DevOps & Monitoring: Docker, Flower, Prometheus, Sentry, GitHub Actions

Repository: https://github.com/Bilalabbasid/Business-Intelligence-Tool`,
    responsibilities: [
      'Designed end-to-end BI architecture and API-first integrations',
      'Implemented ETL pipelines with validation and scheduling',
      'Built interactive dashboards and custom chart builder',
      'Established observability and security (Prometheus, Sentry, JWT + RBAC)'
    ],
    url: 'https://github.com/Bilalabbasid/Business-Intelligence-Tool',
    category: 'data',
    type: 'public' as const,
    tech: ['Django', 'Django REST Framework', 'MongoDB', 'PostgreSQL', 'ClickHouse', 'Celery', 'Redis', 'React', 'Vite', 'Tailwind CSS', 'Recharts', 'React Query', 'Docker', 'Prometheus', 'Sentry'],
    featured: true,
    client: {
      name: 'Business Intelligence Initiative',
      industry: 'Analytics & Data',
      size: 'Enterprise'
    },
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  }
  ,
  {
    _id: '32',
    title: 'Custom CRM',
    slug: 'custom-crm',
    description: 'Full-featured Custom CRM with role-based dashboards, reservations, orders, and analytics.',
    longDescription: `Custom CRM delivers a complete customer relationship management system focused on operations, analytics, and role-based access.

Core Functionality
- Authentication & Authorization: JWT-based auth with role-based access control (Admin, Manager, Staff)
- Customer Management: Customer profiles, visit history, loyalty points, and feedback
- Reservations: Table booking system with availability checking and conflict prevention
- Order Management: POS integration with order tracking, payment processing, and status updates
- Menu Management: Dynamic menu with categories, pricing, availability, and popularity tracking
- Staff Management: Employee profiles, performance tracking, and role management
- Analytics & Reports: Comprehensive reporting with charts and data visualization
- Dashboard: Real-time KPIs and business metrics

Advanced Dashboard Features ✨
- Owner Dashboard: Executive-level business intelligence with multiple comprehensive sections
- Manager Dashboard: Operational management with manager-focused performance sections
- Role-based Dashboards: Different views and permissions based on user roles

Implementation Status (selected completed items)
- Owner Dashboard: Executive Summary, Business Performance, Branch & Manager Performance, Financial Analytics, Customer Analytics, Menu & Product Insights, Growth & Marketing Performance, Staff & HR Overview, Risk & Compliance Alerts, Forecasting & AI Insights
- Manager Dashboard: Sales & Revenue Overview, Top Performers & Trends, Inventory & Stock Management, Customer Insights, Reservations & Orders, Menu Management, Staff & Operations, Analytics & Reports, Recent Activity Feed, Alerts & Notifications

Repository: https://github.com/Bilalabbasid/CRM`,
    responsibilities: [
      'Designed role-based dashboard experiences for Owner/Manager/Staff',
      'Implemented JWT auth and RBAC for secure access',
      'Built reservations, order management and POS integrations',
      'Created analytics and reporting dashboards with charting and KPIs'
    ],
    url: 'https://github.com/Bilalabbasid/CRM',
    category: 'web',
    type: 'public' as const,
    tech: [
      // Frontend
      'React 18', 'React Router', 'Tailwind CSS', 'Recharts', 'Lucide React', 'date-fns',
      // Backend
      'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'express-validator', 'Helmet', 'Morgan',
      // DevOps
      'Docker', 'Docker Compose', 'Nginx', 'MongoDB (replica set)'
    ],
    featured: true,
    client: {
      name: 'CRM Initiative',
      industry: 'SaaS / Retail',
      size: 'Mid-size'
    },
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  }
  ,
  {
    _id: '33',
    title: 'School Management System (Enterprise Edition)',
    slug: 'school-management-system-enterprise',
    description: 'Commercial-grade MERN-based School Management System with enterprise features and role-based dashboards.',
    longDescription: `🚀 Commercial-Grade School Management Solution

A comprehensive, enterprise-ready School Management System built with the MERN stack, designed for commercial deployment with advanced features, security, and scalability.

✨ Key Features

🎯 Enterprise Architecture
Full MERN Stack: React.js (TypeScript) + Node.js/Express + MongoDB
Professional UI: shadcn/ui components with advanced TailwindCSS
Real-time Communication: Socket.IO integration
Enterprise Security: JWT authentication, role-based access, rate limiting
Production Ready: Comprehensive logging, monitoring, and error handling

👥 User Management
Multi-Role System: Admin, Teacher, Student, Parent, Accountant
Advanced Authentication: JWT tokens, password reset, email verification
Profile Management: Comprehensive user profiles with media upload
Access Control: Role-based permissions and route protection

🎓 Student Management
Complete Lifecycle: Admission to graduation tracking
Academic Records: Grades, attendance, performance analytics
Parent Integration: Guardian information and communication
Document Management: Certificates, reports, and file uploads
Fee Management: Payment tracking and financial records

👨‍🏫 Teacher Management
Staff Profiles: Qualifications, experience, specializations
Schedule Management: Timetables, class assignments
Performance Tracking: Evaluations, feedback systems
Leave Management: Request and approval workflows
Salary Processing: Payroll integration capabilities

🏛️ Academic Management
Class Organization: Grades, sections, student capacity
Subject Management: Curriculum, credits, prerequisites
Timetable System: Automated scheduling and conflict resolution
Exam Management: Test creation, grading, result processing
Report Cards: Automated generation and distribution

📊 Advanced Reporting
Dashboard Analytics: Real-time statistics and KPIs
Custom Reports: Student, teacher, financial, and performance reports
Export Options: PDF, Excel, and CSV formats
Data Visualization: Charts, graphs, and trend analysis
Audit Trails: Complete activity logging and tracking

🔒 Enterprise Security
Authentication: Multi-factor authentication options
Authorization: Granular role-based permissions
Data Protection: Input sanitization and validation
Rate Limiting: Advanced request throttling
Security Headers: Helmet.js protection
Audit Logging: Comprehensive security event tracking

🏗️ Infrastructure Features
Scalable Architecture: Microservice-ready design
Database Optimization: Indexed queries and aggregation pipelines
Caching Strategy: Redis-ready for performance optimization
File Management: Secure upload and storage system
Email Integration: Automated notifications and communications
Backup Systems: Data export and recovery capabilities

🛠️ Technology Stack
Frontend: React 18+ (TypeScript), Vite, TailwindCSS, shadcn/ui, React Router
Backend: Node.js, Express, MongoDB (Mongoose), JWT, Socket.IO, Winston, Multer, Nodemailer
DevOps: Docker, PM2, Nginx, SSL/TLS, Automated backups

Repository: https://github.com/Bilalabbasid/SMS`,
    responsibilities: [
      'Architected enterprise-grade MERN system with real-time features',
      'Implemented role-based dashboards and granular permissions',
      'Built student lifecycle, academic, and financial modules',
      'Added enterprise logging, monitoring, and secure file handling'
    ],
    url: 'https://github.com/Bilalabbasid/SMS',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Docker', 'Nginx', 'Redis'],
    featured: true,
    client: {
      name: 'Education Solutions Ltd.',
      industry: 'Education',
      size: 'Enterprise'
    },
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  }
];

// Deduplicate by slug (first occurrence wins)
type ProjectEntry = {
  _id?: string;
  slug?: string;
  [k: string]: unknown;
};
const dedupeMap = new Map<string, ProjectEntry>();
rawStaticProjects.forEach((p) => {
  const proj = p as ProjectEntry | undefined;
  if (!proj) return;
  const key = proj.slug || proj._id || JSON.stringify(proj);
  if (!dedupeMap.has(key)) dedupeMap.set(key, proj);
});

export const staticProjects = Array.from(dedupeMap.values());

export const staticProjectsResponse = {
  projects: staticProjects,
  totalPages: 1,
  currentPage: 1,
  total: staticProjects.length
};
