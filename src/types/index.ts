
export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  avatar: string;
  avatarHover?: string;
  bio: string;
  socials: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface TechStack {
  category: string;
  skills: string[];
}
