import React, { useState, useMemo } from 'react';
import type { Project } from '../../types';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface AllProjectsProps {
  projects: Project[];
  onBack?: () => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({ projects, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = new Set<string>(['All']);
    projects.forEach(project => {
      project.tags.forEach(tag => cats.add(tag));
    });
    return Array.from(cats);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(project => project.tags.includes(selectedCategory));
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-6 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] px-1">
          All Projects
        </h2>
        {onBack && (
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm font-medium [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:hover:bg-gray-800"
          >
            ← Back to Portfolio
          </button>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? 'bg-blue-600 text-white shadow-md [.cyberhacker_&]:bg-cyan-600 [.cyberhacker_&]:shadow-cyan-500/50'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 [.cyberhacker_&]:bg-gray-900 [.cyberhacker_&]:text-cyan-600 [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-900 [.cyberhacker_&]:hover:border-cyan-500'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
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
    </div>
  );
};