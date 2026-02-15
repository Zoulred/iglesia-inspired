
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300',
    outline: 'border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};
