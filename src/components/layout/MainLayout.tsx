
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface MainLayoutProps {
  children: React.ReactNode;
  currentPage?: 'portfolio' | 'games';
  onPageChange?: (page: 'portfolio' | 'games') => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentPage = 'portfolio', onPageChange }) => {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-gray-950 transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            {onPageChange && (
              <>
                <button
                  onClick={() => onPageChange('portfolio')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === 'portfolio'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => onPageChange('games')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === 'games'
                      ? 'bg-blue-600 dark:bg-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  🎮 Mini Games
                </button>
              </>
            )}
          </div>
          <div className="flex justify-end">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2v6m0 6v2m8.485-13.485l-4.243 4.243m-5.484 5.484l-4.243-4.243M3.515 3.515l4.243 4.243m5.484-5.485l4.243 4.243" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          </div>
        </div>
        {children}
      </div>
      <footer className="mt-12 pb-8 text-center text-gray-400 dark:text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};
