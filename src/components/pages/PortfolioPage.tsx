import React from 'react';
import { ProfileHeader } from '../sections/ProfileHeader';
import { AboutMe } from '../sections/AboutMe';
import { TechStack } from '../sections/TechStack';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { Certifications } from '../sections/Certifications';
import { Recommendations } from '../sections/Recommendations';
import { Gallery } from '../sections/Gallery';
import { 
  profileData, 
  techStackData, 
  projectsData, 
  experienceData, 
  certificationsData, 
  recommendationsData, 
  galleryData 
} from '../../data/portfolio';

interface PortfolioPageProps {
  onNavigate?: (page: 'projects') => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Profile & Info */}
      <div className="lg:col-span-4 space-y-6">
        <ProfileHeader profile={profileData} />
        <AboutMe bio={profileData.bio} />
        <TechStack stacks={techStackData} />
        <Certifications certifications={certificationsData} />
      </div>

      {/* Right Column - Main Content */}
      <div className="lg:col-span-8 space-y-6">
        <Experience experiences={experienceData} />
        <Projects projects={projectsData} onViewAll={() => onNavigate?.('projects')} />
        <Recommendations recommendations={recommendationsData} />
        <Gallery items={galleryData} />
      </div>
    </div>
  );
};
