import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface MissionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ArticleProps {
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

export interface GalleryItemProps {
  image: string;
  category: string;
  title: string;
  description: string;
  type?: 'image' | 'video';
}

export interface NewsTranslation {
  id: number;
  linkKey: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  type?: string;
}

export interface NewsArticle extends NewsTranslation {
  id: number;
  image?: string;
  created_at?: string;
}

export interface UserProfile {
  id: string;
  email: string | null;
  full_name: string | null;
  role: string;
  avatar_url?: string | null;
  updated_at?: string;
}