'use client';

import { useMemo } from 'react';
import { useDarkMode } from './useDarkMode';

export const useActiveMode = () => {
  const mode = useDarkMode((state) => state.mode);

  const activeMode = useMemo(() => {
    return mode.toString();
  }, [mode]);

  return {
    activeMode,
  };
};
