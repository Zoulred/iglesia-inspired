
import React from 'react';
import type { TechStack as TechStackType } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface TechStackProps {
  stacks: TechStackType[];
}

export const TechStack: React.FC<TechStackProps> = ({ stacks }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900">Tech Stack</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {stacks.map((stack) => (
          <div key={stack.category}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {stack.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {stack.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
