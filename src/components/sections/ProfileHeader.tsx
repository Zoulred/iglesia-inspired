import React, { useState } from 'react';
import type { Profile } from '../../types';
import { Card, CardContent } from '../ui/Card';

interface ProfileHeaderProps {
  profile: Profile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="mb-6 [.cyberhacker_&]:border-cyan-500/50 [.cyberhacker_&]:bg-gradient-to-br [.cyberhacker_&]:from-gray-900/80 [.cyberhacker_&]:to-black/60 [.cyberhacker_&]:shadow-[0_0_30px_rgba(0,191,255,0.3)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] [.cyberhacker_&]:bg-grid-cyan-500/[0.08] [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
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
              className="w-full h-full rounded-2xl object-cover object-center shadow-lg transition-all duration-300 [.cyberhacker_&]:ring-2 [.cyberhacker_&]:ring-cyan-500 [.cyberhacker_&]:shadow-[0_0_25px_rgba(0,191,255,0.6)] [.cyberhacker_&]:hover:shadow-[0_0_35px_rgba(255,23,68,0.4)]"
              loading="eager"
              decoding="async"
            />
          </div>
          <a 
            href={`mailto:${profile.email}`}
            className="px-4 py-2.5 md:w-full md:px-6 md:py-2 bg-blue-600 dark:bg-blue-700 [.cyberhacker_&]:bg-gradient-to-r [.cyberhacker_&]:from-red-600 [.cyberhacker_&]:to-red-700 text-white rounded-xl font-medium hover:bg-blue-700 dark:hover:bg-blue-600 [.cyberhacker_&]:hover:from-red-500 [.cyberhacker_&]:hover:to-red-600 transition-all shadow-md shadow-blue-100 dark:shadow-blue-900/20 [.cyberhacker_&]:shadow-[0_0_20px_rgba(255,23,68,0.5)] [.cyberhacker_&]:hover:shadow-[0_0_25px_rgba(255,23,68,0.7)] text-center text-xs md:text-sm relative z-10"
          >
            Contact Me
          </a>
        </div>

        {/* Right Column - Info */}
        <div className="text-center md:text-left flex-1 flex flex-col items-center md:items-start justify-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-transparent [.cyberhacker_&]:bg-clip-text [.cyberhacker_&]:bg-gradient-to-r [.cyberhacker_&]:from-cyan-300 [.cyberhacker_&]:via-cyan-400 [.cyberhacker_&]:to-blue-400 inline-flex items-center gap-2 whitespace-nowrap md:whitespace-normal break-words mb-2">
            {profile.name}
            <span className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 [.cyberhacker_&]:bg-cyan-500/20 [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-500/50 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src="/images/ver.png" alt="verified" title="Verified" className="w-4 h-4" />
            </span>
          </h1>
          <p className="text-lg text-blue-600 dark:text-blue-400 [.cyberhacker_&]:text-cyan-300 font-medium mb-2">{profile.role}</p>
          <p className="text-gray-500 dark:text-gray-400 [.cyberhacker_&]:text-cyan-200 flex items-center justify-center md:justify-start gap-2">
            <svg className="w-4 h-4 flex-shrink-0 [.cyberhacker_&]:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
