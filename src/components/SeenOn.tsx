'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useMemo } from 'react';
import styled from 'styled-components';

import { SeenOnProps } from '@/types';
import { useDarkMode } from '@/hooks/useDarkMode';

const SeenOn = ({ data }: SeenOnProps) => {
  const mode = useDarkMode((state) => state.mode);

  const gradientEffect = useMemo(() => {
    return mode ? false : true;
  }, [mode]);

  return (
    <Container>
      <Text>As seen on</Text>
      <Marquee speed={100} gradient={gradientEffect}>
        <Wrapper>
          {data.map((item) => {
            const { id, img } = item;
            return (
              <StyledImage key={id} src={img} width={80} height={50} alt='' />
            );
          })}
        </Wrapper>
      </Marquee>
    </Container>
  );
};

const Container = styled.section`
  grid-column: center-start / center-end;
  background-color: transparent;
  margin-top: -14rem;

  @media only screen and (max-width: 56.25em) {
    grid-column: full-start / full-end;
    margin: 5rem;
    margin-bottom: -5rem;
  }

  @media only screen and (max-width: 50em) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 18.75em) {
    margin-bottom: 0;
  }
`;

const Text = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  gap: 2vw;
  align-items: center;
  color: var(--clr-purple-light-1);

  &::before,
  &::after {
    content: '';
    display: block;
    height: 1px;
    background-color: currentColor;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(min-content, 1fr));
  column-gap: 3rem;
  overflow-x: hidden;
`;

const StyledImage = styled(Image)`
  max-width: 5rem;
  max-height: 5rem;
  object-fit: contain;
`;

export default SeenOn;
