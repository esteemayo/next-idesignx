'use client';

import { create } from 'zustand';

interface MenuStores {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenu = create<MenuStores>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
