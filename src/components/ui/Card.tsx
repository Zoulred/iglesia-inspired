
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-stone-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-950 overflow-hidden [.cyberhacker_&]:bg-gray-900/50 [.cyberhacker_&]:border-cyan-500/50 [.cyberhacker_&]:shadow-[0_0_20px_rgba(0,191,255,0.2)] ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-50 dark:border-gray-800 [.cyberhacker_&]:border-cyan-500/30 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);
