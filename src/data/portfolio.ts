
import type { Profile, Project, Experience, Certification, Recommendation, GalleryItem, TechStack } from '../types';

export const profileData: Profile = {
  name: "John Doe",
  role: "Senior Full Stack Engineer",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  bio: "I build scalable web applications with a focus on user experience and clean code. With over 8 years of experience in the industry, I specialize in React, Node.js, and Cloud Architecture.",
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" }
  ]
};

export const techStackData: TechStack[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    category: "DevOps",
    skills: ["AWS", "Docker", "CI/CD", "Terraform", "Kubernetes"]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory and AI-driven recommendations.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=450",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    id: "2",
    title: "Task Management SaaS",
    description: "Collaborative project management tool with kanban boards and automated workflows.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=450",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    link: "https://example.com",
    github: "https://github.com"
  }
];

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Tech Solutions Inc.",
    role: "Senior Software Engineer",
    period: "2020 - Present",
    description: "Leading the frontend team in developing a high-performance analytics dashboard. Implemented micro-frontends architecture."
  },
  {
    id: "2",
    company: "Digital Innovations",
    role: "Full Stack Developer",
    period: "2017 - 2020",
    description: "Developed and maintained multiple client projects using React and Node.js. Optimized database queries reducing latency by 40%."
  }
];

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    id: "2",
    title: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2021"
  }
];

export const recommendationsData: Recommendation[] = [
  {
    id: "1",
    name: "Sarah Williams",
    role: "Product Manager at Tech Solutions",
    content: "John is an exceptional engineer who consistently delivers high-quality code. His ability to solve complex problems is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO at Digital Innovations",
    content: "One of the best developers I've worked with. John has a great eye for detail and always keeps the end-user in mind.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600",
    caption: "Working on a new feature"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600",
    caption: "Code review session"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800&h=600",
    caption: "Late night debugging"
  }
];
