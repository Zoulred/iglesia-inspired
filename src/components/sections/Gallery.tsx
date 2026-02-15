
import React, { useRef } from 'react';
import type { GalleryItem } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'next' | 'prev') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const itemWidth = container.children[0]?.getBoundingClientRect().width ?? 200;
    const scrollAmount = itemWidth + 16; // image width + gap

    if (direction === 'next') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Gallery</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('prev')}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-sm dark:shadow-gray-900/20"
              aria-label="Previous images"
              title="Previous"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('next')}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-400 dark:hover:border-blue-600 transition-all shadow-sm dark:shadow-gray-900/20"
              aria-label="Next images"
              title="Next"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-40 h-32 rounded-xl overflow-hidden shadow-md dark:shadow-gray-900/50 hover:shadow-lg transition-shadow duration-300 bg-gray-100 dark:bg-gray-800"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  title={item.caption}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 text-white text-xs font-medium">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Scroll horizontally or use navigation buttons to view more</p>
      </CardContent>
    </Card>
  );
};
