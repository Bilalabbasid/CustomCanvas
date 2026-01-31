import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../utils/analytics';

/**
 * Hook to automatically track page views in Google Analytics
 * Add this to your App component or layout
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view whenever the location changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};
