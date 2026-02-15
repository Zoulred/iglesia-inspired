import React, { useState } from 'react';
import type { Profile } from '../../types';
import { Card, CardContent } from '../ui/Card';

interface ProfileHeaderProps {
  profile: Profile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="mb-6">
      <CardContent className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Avatar and Contact Button */}
        <div className="flex flex-col items-center md:items-start">
          <div 
            className="relative w-32 h-32 flex-shrink-0 mb-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={isHovered && profile.avatarHover ? profile.avatarHover : profile.avatar} 
              alt={profile.name} 
              className="w-full h-full rounded-2xl object-cover object-center shadow-lg transition-all duration-300"
              loading="eager"
              decoding="async"
            />
          </div>
          <a 
            href={`mailto:${profile.email}`}
            className="px-4 py-2.5 md:w-full md:px-6 md:py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-xl font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md shadow-blue-100 dark:shadow-blue-900/20 text-center text-xs md:text-sm"
          >
            Contact Me
          </a>
        </div>

        {/* Right Column - Info */}
        <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white inline-flex items-center gap-2 whitespace-nowrap md:whitespace-normal break-words mb-2">
            {profile.name}
            <span className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src="/images/ver.png" alt="verified" title="Verified" className="w-4 h-4" />
            </span>
          </h1>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">{profile.role}</p>
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
