'use client';

import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '@/hooks/useDarkMode';
import { darkTheme, lightTheme } from '@/utils/Theme';

interface ModeProviderProps {
  children: React.ReactNode;
}

const ModeProvider: React.FC<ModeProviderProps> = ({ children }) => {
  const { mode } = useDarkMode();

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ModeProvider;
