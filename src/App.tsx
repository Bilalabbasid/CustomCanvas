import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollRestoration } from './hooks/useScrollRestoration';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageTracking } from './hooks/usePageTracking';

// Lazy load components for better performance
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const Partners = lazy(() => import('./components/Partners'));
const LeadGeneration = lazy(() => import('./components/LeadGeneration'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Blog = lazy(() => import('./components/Blog'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
    <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Partners />
    <Blog />
    <LeadGeneration />
    <Contact />
  </>
);

// Component to track page views inside Router
const PageTracker = () => {
  usePageTracking();
  return null;
};

function App() {
  // Initialize smooth scroll
  useSmoothScroll();
  
  return (
    <ThemeProvider>
      <Router>
        <PageTracker />
        {/* Scroll position restoration */}
        <ScrollRestoration />
        
        <Suspense fallback={<LoadingFallback />}>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          {/* Skip to main content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>
          
          <Header />
          
          <main id="main-content" role="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </main>
          
          <Footer />
          </div>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
