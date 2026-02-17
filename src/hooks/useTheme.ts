import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'cyberhacker';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme') as Theme;
    if (stored && ['light', 'dark', 'cyberhacker'].includes(stored)) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'cyberhacker');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'cyberhacker') {
      root.classList.add('dark', 'cyberhacker');
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: Theme = 'light';
    if (theme === 'light') newTheme = 'dark';
    else if (theme === 'dark') newTheme = 'cyberhacker';
    setTheme(newTheme);
  };

  // For backward compatibility with isDarkMode
  const isDarkMode = theme !== 'light';

  return { theme, setTheme, toggleTheme, isDarkMode, setIsDarkMode: (val: boolean) => setTheme(val ? 'dark' : 'light') };
};
