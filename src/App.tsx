import React, { useState } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { MiniGamesPage } from './components/pages/MiniGamesPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'games'>('portfolio');

  return (
    <MainLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {currentPage === 'portfolio' ? <PortfolioPage /> : <MiniGamesPage />}
    </MainLayout>
  );
};

export default App;
