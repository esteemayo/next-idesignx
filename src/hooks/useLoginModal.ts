'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

interface LoginModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useLoginModal = create<LoginModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openLoginModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeLoginModal'
      ),
  }))
);
