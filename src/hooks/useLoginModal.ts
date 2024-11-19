'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { LoginModalAction, LoginModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useLoginModal = create<LoginModalStore & LoginModalAction>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
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
