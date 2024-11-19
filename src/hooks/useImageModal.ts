'use client';

import { create } from 'zustand';
import { produce } from 'immer';
import { devtools } from 'zustand/middleware';

import { ImageActionType, ImageModalStore } from '@/types';

const INITIAL_STATE = {
  isOpen: false,
};

export const useImageModal = create<ImageModalStore & ImageActionType>()(
  devtools((set) => ({
    isOpen: INITIAL_STATE.isOpen,
    onOpen: () =>
      set(
        produce((state) => {
          state.isOpen = true;
        }),
        false,
        'openImageModal'
      ),
    onClose: () =>
      set(
        produce((state) => {
          state.isOpen = false;
        }),
        false,
        'closeImageModal'
      ),
  }))
);
