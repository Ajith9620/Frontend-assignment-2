// src/components/shared/ThemeSelector.tsx
import React from 'react';
import { useThemeStore } from '@/store/themeStore';

const ThemeSelector: React.FC = () => {
  const { specialty, setSpecialty } = useThemeStore();
  const themes = ['default', 'theme1', 'theme2'];

  return (
    <select
      value={specialty}
      onChange={(e) => setSpecialty(e.target.value as any)}
      className="bg-white text-black px-2 py-1 rounded"
    >
      {themes.map((t) => (
        <option key={t} value={t}>
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelector;
