'use client';

import { useMemo } from 'react';
import { useMenu } from './useMenu';

export const useActiveMenu = () => {
  const isOpen = useMenu((state) => state.isOpen);

  const activeMenu = useMemo((): string => {
    return isOpen.toString();
  }, [isOpen]);

  return {
    activeMenu,
  };
};
