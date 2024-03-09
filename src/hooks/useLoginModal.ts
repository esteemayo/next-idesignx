'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

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
