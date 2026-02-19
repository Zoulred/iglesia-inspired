
import React from 'react';
import type { Project } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProjectsProps {
  projects: Project[];
  onViewAll?: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onViewAll }) => {
  return (
    <div className="space-y-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] px-1">Recent Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project) => (
          <Card key={project.id} className="group hover:shadow-sm dark:hover:shadow-gray-900/50 [.cyberhacker_&]:border-cyan-500/20 [.cyberhacker_&]:bg-black/20 [.cyberhacker_&]:hover:border-cyan-400/50 [.cyberhacker_&]:hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all p-3">
            <CardContent>
              <h3 className="text-base font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-cyan-100 mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 [.cyberhacker_&]:text-gray-400 text-xs mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 2).map(tag => (
                  <Badge key={tag} variant="outline" className="text-xs [.cyberhacker_&]:border-cyan-500/40 [.cyberhacker_&]:text-cyan-300">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {project.link && (
                  <a href={project.link} className="text-blue-600 dark:text-blue-400 [.cyberhacker_&]:text-cyan-400 text-sm font-semibold hover:underline">Live Demo</a>
                )}
                {project.github && (
                  <a href={project.github} className="text-gray-600 dark:text-gray-400 [.cyberhacker_&]:text-gray-400 text-sm font-semibold hover:underline">GitHub</a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {onViewAll && (
        <div className="flex justify-center">
          <button
            onClick={onViewAll}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors [.cyberhacker_&]:bg-cyan-600 [.cyberhacker_&]:hover:bg-cyan-500 [.cyberhacker_&]:shadow-cyan-500/20 [.cyberhacker_&]:hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          >
            View More Projects
          </button>
        </div>
      )}
    </div>
  );
};
