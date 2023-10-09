'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useRegisterModal = create<RegisterModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () => set(() => ({ isOpen: true }), false, 'openRegisterModal'),
    onClose: () => set(() => ({ isOpen: false }), false, 'closeRegisterModal'),
  }))
);
