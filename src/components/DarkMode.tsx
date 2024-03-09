'use client';

import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useCallback, useEffect, useState } from 'react';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

import { useDarkMode } from '@/hooks/useDarkMode';

interface IBtn {
  active: boolean;
}

const DarkMode = () => {
  const mode = useDarkMode((state) => state.mode);
  const light = useDarkMode((state) => state.light);
  const dark = useDarkMode((state) => state.dark);

  const [isSelected, setIsSelected] = useState('');
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleLightMode = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      light();
      setIsSelected('light');
    },
    [light]
  );

  const handleDarkMode = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      dark();
      setIsSelected('dark');
    },
    [dark]
  );

  const handlePlatform = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setIsSelected(screenSize <= 768 ? 'mobile' : 'desktop');
    },
    [screenSize]
  );

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Container>
      <Wrapper>
        <Button
          type='button'
          active={isSelected === 'light'}
          disabled={!mode}
          onClick={handleLightMode}
        >
          <LightModeOutlinedIcon />
        </Button>
        <Button
          type='button'
          active={isSelected === 'desktop' || isSelected === 'mobile'}
          onClick={handlePlatform}
        >
          {screenSize <= 768 ? (
            <SmartphoneOutlinedIcon />
          ) : (
            <DesktopWindowsOutlinedIcon />
          )}
        </Button>
        <Button
          type='button'
          active={isSelected === 'dark'}
          disabled={mode}
          onClick={handleDarkMode}
        >
          <DarkModeOutlinedIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 3px;
  background-color: hsl(277, 94%, 87%);
  color: var(--clr-white);
  border: 1px solid var(--clr-purple-light-2);
  border-radius: 100rem;
  position: fixed;
  right: 3rem;
  bottom: 10rem;
  z-index: 3000;

  @media only screen and (max-width: 31.25em) {
    padding: 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button<IBtn>`
  border: none;
  width: 3.2rem;
  height: 3.2rem;
  font-size: 2.2rem;
  background-color: ${({ active }) =>
    setProperty(active, 'var(--clr-purple-light-2)', 'transparent')};
  color: ${({ active }) =>
    setProperty(active, 'var(--clr-white)', 'var(--clr-purple-light-2)')};
  border-radius: 50%;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(3) {
    cursor: default;
  }

  &:disabled {
    /* opacity: 0.75; */
    cursor: default;
  }

  svg {
    font-size: 1.8rem;
    fill: currentColor;
    transform: scale(0.9);
    transition: all 0.2s;

    @media only screen and (max-width: 31.25em) {
      font-size: 1.85rem;
    }

    &:hover {
      transform: scale(1);
    }
  }
`;

const setProperty = (active: boolean, val1: string, val2: string) => {
  return active ? val1 : val2;
};

export default DarkMode;
