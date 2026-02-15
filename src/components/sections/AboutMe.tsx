
import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface AboutMeProps {
  bio: string;
}

export const AboutMe: React.FC<AboutMeProps> = ({ bio }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">About Me</h2>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
          {bio}
        </p>
      </CardContent>
    </Card>
  );
};
