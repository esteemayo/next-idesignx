'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ImageModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useImageModal = create<ImageModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openImageModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeImageModal'),
  }))
);
