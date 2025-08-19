# Deployment Guide

## Deployment Options

### Option 1: Frontend on Netlify + Backend on Railway/Render

#### Frontend (Netlify)
1. Push code to GitHub
2. Connect Netlify to your GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variables: `VITE_API_URL=https://your-backend-url.com/api`

#### Backend (Railway)
1. Connect Railway to your GitHub repo
2. Environment variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production
   - `PORT`: (Railway will set this automatically)

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
