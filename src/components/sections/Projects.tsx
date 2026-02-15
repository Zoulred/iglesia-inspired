
import React from 'react';
import type { Project } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="space-y-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white px-1">Recent Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:shadow-md dark:hover:shadow-gray-900 transition-shadow p-4">
            <CardContent>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                {project.link && (
                  <a href={project.link} className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">Live Demo</a>
                )}
                {project.github && (
                  <a href={project.github} className="text-gray-600 dark:text-gray-400 text-sm font-semibold hover:underline">GitHub</a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
