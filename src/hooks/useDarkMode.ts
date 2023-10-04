import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface DarkModeStore {
  mode: boolean;
  dark(): void;
  light(): void;
  toggle(): void;
}

export const useDarkMode = create<DarkModeStore>()(
  devtools(
    persist(
      (set) => ({
        mode: false,
        dark: () => set(() => ({ mode: true }), false, 'darkMode'),
        light: () => set(() => ({ mode: false }), false, 'lightMode'),
        toggle: () =>
          set((state) => ({ mode: !state.mode }), false, 'toggleMode'),
      }),
      { name: 'mode' }
    )
  )
);
