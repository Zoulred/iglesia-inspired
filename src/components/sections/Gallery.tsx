
import React, { useState } from 'react';
import { GalleryItem } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Gallery</h2>
          <div className="flex gap-2">
            <button 
              onClick={prev}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
          <img 
            src={items[currentIndex].url} 
            alt={items[currentIndex].caption}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <p className="text-white text-sm font-medium">{items[currentIndex].caption}</p>
          </div>
        </div>
        <div className="flex justify-center gap-1.5 mt-4">
          {items.map((_, idx) => (
            <div 
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
