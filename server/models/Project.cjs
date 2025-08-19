const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    default: ''
  },
  responsibilities: [{
    type: String,
    required: true
  }],
  url: {
    type: String,
    default: null
  },
  category: {
    type: String,
    required: true,
    enum: ['web', 'backend', 'ai', 'data', 'mobile', 'devops']
  },
  type: {
    type: String,
    required: true,
    enum: ['public', 'private']
  },
  tech: [{
    type: String,
    required: true
  }],
  images: [{
    url: String,
    alt: String,
    caption: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'archived'],
    default: 'completed'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date
  },
  client: {
    name: String,
    industry: String,
    size: String
  },
  metrics: {
    users: Number,
    performance: String,
    impact: String
  }
}, {
  timestamps: true
});

// Create slug from title before saving
projectSchema.pre('save', function(next) {
  if (!this.slug || this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

module.exports = mongoose.model('Project', projectSchema);