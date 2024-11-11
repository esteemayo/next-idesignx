'use client';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import styled from 'styled-components';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useCallback, useEffect, useState } from 'react';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

import { useDarkMode } from '@/hooks/useDarkMode';

interface IBtn {
  isActive: boolean;
}

const DarkMode = () => {
  const dark = useDarkMode((state) => state.dark);
  const mode = useDarkMode((state) => state.mode);
  const light = useDarkMode((state) => state.light);

  const [isSelected, setIsSelected] = useState('light');
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
          isActive={isSelected === 'light'}
          disabled={!mode}
          onClick={handleLightMode}
        >
          <LightModeOutlinedIcon />
        </Button>
        <DeviceButton type='button'>
          {screenSize <= 768 ? (
            <SmartphoneOutlinedIcon />
          ) : (
            <DesktopWindowsOutlinedIcon />
          )}
        </DeviceButton>
        <Button
          type='button'
          isActive={isSelected === 'dark'}
          disabled={!!mode}
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

  @media only screen and (min-width: 112.5em) {
    padding: 4px;
  }

  @media only screen and (min-width: 125em) {
    padding: 0.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommonButton = styled.button`
  border: none;
  width: 3.2rem;
  height: 3.2rem;
  font-size: 2.2rem;
  border-radius: 50%;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 106.25em) {
    width: 3.3rem;
    height: 3.3rem;
    font-size: 2.3rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2.4rem;
  }

  @media only screen and (min-width: 125em) {
    width: 4rem;
    height: 4rem;
    font-size: 2.6rem;
  }

  &:nth-child(3) {
    cursor: default;
  }

  &:disabled {
    opacity: 0.75;
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

    @media only screen and (min-width: 106.25em) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 112.5em) {
      font-size: 2.2rem;
    }

    @media only screen and (min-width: 125em) {
      font-size: 2.5rem;
    }

    &:hover {
      transform: scale(1);
    }
  }
`;

const Button = styled(CommonButton)<IBtn>`
  background-color: ${({ isActive }) =>
    setProperty(isActive, 'var(--clr-purple-light-2)', 'transparent')};
  color: ${({ isActive }) =>
    setProperty(isActive, 'var(--clr-white)', 'var(--clr-purple-light-2)')};
`;

const DeviceButton = styled(CommonButton)`
  background-color: transparent;
  color: var(--clr-purple-light-2);
`;

const setProperty = (isActive: boolean, val1: string, val2: string) => {
  return isActive ? val1 : val2;
};

export default DarkMode;
