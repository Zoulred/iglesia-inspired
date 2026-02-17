
import React, { useRef, useState, useEffect } from 'react';
import type { GalleryItem } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

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
    <>
      <Card className="mb-6 [.cyber_&]:border-cyan-500/30 [.cyber_&]:bg-black/40 [.cyber_&]:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-400 [.cyber_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">Gallery</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('prev')}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 [.cyber_&]:border-cyan-500/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 [.cyber_&]:hover:bg-cyan-900/20 hover:border-blue-400 dark:hover:border-blue-600 [.cyber_&]:hover:border-cyan-400 transition-all shadow-sm dark:shadow-gray-900/20 [.cyber_&]:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              aria-label="Previous images"
              title="Previous"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 [.cyber_&]:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('next')}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 [.cyber_&]:border-cyan-500/30 hover:bg-blue-50 dark:hover:bg-blue-900/20 [.cyber_&]:hover:bg-cyan-900/20 hover:border-blue-400 dark:hover:border-blue-600 [.cyber_&]:hover:border-cyan-400 transition-all shadow-sm dark:shadow-gray-900/20 [.cyber_&]:shadow-[0_0_10px_rgba(6,182,212,0.2)]"
              aria-label="Next images"
              title="Next"
            >
              <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 [.cyber_&]:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="group flex-shrink-0 w-40 h-32 rounded-xl overflow-hidden shadow-md dark:shadow-gray-900/50 [.cyber_&]:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-xl hover:scale-110 hover:z-10 transition-all duration-300 bg-gray-100 dark:bg-gray-800 [.cyber_&]:bg-gray-900 relative cursor-zoom-in"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  title={item.caption}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 [.cyber_&]:text-gray-400 mt-3 text-center">Scroll horizontally or use navigation buttons to view more. Click to view full image.</p>
      </CardContent>
    </Card>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <img 
            src={selectedItem.url} 
            alt={selectedItem.caption} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};
