import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <h1 className="galaxy-title text-2xl md:text-3xl font-bold">
        Spacify AI
      </h1>
    </header>
  );
};

export default Header;