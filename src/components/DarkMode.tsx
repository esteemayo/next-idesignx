'use client';

import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useEffect, useState } from 'react';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

import { useDarkMode } from '@/hooks/useDarkMode';

const DarkMode = () => {
  const { mode, dark, light } = useDarkMode();
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Button disabled={!mode} onClick={() => light()}>
          <LightModeOutlinedIcon />
        </Button>
        <Button>
          {screenSize <= 768 ? (
            <SmartphoneOutlinedIcon />
          ) : (
            <DesktopWindowsOutlinedIcon />
          )}
        </Button>
        <Button disabled={mode} onClick={() => dark()}>
          <DarkModeOutlinedIcon />
        </Button>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 15rem;
  height: fit-content;
  padding: 2.5rem 2rem;
  background-color: hsl(277, 94%, 87%);
  color: var(--clr-white);
  border-radius: 0.5rem;
  position: fixed;
  right: 3rem;
  bottom: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  border: none;
  width: 3rem;
  height: 3rem;
  background-color: var(--clr-purple-light-2);
  color: hsl(277, 94%, 87%);
  border-radius: 50%;
  outline-color: var(--clr-purple-light-3);
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(2) {
    cursor: default;
  }

  &:disabled {
    opacity: 0.75;
  }

  svg {
    font-size: 2.2rem;
    fill: currentColor;
    transition: all 0.2s;

    &:hover {
      transform: scale(0.9);
    }
  }
`;

export default DarkMode;
