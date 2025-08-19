import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { staticProjects } from '../data/staticProjects';

interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  responsibilities: string[];
  url?: string;
  category: string;
  type: 'public' | 'private';
  tech: string[];
  featured: boolean;
  images?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  client?: {
    name: string;
    industry: string;
    size: string;
  };
  metrics?: {
    users?: number;
    performance?: string;
    impact?: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface ProjectsResponse {
  projects: Project[];
  totalPages: number;
  currentPage: number;
  total: number;
}

export const useProjects = (params?: {
  category?: string;
  featured?: boolean;
  page?: number;
  limit?: number;
  search?: string;
}) => {
  const [data, setData] = useState<ProjectsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch from API first
        const response = await apiService.getProjects(params) as ProjectsResponse;
        setData(response);
      } catch (err) {
        console.warn('API not available, using static data:', err);
        
        // Fallback to static data
        let filteredProjects = [...staticProjects];
        
        // Apply category filter
        if (params?.category && params.category !== 'all') {
          filteredProjects = filteredProjects.filter(p => p.category === params.category);
        }
        
        // Apply featured filter
        if (params?.featured !== undefined) {
          filteredProjects = filteredProjects.filter(p => p.featured === params.featured);
        }
        
        // Apply search filter
        if (params?.search) {
          const searchTerm = params.search.toLowerCase();
          filteredProjects = filteredProjects.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.tech.some(tech => tech.toLowerCase().includes(searchTerm))
          );
        }
        
        setData({
          projects: filteredProjects,
          totalPages: 1,
          currentPage: 1,
          total: filteredProjects.length
        });
        setError(null); // Clear error since we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [params?.category, params?.featured, params?.page, params?.limit, params?.search]);

  return { data, loading, error, refetch: () => setLoading(true) };
};

export const useProject = (slug: string) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Try API first
        const response = await apiService.getProject(slug) as Project;
        setProject(response);
      } catch (err) {
        console.warn('API not available, using static data:', err);
        
        // Fallback to static data
        const staticProject = staticProjects.find(p => p.slug === slug);
        if (staticProject) {
          setProject(staticProject);
          setError(null);
        } else {
          setError('Project not found');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  return { project, loading, error };
};

export type { Project, ProjectsResponse };