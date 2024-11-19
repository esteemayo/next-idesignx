'use client';

import { create } from 'zustand';
import { produce } from 'immer';
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
        dark: () =>
          set(
            produce((state) => {
              state.mode = true;
            }),
            false,
            'darkMode'
          ),
        light: () =>
          set(
            produce((state) => {
              state.mode = false;
            }),
            false,
            'lightMode'
          ),
        toggle: () =>
          set(
            produce((state) => {
              state.mode = !state.mode;
            }),
            false,
            'toggleMode'
          ),
      }),
      { name: 'mode' }
    )
  )
);
