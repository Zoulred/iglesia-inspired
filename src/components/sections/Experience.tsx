
import React from 'react';
import { Experience as ExperienceType } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900">Experience</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`relative pl-6 ${index !== experiences.length - 1 ? 'pb-6 border-l-2 border-gray-100' : ''}`}>
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
              <h3 className="font-bold text-gray-900">{exp.role}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{exp.period}</span>
            </div>
            <p className="text-sm font-semibold text-gray-500 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
