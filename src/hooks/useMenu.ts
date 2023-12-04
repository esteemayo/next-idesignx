'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

interface MenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenu = create<MenuStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openMenu'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeMenu'
      ),
  }))
);
