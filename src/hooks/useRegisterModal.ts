'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

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
