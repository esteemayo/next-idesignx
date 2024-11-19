'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { MenuActionType, MenuStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useMenu = create<MenuStore & MenuActionType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openMenu'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeMenu'
      ),
  }))
);
