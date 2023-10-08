'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DesignModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDesignModal = create<DesignModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openDesignModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeDesignModal'),
  }))
);
