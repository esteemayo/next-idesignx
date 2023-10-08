'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface LoginModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useLoginModal = create<LoginModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openLoginModal'),
    onClose: () => set(() => ({ isOpen: true }), false, 'closeLoginModal'),
  }))
);
