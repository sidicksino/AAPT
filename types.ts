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