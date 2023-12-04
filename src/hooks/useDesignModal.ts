'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { produce } from 'immer';

interface DesignModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useDesignModal = create<DesignModalStore>()(
  devtools((set) => ({
    isOpen: false,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openDesignModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeDesignModal'
      ),
  }))
);
