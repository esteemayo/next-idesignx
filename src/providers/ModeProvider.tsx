'use client';

import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '@/hooks/useDarkMode';
import { darkTheme, lightTheme } from '@/utils/Theme';

const ModeProvider = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useDarkMode();

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ModeProvider;
