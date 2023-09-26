'use client';

import { create } from 'zustand';

interface useMenuProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenu = create<useMenuProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
