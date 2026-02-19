import React, { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { MiniGamesPage } from './components/pages/MiniGamesPage';
import { AllProjects } from './components/sections/AllProjects';
import { projectsData } from './data/portfolio';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'games' | 'projects'>('portfolio');

  return (
    <MainLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentPage === 'portfolio' ? (
        <PortfolioPage onNavigate={(page) => page === 'projects' && setCurrentPage('projects')} />
      ) : currentPage === 'games' ? (
        <MiniGamesPage />
      ) : (
        <AllProjects projects={projectsData} onBack={() => setCurrentPage('portfolio')} />
      )}
    </MainLayout>
  );
};

export default App;
