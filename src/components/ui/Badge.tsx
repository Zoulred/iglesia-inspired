
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const variants = {
    primary: 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 [.cyberhacker_&]:bg-red-900/40 [.cyberhacker_&]:text-red-400 [.cyberhacker_&]:border [.cyberhacker_&]:border-red-500/60',
    secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 [.cyberhacker_&]:bg-gray-950 [.cyberhacker_&]:text-cyan-300 [.cyberhacker_&]:border [.cyberhacker_&]:border-cyan-500/50 [.cyberhacker_&]:shadow-[0_0_10px_rgba(0,191,255,0.3)] [.cyberhacker_&]:hover:shadow-[0_0_15px_rgba(0,191,255,0.5)]',
    outline: 'border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 [.cyberhacker_&]:border-cyan-500/80 [.cyberhacker_&]:text-cyan-400'
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
