const mongoose = require('mongoose');
const Project = require('./models/Project.cjs');
require('dotenv').config();

const seedProjects = [
  // WEB DEVELOPMENT PROJECTS (10)
  {
    title: 'Falaya',
    slug: 'falaya',
    description: 'Real Estate Marketplace platform handling everything from listings to offers and digital paperwork.',
    longDescription: 'Falaya is a comprehensive real estate marketplace that revolutionizes how properties are bought and sold. The platform handles the entire real estate transaction lifecycle, from initial property listings to final digital paperwork completion.',
    responsibilities: ['Led Web/Mobile team', 'Fullstack dev (frontend/backend)', 'AWS deployments'],
    url: 'https://falaya.com',
    category: 'web',
    type: 'public',
    tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
    featured: true,
    client: {
      name: 'Falaya Inc.',
      industry: 'Real Estate',
      size: 'Startup'
    }
  },
  {
    title: 'IntellicV - AI Resume Assistant',
    slug: 'intellicv-ai-assistant',
    description: 'GPT-powered AI resume assistant that helps users update their resumes naturally through conversational interface.',
    longDescription: 'IntellicV is an intelligent resume assistant powered by GPT that allows users to update their resumes through natural conversation. Users can simply tell the AI what they want to change, such as updating job titles, adding experiences, or modifying skills, and the AI handles the formatting and optimization automatically.',
    responsibilities: ['GPT API integration', 'Natural language processing', 'Resume parsing and generation', 'User authentication system'],
    url: 'https://intellicv-ai-assistant-1.onrender.com/',
    category: 'web',
    type: 'public',
    tech: ['React', 'Node.js', 'GPT API', 'Express', 'MongoDB', 'Authentication', 'NLP', 'PDF Generation'],
    featured: true,
    client: {
      name: 'IntellicV Technologies',
      industry: 'AI/HR Tech',
      size: 'Startup'
    }
  },
  {
    title: 'LastChance Ticket - Event Booking Platform',
    slug: 'lastchance-ticket-booking',
    description: 'Comprehensive event ticket booking platform with real-time inventory, payment processing, and event management.',
    longDescription: 'LastChance Ticket is a full-featured event booking platform that handles ticket sales, event management, real-time inventory tracking, secure payment processing, and customer management. The platform supports multiple event types and provides comprehensive analytics for event organizers.',
    responsibilities: ['Full-stack development', 'Payment gateway integration', 'Real-time inventory management', 'Event management system'],
    url: 'https://www.lastchanceticket.com/',
    category: 'web',
    type: 'public',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Real-time', 'Payment Processing', 'Event Management'],
    featured: true,
    client: {
      name: 'LastChance Events',
      industry: 'Event Management',
      size: 'Mid-size'
    }
  },
  {
    title: 'Calorie Tracker - Nutrition Monitoring App',
    slug: 'calorie-tracker-app',
    description: 'Smart calorie counting and nutrition tracking application with food database and health analytics.',
    longDescription: 'A comprehensive calorie tracking application that helps users monitor their daily nutrition intake, track calories, analyze eating patterns, and achieve health goals. Features include extensive food database, barcode scanning, meal planning, and detailed nutritional analytics.',
    responsibilities: ['Frontend development', 'Nutrition database integration', 'Health analytics dashboard', 'User experience optimization'],
    url: 'https://5b0534f1.calorie-tracker-2vp.pages.dev/',
    category: 'web',
    type: 'public',
    tech: ['React', 'JavaScript', 'Nutrition APIs', 'Charts.js', 'Local Storage', 'PWA', 'Health Analytics'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Health & Fitness',
      size: 'Startup'
    }
  },
  {
    title: 'StreamFlix - Video Streaming Platform',
    slug: 'streamflix-platform',
    description: 'Netflix-like streaming platform with real-time video processing, adaptive bitrate streaming, and CDN integration.',
    longDescription: 'A comprehensive video streaming platform built with microservices architecture, featuring real-time video transcoding, adaptive bitrate streaming, content recommendation engines, and global CDN distribution for millions of users.',
    responsibilities: ['Microservices architecture design', 'Video transcoding pipeline', 'CDN integration with Cloudflare', 'Redis caching strategy'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'FFmpeg', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS S3', 'CloudFront'],
    featured: true,
    client: {
      name: 'StreamFlix Inc.',
      industry: 'Entertainment',
      size: 'Enterprise'
    }
  },
  {
    title: 'CryptoTrade Pro - Trading Dashboard',
    slug: 'cryptotrade-dashboard',
    description: 'Advanced cryptocurrency trading platform with real-time charts, algorithmic trading, and portfolio management.',
    longDescription: 'Professional-grade cryptocurrency trading platform featuring real-time WebSocket data feeds, advanced charting with TradingView integration, algorithmic trading bots, portfolio analytics, and multi-exchange connectivity.',
    responsibilities: ['Real-time WebSocket architecture', 'Trading algorithm implementation', 'Chart.js custom indicators', 'Multi-exchange API integration'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'TypeScript', 'WebSocket', 'Chart.js', 'TradingView', 'Node.js', 'Redis', 'MongoDB', 'Docker', 'CCXT'],
    featured: true,
    client: {
      name: 'CryptoTrade Solutions',
      industry: 'FinTech',
      size: 'Mid-size'
    }
  },
  {
    title: 'EduPortal - Learning Management System',
    slug: 'eduportal-lms',
    description: 'Comprehensive LMS with interactive video lessons, real-time collaboration, and AI-powered progress tracking.',
    longDescription: 'Modern learning management system featuring interactive video lessons with annotations, real-time collaborative whiteboards, AI-powered student progress analytics, automated grading systems, and virtual classroom capabilities.',
    responsibilities: ['Video streaming optimization', 'Real-time collaboration features', 'AI analytics integration', 'Progressive Web App development'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'Next.js', 'TypeScript', 'WebRTC', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'TensorFlow.js'],
    featured: true,
    client: {
      name: 'EduTech Innovations',
      industry: 'Education',
      size: 'Enterprise'
    }
  },
  {
    title: 'HealthConnect - Telemedicine Platform',
    slug: 'healthconnect-telemedicine',
    description: 'HIPAA-compliant telemedicine platform with video consultations, prescription management, and EHR integration.',
    longDescription: 'Secure telemedicine platform enabling remote patient consultations with encrypted video calls, digital prescription management, electronic health record integration, appointment scheduling, and real-time health monitoring dashboards.',
    responsibilities: ['HIPAA compliance implementation', 'End-to-end encryption', 'EHR system integration', 'Video call optimization'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'FHIR', 'Twilio', 'Stripe'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      size: 'Enterprise'
    }
  },
  {
    title: 'SmartCity Dashboard',
    slug: 'smartcity-dashboard',
    description: 'IoT-enabled smart city management platform with real-time monitoring, predictive analytics, and citizen services.',
    longDescription: 'Comprehensive smart city management platform integrating IoT sensors, traffic monitoring, environmental data, citizen service portals, emergency response systems, and predictive analytics for urban planning.',
    responsibilities: ['IoT data visualization', 'Real-time monitoring systems', 'Predictive analytics dashboard', 'Multi-tenant architecture'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'TypeScript', 'D3.js', 'Mapbox', 'Node.js', 'InfluxDB', 'Redis', 'MQTT', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'Urban Technologies',
      industry: 'Government',
      size: 'Enterprise'
    }
  },
  {
    title: 'FoodieHub - Restaurant Marketplace',
    slug: 'foodiehub-marketplace',
    description: 'Multi-vendor food delivery platform with real-time tracking, dynamic pricing, and restaurant management tools.',
    longDescription: 'Comprehensive food delivery marketplace featuring multi-vendor support, real-time order tracking with GPS, dynamic pricing algorithms, restaurant inventory management, customer rating systems, and delivery optimization.',
    responsibilities: ['Multi-vendor architecture', 'Real-time GPS tracking', 'Payment gateway integration', 'Dynamic pricing algorithms'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'Stripe', 'Google Maps API', 'PWA'],
    featured: true,
    client: {
      name: 'FoodieHub Inc.',
      industry: 'Food & Beverage',
      size: 'Startup'
    }
  },
  {
    title: 'EventMaster - Event Management Platform',
    slug: 'eventmaster-platform',
    description: 'Enterprise event management platform with virtual/hybrid events, ticketing, networking, and analytics.',
    longDescription: 'Full-featured event management platform supporting virtual, hybrid, and in-person events with advanced ticketing systems, virtual networking spaces, live streaming capabilities, attendee engagement tools, and comprehensive analytics.',
    responsibilities: ['Virtual event architecture', 'Live streaming integration', 'Networking algorithms', 'Analytics dashboard development'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'TypeScript', 'WebRTC', 'Socket.io', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Agora.io', 'Stripe'],
    featured: true,
    client: {
      name: 'EventTech Solutions',
      industry: 'Events',
      size: 'Mid-size'
    }
  },
  {
    title: 'CareerBoost - Job Portal & Skills Platform',
    slug: 'careerboost-platform',
    description: 'AI-powered job matching platform with skill assessments, career path recommendations, and employer analytics.',
    longDescription: 'Intelligent career development platform featuring AI-powered job matching, interactive skill assessments, personalized career path recommendations, employer branding tools, and comprehensive recruitment analytics with ATS integration.',
    responsibilities: ['AI matching algorithms', 'Skill assessment system', 'ATS integration', 'Recommendation engine development'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'TensorFlow', 'Docker'],
    featured: true,
    client: {
      name: 'CareerTech Inc.',
      industry: 'Human Resources',
      size: 'Enterprise'
    }
  },
  {
    title: 'GreenTech - Sustainability Tracking Platform',
    slug: 'greentech-sustainability',
    description: 'Corporate sustainability platform with carbon footprint tracking, ESG reporting, and environmental impact analytics.',
    longDescription: 'Enterprise sustainability management platform featuring carbon footprint calculation, ESG compliance reporting, supply chain sustainability tracking, renewable energy monitoring, and automated environmental impact assessments.',
    responsibilities: ['ESG data modeling', 'Carbon calculation algorithms', 'Supply chain integration', 'Automated reporting systems'],
    url: null,
    category: 'web',
    type: 'public',
    tech: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Python', 'Docker', 'AWS', 'Blockchain'],
    featured: true,
    client: {
      name: 'GreenTech Solutions',
      industry: 'Environmental',
      size: 'Enterprise'
    }
  },

  // BACKEND PROJECTS (10)
  {
    title: 'Atrios',
    slug: 'atrios',
    description: 'Cloud-based network security platform with DNS filtering, DDoS protection, and traffic analytics.',
    longDescription: 'Atrios is an enterprise-grade network security platform that provides comprehensive protection through DNS filtering, DDoS mitigation, and advanced traffic analytics.',
    responsibilities: ['Backend team lead', 'DNSDist + KnotDNS setup', 'Analytics via ClickHouse'],
    url: 'https://atrios.io',
    category: 'backend',
    type: 'public',
    tech: ['Go', 'ClickHouse', 'DNS', 'Security'],
    featured: true,
    client: {
      name: 'Atrios Security',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    }
  },
  {
    title: 'Propdispatch',
    slug: 'propdispatch',
    description: 'Real-time multi-tenant sand job & load tracking system.',
    longDescription: 'Propdispatch is a sophisticated logistics platform that provides real-time tracking and management of sand jobs and load dispatching across multiple tenants.',
    responsibilities: ['Backend development', 'GCP Cloud Functions', 'Complex SQL queries'],
    url: 'https://propdispatch.com',
    category: 'backend',
    type: 'public',
    tech: ['Node.js', 'GCP', 'PostgreSQL', 'Real-time'],
    featured: true,
    client: {
      name: 'PropDispatch LLC',
      industry: 'Logistics',
      size: 'Mid-size'
    }
  },
  {
    title: 'MicroCommerce - E-commerce Microservices',
    slug: 'microcommerce-services',
    description: 'Scalable microservices architecture for e-commerce with event sourcing, CQRS, and distributed transactions.',
    longDescription: 'Enterprise-grade e-commerce backend built with microservices architecture, featuring event sourcing, CQRS pattern implementation, distributed transaction management, and high-availability service mesh architecture.',
    responsibilities: ['Microservices design', 'Event sourcing implementation', 'Service mesh configuration', 'Distributed transaction handling'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Node.js', 'Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Istio', 'CQRS', 'Event Sourcing'],
    featured: true,
    client: {
      name: 'Commerce Solutions Inc.',
      industry: 'E-commerce',
      size: 'Enterprise'
    }
  },
  {
    title: 'FinanceCore - Banking API Gateway',
    slug: 'financecore-gateway',
    description: 'PCI-DSS compliant banking API gateway with fraud detection, transaction processing, and regulatory compliance.',
    longDescription: 'Secure banking API gateway handling millions of transactions daily with real-time fraud detection, PCI-DSS compliance, regulatory reporting, multi-currency support, and high-frequency trading capabilities.',
    responsibilities: ['API gateway architecture', 'Fraud detection algorithms', 'PCI-DSS compliance', 'High-frequency transaction processing'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes', 'OAuth2', 'JWT', 'Elasticsearch'],
    featured: true,
    client: {
      name: 'SecureBank Corp',
      industry: 'Banking',
      size: 'Enterprise'
    }
  },
  {
    title: 'GameHub - Real-time Gaming Backend',
    slug: 'gamehub-backend',
    description: 'High-performance gaming backend with matchmaking, leaderboards, real-time multiplayer, and anti-cheat systems.',
    longDescription: 'Scalable gaming backend infrastructure supporting millions of concurrent players with intelligent matchmaking algorithms, real-time multiplayer synchronization, global leaderboards, and advanced anti-cheat detection systems.',
    responsibilities: ['Real-time multiplayer architecture', 'Matchmaking algorithms', 'Anti-cheat system development', 'Global leaderboard optimization'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['C++', 'Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'UDP', 'TCP', 'Load Balancing'],
    featured: true,
    client: {
      name: 'GameStudio Interactive',
      industry: 'Gaming',
      size: 'Mid-size'
    }
  },
  {
    title: 'LogiChain - Supply Chain Management API',
    slug: 'logichain-api',
    description: 'Blockchain-enabled supply chain tracking with IoT integration, smart contracts, and transparency reporting.',
    longDescription: 'Advanced supply chain management system with blockchain transparency, IoT sensor integration, smart contract automation, vendor management, inventory optimization, and end-to-end traceability.',
    responsibilities: ['Blockchain integration', 'Smart contract development', 'IoT data processing', 'Supply chain optimization algorithms'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Python', 'Django', 'Blockchain', 'Ethereum', 'Solidity', 'PostgreSQL', 'Redis', 'MQTT', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'LogiChain Technologies',
      industry: 'Supply Chain',
      size: 'Enterprise'
    }
  },
  {
    title: 'CloudSync - Multi-Cloud Data Orchestration',
    slug: 'cloudsync-orchestration',
    description: 'Multi-cloud data synchronization platform with automated backups, disaster recovery, and cost optimization.',
    longDescription: 'Enterprise multi-cloud orchestration platform providing automated data synchronization across AWS, Azure, and GCP with intelligent cost optimization, disaster recovery automation, and compliance management.',
    responsibilities: ['Multi-cloud architecture', 'Data synchronization algorithms', 'Cost optimization engine', 'Disaster recovery automation'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Go', 'Python', 'AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'PostgreSQL', 'Redis', 'Apache Airflow'],
    featured: true,
    client: {
      name: 'CloudSync Solutions',
      industry: 'Cloud Services',
      size: 'Enterprise'
    }
  },
  {
    title: 'MediaStream - Video Processing Pipeline',
    slug: 'mediastream-pipeline',
    description: 'Scalable video processing pipeline with transcoding, thumbnail generation, and content analysis.',
    longDescription: 'High-performance video processing pipeline handling petabytes of content with real-time transcoding, automated thumbnail generation, content moderation, and AI-powered video analysis.',
    responsibilities: ['Video processing optimization', 'Distributed transcoding', 'Content analysis pipeline', 'Storage optimization'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Python', 'FFmpeg', 'Celery', 'Redis', 'PostgreSQL', 'AWS S3', 'Docker', 'Kubernetes', 'OpenCV', 'TensorFlow'],
    featured: true,
    client: {
      name: 'MediaTech Corp',
      industry: 'Media',
      size: 'Enterprise'
    }
  },
  {
    title: 'NotifyHub - Real-time Notification Service',
    slug: 'notifyhub-service',
    description: 'Multi-channel notification service with SMS, email, push notifications, and delivery analytics.',
    longDescription: 'Enterprise notification service supporting millions of daily notifications across SMS, email, push notifications, and webhooks with delivery optimization, A/B testing, and comprehensive analytics.',
    responsibilities: ['Multi-channel delivery system', 'Delivery optimization algorithms', 'Analytics pipeline', 'Rate limiting and queuing'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes', 'Twilio', 'SendGrid', 'Firebase', 'WebSocket'],
    featured: true,
    client: {
      name: 'NotifyTech Inc.',
      industry: 'Communication',
      size: 'Mid-size'
    }
  },
  {
    title: 'SecureVault - Identity Management System',
    slug: 'securevault-identity',
    description: 'Enterprise identity and access management with SSO, MFA, and zero-trust security architecture.',
    longDescription: 'Comprehensive identity management platform with single sign-on, multi-factor authentication, zero-trust security model, role-based access control, and compliance reporting for enterprise environments.',
    responsibilities: ['Zero-trust architecture', 'SSO implementation', 'MFA system development', 'Compliance automation'],
    url: null,
    category: 'backend',
    type: 'private',
    tech: ['Java', 'Spring Security', 'OAuth2', 'SAML', 'LDAP', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'JWT'],
    featured: true,
    client: {
      name: 'SecureVault Technologies',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    }
  },

  // DATA ANALYTICS PROJECTS (10)
  {
    title: 'Matador',
    slug: 'matador',
    description: 'Interception provisioning & handover tool for ISPs and law enforcement.',
    longDescription: 'Matador is a specialized system designed for ISPs and law enforcement agencies to manage interception provisioning and handover processes with the highest security standards.',
    responsibilities: ['Scripts in Go, Python, Node.js', 'Data processing of billions of records/day', 'ClickHouse backend'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Go', 'Python', 'ClickHouse', 'Big Data'],
    featured: true
  },
  {
    title: 'Quantum BI',
    slug: 'quantum-bi',
    description: 'Business Intelligence tool for telecom operators with trend and usage-based insights.',
    longDescription: 'Quantum BI provides telecom operators with comprehensive business intelligence capabilities, offering deep insights into usage patterns, trends, and operational metrics.',
    responsibilities: ['Node.js APIs', 'Go data pipelines', 'ClickHouse analytics engine'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Node.js', 'Go', 'ClickHouse', 'Analytics'],
    featured: true
  },
  {
    title: 'Genesis',
    slug: 'genesis',
    description: 'Big Data-as-a-Service platform for TB–PB scale storage and processing.',
    longDescription: 'Genesis is a scalable Big Data-as-a-Service platform capable of handling terabyte to petabyte scale data storage and processing requirements.',
    responsibilities: ['ClickHouse data ingestion', 'Backend data APIs'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['ClickHouse', 'Big Data', 'APIs', 'Storage']
  },
  {
    title: 'Vortex',
    slug: 'vortex',
    description: 'Inter-carrier reconciliation & reporting system for telcos.',
    longDescription: 'Vortex streamlines inter-carrier reconciliation processes for telecommunications companies, providing automated reporting and financial reconciliation capabilities.',
    responsibilities: ['SFTP data ingestion', 'Backend APIs + ClickHouse reporting'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Node.js', 'ClickHouse', 'SFTP', 'Reporting']
  },
  {
    title: 'DataLake - Enterprise Data Warehouse',
    slug: 'datalake-warehouse',
    description: 'Petabyte-scale data warehouse with real-time ETL, data governance, and advanced analytics.',
    longDescription: 'Enterprise-grade data warehouse platform handling petabyte-scale data with real-time ETL pipelines, comprehensive data governance, advanced analytics capabilities, and machine learning integration.',
    responsibilities: ['Data warehouse architecture', 'Real-time ETL development', 'Data governance implementation', 'Performance optimization'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Apache Spark', 'Apache Kafka', 'Snowflake', 'Python', 'Apache Airflow', 'dbt', 'PostgreSQL', 'Redis', 'Docker'],
    featured: true,
    client: {
      name: 'DataCorp Analytics',
      industry: 'Data Analytics',
      size: 'Enterprise'
    }
  },
  {
    title: 'StreamAnalytics - Real-time Data Processing',
    slug: 'stream-analytics-platform',
    description: 'High-throughput streaming analytics platform processing millions of events per second.',
    longDescription: 'Real-time streaming analytics platform capable of processing millions of events per second with complex event processing, stream joins, windowing operations, and real-time alerting capabilities.',
    responsibilities: ['Stream processing architecture', 'Complex event processing', 'Real-time alerting system', 'Performance tuning'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'ClickHouse', 'Redis', 'Python', 'Scala', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'StreamTech Solutions',
      industry: 'Real-time Analytics',
      size: 'Enterprise'
    }
  },
  {
    title: 'InsightDash - Business Intelligence Platform',
    slug: 'insight-dashboard-bi',
    description: 'Self-service BI platform with drag-drop dashboards, automated insights, and predictive analytics.',
    longDescription: 'Comprehensive business intelligence platform featuring self-service dashboard creation, automated insight generation, predictive analytics, natural language queries, and enterprise-grade security.',
    responsibilities: ['BI platform development', 'Automated insights engine', 'Natural language processing', 'Dashboard optimization'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'InsightBI Corp',
      industry: 'Business Intelligence',
      size: 'Mid-size'
    }
  },
  {
    title: 'DataPipeline - Automated ETL Orchestration',
    slug: 'data-pipeline-orchestration',
    description: 'No-code ETL platform with visual pipeline builder, data quality monitoring, and lineage tracking.',
    longDescription: 'Advanced ETL orchestration platform with visual pipeline builder, automated data quality monitoring, comprehensive data lineage tracking, and intelligent error recovery mechanisms.',
    responsibilities: ['Visual ETL builder', 'Data quality framework', 'Lineage tracking system', 'Error recovery automation'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Apache Airflow', 'Python', 'Apache Spark', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'React'],
    featured: true,
    client: {
      name: 'DataFlow Technologies',
      industry: 'Data Engineering',
      size: 'Enterprise'
    }
  },
  {
    title: 'RetailAnalytics - Customer Behavior Platform',
    slug: 'retail-analytics-platform',
    description: 'Advanced retail analytics with customer segmentation, churn prediction, and recommendation engines.',
    longDescription: 'Comprehensive retail analytics platform providing customer behavior analysis, advanced segmentation, churn prediction models, personalized recommendation engines, and real-time inventory optimization.',
    responsibilities: ['Customer segmentation algorithms', 'Churn prediction models', 'Recommendation engine', 'Real-time analytics'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Python', 'scikit-learn', 'TensorFlow', 'Apache Spark', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    featured: true,
    client: {
      name: 'RetailTech Inc.',
      industry: 'Retail',
      size: 'Enterprise'
    }
  },
  {
    title: 'LogAnalyzer - Infrastructure Monitoring',
    slug: 'log-analyzer-monitoring',
    description: 'Centralized log analysis platform with anomaly detection, alerting, and compliance reporting.',
    longDescription: 'Enterprise log analysis platform providing centralized log aggregation, real-time anomaly detection, intelligent alerting, compliance reporting, and security incident response automation.',
    responsibilities: ['Log aggregation architecture', 'Anomaly detection algorithms', 'Compliance reporting', 'Security automation'],
    url: null,
    category: 'data',
    type: 'private',
    tech: ['Elasticsearch', 'Logstash', 'Kibana', 'Python', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'SecureOps Inc.',
      industry: 'Security',
      size: 'Enterprise'
    }
  },

  // AI/ML PROJECTS — Consolidated to requested portfolio highlights
  {
    title: 'SheetsAssist - Custom Excel/Sheets Automation with AI Assistants',
    slug: 'sheetsassist-automation',
    description: 'Custom automation for Excel/Google Sheets empowered by AI assistants to automate formulas, data transformation, and workflow tasks.',
    longDescription: 'SheetsAssist provides intelligent automation for spreadsheets by combining programmatic macros, formula generation, and LLM-based AI assistants. Users describe transformations in plain English and the assistant generates optimized formulas, Apps Script/Office Scripts, pivot-ready summaries, and repeatable workflows. Integrations include CSV imports, API connectors, and scheduled syncs.',
    responsibilities: ['Design AI-assisted spreadsheet workflows', 'Generate formulas & scripts via LLMs', 'Implement Apps Script/Office Scripts', 'Build connectors and scheduled syncs'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['TypeScript', 'Google Apps Script', 'Office Scripts', 'Node.js', 'OpenAI / LLMs', 'APIs', 'OAuth2'],
    featured: true,
    client: {
      name: 'Productivity Labs',
      industry: 'SaaS',
      size: 'SMB'
    }
  },
  {
    title: 'DocSearch RAG - RAG-Powered Document Summarization & Search System',
    slug: 'docsearch-rag-system',
    description: 'Retrieval-Augmented Generation system for summarizing, indexing, and searching large document collections with semantic search and concise answers.',
    longDescription: 'DocSearch RAG provides a full pipeline for ingesting documents (PDFs, Word, HTML), extracting embeddings, and serving semantic search and conversational summarization using RAG. It supports chunking strategies, vector stores (Pinecone/Weaviate/FAISS), prompt engineering, and a SaaS-ready search UI for knowledge workers.',
    responsibilities: ['Document ingestion & preprocessing', 'Embedding pipelines and vector store integration', 'RAG prompt design and evaluation', 'Search UI and conversational summarization'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Python', 'LangChain', 'OpenAI / LLMs', 'Pinecone', 'FAISS', 'FastAPI', 'React', 'Docker'],
    featured: true,
    client: {
      name: 'KnowledgeCore',
      industry: 'Enterprise Search',
      size: 'Mid-size'
    }
  },
  {
    title: 'AutoResponder AI - AI-Powered Email & Slack/Teams Auto-Responder',
    slug: 'autoresponder-ai',
    description: 'Automated contextual responders for email and collaboration platforms (Slack/Teams) using AI to classify intent and draft replies.',
    longDescription: 'AutoResponder AI connects to email providers and collaboration platforms to triage messages, detect intent, and draft contextual replies or suggested actions. Features include templating, SLA-aware prioritization, conversation memory, and secure connector patterns for scheduling or sending responses via SMTP, Microsoft Graph, or Slack APIs.',
    responsibilities: ['Connector development for Email/Slack/Teams', 'Intent classification & routing', 'LLM-based reply generation with safety checks', 'SLA and escalation workflows'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Node.js', 'TypeScript', 'OpenAI / LLMs', 'Microsoft Graph API', 'Slack API', 'Redis', 'PostgreSQL', 'Docker'],
    featured: true,
    client: {
      name: 'CommsAI',
      industry: 'Automation',
      size: 'SMB'
    }
  },

  // MOBILE DEVELOPMENT PROJECTS (10)
  // FinanceWallet removed per update
  {
    title: 'HealthTracker - Personal Health Monitor',
    slug: 'health-tracker-app',
    description: 'Comprehensive health monitoring app with wearable integration, AI health insights, and telemedicine features.',
    longDescription: 'Advanced health monitoring application integrating with various wearable devices, providing AI-powered health insights, medication reminders, symptom tracking, and direct telemedicine consultations.',
    responsibilities: ['Wearable device integration', 'Health data analytics', 'AI health insights', 'Telemedicine video calls'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['Flutter', 'Dart', 'Firebase', 'Node.js', 'TensorFlow Lite', 'WebRTC', 'HealthKit', 'Google Fit'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      size: 'Mid-size'
    }
  },
  {
    title: 'EcoRide - Sustainable Transportation',
    slug: 'eco-ride-app',
    description: 'Carbon-neutral ride sharing app with electric vehicle preference and sustainability tracking.',
    longDescription: 'Eco-friendly ride sharing platform prioritizing electric and hybrid vehicles, featuring carbon footprint tracking, sustainability rewards, route optimization for minimal environmental impact, and green driver incentives.',
    responsibilities: ['Real-time GPS tracking', 'Carbon footprint calculation', 'Driver-rider matching', 'Payment processing integration'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['React Native', 'TypeScript', 'Google Maps API', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'Push Notifications'],
    featured: true,
    client: {
      name: 'EcoTransport LLC',
      industry: 'Transportation',
      size: 'Startup'
    }
  },
  {
    title: 'LearnPro - Interactive Education Platform',
    slug: 'learn-pro-app',
    description: 'Gamified learning app with AR/VR lessons, progress tracking, and peer collaboration features.',
    longDescription: 'Innovative educational platform featuring augmented reality lessons, virtual reality experiences, gamified learning paths, real-time progress tracking, and collaborative study groups with peer-to-peer learning.',
    responsibilities: ['AR/VR implementation', 'Gamification engine', 'Real-time collaboration', 'Progress analytics'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['Unity', 'C#', 'ARKit', 'ARCore', 'Firebase', 'Node.js', 'Socket.io', 'TensorFlow Lite'],
    featured: true,
    client: {
      name: 'EduTech Innovations',
      industry: 'Education',
      size: 'Mid-size'
    }
  },
  {
    title: 'SmartHome - IoT Control Hub',
    slug: 'smart-home-app',
    description: 'Comprehensive IoT home automation app with voice control, energy monitoring, and security features.',
    longDescription: 'Advanced smart home management application controlling IoT devices, providing voice command integration, energy usage monitoring, security system management, and automated scheduling with machine learning optimization.',
    responsibilities: ['IoT device integration', 'Voice command processing', 'Energy monitoring analytics', 'Security system integration'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['Flutter', 'Dart', 'MQTT', 'WebSocket', 'Speech Recognition', 'Firebase', 'Node.js', 'InfluxDB'],
    featured: true,
    client: {
      name: 'SmartTech Solutions',
      industry: 'IoT',
      size: 'Enterprise'
    }
  },
  {
    title: 'FitnessPro - AI Personal Trainer',
    slug: 'fitness-pro-app',
    description: 'AI-powered fitness app with computer vision form analysis, personalized workouts, and nutrition tracking.',
    longDescription: 'Intelligent fitness application using computer vision to analyze workout form, providing personalized training programs, nutrition tracking with AI meal recognition, and social fitness challenges.',
    responsibilities: ['Computer vision pose estimation', 'AI workout recommendations', 'Nutrition AI analysis', 'Social features development'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['React Native', 'TensorFlow Lite', 'OpenCV', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Computer Vision'],
    featured: true,
    client: {
      name: 'FitnessAI Corp',
      industry: 'Health & Fitness',
      size: 'Startup'
    }
  },
  {
    title: 'CryptoPortfolio - Digital Asset Manager',
    slug: 'crypto-portfolio-app',
    description: 'Advanced cryptocurrency portfolio app with DeFi integration, yield farming, and tax reporting.',
    longDescription: 'Comprehensive cryptocurrency management platform featuring multi-exchange portfolio tracking, DeFi protocol integration, yield farming opportunities, automated tax reporting, and advanced trading analytics.',
    responsibilities: ['Multi-exchange API integration', 'DeFi protocol connectivity', 'Tax calculation engine', 'Real-time price tracking'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['React Native', 'Web3.js', 'Ethereum', 'Node.js', 'PostgreSQL', 'Redis', 'Blockchain APIs', 'TypeScript'],
    featured: true,
    client: {
      name: 'CryptoPro Solutions',
      industry: 'Cryptocurrency',
      size: 'Mid-size'
    }
  },
  {
    title: 'TravelBuddy - AI Trip Planner',
    slug: 'travel-buddy-app',
    description: 'Intelligent travel planning app with AI recommendations, real-time booking, and social travel features.',
    longDescription: 'Smart travel companion application providing AI-powered trip recommendations, real-time flight and hotel booking, local experience suggestions, travel expense tracking, and social trip sharing with friends.',
    responsibilities: ['AI recommendation engine', 'Real-time booking integration', 'Social features development', 'Expense tracking system'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['Flutter', 'Dart', 'TensorFlow', 'Google Maps API', 'Firebase', 'Node.js', 'MongoDB', 'Payment APIs'],
    featured: true,
    client: {
      name: 'TravelTech Inc.',
      industry: 'Travel',
      size: 'Startup'
    }
  },
  {
    title: 'TaskMaster - Project Management Suite',
    slug: 'task-master-app',
    description: 'Enterprise project management app with AI task prioritization, team collaboration, and time tracking.',
    longDescription: 'Comprehensive project management platform featuring AI-powered task prioritization, real-time team collaboration, advanced time tracking, resource allocation, and predictive project analytics.',
    responsibilities: ['AI task prioritization', 'Real-time collaboration', 'Time tracking optimization', 'Project analytics dashboard'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'TensorFlow', 'Push Notifications'],
    featured: true,
    client: {
      name: 'ProductivityTech Corp',
      industry: 'Productivity',
      size: 'Enterprise'
    }
  },
  {
    title: 'Evoke News - Mobile App & Website',
    slug: 'evoke-news-app',
    description: 'Breaking news mobile app (Android) and companion website — Vue 3 frontend, FastAPI backend, crawler server, and Flutter mobile app.',
    longDescription: 'Evoke News is a cross-platform news product with a Flutter Android/iOS app and a Vue 3 website. The web frontend uses Vue 3, the mobile app is built with Flutter, and the backend uses FastAPI for content APIs. The system also includes a crawler server for ingesting news sources, YouTube API video integration, and an admin dashboard for editorial workflows. Backend services are deployed on DigitalOcean droplets for API, crawler, and DB services.',
    responsibilities: ['Built Vue 3 website and Flutter mobile app', 'Implemented FastAPI backend and YouTube integration', 'Developed crawler server for ingest', 'Admin dashboard & editorial workflows', 'DigitalOcean deployments'],
    url: 'https://play.google.com/store/apps/details?id=com.evokeplanet.breakingnews',
    category: 'mobile',
    type: 'public',
    tech: ['Flutter', 'Vue.js 3', 'FastAPI', 'Python', 'YouTube API', 'Crawler', 'DigitalOcean', 'PostgreSQL', 'Docker'],
    featured: true,
    client: {
      name: 'Evoke Planet',
      industry: 'Media & News',
      size: 'Small'
    }
  },
  {
    title: 'FoodieAI - Smart Recipe Assistant',
    slug: 'foodie-ai-app',
    description: 'AI-powered cooking app with ingredient recognition, recipe generation, and dietary optimization.',
    longDescription: 'Intelligent cooking companion using computer vision for ingredient recognition, AI recipe generation based on available ingredients, dietary restriction optimization, and personalized nutrition tracking.',
    responsibilities: ['Computer vision ingredient detection', 'AI recipe generation', 'Nutrition optimization', 'Dietary tracking system'],
    url: null,
    category: 'mobile',
    type: 'public',
    tech: ['Flutter', 'TensorFlow Lite', 'Computer Vision', 'GPT API', 'Firebase', 'Node.js', 'MongoDB', 'Nutrition APIs'],
    featured: true,
    client: {
      name: 'CulinaryTech Solutions',
      industry: 'Food Technology',
      size: 'Startup'
    }
  },

  // DEVOPS & CLOUD PROJECTS (10)
  {
    title: 'CloudOps - Multi-Cloud Management Platform',
    slug: 'cloudops-management',
    description: 'Unified multi-cloud management platform with cost optimization, security compliance, and automated scaling.',
    longDescription: 'Enterprise cloud management platform providing unified control across AWS, Azure, and GCP with intelligent cost optimization, automated security compliance, resource right-sizing, and predictive scaling capabilities.',
    responsibilities: ['Multi-cloud architecture', 'Cost optimization algorithms', 'Security compliance automation', 'Infrastructure as Code'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Terraform', 'Kubernetes', 'Docker', 'Prometheus', 'Grafana', 'AWS', 'Azure', 'GCP', 'Python', 'Go'],
    featured: true,
    client: {
      name: 'CloudOps Solutions',
      industry: 'Cloud Services',
      size: 'Enterprise'
    }
  },
  {
    title: 'PipelineAI - ML Operations Platform',
    slug: 'pipeline-ai-mlops',
    description: 'End-to-end MLOps platform with model versioning, automated deployment, and performance monitoring.',
    longDescription: 'Comprehensive MLOps platform providing model lifecycle management, automated CI/CD for ML models, A/B testing for model performance, drift detection, and scalable model serving infrastructure.',
    responsibilities: ['MLOps pipeline design', 'Model versioning system', 'Automated testing framework', 'Performance monitoring'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Kubeflow', 'MLflow', 'Docker', 'Kubernetes', 'TensorFlow Serving', 'Prometheus', 'Grafana', 'Python', 'Go'],
    featured: true,
    client: {
      name: 'MLOps Technologies',
      industry: 'Machine Learning',
      size: 'Enterprise'
    }
  },
  
  {
    title: 'SecureCI - DevSecOps Pipeline',
    slug: 'secure-ci-pipeline',
    description: 'Integrated security testing pipeline with vulnerability scanning, compliance checks, and automated remediation.',
    longDescription: 'Advanced DevSecOps platform integrating security testing throughout the CI/CD pipeline with automated vulnerability scanning, compliance verification, security policy enforcement, and intelligent remediation suggestions.',
    responsibilities: ['Security testing automation', 'Vulnerability management', 'Compliance framework', 'Remediation automation'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Jenkins', 'SonarQube', 'OWASP ZAP', 'Docker', 'Kubernetes', 'Vault', 'Terraform', 'Python', 'Bash'],
    featured: true,
    client: {
      name: 'SecureDevOps Inc.',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    }
  },
  {
    title: 'InfraCode - GitOps Infrastructure Manager',
    slug: 'infra-code-gitops',
    description: 'GitOps-based infrastructure management with declarative configuration and automated drift correction.',
    longDescription: 'Modern infrastructure management platform using GitOps principles for declarative infrastructure configuration, automated drift detection and correction, policy as code, and collaborative infrastructure changes.',
    responsibilities: ['GitOps architecture', 'Drift detection system', 'Policy automation', 'Infrastructure versioning'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['ArgoCD', 'Flux', 'Terraform', 'Kubernetes', 'Helm', 'Git', 'OPA', 'Prometheus', 'Grafana'],
    featured: true,
    client: {
      name: 'InfraTech Solutions',
      industry: 'Infrastructure',
      size: 'Enterprise'
    }
  },
  {
    title: 'MonitorMax - Observability Platform',
    slug: 'monitor-max-observability',
    description: 'Comprehensive observability platform with distributed tracing, metrics, logs, and AI-powered insights.',
    longDescription: 'Full-stack observability platform providing distributed tracing, custom metrics collection, centralized logging, performance analytics, and AI-powered anomaly detection with automated root cause analysis.',
    responsibilities: ['Distributed tracing implementation', 'Metrics aggregation', 'Log analysis system', 'AI anomaly detection'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Jaeger', 'Prometheus', 'Grafana', 'ELK Stack', 'OpenTelemetry', 'Kubernetes', 'Python', 'Go', 'Machine Learning'],
    featured: true,
    client: {
      name: 'ObservabilityTech Corp',
      industry: 'Monitoring',
      size: 'Enterprise'
    }
  },
  {
    title: 'AutoScale - Dynamic Resource Manager',
    slug: 'auto-scale-manager',
    description: 'Intelligent auto-scaling platform with predictive scaling, cost optimization, and performance tuning.',
    longDescription: 'Advanced auto-scaling solution using machine learning for predictive scaling decisions, intelligent resource allocation, cost optimization across multiple cloud providers, and automated performance tuning.',
    responsibilities: ['Predictive scaling algorithms', 'Cost optimization engine', 'Performance tuning automation', 'Multi-cloud resource management'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Kubernetes HPA', 'KEDA', 'Prometheus', 'Machine Learning', 'Python', 'Go', 'AWS', 'Azure', 'GCP'],
    featured: true,
    client: {
      name: 'AutoScale Technologies',
      industry: 'Cloud Optimization',
      size: 'Mid-size'
    }
  },
  {
    title: 'DisasterRecovery - Automated Backup System',
    slug: 'disaster-recovery-system',
    description: 'Enterprise disaster recovery platform with automated backups, failover testing, and compliance reporting.',
    longDescription: 'Comprehensive disaster recovery solution providing automated backup scheduling, cross-region replication, automated failover testing, RTO/RPO monitoring, and regulatory compliance reporting.',
    responsibilities: ['Backup automation', 'Failover orchestration', 'Compliance reporting', 'Recovery testing'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Velero', 'Terraform', 'AWS S3', 'Azure Blob', 'GCP Storage', 'Kubernetes', 'Python', 'Bash', 'Monitoring'],
    featured: true,
    client: {
      name: 'RecoveryTech Inc.',
      industry: 'Data Protection',
      size: 'Enterprise'
    }
  },
  {
    title: 'ConfigMaster - Configuration Management',
    slug: 'config-master-system',
    description: 'Centralized configuration management with version control, environment promotion, and rollback capabilities.',
    longDescription: 'Advanced configuration management platform providing centralized config storage, version control, environment-specific configurations, automated promotion pipelines, and instant rollback capabilities.',
    responsibilities: ['Configuration versioning', 'Environment management', 'Promotion automation', 'Rollback mechanisms'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Consul', 'Vault', 'Git', 'Kubernetes ConfigMaps', 'Helm', 'ArgoCD', 'Python', 'Go', 'REST APIs'],
    featured: true,
    client: {
      name: 'ConfigTech Solutions',
      industry: 'Configuration Management',
      size: 'Mid-size'
    }
  },
  {
    title: 'NetworkOps - SDN Management Platform',
    slug: 'network-ops-sdn',
    description: 'Software-defined networking platform with automated provisioning, traffic optimization, and security policies.',
    longDescription: 'Enterprise SDN management platform providing automated network provisioning, intelligent traffic routing, dynamic security policy enforcement, and comprehensive network analytics with AI-powered optimization.',
    responsibilities: ['SDN controller development', 'Traffic optimization algorithms', 'Security policy automation', 'Network analytics'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['OpenDaylight', 'ONOS', 'OpenFlow', 'Python', 'Go', 'Kubernetes', 'Istio', 'Prometheus', 'Machine Learning'],
    featured: true,
    client: {
      name: 'NetworkTech Corp',
      industry: 'Networking',
      size: 'Enterprise'
    }
  },
  {
    title: 'ClusterManager - Kubernetes Operations',
    slug: 'cluster-manager-k8s',
    description: 'Enterprise Kubernetes management platform with multi-cluster operations, policy enforcement, and cost tracking.',
    longDescription: 'Comprehensive Kubernetes management solution providing multi-cluster operations, automated policy enforcement, resource quota management, cost allocation tracking, and cluster lifecycle automation.',
    responsibilities: ['Multi-cluster management', 'Policy enforcement', 'Cost tracking system', 'Cluster automation'],
    url: null,
    category: 'devops',
    type: 'private',
    tech: ['Kubernetes', 'Rancher', 'OPA', 'Falco', 'Prometheus', 'Grafana', 'Helm', 'ArgoCD', 'Go', 'Python'],
    featured: true,
    client: {
      name: 'K8s Solutions Inc.',
      industry: 'Container Orchestration',
      size: 'Enterprise'
    }
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');
    
    // Insert seed data
    const projects = await Project.insertMany(seedProjects);
    console.log(`✅ Seeded ${projects.length} projects`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();
