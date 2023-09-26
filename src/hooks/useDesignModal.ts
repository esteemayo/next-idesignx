'use client';

import { create } from 'zustand';

interface DesignModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDesignModal = create<DesignModalProps>((set) => ({
  isOpen: false,
  onOpen: () => ({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
