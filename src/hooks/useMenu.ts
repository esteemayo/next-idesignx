'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface MenuStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenu = create<MenuStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openMenu'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeMenu'),
  }))
);
