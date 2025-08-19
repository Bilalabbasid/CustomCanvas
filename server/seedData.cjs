const mongoose = require('mongoose');
const Project = require('./models/Project.cjs');
require('dotenv').config();

const seedProjects = [
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
    title: 'Real-Time Anomaly Detection',
    slug: 'real-time-anomaly-detection',
    description: 'Detects zero-day threats using logs from Zeek, Kafka, and self-supervised AI models.',
    longDescription: 'An advanced cybersecurity system that uses machine learning to detect zero-day threats in real-time by analyzing network logs and traffic patterns.',
    responsibilities: ['Python-based detection engine', 'Real-time pipeline + alerting'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Python', 'Kafka', 'AI/ML', 'Security'],
    featured: true
  },
  {
    title: 'AI Lead Scoring System',
    slug: 'ai-lead-scoring-system',
    description: 'Machine learning system to rank inbound leads based on behavioral data.',
    longDescription: 'An intelligent lead scoring system that uses machine learning algorithms to analyze behavioral data and rank inbound leads by conversion probability.',
    responsibilities: ['ML model design (scikit-learn)', 'FastAPI + Mongo backend'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'MongoDB']
  },
  {
    title: 'Document Intelligence with Smart OCR',
    slug: 'document-intelligence-smart-ocr',
    description: 'Extracts and summarizes legal/financial docs using OCR + GPT-powered LLMs.',
    longDescription: 'A sophisticated document processing system that combines OCR technology with GPT-powered language models to extract and summarize information from legal and financial documents.',
    responsibilities: ['Python OCR + GPT API', 'Smart summarization & tagging'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Python', 'OCR', 'GPT', 'NLP']
  },
  {
    title: 'ChatGPT-Powered Support Bot',
    slug: 'chatgpt-powered-support-bot',
    description: 'LLM-based chatbot trained on business knowledgebase for real-time support.',
    longDescription: 'An intelligent customer support chatbot powered by large language models, trained on business-specific knowledge bases to provide accurate real-time support.',
    responsibilities: ['Custom LLM workflows', 'Integration with CRM + frontends'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['LLM', 'ChatGPT', 'NLP', 'Integration']
  },
  {
    title: 'Voice-Controlled NLP System',
    slug: 'voice-controlled-nlp-system',
    description: 'Converts spoken commands into real-time industrial control instructions.',
    longDescription: 'An innovative voice-controlled system that uses natural language processing to convert spoken commands into real-time industrial control instructions.',
    responsibilities: ['Audio preprocessing + NLP pipeline', 'Voice-to-action integrations'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['NLP', 'Audio Processing', 'Voice Recognition']
  },
  {
    title: 'AI Image Tagging for Ecommerce',
    slug: 'ai-image-tagging-ecommerce',
    description: 'Auto-tags product images using YOLOv8 + CLIP models.',
    longDescription: 'An automated image tagging system for e-commerce platforms that uses advanced computer vision models to automatically categorize and tag product images.',
    responsibilities: ['Image processing pipeline', 'Smart category suggestion'],
    url: null,
    category: 'ai',
    type: 'private',
    tech: ['Computer Vision', 'YOLOv8', 'CLIP', 'Ecommerce']
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