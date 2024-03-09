'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

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
