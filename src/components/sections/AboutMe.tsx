
import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface AboutMeProps {
  bio: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({ bio }) => {
  return (
    <Card className="mb-6 [.cyber_&]:border-cyan-500/30 [.cyber_&]:bg-black/40 [.cyber_&]:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-400 [.cyber_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">About Me</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 [.cyber_&]:text-gray-300 leading-relaxed text-justify">
          {bio}
        </p>
      </CardContent>
    </Card>
  );
};
