const express = require('express');
const Lead = require('../models/Lead.cjs');
const router = express.Router();

// Submit lead form
router.post('/', async (req, res) => {
  try {
    const { name, email, company, project, budget } = req.body;

    if (!name || !email || !project) {
      return res.status(400).json({ 
        message: 'Name, email, and project description are required' 
      });
    }

    const lead = new Lead({
      name,
      email,
      company,
      project,
      budget
    });

    const savedLead = await lead.save();
    
    // Here you could add email notification logic
    console.log('New lead form submission:', savedLead);

    res.status(201).json({ 
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      id: savedLead._id
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all leads (for admin)
router.get('/', async (req, res) => {
  try {
    const { status, priority, page = 1, limit = 20 } = req.query;
    
    const filter = {};
    if (status) {
      filter.status = status;
    }
    if (priority) {
      filter.priority = priority;
    }

    const leads = await Lead.find(filter)
      .sort({ priority: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Lead.countDocuments(filter);

    res.json({
      leads,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update lead status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status, priority } = req.body;
    
    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;