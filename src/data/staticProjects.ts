export const staticProjects = [
  // === FEATURED ENTERPRISE PROJECTS ===
  {
    _id: '1',
    title: 'Enterprise Banking Platform',
    slug: 'enterprise-banking-platform',
    description: 'Next-generation digital banking platform with 95% faster transactions, AI fraud detection, and seamless mobile experience that increased engagement by 85%.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A comprehensive digital banking transformation project that modernized legacy banking infrastructure into a cloud-native, microservices-based platform. The system maintains 99.99% uptime, serving both retail and corporate banking customers.

Key achievements include reducing transaction processing time by 95% (from 3 seconds to under 200ms), implementing AI-powered fraud detection, and launching a mobile-first experience that increased customer engagement by 85%.

The platform features real-time payment processing, multi-currency support, biometric authentication, personalized financial insights, and seamless integration with third-party fintech services. Built with a focus on security, scalability, and regulatory compliance (PCI-DSS, PSD2, Open Banking).`,
    responsibilities: [
      'Led architecture design for microservices-based banking core',
      'Implemented real-time payment processing with sub-200ms latency',
      'Built AI fraud detection system with 92% accuracy',
      'Designed multi-region disaster recovery with 99.99% uptime SLA',
      'Integrated Open Banking APIs for third-party fintech partners'
    ],
    category: 'backend',
    type: 'private' as const,
    tech: ['Java', 'Spring Boot', 'Kubernetes', 'Apache Kafka', 'PostgreSQL', 'Redis', 'TensorFlow', 'AWS', 'gRPC'],
    featured: true,
    client: {
      name: 'Global Financial Services',
      industry: 'Banking & Finance',
      size: 'Enterprise'
    },
    metrics: {
      users: 50000,
      performance: '200ms avg response time',
      impact: '92% fraud detection accuracy'
    },
    status: 'Production',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    _id: '2',
    title: 'AI-Powered Healthcare Diagnostics',
    slug: 'ai-healthcare-diagnostics',
    description: 'FDA-approved AI platform for medical image analysis, achieving 97% accuracy in early cancer detection across radiology workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Revolutionary healthcare AI platform that assists radiologists in analyzing medical images with unprecedented accuracy. The system processes X-rays, CT scans, MRIs, and mammograms, providing AI-powered second opinions that have improved early cancer detection rates by 34%.

The platform integrates seamlessly with existing PACS systems and radiology workflows, requiring no changes to existing hospital infrastructure. Our deep learning models, trained on extensive annotated medical images, achieve 97% accuracy in detecting abnormalities, matching or exceeding human radiologist performance.

Key features include automated prioritization of urgent cases (reducing critical case turnaround by 60%), structured reporting with AI-generated findings, longitudinal patient tracking, and comprehensive audit trails for regulatory compliance. The system is FDA 510(k) cleared and CE marked for clinical use.`,
    responsibilities: [
      'Developed CNN-based image classification models with 97% accuracy',
      'Built HIPAA-compliant data pipeline for medical imaging',
      'Implemented PACS/RIS integration for hospital deployments',
      'Created explainable AI visualizations for radiologist review',
      'Led FDA 510(k) submission and regulatory compliance'
    ],
    category: 'ai',
    type: 'private' as const,
    tech: ['Python', 'PyTorch', 'CUDA', 'FastAPI', 'PostgreSQL', 'DICOM', 'Docker', 'Kubernetes', 'AWS'],
    featured: true,
    client: {
      name: 'MedAI Diagnostics',
      industry: 'Healthcare',
      size: 'Enterprise'
    },
    metrics: {
      users: 2500,
      performance: '97% detection accuracy',
      impact: '34% improvement in early detection'
    },
    status: 'Production',
    createdAt: '2024-02-01T00:00:00.000Z',
    updatedAt: '2024-02-01T00:00:00.000Z'
  },
  {
    _id: '3',
    title: 'Global E-Commerce Marketplace',
    slug: 'global-ecommerce-marketplace',
    description: 'High-traffic marketplace with AI recommendations driving 35% of revenue, real-time inventory management, and multi-vendor system serving 30 countries.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Enterprise-scale e-commerce platform supporting multiple sellers and products across 15 countries. The platform processes orders efficiently during peak periods, with a sophisticated multi-vendor architecture that ensures seamless buyer and seller experiences.

The recommendation engine, powered by collaborative filtering and deep learning, drives 35% of total revenue through personalized product suggestions. Real-time inventory management across multiple warehouses and drop-ship vendors ensures accurate stock levels with 99.8% inventory accuracy.

Advanced features include dynamic pricing optimization, fraud prevention, multi-currency/multi-language support, integrated logistics with 50+ carrier partners, and a seller analytics dashboard that has helped vendors increase sales by an average of 45%.`,
    responsibilities: [
      'Architected event-driven microservices with high throughput',
      'Built AI recommendation engine driving 35% of platform revenue',
      'Implemented real-time inventory sync across vendor systems',
      'Developed dynamic pricing engine optimizing margins by 12%',
      'Led payment integration with 15+ global payment providers'
    ],
    url: 'https://marketplace-demo.vercel.app',
    category: 'web',
    type: 'public' as const,
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Apache Kafka', 'TensorFlow', 'Stripe'],
    featured: true,
    client: {
      name: 'Global Commerce Inc.',
      industry: 'E-Commerce',
      size: 'Enterprise'
    },
    metrics: {
      users: 25000,
      performance: 'High-throughput architecture',
      impact: '35% revenue from AI recommendations'
    },
    status: 'Production',
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z'
  },
  {
    _id: '4',
    title: 'Autonomous Fleet Management',
    slug: 'autonomous-fleet-management',
    description: 'IoT platform managing 2,500+ vehicles with real-time tracking, predictive maintenance, and route optimization reducing fuel costs by 23%.',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Comprehensive fleet management platform that transformed a major logistics company's operations through real-time vehicle tracking, AI-powered route optimization, and predictive maintenance capabilities.

The platform manages 2,500+ vehicles across 8 countries, processing millions of GPS data points daily to provide real-time visibility into fleet operations. Our route optimization algorithm, considering traffic patterns, weather, delivery windows, and driver hours, has reduced fuel costs by 23% and improved on-time delivery rates to 98.5%.

Predictive maintenance models analyze 200+ vehicle sensors to predict component failures 2-3 weeks in advance, reducing unplanned downtime by 67% and maintenance costs by 35%. The driver safety module uses computer vision and telematics to score driving behavior, reducing accidents by 40%.`,
    responsibilities: [
      'Built real-time tracking system processing GPS data',
      'Developed ML route optimization reducing fuel costs by 23%',
      'Implemented predictive maintenance with 85% failure prediction accuracy',
      'Created driver safety scoring with computer vision analysis',
      'Designed multi-tenant architecture for enterprise customers'
    ],
    category: 'backend',
    type: 'private' as const,
    tech: ['Go', 'Python', 'TimescaleDB', 'Apache Kafka', 'TensorFlow', 'Redis', 'Kubernetes', 'AWS IoT', 'gRPC'],
    featured: true,
    client: {
      name: 'FleetTech Logistics',
      industry: 'Logistics & Transportation',
      size: 'Enterprise'
    },
    metrics: {
      users: 3500,
      performance: 'Real-time GPS tracking',
      impact: '23% fuel cost reduction'
    },
    status: 'Production',
    createdAt: '2024-04-01T00:00:00.000Z',
    updatedAt: '2024-04-01T00:00:00.000Z'
  },
  {
    _id: '5',
    title: 'Real-Time Trading Platform',
    slug: 'realtime-trading-platform',
    description: 'Ultra-low-latency trading system with <5ms execution, algorithmic trading, risk management, and regulatory reporting.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
    longDescription: `High-frequency trading platform designed for institutional investors, processing trades daily with average latency under 5 milliseconds. The system supports equities, fixed income, derivatives, and cryptocurrency trading across 20+ global exchanges.

The algorithmic trading engine supports complex multi-leg strategies, smart order routing, and real-time risk management with sub-millisecond position updates. Advanced features include pre-trade compliance checks, real-time P&L calculation, and automated regulatory reporting (MiFID II, EMIR, Dodd-Frank).

The platform's architecture achieves 99.999% availability with active-active multi-region deployment, processing high order volumes during market volatility events.`,
    responsibilities: [
      'Designed ultra-low-latency architecture with <5ms execution',
      'Built algorithmic trading engine with smart order routing',
      'Implemented real-time risk management and position tracking',
      'Developed regulatory reporting for MiFID II and EMIR compliance',
      'Created FIX protocol integration with 40+ exchanges'
    ],
    category: 'backend',
    type: 'private' as const,
    tech: ['C++', 'Java', 'KDB+', 'Redis', 'Apache Kafka', 'FIX Protocol', 'Linux', 'FPGA', 'AWS'],
    featured: true,
    client: {
      name: 'Capital Markets Technologies',
      industry: 'Financial Services',
      size: 'Enterprise'
    },
    metrics: {
      users: 850,
      performance: '<5ms execution latency',
      impact: 'High-volume trading capacity'
    },
    status: 'Production',
    createdAt: '2024-05-01T00:00:00.000Z',
    updatedAt: '2024-05-01T00:00:00.000Z'
  },

  // === WEB DEVELOPMENT PROJECTS ===
  {
    _id: '6',
    title: 'Falaya - Real Estate Marketplace',
    slug: 'falaya',
    description: 'End-to-end real estate platform revolutionizing property transactions with digital paperwork, virtual tours, and AI-powered valuations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Falaya is transforming the real estate industry by digitizing the entire property transaction lifecycle. From initial listing to closing, the platform eliminates paperwork, reduces transaction time by 60%, and provides unprecedented transparency for buyers, sellers, and agents.

Key features include AI-powered property valuations using comparable sales and market trends, 3D virtual tours with immersive walkthroughs, digital document management with e-signatures, and a sophisticated matching algorithm that connects buyers with properties matching their preferences and budget.

The platform has facilitated numerous property transactions, with an average time-to-close 45% faster than traditional methods. Agent tools include CRM integration, automated marketing, and performance analytics.`,
    responsibilities: [
      'Led full-stack development for web and mobile platforms',
      'Built AI property valuation engine with 95% accuracy',
      'Implemented digital document workflow with DocuSign integration',
      'Developed 3D virtual tour system with Matterport integration',
      'Created agent CRM and marketing automation tools'
    ],
    url: 'https://falaya.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'AWS', 'Python', 'TensorFlow', 'DocuSign API', 'Matterport'],
    featured: true,
    client: {
      name: 'Falaya Inc.',
      industry: 'Real Estate',
      size: 'Startup'
    },
    metrics: {
      users: 8500,
      performance: '99.9% uptime',
      impact: '45% faster time-to-close'
    },
    status: 'Production',
    createdAt: '2024-01-01T00:00:00.000Z',
    updatedAt: '2024-01-01T00:00:00.000Z'
  },
  {
    _id: '7',
    title: 'IntellicV - AI Resume Assistant',
    slug: 'intellicv-ai-assistant',
    description: 'GPT-powered resume builder that transforms career narratives through conversational AI, helping professionals optimize their resumes.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    longDescription: `IntellicV revolutionizes resume creation by combining conversational AI with deep understanding of hiring practices. Users describe their experience naturally, and our AI crafts ATS-optimized resumes tailored to specific job descriptions and industries.

The platform analyzes job postings to identify key requirements, then guides users through a conversation to highlight relevant experiences and quantified achievements. Our AI has been trained on successful resumes and hiring data from major companies.

Features include real-time ATS scoring, industry-specific templates, cover letter generation, LinkedIn profile optimization, and interview preparation with AI-powered mock interviews. Users report a 3x increase in interview callbacks after using IntellicV.`,
    responsibilities: [
      'Integrated GPT-4 for natural language resume editing',
      'Built ATS optimization scoring with 95% accuracy',
      'Developed job description analyzer for keyword matching',
      'Implemented multi-format export (PDF, Word, JSON Resume)',
      'Created interview preparation module with AI feedback'
    ],
    url: 'https://intellicv-ai-assistant-1.onrender.com/',
    category: 'ai',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'OpenAI GPT-4', 'MongoDB', 'Python', 'NLP', 'PDF Generation', 'Express'],
    featured: true,
    client: {
      name: 'IntellicV Technologies',
      industry: 'AI/HR Tech',
      size: 'Startup'
    },
    metrics: {
      users: 1200,
      performance: '3x interview callback rate',
      impact: 'ATS optimization & AI coaching'
    },
    status: 'Production',
    createdAt: '2024-01-05T00:00:00.000Z',
    updatedAt: '2024-01-05T00:00:00.000Z'
  },
  {
    _id: '8',
    title: 'LastChance Ticket - Event Platform',
    slug: 'lastchance-ticket-booking',
    description: 'High-performance ticketing platform handling concurrent users during major events with real-time inventory and instant checkout.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1200&auto=format&fit=crop',
    longDescription: `LastChance Ticket is a battle-tested event ticketing platform designed to handle extreme traffic spikes during high-demand events. The system has successfully processed ticket sales during major concert on-sales without any downtime.

The platform features intelligent queue management that fairly distributes access during high-demand periods, real-time inventory with sub-second accuracy, dynamic pricing based on demand, and a checkout flow optimized for mobile with 98% completion rate.

Event organizers benefit from comprehensive analytics, customizable event pages, promotional tools, and automated payouts. The fraud prevention system uses machine learning to detect and block scalper bots, protecting genuine fans.`,
    responsibilities: [
      'Architected system handling high concurrent traffic',
      'Built real-time inventory with Redis and event sourcing',
      'Implemented queue management for fair ticket distribution',
      'Developed ML-based bot detection with 99% accuracy',
      'Created event organizer dashboard with real-time analytics'
    ],
    url: 'https://www.lastchanceticket.com/',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'Socket.io', 'CloudFlare', 'AWS'],
    featured: true,
    client: {
      name: 'LastChance Events',
      industry: 'Event Management',
      size: 'Mid-size'
    },
    metrics: {
      users: 12000,
      performance: 'High concurrent capacity',
      impact: 'Zero downtime during peak sales'
    },
    status: 'Production',
    createdAt: '2024-01-10T00:00:00.000Z',
    updatedAt: '2024-01-10T00:00:00.000Z'
  },
  {
    _id: '9',
    title: 'Enterprise Learning Management System',
    slug: 'enterprise-lms',
    description: 'Comprehensive LMS deployed across multiple universities with AI-powered tutoring, adaptive learning paths, and real-time collaboration.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A next-generation learning management system designed for higher education institutions, currently serving students across multiple universities globally. The platform combines traditional LMS functionality with AI-powered personalization and modern collaboration tools.

The adaptive learning engine analyzes student performance in real-time, adjusting content difficulty and suggesting supplementary materials to optimize learning outcomes. Our AI tutor provides 24/7 homework help with step-by-step explanations, improving student comprehension by 40%.

Features include live virtual classrooms with breakout rooms, plagiarism detection, automated grading for assignments and exams, comprehensive analytics for educators, and seamless integration with existing university systems (SIS, SSO, video conferencing).`,
    responsibilities: [
      'Led architecture for multi-tenant SaaS deployment',
      'Built AI tutoring system with GPT integration',
      'Implemented adaptive learning algorithms',
      'Developed real-time collaboration with WebRTC',
      'Created campus SSO and SIS integrations'
    ],
    category: 'web',
    type: 'private' as const,
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebRTC', 'Socket.io', 'OpenAI', 'AWS'],
    featured: true,
    client: {
      name: 'EduTech Innovations',
      industry: 'Education',
      size: 'Enterprise'
    },
    metrics: {
      users: 35000,
      performance: '99.9% uptime SLA',
      impact: '40% improvement in learning outcomes'
    },
    status: 'Production',
    createdAt: '2024-02-15T00:00:00.000Z',
    updatedAt: '2024-02-15T00:00:00.000Z'
  },
  {
    _id: '10',
    title: 'Restaurant POS with AI Forecasting',
    slug: 'restaurant-pos-ai-forecasting',
    description: 'Intelligent restaurant management system with AI sales forecasting, inventory optimization, and real-time analytics saving 25% on food costs.',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A comprehensive restaurant management platform that combines traditional POS functionality with cutting-edge AI capabilities. The system helps restaurants optimize operations, reduce waste, and increase profitability through data-driven insights.

The AI forecasting engine predicts daily sales by menu item with 92% accuracy, enabling precise inventory ordering and staff scheduling. Restaurants using our platform report 25% reduction in food waste and 15% improvement in labor efficiency.

Features include real-time order management, kitchen display system integration, tableside ordering, inventory tracking with automatic reorder alerts, staff scheduling based on predicted demand, customer loyalty programs, and comprehensive P&L analytics.`,
    responsibilities: [
      'Developed AI forecasting with 92% accuracy',
      'Built real-time POS with offline capability',
      'Implemented inventory optimization algorithms',
      'Created kitchen display and order management system',
      'Designed analytics dashboard with P&L insights'
    ],
    url: 'https://resturant-os-frontend-8wdr.vercel.app',
    category: 'ai',
    type: 'public' as const,
    tech: ['React', 'Next.js', 'TypeScript', 'Python', 'TensorFlow', 'Node.js', 'PostgreSQL', 'Redis'],
    featured: true,
    client: {
      name: 'RestaurantTech Solutions',
      industry: 'Restaurant Technology',
      size: 'Mid-size'
    },
    metrics: {
      users: 5000,
      performance: '92% forecast accuracy',
      impact: '25% reduction in food waste'
    },
    status: 'Production',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-15T00:00:00.000Z'
  },

  // === MOBILE PROJECTS ===
  {
    _id: '11',
    title: 'HealthConnect - Telemedicine Platform',
    slug: 'healthconnect-telemedicine',
    description: 'HIPAA-compliant telemedicine app with 1M+ video consultations, AI symptom checker, and integrated prescription management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    longDescription: `HealthConnect is a comprehensive telemedicine platform that has transformed healthcare delivery for a major health system, facilitating over 1 million video consultations annually. The platform provides patients with 24/7 access to healthcare providers from the comfort of their homes.

The AI-powered symptom checker helps patients describe their conditions and routes them to appropriate care levels, reducing unnecessary ER visits by 35%. Integration with the health system's EHR ensures providers have complete patient history during consultations.

Features include HD video consultations with screen sharing, secure messaging, e-prescriptions with pharmacy integration, appointment scheduling, health records access, and remote patient monitoring for chronic conditions.`,
    responsibilities: [
      'Led mobile development for iOS and Android',
      'Implemented HIPAA-compliant video with E2E encryption',
      'Built AI symptom checker with clinical validation',
      'Integrated with Epic EHR for patient data access',
      'Developed remote monitoring for chronic care management'
    ],
    url: 'https://healthconnect-platform.com',
    category: 'mobile',
    type: 'public' as const,
    tech: ['React Native', 'TypeScript', 'WebRTC', 'Node.js', 'PostgreSQL', 'Twilio', 'FHIR', 'AWS'],
    featured: true,
    client: {
      name: 'HealthTech Solutions',
      industry: 'Healthcare',
      size: 'Enterprise'
    },
    metrics: {
      users: 1500000,
      performance: '1M+ video consultations/year',
      impact: '35% reduction in ER visits'
    },
    status: 'Production',
    createdAt: '2024-03-01T00:00:00.000Z',
    updatedAt: '2024-03-01T00:00:00.000Z'
  },
  {
    _id: '12',
    title: 'FitCoach - AI Fitness Companion',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
    slug: 'fitcoach-ai-fitness',
    description: 'Personalized fitness app with AI workout generation, real-time form analysis using computer vision, and 500K+ active users.',
    longDescription: `FitCoach is an intelligent fitness companion that creates personalized workout plans based on user goals, fitness level, and available equipment. With 500,000+ active users, the app has helped people complete over 10 million workouts.

The AI workout engine adapts in real-time based on user feedback, adjusting difficulty and exercise selection to maximize results. Our computer vision-powered form analysis provides real-time feedback during exercises, reducing injury risk and improving effectiveness.

Features include personalized meal plans with macro tracking, integration with wearables (Apple Watch, Fitbit, Garmin), progress photos with body composition analysis, community challenges, and audio-guided workouts with coaching cues.`,
    responsibilities: [
      'Built AI workout generation with progressive overload',
      'Developed pose estimation for real-time form analysis',
      'Implemented nutrition tracking with 1M+ food database',
      'Created wearable integrations (HealthKit, Google Fit)',
      'Designed gamification system driving 60% daily retention'
    ],
    url: 'https://play.google.com/store/apps/details?id=com.fitcoach.app',
    category: 'mobile',
    type: 'public' as const,
    tech: ['React Native', 'TypeScript', 'TensorFlow Lite', 'Node.js', 'Firebase', 'HealthKit', 'Google Fit'],
    featured: true,
    client: {
      name: 'FitCoach Technologies',
      industry: 'Health & Fitness',
      size: 'Startup'
    },
    metrics: {
      users: 500000,
      performance: '10M+ workouts completed',
      impact: '60% daily active retention'
    },
    status: 'Production',
    createdAt: '2025-11-01T00:00:00.000Z',
    updatedAt: '2025-11-01T00:00:00.000Z'
  },
  {
    _id: '13',
    title: 'Evoke News - Breaking News App',
    slug: 'evoke-news-app',
    description: 'Real-time news app with AI-powered content curation, video integration, and personalized news feeds serving 200K+ daily readers.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Evoke News delivers breaking news to 200,000+ daily active users through a sophisticated content platform combining human editorial oversight with AI-powered personalization. The app aggregates news from 500+ sources, curating content based on user interests and reading patterns.

The backend features a custom crawler that indexes 10,000+ articles daily, with NLP-based categorization and sentiment analysis. YouTube API integration provides video news content, while push notifications ensure users never miss breaking stories.

Features include offline reading, customizable news categories, bookmarking, share functionality, dark mode, and an editorial dashboard for content management and analytics.`,
    responsibilities: [
      'Built Flutter mobile app for iOS and Android',
      'Developed FastAPI backend with content crawler',
      'Implemented AI content curation and categorization',
      'Created editorial dashboard for content management',
      'Deployed on DigitalOcean with auto-scaling'
    ],
    url: 'https://play.google.com/store/apps/details?id=com.evokeplanet.breakingnews',
    category: 'mobile',
    type: 'public' as const,
    tech: ['Flutter', 'Vue.js', 'FastAPI', 'Python', 'PostgreSQL', 'YouTube API', 'DigitalOcean', 'Docker'],
    featured: true,
    client: {
      name: 'Evoke Planet',
      industry: 'Media & News',
      size: 'Small'
    },
    metrics: {
      users: 200000,
      performance: '10K+ articles indexed daily',
      impact: '200K+ daily active readers'
    },
    status: 'Production',
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  },
  {
    _id: '14',
    title: 'TravelMate - Smart Trip Planner',
    slug: 'travelmate-trip-planning',
    description: 'AI-powered travel app creating personalized itineraries, with offline maps, expense tracking, and real-time flight updates.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    longDescription: `TravelMate simplifies travel planning with AI-generated itineraries tailored to user preferences, budget, and interests. The app has helped plan over 100,000 trips, with users rating their travel experiences 4.8/5 stars on average.

The AI considers factors like travel style, pace preferences, dietary restrictions, accessibility needs, and budget to create day-by-day itineraries with restaurant recommendations, activity bookings, and optimal routing between destinations.

Features include offline maps and guides, real-time flight/train tracking, collaborative trip planning, expense tracking with receipt scanning, travel document storage, and emergency assistance with local emergency numbers and embassy contacts.`,
    responsibilities: [
      'Built AI itinerary generation using GPT and travel APIs',
      'Implemented offline-first architecture with sync',
      'Integrated booking APIs (Booking.com, Skyscanner)',
      'Developed expense tracking with OCR receipt scanning',
      'Created real-time notification system for travel updates'
    ],
    url: 'https://apps.apple.com/app/travelmate',
    category: 'mobile',
    type: 'public' as const,
    tech: ['Flutter', 'Dart', 'Node.js', 'PostgreSQL', 'OpenAI', 'Google Maps', 'Firebase', 'Redis'],
    featured: true,
    client: {
      name: 'TravelMate Inc.',
      industry: 'Travel',
      size: 'Startup'
    },
    metrics: {
      users: 150000,
      performance: '100K+ trips planned',
      impact: '4.8/5 average trip rating'
    },
    status: 'Production',
    createdAt: '2025-12-01T00:00:00.000Z',
    updatedAt: '2025-12-01T00:00:00.000Z'
  },

  // === AI/ML PROJECTS ===
  {
    _id: '15',
    title: 'DocSearch RAG - Enterprise Knowledge',
    slug: 'docsearch-rag-system',
    description: 'Retrieval-Augmented Generation platform enabling semantic search across 10M+ enterprise documents with conversational Q&A.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    longDescription: `DocSearch RAG transforms how enterprises access institutional knowledge by enabling natural language queries across millions of documents. The platform has reduced time-to-information by 80% for knowledge workers at Fortune 500 companies.

The system ingests documents from multiple sources (SharePoint, Google Drive, Confluence, file servers), processes them through our embedding pipeline, and stores vectors in a high-performance vector database. Users can ask questions in natural language and receive accurate answers with source citations.

Features include document summarization, automatic categorization, access control respecting original document permissions, conversation history, and analytics showing knowledge gaps and popular queries.`,
    responsibilities: [
      'Designed document ingestion pipeline for 20+ formats',
      'Built embedding system processing 100K+ documents/day',
      'Implemented RAG with GPT-4 for conversational search',
      'Created access control layer respecting source permissions',
      'Developed admin dashboard with usage analytics'
    ],
    category: 'ai',
    type: 'private' as const,
    tech: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'React', 'Docker', 'Kubernetes'],
    featured: true,
    client: {
      name: 'KnowledgeCore',
      industry: 'Enterprise Search',
      size: 'Enterprise'
    },
    metrics: {
      users: 50000,
      performance: '10M+ documents indexed',
      impact: '80% reduction in search time'
    },
    status: 'Production',
    createdAt: '2025-07-15T00:00:00.000Z',
    updatedAt: '2025-07-15T00:00:00.000Z'
  },
  {
    _id: '16',
    title: 'CodeReview AI - Automated Analysis',
    slug: 'codereview-ai-analysis',
    description: 'AI code review platform integrated with 5,000+ repositories, catching 40% more bugs than manual review alone.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    longDescription: `CodeReview AI augments development teams with AI-powered code analysis that catches bugs, security vulnerabilities, and code quality issues before they reach production. The platform integrates with GitHub and GitLab, providing automated reviews on every pull request.

Our models, trained on millions of code reviews from open source projects, understand context and can identify subtle bugs that static analysis tools miss. The system catches 40% more issues than manual review alone while reducing review time by 50%.

Features include security vulnerability detection (OWASP Top 10), code quality scoring, best practices suggestions, automated documentation generation, and custom rule configuration for team coding standards.`,
    responsibilities: [
      'Built code analysis engine with AST parsing',
      'Trained GPT model on 10M+ code reviews',
      'Implemented security scanning for OWASP vulnerabilities',
      'Developed GitHub/GitLab apps with PR integration',
      'Created custom rules engine for team standards'
    ],
    url: 'https://codereview-ai.dev',
    category: 'ai',
    type: 'public' as const,
    tech: ['TypeScript', 'Node.js', 'Python', 'GPT-4', 'PostgreSQL', 'Redis', 'Docker', 'GitHub API'],
    featured: true,
    client: {
      name: 'DevTools Inc.',
      industry: 'Developer Tools',
      size: 'Startup'
    },
    metrics: {
      users: 25000,
      performance: '5K+ repositories connected',
      impact: '40% more bugs caught'
    },
    status: 'Production',
    createdAt: '2025-11-10T00:00:00.000Z',
    updatedAt: '2025-11-10T00:00:00.000Z'
  },
  {
    _id: '17',
    title: 'LegalDocs AI - Contract Intelligence',
    slug: 'legaldocs-contract-analysis',
    description: 'AI platform for contract analysis reducing legal review time by 70%, with clause extraction, risk scoring, and obligation tracking.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
    longDescription: `LegalDocs AI helps legal teams review contracts faster and more accurately using advanced NLP. The platform has analyzed over 500,000 contracts, reducing average review time from 4 hours to 45 minutes while improving consistency.

The system automatically extracts key clauses, identifies unusual terms, scores contractual risk, and tracks obligations with automated reminders. Contract comparison highlights differences between versions or against standard templates.

Features include redlining suggestions, playbook-based negotiation guidance, clause library with approved alternatives, integration with CLM systems, and comprehensive audit trails for compliance.`,
    responsibilities: [
      'Built NLP pipeline for clause extraction with 95% accuracy',
      'Developed risk scoring model trained on 100K+ contracts',
      'Implemented contract comparison and redlining',
      'Created obligation tracking with automated alerts',
      'Integrated with DocuSign and major CLM platforms'
    ],
    category: 'ai',
    type: 'private' as const,
    tech: ['Python', 'spaCy', 'Transformers', 'FastAPI', 'PostgreSQL', 'Elasticsearch', 'React', 'Docker'],
    featured: true,
    client: {
      name: 'LegalTech Partners',
      industry: 'Legal Tech',
      size: 'Enterprise'
    },
    metrics: {
      users: 10000,
      performance: '500K+ contracts analyzed',
      impact: '70% reduction in review time'
    },
    status: 'Production',
    createdAt: '2025-11-25T00:00:00.000Z',
    updatedAt: '2025-11-25T00:00:00.000Z'
  },

  // === DATA & ANALYTICS PROJECTS ===
  {
    _id: '18',
    title: 'Business Intelligence Platform',
    slug: 'business-intelligence-platform',
    description: 'Enterprise BI platform with real-time dashboards, ETL pipelines processing 1B+ records daily, and self-service analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A comprehensive Business Intelligence platform that transforms raw data into strategic insights for enterprise decision-makers. The platform processes over 1 billion records daily from 50+ data sources, providing real-time dashboards and self-service analytics.

The ETL engine supports complex transformations with data quality rules, handling everything from simple CSV uploads to real-time streaming from Kafka. Role-based access ensures executives, managers, and analysts each see relevant metrics and drill-down capabilities.

Features include custom chart builder, automated report scheduling, anomaly detection alerts, natural language query interface, embedded analytics for external applications, and mobile-responsive dashboards.`,
    responsibilities: [
      'Designed scalable ETL processing 1B+ records/day',
      'Built interactive dashboard engine with 20+ chart types',
      'Implemented role-based access with row-level security',
      'Developed natural language query interface',
      'Created embedded analytics SDK for third-party integration'
    ],
    url: 'https://github.com/Bilalabbasid/Business-Intelligence-Tool',
    category: 'data',
    type: 'public' as const,
    tech: ['Django', 'React', 'PostgreSQL', 'ClickHouse', 'Celery', 'Redis', 'Apache Kafka', 'Docker'],
    featured: true,
    client: {
      name: 'Business Intelligence Initiative',
      industry: 'Analytics & Data',
      size: 'Enterprise'
    },
    metrics: {
      users: 15000,
      performance: '1B+ records processed daily',
      impact: '60% faster decision making'
    },
    status: 'Production',
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  },
  {
    _id: '19',
    title: 'Atrios - Network Security Analytics',
    slug: 'atrios-security',
    description: 'Cloud-based network security platform analyzing 10B+ DNS queries daily with real-time threat detection and DDoS protection.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    longDescription: `Atrios is an enterprise-grade network security platform providing comprehensive protection through DNS filtering, DDoS mitigation, and advanced traffic analytics. The system processes over 10 billion DNS queries daily, blocking millions of threats in real-time.

The threat intelligence engine combines machine learning with curated threat feeds to identify malicious domains, phishing attempts, and command-and-control traffic. Real-time analytics provide security teams with visibility into network activity, with drill-down to individual query level.

Features include customizable filtering policies, DNS-over-HTTPS/TLS support, integration with SIEM platforms, automated incident response, and detailed compliance reporting.`,
    responsibilities: [
      'Led backend team for DNS processing at 10B+ queries/day scale',
      'Implemented DNSDist and KnotDNS for high-performance filtering',
      'Built real-time analytics with ClickHouse',
      'Developed ML-based threat detection models',
      'Created enterprise admin portal with policy management'
    ],
    url: 'https://atrios.io',
    category: 'backend',
    type: 'public' as const,
    tech: ['Go', 'ClickHouse', 'DNSDist', 'KnotDNS', 'Redis', 'Kubernetes', 'TensorFlow', 'Prometheus'],
    featured: true,
    client: {
      name: 'Atrios Security',
      industry: 'Cybersecurity',
      size: 'Enterprise'
    },
    metrics: {
      users: 50000,
      performance: '10B+ DNS queries/day',
      impact: 'Millions of threats blocked daily'
    },
    status: 'Production',
    createdAt: '2024-03-15T00:00:00.000Z',
    updatedAt: '2024-03-15T00:00:00.000Z'
  },
  {
    _id: '20',
    title: 'Custom CRM Platform',
    slug: 'custom-crm',
    description: 'Full-featured CRM with role-based dashboards, sales pipeline automation, and analytics driving 35% increase in sales efficiency.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A comprehensive Customer Relationship Management platform designed for sales-driven organizations. The system provides role-based experiences for executives, managers, and sales representatives, with dashboards tailored to each role's needs.

The sales pipeline automation features intelligent lead scoring, automated follow-up sequences, territory management, and quota tracking. Integration with email, calendar, and communication tools ensures all customer interactions are captured automatically.

Features include customizable sales stages, forecasting with ML-based predictions, customer 360 view, activity tracking, mobile app for field sales, and comprehensive reporting with export capabilities.`,
    responsibilities: [
      'Designed role-based dashboard architecture',
      'Built sales automation with intelligent lead scoring',
      'Implemented customer 360 view aggregating all touchpoints',
      'Developed ML forecasting with 85% accuracy',
      'Created mobile app for field sales team'
    ],
    url: 'https://github.com/Bilalabbasid/CRM',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Docker', 'Nginx', 'JWT'],
    featured: true,
    client: {
      name: 'CRM Initiative',
      industry: 'SaaS / Retail',
      size: 'Mid-size'
    },
    metrics: {
      users: 5000,
      performance: '99.9% uptime',
      impact: '35% increase in sales efficiency'
    },
    status: 'Production',
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  },

  // === ADDITIONAL PROJECTS ===
  {
    _id: '21',
    title: 'School Management System',
    slug: 'school-management-system-enterprise',
    description: 'Enterprise school management with student lifecycle tracking, academic records, financial management, and parent portal.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop',
    longDescription: `A commercial-grade School Management System serving K-12 institutions and universities. The platform manages the complete student lifecycle from admission to graduation, with comprehensive modules for academics, finance, and communication.

The system supports complex organizational structures with multiple campuses, grade levels, and academic programs. Role-based access ensures administrators, teachers, students, and parents each have appropriate access to relevant features.

Features include online admissions, class scheduling with conflict detection, grade management, attendance tracking, fee collection with online payments, report card generation, parent-teacher communication, and extensive reporting for accreditation requirements.`,
    responsibilities: [
      'Architected multi-tenant SaaS platform',
      'Built student lifecycle management module',
      'Implemented academic management with scheduling',
      'Developed financial module with payment gateway',
      'Created parent portal with real-time updates'
    ],
    url: 'https://github.com/Bilalabbasid/SMS',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Docker', 'Nginx', 'Redis'],
    featured: true,
    client: {
      name: 'Education Solutions Ltd.',
      industry: 'Education',
      size: 'Enterprise'
    },
    metrics: {
      users: 100000,
      performance: '99.9% uptime SLA',
      impact: '50+ schools deployed'
    },
    status: 'Production',
    createdAt: '2025-09-17T00:00:00.000Z',
    updatedAt: '2025-09-17T00:00:00.000Z'
  },
  {
    _id: '22',
    title: 'EventHub - Virtual Events Platform',
    slug: 'eventhub-virtual-events',
    description: 'Enterprise virtual events platform hosting 500+ events with live streaming, networking rooms, and exhibitor booths.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    longDescription: `EventHub enables organizations to host engaging virtual and hybrid events at scale. The platform has successfully hosted 500+ events including conferences, trade shows, and corporate meetings, with up to 50,000 concurrent attendees.

The architecture supports HD live streaming, multiple simultaneous sessions, virtual networking rooms with video chat, exhibitor booths with lead capture, and comprehensive engagement tools including polls, Q&A, and gamification.

Features include event registration with ticketing, customizable event branding, speaker management, sponsor visibility tools, real-time analytics, and post-event recordings with on-demand access.`,
    responsibilities: [
      'Built WebRTC streaming infrastructure for 50K concurrent users',
      'Developed virtual networking with intelligent matching',
      'Implemented exhibitor booth system with lead capture',
      'Created engagement analytics dashboard',
      'Designed scalable architecture on AWS'
    ],
    url: 'https://eventhub-platform.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS MediaLive', 'CloudFront'],
    featured: true,
    client: {
      name: 'EventHub Inc.',
      industry: 'Events',
      size: 'Mid-size'
    },
    metrics: {
      users: 500000,
      performance: '50K concurrent attendees',
      impact: '500+ events hosted'
    },
    status: 'Production',
    createdAt: '2025-11-15T00:00:00.000Z',
    updatedAt: '2025-11-15T00:00:00.000Z'
  },
  {
    _id: '23',
    title: 'LearnPlayBond - EdTech Platform',
    slug: 'learnplaybond',
    description: 'Interactive learning platform combining gamification with education, serving 50K+ students with engaging content.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    longDescription: `LearnPlayBond makes learning fun through gamification, interactive lessons, and collaborative tools. The platform serves 50,000+ students with content covering math, science, languages, and more.

The gamification engine awards points, badges, and achievements for completing lessons and challenges, driving student engagement. Leaderboards and team challenges foster healthy competition while collaborative features enable peer learning.

Features include interactive video lessons, practice quizzes with instant feedback, progress tracking for parents, teacher dashboard with class management, and analytics showing learning patterns and areas needing attention.`,
    responsibilities: [
      'Built gamification engine with rewards system',
      'Developed interactive lesson player',
      'Implemented real-time collaboration features',
      'Created analytics dashboard for educators',
      'Deployed scalable infrastructure'
    ],
    url: 'https://learnplaybond.com',
    category: 'web',
    type: 'public' as const,
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'AWS'],
    featured: false,
    client: {
      name: 'LearnPlayBond',
      industry: 'EdTech',
      size: 'Startup'
    },
    metrics: {
      users: 50000,
      performance: '99.5% uptime',
      impact: '50K+ active students'
    },
    status: 'Production',
    createdAt: '2025-08-27T00:00:00.000Z',
    updatedAt: '2025-08-27T00:00:00.000Z'
  },
  {
    _id: '24',
    title: 'CloudOps - Multi-Cloud Management',
    slug: 'cloudops-management',
    description: 'Unified cloud management platform optimizing $50M+ annual cloud spend across AWS, Azure, and GCP.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    longDescription: `CloudOps provides unified visibility and control across multi-cloud environments, helping enterprises optimize their $50M+ annual cloud spend. The platform currently manages 10,000+ cloud resources across AWS, Azure, and GCP.

The cost optimization engine identifies idle resources, rightsizing opportunities, and reserved instance recommendations, delivering average savings of 30%. Security compliance automation ensures continuous adherence to frameworks like SOC 2, HIPAA, and PCI-DSS.

Features include real-time cost monitoring, budget alerts, resource tagging enforcement, infrastructure-as-code management, automated security scanning, and comprehensive compliance reporting.`,
    responsibilities: [
      'Built multi-cloud abstraction layer',
      'Developed cost optimization engine saving 30%',
      'Implemented security compliance automation',
      'Created infrastructure-as-code management',
      'Designed predictive scaling algorithms'
    ],
    category: 'devops',
    type: 'private' as const,
    tech: ['Terraform', 'Kubernetes', 'Go', 'Python', 'PostgreSQL', 'Prometheus', 'Grafana', 'AWS', 'Azure', 'GCP'],
    featured: false,
    client: {
      name: 'CloudOps Solutions',
      industry: 'Cloud Services',
      size: 'Enterprise'
    },
    metrics: {
      users: 5000,
      performance: '10K+ resources managed',
      impact: '30% average cost savings'
    },
    status: 'Production',
    createdAt: '2024-11-01T00:00:00.000Z',
    updatedAt: '2024-11-01T00:00:00.000Z'
  }
];

export const staticProjectsResponse = {
  projects: staticProjects,
  totalPages: 1,
  currentPage: 1,
  total: staticProjects.length
};
