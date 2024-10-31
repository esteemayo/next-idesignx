'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { SeenOnProps } from '@/types';
import { useDarkMode } from '@/hooks/useDarkMode';

const SeenOn = ({ data }: SeenOnProps) => {
  const mode = useDarkMode((state) => state.mode);

  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const handleSize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, []);

  const gradientEffect = useMemo(() => {
    if (screenSize <= 420) {
      return false;
    }

    return mode ? false : true;
  }, [mode, screenSize]);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return window.removeEventListener('resize', handleSize);
  }, [handleSize]);

  return (
    <Container>
      <Wrapper>
        <Text>As seen on</Text>
        <Marquee speed={100} gradient={gradientEffect}>
          <ImageWrap>
            {data.map((item) => {
              const { id, img } = item;
              return (
                <StyledImage key={id} src={img} width={80} height={50} alt='' />
              );
            })}
          </ImageWrap>
        </Marquee>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: transparent;
  margin-top: -14rem;
  position: relative;

  @media only screen and (max-width: 56.25em) {
    grid-column: full-start / full-end;
    margin-top: -22rem;
    margin-bottom: -5rem;
  }

  @media only screen and (max-width: 50em) {
    margin: 10rem 0;
  }

  @media only screen and (max-width: 18.75em) {
    margin: 5rem 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
`;

const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  gap: 2vw;
  align-items: center;
  font-size: 100%;
  color: var(--clr-purple-light-1);

  @media only screen and (max-width: 56.25em) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 50em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 34.375em) {
    font-size: 1.9rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 125em) {
    font-size: 2rem;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: currentColor;
  }
`;

const ImageWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr));
  column-gap: 3rem;
  overflow-x: hidden;
`;

const StyledImage = styled(Image)`
  max-width: 5rem;
  max-height: 5rem;
  object-fit: contain;

  @media only screen and (min-width: 112.5em) {
    max-width: 5.5rem;
    max-height: 5.5rem;
  }

  @media only screen and (min-width: 125em) {
    max-width: 6rem;
    max-height: 6rem;
  }
`;

export default SeenOn;
