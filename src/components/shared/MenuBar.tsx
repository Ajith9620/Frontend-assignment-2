// src/components/shared/MenuBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeSelector from '@/components/shared/ThemeSelector';
import { useThemeStore } from '@/store/themeStore';

const MenuBar: React.FC = () => {
  const location = useLocation();
  const { specialty } = useThemeStore();

  return (
    <nav className="fixed top-0 left-0 w-full h-14 bg-primary text-white z-10 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
    <div className="flex space-x-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/themes" className="hover:underline">
        Themes
      </Link>
    </div>
    <ThemeSelector />
  </div>
</nav>
  );
};

export default MenuBar;
