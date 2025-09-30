import React, { useState } from 'react';
import { Search, Mic, Home, BookOpen, Music } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: 'home' | 'case-studies' | 'relaxing-sounds') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleNavigation = (page: 'home' | 'case-studies' | 'relaxing-sounds') => {
    onNavigate(page);
    setIsPanelOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Main Heading and Subheading */}
      <div className="flex flex-col items-center justify-center mb-12 mt-32">
  <h1 className="galaxy-title text-4xl md:text-5xl font-bold mb-4 text-center text-gray-300 font-fun">🌌 Welcome to SpacifyAI 🌌</h1>
        <p className="text-lg md:text-xl max-w-xl text-center text-gray-300 font-fun">
          Your very own AI companion to explore the wonders of space, spark curiosity, and guide you through the mysteries of the universe.
        </p>
      </div>

      {/* Main Navigation Section */}
      <div className="flex-1 flex items-center justify-center w-full max-w-6xl">
        <div className="relative flex items-center justify-start w-full">
          {/* Circular Main Button */}
          <div className="relative mr-8 md:mr-16 galaxy-main-btn-shift">
            <button
              onClick={togglePanel}
              className={`galaxy-button-main w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                isPanelOpen ? 'scale-110' : 'hover:scale-105'
              }`}
              title="Open Navigation Panel"
            >
              <div className="w-8 h-8 galaxy-orb"></div>
            </button>

            {/* Semicircular Panel */}
            <div className={`navigation-panel ${isPanelOpen ? 'open' : ''}`}>
              <button
                onClick={() => handleNavigation('home')}
                className="panel-button panel-home"
                title="Home"
              >
                <Home size={20} />
                <span className="button-text">Home</span>
              </button>
              <button
                onClick={() => handleNavigation('case-studies')}
                className="panel-button panel-case-studies"
                title="Case Studies"
              >
                <BookOpen size={20} />
                <span className="button-text">Case Studies</span>
              </button>
              <button
                onClick={() => handleNavigation('relaxing-sounds')}
                className="panel-button panel-relaxing-sounds"
                title="Sounds"
              >
                <Music size={20} />
                <span className="button-text">Sounds</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="w-full max-w-2xl mb-16">
        <div className="galaxy-search-container">
          <input
            type="text"
            placeholder="Explore the universe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="galaxy-search-input"
          />
          <div className="search-icons">
            <button className="search-icon-button" title="Search">
              <Search size={20} />
            </button>
            <button className="search-icon-button" title="Voice Search">
              <Mic size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;