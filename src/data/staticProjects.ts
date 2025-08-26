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
    _id: '9',
    title: 'FinanceCore - Banking API Gateway',
    slug: 'financecore-gateway',
    description: 'PCI-DSS compliant banking API gateway with fraud detection, transaction processing, and regulatory compliance.',
    longDescription: 'Secure banking API gateway handling millions of transactions daily with real-time fraud detection, PCI-DSS compliance, regulatory reporting, multi-currency support, and high-frequency trading capabilities.',
    responsibilities: ['API gateway architecture', 'Fraud detection algorithms', 'PCI-DSS compliance', 'High-frequency transaction processing'],
    category: 'backend',
    type: 'private' as const,
    tech: ['Java', 'Spring Boot', 'Redis', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes', 'OAuth2', 'JWT', 'Elasticsearch'],
    featured: true,
    client: {
      name: 'SecureBank Corp',
      industry: 'Banking',
      size: 'Enterprise'
    },
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2024-05-01T00:00:00.000Z'
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
    _id: '16',
    title: 'PredictiveHealth - Medical Diagnosis AI',
    slug: 'predictive-health-diagnosis',
    description: 'AI-powered medical diagnosis system using computer vision and deep learning for medical imaging analysis.',
    longDescription: 'Advanced medical AI system that analyzes medical images including X-rays, MRIs, and CT scans using deep learning to assist healthcare professionals in early disease detection and diagnosis.',
    responsibilities: ['Medical imaging AI models', 'HIPAA-compliant infrastructure', 'Clinical validation pipeline', 'Real-time inference optimization'],
    category: 'ai',
    type: 'private' as const,
    tech: ['TensorFlow', 'PyTorch', 'OpenCV', 'DICOM', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'HIPAA'],
    featured: true,
    client: {
      name: 'MedTech Innovations',
      industry: 'Healthcare',
      size: 'Enterprise'
    },
    createdAt: '2024-08-15T00:00:00.000Z',
    updatedAt: '2024-08-15T00:00:00.000Z'
  },
  
  {
    _id: '18',
    title: 'FraudGuard - Financial Fraud Detection',
    slug: 'fraud-guard-detection',
    description: 'Real-time fraud detection system using ensemble machine learning and behavioral analysis.',
    longDescription: 'Advanced fraud detection platform combining ensemble machine learning models, behavioral biometrics, device fingerprinting, and graph analytics to detect fraudulent transactions in real-time.',
    responsibilities: ['Ensemble ML models', 'Behavioral analytics', 'Graph-based fraud detection', 'Real-time scoring engine'],
    category: 'ai',
    type: 'private' as const,
    tech: ['Python', 'scikit-learn', 'XGBoost', 'Neo4j', 'Apache Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'SecureFinance Corp',
      industry: 'Financial Services',
      size: 'Enterprise'
    },
    createdAt: '2024-09-15T00:00:00.000Z',
    updatedAt: '2024-09-15T00:00:00.000Z'
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
  {
    _id: '22',
    title: 'PipelineAI - ML Operations Platform',
    slug: 'pipeline-ai-mlops',
    description: 'End-to-end MLOps platform with model versioning, automated deployment, and performance monitoring.',
    longDescription: 'Comprehensive MLOps platform providing model lifecycle management, automated CI/CD for ML models, A/B testing for model performance, drift detection, and scalable model serving infrastructure.',
    responsibilities: ['MLOps pipeline design', 'Model versioning system', 'Automated testing framework', 'Performance monitoring'],
    category: 'devops',
    type: 'private' as const,
    tech: ['Kubeflow', 'MLflow', 'Docker', 'Kubernetes', 'TensorFlow Serving', 'Prometheus', 'Grafana', 'Python', 'Go'],
    featured: true,
    client: {
      name: 'MLOps Technologies',
      industry: 'Machine Learning',
      size: 'Enterprise'
    },
    createdAt: '2024-11-15T00:00:00.000Z',
    updatedAt: '2024-11-15T00:00:00.000Z'
  }
  ,
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
];

// Deduplicate by slug (first occurrence wins)
const dedupeMap = new Map<string, unknown>();
rawStaticProjects.forEach((p) => {
  const key = p.slug || p._id || JSON.stringify(p);
  if (!dedupeMap.has(key)) dedupeMap.set(key, p);
});

export const staticProjects = Array.from(dedupeMap.values());

export const staticProjectsResponse = {
  projects: staticProjects,
  totalPages: 1,
  currentPage: 1,
  total: staticProjects.length
};
