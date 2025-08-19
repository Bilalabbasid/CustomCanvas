# Full Stack Portfolio

A modern portfolio website built with React, TypeScript, Node.js, and MongoDB.

## Features

- 🎨 Modern, responsive design with dark/light theme
- 🚀 Fast and optimized with Vite
- 📱 Mobile-friendly interface
- 🛡️ Secure backend with rate limiting and CORS
- 🗄️ MongoDB database integration
- 📝 Contact form and lead generation
- 🔍 Project search and filtering

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Security middleware (Helmet, CORS, Rate Limiting)
- RESTful API design

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   PORT=3001
   NODE_ENV=development
   JWT_SECRET=your-secret-key
   ```

3. **Start MongoDB:**
   Make sure MongoDB is running on your system.

4. **Seed the database:**
   ```bash
   npm run seed
   ```

5. **Run the application:**
   
   **Option 1: Run both frontend and backend together**
   ```bash
   npm run dev:full
   ```
   
   **Option 2: Run separately**
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run dev
   ```

6. **Access the application:**
   - Frontend: http://localhost:5173 (Vite will automatically use next available port if busy)
   - Backend API: http://localhost:3001/api

## Available Scripts

- `npm run dev` - Start frontend development server
- `npm run server` - Start backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run seed` - Seed database with sample data
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects with filtering
- `GET /api/projects/:slug` - Get single project by slug
- `GET /api/projects/meta/categories` - Get all categories
- `GET /api/projects/meta/technologies` - Get all technologies

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Leads
- `POST /api/leads` - Submit lead form
- `GET /api/leads` - Get all leads (admin)

## Project Structure

```
project/
├── src/                    # Frontend source
│   ├── components/         # React components
│   ├── context/           # React context
│   ├── hooks/             # Custom hooks
│   └── services/          # API services
├── server/                # Backend source
│   ├── models/            # MongoDB models
│   ├── routes/            # Express routes
│   ├── index.cjs          # Server entry point
│   └── seedData.cjs       # Database seeding
└── public/                # Static assets
```

## Environment Setup

Make sure you have the following installed:
- Node.js (v18 or later)
- MongoDB (local or cloud)
- npm or yarn

## Troubleshooting

1. **Port conflicts:** If ports 3001 or 5173 are busy, the app will automatically use the next available port. The backend CORS is configured to accept requests from ports 5173-5180.

2. **CORS errors:** If you see CORS errors, make sure both frontend and backend are running and the frontend port is within the allowed range (5173-5180).

3. **MongoDB connection:** Ensure MongoDB is running and the connection string in `.env` is correct.

3. **Dependencies:** Run `npm install` if you encounter any missing dependency errors.

4. **Build errors:** Try clearing node_modules and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## Deployment

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy Options:

**Option 1: Frontend only (GitHub Pages)**
```bash
npm run build
npm run deploy:frontend
```

**Option 2: Full Stack (Vercel)**
1. Push to GitHub
2. Connect Vercel to your repo
3. Deploy automatically

**Option 3: Separate deployments**
- Frontend: Netlify/Vercel
- Backend: Railway/Render/Heroku

## Production Build

```bash
# Build frontend for production
npm run build

# Start backend in production mode
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
