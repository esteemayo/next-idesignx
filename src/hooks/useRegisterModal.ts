'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { RegisterActionType, RegisterModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useRegisterModal = create<
  RegisterModalStore & RegisterActionType
>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
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
