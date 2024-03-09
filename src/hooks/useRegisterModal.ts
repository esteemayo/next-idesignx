'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

interface RegisterModalStore {
  isOpen: boolean;
  onOpen(): void;
  onClose(): void;
}

export const useRegisterModal = create<RegisterModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openRegisterModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeRegisterModal'
      ),
  }))
);
