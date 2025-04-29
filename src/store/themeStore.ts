// src/store/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  specialty: 'default' | 'theme1' | 'theme2';
  setSpecialty: (specialty: 'default' | 'theme1' | 'theme2') => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      specialty: 'default',
      setSpecialty: (specialty) => set({ specialty }),
    }),
    { name: 'theme' } // stored in localStorage as 'theme'
  )
);
