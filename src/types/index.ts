import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologiesUsed: string[];
  imageUrl: string;
  imageHint: string; // For AI image search hint
  liveDemoLink?: string;
  githubLink?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  feedback: string;
  rating: number; // 1-5
  clientImage?: string;
  clientImageHint?: string; // For AI image search hint
  company?: string;
}

export interface Tech {
  name: string;
  Icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
  category: string;
  description?: string;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface InquiryFormData {
  name: string;
  email: string;
  projectDescription: string;
  budget?: string;
}
