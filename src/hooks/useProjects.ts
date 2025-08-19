import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

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
        const response = await apiService.getProjects(params);
        setData(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch projects');
        console.error('Error fetching projects:', err);
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
        const response = await apiService.getProject(slug);
        setProject(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch project');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  return { project, loading, error };
};

export type { Project, ProjectsResponse };