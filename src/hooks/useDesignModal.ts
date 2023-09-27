'use client';

import { create } from 'zustand';

interface DesignModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDesignModal = create<DesignModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
