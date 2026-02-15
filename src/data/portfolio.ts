
import type { Profile, Project, Experience, Certification, Recommendation, GalleryItem, TechStack } from '../types';

export const profileData: Profile = {
  name: "John Rey Iglesia",
  role: "Frontend Developer & UI/UX Designer",
  location: "Pangasinan, Philippines",
  email: "johnreyiglesia308@gmail.com",
  avatar: "public/images/myprofile.png",
  avatarHover: "public/images/hover.jpeg",
  bio: "I am an aspiring Mobile UI/UX Designer and Frontend Developer driven by a passion for crafting intuitive, engaging, and user centered digital experiences. My methodology blends strong design principles with clean, efficient development, resulting in interfaces that are not only visually compelling but also highly functional and seamless.",
  socials: [
    { platform: "GitHub", url: "https://github.com/Zoulred", icon: "github" },
    { platform: "Facebook", url: "https://www.facebook.com/Zoulrediglesia", icon: "facebook" },
    { platform: "Instagram", url: "https://www.instagram.com/zoulred_/", icon: "instagram" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/iglesia/", icon: "linkedin" }
  ]
};


export const techStackData: TechStack[] = [
   {
    category: "Frontend",
    skills: ["Html","CSS","Javascript", "TypeScript", "Tailwind CSS", "Next.js", ]
  },
  {
    category: "Design",
    skills: ["Figma", "Adobe XD",]
  },
 
  {
    category: "Backend",
    skills: [  "MySql",]
  },
  {
    category: "Tools",
    skills: ["Github","Vscode","Git", "Framer", "Canva", ]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Jesus Reigns Ministries Sison Website",
    description: "JRM Sison Church website with events and services",
    image: "",
    tags: ["HTML", "CSS", "JavaScript", "Email.js"],
    link: "https://jrm-sison.netlify.app/",
    
  },
  {
    id: "2",
    title: "Bahay Kubo Augmented Reality App",
    description: "A capstone project showcasing augmented reality capabilities in a mobile Learning application.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800&h=450",
    tags: ["Flutter", "Android Studio", "Figma", "Firebase"],
    link: "https://bahaykuboar.netlify.app/",
    
  }
];

export const experienceData: Experience[] = [
  {
    id: "1",
    company: "Homebase",
    role: "Web Developer",
    period: "2024",
    description: "Worked on frontend development, creating responsive and interactive web interfaces for various projects."
  },
  {
    id: "2",
    company: "Movie in Campus Seminar",
    role: "Winner",
    period: "2025",
    description: "Awarded for outstanding contribution and creativity in the Movie in Campus seminar organized by SUI Community Philippines."
  },
  {
    id: "3",
    company: "JRM Sison Website",
    role: "Web Developer",
    period: "2025",
    description: "Developed and launched the official JRM Sison website, implementing user-friendly navigation and responsive design."
  },
   {
    id: "5",
    company: "Bahay Kubo AR Capstone",
    role: "Mobile App Prototype",
    period: "2025",
    description: "Designed and prototyped the mobile app flow for the Bahay Kubo AR capstone project, focusing on intuitive UX and interactive user journeys."
  },
  
  {
    id: "5",
    company: "Bahay Kubo AR Capstone",
    role: "Capstone Project",
    period: "2026",
    description: "Successfully defended our capstone project titled 'Bahay Kubo AR', an interactive AR experience showcasing Filipino culture."
  },
  
];

  


export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "UI/UX Design for Beginners Certificate",
    issuer: "Simplilearn",
    date: "2025"
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
    name: "JR Pacito",
    role: "Jrm Sison Pastor",
    content: "Working with Zoul has been a great experience. What I like about the website is it's being user friendly. Anyone can easily access and promote it to their friends and contacts. You can enjoy viewing it on either your smartphone or computer whichever is available. So wherever I go, I can easily present my personal testimony on what God is doing in our church family by getting them walk through the web for instance.",
    avatar: "public/images/feed1.webp"
  },
  
   
];

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    url: "public/images/g21.png",
    caption: ""
  },
  {
    id: "2",
    url: "public/images/g2.jpg",
    caption: ""
  },
  {
    id: "3",
    url: "public/images/g3.jpg",
    caption: ""
  },
  {
    id: "4",
    url: "public/images/g4.jpg",
    caption: ""
  },
  {
    id: "5",
    url: "public/images/g55.jpeg",
    caption: ""
  },
  {
    id: "6",
    url: "public/images/g6.jpg",
    caption: ""
  },
  {
    id: "7",
    url: "public/images/g7.jpeg",
    caption: ""
  },
  {
    id: "8",
    url: "public/images/g1.jpeg",
    caption: ""
  }
];
