
import React from 'react';
import type { TechStack as TechStackType } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface TechStackProps {
  stacks: TechStackType[];
}

export const TechStack: React.FC<TechStackProps> = ({ stacks }) => {
  return (
    <Card className="mb-6 [.cyberhacker_&]:border-cyan-500/50 [.cyberhacker_&]:bg-gradient-to-br [.cyberhacker_&]:from-gray-900/80 [.cyberhacker_&]:to-black/60 [.cyberhacker_&]:shadow-[0_0_25px_rgba(0,191,255,0.3)]">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-transparent [.cyberhacker_&]:bg-clip-text [.cyberhacker_&]:bg-gradient-to-r [.cyberhacker_&]:from-cyan-300 [.cyberhacker_&]:to-blue-400 [.cyberhacker_&]:drop-shadow-[0_0_10px_rgba(0,191,255,1)]">Tech Stack</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {stacks.map((stack) => (
          <div key={stack.category}>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-500 [.cyberhacker_&]:text-red-400 [.cyberhacker_&]:drop-shadow-[0_0_5px_rgba(255,23,68,0.8)] uppercase tracking-wider mb-2">
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
