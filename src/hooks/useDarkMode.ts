'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools, persist } from 'zustand/middleware';

import { DarkModeActionType, DarkModeStore } from '@/types';

const INITIAL_STATE = {
  mode: false,
};

export const useDarkMode = create<DarkModeStore & DarkModeActionType>()(
  devtools(
    persist(
      (set) => ({
        mode: INITIAL_STATE.mode,
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
