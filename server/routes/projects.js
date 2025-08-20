const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get project categories
router.get('/meta/categories', async (req, res) => {
  try {
    const categories = await Project.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get project technologies
router.get('/meta/technologies', async (req, res) => {
  try {
    const technologies = await Project.distinct('tech');
    res.json(technologies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all projects with filtering and pagination
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      featured, 
      status, 
      page = 1, 
      limit = 20,
      search 
    } = req.query;

    const filter = {};
    
    if (category && category !== 'all') {
      filter.category = category;
    }
    
    if (featured !== undefined) {
      filter.featured = featured === 'true';
    }
    
    if (status) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tech: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const projects = await Project.find(filter)
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Project.countDocuments(filter);

    res.json({
      projects,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new project
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: 'Project with this title already exists' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

// Update project
router.put('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete project
router.delete('/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;