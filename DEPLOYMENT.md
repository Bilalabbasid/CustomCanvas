# Full Stack Portfolio - Vercel Deployment Guide

## 🚀 Deployment Steps for Vercel Full-Stack

### 1. Database Setup (MongoDB Atlas)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`

### 2. Vercel Environment Variables
Add these environment variables in your Vercel dashboard:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
JWT_SECRET=your-super-secure-production-jwt-secret-here
NODE_ENV=production
```

### 3. Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. Deploy!

### Option 2: Full Stack on Vercel

1. Push code to GitHub
2. Connect Vercel to your GitHub repo
3. Configure build settings for monorepo
4. Set environment variables

### Option 3: Full Stack on Railway

1. Connect Railway to your GitHub repo
2. Configure for full stack deployment
3. Set all environment variables

## Production Environment Variables

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-domain.com/api
```

### Backend
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=production
PORT=3001
JWT_SECRET=your-super-secure-jwt-secret-for-production
```
