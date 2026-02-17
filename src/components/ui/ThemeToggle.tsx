import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'cyberhacker'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'cyberhacker';
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      applyTheme('dark');
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'cyberhacker') => {
    const root = document.documentElement;
    root.classList.remove('dark', 'cyberhacker');
    
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else if (newTheme === 'cyberhacker') {
      root.classList.add('dark', 'cyberhacker');
    }
  };

  const toggleTheme = () => {
    let newTheme: 'light' | 'dark' | 'cyberhacker' = 'light';
    if (theme === 'light') newTheme = 'dark';
    else if (theme === 'dark') newTheme = 'cyberhacker';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 left-4 z-50 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 bg-white dark:bg-gray-800 [.cyberhacker_&]:bg-black border-2 border-gray-100 dark:border-gray-700 [.cyberhacker_&]:border-cyan-500 [.cyberhacker_&]:shadow-[0_0_25px_rgba(0,191,255,0.5)] group"
      aria-label="Toggle theme"
      title={`Current theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`}
    >
      {theme === 'light' ? (
        <svg className="w-6 h-6 text-yellow-500 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : theme === 'dark' ? (
        <svg className="w-6 h-6 text-blue-500 group-hover:-rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )}
    </button>
  );
};