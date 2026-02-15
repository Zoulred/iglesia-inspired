import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { ProfileHeader } from './components/sections/ProfileHeader';
import { AboutMe } from './components/sections/AboutMe';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Recommendations } from './components/sections/Recommendations';
import { Gallery } from './components/sections/Gallery';
import { 
  profileData, 
  techStackData, 
  projectsData, 
  experienceData, 
  certificationsData, 
  recommendationsData, 
  galleryData 
} from './data/portfolio';

const App: React.FC = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Profile & Info */}
        <div className="lg:col-span-4 space-y-6">
          <ProfileHeader profile={profileData} />
          <AboutMe bio={profileData.bio} />
          <TechStack stacks={techStackData} />
          <Certifications certifications={certificationsData} />
          <Gallery items={galleryData} />
        </div>

        {/* Right Column - Main Content */}
        <div className="lg:col-span-8 space-y-6">
          <Projects projects={projectsData} />
          <Experience experiences={experienceData} />
          <Recommendations recommendations={recommendationsData} />
        </div>
      </div>
    </MainLayout>
  );
};

export default App;
