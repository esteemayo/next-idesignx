'use client';

import styled from 'styled-components';

import { Wrapper } from '../common/Wrapper';
import { CommonImage } from '../common/CommonImage';

import { GalleryImageProps } from '@/types';

const GalleryImage = ({ active, image }: GalleryImageProps) => {
  return (
    <Wrapper active={active}>
      <Box>
        <Container>
          <StyledImage src={image} width={1100} height={500} alt='' />
        </Container>
      </Box>
    </Wrapper>
  );
};

const Box = styled.div`
  width: 120rem;
  height: 60rem;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 0.5rem;

  @media only screen and (max-width: 87.5em) {
    width: 110rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 100rem;
    height: 55rem;
  }

  @media only screen and (max-width: 62.5em) {
    width: 90rem;
    height: 50rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 80rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 70rem;
  }

  @media only screen and (max-width: 38.75em) {
    width: 60rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 50rem;
    height: 45rem;
  }

  @media only screen and (max-width: 30em) {
    width: 45rem;
    height: 40rem;
  }

  @media only screen and (max-width: 25em) {
    width: 40rem;
    height: 30rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 123rem;
    height: 65rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 125rem;
    height: 70rem;
  }

  @media only screen and (min-width: 125em) {
    width: 130rem;
    height: 80rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 110rem;
  height: 50rem;
  background-color: ${({ theme }) => theme.bgImg};

  @media only screen and (max-width: 87.5em) {
    width: 100rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 95rem;
  }

  @media only screen and (max-width: 62.5em) {
    width: 85rem;
    height: 45rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 75rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 65rem;
  }

  @media only screen and (max-width: 38.75em) {
    width: 55rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 45rem;
    height: 40rem;
  }

  @media only screen and (max-width: 30em) {
    width: 40rem;
    height: 35rem;
  }

  @media only screen and (max-width: 25em) {
    width: 35rem;
    height: 25rem;
  }

  @media only screen and (min-width: 106.25em) {
    width: 113rem;
    height: 55rem;
  }

  @media only screen and (min-width: 112.5em) {
    width: 115rem;
    height: 60rem;
  }

  @media only screen and (min-width: 125em) {
    width: 120rem;
    height: 70rem;
  }
`;

const StyledImage = styled(CommonImage)``;

export default GalleryImage;
