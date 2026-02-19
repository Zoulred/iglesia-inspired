
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ChatBot } from '../ChatBot';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage?: 'portfolio' | 'games' | 'projects';
  onPageChange?: (page: 'portfolio' | 'games' | 'projects') => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage = 'portfolio', onPageChange }) => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = () => {
    if (theme === 'light') return (
      <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
    if (theme === 'dark') return (
      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    );
    return (
      <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    );
  };

  const getThemeTitle = () => {
    if (theme === 'light') return 'Light Mode • Click to toggle';
    if (theme === 'dark') return 'Dark Mode • Click to toggle';
    return 'Cyberhacker Mode • Click to toggle';
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 [.cyberhacker_&]:bg-slate-900 transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            {onPageChange && (
              <>
                <button
                  onClick={() => onPageChange('portfolio')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === 'portfolio'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white [.cyberhacker_&]:bg-red-600 [.cyberhacker_&]:text-white [.cyberhacker_&]:shadow-lg [.cyberhacker_&]:shadow-red-500/50'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 [.cyberhacker_&]:bg-gray-800 [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:hover:bg-gray-700 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:border'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => onPageChange('games')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === 'games'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white [.cyberhacker_&]:bg-red-600 [.cyberhacker_&]:text-white [.cyberhacker_&]:shadow-lg [.cyberhacker_&]:shadow-red-500/50'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 [.cyberhacker_&]:bg-gray-800 [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:hover:bg-gray-700 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:border'
                  }`}
                >
                  Mini Games
                </button>
              </>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors [.cyberhacker_&]:bg-black [.cyberhacker_&]:text-cyan-400 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:border-2 [.cyberhacker_&]:shadow-lg [.cyberhacker_&]:shadow-cyan-500/50 [.cyberhacker_&]:hover:bg-gray-900"
              title={getThemeTitle()}
            >
              {getThemeIcon()}
            </button>
          </div>
        </div>
        {children}
      </div>
      <footer className="mt-12 pb-8 text-center text-gray-400 dark:text-gray-500 [.cyberhacker_&]:text-cyan-600 text-sm">
        <p>© {new Date().getFullYear()} • Iglesia Portfolio. All rights reserved.</p>
      </footer>
      <ChatBot />
    </div>
  );
};
