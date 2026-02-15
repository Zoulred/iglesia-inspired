
import React from 'react';
import { Profile } from '../../types';
import { Card, CardContent } from '../ui/Card';

interface ProfileHeaderProps {
  profile: Profile;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <Card className="mb-6">
      <CardContent className="flex flex-col md:flex-row items-center gap-6">
        <img 
          src={profile.avatar} 
          alt={profile.name} 
          className="w-32 h-32 rounded-2xl object-cover shadow-lg"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
          <p className="text-lg text-blue-600 font-medium mb-2">{profile.role}</p>
          <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {profile.location}
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a 
              href={`mailto:${profile.email}`}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
            >
              Contact Me
            </a>
            <div className="flex gap-2">
              {profile.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-50 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
                  aria-label={social.platform}
                >
                  <span className="capitalize text-sm font-medium">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
