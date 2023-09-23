'use client';

import { useCallback, useState } from 'react';

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setShowMenu((value) => !value);
  }, []);

  return {
    showMenu,
    handleToggle,
  };
};
