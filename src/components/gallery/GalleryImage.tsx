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

  @media only screen and (max-width: 76.25em) {
    width: 100rem;
    height: 55rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 100rem;
  }

  @media only screen and (max-width: 64em) {
    width: 90rem;
    height: 50rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 85rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 80rem;
  }

  @media only screen and (max-width: 50em) {
    width: 70rem;
    height: 45rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 65rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 60rem;
    height: 40rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 55rem;
  }

  @media only screen and (max-width: 31.25em) {
    width: 50rem;
    height: 35rem;
  }

  @media only screen and (max-width: 30em) {
    width: 45rem;
    height: 30rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 40rem;
    height: 30rem;
  }

  @media only screen and (max-width: 25em) {
    width: 35rem;
    height: 25rem;
  }

  @media only screen and (max-width: 24.375em) {
    width: 34rem;
    height: 24rem;
  }

  @media only screen and (max-width: 23.75em) {
    width: 33rem;
    height: 22rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 32rem;
    height: 21rem;
  }

  @media only screen and (max-width: 22.5em) {
    width: 30rem;
    height: 19rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 28rem;
    height: 17rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 30rem;
    height: 20rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 25rem;
    height: 15rem;
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

  @media only screen and (max-width: 76.25em) {
    width: 90rem;
    height: 45rem;
  }

  @media only screen and (max-width: 69.375em) {
    width: 90rem;
  }

  @media only screen and (max-width: 64em) {
    width: 80rem;
    height: 40rem;
  }

  @media only screen and (max-width: 59.375em) {
    width: 75rem;
  }

  @media only screen and (max-width: 57.5em) {
    width: 70rem;
  }

  @media only screen and (max-width: 50em) {
    width: 60rem;
    height: 35rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 55rem;
  }

  @media only screen and (max-width: 37.5em) {
    width: 50rem;
    height: 30rem;
  }

  @media only screen and (max-width: 34.375em) {
    width: 45rem;
  }

  @media only screen and (max-width: 30em) {
    width: 40rem;
    height: 25rem;
  }

  @media only screen and (max-width: 26.875em) {
    width: 35rem;
    height: 25rem;
  }

  @media only screen and (max-width: 25em) {
    width: 30rem;
    height: 20rem;
  }

  @media only screen and (max-width: 24.375em) {
    width: 29rem;
    height: 19rem;
  }

  @media only screen and (max-width: 23.75em) {
    width: 28rem;
    height: 17rem;
  }

  @media only screen and (max-width: 23.4375em) {
    width: 27rem;
    height: 16rem;
  }

  @media only screen and (max-width: 22.5em) {
    width: 25rem;
    height: 14rem;
  }

  @media only screen and (max-width: 21.5em) {
    width: 23rem;
    height: 12rem;
  }

  @media only screen and (max-width: 20.625em) {
    width: 25rem;
    height: 15rem;
  }

  @media only screen and (max-width: 18.75em) {
    width: 23rem;
    height: 13rem;
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
