import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CaseStudies from './components/CaseStudies';
import RelaxingSounds from './components/RelaxingSounds';
import './styles/galaxy.css';

type PageType = 'home' | 'case-studies' | 'relaxing-sounds';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'case-studies':
        return <CaseStudies />;
      case 'relaxing-sounds':
        return <RelaxingSounds />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="galaxy-background">
      <Header />
      {renderPage()}
    </div>
  );
}

export default App;