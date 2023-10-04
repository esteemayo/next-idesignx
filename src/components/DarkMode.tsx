'use client';

import styled from 'styled-components';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';

import { useDarkMode } from '@/hooks/useDarkMode';

const DarkMode = () => {
  const { dark, light, mode } = useDarkMode();

  return (
    <Container>
      <Wrapper>
        <Box>
          <LightModeOutlinedIcon />
        </Box>
        <Box>
          <DesktopWindowsOutlinedIcon />
        </Box>
        <Box>
          <DarkModeOutlinedIcon />
        </Box>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 15rem;
  height: fit-content;
  padding: 2.5rem;
  background-color: hsl(277, 94%, 87%);
  color: var(--clr-white);
  border-radius: 2px;
  position: absolute;
  right: 3rem;
  bottom: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--clr-purple-light-2);
  color: hsl(277, 94%, 87%);
  border-radius: 50%;
`;

export default DarkMode;
