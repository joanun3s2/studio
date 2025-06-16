import type { Project, Testimonial, Tech, NavItem } from '@/types';
import { Codepen, Smartphone, Database, Cloud, BrainCircuit, Palette, CheckCircle, Bot } from 'lucide-react';

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/tech-stack', label: 'Tech Stack' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About Me' },
  { href: '/contact', label: 'Contact' },
];

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS, payment integration, and responsive design for optimal user experience across all devices.',
    technologiesUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Firebase'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    liveDemoLink: '#',
    githubLink: '#',
  },
  {
    id: '2',
    title: 'Mobile Task Manager',
    description: 'A cross-platform mobile app for task management, featuring real-time synchronization, push notifications, and offline capabilities.',
    technologiesUsed: ['React Native', 'Firebase', 'Redux', 'Expo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    liveDemoLink: '#',
  },
  {
    id: '3',
    title: 'AI-Powered Blog Generator',
    description: 'A web application that uses AI to generate blog content, manage posts, and optimize for SEO. Integrated with various language models.',
    technologiesUsed: ['Python', 'Flask', 'OpenAI API', 'React', 'Docker'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    githubLink: '#',
  },
   {
    id: '4',
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive dashboard for a SaaS product, providing users with insightful data visualizations and reporting tools.',
    technologiesUsed: ['Angular', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    liveDemoLink: '#',
    githubLink: '#',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    clientName: 'Jane Doe',
    company: 'Tech Solutions Inc.',
    feedback: "Working with Code Canvas was a fantastic experience. The final product exceeded our expectations, and the communication throughout the project was excellent.",
    rating: 5,
    clientImage: 'https://placehold.co/100x100.png',
    clientImageHint: 'professional woman',
  },
  {
    id: '2',
    clientName: 'John Smith',
    company: 'Creative Co.',
    feedback: "The attention to detail and commitment to quality are outstanding. Our new website is both beautiful and highly functional. Highly recommended!",
    rating: 5,
    clientImage: 'https://placehold.co/100x100.png',
    clientImageHint: 'smiling man',
  },
  {
    id: '3',
    clientName: 'Alice Brown',
    company: 'Startup Hub',
    feedback: "Delivered on time and on budget. The technical expertise and problem-solving skills were invaluable to our project's success.",
    rating: 4,
    clientImage: 'https://placehold.co/100x100.png',
    clientImageHint: 'business person',
  },
];

export const techStackData: Tech[] = [
  { name: 'HTML5', Icon: Codepen, category: 'Frontend', description: 'Markup language for structuring web content.' },
  { name: 'CSS3', Icon: Palette, category: 'Frontend', description: 'Styling language for web design and layout.' },
  { name: 'JavaScript', Icon: Codepen, category: 'Frontend', description: 'Versatile scripting language for dynamic web content.' },
  { name: 'TypeScript', Icon: Codepen, category: 'Frontend', description: 'Superset of JavaScript adding static types.' },
  { name: 'React', Icon: Codepen, category: 'Frontend', description: 'JavaScript library for building user interfaces.' },
  { name: 'Next.js', Icon: Codepen, category: 'Frontend', description: 'React framework for server-side rendering and static sites.' },
  { name: 'Angular', Icon: Codepen, category: 'Frontend', description: 'Platform for building mobile and desktop web applications.' },
  { name: 'Tailwind CSS', Icon: Palette, category: 'Frontend', description: 'Utility-first CSS framework for rapid UI development.' },
  { name: 'Node.js', Icon: Database, category: 'Backend', description: 'JavaScript runtime for server-side development.' },
  { name: 'Python', Icon: BrainCircuit, category: 'Backend', description: 'High-level language for web development and AI.' },
  { name: 'Firebase', Icon: Cloud, category: 'Backend', description: 'Platform for building web and mobile applications.' },
  { name: 'PostgreSQL', Icon: Database, category: 'Databases', description: 'Powerful open-source relational database system.' },
  { name: 'MongoDB', Icon: Database, category: 'Databases', description: 'NoSQL document-oriented database.' },
  { name: 'Docker', Icon: Cloud, category: 'DevOps', description: 'Platform for developing, shipping, and running applications in containers.' },
  { name: 'Git', Icon: CheckCircle, category: 'DevOps', description: 'Distributed version control system.' },
  { name: 'React Native', Icon: Smartphone, category: 'Mobile', description: 'Framework for building native mobile apps with React.' },
  { name: 'OpenAI API', Icon: Bot, category: 'AI/ML', description: 'Access to powerful AI models for various tasks.' },
];

export const aboutMeData = {
  name: "Your Name",
  title: "Full-Stack Web & Mobile Developer",
  professionalSummary: [
    "Passionate and results-driven Full-Stack Developer with X years of experience in designing, developing, and deploying web and mobile applications. Proficient in a wide range of technologies with a knack for creating intuitive user experiences and robust backend solutions.",
    "I thrive on transforming complex problems into elegant, efficient code. My goal is to leverage my skills to build innovative digital products that make a real impact. Always eager to learn new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.",
    "Looking for new challenges and opportunities to collaborate on exciting projects. Let's build something amazing together!"
  ],
  headshotUrl: 'https://placehold.co/300x300.png',
  headshotHint: 'professional developer',
  resumeUrl: '/path-to-your-resume.pdf', // Placeholder
  skills: [
    'Web Application Development',
    'Mobile Application Development',
    'UI/UX Design Principles',
    'API Design & Integration',
    'Database Management',
    'Agile Methodologies',
    'Cloud Services (Firebase, AWS Basics)',
    'AI Integration'
  ]
};

export const budgetOptions = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "<5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: ">50k", label: "Over $50,000" },
];
