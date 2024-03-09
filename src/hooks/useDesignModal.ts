'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

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
