
import React, { useState, useEffect, useRef } from 'react';
import type { Experience as ExperienceType } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    experiences.forEach((exp, index) => {
      // Auto-check after delay
      const timer = setTimeout(() => {
        setCheckedItems(prev => ({
          ...prev,
          [exp.id]: true
        }));
      }, index * 3000);

      return () => clearTimeout(timer);
    });
  }, [experiences]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the element is visible
      const visibleTop = Math.max(0, elementTop);
      const visibleBottom = Math.min(viewportHeight, elementBottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const totalElementHeight = element.offsetHeight;

      // Calculate scroll progress (0 to 1)
      let progress = 0;
      if (elementTop < 0) {
        progress = Math.min(1, (-elementTop + visibleHeight) / totalElementHeight);
      } else if (elementBottom > viewportHeight) {
        progress = Math.min(1, visibleHeight / totalElementHeight);
      } else {
        progress = 1;
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
      </CardHeader>
      <CardContent className="relative py-8 pl-16">
        {/* Central vertical timeline line on the left */}
        <div ref={containerRef} className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 transform -translate-x-1/2">
          <div
            ref={timelineRef}
            className="w-full h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out"
            style={{ 
              height: `${scrollProgress * 100}%`,
              clipPath: 'inset(0 0 auto 0)'
            }}
          />
        </div>

        {/* Timeline items - all on the right side */}
        <div className="space-y-12 relative">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Circular marker on timeline */}
              <div className="absolute -left-12 top-6 w-6 h-6 z-20">
                <input
                  type="checkbox"
                  checked={checkedItems[exp.id] || false}
                  onChange={() => handleCheckChange(exp.id)}
                  className="w-6 h-6 bg-white dark:bg-gray-800 border-3 border-blue-600 dark:border-blue-400 rounded-full cursor-pointer checked:bg-blue-600 dark:checked:bg-blue-500 accent-blue-600 dark:accent-blue-500 shadow-md hover:shadow-lg transition-shadow"
                />
              </div>

              {/* Connector line from timeline to box */}
              <div className="absolute -left-12 top-8 w-12 h-0.5 bg-gradient-to-r from-blue-600 dark:to-blue-500 to-gray-300 dark:from-gray-700" />

              {/* Content box */}
              <div className="relative w-full">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm">{exp.role}</h3>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">{exp.company}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
