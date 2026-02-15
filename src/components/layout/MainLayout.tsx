
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
      <footer className="mt-12 pb-8 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};
