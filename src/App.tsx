import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Partners from './components/Partners';
import LeadGeneration from './components/LeadGeneration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollRestoration } from './hooks/useScrollRestoration';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageTracking } from './hooks/usePageTracking';

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
      </Router>
    </ThemeProvider>
  );
}

export default App;
