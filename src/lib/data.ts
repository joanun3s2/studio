import type { Project, Testimonial, Tech, NavItem } from "@/types";
import {
  Codepen,
  Smartphone,
  Database,
  Cloud,
  BrainCircuit,
  Palette,
  CheckCircle,
  Bot,
} from "lucide-react";

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Web and mobile crm apps",
    description:
      "Worked mantaining and improving apps from Akzonobel as a third-party developer.",
    technologiesUsed: ["NestJs", "Postgres", "Ionic", "Angular"],
    imageUrl:
      "https://nbra.org.uk/wp-content/uploads/2024/03/84bf2800e44aa9965b604ec83aab392a.png",
    imageHint:
      "Akznobel logo, used only to represent past projects and experience. All trademarks belong to their respective owners",
    liveDemoLink: "https://www.akzonobel.com/en/countries/akzonobel-brasil",
  },
  {
    id: "2",
    title: "Full stack third party developer",
    description:
      "An outsourced remote developer working with multiple international teams with the most modern tools.",
    technologiesUsed: [
      "NestJs",
      "Firebase",
      "Ionic",
      "Angular",
      "Docker",
      "TypeScript",
      "Javscript",
    ],
    imageUrl:
      "https://images.prismic.io/cloudplusplus/ZmrIgpm069VX1tYa_cloudplusplus-thumb.jpg?auto=format%2Ccompress&rect=0%2C214%2C900%2C473&w=2400&h=1260",
    imageHint:
      "Cloud++ logo, used only to represent past projects and experience. All trademarks belong to their respective owners",
    liveDemoLink: "https://cloudplusplus.com/",
  },
  {
    id: "3",
    title: "Low code application",
    description:
      "A web application that used a low code framework named servoy.",
    technologiesUsed: ["Servoy", "Javascript"],
    imageUrl:
      "https://i1.sndcdn.com/avatars-M35n90zPr2eQXp8W-Oa3umA-t1080x1080.jpg",
    imageHint:
      "Playbookify logo, used only to represent past projects and experience. All trademarks belong to their respective owners",
  },
  {
    id: "4",
    title: "maintenance on client demand",
    description:
      "Maintained smaller apps like holland dairy, taking what was important by cacthing ideias direcltly with the client.",
    technologiesUsed: ["Angular", "NestJs", "Postgres"],
    imageUrl:
      "https://holland-dairy.com/wp-content/uploads/2021/08/logo-new-resized-scaled.jpg",
    imageHint:
      "Holland dairy logo, used only to represent past projects and experience. All trademarks belong to their respective owners",
    liveDemoLink: "https://holland-dairy.com/",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    clientName: "João Victor",
    company: "Cloud++",
    feedback:
      "Tive o prazer de trabalhar com João Nunes na CloudPlusPlus, no projeto Atlas. Ele sempre se destacou como um desenvolvedor Angular competente, proativo e comprometido com a qualidade do código. Sua ajuda foi essencial em momentos críticos do projeto. Um grande nome em qualquer time!",
    rating: 5,
    clientImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQGMLh3NORXtHw/profile-displayphoto-shrink_800_800/B4DZOIokP0HIAk-/0/1733164156330?e=1755734400&v=beta&t=PtyjCuIIHd6l1M0Dm71AKCsTmgJHJAXs8Ym5gDrlodA",
    clientImageHint: "João Vitor",
  },
  {
    id: "2",
    clientName: "Johnny Smith",
    company: "Cloud++",
    feedback:
      "The attention to detail and commitment to quality are outstanding. As a designer I love to see my creations come to life as requested.",
    rating: 4,
    clientImage: "https://placehold.co/100x100.png",
    clientImageHint: "smiling man",
  },
];

export const techStackData: Tech[] = [
  {
    name: "HTML5",
    Icon: Codepen,
    category: "Frontend",
    description: "Markup language for structuring web content.",
  },
  {
    name: "CSS3",
    Icon: Palette,
    category: "Frontend",
    description: "Styling language for web design and layout.",
  },
  {
    name: "JavaScript",
    Icon: Codepen,
    category: "Frontend",
    description: "Versatile scripting language for dynamic web content.",
  },
  {
    name: "TypeScript",
    Icon: Codepen,
    category: "Frontend",
    description: "Superset of JavaScript adding static types.",
  },
  {
    name: "React",
    Icon: Codepen,
    category: "Frontend",
    description: "JavaScript library for building user interfaces.",
  },
  {
    name: "Next.js",
    Icon: Codepen,
    category: "Frontend",
    description: "React framework for server-side rendering and static sites.",
  },
  {
    name: "Angular",
    Icon: Codepen,
    category: "Frontend",
    description: "Platform for building mobile and desktop web applications.",
  },
  {
    name: "Tailwind CSS",
    Icon: Palette,
    category: "Frontend",
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Java (JSF)",
    Icon: Codepen,
    category: "Backend",
    description:
      "Java Server Faces framework for building enterprise web applications.",
  },
  {
    name: "Flutter",
    Icon: Smartphone,
    category: "Mobile",
    description:
      "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
  },
  {
    name: "Ionic",
    Icon: Smartphone,
    category: "Mobile",
    description:
      "Open-source framework for building mobile and desktop apps using web technologies.",
  },
  {
    name: "Servoy",
    Icon: Database,
    category: "Backend",
    description: "Low-code application development platform.",
  },
  {
    name: "Firestore",
    Icon: Database,
    category: "Databases",
    description: "Cloud-native NoSQL database.",
  },
  {
    name: "MongoDB",
    Icon: Database,
    category: "Databases",
    description: "NoSQL document database.",
  },
  {
    name: "Grafana",
    Icon: Cloud,
    category: "DevOps",
    description: "Open-source platform for monitoring and observability.",
  },
  {
    name: "Elasticsearch",
    Icon: Cloud,
    category: "DevOps",
    description: "Distributed RESTful search engine.",
  },
  {
    name: "Gemini",
    Icon: Bot,
    category: "AI/ML",
    description: "Google's family of AI models.",
  },
  {
    name: "Windsurf",
    Icon: Bot,
    category: "AI/ML",
    description: "AI-powered code completion and analysis tool.",
  },
  {
    name: "Cursor IDE",
    Icon: Bot,
    category: "AI/ML",
    description: "IDE designed for AI-assisted software development.",
  },
  {
    name: "NestJS",
    Icon: Database,
    category: "Backend",
    description:
      "Progressive Node.js framework for building efficient and scalable server-side applications.",
  },
  {
    name: "Nodejs",
    Icon: Database,
    category: "Backend",
    description: "JavaScript runtime environment for server-side programming.",
  },
  {
    name: "Mysql",
    Icon: Database,
    category: "Databases",
    description: "Popular open-source relational database management system.",
  },
  {
    name: "Firebase",
    Icon: Cloud,
    category: "Backend",
    description: "Platform for building web and mobile applications.",
  },
  {
    name: "PostgreSQL",
    Icon: Database,
    category: "Databases",
    description: "Powerful open-source relational database system.",
  },
  {
    name: "Docker",
    Icon: Cloud,
    category: "DevOps",
    description:
      "Platform for developing, shipping, and running applications in containers.",
  },
  {
    name: "Git",
    Icon: CheckCircle,
    category: "DevOps",
    description: "Distributed version control system.",
  },
  {
    name: "OpenAI API",
    Icon: Bot,
    category: "AI/ML",
    description: "Access to powerful AI models for various tasks.",
  },
];

export const aboutMeData = {
  name: "João Nunes",
  title: "Full-Stack Web & Mobile Developer",
  professionalSummary: [
    "Passionate and results-driven Full-Stack Developer based in Natal - RN, Brazil with 6 years of experience in designing, developing, and deploying web and mobile applications. Proficient in a wide range of technologies with a knack for creating intuitive user experiences and robust backend solutions.",
    "I thrive on transforming complex problems into elegant, efficient code. My goal is to leverage my skills to build innovative digital products that make a real impact. Always eager to learn new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape.",
    "Looking for new challenges and opportunities to collaborate on exciting projects. Let's build something amazing together!",
  ],
  headshotUrl: "https://avatars.githubusercontent.com/u/28514118?v=4", //'https://placehold.co/300x300.png',
  headshotHint: "professional developer",
  resumeUrl: "/path-to-your-resume.pdf", // Placeholder
  skills: [
    "Web Application Development",
    "Mobile Application Development",
    "UI/UX Design Implemantation Principles",
    "API (Restful) Design & Integration",
    "Database Management",
    "Agile Methodologies",
    "Cloud Services (Firebase, AWS Basics)",
    "AI Integration",
  ],
};

export const contactMeData = {
  email: "joanun3s2@gmail.com",
  phone: "+55 (84) 99468-0558",
  address: "Natal, RN, Brazil",
  officeHours: "Monday - Friday: 8:00 AM - 6:00 PM (BRT)",
  responseTime:
    "Feel free to reach out anytime. I typically respond within 24 hours.",
};

export const budgetOptions = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "<5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: ">50k", label: "Over $50,000" },
];
