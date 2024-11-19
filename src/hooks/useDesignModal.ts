'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { DesignActionType, DesignModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useDesignModal = create<DesignModalStore & DesignActionType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
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
