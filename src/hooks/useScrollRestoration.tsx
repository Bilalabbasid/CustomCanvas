import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_KEY = 'homepage_scroll_position';

export const useScrollRestoration = () => {
  const location = useLocation();
  const isRestoringRef = useRef(false);

  // Save scroll position when on home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      if (!isRestoringRef.current) {
        sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
      }
    };

    // Debounce scroll saves
    let timeout: ReturnType<typeof setTimeout>;
    const debouncedScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleScroll, 150);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [location.pathname]);

  // Handle scroll restoration or scroll to top
  useEffect(() => {
    // Temporarily disable smooth scrolling for programmatic scroll
    const html = document.documentElement;
    const originalBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';

    if (location.pathname === '/') {
      // Returning to home page - restore scroll position
      const savedPosition = sessionStorage.getItem(SCROLL_KEY);
      
      if (savedPosition) {
        const scrollY = parseInt(savedPosition, 10);
        
        if (scrollY > 0) {
          isRestoringRef.current = true;
          
          // Wait for content to render then scroll
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo(0, scrollY);
              
              // Re-enable smooth scrolling after restoration
              setTimeout(() => {
                html.style.scrollBehavior = originalBehavior;
                isRestoringRef.current = false;
              }, 100);
            });
          });
          return;
        }
      }
    } else {
      // Navigating to project detail - scroll to top
      window.scrollTo(0, 0);
    }

    // Re-enable smooth scrolling
    setTimeout(() => {
      html.style.scrollBehavior = originalBehavior;
    }, 50);
  }, [location.pathname]);
};

// Component version
export const ScrollRestoration = () => {
  useScrollRestoration();
  return null;
};
