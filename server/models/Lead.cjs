const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  company: {
    type: String,
    trim: true
  },
  project: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    enum: ['Under $10k', '$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+', 'Let\'s discuss']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal-sent', 'won', 'lost'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  source: {
    type: String,
    default: 'lead-form'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Lead', leadSchema);